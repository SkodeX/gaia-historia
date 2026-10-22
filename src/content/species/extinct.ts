import type { Species } from './types';

// In der Neuzeit (seit etwa 1000 n. Chr.) ausgestorbene Arten und Unterarten.
export const EXTINCT: Species[] = [
  {
    id: 'dodo',
    sci: 'Raphus cucullatus',
    name: { de: 'Dodo', en: 'Dodo' },
    group: 'bird',
    realm: 'land',
    status: 'EX',
    extinct: 1662,
    population: {
      de: 'ausgestorben – die letzte gesicherte Sichtung stammt von 1662 auf Mauritius',
      en: 'extinct – the last confirmed sighting was on Mauritius in 1662',
    },
    trend: 'unknown',
    length: 1,
    weight: 12,
    teaser: {
      de: 'Der flugunfähige Riesentaubenvogel von Mauritius ist das weltweite Symbol dafür, wie schnell der Mensch eine Art auslöschen kann.',
      en: 'The flightless giant pigeon of Mauritius has become the world’s symbol of how quickly humans can wipe out a species.',
    },
    facts: {
      de: [
        'Der Dodo war eine riesige Taube – sein nächster heute lebender Verwandter ist die Kragentaube aus Südostasien.',
        'Ohne natürliche Feinde verlor er das Fliegen und die Scheu vor Menschen.',
        'Kaum 70 Jahre nach der Ankunft der ersten Seefahrer um 1598 war er verschwunden.',
      ],
      en: [
        'The dodo was a giant pigeon – its closest living relative is the Nicobar pigeon of Southeast Asia.',
        'With no natural predators, it lost the ability to fly and any fear of people.',
        'It vanished barely 70 years after the first sailors arrived around 1598.',
      ],
    },
    threats: {
      de: [
        'Seeleute jagten die zutraulichen Vögel als leichte Fleischquelle.',
        'Eingeschleppte Ratten, Schweine, Affen und Hunde fraßen Eier und Küken der Bodenbrüter.',
        'Wälder wurden für Siedlungen und Plantagen gerodet.',
      ],
      en: [
        'Sailors hunted the trusting birds as an easy source of meat.',
        'Introduced rats, pigs, monkeys and dogs ate the eggs and chicks of these ground nesters.',
        'Forests were cleared for settlements and plantations.',
      ],
    },
    help: {
      de: [
        'Eingeschleppte Räuber sind für Inselvögel oft tödlicher als die Jagd – heute werden Ratten und Katzen gezielt von Schutzinseln entfernt.',
        'Auf Mauritius retteten genau solche Programme den Mauritiusfalken und die Rosentaube vor dem Schicksal des Dodos.',
      ],
      en: [
        'Introduced predators are often deadlier to island birds than hunting – today rats and cats are removed from sanctuary islands.',
        'On Mauritius, exactly these programmes saved the Mauritius kestrel and the pink pigeon from the dodo’s fate.',
      ],
    },
    home: [-20.3, 57.6],
    range: [[-20.3, 57.6, 60]],
    relatives: ['archaeopteryx', 'velociraptor', 'gastornis'],
    wiki: { de: 'Dodo', en: 'Dodo' },
  },
  {
    id: 'stellers-seekuh',
    sci: 'Hydrodamalis gigas',
    name: { de: 'Stellers Seekuh', en: 'Steller’s sea cow' },
    group: 'marine-mammal',
    realm: 'sea',
    status: 'EX',
    extinct: 1768,
    population: {
      de: 'ausgestorben – nur 27 Jahre nach ihrer Entdeckung 1741 wurde 1768 die letzte erlegt',
      en: 'extinct – the last one was killed in 1768, just 27 years after its discovery in 1741',
    },
    trend: 'unknown',
    length: 8,
    weight: 8000,
    teaser: {
      de: 'Eine bis zu zehn Tonnen schwere Seekuh, die friedlich Tang abweidete – und nach ihrer Entdeckung binnen 27 Jahren verschwand.',
      en: 'A sea cow weighing up to ten tonnes that peacefully grazed on kelp – and vanished within 27 years of its discovery.',
    },
    facts: {
      de: [
        'Mit bis zu 8–9 m Länge war sie viel größer als heutige Seekühe und Manatis.',
        'Sie hatte keine Zähne, sondern zermahlte Tang mit Hornplatten im Maul.',
        'Der Naturforscher Georg Wilhelm Steller beschrieb sie 1741, als seine Expedition auf den Kommandeurinseln strandete.',
      ],
      en: [
        'At up to 8–9 m long, it was far larger than today’s dugongs and manatees.',
        'It had no teeth and ground kelp with horny plates in its mouth.',
        'Naturalist Georg Wilhelm Steller described it in 1741 when his expedition was shipwrecked on the Commander Islands.',
      ],
    },
    threats: {
      de: [
        'Pelzjäger und Seefahrer schlachteten die langsamen Tiere als Fleischvorrat ab.',
        'Der Restbestand war bei der Entdeckung bereits winzig – wohl nur noch ein paar Tausend Tiere.',
        'Die Jagd auf Seeotter ließ Seeigel die Tangwälder abfressen, von denen die Seekuh lebte.',
      ],
      en: [
        'Fur hunters and sailors butchered the slow animals for meat.',
        'The remaining population was already tiny when discovered – probably only a few thousand animals.',
        'Hunting sea otters let sea urchins devour the kelp forests the sea cow fed on.',
      ],
    },
    help: {
      de: [
        'Heute stehen Seekühe und Manatis weltweit unter Schutz – Bootsgeschwindigkeits-Zonen in Florida senken Kollisionen.',
        'Der Schutz von Seeottern hilft, Tangwälder als Lebensraum vieler Meerestiere zu erhalten.',
      ],
      en: [
        'Today dugongs and manatees are protected worldwide – boat speed zones in Florida reduce collisions.',
        'Protecting sea otters helps keep kelp forests alive as a home for many marine animals.',
      ],
    },
    home: [55, 166.5],
    range: [[55, 166.5, 250]],
    wiki: { de: 'Stellers Seekuh', en: 'Steller\'s sea cow' },
  },
  {
    id: 'riesenalk',
    sci: 'Pinguinus impennis',
    name: { de: 'Riesenalk', en: 'Great auk' },
    group: 'sea-other',
    realm: 'sea',
    status: 'EX',
    extinct: 1844,
    population: {
      de: 'ausgestorben – das letzte Brutpaar wurde 1844 auf der isländischen Insel Eldey erschlagen',
      en: 'extinct – the last breeding pair was killed on the Icelandic island of Eldey in 1844',
    },
    trend: 'unknown',
    length: 0.8,
    weight: 5,
    teaser: {
      de: 'Der flugunfähige „Pinguin des Nordens“ war ein glänzender Taucher – an Land aber leichte Beute.',
      en: 'The flightless “penguin of the north” was a superb diver – but easy prey on land.',
    },
    facts: {
      de: [
        'Er war der ursprüngliche „Pinguin“ – erst später übertrugen Seefahrer den Namen auf die Vögel der Südhalbkugel.',
        'Mit seinen kurzen Flügeln „flog“ er unter Wasser und jagte Fische in großer Tiefe.',
        'Er brütete in riesigen Kolonien auf wenigen felsigen Inseln im Nordatlantik.',
      ],
      en: [
        'It was the original “penguin” – sailors later passed the name on to the birds of the Southern Hemisphere.',
        'It used its short wings to “fly” underwater, hunting fish at great depth.',
        'It bred in huge colonies on just a few rocky islands in the North Atlantic.',
      ],
    },
    threats: {
      de: [
        'Seeleute trieben die Vögel zu Tausenden auf Schiffe – als Proviant, Köder und Brennstoff.',
        'Daunen und Federn waren für Kissen und Matratzen begehrt.',
        'Als er selten wurde, zahlten Sammler hohe Preise für Bälge und Eier.',
      ],
      en: [
        'Sailors herded the birds onto ships by the thousand – as food, bait and fuel.',
        'Down and feathers were sought after for pillows and mattresses.',
        'Once it became rare, collectors paid high prices for skins and eggs.',
      ],
    },
    help: {
      de: [
        'Brutkolonien von Seevögeln stehen heute vielerorts unter Schutz, etwa Papageitaucher-Inseln vor Island und Norwegen.',
        'Der Riesenalk zeigt: Arten mit wenigen Brutplätzen sind besonders verletzlich und brauchen früh Schutz.',
      ],
      en: [
        'Seabird breeding colonies are now protected in many places, such as puffin islands off Iceland and Norway.',
        'The great auk shows that species with few breeding sites are especially vulnerable and need protection early.',
      ],
    },
    home: [49.8, -53],
    range: [
      [50, -53, 700],
      [63, -22, 500],
      [59, -6, 500],
      [44, -62, 500],
    ],
    relatives: ['archaeopteryx', 'velociraptor', 'gastornis'],
    wiki: { de: 'Riesenalk', en: 'Great auk' },
  },
  {
    id: 'wandertaube',
    sci: 'Ectopistes migratorius',
    name: { de: 'Wandertaube', en: 'Passenger pigeon' },
    group: 'bird',
    realm: 'land',
    status: 'EX',
    extinct: 1914,
    population: {
      de: 'ausgestorben – die letzte Wandertaube „Martha“ starb 1914 im Zoo von Cincinnati',
      en: 'extinct – the last passenger pigeon, “Martha”, died in Cincinnati Zoo in 1914',
    },
    trend: 'unknown',
    length: 0.4,
    weight: 0.34,
    teaser: {
      de: 'Einst wohl der häufigste Vogel Nordamerikas – in wenigen Jahrzehnten auf null gejagt.',
      en: 'Once probably the most common bird in North America – hunted down to zero in a few decades.',
    },
    facts: {
      de: [
        'Es gab vermutlich drei bis fünf Milliarden Wandertauben.',
        'Ihre Schwärme verdunkelten tagelang den Himmel und waren über einen Kilometer breit.',
        'Sie brüteten in gewaltigen Kolonien und brauchten große Gruppen, um erfolgreich Junge aufzuziehen.',
      ],
      en: [
        'There were probably three to five billion passenger pigeons.',
        'Their flocks darkened the sky for days and were more than a kilometre wide.',
        'They bred in enormous colonies and needed large groups to raise young successfully.',
      ],
    },
    threats: {
      de: [
        'Berufsjäger erlegten die Tauben massenhaft und verschickten sie per Eisenbahn als billiges Fleisch.',
        'Die Abholzung der Laubwälder im Osten Nordamerikas raubte ihnen Nahrung und Brutplätze.',
        'Als die Kolonien schrumpften, brach die Fortpflanzung zusammen.',
      ],
      en: [
        'Market hunters killed the pigeons en masse and shipped them by rail as cheap meat.',
        'Clearing the eastern deciduous forests took away their food and nesting sites.',
        'As the colonies shrank, breeding collapsed.',
      ],
    },
    help: {
      de: [
        'Ihr Ende trug zu den ersten Vogelschutzgesetzen bei, etwa dem Lacey Act (1900) und dem Zugvogelabkommen (1918) in den USA.',
        'Lehre: Auch sehr häufige Arten können verschwinden – Jagd muss sich nach dem Bestand richten.',
        'Ein „De-Extinction“-Projekt will sie per Gentechnik aus Felsentauben zurückholen – Fachleute bezweifeln, ob so eine echte Wandertaube entstehen kann.',
      ],
      en: [
        'Its demise helped bring about the first bird protection laws, such as the US Lacey Act (1900) and the Migratory Bird Treaty (1918).',
        'Lesson: even very common species can vanish – hunting must be matched to population size.',
        'A “de-extinction” project wants to bring it back by gene-editing rock pigeons – experts doubt this can produce a true passenger pigeon.',
      ],
    },
    home: [40, -82],
    range: [
      [42, -80, 1100],
      [35, -88, 800],
    ],
    relatives: ['archaeopteryx', 'velociraptor'],
    wiki: { de: 'Wandertaube', en: 'Passenger pigeon' },
  },
  {
    id: 'beutelwolf',
    sci: 'Thylacinus cynocephalus',
    name: { de: 'Beutelwolf (Tasmanischer Tiger)', en: 'Thylacine (Tasmanian tiger)' },
    group: 'land-mammal',
    realm: 'land',
    status: 'EX',
    extinct: 1936,
    population: {
      de: 'ausgestorben – das letzte Tier starb 1936 im Zoo von Hobart',
      en: 'extinct – the last animal died in Hobart Zoo in 1936',
    },
    trend: 'unknown',
    length: 1.6,
    weight: 25,
    teaser: {
      de: 'Ein hundeähnliches Beuteltier mit Tigerstreifen – das größte Raubbeuteltier der Neuzeit.',
      en: 'A dog-like marsupial with tiger stripes – the largest carnivorous marsupial of modern times.',
    },
    facts: {
      de: [
        'Obwohl er einem Hund ähnelte, war er mit Kängurus und Beutelteufeln näher verwandt als mit Wölfen.',
        'Er konnte sein Maul ungewöhnlich weit aufreißen.',
        'Auf dem australischen Festland verschwand er schon vor rund 3.000 Jahren, auf Tasmanien hielt er sich bis ins 20. Jahrhundert.',
      ],
      en: [
        'Although it looked like a dog, it was more closely related to kangaroos and Tasmanian devils than to wolves.',
        'It could open its jaws unusually wide.',
        'It disappeared from mainland Australia around 3,000 years ago but survived in Tasmania into the 20th century.',
      ],
    },
    threats: {
      de: [
        'Er wurde als Schafräuber verfolgt – die Regierung zahlte Kopfprämien für über 2.000 Tiere.',
        'Siedler verdrängten ihn aus seinem Lebensraum.',
        'Eingeschleppte Hunde und Krankheiten setzten dem Restbestand zu.',
      ],
      en: [
        'It was persecuted as a sheep killer – the government paid bounties for over 2,000 animals.',
        'Settlers pushed it out of its habitat.',
        'Introduced dogs and diseases weakened the remaining population.',
      ],
    },
    help: {
      de: [
        'Bitter: Unter Schutz gestellt wurde er erst 1936 – 59 Tage vor dem Tod des letzten Tieres.',
        'Heute schützt Tasmanien den bedrohten Beutelteufel mit Zuchtprogrammen und krankheitsfreien Inselbeständen.',
        'Ein „De-Extinction“-Projekt will ihn aus Erbgut neu erschaffen – Kritiker fürchten, dass das vom Schutz noch lebender Arten ablenkt.',
      ],
      en: [
        'Bitterly, it was only protected in 1936 – 59 days before the last animal died.',
        'Today Tasmania protects the endangered Tasmanian devil with breeding programmes and disease-free island populations.',
        'A “de-extinction” project aims to recreate it from DNA – critics fear this distracts from protecting species still alive.',
      ],
    },
    home: [-42, 146.5],
    range: [[-42, 146.5, 250]],
    wiki: { de: 'Beutelwolf', en: 'Thylacine' },
  },
  {
    id: 'quagga',
    sci: 'Equus quagga quagga',
    name: { de: 'Quagga', en: 'Quagga' },
    group: 'land-mammal',
    realm: 'land',
    status: 'EX',
    extinct: 1883,
    population: {
      de: 'ausgestorben – das letzte Quagga starb 1883 im Zoo Artis in Amsterdam',
      en: 'extinct – the last quagga died in Artis Zoo, Amsterdam, in 1883',
    },
    trend: 'unknown',
    length: 2.5,
    weight: 250,
    teaser: {
      de: 'Ein „halbes Zebra“: vorne gestreift, hinten einfarbig braun.',
      en: 'A “half zebra”: striped at the front, plain brown at the back.',
    },
    facts: {
      de: [
        'Das Quagga war keine eigene Art, sondern eine Unterart des Steppenzebras.',
        'Es war 1984 das erste ausgestorbene Tier, dessen Erbgut untersucht wurde.',
        'Sein Name ahmt wohl seinen Ruf nach.',
      ],
      en: [
        'The quagga was not a separate species but a subspecies of the plains zebra.',
        'In 1984 it became the first extinct animal to have its DNA analysed.',
        'Its name probably imitates its call.',
      ],
    },
    threats: {
      de: [
        'Burische Siedler jagten es wegen Fleisch und Fell.',
        'Es galt als Futterkonkurrent für Schafe und Rinder.',
        'Niemand bemerkte rechtzeitig, dass die wilden Tiere bereits verschwunden waren.',
      ],
      en: [
        'Boer settlers hunted it for meat and hides.',
        'It was seen as competing with sheep and cattle for grazing.',
        'Nobody noticed in time that the wild animals were already gone.',
      ],
    },
    help: {
      de: [
        'Das „Quagga-Projekt“ in Südafrika züchtet seit 1987 Steppenzebras mit wenig Streifen – das Ergebnis sieht ähnlich aus, ist aber kein echtes Quagga.',
        'Lehre: Bestände müssen überwacht werden, damit ein Rückgang nicht erst auffällt, wenn es zu spät ist.',
      ],
      en: [
        'Since 1987 South Africa’s “Quagga Project” has bred plains zebras with few stripes – they look similar but are not true quaggas.',
        'Lesson: populations must be monitored so a decline is noticed before it is too late.',
      ],
    },
    home: [-31.5, 23],
    range: [[-31, 24, 450]],
    wiki: { de: 'Quagga', en: 'Quagga' },
  },
  {
    id: 'auerochse',
    sci: 'Bos primigenius',
    name: { de: 'Auerochse', en: 'Aurochs' },
    group: 'land-mammal',
    realm: 'land',
    status: 'EX',
    extinct: 1627,
    population: {
      de: 'ausgestorben – die letzte Auerochsenkuh starb 1627 im Wald von Jaktorów in Polen',
      en: 'extinct – the last aurochs cow died in 1627 in the Jaktorów forest in Poland',
    },
    trend: 'unknown',
    length: 3,
    weight: 1000,
    teaser: {
      de: 'Der mächtige Wildstier ist der Urahn fast aller Hausrinder der Welt.',
      en: 'This mighty wild ox is the ancestor of almost all the world’s domestic cattle.',
    },
    facts: {
      de: [
        'Stiere erreichten bis zu 1,8 m Schulterhöhe und trugen weit geschwungene Hörner.',
        'Steinzeitmenschen malten ihn in der Höhle von Lascaux.',
        'Seine letzte Herde lebte in einem polnischen Königsforst unter Schutz.',
      ],
      en: [
        'Bulls stood up to 1.8 m at the shoulder and bore wide, curved horns.',
        'Stone Age people painted it in the Lascaux cave.',
        'Its last herd lived under protection in a Polish royal forest.',
      ],
    },
    threats: {
      de: [
        'Jahrhundertelange Jagd dünnte die Bestände in ganz Eurasien aus.',
        'Wälder und Auen wurden zu Acker- und Weideland.',
        'Krankheiten von Hausrindern trafen den letzten kleinen Bestand.',
      ],
      en: [
        'Centuries of hunting thinned out the herds across Eurasia.',
        'Forests and floodplains were turned into fields and pastures.',
        'Diseases from domestic cattle struck the last small herd.',
      ],
    },
    help: {
      de: [
        'Der Auerochse war eines der ersten Tiere mit einem Schutzgesetz – doch ein winziges Restgebiet reichte nicht.',
        'Rückzüchtungen wie das Heckrind oder das Taurus-Projekt sehen ähnlich aus, sind aber keine echten Auerochsen.',
        'Robuste Weidetiere halten heute in Naturschutzgebieten Landschaften offen – eine Aufgabe, die früher Auerochsen erfüllten.',
      ],
      en: [
        'The aurochs was one of the first animals protected by law – but one tiny refuge was not enough.',
        'Back-breeding efforts such as Heck cattle or the Tauros project look similar but are not true aurochs.',
        'Hardy grazers now keep landscapes open in nature reserves – a job once done by aurochs.',
      ],
    },
    home: [52.08, 20.55],
    range: [
      [50, 15, 1500],
      [46, 40, 1200],
      [32, 5, 900],
      [30, 75, 1200],
    ],
    wiki: { de: 'Auerochse', en: 'Aurochs' },
  },
  {
    id: 'riesenmoa',
    sci: 'Dinornis robustus',
    name: { de: 'Südinsel-Riesenmoa', en: 'South Island giant moa' },
    group: 'bird',
    realm: 'land',
    status: 'EX',
    extinct: 1400,
    population: {
      de: 'ausgestorben – verschwand ungefähr um 1400, rund 100–200 Jahre nach der Ankunft der Māori',
      en: 'extinct – vanished around 1400, roughly 100–200 years after Māori arrived',
    },
    trend: 'unknown',
    length: 3,
    weight: 230,
    teaser: {
      de: 'Mit gestrecktem Hals bis zu 3,6 m hoch – einer der größten Vögel, die je gelebt haben.',
      en: 'Up to 3.6 m tall with its neck stretched – one of the tallest birds that ever lived.',
    },
    facts: {
      de: [
        'Moas hatten überhaupt keine Flügel – nicht einmal verkümmerte Reste.',
        'Die Weibchen waren bis zu doppelt so schwer wie die Männchen.',
        'Ihr einziger natürlicher Feind war der riesige Haastadler.',
      ],
      en: [
        'Moa had no wings at all – not even tiny remnants.',
        'Females were up to twice as heavy as males.',
        'Their only natural predator was the giant Haast’s eagle.',
      ],
    },
    threats: {
      de: [
        'Die ersten Siedler Neuseelands jagten die großen, langsam brütenden Vögel intensiv.',
        'Eier wurden gesammelt, sodass kaum Nachwuchs heranwuchs.',
        'Brandrodung zerstörte Teile ihres Lebensraums.',
      ],
      en: [
        'New Zealand’s first settlers hunted the large, slow-breeding birds intensively.',
        'Eggs were collected, so few young ever grew up.',
        'Burning cleared parts of their habitat.',
      ],
    },
    help: {
      de: [
        'Große, langsam sich vermehrende Tiere sind besonders schnell ausgerottet – das gilt heute auch für Elefanten oder Nashörner.',
        'Neuseeland schützt heute flugunfähige Vögel wie Kiwi und Kakapo auf raubtierfreien Inseln – mit Erfolg.',
      ],
      en: [
        'Large, slow-breeding animals are wiped out especially fast – which today is also true for elephants and rhinos.',
        'New Zealand now protects flightless birds such as kiwi and kākāpō on predator-free islands – with success.',
      ],
    },
    home: [-43.5, 171],
    range: [[-43.5, 170.5, 450]],
    relatives: ['archaeopteryx', 'velociraptor', 'gastornis'],
    wiki: { de: 'Moas', en: 'South Island giant moa' },
  },
  {
    id: 'haastadler',
    sci: 'Hieraaetus moorei',
    name: { de: 'Haastadler', en: 'Haast’s eagle' },
    group: 'bird',
    realm: 'land',
    status: 'EX',
    extinct: 1400,
    population: {
      de: 'ausgestorben – verschwand ungefähr um 1400 zusammen mit seiner Hauptbeute, den Moas',
      en: 'extinct – vanished around 1400 together with its main prey, the moa',
    },
    trend: 'unknown',
    length: 1.2,
    weight: 13,
    teaser: {
      de: 'Der größte Adler, den es je gab – er schlug Moas, die zehnmal schwerer waren als er selbst.',
      en: 'The largest eagle that ever lived – it killed moa ten times its own weight.',
    },
    facts: {
      de: [
        'Weibchen wogen bis zu 15 kg, die Flügelspannweite betrug bis zu 3 m.',
        'Seine Krallen waren so groß wie die eines Tigers.',
        'Sein nächster Verwandter ist der winzige Zwergadler – der Haastadler wuchs auf Neuseeland in kurzer Zeit zum Riesen.',
      ],
      en: [
        'Females weighed up to 15 kg, with a wingspan of up to 3 m.',
        'Its talons were as large as a tiger’s claws.',
        'Its closest relative is the small booted eagle – Haast’s eagle evolved into a giant in New Zealand in a short time.',
      ],
    },
    threats: {
      de: [
        'Mit der Ausrottung der Moas durch den Menschen verlor er seine Beute.',
        'Möglicherweise wurde er auch selbst gejagt.',
        'Brandrodung verkleinerte seine Waldgebiete.',
      ],
      en: [
        'When humans wiped out the moa, it lost its prey.',
        'It may also have been hunted itself.',
        'Burning shrank its forest habitat.',
      ],
    },
    help: {
      de: [
        'Ökosysteme hängen zusammen: Verschwindet die Beute, folgen die Jäger – Schutz muss ganze Lebensgemeinschaften umfassen.',
        'Heute profitieren Greifvögel wie Seeadler in Europa von Jagdverboten und sauberer Munition ohne Blei.',
      ],
      en: [
        'Ecosystems are connected: when the prey disappears, the predators follow – protection has to cover whole communities.',
        'Today birds of prey such as white-tailed eagles in Europe benefit from hunting bans and lead-free ammunition.',
      ],
    },
    home: [-43.3, 171.2],
    range: [[-43.5, 170.5, 450]],
    relatives: ['archaeopteryx', 'velociraptor', 'gastornis'],
    wiki: { de: 'Haastadler', en: 'Haast\'s eagle' },
  },
  {
    id: 'madagaskar-strauss',
    sci: 'Aepyornis maximus',
    name: { de: 'Madagaskar-Strauß (Elefantenvogel)', en: 'Giant elephant bird' },
    group: 'bird',
    realm: 'land',
    status: 'EX',
    extinct: 1000,
    population: {
      de: 'ausgestorben – ungefähr um 1000 n. Chr., das genaue Datum ist unsicher',
      en: 'extinct – around 1000 AD, the exact date is uncertain',
    },
    trend: 'unknown',
    length: 3,
    weight: 650,
    teaser: {
      de: 'Ein drei Meter hoher Laufvogel aus Madagaskar, der die größten Eier aller bekannten Tiere legte.',
      en: 'A three-metre-tall flightless bird from Madagascar that laid the largest eggs of any known animal.',
    },
    facts: {
      de: [
        'Ein Ei fasste rund 8–10 Liter – so viel wie etwa 150 Hühnereier.',
        'Er war wohl einer der schwersten Vögel aller Zeiten.',
        'Sein nächster heutiger Verwandter ist nicht der Strauß, sondern der kleine Kiwi aus Neuseeland.',
      ],
      en: [
        'A single egg held around 8–10 litres – about as much as 150 hen’s eggs.',
        'It was probably one of the heaviest birds of all time.',
        'Its closest living relative is not the ostrich but the small kiwi of New Zealand.',
      ],
    },
    threats: {
      de: [
        'Menschen jagten die Vögel und sammelten ihre riesigen Eier.',
        'Wälder wurden gerodet und abgebrannt.',
        'Möglicherweise trugen Klimaschwankungen und eingeführte Haustiere bei.',
      ],
      en: [
        'People hunted the birds and collected their huge eggs.',
        'Forests were cleared and burned.',
        'Climate fluctuations and introduced livestock may also have played a role.',
      ],
    },
    help: {
      de: [
        'Madagaskar hat heute zahlreiche Nationalparks, die einzigartige Arten wie Lemuren schützen.',
        'Lehre: Inseltiere, die sich ohne Menschen entwickelt haben, brauchen besonders früh Schutz.',
      ],
      en: [
        'Madagascar now has many national parks protecting unique species such as lemurs.',
        'Lesson: island animals that evolved without humans need protection especially early.',
      ],
    },
    home: [-20, 46.5],
    range: [[-20, 46.5, 600]],
    relatives: ['gastornis', 'archaeopteryx', 'velociraptor'],
    wiki: { de: 'Elefantenvögel', en: 'Aepyornis' },
  },
  {
    id: 'karibische-moenchsrobbe',
    sci: 'Neomonachus tropicalis',
    name: { de: 'Karibische Mönchsrobbe', en: 'Caribbean monk seal' },
    group: 'marine-mammal',
    realm: 'sea',
    status: 'EX',
    extinct: 1952,
    population: {
      de: 'ausgestorben – letzte gesicherte Sichtung 1952 auf der Serranilla-Bank zwischen Jamaika und Nicaragua',
      en: 'extinct – last confirmed sighting in 1952 on Serranilla Bank between Jamaica and Nicaragua',
    },
    trend: 'unknown',
    length: 2.3,
    weight: 200,
    teaser: {
      de: 'Die einzige Robbe der Karibik – schon Kolumbus’ Leute machten 1494 Jagd auf sie.',
      en: 'The Caribbean’s only seal – Columbus’s crew were already hunting it in 1494.',
    },
    facts: {
      de: [
        'Sie lebte an Sandstränden und Riffen in warmem, tropischem Wasser.',
        'Die Tiere waren wenig scheu und ließen sich am Strand leicht erschlagen.',
        'Ihre nächsten Verwandten, die Hawaii- und die Mittelmeer-Mönchsrobbe, sind heute selbst bedroht.',
      ],
      en: [
        'It lived on sandy beaches and reefs in warm tropical waters.',
        'The animals were not shy and were easily clubbed on the beach.',
        'Its closest relatives, the Hawaiian and Mediterranean monk seals, are endangered today.',
      ],
    },
    threats: {
      de: [
        'Sie wurde massenhaft wegen ihres Trans (Öl) gejagt.',
        'Überfischung nahm ihr die Nahrung.',
        'Fischer und Siedler störten und verfolgten die Tiere an ihren Liegeplätzen.',
      ],
      en: [
        'It was killed in huge numbers for its blubber oil.',
        'Overfishing took away its food.',
        'Fishers and settlers disturbed and persecuted the animals at their haul-out sites.',
      ],
    },
    help: {
      de: [
        'Bei der Hawaii-Mönchsrobbe wirken Strandschutz, Rettung verhedderter Tiere und Abstand halten – ihr Bestand wächst wieder leicht.',
        'Auch die Mittelmeer-Mönchsrobbe erholt sich in Schutzgebieten wie auf Madeira und in Griechenland.',
        'Wer Robben am Strand sieht: mindestens 50 m Abstand halten und nicht füttern.',
      ],
      en: [
        'For Hawaiian monk seals, beach protection, rescuing entangled animals and keeping distance work – numbers are slowly rising.',
        'The Mediterranean monk seal is also recovering in protected areas such as Madeira and Greece.',
        'If you see seals on a beach: keep at least 50 m away and never feed them.',
      ],
    },
    home: [21, -80],
    range: [
      [22, -82, 700],
      [24, -90, 500],
      [17, -66, 600],
      [15, -82, 400],
    ],
    wiki: { de: 'Karibische Mönchsrobbe', en: 'Caribbean monk seal' },
  },
  {
    id: 'japanischer-seeloewe',
    sci: 'Zalophus japonicus',
    name: { de: 'Japanischer Seelöwe', en: 'Japanese sea lion' },
    group: 'marine-mammal',
    realm: 'sea',
    status: 'EX',
    extinct: 1974,
    population: {
      de: 'ausgestorben – das letzte gesicherte Tier wurde 1974 vor der Insel Rebun (Hokkaido) gefangen',
      en: 'extinct – the last confirmed animal was caught off Rebun Island (Hokkaido) in 1974',
    },
    trend: 'unknown',
    length: 2.3,
    weight: 400,
    teaser: {
      de: 'Ein naher Verwandter des Kalifornischen Seelöwen, der einst an den Küsten Japans und Koreas lebte.',
      en: 'A close relative of the California sea lion that once lived along the coasts of Japan and Korea.',
    },
    facts: {
      de: [
        'Bullen wurden deutlich größer und schwerer als die Weibchen.',
        'Eine wichtige Kolonie lag auf den Felseninseln Dokdo/Takeshima im Japanischen Meer.',
        'Lange galt er nur als Unterart des Kalifornischen Seelöwen.',
      ],
      en: [
        'Bulls grew much larger and heavier than females.',
        'An important colony was on the Dokdo/Takeshima rocks in the Sea of Japan.',
        'For a long time it was considered just a subspecies of the California sea lion.',
      ],
    },
    threats: {
      de: [
        'Anfang des 20. Jahrhunderts wurden Tausende für Tran, Leder und Zirkusse gefangen.',
        'Fischer sahen sie als Konkurrenz und töteten sie.',
        'Militärische Nutzung und Kriege störten ihre letzten Kolonien.',
      ],
      en: [
        'In the early 20th century thousands were taken for oil, leather and circuses.',
        'Fishers saw them as competitors and killed them.',
        'Military use and wars disturbed their last colonies.',
      ],
    },
    help: {
      de: [
        'Der Kalifornische Seelöwe hat sich durch den US-Meeressäugerschutz (1972) stark erholt – Schutz wirkt, wenn er rechtzeitig kommt.',
        'Meeresschutzgebiete um Brutkolonien bewahren Ruhe für Robben und Seelöwen.',
      ],
      en: [
        'The California sea lion has recovered strongly thanks to the US Marine Mammal Protection Act (1972) – protection works if it comes in time.',
        'Marine protected areas around breeding colonies keep seals and sea lions undisturbed.',
      ],
    },
    home: [37.24, 131.87],
    range: [
      [38, 134, 600],
      [34, 138, 400],
      [44, 142, 350],
    ],
    wiki: { de: 'Japanischer Seelöwe', en: 'Japanese sea lion' },
  },
  {
    id: 'labradorente',
    sci: 'Camptorhynchus labradorius',
    name: { de: 'Labradorente', en: 'Labrador duck' },
    group: 'sea-other',
    realm: 'sea',
    status: 'EX',
    extinct: 1878,
    population: {
      de: 'ausgestorben – letzte gesicherte Nachweise um 1875–1878 an der Ostküste der USA',
      en: 'extinct – last confirmed records around 1875–1878 on the US east coast',
    },
    trend: 'unknown',
    length: 0.5,
    weight: 0.9,
    teaser: {
      de: 'Eine schwarz-weiße Meerente, über die wir fast nichts wissen – sie verschwand, bevor jemand sie genau untersuchte.',
      en: 'A black-and-white sea duck we know almost nothing about – it vanished before anyone studied it closely.',
    },
    facts: {
      de: [
        'Sie war die erste in Nordamerika ausgestorbene Vogelart nach Ankunft der Europäer.',
        'Ihr Schnabel hatte weiche, fein gezähnte Ränder – vermutlich fraß sie Muscheln und Schnecken.',
        'Weltweit gibt es nur rund 55 Museumsexemplare.',
      ],
      en: [
        'It was the first North American bird species to go extinct after Europeans arrived.',
        'Its bill had soft, finely toothed edges – it probably ate mussels and snails.',
        'Only about 55 museum specimens exist worldwide.',
      ],
    },
    threats: {
      de: [
        'Sie war wohl schon immer selten und lebte in einem kleinen Gebiet.',
        'Jagd und Eiersammeln setzten dem kleinen Bestand zu.',
        'Verschmutzung und Ausbeutung der Muschelbänke an der Küste raubten ihr womöglich die Nahrung.',
      ],
      en: [
        'It was probably always rare and lived in a small area.',
        'Hunting and egg collecting hit the small population.',
        'Pollution and exploitation of coastal mussel beds may have taken away its food.',
      ],
    },
    help: {
      de: [
        'Das Zugvogelabkommen von 1918 regelt heute die Jagd auf Wasservögel in Nordamerika.',
        'Saubere Küsten und gesunde Muschelbänke helfen heutigen Meerenten wie Eiderente und Trauerente.',
      ],
      en: [
        'The 1918 Migratory Bird Treaty now regulates waterfowl hunting in North America.',
        'Clean coasts and healthy mussel beds help today’s sea ducks such as eiders and scoters.',
      ],
    },
    home: [40.6, -72.5],
    range: [
      [41, -71, 400],
      [52, -58, 500],
    ],
    relatives: ['archaeopteryx', 'velociraptor'],
    wiki: { de: 'Labradorente', en: 'Labrador duck' },
  },
  {
    id: 'carolinasittich',
    sci: 'Conuropsis carolinensis',
    name: { de: 'Carolinasittich', en: 'Carolina parakeet' },
    group: 'bird',
    realm: 'land',
    status: 'EX',
    extinct: 1918,
    population: {
      de: 'ausgestorben – der letzte Carolinasittich „Incas“ starb 1918 im Zoo von Cincinnati',
      en: 'extinct – the last Carolina parakeet, “Incas”, died in Cincinnati Zoo in 1918',
    },
    trend: 'unknown',
    length: 0.33,
    weight: 0.1,
    teaser: {
      de: 'Der einzige heimische Papagei im Osten der USA – grün, gelb und orange gefärbt.',
      en: 'The only native parrot of the eastern United States – coloured green, yellow and orange.',
    },
    facts: {
      de: [
        'Er fraß giftige Samen der Spitzklette und war deshalb vermutlich selbst giftig.',
        'Schwärme blieben bei verletzten Artgenossen – und wurden so von Jägern komplett erlegt.',
        'Er starb im selben Zoo und Käfig wie die letzte Wandertaube „Martha“ vier Jahre zuvor.',
      ],
      en: [
        'It ate toxic cocklebur seeds and was probably poisonous itself.',
        'Flocks stayed with injured flock-mates – so hunters could shoot entire groups.',
        'It died in the same zoo and cage as Martha, the last passenger pigeon, four years earlier.',
      ],
    },
    threats: {
      de: [
        'Bauern schossen die Vögel, weil sie Obst und Getreide fraßen.',
        'Ihre bunten Federn waren als Hutschmuck begehrt.',
        'Die Rodung der Auwälder zerstörte ihre Brut- und Schlafbäume.',
      ],
      en: [
        'Farmers shot the birds because they ate fruit and grain.',
        'Their bright feathers were popular as hat decorations.',
        'Clearing riverside forests destroyed their nesting and roosting trees.',
      ],
    },
    help: {
      de: [
        'Proteste gegen Federmode führten zu den ersten großen Vogelschutzvereinen und -gesetzen.',
        'Heute schützt das Washingtoner Artenschutzabkommen (CITES) Papageien vor Handel – wer Papageien hält, sollte nur auf Nachzuchten achten.',
      ],
      en: [
        'Protests against feather fashion led to the first major bird protection societies and laws.',
        'Today the CITES treaty protects parrots from trade – anyone keeping parrots should only buy captive-bred birds.',
      ],
    },
    home: [33, -84],
    range: [
      [34, -84, 800],
      [38, -88, 700],
      [28, -81, 350],
    ],
    relatives: ['archaeopteryx', 'velociraptor'],
    wiki: { de: 'Karolinasittich', en: 'Carolina parakeet' },
  },
  {
    id: 'goldkroete',
    sci: 'Incilius periglenes',
    name: { de: 'Goldkröte', en: 'Golden toad' },
    group: 'reptile-amphibian',
    realm: 'land',
    status: 'EX',
    extinct: 1989,
    population: {
      de: 'ausgestorben – 1989 wurde ein einzelnes Männchen im Nebelwald von Monteverde zuletzt gesehen',
      en: 'extinct – a single male was last seen in the Monteverde cloud forest in 1989',
    },
    trend: 'unknown',
    length: 0.05,
    teaser: {
      de: 'Leuchtend orangefarbene Kröten aus Costa Rica – Symbol für das weltweite Amphibiensterben.',
      en: 'Glowing orange toads from Costa Rica – a symbol of the global amphibian crisis.',
    },
    facts: {
      de: [
        'Nur die Männchen waren goldorange, die Weibchen dunkel mit roten Flecken.',
        'Sie lebten auf wenigen Quadratkilometern eines Bergkamms in Costa Rica.',
        '1987 versammelten sich noch rund 1.500 Tiere zur Paarung – zwei Jahre später fand man nur noch eines.',
      ],
      en: [
        'Only the males were golden orange; females were dark with red spots.',
        'They lived on just a few square kilometres of a mountain ridge in Costa Rica.',
        'In 1987 around 1,500 gathered to breed – two years later only one was found.',
      ],
    },
    threats: {
      de: [
        'Die Pilzkrankheit Chytridiomykose rafft weltweit Amphibien dahin.',
        'Ungewöhnliche Trockenheit durch El Niño und Klimawandel ließ ihre Laichtümpel austrocknen.',
        'Ein winziges Verbreitungsgebiet ließ keinen Ausweichraum.',
      ],
      en: [
        'The fungal disease chytridiomycosis is killing amphibians worldwide.',
        'Unusual droughts linked to El Niño and climate change dried out their breeding pools.',
        'A tiny range left nowhere else to go.',
      ],
    },
    help: {
      de: [
        'Zuchtstationen („Amphibien-Archen“) halten heute bedrohte Frösche als Reserve, bis Heilmittel gegen den Pilz gefunden sind.',
        'Hygieneregeln beim Wandern und im Terrarienhandel bremsen die Ausbreitung von Amphibienkrankheiten.',
        'Klimaschutz hilft Arten in Bergnebelwäldern, die nicht weiter nach oben ausweichen können.',
      ],
      en: [
        'Breeding centres (“amphibian arks”) now keep threatened frogs as a backup until cures for the fungus are found.',
        'Hygiene rules for hikers and the pet trade slow the spread of amphibian diseases.',
        'Climate protection helps cloud-forest species that cannot move any higher up the mountain.',
      ],
    },
    home: [10.3, -84.78],
    range: [[10.3, -84.78, 10]],
    relatives: ['tiktaalik'],
    wiki: { de: 'Goldkröte', en: 'Golden toad' },
  },
  {
    id: 'baiji',
    sci: 'Lipotes vexillifer',
    name: { de: 'Chinesischer Flussdelfin (Baiji)', en: 'Baiji (Chinese river dolphin)' },
    group: 'freshwater',
    realm: 'freshwater',
    status: 'CR',
    extinct: 2002,
    population: {
      de: 'vermutlich ausgestorben – letztes gesichert lebendes Tier „Qiqi“ starb 2002 in Gefangenschaft; eine Suche 2006 fand keinen einzigen Baiji mehr',
      en: 'probably extinct – the last confirmed animal, “Qiqi”, died in captivity in 2002; a 2006 survey found not a single baiji',
    },
    trend: 'unknown',
    length: 2.3,
    weight: 150,
    teaser: {
      de: 'Der „Göttin des Jangtse“ genannte Delfin ist wohl der erste Wal, den der Mensch ausgerottet hat.',
      en: 'Called the “goddess of the Yangtze”, this dolphin is probably the first cetacean wiped out by humans.',
    },
    facts: {
      de: [
        'Offiziell führt die IUCN ihn als „vom Aussterben bedroht (möglicherweise ausgestorben)“ – solange es unbestätigte Sichtungen gibt.',
        'Er war fast blind und orientierte sich im trüben Flusswasser per Echoortung.',
        'Seine Linie trennte sich vor rund 20 Millionen Jahren von anderen Delfinen.',
      ],
      en: [
        'The IUCN officially lists it as “Critically Endangered (Possibly Extinct)” while unconfirmed sightings remain.',
        'It was nearly blind and navigated the murky river by echolocation.',
        'Its lineage split from other dolphins about 20 million years ago.',
      ],
    },
    threats: {
      de: [
        'Unmengen Haken- und Stellnetze im Jangtse töteten Delfine als Beifang.',
        'Schiffslärm störte die Echoortung, Schiffsschrauben verletzten die Tiere.',
        'Staudämme, Sandabbau und Abwässer zerstörten ihren Lebensraum.',
      ],
      en: [
        'Huge numbers of hooks and gillnets in the Yangtze killed dolphins as bycatch.',
        'Ship noise disrupted echolocation, and propellers injured the animals.',
        'Dams, sand mining and sewage destroyed its habitat.',
      ],
    },
    help: {
      de: [
        'Seit 2020 gilt im Jangtse ein zehnjähriges Fischereiverbot – davon profitiert der verwandte Jangtse-Glattschweinswal.',
        'Flussdelfine in Amazonas, Ganges und Indus brauchen Schutzzonen ohne Stellnetze.',
        'Lehre: Rettungspläne wurden für den Baiji jahrelang diskutiert, aber nicht umgesetzt – zu langes Zögern kann eine Art kosten.',
      ],
      en: [
        'A ten-year fishing ban on the Yangtze has been in force since 2020 – helping the related Yangtze finless porpoise.',
        'River dolphins in the Amazon, Ganges and Indus need protected zones free of gillnets.',
        'Lesson: rescue plans for the baiji were discussed for years but never carried out – hesitation can cost a species.',
      ],
    },
    home: [30, 115.5],
    range: [
      [30.5, 112, 300],
      [30, 116.5, 300],
      [31.5, 120, 200],
    ],
    relatives: ['basilosaurus', 'ambulocetus'],
    wiki: { de: 'Chinesischer Flussdelfin', en: 'Baiji' },
  },
  {
    id: 'westliches-spitzmaulnashorn',
    sci: 'Diceros bicornis longipes',
    name: { de: 'Westliches Spitzmaulnashorn', en: 'Western black rhinoceros' },
    group: 'land-mammal',
    realm: 'land',
    status: 'EX',
    extinct: 2006,
    population: {
      de: 'ausgestorben – letzte Spuren 2006 in Nordkamerun, 2011 offiziell für ausgestorben erklärt',
      en: 'extinct – last traces found in northern Cameroon in 2006, officially declared extinct in 2011',
    },
    trend: 'unknown',
    length: 3.2,
    weight: 1100,
    teaser: {
      de: 'Eine Unterart des Spitzmaulnashorns aus Westafrika, die der Wilderei zum Opfer fiel.',
      en: 'A West African subspecies of black rhino that fell victim to poaching.',
    },
    facts: {
      de: [
        'Mit seiner beweglichen, spitzen Oberlippe zupfte es Blätter von Büschen.',
        'Es lebte in den Savannen südlich der Sahara, zuletzt nur noch in Kamerun.',
        'Andere Unterarten des Spitzmaulnashorns überleben – der Gesamtbestand wächst wieder langsam.',
      ],
      en: [
        'It used its flexible, pointed upper lip to pluck leaves from bushes.',
        'It lived in the savannas south of the Sahara, in the end only in Cameroon.',
        'Other black rhino subspecies survive – and their overall numbers are slowly rising.',
      ],
    },
    threats: {
      de: [
        'Wilderer töteten die Tiere für ihr Horn, das in Teilen Asiens als Heilmittel gilt.',
        'Schutzmaßnahmen in Kamerun waren schwach und kamen zu spät.',
        'Jagd und Siedlungsausbau hatten den Bestand schon im 20. Jahrhundert stark verkleinert.',
      ],
      en: [
        'Poachers killed the animals for their horn, which is believed to be medicine in parts of Asia.',
        'Protection in Cameroon was weak and came too late.',
        'Hunting and spreading settlements had already shrunk the population in the 20th century.',
      ],
    },
    help: {
      de: [
        'In Namibia, Kenia und Südafrika retten bewaffnete Ranger, Enthornung und Umsiedlungen die übrigen Spitzmaulnashörner.',
        'Der internationale Handel mit Nashorn ist verboten – Horn besteht nur aus Keratin wie unsere Fingernägel und heilt nichts.',
      ],
      en: [
        'In Namibia, Kenya and South Africa, armed rangers, dehorning and translocations are saving the remaining black rhinos.',
        'International trade in rhino horn is banned – horn is just keratin like our fingernails and cures nothing.',
      ],
    },
    home: [8.5, 14],
    range: [
      [9, 14, 400],
      [11, 20, 700],
      [12, 4, 600],
    ],
    relatives: ['paraceratherium'],
    wiki: { de: 'Spitzmaulnashorn', en: 'Western black rhinoceros' },
  },
  {
    id: 'pyrenaeen-steinbock',
    sci: 'Capra pyrenaica pyrenaica',
    name: { de: 'Pyrenäen-Steinbock', en: 'Pyrenean ibex' },
    group: 'land-mammal',
    realm: 'land',
    status: 'EX',
    extinct: 2000,
    population: {
      de: 'ausgestorben – das letzte Weibchen „Celia“ wurde im Januar 2000 im Nationalpark Ordesa tot aufgefunden',
      en: 'extinct – the last female, “Celia”, was found dead in Ordesa National Park in January 2000',
    },
    trend: 'unknown',
    length: 1.4,
    weight: 80,
    teaser: {
      de: 'Die erste Tierart, die nach ihrem Aussterben geklont wurde – für sieben Minuten.',
      en: 'The first animal to be cloned after going extinct – for seven minutes.',
    },
    facts: {
      de: [
        'Es war eine Unterart des Iberiensteinbocks, die nur in den Pyrenäen lebte.',
        'Böcke trugen mächtige, nach hinten gebogene Hörner.',
        '2003 wurde aus Celias Zellen ein Klon geboren, starb aber kurz nach der Geburt an einem Lungenfehler.',
      ],
      en: [
        'It was a subspecies of the Iberian ibex found only in the Pyrenees.',
        'Males carried massive, backward-curving horns.',
        'In 2003 a clone was born from Celia’s cells but died minutes later from a lung defect.',
      ],
    },
    threats: {
      de: [
        'Trophäenjäger schossen die Böcke wegen ihrer Hörner.',
        'Konkurrenz durch Hausziegen und Schafe um Weideflächen.',
        'Der winzige Restbestand war anfällig für Inzucht und Krankheiten.',
      ],
      en: [
        'Trophy hunters shot the males for their horns.',
        'Domestic goats and sheep competed for grazing.',
        'The tiny remaining population was prone to inbreeding and disease.',
      ],
    },
    help: {
      de: [
        'Heute leben wieder Steinböcke in den Pyrenäen – Tiere einer anderen Unterart wurden ab 2014 angesiedelt.',
        'Das Klon-Experiment zeigt: „De-Extinction“ ist teuer und unsicher – Arten zu erhalten, solange sie leben, ist viel wirksamer.',
      ],
      en: [
        'Ibex roam the Pyrenees again – animals of another subspecies have been released since 2014.',
        'The cloning experiment shows that “de-extinction” is expensive and uncertain – saving species while they are still alive works far better.',
      ],
    },
    home: [42.65, -0.05],
    range: [[42.7, 0.5, 200]],
    wiki: { de: 'Pyrenäensteinbock', en: 'Pyrenean ibex' },
  },
  {
    id: 'bramble-cay-mosaikschwanzratte',
    sci: 'Melomys rubicola',
    name: { de: 'Bramble-Cay-Mosaikschwanzratte', en: 'Bramble Cay melomys' },
    group: 'land-mammal',
    realm: 'land',
    status: 'EX',
    extinct: 2009,
    population: {
      de: 'ausgestorben – zuletzt 2009 gesehen, 2016 offiziell für ausgestorben erklärt',
      en: 'extinct – last seen in 2009, officially declared extinct in 2016',
    },
    trend: 'unknown',
    length: 0.15,
    weight: 0.08,
    teaser: {
      de: 'Ein kleines Nagetier auf einer winzigen Koralleninsel – das erste Säugetier, das wohl durch den menschengemachten Klimawandel ausstarb.',
      en: 'A small rodent on a tiny coral island – the first mammal thought to have gone extinct due to human-caused climate change.',
    },
    facts: {
      de: [
        'Ihre ganze Welt war die Insel Bramble Cay im Great Barrier Reef: rund 340 m lang und höchstens 3 m hoch.',
        'Ihr Schwanz trug mosaikartig angeordnete Schuppen und konnte greifen.',
        'Die Insel war das einzige bekannte Vorkommen der Art.',
      ],
      en: [
        'Its whole world was Bramble Cay in the Great Barrier Reef: about 340 m long and at most 3 m high.',
        'Its tail had mosaic-like scales and could grip.',
        'The island was the only known home of the species.',
      ],
    },
    threats: {
      de: [
        'Steigender Meeresspiegel und Sturmfluten überspülten die Insel immer häufiger.',
        'Salzwasser vernichtete fast alle Pflanzen, von denen die Tiere lebten.',
        'Ein Rettungs- und Zuchtprogramm wurde geplant, aber nicht rechtzeitig begonnen.',
      ],
      en: [
        'Rising sea levels and storm surges flooded the island more and more often.',
        'Salt water destroyed almost all the plants the animals fed on.',
        'A rescue and breeding programme was planned but not started in time.',
      ],
    },
    help: {
      de: [
        'Arten mit nur einem Vorkommen brauchen eine Reservepopulation in Menschenobhut, bevor es zu spät ist.',
        'Klimaschutz bedeutet auch Artenschutz – jeder Beitrag zum Senken von Emissionen zählt.',
      ],
      en: [
        'Species with only one population need a backup population in human care before it is too late.',
        'Climate protection is also species protection – every contribution to cutting emissions counts.',
      ],
    },
    home: [-9.14, 143.88],
    range: [[-9.14, 143.88, 5]],
    wiki: { de: 'Bramble-Cay-Mosaikschwanzratte', en: 'Bramble Cay melomys' },
  },
  {
    id: 'schomburgk-hirsch',
    sci: 'Rucervus schomburgki',
    name: { de: 'Schomburgk-Hirsch', en: 'Schomburgk’s deer' },
    group: 'land-mammal',
    realm: 'land',
    status: 'EX',
    extinct: 1938,
    population: {
      de: 'ausgestorben – das letzte bekannte Tier, ein Tempel-Hirsch, wurde 1938 in Thailand getötet',
      en: 'extinct – the last known animal, a temple pet, was killed in Thailand in 1938',
    },
    trend: 'unknown',
    length: 1.8,
    weight: 110,
    teaser: {
      de: 'Ein Sumpfhirsch aus Thailand mit einem auffällig verzweigten, korbartigen Geweih.',
      en: 'A swamp deer from Thailand with strikingly branched, basket-like antlers.',
    },
    facts: {
      de: [
        'Sein Geweih trug bis zu 33 Enden und war bei Sammlern sehr begehrt.',
        'Er lebte in sumpfigen Grasebenen im Tal des Chao Phraya.',
        'Benannt ist er nach Robert Schomburgk, der um 1860 britischer Konsul in Bangkok war.',
      ],
      en: [
        'Its antlers carried up to 33 tines and were highly prized by collectors.',
        'It lived on swampy grassy plains in the Chao Phraya valley.',
        'It is named after Robert Schomburgk, British consul in Bangkok around 1860.',
      ],
    },
    threats: {
      de: [
        'Für den Reis- und Exportanbau wurden seine Sumpfebenen trockengelegt.',
        'Bei Hochwasser drängten sich die Hirsche auf kleinen Inseln, wo Jäger sie leicht erlegten.',
        'Geweihe wurden für die chinesische Medizin gehandelt.',
      ],
      en: [
        'Its swampy plains were drained for rice farming for export.',
        'During floods the deer crowded onto small islands, where hunters killed them easily.',
        'Antlers were traded for Chinese medicine.',
      ],
    },
    help: {
      de: [
        'Feuchtgebiete stehen heute unter dem Schutz der Ramsar-Konvention – sie sind Lebensraum für viele Arten.',
        'Der verwandte Barasingha in Indien wurde durch Schutzgebiete wie den Kanha-Nationalpark vor dem Aussterben bewahrt.',
      ],
      en: [
        'Wetlands are now protected under the Ramsar Convention – they are home to many species.',
        'Its relative, the barasingha in India, was saved from extinction by protected areas such as Kanha National Park.',
      ],
    },
    home: [14, 100.5],
    range: [[14.5, 100.3, 220]],
    wiki: { de: 'Schomburgk-Hirsch', en: 'Schomburgk\'s deer' },
  },
];
