import { StudyRoom, DirectionsFromLocation } from '../../types';

export const unircRooms: StudyRoom[] = [
  // ============================================================
  // CITTADELLA UNIVERSITARIA (Feo di Vito) - SPAZI UFFICIALI
  // ============================================================
  {
    id: 'unirc_ing_biblio_central',
    nome: 'Biblioteca Centrale Ingegneria',
    edificio: 'Torre Ingegneria (Piano 1)',
    piano: 1,
    postiDisponibili: 250,
    postiTotali: 300,
    orarioApertura: '08:30',
    orarioChiusura: '19:00',
    servizi: ['WiFi Eduroam', 'Aria Condizionata', 'Vista Panoramica'],
    latitude: 38.1220,
    longitude: 15.6620,
    indirizzo: 'Via Graziella, Feo di Vito, Reggio Calabria',
    university: 'UniRC',
    tags: ['biblioteca', 'ingegneria', 'vista panoramica', 'silenzio', 'distraente'],
    vibe: 'Maestoso e luminoso',
    occupancy_rate: 'Alto',
    notes: 'La sala principale. Se vuoi un posto con vista sullo Stretto e silenzio, vieni qui. Attenzione: in estate l\'aria condizionata è molto forte. Vista distrae ma è spettacolare.'
  },
  {
    id: 'unirc_arch_biblio',
    nome: 'Biblioteca Area Architettura',
    edificio: 'Plesso Architettura',
    piano: 0,
    postiDisponibili: 180,
    postiTotali: 200,
    orarioApertura: '09:00',
    orarioChiusura: '18:30',
    servizi: ['Tavoli da Disegno', 'Consultazione Riviste', 'Luce Naturale'],
    latitude: 38.1230,
    longitude: 15.6610,
    indirizzo: 'Salita Melissari, Reggio Calabria',
    university: 'UniRC',
    tags: ['biblioteca', 'architettura', 'creativa', 'luminosa', 'tavoli'],
    vibe: 'Creativo e ariuso',
    notes: 'L\'ambiente è diverso dalle altre: qui si studia con grandi libri aperti e tavole. Meno rigida di Ingegneria, più creativa.'
  },
  {
    id: 'unirc_giur_econom',
    nome: 'Sala Studio Giurisprudenza ed Economia',
    edificio: 'Edificio Dipartimento DIGIEC',
    piano: 1,
    postiDisponibili: 100,
    postiTotali: 120,
    orarioApertura: '08:30',
    orarioChiusura: '18:00',
    servizi: ['Prese elettriche', 'Silenzio'],
    latitude: 38.1215,
    longitude: 15.6635,
    indirizzo: 'Cittadella Universitaria',
    university: 'UniRC',
    tags: ['sala studio', 'giurisprudenza', 'economia', 'silenziosa', 'meno affollata'],
    vibe: 'Concentrato e tranquillo',
    notes: 'Spesso meno affollata delle torri di Ingegneria. Ottima per chi deve leggere codici o testi lunghi senza distrazioni.'
  },

  // ============================================================
  // CITTADELLA - SPAZI INFORMALI & LABORATORI
  // ============================================================
  {
    id: 'unirc_atelier_arch',
    nome: 'Atelier di Progettazione (Laboratori)',
    edificio: 'Architettura (Stecche)',
    piano: 0,
    postiDisponibili: 150,
    postiTotali: 200,
    orarioApertura: '08:00',
    orarioChiusura: '20:00',
    servizi: ['Spazi Plastici', 'Lavoro di Gruppo', 'Caos Creativo'],
    latitude: 38.1235,
    longitude: 15.6615,
    indirizzo: 'Feo di Vito',
    university: 'UniRC',
    tags: ['atelier', 'architettura', 'lavoro manuale', 'gruppo', 'notte'],
    vibe: 'Frenetico e creativo',
    notes: 'Il cuore pulsante di Architettura. Non si viene qui per il silenzio, ma per lavorare insieme, costruire plastici e fare notte prima delle consegne.'
  },
  {
    id: 'unirc_coridoi_ing',
    nome: 'Spazi Studio "I Ponti" (Informale)',
    edificio: 'Collegamenti tra le Torri',
    piano: 1,
    postiDisponibili: 80,
    postiTotali: 100,
    orarioApertura: '08:00',
    orarioChiusura: '20:00',
    servizi: ['Divanetti', 'Tavolini bassi', 'Vista'],
    latitude: 38.1220,
    longitude: 15.6620,
    indirizzo: 'Cittadella Universitaria',
    university: 'UniRC',
    tags: ['informale', 'corridoi', 'vista', 'ripetizione', 'sociale'],
    vibe: 'Rilassato e panoramico',
    notes: 'Lungo i corridoi vetrati che collegano i blocchi ci sono postazioni informali. Usate per ripetere ad alta voce o mangiare qualcosa mentre si studia.'
  },
  {
    id: 'unirc_mensa_lounge',
    nome: 'Area Mensa (Fuori Orario)',
    edificio: 'Edificio Servizi / Mensa',
    piano: 0,
    postiDisponibili: 200,
    postiTotali: 300,
    orarioApertura: '09:00',
    orarioChiusura: '18:00',
    servizi: ['Tavoli Grandi', 'Rumore', 'Socialità'],
    latitude: 38.1225,
    longitude: 15.6625,
    indirizzo: 'Cittadella Universitaria',
    university: 'UniRC',
    tags: ['mensa', 'gruppo', 'rumorosa', 'coworking'],
    vibe: 'Caotico e conviviale',
    notes: 'Quando non si mangia (10:00-12:00 e 15:00-18:00), i tavoli della mensa diventano aule studio di gruppo. Caotico ma vitale.'
  },

  // ============================================================
  // REGGIO CENTRO & RESIDENZE (Le vere alternative)
  // ============================================================
  {
    id: 'rc_consiglio_regionale',
    nome: 'Biblioteca Consiglio Regionale "Mattia Preti"',
    edificio: 'Palazzo Campanella (Consiglio Regionale)',
    piano: 0,
    postiDisponibili: 100,
    postiTotali: 120,
    orarioApertura: '09:00',
    orarioChiusura: '13:30',
    servizi: ['Alta Qualità', 'Silenzio Assoluto', 'Sicurezza', 'WiFi'],
    latitude: 38.1130,
    longitude: 15.6550,
    indirizzo: 'Via Cardinale Portanova, Reggio Calabria',
    university: 'UniRC',
    tags: ['biblioteca', 'centro', 'gemma nascosta', 'silenzio', 'lusso'],
    vibe: 'Istituzionale e raffinato',
    occupancy_rate: 'Medio',
    notes: '💎 GEMMA NASCOSTA: Situata nel Palazzo del Consiglio Regionale. Ambiente istituzionale, pulitissimo, silenzioso. Bisogna lasciare un documento all\'ingresso. Perfetta per chi vive in zona Ospedale.'
  },
  {
    id: 'rc_palazzo_cultura',
    nome: 'Palazzo della Cultura "Pasquino Crupi"',
    edificio: 'Ex Brefotrofio',
    piano: 0,
    postiDisponibili: 80,
    postiTotali: 100,
    orarioApertura: '08:30',
    orarioChiusura: '18:30',
    servizi: ['Arte', 'WiFi', 'Ambiente Culturale'],
    latitude: 38.1150,
    longitude: 15.6500,
    indirizzo: 'Via Cuzzocrea 48, Reggio Calabria',
    university: 'UniRC',
    tags: ['palazzo', 'centro', 'culturale', 'alternativa', 'arte'],
    vibe: 'Colto e tranquillo',
    notes: 'Un polo culturale in centro. Molto amato dagli studenti di Scienze della Formazione e Umanistiche che non vogliono salire al Campus.'
  },
  {
    id: 'unirc_residenze',
    nome: 'Sala Studio Residenze Universitarie',
    edificio: 'Residenze Via Manfroce / Via Roma',
    piano: 0,
    postiDisponibili: 50,
    postiTotali: 60,
    orarioApertura: 'H24',
    orarioChiusura: 'H24',
    servizi: ['Aperta Notte', 'WiFi', 'Vending'],
    latitude: 38.1250,
    longitude: 15.6550,
    indirizzo: 'Via Manfroce, Reggio Calabria',
    university: 'UniRC',
    tags: ['residenziale', 'h24', 'fuori sede'],
    vibe: 'Sicuro e accogliente',
    extendedHours: true,
    notes: 'Fondamentale per i fuori sede. Se sei ospite di un amico residente, è il posto migliore per studiare la sera.'
  },
  // ============================================================
  // CITTADELLA - SPAZI STUDIO AGGIUNTIVI
  // ============================================================
  {
    id: 'unirc_saletta_dottorandi',
    nome: 'Saletta Dottorandi (Stecca 2)',
    edificio: 'Stecca 2, Cittadella Universitaria',
    piano: 0,
    postiDisponibili: 15,
    postiTotali: 20,
    orarioApertura: '08:30',
    orarioChiusura: '19:00',
    servizi: ['WiFi Eduroam', 'Prese', 'Silenzio Assoluto'],
    latitude: 38.1245,
    longitude: 15.6610,
    indirizzo: 'Cittadella Universitaria, Feo di Vito, 89124 Reggio Calabria',
    university: 'UniRC',
    tags: ['dottorato', 'silenzio', 'piccola'],
    vibe: 'Concentrato e intimo',
    occupancy_rate: 'Basso',
    notes: 'Spazio studio ufficiale nella Stecca 2. Priorità ai dottorandi, ma accessibile a tutti. Atmosfera di massima concentrazione.'
  }
];

export const getDirectionsUniRC = (room: StudyRoom): DirectionsFromLocation[] => {
  const directions: DirectionsFromLocation[] = [];

  const isCittadella = room.indirizzo.includes('Feo') || room.indirizzo.includes('Graziella') || room.indirizzo.includes('Melissari');
  const isPalazzoCampanella = room.id.includes('consiglio_regionale');
  const isCentro = room.id.includes('palazzo_cultura');

  // ============================================================
  // PER LA CITTADELLA (CAMPUS IN COLLINA)
  // ============================================================
  if (isCittadella) {
    directions.push({
      luogo: 'Piazza Garibaldi / Stazione Centrale',
      descrizione: `La Cittadella è in alto, su una collina.
1. Dal Terminal Bus di Piazza Garibaldi (davanti alla Stazione).
2. Prendi il bus **ATAM 27** o **28** (sono le circolari universitarie).
3. Scendi al capolinea dentro l'Università.`,
      mezziPubblici: ['Bus ATAM 27', 'Bus ATAM 28'],
      tempoStimato: '25 min',
      note: 'I bus spesso sono pieni la mattina alle 8:30. Cerca di anticipare. ⚠️ Non ti consigliamo di salire a piedi (3km di dislivello).'
    });

    directions.push({
      luogo: 'Porto (Dagli Aliscafi)',
      descrizione: `Se arrivi dalla Sicilia con aliscafo:
1. Esci dal porto e vai alla fermata "Museo" o "Porto".
2. Prendi il bus ATAM per salire verso l'Università.
3. Molti pendolari fanno questo tragitto ogni giorno.`,
      mezziPubblici: ['Bus ATAM'],
      tempoStimato: '35 min',
      note: 'Pattern frequente per studenti da Messina. Chiedi subito il bus "Università/Eremo".'
    });

    directions.push({
      luogo: 'Auto (A2 Sud / SS106)',
      descrizione: `Se vieni da fuori:
1. Sali verso la Cittadella via via Reggio Campi (una rampa costante).
2. Parcheggio all'interno del Campus (riempiti velocemente).`,
      mezziPubblici: ['Auto'],
      tempoStimato: '15 min dal centro',
      note: 'Attenzione al vento sulle curve (zona molto esposta allo Stretto).'
    });
  }

  // ============================================================
  // PER PALAZZO CAMPANELLA (CONSIGLIO REGIONALE)
  // ============================================================
  if (isPalazzoCampanella) {
    directions.push({
      luogo: 'Museo Nazionale / Centro Alto',
      descrizione: `Si trova nella parte alta del centro (zona Ospedali Riuniti).
1. Risali Via Cardinale Portanova o prendi un bus diretto agli Ospedali.
2. L'edificio è imponente e moderno, con vigilanza all'ingresso.
3. ⚠️ Porta un documento d'identità, altrimenti non entri!`,
      mezziPubblici: ['Bus ATAM', 'A piedi (con dislivello)'],
      tempoStimato: '15 min a piedi dal Museo',
      note: "Controlla all'ingresso - devi identificarti come studente universitario."
    });
  }

  // ============================================================
  // PER PALAZZO DELLA CULTURA (CENTRO)
  // ============================================================
  if (isCentro) {
    directions.push({
      luogo: 'Corso Garibaldi / Centro',
      descrizione: `È una traversa interna tra il Corso Garibaldi e la zona alta del centro.
1. Facilmente raggiungibile a piedi dal centro storico.
2. Ottima alternativa se hai un'ora buca e sei in centro.`,
      mezziPubblici: ['A piedi'],
      tempoStimato: '10 min dal Corso',
      note: 'Perfetto per una pausa dal Campus. Atmosfera culturale e tranquilla.'
    });
  }

  return directions;
};
