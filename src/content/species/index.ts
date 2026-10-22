import type { RedList, Realm, Species, SpeciesGroup, Trend } from './types';
import { SEA_MAMMALS_SHARKS } from './sea-mammals-sharks';
import { SEA_OTHER } from './sea-other';
import { LAND_MAMMALS } from './land-mammals';
import { BIRDS_REPTILES_FRESHWATER } from './birds-reptiles-freshwater';
import { EXTINCT } from './extinct';
import { yearToMa } from '../../time/scale';

export type { Species, RedList } from './types';

export const SPECIES: Species[] = [...SEA_MAMMALS_SHARKS, ...SEA_OTHER, ...LAND_MAMMALS, ...BIRDS_REPTILES_FRESHWATER, ...EXTINCT];

export const speciesById = new Map(SPECIES.map((s) => [s.id, s]));

/** Ab hier (1000 n. Chr.) zeigt die Tierwelt heutige Arten statt Fossilien */
export const MODERN_MA = yearToMa(1000);

/** Farben der IUCN-Roten-Liste (an das dunkle Design angepasst) */
export const STATUS: Record<RedList, { color: string; de: string; en: string }> = {
  EX: { color: '#8a8a8a', de: 'Ausgestorben', en: 'Extinct' },
  EW: { color: '#a07ab8', de: 'In der Natur ausgestorben', en: 'Extinct in the wild' },
  CR: { color: '#ff4a3d', de: 'Vom Aussterben bedroht', en: 'Critically endangered' },
  EN: { color: '#ff9346', de: 'Stark gefährdet', en: 'Endangered' },
  VU: { color: '#ffd43b', de: 'Gefährdet', en: 'Vulnerable' },
  NT: { color: '#c6e04a', de: 'Potenziell gefährdet', en: 'Near threatened' },
  LC: { color: '#6bd17c', de: 'Nicht gefährdet', en: 'Least concern' },
  DD: { color: '#b8b8a8', de: 'Unzureichende Datenlage', en: 'Data deficient' },
};

export const STATUS_ORDER: RedList[] = ['CR', 'EN', 'VU', 'NT', 'LC', 'DD', 'EW', 'EX'];

export const REALM: Record<Realm, { de: string; en: string; color: string }> = {
  sea: { de: 'Meer', en: 'Sea', color: '#6fc3ff' },
  land: { de: 'Land', en: 'Land', color: '#9fd86b' },
  freshwater: { de: 'Süßwasser', en: 'Freshwater', color: '#7ee0c8' },
};

export const SPECIES_GROUP: Record<SpeciesGroup, { de: string; en: string }> = {
  'marine-mammal': { de: 'Meeressäuger', en: 'Marine mammals' },
  'shark-ray': { de: 'Haie & Rochen', en: 'Sharks & rays' },
  'sea-other': { de: 'Weitere Meerestiere', en: 'More sea life' },
  'land-mammal': { de: 'Landsäugetiere', en: 'Land mammals' },
  bird: { de: 'Vögel', en: 'Birds' },
  'reptile-amphibian': { de: 'Reptilien & Amphibien', en: 'Reptiles & amphibians' },
  freshwater: { de: 'Süßwassertiere', en: 'Freshwater life' },
  invertebrate: { de: 'Insekten', en: 'Insects' },
};

export const TREND: Record<Trend, { de: string; en: string; sign: string }> = {
  down: { de: 'abnehmend', en: 'decreasing', sign: '↘' },
  stable: { de: 'stabil', en: 'stable', sign: '→' },
  up: { de: 'zunehmend', en: 'increasing', sign: '↗' },
  unknown: { de: 'unbekannt', en: 'unknown', sign: '?' },
};

/** Lebte die Art im Jahr `year` noch? */
export const aliveIn = (s: Species, year: number) => s.extinct === undefined || s.extinct >= year;
