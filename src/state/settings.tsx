import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';

export type Lang = 'de' | 'en';

export interface Settings {
  lang: Lang;
  /** Heutige Städte auf dem Globus zeigen („Wo lag Berlin damals?“) */
  showCities: boolean;
  /** Ereignis-Markierungen auf dem Globus */
  showEvents: boolean;
  /** Längen- und Breitengrade */
  showGrid: boolean;
}

const KEY = 'gaia.settings.v1';
const defaults: Settings = {
  lang: navigator.language?.startsWith('de') ? 'de' : 'en',
  showCities: true,
  showEvents: true,
  showGrid: false,
};

function load(): Settings {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...defaults, ...JSON.parse(raw) } : defaults;
  } catch {
    return defaults;
  }
}

interface Ctx {
  settings: Settings;
  update: (patch: Partial<Settings>) => void;
}

const SettingsContext = createContext<Ctx | null>(null);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>(load);
  const update = useCallback((patch: Partial<Settings>) => {
    setSettings((prev) => {
      const next = { ...prev, ...patch };
      try {
        localStorage.setItem(KEY, JSON.stringify(next));
      } catch {
        // Privater Modus: Einstellungen gelten dann nur für diese Sitzung
      }
      return next;
    });
  }, []);
  const value = useMemo(() => ({ settings, update }), [settings, update]);
  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export function useSettings(): Ctx {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error('useSettings außerhalb von SettingsProvider');
  return ctx;
}
