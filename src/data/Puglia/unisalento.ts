import { StudyRoom, DirectionsFromLocation } from '../../types';

export const unisalentoRooms: StudyRoom[] = [
    // ============================================================
    // LECCE CENTRO - POLO UMANISTICO E GIURIDICO
    // ============================================================
    {
        id: 'unisalento_studium2000',
        nome: 'Biblioteca Interdipartimentale "Studium 2000"',
        edificio: 'Complesso Studium 2000',
        piano: 0,
        postiDisponibili: 220,
        postiTotali: 270,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['WiFi Eduroam', 'Moderno', 'Prese Elettriche', 'Caffetteria'],
        latitude: 40.3582,
        longitude: 18.1655,
        indirizzo: 'Via di Valesio angolo Viale San Nicola, Lecce',
        university: 'UniSalento',
        occupancy_rate: 'Altissimo',
        tags: ['Biblioteca', 'Centro Storico', '📊 Affollamento Alto', '☕ Caffetteria', '🥐 Zona Rustico'],
        notes: 'Hub principale umanistico. Luminoso e frequentatissimo. A due passi da forni e rosticcerie storiche per la pausa Rustico.'
    },
    {
        id: 'unisalento_olivetani',
        nome: 'Biblioteca Dipartimento Studi Storici (Olivetani)',
        edificio: 'Monastero degli Olivetani',
        piano: 0,
        postiDisponibili: 130,
        postiTotali: 160,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['Chiostro Storico', 'Silenzio Sacro', 'Affreschi'],
        latitude: 40.3598,
        longitude: 18.1662,
        indirizzo: 'Viale San Nicola, Lecce',
        university: 'UniSalento',
        tags: ['Biblioteca', 'Centro Storico', '🏛️ Monastero XII sec.', '🔇 Silenzio'],
        notes: 'Location mozzafiato in ex monastero del XII secolo. Chiostro con affreschi — studiare qui è un\'esperienza unica.'
    },
    {
        id: 'unisalento_codacci_pisanelli',
        nome: 'Sala Lettura Giurisprudenza / Lettere',
        edificio: 'Palazzo Codacci Pisanelli',
        piano: 1,
        postiDisponibili: 110,
        postiTotali: 140,
        orarioApertura: '08:00',
        orarioChiusura: '19:00',
        servizi: ['Codici', 'Viale dell\'Università'],
        latitude: 40.3542,
        longitude: 18.1645,
        indirizzo: 'Viale dell\'Università / Piazza Tancredi, Lecce',
        university: 'UniSalento',
        tags: ['Sala Lettura', 'Centro Storico', 'Giurisprudenza'],
        notes: 'Sede storica e labirintica. Ben collegata a piedi dal centro.'
    },
    {
        id: 'lecce_biblio_bernardini',
        nome: 'Biblioteca "Bernardini" (Convitto Palmieri)',
        edificio: 'Ex Convitto Palmieri',
        piano: 0,
        postiDisponibili: 160,
        postiTotali: 210,
        orarioApertura: '08:30',
        orarioChiusura: '20:00',
        servizi: ['Pieno Centro', 'Piazzetta Carducci', 'Orario Esteso'],
        latitude: 40.3525,
        longitude: 18.1682,
        indirizzo: 'Piazzetta Giosuè Carducci, Lecce',
        university: 'UniSalento',
        occupancy_rate: 'Alto',
        tags: ['Biblioteca Civica', 'Centro Storico', '📚 Hub Alternativo', '🥐 Zona Rustico', '🌙 Orario Esteso'],
        notes: 'Civica "requisita" dagli universitari. Perfetta per chi non vuole prendere il Bus 27 fino all\'Ecotekne. Nel cuore della movida leccese.'
    },
    // ============================================================
    // LECCE - CAMPUS ECOTEKNE (Scienze, Eco, Ingegneria)
    // ============================================================
    {
        id: 'unisalento_ecotekne_fiorini',
        nome: 'Biblioteca Scienze (Edificio Fiorini)',
        edificio: 'Campus Ecotekne',
        piano: 1,
        postiDisponibili: 160,
        postiTotali: 190,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi Eduroam', 'Prese Elettriche', 'Parcheggio', 'Mensa'],
        latitude: 40.3342,
        longitude: 18.1205,
        indirizzo: 'Via per Monteroni, Lecce',
        university: 'UniSalento - Ecotekne',
        tags: ['Biblioteca', 'Ecotekne', '🚌 Bus 27', '🅿️ Parcheggio'],
        notes: 'Rifugio di matematici, fisici e biologi. Raggiungibile con il leggendario Bus 27.'
    },
    {
        id: 'unisalento_ecotekne_economia',
        nome: 'Sala Lettura Economia / Ingegneria',
        edificio: 'Campus Ecotekne - Corpo Y',
        piano: 0,
        postiDisponibili: 190,
        postiTotali: 230,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Spazi Ampi', 'Macchinette', 'Aria Condizionata'],
        latitude: 40.3350,
        longitude: 18.1185,
        indirizzo: 'Via per Monteroni, Lecce',
        university: 'UniSalento - Ecotekne',
        occupancy_rate: 'Alto',
        tags: ['Sala Lettura', 'Ecotekne', '🚌 Bus 27', '❄️ Aria Condizionata'],
        notes: 'Punto di ritrovo per economisti e ingegneri. Aria condizionata garantita — fattore decisivo da maggio a settembre.'
    },
    {
        id: 'unisalento_ecotekne_outdoor',
        nome: 'Pineta Ecotekne (Outdoor)',
        edificio: 'Parco del Campus',
        piano: 0,
        postiDisponibili: 300,
        postiTotali: 300,
        orarioApertura: 'H24',
        orarioChiusura: 'H24',
        servizi: ['Natura', 'Ombra', 'Panchine', 'Aperto Domenica'],
        latitude: 40.3345,
        longitude: 18.1192,
        indirizzo: 'Campus Ecotekne, Lecce',
        university: 'UniSalento - Ecotekne',
        tags: ['Outdoor', 'Ecotekne', '☀️ All\'aperto', '🚌 Bus 27'],
        notes: 'In primavera/estate diventa un\'aula studio a cielo aperto sotto i pini. Porta la crema solare.'
    },
    // ============================================================
    // BRINDISI - CITTADELLA DELLA RICERCA
    // ============================================================
    {
        id: 'unisalento_brindisi_cittadella',
        nome: 'Biblioteca Cittadella della Ricerca',
        edificio: 'Polo Ingegneria Aerospaziale',
        piano: 0,
        postiDisponibili: 70,
        postiTotali: 90,
        orarioApertura: '09:00',
        orarioChiusura: '17:30',
        servizi: ['Specializzata', 'Ampi Parcheggi'],
        latitude: 40.5825,
        longitude: 17.8352,
        indirizzo: 'SS 7 Appia (Mesagne-Brindisi), Brindisi',
        university: 'UniSalento - Brindisi',
        tags: ['Biblioteca', 'Brindisi', '🅿️ Parcheggio'],
        notes: 'Polo scientifico d\'eccellenza. Sede isolata — auto o bus extraurbano consigliati.'
    }
];

export const getDirectionsUniSalento = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const isLecceCentro = room.indirizzo.includes('Valesio') || room.indirizzo.includes('San Nicola') || room.indirizzo.includes('Università') || room.id.includes('bernardini');
    const isEcotekne = room.indirizzo.includes('Monteroni') || room.indirizzo.includes('Ecotekne');
    const isBrindisi = room.indirizzo.includes('Brindisi') || room.indirizzo.includes('Appia');

    // LECCE CENTRO (Poli Umanistici)
    if (isLecceCentro) {
        directions.push({
            luogo: 'Stazione FS Lecce / Centro',
            descrizione: `Per i poli umanistici (Studium 2000, Olivetani, Codacci Pisanelli, Bernardini):
1. **A piedi dal centro**: Tutto è raggiungibile in 10-15 minuti a piedi (zona Piazza Sant'Oronzo / Viale dell'Università / Città Vecchia).
2. **Bus SGM**: Linee 1, 2, 27 (fermata "Università" o "Santa Teresa").
3. **Bici / Monopattino**: Lecce è perfetta per muoversi su due ruote.
**NOTE**: ZTL nel centro storico – evita l'auto.`,
            mezziPubblici: ['A piedi', 'Bus SGM', 'Bici'],
            tempoStimato: '10-15 min',
            note: 'Lecce si gira benissimo a piedi o in bici.'
        });
    }
    // CAMPUS ECOTEKNE (Monteroni)
    else if (isEcotekne) {
        directions.push({
            luogo: 'Lecce Città / Stazione FS',
            descrizione: `Per Campus Ecotekne (Via per Monteroni):
1. **Bus SGM Linea 27** (o 27 Express) dalla stazione o dal centro → fermata interna "Ecotekne / Fiorini / Economia" (ogni 15-20 min).
2. **In auto**: Tangenziale Ovest Lecce → uscita "Monteroni / Università" (parcheggi gratuiti e immensi).
3. **Bici**: Pista ciclabile lungo la strada per Monteroni.
**NOTE**: Negli orari di punta (8:30 e 13:30) il bus 27 è preso d'assalto.`,
            mezziPubblici: ['Bus SGM 27', 'Auto'],
            tempoStimato: '20-30 min dal centro',
            note: 'Campus vasto e verde – auto consigliata se piove.'
        });
    }
    // BRINDISI - CITTADELLA DELLA RICERCA
    else if (isBrindisi) {
        directions.push({
            luogo: 'Stazione FS Brindisi / Centro',
            descrizione: `Per Cittadella della Ricerca (SS7 Appia):
1. **Bus STP Brindisi** (linee extraurbane per Mesagne / San Vito) → fermata "Cittadella della Ricerca".
2. **In auto**: SS7 Appia direzione Mesagne (parcheggio interno sconfinato).
**NOTE**: Sede isolata, auto o bus extraurbano consigliati.`,
            mezziPubblici: ['Bus STP', 'Auto'],
            tempoStimato: '15-20 min da Brindisi centro',
            note: 'Zona industriale/ricerca.'
        });
    }

    return directions;
};
