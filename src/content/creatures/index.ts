import type { Creature, CreatureGroup, Diet, Habitat, Region } from './types';
import { THEROPODS } from './theropods';
import { HERBIVORES } from './herbivores';
import { SEA_AIR } from './sea-air';
import { BEFORE_AFTER } from './before-after';

export type { Creature, CreatureGroup } from './types';

/** Alle Urzeit-Stars, nach Lebenszeit sortiert (älteste zuerst) */
export const CREATURES: Creature[] = [...BEFORE_AFTER, ...THEROPODS, ...HERBIVORES, ...SEA_AIR].sort((a, b) => b.from - a.from);

export const creatureById = new Map(CREATURES.map((c) => [c.id, c]));

export const GROUPS: { id: CreatureGroup; color: string; name: { de: string; en: string } }[] = [
  { id: 'paleozoic', color: '#7ee0c8', name: { de: 'Vor den Dinos', en: 'Before the dinosaurs' } },
  { id: 'theropod', color: '#ff8a6b', name: { de: 'Raubdinosaurier', en: 'Theropods' } },
  { id: 'sauropod', color: '#c9d86b', name: { de: 'Langhälse', en: 'Sauropods' } },
  { id: 'ornithischian', color: '#ffc46b', name: { de: 'Horn-, Panzer- & Entenschnabeldinos', en: 'Horned, armoured & duck-billed' } },
  { id: 'marine', color: '#6fc3ff', name: { de: 'Meeresreptilien & Meeresriesen', en: 'Marine reptiles & sea giants' } },
  { id: 'pterosaur', color: '#d7a8ff', name: { de: 'Flugsaurier', en: 'Pterosaurs' } },
  { id: 'cenozoic', color: '#f3a6c8', name: { de: 'Nach den Dinos', en: 'After the dinosaurs' } },
];

export const groupInfo = (g: CreatureGroup) => GROUPS.find((x) => x.id === g)!;

export const DIET: Record<Diet, { de: string; en: string }> = {
  carnivore: { de: 'Fleischfresser', en: 'Carnivore' },
  herbivore: { de: 'Pflanzenfresser', en: 'Herbivore' },
  omnivore: { de: 'Allesfresser', en: 'Omnivore' },
  piscivore: { de: 'Fischfresser', en: 'Fish-eater' },
  insectivore: { de: 'Insektenfresser', en: 'Insectivore' },
  filter: { de: 'Filtrierer', en: 'Filter feeder' },
};

export const HABITAT: Record<Habitat, { de: string; en: string }> = {
  land: { de: 'An Land', en: 'On land' },
  sea: { de: 'Im Meer', en: 'In the sea' },
  air: { de: 'In der Luft', en: 'In the air' },
  freshwater: { de: 'Flüsse & Sümpfe', en: 'Rivers & swamps' },
};

export const REGION: Record<Region, { de: string; en: string }> = {
  NA: { de: 'Nordamerika', en: 'North America' },
  SA: { de: 'Südamerika', en: 'South America' },
  EU: { de: 'Europa', en: 'Europe' },
  AF: { de: 'Afrika', en: 'Africa' },
  AS: { de: 'Asien', en: 'Asia' },
  AU: { de: 'Australien', en: 'Australia' },
  AN: { de: 'Antarktis', en: 'Antarctica' },
  OC: { de: 'Meere weltweit', en: 'Oceans worldwide' },
};

export const isAlive = (c: Creature, ma: number) => ma <= c.from && ma >= c.to;

/** Stars, die zeitlich überlappen und im selben Gebiet gefunden wurden */
export function contemporaries(c: Creature): Creature[] {
  return CREATURES.filter(
    (o) =>
      o.id !== c.id &&
      o.from > c.to &&
      o.to < c.from &&
      (o.regions.some((r) => c.regions.includes(r)) || o.regions.includes('OC') || c.regions.includes('OC')),
  );
}
