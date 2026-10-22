import type { Lang } from '../state/settings';
import { maToYear } from './scale';

const nf = (lang: Lang, digits: number) =>
  new Intl.NumberFormat(lang === 'de' ? 'de-DE' : 'en-US', { maximumFractionDigits: digits, minimumFractionDigits: 0 });

/** Ma als lesbare Zeitangabe, z. B. „66 Mio. Jahre“, „4,54 Mrd. Jahre“, „1492 n. Chr.“ */
export function formatMa(ma: number, lang: Lang, opts: { short?: boolean } = {}): string {
  const de = lang === 'de';
  if (ma <= 0.0000005) return de ? 'Heute' : 'Today';
  if (ma >= 1000) return `${nf(lang, 2).format(ma / 1000)} ${de ? 'Mrd. Jahre' : 'billion years'}${opts.short ? '' : de ? ' vor heute' : ' ago'}`;
  if (ma >= 1) return `${nf(lang, ma >= 100 ? 0 : 1).format(ma)} ${de ? 'Mio. Jahre' : 'million years'}${opts.short ? '' : de ? ' vor heute' : ' ago'}`;
  if (ma > 0.012) {
    const years = Math.round((ma * 1e6) / 1000) * 1000;
    return `${nf(lang, 0).format(years)} ${de ? 'Jahre' : 'years'}${opts.short ? '' : de ? ' vor heute' : ' ago'}`;
  }
  return formatYear(Math.round(maToYear(ma)), lang);
}

export function formatYear(year: number, lang: Lang): string {
  const de = lang === 'de';
  if (year <= 0) return `${nf(lang, 0).format(1 - year)} ${de ? 'v. Chr.' : 'BC'}`;
  if (year < 1000) return `${year} ${de ? 'n. Chr.' : 'AD'}`;
  return String(year);
}

export function formatNumber(v: number, lang: Lang, digits = 1): string {
  return nf(lang, digits).format(v);
}
