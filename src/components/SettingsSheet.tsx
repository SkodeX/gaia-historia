import { useEffect } from 'react';
import { X } from 'lucide-react';
import { useI18n } from '../i18n';
import { useSettings, type Settings } from '../state/settings';

const SOURCES = [
  ['Cao et al. 2024 – Earth\'s tectonic and plate boundary evolution over 1.8 billion years (GPlates, CC BY 4.0)', 'https://doi.org/10.5281/zenodo.11536686'],
  ['International Chronostratigraphic Chart (ICS)', 'https://stratigraphy.org/chart'],
  ['Scotese et al. 2021 – Phanerozoic paleotemperatures', 'https://doi.org/10.1016/j.earscirev.2021.103503'],
  ['Foster, Royer & Lunt 2017 – Future climate forcing potentially without precedent', 'https://doi.org/10.1038/ncomms14845'],
  ['Haq 2014; Haq & Schutter 2008 – Meeresspiegel / sea level', 'https://doi.org/10.1126/science.1161648'],
  ['PAGES 2k Consortium 2019; HadCRUT5; NOAA Mauna Loa', 'https://gml.noaa.gov/ccgg/trends/'],
] as const;

export function SettingsSheet({ onClose }: { onClose: () => void }) {
  const { t, lang } = useI18n();
  const { settings, update } = useSettings();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const toggle = (key: keyof Settings, label: string, hint?: string) => (
    <label className="toggle">
      <span>
        {label}
        {hint && <small>{hint}</small>}
      </span>
      <input type="checkbox" checked={Boolean(settings[key])} onChange={(e) => update({ [key]: e.target.checked })} />
    </label>
  );

  return (
    <>
      <div className="sheet-backdrop" onClick={onClose} />
      <section className="sheet" role="dialog" aria-label={t('settings.title')}>
        <header className="sheet-head">
          <h2>{t('settings.title')}</h2>
          <button className="icon-btn" onClick={onClose} aria-label={t('panel.close')}>
            <X size={18} />
          </button>
        </header>
        <div className="sheet-body">
          <p className="muted">{t('about.text')}</p>
          <div className="seg">
            <span>{t('settings.lang')}</span>
            <div>
              {(['de', 'en'] as const).map((l) => (
                <button key={l} className={lang === l ? 'active' : ''} onClick={() => update({ lang: l })}>
                  {l === 'de' ? 'Deutsch' : 'English'}
                </button>
              ))}
            </div>
          </div>
          {toggle('showCities', t('settings.cities'), t('settings.citiesHint'))}
          {toggle('showEvents', t('settings.events'))}
          {toggle('showGrid', t('settings.grid'))}
          <h3 className="sources-h">{t('settings.sources')}</h3>
          <ul className="sources">
            {SOURCES.map(([label, href]) => (
              <li key={href}>
                <a href={href} target="_blank" rel="noreferrer">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <p className="muted small">{t('settings.version', { v: __APP_VERSION__ })}</p>
        </div>
      </section>
    </>
  );
}
