// Verbreitungsgebiete der heutigen Arten aus GBIF-Sichtungen (Dichtekarten der GBIF Maps API).
// Je Art zwei 512-px-Kacheln (EPSG:4326, Zoom 0), zusammengefasst auf ein 2°-Raster.
// Zoo-Tiere (LIVING_SPECIMEN) und Fossilien zählen nicht. Ausgestorbene Arten nutzen nur ihre kuratierten Kreise.
// Ausgabe: public/data/species.json  { "<id>": [lon, lat, Gewicht, …] }
import { readdir, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { PNG } from 'pngjs';

const CELL = 2; // Grad
const BASIS = ['HUMAN_OBSERVATION', 'MACHINE_OBSERVATION', 'PRESERVED_SPECIMEN', 'OCCURRENCE', 'MATERIAL_SAMPLE']
  .map((b) => `basisOfRecord=${b}`)
  .join('&');

async function loadSpecies() {
  const dir = 'src/content/species';
  const list = [];
  for (const f of await readdir(dir)) {
    if (!f.endsWith('.ts') || f === 'types.ts' || f === 'index.ts') continue;
    const mod = await import(pathToFileURL(`${dir}/${f}`).href);
    for (const v of Object.values(mod)) if (Array.isArray(v)) list.push(...v);
  }
  return list;
}

async function taxonKey(name) {
  const r = await (await fetch(`https://api.gbif.org/v1/species/match?name=${encodeURIComponent(name)}`)).json();
  return r.matchType !== 'NONE' && r.usageKey ? r.usageKey : null;
}

async function densityCells(key) {
  const cells = new Map();
  for (const x of [0, 1]) {
    const url = `https://api.gbif.org/v2/map/occurrence/density/0/${x}/0@1x.png?srs=EPSG:4326&taxonKey=${key}&${BASIS}`;
    const res = await fetch(url);
    if (res.status === 204) continue; // keine Daten in dieser Hälfte
    if (!res.ok) throw new Error(`GBIF-Karte ${key}/${x}: ${res.status}`);
    const png = PNG.sync.read(Buffer.from(await res.arrayBuffer()));
    const deg = 180 / png.width;
    for (let py = 0; py < png.height; py++) {
      for (let px = 0; px < png.width; px++) {
        if (png.data[(py * png.width + px) * 4 + 3] === 0) continue;
        const lon = -180 + x * 180 + (px + 0.5) * deg;
        const lat = 90 - (py + 0.5) * deg;
        const k = `${Math.floor(lon / CELL)},${Math.floor(lat / CELL)}`;
        cells.set(k, (cells.get(k) ?? 0) + 1);
      }
    }
  }
  // Einzelne, abgelegene Bildpunkte sind meist Irrgäste oder Fehler
  const out = [];
  for (const [k, n] of cells) {
    const [cx, cy] = k.split(',').map(Number);
    let neighbours = 0;
    for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) if ((dx || dy) && cells.has(`${cx + dx},${cy + dy}`)) neighbours++;
    if (n < 2 && neighbours === 0) continue;
    out.push(Math.round((cx + 0.5) * CELL), Math.round((cy + 0.5) * CELL), Math.min(9, n));
  }
  return out;
}

const species = await loadSpecies();
const result = {};
const queue = species.filter((s) => s.status !== 'EX' && !s.extinct);
let done = 0;
async function worker() {
  for (let s = queue.shift(); s; s = queue.shift()) {
    try {
      const key = await taxonKey(s.gbif ?? s.sci);
      if (!key) {
        console.warn(`  ! ${s.id}: GBIF kennt „${s.gbif ?? s.sci}“ nicht`);
        continue;
      }
      const cells = await densityCells(key);
      if (cells.length) result[s.id] = cells;
      else console.warn(`  ! ${s.id}: keine Sichtungen`);
    } catch (e) {
      console.warn(`  ! ${s.id}: ${e.message}`);
    }
    if (++done % 25 === 0) console.log(`  ${done} Arten …`);
  }
}
await Promise.all(Array.from({ length: 6 }, worker));

const json = JSON.stringify({ source: 'GBIF.org occurrence density maps', date: new Date().toISOString().slice(0, 10), cell: CELL, ranges: result });
await writeFile('public/data/species.json', json);
console.log(`species.json: ${(json.length / 1024).toFixed(0)} KB, ${Object.keys(result).length} von ${species.length} Arten mit Sichtungen`);
