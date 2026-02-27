import { StudyRoom, DirectionsFromLocation } from '../../types';

export const poliDecentratiSardegnaRooms: StudyRoom[] = [
    // ============================================================
    // ALGHERO - ARCHITETTURA, DESIGN E URBANISTICA (UniSS)
    // ============================================================
    {
        id: 'alghero_santa_chiara_biblio',
        nome: 'Biblioteca Dipartimentale Santa Chiara',
        edificio: 'Complesso Santa Chiara (Bastioni)',
        piano: 1,
        postiDisponibili: 45,
        postiTotali: 100,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['Archivio Urbanistica', 'Luce Naturale', 'Vista Mare', 'Silenzio'],
        latitude: 40.5585,
        longitude: 8.3120,
        indirizzo: 'Bastioni Marco Polo 77, Alghero (SS)',
        university: 'UniSS - Alghero',
        tags: ['Architettura', 'Alghero', '🌊 Vista Mare', '🔇 Silenzio', '🏛️ Storico'],
        notes: 'Sui bastioni a picco sul mare. I tavoli sono immensi per le planimetrie. Silenzio rigoroso richiesto.'
    },
    {
        id: 'alghero_asilo_sella_open',
        nome: 'Open Space Progettazione "Asilo Sella"',
        edificio: 'Complesso Asilo Sella',
        piano: 0,
        postiDisponibili: 12,
        postiTotali: 150,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Tavoli Grandi', 'Prese Industriali', 'Lavoro di Gruppo'],
        latitude: 40.5620,
        longitude: 8.3180,
        indirizzo: 'Lungomare Garibaldi 35, Alghero (SS)',
        university: 'UniSS - Alghero',
        tags: ['Design', 'Alghero', '📐 Tavoli Grandi', '🗣️ Lavoro di Gruppo', '✂️ Pratica'],
        notes: 'Il caos creativo. Si taglia cartone, si incollano plastici e si lavora su CAD. Il rumore è costante e tollerato.'
    },
    {
        id: 'alghero_asilo_sella_plastici',
        nome: 'Laboratorio Modelli e Plastici',
        edificio: 'Complesso Asilo Sella',
        piano: -1,
        postiDisponibili: 18,
        postiTotali: 40,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['Macchinari Taglio', 'Sporco Tollerato', 'Aspiratori'],
        latitude: 40.5621,
        longitude: 8.3181,
        indirizzo: 'Lungomare Garibaldi 35, Alghero (SS)',
        university: 'UniSS - Alghero',
        tags: ['Laboratorio', 'Alghero', '🧱 Sporco Tollerato', '⚠️ Macchinari'],
        notes: 'Accesso vitale per le revisioni. Si tollera polvere di balsa e colla. Abbigliamento da lavoro consigliato!'
    },
    {
        id: 'alghero_chiostro_chiara',
        nome: 'Chiostro di Santa Chiara (Outdoor)',
        edificio: 'Complesso Santa Chiara',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 60,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['Brezza Marina', 'Pausa Caffè', 'Socialità'],
        latitude: 40.5586,
        longitude: 8.3121,
        indirizzo: 'Bastioni Marco Polo, Alghero',
        university: 'UniSS - Alghero',
        tags: ['Outdoor', 'Alghero', '☕ Pausa', '🌬️ Riparo Vento'],
        notes: 'Il chiostro offre un riparo perfetto dal vento forte dei bastioni. Ideale per discutere i progetti all\'aria aperta.'
    },
    {
        id: 'alghero_sala_bastioni',
        nome: 'Sala Lettura Mura Spagnole',
        edificio: 'Complesso Santa Chiara',
        piano: 2,
        postiDisponibili: 10,
        postiTotali: 30,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Isolamento', 'Prese PC'],
        latitude: 40.5587,
        longitude: 8.3122,
        indirizzo: 'Bastioni Marco Polo, Alghero',
        university: 'UniSS - Alghero',
        tags: ['Silenzio', 'Alghero', '📖 Concentrazione', '💻 Prese PC'],
        notes: 'Una saletta più piccola e nascosta, ideale per chi deve scrivere la tesi senza le distrazioni dell\'open space.'
    },

    // ============================================================
    // OLBIA - UNIOLBIA (Economia e Turismo)
    // ============================================================
    {
        id: 'olbia_airport_biblio',
        nome: 'Biblioteca Economia del Turismo',
        edificio: 'Aeroporto Costa Smeralda',
        piano: 1,
        postiDisponibili: 30,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Climatizzazione', 'Vetri Insonorizzati', 'Moderna'],
        latitude: 40.9020,
        longitude: 9.5160,
        indirizzo: 'Aeroporto Costa Smeralda, Olbia',
        university: 'UniOlbia',
        tags: ['Economia', 'Olbia', '✈️ Aeroporto', '💼 Executive Lounge', '🔇 Silenzio'],
        notes: 'Polo universitario DENTRO l\'aeroporto. Vetri spessi bloccano i jet. Atmosfera iper-professionale.'
    },
    {
        id: 'olbia_airport_lounge',
        nome: 'Lounge Lavoro di Gruppo',
        edificio: 'Area Universitaria Aeroporto',
        piano: 1,
        postiDisponibili: 25,
        postiTotali: 60,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Tavoli Rotondi', 'Macchinette', 'Monitor'],
        latitude: 40.9022,
        longitude: 9.5162,
        indirizzo: 'Aeroporto Costa Smeralda, Olbia',
        university: 'UniOlbia',
        tags: ['Social', 'Olbia', '🗣️ Lavoro di Gruppo', '☕ Pausa Caffè'],
        notes: 'Area per preparare presentazioni aziendali. Rumore di fondo tollerato e incoraggiato.'
    },
    {
        id: 'olbia_airport_open',
        nome: 'Open Space UniOlbia',
        edificio: 'Corridoio Universitario',
        piano: 1,
        postiDisponibili: 15,
        postiTotali: 50,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Passaggio', 'Prese USB', 'Vicino ai Bar'],
        latitude: 40.9018,
        longitude: 9.5158,
        indirizzo: 'Aeroporto Costa Smeralda, Olbia',
        university: 'UniOlbia',
        tags: ['Passaggio', 'Olbia', '⚡ Ricarica Rapida', '⏱️ Pausa Breve'],
        notes: 'Postazioni veloci lungo i corridoi. Ottime per un ripasso dell\'ultimo minuto prima di entrare all\'esame.'
    },
    {
        id: 'olbia_airport_terrazza',
        nome: 'Terrazza Esterna Aeroporto (Area Studenti)',
        edificio: 'Aeroporto Costa Smeralda',
        piano: 2,
        postiDisponibili: 20,
        postiTotali: 40,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Pista di Decollo', 'Pausa Pranzo', 'Sole'],
        latitude: 40.9025,
        longitude: 9.5165,
        indirizzo: 'Aeroporto Costa Smeralda, Olbia',
        university: 'UniOlbia',
        tags: ['Outdoor', 'Olbia', '🛫 Vista Pista', '☀️ Sole'],
        notes: 'Il posto migliore per staccare il cervello guardando gli aerei, meteo permettendo.'
    },

    // ============================================================
    // ORISTANO - CONSORZIO UNO
    // ============================================================
    {
        id: 'oristano_biblio_uno',
        nome: 'Biblioteca Consorzio UNO',
        edificio: 'Chiostro del Carmine',
        piano: 1,
        postiDisponibili: 45,
        postiTotali: 70,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Testi Scientifici', 'Affreschi', 'Silenzio'],
        latitude: 39.9025,
        longitude: 8.5910,
        indirizzo: 'Via Carmine 18, Oristano',
        university: 'Consorzio UNO',
        tags: ['Biotecnologie', 'Oristano', '🏛️ Storico', '🔇 Silenzio'],
        notes: 'Ospita i testi per le sedi distaccate di UniCa e UniSS. Ambiente antico e molto rigoroso.'
    },
    {
        id: 'oristano_chiostro_carmine',
        nome: 'Chiostro del Carmine (Outdoor)',
        edificio: 'Plesso Storico',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 80,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['Porticati', 'Fresco d\'Estate', 'Socialità'],
        latitude: 39.9026,
        longitude: 8.5912,
        indirizzo: 'Via Carmine 18, Oristano',
        university: 'Consorzio UNO',
        tags: ['Outdoor', 'Oristano', '🧊 Fresco', '🗣️ Social'],
        notes: 'I porticati offrono ombra perfetta nei mesi caldi. Qui gli studenti di Qualità dei Prodotti e Turismo si mescolano.'
    },
    {
        id: 'oristano_sala_biotech',
        nome: 'Sala Lettura Biotecnologie',
        edificio: 'Chiostro del Carmine (Ala Est)',
        piano: 0,
        postiDisponibili: 20,
        postiTotali: 40,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Vicinanza Laboratori', 'Prese Elettriche'],
        latitude: 39.9024,
        longitude: 8.5915,
        indirizzo: 'Via Carmine 18, Oristano',
        university: 'Consorzio UNO',
        tags: ['Biotech', 'Oristano', '🔬 Scienze', '🔌 Prese PC'],
        notes: 'Adiacente ai laboratori chimici. Molto comoda per chi ha buchi tra un esperimento e l\'altro.'
    },
    {
        id: 'oristano_sala_economia',
        nome: 'Aule Dipartimentali Economia',
        edificio: 'Chiostro del Carmine (Ala Ovest)',
        piano: 1,
        postiDisponibili: 25,
        postiTotali: 50,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['Lavagne', 'Lavoro di Gruppo'],
        latitude: 39.9027,
        longitude: 8.5905,
        indirizzo: 'Via Carmine 18, Oristano',
        university: 'Consorzio UNO',
        tags: ['Economia', 'Oristano', '🗣️ Lavoro di Gruppo', '📝 Lavagne'],
        notes: 'Aule dedicate a chi prepara esami quantitativi. Il chiacchiericcio a bassa voce è permesso.'
    },
    {
        id: 'oristano_giardino',
        nome: 'Giardino del Carmine',
        edificio: 'Spazi Esterni',
        piano: 0,
        postiDisponibili: 15,
        postiTotali: 30,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Natura', 'Pausa Pranzo'],
        latitude: 39.9022,
        longitude: 8.5918,
        indirizzo: 'Via Carmine 18, Oristano',
        university: 'Consorzio UNO',
        tags: ['Verde', 'Oristano', '🌲 Natura', '🥪 Pausa Pranzo'],
        notes: 'La zona più informale del consorzio, ottima per staccare gli occhi dai libri e mangiare qualcosa.'
    },

    // ============================================================
    // NUORO - UNINUORO
    // ============================================================
    {
        id: 'nuoro_biblio_uninuoro',
        nome: 'Biblioteca Consorzio UniNuoro',
        edificio: 'Polo Universitario',
        piano: 1,
        postiDisponibili: 50,
        postiTotali: 90,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Sistemi Ambientali', 'Silenzio'],
        latitude: 40.3200,
        longitude: 9.3280,
        indirizzo: 'Via Salaris 18, Nuoro',
        university: 'UniNuoro',
        tags: ['Scienze Forestali', 'Nuoro', '🌲 Natura', '🔇 Silenzio'],
        notes: 'Il nucleo teorico della Barbagia. Ottimamente fornita per materie ambientali e forestali.'
    },
    {
        id: 'nuoro_sala_forestale',
        nome: 'Sala Lettura Scienze Forestali',
        edificio: 'Polo Universitario',
        piano: 2,
        postiDisponibili: 20,
        postiTotali: 40,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Lavoro di Gruppo', 'Mappe e Cartografie'],
        latitude: 40.3202,
        longitude: 9.3282,
        indirizzo: 'Via Salaris 18, Nuoro',
        university: 'UniNuoro',
        tags: ['Scienze', 'Nuoro', '🗺️ Cartografia', '🗣️ Gruppo'],
        notes: 'Tavoli spaziosi essenziali per analizzare planimetrie e progetti ambientali in team.'
    },
    {
        id: 'nuoro_infermieristica_sanfran',
        nome: 'Aule Studio Polo Professioni Sanitarie',
        edificio: 'Ospedale San Francesco',
        piano: 0,
        postiDisponibili: 35,
        postiTotali: 60,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['Vicinanza Reparti', 'Clima Clinico', 'Distributori'],
        latitude: 40.3280,
        longitude: 9.3150,
        indirizzo: 'Via Salvatore Mannironi, Nuoro',
        university: 'UniNuoro',
        tags: ['Medicina', 'Nuoro', '🏥 Ospedale', '⚕️ Tirocinio'],
        notes: 'Non in centro, ma vitale per chi fa i turni. Si studia in divisa tra un tirocinio e l\'altro.'
    },
    {
        id: 'nuoro_lab_informatico',
        nome: 'Laboratorio Informatico UniNuoro',
        edificio: 'Polo Universitario',
        piano: 0,
        postiDisponibili: 15,
        postiTotali: 30,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['PC Fissi', 'Software GIS', 'Aria Condizionata'],
        latitude: 40.3201,
        longitude: 9.3281,
        indirizzo: 'Via Salaris 18, Nuoro',
        university: 'UniNuoro',
        tags: ['Informatica', 'Nuoro', '💻 PC Fissi', '🗺️ Software GIS'],
        notes: 'Postazioni fisse con software GIS licenziati, indispensabili per chi non ha un PC performante.'
    },
    {
        id: 'nuoro_cortile_artiglieria',
        nome: 'Cortile Ex Artiglieria',
        edificio: 'Spazi Esterni',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 50,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Aria Pura', 'Pausa'],
        latitude: 40.3198,
        longitude: 9.3278,
        indirizzo: 'Via Salaris 18, Nuoro',
        university: 'UniNuoro',
        tags: ['Outdoor', 'Nuoro', '☀️ Relax'],
        notes: 'Spazio all\'aperto ricavato dalla riqualificazione della caserma. Il punto di ritrovo al sole.'
    },

    // ============================================================
    // SASSARI - ACCADEMIA DI BELLE ARTI "MARIO SIRONI" (AFAM)
    // ============================================================
    {
        id: 'aba_sironi_biblio',
        nome: 'Biblioteca d\'Arte "Mario Sironi"',
        edificio: 'Sede Centrale Accademia',
        piano: 1,
        postiDisponibili: 25,
        postiTotali: 50,
        orarioApertura: '09:00',
        orarioChiusura: '17:30',
        servizi: ['Volumi d\'Arte', 'Cataloghi', 'Silenzio'],
        latitude: 40.7160,
        longitude: 8.5605,
        indirizzo: 'Via Duca degli Abruzzi 4, Sassari',
        university: 'AFAM - ABA Sironi',
        tags: ['Accademia', 'Sassari', '🎨 Arte', '🔇 Silenzio', '📖 Consultazione'],
        notes: 'L\'unico spazio veramente pulito dell\'Accademia. Dedicato allo studio teorico di Storia dell\'Arte e Estetica.'
    },
    {
        id: 'aba_sironi_pittura',
        nome: 'Laboratori Open Space Pittura',
        edificio: 'Sede Centrale',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Cavalletti', 'Luce Naturale', 'Lavandini'],
        latitude: 40.7162,
        longitude: 8.5606,
        indirizzo: 'Via Duca degli Abruzzi 4, Sassari',
        university: 'AFAM - ABA Sironi',
        tags: ['Accademia', 'Sassari', '🎨 Atelier', '🧱 Sporco Tollerato', '🖌️ Pratica'],
        notes: 'Odore di trementina e colori a olio. Banchi assenti, si lavora in piedi. Vestiti a prova di macchia obbligatori!'
    },
    {
        id: 'aba_sironi_scultura',
        nome: 'Laboratorio Scultura e Materia',
        edificio: 'Sede Centrale',
        piano: -1,
        postiDisponibili: 15,
        postiTotali: 40,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['Argilla', 'Attrezzi Pesanti', 'Rumore'],
        latitude: 40.7163,
        longitude: 8.5604,
        indirizzo: 'Via Duca degli Abruzzi 4, Sassari',
        university: 'AFAM - ABA Sironi',
        tags: ['Accademia', 'Sassari', '🗿 Scultura', '⚠️ Sporco Estremo', '🔊 Rumore'],
        notes: 'Polvere di marmo e creta ovunque. Qui non si portano i portatili, si lavora la materia pesante.'
    },
    {
        id: 'aba_sironi_mac',
        nome: 'Aula Multimediale (Mac Lab)',
        edificio: 'Sede Centrale',
        piano: 2,
        postiDisponibili: 10,
        postiTotali: 30,
        orarioApertura: '09:00',
        orarioChiusura: '18:30',
        servizi: ['Workstation Apple', 'Tavolette Grafiche', 'Software Adobe'],
        latitude: 40.7161,
        longitude: 8.5607,
        indirizzo: 'Via Duca degli Abruzzi 4, Sassari',
        university: 'AFAM - ABA Sironi',
        tags: ['Accademia', 'Sassari', '💻 Digital Art', '🎬 Nuovi Media', '🔌 Tech'],
        notes: 'Il regno di chi studia Grafica e Nuove Tecnologie. Postazioni limitate con Mac iper-performanti, arriva presto.'
    },
    {
        id: 'aba_sironi_cortile',
        nome: 'Cortile dell\'Accademia',
        edificio: 'Spazi Esterni',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 60,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Pausa', 'Scultura Outdoor', 'Socialità'],
        latitude: 40.7164,
        longitude: 8.5605,
        indirizzo: 'Via Duca degli Abruzzi 4, Sassari',
        university: 'AFAM - ABA Sironi',
        tags: ['Outdoor', 'Sassari', '🎨 Creatività', '☕ Pausa'],
        notes: 'Spesso usato per finire opere ingombranti all\'aria aperta o per le pause circondati da installazioni.'
    },

    // ============================================================
    // CAGLIARI - CONSERVATORIO "PALESTRINA" (AFAM)
    // ============================================================
    {
        id: 'cons_palestrina_biblio',
        nome: 'Biblioteca Musicale Palestrina',
        edificio: 'Conservatorio',
        piano: 1,
        postiDisponibili: 25,
        postiTotali: 45,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Spartiti Rari', 'Silenzio', 'Postazioni Cuffie'],
        latitude: 39.2260,
        longitude: 9.1220,
        indirizzo: 'Piazza Ennio Porrino 1, Cagliari',
        university: 'AFAM - Cons. Palestrina',
        tags: ['Conservatorio', 'Cagliari', '🎵 Musica', '🔇 Silenzio', '📖 Teoria'],
        notes: 'Ambiente dedicato all\'ascolto e alla teoria. Ideale per studiare Armonia o Storia della Musica.'
    },
    {
        id: 'cons_palestrina_aule_prova',
        nome: 'Sale Studio Insonorizzate',
        edificio: 'Plesso Strumentale Palestrina',
        piano: 0,
        postiDisponibili: 5,
        postiTotali: 35,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Insonorizzazione', 'Pianoforti a Coda', 'Prenotazione Obbligatoria'],
        latitude: 39.2262,
        longitude: 9.1222,
        indirizzo: 'Piazza Ennio Porrino 1, Cagliari',
        university: 'AFAM - Cons. Palestrina',
        tags: ['Conservatorio', 'Cagliari', '🎹 Sale Prova', '📅 Prenotazione', '🔇 Insonorizzate'],
        notes: 'Aule singole insonorizzate. La lotta per un\'aula libera è reale — la prenotazione è vitale. Acustica perfetta.'
    },
    {
        id: 'cons_palestrina_parco',
        nome: 'Parco della Musica (Outdoor)',
        edificio: 'Adiacente al Conservatorio',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 150,
        orarioApertura: '07:00',
        orarioChiusura: '22:00',
        servizi: ['Ampio Spazio', 'Fontane', 'Socialità'],
        latitude: 39.2255,
        longitude: 9.1215,
        indirizzo: 'Parco della Musica, Cagliari',
        university: 'AFAM - Cons. Palestrina',
        tags: ['Outdoor', 'Cagliari', '🌳 Parco', '🎻 Esercitazioni Esterne'],
        notes: 'Non è raro trovare studenti che suonano fiati o archi all\'aperto nelle giornate miti. Una piazza immensa.'
    },
    {
        id: 'cons_palestrina_mediateca',
        nome: 'Mediateca e Sala Ascolto',
        edificio: 'Conservatorio',
        piano: 2,
        postiDisponibili: 15,
        postiTotali: 25,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['Impianti Hi-Fi', 'Archivio Audio', 'Isolamento'],
        latitude: 39.2261,
        longitude: 9.1219,
        indirizzo: 'Piazza Ennio Porrino 1, Cagliari',
        university: 'AFAM - Cons. Palestrina',
        tags: ['Conservatorio', 'Cagliari', '🎧 Audio', '📖 Concentrazione'],
        notes: 'Dedicata all\'ascolto analitico delle registrazioni con apparecchiature di altissima fedeltà.'
    },

    // ============================================================
    // SASSARI - CONSERVATORIO "LUIGI CANEPA" (AFAM)
    // ============================================================
    {
        id: 'cons_canepa_biblio',
        nome: 'Biblioteca Musicale "Luigi Canepa"',
        edificio: 'Conservatorio',
        piano: 1,
        postiDisponibili: 20,
        postiTotali: 40,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Fondi Storici', 'Spartiti', 'Silenzio'],
        latitude: 40.7280,
        longitude: 8.5550,
        indirizzo: 'Piazzale Cappuccini 1, Sassari',
        university: 'AFAM - Cons. Canepa',
        tags: ['Conservatorio', 'Sassari', '🎵 Musica', '📖 Spartiti', '🔇 Silenzio'],
        notes: 'Spazio raccolto e affascinante, fondamentale per le tesi in discipline musicologiche.'
    },
    {
        id: 'cons_canepa_prove',
        nome: 'Sale Prova Strumenti',
        edificio: 'Ala Didattica',
        piano: 0,
        postiDisponibili: 8,
        postiTotali: 30,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['Leggii', 'Pianoforti Verticali', 'Isolamento Acustico'],
        latitude: 40.7282,
        longitude: 8.5552,
        indirizzo: 'Piazzale Cappuccini 1, Sassari',
        university: 'AFAM - Cons. Canepa',
        tags: ['Conservatorio', 'Sassari', '🎹 Pratica', '📅 Prenotazione'],
        notes: 'Le stanze dove i musicisti passano l\'80% del loro tempo. Arriva presto o prenota in segreteria.'
    },
    {
        id: 'cons_canepa_chiostro',
        nome: 'Chiostro dei Cappuccini',
        edificio: 'Spazi Esterni Storici',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 50,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Pausa', 'Storico', 'Silenzio Naturale'],
        latitude: 40.7278,
        longitude: 8.5548,
        indirizzo: 'Piazzale Cappuccini, Sassari',
        university: 'AFAM - Cons. Canepa',
        tags: ['Outdoor', 'Sassari', '☕ Pausa', '🏛️ Storico'],
        notes: 'L\'acustica del chiostro è meravigliosa. È il luogo dove rilassarsi o discutere di orchestrazione tra le lezioni.'
    },
    {
        id: 'cons_canepa_ascolto',
        nome: 'Laboratorio Nuove Tecnologie (Musica Elettronica)',
        edificio: 'Sede Centrale',
        piano: 2,
        postiDisponibili: 10,
        postiTotali: 20,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Sintetizzatori', 'Workstation Audio', 'Mixer'],
        latitude: 40.7281,
        longitude: 8.5551,
        indirizzo: 'Piazzale Cappuccini 1, Sassari',
        university: 'AFAM - Cons. Canepa',
        tags: ['Conservatorio', 'Sassari', '🎛️ Elettronica', '🔌 Tech'],
        notes: 'Spazio dominato da cavi MIDI, synth e schede audio. Il tempio della musica elettronica.'
    }
];

export const getDirectionsSardegnaDecentrati = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const uni = (room.university || '').toLowerCase();
    const id = room.id.toLowerCase();
    const indirizzo = room.indirizzo.toLowerCase();

    // Alghero Architettura
    if (uni.includes('alghero') || id.includes('alghero') || indirizzo.includes('alghero')) {
        directions.push({
            luogo: 'Alghero Centro Storico',
            descrizione: `Sia l'Asilo Sella (Lungomare) che Santa Chiara (Bastioni) sono in area pedonale/ZTL. 
1. **A piedi/Bici**: 5 minuti da qualsiasi punto del porto.
**NOTE**: Evita l'auto, i parcheggi in centro sono a pagamento e limitati.`,
            mezziPubblici: ['A piedi', 'Bici'],
            tempoStimato: '5 min',
            note: 'Zona mare/ZTL.'
        });
    }

    // Olbia UniOlbia
    if (uni.includes('olbia') || id.includes('olbia') || indirizzo.includes('olbia')) {
        directions.push({
            luogo: 'Olbia Centro',
            descrizione: `Il polo si trova DENTRO l'Aeroporto.
1. **Bus ASPO**: Linee 2 o 10 dal centro.
2. **Auto**: Parcheggi aeroportuali ampi (verifica convenzioni studenti).`,
            mezziPubblici: ['Bus ASPO', 'Auto'],
            tempoStimato: '15 min',
            note: 'Dentro l\'aeroporto.'
        });
    }

    // Nuoro Ospedale (Professioni Sanitarie)
    if (id.includes('nuoro_infermieristica') || id.includes('sanfran')) {
        directions.push({
            luogo: 'Ospedale San Francesco, Nuoro',
            descrizione: `Polo decentrato rispetto a Via Salaris.
1. **Bus ATP Nuoro**: Linea 1 o altre linee che servono l'ospedale.
2. **Auto**: Presenza di parcheggi in zona ospedaliera.`,
            mezziPubblici: ['Bus ATP', 'Auto'],
            tempoStimato: '10-15 min',
            note: 'Polo Ospedaliero.'
        });
    }
    // Nuoro & Oristano (Sedi centrali)
    else if (uni.includes('nuoro') || uni.includes('oristano') || uni.includes('uno') || id.includes('nuoro') || id.includes('oristano') || indirizzo.includes('nuoro') || indirizzo.includes('oristano')) {
        directions.push({
            luogo: 'Stazione / Centro Storico',
            descrizione: `Entrambi i consorzi (Chiostro del Carmine a Oristano e Via Salaris a Nuoro) sono centralissimi.
1. **A piedi**: 10-15 minuti dalle rispettive stazioni ferroviarie o bus.`,
            mezziPubblici: ['A piedi'],
            tempoStimato: '10-15 min',
            note: 'Pieno centro.'
        });
    }

    // ABA Sassari / Cons Canepa
    if (uni.includes('aba') || uni.includes('canepa') || uni.includes('sironi') || id.includes('aba_') || id.includes('canepa')) {
        directions.push({
            luogo: 'Sassari Centro',
            descrizione: `L'Accademia Sironi (Via Duca degli Abruzzi) e il Conservatorio Canepa (P.le Cappuccini) sono integrati nel tessuto urbano.
1. **A piedi**: Molto vicini al centro storico.
2. **Bus ATP**: Varie linee urbane disponibili.`,
            mezziPubblici: ['A piedi', 'Bus ATP'],
            tempoStimato: '10 min',
            note: 'Centro città.'
        });
    }

    // Cons Palestrina Cagliari
    if (uni.includes('palestrina') || id.includes('palestrina')) {
        directions.push({
            luogo: 'Cagliari (Piazza Repubblica)',
            descrizione: `Il Parco della Musica e il Conservatorio sono in zona centrale.
1. **Bus CTM**: Ben collegato con il centro e la stazione.
2. **A piedi**: 10-15 minuti dal centro direzionale.`,
            mezziPubblici: ['Bus CTM', 'A piedi'],
            tempoStimato: '10-15 min',
            note: 'Parco della Musica.'
        });
    }

    return directions;
};

