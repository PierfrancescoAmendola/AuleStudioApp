import { StudyRoom, DirectionsFromLocation } from '../../types';

export const afamCalabriaRooms: StudyRoom[] = [
  // ============================================================
  // COSENZA - ECOSISTEMA CONSERVATORIO (Centro Storico)
  // ============================================================
  {
    id: 'cons_cs_portapiana',
    nome: 'Biblioteca del Conservatorio (Portapiana)',
    edificio: 'Ex Convento Santa Maria delle Grazie',
    piano: 1,
    postiDisponibili: 35,
    postiTotali: 50,
    orarioApertura: '09:00',
    orarioChiusura: '17:00',
    servizi: ['Partiture', 'Silenzio Assoluto', 'Chiostro'],
    latitude: 39.2880,
    longitude: 16.2580,
    indirizzo: 'Via Portapiana, Cosenza Vecchia',
    university: 'AFAM',
    tags: ['conservatorio', 'storico', 'convento', 'silenzio', 'mistico'],
    vibe: 'Mistico e raccolto',
    occupancy_rate: 'Basso',
    notes: 'La sede centrale. Atmosfera monastica perfetta per concentrarsi. Fredda d\'inverno.'
  },
  {
    id: 'cs_biblio_nazionale',
    nome: 'Biblioteca Nazionale di Cosenza',
    edificio: 'Ex Seminario Vescovile',
    piano: 0,
    postiDisponibili: 200,
    postiTotali: 250,
    orarioApertura: '08:30',
    orarioChiusura: '19:00',
    servizi: ['WiFi', 'Sala Monumentale', 'Pianoforte (su richiesta)'],
    latitude: 39.2850,
    longitude: 16.2560,
    indirizzo: 'Piazza Parrasio, Cosenza Vecchia',
    university: 'AFAM',
    tags: ['biblioteca', 'monumentale', 'prima scelta', 'teoria musicale'],
    vibe: 'Imponente e silenzioso',
    notes: 'Essenziale per gli studenti del Conservatorio. Si trova a 5 minuti a piedi dalla sede. È il luogo principale di studio teorico.'
  },
  {
    id: 'cs_casa_musica',
    nome: 'Casa della Musica (Aule Studio)',
    edificio: 'Plesso Piazza Amendola',
    piano: 0,
    postiDisponibili: 60,
    postiTotali: 80,
    orarioApertura: '08:30',
    orarioChiusura: '19:30',
    servizi: ['Sale Prova', 'Auditorium', 'Socialità'],
    latitude: 39.2950,
    longitude: 16.2550,
    indirizzo: 'Piazza Amendola, Cosenza',
    university: 'AFAM',
    tags: ['conservatorio', 'accessibile', 'sale prova', 'gruppo'],
    vibe: 'Accessibile e sociale',
    notes: 'Sede distaccata più moderna. Qui c\'è più movimento e possibilità di studiare in gruppo.'
  },
  {
    id: 'cs_biblio_civica',
    nome: 'Biblioteca Civica di Cosenza',
    edificio: 'Palazzo dell\'Accademia Cosentina',
    piano: 1,
    postiDisponibili: 80,
    postiTotali: 100,
    orarioApertura: '09:00',
    orarioChiusura: '13:30',
    servizi: ['Storia', 'Vista sul Centro Storico'],
    latitude: 39.2860,
    longitude: 16.2570,
    indirizzo: 'Piazza XV Marzo, Cosenza',
    university: 'AFAM',
    tags: ['civica', 'storica', 'vista', 'orari ridotti'],
    vibe: 'Storico e prestigioso',
    notes: 'In Piazza XV Marzo (la piazza più bella). Orari ridotti, ma ambiente di altissimo pregio per studenti d\'arte.'
  },

  // ============================================================
  // REGGIO CALABRIA - ACCADEMIA & CONSERVATORIO
  // ============================================================
  {
    id: 'abarc_aule_pittura',
    nome: 'Laboratori di Pittura e Decorazione',
    edificio: 'Accademia (Sede Centrale)',
    piano: 0,
    postiDisponibili: 120,
    postiTotali: 150,
    orarioApertura: '08:00',
    orarioChiusura: '19:00',
    servizi: ['Cavalletti', 'Lavandini', 'Luce Naturale'],
    latitude: 38.1180,
    longitude: 15.6520,
    indirizzo: 'Via XXV Luglio 10, Reggio Calabria',
    university: 'AFAM',
    tags: ['accademia', 'arte', 'laboratori', 'pittura', 'creativo'],
    vibe: 'Caos creativo',
    notes: 'Caos creativo. Non ci sono sedie comode, ma sgabelli sporchi di colore. È qui che vive lo studente dell\'Accademia.'
  },
  {
    id: 'cons_rc_biblio',
    nome: 'Biblioteca Conservatorio Cilea',
    edificio: 'Conservatorio (Via Spanò)',
    piano: 1,
    postiDisponibili: 40,
    postiTotali: 50,
    orarioApertura: '09:00',
    orarioChiusura: '16:30',
    servizi: ['Consultazione', 'Ascolto'],
    latitude: 38.1100,
    longitude: 15.6450,
    indirizzo: 'Via Spanò Bolani 1, Reggio Calabria',
    university: 'AFAM',
    tags: ['conservatorio', 'biblioteca', 'spartiti', 'piccola'],
    vibe: 'Serio e concentrato',
    notes: 'Piccola e specifica per la musica. Se piena, gli studenti vanno alla Biblioteca Comunale.'
  },
  {
    id: 'rc_consiglio_regionale',
    nome: 'Biblioteca Consiglio Regionale "Campanella"',
    edificio: 'Palazzo Campanella',
    piano: 0,
    postiDisponibili: 150,
    postiTotali: 200,
    orarioApertura: '09:00',
    orarioChiusura: '13:30',
    servizi: ['Top Quality', 'Silenzio', 'Aria Condizionata'],
    latitude: 38.1130,
    longitude: 15.6550,
    indirizzo: 'Via Cardinale Portanova, Reggio Calabria',
    university: 'AFAM',
    tags: ['gemma', 'istituzionale', 'silenzio', 'tesi', 'storia arte', 'documento'],
    vibe: 'Impeccabile e istituzionale',
    notes: 'La "Gemma". A 10 minuti dall\'Accademia. Pulita, moderna, perfetta per chi scrive la tesi o studia Storia dell\'Arte.'
  },
  {
    id: 'rc_palazzo_cultura',
    nome: 'Palazzo della Cultura (Spazi Studio)',
    edificio: 'Ex Brefotrofio',
    piano: 0,
    postiDisponibili: 90,
    postiTotali: 100,
    orarioApertura: '08:30',
    orarioChiusura: '18:30',
    servizi: ['WiFi Libero', 'Arte', 'Bar vicino'],
    latitude: 38.1150,
    longitude: 15.6500,
    indirizzo: 'Via Cuzzocrea, Reggio Calabria',
    university: 'AFAM',
    tags: ['cultura', 'wifi', 'bar', 'pausa pranzo'],
    vibe: 'Culturale e rilassato',
    notes: 'Vicinissimo all\'Accademia. Molto usato per pause pranzo culturali e studio leggero.'
  },

  // ============================================================
  // CATANZARO - ACCADEMIA
  // ============================================================
  {
    id: 'abacz_biblio',
    nome: 'Biblioteca Accademia Belle Arti',
    edificio: 'Sede Via Tripoli',
    piano: 1,
    postiDisponibili: 40,
    postiTotali: 50,
    orarioApertura: '09:00',
    orarioChiusura: '16:00',
    servizi: ['Cataloghi', 'WiFi'],
    latitude: 38.9050,
    longitude: 16.5900,
    indirizzo: 'Via Tripoli, Catanzaro Centro',
    university: 'AFAM',
    tags: ['accademia', 'arte', 'centro', 'riferimento'],
    vibe: 'Intimo e cittadino',
    notes: 'Il punto di riferimento interno.'
  },
  {
    id: 'cz_biblio_denobili',
    nome: 'Biblioteca "De Nobili" (Villa Margherita)',
    edificio: 'Villa Comunale',
    piano: 0,
    postiDisponibili: 100,
    postiTotali: 120,
    orarioApertura: '08:30',
    orarioChiusura: '18:30',
    servizi: ['Parco', 'Silenzio', 'Prese Elettriche'],
    latitude: 38.9080,
    longitude: 16.5920,
    indirizzo: 'Villa Margherita, Catanzaro',
    university: 'AFAM',
    tags: ['parco', 'silenzio', 'relax', 'vicino accademia'],
    vibe: 'Verde e silenzioso',
    notes: 'A 5 minuti a piedi dall\'Accademia. Gli studenti vengono qui per rilassarsi nel parco e studiare nel silenzio della villa.'
  },
  {
    id: 'cz_biblio_provinciale',
    nome: 'Biblioteca Provinciale "Bruno Chimirri"',
    edificio: 'Villa Trieste',
    piano: 0,
    postiDisponibili: 60,
    postiTotali: 80,
    orarioApertura: '09:00',
    orarioChiusura: '13:00',
    servizi: ['Emeroteca', 'Sala Lettura'],
    latitude: 38.9060,
    longitude: 16.5910,
    indirizzo: 'Via Pascali, Catanzaro',
    university: 'AFAM',
    tags: ['provinciale', 'orari ridotti', 'centro'],
    vibe: 'Classico e centrale',
    notes: 'Altra opzione in centro, molto vicina alla sede dell\'Accademia.'
  },

  // ============================================================
  // VIBO VALENTIA - CONSERVATORIO & ACC. FIDIA
  // ============================================================
  {
    id: 'vv_sbv_santachiara',
    nome: 'Sistema Bibliotecario Vibonese (SBV)',
    edificio: 'Palazzo Santa Chiara',
    piano: 0,
    postiDisponibili: 200,
    postiTotali: 250,
    orarioApertura: '09:00',
    orarioChiusura: '19:00',
    servizi: ['Eventi Culturali', 'WiFi', 'Makerspace'],
    latitude: 38.6750,
    longitude: 16.1050,
    indirizzo: 'Via Ruggero il Normanno, Vibo Valentia',
    university: 'AFAM',
    tags: ['hub', 'eccellenza', 'sociale', 'eventi', 'makerspace'],
    vibe: 'Moderno e vivace',
    occupancy_rate: 'Alto',
    notes: 'Il vero HUB di Vibo. Molto più grande della biblioteca del Conservatorio. Qui si incontrano studenti di musica e liceali. Organizzano festival e mostre.'
  },
  {
    id: 'cons_vv_aule',
    nome: 'Aule Studio Conservatorio',
    edificio: 'Sede Viale Affaccio',
    piano: 0,
    postiDisponibili: 50,
    postiTotali: 70,
    orarioApertura: '08:30',
    orarioChiusura: '19:30',
    servizi: ['Parcheggio', 'Aule Strumento'],
    latitude: 38.6650,
    longitude: 16.1150,
    indirizzo: 'Viale Affaccio, Vibo Valentia',
    university: 'AFAM',
    tags: ['conservatorio', 'parcheggio', 'moderno', 'decentrato'],
    vibe: 'Funzionale e comodo',
    notes: 'Sede moderna, funzionale ma decentrata. Comoda per chi ha l\'auto.'
  },
  {
    id: 'fidia_laboratori',
    nome: 'Laboratori Accademia Fidia',
    edificio: 'Sede Stefanaconi',
    piano: 0,
    postiDisponibili: 50,
    postiTotali: 60,
    orarioApertura: '09:00',
    orarioChiusura: '18:00',
    servizi: ['Scultura', 'Pittura', 'Isolamento'],
    latitude: 38.6550,
    longitude: 16.1400,
    indirizzo: 'Stefanaconi (VV)',
    university: 'AFAM',
    tags: ['accademia', 'privato', 'natura', 'isolato', 'auto', 'carpooling'],
    vibe: 'Ritiro artistico',
    notes: 'Immersi nel verde. Luogo di ritiro artistico. Auto fortemente consigliata / Carpooling con altri studenti.'
  },

  // ============================================================
  // NOCERA TERINESE - TCHAIKOVSKY
  // ============================================================
  {
    id: 'tchaikovsky_chiostro',
    nome: 'Chiostro e Aule del Convento',
    edificio: 'Convento Padri Cappuccini',
    piano: 0,
    postiDisponibili: 60,
    postiTotali: 80,
    orarioApertura: '09:00',
    orarioChiusura: '19:00',
    servizi: ['Acustica', 'Pianoforti', 'Atmosfera'],
    latitude: 39.0400,
    longitude: 16.1600,
    indirizzo: 'Nocera Terinese (CZ)',
    university: 'AFAM',
    tags: ['conservatorio', 'convento', 'storico', 'acustica', 'auto', 'carpooling'],
    vibe: 'Suggestivo e storico',
    notes: 'Il Convento stesso è un\'aula studio diffusa. Gli studenti suonano e studiano sotto i portici o nelle celle adattate. Auto fortemente consigliata / Carpooling con altri studenti.'
  },
  
  // ============================================================
  // SPAZI TRASVERSALI (ADSU)
  // ============================================================
  {
    id: 'adsu_rc_residenza',
    nome: 'Aula Studio Residenza Universitaria (RC)',
    edificio: 'Residenza Via Manfroce',
    piano: 0,
    postiDisponibili: 40,
    postiTotali: 50,
    orarioApertura: 'H24',
    orarioChiusura: 'H24',
    servizi: ['WiFi', 'Notte'],
    latitude: 38.1250,
    longitude: 15.6550,
    indirizzo: 'Via Manfroce, Reggio Calabria',
    university: 'AFAM',
    tags: ['residenza', 'h24', 'fuorisede', 'notte'],
    vibe: 'Notturno e residenziale',
    extendedHours: true,
    notes: 'Accessibile agli studenti AFAM fuori sede che risiedono nelle strutture universitarie.'
  }
];

export const getDirectionsAFAM_Calabria = (room: StudyRoom): DirectionsFromLocation[] => {
  const directions: DirectionsFromLocation[] = [];
  
  const isCosenzaOld = room.indirizzo.includes('Cosenza Vecchia') || room.id.includes('cons_cs') || room.id.includes('cs_');
  const isReggio = room.indirizzo.includes('Reggio') || room.id.includes('abarc') || room.id.includes('cons_rc') || room.id.includes('rc_');
  const isCatanzaro = room.indirizzo.includes('Catanzaro') || room.id.includes('abacz') || room.id.includes('cz_');
  const isVibo = room.indirizzo.includes('Vibo') || room.id.includes('vv_') || room.id.includes('cons_vv');
  const isFidia = room.id.includes('fidia');
  const isNocera = room.indirizzo.includes('Nocera') || room.id.includes('tchaikovsky');

  // ============================================================
  // COSENZA (CITTÀ VECCHIA)
  // ============================================================
  if (isCosenzaOld) {
    directions.push({
      luogo: 'Piazza dei Bruzi (Centro)',
      descrizione: `Le biblioteche sono nel Centro Storico (parte alta).
1. **Navetta:** Prendi la navetta Amaco da Piazza dei Bruzi che sale verso Portapiana/Castello.
2. **Piedi:** Da Corso Telesio, sali verso il Duomo e poi verso la Biblioteca Nazionale (salita ripida).`,
      mezziPubblici: ['Navetta Amaco'],
      tempoStimato: '15 min',
      note: 'Lontano da Rende (UniCal). Non sbagliare bus!'
    });
    directions.push({
      luogo: 'Stazione FS Cosenza',
      descrizione: `Dalla stazione ferroviaria:
1. Prendi bus Amaco verso Centro/Piazza dei Bruzi.
2. Da lì, navetta per Centro Storico o salita a piedi.`,
      mezziPubblici: ['Bus Amaco'],
      tempoStimato: '25 min',
      note: 'La Biblioteca Nazionale (Ex Seminario) è la salvezza per lo studio teorico. Prima scelta!'
    });
  }

  // ============================================================
  // REGGIO CALABRIA
  // ============================================================
  if (isReggio) {
    directions.push({
      luogo: 'Museo Nazionale / Corso Garibaldi',
      descrizione: `Sei in centro.
1. Per **Palazzo Campanella** (Consiglio Reg.): Risali Via Cardinale Portanova (zona Ospedali).
2. Per **Accademia/Conservatorio**: Zona Castello Aragonese/Via XXV Luglio.
3. Tutto è raggiungibile a piedi o con bus urbani brevi.`,
      mezziPubblici: ['A piedi', 'Bus ATAM'],
      tempoStimato: '10-15 min',
      note: 'Palazzo Campanella richiede documento all\'ingresso. È la "Gemma" per tesi e Storia dell\'Arte!'
    });
    directions.push({
      luogo: 'Stazione Centrale / Lido',
      descrizione: `Dalla stazione:
1. Sali verso il Castello Aragonese (15-20 min a piedi, leggera salita).
2. L'Accademia e il Conservatorio sono in quella zona.`,
      mezziPubblici: ['A piedi'],
      tempoStimato: '15-20 min',
      note: 'Vuoi sporcarti le mani? Vai ai laboratori. Vuoi studiare in silenzio? Vai a Palazzo Campanella.'
    });
  }

  // ============================================================
  // CATANZARO
  // ============================================================
  if (isCatanzaro) {
    directions.push({
      luogo: 'Campus UMG (Germaneto)',
      descrizione: `L'Accademia è in Centro Città ("Sopra"), non a Germaneto!
1. Prendi il bus AMC in salita verso Centro.
2. L'Accademia è in Via Tripoli, vicino a Piazza Matteotti.`,
      mezziPubblici: ['Bus AMC', 'Funicolare + A piedi'],
      tempoStimato: '25 min dal Campus',
      note: 'Ambiente molto diverso dal Campus UMG. Qui respiri città vecchia.'
    });
    directions.push({
      luogo: 'Piazza Matteotti (Centro)',
      descrizione: `Sei già in centro.
1. La Biblioteca De Nobili è a Villa Margherita (5 min a piedi).
2. La Biblioteca Provinciale è in Via Pascali (vicinissima all'Accademia).`,
      mezziPubblici: ['A piedi'],
      tempoStimato: '5 min',
      note: 'Villa Margherita: parco + silenzio. Perfetta per relax e studio.'
    });
  }

  // ============================================================
  // VIBO VALENTIA
  // ============================================================
  if (isVibo && !isFidia) {
    directions.push({
      luogo: 'Piazza Municipio (Vibo Centro)',
      descrizione: `1. **Palazzo Santa Chiara (SBV):** È in pieno centro storico, vicino al Municipio. IL POSTO MIGLIORE!
2. **Conservatorio:** È su Viale Affaccio (zona nuova), serve l'auto o una camminata di 20 min dal centro.`,
      mezziPubblici: ['A piedi', 'Auto'],
      tempoStimato: 'Variabile',
      note: 'Il Sistema Bibliotecario (Santa Chiara) è il MIRACOLO di Vibo. Moderno, attivo, pieno di giovani. Vai lì!'
    });
  }

  // ============================================================
  // STEFANACONI (ACCADEMIA FIDIA)
  // ============================================================
  if (isFidia) {
    directions.push({
      luogo: 'Vibo Valentia',
      descrizione: `Stefanaconi è un paese attaccato a Vibo.
1. Raggiungibile in auto in 5 minuti da Vibo centro.
2. In bus locale da Vibo (verifica orari Ferrovie della Calabria, RARI).`,
      mezziPubblici: ['Auto (Necessaria)', 'Carpooling'],
      tempoStimato: '10 min',
      note: '⚠️ Auto fortemente consigliata / Carpooling con altri studenti. Mezzi pubblici praticamente inesistenti.'
    });
  }

  // ============================================================
  // NOCERA TERINESE
  // ============================================================
  if (isNocera) {
    directions.push({
      luogo: 'Uscita A2 Falerna',
      descrizione: `Devi salire al paese vecchio.
1. Dall'autostrada, segui le indicazioni per Nocera Terinese (PAESE, in collina).
2. Il Convento è nella parte alta. Parcheggio nella piazza principale.
⚠️ NON andare a Nocera Marina (sul mare)!`,
      mezziPubblici: ['Auto (Necessaria)', 'Carpooling'],
      tempoStimato: '15 min dall\'uscita',
      note: '⚠️ Auto fortemente consigliata / Carpooling con altri studenti. Borgo antico, strade strette.'
    });
  }

  return directions;
};
