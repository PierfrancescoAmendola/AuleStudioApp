import { StudyRoom, DirectionsFromLocation } from '../../types';

export const univdaRooms: StudyRoom[] = [
    // ============================================================
    // NUOVO POLO UNIVERSITARIO (EX CASERMA TESTAFOCHI)
    // ============================================================
    {
        id: 'univda_nuovo_polo_biblioteca',
        nome: 'Biblioteca d\'Ateneo - Nuovo Polo',
        edificio: 'Campus Via Monte Vodice (Ex Testafochi)',
        piano: 1,
        postiDisponibili: 120,
        postiTotali: 180,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Prese elettriche', 'Ecosostenibile', 'Climatizzazione', 'Accesso Disabili'],
        latitude: 45.7375,
        longitude: 7.3152,
        indirizzo: 'Via Monte Vodice 5, 11100 Aosta (AO)',
        university: 'UniVDA',
        occupancy_rate: 'Alto',
        extendedHours: true,
        vibe: 'Moderna / Ecosostenibile',
        notes: 'Nuovissimo campus inaugurato nel 2025. Architettura d\'avanguardia focalizzata sulla sostenibilità.',
        tags: ['Biblioteca', 'Centro', 'Novità 2025', 'Prese'],
    },
    {
        id: 'univda_nuovo_polo_aule',
        nome: 'Aule Studio "Testafochi"',
        edificio: 'Nuovo Polo Universitario',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 100,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['WiFi Eduroam', 'Area Snack', 'Lavori di gruppo'],
        latitude: 45.7376,
        longitude: 7.3150,
        indirizzo: 'Via Monte Vodice 5, 11100 Aosta (AO)',
        university: 'UniVDA',
        occupancy_rate: 'Medio',
        vibe: 'Dinamica / Social Hub',
        notes: 'Spazi studio aperti situati nel corpo centrale del campus. Ideali per pause tra le lezioni.',
        tags: ['Aula Studio', 'Gruppi OK', 'Design'],
    },
    // ============================================================
    // BIBLIOTECA REGIONALE (HUB PRINCIPALE STUDENTI)
    // ============================================================
    {
        id: 'aosta_biblioteca_regionale',
        nome: 'Biblioteca Regionale Bruno Salvadori',
        edificio: 'Sede Regionale',
        piano: 0,
        postiDisponibili: 150,
        postiTotali: 250,
        orarioApertura: '09:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi Gratuito', 'Prese elettriche', 'Emeroteca', 'Sezione Valdostana', 'Area Caffè'],
        latitude: 45.7368,
        longitude: 7.3215,
        indirizzo: 'Via d\'Avise 1, 11100 Aosta (AO)',
        university: 'UniVDA',
        occupancy_rate: 'Molto Alto',
        extendedHours: false,
        vibe: 'Istituzionale / Completa',
        notes: 'La biblioteca più importante della regione. Molto frequentata dagli universitari per gli orari continuati e la vastità delle sale.',
        tags: ['Biblioteca', 'Centro', 'Prese', 'WiFi Libero'],
    },
    // ============================================================
    // SEDI STORICHE E DIPARTIMENTALI
    // ============================================================
    {
        id: 'univda_cappuccini',
        nome: 'Sala Studio Strada Cappuccini',
        edificio: 'Ex Seminario Maggiore',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 45,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi Eduroam', 'Ambiente Storico', 'Silenzio'],
        latitude: 45.7420,
        longitude: 7.3185,
        indirizzo: 'Strada Cappuccini 2, 11100 Aosta (AO)',
        university: 'UniVDA',
        occupancy_rate: 'Basso',
        vibe: 'Storica / Silenziosa',
        notes: 'Mantiene sale lettura silenziose ideali per l\'alta concentrazione.',
        tags: ['Aula Studio', 'Storico', 'Silenzio'],
    },
    {
        id: 'univda_detillier',
        nome: 'Aula Studio Via de Tillier',
        edificio: 'Sede Scienze della Formazione',
        piano: 1,
        postiDisponibili: 25,
        postiTotali: 40,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi', 'Specializzazione Didattica'],
        latitude: 45.7370,
        longitude: 7.3195,
        indirizzo: 'Via Jean-Baptiste de Tillier 19, 11100 Aosta (AO)',
        university: 'UniVDA',
        occupancy_rate: 'Medio',
        vibe: 'Accogliente',
        notes: 'Punto di riferimento per Scienze della Formazione e Psicologia.',
        tags: ['Aula Studio', 'Centro'],
    }
];

export const getDirectionsUnivda = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];
    const isNuovoPolo = room.indirizzo.includes('Monte Vodice');
    const isRegionale = room.id.includes('regionale');
    const isCentro = room.indirizzo.includes('Tillier') || room.indirizzo.includes('Avise');

    if (isNuovoPolo) {
        directions.push({
            luogo: 'Stazione Ferroviaria Aosta',
            descrizione: 'Circa 10 minuti a piedi verso ovest. Attraversa Piazza della Repubblica e imbocca Via Monte Vodice.',
            mezziPubblici: ['A piedi', 'Navetta Verde'],
            tempoStimato: '10 min',
        });
    } else if (isRegionale || isCentro) {
        directions.push({
            luogo: 'Stazione Ferroviaria Aosta',
            descrizione: 'Dalla stazione procedi verso nord su Via Carrel, attraversa l\'Arco d\'Augusto e imbocca le vie del centro pedonale.',
            mezziPubblici: ['A piedi'],
            tempoStimato: '5-7 min',
        });
    } else if (room.indirizzo.includes('Cappuccini')) {
        directions.push({
            luogo: 'Stazione Ferroviaria Aosta',
            descrizione: 'Dalla stazione procedi verso nord su Via Carrel, attraversa il centro e risali verso la collina imboccando Strada Cappuccini. Circa 15 min a piedi.',
            mezziPubblici: ['A piedi', 'Navetta Rossa'],
            tempoStimato: '15 min',
        });
    }

    return directions;
};
