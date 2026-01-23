import { StudyRoom, DirectionsFromLocation } from '../../types';

export const orientaleRooms: StudyRoom[] = [
    // --- PALAZZO GIUSSO (Largo San Giovanni Maggiore) ---
    {
        id: 'or_giusso_s4',
        nome: 'Aula Studio Autogestita (S4)',
        edificio: 'Palazzo Giusso',
        piano: -1, // Seminterrato
        postiDisponibili: 15,
        postiTotali: 15,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Spazio Autogestito', 'Silenzio', 'Prese elettriche'],
        latitude: 40.8458,
        longitude: 14.2560,
        indirizzo: 'Largo San Giovanni Maggiore 30, Napoli',
        university: 'L\'Orientale',
        occupancy_rate: 'Alto',
        notes: 'Aula piccola e tranquilla nel seminterrato, spesso usata per studio intenso.'
    },
    {
        id: 'or_giusso_r1',
        nome: 'Sala Studio Piano Rialzato (R1)',
        edificio: 'Palazzo Giusso',
        piano: 0,
        postiDisponibili: 25,
        postiTotali: 25,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Tavoli con prese'],
        latitude: 40.8458,
        longitude: 14.2560,
        indirizzo: 'Largo San Giovanni Maggiore 30, Napoli',
    },
    {
        id: 'or_giusso_1_1',
        nome: 'Aula Studio Primo Piano (1.1)',
        edificio: 'Palazzo Giusso',
        piano: 1,
        postiDisponibili: 20,
        postiTotali: 45, // Alcuni posti sono solo seduta senza tavolo
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi Eduroam', 'Luminosa'],
        latitude: 40.8458,
        longitude: 14.2560,
        indirizzo: 'Largo San Giovanni Maggiore 30, Napoli',
    },
    {
        id: 'or_giusso_2_1',
        nome: 'Sala Lettura Secondo Piano (2.1)',
        edificio: 'Palazzo Giusso',
        piano: 2,
        postiDisponibili: 40,
        postiTotali: 55,
        orarioApertura: '09:00',
        orarioChiusura: '18:30',
        servizi: ['WiFi Eduroam', 'Silenzio Assoluto', 'Aria Condizionata'],
        latitude: 40.8458,
        longitude: 14.2560,
        indirizzo: 'Largo San Giovanni Maggiore 30, Napoli',
    },
    {
        id: 'or_giusso_4_2',
        nome: 'Aula Studio Quarto Piano (4.2)',
        edificio: 'Palazzo Giusso',
        piano: 4,
        postiDisponibili: 36,
        postiTotali: 36,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi Eduroam', 'Vista tetti'],
        latitude: 40.8458,
        longitude: 14.2560,
        indirizzo: 'Largo San Giovanni Maggiore 30, Napoli',
    },

    // --- PALAZZO DEL MEDITERRANEO (Via Nuova Marina) ---
    {
        id: 'or_med_3_3',
        nome: 'Aula Studio 3.3',
        edificio: 'Palazzo del Mediterraneo',
        piano: 3,
        postiDisponibili: 25,
        postiTotali: 25,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['WiFi Eduroam', 'Prese elettriche', 'Aria Condizionata'],
        latitude: 40.8435,
        longitude: 14.2588,
        indirizzo: 'Via Nuova Marina 59, Napoli',
        university: 'L\'Orientale',
        occupancy_rate: 'Medio',
    },
    {
        id: 'or_med_self_access',
        nome: 'Sala Self-Access (4.8)',
        edificio: 'Palazzo del Mediterraneo',
        piano: 4,
        postiDisponibili: 45,
        postiTotali: 45,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['PC disponibili', 'Laboratorio Linguistico', 'WiFi'],
        latitude: 40.8435,
        longitude: 14.2588,
        indirizzo: 'Via Nuova Marina 59, Napoli',
        notes: 'Laboratorio dedicato allo studio autonomo delle lingue.'
    },
    {
        id: 'or_med_lab_5_4',
        nome: 'Laboratorio Multimediale 5.4',
        edificio: 'Palazzo del Mediterraneo',
        piano: 5,
        postiDisponibili: 36,
        postiTotali: 36,
        orarioApertura: '09:00',
        orarioChiusura: '16:00',
        servizi: ['Postazioni PC', 'Audio cuffie'],
        latitude: 40.8435,
        longitude: 14.2588,
        indirizzo: 'Via Nuova Marina 59, Napoli',
    },

    // --- PALAZZO SANTA MARIA PORTA COELI (Via Duomo) ---
    {
        id: 'or_porta_coeli_216',
        nome: 'Aula Studio 216',
        edificio: 'Palazzo S.M. Porta Coeli',
        piano: 2,
        postiDisponibili: 48,
        postiTotali: 48,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi Eduroam', 'Molto Silenziosa', 'Prese ai banchi'],
        latitude: 40.8520,
        longitude: 14.2595,
        indirizzo: 'Via Duomo 219, Napoli',
        university: 'L\'Orientale',
    },

    // --- PALAZZO CORIGLIANO (Piazza San Domenico) ---
    {
        id: 'or_corigliano_biblio',
        nome: 'Biblioteca di Corigliano',
        edificio: 'Palazzo Corigliano',
        piano: 4,
        postiDisponibili: 90,
        postiTotali: 120,
        orarioApertura: '09:00',
        orarioChiusura: '18:45',
        servizi: ['Luogo Storico', 'Silenzio Assoluto', 'Consultazione Rara'],
        latitude: 40.8493,
        longitude: 14.2542,
        indirizzo: 'Piazza San Domenico Maggiore 12, Napoli',
        notes: 'Una delle biblioteche più belle, specializzata in studi asiatici.'
    }
];

export const getDirectionsOrientale = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    directions.push({
        luogo: 'Metro L1 (Università)',
        descrizione: 'La fermata più vicina per Palazzo Giusso e Mediterraneo. 5 min a piedi.',
        mezziPubblici: ['Metro L1'],
        tempoStimato: '5 min',
        note: 'Uscita verso Corso Umberto.'
    });

    directions.push({
        luogo: 'Metro L1 (Dante)',
        descrizione: 'La fermata ideale per Palazzo Corigliano (P.zza San Domenico).',
        mezziPubblici: ['Metro L1'],
        tempoStimato: '5-10 min',
        note: 'Scendi per Port\'Alba.'
    });

    directions.push({
        luogo: 'Da Stazione Garibaldi',
        descrizione: 'Prendi bus R2 fino a Corso Umberto o Metro Linea 1.',
        mezziPubblici: ['Bus R2', 'Metro L1'],
        tempoStimato: '15 min',
    });

    return directions;
};
