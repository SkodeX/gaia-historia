// Geologische Zeitskala nach ICS (International Chronostratigraphic Chart 2023) mit offiziellen Farben.
// Zeiten in Ma; Beschreibungen bewusst kurz und einfach.
import type { Lang } from '../state/settings';
import { yearToMa } from './scale';

export type Level = 'eon' | 'era' | 'period' | 'age';

export interface Unit {
  id: string;
  level: Level;
  from: number;
  to: number;
  color: string;
  name: { de: string; en: string };
  text?: { de: string; en: string };
}

const u = (
  id: string,
  level: Level,
  from: number,
  to: number,
  color: string,
  de: string,
  en: string,
  textDe?: string,
  textEn?: string,
): Unit => ({ id, level, from, to, color, name: { de, en }, text: textDe ? { de: textDe, en: textEn ?? textDe } : undefined });

export const UNITS: Unit[] = [
  // Äonen
  u('hadean', 'eon', 4600, 4031, '#AE027E', 'Hadaikum', 'Hadean',
    'Die Erde entsteht aus Staub und Gestein, ein Riesenzusammenstoß formt den Mond. Die Oberfläche ist zunächst ein Ozean aus Magma, dann kühlt sie ab und erste Meere bilden sich unter einer giftigen Dampf- und Kohlendioxid-Atmosphäre.',
    'Earth forms from dust and rock, and a giant collision creates the Moon. At first the surface is an ocean of magma; then it cools and the first seas form beneath a toxic atmosphere of steam and carbon dioxide.'),
  u('archean', 'eon', 4031, 2500, '#F0047F', 'Archaikum', 'Archean',
    'Kleine Urkontinente (Kratone) tauchen aus einem weltweiten Ozean auf. In der Atmosphäre gibt es noch keinen Sauerstoff, der Himmel war wohl orange-dunstig. Das erste Leben entsteht: Bakterien, später auch Cyanobakterien, die Sauerstoff herstellen.',
    'Small proto-continents (cratons) rise from a global ocean. There is no oxygen in the air yet and the sky was probably an orange haze. The first life appears: bacteria, and later cyanobacteria that produce oxygen.'),
  u('proterozoic', 'eon', 2500, 538.8, '#F73563', 'Proterozoikum', 'Proterozoic',
    'Sauerstoff reichert sich an, komplexe Zellen und erste Mehrzeller entstehen. Superkontinente bilden sich und zerbrechen (Columbia, Rodinia), zweimal friert die Erde fast vollständig zu („Schneeball-Erde“).',
    'Oxygen builds up, and complex cells and the first multicellular life appear. Supercontinents form and break apart (Columbia, Rodinia), and twice the Earth freezes almost completely ("Snowball Earth").'),
  u('phanerozoic', 'eon', 538.8, 0, '#9AD9DD', 'Phanerozoikum', 'Phanerozoic',
    'Das „Zeitalter des sichtbaren Lebens“: Tiere mit Schalen und Skeletten, Pflanzen an Land, Dinosaurier, Säugetiere und schließlich der Mensch.',
    'The "age of visible life": animals with shells and skeletons, plants on land, dinosaurs, mammals and finally humans.'),

  // Ären
  u('eoarchean', 'era', 4031, 3600, '#DA037F', 'Eoarchaikum', 'Eoarchean'),
  u('paleoarchean', 'era', 3600, 3200, '#F4449F', 'Paläoarchaikum', 'Paleoarchean'),
  u('mesoarchean', 'era', 3200, 2800, '#F768A9', 'Mesoarchaikum', 'Mesoarchean'),
  u('neoarchean', 'era', 2800, 2500, '#F99BC1', 'Neoarchaikum', 'Neoarchean'),
  u('paleoproterozoic', 'era', 2500, 1600, '#F74370', 'Paläoproterozoikum', 'Paleoproterozoic'),
  u('mesoproterozoic', 'era', 1600, 1000, '#FDB462', 'Mesoproterozoikum', 'Mesoproterozoic'),
  u('neoproterozoic', 'era', 1000, 538.8, '#FEB342', 'Neoproterozoikum', 'Neoproterozoic'),
  u('paleozoic', 'era', 538.8, 251.902, '#99C08D', 'Paläozoikum (Erdaltertum)', 'Paleozoic',
    'Das Erdaltertum: Leben explodiert im Meer, erobert dann das Land. Am Ende vereinen sich alle Kontinente zu Pangaea.',
    'The age of ancient life: life explodes in the sea and then conquers the land. At the end all continents merge into Pangaea.'),
  u('mesozoic', 'era', 251.902, 66, '#67C5CA', 'Mesozoikum (Erdmittelalter)', 'Mesozoic',
    'Das Erdmittelalter – die Zeit der Dinosaurier. Pangaea zerbricht, das Klima ist meist warm, an den Polen gibt es kaum Eis.',
    'The age of the dinosaurs. Pangaea breaks apart, the climate is mostly warm and there is hardly any ice at the poles.'),
  u('cenozoic', 'era', 66, 0, '#F2F91D', 'Känozoikum (Erdneuzeit)', 'Cenozoic',
    'Die Erdneuzeit: Nach dem Asteroideneinschlag übernehmen Säugetiere und Vögel. Die Erde kühlt ab, die Kontinente erreichen ihre heutige Lage.',
    'After the asteroid impact, mammals and birds take over. Earth cools down and the continents reach their present positions.'),

  // Perioden / Systeme
  u('siderian', 'period', 2500, 2300, '#F74F7C', 'Siderium', 'Siderian',
    'Cyanobakterien setzen Sauerstoff frei: Er rostet zuerst das gelöste Eisen in den Meeren aus – daraus entstehen die gebänderten Eisenerze, die wir heute abbauen.',
    'Cyanobacteria release oxygen. First it rusts the iron dissolved in the oceans, creating the banded iron formations we mine today.'),
  u('rhyacian', 'period', 2300, 2050, '#F75B89', 'Rhyacium', 'Rhyacian',
    'Nach der Großen Sauerstoffkatastrophe vereist die Erde mehrfach (Huronische Eiszeit). Danach entstehen riesige Granitkörper.',
    'After the Great Oxidation Event the Earth freezes several times (Huronian glaciation). Afterwards huge granite bodies form.'),
  u('orosirian', 'period', 2050, 1800, '#F76898', 'Orosirium', 'Orosirian',
    'Zeit der Gebirgsbildung: Kontinente kollidieren zum Superkontinent Columbia (Nuna). Zwei der größten Einschlagkrater der Erde entstehen (Vredefort, Sudbury).',
    'A time of mountain building: continents collide to form the supercontinent Columbia (Nuna). Two of Earth\'s largest impact craters form (Vredefort, Sudbury).'),
  u('statherian', 'period', 1800, 1600, '#F875A7', 'Statherium', 'Statherian',
    'Columbia ist vereint. Erste Zellen mit Zellkern (Eukaryoten) sind sicher nachgewiesen – die Vorfahren aller Pflanzen, Pilze und Tiere.',
    'Columbia is assembled. The first cells with a nucleus (eukaryotes) are clearly documented – the ancestors of all plants, fungi and animals.'),
  u('calymmian', 'period', 1600, 1400, '#FDC07A', 'Calymmium', 'Calymmian',
    'Columbia zerfällt langsam. Beginn der „langweiligen Milliarde“: Klima und Leben ändern sich kaum.',
    'Columbia slowly breaks up. The "boring billion" begins: climate and life barely change.'),
  u('ectasian', 'period', 1400, 1200, '#F3CC8A', 'Ectasium', 'Ectasian',
    'Die Kontinentalplatten dehnen sich weiter. Im Meer leben Bakterienmatten und einzellige Algen.',
    'Continental platforms keep expanding. Bacterial mats and single-celled algae live in the sea.'),
  u('stenian', 'period', 1200, 1000, '#FED99A', 'Stenium', 'Stenian',
    'Die Kontinente schieben sich zu Rodinia zusammen (Grenville-Gebirgsbildung). Rotalgen zeigen erstmals sexuelle Fortpflanzung.',
    'The continents push together into Rodinia (Grenville orogeny). Red algae show the first sexual reproduction.'),
  u('tonian', 'period', 1000, 720, '#FEBF4E', 'Tonium', 'Tonian',
    'Der Superkontinent Rodinia liegt rund um den Äquator und beginnt auseinanderzubrechen. Erste Hinweise auf Schwämme.',
    'The supercontinent Rodinia lies around the equator and starts to break apart. First hints of sponges.'),
  u('cryogenian', 'period', 720, 635, '#FECC5C', 'Cryogenium', 'Cryogenian',
    'Die Schneeball-Erde: Zweimal reicht das Eis bis fast an den Äquator. Vulkane pumpen über Jahrmillionen CO₂ in die Luft, bis das Eis schlagartig schmilzt.',
    'Snowball Earth: twice the ice reaches almost to the equator. Volcanoes pump CO₂ into the air for millions of years until the ice melts abruptly.'),
  u('ediacaran', 'period', 635, 538.8, '#FED96A', 'Ediacarium', 'Ediacaran',
    'Die ersten großen Lebewesen: rätselhafte, weiche Organismen wie Dickinsonia, die flach auf dem Meeresgrund lagen.',
    'The first large organisms: mysterious soft-bodied creatures like Dickinsonia lying flat on the seafloor.'),
  u('cambrian', 'period', 538.8, 486.85, '#7FA056', 'Kambrium', 'Cambrian',
    'Die Kambrische Explosion: In wenigen Millionen Jahren entstehen fast alle heutigen Tierstämme – mit Augen, Beinen und Panzern. Trilobiten beherrschen die Meere, an Land ist noch alles kahl.',
    'The Cambrian explosion: within a few million years almost all modern animal groups appear, with eyes, legs and armour. Trilobites rule the seas; the land is still bare.'),
  u('ordovician', 'period', 486.85, 443.1, '#009270', 'Ordovizium', 'Ordovician',
    'Höchster Meeresspiegel der Erdgeschichte. Riffe, Kopffüßer und erste Fische mit Kiefer. Moose erobern das Land. Am Ende ein Massenaussterben durch Vereisung.',
    'Highest sea level in Earth\'s history. Reefs, cephalopods and the first jawed fish. Mosses colonise the land. It ends with a mass extinction caused by glaciation.'),
  u('silurian', 'period', 443.1, 419.62, '#B3E1B6', 'Silur', 'Silurian',
    'Die ersten Gefäßpflanzen wachsen an Land, Skorpione und Tausendfüßer folgen. Im Meer jagen riesige Seeskorpione.',
    'The first vascular plants grow on land, followed by scorpions and millipedes. Giant sea scorpions hunt in the sea.'),
  u('devonian', 'period', 419.62, 358.86, '#CB8C37', 'Devon', 'Devonian',
    'Das Zeitalter der Fische. Die ersten Wälder entstehen, Fische mit Gliedmaßen kriechen an Land – die Vorfahren aller Landwirbeltiere.',
    'The age of fishes. The first forests grow, and fish with limbs crawl onto land – the ancestors of all land vertebrates.'),
  u('carboniferous', 'period', 358.86, 298.9, '#67A599', 'Karbon', 'Carboniferous',
    'Riesige Sumpfwälder, aus denen unsere Steinkohle wurde. Viel Sauerstoff lässt Insekten riesig werden (Libellen mit 70 cm Flügelspannweite). Die ersten Reptilien legen Eier an Land.',
    'Huge swamp forests that became our coal. High oxygen lets insects grow huge (dragonflies with a 70 cm wingspan). The first reptiles lay eggs on land.'),
  u('permian', 'period', 298.9, 251.902, '#F04028', 'Perm', 'Permian',
    'Alle Kontinente bilden Pangaea, im Inneren breiten sich Wüsten aus. Am Ende das größte Massenaussterben: Vulkane in Sibirien löschen rund 90 % aller Meeresarten aus.',
    'All continents form Pangaea and deserts spread inland. It ends with the largest mass extinction: volcanoes in Siberia wipe out about 90% of all marine species.'),
  u('triassic', 'period', 251.902, 201.4, '#812B92', 'Trias', 'Triassic',
    'Das Leben erholt sich langsam. Die ersten Dinosaurier, Flugsaurier und Säugetiere erscheinen, im Meer Ichthyosaurier. Pangaea ist heiß und trocken.',
    'Life slowly recovers. The first dinosaurs, pterosaurs and mammals appear, and ichthyosaurs swim in the sea. Pangaea is hot and dry.'),
  u('jurassic', 'period', 201.4, 143.1, '#34B2C9', 'Jura', 'Jurassic',
    'Pangaea zerbricht, der Atlantik beginnt sich zu öffnen. Riesige Langhalsdinosaurier wie Brachiosaurus, Allosaurus jagt, und Archaeopteryx zeigt den Übergang zu den Vögeln.',
    'Pangaea breaks apart and the Atlantic starts to open. Giant long-necked dinosaurs like Brachiosaurus roam, Allosaurus hunts, and Archaeopteryx shows the transition to birds.'),
  u('cretaceous', 'period', 143.1, 66, '#7FC64E', 'Kreide', 'Cretaceous',
    'Treibhausklima und hoher Meeresspiegel. Blütenpflanzen breiten sich aus, Tyrannosaurus und Triceratops leben in Nordamerika. Ein Asteroid beendet die Zeit der Dinosaurier.',
    'Greenhouse climate and high sea level. Flowering plants spread, and Tyrannosaurus and Triceratops live in North America. An asteroid ends the age of dinosaurs.'),
  u('paleogene', 'period', 66, 23.04, '#FD9A52', 'Paläogen', 'Paleogene',
    'Säugetiere werden groß und vielfältig, die ersten Wale und Primaten erscheinen. Nach einer Hitzephase kühlt die Erde ab, die Antarktis vereist.',
    'Mammals become large and diverse, and the first whales and primates appear. After a hot phase Earth cools and Antarctica freezes over.'),
  u('neogene', 'period', 23.04, 2.58, '#FFE619', 'Neogen', 'Neogene',
    'Graslandschaften breiten sich aus, mit Pferden, Antilopen und großen Raubtieren. In Afrika beginnen unsere Vorfahren aufrecht zu gehen.',
    'Grasslands spread with horses, antelopes and big predators. In Africa our ancestors start walking upright.'),
  u('quaternary', 'period', 2.58, 0, '#F9F97F', 'Quartär', 'Quaternary',
    'Das Eiszeitalter: Kalt- und Warmzeiten wechseln sich ab. Mammuts, Säbelzahnkatzen – und der moderne Mensch, der sich über die ganze Welt ausbreitet.',
    'The ice age: cold and warm periods alternate. Mammoths, sabre-toothed cats – and modern humans, who spread across the whole world.'),

  // Feinere Abschnitte im Quartär und in der Menschheitsgeschichte
  u('pleistocene', 'age', 2.58, 0.0117, '#FFF2AE', 'Pleistozän', 'Pleistocene',
    'Eiszeiten kommen und gehen etwa alle 100.000 Jahre. Auf dem Höhepunkt der letzten Eiszeit liegt der Meeresspiegel 120 m tiefer, man kann zu Fuß von Asien nach Amerika gehen.',
    'Ice ages come and go roughly every 100,000 years. At the peak of the last one, sea level is 120 m lower and you can walk from Asia to America.'),
  u('holocene', 'age', 0.0117, yearToMa(1000), '#FEF2E0', 'Holozän', 'Holocene',
    'Die heutige Warmzeit. Der Mensch wird sesshaft, erfindet Landwirtschaft, Städte und Schrift.',
    'Our present warm period. Humans settle down and invent farming, cities and writing.'),
  u('highmiddle', 'age', yearToMa(1000), yearToMa(1250), '#E9D8B4', 'Hochmittelalter', 'High Middle Ages',
    'Mittelalterliche Warmzeit: In Europa wachsen Bevölkerung und Städte, die Wikinger siedeln auf Grönland.',
    'Medieval Warm Period: Europe\'s population and towns grow, and the Vikings settle on Greenland.'),
  u('latemiddle', 'age', yearToMa(1250), yearToMa(1500), '#DCC6A0', 'Spätmittelalter', 'Late Middle Ages',
    'Die Kleine Eiszeit beginnt, Missernten und die Pest treffen Europa. Die Wikinger verlassen Grönland.',
    'The Little Ice Age begins; crop failures and the Black Death hit Europe. The Vikings abandon Greenland.'),
  u('earlymodern', 'age', yearToMa(1500), yearToMa(1800), '#CFB48C', 'Frühe Neuzeit', 'Early Modern Period',
    'Tiefpunkt der Kleinen Eiszeit: Gletscher wachsen, Flüsse wie die Themse frieren zu.',
    'The depth of the Little Ice Age: glaciers advance and rivers like the Thames freeze over.'),
  u('industrial', 'age', yearToMa(1800), yearToMa(1950), '#B8977A', 'Industrialisierung', 'Industrial Age',
    'Kohle, Dampfmaschinen und Fabriken: Der Mensch beginnt, in großem Maß CO₂ freizusetzen. Ein Vulkanausbruch (Tambora) bringt 1816 das „Jahr ohne Sommer“.',
    'Coal, steam engines and factories: humans start releasing CO₂ on a large scale. A volcanic eruption (Tambora) causes the "Year Without a Summer" in 1816.'),
  u('present', 'age', yearToMa(1950), 0, '#A07E6A', 'Gegenwart', 'Present',
    'Die „Große Beschleunigung“: CO₂ steigt schneller als je zuvor in der Erdgeschichte, die Erde erwärmt sich um mehr als 1,5 °C.',
    'The "Great Acceleration": CO₂ rises faster than ever before in Earth\'s history and the planet warms by more than 1.5 °C.'),
];

export const unitsAt = (ma: number) => {
  const pick = (level: Level) => UNITS.find((x) => x.level === level && ma <= x.from && ma >= x.to);
  return { eon: pick('eon'), era: pick('era'), period: pick('period'), age: pick('age') };
};

export const unitName = (x: Unit | undefined, lang: Lang) => (x ? x.name[lang] : '');
