import { useEffect, useMemo, useState, type CSSProperties } from 'react';
import { ChevronDown, ChevronUp, Clock, ExternalLink, MapPin, Search, X } from 'lucide-react';
import { useI18n } from '../i18n';
import { CREATURES, DIET, GROUPS, HABITAT, REGION, contemporaries, groupInfo, isAlive, type Creature, type CreatureGroup } from '../content/creatures';
import { wikiImage, type WikiImage } from '../lib/wiki';
import { formatMa, formatNumber } from '../time/format';
import { AgeTab } from './InfoPanel';
import type { Lang } from '../state/settings';
import { MODERN_MA, type Species } from '../content/species';
import { ModernTab, SpeciesCard } from './SpeciesViews';
import { NOW_YEAR, maToYear } from '../time/scale';

type Tab = 'alive' | 'lexicon' | 'age';

export interface PickedFossil {
  genus: string;
  eag: number;
  lag: number;
  lon0: number;
  lat0: number;
  count: number;
}

interface Props {
  ma: number;
  siteCount: number;
  generaCount: number;
  selected: Creature | null;
  fossil: PickedFossil | null;
  onSelect: (c: Creature | null) => void;
  onFossilClose: () => void;
  onJump: (ma: number) => void;
  onShowSites: (c: Creature) => void;
  hasSites: (c: Creature) => boolean;
  species: Species | null;
  onSelectSpecies: (s: Species | null) => void;
}

export function LifePanel(props: Props) {
  const { t } = useI18n();
  const { ma, selected, fossil, species } = props;
  const modern = ma <= MODERN_MA;
  const [tab, setTab] = useState<Tab>('alive');
  const [open, setOpen] = useState(() => window.innerWidth > 760);
  useEffect(() => {
    if (selected || fossil || species) setOpen(true);
  }, [selected, fossil, species]);

  return (
    <aside className={`info ${open ? 'open' : 'closed'}`}>
      <div className="info-tabs" role="tablist">
        {(['alive', 'lexicon', 'age'] as Tab[]).map((k) => (
          <button
            key={k}
            role="tab"
            aria-selected={tab === k && open}
            className={`info-tab ${tab === k && open && !selected && !fossil && !species ? 'active' : ''}`}
            onClick={() => {
              setTab(k);
              setOpen(true);
              props.onSelect(null);
              props.onFossilClose();
              props.onSelectSpecies(null);
            }}
          >
            {k === 'alive' && modern ? t('life.tab.today') : t(`life.tab.${k}`)}
          </button>
        ))}
        <button className="icon-btn info-toggle" onClick={() => setOpen(!open)} aria-label={open ? t('panel.close') : t('panel.open')}>
          {open ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
        </button>
      </div>
      {open && (
        <div className="info-body">
          {species ? (
            <SpeciesCard s={species} onClose={() => props.onSelectSpecies(null)} onCreature={props.onSelect} />
          ) : selected ? (
            <CreatureCard c={selected} {...props} />
          ) : fossil ? (
            <FossilCard f={fossil} onClose={props.onFossilClose} onSelect={props.onSelect} />
          ) : tab === 'alive' ? (
            modern ? <ModernTab year={Math.round(maToYear(ma))} onSelect={props.onSelectSpecies} /> : <AliveTab {...props} />
          ) : tab === 'lexicon' ? (
            <Lexicon onSelect={props.onSelect} onSelectSpecies={props.onSelectSpecies} startToday={modern} />
          ) : (
            <AgeTab ma={ma} />
          )}
        </div>
      )}
    </aside>
  );
}

function AliveTab({ ma, siteCount, generaCount, onSelect }: Props) {
  const { t, lang } = useI18n();
  const alive = CREATURES.filter((c) => isAlive(c, ma));
  return (
    <div className="alive">
      <p className="alive-stats">
        <strong>{formatNumber(siteCount, lang, 0)}</strong> {t('life.sites')} · <strong>{formatNumber(generaCount, lang, 0)}</strong> {t('life.genera')}
      </p>
      {alive.length === 0 ? (
        <p className="muted">{t('life.none')}</p>
      ) : (
        GROUPS.filter((g) => alive.some((c) => c.group === g.id)).map((g) => (
          <section key={g.id}>
            <h4 className="events-h" style={{ color: g.color }}>
              {g.name[lang]}
            </h4>
            <CreatureList list={alive.filter((c) => c.group === g.id)} lang={lang} onSelect={onSelect} />
          </section>
        ))
      )}
      <p className="muted small">{t('life.hint')}</p>
    </div>
  );
}

function Lexicon({ onSelect, onSelectSpecies, startToday }: { onSelect: (c: Creature) => void; onSelectSpecies: (s: Species) => void; startToday: boolean }) {
  const { t, lang } = useI18n();
  const [today, setToday] = useState(startToday);
  const [q, setQ] = useState('');
  const [group, setGroup] = useState<CreatureGroup | null>(null);
  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return CREATURES.filter(
      (c) => (!group || c.group === group) && (!s || c.name[lang].toLowerCase().includes(s) || c.genus.toLowerCase().includes(s) || c.meaning?.[lang].toLowerCase().includes(s)),
    );
  }, [q, group, lang]);
  const toggle = (
    <div className="seg-toggle">
      <button className={!today ? 'active' : ''} onClick={() => setToday(false)}>
        {t('life.lexPre')}
      </button>
      <button className={today ? 'active' : ''} onClick={() => setToday(true)}>
        {t('life.lexToday')}
      </button>
    </div>
  );
  if (today)
    return (
      <div className="lexicon">
        {toggle}
        <ModernTab year={NOW_YEAR} onSelect={onSelectSpecies} search />
      </div>
    );
  return (
    <div className="lexicon">
      {toggle}
      <label className="search">
        <Search size={15} />
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t('life.search')} />
      </label>
      <div className="group-chips">
        <button className={!group ? 'active' : ''} onClick={() => setGroup(null)}>
          {t('life.all')} ({CREATURES.length})
        </button>
        {GROUPS.map((g) => (
          <button key={g.id} className={group === g.id ? 'active' : ''} style={{ '--c': g.color } as CSSProperties} onClick={() => setGroup(group === g.id ? null : g.id)}>
            {g.name[lang]}
          </button>
        ))}
      </div>
      <CreatureList list={list} lang={lang} onSelect={onSelect} showTime />
    </div>
  );
}

function CreatureList({ list, lang, onSelect, showTime }: { list: Creature[]; lang: Lang; onSelect: (c: Creature) => void; showTime?: boolean }) {
  return (
    <ul className="creature-list">
      {list.map((c) => (
        <li key={c.id}>
          <button onClick={() => onSelect(c)}>
            <span className="dot" style={{ background: groupInfo(c.group).color }} />
            <span className="creature-main">
              <span className="creature-name">{c.name[lang]}</span>
              <span className="creature-teaser">{c.teaser[lang]}</span>
            </span>
            {showTime && <span className="event-time">{formatMa(c.from, lang, { short: true })}</span>}
          </button>
        </li>
      ))}
    </ul>
  );
}

export const fmtLen = (m: number, lang: Lang) => (m < 1 ? `${formatNumber(m * 100, lang, 0)} cm` : `${formatNumber(m, lang, 1)} m`);
export const fmtWeight = (kg: number, lang: Lang) =>
  kg >= 1000 ? `${formatNumber(kg / 1000, lang, kg >= 10000 ? 0 : 1)} t` : kg < 1 ? `${formatNumber(kg * 1000, lang, 0)} g` : `${formatNumber(kg, lang, 0)} kg`;

function CreatureCard({ c, ma, onSelect, onJump, onShowSites, hasSites }: { c: Creature } & Props) {
  const { t, lang } = useI18n();
  const g = groupInfo(c.group);
  const mates = useMemo(() => contemporaries(c), [c]);
  const alive = isAlive(c, ma);
  return (
    <article className="creature-card" style={{ '--c': g.color } as CSSProperties}>
      <header>
        <span className="badge" style={{ background: g.color, color: '#111' }}>
          {g.name[lang]}
        </span>
        <button className="icon-btn" onClick={() => onSelect(null)} aria-label={t('panel.close')}>
          <X size={18} />
        </button>
      </header>
      <h3>{c.name[lang]}</h3>
      <p className="creature-sub">
        <i>{c.genus}</i>
        {c.meaning && <> · „{c.meaning[lang]}“</>}
      </p>
      <WikiPicture title={c.wiki[lang]} lang={lang} alt={c.name[lang]} />
      <p className="creature-teaser-big">{c.teaser[lang]}</p>

      <dl className="stats">
        <div>
          <dt>{t('life.when')}</dt>
          <dd>
            {formatMa(c.from, lang, { short: true })} – {formatMa(c.to, lang, { short: true })}
          </dd>
        </div>
        <div>
          <dt>{c.group === 'pterosaur' ? t('life.span') : t('life.length')}</dt>
          <dd>{fmtLen(c.length, lang)}</dd>
        </div>
        {c.weight !== undefined && (
          <div>
            <dt>{t('life.weight')}</dt>
            <dd>{fmtWeight(c.weight, lang)}</dd>
          </div>
        )}
        <div>
          <dt>{t('life.diet')}</dt>
          <dd>{DIET[c.diet][lang]}</dd>
        </div>
        <div>
          <dt>{t('life.habitat')}</dt>
          <dd>{HABITAT[c.habitat][lang]}</dd>
        </div>
        <div>
          <dt>{t('life.regions')}</dt>
          <dd>{c.regions.map((r) => REGION[r][lang]).join(', ')}</dd>
        </div>
      </dl>

      <SizeCompare silId={c.id} length={c.length} taxon={c.pbdb ?? c.genus} />

      <h4 className="facts-h">{t('life.facts')}</h4>
      <ul className="facts">
        {c.facts[lang].map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      <div className="event-actions">
        {!alive && (
          <button className="btn primary" onClick={() => onJump((c.from + c.to) / 2)}>
            <Clock size={15} /> {t('life.jump')}
          </button>
        )}
        {hasSites(c) && (
          <button className="btn" onClick={() => onShowSites(c)}>
            <MapPin size={15} /> {t('life.sitesBtn')}
          </button>
        )}
        <a className="btn" href={`https://${lang}.wikipedia.org/wiki/${encodeURIComponent(c.wiki[lang].replace(/ /g, '_'))}`} target="_blank" rel="noreferrer">
          Wikipedia <ExternalLink size={14} />
        </a>
      </div>

      {mates.length > 0 && (
        <>
          <h4 className="facts-h">{t('life.mates')}</h4>
          <div className="mates">
            {mates.map((m) => (
              <button key={m.id} onClick={() => onSelect(m)} style={{ '--c': groupInfo(m.group).color } as CSSProperties}>
                {m.name[lang]}
              </button>
            ))}
          </div>
        </>
      )}
    </article>
  );
}

export function WikiPicture({ title, lang, alt }: { title: string; lang: Lang; alt: string }) {
  const { t } = useI18n();
  const [img, setImg] = useState<WikiImage | null | undefined>(undefined);
  useEffect(() => {
    let live = true;
    setImg(undefined);
    wikiImage(title, lang).then((i) => {
      if (live) setImg(i);
    });
    return () => {
      live = false;
    };
  }, [title, lang]);
  if (img === null) return null;
  return (
    <figure className="wiki-pic">
      {img ? <img src={img.src} alt={alt} loading="lazy" /> : <div className="wiki-pic-ph" />}
      {img && (
        <figcaption>
          {t('life.image')}:{' '}
          <a href={img.page} target="_blank" rel="noreferrer">
            {img.artist}
          </a>
          {img.license && (
            <>
              {' · '}
              {img.licenseUrl ? (
                <a href={img.licenseUrl} target="_blank" rel="noreferrer">
                  {img.license}
                </a>
              ) : (
                img.license
              )}
            </>
          )}
        </figcaption>
      )}
    </figure>
  );
}

interface SilhouetteInfo {
  taxon: string;
  by: string;
  license: string;
  page: string;
  aspect: number;
}

let silhouettes: Promise<Record<string, SilhouetteInfo>> | null = null;
const loadSilhouettes = () =>
  (silhouettes ??= fetch(`${import.meta.env.BASE_URL}data/silhouettes/index.json`)
    .then((r) => (r.ok ? r.json() : {}))
    .catch(() => ({})));

/** Größenvergleich: Silhouette des Tiers neben einem 1,8 m großen Menschen */
export function SizeCompare({ silId, length, taxon }: { silId: string; length: number; taxon: string }) {
  const { t, lang } = useI18n();
  const [index, setIndex] = useState<Record<string, SilhouetteInfo> | null>(null);
  useEffect(() => {
    loadSilhouettes().then(setIndex);
  }, []);
  const s = index?.[silId];
  const human = index?.human;
  if (!index || !s) return null;
  const base = `${import.meta.env.BASE_URL}data/silhouettes/`;
  const humanH = 1.8;
  const humanW = humanH * (human?.aspect ?? 0.35);
  // Die längere Seite der Silhouette entspricht der angegebenen Länge (Seitenansicht oder stehendes Tier)
  const animalW = s.aspect >= 1 ? length : length * s.aspect;
  const animalH = s.aspect >= 1 ? length / s.aspect : length;
  // Maßstab: beides passt in 100 % Breite und 140 px Höhe
  const W = 300;
  const H = 140;
  const scale = Math.min((W - 12) / (humanW + animalW + 0.15 * Math.max(humanW, animalW)), H / Math.max(humanH, animalH));
  const box = (w: number, h: number) => ({ width: `${w * scale}px`, height: `${h * scale}px` });
  return (
    <figure className="size-compare">
      <div className="size-stage" style={{ height: `${H}px` }}>
        {human && <span className="sil human" style={{ ...box(humanW, humanH), maskImage: `url(${base}human.svg)`, WebkitMaskImage: `url(${base}human.svg)` }} />}
        <span className="sil animal" style={{ ...box(animalW, animalH), maskImage: `url(${base}${silId}.svg)`, WebkitMaskImage: `url(${base}${silId}.svg)` }} />
      </div>
      <figcaption>
        {t('life.compare', { len: fmtLen(length, lang) })} ·{' '}
        <a href={s.page} target="_blank" rel="noreferrer">
          {t('life.silhouette')}{s.taxon !== taxon && <> ({t('life.relative')} <i>{s.taxon}</i>)</>}: {s.by}
        </a>
      </figcaption>
    </figure>
  );
}

function FossilCard({ f, onClose, onSelect }: { f: PickedFossil; onClose: () => void; onSelect: (c: Creature) => void }) {
  const { t, lang } = useI18n();
  const star = CREATURES.find((c) => (c.pbdb ?? c.genus) === f.genus);
  return (
    <article className="event-card">
      <header>
        <span className="badge">{t('life.find')}</span>
        <button className="icon-btn" onClick={onClose} aria-label={t('panel.close')}>
          <X size={18} />
        </button>
      </header>
      <h3>
        <i>{f.genus}</i>
      </h3>
      <p className="event-when">
        {formatMa(f.eag, lang, { short: true })} – {formatMa(f.lag, lang, { short: true })}
      </p>
      <p>{t('life.findText', { lat: f.lat0.toFixed(1), lon: f.lon0.toFixed(1) })}</p>
      {f.count > 1 && <p className="muted small">{t('life.moreHere', { n: f.count - 1 })}</p>}
      <div className="event-actions">
        {star && (
          <button className="btn primary" onClick={() => onSelect(star)}>
            {t('life.profile')}
          </button>
        )}
        <a className="btn" href={`https://paleobiodb.org/classic/checkTaxonInfo?taxon_name=${encodeURIComponent(f.genus)}`} target="_blank" rel="noreferrer">
          PBDB <ExternalLink size={14} />
        </a>
        <a className="btn" href={`https://${lang}.wikipedia.org/wiki/${encodeURIComponent(f.genus)}`} target="_blank" rel="noreferrer">
          Wikipedia <ExternalLink size={14} />
        </a>
      </div>
    </article>
  );
}
