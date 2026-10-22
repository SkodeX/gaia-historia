import { useMemo, useState, type CSSProperties } from 'react';
import { ExternalLink, Search, X } from 'lucide-react';
import { useI18n } from '../i18n';
import { REALM, SPECIES, SPECIES_GROUP, STATUS, STATUS_ORDER, TREND, aliveIn, type RedList, type Species } from '../content/species';
import { creatureById, groupInfo, type Creature } from '../content/creatures';
import { SizeCompare, WikiPicture, fmtLen, fmtWeight } from './LifePanel';
import type { Lang } from '../state/settings';

type RealmFilter = 'all' | 'sea' | 'land' | 'freshwater';

export function StatusBadge({ status, lang }: { status: RedList; lang: Lang }) {
  const s = STATUS[status];
  return (
    <span className="status-badge" style={{ '--c': s.color } as CSSProperties} title={s[lang]}>
      <b>{status}</b> {s[lang]}
    </span>
  );
}

/** Liste der Arten, die im Jahr `year` lebten, mit Filtern nach Lebensraum und Gefährdung */
export function ModernTab({ year, onSelect, search }: { year: number; onSelect: (s: Species) => void; search?: boolean }) {
  const { t, lang } = useI18n();
  const [realm, setRealm] = useState<RealmFilter>('all');
  const [status, setStatus] = useState<RedList | null>(null);
  const [q, setQ] = useState('');
  const { alive, gone } = useMemo(() => {
    const s = q.trim().toLowerCase();
    const match = (x: Species) =>
      (realm === 'all' || x.realm === realm) &&
      (!status || x.status === status) &&
      (!s || x.name[lang].toLowerCase().includes(s) || x.sci.toLowerCase().includes(s));
    const list = SPECIES.filter(match);
    return {
      alive: list.filter((x) => aliveIn(x, year)).sort((a, b) => STATUS_ORDER.indexOf(a.status) - STATUS_ORDER.indexOf(b.status)),
      gone: list.filter((x) => !aliveIn(x, year)).sort((a, b) => (b.extinct ?? 0) - (a.extinct ?? 0)),
    };
  }, [realm, status, q, lang, year]);
  const counts = useMemo(() => {
    const c: Partial<Record<RedList, number>> = {};
    for (const x of SPECIES) if (aliveIn(x, year)) c[x.status] = (c[x.status] ?? 0) + 1;
    return c;
  }, [year]);

  return (
    <div className="modern">
      {search && (
        <label className="search">
          <Search size={15} />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t('life.search')} />
        </label>
      )}
      <div className="group-chips">
        {(['all', 'sea', 'land', 'freshwater'] as RealmFilter[]).map((r) => (
          <button key={r} className={realm === r ? 'active' : ''} style={r === 'all' ? undefined : ({ '--c': REALM[r].color } as CSSProperties)} onClick={() => setRealm(r)}>
            {r === 'all' ? t('life.all') : REALM[r][lang]}
          </button>
        ))}
      </div>
      <div className="status-filter">
        {STATUS_ORDER.filter((s) => counts[s]).map((s) => (
          <button key={s} className={status === s ? 'active' : ''} style={{ '--c': STATUS[s].color } as CSSProperties} onClick={() => setStatus(status === s ? null : s)} title={STATUS[s][lang]}>
            {s} <small>{counts[s]}</small>
          </button>
        ))}
      </div>
      <SpeciesList list={alive} lang={lang} onSelect={onSelect} />
      {gone.length > 0 && (
        <>
          <h4 className="events-h">{t('species.gone')}</h4>
          <SpeciesList list={gone} lang={lang} onSelect={onSelect} />
        </>
      )}
      <p className="muted small">{t('species.hint')}</p>
    </div>
  );
}

function SpeciesList({ list, lang, onSelect }: { list: Species[]; lang: Lang; onSelect: (s: Species) => void }) {
  return (
    <ul className="creature-list">
      {list.map((s) => (
        <li key={s.id}>
          <button onClick={() => onSelect(s)}>
            <span className="dot" style={{ background: STATUS[s.status].color }} />
            <span className="creature-main">
              <span className="creature-name">{s.name[lang]}</span>
              <span className="creature-teaser">{s.teaser[lang]}</span>
            </span>
            <span className="event-time">{s.extinct ? `† ${s.extinct}` : s.status}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}

export function SpeciesCard({
  s,
  onClose,
  onCreature,
}: {
  s: Species;
  onClose: () => void;
  onCreature: (c: Creature) => void;
}) {
  const { t, lang } = useI18n();
  const st = STATUS[s.status];
  const gone = s.extinct !== undefined;
  const relatives = (s.relatives ?? []).map((id) => creatureById.get(id)).filter((c): c is Creature => Boolean(c));
  return (
    <article className="creature-card" style={{ '--c': st.color } as CSSProperties}>
      <header>
        <StatusBadge status={s.status} lang={lang} />
        <button className="icon-btn" onClick={onClose} aria-label={t('panel.close')}>
          <X size={18} />
        </button>
      </header>
      <h3>{s.name[lang]}</h3>
      <p className="creature-sub">
        <i>{s.sci}</i> · {SPECIES_GROUP[s.group][lang]}
      </p>
      <WikiPicture title={s.wiki[lang]} lang={lang} alt={s.name[lang]} />
      <p className="creature-teaser-big">{s.teaser[lang]}</p>

      <dl className="stats">
        <div className="wide">
          <dt>{gone ? t('species.extinctSince') : t('species.population')}</dt>
          <dd>{s.population[lang]}</dd>
        </div>
        {!gone && (
          <div>
            <dt>{t('species.trend')}</dt>
            <dd>
              {TREND[s.trend].sign} {TREND[s.trend][lang]}
            </dd>
          </div>
        )}
        <div>
          <dt>{t('life.habitat')}</dt>
          <dd>{REALM[s.realm][lang]}</dd>
        </div>
        {s.length !== undefined && (
          <div>
            <dt>{t('life.length')}</dt>
            <dd>{fmtLen(s.length, lang)}</dd>
          </div>
        )}
        {s.weight !== undefined && (
          <div>
            <dt>{t('life.weight')}</dt>
            <dd>{fmtWeight(s.weight, lang)}</dd>
          </div>
        )}
      </dl>

      {s.length !== undefined && <SizeCompare silId={`sp-${s.id}`} length={s.length} taxon={s.gbif ?? s.sci} />}

      <h4 className="facts-h">{t('species.facts')}</h4>
      <ul className="facts">
        {s.facts[lang].map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <h4 className="facts-h">{gone ? t('species.whyGone') : t('species.threats')}</h4>
      <ul className="facts threats">
        {s.threats[lang].map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <h4 className="facts-h">{gone ? t('species.lessons') : t('species.help')}</h4>
      <ul className="facts help">
        {s.help[lang].map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      {relatives.length > 0 && (
        <>
          <h4 className="facts-h">{t('species.relatives')}</h4>
          <div className="mates">
            {relatives.map((c) => (
              <button key={c.id} onClick={() => onCreature(c)} style={{ '--c': groupInfo(c.group).color } as CSSProperties}>
                {c.name[lang]}
              </button>
            ))}
          </div>
        </>
      )}

      <div className="event-actions">
        <a className="btn" href={`https://${lang}.wikipedia.org/wiki/${encodeURIComponent(s.wiki[lang].replace(/ /g, '_'))}`} target="_blank" rel="noreferrer">
          Wikipedia <ExternalLink size={14} />
        </a>
        <a className="btn" href={`https://www.gbif.org/species/search?q=${encodeURIComponent(s.gbif ?? s.sci)}`} target="_blank" rel="noreferrer">
          GBIF <ExternalLink size={14} />
        </a>
      </div>
      <p className="muted small">{t('species.rangeNote')}</p>
    </article>
  );
}
