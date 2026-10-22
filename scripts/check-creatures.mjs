// Prüft die Urzeit-Steckbriefe: doppelte IDs, Zeitspannen, und ob die Wikipedia-Artikel existieren.
// Aufruf: node scripts/check-creatures.mjs
import { readdir } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

const dir = 'src/content/creatures';
const list = [];
for (const f of await readdir(dir)) {
  if (!f.endsWith('.ts') || f === 'types.ts' || f === 'index.ts') continue;
  const mod = await import(pathToFileURL(`${dir}/${f}`).href);
  for (const v of Object.values(mod)) if (Array.isArray(v)) list.push(...v.map((c) => ({ ...c, file: f })));
}

const problems = [];
const ids = new Set();
for (const c of list) {
  if (ids.has(c.id)) problems.push(`${c.id}: doppelte ID`);
  ids.add(c.id);
  if (!(c.from > c.to)) problems.push(`${c.id}: from (${c.from}) muss größer als to (${c.to}) sein`);
  if (c.facts.de.length !== c.facts.en.length) problems.push(`${c.id}: unterschiedlich viele Fakten DE/EN`);
}

// Wikipedia: bis zu 50 Titel pro Anfrage; Weiterleitungen gelten als vorhanden
for (const lang of ['de', 'en']) {
  const titles = list.map((c) => c.wiki[lang]);
  for (let i = 0; i < titles.length; i += 50) {
    const chunk = titles.slice(i, i + 50);
    const url = `https://${lang}.wikipedia.org/w/api.php?action=query&format=json&redirects=1&titles=${encodeURIComponent(chunk.join('|'))}`;
    const json = await (await fetch(url, { headers: { 'User-Agent': 'GaiaHistoria/0.2 (check script)' } })).json();
    for (const p of Object.values(json.query.pages)) {
      if ('missing' in p) {
        const c = list.find((x) => x.wiki[lang] === p.title || x.wiki[lang].replace(/_/g, ' ') === p.title);
        problems.push(`${c?.id ?? p.title}: ${lang}.wikipedia „${p.title}“ fehlt (${c?.file})`);
      }
    }
  }
}

console.log(`${list.length} Steckbriefe geprüft`);
console.log(problems.length ? problems.join('\n') : 'alles in Ordnung');
