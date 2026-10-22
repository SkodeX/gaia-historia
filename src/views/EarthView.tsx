import { useCallback, useEffect, useRef, useState } from 'react';
import { useI18n } from '../i18n';
import { useSettings } from '../state/settings';
import { TimeBar } from '../components/TimeBar';
import { InfoPanel } from '../components/InfoPanel';
import { Globe, type Marker } from '../globe/Globe';
import { loadPlateData, reconstructPoint, type PlateData } from '../globe/data';
import { atmosphereColor, paintEarth, type Stage } from '../globe/paint';
import { CAT_COLORS, EVENTS, type EarthEvent } from '../content/events';
import { CITIES } from '../content/places';
import geoPoints from '../content/geo-points.json';
import { maToPos } from '../time/scale';

const POINTS = geoPoints.points as unknown as Record<string, [number, number]>;

function readTimeFromHash(): number {
  const q = new URLSearchParams(window.location.hash.split('?')[1] ?? '');
  const v = Number(q.get('t'));
  return q.has('t') && Number.isFinite(v) ? Math.min(4600, Math.max(0, v)) : 150;
}

export function EarthView() {
  const { t, lang } = useI18n();
  const { settings } = useSettings();
  const hostRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<Globe | null>(null);
  const markerEls = useRef(new Map<string, HTMLElement>());
  const [data, setData] = useState<PlateData | null>(null);
  const [failed, setFailed] = useState(false);
  const [ma, setMa] = useState(readTimeFromHash);
  const [stage, setStage] = useState<Stage>('reconstruction');
  const [selected, setSelected] = useState<EarthEvent | null>(null);

  useEffect(() => {
    const globe = new Globe(hostRef.current!);
    globeRef.current = globe;
    (window as unknown as { __gaia: unknown }).__gaia = { globe };
    return () => {
      globe.dispose();
      globeRef.current = null;
    };
  }, []);

  useEffect(() => {
    loadPlateData().then(setData, () => setFailed(true));
  }, []);

  // Höhe des Zeitreglers als CSS-Variable, damit das Info-Panel auf dem Handy direkt darüber sitzt
  const earthRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = earthRef.current!;
    const bar = root.querySelector<HTMLElement>('.timebar');
    if (!bar) return;
    const ro = new ResizeObserver(() => root.style.setProperty('--timebar-h', `${bar.offsetHeight}px`));
    ro.observe(bar);
    return () => ro.disconnect();
  }, []);

  // Neu malen – höchstens einmal pro Bildschirmbild
  const pending = useRef(0);
  useEffect(() => {
    cancelAnimationFrame(pending.current);
    pending.current = requestAnimationFrame(() => {
      const globe = globeRef.current;
      if (!globe) return;
      const s = paintEarth(globe.canvas, ma, data, { grid: settings.showGrid });
      globe.textureUpdated();
      globe.setAtmosphere(atmosphereColor(ma), ma > 4400 ? 1.8 : 1.2);
      globe.setGlow(ma > 4300 ? Math.min(1, (ma - 4300) / 120) : 0);
      setStage(s);
    });
  }, [ma, data, settings.showGrid]);

  // Zeit in der Adresse merken (teilbar), ohne Verlaufseinträge
  useEffect(() => {
    const id = setTimeout(() => {
      const path = window.location.hash.split('?')[0] || '#/erde';
      history.replaceState(null, '', `${path}?t=${+ma.toPrecision(6)}`);
    }, 300);
    return () => clearTimeout(id);
  }, [ma]);

  // Markierungen: Ereignisse in der Nähe der aktuellen Zeit und heutige Städte
  useEffect(() => {
    const globe = globeRef.current;
    if (!globe || !data) return;
    const list: Marker[] = [];
    const el = (id: string, make: () => HTMLElement) => {
      let e = markerEls.current.get(id);
      if (!e) {
        e = make();
        markerEls.current.set(id, e);
      }
      return e;
    };
    const pos = maToPos(ma);
    // Vor den Rekonstruktionen gibt es keine echte Geografie, also auch keine Orte
    if (settings.showEvents && ma <= data.maxAge) {
      for (const ev of EVENTS) {
        if (!ev.place || Math.abs(maToPos(ev.ma) - pos) > 0.012) continue;
        const [lat, lon] = POINTS[ev.place];
        const p = reconstructPoint(data, ev.place, lat, lon, ma);
        if (!p) continue;
        const e = el(`ev-${ev.id}`, () => {
          const b = document.createElement('button');
          b.className = 'marker event';
          b.innerHTML = '<span class="pulse"></span><span class="marker-label"></span>';
          return b;
        });
        e.style.setProperty('--c', CAT_COLORS[ev.cat]);
        e.querySelector('.marker-label')!.textContent = ev.title[lang];
        e.onclick = () => setSelected(ev);
        list.push({ id: `ev-${ev.id}`, lon: p[0], lat: p[1], el: e });
      }
    }
    if (settings.showCities && ma <= data.maxAge) {
      for (const c of CITIES) {
        const [lat, lon] = POINTS[c.id];
        const p = reconstructPoint(data, c.id, lat, lon, ma);
        if (!p) continue;
        const e = el(`city-${c.id}`, () => {
          const s = document.createElement('span');
          s.className = 'marker city';
          s.innerHTML = '<span class="city-dot"></span><span class="marker-label"></span>';
          return s;
        });
        e.querySelector('.marker-label')!.textContent = c.name[lang];
        list.push({ id: `city-${c.id}`, lon: p[0], lat: p[1], el: e });
      }
    }
    globe.setMarkers(list);
  }, [ma, data, lang, settings.showCities, settings.showEvents]);

  const jump = useCallback((m: number) => setMa(m), []);
  const locate = useCallback(
    (ev: EarthEvent) => {
      if (!ev.place || !data) return;
      const [lat, lon] = POINTS[ev.place];
      const target = Math.abs(maToPos(ev.ma) - maToPos(ma)) < 0.0015 ? ma : ev.ma;
      setMa(target);
      const p = target <= data.maxAge ? reconstructPoint(data, ev.place, lat, lon, target) : [lon, lat];
      if (p) globeRef.current?.flyTo(p[0], p[1]);
    },
    [data, ma],
  );

  return (
    <div className="earth" ref={earthRef}>
      <div className="globe-host" ref={hostRef} />
      <div className="globe-note">
        {failed ? t('globe.error') : !data ? t('globe.loading') : stage === 'reconstruction' ? t('globe.reconstruction') : t('globe.schematic')}
      </div>
      <InfoPanel ma={ma} selected={selected} onSelect={setSelected} onJump={jump} onLocate={locate} />
      <TimeBar ma={ma} onChange={setMa} />
    </div>
  );
}
