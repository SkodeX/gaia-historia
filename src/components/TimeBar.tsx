import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { useI18n } from '../i18n';
import { EVENTS, CAT_COLORS } from '../content/events';
import { UNITS, unitsAt } from '../time/geologic';
import { formatMa } from '../time/format';
import { JUMPS, maToPos, posToMa } from '../time/scale';

const STEPS = 100000;
const SPEEDS = [0.008, 0.02, 0.05];

export function TimeBar({ ma, onChange }: { ma: number; onChange: (ma: number) => void }) {
  const { t, lang } = useI18n();
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const pos = maToPos(ma);
  const posRef = useRef(pos);
  posRef.current = pos;

  // Abspielen: konstante Geschwindigkeit auf dem Regler, also mehr Zeit in den Schwerpunkten
  useEffect(() => {
    if (!playing) return;
    let last = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now;
      const next = posRef.current + SPEEDS[speed] * dt;
      if (next >= 1) {
        onChange(0);
        setPlaying(false);
        return;
      }
      onChange(posToMa(next));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing, speed, onChange]);

  const units = unitsAt(ma);
  const bands = useMemo(
    () => ({
      eons: UNITS.filter((u) => u.level === 'eon'),
      periods: UNITS.filter((u) => (u.level === 'period' && u.id !== 'quaternary') || (u.level === 'era' && u.from > 2500) || u.level === 'age'),
    }),
    [],
  );

  const step = (dir: number) => {
    setPlaying(false);
    onChange(posToMa(Math.min(1, Math.max(0, pos + dir * 0.0025))));
  };

  const play = () => {
    if (!playing && pos >= 0.999) onChange(posToMa(0));
    setPlaying(!playing);
  };

  const chips = [units.eon, units.era, units.period, units.age].filter((x, i, arr) => x && arr.indexOf(x) === i);

  return (
    <section className="timebar" aria-label={t('time.slider')}>
      <div className="timebar-head">
        <div className="timebar-readout">
          <div className="timebar-time">{formatMa(ma, lang)}</div>
          <div className="timebar-chips">
            {chips.map((u) => (
              <span key={u!.id} className="unit-chip" style={{ '--c': u!.color } as CSSProperties}>
                {u!.name[lang]}
              </span>
            ))}
          </div>
        </div>
        <div className="timebar-controls">
          <button className="icon-btn" onClick={() => step(-1)} aria-label={t('time.back')}>
            <ChevronLeft size={20} />
          </button>
          <button className="icon-btn play" onClick={play} aria-label={playing ? t('time.pause') : t('time.play')}>
            {playing ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button className="icon-btn" onClick={() => step(1)} aria-label={t('time.forward')}>
            <ChevronRight size={20} />
          </button>
          <button className="speed-btn" onClick={() => setSpeed((speed + 1) % SPEEDS.length)} aria-label={t('time.speed')}>
            {['1×', '2×', '5×'][speed]}
          </button>
        </div>
      </div>

      <div className="track">
        <div className="track-row eons">
          {bands.eons.map((u) => (
            <Band key={u.id} from={u.from} to={u.to} color={u.color} label={u.name[lang]} />
          ))}
        </div>
        <div className="track-row periods">
          {bands.periods.map((u) => (
            <Band key={u.id} from={u.from} to={u.to} color={u.color} label={u.name[lang]} />
          ))}
        </div>
        <div className="track-events">
          {EVENTS.map((e) => (
            <span key={e.id} className="track-dot" style={{ left: `${maToPos(e.ma) * 100}%`, background: CAT_COLORS[e.cat] }} />
          ))}
        </div>
        <div className="track-thumb" style={{ left: `${pos * 100}%` }} />
        <input
          type="range"
          min={0}
          max={STEPS}
          step={1}
          value={Math.round(pos * STEPS)}
          onChange={(ev) => {
            setPlaying(false);
            onChange(posToMa(Number(ev.target.value) / STEPS));
          }}
          aria-label={t('time.slider')}
          aria-valuetext={formatMa(ma, lang)}
        />
      </div>

      <div className="jumps">
        {JUMPS.map((j) => (
          <button
            key={j.id}
            className={`jump ${Math.abs(maToPos(j.ma) - pos) < 0.004 ? 'active' : ''}`}
            onClick={() => {
              setPlaying(false);
              onChange(j.ma);
            }}
          >
            {t(`jump.${j.id}`)}
          </button>
        ))}
      </div>
    </section>
  );
}

function Band({ from, to, color, label }: { from: number; to: number; color: string; label: string }) {
  const left = maToPos(from);
  const width = maToPos(to) - left;
  return (
    <span className="band" style={{ left: `${left * 100}%`, width: `${width * 100}%`, background: color }} title={label}>
      {width > 0.045 && <span className="band-label">{label}</span>}
    </span>
  );
}
