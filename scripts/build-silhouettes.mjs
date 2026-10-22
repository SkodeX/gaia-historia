// Lädt freie Silhouetten von PhyloPic (phylopic.org) für den Größenvergleich der Urzeit-Stars.
// Nur Bilder mit CC0, Public Domain Mark, CC BY oder CC BY-SA – keine „NC“-Lizenzen.
// Ausgabe: public/data/silhouettes/<id>.svg und public/data/silhouettes/index.json (Urheber, Lizenz, Seitenverhältnis)
import { mkdir, readdir, writeFile, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const API = 'https://api.phylopic.org';
const OUT = 'public/data/silhouettes';
const OK_LICENSE = /publicdomain|licenses\/by\/|licenses\/by-sa\//;
// Ersatz, falls weder Gattung noch der angegebene Verwandte eine Silhouette hat
const GROUP_FALLBACK = {
  theropod: 'Theropoda',
  sauropod: 'Sauropoda',
  ornithischian: 'Ornithischia',
  marine: 'Sauropterygia',
  pterosaur: 'Pterosauria',
  paleozoic: 'Arthropoda',
  cenozoic: 'Mammalia',
};

// Nahe Verwandte für Tiere ohne eigene Silhouette (vor dem Gruppen-Ersatz versucht)
const OVERRIDES = {
  megalodon: ['Carcharodon', 'Lamniformes'],
  livyatan: ['Physeter', 'Physeteroidea'],
  megatherium: ['Megatheriidae', 'Folivora'],
  shantungosaurus: ['Edmontosaurus', 'Hadrosauridae'],
  pliosaurus: ['Pliosauridae', 'Liopleurodon'],
  mosasaurus: ['Mosasauridae', 'Tylosaurus', 'Platecarpus'],
  xiphactinus: ['Ichthyodectiformes', 'Teleostei'],
  eudimorphodon: ['Rhamphorhynchus', 'Dimorphodon'],
  quetzalcoatlus: ['Azhdarchidae', 'Pteranodon'],
  brontosaurus: ['Apatosaurus', 'Diplodocidae'],
  amargasaurus: ['Dicraeosaurus', 'Dicraeosauridae'],
  compsognathus: ['Compsognathidae', 'Sinosauropteryx'],
  gallimimus: ['Ornithomimidae', 'Struthiomimus'],
  oviraptor: ['Oviraptoridae', 'Citipati'],
};

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

const build = (await (await fetch(`${API}/`)).json()).build;

async function findImage(name) {
  const url = `${API}/images?build=${build}&filter_name=${encodeURIComponent(name.toLowerCase())}&embed_items=true&page=0`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const items = (await res.json())._embedded?.items ?? [];
  const usable = items.filter((x) => OK_LICENSE.test(x._links.license?.href ?? '') && x._links.vectorFile?.href);
  // Seitenansicht (breiter als hoch) und genau dieses Taxon bevorzugen – Aufsichten verzerren den Größenvergleich
  const aspect = (x) => {
    const [w, h] = (x._links.vectorFile.sizes ?? '1x1').split('x').map(Number);
    return w / h;
  };
  const exact = (x) => x._links.specificNode?.title?.toLowerCase().startsWith(name.toLowerCase());
  const score = (x) => (wantTall ? aspect(x) < 0.55 : aspect(x) > 1.15) * 2 + exact(x);
  return usable.sort((a, b) => score(b) - score(a))[0] ?? null;
}
let wantTall = false;

const creatures = await loadCreatures();
await mkdir(OUT, { recursive: true });
const indexFile = `${OUT}/index.json`;
const index = existsSync(indexFile) ? JSON.parse(await readFile(indexFile, 'utf8')) : {};
const wanted = [{ id: 'human', names: ['Homo sapiens'] }, ...creatures.map((c) => ({ id: c.id, names: [c.pbdb ?? c.genus, c.silhouette, ...(OVERRIDES[c.id] ?? []), GROUP_FALLBACK[c.group]].filter(Boolean) }))];

for (const w of wanted) {
  if (index[w.id] && existsSync(`${OUT}/${w.id}.svg`)) continue;
  let img = null;
  let used = null;
  wantTall = w.id === 'human';
  for (const n of w.names) {
    img = await findImage(n);
    if (img) {
      used = n;
      break;
    }
  }
  if (!img) {
    console.warn(`  ! keine Silhouette für ${w.id}`);
    continue;
  }
  const svg = await (await fetch(img._links.vectorFile.href)).text();
  const vb = /viewBox="([\d.\s-]+)"/.exec(svg)?.[1].trim().split(/\s+/).map(Number);
  const w2 = vb?.[2] ?? Number(/width="([\d.]+)/.exec(svg)?.[1]);
  const h2 = vb?.[3] ?? Number(/height="([\d.]+)/.exec(svg)?.[1]);
  await writeFile(`${OUT}/${w.id}.svg`, svg);
  index[w.id] = {
    taxon: used,
    by: img.attribution ?? 'PhyloPic',
    license: img._links.license.href,
    page: `https://www.phylopic.org/images/${img.uuid}`,
    aspect: w2 && h2 ? +(w2 / h2).toFixed(3) : 2,
  };
  console.log(`  ${w.id}: ${used} (${index[w.id].by})`);
}
await writeFile(indexFile, JSON.stringify(index, null, 1));
console.log(`${Object.keys(index).length} Silhouetten`);
