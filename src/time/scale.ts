// Zeitregler: Position 0…1 ↔ Zeit in Mio. Jahren vor heute (Ma).
// Abschnittsweise Skala, damit die Schwerpunkte (Dino-Zeit, Neuzeit 1000–heute) viel Platz bekommen.

export const NOW_YEAR = new Date().getFullYear();

/** Kalenderjahr → Ma */
export const yearToMa = (year: number) => (NOW_YEAR - year) / 1e6;
/** Ma → Kalenderjahr (negativ = v. Chr.) */
export const maToYear = (ma: number) => NOW_YEAR - ma * 1e6;

interface Segment {
  from: number; // Ma (älter)
  to: number; // Ma (jünger)
  p0: number;
  p1: number;
  log?: boolean;
}

const Y1000 = yearToMa(1000);

export const SEGMENTS: Segment[] = [
  { from: 4600, to: 1800, p0: 0, p1: 0.1 },
  { from: 1800, to: 541, p0: 0.1, p1: 0.23 },
  { from: 541, to: 252, p0: 0.23, p1: 0.35 },
  { from: 252, to: 66, p0: 0.35, p1: 0.57 }, // Schwerpunkt Dinos
  { from: 66, to: 2.58, p0: 0.57, p1: 0.66 },
  { from: 2.58, to: 0.0117, p0: 0.66, p1: 0.72, log: true },
  { from: 0.0117, to: Y1000, p0: 0.72, p1: 0.76, log: true },
  { from: Y1000, to: 0, p0: 0.76, p1: 1 }, // Schwerpunkt Neuzeit
];

export const MAX_MA = 4600;

export function posToMa(p: number): number {
  const pp = Math.min(1, Math.max(0, p));
  const s = SEGMENTS.find((x) => pp <= x.p1) ?? SEGMENTS[SEGMENTS.length - 1];
  const f = (pp - s.p0) / (s.p1 - s.p0);
  if (s.log) return Math.exp(Math.log(s.from) + (Math.log(s.to) - Math.log(s.from)) * f);
  return s.from + (s.to - s.from) * f;
}

export function maToPos(ma: number): number {
  const m = Math.min(MAX_MA, Math.max(0, ma));
  const s = SEGMENTS.find((x) => m >= x.to) ?? SEGMENTS[SEGMENTS.length - 1];
  const f = s.log ? (Math.log(m) - Math.log(s.from)) / (Math.log(s.to) - Math.log(s.from)) : (m - s.from) / (s.to - s.from);
  return s.p0 + (s.p1 - s.p0) * f;
}

/** Ist die Zeit im Bereich der menschlichen Geschichte (Jahreszahlen statt Jahre vor heute)? */
export const isHistoric = (ma: number) => ma <= 0.012;

/** Sprungmarken für den Regler */
export const JUMPS = [
  { id: 'origin', ma: 4540 },
  { id: 'life', ma: 3700 },
  { id: 'cambrian', ma: 538.8 },
  { id: 'pangaea', ma: 300 },
  { id: 'dinos', ma: 150 },
  { id: 'impact', ma: 66 },
  { id: 'iceage', ma: 0.021 },
  { id: 'modern', ma: yearToMa(1500) },
  { id: 'today', ma: 0 },
] as const;
