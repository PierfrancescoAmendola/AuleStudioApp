import { StudyRoom, DirectionsFromLocation } from '../../types';

export const iuavRooms: StudyRoom[] = [
    // ============================================================
    // TOLENTINI - SEDE CENTRALE E BIBLIOTECA
    // ============================================================
    {
        id: 'iuav_tolentini_biblioteca',
        nome: 'Biblioteca Iuav - Sede Centrale',
        edificio: 'Convento dei Tolentini',
        piano: 1,
        postiDisponibili: 250,
        postiTotali: 403,
        orarioApertura: '09:00',
        orarioChiusura: '21:45',
        servizi: ['WiFi Eduroam', 'Prese', 'Archivio Progetti', 'Consultazione Tesi', 'Accesso Disabili'],
        latitude: 45.4372,
        longitude: 12.3215,
        indirizzo: 'Santa Croce 191, 30135 Venezia',
        university: 'Iuav',
        occupancy_rate: 'Molto Alto',
        extendedHours: true,
        vibe: 'Accademica / Monumentale',
        notes: 'Situata nell\'ex convento dei Tolentini con ingresso di Carlo Scarpa. È il cuore della ricerca architettonica veneziana.',
        tags: ['Biblioteca', 'Architettura', 'Top Space', 'Vicino Stazione'],
    },
    {
        id: 'iuav_tolentini_periodici',
        nome: 'Sala Periodici Iuav',
        edificio: 'Tolentini - 2° Piano',
        piano: 2,
        postiDisponibili: 50,
        postiTotali: 80,
        orarioApertura: '09:00',
        orarioChiusura: '21:45',
        servizi: ['WiFi Eduroam', 'Riviste Internazionali', 'Prese'],
        latitude: 45.4373,
        longitude: 12.3216,
        indirizzo: 'Santa Croce 191, 30135 Venezia',
        university: 'Iuav',
        occupancy_rate: 'Alto',
        vibe: 'Focus / Professionale',
        notes: 'Spazio dedicato alla consultazione delle riviste di settore e allo studio silenzioso.',
        tags: ['Silenzio', 'Riviste', 'Centro'],
    },
    // ============================================================
    // MAGAZZINI LIGABUE - DESIGN E ARTI
    // ============================================================
    {
        id: 'iuav_ligabue_mag6',
        nome: 'Aule Studio Magazzino 6',
        edificio: 'Magazzini Ligabue',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 100,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['WiFi Eduroam', 'Laboratori Modelli', 'Area Snack', 'Prese'],
        latitude: 45.4312,
        longitude: 12.3165,
        indirizzo: 'Dorsoduro 1827, 30123 Venezia',
        university: 'Iuav',
        occupancy_rate: 'Alto',
        vibe: 'Creativa / Laboratorio',
        notes: 'Ex magazzino portuale recuperato. Atmosfera industriale, ideale per chi lavora su progetti e modelli.',
        tags: ['Design', 'Laboratorio', 'Moderno', 'Zattere'],
    },
    {
        id: 'iuav_ligabue_mag7',
        nome: 'Spazi Studio Magazzino 7',
        edificio: 'Magazzini Ligabue',
        piano: 1,
        postiDisponibili: 40,
        postiTotali: 70,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['WiFi Eduroam', 'Postazioni Mac', 'Plotter', 'Prese'],
        latitude: 45.4310,
        longitude: 12.3168,
        indirizzo: 'Dorsoduro 1827, 30123 Venezia',
        university: 'Iuav',
        occupancy_rate: 'Medio',
        vibe: 'Tech / Design',
        notes: 'Sede dei corsi di Design e Arti Visive. Presenza di strumentazione multimediale avanzata.',
        tags: ['Arti Visive', 'Multimedia', 'Tech'],
    },
    // ============================================================
    // ALTRE SEDI STORICHE (CA' TRON E BADOER)
    // ============================================================
    {
        id: 'iuav_ca_tron',
        nome: 'Biblioteca Ca\' Tron',
        edificio: 'Palazzo Ca\' Tron',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 45,
        orarioApertura: '09:00',
        orarioChiusura: '19:30',
        servizi: ['WiFi', 'Pianificazione Urbana', 'Vista Canal Grande'],
        latitude: 45.4415,
        longitude: 12.3305,
        indirizzo: 'Santa Croce 1957, 30135 Venezia',
        university: 'Iuav',
        occupancy_rate: 'Basso',
        vibe: 'Storica / Prestigiosa',
        notes: 'Sede dedicata all\'Urbanistica. Un palazzo meraviglioso affacciato sul Canal Grande.',
        tags: ['Urbanistica', 'Vista Canal Grande', 'Silenzio'],
    },
    {
        id: 'iuav_badoer',
        nome: 'Aula Studio Palazzo Badoer',
        edificio: 'Palazzo Badoer',
        piano: 2,
        postiDisponibili: 20,
        postiTotali: 30,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Sala Dottorandi', 'Ambiente Storico'],
        latitude: 45.4365,
        longitude: 12.3255,
        indirizzo: 'San Polo 2468, 30125 Venezia',
        university: 'Iuav',
        occupancy_rate: 'Basso',
        vibe: 'Ricerca / Tranquilla',
        notes: 'Sede della Scuola di Dottorato. Atmosfera molto tranquilla, ideale per tesi e ricerche.',
        tags: ['Dottorato', 'Storia', 'Nascosta'],
    }
];

export const getDirectionsIuav = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];
    const id = room.id.toLowerCase();

    if (id.includes('tolentini')) {
        directions.push({
            luogo: 'Piazzale Roma',
            descrizione: 'Esci da Piazzale Roma e attraversa il Ponte dei Tolentini. L\'ingresso monumentale è proprio di fronte. Meno di 2 minuti a piedi.',
            mezziPubblici: ['A piedi', 'Vaporetto (qualsiasi per P.le Roma)'],
            tempoStimato: '2 min',
        });
    } else if (id.includes('ligabue')) {
        directions.push({
            luogo: 'Piazzale Roma / Stazione',
            descrizione: 'Prendi il vaporetto Linea 2 (direzione Giudecca) and scendi a San Basilio. I Magazzini Ligabue sono a 3 minuti a piedi lungo la fondamenta.',
            mezziPubblici: ['Vaporetto Linea 2 (San Basilio)'],
            tempoStimato: '15 min',
        });
    } else if (id.includes('ca_tron')) {
        directions.push({
            luogo: 'Stazione S. Lucia',
            descrizione: 'Prendi la Linea 1 e scendi a San Stae. Procedi verso Campo San Giacomo dell\'Orio. Ca\' Tron si trova vicino alla chiesa di San Stae.',
            mezziPubblici: ['Vaporetto Linea 1 (San Stae)'],
            tempoStimato: '10 min',
        });
    } else if (id.includes('badoer')) {
        directions.push({
            luogo: 'Piazzale Roma / Stazione',
            descrizione: 'Raggiungibile in 10-15 min a piedi (San Polo). In vaporetto scendi a San Tomà o Riva de Biasio.',
            mezziPubblici: ['A piedi', 'Vaporetto 1, 2 (Fermata San Tomà)'],
            tempoStimato: '12 min',
        });
    }

    return directions;
};
