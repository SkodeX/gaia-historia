// Malt die Erdoberfläche für einen Zeitpunkt in eine Equirectangular-Textur (Breite = 2 × Höhe).
// Ab 1800 Ma: rekonstruierte Küsten. Davor: künstlerische Stadien (Magma-Ozean, Urozean, Kratone).
import { geoEquirectangular, geoGraticule10, geoPath, type GeoPermissibleObjects } from 'd3-geo';
import { iceEdgeLat, sample, SEA, TEMP } from '../content/climate';
import { reconstructCoasts, type PlateData } from './data';

export type Stage = 'magma' | 'schematic' | 'transition' | 'reconstruction';

export function stageAt(ma: number, maxAge: number): Stage {
  if (ma > 4400) return 'magma';
  if (ma > 1900) return 'schematic';
  if (ma > maxAge) return 'transition';
  return 'reconstruction';
}

const smooth = (a: number, b: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

type RGB = [number, number, number];
const hex = (h: string): RGB => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16)) as RGB;
const mix = (a: RGB, b: RGB, f: number): RGB => a.map((v, i) => Math.round(v + (b[i] - v) * f)) as RGB;
const css = (c: RGB, a = 1) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;

// Kleiner deterministischer Zufall, damit die Stadien bei jedem Malen gleich aussehen
function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Farbe des Ozeans: früh grünlich-trüb (eisenreich, ohne Sauerstoff), nach der Sauerstoffkatastrophe blau */
function oceanColors(ma: number): [RGB, RGB] {
  const f = smooth(2600, 2200, ma); // 0 = alt, 1 = blau
  const deep = mix(hex('#1d3a33'), hex('#0a2a55'), f);
  const shallow = mix(hex('#3f6b55'), hex('#1f5f8f'), f);
  return [deep, shallow];
}

/** Farbe der Atmosphäre: Hadaikum glühend, Archaikum orange Methan-Dunst, danach blau */
export function atmosphereColor(ma: number): RGB {
  if (ma > 4400) return mix(hex('#ff9a4a'), hex('#ff5a2a'), smooth(4400, 4540, ma));
  return mix(hex('#e8a25a'), hex('#6fb4ff'), smooth(2600, 2200, ma));
}

/** Landfarbe je Breitengrad: kahl (vor den Landpflanzen) bis bewachsen, mit Wüstengürtel */
function landColor(absLat: number, ma: number, temp: number): RGB {
  const veg = smooth(470, 360, ma);
  const barren = ma > 2500 ? hex('#4d443f') : ma > 541 ? hex('#7d5a46') : hex('#8a6a50');
  const desertWidth = Math.max(0, Math.min(1, (temp - 10) / 14)); // wärmer → breiter Trockengürtel
  let v: RGB;
  if (absLat < 12) v = hex('#2c6a34');
  else if (absLat < 18 + 18 * desertWidth) v = mix(hex('#2c6a34'), hex('#b99b63'), smooth(10, 20, absLat) * (0.4 + 0.6 * desertWidth));
  else if (absLat < 55) v = mix(hex('#b99b63'), hex('#4f7d43'), smooth(18 + 18 * desertWidth, 42, absLat));
  else if (absLat < 70) v = mix(hex('#4f7d43'), hex('#3d5c40'), smooth(55, 65, absLat));
  else v = mix(hex('#3d5c40'), hex('#7c8070'), smooth(68, 78, absLat));
  return mix(barren, v, veg);
}

let noisePattern: { canvas: HTMLCanvasElement } | null = null;
function noiseCanvas(): HTMLCanvasElement {
  if (noisePattern) return noisePattern.canvas;
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 128;
  const ctx = c.getContext('2d')!;
  const img = ctx.createImageData(c.width, c.height);
  const rand = rng(7);
  // Mehrere Oktaven grobes Rauschen für eine leicht fleckige Oberfläche
  const grid = (n: number) => Array.from({ length: (n + 1) * (n / 2 + 1) }, rand);
  const octaves = [8, 16, 32, 64].map((n) => ({ n, g: grid(n) }));
  for (let y = 0; y < c.height; y++) {
    for (let x = 0; x < c.width; x++) {
      let v = 0;
      let amp = 0.5;
      for (const { n, g } of octaves) {
        const fx = (x / c.width) * n;
        const fy = (y / c.height) * (n / 2);
        const ix = Math.floor(fx);
        const iy = Math.floor(fy);
        const tx = fx - ix;
        const ty = fy - iy;
        const w = n + 1;
        const at = (a: number, b: number) => g[Math.min(b, n / 2) * w + (a % w)];
        const top = at(ix, iy) * (1 - tx) + at(ix + 1, iy) * tx;
        const bot = at(ix, iy + 1) * (1 - tx) + at(ix + 1, iy + 1) * tx;
        v += (top * (1 - ty) + bot * ty) * amp;
        amp /= 2;
      }
      const i = (y * c.width + x) * 4;
      const g8 = Math.round(v * 255 * 1.07);
      img.data[i] = img.data[i + 1] = img.data[i + 2] = g8;
      img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  noisePattern = { canvas: c };
  return c;
}

/** Urkontinente (Kratone) für die Zeit vor den Rekonstruktionen: [lon, lat, Radius, entsteht ab Ma] */
const CRATONS: [number, number, number, number][] = (() => {
  const r = rng(42);
  const list: [number, number, number, number][] = [];
  for (let i = 0; i < 26; i++) list.push([r() * 360 - 180, (r() - 0.5) * 120, 4 + r() * 8, 4300 - r() * 1700]);
  return list;
})();

function blobPolygon(lon: number, lat: number, radius: number, seed: number): number[][] {
  const r = rng(seed);
  const n = 28;
  const phases = [r() * 6.28, r() * 6.28, r() * 6.28];
  const ring: number[][] = [];
  for (let i = 0; i <= n; i++) {
    const a = ((i % n) / n) * Math.PI * 2;
    const k = 1 + 0.22 * Math.sin(2 * a + phases[0]) + 0.14 * Math.sin(3 * a + phases[1]) + 0.08 * Math.sin(5 * a + phases[2]);
    const rr = radius * k;
    // Im Uhrzeigersinn (d3-Konvention für Außenringe)
    ring.push([lon - (rr * Math.cos(a)) / Math.max(0.3, Math.cos((lat * Math.PI) / 180)), lat + rr * Math.sin(a)]);
  }
  return ring;
}

function schematicLand(ma: number): number[][][][] {
  const polys: number[][][][] = [];
  CRATONS.forEach(([lon, lat, radius, born], i) => {
    if (ma > born) return;
    const growth = Math.min(1, (born - ma) / 350);
    // Langsames Wandern, damit auch die Frühzeit lebendig wirkt
    const drift = ((4400 - ma) / 2600) * 40 * (i % 2 ? 1 : -1);
    polys.push([blobPolygon(lon + drift, lat * 0.9, radius * (0.25 + 0.75 * growth), i + 1)]);
  });
  return polys;
}

let magmaCache: HTMLCanvasElement | null = null;
function magmaCanvas(w: number, h: number): HTMLCanvasElement {
  if (magmaCache && magmaCache.width === w) return magmaCache;
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d')!;
  ctx.fillStyle = '#2a0904';
  ctx.fillRect(0, 0, w, h);
  ctx.globalAlpha = 0.55;
  ctx.drawImage(noiseCanvas(), 0, 0, w, h);
  ctx.globalAlpha = 1;
  ctx.globalCompositeOperation = 'multiply';
  ctx.fillStyle = '#ff5a1a';
  ctx.fillRect(0, 0, w, h);
  ctx.globalCompositeOperation = 'lighter';
  const r = rng(3);
  for (let i = 0; i < 260; i++) {
    let x = r() * w;
    let y = h * 0.1 + r() * h * 0.8;
    ctx.beginPath();
    ctx.moveTo(x, y);
    for (let k = 0; k < 6; k++) {
      x += (r() - 0.5) * w * 0.05;
      y += (r() - 0.5) * h * 0.05;
      ctx.lineTo(x, y);
    }
    ctx.strokeStyle = `rgba(255,${150 + Math.round(r() * 80)},60,${0.25 + r() * 0.4})`;
    ctx.lineWidth = 1 + r() * 3;
    ctx.shadowColor = '#ffb050';
    ctx.shadowBlur = 8;
    ctx.stroke();
  }
  magmaCache = c;
  return c;
}

export interface PaintOptions {
  grid: boolean;
}

/** Malt die Erde zur Zeit ma. Gibt das verwendete Stadium zurück. */
export function paintEarth(canvas: HTMLCanvasElement, ma: number, data: PlateData | null, opts: PaintOptions): Stage {
  const ctx = canvas.getContext('2d')!;
  const W = canvas.width;
  const H = canvas.height;
  const maxAge = data?.maxAge ?? 1800;
  const stage = stageAt(ma, maxAge);
  const temp = sample(TEMP, ma) ?? 25;
  const projection = geoEquirectangular()
    .scale(W / (2 * Math.PI))
    .translate([W / 2, H / 2])
    .precision(0.6);
  const path = geoPath(projection, ctx);

  ctx.save();
  ctx.globalCompositeOperation = 'source-over';
  ctx.shadowBlur = 0;

  // Ozean
  const [deep, shallow] = oceanColors(ma);
  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, css(mix(deep, hex('#0c1c2c'), 0.35)));
  grad.addColorStop(0.5, css(deep));
  grad.addColorStop(1, css(mix(deep, hex('#0c1c2c'), 0.35)));
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);
  ctx.globalAlpha = 0.18;
  ctx.drawImage(noiseCanvas(), 0, 0, W, H);
  ctx.globalAlpha = 1;

  // Land sammeln
  let land: number[][][][] = [];
  let ghost: number[][][][] = [];
  let ghostAlpha = 0;
  if (stage === 'schematic') land = ma < 4400 ? schematicLand(ma) : [];
  else if (stage === 'transition' && data) {
    // Kratone blenden in die erste Rekonstruktion über
    const f = smooth(1900, maxAge, ma);
    land = schematicLand(ma);
    ghost = reconstructCoasts(data, maxAge);
    ghostAlpha = f;
  } else if (stage === 'reconstruction' && data) land = reconstructCoasts(data, ma);

  const drawLand = (polys: number[][][][], alpha: number) => {
    if (!polys.length || alpha <= 0) return;
    const geo = { type: 'MultiPolygon', coordinates: polys } as GeoPermissibleObjects;
    ctx.globalAlpha = alpha;
    // Flachwasser-Saum um die Küsten
    ctx.save();
    ctx.shadowColor = css(shallow, 0.9);
    ctx.shadowBlur = W / 160;
    ctx.fillStyle = css(shallow);
    ctx.beginPath();
    path(geo);
    ctx.fill();
    ctx.restore();
    const lg = ctx.createLinearGradient(0, 0, 0, H);
    for (let lat = 90; lat >= -90; lat -= 5) lg.addColorStop((90 - lat) / 180, css(landColor(Math.abs(lat), ma, temp)));
    // Niedriger Meeresspiegel (Eiszeiten): Schelfgebiete fallen trocken – angedeutet durch einen breiteren Landrand
    const sea = sample(SEA, ma);
    if (sea !== null && sea < -20) {
      ctx.save();
      ctx.lineJoin = 'round';
      ctx.strokeStyle = lg;
      ctx.lineWidth = (W / 4096) * (-sea / 125) * 16;
      ctx.beginPath();
      path(geo);
      ctx.stroke();
      ctx.restore();
    }
    // Land mit Breitengrad-Farbverlauf
    ctx.save();
    ctx.beginPath();
    path(geo);
    ctx.clip();
    ctx.fillStyle = lg;
    ctx.fillRect(0, 0, W, H);
    ctx.globalCompositeOperation = 'overlay';
    ctx.globalAlpha = alpha * 0.55;
    ctx.drawImage(noiseCanvas(), 0, 0, W, H);
    ctx.restore();
    // Küstenlinie
    ctx.globalAlpha = alpha * 0.5;
    ctx.strokeStyle = 'rgba(255,240,210,0.22)';
    ctx.lineWidth = Math.max(0.6, W / 2600);
    ctx.beginPath();
    path(geo);
    ctx.stroke();
    ctx.globalAlpha = 1;
  };

  drawLand(land, ghost.length ? 1 - ghostAlpha : 1);
  drawLand(ghost, ghostAlpha);

  // Polareis
  const edge = iceEdgeLat(ma);
  if (edge < 90 && stage !== 'magma') {
    const yEdgeN = ((90 - edge) / 180) * H;
    const fade = (4 / 180) * H;
    for (const north of [true, false]) {
      const g = north
        ? ctx.createLinearGradient(0, 0, 0, yEdgeN + fade)
        : ctx.createLinearGradient(0, H, 0, H - yEdgeN - fade);
      g.addColorStop(0, 'rgba(240,248,255,0.95)');
      g.addColorStop(Math.max(0, yEdgeN / (yEdgeN + fade)), 'rgba(230,242,255,0.85)');
      g.addColorStop(1, 'rgba(230,242,255,0)');
      ctx.fillStyle = g;
      if (north) ctx.fillRect(0, 0, W, yEdgeN + fade);
      else ctx.fillRect(0, H - yEdgeN - fade, W, yEdgeN + fade);
    }
  }

  // Magma-Ozean, der beim Abkühlen verblasst
  if (ma > 4300) {
    ctx.globalAlpha = smooth(4300, 4420, ma);
    ctx.drawImage(magmaCanvas(W, H), 0, 0);
    ctx.globalAlpha = 1;
  }

  if (opts.grid) {
    ctx.strokeStyle = 'rgba(255,255,255,0.18)';
    ctx.lineWidth = Math.max(0.5, W / 3000);
    ctx.beginPath();
    path(geoGraticule10());
    ctx.stroke();
  }
  ctx.restore();
  return stage;
}
