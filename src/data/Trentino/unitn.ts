import { StudyRoom, DirectionsFromLocation } from '../../types';

export const unitnRooms: StudyRoom[] = [
    // ============================================================
    // SEDE TRENTO - CENTRO STORICO E QUARTIERE LE ALBERE
    // ============================================================
    {
        id: 'unitn_buc',
        nome: 'BUC - Biblioteca Universitaria Centrale',
        edificio: 'Quartiere Le Albere',
        piano: 0,
        postiDisponibili: 250,
        postiTotali: 420,
        orarioApertura: '08:00',
        orarioChiusura: '23:45',
        servizi: ['WiFi Eduroam', 'Prese elettriche', 'Aperta Domenica', 'Armadietti', 'Accessibile disabili'],
        latitude: 46.0632,
        longitude: 11.1145,
        indirizzo: 'Via Adalberto Libera 3, 38122 Trento',
        university: 'UniTrento',
        occupancy_rate: 'Molto Alto',
        extendedHours: true,
        vibe: 'Moderna / Focus',
        notes: 'Disegnata da Renzo Piano. Biblioteca principale per Economia, Giurisprudenza, Lettere e Sociologia. La domenica apre alle 14:00.',
        tags: ['Biblioteca', 'WiFi', 'Orario Esteso', 'Domenica', 'Prese'],
    },
    {
        id: 'unitn_cavazzani',
        nome: 'Sala Studio ex Cavazzani',
        edificio: 'Palazzo ex Cavazzani',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 100,
        orarioApertura: '08:00',
        orarioChiusura: '19:45',
        servizi: ['WiFi Eduroam', 'Silenzio', 'Prese elettriche'],
        latitude: 46.0664,
        longitude: 11.1189,
        indirizzo: 'Via Verdi 8, 38122 Trento',
        university: 'UniTrento',
        occupancy_rate: 'Alto',
        extendedHours: false,
        vibe: 'Tradizionale / Silenziosa',
        notes: 'Situata nel cuore del polo umanistico/sociale di Via Verdi.',
        tags: ['Aula Studio', 'Centro', 'Silenzio'],
    },
    {
        id: 'unitn_lettere',
        nome: 'Aule Studio Lettere e Filosofia',
        edificio: 'Dipartimento di Lettere',
        piano: 1,
        postiDisponibili: 80,
        postiTotali: 150,
        orarioApertura: '07:40',
        orarioChiusura: '22:00',
        servizi: ['WiFi Eduroam', 'PC fissi', 'Aree ristoro', 'Distributori'],
        latitude: 46.0681,
        longitude: 11.1172,
        indirizzo: 'Via Tommaso Gar 14, 38122 Trento',
        university: 'UniTrento',
        occupancy_rate: 'Medio',
        extendedHours: true,
        vibe: 'Umanistica / Dinamica',
        notes: 'Spazi studio dislocati ai vari piani. Venerdì chiusura alle 20:00. Sabato 07:40 - 12:30.',
        tags: ['Aule', 'Lettere', 'WiFi', 'Macchinette'],
    },
    {
        id: 'unitn_sociologia',
        nome: 'Aule Studio Sociologia',
        edificio: 'Dipartimento di Sociologia e Ricerca Sociale',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 80,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi Eduroam', 'Lavori di gruppo', 'Spazi aperti'],
        latitude: 46.0658,
        longitude: 11.1202,
        indirizzo: 'Via Verdi 26, 38122 Trento',
        university: 'UniTrento',
        occupancy_rate: 'Alto',
        extendedHours: false,
        vibe: 'Social Hub',
        notes: 'Sede storica del primo dipartimento di Sociologia in Italia. Molti spazi per studio di gruppo informale.',
        tags: ['Gruppi OK', 'Sociologia', 'Centro'],
    },
    {
        id: 'unitn_giurisprudenza',
        nome: 'Aule Studio Giurisprudenza',
        edificio: 'Palazzo di Giurisprudenza',
        piano: 0,
        postiDisponibili: 70,
        postiTotali: 120,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi Eduroam', 'Prese elettriche', 'Giardino interno'],
        latitude: 46.0675,
        longitude: 11.1180,
        indirizzo: 'Via Antonio Rosmini 27, 38122 Trento',
        university: 'UniTrento',
        occupancy_rate: 'Medio',
        extendedHours: false,
        vibe: 'Elegante / Focus',
        notes: 'Edificio storico vicino al Duomo. Presenza di chiostri interni sfruttabili in primavera.',
        tags: ['Aule', 'Giurisprudenza', 'Silenzio'],
    },
    // ============================================================
    // SEDE TRENTO - COLLINA EST (MESIANO E POVO)
    // ============================================================
    {
        id: 'unitn_bum',
        nome: 'BUM - Biblioteca Universitaria Mesiano',
        edificio: 'Polo Ingegneria',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 160,
        orarioApertura: '08:00',
        orarioChiusura: '21:45',
        servizi: ['WiFi Eduroam', 'Prese elettriche', 'Vista Panoramica', 'Fondi Ingegneria'],
        latitude: 46.0685,
        longitude: 11.1352,
        indirizzo: 'Via Mesiano 77, 38123 Trento',
        university: 'UniTrento',
        occupancy_rate: 'Alto',
        extendedHours: true,
        vibe: 'Ingegneristica / Panoramica',
        notes: 'Sita sulla collina di Trento. Il venerdì chiude alle 19:45.',
        tags: ['Biblioteca', 'Ingegneria', 'Panoramica', 'WiFi'],
    },
    {
        id: 'unitn_bup',
        nome: 'BUP - Biblioteca Universitaria Povo',
        edificio: 'Polo Scientifico e Tecnologico Fabio Ferrari',
        piano: -1,
        postiDisponibili: 150,
        postiTotali: 200,
        orarioApertura: '08:00',
        orarioChiusura: '21:45',
        servizi: ['WiFi Eduroam', 'Prese elettriche', 'Sale studio di gruppo', 'Area ristoro'],
        latitude: 46.0671,
        longitude: 11.1504,
        indirizzo: 'Via Sommarive 5, 38123 Povo (TN)',
        university: 'UniTrento',
        occupancy_rate: 'Medio',
        extendedHours: true,
        vibe: 'Tech / Scientifica',
        notes: 'Polo per Informatica, Matematica, Fisica e CIBIO. Struttura modernissima. Il venerdì chiude alle 17:45.',
        tags: ['Biblioteca', 'Scienze', 'Gruppi OK', 'WiFi'],
    },
    // ============================================================
    // SEDE ROVERETO - SCIENZE COGNITIVE E NEUROSCIENZE
    // ============================================================
    {
        id: 'unitn_bur',
        nome: 'BUR - Biblioteca Universitaria Rovereto',
        edificio: 'Palazzo Istruzione',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 130,
        orarioApertura: '08:30',
        orarioChiusura: '18:45',
        servizi: ['WiFi Eduroam', 'Psicologia', 'Neuroscienze', 'Accesso disabili'],
        latitude: 45.8945,
        longitude: 11.0450,
        indirizzo: 'Corso Bettini 43, 38068 Rovereto (TN)',
        university: 'UniTrento',
        occupancy_rate: 'Medio',
        extendedHours: false,
        vibe: 'Tranquilla / Ricerca',
        notes: 'Biblioteca centrale del Polo di Rovereto (Dipartimento di Psicologia e CIMeC).',
        tags: ['Biblioteca', 'Rovereto', 'Psicologia', 'WiFi'],
    },
    {
        id: 'unitn_rovereto_fedrigotti',
        nome: 'Aule Studio Palazzo Fedrigotti',
        edificio: 'Palazzo Fedrigotti',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 60,
        orarioApertura: '08:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Prese', 'Macchinette'],
        latitude: 45.8951,
        longitude: 11.0425,
        indirizzo: 'Corso Bettini 31, 38068 Rovereto (TN)',
        university: 'UniTrento',
        occupancy_rate: 'Basso',
        extendedHours: false,
        vibe: 'Storica / Silenziosa',
        notes: 'Sale studio in uno dei palazzi storici che ospitano i dipartimenti universitari a Rovereto.',
        tags: ['Aula Studio', 'Rovereto', 'Storico'],
    },
    // ============================================================
    // STUDENTATI E AREE H24
    // ============================================================
    {
        id: 'unitn_san_bartolameo',
        nome: 'Sale Studio Studentato San Bartolameo',
        edificio: 'Campus San Bartolameo (Opera Universitaria)',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 80,
        orarioApertura: '00:00',
        orarioChiusura: '23:59',
        servizi: ['WiFi Eduroam', 'Aperto H24', 'Mensa vicina', 'Parcheggio bici'],
        latitude: 46.0487,
        longitude: 11.1278,
        indirizzo: 'Via della Malpensada 140, 38122 Trento',
        university: 'UniTrento',
        occupancy_rate: 'Medio',
        extendedHours: true,
        vibe: 'Campus / Residenziale',
        notes: 'Area di studio dello studentato. Fortemente consigliata per chi cerca spazi la sera tardi o nei weekend.',
        tags: ['H24', 'Opera Universitaria', 'Campus', 'WiFi'],
    }
];

export const getDirectionsUnitn = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const isRovereto = room.indirizzo.includes('Rovereto');
    const isPovo = room.indirizzo.includes('Povo') || room.id.includes('bup');
    const isMesiano = room.indirizzo.includes('Mesiano');
    const isBuc = room.id === 'unitn_buc';
    const isCentroTrento = room.indirizzo.includes('Verdi') || room.indirizzo.includes('Gar') || room.indirizzo.includes('Rosmini');
    const isSanBartolameo = room.indirizzo.includes('Malpensada');

    if (isRovereto) {
        directions.push({
            luogo: 'Stazione Ferroviaria Rovereto',
            descrizione: 'Dalla Stazione di Rovereto, procedi a piedi verso nord-est in direzione di Corso Bettini. I palazzi universitari distano circa 10-15 minuti di camminata attraversando il centro storico. In alternativa, puoi usare gli autobus urbani (Linee 1 o 2).',
            mezziPubblici: ['A piedi', 'Bus 1, 2'],
            tempoStimato: '15 min a piedi',
            note: 'Rovereto è facilmente girabile a piedi o in bici.'
        });
    } else if (isPovo) {
        directions.push({
            luogo: 'Stazione Ferroviaria Trento',
            descrizione: 'Dal piazzale della Stazione di Trento o da Piazza Dante, prendi il Bus 5 in direzione Povo. Scendi alla fermata "Povo Polo Scientifico". La corsa dura circa 15-20 minuti, con notevole dislivello. In alternativa, è disponibile anche la Linea 13.',
            mezziPubblici: ['Bus 5', 'Bus 13'],
            tempoStimato: '20 min',
            note: 'Gli autobus 5 sono molto affollati la mattina prima delle 8:30.'
        });
    } else if (isMesiano) {
        directions.push({
            luogo: 'Stazione Ferroviaria Trento / Centro',
            descrizione: 'Dalla Stazione di Trento, prendi il Bus 5. Scendi alla fermata "Mesiano Dipartimento Ingegneria" a ridosso del campus. Il campus è a metà collina prima di arrivare a Povo.',
            mezziPubblici: ['Bus 5'],
            tempoStimato: '15 min',
            note: 'La salita a piedi per Mesiano da Piazza Venezia è percorribile ma molto ripida.'
        });
    } else if (isBuc) {
        directions.push({
            luogo: 'Stazione Ferroviaria Trento',
            descrizione: 'Dalla Stazione procedi verso sud lungo il fiume Adige, sottopassando la ferrovia verso il nuovo Quartiere Le Albere, progettato da Renzo Piano. In alternativa Bus NP.',
            mezziPubblici: ['A piedi', 'Bus NP'],
            tempoStimato: '15 min a piedi',
            note: 'La BUC si trova nel polo Muse ed è un punto di riferimento architettonico.'
        });
    } else if (isCentroTrento) {
        directions.push({
            luogo: 'Stazione Ferroviaria Trento',
            descrizione: 'Le sedi del centro (Sociologia, Lettere, Giurisprudenza e Palazzo Cavazzani) si trovano tutte a breve distanza l\'una dall\'altra in centro storico (zona Duomo/Via Rosmini).',
            mezziPubblici: ['A piedi'],
            tempoStimato: '5-10 min a piedi',
            note: 'La zona è interamente pedonale o ZTL.'
        });
    } else if (isSanBartolameo) {
        directions.push({
            luogo: 'Centro Trento / Stazione',
            descrizione: 'Prendi la linea 3, 8 o 13 in direzione Trento Sud e scendi alla fermata di Viale Verona/San Bartolameo. Altrimenti, in bicicletta, sfrutta le piste ciclabili verso Trento Sud.',
            mezziPubblici: ['Bus 3, 8, 13', 'Bicicletta'],
            tempoStimato: '15 min bus / 10 min bici',
        });
    }

    // Navigazione autostradale / arrivo in auto generico
    if (!isRovereto) {
        directions.push({
            luogo: 'Casello A22 Trento (Centro/Nord)',
            descrizione: 'Uscita consigliata Trento Centro o Trento Sud a seconda della destinazione. Per Mesiano/Povo, seguire tangenziale con uscita Povo/Mesiano (SS47) ed evitate di attraversare il centro. Per la BUC parcheggio disponibile a pagamento alle Albere (Interrato).',
            mezziPubblici: ['Auto'],
            tempoStimato: 'Variabile',
            note: 'Trento ha una ZTL molto rigida in centro.'
        });
    }

    return directions;
};
