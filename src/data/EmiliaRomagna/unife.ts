import { StudyRoom, DirectionsFromLocation } from '../../types';
export const unifeRooms: StudyRoom[] = [
    // ============================================================
    // FERRARA - CENTRO STORICO (Zona Universitaria Umanistica)
    // ============================================================
    {
        id: 'unife_giurisprudenza',
        nome: 'Biblioteca di Giurisprudenza',
        edificio: 'Palazzo Trotti Mosti',
        piano: 0,
        postiDisponibili: 180,
        postiTotali: 250,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi Eduroam', '125.000 volumi', 'Fondo Antico', 'Sale Studio'],
        latitude: 44.8447,
        longitude: 11.6224,
        indirizzo: 'Corso Ercole I d\'Este 37, Ferrara',
        university: 'UniFe',
        occupancy_rate: 'Alto',
        notes: 'Biblioteca più grande dell\'Ateneo nel cinquecentesco Palazzo Trotti Mosti.',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'unife_economia',
        nome: 'Biblioteca di Economia',
        edificio: 'Palazzo Bevilacqua Costabili',
        piano: 0,
        postiDisponibili: 120,
        postiTotali: 180,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Postazioni ipovedenti', '4 piani', 'Palazzo storico'],
        latitude: 44.8338,
        longitude: 11.6190,
        indirizzo: 'Via Voltapaletto 11, Ferrara',
        university: 'UniFe',
        notes: 'Palazzo quattrocentesco restaurato.',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'unife_lettere_filosofia',
        nome: 'Biblioteca di Lettere e Filosofia "Amleto Bassi"',
        edificio: 'Palazzo Tassoni-Mirogli',
        piano: 0,
        postiDisponibili: 150,
        postiTotali: 200,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['WiFi', '150.000 volumi', 'Vinili e CD musica classica', 'DVD Cinema/Teatro'],
        latitude: 44.8315,
        longitude: 11.6250,
        indirizzo: 'Via Savonarola 27, Ferrara',
        university: 'UniFe',
        notes: 'Biblioteca umanistica con ricco patrimonio multimediale.',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'unife_ariostea',
        nome: 'Biblioteca Comunale Ariostea',
        edificio: 'Palazzo Paradiso',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 150,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi', '400.000 volumi', 'Sala Ariosto', 'Manoscritti rari'],
        latitude: 44.8338,
        longitude: 11.6208,
        indirizzo: 'Via delle Scienze 17, Ferrara',
        university: 'UniFe',
        occupancy_rate: 'Molto Alto',
        notes: 'Biblioteca comunale storica, molto usata da studenti UniFe.',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'unife_turchi_bagno',
        nome: 'Biblioteca Museo Piero Leonardi',
        edificio: 'Palazzo Turchi di Bagno',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 60,
        orarioApertura: '09:00',
        orarioChiusura: '13:00',
        servizi: ['WiFi', 'Geologia', 'Orto Botanico'],
        latitude: 44.8440,
        longitude: 11.6215,
        indirizzo: 'Corso Ercole I d\'Este 32, Ferrara',
        university: 'UniFe',
        notes: 'Biblioteca specializzata con orto botanico.',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'unife_dipartimento_umanistico',
        nome: 'Dipartimento Studi Umanistici - Sale Studio',
        edificio: 'Via Paradiso / Via delle Scienze',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Sale Gruppo', 'Studio Individuale'],
        latitude: 44.8340,
        longitude: 11.6215,
        indirizzo: 'Via Paradiso 12 / Via delle Scienze 41b, Ferrara',
        university: 'UniFe',
        notes: 'Spazi studio dipartimentali umanistici.',
        tags: ['Aula Studio', 'WiFi', '👥 Gruppi OK'],
    },
    {
        id: 'unife_polo_adelardi',
        nome: 'Polo degli Adelardi - Aule Studio',
        edificio: 'Via Adelardi',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Aule Studio', 'Zona Centrale'],
        latitude: 44.8345,
        longitude: 11.6230,
        indirizzo: 'Via Adelardi 33, Ferrara',
        university: 'UniFe',
        notes: 'Grande hub studio centrale.',
        tags: ['Aula Studio', 'Campus', 'WiFi'],
    },
    {
        id: 'unife_mortara',
        nome: 'Aula Studio Ex Convento Santa Maria Consolazione',
        edificio: 'Via Mortara',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 99,
        orarioApertura: '09:00',
        orarioChiusura: '22:00',
        servizi: ['WiFi', 'Ex Convento', 'Aperto weekend'],
        latitude: 44.8404,
        longitude: 11.6330,
        indirizzo: 'Via Mortara 94, Ferrara',
        university: 'UniFe',
        notes: 'Spazio esterno storico, aperto fino sera.',
        tags: ['Aula Studio', 'WiFi'],
    },
    // ============================================================
    // FERRARA - POLO SCIENTIFICO-TECNOLOGICO
    // ============================================================
    {
        id: 'unife_scientifico_tecnologica',
        nome: 'Biblioteca Scientifico-Tecnologica',
        edificio: 'Polo Scientifico-Tecnologico',
        piano: 0,
        postiDisponibili: 120,
        postiTotali: 160,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Ingegneria', 'Fisica', 'Chimica', 'Matematica'],
        latitude: 44.8214,
        longitude: 11.6281,
        indirizzo: 'Via Giuseppe Saragat 1, Ferrara',
        university: 'UniFe',
        occupancy_rate: 'Alto',
        notes: 'Biblioteca centrale per scienze e tecnologie.',
        tags: ['Biblioteca', 'Campus', 'WiFi'],
    },
    {
        id: 'unife_saragat_hub',
        nome: 'Hub Studio Polo Scientifico-Tecnologico',
        edificio: 'Via Saragat',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 112,
        orarioApertura: '08:00',
        orarioChiusura: '18:45',
        servizi: ['WiFi', 'Grande sala', 'Aria condizionata'],
        latitude: 44.8214,
        longitude: 11.6281,
        indirizzo: 'Via Saragat 1, Ferrara',
        university: 'UniFe',
        notes: 'Grande sala studio moderna.',
        tags: ['Aula Studio', 'Campus', 'WiFi', '❄️ Climatizzato'],
    },
    {
        id: 'unife_architettura',
        nome: 'Biblioteca di Architettura "Mario Zaffagnini"',
        edificio: 'Dipartimento Architettura',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 120,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Sale multiple', 'Progetti architettonici'],
        latitude: 44.8330,
        longitude: 11.6170,
        indirizzo: 'Via Quartieri 8, Ferrara',
        university: 'UniFe',
        notes: 'Biblioteca specializzata con sale studio.',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'unife_matematica',
        nome: 'Biblioteca di Matematica e Informatica',
        edificio: 'Via Machiavelli',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 156,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi', 'Sale studio', 'Informatica'],
        latitude: 44.8270,
        longitude: 11.6150,
        indirizzo: 'Via Machiavelli 30, Ferrara',
        university: 'UniFe',
        notes: 'Biblioteca e grandi sale studio.',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'unife_chimico_biologica',
        nome: 'Biblioteca Chimico-Biologica S.M. delle Grazie',
        edificio: 'Via Borsari / Via Fossato di Mortara',
        piano: 0,
        postiDisponibili: 120,
        postiTotali: 137,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Sale multiple', 'Biomedicina'],
        latitude: 44.8265,
        longitude: 11.6105,
        indirizzo: 'Via Borsari 46 / Piazzetta Sgarbi 2, Ferrara',
        university: 'UniFe',
        notes: 'Biblioteca e hub chimico-biomedico.',
        tags: ['Biblioteca', 'Medicina', 'WiFi'],
    },
    // ============================================================
    // FERRARA - POLO OSPEDALIERO CONA (Medicina)
    // ============================================================
    {
        id: 'unife_cona_salute',
        nome: 'Biblioteca Interaziendale di Scienze della Salute',
        edificio: 'Arcispedale Sant\'Anna - Polo Cona',
        piano: 1,
        postiDisponibili: 14,
        postiTotali: 14,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['WiFi', 'Biomedicina', 'Fondo Storico'],
        latitude: 44.8033,
        longitude: 11.6978,
        indirizzo: 'Via Aldo Moro 8, Cona (FE)',
        university: 'UniFe',
        notes: 'Sala lettura biomedica.',
        tags: ['Biblioteca', 'Medicina', 'WiFi'],
    },
    {
        id: 'unife_cona_hub',
        nome: 'Hub Didattico Cona - Sale Studio',
        edificio: 'Polo Cona',
        piano: 0,
        postiDisponibili: 300,
        postiTotali: 370,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['WiFi', 'Grandi sale', 'Medicina'],
        latitude: 44.8033,
        longitude: 11.6978,
        indirizzo: 'Via Aldo Moro 22, Cona (FE)',
        university: 'UniFe',
        notes: 'Grandi sale studio.',
        tags: ['Aula Studio', 'Campus', 'Medicina', 'WiFi'],
    },
    // ============================================================
    // ROVIGO - SEDE DISTACCATA GIURISPRUDENZA
    // ============================================================
    {
        id: 'unife_rovigo_angeli',
        nome: 'Biblioteca Giurisprudenza Rovigo',
        edificio: 'Palazzo Angeli',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 150,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi UniFe', 'Diritto UE', 'Palazzo Neoclassico'],
        latitude: 45.0703,
        longitude: 11.7897,
        indirizzo: 'Via Domenico Angeli 28 (Corso del Popolo 149), Rovigo',
        university: 'UniFe',
        occupancy_rate: 'Medio',
        notes: 'Sede principale Giurisprudenza Rovigo.',
        tags: ['Biblioteca', 'Campus', 'WiFi'],
    },
    {
        id: 'unife_rovigo_aule',
        nome: 'Aule Studio Palazzo Angeli e Cezza',
        edificio: 'Palazzo Angeli / Cezza',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Sale Gruppo', 'Fotocopie'],
        latitude: 45.0703,
        longitude: 11.7897,
        indirizzo: 'Corso del Popolo / Palazzo Cezza, Rovigo',
        university: 'UniFe',
        notes: 'Aule studio, incluse nuove a Palazzo Cezza.',
        tags: ['Aula Studio', 'Campus', 'WiFi', '👥 Gruppi OK', '🖨️ Stampa'],
    },
    // ============================================================
    // ALTRE SEDI
    // ============================================================
    {
        id: 'unife_pieve_cento',
        nome: 'Polo Formativo Pieve di Cento',
        edificio: 'Sede Distaccata',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 40,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Aule Didattiche'],
        latitude: 44.7200,
        longitude: 11.3050,
        indirizzo: 'Pieve di Cento (BO)',
        university: 'UniFe',
        notes: 'Polo minore. Verificare orari.',
        tags: ['Aula Studio', 'Campus', 'WiFi'],
    },
    {
        id: 'unife_darsena',
        nome: 'Spazio Studio Darsena City',
        edificio: 'Via Darsena',
        piano: 0,
        postiDisponibili: 70,
        postiTotali: 80,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Spazio moderno'],
        latitude: 44.8200,
        longitude: 11.6400,
        indirizzo: 'Via Darsena 73, Ferrara',
        university: 'UniFe',
        notes: 'Spazio esterno per studenti, zona Darsena.',
        tags: ['Aula Studio', 'WiFi'],
    },
];

export const getDirectionsUnife = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const isFerraraCentro = room.indirizzo.includes('Ferrara') && !room.indirizzo.includes('Cona') && !room.indirizzo.includes('Saragat') && !room.indirizzo.includes('Machiavelli') && !room.indirizzo.includes('Quartieri') && !room.indirizzo.includes('Borsari');
    const isPoloSaragat = room.indirizzo.includes('Saragat') || room.indirizzo.includes('Machiavelli') || room.indirizzo.includes('Quartieri') || room.indirizzo.includes('Borsari');
    const isCona = room.indirizzo.includes('Cona') || room.indirizzo.includes('Aldo Moro');
    const isRovigo = room.indirizzo.includes('Rovigo');
    const isPieveCento = room.indirizzo.includes('Pieve di Cento');
    const isDarsena = room.indirizzo.includes('Darsena');

    // FERRARA CENTRO STORICO (Umanistiche)
    if (isFerraraCentro) {
        directions.push({
            luogo: 'Stazione Ferrara / Bologna',
            descrizione: `Per il centro storico di Ferrara (Giurisprudenza, Economia, Lettere, Adelardi, Mortara):
1. **Dalla Stazione FS**: 10-20 min a piedi o bici verso centro/nord.
2. **In bici**: Ideale! Noleggio in stazione.
3. **Bus urbani**: Linee 1, 2, 7 (Corso Ercole I d'Este), 3/9 (Savonarola), 4/6 (Voltapaletto).
4. **Da Bologna**: Treno (30-40 min).
Il centro è compatto, ZTL, distanze brevi tra sedi.`,
            mezziPubblici: ['Treno', 'Bus 1-9', 'Bici'],
            tempoStimato: '10-20 min a piedi dalla stazione',
            note: 'Ferrara UNESCO, bici consigliata!'
        });
    }
    // POLO SCIENTIFICO-TECNOLOGICO (Saragat, Machiavelli, Architettura, Chimica)
    else if (isPoloSaragat) {
        directions.push({
            luogo: 'Stazione Ferrara / Centro',
            descrizione: `Per Polo Scientifico-Tecnologico (Via Saragat, Machiavelli, Quartieri, Borsari):
1. **Dalla Stazione FS**: Bus 1 o 9 (10-15 min) o bici (15 min).
2. **A piedi dalla stazione**: 30-40 min sud-est.
3. **Dal centro**: Bus 1, 9 o bici (20 min).
4. Ampio parcheggio auto.
Zona moderna con hub grandi.`,
            mezziPubblici: ['Bus 1, 9', 'Bici'],
            tempoStimato: '10-15 min bus dalla stazione',
            note: 'Polo principale per scienze, ingegneria, architettura. Facilmente raggiungibile.'
        });
    }
    // POLO CONA
    else if (isCona) {
        directions.push({
            luogo: 'Ferrara Centro / Bologna',
            descrizione: `Per Polo Cona (Medicina):
1. **Da Ferrara**: Bus 6 extraurbana (30 min) o treno Ferrara-Codigoro (fermata Cona Ospedale, 10 min).
2. **In auto**: Superstrada Ferrara-Mare (15 min).
3. **Da Bologna**: A13 uscita Ferrara Sud.
Parcheggi ampi.`,
            mezziPubblici: ['Treno Codigoro', 'Bus 6'],
            tempoStimato: '10-30 min da Ferrara',
            note: 'Ospedale moderno, grandi sale studio.'
        });
    }
    // ROVIGO
    else if (isRovigo) {
        directions.push({
            luogo: 'Ferrara / Venezia',
            descrizione: `Per Rovigo (Palazzo Angeli/Cezza):
1. **Da Ferrara**: Treno Regionale (30-35 min).
2. **Dalla Stazione Rovigo**: 10 min a piedi centro.
3. **Da Bologna**: Treno con cambio (1h+).
Sedi in centro storico.`,
            mezziPubblici: ['Treno Regionale'],
            tempoStimato: '30 min da Ferrara',
            note: 'Palazzo neoclassico prestigioso.'
        });
    }
    // PIEVE DI CENTO
    else if (isPieveCento) {
        directions.push({
            luogo: 'Bologna / Ferrara',
            descrizione: `Per Pieve di Cento:
1. **Da Bologna**: Treno Bologna-Verona (20 min) o auto (25 min).
2. **Da Ferrara**: Auto SS66 (30 min).
Polo piccolo al confine province.`,
            mezziPubblici: ['Treno Bologna-Verona'],
            tempoStimato: '25-30 min',
            note: 'Verificare orari apertura.'
        });
    }
    // DARSENA
    else if (isDarsena) {
        directions.push({
            luogo: 'Stazione Ferrara',
            descrizione: `Per Darsena City:
1. **Dalla Stazione**: Bus o bici (15 min est).
2. Zona riqualificata moderna.`,
            mezziPubblici: ['Bus', 'Bici'],
            tempoStimato: '15 min',
            note: 'Spazio studio alternativo.'
        });
    }

    return directions;
};
