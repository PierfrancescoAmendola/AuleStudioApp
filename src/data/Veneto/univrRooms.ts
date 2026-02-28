import { StudyRoom, DirectionsFromLocation } from '../../types';

export const univrRooms: StudyRoom[] = [
    // ============================================================
    // VERONETTA - UMANISTICA, ECONOMIA E GIURIDICA (IL CUORE)
    // ============================================================
    {
        id: 'univr_frinzi',
        nome: 'Biblioteca Arturo Frinzi',
        edificio: 'Ex Chiesa di San Francesco di Paola',
        piano: 0,
        postiDisponibili: 180,
        postiTotali: 450,
        orarioApertura: '08:15',
        orarioChiusura: '23:45',
        servizi: ['WiFi Eduroam', 'Prese', 'Aperta Sabato e Domenica', 'Consultazione'],
        latitude: 45.4385,
        longitude: 10.9995,
        indirizzo: 'Via S. Francesco 20, 37129 Verona',
        university: 'UniVr',
        occupancy_rate: 'Molto Alto',
        extendedHours: true,
        vibe: 'Maestosa / Storica',
        notes: 'La "casa" di ogni studente veronese. Il posto va conquistato entro le 8:45.',
        tags: ['Biblioteca', 'Centro', 'Top Space', 'Domenica'],
    },
    {
        id: 'univr_santa_marta',
        nome: 'Polo Santa Marta (Silos)',
        edificio: 'Ex Silos di Ponente',
        piano: 1,
        postiDisponibili: 130,
        postiTotali: 300,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi Eduroam', 'Prese ovunque', 'Mensa interna', 'Clima'],
        latitude: 45.4365,
        longitude: 11.0065,
        indirizzo: 'Via Cantarane 24, 37129 Verona',
        university: 'UniVr',
        occupancy_rate: 'Alto',
        vibe: 'Industrial / Tech',
        notes: 'Spazi enormi e modernissimi. Ottimo per chi ha bisogno di caricare molti dispositivi.',
        tags: ['Economia', 'Moderno', 'Mensa', 'Prese'],
    },
    {
        id: 'univr_lingue',
        nome: 'Biblioteca di Lingue e Letterature Straniere',
        edificio: 'Palazzo di Lingue',
        piano: 2,
        postiDisponibili: 40,
        postiTotali: 65,
        orarioApertura: '08:15',
        orarioChiusura: '19:45',
        servizi: ['WiFi Eduroam', 'Dizionari', 'Silenzio'],
        latitude: 45.4388,
        longitude: 11.0002,
        indirizzo: 'Via San Francesco 22, 37129 Verona',
        university: 'UniVr',
        occupancy_rate: 'Medio',
        vibe: 'Intima / Focus',
        notes: 'Meno conosciuta della Frinzi, ottima per chi cerca meno caos rimanendo in centro.',
        tags: ['Lingue', 'Silenzio', 'Centro'],
    },
    {
        id: 'univr_culture_civilta',
        nome: 'Biblioteca di Culture e Civiltà',
        edificio: 'Palazzo Zorzi / Palazzo San Vittore',
        piano: 1,
        postiDisponibili: 35,
        postiTotali: 55,
        orarioApertura: '08:15',
        orarioChiusura: '19:45',
        servizi: ['WiFi Eduroam', 'Fondi Storici'],
        latitude: 45.4410,
        longitude: 11.0020,
        indirizzo: 'Via San Vittore 18, 37129 Verona',
        university: 'UniVr',
        occupancy_rate: 'Basso',
        vibe: 'Storica / Austera',
        notes: 'Polo per Lettere e Beni Culturali. Perfetta per concentrazione profonda.',
        tags: ['Lettere', 'Nascosta', 'Silenzio'],
    },

    // ============================================================
    // BORGO ROMA - MEDICINA, SCIENZE E INGEGNERIA
    // ============================================================
    {
        id: 'univr_ca_vignal',
        nome: 'Biblioteca Ca\' Vignal (Scienze)',
        edificio: 'Polo Scientifico Ca\' Vignal 1',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 160,
        orarioApertura: '08:15',
        orarioChiusura: '19:45',
        servizi: ['WiFi Eduroam', 'Laboratori', 'Prese'],
        latitude: 45.4015,
        longitude: 11.0010,
        indirizzo: 'Strada Le Grazie 15, 37134 Verona',
        university: 'UniVr',
        occupancy_rate: 'Alto',
        vibe: 'Scientifica / Nerd-friendly',
        notes: 'Punto di riferimento per Informatica e Biotecnologie.',
        tags: ['Scienze', 'Tech', 'Informatica'],
    },
    {
        id: 'univr_meneghetti_medica',
        nome: 'Biblioteca Meneghetti (Medicina)',
        edificio: 'Istituti Biologici',
        piano: 0,
        postiDisponibili: 150,
        postiTotali: 280,
        orarioApertura: '08:15',
        orarioChiusura: '19:45',
        servizi: ['WiFi Eduroam', 'Prese', 'Mensa vicina'],
        latitude: 45.4025,
        longitude: 10.9985,
        indirizzo: 'Strada Le Grazie 8, 37134 Verona',
        university: 'UniVr',
        occupancy_rate: 'Molto Alto',
        vibe: 'Medica / Competitiva',
        notes: 'Sempre piena di futuri medici. Atmosfera di grande studio.',
        tags: ['Medicina', 'Borgo Roma', 'Top Space'],
    },

    // ============================================================
    // POLI TERRITORIALI (SAN BONIFACIO, LEGNAGO, VICENZA)
    // ============================================================
    {
        id: 'univr_san_bonifacio',
        nome: 'Polo Didattico San Bonifacio',
        edificio: 'Centro Formazione',
        piano: 0,
        postiDisponibili: 20,
        postiTotali: 35,
        orarioApertura: '08:30',
        orarioChiusura: '17:30',
        servizi: ['WiFi', 'Area Studio'],
        latitude: 45.3985,
        longitude: 11.2750,
        indirizzo: 'Via Circonvallazione 1, 37047 San Bonifacio (VR)',
        university: 'UniVr',
        occupancy_rate: 'Basso',
        notes: 'Sede distaccata principalmente per le professioni sanitarie.',
        tags: ['San Bonifacio', 'Tranquillo', 'Medicina'],
    },
    {
        id: 'univr_legnago',
        nome: 'Polo Didattico Legnago',
        edificio: 'Ospedale Mater Salutis',
        piano: 1,
        postiDisponibili: 25,
        postiTotali: 40,
        orarioApertura: '08:30',
        orarioChiusura: '17:30',
        servizi: ['WiFi', 'Area Studio'],
        latitude: 45.1950,
        longitude: 11.3120,
        indirizzo: 'Via Gian Battista Vico 1, 37045 Legnago (VR)',
        university: 'UniVr',
        occupancy_rate: 'Basso',
        tags: ['Legnago', 'Infermieristica'],
    },
    {
        id: 'univr_vicenza',
        nome: 'Polo Universitario Vicenza',
        edificio: 'Viale Margherita',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 100,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Area Studio'],
        latitude: 45.5415,
        longitude: 11.5510,
        indirizzo: 'Viale Margherita 87, 36100 Vicenza',
        university: 'UniVr',
        occupancy_rate: 'Medio',
        tags: ['Vicenza', 'Diritto/Economia'],
    }
];

export const getDirectionsUnivr = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];
    const isVeronetta = room.indirizzo.includes('37129');
    const isBorgoRoma = room.indirizzo.includes('37134');

    if (isVeronetta) {
        directions.push({
            luogo: 'Stazione Verona Porta Nuova',
            descrizione: 'Bus Linee 11, 12, 13, 51, 52. Scendi alla fermata "Via S. Paolo" o "Piazza Isolo" e cammina 5 minuti.',
            mezziPubblici: ['Bus 11, 12, 13', 'Bici (10 min)'],
            tempoStimato: '15 min',
        });
    } else if (isBorgoRoma) {
        directions.push({
            luogo: 'Stazione Verona Porta Nuova',
            descrizione: 'Bus Linee 21, 22 o 93. Scendi alla fermata "Policlinico Borgo Roma".',
            mezziPubblici: ['Bus 21, 22'],
            tempoStimato: '12 min',
        });
    } else if (room.indirizzo.includes('Vicenza')) {
        directions.push({
            luogo: 'Stazione Vicenza',
            descrizione: 'La sede di Viale Margherita si trova a circa 10 min a piedi dalla stazione, proseguendo oltre Campo Marzo.',
            mezziPubblici: ['A piedi'],
            tempoStimato: '10 min',
        });
    } else if (room.indirizzo.includes('Legnago')) {
        directions.push({
            luogo: 'Stazione Legnago',
            descrizione: 'L\'Ospedale Mater Salutis è raggiungibile a piedi in 15 min o tramite i bus urbani.',
            mezziPubblici: ['A piedi (15 min)', 'Bus urbano'],
            tempoStimato: '15 min',
        });
    } else if (room.indirizzo.includes('San Bonifacio')) {
        directions.push({
            luogo: 'Stazione San Bonifacio',
            descrizione: 'Il polo si trova a circa 10 min a piedi dalla stazione ferroviaria.',
            mezziPubblici: ['A piedi'],
            tempoStimato: '10 min',
        });
    }

    return directions;
};
