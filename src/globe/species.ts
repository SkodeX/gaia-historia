// Verbreitungsgebiete heutiger Arten: GBIF-Rasterzellen (scripts/build-species.mjs) plus kuratierte Kreise.
import type { Species } from '../content/species';
import type { GlowPoint } from './Globe';

interface RangeData {
  cell: number;
  ranges: Record<string, number[]>;
}

let loading: Promise<RangeData> | null = null;

export function loadRanges(): Promise<RangeData> {
  if (!loading) {
    loading = fetch(`${import.meta.env.BASE_URL}data/species.json`).then((r) => {
      if (!r.ok) throw new Error(`species.json: ${r.status}`);
      return r.json();
    });
    loading.catch(() => {
      loading = null;
    });
  }
  return loading;
}

const RAD = Math.PI / 180;

/** Punkte auf einem 2°-Raster innerhalb eines Kreises (Großkreisabstand) */
function circleCells(lat: number, lon: number, km: number): [number, number][] {
  const out: [number, number][] = [];
  const r = km / 6371; // Bogenmaß
  const dLat = r / RAD;
  for (let la = Math.ceil((lat - dLat) / 2) * 2; la <= lat + dLat; la += 2) {
    if (la < -89 || la > 89) continue;
    const dLon = Math.min(180, dLat / Math.max(0.15, Math.cos(la * RAD)));
    for (let lo = Math.ceil((lon - dLon) / 2) * 2; lo <= lon + dLon; lo += 2) {
      const c = Math.sin(lat * RAD) * Math.sin(la * RAD) + Math.cos(lat * RAD) * Math.cos(la * RAD) * Math.cos((lo - lon) * RAD);
      if (Math.acos(Math.min(1, c)) <= r) out.push([((lo + 540) % 360) - 180, la]);
    }
  }
  // Kleine Gebiete (Inseln, einzelne Flüsse) wenigstens als ein Fleck
  if (!out.length) out.push([lon, lat]);
  return out;
}

/** Leuchtflecken für eine Art */
export function speciesArea(s: Species, data: RangeData | null, color: string): GlowPoint[] {
  const pts: GlowPoint[] = [];
  const seen = new Set<string>();
  const cells = data?.ranges[s.id];
  if (cells) {
    for (let i = 0; i < cells.length; i += 3) {
      seen.add(`${cells[i]},${cells[i + 1]}`);
      pts.push({ lon: cells[i], lat: cells[i + 1], color, size: 26 + cells[i + 2] * 2 });
    }
  }
  for (const [lat, lon, km] of s.range ?? []) {
    for (const [lo, la] of circleCells(lat, lon, km)) {
      const k = `${Math.round(lo)},${Math.round(la)}`;
      if (seen.has(k)) continue;
      seen.add(k);
      pts.push({ lon: lo, lat: la, color, size: km < 150 ? 22 : 30 });
    }
  }
  return pts;
}
