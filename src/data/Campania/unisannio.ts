import { StudyRoom, DirectionsFromLocation } from '../../types';

export const unisannioRooms: StudyRoom[] = [
    // ============================================================
    // CENTRO STORICO - COMPLESSO SANT'AGOSTINO / DE SIMONE
    // ============================================================
    {
        id: 'sannio_biblio_centrale',
        nome: 'Biblioteca Centralizzata di Ateneo',
        edificio: 'Palazzo De Simone',
        piano: 1,
        postiDisponibili: 60,
        postiTotali: 100,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['WiFi Eduroam', 'Edificio Storico', 'PC Ricerca', 'Prestito Libri', 'Sala Periodici'],
        latitude: 41.1295,
        longitude: 14.7800,
        indirizzo: 'Piazza Arechi II, Benevento',
        university: 'UniSannio',
        tags: ['biblioteca', 'storico', 'centrale', 'DEMM'],
        vibe: 'Accogliente e storico',
        occupancy_rate: 'Medio',
        notes: 'Biblioteca Centrale di Ateneo in un prestigioso palazzo storico. Ospita anche il Dipartimento DEMM (Economia, Giurisprudenza). Ricca collezione di volumi giuridici ed economici.'
    },
    {
        id: 'sannio_demm_aula_studio',
        nome: 'Aula Studio DEMM',
        edificio: 'Palazzo De Simone',
        piano: 2,
        postiDisponibili: 35,
        postiTotali: 50,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi Eduroam', 'Prese Elettriche', 'Silenzio'],
        latitude: 41.1296,
        longitude: 14.7801,
        indirizzo: 'Piazza Arechi II, Benevento',
        university: 'UniSannio',
        tags: ['aula studio', 'economia', 'giurisprudenza', 'DEMM'],
        vibe: 'Tranquillo e concentrato',
        occupancy_rate: 'Alto',
        notes: 'Aula studio dedicata agli studenti del Dipartimento DEMM. Spazi silenziosi per lo studio individuale.'
    },
    {
        id: 'sannio_santagostino',
        nome: 'Aula Studio Complesso Sant\'Agostino',
        edificio: 'Complesso di Sant\'Agostino',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 60,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['WiFi Eduroam', 'Edificio Storico', 'Chiostro'],
        latitude: 41.1290,
        longitude: 14.7795,
        indirizzo: 'Via De Nicastro, Benevento',
        university: 'UniSannio',
        tags: ['storico', 'chiostro', 'centro'],
        vibe: 'Suggestivo e silenzioso',
        occupancy_rate: 'Medio',
        notes: 'Ex convento agostiniano del XIII secolo. Splendido chiostro medievale. Atmosfera unica per studiare.'
    },

    // ============================================================
    // COMPLESSO SAN VITTORINO
    // ============================================================
    {
        id: 'sannio_san_vittorino',
        nome: 'Sala Lettura San Vittorino',
        edificio: 'Monastero di San Vittorino',
        piano: 0,
        postiDisponibili: 25,
        postiTotali: 45,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['WiFi', 'Luogo d\'Arte', 'Silenzio Assoluto', 'Giardino Interno'],
        latitude: 41.1310,
        longitude: 14.7775,
        indirizzo: 'Via Tenente Pellegrini, Benevento',
        university: 'UniSannio',
        tags: ['monastero', 'arte', 'silenzio', 'storico'],
        vibe: 'Contemplativo e artistico',
        occupancy_rate: 'Basso',
        notes: 'Nel cuore del centro storico, in un ex monastero benedettino. Ambiente perfetto per concentrazione massima. Spazio per eventi culturali.'
    },

    // ============================================================
    // PIAZZA ROMA - COMPLESSO GIANNONE / EX INPS
    // ============================================================
    {
        id: 'sannio_giannone',
        nome: 'Aula Studio Complesso Giannone',
        edificio: 'Convitto Nazionale Pietro Giannone',
        piano: 1,
        postiDisponibili: 50,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Aula Magna', 'Distributori', 'Storico'],
        latitude: 41.1270,
        longitude: 14.7820,
        indirizzo: 'Piazza Roma, Benevento',
        university: 'UniSannio',
        tags: ['convitto', 'centrale', 'storico'],
        vibe: 'Istituzionale e classico',
        occupancy_rate: 'Alto',
        notes: 'Edificio monumentale in Piazza Roma. Ospita anche aule didattiche e l\'Aula Magna dell\'Ateneo.'
    },
    {
        id: 'sannio_ex_inps',
        nome: 'Aula Studio Palazzo ex INPS',
        edificio: 'Palazzo ex INPS',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 45,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['WiFi Eduroam', 'Moderno', 'Accessibile'],
        latitude: 41.1268,
        longitude: 14.7818,
        indirizzo: 'Piazza Roma, Benevento',
        university: 'UniSannio',
        tags: ['moderno', 'centrale', 'accessibile'],
        vibe: 'Funzionale',
        occupancy_rate: 'Medio',
        notes: 'Struttura moderna ristrutturata, adiacente al Complesso Giannone. Completamente accessibile.'
    },

    // ============================================================
    // CORSO GARIBALDI - PALAZZO BOSCO LUCARELLI (DING)
    // ============================================================
    {
        id: 'sannio_bosco_lucarelli',
        nome: 'Aula Studio Palazzo Bosco Lucarelli',
        edificio: 'Palazzo Bosco Lucarelli',
        piano: 0,
        postiDisponibili: 45,
        postiTotali: 70,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Prese Elettriche', 'Laboratori vicini', 'Storico'],
        latitude: 41.1285,
        longitude: 14.7835,
        indirizzo: 'Corso Garibaldi, Benevento',
        university: 'UniSannio',
        tags: ['ingegneria', 'DING', 'storico', 'corso garibaldi'],
        vibe: 'Dinamico e tecnico',
        occupancy_rate: 'Alto',
        notes: 'Sede del Dipartimento di Ingegneria (DING). Palazzo storico con laboratori all\'avanguardia. Sul corso principale del centro.'
    },

    // ============================================================
    // VIA DEI MULINI - CUBO (POLO SCIENTIFICO)
    // ============================================================
    {
        id: 'sannio_cubo',
        nome: 'Aula Studio "Il Cubo"',
        edificio: 'Polo Scientifico Il Cubo',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 150,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi Eduroam', 'Prese Elettriche', 'Moderno', 'Distributori', 'Aria Condizionata', 'Parcheggio'],
        latitude: 41.1280,
        longitude: 14.7835,
        indirizzo: 'Via dei Mulini, Benevento',
        university: 'UniSannio',
        tags: ['moderno', 'scienze', 'tecnologia', 'grande', 'cubo'],
        vibe: 'Moderno e dinamico',
        occupancy_rate: 'Molto Alto',
        notes: 'Polo principale per Scienze e Tecnologie. Edificio moderno, molto frequentato. Orario esteso. Ideale per gruppi e studio individuale.'
    },
    {
        id: 'sannio_cubo_lab',
        nome: 'Spazio Studio presso Laboratori Cubo',
        edificio: 'Polo Scientifico Il Cubo',
        piano: 1,
        postiDisponibili: 20,
        postiTotali: 35,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Vicino Laboratori', 'Silenzio'],
        latitude: 41.1282,
        longitude: 14.7837,
        indirizzo: 'Via dei Mulini, Benevento',
        university: 'UniSannio',
        tags: ['laboratori', 'scienze', 'ricerca'],
        vibe: 'Tecnico e concentrato',
        occupancy_rate: 'Medio',
        notes: 'Area studio riservata vicino ai laboratori scientifici. Ideale per studenti di Biologia, Geologia, Biotecnologie.'
    },

    // ============================================================
    // VIA DELLE PUGLIE - POLO SEA / DEMM
    // ============================================================
    {
        id: 'sannio_sea_biblio',
        nome: 'Biblioteca SEA (Economia/Giurisprudenza)',
        edificio: 'Polo Didattico Via delle Puglie',
        piano: -1,
        postiDisponibili: 100,
        postiTotali: 180,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Ampio Parcheggio', 'Aria Condizionata', 'PC Consultazione', 'Grande'],
        latitude: 41.1255,
        longitude: 14.7880,
        indirizzo: 'Via delle Puglie 82, Benevento',
        university: 'UniSannio',
        tags: ['biblioteca', 'economia', 'giurisprudenza', 'grande', 'SEA'],
        vibe: 'Spazioso e organizzato',
        occupancy_rate: 'Alto',
        notes: 'Grande biblioteca al piano seminterrato, recentemente rinnovata. Collezioni giuridiche ed economiche. Parcheggio gratuito ampio.'
    },
    {
        id: 'sannio_sea_aule',
        nome: 'Aule Studio SEA (Piani Alti)',
        edificio: 'Polo Didattico Via delle Puglie',
        piano: 2,
        postiDisponibili: 40,
        postiTotali: 60,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Vista Panoramica', 'Silenzio', 'Luminoso'],
        latitude: 41.1256,
        longitude: 14.7881,
        indirizzo: 'Via delle Puglie 82, Benevento',
        university: 'UniSannio',
        tags: ['aula studio', 'vista', 'silenzio', 'SEA'],
        vibe: 'Panoramico e tranquillo',
        occupancy_rate: 'Medio',
        notes: 'Aule studio ai piani alti con bella vista sulla città. Ambiente silenzioso ideale per sessioni d\'esame.'
    },

    // ============================================================
    // VIA DE SANCTIS - POLO DELLA RICERCA (DST)
    // ============================================================
    {
        id: 'sannio_dst_ricerca',
        nome: 'Aula Studio Polo della Ricerca',
        edificio: 'Dipartimento Scienze e Tecnologie (DST)',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 50,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi Eduroam', 'Laboratori', 'Ricerca', 'Moderno'],
        latitude: 41.1290,
        longitude: 14.7855,
        indirizzo: 'Via De Sanctis, Benevento',
        university: 'UniSannio',
        tags: ['ricerca', 'DST', 'scienze', 'laboratori'],
        vibe: 'Accademico e innovativo',
        occupancy_rate: 'Medio',
        notes: 'Polo della Ricerca del DST. Vicino a laboratori di ricerca scientifica. Ambiente stimolante per tesisti e dottorandi.'
    },

    // ============================================================
    // ALTRE SEDI
    // ============================================================
    {
        id: 'sannio_ex_poste',
        nome: 'Spazio Studio Palazzo ex Poste',
        edificio: 'Palazzo ex Poste',
        piano: 0,
        postiDisponibili: 25,
        postiTotali: 40,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['WiFi', 'Centrale', 'Ristrutturato'],
        latitude: 41.1275,
        longitude: 14.7810,
        indirizzo: 'Via Traiano, Benevento',
        university: 'UniSannio',
        tags: ['centrale', 'moderno', 'ristrutturato'],
        vibe: 'Funzionale e comodo',
        occupancy_rate: 'Basso',
        notes: 'Edificio ristrutturato, sede amministrativa con spazi studio disponibili. Posizione centrale.'
    },
    {
        id: 'sannio_san_domenico',
        nome: 'Aula Studio Palazzo San Domenico',
        edificio: 'Palazzo San Domenico',
        piano: 0,
        postiDisponibili: 35,
        postiTotali: 55,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['WiFi Eduroam', 'Storico', 'Rettorato vicino'],
        latitude: 41.1288,
        longitude: 14.7790,
        indirizzo: 'Piazza Guerrazzi, Benevento',
        university: 'UniSannio',
        tags: ['rettorato', 'storico', 'centrale', 'san domenico'],
        vibe: 'Istituzionale',
        occupancy_rate: 'Medio',
        notes: 'Vicino al Rettorato. Ex chiesa domenicana. Ambiente solenne e silenzioso. Sede legale dell\'Ateneo: Piazza Guerrazzi 82100.'
    }
];

export const getDirectionsUnisannio = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    // Identifica la zona in base all'ID
    const isCubo = room.id.includes('cubo');
    const isSEA = room.id.includes('sea');
    const isDST = room.id.includes('dst');
    const isCentroStorico = room.id.includes('santagostino') || room.id.includes('san_vittorino') || room.id.includes('biblio_centrale') || room.id.includes('demm') || room.id.includes('san_domenico');
    const isPiazzaRoma = room.id.includes('giannone') || room.id.includes('inps');
    const isBoscoLucarelli = room.id.includes('bosco');

    if (isCubo || isDST) {
        // Via dei Mulini / Via De Sanctis - zona periferica
        directions.push({
            luogo: 'Dalla Stazione Centrale FS',
            descrizione: 'Bus urbano linea 1 o 2. Fermata "Via dei Mulini" o "Polo Scientifico".',
            mezziPubblici: ['Bus 1', 'Bus 2'],
            tempoStimato: '15 min',
            note: 'Biglietti in edicola o tabacchi. Corse ogni 15-20 min.'
        });
        directions.push({
            luogo: 'A Piedi dalla Stazione',
            descrizione: 'Via Giustiniani, poi Via dei Mulini. Percorso pianeggiante.',
            mezziPubblici: ['A piedi'],
            tempoStimato: '20 min',
            note: 'Percorso più semplice rispetto al centro storico.'
        });
        directions.push({
            luogo: 'In Auto',
            descrizione: 'Seguire indicazioni per "Università - Polo Scientifico". Ampio parcheggio gratuito.',
            mezziPubblici: ['Auto'],
            tempoStimato: '-',
            note: 'Parcheggio molto capiente e gratuito.'
        });
    } else if (isSEA) {
        // Via delle Puglie
        directions.push({
            luogo: 'Dalla Stazione Centrale FS',
            descrizione: 'Bus urbano linea 3 direzione "Via delle Puglie". Fermata davanti al polo.',
            mezziPubblici: ['Bus 3'],
            tempoStimato: '12 min',
            note: 'Collegamento diretto dalla stazione.'
        });
        directions.push({
            luogo: 'A Piedi dalla Stazione',
            descrizione: 'Via delle Puglie in direzione sud. Percorso lungo ma pianeggiante.',
            mezziPubblici: ['A piedi'],
            tempoStimato: '25 min',
            note: 'Consigliato il bus.'
        });
        directions.push({
            luogo: 'In Auto',
            descrizione: 'Uscita Benevento, direzione "Via delle Puglie". Ampio parcheggio gratuito al polo.',
            mezziPubblici: ['Auto'],
            tempoStimato: '-',
            note: 'Parcheggio SEA molto grande e gratuito.'
        });
    } else if (isCentroStorico || isPiazzaRoma || isBoscoLucarelli) {
        // Centro storico e Piazza Roma
        directions.push({
            luogo: 'Dalla Stazione Centrale FS',
            descrizione: 'Bus urbano linea 1, 2 o 3. Fermata "Piazza Risorgimento" o "Corso Garibaldi".',
            mezziPubblici: ['Bus 1', 'Bus 2', 'Bus 3'],
            tempoStimato: '10 min',
            note: 'Tutte le linee passano per il centro. Biglietti in edicola.'
        });
        directions.push({
            luogo: 'A Piedi dalla Stazione',
            descrizione: 'Risalire Viale Principe di Napoli fino a Piazza Roma, poi Corso Garibaldi. Centro storico in salita.',
            mezziPubblici: ['A piedi'],
            tempoStimato: '20-25 min',
            note: 'Percorso in salita. Benevento alta è il centro storico.'
        });
        directions.push({
            luogo: 'In Auto',
            descrizione: 'Parcheggi in Piazza Risorgimento (Terminal Bus) o zona stadio. Il centro storico è ZTL.',
            mezziPubblici: ['Auto'],
            tempoStimato: '-',
            note: 'ATTENZIONE: Centro Storico = Zona a Traffico Limitato!'
        });
        directions.push({
            luogo: 'Da Napoli (EAV)',
            descrizione: 'Treno regionale EAV (ex Ferrovia Beneventana) da Napoli Porta Nolana. Arrivo stazione Appia.',
            mezziPubblici: ['Treno EAV'],
            tempoStimato: '1h 30min',
            note: 'Alternativa economica ma più lenta del bus SITA.'
        });
    } else {
        // Default - indicazioni generiche
        directions.push({
            luogo: 'Dalla Stazione Centrale FS',
            descrizione: 'Bus urbano linea 1, 2 o 3. Chiedere fermata più vicina alla destinazione.',
            mezziPubblici: ['Bus Urbano'],
            tempoStimato: '10-15 min',
            note: 'Biglietti in edicola/tabacchi. UniSannio è sparsa per la città.'
        });
        directions.push({
            luogo: 'A Piedi dalla Stazione',
            descrizione: 'Consulta Google Maps per il percorso ottimale.',
            mezziPubblici: ['A piedi'],
            tempoStimato: '15-25 min',
            note: 'Benevento è compatta ma collinare.'
        });
    }

    // Indicazioni comuni
    directions.push({
        luogo: 'Da Napoli (Bus SITA/AIR)',
        descrizione: 'Bus SITA SUD o AIR Campania da Terminal Napoli. Arrivo Piazza Risorgimento (Terminal Benevento).',
        mezziPubblici: ['SITA', 'AIR'],
        tempoStimato: '1h 15min',
        note: 'Collegamento diretto e frequente. Biglietti online o a bordo.'
    });

    directions.push({
        luogo: 'In Auto (Autostrada)',
        descrizione: 'A16 Napoli-Bari, uscita "Benevento". Seguire indicazioni per "Università" o "Centro".',
        mezziPubblici: ['Auto'],
        tempoStimato: '-',
        note: 'Da Napoli circa 1h. Da Bari circa 2h.'
    });

    return directions;
};
