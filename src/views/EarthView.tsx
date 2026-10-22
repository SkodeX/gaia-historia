import { useCallback, useEffect, useRef, useState } from 'react';
import { useI18n } from '../i18n';
import { useSettings } from '../state/settings';
import { TimeBar } from '../components/TimeBar';
import { InfoPanel } from '../components/InfoPanel';
import { LifePanel, type PickedFossil } from '../components/LifePanel';
import { Globe, type Marker } from '../globe/Globe';
import { loadPlateData, reconstructPoint, type PlateData } from '../globe/data';
import { atmosphereColor, paintEarth, type Stage } from '../globe/paint';
import { CAT_COLORS, EVENTS, type EarthEvent } from '../content/events';
import { CITIES } from '../content/places';
import geoPoints from '../content/geo-points.json';
import { maToPos, maToYear, posToMa, yearToMa } from '../time/scale';
import { MODERN_MA, REALM, SPECIES, STATUS, aliveIn, type Species } from '../content/species';
import { loadRanges, speciesArea } from '../globe/species';
import { fossilsAt, loadFossils, siteAt, sitesOfGenus, type FossilData, type FossilSite } from '../globe/fossils';
import { CREATURES, groupInfo, isAlive, type Creature } from '../content/creatures';

export type Mode = 'earth' | 'life';

const FOSSIL_COLORS = ['#ffb46b', '#6fc3ff', '#d7a8ff', '#7ee0a1'];

const POINTS = geoPoints.points as unknown as Record<string, [number, number]>;

function readTimeFromHash(): number {
  const q = new URLSearchParams(window.location.hash.split('?')[1] ?? '');
  const v = Number(q.get('t'));
  return q.has('t') && Number.isFinite(v) ? Math.min(4600, Math.max(0, v)) : 150;
}

export function EarthView({ mode }: { mode: Mode }) {
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
  // Tierwelt
  const [fossils, setFossils] = useState<FossilData | null>(null);
  const [creature, setCreature] = useState<Creature | null>(null);
  const [picked, setPicked] = useState<PickedFossil | null>(null);
  const [highlight, setHighlight] = useState<number | null>(null);
  const [stats, setStats] = useState({ sites: 0, genera: 0 });
  const sitesRef = useRef<FossilSite[]>([]);
  // Heutige Arten
  const [species, setSpecies] = useState<Species | null>(null);
  const [ranges, setRanges] = useState<Awaited<ReturnType<typeof loadRanges>> | null>(null);
  const modern = ma <= MODERN_MA;

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

  useEffect(() => {
    if (mode === 'life' && !fossils) loadFossils().then(setFossils, () => setFailed(true));
  }, [mode, fossils]);
  useEffect(() => {
    if (mode === 'life' && modern && !ranges) loadRanges().then(setRanges, () => undefined);
  }, [mode, modern, ranges]);

  // Verbreitungsgebiet der gewählten Art leuchten lassen
  useEffect(() => {
    const globe = globeRef.current;
    if (!globe) return;
    const year = Math.round(maToYear(ma));
    if (mode !== 'life' || !species || !modern || !aliveIn(species, year)) {
      globe.setAreas([]);
      return;
    }
    // Fläche nach Lebensraum färben (Meer blau, Land grün) – der Status steht im Abzeichen
    globe.setAreas(speciesArea(species, ranges, REALM[species.realm].color));
  }, [mode, species, ranges, modern, ma]);

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
    if (mode === 'earth' && settings.showEvents && ma <= data.maxAge) {
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
    if (mode === 'life' && fossils && ma <= data.maxAge) {
      const sites = sitesRef.current;
      for (const c of CREATURES) {
        const gi = fossils.stars[c.id];
        if (gi === undefined || !isAlive(c, ma)) continue;
        // Ein passender Fund zur aktuellen Zeit, sonst irgendein Fundort der Gattung
        const hit = sites.find((x) => x.genus === gi);
        let p: [number, number] | null = hit ? [hit.lon, hit.lat] : null;
        if (!p) {
          const any = sitesOfGenus(fossils, gi)[0];
          p = any ? siteAt(fossils, data, any.k, ma) : null;
        }
        if (!p) continue;
        const e = el(`star-${c.id}`, () => {
          const b = document.createElement('button');
          b.className = 'marker star';
          b.innerHTML = '<span class="star-dot"></span><span class="marker-label"></span>';
          return b;
        });
        e.style.setProperty('--c', groupInfo(c.group).color);
        e.querySelector('.marker-label')!.textContent = c.name[lang];
        e.onclick = () => {
          setPicked(null);
          setCreature(c);
        };
        list.push({ id: `star-${c.id}`, lon: p[0], lat: p[1], el: e });
      }
    }
    if (mode === 'life' && modern) {
      const year = Math.round(maToYear(ma));
      for (const sp of SPECIES) {
        if (!aliveIn(sp, year)) continue;
        const e = el(`sp-${sp.id}`, () => {
          const b = document.createElement('button');
          b.className = 'marker species';
          b.innerHTML = '<span class="star-dot"></span><span class="marker-label"></span>';
          return b;
        });
        e.style.setProperty('--c', STATUS[sp.status].color);
        e.classList.toggle('selected', species?.id === sp.id);
        e.querySelector('.marker-label')!.textContent = sp.name[lang];
        e.onclick = () => selectSpeciesRef.current(sp);
        list.push({ id: `sp-${sp.id}`, lon: sp.home[1], lat: sp.home[0], el: e });
      }
    }
    globe.setMarkers(list);
  }, [ma, data, lang, settings.showCities, settings.showEvents, mode, fossils, stats, modern, species]);

  // Fossilfunde als leuchtende Punkte
  useEffect(() => {
    const globe = globeRef.current;
    if (!globe) return;
    if (mode !== 'life' || !fossils || !data || ma > data.maxAge) {
      sitesRef.current = [];
      globe.setPoints([]);
      setStats({ sites: 0, genera: 0 });
      return;
    }
    // Toleranz passend zur Auflösung des Reglers an dieser Stelle
    const p = maToPos(ma);
    const slack = Math.max(0.05, Math.abs(posToMa(Math.max(0, p - 0.003)) - ma));
    const sites = fossilsAt(fossils, data, ma, slack);
    sitesRef.current = sites;
    (window as unknown as { __gaiaSites: FossilSite[] }).__gaiaSites = sites;
    const starGenera = new Set(Object.values(fossils.stars));
    globe.setPoints(
      sites.map((x) => ({
        lon: x.lon,
        lat: x.lat,
        color: x.genus === highlight ? '#fff2c4' : FOSSIL_COLORS[fossils.genusCat[x.genus]] ?? FOSSIL_COLORS[3],
        size: x.genus === highlight ? 22 : starGenera.has(x.genus) ? 11 : 7,
      })),
    );
    setStats({ sites: sites.length, genera: new Set(sites.map((x) => x.genus)).size });
  }, [mode, fossils, data, ma, highlight]);

  // Antippen eines Fundpunkts
  useEffect(() => {
    const globe = globeRef.current;
    if (!globe) return;
    globe.onPick =
      mode === 'life' && fossils
        ? (lon, lat, tol) => {
            const d = (x: FossilSite) => Math.hypot((((x.lon - lon + 540) % 360) - 180) * Math.cos((lat * Math.PI) / 180), x.lat - lat);
            const near = sitesRef.current.filter((x) => d(x) < tol).sort((a, b) => d(a) - d(b));
            if (!near.length) return;
            const x = near[0];
            setCreature(null);
            setPicked({ genus: fossils.genera[x.genus], eag: x.eag, lag: x.lag, lon0: x.lon0, lat0: x.lat0, count: near.length });
          }
        : null;
  }, [mode, fossils]);

  const jump = useCallback((m: number) => setMa(m), []);
  const showSites = useCallback(
    (c: Creature) => {
      if (!fossils || !data) return;
      const gi = fossils.stars[c.id];
      if (gi === undefined) return;
      setHighlight(gi);
      const target = isAlive(c, ma) ? ma : (c.from + c.to) / 2;
      setMa(target);
      const first = sitesOfGenus(fossils, gi)[0];
      const p = first && siteAt(fossils, data, first.k, Math.min(target, data.maxAge));
      if (p) globeRef.current?.flyTo(p[0], p[1]);
    },
    [fossils, data, ma],
  );
  // Art wählen: bei Bedarf in eine Zeit springen, in der sie lebte, und hinfliegen
  const selectSpecies = useCallback(
    (sp: Species | null) => {
      setPicked(null);
      setCreature(null);
      setHighlight(null);
      setSpecies(sp);
      if (!sp) return;
      const year = Math.round(maToYear(ma));
      if (ma > MODERN_MA || !aliveIn(sp, year)) setMa(sp.extinct !== undefined ? yearToMa(Math.max(1000, sp.extinct - 5)) : 0);
      globeRef.current?.flyTo(sp.home[1], sp.home[0]);
    },
    [ma],
  );
  const selectSpeciesRef = useRef(selectSpecies);
  selectSpeciesRef.current = selectSpecies;
  const hasSites = useCallback((c: Creature) => fossils?.stars[c.id] !== undefined, [fossils]);
  const selectCreature = useCallback(
    (c: Creature | null) => {
      setPicked(null);
      setSpecies(null);
      setCreature(c);
      if (!c) setHighlight(null);
      else if (fossils?.stars[c.id] !== undefined) setHighlight(fossils.stars[c.id]);
    },
    [fossils],
  );
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
      {mode === 'earth' ? (
        <InfoPanel ma={ma} selected={selected} onSelect={setSelected} onJump={jump} onLocate={locate} />
      ) : (
        <LifePanel
          ma={ma}
          siteCount={stats.sites}
          generaCount={stats.genera}
          selected={creature}
          fossil={picked}
          onSelect={selectCreature}
          onFossilClose={() => setPicked(null)}
          onJump={jump}
          onShowSites={showSites}
          hasSites={hasSites}
          species={species}
          onSelectSpecies={selectSpecies}
        />
      )}
      <TimeBar ma={ma} onChange={setMa} />
    </div>
  );
}
