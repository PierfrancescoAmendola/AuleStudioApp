import { StudyRoom, DirectionsFromLocation } from '../../types';

export const afamVenetoRooms: StudyRoom[] = [
    // ============================================================
    // VENEZIA - ARTE E MUSICA
    // ============================================================
    {
        id: 'afam_ve_accademia_incurabili',
        nome: 'Biblioteca Accademia Belle Arti - Incurabili',
        edificio: 'Ospedale degli Incurabili',
        piano: 1,
        postiDisponibili: 40,
        postiTotali: 60,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Tavoli ampi', 'Fondi d\'Arte', 'Prese'],
        latitude: 45.4298,
        longitude: 12.3245,
        indirizzo: 'Dorsoduro 423, 30123 Venezia',
        university: 'AFAM',
        occupancy_rate: 'Alto',
        vibe: 'Artistica / Monumentale',
        notes: 'Situata alle Zattere, in un ex ospedale del XVI secolo. Silenzio assoluto e luce naturale perfetta per il disegno.',
        tags: ['Accademia', 'Venezia Centro', 'Silenzio', 'Arte'],
    },
    {
        id: 'afam_ve_accademia_servolo',
        nome: 'Laboratori Accademia - San Servolo',
        edificio: 'Isola di San Servolo',
        piano: 0,
        postiDisponibili: 20,
        postiTotali: 35,
        orarioApertura: '09:30',
        orarioChiusura: '17:30',
        servizi: ['WiFi', 'Postazioni Mac', 'Laboratori Grafica'],
        latitude: 45.4215,
        longitude: 12.3585,
        indirizzo: 'Isola di San Servolo, 30124 Venezia',
        university: 'AFAM',
        occupancy_rate: 'Basso',
        vibe: 'Isolata / Ispirazionale',
        notes: 'Sede distaccata situata sull\'isola. Uno degli spazi studio più remoti e suggestivi di Venezia.',
        tags: ['Isola', 'Grafica', 'Nascosta', 'Remota'],
    },
    {
        id: 'afam_ve_conservatorio_pisani',
        nome: 'Biblioteca Conservatorio "Benedetto Marcello"',
        edificio: 'Palazzo Pisani a Santo Stefano',
        piano: 2,
        postiDisponibili: 35,
        postiTotali: 50,
        orarioApertura: '09:00',
        orarioChiusura: '18:30',
        servizi: ['WiFi', 'Archivio Spartiti', 'Pianoforti studio', 'Vista Tetti'],
        latitude: 45.4325,
        longitude: 12.3308,
        indirizzo: 'San Marco 2810, 30124 Venezia',
        university: 'AFAM',
        occupancy_rate: 'Alto',
        vibe: 'Maestosa / Musicale',
        notes: 'Sede in uno dei palazzi più grandi della città. La biblioteca è ricca di manoscritti rari.',
        tags: ['Conservatorio', 'Musica', 'Venezia Centro', 'Storico'],
    },

    // ============================================================
    // VERONA - ARTE E MUSICA
    // ============================================================
    {
        id: 'afam_vr_accademia',
        nome: 'Biblioteca Accademia Belle Arti Verona',
        edificio: 'Palazzo Verità Montanari',
        piano: 1,
        postiDisponibili: 30,
        postiTotali: 45,
        orarioApertura: '09:00',
        orarioChiusura: '17:30',
        servizi: ['WiFi', 'Prese', 'Libri specialistici', 'Luminosa'],
        latitude: 45.4355,
        longitude: 10.9925,
        indirizzo: 'Via Carlo Montanari 5, 37122 Verona',
        university: 'AFAM',
        occupancy_rate: 'Medio',
        vibe: 'Classica / Elegante',
        notes: 'Polo centrale del design e delle belle arti a Verona. Molto tranquilla.',
        tags: ['Accademia', 'Arte', 'Verona Centro'],
    },
    {
        id: 'afam_vr_conservatorio_centrale',
        nome: 'Conservatorio "Dall\'Abaco" - Sede Centrale',
        edificio: 'Palazzo Mascarelli di S. Maria in Chiavica',
        piano: 0,
        postiDisponibili: 25,
        postiTotali: 40,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['WiFi', 'Aule insonorizzate', 'Prese'],
        latitude: 45.4435,
        longitude: 11.0005,
        indirizzo: 'Via Massalongo 2, 37121 Verona',
        university: 'AFAM',
        occupancy_rate: 'Alto',
        vibe: 'Dinamica / Musicale',
        notes: 'Il cuore della musica veronese vicino a Piazza Erbe.',
        tags: ['Musica', 'Centro', 'Conservatorio'],
    },
    {
        id: 'afam_vr_casa_boggian',
        nome: 'Conservatorio - Sede Casa Boggian',
        edificio: 'Villa Storica Boggian',
        piano: 0,
        postiDisponibili: 15,
        postiTotali: 25,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Giardino', 'Pianoforti', 'Silenzio'],
        latitude: 45.4370,
        longitude: 10.9965,
        indirizzo: 'Stradone San Fermo 28, 37121 Verona',
        university: 'AFAM',
        occupancy_rate: 'Basso',
        vibe: 'Villa Veneta / Chill',
        notes: 'Succursale immersa nel verde. È uno degli spazi studio più silenziosi in assoluto.',
        tags: ['Nascosta', 'Giardino', 'Silenzio', 'Musica'],
    },

    // ============================================================
    // ALTRI CONSERVATORI DEL VENETO
    // ============================================================
    {
        id: 'afam_pd_pollini',
        nome: 'Conservatorio "Cesare Pollini"',
        edificio: 'Sede Centrale Padova',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 60,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['WiFi', 'Biblioteca Musicale', 'Centro Storico'],
        latitude: 45.4055,
        longitude: 11.8785,
        indirizzo: 'Via Cassan 17, 35121 Padova',
        university: 'AFAM',
        occupancy_rate: 'Alto',
        vibe: 'Accademica',
        notes: 'Conservatorio statale di musica di Padova.',
        tags: ['Padova', 'Musica', 'Silenzio'],
    },
    {
        id: 'afam_vi_pedrollo',
        nome: 'Conservatorio "Arrigo Pedrollo"',
        edificio: 'Ex Convento di San Domenico',
        piano: 0,
        postiDisponibili: 35,
        postiTotali: 55,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Chiostro'],
        latitude: 45.5480,
        longitude: 11.5520,
        indirizzo: 'Contra\' San Domenico 33, 36100 Vicenza',
        university: 'AFAM',
        occupancy_rate: 'Medio',
        vibe: 'Storica',
        notes: 'Situato in un antico convento.',
        tags: ['Vicenza', 'Musica', 'Chiostro'],
    },
    {
        id: 'afam_ro_venezze',
        nome: 'Conservatorio "Francesco Venezze"',
        edificio: 'Palazzo Venezze',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 45,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi'],
        latitude: 45.0710,
        longitude: 11.7890,
        indirizzo: 'Via Venezze 6, 45100 Rovigo',
        university: 'AFAM',
        occupancy_rate: 'Medio',
        vibe: 'Accogliente',
        notes: 'Sede centrale a Rovigo.',
        tags: ['Rovigo', 'Musica'],
    },
    {
        id: 'afam_tv_steffani',
        nome: 'Conservatorio "Agostino Steffani"',
        edificio: 'Chiostro di San Giacomo',
        piano: 1,
        postiDisponibili: 35,
        postiTotali: 50,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi'],
        latitude: 45.6720,
        longitude: 11.9270,
        indirizzo: 'Via San Giacomo 3, 31033 Castelfranco Veneto (TV)',
        university: 'AFAM',
        occupancy_rate: 'Basso',
        vibe: 'Tranquilla',
        notes: 'Sede di Castelfranco Veneto.',
        tags: ['Castelfranco', 'Musica', 'Tranquillo'],
    },
    {
        id: 'afam_ro_buzzolla',
        nome: 'Conservatorio "Antonio Buzzolla"',
        edificio: 'Sede Adria',
        piano: 0,
        postiDisponibili: 20,
        postiTotali: 30,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi'],
        latitude: 45.0330,
        longitude: 12.0550,
        indirizzo: 'Viale Maddalena 2, 45011 Adria (RO)',
        university: 'AFAM',
        occupancy_rate: 'Basso',
        vibe: 'Intima',
        notes: 'Conservatorio di Adria.',
        tags: ['Adria', 'Musica'],
    }
];

export const getDirectionsAfamVeneto = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];
    const addr = room.indirizzo;

    if (addr.includes('San Servolo')) {
        directions.push({
            luogo: 'San Zaccaria (Venezia Centro)',
            descrizione: 'Prendi il vaporetto Linea 20. L\'isola è raggiungibile solo via acqua. Controlla bene gli orari di ritorno perché sono meno frequenti dopo le 18.',
            mezziPubblici: ['Vaporetto Linea 20'],
            tempoStimato: '10 min di navigazione',
        });
    } else if (addr.includes('Dorsoduro') || addr.includes('San Marco')) {
        directions.push({
            luogo: 'Piazzale Roma / Stazione',
            descrizione: 'Le sedi AFAM di Venezia centro sono raggiungibili a piedi (15-20 min) o tramite vaporetti Linea 1 o 2.',
            mezziPubblici: ['Vaporetto Linea 1, 2', 'A piedi'],
            tempoStimato: '20 min',
        });
    } else if (addr.includes('Verona')) {
        directions.push({
            luogo: 'Stazione Verona Porta Nuova',
            descrizione: 'Casa Boggian è a 15 min a piedi dalla stazione. Per Massalongo/Montanari usa i bus 11, 12 o 13.',
            mezziPubblici: ['Bus 11, 12, 13', 'A piedi'],
            tempoStimato: '15 min',
        });
    } else if (addr.includes('Padova')) {
        directions.push({
            luogo: 'Stazione Padova Centrale',
            descrizione: 'Il Pollini è a 10 min a piedi o usa il tram linea SIR1 fermata Ponti Romani.',
            mezziPubblici: ['Tram SIR1', 'A piedi'],
            tempoStimato: '10 min',
        });
    } else if (addr.includes('Vicenza')) {
        directions.push({
            luogo: 'Stazione Vicenza',
            descrizione: 'Dalla stazione attraversa il centro storico (Corso Palladio). Circa 15 min a piedi.',
            mezziPubblici: ['A piedi'],
            tempoStimato: '15 min',
        });
    } else if (addr.includes('Rovigo')) {
        directions.push({
            luogo: 'Stazione Rovigo',
            descrizione: 'Palazzo Venezze è in centro, a 10 min a piedi dalla stazione.',
            mezziPubblici: ['A piedi'],
            tempoStimato: '10 min',
        });
    } else if (addr.includes('Castelfranco')) {
        directions.push({
            luogo: 'Stazione Castelfranco Veneto',
            descrizione: 'Il conservatorio è vicinissimo alla stazione, meno di 5 min a piedi.',
            mezziPubblici: ['A piedi'],
            tempoStimato: '5 min',
        });
    } else if (addr.includes('Adria')) {
        directions.push({
            luogo: 'Stazione Adria',
            descrizione: 'In centro, facilmente raggiungibile a piedi.',
            mezziPubblici: ['A piedi'],
            tempoStimato: '10 min',
        });
    }

    return directions;
};
