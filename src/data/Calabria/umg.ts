import { StudyRoom, DirectionsFromLocation } from '../../types';

export const umgRooms: StudyRoom[] = [
  // ============================================================
  // CAMPUS GERMANETO - BIBLIOTECHE UFFICIALI (Massive)
  // ============================================================
  {
    id: 'umg_bio_biblio',
    nome: 'Biblioteca delle Bioscienze (Medicina)',
    edificio: 'Edificio Bioscienze (Livello C / Corpo G)',
    piano: 1,
    postiDisponibili: 400,
    postiTotali: 450,
    orarioApertura: '08:30',
    orarioChiusura: '19:00',
    servizi: ['WiFi Eduroam', 'Aria Condizionata', 'Box Singoli', 'Silenzio'],
    latitude: 38.8650,
    longitude: 16.5850,
    indirizzo: 'Viale Europa, Germaneto, 88100 Catanzaro',
    university: 'UMG',
    tags: ['biblioteca', 'medicina', 'bioscienze', 'grande', 'fredda'],
    vibe: 'Massiccio e opprimente',
    occupancy_rate: 'Altissimo',
    notes: 'È il cuore pulsante. Enorme, su più livelli. D\'estate fa freddo per l\'aria condizionata (portati una felpa), d\'inverno è molto calda. Se arrivi dopo le 10:00 fai fatica a trovare posto.'
  },
  {
    id: 'umg_giur_biblio',
    nome: 'Biblioteca Scienze Giuridiche',
    edificio: 'Edificio Giuridico-Economico',
    piano: 1,
    postiDisponibili: 300,
    postiTotali: 350,
    orarioApertura: '08:30',
    orarioChiusura: '18:30',
    servizi: ['Consultazione Codici', 'Prese al banco', 'WiFi'],
    latitude: 38.8630,
    longitude: 16.5870,
    indirizzo: 'Germaneto, Catanzaro',
    university: 'UMG',
    tags: ['biblioteca', 'giurisprudenza', 'economia', 'luminosa'],
    vibe: 'Respirabile e meno oppressivo',
    notes: 'Più luminosa e meno opprimente di quella di Medicina. Molti studenti di medicina vengono a studiare qui per "cambiare aria".'
  },

  // ============================================================
  // CAMPUS GERMANETO - SPAZI ALTERNATIVI & RESIDENZE
  // ============================================================
  {
    id: 'umg_residenze_studio',
    nome: 'Aula Studio Residenze (RD)',
    edificio: 'Residenze Universitarie (Lotto 1 e 2)',
    piano: 0,
    postiDisponibili: 80,
    postiTotali: 100,
    orarioApertura: 'H24',
    orarioChiusura: 'H24',
    servizi: ['Aperta Sera/Notte', 'WiFi', 'Vending Machines'],
    latitude: 38.8670,
    longitude: 16.5840,
    indirizzo: 'Area Residenziale Germaneto',
    university: 'UMG',
    tags: ['residenziale', 'h24', 'weekend'],
    vibe: 'Salvatrice notturna',
    extendedHours: true,
    notes: 'Vitale per chi vive al Campus. È l\'unico posto dove studiare la sera tardi o nel weekend quando gli edifici didattici chiudono.'
  },
  {
    id: 'umg_corpo_h_acquari',
    nome: 'Gli "Acquari" del Policlinico (Corpo H)',
    edificio: 'Policlinico Universitario Mater Domini',
    piano: 0,
    postiDisponibili: 150,
    postiTotali: 200,
    orarioApertura: '08:00',
    orarioChiusura: '20:00',
    servizi: ['Vicino Reparti', 'Socialità', 'Bar Ospedale'],
    latitude: 38.8660,
    longitude: 16.5860,
    indirizzo: 'Viale Europa, Policlinico',
    university: 'UMG',
    tags: ['ospedale', 'tirocinio', 'sociale', 'caos'],
    vibe: 'Vivace e caotico',
    notes: 'Aule vetrate lungo i corridoi dell\'ospedale. Usate dagli studenti in tirocinio o da chi vuole ripetere ad alta voce.'
  },
  {
    id: 'umg_mensa_social',
    nome: 'Area Mensa (Studio Informale)',
    edificio: 'Edificio Servizi',
    piano: -1,
    postiDisponibili: 200,
    postiTotali: 300,
    orarioApertura: '09:00',
    orarioChiusura: '18:00',
    servizi: ['Tavoli Grandi', 'Rumore', 'Prese scarse'],
    latitude: 38.8640,
    longitude: 16.5860,
    indirizzo: 'Germaneto Area Servizi',
    university: 'UMG',
    tags: ['mensa', 'gruppo', 'rumorosa', 'coworking'],
    vibe: 'Caotico ma funzionale',
    notes: 'Fuori dagli orari di pranzo (12:30-14:30), la mensa diventa un\'enorme aula studio di gruppo. Ideale per lavori di gruppo rumorosi.'
  },

  // ============================================================
  // CATANZARO CENTRO & LIDO (Dove vivono gli studenti)
  // ============================================================
  {
    id: 'cz_biblio_denobili',
    nome: 'Biblioteca Comunale "Filippo De Nobili"',
    edificio: 'Villa Margherita (Centro Storico)',
    piano: 0,
    postiDisponibili: 100,
    postiTotali: 120,
    orarioApertura: '08:30',
    orarioChiusura: '18:30',
    servizi: ['Silenzio', 'Storica', 'Nel Parco'],
    latitude: 38.9080,
    longitude: 16.5920,
    indirizzo: 'Villa Margherita, Catanzaro Centro',
    university: 'UMG',
    tags: ['biblioteca', 'centro', 'storica', 'parco', 'alternativa'],
    vibe: 'Tranquillo e culturale',
    occupancy_rate: 'Alto',
    notes: 'Non è dell\'UMG, ma è fondamentale per chi vive in Centro. Bellissima, dentro la Villa Comunale. Perfetta per sessioni intense senza scendere a Germaneto.'
  },
  {
    id: 'cz_lido_biblio',
    nome: 'Biblioteca Comunale Sezione Lido',
    edificio: 'Delegazione Municipale Lido',
    piano: 1,
    postiDisponibili: 40,
    postiTotali: 50,
    orarioApertura: '09:00',
    orarioChiusura: '13:00',
    servizi: ['Vicino al Mare', 'WiFi'],
    latitude: 38.8280,
    longitude: 16.6250,
    indirizzo: 'Via del Mare, Catanzaro Lido',
    university: 'UMG',
    tags: ['biblioteca', 'lido', 'mare', 'piccolo', 'quartiere'],
    vibe: 'Intimo e stagionale',
    notes: 'Piccolo punto di appoggio a Catanzaro Lido. Gli orari sono ridotti, ma salva la vita a chi vive al mare. Verifica gli orari pomeridiani.'
  }
];

export const getDirectionsUMG = (room: StudyRoom): DirectionsFromLocation[] => {
  const directions: DirectionsFromLocation[] = [];
  
  const isGermaneto = room.indirizzo.includes('Germaneto') || room.id.includes('umg');
  const isCentro = room.id.includes('denobili');
  const isLido = room.id.includes('lido');

  // ============================================================
  // PER IL CAMPUS (GERMANETO)
  // ============================================================
  if (isGermaneto) {
    directions.push({
      luogo: 'Stazione Catanzaro Lido (Hub Principale)',
      descrizione: `Molti studenti vivono a Lido. Questo è il percorso più efficiente:
1. Prendi il **Treno Regionale** da Catanzaro Lido a **Catanzaro Germaneto** (10 min).
2. Dalla stazione Germaneto, prendi la navetta gratuita o fai 10 min a piedi verso il Campus.
3. Evita il bus AMC negli orari di punta (traffico sulla statale).`,
      mezziPubblici: ['Treno Regionale'],
      tempoStimato: '20 min totali',
      note: 'Il treno è la "Metropolitana di superficie" - usalo! Controlla l\'ultimo treno per tornare a Lido.'
    });

    directions.push({
      luogo: 'Catanzaro Centro',
      descrizione: `Se scendi dal centro:
1. Prendi i bus AMC (linee U1, U2 o navette dedicate) da Piazza Matteotti/Viadotto Kennedy.
2. Il tragitto è in discesa verso la valle.
3. Frequenza alta (ogni 15-20 min).`,
      mezziPubblici: ['Bus AMC U1', 'Bus AMC U2'],
      tempoStimato: '25 min',
      note: 'Verifica gli orari serali, le corse diminuiscono dopo le 20:00.'
    });

    directions.push({
      luogo: 'Auto (A2 Salerno-Reggio Calabria)',
      descrizione: `Se vieni da fuori:
1. Esci dall'A2 a **Catanzaro Sud**.
2. Segui indicazioni per Germaneto/Università.
3. Il campus ha parcheggi, ma riempiti velocemente.`,
      mezziPubblici: ['Auto'],
      tempoStimato: '10 min dall\'uscita',
      note: 'Parcheggio limitato in alta stagione. Arriva presto.'
    });
  }

  // ============================================================
  // PER IL CENTRO (DE NOBILI)
  // ============================================================
  if (isCentro) {
    directions.push({
      luogo: 'Funicolare (Da Sala)',
      descrizione: `Per salire in centro velocemente:
1. Se sei nella parte bassa (Sala/Piazza Roma), prendi la **Funicolare**.
2. Ti lascia a Piazza Roma. La biblioteca (Villa Margherita) è a 5 minuti a piedi.
3. Alternativa: bus AMC Circolari (Salita).`,
      mezziPubblici: ['Funicolare', 'Bus Circolari'],
      tempoStimato: '10 min (Funicolare)',
      note: 'La funicolare è rapida e evita i tornanti. Perfetta se carichi di libri.'
    });

    directions.push({
      luogo: 'Dal Campus Germaneto',
      descrizione: `Per chi studia al campus e vuole una pausa:
1. Prendi il bus AMC in salita verso Centro.
2. Arriva a Piazza Matteotti/Piazza Roma.
3. Oppure il treno fino a Catanzaro Lido, poi funicolare su.`,
      mezziPubblici: ['Bus AMC', 'Treno + Funicolare'],
      tempoStimato: '30-40 min',
      note: 'Vale la pena per un cambio di scenari e socialità.'
    });
  }

  // ============================================================
  // PER LIDO (BIBLIOTECA DI QUARTIERE)
  // ============================================================
  if (isLido) {
    directions.push({
      luogo: 'Stazione Catanzaro Lido / Lungomare',
      descrizione: `La biblioteca è in zona Corace/Porto, facilissima da raggiungere:
1. Se sei in stazione, fai 10 min a piedi verso il lungomare.
2. Se vieni dal Campus, prendi il treno da Germaneto a Lido.
3. Dalla stazione, segui via del Mare.`,
      mezziPubblici: ['A piedi', 'Treno'],
      tempoStimato: '10 min da stazione',
      note: 'Controlla bene gli orari: chiude a pranzo (13:00-15:00 chiusa). La sera è chiusa. Weekend: chiusa.'
    });

    directions.push({
      luogo: 'Alert Trasporti',
      descrizione: `L'80% della vita sociale è a Lido. Ecco i dettagli critici:
- **Ultimo treno a Lido**: ~22:30 (VERIFICA!)
- **Biblioteca Lido**: chiude TASSATIVAMENTE alle 13:00
- **Dopo le 18:00**: non c\'è biblioteca. Devi studiare al Campus o a casa.`,
      mezziPubblici: ['Treno Regionale'],
      tempoStimato: '15 min dal Campus',
      note: 'Pianifica bene se vivi a Lido: la mattina alla biblioteca, il pomeriggio al Campus (orario più lungo), sera a casa o Residenze.'
    });
  }

  return directions;
};
