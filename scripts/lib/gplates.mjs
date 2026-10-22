// Gemeinsame Helfer für GPlates-Modelle: Download (mit Cache), GPML lesen, Orte einer Platte zuordnen.
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { unzipSync, gunzipSync, strFromU8 } from 'fflate';
import { geoArea, geoContains } from 'd3-geo';

export const MODEL = process.env.PLATE_MODEL ?? 'cao2024';
const BASE = `https://repo.gplates.org/webdav/pmm/${MODEL}`;
const CACHE = `.cache/${MODEL}`;

export async function download(name) {
  const file = `${CACHE}/${name}.zip`;
  if (!existsSync(file)) {
    const res = await fetch(`${BASE}/${name}.zip`);
    if (!res.ok) throw new Error(`${name}: HTTP ${res.status}`);
    await mkdir(CACHE, { recursive: true });
    await writeFile(file, Buffer.from(await res.arrayBuffer()));
  }
  return unzipSync(new Uint8Array(await readFile(file)));
}

export const text = (files, ext) =>
  Object.entries(files)
    .filter(([n]) => n.endsWith(ext))
    .map(([, data]) => (ext.endsWith('z') ? strFromU8(gunzipSync(data)) : strFromU8(data)));

// GPML liegt je nach Modell gepackt (.gpmlz) oder als Text (.gpml) vor
export const gpml = (files) => [...text(files, '.gpmlz'), ...text(files, '.gpml')];

// ---------- GPML ----------
const timeValue = (s, fallback) => {
  if (!s) return fallback;
  if (s.includes('distantPast')) return 99999;
  if (s.includes('distantFuture')) return -1;
  const v = Number(s);
  return Number.isFinite(v) ? v : fallback;
};

export function parseGpml(xml) {
  const features = [];
  for (const chunk of xml.split('<gml:featureMember>').slice(1)) {
    const plate = Number(/<gpml:reconstructionPlateId>[\s\S]*?<gpml:value>(\d+)<\/gpml:value>/.exec(chunk)?.[1]);
    const begin = timeValue(/<gml:begin>[\s\S]*?<gml:timePosition[^>]*>([^<]+)</.exec(chunk)?.[1], 99999);
    const end = timeValue(/<gml:end>[\s\S]*?<gml:timePosition[^>]*>([^<]+)</.exec(chunk)?.[1], -1);
    const rings = [];
    // Nur Außenringe – Löcher (Seen) sind für den Globus unwichtig
    const exteriorRe = /<gml:exterior>[\s\S]*?<gml:posList[^>]*>([^<]+)</g;
    let m;
    while ((m = exteriorRe.exec(chunk))) {
      const nums = m[1].trim().split(/\s+/).map(Number);
      const ring = [];
      for (let i = 0; i + 1 < nums.length; i += 2) ring.push([nums[i + 1], nums[i]]); // GPML: lat lon
      rings.push(ring);
    }
    if (Number.isFinite(plate) && rings.length) features.push({ plate, begin, end, rings });
  }
  return features;
}


/** Ordnet heutigen Koordinaten die tektonische Platte zu (statische Polygone, schnell dank Bounding-Box) */
export class PlateLocator {
  static async load() {
    return new PlateLocator(parseGpml(gpml(await download('StaticPolygons')).join('\n')));
  }

  constructor(features) {
    this.polys = [];
    for (const f of features) {
      if (f.end > 0) continue; // nur Polygone, die es heute noch gibt
      for (const ring of f.rings) {
        let poly = { type: 'Polygon', coordinates: [ring] };
        if (geoArea(poly) > 2 * Math.PI) poly = { type: 'Polygon', coordinates: [[...ring].reverse()] };
        const lons = ring.map((p) => p[0]);
        const lats = ring.map((p) => p[1]);
        const minLon = Math.min(...lons);
        const maxLon = Math.max(...lons);
        // Über die Datumsgrenze oder einen Pol reichende Polygone immer prüfen
        const wide = maxLon - minLon > 180;
        this.polys.push({ poly, plate: f.plate, begin: f.begin, wide, minLon, maxLon, minLat: Math.min(...lats), maxLat: Math.max(...lats) });
      }
    }
  }

  /** [Platte, ältestes Alter] oder null. Bei mehreren Treffern gewinnt das am längsten bestehende Polygon. */
  locate(lon, lat) {
    let best = null;
    for (const p of this.polys) {
      if (!p.wide && (lon < p.minLon || lon > p.maxLon || lat < p.minLat || lat > p.maxLat)) continue;
      if (best && p.begin <= best.begin) continue;
      if (geoContains(p.poly, [lon, lat])) best = p;
    }
    return best ? [best.plate, best.begin] : null;
  }
}
