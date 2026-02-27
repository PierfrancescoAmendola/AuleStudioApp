import { StudyRoom, DirectionsFromLocation } from '../../types';

export const afamTrentinoRooms: StudyRoom[] = [
    // ============================================================
    // CONSERVATORIO BONPORTI - SEDE TRENTO
    // ============================================================
    {
        id: 'afam_tn_bonporti_main',
        nome: 'Biblioteca e Aule Studio "F. A. Bonporti"',
        edificio: 'Conservatorio Bonporti - Sede Centrale',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 50,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Spartiti e Partiture', 'Postazioni Ascolto', 'Aule insonorizzate'],
        latitude: 46.0689,
        longitude: 11.1215,
        indirizzo: 'Via S. Giovanni Bosco 4, 38122 Trento',
        university: 'AFAM',
        occupancy_rate: 'Alto',
        vibe: 'Artistica / Musicale',
        notes: 'La biblioteca è ad accesso libero per la consultazione e la ricerca musicologica.',
        tags: ['Biblioteca Musicale', 'Centro', 'Silenzio'],
    },
    // ============================================================
    // CONSERVATORIO BONPORTI - SEZIONE RIVA DEL GARDA
    // ============================================================
    {
        id: 'afam_tn_bonporti_riva',
        nome: 'Aule Studio Bonporti - Sezione Distaccata',
        edificio: 'Palazzo del Conservatorio (Riva)',
        piano: 1,
        postiDisponibili: 15,
        postiTotali: 25,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Aule Studio Strumento', 'Vista Lago'],
        latitude: 45.8845,
        longitude: 10.8436,
        indirizzo: 'Largo Guglielmo Marconi 5, 38066 Riva del Garda (TN)',
        university: 'AFAM',
        occupancy_rate: 'Medio',
        vibe: 'Panoramica / Creativa',
        notes: 'Sede distaccata sul pittoresco Lago di Garda. Spazi studio piuttosto limitati.',
        tags: ['Riva del Garda', 'Musica', 'Panoramica'],
    },
    // ============================================================
    // CONSERVATORIO MONTEVERDI - BOLZANO
    // ============================================================
    {
        id: 'afam_bz_monteverdi',
        nome: 'Biblioteca Musicale "Claudio Monteverdi"',
        edificio: 'Conservatorio Bolzano',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 60,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Archivio Storico', 'Materiali Bilingui', 'Postazioni PC'],
        latitude: 46.4981,
        longitude: 11.3524,
        indirizzo: 'Piazza Domenicani 19, 39100 Bolzano (BZ)',
        university: 'AFAM',
        occupancy_rate: 'Medio',
        vibe: 'Storica / Eccellenza',
        notes: 'Polo d\'eccellenza altoatesino. La biblioteca vanta un vasto catalogo in lingua tedesca e italiana. Rigoroso silenzio richiesto.',
        tags: ['Biblioteca', 'Centro Bolzano', 'Musica', 'Silenzio'],
    },
    // ============================================================
    // TRENTINO ART ACADEMY - TRENTO
    // ============================================================
    {
        id: 'afam_tn_art_academy',
        nome: 'Laboratori e Aule Studio TAA',
        edificio: 'Trentino Art Academy',
        piano: 0,
        postiDisponibili: 45,
        postiTotali: 60,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi Veloce', 'Postazioni Mac', 'Tavoli da disegno', 'Prese elettriche'],
        latitude: 46.0712,
        longitude: 11.1198,
        indirizzo: 'Piazzetta Silvio Pellico 6, 38122 Trento',
        university: 'AFAM',
        occupancy_rate: 'Medio',
        vibe: 'Design / Creatività',
        notes: 'Accademia di Belle Arti focalizzata sul Design e Fashion Design.',
        tags: ['Design', 'Laboratorio', 'Mac', 'Prese', 'Centro'],
    }
];

export const getDirectionsAfamTrentino = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const isTrento = room.indirizzo.includes('Trento');
    const isRiva = room.indirizzo.includes('Riva del Garda');
    const isBolzano = room.indirizzo.includes('Bolzano');

    if (isTrento) {
        directions.push({
            luogo: 'Stazione Ferroviaria Trento / Centro',
            descrizione: 'Sia il Conservatorio Bonporti che la TAA si trovano in centro storico. Dalla stazione, procedi a piedi per circa 10 minuti (direzione Piazza Duomo / Via San Martino).',
            mezziPubblici: ['A piedi'],
            tempoStimato: '10 min',
        });
    } else if (isRiva) {
        directions.push({
            luogo: 'Stazione Autolinee Riva del Garda',
            descrizione: 'In autobus da Trento/Rovereto, scendi all\'Autostazione di Riva. Da lì, il Conservatorio dista 5 minuti a piedi procedendo verso il lago.',
            mezziPubblici: ['Bus B332', 'A piedi'],
            tempoStimato: '5 min a piedi',
        });
    } else if (isBolzano) {
        directions.push({
            luogo: 'Stazione Bolzano Centrale / Bozen',
            descrizione: 'Il Conservatorio Monteverdi è vicinissimo alla Stazione. Procedi dritto per Viale Stazione, attraversa Piazza Walther e sei in Piazza Domenicani.',
            mezziPubblici: ['A piedi'],
            tempoStimato: '5 min a piedi',
        });
    }

    return directions;
};
