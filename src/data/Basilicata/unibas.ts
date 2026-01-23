import { StudyRoom, DirectionsFromLocation } from '../../types';

export const unibasRooms: StudyRoom[] = [
  // ============================================================
  // POTENZA - CAMPUS MACCHIA ROMANA (Scientifico)
  // ============================================================
  {
    id: 'unibas_macchia_biblio_centrale',
    nome: 'Biblioteca Interdipartimentale (BIA)',
    edificio: 'Campus Macchia Romana (Edificio Centrale)',
    piano: 0,
    postiDisponibili: 320,
    postiTotali: 350,
    orarioApertura: '08:30',
    orarioChiusura: '19:00',
    servizi: ['WiFi Eduroam', 'Box Gruppo', 'Prese al banco'],
    latitude: 40.6480,
    longitude: 15.8050,
    indirizzo: "Viale dell'Ateneo Lucano 10, Potenza",
    university: 'Unibas',
    occupancy_rate: 'Alto',
    notes: "Il 'bunker' degli ingegneri e biologi. Grande, dispersiva, ma essenziale. D'inverno e' il rifugio caldo contro il vento di Macchia Romana.",
    tags: ['Deep Work'],
    vibe: 'Ampia ma fredda'
  },
  {
    id: 'unibas_macchia_aule_studio_ing',
    nome: 'Aule Studio "La Nave" (Spazi Informali)',
    edificio: 'Edificio Ingegneria (Corpo Aule)',
    piano: 1,
    postiDisponibili: 150,
    postiTotali: 200,
    orarioApertura: '08:00',
    orarioChiusura: '20:00',
    servizi: ['Socialita', 'Distributori', 'Rumore di fondo'],
    latitude: 40.6485,
    longitude: 15.8055,
    indirizzo: "Viale dell'Ateneo Lucano, Potenza",
    university: 'Unibas',
    notes: 'Non sono aule chiuse, ma spazi nei lunghi corridoi e aree comuni (chiamati spesso "Nave" per la forma). Qui si studia mangiando una pizzetta e parlando ad alta voce.',
    tags: ['Social Hub'],
    vibe: 'Rumoroso'
  },
  // ============================================================
  // POTENZA - POLO FRANCIOSO (Umanistico / Centro)
  // ============================================================
  {
    id: 'unibas_francioso_biblio',
    nome: 'Biblioteca di Ateneo "Francioso"',
    edificio: 'Polo Francioso (Via N. Sauro)',
    piano: 0,
    postiDisponibili: 120,
    postiTotali: 140,
    orarioApertura: '08:30',
    orarioChiusura: '18:45',
    servizi: ['Silenzio', 'Cortile Interno', 'WiFi'],
    latitude: 40.6380,
    longitude: 15.8080,
    indirizzo: 'Via N. Sauro 85, Potenza',
    university: 'Unibas',
    notes: "Ambiente piu' classico. Se piena, gli studenti occupano le aule didattiche vuote al piano terra (chiedere in portineria).",
    tags: ['Centro', 'Silenzio'],
    vibe: 'Classica e raccolta'
  },

  // ============================================================
  // POTENZA - BIBLIOTECHE PUBBLICHE (Vitali per gli studenti)
  // ============================================================
  {
    id: 'potenza_biblio_nazionale',
    nome: 'Biblioteca Nazionale di Potenza',
    edificio: 'Palazzo Biblioteca Nazionale',
    piano: 0,
    postiDisponibili: 400,
    postiTotali: 500,
    orarioApertura: '08:30',
    orarioChiusura: '19:00', // Sabato fino alle 13:30
    servizi: ['Silenzio Assoluto', 'Enorme', 'WiFi Pubblico', 'Emeroteca'],
    latitude: 40.6350,
    longitude: 15.7950,
    indirizzo: 'Via del Gallitello, 85100 Potenza',
    university: 'Unibas',
    occupancy_rate: 'Medio-Alto',
    notes: "NON e' dell'universita', ma e' frequentatissima dagli universitari. Spazi immensi, molto silenziosa. Si trova nella parte bassa della citta' (zona commerciale), comoda per chi abita giu'.",
    tags: ['Silenzio', 'Gallitello'],
    vibe: 'Silenzio tombale'
  },
  {
    id: 'potenza_biblio_provinciale',
    nome: 'Biblioteca Provinciale (Centro Storico)',
    edificio: 'Palazzo della Provincia',
    piano: 1,
    postiDisponibili: 150,
    postiTotali: 200,
    orarioApertura: '09:00',
    orarioChiusura: '18:30',
    servizi: ['Centro Citta', 'Sala Lettura Storica'],
    latitude: 40.6390,
    longitude: 15.8020,
    indirizzo: 'Corso Garibaldi, Potenza',
    university: 'Unibas',
    notes: 'Il punto di riferimento per chi vive in centro e non vuole scendere al Gallitello o salire a Macchia. Atmosfera molto seria.',
    tags: ['Centro', 'Storica'],
    vibe: 'Seria'
  },

  // ============================================================
  // POTENZA - ADSU (Diritto allo Studio)
  // ============================================================
  {
    id: 'unibas_adsu_residenza',
    nome: 'Sala Studio Residenza Universitaria',
    edificio: 'Residenza ADSU',
    piano: 0,
    postiDisponibili: 50,
    postiTotali: 60,
    orarioApertura: 'H24', // Spesso accessibile sempre per i residenti
    orarioChiusura: '23:59',
    servizi: ['WiFi', 'Vending Machines', 'Aperta Sera'],
    latitude: 40.6490,
    longitude: 15.8060,
    indirizzo: 'Via Baragiano / Zona Macchia Romana',
    university: 'Unibas',
    notes: 'Accesso prioritario ai borsisti residenti, ma punto nevralgico per lo studio serale/notturno quando le biblioteche chiudono.',
    tags: ['H24', 'ADSU'],
    vibe: 'Serale'
  },

  // ============================================================
  // MATERA (Sede Distaccata)
  // ============================================================
  {
    id: 'unibas_matera_campus',
    nome: 'Biblioteca Campus Matera (Lanera)',
    edificio: 'Campus San Rocco',
    piano: 1,
    postiDisponibili: 100,
    postiTotali: 120,
    orarioApertura: '09:00',
    orarioChiusura: '18:30',
    servizi: ['Vista Panoramica', 'Architettura Moderna', 'WiFi'],
    latitude: 40.6620,
    longitude: 16.6080,
    indirizzo: 'Via Lanera 20, Matera',
    university: 'Unibas',
    notes: "Bellissima struttura. Se cerchi ispirazione per Architettura, e' qui.",
    tags: ['Matera', 'Panoramica / Focus'],
    vibe: 'Moderna'
  },
  {
    id: 'matera_biblio_stigliani',
    nome: 'Biblioteca Provinciale "T. Stigliani"',
    edificio: "Palazzo dell'Annunziata (Piazza Vittorio Veneto)",
    piano: 1,
    postiDisponibili: 150,
    postiTotali: 180,
    orarioApertura: '08:30',
    orarioChiusura: '18:30', // Verifica aperture
    servizi: ['Pienissimo Centro', 'Storica', 'WiFi'],
    latitude: 40.6660,
    longitude: 16.6040,
    indirizzo: 'Piazza Vittorio Veneto, Matera',
    university: 'Unibas',
    occupancy_rate: 'Alto',
    notes: "Situata nel palazzo che domina la piazza principale. E' la vera alternativa al campus. Molto frequentata dagli studenti materani.",
    tags: ['Matera', 'Centro'],
    vibe: 'Iconica'
  }
];

export const getDirectionsUnibas = (room: StudyRoom): DirectionsFromLocation[] => {
  const directions: DirectionsFromLocation[] = [];
  
  const isMacchia = room.indirizzo.includes('Ateneo Lucano') || room.id.includes('macchia') || room.id.includes('adsu');
  const isGallitello = room.id.includes('nazionale');
  const isCentroPotenza = room.indirizzo.includes('Garibaldi') || room.indirizzo.includes('Sauro');
  const isMatera = room.indirizzo.includes('Matera');

  // ============================================================
  // POTENZA - ZONA MACCHIA ROMANA (Alta)
  // ============================================================
  if (isMacchia) {
    directions.push({
      luogo: 'Centro Citta',
      descrizione: `Per salire al Campus Macchia Romana:
1. Da Piazza XVIII Agosto o Via Pretoria.
2. Bus Urbano **Linea 6** o **Linea 1** (frequenza ogni 20-30 min).
3. Scendi alla fermata Universita'/Ospedale.`,
      mezziPubblici: ['Bus Linea 6'],
      tempoStimato: '20 min',
      note: "Copriti bene, lassu' tira vento forte."
    });
  }

  // ============================================================
  // POTENZA - ZONA GALLITELLO (Bassa - Biblio Nazionale)
  // ============================================================
  if (isGallitello) {
    directions.push({
      luogo: 'Stazione Potenza Centrale',
      descrizione: `La Biblioteca Nazionale e' nella parte bassa (commerciale).
1. Dalla Stazione Centrale, puoi arrivarci a piedi (15 min) o con un bus urbano breve.
2. E' vicina al Ponte Musmeci e agli uffici regionali.`,
      mezziPubblici: ['A piedi', 'Bus'],
      tempoStimato: '15 min a piedi',
      note: 'Ottima posizione se devi fare spesa dopo lo studio (zona supermercati).'
    });
  }

  // ============================================================
  // POTENZA - CENTRO STORICO (Francioso / Provinciale)
  // ============================================================
  if (isCentroPotenza) {
    directions.push({
      luogo: 'Scale Mobili Santa Lucia',
      descrizione: `Usa le scale mobili per raggiungere il centro/Francioso.
1. Dal parcheggio a valle o dalla stazione, cerca l'impianto di scale mobili "Santa Lucia" o "Ponte Attrezzato".
2. E' il modo piu' veloce e meno faticoso per muoversi in verticale.`,
      mezziPubblici: ['Scale Mobili'],
      tempoStimato: '10 min',
      note: 'Le scale chiudono la sera tardi, controlla gli orari.'
    });
  }

  // ============================================================
  // MATERA
  // ============================================================
  if (isMatera) {
    directions.push({
      luogo: 'Stazione FAL Matera Centrale',
      descrizione: `1. Per la **Stigliani**: Esci su Piazza Vittorio Veneto, il palazzo e' li' davanti (Palazzo dell'Annunziata).
2. Per il **Campus (Lanera)**: Cammina 10-15 min passando per Via del Castello.`,
      mezziPubblici: ['A piedi'],
      tempoStimato: 'Variabile',
      note: 'Matera si vive a piedi.'
    });
  }

  return directions;
};

// Note Strategiche per l'App (Unibas - Versione Estesa)
// 1) Potenza e' verticale: Su (Macchia/Ospedale), Centro (Francioso/Provinciale), Giu' (Gallitello). Un filtro per zona aiuta.
// 2) La Biblioteca Nazionale (Gallitello) e' cruciale: enorme, silenziosa, parcheggio.
// 3) Matera: evidenzia Stigliani (piazza principale) vs Campus Lanera.
// 4) Meteo: vento/neve a Macchia; bus in ritardo. Utile avviso meteo.
// 5) ADSU: sale studio serali/notturne, spesso H24 per residenti.
