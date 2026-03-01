import { StudyRoom, DirectionsFromLocation } from '../../types';

// Database completo delle aule studio Vanvitelli con posizioni reali

export const studyRoomsData: StudyRoom[] = [
    // ============================================================
    // AVERSA - INGEGNERIA E ARCHITETTURA
    // ============================================================
    {
        id: 'vanvi_aversa_annunziata',
        nome: 'Polo Ingegneria - Real Casa dell\'Annunziata',
        edificio: 'Real Casa dell\'Annunziata',
        piano: 2,
        postiDisponibili: 30,
        postiTotali: 36,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Prese elettriche', 'Silenzio richiesto', 'Climatizzazione', 'Storico'],
        latitude: 40.9768,
        longitude: 14.2054,
        indirizzo: 'Via Roma 29, Aversa (CE)',
        university: 'Vanvitelli',
        tags: ['ingegneria', 'storico', 'XIV secolo', 'angioino'],
        vibe: 'Storico e solenne',
        occupancy_rate: 'Alto',
        notes: 'Edificio storico del XIV secolo, voluto dagli Angioini. Sede del Dipartimento di Ingegneria. Atmosfera suggestiva.'
    },
    {
        id: 'vanvi_aversa_aulario',
        nome: 'Sala Studio Aulario Ingegneria',
        edificio: 'Aulario Dipartimento di Ingegneria',
        piano: 0,
        postiDisponibili: 180,
        postiTotali: 228,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi Eduroam', 'Prese elettriche', 'Aria Condizionata', 'Accesso Disabili', 'Distributori', 'Grande'],
        latitude: 40.9675,
        longitude: 14.2132,
        indirizzo: 'Viale Michelangelo, Aversa (CE)',
        university: 'Vanvitelli',
        tags: ['ingegneria', 'moderno', 'grande', 'aulario'],
        vibe: 'Moderno e funzionale',
        occupancy_rate: 'Molto Alto',
        notes: 'Aulario moderno con 228 posti. Il più grande spazio studio del polo di Aversa. Sede della Scuderia Vanvitelli (Formula Student).'
    },
    {
        id: 'vanvi_aversa_architettura',
        nome: 'Biblioteca Architettura - San Lorenzo',
        edificio: 'Abbazia di San Lorenzo ad Septimum',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '16:30',
        servizi: ['WiFi Eduroam', 'PC Consultazione', 'Chiostro storico', 'Silenzio', 'Biblioteca'],
        latitude: 40.9722,
        longitude: 14.2065,
        indirizzo: 'Via S. Lorenzo 1, Aversa (CE)',
        university: 'Vanvitelli',
        tags: ['architettura', 'abbazia', 'chiostro', 'storico', 'biblioteca'],
        vibe: 'Suggestivo e artistico',
        occupancy_rate: 'Medio',
        notes: 'Sede del Dipartimento di Architettura e Disegno Industriale. Abbazia medievale sulla Via Campana. Splendido chiostro.'
    },
    {
        id: 'vanvi_aversa_aula_studio',
        nome: 'Aula Studio Architettura',
        edificio: 'Abbazia di San Lorenzo',
        piano: 1,
        postiDisponibili: 35,
        postiTotali: 50,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Prese', 'Silenzio'],
        latitude: 40.9723,
        longitude: 14.2066,
        indirizzo: 'Via S. Lorenzo 1, Aversa (CE)',
        university: 'Vanvitelli',
        tags: ['architettura', 'aula studio'],
        vibe: 'Concentrato',
        occupancy_rate: 'Medio',
        notes: 'Spazio studio dedicato agli studenti di Architettura.'
    },

    // ============================================================
    // CASERTA - POLO SCIENTIFICO E ALTRI
    // ============================================================
    {
        id: 'vanvi_caserta_matfis',
        nome: 'Biblioteca Matematica e Fisica',
        edificio: 'Polo Scientifico - Edificio Matematica e Fisica',
        piano: 0,
        postiDisponibili: 90,
        postiTotali: 120,
        orarioApertura: '08:30',
        orarioChiusura: '16:30',
        servizi: ['WiFi Eduroam', 'Prese elettriche', 'Parcheggio', 'Distributori', 'Biblioteca'],
        latitude: 41.0605,
        longitude: 14.3465,
        indirizzo: 'Via Vivaldi 43, Caserta',
        university: 'Vanvitelli',
        tags: ['matematica', 'fisica', 'scientifico', 'biblioteca'],
        vibe: 'Accademico e tranquillo',
        occupancy_rate: 'Alto',
        notes: 'Polo scientifico di Caserta. Dipartimento di Matematica e Fisica. Ampio parcheggio gratuito.'
    },
    {
        id: 'vanvi_caserta_psicologia',
        nome: 'Biblioteca Psicologia',
        edificio: 'Dipartimento di Psicologia',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 50,
        orarioApertura: '08:30',
        orarioChiusura: '16:00',
        servizi: ['WiFi Eduroam', 'Silenzio Assoluto', 'Climatizzazione', 'Biblioteca'],
        latitude: 41.0705,
        longitude: 14.3310,
        indirizzo: 'Viale Ellittico 31, Caserta',
        university: 'Vanvitelli',
        tags: ['psicologia', 'biblioteca', 'silenzio'],
        vibe: 'Tranquillo e riservato',
        occupancy_rate: 'Medio',
        notes: 'Dipartimento di Psicologia, fondato nel 2001. Ambiente silenzioso ideale per concentrazione.'
    },
    {
        id: 'vanvi_caserta_scienze_politiche',
        nome: 'Biblioteca Jean Monnet - Scienze Politiche',
        edificio: 'Ex Palazzo Poste - Scienze Politiche',
        piano: 1,
        postiDisponibili: 45,
        postiTotali: 60,
        orarioApertura: '09:00',
        orarioChiusura: '16:00',
        servizi: ['WiFi Eduroam', 'Prese elettriche', 'Sala Lettura', 'Biblioteca'],
        latitude: 41.0708,
        longitude: 14.3312,
        indirizzo: 'Viale Ellittico 31, Caserta',
        university: 'Vanvitelli',
        tags: ['scienze politiche', 'jean monnet', 'biblioteca'],
        vibe: 'Istituzionale',
        occupancy_rate: 'Medio',
        notes: 'Dipartimento di Scienze Politiche, ex palazzo Poste acquistato nel 2006. Operativo dall\'a.a. 2011-2012.'
    },
    {
        id: 'vanvi_caserta_stambio',
        nome: 'Biblioteca Scienze Ambientali e Farmaceutiche',
        edificio: 'Polo Scientifico - Scienze Ambientali',
        piano: 0,
        postiDisponibili: 55,
        postiTotali: 70,
        orarioApertura: '08:30',
        orarioChiusura: '16:30',
        servizi: ['WiFi Eduroam', 'Laboratori vicini', 'Parcheggio', 'Biblioteca'],
        latitude: 41.0610,
        longitude: 14.3470,
        indirizzo: 'Via Vivaldi, Caserta',
        university: 'Vanvitelli',
        tags: ['scienze', 'biologia', 'farmacia', 'ambientale'],
        vibe: 'Scientifico',
        occupancy_rate: 'Medio',
        notes: 'Dipartimento di Scienze e Tecnologie Ambientali, Biologiche e Farmaceutiche.'
    },
    {
        id: 'vanvi_caserta_medicina',
        nome: 'Polo Medicina Caserta (in costruzione)',
        edificio: 'Nuovo Policlinico Caserta',
        piano: 0,
        postiDisponibili: 0,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '17:00',
        servizi: ['WiFi Eduroam', 'Area Relax', 'Prese elettriche', 'In Costruzione'],
        latitude: 41.0560,
        longitude: 14.3415,
        indirizzo: 'Via Arena (Loc. San Benedetto), Caserta',
        university: 'Vanvitelli',
        tags: ['medicina', 'policlinico', 'in costruzione'],
        vibe: 'In sviluppo',
        occupancy_rate: 'Basso',
        notes: 'Nuovo Policlinico in costruzione dal 2003. Lavori ripresi nel 2023. Zona Lo Uttaro vicino Maddaloni.'
    },

    // ============================================================
    // NAPOLI - AREA MEDICA (CENTRO STORICO)
    // ============================================================
    {
        id: 'vanvi_napoli_santandrea',
        nome: 'Sala Studio Sant\'Andrea delle Dame',
        edificio: 'Complesso di Sant\'Andrea delle Dame',
        piano: 0,
        postiDisponibili: 130,
        postiTotali: 170,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['WiFi Eduroam', 'Giardino Interno', 'Prese elettriche', 'Storico', 'Chiostro Barocco', 'Grande'],
        latitude: 40.8524,
        longitude: 14.2530,
        indirizzo: 'Via Luigi De Crecchio 7, Napoli',
        university: 'Vanvitelli',
        tags: ['medicina', 'barocco', 'chiostro', '500', 'grande', 'storico'],
        vibe: 'Magnifico e storico',
        occupancy_rate: 'Molto Alto',
        notes: 'Chiostro barocco del \'500 con affreschi di Bellisario Corenzio. Adiacente al Primo Policlinico. Biblioteca medica. Sede del Museo della Farmacologia (MUSA).'
    },
    {
        id: 'vanvi_napoli_santapatrizia',
        nome: 'Aule Studio Santa Patrizia',
        edificio: 'Complesso di Santa Patrizia',
        piano: 1,
        postiDisponibili: 80,
        postiTotali: 105,
        orarioApertura: '08:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Area Relax', 'Climatizzazione', 'Museo Anatomia'],
        latitude: 40.8531,
        longitude: 14.2545,
        indirizzo: 'Via Luciano Armanni 5, Napoli',
        university: 'Vanvitelli',
        tags: ['medicina', 'anatomia', 'museo', 'XIII secolo'],
        vibe: 'Suggestivo e unico',
        occupancy_rate: 'Alto',
        notes: 'Edificato nel XIII secolo. Chiostro maggiore e minore. Sede del Museo di Anatomia Umana del MUSA con preparati di Andrea Vesalio. Epigrafe "Hic mors gaudet succurrere vitae".'
    },
    {
        id: 'vanvi_napoli_biblio_medica',
        nome: 'Biblioteca Dipartimenti Area Medica',
        edificio: 'Primo Policlinico - Area Biblioteche',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 70,
        orarioApertura: '08:30',
        orarioChiusura: '17:00',
        servizi: ['WiFi Eduroam', 'PC Consultazione', 'Risorse Digitali', 'Biblioteca'],
        latitude: 40.8528,
        longitude: 14.2538,
        indirizzo: 'Via S. Maria di Costantinopoli, Napoli',
        university: 'Vanvitelli',
        tags: ['medicina', 'biblioteca', 'policlinico'],
        vibe: 'Accademico',
        occupancy_rate: 'Medio',
        notes: 'Biblioteca centrale dell\'area medica. Accesso a banche dati e risorse digitali. Centro servizi Sistema Bibliotecario di Ateneo.'
    },
    {
        id: 'vanvi_napoli_aula_studio_policlinico',
        nome: 'Aula Studio Policlinico',
        edificio: 'AOU Luigi Vanvitelli',
        piano: 0,
        postiDisponibili: 35,
        postiTotali: 50,
        orarioApertura: '08:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Prese', 'Vicino Corsie'],
        latitude: 40.8525,
        longitude: 14.2535,
        indirizzo: 'Via Luigi De Crecchio, Napoli',
        university: 'Vanvitelli',
        tags: ['medicina', 'policlinico', 'pratico'],
        vibe: 'Clinico e pratico',
        occupancy_rate: 'Alto',
        notes: 'Spazio studio vicino alle corsie. Ideale per studenti di medicina durante i tirocini.'
    },

    // ============================================================
    // SANTA MARIA CAPUA VETERE - GIURISPRUDENZA E LETTERE
    // ============================================================
    {
        id: 'vanvi_smcv_giurisprudenza',
        nome: 'Biblioteca Giurisprudenza - Palazzo Melzi',
        edificio: 'Palazzo Melzi',
        piano: 1,
        postiDisponibili: 110,
        postiTotali: 150,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['WiFi Eduroam', 'Prese elettriche', 'Palazzo Storico', 'Silenzio', 'Biblioteca', 'Grande'],
        latitude: 41.0855,
        longitude: 14.2608,
        indirizzo: 'Via Mazzocchi 68, S. Maria Capua Vetere (CE)',
        university: 'Vanvitelli',
        tags: ['giurisprudenza', 'storico', 'palazzo melzi', 'XVII secolo', 'biblioteca'],
        vibe: 'Solenne e storico',
        occupancy_rate: 'Alto',
        notes: 'Palazzo del XVII secolo, ex mensa vescovile, poi Tribunale fino al 2007. Accanto al Duomo di Santa Maria Maggiore. Sede della Scuola di Specializzazione Professioni Legali.'
    },
    {
        id: 'vanvi_smcv_lettere',
        nome: 'Biblioteca Lettere e Beni Culturali',
        edificio: 'Dipartimento Lettere',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '09:00',
        orarioChiusura: '16:30',
        servizi: ['WiFi Eduroam', 'Silenzio Assoluto', 'Chiostro', 'Biblioteca'],
        latitude: 41.0830,
        longitude: 14.2580,
        indirizzo: 'Via Perla, S. Maria Capua Vetere (CE)',
        university: 'Vanvitelli',
        tags: ['lettere', 'beni culturali', 'biblioteca'],
        vibe: 'Umanistico e tranquillo',
        occupancy_rate: 'Medio',
        notes: 'Dipartimento di Lettere e Beni Culturali. Collezione d\'arte contemporanea MUSA "Le Aule dell\'Arte".'
    },
    {
        id: 'vanvi_smcv_aulario',
        nome: 'Aulario Via Perla',
        edificio: 'Aulario Santa Maria Capua Vetere',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 150,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Moderno', 'Parcheggio', 'Laboratorio Multimediale', 'Grande'],
        latitude: 41.0835,
        longitude: 14.2575,
        indirizzo: 'Via Raffaele Perla, S. Maria Capua Vetere (CE)',
        university: 'Vanvitelli',
        tags: ['aulario', 'moderno', 'multimediale'],
        vibe: 'Moderno e attrezzato',
        occupancy_rate: 'Alto',
        notes: 'Aulario inaugurato nel 2009. 15 aule, laboratorio multimediale, parcheggio. Capacità 2.500 studenti.'
    },

    // ============================================================
    // CAPUA - ECONOMIA
    // ============================================================
    {
        id: 'vanvi_capua_economia',
        nome: 'Biblioteca Economia - Dame Monache',
        edificio: 'Convento delle Dame Monache (Ex Caserma Fieramosca)',
        piano: 1,
        postiDisponibili: 70,
        postiTotali: 90,
        orarioApertura: '08:30',
        orarioChiusura: '16:30',
        servizi: ['WiFi Eduroam', 'Prese elettriche', 'Climatizzazione', 'Storico', 'Biblioteca'],
        latitude: 41.1092,
        longitude: 14.2125,
        indirizzo: 'Corso Gran Priorato di Malta 1, Capua (CE)',
        university: 'Vanvitelli',
        tags: ['economia', 'monastero', 'IX secolo', 'storico', 'biblioteca'],
        vibe: 'Storico e suggestivo',
        occupancy_rate: 'Medio',
        notes: 'Monastero del IX-X secolo, poi caserma borbonica "Ettore Fieramosca". Restaurato 2000-2007. 11.600 m² coperti. Dipartimento di Economia.'
    },
    {
        id: 'vanvi_capua_aula_studio',
        nome: 'Aula Studio Economia',
        edificio: 'Dipartimento di Economia',
        piano: 0,
        postiDisponibili: 45,
        postiTotali: 60,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Prese', 'Silenzio', 'Distributori'],
        latitude: 41.1093,
        longitude: 14.2126,
        indirizzo: 'Corso Gran Priorato di Malta 1, Capua (CE)',
        university: 'Vanvitelli',
        tags: ['economia', 'aula studio'],
        vibe: 'Concentrato',
        occupancy_rate: 'Alto',
        notes: 'Spazio studio dedicato per studenti di Economia. Via Silicis storica.'
    },
    // ============================================================
    // CASERTA - POLO PSICOLOGIA AGGIUNTIVO
    // ============================================================
    {
        id: 'vanvi_caserta_psicologia_lincoln',
        nome: 'Sede Didattica Psicologia (Viale Lincoln)',
        edificio: 'Polo Didattico Viale Lincoln',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 60,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi', 'Aule didattiche', 'Prese'],
        latitude: 41.0725,
        longitude: 14.3265,
        indirizzo: 'Viale Lincoln, 81100 Caserta',
        university: 'Vanvitelli',
        tags: ['psicologia', 'aula studio', 'caserta'],
        vibe: 'Accademico',
        occupancy_rate: 'Medio',
        notes: 'Polo complementare a Viale Ellittico per il Dipartimento di Psicologia. Spazi studio tra le aule didattiche.'
    },
    // ============================================================
    // ADISURC - SPAZI REGIONALI
    // ============================================================
    {
        id: 'vanvi_adisurc_aversa',
        nome: 'Aula Studio Residenza ADISURC Aversa',
        edificio: 'Residenza ADISURC Aversa',
        piano: 0,
        postiDisponibili: 25,
        postiTotali: 35,
        orarioApertura: '00:00',
        orarioChiusura: '23:59',
        servizi: ['WiFi', 'Sala Informatica', 'H24 Residenti'],
        latitude: 40.9720,
        longitude: 14.2090,
        indirizzo: 'Vicolo Spirito Santo 6/7, 81031 Aversa (CE)',
        university: 'Vanvitelli',
        tags: ['ADISURC', 'residenza', 'H24'],
        vibe: 'Residenziale e tranquillo',
        extendedHours: true,
        occupancy_rate: 'Basso',
        notes: 'Fondamentale per i fuori sede di Ingegneria/Architettura ad Aversa. Gestita da ADISURC. Accesso H24 per i residenti.'
    }
];

// Export function to get directions
export const getDirectionsVanvitelli = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const isAversa = room.indirizzo.includes('Aversa');
    const isCaserta = room.indirizzo.includes('Caserta') && !room.indirizzo.includes('S. Maria') && !room.indirizzo.includes('Santa Maria');
    const isNapoli = room.indirizzo.includes('Napoli');
    const isSMCV = room.indirizzo.includes('S. Maria') || room.indirizzo.includes('Santa Maria');
    const isCapua = room.indirizzo.includes('Capua') && !room.indirizzo.includes('S. Maria');

    if (isAversa) {
        directions.push({
            luogo: 'Stazione Aversa',
            descrizione: 'A piedi percorrendo Viale della Libertà (15 min) o Via Roma.',
            mezziPubblici: ['A piedi'],
            tempoStimato: '15 min',
            note: 'Stazione sulla linea Roma-Formia-Napoli.'
        });
        directions.push({
            luogo: 'Da Napoli Centrale',
            descrizione: 'Treno Regionale per Aversa (linea Napoli-Formia).',
            mezziPubblici: ['Treno Reg'],
            tempoStimato: '20 min',
            note: 'Corse frequenti. Biglietto TrenitaliaCampania.'
        });
        directions.push({
            luogo: 'Metro Arcobaleno',
            descrizione: 'Da Piscinola Metro L1 prendere Metro Arcobaleno per Aversa Ippodromo.',
            mezziPubblici: ['Metro L1', 'Metro Arcobaleno'],
            tempoStimato: '25 min totali',
            note: 'Poi bus navetta o a piedi.'
        });
        directions.push({
            luogo: 'In Auto',
            descrizione: 'Asse Mediano (SS7bis), uscita Aversa Nord o Sud.',
            mezziPubblici: ['Auto'],
            tempoStimato: '-',
            note: 'Parcheggio nelle vicinanze.'
        });
    } else if (isCaserta) {
        directions.push({
            luogo: 'Stazione Caserta',
            descrizione: 'A piedi verso Viale Ellittico (5-10 min) o Polo Scientifico (bus).',
            mezziPubblici: ['A piedi', 'Bus'],
            tempoStimato: '5-15 min',
            note: 'Caserta è nodo ferroviario importante.'
        });
        directions.push({
            luogo: 'Da Napoli Centrale',
            descrizione: 'Treno Regionale Veloce o Italo/Frecciarossa per Caserta.',
            mezziPubblici: ['Treno Reg', 'AV'],
            tempoStimato: '30-40 min',
            note: 'Treni molto frequenti.'
        });
        directions.push({
            luogo: 'Autostrada A1',
            descrizione: 'Uscita Caserta Nord o Caserta Sud.',
            mezziPubblici: ['Auto'],
            tempoStimato: '10 min dal casello',
            note: 'Seguire indicazioni per "Università" o "Reggia".'
        });
        directions.push({
            luogo: 'Da S. Maria C.V.',
            descrizione: 'Bus ATC o treno per Caserta.',
            mezziPubblici: ['Bus ATC', 'Treno'],
            tempoStimato: '15 min'
        });
    } else if (isNapoli) {
        directions.push({
            luogo: 'Metro L1 Museo',
            descrizione: 'Fermata Museo, poi a piedi verso Via S. Maria di Costantinopoli (5 min).',
            mezziPubblici: ['Metro L1'],
            tempoStimato: '5 min dalla fermata',
            note: 'Nel cuore del centro storico.'
        });
        directions.push({
            luogo: 'Metro L2 Piazza Cavour',
            descrizione: 'Fermata Piazza Cavour, poi a piedi (8 min).',
            mezziPubblici: ['Metro L2'],
            tempoStimato: '8 min dalla fermata'
        });
        directions.push({
            luogo: 'Da Napoli Centrale',
            descrizione: 'Metro L1 direzione Piscinola, fermata Museo.',
            mezziPubblici: ['Metro L1'],
            tempoStimato: '15 min totali'
        });
        directions.push({
            luogo: 'In Auto',
            descrizione: 'SCONSIGLIATO. Zona centro storico con ZTL. Parcheggi a pagamento.',
            mezziPubblici: ['Auto'],
            tempoStimato: '-',
            note: 'Preferire mezzi pubblici. Traffico intenso e ZTL.'
        });
    } else if (isSMCV) {
        directions.push({
            luogo: 'Stazione S. Maria C.V.',
            descrizione: 'A piedi verso il centro storico (15 min).',
            mezziPubblici: ['A piedi'],
            tempoStimato: '15 min',
            note: 'Stazione sulla linea Roma-Cassino-Napoli.'
        });
        directions.push({
            luogo: 'Da Napoli Centrale',
            descrizione: 'Treno Regionale per Piedimonte Matese, fermata S. Maria C.V.',
            mezziPubblici: ['Treno Reg'],
            tempoStimato: '45 min',
            note: 'Sede storica del Tribunale.'
        });
        directions.push({
            luogo: 'Da Caserta',
            descrizione: 'Bus ATC (10-15 min) o treno.',
            mezziPubblici: ['Bus ATC', 'Treno'],
            tempoStimato: '15 min'
        });
        directions.push({
            luogo: 'In Auto',
            descrizione: 'Variante Capua-Maddaloni, uscita S. Maria C.V.',
            mezziPubblici: ['Auto'],
            tempoStimato: '-',
            note: 'Parcheggi in zona.'
        });
    } else if (isCapua) {
        directions.push({
            luogo: 'Stazione Capua',
            descrizione: 'A piedi verso Corso Gran Priorato di Malta (20 min).',
            mezziPubblici: ['A piedi'],
            tempoStimato: '20 min',
            note: 'Centro storico di Capua.'
        });
        directions.push({
            luogo: 'Da Napoli Centrale',
            descrizione: 'Treno per Capua (linea Roma-Cassino).',
            mezziPubblici: ['Treno'],
            tempoStimato: '50 min'
        });
        directions.push({
            luogo: 'Da Caserta',
            descrizione: 'Bus ATC o treno.',
            mezziPubblici: ['Bus ATC', 'Treno'],
            tempoStimato: '20-25 min'
        });
        directions.push({
            luogo: 'Autostrada A1',
            descrizione: 'Uscita Capua.',
            mezziPubblici: ['Auto'],
            tempoStimato: '10 min dal casello',
            note: 'Seguire indicazioni per centro.'
        });
    } else {
        directions.push({
            luogo: 'Treno Regionale',
            descrizione: 'Consulta orari Trenitalia per la sede specifica.',
            mezziPubblici: ['Treno'],
            tempoStimato: 'Variabile'
        });
        directions.push({
            luogo: 'In Auto',
            descrizione: 'Usa navigatore.',
            mezziPubblici: ['Auto'],
            tempoStimato: 'Variabile'
        });
    }

    return directions;
};

// Alias for backwards compatibility
export const getDirectionsForRoom = getDirectionsVanvitelli;
