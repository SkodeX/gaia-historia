// Prüft die Arten-Steckbriefe: IDs, Wikipedia-Titel (DE/EN), Urzeit-Verwandte und
// gleicht den Rote-Liste-Status mit der Taxobox der englischen Wikipedia ab.
// Aufruf: node scripts/check-species.mjs
import { readdir } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

async function load(dir) {
  const list = [];
  for (const f of await readdir(dir)) {
    if (!f.endsWith('.ts') || f === 'types.ts' || f === 'index.ts') continue;
    const mod = await import(pathToFileURL(`${dir}/${f}`).href);
    for (const v of Object.values(mod)) if (Array.isArray(v)) list.push(...v.map((x) => ({ ...x, file: f })));
  }
  return list;
}

const species = await load('src/content/species');
const creatureIds = new Set((await load('src/content/creatures')).map((c) => c.id));
const problems = [];
const notes = [];
const ids = new Set();
for (const s of species) {
  if (ids.has(s.id)) problems.push(`${s.id}: doppelte ID`);
  ids.add(s.id);
  for (const r of s.relatives ?? []) if (!creatureIds.has(r)) problems.push(`${s.id}: unbekannter Urzeit-Verwandter „${r}“`);
  if (s.status === 'EX' && s.extinct === undefined) problems.push(`${s.id}: Status ${s.status} ohne Aussterbejahr`);
  if (s.extinct !== undefined && !s.range?.length) problems.push(`${s.id}: ausgestorben, aber ohne range`);
  for (const k of ['facts', 'threats', 'help']) if (s[k].de.length !== s[k].en.length) problems.push(`${s.id}: ${k} DE/EN ungleich lang`);
}

const UA = { headers: { 'User-Agent': 'GaiaHistoria/0.3 (check script)' } };
for (const lang of ['de', 'en']) {
  for (let i = 0; i < species.length; i += 50) {
    const chunk = species.slice(i, i + 50);
    const url = `https://${lang}.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&redirects=1&prop=revisions&rvprop=content&rvslots=main&titles=${encodeURIComponent(chunk.map((s) => s.wiki[lang]).join('|'))}`;
    const json = await (await fetch(url, UA)).json();
    const redirects = new Map((json.query.redirects ?? []).map((r) => [r.to, r.from]));
    const normalized = new Map((json.query.normalized ?? []).map((r) => [r.to, r.from]));
    for (const p of json.query.pages) {
      const original = redirects.get(p.title) ?? p.title;
      const asked = normalized.get(original) ?? original;
      const s = chunk.find((x) => x.wiki[lang] === asked || x.wiki[lang].replace(/_/g, ' ') === asked);
      if (p.missing) {
        problems.push(`${s?.id ?? asked}: ${lang}.wikipedia „${asked}“ fehlt (${s?.file})`);
        continue;
      }
      if (lang !== 'en' || !s) continue;
      const text = p.revisions?.[0]?.slots?.main?.content ?? '';
      const m = /\|\s*status\s*=\s*([A-Z]{2})\b/.exec(text);
      if (!m) notes.push(`${s.id}: kein Status in der en-Taxobox (eingetragen: ${s.status})`);
      else if (m[1] !== s.status) problems.push(`${s.id}: Status ${s.status}, en.wikipedia sagt ${m[1]}`);
    }
  }
}

console.log(`${species.length} Arten geprüft`);
console.log(problems.length ? problems.join('\n') : 'keine Fehler');
if (notes.length) console.log(`\nHinweise:\n${notes.join('\n')}`);
