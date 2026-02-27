import { StudyRoom, DirectionsFromLocation } from '../../types';

export const afamToscanaRooms: StudyRoom[] = [
    // ============================================================
    // ACCADEMIA DI BELLE ARTI DI FIRENZE (Statale)
    // ============================================================
    {
        id: 'aba_firenze_biblio',
        nome: 'Biblioteca Storica ABA Firenze',
        edificio: 'Sede Centrale - Ex Ospedale San Matteo',
        piano: 1,
        postiDisponibili: 25,
        postiTotali: 50,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['Fondi d\'Arte Antica', 'Silenzio Assoluto', 'No Materiali'],
        latitude: 43.7765,
        longitude: 11.2585,
        indirizzo: 'Via Ricasoli 66, Firenze',
        university: 'AFAM - ABA Firenze',
        tags: ['Accademia', 'Firenze', '🎨 Arte Storica', '🔇 Silenzio'],
        notes: 'A pochi passi dal David di Michelangelo. Ambiente aulico e rigoroso. Severamente vietato introdurre colori, creta o materiali da lavoro. Solo studio teorico.'
    },
    {
        id: 'aba_firenze_scultura',
        nome: 'Atelier di Scultura e Formatura',
        edificio: 'Sede Centrale (Cortili Interni)',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['Cavalletti', 'Argilla', 'Sporco Tollerato'],
        latitude: 43.7766,
        longitude: 11.2586,
        indirizzo: 'Via Ricasoli 66, Firenze',
        university: 'AFAM - ABA Firenze',
        tags: ['Atelier', 'Firenze', '🗿 Scultura', '⚠️ Sporco Estremo'],
        notes: 'Il caos creativo puro. Gesso, polvere, creta e acqua. Si lavora rigorosamente in abiti da lavoro. Il rumore degli attrezzi è costante.'
    },

    // ============================================================
    // ACCADEMIA DI BELLE ARTI DI CARRARA (Statale - Specializzazione Marmo)
    // ============================================================
    {
        id: 'aba_carrara_biblio',
        nome: 'Biblioteca Palazzo Cybo Malaspina',
        edificio: 'Palazzo Ducale Cybo Malaspina',
        piano: 1,
        postiDisponibili: 20,
        postiTotali: 45,
        orarioApertura: '09:00',
        orarioChiusura: '17:30',
        servizi: ['Testi su Marmo', 'Sale Affrescate', 'Silenzio'],
        latitude: 44.0770,
        longitude: 10.0980,
        indirizzo: 'Via Roma 1, Carrara (MS)',
        university: 'AFAM - ABA Carrara',
        tags: ['Accademia', 'Carrara', '🏛️ Palazzo Ducale', '🔇 Silenzio'],
        notes: 'Incastonata nel palazzo rinascimentale. Qui si studia la teoria della scultura sotto soffitti affrescati.'
    },
    {
        id: 'aba_carrara_laboratorio_marmo',
        nome: 'Laboratorio del Marmo e Sbozzatura',
        edificio: 'Aree Esterne / Laboratori Pesanti',
        piano: 0,
        postiDisponibili: 15,
        postiTotali: 40,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['Compressori', 'Flessibili', 'Polvere Libera'],
        latitude: 44.0772,
        longitude: 10.0982,
        indirizzo: 'Via Roma 1, Carrara (MS)',
        university: 'AFAM - ABA Carrara',
        tags: ['Laboratorio', 'Carrara', '⛏️ Lavorazione Marmo', '⚠️ Polvere / Rumore'],
        notes: 'Unico al mondo. Qui si modella il marmo bianco di Carrara. Obbligo di DPI (mascherine, occhiali, cuffie). Impossibile usarlo per studiare libri.'
    },

    // ============================================================
    // LABA (Libera Accademia di Belle Arti) - FIRENZE
    // ============================================================
    {
        id: 'laba_firenze_mac_lab',
        nome: 'Laboratorio Digital & Graphic Design',
        edificio: 'Sede Piazza di Badia',
        piano: 1,
        postiDisponibili: 15,
        postiTotali: 35,
        orarioApertura: '09:00',
        orarioChiusura: '18:30',
        servizi: ['iMac Pro', 'Tavolette Wacom', 'Aria Condizionata'],
        latitude: 43.7610,
        longitude: 11.2850,
        indirizzo: 'Piazza di Badia a Ripoli 1, Firenze',
        university: 'LABA Firenze',
        tags: ['Digital Design', 'Firenze', '💻 Tech Lab', '❄️ A/C'],
        notes: 'Polo ultra-moderno dedicato a Fotografia, Graphic Design e Nuove Tecnologie. Postazioni limitate, arriva presto.'
    },
    {
        id: 'laba_firenze_fotografia',
        nome: 'Sala Posa e Open Space Fotografia',
        edificio: 'Sede Badia a Ripoli',
        piano: 0,
        postiDisponibili: 20,
        postiTotali: 50,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['Illuminazione Studio', 'Tavoli Grandi', 'Dinamico'],
        latitude: 43.7612,
        longitude: 11.2852,
        indirizzo: 'Piazza di Badia a Ripoli, Firenze',
        university: 'LABA Firenze',
        tags: ['Fotografia', 'Firenze', '📸 Sala Posa', '🗣️ Lavoro di Gruppo'],
        notes: 'Caos organizzato. Si lavora in team per allestire set fotografici e smistare attrezzatura.'
    },

    // ============================================================
    // ACCADEMIA ITALIANA DI ARTE, MODA E DESIGN - FIRENZE
    // ============================================================
    {
        id: 'accademia_italiana_pitti_sartoria',
        nome: 'Laboratorio Moda e Sartoria',
        edificio: 'Sede Piazza Pitti',
        piano: 1,
        postiDisponibili: 20,
        postiTotali: 45,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['Macchine da Cucire', 'Manichini', 'Grandi Tavoli'],
        latitude: 43.7650,
        longitude: 11.2480,
        indirizzo: 'Piazza Pitti 15, Firenze',
        university: 'Accademia Italiana',
        tags: ['Fashion Design', 'Firenze', '👗 Sartoria', '✂️ Pratica'],
        notes: 'Situata di fronte a Palazzo Pitti. Spazi saturi di rocchetti, tessuti e cartamodelli. Il rumore delle macchine da cucire è continuo.'
    },
    {
        id: 'accademia_italiana_pitti_biblio',
        nome: 'Archivio Tessile e Sala Lettura',
        edificio: 'Sede Piazza Pitti',
        piano: 2,
        postiDisponibili: 15,
        postiTotali: 30,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Riviste di Moda', 'Campionari', 'Silenzio'],
        latitude: 43.7651,
        longitude: 11.2481,
        indirizzo: 'Piazza Pitti 15, Firenze',
        university: 'Accademia Italiana',
        tags: ['Moda', 'Firenze', '📖 Consultazione', '🔇 Silenzio'],
        notes: 'Indispensabile per la ricerca dei trend e l\'analisi dei materiali. Area tranquilla e isolata dal laboratorio sartoriale.'
    },

    // ============================================================
    // CONSERVATORIO "LUIGI CHERUBINI" - FIRENZE
    // ============================================================
    {
        id: 'cons_cherubini_biblio',
        nome: 'Biblioteca Musicale Storica',
        edificio: 'Sede Centrale (Piazzetta Belle Arti)',
        piano: 1,
        postiDisponibili: 25,
        postiTotali: 50,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Manoscritti', 'Silenzio', 'Prese Cuffie'],
        latitude: 43.7760,
        longitude: 11.2590,
        indirizzo: 'Piazzetta delle Belle Arti 2, Firenze',
        university: 'AFAM - Cons. Cherubini',
        tags: ['Conservatorio', 'Firenze', '🎵 Musica', '🔇 Silenzio'],
        notes: 'Adiacente alla Galleria dell\'Accademia. Ricchissima di partiture antiche. Perfetta per esami di Storia e Analisi.'
    },
    {
        id: 'cons_cherubini_prove',
        nome: 'Sale Studio Pratica Strumentale',
        edificio: 'Sede Centrale',
        piano: 0,
        postiDisponibili: 8,
        postiTotali: 40,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['Pianoforti a Coda', 'Insonorizzazione', 'Prenotazione'],
        latitude: 43.7761,
        longitude: 11.2591,
        indirizzo: 'Piazzetta delle Belle Arti 2, Firenze',
        university: 'AFAM - Cons. Cherubini',
        tags: ['Conservatorio', 'Firenze', '🎹 Sale Prova', '📅 Prenotazione'],
        notes: 'Prenotazione agguerritissima in segreteria. Aule singole o doppie perfettamente isolate acusticamente.'
    },

    // ============================================================
    // CONSERVATORIO "PIETRO MASCAGNI" - LIVORNO
    // ============================================================
    {
        id: 'cons_mascagni_biblio',
        nome: 'Biblioteca "Pietro Mascagni"',
        edificio: 'Sede Centrale',
        piano: 1,
        postiDisponibili: 20,
        postiTotali: 40,
        orarioApertura: '09:00',
        orarioChiusura: '17:30',
        servizi: ['Fondi Mascagni', 'Silenzio'],
        latitude: 43.5350,
        longitude: 10.3150,
        indirizzo: 'Via Galileo Galilei 40, Livorno',
        university: 'AFAM - Cons. Mascagni',
        tags: ['Conservatorio', 'Livorno', '🎵 Musica', '🔇 Silenzio'],
        notes: 'Ambiente tranquillo vicino al cuore di Livorno. Sede di importanti manoscritti del compositore livornese.'
    },
    {
        id: 'cons_mascagni_prove',
        nome: 'Aule Insonorizzate e Percussioni',
        edificio: 'Plesso Pratica',
        piano: 0,
        postiDisponibili: 5,
        postiTotali: 25,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Batterie', 'Strumenti Pesanti', 'Prenotazione'],
        latitude: 43.5352,
        longitude: 10.3152,
        indirizzo: 'Via Galileo Galilei 40, Livorno',
        university: 'AFAM - Cons. Mascagni',
        tags: ['Conservatorio', 'Livorno', '🥁 Percussioni', '🎹 Pratica'],
        notes: 'Aule dotate di strumenti non trasportabili (es. marimbe, timpani). L\'isolamento acustico è vitale qui.'
    },

    // ============================================================
    // CONSERVATORIO "LUIGI BOCCHERINI" - LUCCA
    // ============================================================
    {
        id: 'cons_boccherini_biblio',
        nome: 'Biblioteca Istituto "Boccherini"',
        edificio: 'Sede Piazza del Suffragio',
        piano: 1,
        postiDisponibili: 15,
        postiTotali: 30,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['Archivi Puccini', 'Centro Storico', 'Silenzio'],
        latitude: 43.8430,
        longitude: 10.5080,
        indirizzo: 'Piazza del Suffragio 6, Lucca',
        university: 'AFAM - Cons. Boccherini',
        tags: ['Conservatorio', 'Lucca', '🏛️ Mura Storiche', '🔇 Silenzio'],
        notes: 'Nel cuore della città di Puccini. Biblioteca preziosissima, estremamente silenziosa.'
    },
    {
        id: 'cons_boccherini_prove',
        nome: 'Aule Prova Boccherini',
        edificio: 'Sede Piazza del Suffragio',
        piano: 0,
        postiDisponibili: 8,
        postiTotali: 35,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Pianoforti', 'Isolamento'],
        latitude: 43.8432,
        longitude: 10.5082,
        indirizzo: 'Piazza del Suffragio 6, Lucca',
        university: 'AFAM - Cons. Boccherini',
        tags: ['Conservatorio', 'Lucca', '🎹 Pratica'],
        notes: 'Usate da solisti e quartetti d\'archi. Immersi nell\'atmosfera medievale della città.'
    },

    // ============================================================
    // CONSERVATORIO "RINALDO FRANCI" - SIENA
    // ============================================================
    {
        id: 'cons_franci_biblio',
        nome: 'Biblioteca e Ascolto "Franci"',
        edificio: 'Polo Sant\'Agostino',
        piano: 1,
        postiDisponibili: 12,
        postiTotali: 25,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['Postazioni Ascolto', 'Spartiti'],
        latitude: 43.3140,
        longitude: 11.3320,
        indirizzo: 'Prato di Sant\'Agostino 2, Siena',
        university: 'AFAM - Cons. Franci',
        tags: ['Conservatorio', 'Siena', '🎵 Musica', '🔇 Silenzio'],
        notes: 'Accanto al Polo Mattioli di UniSi. Intima e dotata di ottime postazioni per l\'ascolto in cuffia.'
    },
    {
        id: 'cons_franci_prove',
        nome: 'Sale Prova Insonorizzate',
        edificio: 'Polo Sant\'Agostino',
        piano: 0,
        postiDisponibili: 6,
        postiTotali: 20,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Pianoforti', 'Insonorizzazione'],
        latitude: 43.3142,
        longitude: 11.3322,
        indirizzo: 'Prato di Sant\'Agostino 2, Siena',
        university: 'AFAM - Cons. Franci',
        tags: ['Conservatorio', 'Siena', '🎹 Pratica'],
        notes: 'Prenotazione rigorosa. Le aule si affacciano su uno degli angoli più tranquilli di Siena.'
    },

    // ============================================================
    // SCUOLA DI MUSICA DI FIESOLE (AFAM Riconosciuto)
    // ============================================================
    {
        id: 'fiesole_villa_torraccia',
        nome: 'Sale Studio Villa La Torraccia',
        edificio: 'Villa La Torraccia',
        piano: 1,
        postiDisponibili: 20,
        postiTotali: 40,
        orarioApertura: '08:30',
        orarioChiusura: '20:00',
        servizi: ['Vista Panoramica', 'Ambiente Nobiliare', 'Musica da Camera'],
        latitude: 43.8010,
        longitude: 11.2930,
        indirizzo: 'Via delle Fontanelle 24, San Domenico di Fiesole (FI)',
        university: 'Scuola Musica Fiesole',
        tags: ['Musica', 'Fiesole', '🏛️ Villa Storica', '🎻 Archi'],
        notes: 'Un\'istituzione leggendaria per gli archi e l\'orchestra giovanile. Le sale della villa offrono un\'acustica naturale irreale.'
    },
    {
        id: 'fiesole_parco_prove',
        nome: 'Parco della Villa (Outdoor)',
        edificio: 'Spazi Esterni',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 60,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['Natura Estrema', 'Esercitazioni all\'Aperto'],
        latitude: 43.8012,
        longitude: 11.2932,
        indirizzo: 'Via delle Fontanelle 24, Fiesole',
        university: 'Scuola Musica Fiesole',
        tags: ['Outdoor', 'Fiesole', '🌲 Parco', '🎵 Musica Aperta'],
        notes: 'Nei mesi caldi, il parco si riempie di studenti che provano fiati e violini sotto gli alberi secolari.'
    },

    // ============================================================
    // SIENA JAZZ - ACCADEMIA NAZIONALE DEL JAZZ
    // ============================================================
    {
        id: 'sienajazz_archivio',
        nome: 'Archivio Nazionale del Jazz / Biblioteca',
        edificio: 'Fortezza Medicea',
        piano: 1,
        postiDisponibili: 15,
        postiTotali: 30,
        orarioApertura: '10:00',
        orarioChiusura: '18:00',
        servizi: ['Dischi in Vinile', 'Ascolto Alta Fedeltà', 'Silenzio'],
        latitude: 43.3220,
        longitude: 11.3240,
        indirizzo: 'Fortezza Medicea, Siena',
        university: 'Siena Jazz',
        tags: ['Jazz', 'Siena', '🎷 Archivio', '🎧 Vinili'],
        notes: 'L\'archivio jazz più grande in Europa. Studiare e ascoltare i maestri dentro le mura di una fortezza del \'500.'
    },
    {
        id: 'sienajazz_sale_prova',
        nome: 'Sale Prova Insonorizzate (Segrete)',
        edificio: 'Fortezza Medicea (Sotterranei)',
        piano: -1,
        postiDisponibili: 10,
        postiTotali: 40,
        orarioApertura: '09:00',
        orarioChiusura: '22:00',
        servizi: ['Batterie', 'Ampli Valvolari', 'Apertura Serale'],
        latitude: 43.3222,
        longitude: 11.3242,
        indirizzo: 'Fortezza Medicea, Siena',
        university: 'Siena Jazz',
        tags: ['Jazz', 'Siena', '🥁 Sale Prova', '🌙 Serale'],
        notes: 'Ricavate nei bastioni della fortezza. Isolamento totale. Suoni jam session tutto il giorno e fino a tarda sera.'
    },

    // ============================================================
    // ISIA FIRENZE (Design del Prodotto e Comunicazione)
    // ============================================================
    {
        id: 'isia_firenze_lab_3d',
        nome: 'Laboratorio Modellazione 3D e Prototipazione',
        edificio: 'Scuderie di Villa Strozzi',
        piano: 0,
        postiDisponibili: 20,
        postiTotali: 45,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Stampanti 3D', 'Taglio Laser', 'Prese Industriali'],
        latitude: 43.7710,
        longitude: 11.2330,
        indirizzo: 'Via Pisana 77, Firenze',
        university: 'AFAM - ISIA Firenze',
        tags: ['Product Design', 'Firenze', '🖨️ Stampa 3D', '⚙️ Tech'],
        notes: 'Spazio dominato da resine, filamenti PLA e prototipi industriali. Si lavora su progetti concreti in team.'
    },
    {
        id: 'isia_firenze_open_space',
        nome: 'Open Space Scuderie (Design Visivo)',
        edificio: 'Scuderie di Villa Strozzi',
        piano: 1,
        postiDisponibili: 30,
        postiTotali: 60,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Grandi Tavoli', 'Wi-Fi', 'Luce Naturale'],
        latitude: 43.7712,
        longitude: 11.2332,
        indirizzo: 'Via Pisana 77, Firenze',
        university: 'AFAM - ISIA Firenze',
        tags: ['Design', 'Firenze', '📐 Tavoli Grandi', '🗣️ Brainstorming'],
        notes: 'Sotto il tetto ligneo delle ex scuderie. Ampio, luminoso e costantemente animato da sessioni di brainstorming.'
    },

    // ============================================================
    // ISTITUTO MODARTECH (PONTEDERA - PI)
    // ============================================================
    {
        id: 'modartech_pontedera_sartoria',
        nome: 'Laboratorio Confezione e Cartamodello',
        edificio: 'Sede Viale Piaggio',
        piano: 0,
        postiDisponibili: 15,
        postiTotali: 40,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Tavoli Taglio', 'Macchine Industriali', 'Manichini'],
        latitude: 43.6590,
        longitude: 10.6340,
        indirizzo: 'Viale Rinaldo Piaggio 7, Pontedera (PI)',
        university: 'Istituto Modartech',
        tags: ['Fashion Design', 'Pontedera', '👗 Sartoria', '✂️ Pratica'],
        notes: 'Vicinissimo al Museo Piaggio. Qui si creano collezioni di moda. L\'ambiente è operativo, il rumore delle macchine da cucire è la colonna sonora.'
    },
    {
        id: 'modartech_pontedera_mac',
        nome: 'Laboratorio CAD e Comunicazione',
        edificio: 'Sede Viale Piaggio',
        piano: 1,
        postiDisponibili: 20,
        postiTotali: 35,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['PC e Mac', 'Tavolette Grafiche', 'Silenzio Controllato'],
        latitude: 43.6592,
        longitude: 10.6342,
        indirizzo: 'Viale Rinaldo Piaggio 7, Pontedera (PI)',
        university: 'Istituto Modartech',
        tags: ['Comunicazione', 'Pontedera', '💻 CAD Moda', '🔌 Tech'],
        notes: 'Dedicato alla modellistica 3D e al fashion marketing.'
    },

    // ============================================================
    // IED - ISTITUTO EUROPEO DI DESIGN (FIRENZE)
    // ============================================================
    {
        id: 'ied_firenze_lab_moda',
        nome: 'Laboratori Fashion & Interior',
        edificio: 'Sede Bufalini',
        piano: 1,
        postiDisponibili: 20,
        postiTotali: 60,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['Tavoli Progettazione', 'Campioni Materiali', 'Aria Condizionata'],
        latitude: 43.7740,
        longitude: 11.2595,
        indirizzo: 'Via M. Bufalini 6/R, Firenze',
        university: 'IED Firenze',
        tags: ['Design', 'Firenze', '📐 Laboratorio', '❄️ A/C'],
        notes: 'Modernissimo e centralissimo (zona Duomo). Gli studenti srotolano blueprint e assemblano moodboard materiche.'
    },
    {
        id: 'ied_firenze_biblio_materioteca',
        nome: 'Materioteca e Sala Studio',
        edificio: 'Sede Bufalini',
        piano: 2,
        postiDisponibili: 15,
        postiTotali: 40,
        orarioApertura: '09:00',
        orarioChiusura: '18:30',
        servizi: ['Archivio Tessuti', 'Silenzio', 'Prese PC'],
        latitude: 43.7742,
        longitude: 11.2597,
        indirizzo: 'Via M. Bufalini 6/R, Firenze',
        university: 'IED Firenze',
        tags: ['Design', 'Firenze', '🧶 Materioteca', '🔇 Silenzio'],
        notes: 'Punto di raccoglimento per toccare con mano tessuti, legni e resine. Meno caotica dei laboratori, ottima per lo studio teorico.'
    }
];

export const getDirectionsAFAMToscana = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];
    const uni = (room.university || '').toLowerCase();
    const id = room.id.toLowerCase();

    // ============================================================
    // FIRENZE CENTRO (ABA, Cherubini, Accademia Italiana, IED)
    // ============================================================
    if (uni.includes('firenze') && !uni.includes('laba') && !uni.includes('isia') && !uni.includes('fiesole')) {
        directions.push({
            luogo: 'Firenze Stazione SMN / Centro Storico',
            descrizione: `Sedi incastonate in piena ZTL (Duomo, Piazza Pitti, Ricasoli).
1. **A piedi**: Da Santa Maria Novella sono tutte raggiungibili con una passeggiata di 10-15 minuti.
2. **Bussini Elettrici**: Le linee C1, C2, C3 o C4 dell'Autolinee Toscane si infilano nei vicoli e ti lasciano davanti alle sedi (Pitti, Bufalini, Ricasoli).
**ATTENZIONE**: Non provare MAI ad entrare in auto.`,
            mezziPubblici: ['A piedi', 'Bus C1/C2'],
            tempoStimato: '10-15 min',
            note: 'ZTL Monumentale. Auto assolutamente vietata.'
        });
    }

    // ============================================================
    // FIRENZE PERIFERIA / COLLI (LABA, ISIA, FIESOLE)
    // ============================================================
    if (uni.includes('laba')) {
        directions.push({
            luogo: 'Firenze Centro',
            descrizione: `La LABA si trova a Badia a Ripoli (Firenze Sud).
1. **Bus Urbano**: Linea 14 o 8 (Autolinee Toscane) dal centro o dalla Stazione.
2. **Auto/Moto**: Essendo fuori dal ring storico, è molto più semplice parcheggiare qui.`,
            mezziPubblici: ['Bus Urbano 14', 'Auto'],
            tempoStimato: '25 min',
            note: 'Zona Firenze Sud.'
        });
    }

    if (uni.includes('isia')) {
        directions.push({
            luogo: 'Firenze SMN / Porta al Prato',
            descrizione: `ISIA è a Villa Strozzi (Boschetto).
1. **Tram T1 + Bus**: Tram T1 fino a "Batoni" o "Talenti", poi un breve tratto a piedi o con i bus urbani in Via Pisana.`,
            mezziPubblici: ['Tram T1 + A piedi'],
            tempoStimato: '20 min',
            note: 'Zona Oltrarno/Isolotto.'
        });
    }

    if (uni.includes('fiesole')) {
        directions.push({
            luogo: 'Firenze Stazione SMN / San Marco',
            descrizione: `La Scuola è a San Domenico (collina verso Fiesole).
1. **Bus Urbano 7**: Da Piazza San Marco prendi il bus 7, che si inerpica sulla collina e ferma a San Domenico, vicinissimo a Villa La Torraccia.`,
            mezziPubblici: ['Bus Urbano 7'],
            tempoStimato: '25 min',
            note: 'Il mitico Bus 7 è l\'unica via per i colli.'
        });
    }

    // ============================================================
    // SIENA (Franci, Siena Jazz)
    // ============================================================
    if (uni.includes('siena')) {
        directions.push({
            luogo: 'Siena Stazione FS',
            descrizione: `Entrambe le sedi (Fortezza Medicea per il Jazz, S.Agostino per il Franci) sono in centro.
1. **Per Siena Jazz (Fortezza)**: Dalla stazione, autobus urbano verso Piazza Gramsci. La fortezza è attaccata.
2. **Per il Franci**: Usa le scale mobili (risalite) dall'Antiperto.`,
            mezziPubblici: ['Bus', 'A piedi'],
            tempoStimato: '15-20 min',
            note: 'Centro di Siena, prevalentemente pedonale / ZTL.'
        });
    }

    // ============================================================
    // ALTRE CITTÀ (Livorno, Lucca, Carrara, Pontedera)
    // ============================================================
    if (id.includes('carrara')) {
        directions.push({
            luogo: 'Carrara',
            descrizione: `Sede dell'Accademia (Palazzo Cybo Malaspina) e laboratori.
Raggiungibile dalla stazione "Carrara-Avenza" con bus urbano verso Carrara Centro (Piazza Farini).`,
            mezziPubblici: ['Bus Urbano', 'A piedi'],
            tempoStimato: '20 min in bus',
            note: 'Accesso limitato in auto nel centro storico.'
        });
    }

    if (id.includes('mascagni') || id.includes('livorno') || uni.includes('livorno')) {
        directions.push({
            luogo: 'Livorno',
            descrizione: `Il Conservatorio Mascagni è vicino al centro.
Dalla Stazione FS, prendi il bus LAM Blu/Rossa o cammina per circa 15-20 minuti. Parcheggi disponibili nelle strade adiacenti.`,
            mezziPubblici: ['LAM Blu/Rossa', 'A piedi'],
            tempoStimato: '15 min in bus',
            note: 'Città di mare, facilmente accessibile.'
        });
    }

    if (id.includes('boccherini') || id.includes('lucca') || uni.includes('lucca')) {
        directions.push({
            luogo: 'Lucca Mura Storiche',
            descrizione: `L'istituto si trova all'interno delle storiche mura.
Dalla stazione ferroviaria, entra da Porta San Pietro e prosegui a piedi (circa 10 minuti). Auto fuori dalle mura (es. parcheggio Carducci).`,
            mezziPubblici: ['A piedi', 'Bici'],
            tempoStimato: '10 min a piedi',
            note: 'Dentro le mura, ideale camminare o pedalare.'
        });
    }

    if (id.includes('modartech') || id.includes('pontedera') || uni.includes('pontedera')) {
        directions.push({
            luogo: 'Pontedera (PI)',
            descrizione: `Modartech si trova sul Viale Piaggio, vicino al Museo.
A due passi dalla Stazione FS Pontedera-Casciana Terme. Raggiungibile in 5 minuti a piedi. Facilità di parcheggio per chi arriva in auto.`,
            mezziPubblici: ['Treno', 'Auto', 'A piedi'],
            tempoStimato: '5 min a piedi',
            note: 'Facilissimo da raggiungere dalla stazione.'
        });
    }

    return directions;
};
