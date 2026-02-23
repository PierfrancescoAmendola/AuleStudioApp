import { StudyRoom, DirectionsFromLocation } from '../../types';

export const unifgRooms: StudyRoom[] = [
    // ============================================================
    // FOGGIA - CENTRO STORICO (Polo Umanistico)
    // ============================================================
    {
        id: 'unifg_umanistica_arpi',
        nome: 'Biblioteca Area Umanistica',
        edificio: 'Dipartimento Studi Umanistici',
        piano: 1,
        postiDisponibili: 130,
        postiTotali: 160,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Soffitti a Volta', 'Silenzio', 'Centro Storico'],
        latitude: 41.4632,
        longitude: 15.5452,
        indirizzo: 'Via Arpi 176, Foggia',
        university: 'UniFg',
        occupancy_rate: 'Alto',
        tags: ['Biblioteca', 'Centro Storico', '🔇 Silenzio', '🏛️ Palazzi Storici', '🥖 Zona Focaccia'],
        notes: 'Ambiente storico affascinante con soffitti a volta. A due passi dai forni storici per la focaccia foggiana e il calzone con gli sponsali.'
    },
    {
        id: 'unifg_umanistica_chiostro',
        nome: 'Chiostro di Via Arpi (Outdoor & Social)',
        edificio: 'Dipartimento Studi Umanistici',
        piano: 0,
        postiDisponibili: 90,
        postiTotali: 110,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['Socialità', 'Pausa Caffè', 'Aperto Domenica'],
        latitude: 41.4632,
        longitude: 15.5452,
        indirizzo: 'Via Arpi 176, Foggia',
        university: 'UniFg',
        tags: ['Outdoor', 'Centro Storico', '☀️ All\'aperto', '💨 Esposto al Vento', '🥖 Zona Focaccia'],
        notes: 'Hub sociale umanisti. Attenzione al vento di Foggia — nelle giornate ventose meglio ripararsi all\'interno.'
    },
    // ============================================================
    // FOGGIA - SEMI-CENTRO (Economia e Giurisprudenza)
    // ============================================================
    {
        id: 'unifg_giurisprudenza_centrale',
        nome: 'Biblioteca Area Giuridica',
        edificio: 'Dipartimento Giurisprudenza',
        piano: 0,
        postiDisponibili: 160,
        postiTotali: 210,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Codici Aggiornati', 'Prese Elettriche', 'Aria Condizionata', 'Silenzio Assoluto'],
        latitude: 41.4582,
        longitude: 15.5512,
        indirizzo: 'Largo Papa Giovanni Paolo II 1, Foggia',
        university: 'UniFg',
        occupancy_rate: 'Altissimo',
        tags: ['Biblioteca', 'Semi-Centro', '🔇 Silenzio Tombale', '📊 Affollamento Alto', '🥖 Zona Focaccia'],
        notes: 'Severa e concentrata. Silenzio tombale richiesto. Quando è piena, la Magna Capitana è la prima alternativa.'
    },
    {
        id: 'unifg_economia_caggese',
        nome: 'Sale Lettura Economia',
        edificio: 'Sede Via Caggese',
        piano: 1,
        postiDisponibili: 110,
        postiTotali: 140,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['Lavoro di Gruppo', 'Macchinette'],
        latitude: 41.4565,
        longitude: 15.5532,
        indirizzo: 'Via Romolo Caggese 1, Foggia',
        university: 'UniFg',
        tags: ['Sala Lettura', 'Semi-Centro', '👥 Lavoro di Gruppo', '🥖 Zona Focaccia'],
        notes: 'Spazi dinamici per economisti. Più tollerante al chiacchiericcio — ideale per progetti di gruppo.'
    },
    // ============================================================
    // FOGGIA - HUB CITTADINO (La Magna Capitana)
    // ============================================================
    {
        id: 'fg_magna_capitana',
        nome: 'Biblioteca Provinciale "La Magna Capitana"',
        edificio: 'Polo Culturale',
        piano: 0,
        postiDisponibili: 420,
        postiTotali: 500,
        orarioApertura: '09:00',
        orarioChiusura: '19:15',
        servizi: ['Spazi Immensi', 'WiFi Pubblico', 'Area Verde', 'Prese Elettriche'],
        latitude: 41.4555,
        longitude: 15.5405,
        indirizzo: 'Viale Michelangelo 1, Foggia',
        university: 'UniFg',
        occupancy_rate: 'Altissimo',
        tags: ['Biblioteca Civica', 'Semi-Centro', '📚 Hub Alternativo', '🏛️ Centro Culturale Sud Italia'],
        notes: 'Hub cittadino usato al 90% da universitari quando il Campus è pieno. Uno dei centri culturali più grandi del Sud Italia — 500 posti!'
    },
    // ============================================================
    // FOGGIA PERIFERIA (Agraria, Medicina, Motorie)
    // ============================================================
    {
        id: 'unifg_agraria_dafne',
        nome: 'Biblioteca Scienze Agrarie (DAFNE)',
        edificio: 'Polo Scientifico Via Napoli',
        piano: 1,
        postiDisponibili: 160,
        postiTotali: 190,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['Luce Naturale', 'Lab Vicini', 'Aree Verdi', 'Parcheggio'],
        latitude: 41.4425,
        longitude: 15.5355,
        indirizzo: 'Via Napoli 25, Foggia',
        university: 'UniFg',
        tags: ['Biblioteca', 'Periferia', '🌿 Aree Verdi', '🌾 Eccellenza Agraria', '🅿️ Parcheggio'],
        notes: 'Polo agrario isolato e tranquillo. Adiacente a laboratori di analisi sensoriale e serre — il cuore del Tavoliere delle Puglie.'
    },
    {
        id: 'unifg_medicina_altomare',
        nome: 'Biblioteca Medica "Emanuele Altomare"',
        edificio: 'Policlinico Riuniti',
        piano: 0,
        postiDisponibili: 130,
        postiTotali: 160,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['Testi Clinici', 'Mensa Ospedale', 'Prese Elettriche'],
        latitude: 41.4402,
        longitude: 15.5382,
        indirizzo: 'Viale Luigi Pinto 1, Foggia',
        university: 'UniFg',
        tags: ['Biblioteca', 'Periferia', 'Medicina', '🏥 Policlinico'],
        notes: 'Dentro la cittadella ospedaliera. Perfetta per chi fa il tirocinio e vuole studiare tra un turno e l\'altro.'
    },
    {
        id: 'unifg_biomedico_nuovo',
        nome: 'Aule Studio Nuovo Polo Biomedico',
        edificio: 'Polo Biomedico',
        piano: 0,
        postiDisponibili: 170,
        postiTotali: 210,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Struttura Nuova', 'Parcheggio Ampio', 'Prese Elettriche', 'Aria Condizionata'],
        latitude: 41.4410,
        longitude: 15.5365,
        indirizzo: 'Via Napoli 20, Foggia',
        university: 'UniFg',
        tags: ['Aula Studio', 'Periferia', '🆕 Struttura Nuova', '⚡ Prese Funzionanti', '🅿️ Parcheggio'],
        notes: 'Spazi moderni per biologi e professioni sanitarie. Prese funzionanti ovunque — divide i flussi dal Policlinico e offre un\'alternativa nuova a pochi metri da Agraria.'
    },
    // ============================================================
    // POLI DISTACCATI
    // ============================================================
    {
        id: 'unifg_barletta_dimed',
        nome: 'Polo Biomedico Barletta',
        edificio: 'Polo Universitario',
        piano: 0,
        postiDisponibili: 90,
        postiTotali: 110,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Professioni Sanitarie', 'Stazione FS Vicina'],
        latitude: 41.3185,
        longitude: 16.2785,
        indirizzo: 'Piazza Umberto I, Barletta (BT)',
        university: 'UniFg - Barletta',
        tags: ['Polo Distaccato', 'Barletta', '🚂 Stazione FS Vicina'],
        notes: 'Hub vitale per la provincia BAT. Stazione ferroviaria di Barletta a pochi minuti — evita il viaggio fino a Foggia.'
    },
    {
        id: 'unifg_cerignola_agraria',
        nome: 'Polo di Cerignola',
        edificio: 'Sede Distaccata',
        piano: 0,
        postiDisponibili: 55,
        postiTotali: 70,
        orarioApertura: '08:30',
        orarioChiusura: '17:30',
        servizi: ['Scienze Agrarie'],
        latitude: 41.2655,
        longitude: 15.8985,
        indirizzo: 'Via San Leonardo, Cerignola (FG)',
        university: 'UniFg - Cerignola',
        tags: ['Polo Distaccato', 'Cerignola', '🌾 Agroalimentare'],
        notes: 'Focalizzato agroalimentare. Cuore del Tavoliere.'
    },
    {
        id: 'unifg_manfredonia_eco',
        nome: 'Polo di Manfredonia',
        edificio: 'Sede Economia/Turismo',
        piano: 1,
        postiDisponibili: 45,
        postiTotali: 60,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['Economia del Mare'],
        latitude: 41.6285,
        longitude: 15.9185,
        indirizzo: 'Via Dante Alighieri, Manfredonia (FG)',
        university: 'UniFg - Manfredonia',
        tags: ['Polo Distaccato', 'Manfredonia', '🌊 Costiero'],
        notes: 'Polo costiero sul Gargano. Economia del Mare e Turismo.'
    },
    {
        id: 'unifg_sansevero_sanitarie',
        nome: 'Polo di San Severo',
        edificio: 'Sede Territoriale',
        piano: 0,
        postiDisponibili: 55,
        postiTotali: 70,
        orarioApertura: '08:30',
        orarioChiusura: '17:30',
        servizi: ['Professioni Sanitarie'],
        latitude: 41.6855,
        longitude: 15.3805,
        indirizzo: 'Via Teresa Masselli, San Severo (FG)',
        university: 'UniFg - San Severo',
        tags: ['Polo Distaccato', 'San Severo'],
        notes: 'Avamposto Alto Tavoliere per professioni sanitarie.'
    }
];

export const getDirectionsUniFg = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const isCentroStorico = room.indirizzo.includes('Arpi');
    const isSemiCentro = room.indirizzo.includes('Papa Giovanni') || room.indirizzo.includes('Caggese') || room.id.includes('magna_capitana');
    const isPeriferia = room.indirizzo.includes('Napoli') || room.indirizzo.includes('Pinto');
    const isDistaccata = (room.university || '').includes('-');

    // CENTRO STORICO (Via Arpi)
    if (isCentroStorico) {
        directions.push({
            luogo: 'Stazione FS Foggia',
            descrizione: `Per Via Arpi (Polo Umanistico):
1. **Bus ATAF** dalla stazione (linee circolari o dirette centro).
2. **A piedi**: 20-25 min (attraversa la città).
**NOTE**: ZTL – evita l'auto in centro storico. Attenzione al vento nelle giornate di Maestrale!`,
            mezziPubblici: ['Bus ATAF', 'A piedi'],
            tempoStimato: '20-25 min',
            note: 'Zona pedonale affascinante.'
        });
    }
    // SEMI-CENTRO (Economia/Giurisprudenza/Magna Capitana)
    else if (isSemiCentro) {
        directions.push({
            luogo: 'Stazione FS Foggia',
            descrizione: `Per semi-centro (Caggese, Papa Giovanni, Magna Capitana):
1. **A piedi**: 10-15 min in piano da Viale 24 Maggio.
2. **Bus ATAF**: Linee centro (fermata Piazza Cavour o Michelangelo).
**NOTE**: Zona trafficata – parcheggi blu difficili. Se Giurisprudenza è piena, la Magna Capitana (500 posti!) è a 10 minuti a piedi.`,
            mezziPubblici: ['A piedi', 'Bus ATAF'],
            tempoStimato: '10-15 min',
            note: 'Hub cittadino vitale.'
        });
    }
    // PERIFERIA (Agraria/Medicina/Biomedico)
    else if (isPeriferia) {
        directions.push({
            luogo: 'Stazione FS / Terminal Bus',
            descrizione: `Per Via Napoli / Viale Pinto (Agraria, Medicina, Polo Biomedico):
1. **Bus ATAF** diretti Ospedale/Policlinico o Via Napoli.
2. **Auto**: Parcheggi ampi gratuiti in zona.
**NOTE**: Poli periferici, auto consigliata. Zona molto diversa dal centro — ampi spazi, serre, parcheggi.`,
            mezziPubblici: ['Bus ATAF', 'Auto'],
            tempoStimato: '15-20 min',
            note: 'Ampio parcheggio.'
        });
    }
    // DISTACCATI (Barletta, Cerignola, Manfredonia, San Severo)
    else if (isDistaccata) {
        const isBarletta = room.indirizzo.includes('Barletta');
        if (isBarletta) {
            directions.push({
                luogo: 'Stazione FS Barletta',
                descrizione: `Per Polo Biomedico Barletta:
1. **Treno Regionale**: Stazione FS di Barletta è a pochi minuti a piedi dal polo. Trenitalia e Ferrotramviaria (linea Bari-Barletta).
2. **Auto**: Parcheggio in Piazza Umberto I.
**NOTE**: Ottimo collegamento ferroviario — evita il viaggio fino a Foggia!`,
                mezziPubblici: ['Treno Regionale', 'Ferrotramviaria'],
                tempoStimato: '5-10 min dalla stazione',
                note: 'Hub BAT ben collegato.'
            });
        } else {
            directions.push({
                luogo: 'Stazioni Locali / Terminal',
                descrizione: `Per i poli distaccati (Cerignola, Manfredonia, San Severo):
1. **Treno Regionale** fino alla stazione locale.
2. **Bus extraurbani** (SITA/COTRAP) o auto.
**NOTE**: Piccoli poli, spesso raggiungibili a piedi dal centro città locale.`,
                mezziPubblici: ['Treno Regionale', 'Bus Extraurbano'],
                tempoStimato: 'Variabile',
                note: 'Ottimi per pendolari locali.'
            });
        }
    }

    return directions;
};
