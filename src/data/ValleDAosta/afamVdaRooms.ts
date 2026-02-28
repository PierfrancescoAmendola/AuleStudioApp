import { StudyRoom, DirectionsFromLocation } from '../../types';

export const afamVdaRooms: StudyRoom[] = [
    // ============================================================
    // CONSERVATOIRE DE LA VALLÉE D'AOSTA - SEDE AOSTA
    // ============================================================
    {
        id: 'afam_vda_aosta_balivi',
        nome: 'Conservatoire - Sede Torre dei Balivi',
        edificio: 'Complesso Monumentale Torre dei Balivi',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 50,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['WiFi', 'Aule insonorizzate', 'Biblioteca Musicale', 'Pianoforti a coda'],
        latitude: 45.7408,
        longitude: 7.3255,
        indirizzo: 'Via Guido Rey (Torre dei Balivi), 11100 Aosta (AO)',
        university: 'AFAM',
        occupancy_rate: 'Alto',
        vibe: 'Maestosa / Storica',
        notes: 'Sede principale situata in un complesso monumentale romano/medievale. Eccellenza per l\'alta formazione musicale regionale.',
        tags: ['Conservatorio', 'Musica', 'Aosta Centro', 'Storico'],
    },
    // ============================================================
    // CONSERVATOIRE DE LA VALLÉE D'AOSTA - SEDE PONT-SAINT-MARTIN
    // ============================================================
    {
        id: 'afam_vda_psm',
        nome: 'Conservatoire - Sede Pont-Saint-Martin',
        edificio: 'Maison du Boulodrome',
        piano: 1,
        postiDisponibili: 15,
        postiTotali: 25,
        orarioApertura: '14:30', // Orario tipicamente pomeridiano per le sedi distaccate
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Aule Strumento', 'Area Relax'],
        latitude: 45.5945,
        longitude: 7.7985,
        indirizzo: 'Via Schigliatta 10, 11026 Pont-Saint-Martin (AO)',
        university: 'AFAM',
        occupancy_rate: 'Medio',
        vibe: 'Creativa / Tranquilla',
        notes: 'Sede distaccata strategica per la bassa valle. Ideale per studenti residenti lontano dal capoluogo.',
        tags: ['Bassa Valle', 'Musica', 'Pianoforte'],
    }
];

export const getDirectionsAfamVda = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];
    const isAosta = room.indirizzo.includes('Aosta');
    const isPSM = room.indirizzo.includes('Pont-Saint-Martin');

    if (isAosta) {
        directions.push({
            luogo: 'Arco d\'Augusto / Stazione Aosta',
            descrizione: 'Dalla Stazione di Aosta, procedi verso l\'Arco d\'Augusto. La Torre dei Balivi si trova a pochi metri dall\'Arco, lungo le mura romane. Raggiungibile in 10 minuti a piedi.',
            mezziPubblici: ['A piedi', 'Navetta Rossa'],
            tempoStimato: '10 min',
        });
    } else if (isPSM) {
        directions.push({
            luogo: 'Stazione Pont-Saint-Martin',
            descrizione: 'Dalla stazione ferroviaria, procedi verso il centro del paese. La sede di Via Schigliatta è raggiungibile con una breve camminata di circa 10 minuti.',
            mezziPubblici: ['A piedi'],
            tempoStimato: '10 min',
        });
    }

    return directions;
};
