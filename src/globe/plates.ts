// Plattentektonik im Browser: rekonstruiert heutige Koordinaten für jede Zeit (Mio. Jahre vor heute)
// aus den Rotationsfolgen des Plattenmodells (Cao et al. 2024) – wie GPlates per Quaternionen-Slerp.

/** [w, x, y, z] */
export type Quat = [number, number, number, number];
/** Rotationsfolgen je bewegter Platte: [[feste Platte, [[t, lat, lon, Winkel], …]], …] */
export type RotationModel = Record<string, [number, [number, number, number, number][]][]>;

const RAD = Math.PI / 180;
const IDENTITY: Quat = [1, 0, 0, 0];

function poleToQuat(lat: number, lon: number, angle: number): Quat {
  const la = lat * RAD;
  const lo = lon * RAD;
  const h = (angle * RAD) / 2;
  const s = Math.sin(h);
  return [Math.cos(h), Math.cos(la) * Math.cos(lo) * s, Math.cos(la) * Math.sin(lo) * s, Math.sin(la) * s];
}

export function mul(a: Quat, b: Quat): Quat {
  return [
    a[0] * b[0] - a[1] * b[1] - a[2] * b[2] - a[3] * b[3],
    a[0] * b[1] + a[1] * b[0] + a[2] * b[3] - a[3] * b[2],
    a[0] * b[2] - a[1] * b[3] + a[2] * b[0] + a[3] * b[1],
    a[0] * b[3] + a[1] * b[2] - a[2] * b[1] + a[3] * b[0],
  ];
}

function slerp(a: Quat, b: Quat, f: number): Quat {
  let dot = a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
  let bb = b;
  if (dot < 0) {
    dot = -dot;
    bb = [-b[0], -b[1], -b[2], -b[3]];
  }
  if (dot > 0.9995) {
    const r: Quat = [0, 1, 2, 3].map((i) => a[i] + (bb[i] - a[i]) * f) as Quat;
    const n = Math.hypot(...r);
    return r.map((v) => v / n) as Quat;
  }
  const th = Math.acos(dot);
  const s = Math.sin(th);
  const wa = Math.sin((1 - f) * th) / s;
  const wb = Math.sin(f * th) / s;
  return [0, 1, 2, 3].map((i) => a[i] * wa + bb[i] * wb) as Quat;
}

export class PlateReconstructor {
  private cacheTime = NaN;
  private cache = new Map<number, Quat | null>();
  private model: RotationModel;

  constructor(model: RotationModel) {
    this.model = model;
  }

  /** Absolute Rotation einer Platte zur Zeit t; null, wenn das Modell die Platte dann nicht kennt */
  rotation(plate: number, t: number): Quat | null {
    if (t !== this.cacheTime) {
      this.cache.clear();
      this.cacheTime = t;
    }
    return this.resolve(plate, t, 0);
  }

  private resolve(plate: number, t: number, depth: number): Quat | null {
    if (plate === 0) return IDENTITY;
    const hit = this.cache.get(plate);
    if (hit !== undefined) return hit;
    let result: Quat | null = null;
    const seqs = this.model[plate];
    if (seqs && depth < 40) {
      for (const [fixed, rows] of seqs) {
        if (t < rows[0][0] || t > rows[rows.length - 1][0]) continue;
        let i = 0;
        while (i < rows.length - 2 && rows[i + 1][0] < t) i++;
        const [t0, la0, lo0, a0] = rows[i];
        const [t1, la1, lo1, a1] = rows[Math.min(i + 1, rows.length - 1)];
        const q0 = poleToQuat(la0, lo0, a0);
        const rel = t1 === t0 ? q0 : slerp(q0, poleToQuat(la1, lo1, a1), (t - t0) / (t1 - t0));
        const parent = this.resolve(fixed, t, depth + 1);
        if (parent) result = mul(parent, rel);
        break;
      }
    }
    this.cache.set(plate, result);
    return result;
  }
}

/** Dreht einen Punkt (lon/lat in Grad) mit Quaternion q, Ergebnis [lon, lat] */
export function rotatePoint(q: Quat, lon: number, lat: number): [number, number] {
  const la = lat * RAD;
  const lo = lon * RAD;
  const vx = Math.cos(la) * Math.cos(lo);
  const vy = Math.cos(la) * Math.sin(lo);
  const vz = Math.sin(la);
  const [w, x, y, z] = q;
  // v' = q v q*  (ausmultipliziert)
  const tx = 2 * (y * vz - z * vy);
  const ty = 2 * (z * vx - x * vz);
  const tz = 2 * (x * vy - y * vx);
  const rx = vx + w * tx + (y * tz - z * ty);
  const ry = vy + w * ty + (z * tx - x * tz);
  const rz = vz + w * tz + (x * ty - y * tx);
  return [Math.atan2(ry, rx) / RAD, Math.asin(Math.max(-1, Math.min(1, rz))) / RAD];
}
