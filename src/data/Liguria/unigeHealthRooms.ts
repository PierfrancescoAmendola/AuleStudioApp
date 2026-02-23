import { StudyRoom, DirectionsFromLocation } from '../../types';

export const unigeHealthDecentralizedRooms: StudyRoom[] = [
    // ============================================================
    // CHIAVARI (ASL4 Tigullio - Polo Infermieristica/Fisioterapia)
    // ============================================================
    {
        id: 'unige_chiavari_polo',
        nome: 'Aula Studio e Biblioteca Polo Chiavari',
        edificio: 'Complesso ASL4 (Ex Ospedale)',
        piano: 1,
        postiDisponibili: 50,
        postiTotali: 60,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['WiFi Eduroam', 'Simulazione', 'Macchinette'],
        latitude: 44.3182,
        longitude: 9.3252,
        indirizzo: 'Via G.B. Ghio 9, Chiavari',
        university: 'UniGe - Polo Chiavari',
        occupancy_rate: 'Alto',
        notes: 'Spazio principale per Infermieristica/Fisioterapia. Familiare e funzionale.',
        tags: ['Biblioteca', 'Campus', 'Medicina', 'WiFi', '❄️ Climatizzato'],
    },
    {
        id: 'unige_health_chiavari_mensa',
        nome: 'Mensa e Cortile Interno',
        edificio: 'Complesso ASL4',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 50,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['Relax', 'Pausa'],
        latitude: 44.3182,
        longitude: 9.3252,
        indirizzo: 'Via G.B. Ghio 9, Chiavari',
        university: 'UniGe - Polo Chiavari',
        notes: 'Cortile per studio informale.',
        tags: ['Mensa/Ristoro', 'Campus'],
    },
    {
        id: 'chiavari_economica',
        nome: 'Biblioteca Società Economica',
        edificio: 'Palazzo Portici Neri',
        piano: 1,
        postiDisponibili: 120,
        postiTotali: 140,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['Storica', 'Silenzio', 'Prestigiosa'],
        latitude: 44.3165,
        longitude: 9.3235,
        indirizzo: 'Via Ravaschieri 15, Chiavari',
        university: 'UniGe - Polo Chiavari',
        notes: '🏆 Una delle biblioteche più belle della Liguria, atmosfera storica unica.',
        tags: ['Biblioteca', 'Campus', '🔇 Silenzio'],
    },
    {
        id: 'chiavari_outdoor',
        nome: 'Lungomare e Parasio (Outdoor Study)',
        edificio: 'Borgo/Lungomare',
        piano: 0,
        postiDisponibili: 500,
        postiTotali: 500,
        orarioApertura: 'H24',
        orarioChiusura: 'H24',
        servizi: ['Vista Mare', 'Panchine'],
        latitude: 44.3130,
        longitude: 9.3200,
        indirizzo: 'Corso Valparaiso/Parasio, Chiavari',
        university: 'UniGe - Polo Chiavari',
        notes: 'Lungomare o borgo Parasio per respirare aria di mare mentre si ripassa.',
        tags: ['Outdoor', 'Campus'],
    },
    // ============================================================
    // PIETRA LIGURE (ASL2 Santa Corona)
    // ============================================================
    {
        id: 'unige_pietra_corona',
        nome: 'Biblioteca e Aula Studio Santa Corona',
        edificio: 'Padiglione Didattico Ospedale',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 70,
        orarioApertura: '08:30',
        orarioChiusura: '17:30',
        servizi: ['Testi Sanitari', 'WiFi'],
        latitude: 44.1455,
        longitude: 8.2755,
        indirizzo: 'Via XXV Aprile 38, Pietra Ligure',
        university: 'UniGe - Polo Pietra',
        notes: '📍 Situata nel vasto complesso del Santa Corona. Molto frequentata da studenti di Medicina e professioni sanitarie.',
        tags: ['Biblioteca', 'Campus', 'Medicina', 'WiFi'],
    },
    {
        id: 'pietra_civica',
        nome: 'Biblioteca Civica Pietra Ligure',
        edificio: 'Centro Polifunzionale',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '09:30',
        orarioChiusura: '18:00',
        servizi: ['AC', 'Centro'],
        latitude: 44.1480,
        longitude: 8.2800,
        indirizzo: 'Piazza Martiri della Libertà, Pietra Ligure',
        university: 'UniGe - Polo Pietra',
        notes: 'Alternativa tranquilla in centro città, climatizzata d\'estate.',
        tags: ['Biblioteca', 'Campus', '❄️ Climatizzato'],
    },
];

export const getDirectionsHealthDecentralized = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const isChiavari = room.indirizzo.includes('Chiavari') || room.indirizzo.includes('Ghio') || room.indirizzo.includes('Ravaschieri');
    const isPietra = room.indirizzo.includes('Pietra') || room.indirizzo.includes('XXV Aprile');

    // CHIAVARI
    if (isChiavari) {
        directions.push({
            luogo: 'Stazione FS Chiavari',
            descrizione: `Per Polo Chiavari (Via Ghio 9 / centro):
1. **A piedi dalla Stazione**: 10-15 min pianeggiante (Via Ghio interna, Società Economica centro)
2. **Bus Urbani**: Linee dirette verso ospedale/centro
3. **In auto**: Parcheggi blu centro o limitrofi Via Ghio
**NOTE**: Chiavari è compatta e pianeggiante, il treno regionale è il mezzo principe.`,
            mezziPubblici: ['A piedi', 'Bus AMT Urbani'],
            tempoStimato: '10-15 min',
            note: 'Mite, mare a due passi.'
        });
    }
    // PIETRA LIGURE
    else if (isPietra) {
        directions.push({
            luogo: 'Stazione FS Pietra Ligure',
            descrizione: `Per Santa Corona (Via XXV Aprile):
1. **Bus TPL dalla Stazione**: Linea 40 (direzione Andora/Finale) → fermata "Ospedale Santa Corona"
2. **A piedi**: 25 min (lungomare → salita verso padiglioni)
3. **In auto**: Ingresso principale Via XXV Aprile (occhio ai padiglioni!)
**NOTE**: Ospedale vasto, il polo didattico è un padiglione specifico, chiedi all'ingresso se è la prima volta.`,
            mezziPubblici: ['Bus TPL 40'],
            tempoStimato: '15-25 min',
            note: 'Civica in centro è più vicina alla stazione.'
        });
    }

    // Info generali
    directions.push({
        luogo: 'Info Generali Poli Health Decentralizzati',
        descrizione: `**Corsi Sanitari**: Questi poli ospitano Infermieristica e Fisioterapia.
**Logistica**: Legati a strutture ospedaliere ASL.
**Pausa**: Spesso le spiagge sono letteralmente dall'altra parte della strada (Pietra/Chiavari).`,
        mezziPubblici: ['Treno Regionale + Bus', 'A piedi'],
        tempoStimato: 'Max 20 min',
        note: 'Atmosfera rilassata di mare.'
    });

    return directions;
};
