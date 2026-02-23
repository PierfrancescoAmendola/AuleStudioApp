import { StudyRoom, DirectionsFromLocation } from '../../types';
export const unimoreRooms: StudyRoom[] = [
    // ============================================================
    // MODENA - CAMPUS SCIENTIFICO E INGEGNERIA (Via Campi / Vivarelli)
    // ============================================================
    {
        id: 'unimore_bsi',
        nome: 'Biblioteca Scientifica Interdipartimentale (BSI)',
        edificio: 'Campus Via Campi',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 100,
        orarioApertura: '08:45',
        orarioChiusura: '17:30',
        servizi: ['WiFi Eduroam', 'Aula 100 Posti', 'Sale Studio Gruppo', 'Orto Botanico'],
        latitude: 44.6309,
        longitude: 10.9382,
        indirizzo: 'Via Giuseppe Campi 213/C, Modena',
        university: 'UniMoRe',
        occupancy_rate: 'Alto',
        notes: 'Biblioteca scientifica principale. Include Orto Botanico e Aula 100 Posti (accesso libero).',
        tags: ['Biblioteca', 'Campus', 'WiFi', '👥 Gruppi OK'],
    },
    {
        id: 'unimore_bsi_aula100',
        nome: 'Aula Studio "100 Posti" (BSI)',
        edificio: 'Campus Via Campi',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 100,
        orarioApertura: '08:45',
        orarioChiusura: '17:30',
        servizi: ['WiFi', 'Accesso libero', 'Silenzio', 'Prenotazione non necessaria'],
        latitude: 44.6309,
        longitude: 10.9382,
        indirizzo: 'Via Giuseppe Campi 213/C, Modena',
        university: 'UniMoRe',
        notes: 'Spazio studio iconico nella BSI, aperto anche weekend in periodi esame (verificare).',
        tags: ['Aula Studio', 'Campus', 'WiFi', '❄️ Climatizzato', '🔇 Silenzio'],
    },
    {
        id: 'unimore_ingegneria',
        nome: 'Biblioteca di Ingegneria "Enzo Ferrari" (BUST)',
        edificio: 'Dipartimento di Ingegneria Enzo Ferrari',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 120,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['WiFi', '2 Sale Studio Gruppo', 'Tavoli da 4-6', 'Lavagna', 'Prese Ethernet'],
        latitude: 44.6278,
        longitude: 10.9415,
        indirizzo: 'Via Pietro Vivarelli 10, Modena',
        university: 'UniMoRe',
        occupancy_rate: 'Alto',
        notes: 'Biblioteca con salette per studio di gruppo (si può parlare). Prenotazione sale online.',
        tags: ['Biblioteca', 'WiFi', '👥 Gruppi OK'],
    },
    {
        id: 'unimore_ingegneria_salegroup',
        nome: 'Salette Studio di Gruppo Ingegneria',
        edificio: 'MO.ENZO Vivarelli',
        piano: 0,
        postiDisponibili: 20,
        postiTotali: 24,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Prenotazione obbligatoria', 'Lavagne', 'Parlare consentito'],
        latitude: 44.6278,
        longitude: 10.9415,
        indirizzo: 'Via Pietro Vivarelli 10, Modena',
        university: 'UniMoRe',
        notes: '2 salette dedicate (Sala 1 accesso libero, Sala 2 prenotabile). Ideali per lavori di gruppo.',
        tags: ['Aula Studio', 'WiFi'],
    },
    // ============================================================
    // MODENA - AREA CENTRO / FORO BOARIO
    // ============================================================
    {
        id: 'unimore_economia',
        nome: 'Biblioteca di Economia "Sebastiano Brusco"',
        edificio: 'Foro Boario',
        piano: 0,
        postiDisponibili: 120,
        postiTotali: 180,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Consultazione', 'Silenzio', 'Box Informatici'],
        latitude: 44.6422,
        longitude: 10.9218,
        indirizzo: 'Viale Jacopo Berengario 51 (Foro Boario), Modena',
        university: 'UniMoRe',
        occupancy_rate: 'Medio',
        notes: 'Biblioteca specializzata in economia e management.',
        tags: ['Biblioteca', 'WiFi', '🔇 Silenzio'],
    },
    {
        id: 'unimore_giuridica',
        nome: 'Biblioteca Universitaria Giuridica',
        edificio: 'Complesso Universitario',
        piano: 0,
        postiDisponibili: 150,
        postiTotali: 200,
        orarioApertura: '09:00',
        orarioChiusura: '21:00',  // Esteso in periodi esame
        servizi: ['WiFi', '90.000 volumi', 'Fondo Antico', 'Consultazione'],
        latitude: 44.6460,
        longitude: 10.9250,
        indirizzo: 'Via Camatta 16 / Area Centro, Modena',
        university: 'UniMoRe',
        notes: 'Biblioteca giuridica con orario esteso (fino 21:00 in alcuni periodi).',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'unimore_umanistica',
        nome: 'Biblioteca Umanistica',
        edificio: 'Largo Sant\'Eufemia',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 150,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Box Informatici', 'Fotocopie', 'Corsi Formazione'],
        latitude: 44.6460,
        longitude: 10.9245,
        indirizzo: 'Largo Sant\'Eufemia 19, Modena',
        university: 'UniMoRe',
        notes: 'Biblioteca per lettere, filosofia, lingue e beni culturali.',
        tags: ['Biblioteca', 'WiFi', '🖨️ Stampa'],
    },
    // ============================================================
    // MODENA - POLICLINICO (Area Medica)
    // ============================================================
    {
        id: 'unimore_medica',
        nome: 'Biblioteca Universitaria Medica',
        edificio: 'Policlinico di Modena',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '08:45',
        orarioChiusura: '17:30',
        servizi: ['WiFi', 'Aula Studio Prenotabile', 'Biomedicina', 'Riviste Scientifiche'],
        latitude: 44.6330,
        longitude: 10.9385,
        indirizzo: 'Largo del Pozzo 71, Modena',
        university: 'UniMoRe',
        notes: 'Biblioteca medica con aula studio prenotabile online. Vicino al Policlinico.',
        tags: ['Biblioteca', 'Medicina', 'WiFi'],
    },
    // ============================================================
    // MODENA - BIBLIOTECHE STORICHE E COMUNALI
    // ============================================================
    {
        id: 'modena_estense',
        nome: 'Biblioteca Estense Universitaria',
        edificio: 'Palazzo dei Musei',
        piano: 2,
        postiDisponibili: 20,
        postiTotali: 25,
        orarioApertura: '08:30',
        orarioChiusura: '19:15',
        servizi: ['WiFi', '500.000 volumi', 'Bibbia di Borso d\'Este', 'Manoscritti Medievali'],
        latitude: 44.6478,
        longitude: 10.9238,
        indirizzo: 'Largo Porta Sant\'Agostino 337, Modena',
        university: 'UniMoRe',
        occupancy_rate: 'Basso',
        notes: 'Biblioteca storica UNESCO con manoscritti rari.',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'modena_delfini',
        nome: 'Biblioteca Comunale Delfini',
        edificio: 'Palazzo Santa Margherita',
        piano: 0,
        postiDisponibili: 150,
        postiTotali: 200,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'PC Pubblici', 'Sala Lettura', 'Emeroteca'],
        latitude: 44.6458,
        longitude: 10.9265,
        indirizzo: 'Corso Canalgrande 103, Modena',
        university: 'UniMoRe',
        occupancy_rate: 'Alto',
        notes: 'Biblioteca comunale principale, molto frequentata dagli studenti.',
        tags: ['Biblioteca', 'WiFi'],
    },
    // ============================================================
    // REGGIO EMILIA - SEDE UNIVERSITARIA
    // ============================================================
    {
        id: 'unimore_reggio',
        nome: 'Biblioteca Universitaria Interdipartimentale di Reggio Emilia',
        edificio: 'Campus Viale Allegri',
        piano: 0,
        postiDisponibili: 200,
        postiTotali: 300,
        orarioApertura: '09:00',
        orarioChiusura: '20:30',
        servizi: ['WiFi UniMoRe', 'Orario serale 20:30', 'Autoprestito', 'Badge QRcode App'],
        latitude: 44.7024,
        longitude: 10.6294,
        indirizzo: 'Viale Antonio Allegri 9, Reggio Emilia',
        university: 'UniMoRe',
        occupancy_rate: 'Medio',
        notes: 'Biblioteca principale Reggio, aperta fino alle 20:30.',
        tags: ['Biblioteca', 'Campus', 'WiFi'],
    },
    {
        id: 'unimore_reggio_desu',
        nome: 'Spazi Studio Dipartimento Educazione e Scienze Umane (DESU)',
        edificio: 'Palazzo Dossetti / Viale Timavo',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 150,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Laboratori', 'Aule multimediali'],
        latitude: 44.7125,
        longitude: 10.6120,
        indirizzo: 'Viale Antonio Timavo 93, Reggio Emilia',
        university: 'UniMoRe',
        notes: 'Spazi studio e laboratori per Educazione e Scienze Umane (aggiunta per completezza).',
        tags: ['Aula Studio', 'WiFi'],
    },
    {
        id: 'unimore_reggio_tecnopolo',
        nome: 'Aule Studio Tecnopolo Reggio Emilia (Ex Officine Reggiane)',
        edificio: 'Parco dell\'Innovazione',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Aule Informatiche', 'Laboratori', 'Capannone 19 e 15/C'],
        latitude: 44.7055,
        longitude: 10.6420,
        indirizzo: 'Piazzale Europa 1, Reggio Emilia',
        university: 'UniMoRe',
        notes: 'Tecnopolo moderno nel recupero industriale.',
        tags: ['Aula Studio', 'Campus', 'WiFi'],
    },
    // ============================================================
    // CARPI - TECNOPOLO
    // ============================================================
    {
        id: 'unimore_carpi_tecnopolo',
        nome: 'Tecnopolo di Carpi - Spazi Studio e Coworking',
        edificio: 'Tecnopolo Carpi',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Nearly Zero Energy Building', 'Sale Gruppo', 'Laboratori'],
        latitude: 44.7830,
        longitude: 10.8845,
        indirizzo: 'Via Corbolani 1/A, Carpi (MO)',
        university: 'UniMoRe',
        occupancy_rate: 'Basso',
        notes: 'Edificio moderno a energia quasi zero per Ingegneria Sostenibile.',
        tags: ['Aula Studio', 'Campus', 'WiFi', '👥 Gruppi OK'],
    },
];

export const getDirectionsUnimore = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const isModenaCampusCampi = room.indirizzo.includes('Campi') ||
        room.indirizzo.includes('Vivarelli') ||
        room.indirizzo.includes('Pozzo');

    const isModenaCentro = room.indirizzo.includes('Sant\'Eufemia') ||
        room.indirizzo.includes('Sant\'Agostino') ||
        room.indirizzo.includes('Canalgrande') ||
        room.indirizzo.includes('San Carlo') ||
        room.indirizzo.includes('Poletti');

    const isModenaForoBoario = room.indirizzo.includes('Berengario') ||
        room.indirizzo.includes('Foro Boario');

    const isModenaSanPaolo = room.indirizzo.includes('Camatta') ||
        room.indirizzo.includes('San Paolo');

    const isModenaQuartieri = room.indirizzo.includes('Pucci') ||
        room.indirizzo.includes('Curie') ||
        room.indirizzo.includes('Casalegno');

    const isModenaVignolese = room.indirizzo.includes('Vignolese');

    const isReggioAllegri = room.indirizzo.includes('Allegri');
    const isReggioTecnopolo = room.indirizzo.includes('Europa') || room.indirizzo.includes('Reggiane');
    const isReggioTimavo = room.indirizzo.includes('Timavo');

    const isCarpi = room.indirizzo.includes('Carpi') || room.indirizzo.includes('Corbolani');

    // MODENA - CAMPUS SCIENTIFICO / INGEGNERIA / POLICLINICO (Via Campi, Vivarelli, Largo del Pozzo)
    if (isModenaCampusCampi) {
        directions.push({
            luogo: 'Stazione Modena / Centro Storico',
            descrizione: `Per il Campus Scientifico e Ingegneria (Via Campi / Vivarelli / Policlinico):
1. **Autobus dalla Stazione Modena** (Piazza Manzoni):
   - Linea **7** (direzione Cognento/Sant'Anna) → fermata "Campus" o "Vivarelli" (ogni 10-15 min, 15-20 min viaggio)
2. **In bici** (consigliatissima): 15 minuti dalla stazione.
3. **Dal Centro Storico** (Duomo): Bus 7 (15 min) o bici (10 min).
**NOTA**: Il Campus è compatto. Policlinico è a 10 min a piedi dal Campus.`,
            mezziPubblici: ['Bus 7 (principale), 11', 'Bici MiMuovo'],
            tempoStimato: '15-20 min bus / 15 min bici',
            note: 'Area universitaria scientifica moderna.'
        });
    }
    // MODENA - CENTRO STORICO (Estense, Delfini, Sant'Eufemia, San Carlo)
    else if (isModenaCentro) {
        directions.push({
            luogo: 'Stazione Modena',
            descrizione: `Per il Centro Storico:
1. **A piedi dalla Stazione**: 10-15 minuti. Percorso: Via Crispi → Corso Vittorio Emanuele II.
2. **Autobus**: Linee 1, 4, 7, 11 (fermata "Duomo").
3. **In bici**: 5-7 minuti.`,
            mezziPubblici: ['Bus 1, 4, 7, 11', 'Bici'],
            tempoStimato: '10-15 min a piedi',
            note: 'Centro storico ZTL. Tutte le sedi sono vicine tra loro.'
        });
    }
    // MODENA - FORO BOARIO (Economia)
    else if (isModenaForoBoario) {
        directions.push({
            luogo: 'Stazione Modena / Centro',
            descrizione: `Per il Foro Boario (Economia):
1. **A piedi dalla Stazione**: 10-12 minuti. Percorso: Via Emilia Est → Viale Berengario.
2. **Autobus**: Linea 7 o 11 (fermata "Foro Boario").
3. **Dal Duomo**: 5 minuti a piedi verso est.`,
            mezziPubblici: ['Bus 7, 11'],
            tempoStimato: '10-12 min a piedi',
            note: 'Complesso storico riqualificato.'
        });
    }
    // MODENA - COMPLESSO SAN PAOLO (Giurisprudenza)
    else if (isModenaSanPaolo) {
        directions.push({
            luogo: 'Stazione Modena / Centro',
            descrizione: `Per il Complesso San Paolo (Giurisprudenza):
1. **A piedi dalla Stazione**: 12-15 minuti.
2. **Autobus**: Linea 7 o 11 (fermata "Università").
3. **Dal Duomo**: 8 minuti a piedi.`,
            mezziPubblici: ['Bus 7, 11'],
            tempoStimato: '12-15 min a piedi',
            note: 'Sede storica prestigiosa.'
        });
    }
    // REGGIO EMILIA - VIALE ALLEGRI
    else if (isReggioAllegri) {
        directions.push({
            luogo: 'Modena / Stazione Reggio Emilia',
            descrizione: `Per Viale Allegri (Biblioteca Reggio):
1. **Da Modena**: Treno Regionale (20 min).
2. **Dalla Stazione RE**:
   - A piedi: 15-20 min verso il centro.
   - Bus: Linea 1, 5, 6 (fermata "Viale Allegri").
**NOTA**: Biblioteca aperta fino alle 20:30!`,
            mezziPubblici: ['Treno', 'Bus 1, 5, 6'],
            tempoStimato: '30 min totale da Modena',
            note: 'Campus centrale di Reggio.'
        });
    }
    // REGGIO EMILIA - TECNOPOLO (Ex Officine Reggiane)
    else if (isReggioTecnopolo) {
        directions.push({
            luogo: 'Stazione Reggio Emilia (Centrale)',
            descrizione: `Per il Tecnopolo (Ex Officine Reggiane / Piazzale Europa):
1. **Dalla Stazione FS**: Esci sul lato **Piazzale Europa** (sottopasso). Il Tecnopolo è a 5 minuti a piedi.
2. **In auto**: Parcheggio Piazzale Europa (gratuito).
3. **Dal Centro**: Attraversa il sottopasso ferroviario della stazione.`,
            mezziPubblici: ['Treno', 'A piedi'],
            tempoStimato: '5 min a piedi dalla stazione',
            note: 'Sede modernissima a ridosso della stazione centrale.'
        });
    }
    // CARPI - TECNOPOLO
    else if (isCarpi) {
        directions.push({
            luogo: 'Modena / Stazione Carpi',
            descrizione: `Per Tecnopolo Carpi:
1. **Da Modena**: Treno Regionale (10-15 min).
2. **Dalla Stazione Carpi**: 8-10 minuti a piedi (Parco Oltreferrovia).
**NOTA**: Il Tecnopolo è vicinissimo alla stazione!`,
            mezziPubblici: ['Treno Regionale'],
            tempoStimato: '20-25 min totale da Modena',
            note: 'Polo di Ingegneria Sostenibile.'
        });
    }

    return directions;
};
