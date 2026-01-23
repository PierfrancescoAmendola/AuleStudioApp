import { StudyRoom, DirectionsFromLocation } from '../../types';

export const unicalRooms: StudyRoom[] = [
  // ============================================================
  // BIBLIOTECHE DI ATENEO (Sistema Bibliotecario)
  // ============================================================
  {
    id: 'unical_bau_fagiani',
    nome: 'Biblioteca di Area Umanistica "F.E. Fagiani" (BAU)',
    edificio: 'Piazza Chiodo / Settore Umanistico',
    piano: 1, // Ingresso principale
    postiDisponibili: 400,
    postiTotali: 450,
    orarioApertura: '09:00',
    orarioChiusura: '20:00', // Ven fino alle 17:00
    servizi: ['WiFi Unical', 'Sale Lettura', 'Fondi Storici', 'Box Ricerca'],
    latitude: 39.3620,
    longitude: 16.2250,
    indirizzo: 'Piazza Chiodo, Arcavacata di Rende (CS)',
    university: 'UniCal',
    tags: ['biblioteca', 'silenziosa', 'fondi storici'],
    vibe: 'Classico e silenzioso',
    occupancy_rate: 'Alto',
    notes: 'La biblioteca più grande e frequentata dell\'area umanistica. Situata all\'inizio del Ponte Bucci (lato nord). Ambiente classico e silenzioso.'
  },
  {
    id: 'unical_bats_scientifica',
    nome: 'Biblioteca Area Tecnico-Scientifica (BATS)',
    edificio: 'Piazza Vermicelli / Ponte Bucci',
    piano: 0,
    postiDisponibili: 350,
    postiTotali: 380,
    orarioApertura: '09:00',
    orarioChiusura: '20:00', // Ven fino alle 17:00
    servizi: ['WiFi', 'Consultazione', 'Sale Gruppo', 'Prese Elettriche'],
    latitude: 39.3580,
    longitude: 16.2260,
    indirizzo: 'Piazza Vermicelli, Arcavacata di Rende',
    university: 'UniCal',
    tags: ['biblioteca', 'ingegneria', 'scienze', 'affollata'],
    vibe: 'Centrale e dinamico',
    notes: 'Il cuore pulsante per Ingegneria e Scienze. Si trova nella zona centrale del ponte. Spesso affollata, specialmente sotto sessione.'
  },
  {
    id: 'unical_tar_tarantelli',
    nome: 'Biblioteca "E. Tarantelli" (TAR) - Economia',
    edificio: 'Polo Economico-Giuridico',
    piano: 0,
    postiDisponibili: 200,
    postiTotali: 250,
    orarioApertura: '09:00',
    orarioChiusura: '20:00',
    servizi: ['Emeroteca', 'WiFi', 'Postazioni PC'],
    latitude: 39.3550,
    longitude: 16.2270,
    indirizzo: 'Via P. Bucci, Cubo 3C, Rende',
    university: 'UniCal',
    tags: ['biblioteca', 'economia', 'giurisprudenza', 'moderno'],
    vibe: 'Moderno e luminoso',
    notes: 'Riferimento per Scienze Politiche, Economia e Giurisprudenza. Ambienti moderni e ben illuminati.'
  },

  // ============================================================
  // AULE STUDIO DIPARTIMENTALI & SPAZI COMUNI
  // ============================================================
  {
    id: 'unical_aula_alcaro',
    nome: 'Aula Studio "Mario Alcaro"',
    edificio: 'Cubo 28B (Dipartimento Studi Umanistici)',
    piano: 0, // Piano terra
    postiDisponibili: 150,
    postiTotali: 200,
    orarioApertura: '08:30',
    orarioChiusura: '19:30',
    servizi: ['Banchi ampi', 'Climatizzazione'],
    latitude: 39.3630,
    longitude: 16.2240,
    indirizzo: 'Ponte Pietro Bucci, Cubo 28B, Rende',
    university: 'UniCal',
    tags: ['aula studio', 'umanistica', 'grande', 'silenziosa'],
    vibe: 'Formale e spazioso',
    notes: 'Una delle aule più grandi per l\'area umanistica. Spesso utilizzata anche per conferenze, ma aperta allo studio quando libera.'
  },
  {
    id: 'unical_polifunzionale',
    nome: 'Polifunzionale (Poli-Bistrot)',
    edificio: 'Edificio Polifunzionale',
    piano: 0,
    postiDisponibili: 200,
    postiTotali: 300,
    orarioApertura: '08:00',
    orarioChiusura: '21:00',
    servizi: ['Ristorazione', 'Socialità', 'Caos Creativo'],
    latitude: 39.3500,
    longitude: 16.2290,
    indirizzo: 'Area Polifunzionale, Campus Sud',
    university: 'UniCal',
    tags: ['social', 'ristorazione', 'gruppo', 'rumorosa'],
    vibe: 'Vivace e conviviale',
    notes: 'Non è un\'aula studio silenziosa. È il centro della vita sociale: bar, mensa e tavoli ovunque. Ideale per lavori di gruppo rumorosi o pause pranzo lunghe.'
  },
  {
    id: 'unical_medicina_study',
    nome: 'Spazi Studio Area Medicina/Farmacia',
    edificio: 'Cubo 34B / Cubo 22B',
    piano: 1,
    postiDisponibili: 80,
    postiTotali: 100,
    orarioApertura: '08:30',
    orarioChiusura: '19:00',
    servizi: ['Silenzio', 'Vicino Centro Sanitario'],
    latitude: 39.3650,
    longitude: 16.2230,
    indirizzo: 'Via P. Bucci, Cubo 34B, Rende',
    university: 'UniCal',
    tags: ['aula studio', 'medicina', 'farmacia', 'silenziosa'],
    vibe: 'Serio e concentrato',
    notes: 'Punto di riferimento per il nuovo corso di Medicina e Chirurgia. L\'area è quella del Centro Sanitario e Dipartimento Farmacia.'
  },

  // ============================================================
  // AULE RESIDENZIALI (H24 / Serali)
  // ============================================================
  {
    id: 'unical_maisonnettes',
    nome: 'Sala Studio Quartiere Maisonnettes',
    edificio: 'Residenze Maisonnettes',
    piano: 0,
    postiDisponibili: 60,
    postiTotali: 80,
    orarioApertura: 'H24', // Spesso accessibile ai residenti
    orarioChiusura: 'H24',
    servizi: ['WiFi', 'Vending Machines', 'Aperta nel weekend'],
    latitude: 39.3660,
    longitude: 16.2220,
    indirizzo: 'Quartiere Maisonnettes, Rende',
    university: 'UniCal',
    tags: ['residenziale', 'h24', 'weekend'],
    vibe: 'Informale e accessibile',
    extendedHours: true,
    notes: 'Fondamentale per chi vive nel campus. Spesso unica opzione nel weekend o la sera tardi.'
  },
  {
    id: 'unical_martensson',
    nome: 'Sala Studio Quartiere Martensson',
    edificio: 'Residenze Martensson',
    piano: 0,
    postiDisponibili: 50,
    postiTotali: 70,
    orarioApertura: 'H24', // Accesso regolato
    orarioChiusura: 'H24',
    servizi: ['WiFi', 'Zona Residenziale'],
    latitude: 39.3680,
    longitude: 16.2210,
    indirizzo: 'Quartiere Martensson, Rende',
    university: 'UniCal',
    tags: ['residenziale', 'h24'],
    vibe: 'Comodo per residenti',
    extendedHours: true,
    notes: 'Altro polmone di studio per i residenti. Verificare le modalità di accesso con il Centro Residenziale.'
  }
];

export const getDirectionsUniCal = (room: StudyRoom): DirectionsFromLocation[] => {
  const directions: DirectionsFromLocation[] = [];
  
  // Il Campus è enorme, dividiamo per punti chiave
  const isNord = room.indirizzo.includes('Chiodo') || room.id.includes('bau') || room.id.includes('maisonnettes');
  const isCentro = room.indirizzo.includes('Vermicelli') || room.id.includes('bats');
  const isSud = room.indirizzo.includes('Polifunzionale') || room.id.includes('tar');

  // HUB 1: TRENO (Stazione Castiglione Cosentino)
  // È la stazione DEL CAMPUS, diversa da Cosenza Centrale
  directions.push({
    luogo: 'Stazione Castiglione Cosentino (Hub Campus)',
    descrizione: `Opzione migliore per chi arriva in treno (da Paola/Sibari):
1. Scendi alla stazione di **Castiglione Cosentino**.
2. Nel piazzale esterno trovi le navette bus (Consorzio Autolinee) dirette all'Università.
3. Il bus percorre via Pietro Bucci e fa varie fermate lungo i Cubi.`,
    mezziPubblici: ['Navetta Bus-Treno'],
    tempoStimato: '5-10 min (Bus)',
    note: 'Attenzione: Non scendere a "Cosenza Vaglio Lise" se puoi evitarlo, Castiglione è molto più vicina al campus.'
  });

  // HUB 2: BUS EXTRAURBANI (Autostazione Cosenza)
  directions.push({
    luogo: 'Autostazione Cosenza (Vaglio Lise)',
    descrizione: `Se arrivi con bus a lunga percorrenza a Cosenza:
1. Dall'Autostazione (corsia bus urbani), prendi la **Linea 136** o **138** (Consorzio Autolinee).
2. Queste linee collegano Cosenza centro con il Campus (Capolinea Università).
3. Scendi alla fermata più vicina al tuo Cubo (chiedi all'autista "Prima Pensilina" per Ingegneria/Sud o "Maisonnettes" per Umanistica/Nord).`,
    mezziPubblici: ['Bus 136', 'Bus 138'],
    tempoStimato: '20-25 min',
    note: 'Frequenza molto alta (ogni 10-15 min) durante il giorno.'
  });

  // HUB 3: AUTO (Svincolo A2 Cosenza Nord)
  directions.push({
    luogo: 'Autostrada A2 (Uscita Cosenza Nord)',
    descrizione: `L'UniCal è vicinissima all'autostrada.
1. Esci a **Cosenza Nord / Rende**.
2. Segui le indicazioni "Università" (è a 2 km dallo svincolo).
3. Entrerai nel campus da Via Pietro Bucci.`,
    mezziPubblici: ['Auto'],
    tempoStimato: '5 min dall\'uscita',
    note: 'Parcheggiare può essere difficile nei pressi dei cubi centrali. Cerca parcheggio nelle aree Polifunzionale o zone residenziali.'
  });

  return directions;
};
