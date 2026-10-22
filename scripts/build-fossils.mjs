// Holt Fossilfunde aus der Paleobiology Database (PBDB, CC BY 4.0) und ordnet sie Platten zu,
// damit der Globus sie wie die Küsten in die damalige Lage zurückrechnen kann.
//   Breite Ebene: alle Dinosaurier (ohne Vögel), Meeresreptilien, Flugsaurier
//   Dazu alle Funde der Urzeit-Stars aus src/content/creatures/*.ts
// Ausgabe: public/data/fossils.json
import { readdir, writeFile, mkdir } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { PlateLocator } from './lib/gplates.mjs';

const API = 'https://paleobiodb.org/data1.2/occs/list.json';
const CATS = ['dino', 'marine', 'pterosaur', 'other'];
const BROAD = [
  ['dino', 'Dinosauria^Aves'],
  ['marine', 'Sauropterygia,Ichthyosauromorpha,Mosasauridae'],
  ['pterosaur', 'Pterosauria'],
];

async function loadCreatures() {
  const dir = 'src/content/creatures';
  const list = [];
  for (const f of await readdir(dir)) {
    if (!f.endsWith('.ts') || f === 'types.ts' || f === 'index.ts') continue;
    const mod = await import(pathToFileURL(`${dir}/${f}`).href);
    for (const v of Object.values(mod)) if (Array.isArray(v)) list.push(...v);
  }
  return list;
}

async function fetchOccs(baseName) {
  const url = `${API}?base_name=${encodeURIComponent(baseName).replace(/%5E/g, '^').replace(/%2C/g, ',')}&show=coords,class&limit=all`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`PBDB ${baseName}: HTTP ${res.status}`);
  const json = await res.json();
  if (json.errors) throw new Error(`PBDB ${baseName}: ${json.errors.join('; ')}`);
  if (json.warnings) console.warn(`  PBDB-Hinweis (${baseName.slice(0, 40)}…): ${json.warnings.join('; ').slice(0, 200)}`);
  return json.records ?? [];
}

const creatures = await loadCreatures();
console.log(`${creatures.length} Urzeit-Stars`);
const starByTaxon = new Map(creatures.map((c) => [(c.pbdb ?? c.genus).toLowerCase(), c]));

const occs = new Map(); // oid → { rec, cat }
for (const [cat, names] of BROAD) {
  const recs = await fetchOccs(names);
  console.log(`  ${cat}: ${recs.length} Funde`);
  for (const r of recs) occs.set(r.oid, { r, cat });
}
const starNames = [...starByTaxon.keys()].map((n) => n[0].toUpperCase() + n.slice(1));
for (let i = 0; i < starNames.length; i += 20) {
  const recs = await fetchOccs(starNames.slice(i, i + 20).join(','));
  for (const r of recs) if (!occs.has(r.oid)) occs.set(r.oid, { r, cat: 'other' });
}
console.log(`  zusammen ${occs.size} Funde`);

const locator = await PlateLocator.load();
const genera = [];
const genusIndex = new Map();
const genusCat = [];
const seen = new Set();
const rows = [];
let unplaced = 0;
for (const { r, cat } of occs.values()) {
  const lon = Number(r.lng);
  const lat = Number(r.lat);
  if (!Number.isFinite(lon) || !Number.isFinite(lat) || !(r.eag > 0)) continue;
  // Gattung: aus der Klassifikation, sonst erstes Wort des Taxonnamens
  const genus = r.gnl ?? (r.rnk <= 5 ? String(r.tna).split(' ')[0] : null);
  if (!genus) continue;
  const key = `${genus}|${Math.round(lat * 2)}|${Math.round(lon * 2)}|${r.eag}|${r.lag}`;
  if (seen.has(key)) continue;
  seen.add(key);
  const plate = locator.locate(lon, lat);
  if (!plate) {
    unplaced++;
    continue;
  }
  let gi = genusIndex.get(genus);
  if (gi === undefined) {
    gi = genera.length;
    genera.push(genus);
    genusIndex.set(genus, gi);
    genusCat.push(CATS.indexOf(cat));
  }
  rows.push(Math.round(lon * 10), Math.round(lat * 10), plate[0], Math.min(9999, Math.round(plate[1])), Math.round(r.eag * 10), Math.round(r.lag * 10), gi);
}

const stars = {};
for (const c of creatures) {
  const gi = genusIndex.get(c.pbdb ?? c.genus);
  if (gi === undefined) console.warn(`  ! keine Funde für ${c.id} (${c.pbdb ?? c.genus})`);
  else stars[c.id] = gi;
}

await mkdir('public/data', { recursive: true });
const json = JSON.stringify({ source: 'Paleobiology Database (paleobiodb.org), CC BY 4.0', date: new Date().toISOString().slice(0, 10), cats: CATS, genera, genusCat, stars, rows });
await writeFile('public/data/fossils.json', json);
console.log(`fossils.json: ${(json.length / 1024).toFixed(0)} KB, ${rows.length / 7} Fundorte, ${genera.length} Gattungen, ${unplaced} ohne Platte`);
