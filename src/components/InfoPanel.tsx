import { useEffect, useMemo, useState, type CSSProperties } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, MapPin, Snowflake, X } from 'lucide-react';
import { useI18n } from '../i18n';
import { CAT_COLORS, EVENTS, type EarthEvent } from '../content/events';
import { CO2, SEA, TEMP, iceEdgeLat, sample, uncertain } from '../content/climate';
import { unitsAt } from '../time/geologic';
import { formatMa, formatNumber } from '../time/format';
import { maToPos, posToMa } from '../time/scale';
import type { Lang } from '../state/settings';

type Tab = 'age' | 'climate' | 'events';

export function InfoPanel({
  ma,
  selected,
  onSelect,
  onJump,
  onLocate,
}: {
  ma: number;
  selected: EarthEvent | null;
  onSelect: (e: EarthEvent | null) => void;
  onJump: (ma: number) => void;
  onLocate: (e: EarthEvent) => void;
}) {
  const { t } = useI18n();
  const [tab, setTab] = useState<Tab>('age');
  const [open, setOpen] = useState(() => window.innerWidth > 760);
  // Ein angetipptes Ereignis öffnet das Panel (auf dem Handy ist es sonst eingeklappt)
  useEffect(() => {
    if (selected) setOpen(true);
  }, [selected]);

  return (
    <aside className={`info ${open ? 'open' : 'closed'}`}>
      <div className="info-tabs" role="tablist">
        {(['age', 'climate', 'events'] as Tab[]).map((k) => (
          <button
            key={k}
            role="tab"
            aria-selected={tab === k && open}
            className={`info-tab ${tab === k && open ? 'active' : ''}`}
            onClick={() => {
              setTab(k);
              setOpen(true);
            }}
          >
            {t(`panel.${k}`)}
          </button>
        ))}
        <button className="icon-btn info-toggle" onClick={() => setOpen(!open)} aria-label={open ? t('panel.close') : t('panel.open')}>
          {open ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
        </button>
      </div>
      {open && (
        <div className="info-body">
          {selected ? (
            <EventCard e={selected} ma={ma} onClose={() => onSelect(null)} onJump={onJump} onLocate={onLocate} />
          ) : tab === 'age' ? (
            <AgeTab ma={ma} />
          ) : tab === 'climate' ? (
            <ClimateTab ma={ma} />
          ) : (
            <EventsTab ma={ma} onSelect={onSelect} />
          )}
        </div>
      )}
    </aside>
  );
}

function AgeTab({ ma }: { ma: number }) {
  const { lang } = useI18n();
  const u = unitsAt(ma);
  const main = [u.period, u.era, u.eon].find((x) => x?.text);
  return (
    <div className="age">
      {main && (
        <>
          <h3 className="age-title" style={{ '--c': main.color } as CSSProperties}>
            {main.name[lang]}
          </h3>
          <p className="age-span">
            {formatMa(main.from, lang, { short: true })} – {main.to <= 0 ? formatMa(0, lang) : formatMa(main.to, lang, { short: true })}
          </p>
          <p>{main.text![lang]}</p>
        </>
      )}
      {u.age?.text && (
        <div className="age-sub" style={{ '--c': u.age.color } as CSSProperties}>
          <h4>{u.age.name[lang]}</h4>
          <p>{u.age.text[lang]}</p>
        </div>
      )}
      {u.era?.text && u.era !== main && (
        <div className="age-sub" style={{ '--c': u.era.color } as CSSProperties}>
          <h4>{u.era.name[lang]}</h4>
          <p>{u.era.text[lang]}</p>
        </div>
      )}
    </div>
  );
}

const fmtTemp = (v: number, lang: Lang) => `${formatNumber(v, lang, 1)} °C`;
const fmtCo2 = (v: number, lang: Lang) => `${formatNumber(v >= 1000 ? Math.round(v / 100) * 100 : Math.round(v), lang, 0)} ppm`;
const fmtSea = (v: number, lang: Lang) =>
  Math.abs(v) < 1 ? `${v > 0 ? '+' : ''}${formatNumber(v * 100, lang, 0)} cm` : `${v > 0 ? '+' : ''}${formatNumber(v, lang, 0)} m`;

function ClimateTab({ ma }: { ma: number }) {
  const { t, lang } = useI18n();
  const edge = iceEdgeLat(ma);
  const rows = [
    { key: 'temp', series: TEMP, fmt: fmtTemp, color: '#ff9f6b', log: false },
    { key: 'co2', series: CO2, fmt: fmtCo2, color: '#c58bff', log: true },
    { key: 'sea', series: SEA, fmt: fmtSea, color: '#6fb4ff', log: false },
  ] as const;
  return (
    <div className="climate">
      {rows.map((r) => {
        const v = sample(r.series, ma);
        const today = sample(r.series, 0)!;
        return (
          <div className="climate-row" key={r.key}>
            <div className="climate-head">
              <span className="climate-label">
                {t(`climate.${r.key}`)} <small>{t(`climate.${r.key}Hint`)}</small>
              </span>
              <span className="climate-value" style={{ color: r.color }}>
                {v === null ? t('climate.noData') : r.fmt(v, lang)}
              </span>
            </div>
            <Sparkline series={r.series} ma={ma} color={r.color} log={r.log} />
            <div className="climate-foot">
              <span>{t('climate.today', { value: r.fmt(today, lang) })}</span>
              {v !== null && uncertain(ma) && <span className="badge warn">{t('climate.uncertain')}</span>}
            </div>
          </div>
        );
      })}
      <p className="climate-ice">
        <Snowflake size={15} />
        {edge >= 90 ? t('climate.noIce') : edge <= 5 ? t('climate.snowball') : t('climate.ice', { lat: Math.round(edge) })}
      </p>
      <p className="muted small">{t('climate.note')}</p>
    </div>
  );
}

/** Verlauf über die ganze Erdgeschichte; x-Achse entspricht dem Zeitregler */
function Sparkline({ series, ma, color, log }: { series: [number, number][]; ma: number; color: string; log: boolean }) {
  const W = 300;
  const H = 54;
  const { d, y } = useMemo(() => {
    const pts: [number, number][] = [];
    for (let i = 0; i <= 400; i++) {
      const p = i / 400;
      const v = sample(series, posToMa(p));
      if (v !== null) pts.push([p, log ? Math.log10(Math.max(1, v)) : v]);
    }
    const vals = pts.map((x) => x[1]);
    const lo = Math.min(...vals);
    const hi = Math.max(...vals);
    const y = (v: number) => H - 3 - ((v - lo) / (hi - lo || 1)) * (H - 6);
    const d = pts.map(([p, v], i) => `${i ? 'L' : 'M'}${(p * W).toFixed(1)},${y(v).toFixed(1)}`).join('');
    return { d, y };
  }, [series, log]);
  const v = sample(series, ma);
  const x = maToPos(ma) * W;
  return (
    <svg className="spark" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden>
      <path d={d} fill="none" stroke={color} strokeWidth={1.6} vectorEffect="non-scaling-stroke" opacity={0.9} />
      <line x1={x} x2={x} y1={0} y2={H} stroke="rgba(255,255,255,0.35)" strokeWidth={1} vectorEffect="non-scaling-stroke" />
      {v !== null && <circle cx={x} cy={y(log ? Math.log10(Math.max(1, v)) : v)} r={3.2} fill={color} />}
    </svg>
  );
}

function EventsTab({ ma, onSelect }: { ma: number; onSelect: (e: EarthEvent) => void }) {
  const { t, lang } = useI18n();
  const pos = maToPos(ma);
  const near = EVENTS.filter((e) => Math.abs(maToPos(e.ma) - pos) < 0.03);
  return (
    <div className="events">
      {near.length > 0 && (
        <>
          <h4 className="events-h">{t('events.near')}</h4>
          <EventList list={near} lang={lang} onSelect={onSelect} />
        </>
      )}
      <h4 className="events-h">{t('events.all')}</h4>
      <EventList list={EVENTS} lang={lang} onSelect={onSelect} />
    </div>
  );
}

function EventList({ list, lang, onSelect }: { list: EarthEvent[]; lang: Lang; onSelect: (e: EarthEvent) => void }) {
  return (
    <ul className="event-list">
      {list.map((e) => (
        <li key={e.id}>
          <button onClick={() => onSelect(e)}>
            <span className="dot" style={{ background: CAT_COLORS[e.cat] }} />
            <span className="event-title">{e.title[lang]}</span>
            <span className="event-time">{formatMa(e.ma, lang, { short: true })}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}

function EventCard({
  e,
  ma,
  onClose,
  onJump,
  onLocate,
}: {
  e: EarthEvent;
  ma: number;
  onClose: () => void;
  onJump: (ma: number) => void;
  onLocate: (e: EarthEvent) => void;
}) {
  const { t, lang } = useI18n();
  const here = Math.abs(maToPos(e.ma) - maToPos(ma)) < 0.0015;
  return (
    <article className="event-card">
      <header>
        <span className="badge" style={{ background: CAT_COLORS[e.cat], color: '#111' }}>
          {t(`cat.${e.cat}`)}
        </span>
        <button className="icon-btn" onClick={onClose} aria-label={t('panel.close')}>
          <X size={18} />
        </button>
      </header>
      <h3>{e.title[lang]}</h3>
      <p className="event-when">{formatMa(e.ma, lang)}</p>
      <p>{e.text[lang]}</p>
      <div className="event-actions">
        {!here && (
          <button className="btn primary" onClick={() => onJump(e.ma)}>
            {t('events.jump')}
          </button>
        )}
        {e.place && (
          <button className="btn" onClick={() => onLocate(e)}>
            <MapPin size={15} /> {t('events.where')}
          </button>
        )}
        {e.wiki && (
          <a className="btn" href={`https://${lang}.wikipedia.org/wiki/${encodeURIComponent(e.wiki[lang])}`} target="_blank" rel="noreferrer">
            {t('events.more')} <ExternalLink size={14} />
          </a>
        )}
      </div>
    </article>
  );
}
