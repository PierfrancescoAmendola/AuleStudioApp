import { StudyRoom, DirectionsFromLocation } from '../../types';

export const unictRooms: StudyRoom[] = [
    // ============================================================
    // CATANIA - POLO UMANISTICO (Monastero dei Benedettini - DISUM)
    // ============================================================
    {
        id: 'unict_benedettini_biblio',
        nome: 'Biblioteca di Scienze Umanistiche (DISUM)',
        edificio: 'Monastero dei Benedettini',
        piano: 1,
        postiDisponibili: 45,
        postiTotali: 150,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Fondi Antichi', 'Soffitti Affrescati', 'Silenzio Assoluto'],
        latitude: 37.5036,
        longitude: 15.0801,
        indirizzo: 'Piazza Dante Alighieri 32, Catania',
        university: 'UniCt',
        tags: ['Umanistica', 'Catania', '🏛️ UNESCO', '🔇 Silenzio', '📖 Lettere'],
        notes: 'Studiare in un monastero patrimonio UNESCO. Atmosfera solenne e silenzio tombale. Posti limitati sotto sessione, arriva presto.'
    },
    {
        id: 'unict_benedettini_aule',
        nome: 'Aule Studio e Lettura Benedettini',
        edificio: 'Monastero dei Benedettini (Coro di Notte / Corridoi)',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 200,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Prese PC', 'Lavoro di Gruppo', 'Distributori'],
        latitude: 37.5038,
        longitude: 15.0805,
        indirizzo: 'Piazza Dante Alighieri 32, Catania',
        university: 'UniCt',
        tags: ['Umanistica', 'Catania', '🗣️ Lavoro di Gruppo', '💻 Prese PC'],
        notes: 'Spazi più dinamici ricavati lungo i maestosi corridoi del monastero. Perfetti per ripetere in gruppo.'
    },
    {
        id: 'unict_benedettini_chiostro',
        nome: 'Chiostro dei Benedettini (Outdoor)',
        edificio: 'Spazi Esterni Monastero',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 150,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['Pausa Caffè', 'Luce Naturale', 'Socialità'],
        latitude: 37.5035,
        longitude: 15.0800,
        indirizzo: 'Piazza Dante Alighieri 32, Catania',
        university: 'UniCt',
        tags: ['Outdoor', 'Catania', '☀️ Relax', '☕ Pausa Caffè', '🏛️ Architettura'],
        notes: 'Il cuore della vita sociale del DISUM. Splendido in primavera, ma il Wi-Fi Eduroam può fare i capricci.'
    },
    {
        id: 'unict_scienze_politiche_biblio',
        nome: 'Biblioteca Polo Scienze Politiche',
        edificio: 'Palazzo Pedagaggi',
        piano: 1,
        postiDisponibili: 30,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['Emeroteca', 'Ambiente Nobiliare', 'Silenzio'],
        latitude: 37.5042,
        longitude: 15.0850,
        indirizzo: 'Via Vittorio Emanuele II 49, Catania',
        university: 'UniCt',
        tags: ['Scienze Politiche', 'Catania', '📖 Consultazione', '🔇 Silenzio'],
        notes: 'In pieno centro storico, un palazzo nobiliare trasformato in polo didattico. Molto tranquillo.'
    },

    // ============================================================
    // CATANIA - POLO GIURIDICO ED ECONOMICO (Centro)
    // ============================================================
    {
        id: 'unict_cerami_biblio',
        nome: 'Biblioteca Centrale Giurisprudenza',
        edificio: 'Villa Cerami',
        piano: 1,
        postiDisponibili: 35,
        postiTotali: 120,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Codici Aggiornati', 'Silenzio Assoluto', 'Prese Elettriche'],
        latitude: 37.5065,
        longitude: 15.0845,
        indirizzo: 'Via Crociferi 91, Catania',
        university: 'UniCt',
        tags: ['Giurisprudenza', 'Catania', '⚖️ Diritto', '🔇 Silenzio', '🏛️ Villa Cerami'],
        notes: 'Sede storica in Via Crociferi. L\'aria è formale e il silenzio è d\'oro. I tavoli migliori sono quelli vicini alle finestre.'
    },
    {
        id: 'unict_cerami_giardino',
        nome: 'Giardini di Villa Cerami (Outdoor)',
        edificio: 'Spazi Esterni',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['Pausa Pranzo', 'Verde', 'Relax'],
        latitude: 37.5068,
        longitude: 15.0848,
        indirizzo: 'Via Crociferi 91, Catania',
        university: 'UniCt',
        tags: ['Outdoor', 'Catania', '🌲 Natura', '🥪 Pausa Pranzo'],
        notes: 'La via di fuga preferita dai futuri avvocati e magistrati. Perfetta per staccare gli occhi dai manuali.'
    },
    {
        id: 'unict_economia_biblio',
        nome: 'Biblioteca Scienze Economiche e Aziendali',
        edificio: 'Palazzo delle Scienze',
        piano: 2,
        postiDisponibili: 50,
        postiTotali: 160,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Riviste Finanziarie', 'Climatizzazione', 'Silenzio'],
        latitude: 37.5135,
        longitude: 15.1015,
        indirizzo: 'Corso Italia 55, Catania',
        university: 'UniCt',
        tags: ['Economia', 'Catania', '📊 Finanza', '❄️ A/C', '🔇 Silenzio'],
        notes: 'Nel cuore della Catania moderna. L\'edificio è imponente e la biblioteca è molto ben organizzata.'
    },
    {
        id: 'unict_economia_aule',
        nome: 'Aule Studio Palazzo delle Scienze',
        edificio: 'Palazzo delle Scienze',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 100,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Lavoro di Gruppo', 'Macchinette'],
        latitude: 37.5133,
        longitude: 15.1018,
        indirizzo: 'Corso Italia 55, Catania',
        university: 'UniCt',
        tags: ['Economia', 'Catania', '🗣️ Lavoro di Gruppo', '☕ Pausa'],
        notes: 'Più rumorose della biblioteca, usate prevalentemente per preparare esami di matematica finanziaria o statistica in team.'
    },

    // ============================================================
    // CATANIA - LA CITTADELLA UNIVERSITARIA E SANTA SOFIA (STEM & Medicina)
    // ============================================================
    {
        id: 'unict_cittadella_ingegneria',
        nome: 'Biblioteca Polifunzionale Ingegneria',
        edificio: 'Edificio della Didattica - Cittadella',
        piano: 1,
        postiDisponibili: 60,
        postiTotali: 250,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['Tavoli Grandi', 'Prese PC', 'Rumore Controllato'],
        latitude: 37.5255,
        longitude: 15.0745,
        indirizzo: 'Viale Andrea Doria 6, Catania',
        university: 'UniCt',
        tags: ['Ingegneria', 'Cittadella', '💻 Prese PC', '📐 Tavoli Grandi'],
        notes: 'L\'hub principale degli ingegneri. Si lavora sodo su CAD e progetti. Prese elettriche ovunque.'
    },
    {
        id: 'unict_cittadella_dfa',
        nome: 'Biblioteca Dipartimento Fisica e Astronomia',
        edificio: 'Edificio DFA - Cittadella',
        piano: 1,
        postiDisponibili: 25,
        postiTotali: 70,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Testi Avanzati', 'Silenzio Assoluto', 'Lavagne a Gesso'],
        latitude: 37.5260,
        longitude: 15.0735,
        indirizzo: 'Via Santa Sofia 64, Catania',
        university: 'UniCt',
        tags: ['Fisica', 'Cittadella', '🔇 Silenzio', '📝 Lavagne'],
        notes: 'Il feudo dei fisici e dei matematici. Ambiente estremamente analitico e focalizzato.'
    },
    {
        id: 'unict_torre_biologica',
        nome: 'Aule Studio Torre Biologica',
        edificio: 'Polo Biometec (Torre Biologica)',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 150,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Struttura Moderna', 'Prese USB', 'Aria Condizionata'],
        latitude: 37.5275,
        longitude: 15.0715,
        indirizzo: 'Via Santa Sofia 97, Catania',
        university: 'UniCt',
        tags: ['Biologia', 'Medicina', 'Santa Sofia', '🏢 Moderno', '❄️ A/C'],
        notes: 'Uno degli edifici più nuovi dell\'Ateneo. Ottimamente climatizzato, perfetto per le sessioni estive.'
    },
    {
        id: 'unict_policlinico_medicina',
        nome: 'Sale Lettura Policlinico "G. Rodolico"',
        edificio: 'Plesso Didattico Policlinico',
        piano: 1,
        postiDisponibili: 40,
        postiTotali: 120,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['Vicinanza Reparti', 'Clima Clinico', 'Silenzio'],
        latitude: 37.5230,
        longitude: 15.0730,
        indirizzo: 'Via Santa Sofia 78, Catania',
        university: 'UniCt',
        tags: ['Medicina', 'Policlinico', '🏥 Ospedale', '⚕️ Tirocinio'],
        notes: 'Si studia rigorosamente in divisa. Punto d\'appoggio vitale tra un turno e l\'altro in corsia.'
    },
    {
        id: 'unict_agraria_santasofia',
        nome: 'Biblioteca Di3A (Agraria e Alimentazione)',
        edificio: 'Polo Santa Sofia',
        piano: 1,
        postiDisponibili: 30,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['Testi Specifici', 'Isolamento'],
        latitude: 37.5290,
        longitude: 15.0700,
        indirizzo: 'Via Santa Sofia 100, Catania',
        university: 'UniCt',
        tags: ['Agraria', 'Santa Sofia', '🌾 Natura'],
        notes: 'La sede più a nord del campus, immersa nel verde e molto tranquilla.'
    },
    {
        id: 'unict_cittadella_prato',
        nome: 'Prato della Cittadella',
        edificio: 'Spazi Esterni Cittadella',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 300,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Pausa Pranzo', 'Natura', 'Socialità'],
        latitude: 37.5258,
        longitude: 15.0740,
        indirizzo: 'Viale Andrea Doria 6, Catania',
        university: 'UniCt',
        tags: ['Outdoor', 'Cittadella', '☀️ Sole', '🥪 Pausa Pranzo'],
        notes: 'Punto di ritrovo per migliaia di studenti STEM. Ottimo per mangiare un pezzo di tavola calda (arancini!) tra le lezioni.'
    },

    // ============================================================
    // SIRACUSA - POLO TERRITORIALE (SDS Architettura e Beni Culturali)
    // ============================================================
    {
        id: 'unict_siracusa_architettura_biblio',
        nome: 'Biblioteca SDS Architettura',
        edificio: 'Ex Caserma Abela',
        piano: 1,
        postiDisponibili: 35,
        postiTotali: 90,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['Fondi di Architettura', 'Vista Mare', 'Silenzio'],
        latitude: 37.0560,
        longitude: 15.2930,
        indirizzo: 'Piazza Federico di Svevia, Siracusa',
        university: 'UniCt - Siracusa',
        tags: ['Architettura', 'Siracusa', '🌊 Vista Mare', '🏛️ Ortigia'],
        notes: 'Incastonata nell\'isola di Ortigia, vicino al Castello Maniace. Location spettacolare, studiare qui è un privilegio.'
    },
    {
        id: 'unict_siracusa_aule_progetto',
        nome: 'Open Space Progettazione',
        edificio: 'Ex Caserma Abela',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 120,
        orarioApertura: '08:30',
        orarioChiusura: '20:00',
        servizi: ['Tavoli Enormi', 'Prese Industriali', 'Lavoro Notturno (in sessione)'],
        latitude: 37.0562,
        longitude: 15.2932,
        indirizzo: 'Piazza Federico di Svevia, Siracusa',
        university: 'UniCt - Siracusa',
        tags: ['Design', 'Siracusa', '📐 Tavoli Grandi', '🗣️ Lavoro di Gruppo'],
        notes: 'Il rumore è costante. Gli architetti vivono letteralmente qui dentro durante la preparazione dei plastici e delle tavole.'
    },
    {
        id: 'unict_siracusa_lab_modelli',
        nome: 'Laboratorio Modelli e Stampa 3D',
        edificio: 'Ex Caserma Abela (Plesso Ovest)',
        piano: -1,
        postiDisponibili: 15,
        postiTotali: 30,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Taglio Laser', 'Sporco Tollerato', 'Aspiratori'],
        latitude: 37.0561,
        longitude: 15.2931,
        indirizzo: 'Piazza Federico di Svevia, Siracusa',
        university: 'UniCt - Siracusa',
        tags: ['Laboratorio', 'Siracusa', '🧱 Sporco Tollerato', '🔌 Macchinari'],
        notes: 'Zona operativa. Si tollerano polvere e odori di colla. Solo pratica, zero teoria.'
    },
    {
        id: 'unict_siracusa_chiostro',
        nome: 'Chiostro Ex Caserma Abela (Outdoor)',
        edificio: 'Spazi Esterni Ortigia',
        piano: 0,
        postiDisponibili: 25,
        postiTotali: 60,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['Brezza Marina', 'Pausa Caffè', 'Cortile Interno'],
        latitude: 37.0565,
        longitude: 15.2935,
        indirizzo: 'Piazza Federico di Svevia, Siracusa',
        university: 'UniCt - Siracusa',
        tags: ['Outdoor', 'Siracusa', '☕ Pausa', '🌬️ Brezza'],
        notes: 'Protegge dal vento di Ortigia. Spazio meraviglioso per staccare dal monitor e prendere un caffè.'
    },

    // ============================================================
    // RAGUSA - POLO TERRITORIALE (SDS Lingue e Mediazione - Ibla)
    // ============================================================
    {
        id: 'unict_ragusa_teresa_biblio',
        nome: 'Biblioteca Ex Convento Santa Teresa',
        edificio: 'SDS Lingue (Ragusa Ibla)',
        piano: 1,
        postiDisponibili: 30,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['Testi in Lingua Originale', 'Dizionari', 'Silenzio'],
        latitude: 36.9265,
        longitude: 14.7460,
        indirizzo: 'Via Orfanotrofio 49, Ragusa (Ibla)',
        university: 'UniCt - Ragusa',
        tags: ['Lingue', 'Ragusa Ibla', '🏛️ Barocco', '🔇 Silenzio'],
        notes: 'Nel cuore del barocco di Ibla. Ricca di volumi per le lingue europee e orientali. Estremamente affascinante.'
    },
    {
        id: 'unict_ragusa_distretto_aule',
        nome: 'Aule Studio Ex Distretto Militare',
        edificio: 'Plesso Ex Distretto',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 100,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Lavoro di Gruppo', 'Multimedialità', 'Prese Elettriche'],
        latitude: 36.9258,
        longitude: 14.7455,
        indirizzo: 'Via Pietro Nenni, Ragusa (Ibla)',
        university: 'UniCt - Ragusa',
        tags: ['Mediazione', 'Ragusa Ibla', '🗣️ Conversazione', '💻 Prese PC'],
        notes: 'Le aule dell\'Ex Distretto sono usate per ripetere e fare conversazione in lingua straniera ad alta voce.'
    },
    {
        id: 'unict_ragusa_lab_linguistico',
        nome: 'Laboratorio Linguistico Multimediale',
        edificio: 'Ex Convento Santa Teresa',
        piano: 2,
        postiDisponibili: 20,
        postiTotali: 40, // Postazioni PC con cuffie
        orarioApertura: '09:00',
        orarioChiusura: '17:30',
        servizi: ['Cuffie', 'Software Lingue', 'Aria Condizionata'],
        latitude: 36.9266,
        longitude: 14.7461,
        indirizzo: 'Via Orfanotrofio 49, Ragusa (Ibla)',
        university: 'UniCt - Ragusa',
        tags: ['Laboratorio', 'Ragusa Ibla', '🎧 Audio', '💻 PC Fissi'],
        notes: 'Postazioni fisse dedicate all\'ascolto e alla fonetica. Essenziale per gli studenti di arabo e cinese.'
    },
    {
        id: 'unict_ragusa_chiostro_teresa',
        nome: 'Chiostro di Santa Teresa (Outdoor)',
        edificio: 'Spazi Esterni Ibla',
        piano: 0,
        postiDisponibili: 25,
        postiTotali: 50,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Pausa', 'Atmosfera Storica', 'Relax'],
        latitude: 36.9264,
        longitude: 14.7458,
        indirizzo: 'Via Orfanotrofio 49, Ragusa',
        university: 'UniCt - Ragusa',
        tags: ['Outdoor', 'Ragusa Ibla', '☕ Pausa', '☀️ Sole'],
        notes: 'Il luogo perfetto per un riposo mentale godendosi la pietra bianca di Ragusa e il clima sereno.'
    },

    // ============================================================
    // AREE COMUNI E MENSE (ERSU) - Catania
    // ============================================================
    {
        id: 'unict_mensa_cittadella',
        nome: 'Mensa Cittadella (Aree Comuni)',
        edificio: 'Plesso ERSU Cittadella',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 300,
        orarioApertura: '10:00',
        orarioChiusura: '18:00',
        servizi: ['Cibo', 'Lavoro di Gruppo', 'Molto Rumoroso'],
        latitude: 37.5250,
        longitude: 15.0750,
        indirizzo: 'Viale Andrea Doria 6, Catania',
        university: 'UniCt',
        tags: ['Mensa', 'Cittadella', '🥪 Pausa Pranzo', '🔊 Rumore'],
        notes: 'Fuori dagli orari pasto, i grandi tavoli diventano postazioni per gruppi di studio STEM. C\'è sempre confusione.'
    },
    {
        id: 'unict_mensa_centro_oberdan',
        nome: 'Mensa ERSU Centro (Via Oberdan)',
        edificio: 'Plesso ERSU Centro',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 200,
        orarioApertura: '10:00',
        orarioChiusura: '18:00',
        servizi: ['Pausa Veloce', 'Punto di Incontro'],
        latitude: 37.5140,
        longitude: 15.0930,
        indirizzo: 'Via Oberdan 143, Catania',
        university: 'UniCt',
        tags: ['Mensa', 'Centro', '🥪 Pausa Pranzo', '🗣️ Social'],
        notes: 'Punto di appoggio strategico per gli studenti di Economia e Scienze Politiche per studiare in orari pomeridiani.'
    },
    // ============================================================
    // CATANIA - ERSU E SPAZI COMUNALI
    // ============================================================
    {
        id: 'unict_ersu_toscano',
        nome: 'Aule Studio ERSU (Toscano Scuderi)',
        edificio: 'Residenza ERSU Toscano Scuderi',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 120,
        orarioApertura: '09:00',
        orarioChiusura: '21:00',
        servizi: ['WiFi Gratuito', 'Prese', 'Clima', 'Accesso Libero'],
        latitude: 37.5240,
        longitude: 15.0750,
        indirizzo: 'Via Toscano Scuderi, 95128 Catania',
        university: 'UniCt',
        occupancy_rate: 'Alto',
        extendedHours: true,
        notes: 'Gestite da ERSU Catania. Aperte lun-sab 9:00-21:00. Fondamentali per coprire le carenze serali e del fine settimana delle biblioteche dipartimentali.',
        tags: ['ERSU', '🌙 Serale', 'WiFi', 'Top Space'],
    },
    {
        id: 'unict_bellini',
        nome: 'Biblioteca Comunale "Vincenzo Bellini"',
        edificio: 'Sistema Bibliotecario Centrale',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 120,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Accesso Libero', '120 posti lettura'],
        latitude: 37.5055,
        longitude: 15.0875,
        indirizzo: 'Via Biblioteca 13, 95124 Catania',
        university: 'UniCt',
        occupancy_rate: 'Medio',
        notes: 'Dispone di 120 posti lettura nel Sistema Bibliotecario Centrale Catanese. Ottima alternativa alle biblioteche universitarie.',
        tags: ['Comunale', 'WiFi', 'Centro'],
    }
];

export const getDirectionsUniCt = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];
    const id = room.id.toLowerCase();
    const uni = (room.university || '').toLowerCase();

    // ============================================================
    // CATANIA - CENTRO E BENEDETTINI
    // ============================================================
    if (uni === 'unict' && (id.includes('benedettini') || id.includes('cerami') || id.includes('scienze_politiche') || id.includes('mensa_centro'))) {
        directions.push({
            luogo: 'Piazza Stesicoro / Via Etnea',
            descrizione: `I poli storici (Benedettini, Villa Cerami, Sc. Politiche) sono nel cuore barocco di Catania.
1. **Metro FCE**: Fermata "Stesicoro", poi 10 minuti a piedi attraverso Via Crociferi.
2. **Auto**: ASSOLUTAMENTE SCONSIGLIATA. Zona ZTL, vie strette e parcheggi inesistenti.
3. **Bus AMT**: Navetta "Alibus" o linee centrali.`,
            mezziPubblici: ['Metro FCE', 'A piedi', 'Bus AMTS'],
            tempoStimato: '10 min',
            note: 'Centro Storico ZTL. Usa la metropolitana.'
        });
    }

    // ============================================================
    // CATANIA - CITTADELLA E SANTA SOFIA
    // ============================================================
    if (uni === 'unict' && (id.includes('cittadella') || id.includes('torre_biologica') || id.includes('policlinico') || id.includes('agraria'))) {
        directions.push({
            luogo: 'Stazione Catania Borgo / Circonvallazione',
            descrizione: `La Cittadella e Via Santa Sofia si trovano nella zona alta (Nord) della città.
1. **Metro FCE**: Fermata "Milo", da lì parte il servizio navetta "Metro Shuttle FCE" che taglia la Cittadella e Santa Sofia.
2. **Auto**: Possibile, ma il traffico in Viale Andrea Doria (Circonvallazione) alle 8:00 è paralizzante. Parcheggi interni disponibili ma lottati.
3. **BRT1**: Bus Rapido AMTS che collega il centro alla Cittadella.`,
            mezziPubblici: ['Metro Shuttle FCE', 'BRT1'],
            tempoStimato: '15-20 min',
            note: 'Usa il BRT o il Metro Shuttle da Milo.'
        });
    }

    // ============================================================
    // CATANIA - ECONOMIA (Corso Italia)
    // ============================================================
    if (uni === 'unict' && id.includes('economia')) {
        directions.push({
            luogo: 'Piazza Giovanni Verga / Corso Italia',
            descrizione: `Palazzo delle Scienze è nel centro moderno e direzionale.
1. **Metro FCE**: Fermata "Italia" (a 50 metri dall'ingresso). È il modo più comodo e veloce in assoluto.
2. **Auto**: Parcheggiare su Corso Italia (strisce blu) è estremamente costoso e difficile.`,
            mezziPubblici: ['Metro FCE (Italia)'],
            tempoStimato: '2 min',
            note: 'La Metro ti lascia letteralmente davanti all\'ingresso.'
        });
    }

    // ============================================================
    // SIRACUSA (SDS Architettura)
    // ============================================================
    if (uni.includes('siracusa')) {
        directions.push({
            luogo: 'Siracusa Centro / Ortigia',
            descrizione: `L'ex Caserma Abela si trova sulla punta estrema dell'isola di Ortigia.
1. **A piedi/Bici**: Da Piazza Archimede o dal Duomo sono 5 minuti a piedi.
2. **Navetta Elettrica**: Il comune offre navette che girano per Ortigia.
**ATTENZIONE**: Ortigia è una ZTL severissima. Se vieni in auto, lasciala ai parcheggi "Talete" o "Molo Sant'Antonio" e procedi a piedi.`,
            mezziPubblici: ['A piedi', 'Navetta Ortigia'],
            tempoStimato: '10-15 min',
            note: 'Isola di Ortigia: ZTL attiva. Bici o piedi.'
        });
    }

    // ============================================================
    // RAGUSA (SDS Lingue - Ibla)
    // ============================================================
    if (uni.includes('ragusa')) {
        directions.push({
            luogo: 'Ragusa Ibla',
            descrizione: `I plessi di Via Orfanotrofio (Santa Teresa) e del Distretto sono incastonati nei vicoli barocchi.
1. **Bus Urbani**: Da Ragusa Superiore prendi le linee urbane (es. 11, 33) che scendono a Ibla.
2. **A piedi**: Attraverso le famose scale di Ibla (suggestivo, ma impegnativo in salita!).
3. **Auto**: Cerca parcheggio vicino ai Giardini Iblei o Largo San Paolo (fuori ZTL).`,
            mezziPubblici: ['Bus Urbani AST', 'A piedi'],
            tempoStimato: '15 min',
            note: 'Centro Barocco. Molte scale e vie strette.'
        });
    }

    return directions;
};
