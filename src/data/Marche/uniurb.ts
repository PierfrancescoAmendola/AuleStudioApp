import { StudyRoom, DirectionsFromLocation } from '../../types';

export const uniurbRooms: StudyRoom[] = [
    // ============================================================
    // URBINO - CENTRO STORICO (Umanistica/Giurisprudenza/Lingue)
    // ============================================================
    {
        id: 'uniurb_san_girolamo',
        nome: 'Biblioteca Umanistica "San Girolamo"',
        edificio: 'Convento San Girolamo',
        piano: 1,
        postiDisponibili: 180,
        postiTotali: 200,
        orarioApertura: '08:30',
        orarioChiusura: '19:45',
        servizi: ['Chiostro', 'Celle', 'Silenzio'],
        latitude: 43.7255,
        longitude: 12.6385,
        indirizzo: 'Via San Girolamo 8, Urbino',
        university: 'UniUrb',
        occupancy_rate: 'Alto',
        notes: 'Ex monastero. Celle monaci per studio.',
        tags: ['Biblioteca', '🔇 Silenzio'],
    },
    {
        id: 'uniurb_volponi',
        nome: 'Polo Didattico "Paolo Volponi"',
        edificio: 'Palazzo Volponi',
        piano: 0,
        postiDisponibili: 250,
        postiTotali: 300,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Moderno', 'Prese', 'Socialità'],
        latitude: 43.7262,
        longitude: 12.6358,
        indirizzo: 'Via Saffi 15, Urbino',
        university: 'UniUrb',
        notes: 'Spazi comuni vivaci Via Saffi.',
        tags: ['Aula Studio', 'Campus'],
    },
    {
        id: 'uniurb_bonaventura',
        nome: 'Biblioteca Economico-Giuridica',
        edificio: 'Palazzo Bonaventura',
        piano: 1,
        postiDisponibili: 100,
        postiTotali: 120,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Affreschi', 'Codici'],
        latitude: 43.7245,
        longitude: 12.6365,
        indirizzo: 'Via Matteotti 1, Urbino',
        university: 'UniUrb',
        notes: 'Di fronte Duomo/Palazzo Ducale.',
        tags: ['Biblioteca'],
    },
    // ============================================================
    // URBINO - COLLEGI DE CARLO (Residenziale)
    // ============================================================
    {
        id: 'uniurb_collegi',
        nome: 'Sale Studio Collegi De Carlo',
        edificio: 'Complesso Collegi',
        piano: 0,
        postiDisponibili: 200,
        postiTotali: 250,
        orarioApertura: 'H24',
        orarioChiusura: 'H24',
        servizi: ['Vista Panoramica', 'Mensa', 'Brutalista'],
        latitude: 43.7305,
        longitude: 12.6250,
        indirizzo: 'Via dei Cappuccini, Urbino',
        university: 'UniUrb',
        notes: 'Capolavoro De Carlo. Vista Urbino.',
        tags: ['Aula Studio', '☕ Ristoro'],
    },
    // ============================================================
    // URBINO - POLO SCIENTIFICO (Crocicchia/Sogesta)
    // ============================================================
    {
        id: 'uniurb_scientifico',
        nome: 'Biblioteca Area Scientifica',
        edificio: 'Campus Scientifico',
        piano: 0,
        postiDisponibili: 120,
        postiTotali: 150,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Lab', 'Parcheggio'],
        latitude: 43.7150,
        longitude: 12.6500,
        indirizzo: 'Località Crocicchia, Urbino',
        university: 'UniUrb',
        notes: 'Fuori mura, verde.',
        tags: ['Biblioteca', 'Campus', '🅿️ Parcheggio'],
    },
    // ============================================================
    // FANO - POLO BIOTECNOLOGIE
    // ============================================================
    {
        id: 'uniurb_fano',
        nome: 'Sede Biotecnologie Fano',
        edificio: 'Palazzo San Michele',
        piano: 1,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Centro Storico'],
        latitude: 43.8400,
        longitude: 13.0150,
        indirizzo: 'Via Arco d\'Augusto 2, Fano',
        university: 'UniUrb',
        notes: 'Vicino Arco Augusto.',
        tags: ['Aula Studio', 'Centro'],
    },
    {
        id: 'fano_memo',
        nome: 'MeMo Mediateca Montanari',
        edificio: 'Ex Scuola',
        piano: 0,
        postiDisponibili: 250,
        postiTotali: 300,
        orarioApertura: 'Variabile',
        orarioChiusura: '20:00', // Defaulting based on typical urban library hours
        servizi: ['Moderna', 'Piante'],
        latitude: 43.8420,
        longitude: 13.0180,
        indirizzo: 'Piazza Amiani, Fano',
        university: 'UniUrb',
        notes: 'Innovativa ex industriale.',
        tags: ['Aula Studio'],
    },
    // ============================================================
    // PESARO - POLO PSICOLOGIA
    // ============================================================
    {
        id: 'pesaro_sangiovanni',
        nome: 'Biblioteca San Giovanni',
        edificio: 'Parco Miralfiore',
        piano: 0,
        postiDisponibili: 300,
        postiTotali: 350,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['Giardino', 'Caffè'],
        latitude: 43.9080,
        longitude: 12.9050,
        indirizzo: 'Via Passeri 102, Pesaro',
        university: 'UniUrb',
        notes: 'Hub studenti Pesaro.',
        tags: ['Biblioteca'],
    },
    // ============================================================
    // URBINO - NUOVE AULE STUDIO E ERDIS
    // ============================================================
    {
        id: 'uniurb_erdis_piero',
        nome: 'Aula Studio ERDIS "Piero della Francesca"',
        edificio: 'Sede ERDIS Via Comandino',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 60,
        orarioApertura: '11:30',
        orarioChiusura: '22:00',
        servizi: ['WiFi', 'Area Ristoro', 'Microonde', '60 posti'],
        latitude: 43.7225,
        longitude: 12.6360,
        indirizzo: 'Via Comandino 53, 61029 Urbino (PU)',
        university: 'UniUrb',
        occupancy_rate: 'Medio',
        notes: 'Inaugurata marzo 2025. Lun-Gio 11:30-22:00, Ven 11:30-16:00. Area ristoro con microonde. Serve l\'area fuori dal centro storico.',
        tags: ['ERDIS', 'Serale', 'Nuova'],
    },
    {
        id: 'uniurb_vittorio_veneto',
        nome: 'Aula Studio Via Vittorio Veneto',
        edificio: 'Sede UniUrb',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 45,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Prese'],
        latitude: 43.7235,
        longitude: 12.6368,
        indirizzo: 'Via Vittorio Veneto 60, 61029 Urbino (PU)',
        university: 'UniUrb',
        occupancy_rate: 'Medio',
        notes: 'Aula studio d\'ateneo con WiFi. Orario Lun-Ven 8:30-19:00.',
        tags: ['Aula Studio', 'WiFi'],
    },
    {
        id: 'uniurb_petriccio',
        nome: 'Aula Studio Polo Petriccio',
        edificio: 'Polo didattico Petriccio',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 44,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Prese', '44 postazioni'],
        latitude: 43.7270,
        longitude: 12.6380,
        indirizzo: 'Loc. Petriccio, 61029 Urbino (PU)',
        university: 'UniUrb',
        occupancy_rate: 'Medio',
        notes: 'Recente inaugurazione. 44 postazioni con WiFi nel polo didattico di Petriccio.',
        tags: ['Aula Studio', 'Nuova', 'WiFi'],
    },
];

export const getDirectionsUniUrb = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const isCentroUrbino = room.indirizzo.includes('Urbino') && !room.indirizzo.includes('Cappuccini') && !room.indirizzo.includes('Crocicchia');
    const isCollegi = room.indirizzo.includes('Cappuccini');
    const isScientifico = room.indirizzo.includes('Crocicchia');
    const isFano = room.indirizzo.includes('Fano');
    const isPesaro = room.indirizzo.includes('Pesaro');

    // CENTRO URBINO
    if (isCentroUrbino) {
        directions.push({
            luogo: 'Borgo Mercatale (Terminal Bus)',
            descrizione: `Per centro Urbino (San Girolamo, Volponi, Bonaventura):
1. **Bus Adriabus da Pesaro/Fano**: Arrivo Borgo Mercatale
2. **Salita**: Ascensori/rampa elicoidale → Piazza Repubblica (10 min)
3. **A piedi centro**: Tutto compatto 5-10 min
**NOTE**: No treno Urbino. Ultima corsa bus sera cruciale.`,
            mezziPubblici: ['Bus Adriabus', 'Ascensori/Rampa'],
            tempoStimato: '45 min bus Pesaro + 10 min salita',
            note: 'Città Rinascimento UNESCO.'
        });
    }
    // COLLEGI DE CARLO
    else if (isCollegi) {
        directions.push({
            luogo: 'Piazza Repubblica',
            descrizione: `Per Collegi (Via Cappuccini):
1. **Navetta urbana**: Linea Rossa/Blu centro-collegi
2. **A piedi**: 25 min discesa/salita
**NOTE**: Vista mozzafiato tramonto.`,
            mezziPubblici: ['Navetta urbana'],
            tempoStimato: '10 min navetta',
            note: 'Brutalista De Carlo.'
        });
    }
    // SCIENTIFICO CROCICCHIA
    else if (isScientifico) {
        directions.push({
            luogo: 'Borgo Mercatale',
            descrizione: `Per Crocicchia:
1. **Bus dedicato** o auto (Linea 3/navette)
2. **Parcheggio** ampio
**NOTE**: Verde isolato.`,
            mezziPubblici: ['Bus/navetta'],
            tempoStimato: '15 min',
            note: 'Fuori mura.'
        });
    }
    // FANO
    else if (isFano) {
        directions.push({
            luogo: 'Stazione Fano',
            descrizione: `Per polo Fano:
1. **A piedi stazione**: 10 min centro/Arco Augusto
**NOTE**: Compatto.`,
            mezziPubblici: ['A piedi'],
            tempoStimato: '10 min',
            note: 'Mare vicino.'
        });
    }
    // PESARO
    else if (isPesaro) {
        directions.push({
            luogo: 'Stazione Pesaro',
            descrizione: `Per San Giovanni (Via Passeri):
1. **Bus**: Direzione Miralfiore
**NOTE**: Parco verde.`,
            mezziPubblici: ['Bus'],
            tempoStimato: '15 min',
            note: 'Civica top.'
        });
    }

    // Info generali
    directions.push({
        luogo: 'Info Generali UniUrb',
        descrizione: `**Poli**: Centro storico principale, Collegi residenziale, Crocicchia scientifico, distaccati Fano/Pesaro.
**Bus**: Adriabus principale.
Urbino "città ideale" Rinascimento, no treno.`,
        mezziPubblici: ['Adriabus', 'Navette'],
        tempoStimato: 'Max 30 min',
        note: 'Ateneo umanistico forte.'
    });

    return directions;
};
