import { StudyRoom, DirectionsFromLocation } from '../../types';

export const eliteSchoolsRooms: StudyRoom[] = [
    // ============================================================
    // SCUOLA NORMALE SUPERIORE (SNS) - PISA
    // ============================================================
    {
        id: 'sns_biblio_cavalieri',
        nome: 'Biblioteca SNS (Palazzo della Carovana)',
        edificio: 'Palazzo della Carovana, Piazza dei Cavalieri',
        piano: 1,
        postiDisponibili: 120,
        postiTotali: 200,
        orarioApertura: '08:00',
        orarioChiusura: '23:45',
        servizi: ['WiFi Eduroam', 'Prese', 'Fondi Rari', 'Consultazione', 'Silenzio Assoluto'],
        latitude: 43.7198,
        longitude: 10.3995,
        indirizzo: 'Piazza dei Cavalieri 7, 56126 Pisa',
        university: 'SNS',
        occupancy_rate: 'Alto',
        extendedHours: true,
        vibe: 'Storica / Prestigiosa',
        notes: 'Una delle biblioteche più prestigiose d\'Italia, nel cuore storico di Pisa. Aperta fino a mezzanotte. Silenzio assoluto. Accesso aperto a studenti di tutti gli atenei.',
        tags: ['Biblioteca', 'Top Space', 'H24-ish', 'Silenzio', 'Storico'],
    },
    {
        id: 'sns_orologio',
        nome: 'Sala Studio Palazzo dell\'Orologio',
        edificio: 'Palazzo dell\'Orologio',
        piano: 1,
        postiDisponibili: 40,
        postiTotali: 60,
        orarioApertura: '08:00',
        orarioChiusura: '22:00',
        servizi: ['WiFi Eduroam', 'Prese', 'Patrimonio Storico'],
        latitude: 43.7200,
        longitude: 10.3990,
        indirizzo: 'Piazza dei Cavalieri, 56126 Pisa',
        university: 'SNS',
        occupancy_rate: 'Medio',
        extendedHours: true,
        vibe: 'Intima / Focus',
        notes: 'Sala studio nel celebre Palazzo dell\'Orologio (Torre della Muda dantesca). Atmosfera unica e raccolta.',
        tags: ['Aula Studio', 'Storico', 'Centro'],
    },

    // ============================================================
    // SCUOLA SUPERIORE SANT'ANNA (SSSA) - PISA
    // ============================================================
    {
        id: 'santanna_biblio_centrale',
        nome: 'Biblioteca Centrale Sant\'Anna',
        edificio: 'Campus Sant\'Anna',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 120,
        orarioApertura: '08:30',
        orarioChiusura: '22:00',
        servizi: ['WiFi Eduroam', 'Prese', 'Consultazione', 'Accesso Libero'],
        latitude: 43.7195,
        longitude: 10.4020,
        indirizzo: 'Piazza Martiri della Libertà 33, 56127 Pisa',
        university: 'Sant\'Anna',
        occupancy_rate: 'Medio',
        extendedHours: true,
        vibe: 'Accademica / Moderna',
        notes: 'Biblioteca moderna nel campus pisano della SSSA. Aree studio dedicate per allievi ed esterni.',
        tags: ['Biblioteca', 'WiFi', 'Serale'],
    },

    // ============================================================
    // IMT SCUOLA ALTI STUDI - LUCCA
    // ============================================================
    {
        id: 'imt_san_francesco',
        nome: 'Biblioteca IMT (San Francesco)',
        edificio: 'Complesso di San Francesco',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '09:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi Eduroam', 'Prese', 'Aule Studio', 'Ex-Refettorio'],
        latitude: 43.8438,
        longitude: 10.5010,
        indirizzo: 'Piazza San Francesco 19, 55100 Lucca',
        university: 'IMT Lucca',
        occupancy_rate: 'Medio',
        vibe: 'Monastica / Avanzata',
        notes: 'Spazi centralissimi nel complesso di San Francesco. Include numerose aule studio, l\'Ex-Refettorio e la Biblioteca IMT. Ateneo d\'eccellenza per dottorati.',
        tags: ['Biblioteca', 'Centro', 'WiFi', 'Dottorato'],
    },
];

export const getDirectionsEliteSchools = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];
    const id = room.id;

    if (id.includes('sns') || id.includes('santanna')) {
        directions.push({
            luogo: 'Stazione Pisa Centrale',
            descrizione: 'Piazza dei Cavalieri è a 15 min a piedi dalla stazione. Attraversa Corso Italia e prosegui verso il centro storico. In bus usa LAM Rossa.',
            mezziPubblici: ['A piedi', 'LAM Rossa'],
            tempoStimato: '15 min',
        });
    } else if (id.includes('imt')) {
        directions.push({
            luogo: 'Stazione Lucca',
            descrizione: 'San Francesco è nel cuore delle mura di Lucca. 10-15 min a piedi dalla stazione, attraversando il centro storico.',
            mezziPubblici: ['A piedi'],
            tempoStimato: '12 min',
        });
    }

    return directions;
};
