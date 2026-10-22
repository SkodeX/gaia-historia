// Vorschaubild eines Wikipedia-Artikels samt Urheber und Lizenz (Wikimedia Commons). Beides erlaubt CORS.
import type { Lang } from '../state/settings';

export interface WikiImage {
  src: string;
  page: string;
  artist: string;
  license: string;
  licenseUrl?: string;
}

const cache = new Map<string, Promise<WikiImage | null>>();

const stripHtml = (s: string) => {
  const d = document.createElement('div');
  d.innerHTML = s;
  return (d.textContent ?? '').replace(/\s+/g, ' ').trim();
};

export function wikiImage(title: string, lang: Lang): Promise<WikiImage | null> {
  const key = `${lang}:${title}`;
  let p = cache.get(key);
  if (!p) {
    p = (async () => {
      const sum = await fetch(`https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title.replace(/ /g, '_'))}`);
      if (!sum.ok) return null;
      const s = await sum.json();
      // Wikipedia hängt Tracking-Parameter (?utm_…) an – die stören beim Dateinamen
      const original: string | undefined = s.originalimage?.source?.split('?')[0];
      const thumb: string | undefined = s.thumbnail?.source?.split('?')[0];
      if (!original || !thumb) return null;
      // Dateiname aus der Bild-URL: …/commons/a/ab/Datei.jpg oder …/thumb/a/ab/Datei.jpg/320px-…
      const m = /\/(?:commons|[a-z]+)\/(?:thumb\/)?[0-9a-f]\/[0-9a-f]{2}\/([^/]+)/.exec(original);
      const file = m ? decodeURIComponent(m[1]) : null;
      const img: WikiImage = {
        src: thumb.replace(/\/\d+px-/, '/640px-'),
        page: file ? `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file)}` : s.content_urls?.desktop?.page,
        artist: 'Wikimedia Commons',
        license: '',
      };
      if (file) {
        const meta = await fetch(
          `https://commons.wikimedia.org/w/api.php?action=query&titles=File:${encodeURIComponent(file)}&prop=imageinfo&iiprop=extmetadata&format=json&origin=*`,
        ).then((r) => (r.ok ? r.json() : null));
        const info = meta && (Object.values(meta.query?.pages ?? {})[0] as { imageinfo?: { extmetadata?: Record<string, { value: string }> }[] });
        const ext = info?.imageinfo?.[0]?.extmetadata;
        if (ext) {
          img.artist = stripHtml(ext.Artist?.value ?? '') || img.artist;
          img.license = ext.LicenseShortName?.value ?? '';
          img.licenseUrl = ext.LicenseUrl?.value;
        }
      }
      // Kleinere Bilder liefern kein 640px-Vorschaubild – dann das Original-Vorschaubild nehmen
      if ((s.thumbnail?.width ?? 0) < 640 && (s.originalimage?.width ?? 0) <= 640) img.src = original;
      return img;
    })().catch(() => null);
    cache.set(key, p);
  }
  return p;
}
