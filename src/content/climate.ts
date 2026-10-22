// Klima & Meer über die Erdgeschichte – grobe Stützpunkte, zwischen denen linear interpoliert wird.
// Näherungswerte nach: Scotese et al. 2021 (globale Mitteltemperatur, Phanerozoikum), Tierney et al. 2020 (Eiszeit),
// PAGES 2k 2019 und HadCRUT5/Copernicus (letzte 1000 Jahre), Foster et al. 2017 und Royer 2014 (CO₂),
// EPICA-Eisbohrkerne und NOAA Mauna Loa (CO₂ jung), Haq 2008/2014, Haq & Schutter 2008, Miller et al. 2005/2020 (Meeresspiegel).
// Vor dem Kambrium sind alle Werte sehr unsicher und nur als Größenordnung gedacht.
import { yearToMa } from '../time/scale';

type Series = [number, number][]; // [Ma, Wert], absteigend nach Alter

const y = yearToMa;

/** Globale Mitteltemperatur in °C */
export const TEMP: Series = [
  [4000, 30], [3000, 28], [2500, 25], [2430, 20], [2400, -15], [2250, -15], [2200, 15], [2000, 22],
  [1800, 20], [1000, 20], [750, 18], [718, -30], [661, -30], [658, 20], [651, -30], [636, -30],
  [634, 30], [600, 18], [580, 14], [560, 20], [540, 22], [520, 26], [500, 28], [480, 26], [460, 22],
  [445, 14], [440, 18], [430, 22], [400, 24], [380, 25], [370, 22], [360, 18], [340, 16], [320, 13],
  [300, 12], [290, 13], [280, 16], [270, 20], [260, 22], [253, 24], [252, 32], [248, 30], [240, 24],
  [220, 26], [201, 24], [190, 22], [175, 22], [160, 21], [145, 22], [120, 23], [100, 25], [94, 28],
  [80, 24], [66, 22], [60, 22], [56.1, 23], [56, 28], [52, 26], [45, 23], [38, 21], [34, 18], [30, 17],
  [23, 17], [16, 19], [12, 17], [5, 16.5], [3, 16], [2.5, 14.5], [1, 13], [0.42, 15], [0.4, 14.5],
  [0.13, 15], [0.115, 13], [0.07, 11], [0.021, 8], [0.0117, 13.5], [0.008, 14], [0.003, 13.9],
  [y(1000), 13.9], [y(1250), 13.85], [y(1450), 13.7], [y(1650), 13.5], [y(1800), 13.6], [y(1816), 13.4],
  [y(1850), 13.7], [y(1900), 13.75], [y(1940), 14.0], [y(1970), 14.0], [y(1990), 14.3], [y(2000), 14.4],
  [y(2010), 14.6], [y(2016), 14.95], [y(2024), 15.3], [0, 15.25],
];

/** CO₂ in der Luft in ppm */
export const CO2: Series = [
  [3500, 50000], [2500, 20000], [2000, 10000], [1000, 5000], [720, 1000], [660, 30000], [636, 100000],
  [600, 5000], [540, 4500], [500, 4500], [450, 3000], [445, 2000], [420, 3000], [400, 2500], [380, 1500],
  [360, 800], [330, 400], [300, 300], [280, 400], [260, 800], [252, 3000], [240, 1500], [220, 1500],
  [200, 2000], [180, 1500], [150, 1200], [120, 1000], [94, 1300], [70, 700], [66, 800], [56.1, 900],
  [56, 1500], [50, 1200], [40, 900], [34, 750], [30, 550], [23, 400], [16, 500], [10, 300], [5, 350],
  [3, 380], [2.5, 270], [1, 250], [0.4, 280], [0.13, 285], [0.021, 185], [0.0117, 260], [0.007, 260],
  [y(1000), 280], [y(1600), 275], [y(1800), 282], [y(1850), 285], [y(1900), 296], [y(1950), 311],
  [y(1960), 317], [y(1980), 339], [y(2000), 370], [y(2010), 390], [y(2020), 414], [y(2024), 424], [0, 428],
];

/** Meeresspiegel in m gegenüber heute (nur ab Kambrium) */
export const SEA: Series = [
  [540, 30], [500, 150], [460, 200], [450, 220], [445, 60], [440, 140], [420, 120], [400, 100],
  [380, 150], [360, 100], [330, 80], [310, 50], [290, 20], [270, 30], [260, 0], [252, -10], [240, 20],
  [220, 30], [200, 0], [180, 60], [160, 100], [145, 120], [120, 140], [94, 250], [80, 200], [66, 120],
  [56, 100], [50, 90], [40, 70], [34, 40], [30, 30], [23, 40], [16, 45], [10, 20], [5, 15], [3, 20],
  [2.5, 0], [1, -20], [0.4, 10], [0.13, 6], [0.021, -125], [0.0117, -55], [0.008, -15], [0.006, -3],
  [0.003, 0], [y(1000), -0.25], [y(1800), -0.25], [y(1900), -0.21], [y(1950), -0.13], [y(2000), -0.075],
  [y(2010), -0.045], [y(2024), -0.01], [0, 0],
];

/** Wert einer Reihe zur Zeit ma; null außerhalb des Datenbereichs */
export function sample(series: Series, ma: number): number | null {
  if (ma > series[0][0]) return null;
  for (let i = 0; i < series.length - 1; i++) {
    const [a, va] = series[i];
    const [b, vb] = series[i + 1];
    if (ma <= a && ma >= b) return a === b ? vb : va + ((vb - va) * (a - ma)) / (a - b);
  }
  return series[series.length - 1][1];
}

/** Gilt der Wert als sehr unsicher (vor dem Kambrium)? */
export const uncertain = (ma: number) => ma > 541;

/** Wie weit reicht das Polareis (Breitengrad des Eisrands)? 90 = kein Eis, 0 = Schneeball */
export function iceEdgeLat(ma: number): number {
  const t = sample(TEMP, ma);
  if (t === null || ma > 3000) return 90;
  return Math.max(0, Math.min(90, 90 - (18 - t) * 4));
}
