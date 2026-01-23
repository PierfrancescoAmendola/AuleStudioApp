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
        notes: 'Ex monastero. Celle monaci per studio.'
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
        notes: 'Spazi comuni vivaci Via Saffi.'
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
        notes: 'Di fronte Duomo/Palazzo Ducale.'
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
        notes: 'Capolavoro De Carlo. Vista Urbino.'
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
        notes: 'Fuori mura, verde.'
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
        notes: 'Vicino Arco Augusto.'
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
        notes: 'Innovativa ex industriale.'
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
        notes: 'Hub studenti Pesaro.'
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
