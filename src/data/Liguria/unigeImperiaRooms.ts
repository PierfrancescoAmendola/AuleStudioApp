import { StudyRoom, DirectionsFromLocation } from '../../types';

export const unigeImperiaRooms: StudyRoom[] = [
    // ============================================================
    // CAMPUS IMPERIA (Porto Maurizio - Via Nizza)
    // ============================================================
    {
        id: 'unige_im_biblio',
        nome: 'Biblioteca Polo Imperia',
        edificio: 'Palazzina Studi',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 120,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi Eduroam', 'Testi Giuridici/Turismo', 'Silenzio'],
        latitude: 43.8788,
        longitude: 8.0158,
        indirizzo: 'Via Nizza 8, Imperia (Porto Maurizio)',
        university: 'UniGe',
        occupancy_rate: 'Medio',
        notes: 'Biblioteca principale polo. Accogliente, testi specifici corsi.',
        tags: ['Biblioteca', 'Campus', 'WiFi', '🔇 Silenzio'],
    },
    {
        id: 'unige_im_aule_studio',
        nome: 'Aule Libere e Aula Magna',
        edificio: 'Plesso Didattico',
        piano: 1,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['AC', 'Group Work', 'Prenotazione Portineria'],
        latitude: 43.8788,
        longitude: 8.0158,
        indirizzo: 'Via Nizza 8, Imperia',
        university: 'UniGe',
        notes: 'Aule/Aula Magna usate studio quando libere. Chiedi portineria.',
        tags: ['Aula Studio', '❄️ Climatizzato', '👥 Gruppi OK'],
    },
    {
        id: 'unige_im_cortile',
        nome: 'Cortile Interno e Mensa',
        edificio: 'Area Comune',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Relax', 'Pausa Pranzo', 'Tavoli Esterni'],
        latitude: 43.8788,
        longitude: 8.0158,
        indirizzo: 'Via Nizza 8, Imperia',
        university: 'UniGe',
        notes: 'Cortile/mensa per studio informale. Clima mite.',
        tags: ['Mensa/Ristoro'],
    },
    {
        id: 'unige_im_giardino',
        nome: 'Giardino Campus (Outdoor)',
        edificio: 'Esterno',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 50,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Verde', 'Panchine', 'Vista'],
        latitude: 43.8788,
        longitude: 8.0158,
        indirizzo: 'Via Nizza 8, Imperia',
        university: 'UniGe',
        notes: 'Giardino per studio all\'aperto.',
        tags: ['Outdoor', 'Campus'],
    },
    // ============================================================
    // IMPERIA CENTRO (Civica e Outdoor)
    // ============================================================
    {
        id: 'im_lagorio',
        nome: 'Biblioteca Civica "Leonardo Lagorio"',
        edificio: 'Palazzo Comunale Oneglia',
        piano: 1,
        postiDisponibili: 120,
        postiTotali: 150,
        orarioApertura: '09:30',
        orarioChiusura: '18:30',
        servizi: ['Sala Ampia', 'WiFi', 'Centro Oneglia'],
        latitude: 43.8885,
        longitude: 8.0392,
        indirizzo: 'Piazza De Amicis 7, Imperia (Oneglia)',
        university: 'UniGe',
        occupancy_rate: 'Alto',
        notes: 'Civica principale. Usatissima studenti.',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'im_parasio',
        nome: 'Parasio Borgo Medievale (Outdoor)',
        edificio: 'Piazze/Logge Santa Chiara',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 100,
        orarioApertura: 'H24',
        orarioChiusura: 'H24',
        servizi: ['Vista Mare', 'Panchine', 'Silenzio'],
        latitude: 43.8755,
        longitude: 8.0180,
        indirizzo: 'Parasio, Porto Maurizio, Imperia',
        university: 'UniGe',
        notes: 'Borgo storico sopra campus. Logge vista mare iconiche.',
        tags: ['Outdoor', '🔇 Silenzio'],
    },
];

export const getDirectionsImperia = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const isCampus = room.indirizzo.includes('Nizza') || room.id.includes('unige_im');
    const isCivicaOneglia = room.id.includes('lagorio');
    const isParasio = room.id.includes('parasio');

    // CAMPUS PORTO MAURIZIO
    if (isCampus) {
        directions.push({
            luogo: 'Stazione Imperia (Nuova Stazione)',
            descrizione: `Per Campus Imperia (Via Nizza 8, Porto Maurizio):
1. **Bus Riviera Trasporti (RT) dalla Stazione**:
   - Linea **1** o **14** direzione Porto Maurizio → fermata "Via Nizza Università" (ogni 20-30 min)
   - Tempo: 10-15 min
2. **A piedi dalla Stazione**: 35-40 min (percorso lungo, consigliato bus)
3. **In bici**: 15 min
4. **In auto**: Uscita A10 Imperia Ovest → Via Nizza (parcheggi bianchi/blu lungo via)
**NOTE**: Campus piccolo accogliente. Ingresso principale Via Nizza.`,
            mezziPubblici: ['Bus RT 1, 14', 'Bici'],
            tempoStimato: '10-40 min',
            note: 'Clima mite, vista mare vicina.'
        });
    }
    // CIVICA LAGORIO (Oneglia)
    else if (isCivicaOneglia) {
        directions.push({
            luogo: 'Stazione Imperia / Porto Maurizio',
            descrizione: `Per Biblioteca Lagorio (Piazza De Amicis 7, Oneglia):
1. **Bus RT dalla Stazione**: Linea **1** o **12** direzione Oneglia → fermata "Piazza Dante" o "De Amicis" (15 min)
2. **A piedi dalla Stazione**: 20-25 min (più vicina rispetto al Campus)
3. **In auto**: Direzione Oneglia centro (parcheggi piazza)
**NOTE**: Oneglia parte commerciale Imperia.`,
            mezziPubblici: ['Bus RT 1, 12'],
            tempoStimato: '15-25 min',
            note: 'Centro vivace.'
        });
    }
    // PARASIO (Outdoor)
    else if (isParasio) {
        directions.push({
            luogo: 'Campus Via Nizza',
            descrizione: `Per Parasio (borgo medievale):
1. **A piedi dal Campus**: 10-15 min salita (stradine storiche verso Logge Santa Chiara)
2. **Bus RT**: Fermata vicina Via Nizza → centro Parasio
**NOTE**: Salita ripida ma panoramica! Vista Golfo Imperia.`,
            mezziPubblici: ['A piedi'],
            tempoStimato: '10-15 min',
            note: 'Spot ispirazionale.'
        });
    }

    // Info generali
    directions.push({
        luogo: 'Info Generali Polo Imperia',
        descrizione: `**Polo piccolo**: Giurisprudenza, Turismo, Servizi Sociali.
**Bus**: App Riviera Trasporti orari.
Imperia divisa Oneglia/Porto Maurizio, campus Porto Maurizio.
Clima mite, mare vicino.`,
        mezziPubblici: ['RT Bus', 'A piedi/Bici'],
        tempoStimato: 'Max 20 min interni',
        note: 'Polo accogliente tranquillo vs Genova.'
    });

    return directions;
};
