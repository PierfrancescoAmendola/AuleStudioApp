import { StudyRoom, DirectionsFromLocation } from '../../types';

export const afamRooms: StudyRoom[] = [
  // ============================================================
  // ACCADEMIA DI BELLE ARTI L'AQUILA (ABAQ)
  // Arte, Scenografia, Restauro, Grafica
  // ============================================================
  {
    id: 'abaq_biblioteca',
    nome: 'Biblioteca "Mario Rotili" (ABAQ)',
    edificio: 'Sede Accademia (Pettino)',
    piano: 0,
    postiDisponibili: 40,
    postiTotali: 50,
    orarioApertura: '09:00',
    orarioChiusura: '17:00', // Chiude presto ven/sab
    servizi: ['WiFi', "Consultazione Cataloghi d'Arte", 'Silenzio'],
    latitude: 42.3620,
    longitude: 13.3650,
    indirizzo: "Via Leonardo da Vinci 6, 67100 L'Aquila",
    university: 'AFAM',
    occupancy_rate: 'Basso',
    notes: "Luogo di grande ispirazione. Non e' una biblioteca classica: qui si sfogliano volumi d'arte giganti. Molto tranquilla rispetto ai laboratori.",
    tags: ['Deep Work'],
    vibe: 'Quiet art library'
  },
  {
    id: 'abaq_atelier',
    nome: 'Atelier e Laboratori Aperti',
    edificio: 'Sede Accademia',
    piano: 1, // Vari livelli
    postiDisponibili: 100,
    postiTotali: 150,
    orarioApertura: '08:30',
    orarioChiusura: '19:00',
    servizi: ['Cavalletti', 'Lavandini', 'Odore di Trementina'],
    latitude: 42.3620,
    longitude: 13.3650,
    indirizzo: "Via Leonardo da Vinci, L'Aquila",
    university: 'AFAM',
    notes: 'Gli studenti lavorano qui ai loro progetti pratici. Non e\' un luogo di studio silenzioso, e\' un luogo di creazione. Accesso libero spesso consentito agli iscritti.',
    tags: ['Laboratori', 'No Silenzio'],
    vibe: 'Creative noise'
  },

  // ============================================================
  // CONSERVATORIO "ALFREDO CASELLA" (L'AQUILA)
  // Musica
  // ============================================================
  {
    id: 'cons_aq_biblio',
    nome: 'Biblioteca Musicale Conservatorio Casella',
    edificio: 'Sede Via Savini',
    piano: 0,
    postiDisponibili: 30,
    postiTotali: 40,
    orarioApertura: '09:00',
    orarioChiusura: '18:00',
    servizi: ['Spartiti', 'Ascolto Musica', 'WiFi'],
    latitude: 42.3530,
    longitude: 13.4150,
    indirizzo: "Via Francesco Savini, 67100 L'Aquila",
    university: 'AFAM',
    notes: "Fornitissima di partiture. Ambiente silenzioso, ma dall'edificio provengono suoni di strumenti ovunque.",
    tags: ['Deep Work', 'Musica'],
    vibe: 'Quiet but musical'
  },
  {
    id: 'cons_aq_aule_studio',
    nome: 'Aule Studio Strumento (Su Prenotazione)',
    edificio: 'Sede Via Savini',
    piano: 1,
    postiDisponibili: 15, // Numero aule
    postiTotali: 20,
    orarioApertura: '08:00',
    orarioChiusura: '20:00',
    servizi: ['Pianoforte Verticale/Coda', 'Leggii', 'Insonorizzazione'],
    latitude: 42.3530,
    longitude: 13.4150,
    indirizzo: "Via Francesco Savini, L'Aquila",
    university: 'AFAM',
    notes: 'Non sono aule lettura: sono stanze per esercitarsi con lo strumento. Prenotazione obbligatoria in segreteria/portineria.',
    tags: ['Prenotazione', 'Insonorizzate'],
    vibe: 'Practice rooms'
  },

  // ============================================================
  // CONSERVATORIO "LUISA D'ANNUNZIO" (PESCARA)
  // ============================================================
  {
    id: 'cons_pe_biblio',
    nome: 'Biblioteca Conservatorio Pescara',
    edificio: 'Palazzo Mezzopreti',
    piano: 1,
    postiDisponibili: 40,
    postiTotali: 50,
    orarioApertura: '09:00',
    orarioChiusura: '17:30',
    servizi: ['Consultazione', 'WiFi', 'Auditorium annesso'],
    latitude: 42.4780,
    longitude: 14.2050,
    indirizzo: 'Viale L. Bovio 283, 65124 Pescara',
    university: 'AFAM',
    notes: 'Situato in una zona residenziale a nord del centro. Ambiente elegante e storico.',
    tags: ['Deep Work', 'Musica'],
    vibe: 'Quiet elegance'
  },

  // ============================================================
  // CONSERVATORIO "GAETANO BRAGA" (TERAMO)
  // ============================================================
  {
    id: 'cons_te_sede',
    nome: 'Sede Storica Conservatorio Braga',
    edificio: 'Palazzo nel Centro Storico',
    piano: 0,
    postiDisponibili: 20,
    postiTotali: 30,
    orarioApertura: '08:30',
    orarioChiusura: '19:00',
    servizi: ['Sala Prove', 'Biblioteca'],
    latitude: 42.6590,
    longitude: 13.7030,
    indirizzo: 'Corso San Giorgio 14, 64100 Teramo',
    university: 'AFAM',
    notes: 'Pienissimo centro di Teramo. Le note degli strumenti si sentono spesso dalla strada. Piccola biblioteca interna.',
    tags: ['Centro', 'Musica'],
    vibe: 'Historic and lively'
  },

  // ============================================================
  // ISIA PESCARA (Design)
  // ============================================================
  {
    id: 'isia_pescara_lab',
    nome: 'Laboratori Design ISIA',
    edificio: 'Sede ISIA (Ex Banco di Napoli)',
    piano: 1,
    postiDisponibili: 40,
    postiTotali: 50,
    orarioApertura: '09:00',
    orarioChiusura: '18:00',
    servizi: ['iMac', 'Tavoli Progettazione', 'Stampanti 3D'],
    latitude: 42.4730,
    longitude: 14.2120,
    indirizzo: 'Via Cesare Battisti 19, 65122 Pescara',
    university: 'AFAM',
    notes: 'Spazio open space dedicato al design del prodotto e comunicazione. Qui si lavora ai computer o si fanno prototipi. Molto centrale (Piazza Salotto).',
    tags: ['Design District', 'Laboratori'],
    vibe: 'Urban creative'
  }
];

export const getDirectionsAFAM = (room: StudyRoom): DirectionsFromLocation[] => {
  const directions: DirectionsFromLocation[] = [];
  
  const isABAQ = room.id.includes('abaq');
  const isCasella = room.id.includes('cons_aq');
  const isPescaraCons = room.id.includes('cons_pe');
  const isTeramoCons = room.id.includes('cons_te');
  const isISIA = room.id.includes('isia');

  // ============================================================
  // L'AQUILA (ABAQ & CASELLA)
  // ============================================================
  if (isABAQ) {
    directions.push({
      luogo: 'Fermata Amiternum / Hotel My Suite',
      descrizione: `L'Accademia e' in zona **Pettino**, fuori dal centro.
1. Se arrivi con bus extraurbano, scendi all'Hotel My Suite (Amiternum).
2. L'Accademia e' proprio dietro l'hotel/distributore, a 2 minuti a piedi.`,
      mezziPubblici: ['A piedi', 'Bus Urbano'],
      tempoStimato: '3 min a piedi',
      note: 'Posizione strategica per i pendolari, scomoda per chi vive in centro storico.'
    });
  }

  if (isCasella) {
    directions.push({
      luogo: 'Terminal Bus Collemaggio',
      descrizione: `Il Conservatorio e' in zona **Acquasanta** (vicino Cimitero/Stadio).
1. Dal Terminal, prendi un bus urbano diretto verso il Cimitero/Zona Industriale.
2. Oppure a piedi e' una passeggiata di 20 minuti in discesa (ma il ritorno e' in salita!).`,
      mezziPubblici: ['Bus Urbano', 'Auto'],
      tempoStimato: '15 min',
      note: "Zona tranquilla, ampio parcheggio (cosa rara a L'Aquila)."
    });
  }

  // ============================================================
  // PESCARA (CONSERVATORIO & ISIA)
  // ============================================================
  if (isPescaraCons) {
    directions.push({
      luogo: 'Stazione Pescara Centrale',
      descrizione: `Il Conservatorio e' a nord, su **Viale Bovio**.
1. Dalla stazione, prendi un bus urbano che va verso nord (direzione Montesilvano/Santa Filomena) o cammina per 20 minuti lungo Corso Vittorio/Viale Bovio.`,
      mezziPubblici: ['Bus TUA'],
      tempoStimato: '10 min (bus) / 20 min (piedi)',
      note: 'Si trova vicino al Conservatorio delle Suore Ravasco, non confondersi.'
    });
  }

  if (isISIA) {
    directions.push({
      luogo: 'Piazza Salotto / Stazione Centrale',
      descrizione: `L'ISIA e' in pieno centro (zona pedonale).
1. Dalla Stazione Centrale, percorri Corso Umberto fino a Piazza Salotto (Piazza della Rinascita).
2. L'edificio e' su Via Cesare Battisti, nel cuore della zona commerciale.`,
      mezziPubblici: ['A piedi'],
      tempoStimato: '5 min dalla Stazione',
      note: 'Location premium, circondata da bar e negozi.'
    });
  }

  // ============================================================
  // TERAMO (BRAGA)
  // ============================================================
  if (isTeramoCons) {
    directions.push({
      luogo: 'Piazza Garibaldi / Centro',
      descrizione: `Il Braga e' sul corso principale (**Corso San Giorgio**).
1. E' raggiungibile a piedi da qualsiasi punto del centro storico.
2. Si trova nell'area pedonale tra Piazza Garibaldi e Piazza Martiri.`,
      mezziPubblici: ['A piedi'],
      tempoStimato: "Zero (Sei gia' in centro)",
      note: "Impossibile non trovarlo, e' il salotto della citta'."
    });
  }

  return directions;
};

// Note strategiche (AFAM Edition)
// - Evita di chiamarli solo "Aule studio": per conservatori servono label come "Aule Pianoforte" o "Box Insonorizzati".
// - Evidenzia la prenotazione per sale strumento (Casella/Braga/D'Annunzio).
// - Sottolinea vantaggio ABAQ: a 2 min dalla fermata Amiternum.
// - ISIA vive il design district di Pescara: vibe urbano/creativo.
// - Avvisa che nei conservatori c'e' sempre rumore di fondo di strumenti.
