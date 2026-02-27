import { StudyRoom, DirectionsFromLocation } from '../../types';

export const afamUmbriaRooms: StudyRoom[] = [
    {
        id: 'afam_aba_biblioteca',
        nome: 'Biblioteca Storica ABA',
        edificio: 'Accademia Belle Arti "Pietro Vannucci"',
        piano: 1,
        postiDisponibili: 35,
        postiTotali: 50,
        orarioApertura: '09:00',
        orarioChiusura: '17:30',
        servizi: ['WiFi', 'Tavoli Grandi', 'Libri d\'Arte', 'Prese'],
        latitude: 43.1141,
        longitude: 12.3831,
        indirizzo: 'Piazza San Francesco al Prato 5, Perugia',
        university: 'AFAM',
        occupancy_rate: 'Medio',
        vibe: 'Artistica / Luminosa',
        tags: ['Arte', 'San Francesco', 'Tavoli Grandi'],
    },
    {
        id: 'afam_aba_gipsoteca',
        nome: 'Aula Studio Gipsoteca',
        edificio: 'Ala Museale ABA',
        piano: 0,
        postiDisponibili: 15,
        postiTotali: 20,
        orarioApertura: '09:30',
        orarioChiusura: '13:00', // Orario ridotto spesso
        servizi: ['WiFi', 'Ambiente monumentale', 'Silenzio'],
        latitude: 43.1142,
        longitude: 12.3832,
        indirizzo: 'Piazza San Francesco al Prato 5, Perugia',
        university: 'AFAM',
        occupancy_rate: 'Basso',
        vibe: 'Ispirazionale / Unica',
        tags: ['Silenzio Assoluto', 'Museo'],
    },
    {
        id: 'afam_morlacchi_biblio',
        nome: 'Biblioteca del Conservatorio',
        edificio: 'Conservatorio Morlacchi',
        piano: 2,
        postiDisponibili: 30,
        postiTotali: 45,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Archivio Spartiti', 'Pianoforti studio', 'Prese'],
        latitude: 43.1130,
        longitude: 12.3865,
        indirizzo: 'Piazza Mariotti 2, Perugia',
        university: 'AFAM',
        occupancy_rate: 'Alto',
        vibe: 'Musicale / Concentrata',
        tags: ['Musica', 'Pianoforte', 'Centro'],
    },
    {
        id: 'afam_briccialdi_terni',
        nome: 'Biblioteca e Sala Lettura Briccialdi',
        edificio: 'Palazzo Giocosi Mariani',
        piano: 0,
        postiDisponibili: 25,
        postiTotali: 35,
        orarioApertura: '09:00',
        orarioChiusura: '18:30',
        servizi: ['WiFi', 'Prese', 'Consultazione Musicale'],
        latitude: 42.5645,
        longitude: 12.6450,
        indirizzo: 'Via del Tribunale 22, Terni',
        university: 'AFAM',
        occupancy_rate: 'Medio',
        vibe: 'Classica',
        tags: ['Terni', 'Musica', 'Tranquillo'],
    },
    {
        id: 'afam_augusta',
        nome: 'Biblioteca Comunale Augusta',
        edificio: 'Palazzo Conestabile della Staffa',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 120,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi', 'Prese', 'Fondi Storici', 'Consultazione'],
        latitude: 43.1119,
        longitude: 12.3888,
        indirizzo: 'Via delle Prome 15, Perugia',
        university: 'AFAM',
        occupancy_rate: 'Alto',
        vibe: 'Storica / Silenzio',
        notes: 'A ridosso del centro, è una delle biblioteche più utilizzate dagli studenti dei conservatori e accademie d\'arte.',
        tags: ['Biblioteca', 'Centro', 'Silenzio'],
    }
];

export const getDirectionsAfamUmbria = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];
    const isTerni = room.indirizzo.includes('Terni');

    if (isTerni) {
        directions.push({
            luogo: 'Stazione Ferroviaria Terni / Centro',
            descrizione: 'Il Conservatorio Briccialdi si trova in pieno centro storico. Dalla stazione procedi dritto lungo Viale della Stazione verso Piazza Tacito, poi prosegui per Via del Tribunale. Circa 10-15 minuti a piedi.',
            mezziPubblici: ['A piedi', 'Bus Circolare'],
            tempoStimato: '15 min a piedi'
        });
    } else {
        directions.push({
            luogo: 'Centro Storico Perugia',
            descrizione: 'Le accademie e i conservatori di Perugia sono incastonati nel centro pedonale. Usa il Minimetrò (fermata Pincetto o Cupa) o le scale mobili della Rocca Paolina per risalire agevolmente l\'acropoli senza affaticarti.',
            mezziPubblici: ['Minimetrò', 'Scale Mobili'],
            tempoStimato: '10 min'
        });
    }

    return directions;
};
