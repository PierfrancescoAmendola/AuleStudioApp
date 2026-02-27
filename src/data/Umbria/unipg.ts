import { StudyRoom, DirectionsFromLocation } from '../../types';

export const unipgRooms: StudyRoom[] = [
    // ============================================================
    // UNIPG - POLI PRINCIPALI E CENTRO STORICO
    // ============================================================
    {
        id: 'unipg_umanistica',
        nome: 'Biblioteca Umanistica',
        edificio: 'Palazzo Manzoni',
        piano: 0,
        postiDisponibili: 150,
        postiTotali: 220,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Prese elettriche', 'Sale Consultazione', 'Aree studio di gruppo'],
        latitude: 43.1147,
        longitude: 12.3871,
        indirizzo: 'Piazza F. Morlacchi 16, 06123 Perugia (PG)',
        university: 'UniPg',
        occupancy_rate: 'Alto',
        vibe: 'Storica / Dinamica',
        tags: ['Biblioteca', 'Centro Storico', 'Lettere', 'Prese'],
    },
    {
        id: 'unipg_giurisprudenza',
        nome: 'Biblioteca di Giurisprudenza e Scienze Politiche',
        edificio: 'Polo di Via Pascoli',
        piano: 1,
        postiDisponibili: 120,
        postiTotali: 180,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Prese elettriche', 'Aule Studio Gruppi (su prenota)'],
        latitude: 43.1160,
        longitude: 12.3840,
        indirizzo: 'Via A. Pascoli 33, 06123 Perugia (PG)',
        university: 'UniPg',
        occupancy_rate: 'Molto Alto',
        vibe: 'Focus / Formale',
        tags: ['Biblioteca', 'Giurisprudenza', 'Centro Storico', 'Gruppi OK'],
    },
    // ============================================================
    // UNIPG - ALTRE BIBLIOTECHE DIPARTIMENTALI (CSB)
    // ============================================================
    {
        id: 'unipg_economia',
        nome: 'Biblioteca di Economia',
        edificio: 'Polo di Economia',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 150,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Prese elettriche', 'Emeroteca', 'Aule di gruppo'],
        latitude: 43.1165,
        longitude: 12.3835,
        indirizzo: 'Via A. Pascoli 20, 06123 Perugia (PG)',
        university: 'UniPg',
        occupancy_rate: 'Alto',
        vibe: 'Business / Focus',
        tags: ['Economia', 'Centro Storico', 'Gruppi OK'],
    },
    {
        id: 'unipg_scienze_base',
        nome: 'Biblioteca di Scienze di Base',
        edificio: 'Polo di Elce (Matematica, Fisica, Biologia)',
        piano: 0,
        postiDisponibili: 120,
        postiTotali: 160,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Prese elettriche', 'Aree Ristoro'],
        latitude: 43.1188,
        longitude: 12.3820,
        indirizzo: 'Via Elce di Sotto 8, 06123 Perugia (PG)',
        university: 'UniPg',
        occupancy_rate: 'Alto',
        vibe: 'Scientifica / Campus',
        tags: ['Scienze', 'Elce', 'Mensa'],
    },
    {
        id: 'unipg_agraria',
        nome: 'Biblioteca di Scienze Agrarie e Ambientali',
        edificio: 'Complesso Monumentale di San Pietro',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 120,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['WiFi Eduroam', 'Chiostro Storico', 'Fondi Antichi'],
        latitude: 43.1022,
        longitude: 12.3955,
        indirizzo: 'Borgo XX Giugno 74, 06121 Perugia (PG)',
        university: 'UniPg',
        occupancy_rate: 'Medio',
        vibe: 'Storica / Verde',
        tags: ['Agraria', 'Storico', 'Natura', 'Silenzio'],
    },
    {
        id: 'unipg_veterinaria',
        nome: 'Biblioteca di Medicina Veterinaria',
        edificio: 'Polo di Veterinaria',
        piano: 1,
        postiDisponibili: 60,
        postiTotali: 90,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['WiFi Eduroam', 'Prese elettriche', 'Consultazione'],
        latitude: 43.0980,
        longitude: 12.3940,
        indirizzo: 'Via San Costanzo 4, 06126 Perugia (PG)',
        university: 'UniPg',
        occupancy_rate: 'Medio',
        vibe: 'Specialistica / Focus',
        tags: ['Veterinaria', 'Prese'],
    },
    // ============================================================
    // UNIPG - POLI SCIENTIFICI E MEDICI (PERIFERIA)
    // ============================================================
    {
        id: 'unipg_ingegneria',
        nome: 'Biblioteca di Ingegneria e Scienze',
        edificio: 'Polo di Ingegneria',
        piano: 0,
        postiDisponibili: 200,
        postiTotali: 300,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Mensa ADISU vicina', 'Parcheggio Ampio', 'Aule PC'],
        latitude: 43.1180,
        longitude: 12.3600,
        indirizzo: 'Via G. Duranti 89, 06125 Perugia (PG)',
        university: 'UniPg',
        occupancy_rate: 'Alto',
        vibe: 'Tech / Scientifica',
        tags: ['Ingegneria', 'Mensa', 'Parcheggio', 'Fuori Centro'],
    },
    {
        id: 'unipg_biomedica',
        nome: 'Biblioteca Biomedica Centrale',
        edificio: 'Torre Ellittica - Polo Ospedaliero',
        piano: -1,
        postiDisponibili: 180,
        postiTotali: 250,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Prese elettriche', 'Aule Esercitazioni', 'Bar interno'],
        latitude: 43.0805,
        longitude: 12.3551,
        indirizzo: 'Piazzale Lucio Severi 1, 06132 Perugia (PG)',
        university: 'UniPg',
        occupancy_rate: 'Alto',
        vibe: 'Medicina / Silenzio Assoluto',
        tags: ['Medicina', 'Ospedale', 'Silenzio'],
    },
    // ============================================================
    // UNIPG - AULE STUDIO AUTOGESTITE E ADISU
    // ============================================================
    {
        id: 'unipg_urban_center',
        nome: 'Aula Studio Urban Center',
        edificio: 'Spazio Autogestito / Comunale',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 70,
        orarioApertura: '09:00',
        orarioChiusura: '23:00',
        servizi: ['WiFi', 'Microonde', 'Autogestione', 'Aperta fino a tardi'],
        latitude: 43.1095,
        longitude: 12.3892,
        indirizzo: 'Scalette di Sant\'Ercolano, 06121 Perugia (PG)',
        university: 'UniPg',
        occupancy_rate: 'Molto Alto',
        vibe: 'Informale / Social Hub',
        extendedHours: true,
        tags: ['Autogestita', 'Social Hub', 'Orario Esteso', 'Microonde'],
    },
    {
        id: 'unipg_ceccherelli',
        nome: 'Aula Studio "Ceccherelli"',
        edificio: 'Polo di Elce / ADISU',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '20:00',
        servizi: ['WiFi Eduroam', 'Prese elettriche', 'Vicina a Mensa'],
        latitude: 43.1190,
        longitude: 12.3830,
        indirizzo: 'Via Innamorati, 06123 Perugia (PG)',
        university: 'UniPg',
        occupancy_rate: 'Alto',
        vibe: 'Dinamica / Vissuta',
        tags: ['Aula Studio', 'Elce', 'Prese'],
    },
    // ============================================================
    // UNIPG - POLI DISTACCATI (TERNI E NARNI)
    // ============================================================
    {
        id: 'unipg_terni_pentima',
        nome: 'Biblioteca Polo Scientifico Didattico',
        edificio: 'Polo di Pentima',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 120,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Prese elettriche', 'Area Ristoro', 'Parcheggio'],
        latitude: 42.5604,
        longitude: 12.6738,
        indirizzo: 'Strada di Pentima 4, 05100 Terni (TR)',
        university: 'UniPg',
        occupancy_rate: 'Medio',
        vibe: 'Industriale / Campus',
        tags: ['Terni', 'Ingegneria', 'Economia', 'Parcheggio'],
    },
    {
        id: 'unipg_narni_sacripanti',
        nome: 'Aule Studio Palazzo Sacripanti',
        edificio: 'Sede Narni (Scienze Investigazione e Sicurezza)',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 60,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi Eduroam', 'Aree Ristoro', 'Archivio'],
        latitude: 42.5198,
        longitude: 12.5140,
        indirizzo: 'Piazza Galeotto Marzio, 05032 Narni (TR)',
        university: 'UniPg',
        occupancy_rate: 'Medio',
        vibe: 'Storica / Criminologia',
        tags: ['Narni', 'Sicurezza', 'Storico'],
    }
];

export const getDirectionsUnipg = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const isTerni = room.indirizzo.includes('Terni');
    const isNarni = room.indirizzo.includes('Narni');
    // Using building info instead of purely address
    const isCentro = room.indirizzo.includes('Morlacchi') || room.indirizzo.includes('Pascoli') || room.indirizzo.includes('Sant\'Ercolano') || room.id.includes('urban_center') || room.id.includes('umanistica') || room.id.includes('economia') || room.id.includes('giurisprudenza');
    const isElce = room.indirizzo.includes('Elce') || room.indirizzo.includes('Innamorati') || room.id.includes('scienze_base') || room.id.includes('ceccherelli');
    const isBiomedica = room.indirizzo.includes('Severi') || room.id.includes('biomedica') || room.indirizzo.includes('San Costanzo') || room.id.includes('veterinaria');
    const isIngegneria = room.indirizzo.includes('Duranti') || room.id.includes('ingegneria');
    const isSanPietro = room.indirizzo.includes('XX Giugno') || room.id.includes('agraria');

    if (isTerni) {
        directions.push({
            luogo: 'Stazione Ferroviaria Terni',
            descrizione: 'Per il Polo di Pentima: utilizza gli autobus urbani (Linea 7) dal piazzale della stazione. A piedi la distanza è notevole e la strada trafficata.',
            mezziPubblici: ['Bus Urbano 7'],
            tempoStimato: '15 min in Bus'
        });
    } else if (isNarni) {
        directions.push({
            luogo: 'Stazione Ferroviaria Narni-Amelia',
            descrizione: 'La stazione è a Narni Scalo. Per raggiungere Palazzo Sacripanti in centro storico (Narni Alta), prendi l\'autobus urbano circolare o la funicolare quando attiva.',
            mezziPubblici: ['Bus Urbano', 'Funicolare'],
            tempoStimato: '15 min'
        });
    } else if (isCentro || isElce) {
        directions.push({
            luogo: 'Stazione Perugia Fontivegge',
            descrizione: 'Per le sedi del Centro Storico ed Elce: Il modo più rapido è prendere il Minimetrò dalla stazione Fontivegge fino al capolinea "Pincetto" o "Cupa", per poi attraversare il centro storico a piedi. In alternativa, Bus Linee C, G, P.',
            mezziPubblici: ['Minimetrò', 'Bus C, G, P'],
            tempoStimato: '15-20 min'
        });
    } else if (isIngegneria) {
        directions.push({
            luogo: 'Stazione Perugia Fontivegge',
            descrizione: 'Per Ingegneria (Polo Pian di Massiano): Prendi il Minimetrò fino alla fermata "Cortonese" o "Pian di Massiano" e procedi a piedi per 10 minuti, o usa la Linea F.',
            mezziPubblici: ['Minimetrò', 'Bus F'],
            tempoStimato: '15 min'
        });
    } else if (isBiomedica) {
        directions.push({
            luogo: 'Stazione Perugia Fontivegge / Centro',
            descrizione: 'Il polo Biomedico/Ospedaliero si trova a S. Andrea delle Fratte. Puoi arrivarci comodamente tramite il Minimetrò (direzione Ospedale, capolinea) oppure con navette dirette dall\'Università.',
            mezziPubblici: ['Minimetrò (Fermata Ospedale)'],
            tempoStimato: '20 min'
        });
    } else if (isSanPietro) {
        directions.push({
            luogo: 'Centro Storico Perugia',
            descrizione: 'Il Complesso di San Pietro (Agraria) è alla fine di Borgo XX Giugno. Dal centro (Corso Vannucci), scendi verso i Giardini del Frontone. Raggiungibile a piedi in circa 15-20 minuti dal Duomo.',
            mezziPubblici: ['A piedi', 'Bus G'],
            tempoStimato: '20 min a piedi'
        });
    }

    return directions;
};
