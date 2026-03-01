import { StudyRoom, DirectionsFromLocation } from '../../types';

// Database completo delle aule studio Federico II con posizioni reali

export const studyRoomsData: StudyRoom[] = [
    // ============================================================
    // CENTRO STORICO - UMANISTICA & GIURISPRUDENZA
    // ============================================================
    {
        id: 'unina_biblio_centrale_giur',
        nome: 'Biblioteca Centrale di Giurisprudenza',
        edificio: 'Edificio Centrale - Corso Umberto I',
        piano: 1,
        postiTotali: 120,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['WiFi Eduroam', 'Prese elettriche', 'Silenzio assoluto', 'Climatizzazione', 'Affreschi storici'],
        latitude: 40.8475,
        longitude: 14.2590,
        indirizzo: 'Corso Umberto I, 40 - Centro Storico, Napoli',
        university: 'UniNa',
        occupancy_rate: 'Alto',
        tags: ['Giurisprudenza', 'Centro Storico'],
        notes: 'La biblioteca storica dell\'ateneo. Ambiente monumentale e silenzioso.'
    },
    {
        id: 'unina_aula_studio_mezzocannone',
        nome: 'Aula Studio "Mezzocannone 16"',
        edificio: 'Palazzo degli Studi',
        piano: 0,
        postiTotali: 100,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['WiFi', 'Prese elettriche', 'Silenzio assoluto', 'Cortile interno'],
        latitude: 40.8480,
        longitude: 14.2560,
        indirizzo: 'Via Mezzocannone, 16 - Centro Storico, Napoli',
        university: 'UniNa',
        tags: ['Centro Storico', 'Umanistica'],
        notes: 'Situata nel cortile storico, molto frequentata dagli studenti di Giurisprudenza e Umanistica.'
    },
    {
        id: 'unina_mezzo8_aule',
        nome: 'Nuove Aule Studio Mezzocannone 8',
        edificio: 'Complesso Mezzocannone 8',
        piano: 4,
        postiTotali: 150,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Nuova Apertura', 'Luminosa', 'Prese USB'],
        latitude: 40.8478,
        longitude: 14.2565,
        indirizzo: 'Via Mezzocannone 8, Napoli',
        university: 'UniNa',
        tags: ['Nuova', 'Centro Storico'],
        notes: 'Aule AD1, AD2 e M5 recentemente inaugurate. Ambiente moderno nel cuore del centro storico.'
    },
    {
        id: 'unina_brau',
        nome: 'BRAU - Biblioteca Ricerca Area Umanistica',
        edificio: 'Complesso Sant\'Antoniello a Port\'Alba',
        piano: 0,
        postiTotali: 180,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Terrazza Panoramica', 'Silenzio', 'Consultazione'],
        latitude: 40.8495,
        longitude: 14.2515,
        indirizzo: 'Piazza Bellini, 60, Napoli',
        university: 'UniNa',
        occupancy_rate: 'Molto Alto',
        tags: ['Umanistica', 'Centro Storico', 'Silenzio'],
        notes: 'Una delle biblioteche più belle e frequentate. Affaccia su Piazza Bellini.'
    },
    {
        id: 'unina_spm_seminterrato',
        nome: 'Aule Studio San Pietro Martire (Seminterrato)',
        edificio: 'Chiostro di San Pietro Martire',
        piano: -1,
        postiTotali: 200,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['WiFi', 'Prese elettriche', 'Distributori', 'Socialità'],
        latitude: 40.8450,
        longitude: 14.2580,
        indirizzo: 'Via Porta di Massa, 1, Napoli',
        university: 'UniNa',
        tags: ['Umanistica', 'Social Hub'],
        notes: 'Serie di aule nel seminterrato del chiostro. Meno formali della BRAU.'
    },
    {
        id: 'unina_spm_a207',
        nome: 'Sala Studio A207',
        edificio: 'Chiostro di San Pietro Martire',
        piano: 2,
        postiTotali: 60,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi', 'Silenzio', 'Luminosa'],
        latitude: 40.8450,
        longitude: 14.2580,
        indirizzo: 'Via Porta di Massa, 1 (Scala A), Napoli',
        university: 'UniNa',
        tags: ['Umanistica', 'Centro Storico'],
    },

    // ============================================================
    // CENTRO STORICO - ARCHITETTURA & SCIENZE POLITICHE
    // ============================================================
    {
        id: 'unina_arch_gravina',
        nome: 'Biblioteca di Area Architettura "Palazzo Gravina"',
        edificio: 'Palazzo Gravina',
        piano: 1,
        postiTotali: 100,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi', 'Edificio Rinascimentale', 'Consultazione', 'Silenzio'],
        latitude: 40.8445,
        longitude: 14.2510,
        indirizzo: 'Via Monteoliveto, 3, Napoli',
        university: 'UniNa',
        tags: ['Architettura', 'Storica'],
        notes: 'Sede storica di Architettura. Ambiente suggestivo.'
    },
    {
        id: 'unina_arch_latilla',
        nome: 'Biblioteca Dipartimentale "Palazzo Latilla"',
        edificio: 'Palazzo Latilla',
        piano: 1,
        postiTotali: 50,
        orarioApertura: '09:00',
        orarioChiusura: '16:00',
        servizi: ['WiFi', 'Silenzio'],
        latitude: 40.8485,
        longitude: 14.2480,
        indirizzo: 'Via Tarsia, 31, Napoli',
        university: 'UniNa',
        tags: ['Architettura'],
    },
    {
        id: 'unina_scpol_rodino',
        nome: 'Biblioteca Scienze Politiche',
        edificio: 'Sede Via Rodinò',
        piano: 0,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Prese elettriche'],
        latitude: 40.8460,
        longitude: 14.2585,
        indirizzo: 'Via Leopoldo Rodinò, 22, Napoli',
        university: 'UniNa',
        tags: ['Scienze Politiche'],
        notes: 'Vicina alla sede centrale di Corso Umberto.'
    },
    {
        id: 'unina_soc_pieta',
        nome: 'Biblioteca Scienze Sociali',
        edificio: 'Palazzo De Laurentiis',
        piano: 0,
        postiTotali: 160, // Distribuiti su più piani
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi', 'Postazioni diffuse', 'Silenzio'],
        latitude: 40.8500,
        longitude: 14.2550,
        indirizzo: 'Vico Monte della Pietà, 1, Napoli',
        university: 'UniNa',
        tags: ['Sociologia'],
        notes: 'Postazioni studio distribuite sui vari piani dell\'edificio.'
    },

    // ============================================================
    // MONTE SANT'ANGELO (MSA)
    // ============================================================
    {
        id: 'unina_msa_biblio_eco',
        nome: 'Biblioteca Area Economia',
        edificio: 'Complesso MSA - Edificio 3',
        piano: 2,
        postiTotali: 150,
        orarioApertura: '08:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Prese elettriche', 'Climatizzazione', 'Stampanti'],
        latitude: 40.8393,
        longitude: 14.1850,
        indirizzo: 'Via Cintia, Monte Sant\'Angelo, Napoli',
        university: 'UniNa',
        tags: ['Economia', 'MSA'],
    },
    {
        id: 'unina_msa_centri_comuni',
        nome: 'Aula Studio Centri Comuni (Ed. 1)',
        edificio: 'Complesso MSA - Edificio 1',
        piano: 0,
        postiTotali: 200,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Prese elettriche', 'Climatizzazione', 'Silenzio assoluto'],
        latitude: 40.8393,
        longitude: 14.1850,
        indirizzo: 'Via Cintia, Monte Sant\'Angelo, Napoli',
        university: 'UniNa',
        tags: ['MSA', 'Grande'],
        notes: 'La più grande e frequentata del complesso.'
    },
    {
        id: 'unina_msa_ed8b',
        nome: 'Aula Informatizzata Edificio 8B',
        edificio: 'Complesso MSA - Edificio 8B',
        piano: 1,
        postiTotali: 80,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Prese elettriche', 'PC Fissi'],
        latitude: 40.8391,
        longitude: 14.1855,
        indirizzo: 'Via Cintia, Monte Sant\'Angelo, Napoli',
        university: 'UniNa',
        tags: ['Informatica', 'MSA'],
    },
    {
        id: 'unina_msa_bio_ed7',
        nome: 'Aula Studio Biologia (Ed. 7)',
        edificio: 'Complesso MSA - Edificio 7',
        piano: -1,
        postiTotali: 60,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['WiFi', 'Silenzio'],
        latitude: 40.8388,
        longitude: 14.1852,
        indirizzo: 'Via Cintia, Monte Sant\'Angelo, Napoli',
        university: 'UniNa',
        tags: ['Biologia', 'MSA'],
    },
    {
        id: 'unina_msa_chimica_ed5b',
        nome: 'Aula Studio Chimica (Ed. 5B)',
        edificio: 'Complesso MSA - Edificio 5B',
        piano: 0,
        postiTotali: 80,
        orarioApertura: '07:30',
        orarioChiusura: '19:30',
        servizi: ['WiFi', 'Climatizzazione', 'Silenzio'],
        latitude: 40.8390,
        longitude: 14.1846,
        indirizzo: 'Via Cintia, Monte Sant\'Angelo, Napoli',
        university: 'UniNa',
        tags: ['Chimica', 'MSA'],
    },
    {
        id: 'unina_msa_geo_l1',
        nome: 'Aula Studio GEO (Scienze Terra)',
        edificio: 'Complesso MSA - Edificio L1',
        piano: 3,
        postiTotali: 88,
        orarioApertura: '08:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Prese elettriche', 'Climatizzazione'],
        latitude: 40.8396,
        longitude: 14.1854,
        indirizzo: 'Via Cintia, Monte Sant\'Angelo, Napoli',
        university: 'UniNa',
        tags: ['Geologia', 'MSA'],
    },
    {
        id: 'unina_msa_mat_ed5a',
        nome: 'Aula Studio Matematica (Ed. 5A)',
        edificio: 'Complesso MSA - Edificio 5A',
        piano: 0,
        postiTotali: 90,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Prese elettriche', 'Climatizzazione'],
        latitude: 40.8390,
        longitude: 14.1845,
        indirizzo: 'Via Cintia, Monte Sant\'Angelo, Napoli',
        university: 'UniNa',
        tags: ['Matematica', 'MSA'],
    },
    {
        id: 'unina_msa_fisica_ed6',
        nome: 'Aula Studio Fisica (Ed. 6)',
        edificio: 'Complesso MSA - Edificio 6',
        piano: 0,
        postiTotali: 80,
        orarioApertura: '08:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Prese elettriche'],
        latitude: 40.8394,
        longitude: 14.1849,
        indirizzo: 'Via Cintia, Monte Sant\'Angelo, Napoli',
        university: 'UniNa',
        tags: ['Fisica', 'MSA'],
    },
    {
        id: 'unina_msa_ing_ed8a',
        nome: 'Aula Studio Ingegneria (Ed. 8A)',
        edificio: 'Complesso MSA - Edificio 8A',
        piano: 0,
        postiTotali: 90,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['WiFi', 'Prese elettriche', 'Climatizzazione'],
        latitude: 40.8390,
        longitude: 14.1854,
        indirizzo: 'Via Cintia, Monte Sant\'Angelo, Napoli',
        university: 'UniNa',
        tags: ['Ingegneria', 'MSA'],
    },
    {
        id: 'unina_msa_ssoi',
        nome: 'Sala Studio SSOI',
        edificio: 'Complesso MSA - Edificio SSOI',
        piano: 1,
        postiTotali: 100,
        orarioApertura: '08:00',
        orarioChiusura: '22:00',
        servizi: ['WiFi', 'Prese elettriche', 'Apertura Serale'],
        latitude: 40.8393,
        longitude: 14.1850,
        indirizzo: 'Via Cintia, Monte Sant\'Angelo, Napoli',
        university: 'UniNa',
        tags: ['MSA', 'Serale'],
        extendedHours: true,
        notes: 'Spesso aperta fino a tardi per gli studenti.'
    },

    // ============================================================
    // FUORIGROTTA - VIA CLAUDIO & PIAZZALE TECCHIO
    // ============================================================
    {
        id: 'unina_vc_dieti_biblio',
        nome: 'Biblioteca DIETI (Ed. 3)',
        edificio: 'Via Claudio - Edificio 3',
        piano: 2,
        postiTotali: 34,
        orarioApertura: '08:30',
        orarioChiusura: '16:45',
        servizi: ['WiFi', 'Silenzio Assoluto', 'PC'],
        latitude: 40.8286,
        longitude: 14.1905,
        indirizzo: 'Via Claudio 21, Napoli',
        university: 'UniNa',
        tags: ['Ingegneria', 'Via Claudio'],
    },
    {
        id: 'unina_vc_ed1_seminterrato',
        nome: 'Aula Studio Edificio 1 (Seminterrato)',
        edificio: 'Via Claudio - Edificio 1',
        piano: -1,
        postiTotali: 150,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Prese elettriche', 'Socialità'],
        latitude: 40.8281,
        longitude: 14.1908,
        indirizzo: 'Via Claudio 21, Napoli',
        university: 'UniNa',
        tags: ['Ingegneria', 'Via Claudio'],
    },
    {
        id: 'unina_vc_ed3_seminterrato',
        nome: 'Aula Studio Edificio 3 (Seminterrato)',
        edificio: 'Via Claudio - Edificio 3',
        piano: -1,
        postiTotali: 100,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Prese elettriche', 'Tavoli e sedie'],
        latitude: 40.8286,
        longitude: 14.1905,
        indirizzo: 'Via Claudio 21, Napoli',
        university: 'UniNa',
        tags: ['Ingegneria', 'Via Claudio'],
    },
    {
        id: 'unina_vc_gazebo',
        nome: 'Aule Studio "Gazebo" (Esterni)',
        edificio: 'Via Claudio - Cortili Ed. 1/6/8',
        piano: 0,
        postiTotali: 100,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Aria Aperta', 'Copertura'],
        latitude: 40.8290,
        longitude: 14.1900,
        indirizzo: 'Via Claudio 21, Napoli',
        university: 'UniNa',
        tags: ['Ingegneria', 'Outdoor'],
        notes: 'Strutture coperte nei cortili, ideali per la bella stagione.'
    },
    {
        id: 'unina_pt_acquario',
        nome: 'Aula "Acquario"',
        edificio: 'Piazzale Tecchio - Piano Terra',
        piano: 0,
        postiTotali: 120,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Prese elettriche', 'Pareti Vetrate', 'Affollata'],
        latitude: 40.8247,
        longitude: 14.1945,
        indirizzo: 'Piazzale Tecchio 80, Napoli',
        university: 'UniNa',
        occupancy_rate: 'Molto Alto',
        tags: ['Ingegneria', 'Tecchio'],
        notes: 'Il punto di ritrovo principale di Ingegneria a Tecchio.'
    },
    {
        id: 'unina_pt_biblio_gasparini',
        nome: 'Biblioteca "Ferdinando Gasparini"',
        edificio: 'Piazzale Tecchio',
        piano: 1,
        postiTotali: 250,
        orarioApertura: '08:30',
        orarioChiusura: '18:45',
        servizi: ['WiFi', 'Silenzio', 'Ampia'],
        latitude: 40.8247,
        longitude: 14.1945,
        indirizzo: 'Piazzale Tecchio 80, Napoli',
        university: 'UniNa',
        tags: ['Ingegneria', 'Tecchio'],
    },
    {
        id: 'unina_ing_agnano',
        nome: 'Biblioteca Ingegneria (Sede Agnano)',
        edificio: 'Complesso Agnano',
        piano: 0,
        postiTotali: 80,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['WiFi', 'Parcheggio'],
        latitude: 40.8250,
        longitude: 14.1750,
        indirizzo: 'Via Nuova Agnano 11, Napoli',
        university: 'UniNa',
        tags: ['Ingegneria', 'Agnano'],
        notes: 'Sede distaccata di Ingegneria.'
    },

    // ============================================================
    // POLICLINICO & FARMACIA (ZONA OSPEDALIERA)
    // ============================================================
    {
        id: 'unina_med_ed20',
        nome: 'Biblioteca Centrale Medicina (Ed. 20)',
        edificio: 'Policlinico - Edificio 20',
        piano: 0,
        postiTotali: 150,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Silenzio', 'Aria Condizionata'],
        latitude: 40.8565,
        longitude: 14.2794,
        indirizzo: 'Via Sergio Pansini 5, Napoli',
        university: 'UniNa',
        tags: ['Medicina'],
    },
    {
        id: 'unina_med_torre',
        nome: 'Aula Studio Torre Biologica (Ed. 19)',
        edificio: 'Policlinico - Torre Biologica',
        piano: 1,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Moderna'],
        latitude: 40.8570,
        longitude: 14.2790,
        indirizzo: 'Via Sergio Pansini 5, Napoli',
        university: 'UniNa',
        tags: ['Medicina'],
    },
    {
        id: 'unina_farmacia_biblio',
        nome: 'Biblioteca di Area Farmacia',
        edificio: 'Dipartimento di Farmacia',
        piano: 0,
        postiTotali: 100,
        orarioApertura: '09:00',
        orarioChiusura: '16:30',
        servizi: ['WiFi', 'Silenzio', 'Consultazione'],
        latitude: 40.8580,
        longitude: 14.2250,
        indirizzo: 'Via Domenico Montesano 49, Napoli',
        university: 'UniNa',
        tags: ['Farmacia', 'Zona Ospedaliera'],
        notes: 'Sede principale di Farmacia, distinta dal Policlinico.'
    },
    {
        id: 'unina_biotech_aule',
        nome: 'Aule Studio Biotecnologie',
        edificio: 'Centro Biotecnologie (CESTEV)',
        piano: 0,
        postiTotali: 120,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi', 'Moderno', 'Bar interno'],
        latitude: 40.8590,
        longitude: 14.2260,
        indirizzo: 'Via Tommaso de Amicis 95, Napoli',
        university: 'UniNa',
        tags: ['Biotecnologie', 'Zona Ospedaliera'],
        notes: 'Sede moderna con ampi spazi comuni e aule studio.'
    },

    // ============================================================
    // SAN GIOVANNI A TEDUCCIO (POLO TECNOLOGICO)
    // ============================================================
    {
        id: 'unina_sgt_a3',
        nome: 'Sala Studio Edificio A3',
        edificio: 'Polo San Giovanni - Modulo A3',
        piano: 0,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi Ultraveloce', 'Moderno', 'Prese ovunque'],
        latitude: 40.8360,
        longitude: 14.3060,
        indirizzo: 'Corso Nicolangelo Protopisani 70, Napoli',
        university: 'UniNa',
        tags: ['San Giovanni', 'Apple Academy'],
        notes: 'Campus modernissimo, sede della Apple Developer Academy.'
    },
    {
        id: 'unina_sgt_c3',
        nome: 'Sala Studio Edificio C (3° Piano)',
        edificio: 'Polo San Giovanni - Modulo C',
        piano: 3,
        postiTotali: 120,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Vista Vesuvio', 'Silenzio'],
        latitude: 40.8360,
        longitude: 14.3060,
        indirizzo: 'Corso Nicolangelo Protopisani 70, Napoli',
        university: 'UniNa',
        tags: ['San Giovanni'],
    },
    {
        id: 'unina_sgt_c1',
        nome: 'Sala Studio Edificio C (1° Piano)',
        edificio: 'Polo San Giovanni - Modulo C',
        piano: 1,
        postiTotali: 20,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Intima'],
        latitude: 40.8360,
        longitude: 14.3060,
        indirizzo: 'Corso Nicolangelo Protopisani 70, Napoli',
        university: 'UniNa',
        tags: ['San Giovanni'],
    },

    // ============================================================
    // SCAMPIA (COMPLESSO PROFESSIONI SANITARIE)
    // ============================================================
    {
        id: 'unina_scampia_biblio',
        nome: 'Biblioteca Complesso Scampia',
        edificio: 'Nuovo Polo Scampia',
        piano: 1,
        postiTotali: 100,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['WiFi', 'Nuova Costruzione', 'Luminosa'],
        latitude: 40.8950,
        longitude: 14.2420,
        indirizzo: 'Viale della Resistenza, Scampia, Napoli',
        university: 'UniNa',
        tags: ['Scampia', 'Sanitarie'],
        notes: 'Nuova sede inaugurata nel 2022. Architettura circolare iconica.'
    },

    // ============================================================
    // PORTICI (AGRARIA)
    // ============================================================
    {
        id: 'unina_agraria_reggia',
        nome: 'Biblioteca Centrale Agraria',
        edificio: 'Reggia di Portici',
        piano: 1,
        postiTotali: 120,
        orarioApertura: '08:30',
        orarioChiusura: '17:00',
        servizi: ['WiFi', 'Contesto Reale', 'Parco', 'Silenzio'],
        latitude: 40.8100,
        longitude: 14.3420,
        indirizzo: 'Via Università 100, Portici (NA)',
        university: 'UniNa',
        tags: ['Agraria', 'Reggia'],
        notes: 'Studiare dentro una Reggia Borbonica. Ambiente unico.'
    },

    // ============================================================
    // VETERINARIA (CENTRO)
    // ============================================================
    {
        id: 'unina_vet_delpino',
        nome: 'Biblioteca Area Veterinaria',
        edificio: 'Sede Centrale Veterinaria',
        piano: 1,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '17:00',
        servizi: ['WiFi', 'Silenzio'],
        latitude: 40.8620,
        longitude: 14.2650,
        indirizzo: 'Via Federico Delpino 1, Napoli',
        university: 'UniNa',
        tags: ['Veterinaria'],
        notes: 'Vicino all\'Orto Botanico e all\'Albergo dei Poveri.'
    },
    {
        id: 'unina_orto_botanico',
        nome: 'Biblioteca Dipartimento Biologia (Orto Botanico)',
        edificio: 'Real Orto Botanico',
        piano: 0,
        postiTotali: 40,
        orarioApertura: '09:00',
        orarioChiusura: '13:30',
        servizi: ['Contesto Verde', 'Silenzio', 'Consultazione'],
        latitude: 40.8615,
        longitude: 14.2640,
        indirizzo: 'Via Foria 223, Napoli',
        university: 'UniNa',
        tags: ['Biologia', 'Verde'],
        notes: 'Immersa nel verde dell\'Orto Botanico. Orari ridotti, verificare accesso.'
    },

    // ============================================================
    // ALTRE SEDI CENTRO (SAN MARCELLINO)
    // ============================================================
    {
        id: 'unina_san_marcellino',
        nome: 'Biblioteca di San Marcellino',
        edificio: 'Complesso dei Santi Marcellino e Festo',
        piano: 1,
        postiTotali: 60,
        orarioApertura: '09:00',
        orarioChiusura: '16:00',
        servizi: ['Chiostro Storico', 'Silenzio', 'Affreschi'],
        latitude: 40.8470,
        longitude: 14.2575,
        indirizzo: 'Largo S. Marcellino 10, Napoli',
        university: 'UniNa',
        tags: ['Umanistica', 'Scienze Politiche'],
        notes: 'Sede prestigiosa e storica, spesso usata per eventi ma dotata di sala lettura.'
    },

    // ============================================================
    // SEDI PERIFERICHE (AVELLINO)
    // ============================================================
    {
        id: 'unina_avellino_sede',
        nome: 'Aule Studio Sede di Avellino',
        edificio: 'Plesso Viticoltura ed Enologia',
        piano: 1,
        postiTotali: 50,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Laboratori', 'Tranquillità'],
        latitude: 40.9160,
        longitude: 14.7880,
        indirizzo: 'Viale Italia, Avellino',
        university: 'UniNa',
        tags: ['Avellino', 'Enologia'],
        notes: 'Sede distaccata per il corso di Viticoltura ed Enologia.'
    },

    // ============================================================
    // SEDI DISTACCATE (BACOLI)
    // ============================================================
    {
        id: 'unina_bacoli_ferretti',
        nome: 'Villa Ferretti (Polo Bacoli)',
        edificio: 'Villa Ferretti',
        piano: 0,
        postiTotali: 50,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Vista Mare', 'Parco', 'Digital Humanities'],
        latitude: 40.8050,
        longitude: 14.0850,
        indirizzo: 'Via Castello 43, Bacoli (NA)',
        university: 'UniNa',
        tags: ['Bacoli', 'Mare'],
        notes: 'Sede splendida a picco sul mare, ospita corsi di Digital Humanities.'
    },

    // ============================================================
    // FUORIGROTTA - DIST (Strutture per Ingegneria e Architettura)
    // ============================================================
    {
        id: 'unina_dist_carlo_greco',
        nome: 'Aula Studio "Carlo Greco" (DIST)',
        edificio: 'Via Claudio - Edificio 6 (DIST)',
        piano: 1,
        postiTotali: 40,
        orarioApertura: '09:00',
        orarioChiusura: '18:30',
        servizi: ['WiFi Eduroam', 'Prese elettriche', 'Silenzio', 'Climatizzazione'],
        latitude: 40.8285,
        longitude: 14.1910,
        indirizzo: 'Via Claudio 21 (Edificio 6), Napoli',
        university: 'UniNa',
        tags: ['Ingegneria', 'Via Claudio', 'Nuova'],
        notes: 'Nuova aula studio al primo piano dell\'edificio 6. 40 postazioni con prese elettriche e WiFi. Orario spezzato: 09:00-13:30 e 14:30-18:30. Vietato consumare pasti e spostare arredi.'
    },

    // ============================================================
    // MONTE SANT'ANGELO - SCIENZE CHIMICHE (Area Studio Dedicata)
    // ============================================================
    {
        id: 'unina_msa_scienze_chimiche',
        nome: 'Area Studio Scienze Chimiche',
        edificio: 'Complesso MSA - Dipartimento Scienze Chimiche',
        piano: 0,
        postiTotali: 80,
        orarioApertura: '07:30',
        orarioChiusura: '19:30',
        servizi: ['WiFi Eduroam', 'Climatizzazione', 'Prese elettriche', '2 Sale'],
        latitude: 40.8389,
        longitude: 14.1848,
        indirizzo: 'Via Cintia, Monte Sant\'Angelo, Napoli',
        university: 'UniNa',
        tags: ['Chimica', 'MSA', '❄️ Climatizzato'],
        notes: 'Area studio dedicata del Dipartimento di Scienze Chimiche con 80 postazioni distribuite in 2 sale. Aperta lun-ven escluse festività e chiusure d\'Ateneo. WiFi e aria condizionata.'
    }
];

export const getDirectionsForRoom = (room: StudyRoom): DirectionsFromLocation[] => {
    // Logic based on building/area
    const indirizzo = room.indirizzo.toLowerCase();
    const edificio = room.edificio.toLowerCase();
    const id = room.id.toLowerCase();

    // --- MONTE SANT'ANGELO ---
    if (edificio.includes('monte sant\'angelo') || indirizzo.includes('cintia')) {
        return [
            {
                luogo: 'Piazzale Tecchio (Stazione Campi Flegrei)',
                descrizione: 'Prendi bus R6, 180 o 615. Scendi dentro il complesso.',
                mezziPubblici: ['Bus R6', 'Bus 180', 'Bus 615'],
                tempoStimato: '15-20 min',
                note: 'I bus entrano direttamente nel campus.'
            },
            {
                luogo: 'Stazione Traiano (Circumflegrea)',
                descrizione: 'Servizio Navetta gratuito per Monte S. Angelo (attivo lun-ven).',
                mezziPubblici: ['Navetta Universitaria'],
                tempoStimato: '10 min',
            },
            {
                luogo: 'In Auto (Tangenziale)',
                descrizione: 'Uscita Fuorigrotta, segui per Via Cintia/Università.',
                mezziPubblici: ['Auto'],
                tempoStimato: '10 min dall\'uscita',
                note: 'Ampio parcheggio studenti disponibile.'
            }
        ];
    }

    // --- FUORIGROTTA (CLAUDIO / TECCHIO / AGNANO) ---
    else if (edificio.includes('via claudio') || edificio.includes('tecchio') || indirizzo.includes('agnano')) {
        if (indirizzo.includes('agnano')) {
            return [
                {
                    luogo: 'Stazione Campi Flegrei',
                    descrizione: 'Bus C1 o 502 per Via Agnano.',
                    mezziPubblici: ['Bus C1'],
                    tempoStimato: '15 min',
                },
                {
                    luogo: 'In Auto',
                    descrizione: 'Uscita Tangenziale Agnano.',
                    mezziPubblici: ['Auto'],
                    tempoStimato: '5 min',
                }
            ];
        }
        return [
            {
                luogo: 'Stazione Campi Flegrei (Metro L2 / Cumana)',
                descrizione: 'A piedi. Piazzale Tecchio è di fronte alla stazione. Via Claudio è a 5 min.',
                mezziPubblici: ['A piedi'],
                tempoStimato: '3-5 min',
            },
            {
                luogo: 'Stazione Mostra (Cumana)',
                descrizione: 'A piedi, direzione Stadio Maradona.',
                mezziPubblici: ['A piedi'],
                tempoStimato: '5 min',
            }
        ];
    }

    // --- CENTRO STORICO (UMANISTICA / GIURISPRUDENZA / ARCHITETTURA / SCIENZE POLITICHE) ---
    else if (edificio.includes('centro storico') || indirizzo.includes('mezzocannone') || indirizzo.includes('umberto') || indirizzo.includes('porta di massa') || indirizzo.includes('bellini') || indirizzo.includes('monteoliveto') || indirizzo.includes('rodinò') || indirizzo.includes('pietà') || indirizzo.includes('marcellino')) {
        return [
            {
                luogo: 'Stazione Centrale (Garibaldi)',
                descrizione: 'Metro L1 fino a "Università" (per Corso Umberto/Porta di Massa) o "Dante" (per Bellini/Architettura).',
                mezziPubblici: ['Metro L1'],
                tempoStimato: '15 min',
            },
            {
                luogo: 'Piazza Bovio (Università)',
                descrizione: 'A piedi verso le sedi (2-5 min).',
                mezziPubblici: ['A piedi'],
                tempoStimato: '5 min',
            }
        ];
    }

    // --- POLICLINICO / FARMACIA / BIOTECNOLOGIE ---
    else if (edificio.includes('policlinico') || indirizzo.includes('pansini') || indirizzo.includes('montesano') || indirizzo.includes('amicis')) {
        return [
            {
                luogo: 'Stazione Policlinico (Metro L1)',
                descrizione: 'Uscita diretta nel complesso ospedaliero (per Pansini/De Amicis). Per Farmacia (Montesano) 5 min a piedi.',
                mezziPubblici: ['Metro L1'],
                tempoStimato: '2-5 min',
                note: 'Segui indicazioni per Edifici Didattici.'
            },
            {
                luogo: 'In Auto',
                descrizione: 'Tangenziale Uscita Zona Ospedaliera.',
                mezziPubblici: ['Auto'],
                tempoStimato: 'Var',
                note: 'Parcheggio interno a pagamento o strisce blu esterne.'
            }
        ];
    }

    // --- SAN GIOVANNI A TEDUCCIO ---
    else if (indirizzo.includes('protopisani') || id.includes('sgt')) {
        return [
            {
                luogo: 'Metro L2 (San Giovanni-Barra)',
                descrizione: 'La stazione è a 5 minuti a piedi dal Campus.',
                mezziPubblici: ['Metro L2'],
                tempoStimato: '5 min a piedi',
                note: 'Comodissimo da Garibaldi (1 fermata).'
            },
            {
                luogo: 'Tram 4',
                descrizione: 'Dal centro/Marina, ferma davanti al polo.',
                mezziPubblici: ['Tram 4'],
                tempoStimato: '20-30 min',
            }
        ];
    }

    // --- SCAMPIA ---
    else if (indirizzo.includes('scampia') || indirizzo.includes('resistenza')) {
        return [
            {
                luogo: 'Metro L1 (Piscinola/Scampia)',
                descrizione: 'Dalla stazione metro, il complesso è a 5-10 minuti a piedi o bus C67.',
                mezziPubblici: ['Metro L1', 'Bus C67'],
                tempoStimato: '10 min',
            },
            {
                luogo: 'Bus 180',
                descrizione: 'Collega Fuorigrotta/Vomero con Scampia.',
                mezziPubblici: ['Bus 180'],
                tempoStimato: '45 min',
            }
        ];
    }

    // --- PORTICI (AGRARIA) ---
    else if (indirizzo.includes('portici') || edificio.includes('reggia')) {
        return [
            {
                luogo: 'Treno Regionale (Stazione Portici-Ercolano)',
                descrizione: 'Dalla stazione, la Reggia è a 10 minuti a piedi verso il mare.',
                mezziPubblici: ['Treno Regionale'],
                tempoStimato: '10 min a piedi',
            },
            {
                luogo: 'Circumvesuviana (Portici Via Libertà)',
                descrizione: 'Scendi a Via Libertà e cammina verso la Reggia (15 min).',
                mezziPubblici: ['Circumvesuviana'],
                tempoStimato: '15 min',
            }
        ];
    }

    // --- VETERINARIA (VIA DELPINO) ---
    else if (indirizzo.includes('delpino') || room.tags?.includes('Veterinaria') || indirizzo.includes('foria')) {
        return [
            {
                luogo: 'Piazza Carlo III',
                descrizione: 'Snodo principale bus (201, 254, R5). Risali via Don Bosco/Delpino.',
                mezziPubblici: ['Bus'],
                tempoStimato: '10 min a piedi',
            },
            {
                luogo: 'Tangenziale (Doganella)',
                descrizione: 'Uscita Doganella, direzione Carlo III.',
                mezziPubblici: ['Auto'],
                tempoStimato: '5 min',
            }
        ];
    }

    // --- AVELLINO ---
    else if (indirizzo.includes('avellino')) {
        return [
            {
                luogo: 'Bus AIR Campania',
                descrizione: 'Da Napoli (Metropark) ad Avellino (Piazza Kennedy/Autostazione).',
                mezziPubblici: ['Bus AIR'],
                tempoStimato: '50 min',
            },
            {
                luogo: 'In Auto',
                descrizione: 'Autostrada A16, uscita Avellino Ovest.',
                mezziPubblici: ['Auto'],
                tempoStimato: '40 min da Napoli',
            }
        ];
    }

    // --- BACOLI ---
    else if (indirizzo.includes('bacoli')) {
        return [
            {
                luogo: 'Cumana (Torregaveta)',
                descrizione: 'Scendi a Torregaveta o Lucrino, poi bus locale per Bacoli/Castello.',
                mezziPubblici: ['Cumana', 'Bus'],
                tempoStimato: '45 min da Napoli',
            },
            {
                luogo: 'In Auto',
                descrizione: 'Tangenziale uscita Pozzuoli -> Bacoli.',
                mezziPubblici: ['Auto'],
                tempoStimato: '30 min',
            }
        ];
    }

    // Default direction
    return [
        {
            luogo: 'Stazione Centrale',
            descrizione: 'Verifica la posizione specifica su Maps.',
            mezziPubblici: ['Metro/Bus'],
            tempoStimato: 'Var',
        }
    ];
};
