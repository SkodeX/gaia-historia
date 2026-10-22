import { useState } from 'react';
import { Globe2, PawPrint, Settings2, Users } from 'lucide-react';
import { useI18n } from './i18n';
import { useSettings } from './state/settings';
import { navigate, useRoute } from './lib/router';
import { EarthView } from './views/EarthView';
import { SettingsSheet } from './components/SettingsSheet';

const MODES = [
  { id: 'erde', key: 'mode.earth', icon: Globe2, ready: true },
  { id: 'tierwelt', key: 'mode.life', icon: PawPrint, ready: false },
  { id: 'menschen', key: 'mode.humans', icon: Users, ready: false },
] as const;

export default function App() {
  const { t } = useI18n();
  const { settings, update } = useSettings();
  const route = useRoute();
  const [showSettings, setShowSettings] = useState(false);
  const [soon, setSoon] = useState<string | null>(null);
  const current = MODES.find((m) => route.path === `/${m.id}`)?.id ?? 'erde';

  return (
    <div className="app">
      <header className="topbar">
        <a className="brand" href="#/erde" aria-label="Gaia Historia">
          <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="" width={30} height={30} />
          <span className="brand-text">
            <strong>Gaia Historia</strong>
            <small>{t('app.tagline')}</small>
          </span>
        </a>
        <nav className="modes" aria-label="Modus">
          {MODES.map((m) => (
            <button
              key={m.id}
              className={`mode ${current === m.id ? 'active' : ''}`}
              onClick={() => (m.ready ? navigate(`/${m.id}`) : setSoon(t(m.key)))}
              aria-current={current === m.id ? 'page' : undefined}
            >
              <m.icon size={16} />
              <span>{t(m.key)}</span>
              {!m.ready && <em>{t('mode.soon')}</em>}
            </button>
          ))}
        </nav>
        <div className="top-actions">
          <button className="lang-btn" onClick={() => update({ lang: settings.lang === 'de' ? 'en' : 'de' })} aria-label={t('settings.lang')}>
            {settings.lang === 'de' ? 'EN' : 'DE'}
          </button>
          <button className="icon-btn" onClick={() => setShowSettings(true)} aria-label={t('settings.title')}>
            <Settings2 size={19} />
          </button>
        </div>
      </header>

      <EarthView />

      {soon && (
        <div className="toast" role="status" onClick={() => setSoon(null)}>
          {t('mode.soonText', { mode: soon })}
        </div>
      )}
      {showSettings && <SettingsSheet onClose={() => setShowSettings(false)} />}
    </div>
  );
}
