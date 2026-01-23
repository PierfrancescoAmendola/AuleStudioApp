import { StudyRoom, DirectionsFromLocation } from '../../types';

export const parthenopeRooms: StudyRoom[] = [
    // --- PALAZZO PACANOWSKI (Via Generale Parisi - Monte di Dio) ---
    {
        id: 'pa_pacanowski_hall',
        nome: 'Open Space Hall Centrale',
        edificio: 'Palazzo Pacanowski',
        piano: 0,
        postiDisponibili: 150,
        postiTotali: 200,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['WiFi Eduroam', 'Prese ai tavoli', 'Divanetti', 'Mensa al piano -1'],
        latitude: 40.8322,
        longitude: 14.2465,
        indirizzo: 'Via Generale Parisi 13, Napoli',
        university: 'Parthenope',
        occupancy_rate: 'Alto',
        notes: 'Grande spazio aperto all\'ingresso, ottimo per lavori di gruppo.'
    },
    {
        id: 'pa_pacanowski_b_c',
        nome: 'Nuove Aule Studio Piani B e C',
        edificio: 'Palazzo Pacanowski',
        piano: 2, // Piani B e C
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Silenzio', 'Nuova inaugurazione', 'Prese USB'],
        latitude: 40.8322,
        longitude: 14.2465,
        indirizzo: 'Via Generale Parisi 13, Napoli',
        notes: 'Aule recentemente inaugurate, molto moderne e silenziose.'
    },

    // --- VILLA DORIA D'ANGRI (Via Petrarca - Posillipo) ---
    {
        id: 'pa_villa_posillipo',
        nome: 'Aula Posillipo',
        edificio: 'Villa Doria d\'Angri',
        piano: 1,
        postiDisponibili: 33,
        postiTotali: 33,
        orarioApertura: '09:00',
        orarioChiusura: '16:00',
        servizi: ['WiFi', 'Vista Golfo', 'Sedie con scrivania'],
        latitude: 40.8248,
        longitude: 14.2185,
        indirizzo: 'Via Francesco Petrarca 80, Napoli',
        university: 'Parthenope',
    },
    {
        id: 'pa_villa_mergellina',
        nome: 'Aula Mergellina',
        edificio: 'Villa Doria d\'Angri',
        piano: 1,
        postiDisponibili: 33,
        postiTotali: 33,
        orarioApertura: '09:00',
        orarioChiusura: '16:00',
        servizi: ['WiFi', 'Vista Panoramica'],
        latitude: 40.8248,
        longitude: 14.2185,
        indirizzo: 'Via Francesco Petrarca 80, Napoli',
    },
    {
        id: 'pa_villa_aula1',
        nome: 'Aula 1 (Grande)',
        edificio: 'Villa Doria d\'Angri',
        piano: 0,
        postiDisponibili: 96,
        postiTotali: 102,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['WiFi', 'Banchi grandi', 'Conferenze'],
        latitude: 40.8248,
        longitude: 14.2185,
        indirizzo: 'Via Francesco Petrarca 80, Napoli',
    },
    {
        id: 'pa_villa_ios',
        nome: 'Aula iOS Foundation',
        edificio: 'Villa Doria d\'Angri',
        piano: 1,
        postiDisponibili: 30,
        postiTotali: 30,
        orarioApertura: '09:00',
        orarioChiusura: '16:00',
        servizi: ['Mac disponibili', 'Tavoli tondi', 'Prese Schuko', 'Schermi'],
        latitude: 40.8248,
        longitude: 14.2185,
        indirizzo: 'Via Francesco Petrarca 80, Napoli',
        notes: 'Aula ad alta tecnologia, tavoli per lavoro collaborativo.'
    },

    // --- CENTRO DIREZIONALE (ISOLA C4) ---
    {
        id: 'pa_cdn_biblio',
        nome: 'Biblioteca Ingegneria (CDN)',
        edificio: 'Centro Direzionale Isola C4',
        piano: 2,
        postiDisponibili: 100,
        postiTotali: 200,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['WiFi Eduroam', 'Climatizzazione', 'Parcheggio vicino'],
        latitude: 40.8570,
        longitude: 14.2815,
        indirizzo: 'Centro Direzionale Isola C4, Napoli',
        university: 'Parthenope',
    },

    // --- VIA ACTON (Sede Centrale) ---
    {
        id: 'pa_acton_biblio',
        nome: 'Biblioteca Centrale Acton',
        edificio: 'Sede Centrale Acton',
        piano: 1,
        postiDisponibili: 50,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '17:00',
        servizi: ['WiFi Eduroam', 'Edificio Storico', 'Vicino al Porto'],
        latitude: 40.8375,
        longitude: 14.2540,
        indirizzo: 'Via Ammiraglio Ferdinando Acton 38, Napoli',
        university: 'Parthenope',
        tags: ['biblioteca', 'storico', 'centrale', 'rettorato'],
        vibe: 'Istituzionale e storico',
        notes: 'Sede del Rettorato. Edificio storico affacciato sul porto. Ottimo per documenti ufficiali e consultazioni.'
    },

    // --- VIA MEDINA (Scienze Motorie) ---
    {
        id: 'pa_medina_aula',
        nome: 'Aula Studio Scienze Motorie',
        edificio: 'Sede Via Medina',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 60,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['WiFi Eduroam', 'Vicino Metro Municipio'],
        latitude: 40.8425,
        longitude: 14.2528,
        indirizzo: 'Via Medina, Napoli',
        university: 'Parthenope',
        tags: ['scienze motorie', 'centro', 'municipio'],
        vibe: 'Sportivo e centrale',
        notes: 'Sede del Dipartimento di Scienze Motorie. A pochi passi da Piazza Municipio e Metro L1.'
    },

    // --- NOLA (Polo Nolano - 3 sedi) ---
    {
        id: 'pa_nola_auditorium',
        nome: 'Auditorium Nola (Aule e Spazi Studio)',
        edificio: 'Auditorium di Nola',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 120,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Parcheggio', 'Aula Magna'],
        latitude: 40.9263,
        longitude: 14.5278,
        indirizzo: 'Via Guglielmo Pepe, 80035 Nola (NA)',
        university: 'Parthenope',
        tags: ['nola', 'provincia', 'auditorium', 'parcheggio'],
        vibe: 'Moderno e accessibile',
        notes: 'Sede storica del Polo Nolano del DiSEGIM. Ottima accessibilità in auto dalla Circumvesuviana.'
    },
    {
        id: 'pa_nola_seminario',
        nome: 'Seminario Vescovile (Aule Studio)',
        edificio: 'Seminario Vescovile di Nola',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 70,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['WiFi', 'Silenzio', 'Edificio Storico'],
        latitude: 40.9275,
        longitude: 14.5295,
        indirizzo: 'Via della Repubblica 36, 80035 Nola (NA)',
        university: 'Parthenope',
        tags: ['nola', 'provincia', 'storico', 'silenzio'],
        vibe: 'Storico e silenzioso',
        notes: 'Sede universitaria in edificio storico. Ambiente silenzioso e raccolto, ideale per concentrazione.'
    },
    {
        id: 'pa_nola_savoia',
        nome: 'Cinema Savoia (Aule Didattiche)',
        edificio: 'Ex Cinema Savoia',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Spazio Aperto', 'Riconvertito'],
        latitude: 40.9258,
        longitude: 14.5302,
        indirizzo: 'Via G. Fonseca 38, 80035 Nola (NA)',
        university: 'Parthenope',
        tags: ['nola', 'provincia', 'cinema', 'moderno'],
        vibe: 'Alternativo e spazioso',
        notes: 'Ex cinema riconvertito in aule universitarie. Ambiente ampio e particolare.'
    }
];

export const getDirectionsParthenope = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];
    const isPacanowski = room.indirizzo.includes('Parisi');
    const isVillaDoria = room.indirizzo.includes('Petrarca');
    const isCDN = room.indirizzo.includes('Centro Direzionale');
    const isActon = room.indirizzo.includes('Acton');
    const isMedina = room.indirizzo.includes('Medina');
    const isNola = room.indirizzo.includes('Nola');

    if (isPacanowski) {
        directions.push({
            luogo: 'Da Via Toledo / Centro',
            descrizione: 'Usa l\'Ascensore di Chiaia (gratuito) dal Ponte di Chiaia. Ti porta su a Monte di Dio.',
            mezziPubblici: ['Ascensore', 'Piedi'],
            tempoStimato: '10 min da Toledo',
            note: 'Ingresso dell\'ateneo proprio sopra il ponte.'
        });
        directions.push({
            luogo: 'Da Garibaldi',
            descrizione: 'Metro L1 fino a Municipio, poi bus R2 o a piedi e ascensore Acton.',
            mezziPubblici: ['Metro L1'],
            tempoStimato: '30 min',
        });
    } else if (isVillaDoria) {
        directions.push({
            luogo: 'Da Mergellina (Metro L2)',
            descrizione: 'Bus 140 o C21 da Piazza del Leone a Via Petrarca.',
            mezziPubblici: ['Bus 140'],
            tempoStimato: '20 min',
            note: 'Chiedi all\'autista la fermata Villa Doria.'
        });
        directions.push({
            luogo: 'Navetta Ateneo',
            descrizione: 'Dal cancello principale all\'edificio (se attiva). Altrimenti salita a piedi.',
            mezziPubblici: ['Navetta Interna'],
            tempoStimato: '5 min',
        });
    } else if (isCDN) {
        directions.push({
            luogo: 'Da Garibaldi / Stazione',
            descrizione: 'A piedi (10 min) attraverso il sottopasso o Metro L1 fermata Centro Direzionale.',
            mezziPubblici: ['Metro L1', 'Piedi'],
            tempoStimato: '10 min',
            note: 'Isola C4.'
        });
    } else if (isActon) {
        directions.push({
            luogo: 'Da Municipio',
            descrizione: 'A piedi (5 min) verso il porto/Galleria Vittoria.',
            mezziPubblici: ['A piedi'],
            tempoStimato: '5 min',
            note: 'Edificio storico vicino al Molo Beverello.'
        });
    } else if (isMedina) {
        directions.push({
            luogo: 'Da Stazione Centrale',
            descrizione: 'Metro L1 fermata Municipio, poi 3 minuti a piedi verso Via Medina.',
            mezziPubblici: ['Metro L1'],
            tempoStimato: '20 min',
            note: 'Vicinissimo a Piazza Municipio.'
        });
        directions.push({
            luogo: 'Dal Vomero',
            descrizione: 'Funicolare Centrale fino a Piazzetta Augusteo, poi Metro L1 fermata Municipio.',
            mezziPubblici: ['Funicolare', 'Metro L1'],
            tempoStimato: '25 min',
        });
    } else if (isNola) {
        directions.push({
            luogo: 'Da Napoli Centrale (Circumvesuviana)',
            descrizione: 'Prendi la Circumvesuviana direzione Baiano, scendi a Nola (circa 40 min). Le sedi sono raggiungibili a piedi dal centro.',
            mezziPubblici: ['Circumvesuviana'],
            tempoStimato: '40-50 min',
            note: 'Auditorium, Seminario e Cinema Savoia sono tutti nel centro di Nola.'
        });
        directions.push({
            luogo: 'In Auto (A30/A16)',
            descrizione: 'Uscita Nola. Parcheggio disponibile presso Auditorium e zone limitrofe.',
            mezziPubblici: ['Auto'],
            tempoStimato: '30-40 min da Napoli',
            note: 'Comodo per chi viene dalla provincia.'
        });
    }

    return directions;
};
