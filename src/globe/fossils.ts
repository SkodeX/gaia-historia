// Fossilfunde (erzeugt von scripts/build-fossils.mjs): laden und für eine Zeit an die damalige Position rechnen.
import { rotatePoint } from './plates';
import type { PlateData } from './data';

export interface FossilData {
  cats: string[];
  genera: string[];
  genusCat: number[];
  /** Star-ID → Gattungsindex */
  stars: Record<string, number>;
  /** flach, je 7 Werte: lon*10, lat*10, Platte, Platte-besteht-seit, ältestes Alter*10, jüngstes Alter*10, Gattung */
  rows: number[];
}

export interface FossilSite {
  /** Index der Zeile (rows / 7) */
  i: number;
  lon: number;
  lat: number;
  genus: number;
  eag: number;
  lag: number;
  /** heutige Position */
  lon0: number;
  lat0: number;
}

let loading: Promise<FossilData> | null = null;

export function loadFossils(): Promise<FossilData> {
  if (!loading) {
    loading = fetch(`${import.meta.env.BASE_URL}data/fossils.json`).then((r) => {
      if (!r.ok) throw new Error(`fossils.json: ${r.status}`);
      return r.json();
    });
    loading.catch(() => {
      loading = null;
    });
  }
  return loading;
}

/**
 * Funde, die zur Zeit ma passen. Die Altersangaben der Funde sind Spannen (Gesteinsschicht);
 * slack erweitert sie etwas, damit beim Ziehen am Regler nicht alles flackert.
 */
export function fossilsAt(f: FossilData, plates: PlateData, ma: number, slack: number, onlyGenus?: number): FossilSite[] {
  const out: FossilSite[] = [];
  const r = f.rows;
  for (let k = 0; k < r.length; k += 7) {
    const eag = r[k + 4] / 10;
    const lag = r[k + 5] / 10;
    if (ma > eag + slack || ma < lag - slack) continue;
    const genus = r[k + 6];
    if (onlyGenus !== undefined && genus !== onlyGenus) continue;
    if (ma > r[k + 3]) continue;
    const q = plates.rec.rotation(r[k + 2], ma);
    if (!q) continue;
    const lon0 = r[k] / 10;
    const lat0 = r[k + 1] / 10;
    const [lon, lat] = rotatePoint(q, lon0, lat0);
    out.push({ i: k / 7, lon, lat, genus, eag, lag, lon0, lat0 });
  }
  return out;
}

/** Alle Fundorte einer Gattung (unabhängig von der Zeit), mit heutiger Position und Alter */
export function sitesOfGenus(f: FossilData, genus: number) {
  const out: { lon0: number; lat0: number; eag: number; lag: number; k: number }[] = [];
  for (let k = 0; k < f.rows.length; k += 7) {
    if (f.rows[k + 6] === genus) out.push({ lon0: f.rows[k] / 10, lat0: f.rows[k + 1] / 10, eag: f.rows[k + 4] / 10, lag: f.rows[k + 5] / 10, k });
  }
  return out;
}

/** Position eines Fundorts (Zeilenindex k = Vielfaches von 7) zur Zeit ma */
export function siteAt(f: FossilData, plates: PlateData, k: number, ma: number): [number, number] | null {
  if (ma > f.rows[k + 3]) return null;
  const q = plates.rec.rotation(f.rows[k + 2], ma);
  return q ? rotatePoint(q, f.rows[k] / 10, f.rows[k + 1] / 10) : null;
}
