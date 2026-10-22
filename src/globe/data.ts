// Lädt die Plattendaten (erzeugt von scripts/build-plates.mjs) und rekonstruiert Küsten und Orte.
import { PlateReconstructor, rotatePoint, type RotationModel } from './plates';

/** [Platte, Beginn Ma, Ende Ma, Ring1 (flach: lon*100, lat*100, …), Ring2, …] */
type CoastFeature = [number, number, number, ...number[][]];

export interface PlateData {
  rec: PlateReconstructor;
  coasts: CoastFeature[];
  maxAge: number;
  /** Ort → [Platte, ältestes Alter] */
  points: Record<string, [number, number]>;
}

let loading: Promise<PlateData> | null = null;

export function loadPlateData(): Promise<PlateData> {
  if (!loading) {
    const base = `${import.meta.env.BASE_URL}data/plates/`;
    const get = (f: string) =>
      fetch(base + f).then((r) => {
        if (!r.ok) throw new Error(`${f}: ${r.status}`);
        return r.json();
      });
    loading = Promise.all([get('rotations.json'), get('coastlines.json'), get('points.json')]).then(
      ([rot, coast, points]: [RotationModel, { features: CoastFeature[]; maxAge: number }, PlateData['points']]) => ({
        rec: new PlateReconstructor(rot),
        coasts: coast.features,
        maxAge: coast.maxAge,
        points,
      }),
    );
    loading.catch(() => {
      loading = null;
    });
  }
  return loading;
}

/** Alle zur Zeit ma sichtbaren Küsten-Polygone an ihrer damaligen Position (GeoJSON-MultiPolygon-Koordinaten) */
export function reconstructCoasts(data: PlateData, ma: number): number[][][][] {
  const polys: number[][][][] = [];
  for (const f of data.coasts) {
    const [plate, begin, end] = f;
    if (ma > begin || ma < end) continue;
    const q = data.rec.rotation(plate, ma);
    if (!q) continue;
    for (let r = 3; r < f.length; r++) {
      const flat = f[r] as number[];
      const ring: number[][] = new Array(flat.length / 2);
      for (let i = 0; i < flat.length; i += 2) ring[i / 2] = rotatePoint(q, flat[i] / 100, flat[i + 1] / 100);
      polys.push([ring]);
    }
  }
  return polys;
}

/** Damalige Position eines heutigen Ortes, oder null, wenn es seine Platte damals noch nicht gab */
export function reconstructPoint(data: PlateData, id: string, lat: number, lon: number, ma: number): [number, number] | null {
  const p = data.points[id];
  if (!p) return null;
  if (ma > p[1]) return null;
  const q = data.rec.rotation(p[0], ma);
  return q ? rotatePoint(q, lon, lat) : null;
}
