// Lädt das Plattenmodell Cao et al. 2024 (GPlates, paläomagnetischer Rahmen, 0–1800 Mio. Jahre) und erzeugt
// kompakte Datenpakete für den Globus:
//   public/data/plates/rotations.json  – Rotationsfolgen je Platte
//   public/data/plates/coastlines.json – vereinfachte heutige Küstenlinien mit Platten-ID
//   public/data/plates/points.json     – Platten-ID für Orte aus src/content/geo-points.json
// Der Browser rechnet daraus jede beliebige Zeit selbst aus (Quaternionen-Slerp).
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { download, gpml, parseGpml, text, PlateLocator } from './lib/gplates.mjs';
import { geoArea } from 'd3-geo';

const OUT = process.env.PLATE_OUT ?? 'public/data/plates';
const TOLERANCE = 0.08; // Grad, Douglas-Peucker
const MIN_EXTENT = 0.35; // Grad – kleinere Inseln fallen weg

// ---------- Rotationen ----------
function parseRotations(sources) {
  const seqs = new Map(); // moving -> [[fixed, [[t, lat, lon, angle], …]], …]
  for (const src of sources) {
    let last = null;
    for (const line of src.split(/\r?\n/)) {
      const m = line.trim().split(/\s+/);
      if (m.length < 6) continue;
      const [moving, t, lat, lon, ang, fixed] = m.slice(0, 6).map(Number);
      if (!Number.isFinite(t) || moving === 999) continue;
      const row = [t, +lat.toFixed(4), +lon.toFixed(4), +ang.toFixed(4)];
      if (last && last.moving === moving && last.fixed === fixed) {
        last.rows.push(row);
      } else {
        last = { moving, fixed, rows: [row] };
        if (!seqs.has(moving)) seqs.set(moving, []);
        seqs.get(moving).push([fixed, last.rows]);
      }
    }
  }
  // Jede Folge nach Zeit sortieren (die beiden Dateien überlappen bei 1000 Ma)
  const out = {};
  for (const [moving, list] of seqs) {
    out[moving] = list.map(([fixed, rows]) => [fixed, rows.sort((a, b) => a[0] - b[0])]);
  }
  return out;
}

// ---------- Vereinfachen ----------
function simplify(points, tol) {
  if (points.length < 4) return points;
  const keep = new Uint8Array(points.length);
  keep[0] = keep[points.length - 1] = 1;
  const stack = [[0, points.length - 1]];
  while (stack.length) {
    const [a, b] = stack.pop();
    const [ax, ay] = points[a];
    const [bx, by] = points[b];
    const dx = bx - ax;
    const dy = by - ay;
    const len = Math.hypot(dx, dy) || 1e-12;
    let maxD = 0;
    let idx = -1;
    for (let i = a + 1; i < b; i++) {
      const d = Math.abs(dy * points[i][0] - dx * points[i][1] + bx * ay - by * ax) / len;
      if (d > maxD) {
        maxD = d;
        idx = i;
      }
    }
    if (maxD > tol && idx > 0) {
      keep[idx] = 1;
      stack.push([a, idx], [idx, b]);
    }
  }
  return points.filter((_, i) => keep[i]);
}

function prepareRing(ring) {
  const lons = ring.map((p) => p[0]);
  const lats = ring.map((p) => p[1]);
  const extent = Math.max(Math.max(...lons) - Math.min(...lons), Math.max(...lats) - Math.min(...lats));
  if (extent < MIN_EXTENT) return null;
  // Geschlossener Ring: am entferntesten Punkt teilen, sonst fallen Anfang und Ende zusammen
  let far = 0;
  let farD = -1;
  ring.forEach(([x, y], i) => {
    const d = (x - ring[0][0]) ** 2 + (y - ring[0][1]) ** 2;
    if (d > farD) [farD, far] = [d, i];
  });
  const halves = [...simplify(ring.slice(0, far + 1), TOLERANCE), ...simplify(ring.slice(far), TOLERANCE).slice(1)];
  let pts = halves.map(([x, y]) => [Math.round(x * 100), Math.round(y * 100)]);
  pts = pts.filter((p, i) => i === 0 || p[0] !== pts[i - 1][0] || p[1] !== pts[i - 1][1]);
  if (pts.length < 4) return null;
  // d3-geo erwartet Außenringe im Uhrzeigersinn – sonst füllt es die ganze restliche Kugel
  const asDeg = pts.map(([x, y]) => [x / 100, y / 100]);
  if (geoArea({ type: 'Polygon', coordinates: [asDeg] }) > 2 * Math.PI) pts.reverse();
  return pts.flat();
}

// ---------- Hauptablauf ----------
const rotFiles = await download('Rotations');
const rotations = parseRotations(text(rotFiles, '.rot'));

const coastFeatures = parseGpml(gpml(await download('Coastlines')).join('\n'));
const coastlines = [];
let pointCount = 0;
for (const f of coastFeatures) {
  const rings = f.rings.map(prepareRing).filter(Boolean);
  if (!rings.length) continue;
  pointCount += rings.reduce((s, r) => s + r.length / 2, 0);
  coastlines.push([f.plate, f.begin, f.end, ...rings]);
}

// Platten-ID für Orte über die statischen Polygone (Punkt-in-Polygon auf der Kugel)
const locator = await PlateLocator.load();
const geoPoints = JSON.parse(await readFile('src/content/geo-points.json', 'utf8')).points;
const points = {};
for (const [id, [lat, lon]] of Object.entries(geoPoints)) {
  points[id] = locator.locate(lon, lat) ?? [0, 99999];
  if (points[id][1] === 99999) console.warn(`  ! ${id}: keine Platte gefunden`);
}

await mkdir(OUT, { recursive: true });
const write = async (name, data) => {
  const json = JSON.stringify(data);
  await writeFile(`${OUT}/${name}`, json);
  console.log(`${name}: ${(json.length / 1024).toFixed(0)} KB`);
};
await write('rotations.json', rotations);
await write('coastlines.json', { model: 'Cao et al. 2024', maxAge: 1800, features: coastlines });
await write('points.json', points);
console.log(`${coastlines.length} Küsten-Features, ${pointCount} Punkte, ${Object.keys(rotations).length} Platten`);
