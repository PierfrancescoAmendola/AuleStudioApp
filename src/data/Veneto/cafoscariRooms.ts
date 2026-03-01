import { StudyRoom, DirectionsFromLocation } from '../../types';

export const cafoscariRooms: StudyRoom[] = [
    // ============================================================
    // VENEZIA CENTRO - POLI UMANISTICI E LINGUISTICI
    // ============================================================
    {
        id: 'cafoscari_cfz',
        nome: 'CFZ - Cultural Flow Zone',
        edificio: 'Zattere al Pontelungo',
        piano: 0,
        postiDisponibili: 150,
        postiTotali: 220,
        orarioApertura: '09:00',
        orarioChiusura: '22:00',
        servizi: ['WiFi Eduroam', 'Prese', 'Area Relax', 'Punto Ristoro', 'Accesso Disabili'],
        latitude: 45.4295,
        longitude: 12.3218,
        indirizzo: 'Fondamenta Zattere, Dorsoduro 1392, 30123 Venezia',
        university: 'Ca Foscari',
        occupancy_rate: 'Molto Alto',
        extendedHours: true,
        vibe: 'Vibrazione Internazionale / Chill',
        notes: 'Lo spazio studio più amato dagli studenti. Include la biblioteca di Area Linguistica (BALI).',
        tags: ['Zattere', 'Social Hub', 'Orario Esteso', 'Top Space'],
    },
    {
        id: 'cafoscari_baum',
        nome: 'BAUM - Biblioteca di Area Umanistica',
        edificio: 'Palazzo Malcanton Marcorà',
        piano: 1,
        postiDisponibili: 200,
        postiTotali: 340,
        orarioApertura: '08:30',
        orarioChiusura: '23:45',
        servizi: ['WiFi Eduroam', 'Prese', 'Cooperative Learning Room', 'Consultazione'],
        latitude: 45.4354,
        longitude: 12.3235,
        indirizzo: 'Dorsoduro 3484/D, Calle Contarini, 30123 Venezia',
        university: 'Ca Foscari',
        occupancy_rate: 'Alto',
        extendedHours: true,
        vibe: 'Accademica / Focus',
        notes: 'Apertura fino a mezzanotte nei giorni feriali. Weekend 09:00 - 21:00.',
        tags: ['Umanistica', 'H24-ish', 'Silenzio', 'Centro'],
    },
    {
        id: 'cafoscari_bec',
        nome: 'BEC - Biblioteca di Area Economica',
        edificio: 'Campus San Giobbe',
        piano: 0,
        postiDisponibili: 180,
        postiTotali: 240,
        orarioApertura: '09:00',
        orarioChiusura: '22:00',
        servizi: ['WiFi Eduroam', 'Prese', 'Mensa vicina', 'Giardino'],
        latitude: 45.4452,
        longitude: 12.3155,
        indirizzo: 'Cannaregio 810, Fondamenta San Giobbe, 30121 Venezia',
        university: 'Ca Foscari',
        occupancy_rate: 'Alto',
        extendedHours: true,
        vibe: 'Business / Moderno',
        notes: 'Situata nel bellissimo Campus di San Giobbe. Sabato aperta fino alle 21:00.',
        tags: ['Economia', 'Moderno', 'Giardino', 'Vicina Stazione'],
    },

    // ============================================================
    // MESTRE - CAMPUS SCIENTIFICO
    // ============================================================
    {
        id: 'cafoscari_bas_mestre',
        nome: 'BAS - Biblioteca di Area Scientifica',
        edificio: 'Campus Via Torino',
        piano: 0,
        postiDisponibili: 120,
        postiTotali: 180,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['WiFi Eduroam', 'Laboratori', 'Prese', 'Parcheggio Bici'],
        latitude: 45.4795,
        longitude: 12.2355,
        indirizzo: 'Via Torino 155, 30172 Mestre (VE)',
        university: 'Ca Foscari',
        occupancy_rate: 'Medio',
        vibe: 'Tech / Scientifica',
        notes: 'Polo per Scienze Ambientali, Chimica e Informatica. Sabato aperta 09:00-13:00.',
        tags: ['Mestre', 'Scienze', 'Tech', 'Moderno'],
    },

    // ============================================================
    // TREVISO - SEDE DISTACCATA
    // ============================================================
    {
        id: 'cafoscari_treviso_sanpaolo',
        nome: 'Campus Treviso - San Paolo',
        edificio: 'Palazzo San Paolo',
        piano: 1,
        postiDisponibili: 40,
        postiTotali: 60,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Area Break', 'Prese'],
        latitude: 45.6635,
        longitude: 12.2455,
        indirizzo: 'Riviera Santa Margherita 76, 31100 Treviso (TV)',
        university: 'Ca Foscari',
        occupancy_rate: 'Medio',
        vibe: 'Accogliente / Tranquilla',
        notes: 'Sede trevigiana dedicata a Economia e Lingue.',
        tags: ['Treviso', 'Centro', 'Tranquillo'],
    },

    // ============================================================
    // VENEZIA - SPAZI ESU (Ente per il Diritto allo Studio)
    // ============================================================
    {
        id: 'cafoscari_esu_santa_marta',
        nome: 'Aula Studio ESU Santa Marta',
        edificio: 'Complesso Santa Marta (ESU Venezia)',
        piano: 0,
        postiDisponibili: 120,
        postiTotali: 200,
        orarioApertura: '08:00',
        orarioChiusura: '23:00',
        servizi: ['WiFi Gratuito', 'Prese elettriche', 'Climatizzazione', 'Accesso Libero', 'Distributori'],
        latitude: 45.4285,
        longitude: 12.3170,
        indirizzo: 'Fondamenta Santa Marta, Dorsoduro 2137, 30123 Venezia',
        university: 'Ca Foscari',
        occupancy_rate: 'Molto Alto',
        extendedHours: true,
        vibe: 'Hub / Vivace',
        notes: 'Gestita da ESU Venezia. Enorme sala studio nel complesso di Santa Marta (ex area portuale). 200 posti, aperta fino alle 23:00, accesso libero per tutti gli studenti universitari. Usata da studenti Ca\' Foscari, IUAV e conservatorio.',
        tags: ['ESU', 'Zattere', 'Orario Esteso', '⚡ Prese', '🌙 Serale'],
    },
    {
        id: 'cafoscari_esu_san_basilio',
        nome: 'Aula Studio ESU San Basilio',
        edificio: 'Magazzini San Basilio (ESU Venezia)',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '20:00',
        servizi: ['WiFi Gratuito', 'Prese elettriche', 'Accesso Libero'],
        latitude: 45.4290,
        longitude: 12.3200,
        indirizzo: 'Fondamenta Zattere al Pontelungo, Dorsoduro 1400, 30123 Venezia',
        university: 'Ca Foscari',
        occupancy_rate: 'Medio',
        vibe: 'Tranquilla / Luminosa',
        notes: 'Gestita da ESU Venezia. Vicina al CFZ e alla fermata San Basilio del vaporetto. 80 posti, meno affollata di Santa Marta. Ottima alternativa.',
        tags: ['ESU', 'Zattere', 'WiFi', 'Tranquillo'],
    }
];

export const getDirectionsCafoscari = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];
    const id = room.id;

    if (id === 'cafoscari_bec') {
        directions.push({
            luogo: 'Stazione Venezia S. Lucia',
            descrizione: 'Esci dalla stazione e gira a destra verso il Ponte della Costituzione (Calatrava). Prosegui verso Cannaregio lungo la fondamenta fino a San Giobbe. Circa 10-15 min a piedi.',
            mezziPubblici: ['A piedi', 'Vaporetto 4.1, 4.2, 5.1, 5.2 (Fermata Crea)'],
            tempoStimato: '12 min',
        });
    } else if (id === 'cafoscari_cfz') {
        directions.push({
            luogo: 'Piazzale Roma / Stazione',
            descrizione: 'Prendi il vaporetto linea 2 o 6 e scendi a San Basilio. CFZ si trova a pochi passi lungo la Fondamenta Zattere.',
            mezziPubblici: ['Vaporetto 2, 6 (Fermata San Basilio)'],
            tempoStimato: '15 min',
        });
    } else if (id === 'cafoscari_bas_mestre') {
        directions.push({
            luogo: 'Stazione Mestre',
            descrizione: 'Prendi il Bus Linea 31 o 32 o procedi in bicicletta lungo la pista ciclabile di Via Torino.',
            mezziPubblici: ['Bus 31, 32', 'Bicicletta'],
            tempoStimato: '10 min',
        });
    } else if (id === 'cafoscari_baum') {
        directions.push({
            luogo: 'Piazzale Roma / Stazione',
            descrizione: 'Raggiungibile in 10-15 min a piedi (San Pantalon). In vaporetto scendi a San Tomà o Piazzale Roma.',
            mezziPubblici: ['A piedi', 'Vaporetto 1, 2 (Fermata San Tomà)'],
            tempoStimato: '15 min',
        });
    } else if (id.includes('esu_santa_marta') || id.includes('esu_san_basilio')) {
        directions.push({
            luogo: 'Piazzale Roma / Stazione S. Lucia',
            descrizione: 'Prendi il vaporetto linea 2 o 6 e scendi a San Basilio. Le sale studio ESU sono nel complesso di Santa Marta, a pochi passi dalla fermata.',
            mezziPubblici: ['Vaporetto 2, 6 (Fermata San Basilio)'],
            tempoStimato: '15 min',
        });
    } else if (room.indirizzo.includes('Treviso')) {
        directions.push({
            luogo: 'Stazione Treviso Centrale',
            descrizione: 'Riviera Santa Margherita è a meno di 10 min a piedi dalla stazione, lungo il fiume.',
            mezziPubblici: ['A piedi'],
            tempoStimato: '8 min',
        });
    }

    return directions;
};
