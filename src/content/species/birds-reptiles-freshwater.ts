import type { Species } from './types';

const BIRD_KIN = ['velociraptor', 'archaeopteryx', 'microraptor'];

export const BIRDS_REPTILES_FRESHWATER: Species[] = [
  // ───────────────────────── Vögel ─────────────────────────
  {
    id: 'kakapo',
    sci: 'Strigops habroptilus',
    name: { de: 'Kakapo (Eulenpapagei)', en: 'Kākāpō (owl parrot)' },
    group: 'bird',
    realm: 'land',
    status: 'CR',
    population: { de: 'rund 240 Vögel – jeder einzelne trägt einen Namen', en: 'around 240 birds – every single one has a name' },
    trend: 'up',
    length: 0.6,
    weight: 2,
    teaser: {
      de: 'Der schwerste Papagei der Welt kann nicht fliegen, riecht nach Honig und lebt bis zu 90 Jahre.',
      en: 'The world’s heaviest parrot cannot fly, smells of honey and may live up to 90 years.',
    },
    facts: {
      de: [
        'Kakapos sind nachtaktiv und klettern mit Schnabel und Krallen bis in die Baumkronen.',
        'Männchen „wummern“ in Balznächten mit tiefen Lauten, die kilometerweit zu hören sind.',
        'Sie brüten nur in Jahren, in denen die Rimu-Bäume massenhaft Früchte tragen – oft nur alle 2–4 Jahre.',
      ],
      en: [
        'Kākāpō are nocturnal and climb into the treetops using beak and claws.',
        'On mating nights males “boom” with deep calls that carry for kilometres.',
        'They only breed in years when rimu trees fruit heavily – often just every 2–4 years.',
      ],
    },
    threats: {
      de: [
        'Eingeschleppte Ratten, Hermeline und Katzen fressen Eier, Küken und brütende Weibchen.',
        'Die winzige Population ist genetisch verarmt; viele Eier sind unfruchtbar.',
        'Krankheiten wie Aspergillose können schnell viele Tiere töten.',
      ],
      en: [
        'Introduced rats, stoats and cats eat eggs, chicks and nesting females.',
        'The tiny population is genetically depleted; many eggs are infertile.',
        'Diseases such as aspergillosis can kill many birds quickly.',
      ],
    },
    help: {
      de: [
        'Alle Kakapos leben auf raubtierfreien Inseln wie Whenua Hou und werden einzeln betreut.',
        'Von 51 Tieren (1995) wuchs der Bestand dank Zuchtprogramm auf über 240.',
        'Neuseelands Ziel „Predator Free 2050“ soll eingeschleppte Räuber landesweit beseitigen.',
      ],
      en: [
        'Every kākāpō lives on predator-free islands such as Whenua Hou and is monitored individually.',
        'Thanks to intensive breeding, numbers rose from 51 birds (1995) to over 240.',
        'New Zealand’s “Predator Free 2050” goal aims to remove introduced predators nationwide.',
      ],
    },
    home: [-46.75, 167.65],
    relatives: BIRD_KIN,
    wiki: { de: 'Kakapo', en: 'Kākāpō' },
  },
  {
    id: 'kalifornischer-kondor',
    sci: 'Gymnogyps californianus',
    name: { de: 'Kalifornischer Kondor', en: 'California condor' },
    group: 'bird',
    realm: 'land',
    status: 'CR',
    population: { de: 'rund 560 Vögel, davon etwa 350 in freier Wildbahn', en: 'around 560 birds, about 350 of them in the wild' },
    trend: 'up',
    length: 1.2,
    weight: 9,
    teaser: {
      de: 'Nordamerikas größter Landvogel war 1987 fast verschwunden – nur noch 27 Tiere lebten.',
      en: 'North America’s largest land bird nearly vanished in 1987, when just 27 were left.',
    },
    facts: {
      de: [
        'Mit bis zu 3 m Flügelspannweite segelt er stundenlang fast ohne Flügelschlag.',
        'Als Aasfresser ist er die „Gesundheitspolizei“ der Landschaft.',
        'Kondore können über 60 Jahre alt werden und ziehen nur alle ein bis zwei Jahre ein Küken groß.',
      ],
      en: [
        'With a wingspan of up to 3 m it soars for hours with barely a wingbeat.',
        'As a scavenger it is the landscape’s clean-up crew.',
        'Condors can live past 60 and raise only one chick every year or two.',
      ],
    },
    threats: {
      de: [
        'Bleivergiftung durch Munitionsreste in Kadavern ist die häufigste Todesursache.',
        'Verschluckter Plastikmüll und Mikroteile gefährden die Küken.',
        'Die Vogelgrippe tötete 2023 in Arizona über 20 Kondore.',
      ],
      en: [
        'Lead poisoning from ammunition fragments in carcasses is the leading cause of death.',
        'Swallowed litter and small trash items endanger chicks.',
        'Bird flu killed more than 20 condors in Arizona in 2023.',
      ],
    },
    help: {
      de: [
        '1987 wurden alle wilden Kondore eingefangen; seit 1992 werden Nachzuchten ausgewildert.',
        'Kalifornien verbietet seit 2019 Bleimunition für die Jagd.',
        'Jägerinnen und Jäger können freiwillig auf bleifreie Munition umsteigen.',
      ],
      en: [
        'All wild condors were captured in 1987; captive-bred birds have been released since 1992.',
        'California has banned lead ammunition for hunting since 2019.',
        'Hunters can switch to lead-free ammunition voluntarily.',
      ],
    },
    home: [36.5, -121.5],
    range: [[35.5, -119.5, 350], [36.3, -112.5, 250], [32.0, -115.5, 150], [41.5, -124.0, 120]],
    relatives: BIRD_KIN,
    wiki: { de: 'Kalifornienkondor', en: 'California condor' },
  },
  {
    id: 'philippinenadler',
    sci: 'Pithecophaga jefferyi',
    name: { de: 'Philippinenadler (Affenadler)', en: 'Philippine eagle' },
    group: 'bird',
    realm: 'land',
    status: 'CR',
    population: { de: 'rund 400 Brutpaare', en: 'around 400 breeding pairs' },
    trend: 'down',
    length: 1,
    weight: 6,
    teaser: {
      de: 'Einer der größten Adler der Welt – mit einer zotteligen Federkrone wie eine Löwenmähne.',
      en: 'One of the world’s largest eagles – with a shaggy crest like a lion’s mane.',
    },
    facts: {
      de: [
        'Er jagt Flattermakis, Hörnchen, Schlangen und gelegentlich Affen.',
        'Ein Paar braucht rund 100 km² Regenwald und zieht nur alle zwei Jahre ein Junges auf.',
        'Er ist Nationalvogel der Philippinen; wer ihn tötet, muss mit Haft rechnen.',
      ],
      en: [
        'It hunts colugos, squirrels, snakes and occasionally monkeys.',
        'A pair needs about 100 km² of rainforest and raises only one chick every two years.',
        'It is the Philippines’ national bird; killing one can mean prison.',
      ],
    },
    threats: {
      de: [
        'Abholzung hat einen Großteil seines Regenwaldes zerstört.',
        'Wilderei und versehentliche Fänge in Fallen töten jedes Jahr Adler.',
        'Die langsame Fortpflanzung macht jeden Verlust schwer ersetzbar.',
      ],
      en: [
        'Logging has destroyed much of its rainforest home.',
        'Shooting and accidental trapping kill eagles every year.',
        'Its slow breeding makes every loss hard to replace.',
      ],
    },
    help: {
      de: [
        'Auf Mindanao züchtet ein Adlerzentrum seit 1987 Philippinenadler und wildert sie aus.',
        'Indigene Gemeinschaften werden als Waldhüter bezahlt und schützen Nester.',
        'Holz und Papier mit FSC-Siegel verringern den Druck auf tropische Wälder.',
      ],
      en: [
        'A conservation centre on Mindanao has bred and released Philippine eagles since 1987.',
        'Indigenous communities are paid as forest guardians and protect nests.',
        'FSC-certified wood and paper reduce pressure on tropical forests.',
      ],
    },
    home: [7.0, 125.3],
    range: [[7.5, 125.0, 250], [16.5, 121.5, 200], [11.5, 125.2, 120]],
    relatives: BIRD_KIN,
    wiki: { de: 'Affenadler', en: 'Philippine eagle' },
  },
  {
    id: 'harpyie',
    sci: 'Harpia harpyja',
    name: { de: 'Harpyie', en: 'Harpy eagle' },
    group: 'bird',
    realm: 'land',
    status: 'VU',
    population: { de: 'unter 50.000 erwachsene Vögel (Schätzung)', en: 'fewer than 50,000 adult birds (estimate)' },
    trend: 'down',
    length: 1,
    weight: 7,
    teaser: {
      de: 'Der Greifvogel mit den kräftigsten Krallen der Welt pflückt Faultiere aus den Baumkronen.',
      en: 'The raptor with the world’s most powerful talons plucks sloths from the treetops.',
    },
    facts: {
      de: [
        'Die Hinterkralle eines Weibchens ist bis zu 7 cm lang – so groß wie die eines Grizzlys.',
        'Kurze, breite Flügel lassen sie geschickt zwischen Ästen hindurchjagen.',
        'Ein Junges wird über ein Jahr lang von den Eltern versorgt.',
      ],
      en: [
        'A female’s hind claw can be 7 cm long – as big as a grizzly bear’s.',
        'Short, broad wings let it chase prey nimbly between branches.',
        'Parents care for a single chick for more than a year.',
      ],
    },
    threats: {
      de: [
        'Regenwaldrodung für Weiden, Soja und Holz nimmt ihr Jagdrevier.',
        'Viele werden aus Angst oder Neugier abgeschossen.',
        'In Mittelamerika ist sie vielerorts schon verschwunden.',
      ],
      en: [
        'Clearing of rainforest for pasture, soy and timber removes its hunting grounds.',
        'Many are shot out of fear or curiosity.',
        'It has already disappeared from much of Central America.',
      ],
    },
    help: {
      de: [
        'In Panama und Belize werden nachgezüchtete Harpyien ausgewildert.',
        'Ökotourismus an Nestbäumen in Brasilien bringt Bauern Geld, wenn die Vögel überleben.',
        'Weniger Rindfleisch und Soja aus Entwaldung schützt ihren Lebensraum.',
      ],
      en: [
        'Captive-bred harpy eagles are released in Panama and Belize.',
        'Eco-tourism at nest trees in Brazil pays farmers to keep the birds alive.',
        'Eating less beef and soy linked to deforestation protects its habitat.',
      ],
    },
    home: [-3.5, -62.0],
    range: [[-5, -60, 1800], [8.5, -79.5, 400], [-15, -45, 500]],
    relatives: BIRD_KIN,
    wiki: { de: 'Harpyie (Vogel)', en: 'Harpy eagle' },
  },
  {
    id: 'waldrapp',
    sci: 'Geronticus eremita',
    name: { de: 'Waldrapp', en: 'Northern bald ibis' },
    group: 'bird',
    realm: 'land',
    status: 'EN',
    population: {
      de: 'rund 700 wilde Vögel in Marokko, dazu einige Hundert ausgewilderte in Europa',
      en: 'about 700 wild birds in Morocco, plus a few hundred reintroduced in Europe',
    },
    trend: 'up',
    length: 0.75,
    weight: 1.3,
    teaser: {
      de: 'Ein Ibis mit Glatze und Federschopf, der vor 400 Jahren aus Mitteleuropa verschwand – und zurückkehrt.',
      en: 'A bald, crested ibis that vanished from central Europe 400 years ago – and is now coming back.',
    },
    facts: {
      de: [
        'Er brütet in Felswänden und stochert mit dem langen Schnabel nach Insekten.',
        'Junge Waldrappe aus Zoos lernen ihre Zugroute über die Alpen hinter einem Ultraleichtflugzeug.',
        'Schon der Schweizer Naturforscher Conrad Gessner beschrieb ihn im 16. Jahrhundert.',
      ],
      en: [
        'It nests on cliffs and probes for insects with its long, curved bill.',
        'Zoo-bred young learn their migration route across the Alps by following a microlight aircraft.',
        'Swiss naturalist Conrad Gessner described it as early as the 16th century.',
      ],
    },
    threats: {
      de: [
        'Bejagung hat ihn im Mittelalter in Europa ausgerottet.',
        'Auf dem Zug nach Italien werden immer noch Vögel illegal abgeschossen.',
        'Stromschläge an Mittelspannungsmasten töten viele Jungvögel.',
      ],
      en: [
        'Hunting wiped it out in Europe in the late Middle Ages.',
        'Birds are still shot illegally on migration to Italy.',
        'Electrocution on power poles kills many young birds.',
      ],
    },
    help: {
      de: [
        'Seit 2014 wildert ein EU-LIFE-Projekt Waldrappe in Österreich, Bayern und Baden-Württemberg aus.',
        'Im Souss-Massa-Nationalpark in Marokko hat sich der Bestand dank Bewachung vervielfacht.',
        'Vogelsicher umgebaute Strommasten retten viele Großvögel.',
      ],
      en: [
        'Since 2014 an EU LIFE project has released bald ibises in Austria and southern Germany.',
        'Guarded colonies in Morocco’s Souss-Massa National Park have multiplied.',
        'Bird-safe power poles save many large birds.',
      ],
    },
    home: [30.1, -9.6],
    range: [[30.2, -9.6, 150], [47.6, 9.5, 200], [42.5, 11.5, 150]],
    relatives: BIRD_KIN,
    wiki: { de: 'Waldrapp', en: 'Northern bald ibis' },
  },
  {
    id: 'spix-ara',
    sci: 'Cyanopsitta spixii',
    name: { de: 'Spix-Ara', en: 'Spix’s macaw' },
    group: 'bird',
    realm: 'land',
    status: 'EW',
    population: {
      de: 'rund 300 in Menschenobhut; seit 2022 wieder einige Dutzend in Brasiliens Caatinga ausgewildert',
      en: 'around 300 in human care; since 2022 a few dozen have been released into Brazil’s Caatinga',
    },
    trend: 'up',
    length: 0.56,
    weight: 0.3,
    teaser: {
      de: 'Der kleine blaue Ara aus dem Film „Rio“ war in der Natur ausgestorben – jetzt fliegt er wieder.',
      en: 'The little blue macaw from the film “Rio” died out in the wild – and now it flies again.',
    },
    facts: {
      de: [
        'Er lebt in Galeriewäldern mit Caraibeira-Bäumen entlang von Bächen der trockenen Caatinga.',
        'Der letzte wilde Spix-Ara verschwand im Jahr 2000.',
        'Alle heutigen Tiere stammen von nur wenigen Gründervögeln ab.',
      ],
      en: [
        'It lives in strips of caraibeira woodland along creeks in the dry Caatinga.',
        'The last wild Spix’s macaw disappeared in 2000.',
        'All living birds descend from only a handful of founders.',
      ],
    },
    threats: {
      de: [
        'Fang für den illegalen Haustierhandel löschte die Wildpopulation aus.',
        'Die Galeriewälder wurden durch Rodung und Weidevieh zerstört.',
        'Die geringe genetische Vielfalt erschwert die Zucht.',
      ],
      en: [
        'Trapping for the illegal pet trade wiped out the wild population.',
        'Its creek-side woodlands were destroyed by clearing and grazing.',
        'Low genetic diversity makes breeding difficult.',
      ],
    },
    help: {
      de: [
        'Im Juni 2022 wurden bei Curaçá (Bahia) die ersten Spix-Aras ausgewildert.',
        'Zwei neue Schutzgebiete sichern seit 2018 ihren Lebensraum.',
        'Niemals Papageien oder andere Wildvögel aus unklarer Herkunft kaufen.',
      ],
      en: [
        'In June 2022 the first Spix’s macaws were released near Curaçá, Bahia.',
        'Two protected areas created in 2018 secure their habitat.',
        'Never buy parrots or other wild birds of unclear origin.',
      ],
    },
    home: [-9.1, -39.9],
    // Auswilderungsgebiet bei Curaçá (Bahia) – GBIF hat kaum Wildsichtungen
    range: [[-9.1, -39.9, 60]],
    relatives: BIRD_KIN,
    wiki: { de: 'Spixara', en: 'Spix\'s macaw' },
  },
  {
    id: 'hyazinth-ara',
    sci: 'Anodorhynchus hyacinthinus',
    name: { de: 'Hyazinth-Ara', en: 'Hyacinth macaw' },
    group: 'bird',
    realm: 'land',
    status: 'VU',
    population: { de: 'rund 6.500 Vögel in freier Wildbahn (Schätzung)', en: 'about 6,500 birds in the wild (estimate)' },
    trend: 'down',
    length: 1,
    weight: 1.5,
    teaser: {
      de: 'Der größte flugfähige Papagei der Welt knackt Palmnüsse, an denen Menschen mit dem Hammer scheitern.',
      en: 'The largest flying parrot on Earth cracks palm nuts that defeat a hammer.',
    },
    facts: {
      de: [
        'Von Kopf bis Schwanzspitze misst er bis zu einen Meter.',
        'Er frisst Kerne von Acuri- und Bocaiúva-Palmen, oft aus Kuhdung, wo die Nüsse schon vorverdaut sind.',
        'Im Pantanal brütet er fast nur in Höhlen alter Manduvi-Bäume.',
      ],
      en: [
        'From head to tail tip it measures up to one metre.',
        'It eats acuri and bocaiúva palm nuts – often picked from cow dung, where they are partly digested.',
        'In the Pantanal it nests almost only in hollows of old manduvi trees.',
      ],
    },
    threats: {
      de: [
        'Wildfänge für den Heimtierhandel dezimierten den Bestand in den 1980er-Jahren.',
        'Brände und Rodung zerstören Nistbäume und Palmenhaine.',
        'Es gibt kaum noch junge Manduvi-Bäume, die später Bruthöhlen bilden.',
      ],
      en: [
        'Trapping for the pet trade decimated numbers in the 1980s.',
        'Fires and clearing destroy nest trees and palm groves.',
        'Few young manduvi trees remain to form future nest hollows.',
      ],
    },
    help: {
      de: [
        'Im Pantanal stellen Schutzprojekte seit 1990 Nistkästen auf und bewachen Nester.',
        'Viele Rinderfarmen dort schützen die Aras heute und profitieren vom Tourismus.',
        'Nur Papageien aus geprüfter Nachzucht halten – niemals Wildfänge.',
      ],
      en: [
        'Since 1990 Pantanal projects have put up nest boxes and guarded nests.',
        'Many cattle ranches there now protect the macaws and gain from tourism.',
        'Only keep parrots from certified captive breeding – never wild-caught birds.',
      ],
    },
    home: [-18.0, -57.0],
    range: [[-18, -57, 400], [-9, -46, 400], [-3, -52, 300]],
    relatives: BIRD_KIN,
    wiki: { de: 'Hyazinthara', en: 'Hyacinth macaw' },
  },
  {
    id: 'schuhschnabel',
    sci: 'Balaeniceps rex',
    name: { de: 'Schuhschnabel', en: 'Shoebill' },
    group: 'bird',
    realm: 'land',
    status: 'VU',
    population: { de: '3.300–5.300 erwachsene Vögel', en: '3,300–5,300 adult birds' },
    trend: 'down',
    length: 1.2,
    weight: 6,
    teaser: {
      de: 'Ein Vogel wie aus der Urzeit: riesiger Holzschuh-Schnabel, starrer Blick, stundenlanges Stillstehen.',
      en: 'A bird that looks prehistoric: a huge clog-shaped bill, a fixed stare and hours of standing still.',
    },
    facts: {
      de: [
        'Er lauert regungslos im Sumpf und schnappt dann blitzschnell Lungenfische und Welse.',
        'Zur Begrüßung klappern Schuhschnäbel laut mit dem Schnabel.',
        'Von zwei Küken überlebt meist nur das stärkere.',
      ],
      en: [
        'It waits motionless in the swamp, then lunges at lungfish and catfish.',
        'Shoebills greet each other by loudly clattering their bills.',
        'Of two chicks, usually only the stronger survives.',
      ],
    },
    threats: {
      de: [
        'Trockenlegung von Sümpfen für Landwirtschaft zerstört seinen Lebensraum.',
        'Küken und Eier werden für den Handel mit Zoos und Sammlern gestohlen.',
        'Brände und Viehweiden stören die empfindlichen Brutplätze.',
      ],
      en: [
        'Drainage of swamps for farming destroys its habitat.',
        'Chicks and eggs are stolen for trade with collectors.',
        'Fires and cattle grazing disturb its sensitive nesting sites.',
      ],
    },
    help: {
      de: [
        'In Sambias Bangweulu-Sümpfen bezahlen Schutzprojekte Fischer als Nestwächter – mit Erfolg.',
        'Die Mabamba-Bucht in Uganda ist Ramsar-Schutzgebiet und Ziel sanften Tourismus.',
        'Feuchtgebiete schützen hilft Schuhschnäbeln und unzähligen anderen Arten.',
      ],
      en: [
        'In Zambia’s Bangweulu swamps, fishers are paid as nest guards – successfully.',
        'Uganda’s Mabamba Bay is a Ramsar wetland visited by low-impact tourists.',
        'Protecting wetlands helps shoebills and countless other species.',
      ],
    },
    home: [7.5, 31.0],
    range: [[7.5, 31, 400], [0.1, 32.3, 200], [-11.2, 30.0, 200], [-3.0, 30.5, 250]],
    relatives: BIRD_KIN,
    wiki: { de: 'Schuhschnabel', en: 'Shoebill' },
  },
  {
    id: 'suedlicher-hornrabe',
    sci: 'Bucorvus leadbeateri',
    name: { de: 'Südlicher Hornrabe', en: 'Southern ground hornbill' },
    group: 'bird',
    realm: 'land',
    status: 'VU',
    population: {
      de: 'unbekannt; in Südafrika nur noch rund 1.500 Vögel',
      en: 'unknown; only about 1,500 birds left in South Africa',
    },
    trend: 'down',
    length: 1,
    weight: 4,
    teaser: {
      de: 'Ein truthahngroßer Hornvogel mit roter Kehle, der in Familien zu Fuß durch die Savanne jagt.',
      en: 'A turkey-sized hornbill with a red throat that hunts on foot through the savanna in family groups.',
    },
    facts: {
      de: [
        'Er frisst Insekten, Frösche, Schlangen und sogar Hasen.',
        'Sein dumpfer Ruf ist bis zu 5 km weit zu hören.',
        'Ein Paar zieht nur etwa alle neun Jahre erfolgreich ein Küken groß – Helfer aus der Familie unterstützen.',
      ],
      en: [
        'It eats insects, frogs, snakes and even hares.',
        'Its booming call carries up to 5 km.',
        'A group raises a chick only about once every nine years – with family helpers.',
      ],
    },
    threats: {
      de: [
        'Bleivergiftung und Giftköder, die eigentlich für andere Tiere ausgelegt werden.',
        'Hohe alte Bäume als Bruthöhlen werden gefällt.',
        'Weil er gegen sein Spiegelbild in Fenstern hackt, wird er manchmal getötet.',
      ],
      en: [
        'Lead poisoning and poisoned baits meant for other animals.',
        'Tall old nest trees are cut down.',
        'Because it attacks its reflection in windows, it is sometimes killed.',
      ],
    },
    help: {
      de: [
        'In Südafrika werden „überzählige“ zweite Küken aufgezogen und später in Gruppen ausgewildert.',
        'Künstliche Nisthöhlen ersetzen fehlende alte Bäume.',
        'Viele Kulturen im südlichen Afrika verehren den Vogel – das hilft beim Schutz.',
      ],
      en: [
        'In South Africa, “spare” second chicks are hand-reared and later released in groups.',
        'Artificial nest boxes replace missing old trees.',
        'Many southern African cultures revere the bird, which aids protection.',
      ],
    },
    home: [-24.0, 31.5],
    range: [[-24, 31.5, 400], [-15, 30, 900], [-5, 35, 600]],
    relatives: BIRD_KIN,
    wiki: { de: 'Rotgesicht-Hornrabe', en: 'Southern ground hornbill' },
  },
  {
    id: 'bali-star',
    sci: 'Leucopsar rothschildi',
    name: { de: 'Bali-Star', en: 'Bali myna' },
    group: 'bird',
    realm: 'land',
    status: 'CR',
    population: {
      de: 'nach Auswilderungen wieder einige Hundert in freier Wildbahn',
      en: 'thanks to releases, a few hundred are back in the wild',
    },
    trend: 'up',
    length: 0.25,
    weight: 0.09,
    teaser: {
      de: 'Ein schneeweißer Star mit leuchtend blauer Augenmaske – Wappenvogel der Insel Bali.',
      en: 'A snow-white starling with a bright blue eye mask – the emblem bird of Bali.',
    },
    facts: {
      de: [
        'Er kommt nur im Westen Balis vor, vor allem im Nationalpark Bali Barat.',
        'Die Männchen stellen bei der Balz ihre lange weiße Federhaube auf.',
        'Um 2005 lebten nur noch wenige Dutzend Vögel in der Natur.',
      ],
      en: [
        'It is found only in western Bali, mainly in West Bali National Park.',
        'Courting males raise a long white crest.',
        'Around 2005 only a few dozen birds remained in the wild.',
      ],
    },
    threats: {
      de: [
        'Wilderei für den Käfigvogelhandel – ein Vogel bringt viel Geld.',
        'Der trockene Monsunwald ist klein und von Siedlungen umgeben.',
      ],
      en: [
        'Poaching for the cage-bird trade – a single bird fetches a high price.',
        'Its dry monsoon forest is small and surrounded by villages.',
      ],
    },
    help: {
      de: [
        'Zoo-Nachzuchten aus aller Welt werden seit Jahren auf Bali ausgewildert.',
        'Dorfgemeinschaften züchten legal Bali-Stare und verdienen daran – das macht Wilderei unattraktiv.',
        'Keine Singvögel aus Wildfang kaufen, auch nicht auf Märkten im Urlaub.',
      ],
      en: [
        'Zoo-bred birds from around the world have been released in Bali for years.',
        'Village co-ops breed Bali mynas legally and earn from it, making poaching unattractive.',
        'Never buy wild-caught songbirds, including at markets on holiday.',
      ],
    },
    home: [-8.15, 114.5],
    relatives: BIRD_KIN,
    wiki: { de: 'Balistar', en: 'Bali myna' },
  },
  {
    id: 'grosstrappe',
    sci: 'Otis tarda',
    name: { de: 'Großtrappe', en: 'Great bustard' },
    group: 'bird',
    realm: 'land',
    status: 'EN',
    population: {
      de: 'rund 31.000–36.000 Vögel, gut die Hälfte in Spanien; in Deutschland wieder über 400',
      en: 'about 31,000–36,000 birds, over half in Spain; more than 400 again in Germany',
    },
    trend: 'down',
    length: 1,
    weight: 16,
    teaser: {
      de: 'Einer der schwersten flugfähigen Vögel der Welt – und ein Bewohner offener Felder in Europa.',
      en: 'One of the world’s heaviest flying birds – and an inhabitant of Europe’s open farmland.',
    },
    facts: {
      de: [
        'Hähne wiegen bis zu 18 kg, Hennen nur etwa ein Drittel davon.',
        'Bei der Balz stülpen Hähne ihr Gefieder um und verwandeln sich in einen weißen „Federball“.',
        'In Brandenburg leben Deutschlands letzte Großtrappen.',
      ],
      en: [
        'Males weigh up to 18 kg, females only about a third as much.',
        'Displaying males turn their plumage inside out into a white “feather ball”.',
        'Germany’s last great bustards live in Brandenburg.',
      ],
    },
    threats: {
      de: [
        'Intensive Landwirtschaft mit frühen Mähterminen zerstört Gelege.',
        'Kollisionen mit Stromleitungen sind eine Haupttodesursache.',
        'Füchse und andere Raubtiere fressen Eier und Küken.',
      ],
      en: [
        'Intensive farming with early mowing destroys nests.',
        'Collisions with power lines are a major cause of death.',
        'Foxes and other predators eat eggs and chicks.',
      ],
    },
    help: {
      de: [
        'In Brandenburg stieg der Bestand von 57 Vögeln (1997) auf über 400 – dank Schutzzäunen und Handaufzucht.',
        'Markierte Stromleitungen und Erdkabel verringern tödliche Anflüge.',
        'Vogelfreundlicher Ackerbau mit Brachen und späterer Mahd hilft vielen Feldvögeln.',
      ],
      en: [
        'In Brandenburg numbers rose from 57 birds (1997) to over 400 thanks to predator fences and hand-rearing.',
        'Marked or buried power lines reduce deadly collisions.',
        'Bird-friendly farming with fallow strips and later mowing helps many farmland birds.',
      ],
    },
    home: [39.5, -5.5],
    range: [[40, -4.5, 400], [52.5, 12.5, 100], [47.5, 19.5, 250], [50, 50, 1200]],
    relatives: BIRD_KIN,
    wiki: { de: 'Großtrappe', en: 'Great bustard' },
  },
  {
    id: 'steppenadler',
    sci: 'Aquila nipalensis',
    name: { de: 'Steppenadler', en: 'Steppe eagle' },
    group: 'bird',
    realm: 'land',
    status: 'EN',
    population: { de: '50.000–75.000 erwachsene Vögel', en: '50,000–75,000 adult birds' },
    trend: 'down',
    length: 0.75,
    weight: 3,
    teaser: {
      de: 'Ein großer Adler der eurasischen Steppen, dessen Bestand in wenigen Jahrzehnten eingebrochen ist.',
      en: 'A large eagle of the Eurasian steppes whose numbers have crashed within a few decades.',
    },
    facts: {
      de: [
        'Er brütet oft direkt auf dem Boden oder auf niedrigen Büschen.',
        'Seine Hauptbeute sind Ziesel und andere Steppennager.',
        'Im Winter zieht er bis nach Ostafrika, Arabien und Indien.',
      ],
      en: [
        'It often nests right on the ground or on low bushes.',
        'Its main prey are ground squirrels and other steppe rodents.',
        'In winter it migrates to East Africa, Arabia and India.',
      ],
    },
    threats: {
      de: [
        'Stromschläge an ungesicherten Masten töten jedes Jahr Tausende.',
        'Das Tierarzneimittel Diclofenac in Kadavern vergiftet überwinternde Adler in Südasien.',
        'Umpflügen der Steppe und Feuer zerstören Bodennester.',
      ],
      en: [
        'Electrocution on unsafe power poles kills thousands every year.',
        'The veterinary drug diclofenac in carcasses poisons wintering eagles in South Asia.',
        'Ploughing of steppe and wildfires destroy ground nests.',
      ],
    },
    help: {
      de: [
        'In Kasachstan und Russland werden Strommasten vogelsicher nachgerüstet.',
        'Indien, Nepal und Pakistan haben Diclofenac für Tiere verboten.',
        'Schutzgebiete in der Steppe sichern auch Ziesel als Beute.',
      ],
      en: [
        'Power poles are being retrofitted to be bird-safe in Kazakhstan and Russia.',
        'India, Nepal and Pakistan have banned diclofenac for livestock.',
        'Steppe reserves also protect the ground squirrels it eats.',
      ],
    },
    home: [49.0, 60.0],
    range: [[49, 60, 1500], [47, 95, 900], [10, 40, 1200]],
    relatives: BIRD_KIN,
    wiki: { de: 'Steppenadler', en: 'Steppe eagle' },
  },
  {
    id: 'streifenkiwi',
    sci: 'Apteryx mantelli',
    name: { de: 'Kiwi (Nördlicher Streifenkiwi)', en: 'Kiwi (North Island brown kiwi)' },
    group: 'bird',
    realm: 'land',
    status: 'VU',
    population: { de: 'rund 25.000 Vögel', en: 'around 25,000 birds' },
    trend: 'down',
    length: 0.45,
    weight: 2.5,
    teaser: {
      de: 'Neuseelands Nationalvogel riecht mit der Schnabelspitze und legt riesige Eier.',
      en: 'New Zealand’s national bird smells with the tip of its bill and lays enormous eggs.',
    },
    facts: {
      de: [
        'Als einziger Vogel hat der Kiwi Nasenlöcher an der Schnabelspitze und erschnüffelt Würmer im Boden.',
        'Ein Ei wiegt etwa ein Fünftel des Weibchens – im Verhältnis eines der größten Vogeleier.',
        'Kiwis sind flugunfähig, nachtaktiv und haben fast haarartige Federn.',
      ],
      en: [
        'It is the only bird with nostrils at the bill tip, sniffing out worms in the soil.',
        'One egg weighs about a fifth of the female – one of the largest relative to body size.',
        'Kiwi are flightless, nocturnal and have almost hair-like feathers.',
      ],
    },
    threats: {
      de: [
        'Hermeline und Katzen töten bis zu 95 % der Küken in ungeschützten Gebieten.',
        'Freilaufende Hunde töten erwachsene Kiwis.',
        'Lebensraumverlust durch Rodung und Straßen.',
      ],
      en: [
        'Stoats and cats kill up to 95% of chicks in unprotected areas.',
        'Roaming dogs kill adult kiwi.',
        'Habitat loss to clearing and roads.',
      ],
    },
    help: {
      de: [
        'Bei „Operation Nest Egg“ werden Eier ausgebrütet und Küken erst ausgewildert, wenn sie groß genug sind.',
        'Hunderte Gemeinschaftsprojekte stellen Fallen für Raubsäuger auf.',
        'In Kiwi-Gebieten Hunde an der Leine führen.',
      ],
      en: [
        'Through “Operation Nest Egg”, eggs are hatched in care and chicks released once big enough.',
        'Hundreds of community groups run traps for introduced predators.',
        'Keep dogs on a lead in kiwi areas.',
      ],
    },
    home: [-35.3, 174.0],
    range: [[-35.5, 174, 200], [-38.5, 176.5, 250]],
    relatives: BIRD_KIN,
    wiki: { de: 'Nordstreifenkiwi', en: 'North Island brown kiwi' },
  },
  {
    id: 'schneeeule',
    sci: 'Bubo scandiacus',
    name: { de: 'Schneeeule', en: 'Snowy owl' },
    group: 'bird',
    realm: 'land',
    status: 'VU',
    population: { de: 'rund 28.000 erwachsene Vögel (Schätzung)', en: 'about 28,000 adult birds (estimate)' },
    trend: 'down',
    length: 0.6,
    weight: 2,
    teaser: {
      de: 'Die weiße Eule der Tundra jagt auch bei Tageslicht – im arktischen Sommer bleibt ihr nichts anderes übrig.',
      en: 'The white owl of the tundra hunts by day too – in the Arctic summer it has no choice.',
    },
    facts: {
      de: [
        'Eine Schneeeule frisst im Jahr über 1.500 Lemminge.',
        'In guten Lemmingjahren legt sie bis zu 11 Eier, in schlechten brütet sie gar nicht.',
        'Alte Männchen sind fast reinweiß, Weibchen dunkel gesprenkelt.',
      ],
      en: [
        'One snowy owl eats more than 1,500 lemmings a year.',
        'In good lemming years it lays up to 11 eggs; in poor years it does not breed.',
        'Old males are almost pure white, females are darkly barred.',
      ],
    },
    threats: {
      de: [
        'Der Klimawandel stört die Lemmingzyklen und damit den Bruterfolg.',
        'Kollisionen mit Autos, Flugzeugen und Stromleitungen im Winterquartier.',
        'Tauendes Eis verändert die Tundra, ihren einzigen Brutlebensraum.',
      ],
      en: [
        'Climate change disrupts lemming cycles and thus breeding success.',
        'Collisions with cars, aircraft and power lines in winter quarters.',
        'Thawing ground is changing the tundra, its only breeding habitat.',
      ],
    },
    help: {
      de: [
        'Klimaschutz ist der wichtigste Schutz für die Tiere der Arktis.',
        'Flughäfen in Nordamerika fangen Schneeeulen ein und lassen sie andernorts frei, statt sie zu schießen.',
        'Beim Beobachten Abstand halten – Störungen kosten die Eulen im Winter viel Energie.',
      ],
      en: [
        'Tackling climate change is the best protection for Arctic wildlife.',
        'North American airports now capture and relocate snowy owls instead of shooting them.',
        'Keep your distance when watching – disturbance costs owls precious energy in winter.',
      ],
    },
    home: [71.0, -156.0],
    range: [[70, -150, 1200], [70, -90, 1500], [72, 0, 1200], [70, 100, 2000]],
    relatives: BIRD_KIN,
    wiki: { de: 'Schneeeule', en: 'Snowy owl' },
  },

  // ───────────────────── Reptilien & Amphibien ─────────────────────
  {
    id: 'komodowaran',
    sci: 'Varanus komodoensis',
    name: { de: 'Komodowaran', en: 'Komodo dragon' },
    group: 'reptile-amphibian',
    realm: 'land',
    status: 'EN',
    population: { de: 'rund 3.000 Tiere, davon etwa 1.400 erwachsene', en: 'about 3,000 animals, roughly 1,400 of them adults' },
    trend: 'stable',
    length: 2.6,
    weight: 70,
    teaser: {
      de: 'Die größte Echse der Welt jagt Hirsche und Wasserbüffel – mit Giftdrüsen im Unterkiefer.',
      en: 'The world’s largest lizard hunts deer and water buffalo – with venom glands in its lower jaw.',
    },
    facts: {
      de: [
        'Sein Gift senkt den Blutdruck und verhindert die Blutgerinnung der Beute.',
        'Weibchen können sich ohne Männchen fortpflanzen (Jungfernzeugung).',
        'Mit der gespaltenen Zunge riecht er Aas über mehrere Kilometer.',
      ],
      en: [
        'Its venom lowers blood pressure and stops the prey’s blood from clotting.',
        'Females can reproduce without males (parthenogenesis).',
        'Its forked tongue can smell carrion several kilometres away.',
      ],
    },
    threats: {
      de: [
        'Er lebt nur auf wenigen kleinen Inseln Indonesiens.',
        'Steigender Meeresspiegel könnte bis 2050 einen Teil seines Küstenlebensraums überfluten.',
        'Wilderei auf seine Beutetiere wie Mähnenhirsche.',
      ],
      en: [
        'It lives only on a few small Indonesian islands.',
        'Rising seas could flood part of its coastal habitat by 2050.',
        'Poaching of its prey such as Timor deer.',
      ],
    },
    help: {
      de: [
        'Der Komodo-Nationalpark (seit 1980, UNESCO-Welterbe) schützt den Großteil der Population.',
        'Ranger und Besucherlimits regeln den Tourismus.',
        'Wer den Park besucht, sollte nur geführte Touren mit lizenzierten Rangern buchen.',
      ],
      en: [
        'Komodo National Park (since 1980, a UNESCO World Heritage Site) protects most of the population.',
        'Rangers and visitor limits regulate tourism.',
        'Visitors should only book guided tours with licensed rangers.',
      ],
    },
    home: [-8.55, 119.45],
    range: [[-8.6, 119.5, 60], [-8.6, 120.4, 120]],
    relatives: ['mosasaurus', 'tylosaurus'],
    wiki: { de: 'Komodowaran', en: 'Komodo dragon' },
  },
  {
    id: 'gangesgavial',
    sci: 'Gavialis gangeticus',
    name: { de: 'Gangesgavial', en: 'Gharial' },
    group: 'reptile-amphibian',
    realm: 'freshwater',
    status: 'CR',
    population: { de: 'rund 650 erwachsene Tiere in freier Wildbahn', en: 'about 650 adults in the wild' },
    trend: 'up',
    length: 5,
    weight: 160,
    teaser: {
      de: 'Ein Krokodil mit Schnabel wie eine Pinzette – perfekt, um Fische zu fangen.',
      en: 'A crocodilian with a tweezer-like snout – perfect for catching fish.',
    },
    facts: {
      de: [
        'Männchen tragen eine knollige Verdickung auf der Schnauze, den „Ghara“ (Hindi für Topf).',
        'Mit über 100 scharfen Zähnen hält er glitschige Fische fest.',
        'An Land kann er sich kaum aufrichten – er lebt fast nur im Wasser.',
      ],
      en: [
        'Males have a bulbous knob on the snout called a “ghara” (Hindi for pot).',
        'More than 100 sharp teeth hold slippery fish.',
        'It can barely lift itself on land and spends almost all its time in water.',
      ],
    },
    threats: {
      de: [
        'Staudämme, Sandabbau und Wasserentnahme zerstören Sandbänke und Flussabschnitte.',
        'Er verfängt sich in Fischernetzen und ertrinkt.',
        'Flussverschmutzung schwächt die Tiere; 2007/08 starben über 100 im Chambal.',
      ],
      en: [
        'Dams, sand mining and water extraction destroy sandbanks and river stretches.',
        'It gets caught in fishing nets and drowns.',
        'River pollution weakens the animals; over 100 died in the Chambal in 2007–08.',
      ],
    },
    help: {
      de: [
        'Seit 1975 sammelt Indien Eier und wildert Jungtiere aus – der Bestand erholt sich langsam.',
        'Das National Chambal Sanctuary schützt den wichtigsten Rückzugsort.',
        'In Nepal leben im Chitwan-Nationalpark wieder mehr Gaviale als vor 20 Jahren.',
      ],
      en: [
        'Since 1975 India has collected eggs and released young – numbers are slowly recovering.',
        'The National Chambal Sanctuary protects the most important stronghold.',
        'In Nepal’s Chitwan National Park there are more gharials than 20 years ago.',
      ],
    },
    home: [26.6, 78.5],
    range: [[26.6, 78.5, 250], [27.5, 84.2, 100], [28.4, 81.2, 100], [26.8, 92.5, 150]],
    relatives: ['sarcosuchus', 'deinosuchus'],
    wiki: { de: 'Gangesgavial', en: 'Gharial' },
  },
  {
    id: 'orinoko-krokodil',
    sci: 'Crocodylus intermedius',
    name: { de: 'Orinoko-Krokodil', en: 'Orinoco crocodile' },
    group: 'reptile-amphibian',
    realm: 'freshwater',
    status: 'CR',
    population: { de: 'nur noch wenige Hundert erwachsene Tiere', en: 'only a few hundred adults left' },
    trend: 'down',
    length: 4.5,
    weight: 380,
    teaser: {
      de: 'Eines der größten Krokodile Amerikas – fast ausgerottet für Handtaschen und Schuhe.',
      en: 'One of the Americas’ largest crocodiles – nearly wiped out for handbags and shoes.',
    },
    facts: {
      de: [
        'Große Männchen können über 5 m lang werden.',
        'Es lebt ausschließlich im Orinoko-Becken in Venezuela und Kolumbien.',
        'Die Weibchen bewachen ihr Nest im Sand und helfen den Jungen beim Schlüpfen.',
      ],
      en: [
        'Large males can exceed 5 m in length.',
        'It lives only in the Orinoco basin of Venezuela and Colombia.',
        'Females guard their sandbank nests and help the young hatch.',
      ],
    },
    threats: {
      de: [
        'Massenhafte Jagd auf Häute zwischen 1930 und 1960 vernichtete fast alle Tiere.',
        'Eier und Jungtiere werden gesammelt und verkauft.',
        'Ölförderung, Landwirtschaft und Dämme verändern die Flüsse.',
      ],
      en: [
        'Mass hunting for skins between 1930 and 1960 wiped out almost all of them.',
        'Eggs and hatchlings are collected and sold.',
        'Oil, farming and dams are altering the rivers.',
      ],
    },
    help: {
      de: [
        'In Venezuela werden seit 1990 Jungtiere aufgezogen und ausgewildert.',
        'Kolumbien startete 2015 eigene Auswilderungen.',
        'Keine Produkte aus Krokodilleder unklarer Herkunft kaufen.',
      ],
      en: [
        'Venezuela has raised and released young crocodiles since 1990.',
        'Colombia began its own releases in 2015.',
        'Never buy crocodile-leather goods of unclear origin.',
      ],
    },
    home: [7.6, -67.5],
    range: [[7.5, -67.5, 400], [5.5, -71, 300]],
    relatives: ['sarcosuchus', 'deinosuchus'],
    wiki: { de: 'Orinoko-Krokodil', en: 'Orinoco crocodile' },
  },
  {
    id: 'philippinen-krokodil',
    sci: 'Crocodylus mindorensis',
    name: { de: 'Philippinen-Krokodil', en: 'Philippine crocodile' },
    group: 'reptile-amphibian',
    realm: 'freshwater',
    status: 'CR',
    population: { de: 'rund 90–140 erwachsene Tiere', en: 'about 90–140 adults' },
    trend: 'down',
    length: 2.5,
    weight: 15,
    teaser: {
      de: 'Ein kleines Süßwasserkrokodil, das nur auf den Philippinen lebt – und zu den seltensten der Welt gehört.',
      en: 'A small freshwater crocodile found only in the Philippines – and one of the rarest on Earth.',
    },
    facts: {
      de: [
        'Es wird meist kaum länger als 3 m und gilt als eher scheu.',
        'Es lebt in Teichen, Sümpfen und Nebenflüssen, nicht im Meer.',
        'Erst 1935 wurde es wissenschaftlich beschrieben.',
      ],
      en: [
        'It rarely grows longer than 3 m and is rather shy.',
        'It lives in ponds, marshes and tributaries – not at sea.',
        'It was only scientifically described in 1935.',
      ],
    },
    threats: {
      de: [
        'Die Umwandlung von Sümpfen in Reisfelder und Fischteiche.',
        'Tötung aus Angst und Ertrinken in Fischernetzen.',
        'Dynamitfischerei und Pestizide.',
      ],
      en: [
        'Conversion of marshes to rice fields and fish ponds.',
        'Killing out of fear and drowning in fishing nets.',
        'Blast fishing and pesticides.',
      ],
    },
    help: {
      de: [
        'Im Norden Luzons (San Mariano) schützen Gemeinden mit dem Projekt CROC Brutplätze und wildern Jungtiere aus.',
        'Seit 2001 ist das Töten per Gesetz streng verboten.',
        'Aufklärung in Schulen zeigt, dass das kleine Krokodil für Menschen kaum gefährlich ist.',
      ],
      en: [
        'In northern Luzon (San Mariano), communities protect nests and release young through the CROC project.',
        'Killing them has been strictly banned by law since 2001.',
        'School education shows the small crocodile poses little risk to people.',
      ],
    },
    home: [16.9, 122.1],
    range: [[16.9, 122.1, 150], [7.5, 125.0, 200]],
    relatives: ['sarcosuchus', 'deinosuchus'],
    wiki: { de: 'Philippinen-Krokodil', en: 'Philippine crocodile' },
  },
  {
    id: 'china-alligator',
    sci: 'Alligator sinensis',
    name: { de: 'Chinesischer Alligator', en: 'Chinese alligator' },
    group: 'reptile-amphibian',
    realm: 'freshwater',
    status: 'CR',
    population: {
      de: 'in der Natur wenige Hundert bis gut tausend (dank Auswilderung), über 10.000 in Zuchtstationen',
      en: 'a few hundred to over a thousand in the wild (thanks to releases), more than 10,000 in breeding centres',
    },
    trend: 'up',
    length: 1.5,
    weight: 36,
    teaser: {
      de: 'Der kleine Verwandte des Mississippi-Alligators überwintert in Erdhöhlen am Jangtse.',
      en: 'The little cousin of the American alligator spends the winter in burrows by the Yangtze.',
    },
    facts: {
      de: [
        'Er gräbt lange Tunnel, in denen er die kalten Monate verschläft.',
        'Auch die Augenlider sind mit kleinen Knochenplatten gepanzert.',
        'Er könnte eine Vorlage für den chinesischen Drachen gewesen sein.',
      ],
      en: [
        'It digs long burrows where it sleeps through the cold months.',
        'Even its eyelids are armoured with small bony plates.',
        'It may have helped inspire the Chinese dragon legend.',
      ],
    },
    threats: {
      de: [
        'Fast alle Feuchtgebiete am unteren Jangtse wurden zu Reisfeldern.',
        'Gifte aus der Landwirtschaft gelangen über Beutetiere in die Alligatoren.',
        'Die Restbestände leben in winzigen, voneinander getrennten Teichen.',
      ],
      en: [
        'Nearly all wetlands along the lower Yangtze were turned into rice fields.',
        'Farm chemicals reach the alligators through their prey.',
        'Remaining animals live in tiny, isolated ponds.',
      ],
    },
    help: {
      de: [
        'Zuchtstationen in Anhui züchten seit den 1980er-Jahren Tausende Alligatoren.',
        'Seit 2003 werden Tiere in renaturierte Feuchtgebiete ausgewildert – sie pflanzen sich dort wieder fort.',
      ],
      en: [
        'Breeding centres in Anhui have raised thousands of alligators since the 1980s.',
        'Since 2003, animals have been released into restored wetlands – and are breeding there again.',
      ],
    },
    home: [30.9, 118.8],
    range: [[30.9, 118.8, 150]],
    relatives: ['deinosuchus', 'sarcosuchus'],
    wiki: { de: 'China-Alligator', en: 'Chinese alligator' },
  },
  {
    id: 'galapagos-riesenschildkroete',
    sci: 'Chelonoidis niger',
    name: { de: 'Galápagos-Riesenschildkröte', en: 'Galápagos giant tortoise' },
    group: 'reptile-amphibian',
    realm: 'land',
    status: 'EN',
    population: {
      de: 'rund 20.000–25.000 Tiere (Tiefstand in den 1970ern: etwa 15.000)',
      en: 'about 20,000–25,000 animals (low point in the 1970s: about 15,000)',
    },
    trend: 'up',
    length: 1.5,
    weight: 250,
    teaser: {
      de: 'Die größte Landschildkröte der Welt kann über 100 Jahre alt werden – Darwin ritt einst auf ihr.',
      en: 'The world’s largest tortoise can live over 100 years – Darwin once rode on one.',
    },
    facts: {
      de: [
        'Jede Insel hat ihre eigene Form: Auf trockenen Inseln haben die Panzer einen „Sattel“, damit der Hals hoch reicht.',
        'Sie kann bis zu ein Jahr ohne Nahrung und Wasser auskommen.',
        '„Lonesome George“, der letzte seiner Pinta-Linie, starb 2012.',
      ],
      en: [
        'Each island has its own form: on dry islands the shells are “saddle-backed” so the neck can stretch high.',
        'It can survive up to a year without food or water.',
        '“Lonesome George”, the last of the Pinta line, died in 2012.',
      ],
    },
    threats: {
      de: [
        'Walfänger und Piraten nahmen Hunderttausende als lebenden Proviant mit.',
        'Eingeschleppte Ziegen, Ratten und Schweine fressen Futterpflanzen, Eier und Jungtiere.',
        'Wachsende Siedlungen und Straßen auf Santa Cruz.',
      ],
      en: [
        'Whalers and pirates took hundreds of thousands as living food supplies.',
        'Introduced goats, rats and pigs eat food plants, eggs and hatchlings.',
        'Growing settlements and roads on Santa Cruz.',
      ],
    },
    help: {
      de: [
        'Seit 1965 werden auf der Charles-Darwin-Station Jungtiere aufgezogen – über 10.000 wurden ausgewildert.',
        'Auf Española stieg der Bestand von 14 Tieren auf über 2.000.',
        'Ziegen wurden auf mehreren Inseln vollständig entfernt.',
      ],
      en: [
        'Since 1965 young tortoises have been reared at the Charles Darwin Station – over 10,000 released.',
        'On Española numbers rose from 14 animals to more than 2,000.',
        'Goats have been completely removed from several islands.',
      ],
    },
    home: [-0.65, -90.4],
    range: [[-0.6, -90.8, 200]],
    relatives: ['archelon'],
    wiki: { de: 'Galapagos-Riesenschildkröten', en: 'Galápagos tortoise' },
  },
  {
    id: 'strahlenschildkroete',
    sci: 'Astrochelys radiata',
    name: { de: 'Strahlenschildkröte', en: 'Radiated tortoise' },
    group: 'reptile-amphibian',
    realm: 'land',
    status: 'CR',
    population: {
      de: 'unbekannt; seit 2000 um mehr als die Hälfte geschrumpft',
      en: 'unknown; has shrunk by more than half since 2000',
    },
    trend: 'down',
    length: 0.4,
    weight: 13,
    teaser: {
      de: 'Ihr Panzer trägt gelbe Sternstrahlen – leider macht genau das sie bei Schmugglern begehrt.',
      en: 'Its shell is decorated with yellow starbursts – which is exactly why smugglers want it.',
    },
    facts: {
      de: [
        'Sie lebt nur im trockenen Dornbusch im Süden Madagaskars.',
        'Die Schildkröte „Tu’i Malila“ soll 188 Jahre alt geworden sein.',
        'Bei manchen Volksgruppen ist es tabu, sie zu berühren oder zu essen – das schützte sie lange.',
      ],
      en: [
        'It lives only in the dry spiny forest of southern Madagascar.',
        'A tortoise named “Tu’i Malila” is said to have lived 188 years.',
        'Some local peoples consider touching or eating it taboo, which long protected it.',
      ],
    },
    threats: {
      de: [
        'Wilderei für Fleisch und den illegalen Tierhandel nach Asien.',
        'Rodung des Dornwaldes für Holzkohle und Felder.',
        'Bei Razzien wurden schon über 10.000 Tiere auf einmal beschlagnahmt.',
      ],
      en: [
        'Poaching for meat and the illegal pet trade to Asia.',
        'Clearing of the spiny forest for charcoal and fields.',
        'Raids have seized more than 10,000 tortoises at once.',
      ],
    },
    help: {
      de: [
        'Beschlagnahmte Tiere werden in Madagaskar gepflegt und wieder ausgewildert.',
        'Gemeinden schließen Schutzverträge (Dina), die Wilderei bestrafen.',
        'Keine Schildkröten aus unklarer Herkunft kaufen; CITES-Papiere prüfen.',
      ],
      en: [
        'Confiscated tortoises are cared for in Madagascar and released again.',
        'Communities adopt local protection pacts (dina) that punish poaching.',
        'Never buy tortoises of unclear origin; always check CITES papers.',
      ],
    },
    home: [-24.5, 44.5],
    range: [[-24.5, 44.5, 250]],
    relatives: ['archelon'],
    wiki: { de: 'Strahlenschildkröte', en: 'Radiated tortoise' },
  },
  {
    id: 'brueckenechse',
    sci: 'Sphenodon punctatus',
    name: { de: 'Brückenechse (Tuatara)', en: 'Tuatara' },
    group: 'reptile-amphibian',
    realm: 'land',
    status: 'LC',
    population: { de: 'rund 60.000–100.000 Tiere auf etwa 30 Inseln', en: 'about 60,000–100,000 animals on some 30 islands' },
    trend: 'stable',
    length: 0.6,
    weight: 1,
    teaser: {
      de: 'Keine Echse, sondern der letzte Überlebende einer Reptilienlinie aus der Zeit der Dinosaurier.',
      en: 'Not a lizard but the last survivor of a reptile lineage from the age of dinosaurs.',
    },
    facts: {
      de: [
        'Sie hat ein lichtempfindliches „drittes Auge“ auf dem Scheitel.',
        'Sie verträgt Kälte bis 5 °C – für Reptilien ungewöhnlich.',
        'Die Temperatur im Nest bestimmt, ob Männchen oder Weibchen schlüpfen.',
      ],
      en: [
        'It has a light-sensitive “third eye” on top of its head.',
        'It stays active at temperatures as low as 5 °C – unusual for a reptile.',
        'Nest temperature decides whether males or females hatch.',
      ],
    },
    threats: {
      de: [
        'Eingeschleppte Ratten fressen Eier und Jungtiere.',
        'Wärmere Nester durch den Klimawandel könnten fast nur noch Männchen hervorbringen.',
        'Auf dem Festland ist sie seit Jahrhunderten verschwunden.',
      ],
      en: [
        'Introduced rats eat eggs and young.',
        'Warmer nests due to climate change could produce almost only males.',
        'It vanished from the mainland centuries ago.',
      ],
    },
    help: {
      de: [
        'Rattenfreie Inseln sind heute ihre wichtigsten Rückzugsorte.',
        'Seit 2005 lebt sie im eingezäunten Schutzgebiet Zealandia in Wellington – und brütet dort wieder auf dem Festland.',
      ],
      en: [
        'Rat-free islands are now its key refuges.',
        'Since 2005 it has lived in the fenced Zealandia sanctuary in Wellington – breeding on the mainland again.',
      ],
    },
    home: [-41.0, 174.0],
    range: [[-41, 174, 150], [-35.5, 174.7, 150]],
    relatives: ['mosasaurus'],
    wiki: { de: 'Brückenechse', en: 'Tuatara' },
  },
  {
    id: 'axolotl',
    sci: 'Ambystoma mexicanum',
    name: { de: 'Axolotl', en: 'Axolotl' },
    group: 'reptile-amphibian',
    realm: 'freshwater',
    status: 'CR',
    population: {
      de: 'in der Natur nur noch wenige Hundert bis Tausend; Millionen in Aquarien und Laboren',
      en: 'only a few hundred to a thousand in the wild; millions in aquariums and labs',
    },
    trend: 'down',
    length: 0.25,
    weight: 0.1,
    teaser: {
      de: 'Der „ewig junge“ Schwanzlurch aus Mexiko-Stadt kann sogar Teile von Herz und Gehirn nachwachsen lassen.',
      en: 'The “forever young” salamander from Mexico City can regrow parts of even its heart and brain.',
    },
    facts: {
      de: [
        'Er bleibt sein Leben lang im Larvenstadium – mit federartigen Außenkiemen.',
        'Er regeneriert ganze Beine, Rückenmark und Augenteile ohne Narben.',
        'Der Name stammt aus dem Aztekischen und bedeutet etwa „Wasserhund“.',
      ],
      en: [
        'It stays in its larval form for life, keeping feathery external gills.',
        'It can regrow whole legs, spinal cord and parts of its eyes without scars.',
        'Its name comes from the Aztec language and roughly means “water dog”.',
      ],
    },
    threats: {
      de: [
        'Sein letzter Lebensraum sind die Kanäle von Xochimilco – verschmutzt und schrumpfend.',
        'Ausgesetzte Karpfen und Tilapia fressen Eier und Jungtiere.',
        'Die Großstadt entnimmt immer mehr Grundwasser.',
      ],
      en: [
        'Its last habitat is the canals of Xochimilco – polluted and shrinking.',
        'Introduced carp and tilapia eat eggs and young.',
        'The megacity pumps out ever more groundwater.',
      ],
    },
    help: {
      de: [
        'Bauern in Xochimilco legen „Chinampa-Refugien“ an: gefilterte Kanäle ohne Raubfische.',
        'Gemüse aus diesen Chinampas trägt ein Schutzsiegel.',
        'Aquarien-Axolotl niemals in Gewässer aussetzen.',
      ],
      en: [
        'Farmers in Xochimilco create “chinampa refuges”: filtered canals without predatory fish.',
        'Vegetables from these chinampas carry a conservation label.',
        'Never release pet axolotls into the wild.',
      ],
    },
    home: [19.27, -99.1],
    range: [[19.27, -99.1, 15]],
    relatives: ['tiktaalik'],
    wiki: { de: 'Axolotl', en: 'Axolotl' },
  },
  {
    id: 'chinesischer-riesensalamander',
    sci: 'Andrias davidianus',
    name: { de: 'Chinesischer Riesensalamander', en: 'Chinese giant salamander' },
    group: 'reptile-amphibian',
    realm: 'freshwater',
    status: 'CR',
    population: {
      de: 'in der Natur extrem selten; Millionen leben in Zuchtfarmen',
      en: 'extremely rare in the wild; millions live on farms',
    },
    trend: 'down',
    length: 1.2,
    weight: 25,
    teaser: {
      de: 'Das größte Amphib der Welt wird so lang wie ein Mensch groß ist – und ist fast verschwunden.',
      en: 'The world’s largest amphibian can grow as long as a person is tall – and has nearly vanished.',
    },
    facts: {
      de: [
        'Rekordtiere wurden 1,8 m lang.',
        'Er atmet überwiegend durch die faltige Haut.',
        'Seine Rufe klingen wie ein weinendes Kind – in China heißt er „Kinderfisch“.',
      ],
      en: [
        'Record animals reached 1.8 m in length.',
        'It breathes mainly through its wrinkly skin.',
        'Its calls sound like a crying baby – in China it is called the “baby fish”.',
      ],
    },
    threats: {
      de: [
        'Er wird als Delikatesse gegessen; Wildtiere werden für Farmen gefangen.',
        'Ausgesetzte Farmtiere sind oft andere Linien und vermischen sich mit Wildpopulationen.',
        'Dämme und Verschmutzung zerstören klare, kühle Bergbäche.',
      ],
      en: [
        'It is eaten as a delicacy; wild animals are caught to stock farms.',
        'Released farm animals often belong to other lineages and mix with wild populations.',
        'Dams and pollution destroy clear, cool mountain streams.',
      ],
    },
    help: {
      de: [
        'Studien von 2018–2019 zeigten: Es gibt mehrere Arten – Auswilderungen müssen genetisch passen.',
        'China hat Schutzgebiete an Gebirgsbächen eingerichtet.',
        'Kein Fleisch oder Produkte vom Riesensalamander kaufen.',
      ],
      en: [
        'Studies in 2018–2019 showed there are several species – releases must be genetically matched.',
        'China has set up reserves along mountain streams.',
        'Never buy giant salamander meat or products.',
      ],
    },
    home: [33.0, 110.5],
    range: [[30, 110, 700], [25, 113, 400]],
    relatives: ['tiktaalik'],
    wiki: { de: 'Chinesischer Riesensalamander', en: 'Chinese giant salamander' },
  },
  {
    id: 'grottenolm',
    sci: 'Proteus anguinus',
    name: { de: 'Grottenolm', en: 'Olm' },
    group: 'reptile-amphibian',
    realm: 'freshwater',
    status: 'VU',
    population: { de: 'unbekannt; lebt verborgen in unterirdischen Gewässern', en: 'unknown; it lives hidden in underground waters' },
    trend: 'down',
    length: 0.3,
    weight: 0.02,
    teaser: {
      de: 'Ein blasser, blinder Höhlenlurch, der bis zu 100 Jahre alt wird und zehn Jahre ohne Futter auskommt.',
      en: 'A pale, blind cave salamander that can live 100 years and go ten years without food.',
    },
    facts: {
      de: [
        'Er lebt nur in Karsthöhlen des Dinarischen Gebirges von Slowenien bis Herzegowina.',
        'Früher hielten Menschen ihn für ein Drachenjunges, das bei Hochwasser aus den Höhlen gespült wurde.',
        'Ein Tier in Bosnien saß über sieben Jahre fast unbewegt an derselben Stelle.',
      ],
      en: [
        'It lives only in karst caves of the Dinaric Alps, from Slovenia to Herzegovina.',
        'People once thought it was a baby dragon washed out of caves by floods.',
        'One olm in Bosnia stayed in nearly the same spot for over seven years.',
      ],
    },
    threats: {
      de: [
        'Gülle, Abwässer und Industriegifte sickern schnell durch den Karst ins Höhlenwasser.',
        'Wasserkraftwerke und Wasserentnahme verändern unterirdische Flüsse.',
        'Illegaler Fang für Sammler.',
      ],
      en: [
        'Manure, sewage and industrial chemicals seep quickly through karst into cave water.',
        'Hydropower and water extraction alter underground rivers.',
        'Illegal collection for collectors.',
      ],
    },
    help: {
      de: [
        'Er ist in allen Ländern seines Verbreitungsgebietes und nach EU-Recht streng geschützt.',
        'In der Höhle von Postojna (Slowenien) werden Olme erforscht und Besucher aufgeklärt.',
        'Sauberes Grundwasser in Karstgebieten schützt auch unser Trinkwasser.',
      ],
      en: [
        'It is strictly protected throughout its range and under EU law.',
        'Postojna Cave in Slovenia studies olms and educates visitors.',
        'Clean groundwater in karst areas also protects our drinking water.',
      ],
    },
    home: [45.78, 14.2],
    range: [[45.8, 14.5, 120], [44.5, 16, 200], [43.2, 17.8, 120]],
    relatives: ['tiktaalik'],
    wiki: { de: 'Grottenolm', en: 'Olm' },
  },
  {
    id: 'goldfroeschchen',
    sci: 'Mantella aurantiaca',
    name: { de: 'Goldene Mantella (Goldfröschchen)', en: 'Golden mantella' },
    group: 'reptile-amphibian',
    realm: 'land',
    status: 'EN',
    population: { de: 'unbekannt; nur wenige verstreute Vorkommen', en: 'unknown; only a few scattered populations' },
    trend: 'down',
    length: 0.025,
    teaser: {
      de: 'Ein winziger, leuchtend orangefarbener Frosch aus Madagaskar, dessen Farbe „Ich bin giftig!“ ruft.',
      en: 'A tiny, bright orange frog from Madagascar whose colour shouts “I’m poisonous!”.',
    },
    facts: {
      de: [
        'Das Gift stammt aus Ameisen und Milben, die er frisst.',
        'Er ist nur 2–3 cm groß.',
        'Er lebt in wenigen feuchten Waldstücken bei Moramanga im Osten Madagaskars.',
      ],
      en: [
        'Its toxins come from the ants and mites it eats.',
        'It is only 2–3 cm long.',
        'It lives in a few damp forest patches near Moramanga in eastern Madagascar.',
      ],
    },
    threats: {
      de: [
        'Rodung und Bergbau (z. B. Nickelabbau) zerstören seinen kleinen Lebensraum.',
        'Fang für den internationalen Heimtierhandel.',
        'Der Chytridpilz ist auf Madagaskar angekommen und bedroht viele Frösche.',
      ],
      en: [
        'Clearing and mining (e.g. nickel) destroy its tiny habitat.',
        'Collection for the international pet trade.',
        'Chytrid fungus has reached Madagascar and threatens many frogs.',
      ],
    },
    help: {
      de: [
        'Madagaskar hat die Ausfuhr streng begrenzt; die Art steht im CITES-Anhang II.',
        'Zoos halten Reservepopulationen für eine mögliche Auswilderung.',
        'Nur Frösche aus nachgewiesener Nachzucht halten.',
      ],
      en: [
        'Madagascar strictly limits exports; the species is on CITES Appendix II.',
        'Zoos keep backup populations for possible reintroduction.',
        'Only keep frogs from proven captive breeding.',
      ],
    },
    home: [-18.95, 48.25],
    range: [[-18.9, 48.2, 60]],
    relatives: ['tiktaalik'],
    wiki: { de: 'Goldfröschchen', en: 'Golden mantella' },
  },
  {
    id: 'panama-goldfrosch',
    sci: 'Atelopus zeteki',
    name: { de: 'Panamaischer Goldfrosch', en: 'Panamanian golden frog' },
    group: 'reptile-amphibian',
    realm: 'land',
    status: 'CR',
    population: {
      de: 'seit 2009 in der Natur nicht mehr nachgewiesen (möglicherweise ausgestorben); rund 2.000 in Zoos',
      en: 'not recorded in the wild since 2009 (possibly extinct there); about 2,000 in zoos',
    },
    trend: 'unknown',
    length: 0.05,
    teaser: {
      de: 'Panamas Glücksbringer winkt mit den Händen – und überlebt heute fast nur noch in Zoos.',
      en: 'Panama’s good-luck symbol waves its hands – and today survives almost only in zoos.',
    },
    facts: {
      de: [
        'Am lauten Bergbach verständigen sich die Frösche durch „Winken“ mit den Vorderbeinen.',
        'Eigentlich eine Kröte: Die Gattung heißt Stummelfußfrösche.',
        'In Panama gilt er als Glückssymbol; am 14. August ist „Nationaler Goldfrosch-Tag“.',
      ],
      en: [
        'Beside noisy mountain streams the frogs communicate by “waving” their front legs.',
        'It is actually a toad, belonging to the harlequin toads.',
        'In Panama it is a symbol of good luck; 14 August is National Golden Frog Day.',
      ],
    },
    threats: {
      de: [
        'Der Chytridpilz (Bd) rottete ab 2004 fast alle wilden Tiere aus.',
        'Fang für Sammler und Abholzung schwächten die Bestände schon vorher.',
      ],
      en: [
        'Chytrid fungus (Bd) wiped out almost all wild frogs from 2004 onwards.',
        'Collection and deforestation had already weakened populations.',
      ],
    },
    help: {
      de: [
        'Kurz vor der Pilzwelle wurden Tiere gerettet; das Projekt „Project Golden Frog“ züchtet sie in Zoos.',
        'Forschende testen pilzhemmende Hautbakterien und resistente Linien für spätere Auswilderungen.',
        'Schuhe und Ausrüstung nach Wanderungen in Tropenwäldern reinigen, um Pilzsporen nicht zu verbreiten.',
      ],
      en: [
        'Frogs were rescued just before the fungus arrived and are bred in zoos by Project Golden Frog.',
        'Researchers test protective skin bacteria and resistant lines for future releases.',
        'Clean boots and gear after rainforest hikes to avoid spreading fungal spores.',
      ],
    },
    home: [8.6, -80.1],
    range: [[8.6, -80.1, 60]],
    relatives: ['tiktaalik'],
    wiki: { de: 'Panama-Stummelfußfrosch', en: 'Panamanian golden frog' },
  },

  // ───────────────────────── Süßwasser ─────────────────────────
  {
    id: 'amazonasdelfin',
    sci: 'Inia geoffrensis',
    name: { de: 'Amazonasdelfin (Boto)', en: 'Amazon river dolphin (boto)' },
    group: 'freshwater',
    realm: 'freshwater',
    status: 'EN',
    population: { de: 'unbekannt, vermutlich Zehntausende – aber rasch abnehmend', en: 'unknown, probably tens of thousands – but falling fast' },
    trend: 'down',
    length: 2.3,
    weight: 160,
    teaser: {
      de: 'Der rosa Flussdelfin schwimmt zur Regenzeit durch überflutete Wälder zwischen Baumstämmen hindurch.',
      en: 'The pink river dolphin swims between tree trunks in flooded forests during the rainy season.',
    },
    facts: {
      de: [
        'Er ist der größte Flussdelfin; Männchen werden mit dem Alter immer rosaner.',
        'Seine Halswirbel sind nicht verwachsen – er kann den Kopf um 90° drehen.',
        'In Legenden verwandelt sich der Boto nachts in einen eleganten Mann.',
      ],
      en: [
        'It is the largest river dolphin; males turn pinker with age.',
        'Its neck vertebrae are unfused, so it can turn its head 90°.',
        'Legends say the boto turns into an elegant man at night.',
      ],
    },
    threats: {
      de: [
        'Er wird als Köder für den Piracatinga-Wels getötet.',
        'Quecksilber aus illegalem Goldabbau vergiftet Flüsse.',
        'Staudämme trennen Populationen; Dürren 2023 töteten am Tefé-See über 200 Delfine.',
      ],
      en: [
        'It is killed for use as bait for piracatinga catfish.',
        'Mercury from illegal gold mining poisons rivers.',
        'Dams split populations; drought in 2023 killed over 200 dolphins at Lake Tefé.',
      ],
    },
    help: {
      de: [
        '2023 unterzeichneten elf Länder die „Globale Erklärung für Flussdelfine“.',
        'Brasilien verbot zeitweise den Piracatinga-Fang, um die Delfinjagd zu stoppen.',
        'Kein Gold aus unklarer Herkunft kaufen – Recyclinggold verursacht kein Quecksilber.',
      ],
      en: [
        'In 2023, eleven countries signed the Global Declaration for River Dolphins.',
        'Brazil temporarily banned piracatinga fishing to stop dolphin killing.',
        'Avoid gold of unclear origin – recycled gold causes no mercury pollution.',
      ],
    },
    home: [-3.35, -64.7],
    range: [[-3.5, -64, 1200], [-12, -65, 500], [6, -66, 500]],
    relatives: ['basilosaurus', 'ambulocetus'],
    wiki: { de: 'Amazonasdelfin', en: 'Amazon river dolphin' },
  },
  {
    id: 'gangesdelfin',
    sci: 'Platanista gangetica',
    name: { de: 'Ganges-Delfin', en: 'Ganges river dolphin' },
    group: 'freshwater',
    realm: 'freshwater',
    status: 'EN',
    population: {
      de: 'rund 6.300 in Indien (Zählung 2025), dazu einige Hundert in Bangladesch und Nepal',
      en: 'about 6,300 in India (2025 survey), plus a few hundred in Bangladesh and Nepal',
    },
    trend: 'down',
    length: 2.4,
    weight: 85,
    teaser: {
      de: 'Ein fast blinder Delfin, der im trüben Ganges mit Echoortung jagt und dabei oft auf der Seite schwimmt.',
      en: 'A nearly blind dolphin that hunts by echolocation in the murky Ganges, often swimming on its side.',
    },
    facts: {
      de: [
        'Seine Augen haben keine Linse; er unterscheidet nur hell und dunkel.',
        'Sein langer, schmaler Schnabel ist voller spitzer Zähne.',
        'Seit 2009 ist er Indiens Nationales Wassertier.',
      ],
      en: [
        'Its eyes lack a lens; it can only tell light from dark.',
        'Its long, slender beak is full of pointed teeth.',
        'Since 2009 it has been India’s National Aquatic Animal.',
      ],
    },
    threats: {
      de: [
        'Staudämme und Wehre zerschneiden die Flüsse und senken den Wasserstand.',
        'Er verfängt sich in Kiemennetzen.',
        'Abwässer, Pestizide und Schiffsverkehr belasten seinen Lebensraum.',
      ],
      en: [
        'Dams and barrages fragment rivers and lower water levels.',
        'It gets entangled in gillnets.',
        'Sewage, pesticides and boat traffic degrade its habitat.',
      ],
    },
    help: {
      de: [
        'Das Vikramshila-Schutzgebiet in Bihar schützt seit 1991 einen 60 km langen Flussabschnitt.',
        'Indiens „Project Dolphin“ (seit 2020) zählt die Tiere und reduziert Gefahren.',
        'Sauberere Flüsse durch Kläranlagen helfen Delfinen und Menschen.',
      ],
      en: [
        'Bihar’s Vikramshila sanctuary has protected a 60 km river stretch since 1991.',
        'India’s Project Dolphin (since 2020) counts dolphins and reduces threats.',
        'Cleaner rivers through sewage treatment benefit dolphins and people alike.',
      ],
    },
    home: [25.3, 87.0],
    range: [[25.5, 84, 600], [26.3, 91.5, 400], [23, 90, 250]],
    relatives: ['basilosaurus', 'ambulocetus'],
    wiki: { de: 'Gangesdelfin', en: 'Ganges river dolphin' },
  },
  {
    id: 'jangtse-glattschweinswal',
    sci: 'Neophocaena asiaeorientalis asiaeorientalis',
    gbif: 'Neophocaena asiaeorientalis',
    name: { de: 'Jangtse-Glattschweinswal', en: 'Yangtze finless porpoise' },
    group: 'freshwater',
    realm: 'freshwater',
    status: 'CR',
    population: { de: 'rund 1.250 Tiere (Zählung 2022, Anstieg seit 2017)', en: 'about 1,250 animals (2022 survey, up since 2017)' },
    trend: 'down',
    length: 1.6,
    weight: 50,
    teaser: {
      de: 'Ein Schweinswal mit „Lächeln“ und ohne Rückenflosse – der einzige Wal im Jangtse seit dem Aus des Baiji.',
      en: 'A “smiling” porpoise without a dorsal fin – the Yangtze’s only cetacean since the baiji vanished.',
    },
    facts: {
      de: [
        'Als einziger Schweinswal lebt er dauerhaft im Süßwasser.',
        'Statt einer Rückenflosse hat er einen Hautkamm mit kleinen Höckern.',
        'Sein naher Nachbar, der Jangtse-Flussdelfin (Baiji), gilt seit 2006 als ausgestorben.',
      ],
      en: [
        'It is the only porpoise that lives permanently in fresh water.',
        'Instead of a dorsal fin it has a ridge of small bumps.',
        'Its river neighbour, the baiji, has been considered extinct since 2006.',
      ],
    },
    threats: {
      de: [
        'Illegale Elektrofischerei und Netze töten Tiere und rauben ihnen die Nahrung.',
        'Sandabbau, Schiffslärm und Kollisionen mit Booten.',
        'Staudämme wie der Drei-Schluchten-Damm veränderten den Fluss.',
      ],
      en: [
        'Illegal electrofishing and nets kill porpoises and their prey.',
        'Sand dredging, ship noise and boat strikes.',
        'Dams such as the Three Gorges Dam have transformed the river.',
      ],
    },
    help: {
      de: [
        'Seit 2021 gilt am Jangtse ein zehnjähriges Fischereiverbot – erste Erfolge sind messbar.',
        'Tiere wurden in geschützte Altarme wie Tian-e-Zhou umgesiedelt, wo sie sich vermehren.',
      ],
      en: [
        'A ten-year fishing ban on the Yangtze has been in force since 2021 – with early results.',
        'Porpoises were moved into protected oxbow lakes such as Tian-e-Zhou, where they breed.',
      ],
    },
    home: [29.8, 116.0],
    range: [[30.0, 114.0, 400], [31.5, 118.5, 300], [29.1, 116.3, 80], [29.0, 112.8, 80]],
    relatives: ['basilosaurus', 'ambulocetus'],
    wiki: { de: 'Jangtse-Glattschweinswal', en: 'Yangtze finless porpoise' },
  },
  {
    id: 'mekong-riesenwels',
    sci: 'Pangasianodon gigas',
    name: { de: 'Mekong-Riesenwels', en: 'Mekong giant catfish' },
    group: 'freshwater',
    realm: 'freshwater',
    status: 'CR',
    population: { de: 'unbekannt, vermutlich nur wenige Hundert erwachsene Fische', en: 'unknown, probably only a few hundred adults' },
    trend: 'down',
    length: 2.7,
    weight: 200,
    teaser: {
      de: 'Einer der größten Süßwasserfische der Welt – ein Wels ohne Zähne, der Algen und Pflanzen frisst.',
      en: 'One of the largest freshwater fish on Earth – a toothless catfish that eats algae and plants.',
    },
    facts: {
      de: [
        'Ein 2005 in Thailand gefangener Fisch wog 293 kg.',
        'Erwachsene Tiere haben keine Zähne und keine Barteln.',
        'Er wandert zum Laichen Hunderte Kilometer flussaufwärts.',
      ],
      en: [
        'A fish caught in Thailand in 2005 weighed 293 kg.',
        'Adults have no teeth and no barbels.',
        'It migrates hundreds of kilometres upstream to spawn.',
      ],
    },
    threats: {
      de: [
        'Staudämme am Mekong blockieren die Wanderwege zu den Laichplätzen.',
        'Überfischung – große Fische werden gezielt gefangen.',
        'Sandabbau und Flussbegradigung zerstören tiefe Becken.',
      ],
      en: [
        'Mekong dams block migration routes to spawning grounds.',
        'Overfishing – big fish are deliberately targeted.',
        'Sand mining and channel works destroy deep pools.',
      ],
    },
    help: {
      de: [
        'In Thailand und Kambodscha kaufen Projekte gefangene Riesenwelse frei und lassen sie wieder schwimmen.',
        'Geschützte tiefe Becken („Deep Pools“) im Mekong dienen als Rückzugsorte.',
        'Freifließende Flüsse ohne neue Großdämme erhalten Wanderfische.',
      ],
      en: [
        'In Thailand and Cambodia, projects buy caught giant catfish from fishers and release them.',
        'Protected deep pools in the Mekong serve as refuges.',
        'Keeping rivers free-flowing without new large dams protects migratory fish.',
      ],
    },
    home: [13.5, 105.97],
    range: [[13.5, 106, 300], [12.5, 104.5, 150], [19.5, 101, 300]],
    wiki: { de: 'Mekong-Riesenwels', en: 'Mekong giant catfish' },
  },
  {
    id: 'hausen',
    sci: 'Huso huso',
    name: { de: 'Hausen (Beluga-Stör)', en: 'Beluga sturgeon' },
    group: 'freshwater',
    realm: 'freshwater',
    status: 'CR',
    population: {
      de: 'unbekannt; die natürliche Fortpflanzung ist fast zum Erliegen gekommen',
      en: 'unknown; natural reproduction has almost ceased',
    },
    trend: 'down',
    length: 4,
    weight: 400,
    teaser: {
      de: 'Der größte Fisch Europas wird über 100 Jahre alt – und wurde für Kaviar fast ausgerottet.',
      en: 'Europe’s largest fish can live over 100 years – and was almost wiped out for caviar.',
    },
    facts: {
      de: [
        'Rekordtiere sollen über 7 m lang und mehr als 1.500 kg schwer gewesen sein.',
        'Er lebt im Schwarzen und Kaspischen Meer und zieht zum Laichen weit in Flüsse wie Wolga und Donau.',
        'Weibchen laichen erst mit etwa 15–20 Jahren zum ersten Mal.',
      ],
      en: [
        'Record fish are said to have exceeded 7 m and 1,500 kg.',
        'It lives in the Black and Caspian Seas and migrates far up rivers like the Volga and Danube to spawn.',
        'Females first spawn at around 15–20 years of age.',
      ],
    },
    threats: {
      de: [
        'Wilderei für Beluga-Kaviar, einen der teuersten Lebensmittel der Welt.',
        'Staudämme wie das Eiserne Tor an der Donau versperren die Laichwanderung.',
        'Verschmutzung und Flussverbauung zerstören Laichplätze.',
      ],
      en: [
        'Poaching for beluga caviar, one of the world’s most expensive foods.',
        'Dams such as the Iron Gates on the Danube block spawning migrations.',
        'Pollution and river engineering destroy spawning grounds.',
      ],
    },
    help: {
      de: [
        'Der Handel mit wildem Kaviar ist streng reguliert; Rumänien verbietet den Störfang seit 2006.',
        'An der Donau werden Jungstöre aus Zucht besetzt und Fischtreppen an Dämmen geplant.',
        'Nur Kaviar aus zertifizierter Aquakultur (CITES-Etikett) kaufen – oder ganz verzichten.',
      ],
      en: [
        'Trade in wild caviar is strictly regulated; Romania has banned sturgeon fishing since 2006.',
        'Hatchery-raised young sturgeons are stocked in the Danube, and fish passes at dams are planned.',
        'Only buy caviar from certified aquaculture (CITES label) – or skip it altogether.',
      ],
    },
    home: [45.5, 29.5],
    range: [[43.5, 34, 500], [42, 51, 600], [45, 29, 300], [47, 46, 400]],
    wiki: { de: 'Europäischer Hausen', en: 'Beluga (sturgeon)' },
  },
  {
    id: 'chinesischer-stoer',
    sci: 'Acipenser sinensis',
    name: { de: 'Chinesischer Stör', en: 'Chinese sturgeon' },
    group: 'freshwater',
    realm: 'freshwater',
    status: 'CR',
    population: {
      de: 'wenige Hundert erwachsene Wildfische; seit 2017 keine natürliche Fortpflanzung mehr beobachtet',
      en: 'a few hundred wild adults; no natural spawning observed since 2017',
    },
    trend: 'down',
    length: 4,
    weight: 400,
    teaser: {
      de: 'Ein „lebendes Fossil“, das seit über 140 Millionen Jahren existiert – und am Jangtse fast verschwunden ist.',
      en: 'A “living fossil” lineage over 140 million years old – now nearly gone from the Yangtze.',
    },
    facts: {
      de: [
        'Er wächst im Meer heran und wandert zum Laichen bis zu 3.000 km den Jangtse hinauf.',
        'Er kann über 5 m lang und 500 kg schwer werden.',
        'Statt Schuppen trägt er Reihen von Knochenplatten.',
      ],
      en: [
        'It grows up at sea and travels up to 3,000 km up the Yangtze to spawn.',
        'It can exceed 5 m and 500 kg.',
        'Instead of scales it carries rows of bony plates.',
      ],
    },
    threats: {
      de: [
        'Der Gezhouba-Damm (1981) schnitt ihn von allen ursprünglichen Laichplätzen ab.',
        'Der Drei-Schluchten-Damm veränderte Wassertemperatur und Strömung am letzten Laichplatz.',
        'Schiffsverkehr, Beifang und Verschmutzung.',
      ],
      en: [
        'The Gezhouba Dam (1981) cut it off from all its original spawning grounds.',
        'The Three Gorges Dam changed water temperature and flow at its last spawning site.',
        'Shipping, bycatch and pollution.',
      ],
    },
    help: {
      de: [
        'China setzt seit den 1980ern jährlich Tausende nachgezüchtete Jungstöre aus.',
        'Das Fischereiverbot am Jangtse seit 2021 schützt auch die Störe.',
      ],
      en: [
        'Since the 1980s China has released thousands of hatchery-bred young sturgeons each year.',
        'The Yangtze fishing ban since 2021 also protects the sturgeons.',
      ],
    },
    home: [30.7, 111.3],
    range: [[30.5, 113, 600], [31.5, 122, 300], [28, 122, 500]],
    wiki: { de: 'Chinesischer Stör', en: 'Chinese sturgeon' },
  },
  {
    id: 'flussperlmuschel',
    sci: 'Margaritifera margaritifera',
    name: { de: 'Europäische Flussperlmuschel', en: 'Freshwater pearl mussel' },
    group: 'freshwater',
    realm: 'freshwater',
    status: 'EN',
    population: {
      de: 'einige Millionen, meist überalterte Tiere; in Mitteleuropa um über 90 % geschrumpft',
      en: 'a few million, mostly old animals; down more than 90% in central Europe',
    },
    trend: 'down',
    length: 0.12,
    teaser: {
      de: 'Eine Muschel, die über 100 Jahre alt wird und als Larve in den Kiemen von Bachforellen reist.',
      en: 'A mussel that lives over 100 years and spends its larval stage riding in trout gills.',
    },
    facts: {
      de: [
        'Einzelne Tiere in Skandinavien wurden über 200 Jahre alt.',
        'Ihre Larven heften sich an die Kiemen von Forellen oder Lachsen und reifen dort heran.',
        'Eine Muschel filtert täglich bis zu 50 Liter Wasser.',
      ],
      en: [
        'Some individuals in Scandinavia have lived over 200 years.',
        'Its larvae attach to the gills of trout or salmon and develop there.',
        'One mussel filters up to 50 litres of water a day.',
      ],
    },
    threats: {
      de: [
        'Feinsediment und Dünger aus der Landwirtschaft verschlammen die kiesigen Bachsohlen.',
        'Ohne Forellen oder Lachse kann sie sich nicht fortpflanzen.',
        'Früher wurde sie massenhaft für Perlen ausgebeutet.',
      ],
      en: [
        'Fine sediment and fertiliser from farming clog gravel stream beds.',
        'Without trout or salmon it cannot reproduce.',
        'It was once harvested in huge numbers for pearls.',
      ],
    },
    help: {
      de: [
        'In Bayern, Sachsen und Österreich ziehen Zuchtstationen Jungmuscheln auf und setzen sie aus.',
        'Uferrandstreifen und extensive Weiden halten Schlamm und Dünger aus den Bächen.',
        'Saubere Bäche nützen auch Forellen, Libellen und unserem Trinkwasser.',
      ],
      en: [
        'Hatcheries in Bavaria, Saxony and Austria raise young mussels and release them.',
        'Riverside buffer strips and extensive grazing keep silt and fertiliser out of streams.',
        'Clean streams also benefit trout, dragonflies and our drinking water.',
      ],
    },
    home: [50.2, 12.2],
    range: [[50, 12, 300], [62, 15, 700], [54, -4, 500], [46, 2, 300]],
    wiki: { de: 'Flussperlmuschel', en: 'Freshwater pearl mussel' },
  },

  // ───────────────────────── Insekten ─────────────────────────
  {
    id: 'monarchfalter',
    sci: 'Danaus plexippus plexippus',
    gbif: 'Danaus plexippus',
    name: { de: 'Monarchfalter (Wanderfalter)', en: 'Monarch butterfly (migratory)' },
    group: 'invertebrate',
    realm: 'land',
    status: 'VU',
    population: {
      de: 'östliche Population überwinterte 2023/24 auf nur 0,9 Hektar Wald in Mexiko; die westliche schrumpfte zeitweise auf unter 2.000 Falter',
      en: 'the eastern population overwintered on just 0.9 hectares of Mexican forest in 2023/24; the western one at times fell below 2,000 butterflies',
    },
    trend: 'down',
    length: 0.1,
    teaser: {
      de: 'Ein Schmetterling, der bis zu 4.000 km weit zieht – zu Wäldern, die er selbst nie gesehen hat.',
      en: 'A butterfly that migrates up to 4,000 km – to forests it has never seen.',
    },
    facts: {
      de: [
        'Die wandernde Unterart Danaus plexippus plexippus ist laut IUCN gefährdet; die Art insgesamt gilt als nicht gefährdet.',
        'Erst die „Methusalem-Generation“ lebt 8 Monate und fliegt nach Mexiko; ihre Urenkel kehren nach Norden zurück.',
        'Raupen fressen nur Seidenpflanzen und werden durch deren Gift selbst ungenießbar.',
      ],
      en: [
        'The migratory subspecies Danaus plexippus plexippus is Vulnerable on the IUCN list; the species as a whole is Least Concern.',
        'A long-lived “super generation” survives 8 months and flies to Mexico; its great-grandchildren head north again.',
        'Caterpillars eat only milkweed and become toxic to predators from its poisons.',
      ],
    },
    threats: {
      de: [
        'Herbizide und Ackerbau haben Seidenpflanzen in Nordamerika großflächig verdrängt.',
        'Illegaler Holzeinschlag in den mexikanischen Überwinterungswäldern.',
        'Extremwetter und Klimawandel stören Zug und Überwinterung.',
      ],
      en: [
        'Herbicides and farming have wiped out milkweed across much of North America.',
        'Illegal logging in the Mexican overwintering forests.',
        'Extreme weather and climate change disrupt migration and overwintering.',
      ],
    },
    help: {
      de: [
        'Das Biosphärenreservat Mariposa Monarca in Mexiko (UNESCO-Welterbe seit 2008) schützt die Winterquartiere.',
        'Millionen Menschen pflanzen einheimische Seidenpflanzen in Gärten und an Straßenrändern.',
        'Auf Pestizide im Garten verzichten hilft allen Insekten.',
      ],
      en: [
        'Mexico’s Monarch Butterfly Biosphere Reserve (UNESCO World Heritage since 2008) protects the wintering sites.',
        'Millions of people plant native milkweed in gardens and along roadsides.',
        'Skipping garden pesticides helps all insects.',
      ],
    },
    home: [19.6, -100.25],
    range: [[19.6, -100.2, 150], [42, -90, 1500], [36, -121, 400]],
    relatives: ['meganeura'],
    wiki: { de: 'Monarchfalter', en: 'Monarch butterfly' },
  },
  {
    id: 'rostbraune-hummel',
    sci: 'Bombus affinis',
    name: { de: 'Rostbraune Hummel', en: 'Rusty patched bumble bee' },
    group: 'invertebrate',
    realm: 'land',
    status: 'CR',
    population: {
      de: 'unbekannt; seit Ende der 1990er-Jahre um rund 90 % zurückgegangen',
      en: 'unknown; down roughly 90% since the late 1990s',
    },
    trend: 'down',
    length: 0.02,
    teaser: {
      de: 'Die erste Hummel, die in den USA als gefährdete Art unter Schutz gestellt wurde (2017).',
      en: 'The first bumble bee to be listed as endangered in the United States (2017).',
    },
    facts: {
      de: [
        'Arbeiterinnen tragen einen rostbraunen Fleck auf dem Hinterleib – daher der Name.',
        'Sie fliegt früh im Frühling und spät im Herbst und braucht deshalb lange Blühzeiten.',
        'Hummeln bestäuben durch „Vibrieren“ Pflanzen wie Tomaten, die andere Bienen kaum schaffen.',
      ],
      en: [
        'Workers have a rusty-brown patch on the abdomen – hence the name.',
        'It flies early in spring and late in autumn, so it needs a long flowering season.',
        'By “buzz pollination”, bumble bees pollinate plants like tomatoes that other bees struggle with.',
      ],
    },
    threats: {
      de: [
        'Krankheitserreger, vermutlich eingeschleppt durch gezüchtete Gewächshaushummeln.',
        'Pestizide, besonders Neonikotinoide.',
        'Verlust blütenreicher Prärien und Wiesen.',
        'Klimawandel mit Hitze und Dürre.',
      ],
      en: [
        'Pathogens, probably spread by commercially bred greenhouse bumble bees.',
        'Pesticides, especially neonicotinoids.',
        'Loss of flower-rich prairies and meadows.',
        'Climate change with heat and drought.',
      ],
    },
    help: {
      de: [
        'Seit 2017 steht sie unter dem US-Artenschutzgesetz; Prärien werden gezielt wiederhergestellt.',
        'Einheimische Blühpflanzen von Frühling bis Herbst im Garten pflanzen.',
        'Laub und Altgras im Winter liegen lassen – Königinnen überwintern im Boden.',
      ],
      en: [
        'Since 2017 it has been protected under the US Endangered Species Act; prairies are being restored.',
        'Plant native flowers that bloom from spring to autumn.',
        'Leave leaves and old grass in winter – queens hibernate in the ground.',
      ],
    },
    home: [43.0, -89.4],
    range: [[43, -89, 500], [40, -78, 400]],
    relatives: ['meganeura'],
    wiki: { de: 'Hummeln', en: 'Bombus affinis' },
  },
];
