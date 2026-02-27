import { StudyRoom, DirectionsFromLocation } from '../../types';

export const afamSiciliaRooms: StudyRoom[] = [
    // ============================================================
    // PALERMO - ACCADEMIA DI BELLE ARTI (Statale)
    // ============================================================
    {
        id: 'aba_palermo_biblio',
        nome: 'Biblioteca Storica ABA Palermo',
        edificio: 'Sede Papireto',
        piano: 1,
        postiDisponibili: 30,
        postiTotali: 60,
        orarioApertura: '09:00',
        orarioChiusura: '17:30',
        servizi: ['Fondi d\'Arte', 'Silenzio', 'Archivio Storico'],
        latitude: 38.1170,
        longitude: 13.3530,
        indirizzo: 'Via Papireto 20, Palermo',
        university: 'AFAM - ABA Palermo',
        tags: ['Accademia', 'Palermo', '🎨 Arte', '🔇 Silenzio', '📖 Teoria'],
        notes: 'Ambiente rigoroso dedicato allo studio della Storia dell\'Arte e della Critica. Nessun materiale artistico ammesso sui tavoli.'
    },
    {
        id: 'aba_palermo_zisa_open',
        nome: 'Open Space Cantieri Culturali',
        edificio: 'Cantieri Culturali alla Zisa',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 120,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Ampi Spazi', 'Lavoro di Gruppo', 'Polo Creativo'],
        latitude: 38.1225,
        longitude: 13.3420,
        indirizzo: 'Via Paolo Gili 4, Palermo',
        university: 'AFAM - ABA Palermo',
        tags: ['Accademia', 'Palermo', '🏭 Ex Industriale', '🗣️ Gruppo', '🖌️ Pratica'],
        notes: 'Il cuore pulsante dell\'arte contemporanea a Palermo. Caotico, creativo e vitale. Rumore di fondo costante.'
    },
    {
        id: 'aba_palermo_zisa_scultura',
        nome: 'Laboratorio Scultura e Scenografia',
        edificio: 'Cantieri Culturali alla Zisa (Padiglione Scultura)',
        piano: 0,
        postiDisponibili: 15,
        postiTotali: 40,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['Materiali Pesanti', 'Aspiratori', 'Sporco Tollerato'],
        latitude: 38.1226,
        longitude: 13.3422,
        indirizzo: 'Via Paolo Gili 4, Palermo',
        university: 'AFAM - ABA Palermo',
        tags: ['Laboratorio', 'Palermo', '🗿 Scultura', '⚠️ Sporco Estremo'],
        notes: 'Polvere di marmo, legno e resine. Vestiti da lavoro obbligatori. Si lavora in piedi sui cavalletti o ai banchi.'
    },

    // ============================================================
    // CATANIA - ACCADEMIA DI BELLE ARTI (Statale)
    // ============================================================
    {
        id: 'aba_catania_biblio',
        nome: 'Biblioteca ABA Catania',
        edificio: 'Sede Centrale',
        piano: 1,
        postiDisponibili: 25,
        postiTotali: 50,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['Cataloghi Mostre', 'Silenzio'],
        latitude: 37.5130,
        longitude: 15.0870,
        indirizzo: 'Via Raimondo Franchetti 73, Catania',
        university: 'AFAM - ABA Catania',
        tags: ['Accademia', 'Catania', '🎨 Arte', '🔇 Silenzio'],
        notes: 'Sede storica. Raccolta e molto tranquilla, essenziale per la preparazione degli esami teorici.'
    },
    {
        id: 'aba_catania_lab_multimediale',
        nome: 'Laboratorio Nuove Tecnologie',
        edificio: 'Sede Nuove Tecnologie dell\'Arte',
        piano: 2,
        postiDisponibili: 15,
        postiTotali: 35,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['Workstation', 'Tavolette Grafiche', 'Prese PC'],
        latitude: 37.5132,
        longitude: 15.0872,
        indirizzo: 'Via Raimondo Franchetti 73, Catania',
        university: 'AFAM - ABA Catania',
        tags: ['Accademia', 'Catania', '💻 Digital Art', '🔌 Tech'],
        notes: 'Spazio iper-tecnologico per Graphic Design, Fotografia e Video Editing.'
    },
    {
        id: 'aba_catania_pittura',
        nome: 'Atelier Pittura e Decorazione',
        edificio: 'Sede Barletta',
        piano: 0,
        postiDisponibili: 20,
        postiTotali: 60,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['Luce Naturale', 'Cavalletti', 'Lavandini'],
        latitude: 37.5190,
        longitude: 15.0820,
        indirizzo: 'Via Barletta 108, Catania',
        university: 'AFAM - ABA Catania',
        tags: ['Atelier', 'Catania', '🖌️ Pittura', '🧱 Sporco Tollerato'],
        notes: 'Odore di trementina forte. Ambiente puramente pratico. Portati le tele e non temere di macchiarti.'
    },

    // ============================================================
    // SANT'AGATA LI BATTIATI - ACCADEMIA ABADIR (Design)
    // ============================================================
    {
        id: 'aba_abadir_design_lab',
        nome: 'Open Space Design & Comunicazione Visiva',
        edificio: 'Sede Abadir',
        piano: 0,
        postiDisponibili: 25,
        postiTotali: 60,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['Tavoli Enormi', 'Wi-Fi Veloce', 'Design Moderno'],
        latitude: 37.5580,
        longitude: 15.0815,
        indirizzo: 'Via Giacomo Leopardi 8, Sant\'Agata li Battiati (CT)',
        university: 'AFAM - ABA Abadir',
        tags: ['Design', 'Catania Estrema', '📐 Tavoli Grandi', '💡 Creatività'],
        notes: 'Struttura d\'eccellenza per il design. Ambiente minimalista, pulito e votato alla progettazione digitale e concettuale.'
    },
    {
        id: 'aba_abadir_cortile',
        nome: 'Cortile Creativo Abadir',
        edificio: 'Spazi Esterni Abadir',
        piano: 0,
        postiDisponibili: 15,
        postiTotali: 30,
        orarioApertura: '09:00',
        orarioChiusura: '18:30',
        servizi: ['Relax', 'Brainstorming', 'Pausa Caffè'],
        latitude: 37.5582,
        longitude: 15.0817,
        indirizzo: 'Via Giacomo Leopardi 8, Sant\'Agata li Battiati',
        university: 'AFAM - ABA Abadir',
        tags: ['Outdoor', 'Abadir', '☕ Brainstorming', '☀️ Relax'],
        notes: 'Area esterna molto curata, perfetta per discutere idee di progetto o fare una pausa.'
    },

    // ============================================================
    // RAGUSA E AGRIGENTO - ACCADEMIE LEGALMENTE RICONOSCIUTE
    // ============================================================
    {
        id: 'aba_ragusa_angio',
        nome: 'Laboratori ABA "Eleonora d\'Angiò"',
        edificio: 'Sede Centrale Ragusa',
        piano: 1,
        postiDisponibili: 15,
        postiTotali: 40,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Aule Progetto', 'Prese PC', 'Restauro'],
        latitude: 36.9250,
        longitude: 14.7300,
        indirizzo: 'Via P. P. Pasolini, Ragusa',
        university: 'AFAM - ABA Ragusa',
        tags: ['Accademia', 'Ragusa', '🎨 Restauro', '🗣️ Gruppo'],
        notes: 'Polo di riferimento per la provincia Iblea. Focalizzata su arti visive e restauro.'
    },
    {
        id: 'aba_agrigento_michelangelo',
        nome: 'Aule Progetto ABA "Michelangelo"',
        edificio: 'Sede Centrale Agrigento',
        piano: 1,
        postiDisponibili: 20,
        postiTotali: 50,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Arti Visive', 'Lavoro Pratico', 'Luce Naturale'],
        latitude: 37.3110,
        longitude: 13.5760,
        indirizzo: 'Via Bac Bac, Agrigento',
        university: 'AFAM - ABA Agrigento',
        tags: ['Accademia', 'Agrigento', '🖌️ Pratica', '📐 Progettazione'],
        notes: 'L\'hub creativo dell\'agrigentino. Spazi versatili usati sia per la teoria che per l\'applicazione pratica.'
    },

    // ============================================================
    // PALERMO - CONSERVATORIO "ALESSANDRO SCARLATTI"
    // ============================================================
    {
        id: 'cons_scarlatti_biblio',
        nome: 'Biblioteca Musicale "Scarlatti"',
        edificio: 'Sede Centrale Conservatorio',
        piano: 1,
        postiDisponibili: 20,
        postiTotali: 45,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Fondi Antichi', 'Spartiti Rari', 'Silenzio'],
        latitude: 38.1215,
        longitude: 13.3615,
        indirizzo: 'Via Squarcialupo 45, Palermo',
        university: 'AFAM - Cons. Scarlatti',
        tags: ['Conservatorio', 'Palermo', '🎵 Musica', '🔇 Silenzio', '📖 Spartiti'],
        notes: 'Nel cuore del centro storico, dietro l\'abside di San Domenico. Silenzio d\'obbligo per lo studio della teoria.'
    },
    {
        id: 'cons_scarlatti_prove',
        nome: 'Sale Studio Insonorizzate',
        edificio: 'Sede Centrale Conservatorio',
        piano: 0,
        postiDisponibili: 5,
        postiTotali: 40, // Aule singole/doppie
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Insonorizzazione', 'Pianoforti a Coda', 'Prenotazione'],
        latitude: 38.1216,
        longitude: 13.3616,
        indirizzo: 'Via Squarcialupo 45, Palermo',
        university: 'AFAM - Cons. Scarlatti',
        tags: ['Conservatorio', 'Palermo', '🎹 Sale Prova', '📅 Prenotazione'],
        notes: 'Le stanze sono spesso occupate dai tesisti. La prenotazione è fondamentale, lotta accanita per i pianoforti a coda.'
    },
    {
        id: 'cons_scarlatti_chiostro',
        nome: 'Chiostro dello Scarlatti (Outdoor)',
        edificio: 'Sede Centrale',
        piano: 0,
        postiDisponibili: 25,
        postiTotali: 60,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Pausa', 'Storico', 'Musica all\'Aperto'],
        latitude: 38.1217,
        longitude: 13.3614,
        indirizzo: 'Via Squarcialupo 45, Palermo',
        university: 'AFAM - Cons. Scarlatti',
        tags: ['Outdoor', 'Palermo', '🏛️ Storico', '🎻 Musica Aperta'],
        notes: 'Non è raro assistere a prove informali di fiati o archi all\'aperto. Atmosfera magica.'
    },

    // ============================================================
    // CATANIA - CONSERVATORIO "VINCENZO BELLINI"
    // ============================================================
    {
        id: 'cons_bellini_ct_biblio',
        nome: 'Biblioteca Musicale "Vincenzo Bellini"',
        edificio: 'Istituto Sacro Cuore (Sede Conservatorio)',
        piano: 1,
        postiDisponibili: 25,
        postiTotali: 50,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Silenzio', 'Letteratura Musicale'],
        latitude: 37.5140,
        longitude: 15.0880,
        indirizzo: 'Via Istituto Sacro Cuore 3, Catania',
        university: 'AFAM - Cons. Bellini CT',
        tags: ['Conservatorio', 'Catania', '🎵 Musica', '🔇 Silenzio'],
        notes: 'Vicinissima a Via Etnea. Perfetta per le ricerche musicologiche e la stesura delle tesi.'
    },
    {
        id: 'cons_bellini_ct_prove',
        nome: 'Aule Prova Strumentali',
        edificio: 'Sede Centrale',
        piano: 0,
        postiDisponibili: 8,
        postiTotali: 35,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['Pianoforti', 'Isolamento Acustico', 'Leggii'],
        latitude: 37.5142,
        longitude: 15.0882,
        indirizzo: 'Via Istituto Sacro Cuore 3, Catania',
        university: 'AFAM - Cons. Bellini CT',
        tags: ['Conservatorio', 'Catania', '🎹 Pratica', '📅 Prenotazione'],
        notes: 'Il suono fuoriesce nei corridoi, ma all\'interno le aule permettono uno studio intenso. Arriva presto.'
    },
    {
        id: 'cons_bellini_ct_elettronica',
        nome: 'Laboratorio Musica Elettronica',
        edificio: 'Plesso Audio',
        piano: 2,
        postiDisponibili: 10,
        postiTotali: 20,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Sintetizzatori', 'Mac', 'Monitor Audio'],
        latitude: 37.5141,
        longitude: 15.0881,
        indirizzo: 'Via Istituto Sacro Cuore 3, Catania',
        university: 'AFAM - Cons. Bellini CT',
        tags: ['Conservatorio', 'Catania', '🎛️ Elettronica', '🔌 Tech'],
        notes: 'Accesso spesso riservato agli iscritti al corso di Musica Elettronica. Macchine di altissimo livello.'
    },

    // ============================================================
    // MESSINA - CONSERVATORIO "ARCANGELO CORELLI"
    // ============================================================
    {
        id: 'cons_corelli_biblio',
        nome: 'Biblioteca "Arcangelo Corelli"',
        edificio: 'Sede Centrale Polo Annunziata',
        piano: 1,
        postiDisponibili: 20,
        postiTotali: 40,
        orarioApertura: '09:00',
        orarioChiusura: '17:30',
        servizi: ['Spartiti', 'Postazioni Ascolto', 'Silenzio'],
        latitude: 38.2240,
        longitude: 15.5460,
        indirizzo: 'Viale Annunziata, Messina',
        university: 'AFAM - Cons. Corelli',
        tags: ['Conservatorio', 'Messina', '🎵 Musica', '🎧 Audio'],
        notes: 'Situato nella zona nord della città. Ottime postazioni di ascolto con strumentazione Hi-Fi.'
    },
    {
        id: 'cons_corelli_prove',
        nome: 'Sale Prova Insonorizzate',
        edificio: 'Sede Centrale',
        piano: 0,
        postiDisponibili: 6,
        postiTotali: 30,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Pianoforti', 'Isolamento'],
        latitude: 38.2242,
        longitude: 15.5462,
        indirizzo: 'Viale Annunziata, Messina',
        university: 'AFAM - Cons. Corelli',
        tags: ['Conservatorio', 'Messina', '🎹 Pratica', '📅 Prenotazione'],
        notes: 'Aule singole. Richiesta la prenotazione giornaliera presso i coadiutori.'
    },

    // ============================================================
    // TRAPANI E PROVINCIA AG - CONSERVATORI (Scontrino / Toscanini)
    // ============================================================
    {
        id: 'cons_scontrino_biblio',
        nome: 'Biblioteca Cons. "Antonio Scontrino"',
        edificio: 'Polo Universitario / Quartiere Fontanelle',
        piano: 1,
        postiDisponibili: 15,
        postiTotali: 35,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['Tranquillità', 'Spartiti'],
        latitude: 38.0130,
        longitude: 12.5350,
        indirizzo: 'Via Francesco Sceusa 1, Trapani',
        university: 'AFAM - Cons. Scontrino',
        tags: ['Conservatorio', 'Trapani', '🎵 Musica', '🔇 Silenzio'],
        notes: 'Nel quartiere Fontanelle Sud. Area molto tranquilla e dedicata allo studio teorico.'
    },
    {
        id: 'cons_scontrino_prove',
        nome: 'Aule Prova Strumentali (Scontrino)',
        edificio: 'Plesso Didattico',
        piano: 0,
        postiDisponibili: 5,
        postiTotali: 25,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['Isolamento', 'Leggii'],
        latitude: 38.0132,
        longitude: 12.5352,
        indirizzo: 'Via Francesco Sceusa 1, Trapani',
        university: 'AFAM - Cons. Scontrino',
        tags: ['Conservatorio', 'Trapani', '🎹 Pratica'],
        notes: 'Aule funzionali, spesso utilizzate dalle cattedre di fiati e archi.'
    },
    {
        id: 'cons_toscanini_biblio',
        nome: 'Sale Lettura Cons. "Arturo Toscanini"',
        edificio: 'Sede Centrale Ribera',
        piano: 1,
        postiDisponibili: 10,
        postiTotali: 25,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['Intimo', 'Silenzio'],
        latitude: 37.4980,
        longitude: 13.2640,
        indirizzo: 'Corso Umberto I 321, Ribera (AG)',
        university: 'AFAM - Cons. Toscanini',
        tags: ['Conservatorio', 'Ribera', '🎵 Musica', '🔇 Silenzio'],
        notes: 'Polo d\'eccellenza musicale nell\'agrigentino. Atmosfera molto familiare.'
    },
    {
        id: 'cons_toscanini_prove',
        nome: 'Aule Studio Pratica Strumentale',
        edificio: 'Sede Ribera',
        piano: 0,
        postiDisponibili: 5,
        postiTotali: 20,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['Pianoforti', 'Isolamento'],
        latitude: 37.4982,
        longitude: 13.2642,
        indirizzo: 'Corso Umberto I 321, Ribera (AG)',
        university: 'AFAM - Cons. Toscanini',
        tags: ['Conservatorio', 'Ribera', '🎹 Pratica'],
        notes: 'La disponibilità delle aule varia molto in base alle ore di lezione dei docenti principali.'
    },

    // ============================================================
    // CALTANISSETTA - CONSERVATORIO "VINCENZO BELLINI"
    // ============================================================
    {
        id: 'cons_bellini_cl_biblio',
        nome: 'Biblioteca Cons. "Vincenzo Bellini" (CL)',
        edificio: 'Sede Centrale Caltanissetta',
        piano: 1,
        postiDisponibili: 15,
        postiTotali: 30,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['Silenzio', 'Fondi Musicali'],
        latitude: 37.4900,
        longitude: 14.0620,
        indirizzo: 'Corso Umberto I 84, Caltanissetta',
        university: 'AFAM - Cons. Bellini CL',
        tags: ['Conservatorio', 'Caltanissetta', '🎵 Musica', '🔇 Silenzio'],
        notes: 'Situato nel pieno centro storico di Caltanissetta. Ideale per la concentrazione.'
    },
    {
        id: 'cons_bellini_cl_prove',
        nome: 'Sale Prova Insonorizzate (CL)',
        edificio: 'Sede Centrale',
        piano: 0,
        postiDisponibili: 6,
        postiTotali: 20,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['Pianoforti', 'Isolamento'],
        latitude: 37.4902,
        longitude: 14.0622,
        indirizzo: 'Corso Umberto I 84, Caltanissetta',
        university: 'AFAM - Cons. Bellini CL',
        tags: ['Conservatorio', 'Caltanissetta', '🎹 Pratica'],
        notes: 'Aule a disposizione degli studenti per l\'esercizio pratico individuale.'
    }
];

export const getDirectionsAFAMSicilia = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];
    const uni = (room.university || '').toLowerCase();

    const id = room.id.toLowerCase();

    // ============================================================
    // PALERMO (ABA Zisa/Papireto, Cons Scarlatti)
    // ============================================================
    if (uni.includes('palermo') || id.includes('palermo') || id.includes('scarlatti')) {
        directions.push({
            luogo: 'Palermo Centro / Stazione',
            descrizione: `Sia l'Accademia (Zisa/Papireto) che il Conservatorio (Squarcialupo) sono centrali.
1. **Zisa (ABA)**: Bus Amat (es. linea 106 o 124) da Piazza Sturzo o Politeama. Parcheggiare in zona è fattibile ma lottato.
2. **Conservatorio**: In pieno centro storico (alle spalle di San Domenico). 
**NOTE**: Per il Conservatorio e Papireto usa mezzi pubblici o cammina (ZTL severa).`,
            mezziPubblici: ['Bus AMAT', 'A piedi'],
            tempoStimato: '15 min',
            note: 'Centro Storico / ZTL attiva.'
        });
    }

    // ============================================================
    // CATANIA E ABADIR (ABA, Cons Bellini, Abadir)
    // ============================================================
    if (uni.includes('catania') || uni.includes('abadir') || id.includes('catania') || id.includes('abadir') || id.includes('bellini_ct')) {
        if (uni.includes('abadir') || id.includes('abadir')) {
            directions.push({
                luogo: 'Catania Centro',
                descrizione: `Abadir si trova a Sant'Agata li Battiati, nei paesi etnei.
1. **Bus AST / FCE**: Linee extraurbane che salgono verso i paesi etnei.
2. **Auto**: La soluzione nettamente migliore, ampi parcheggi in zona.`,
                mezziPubblici: ['Auto', 'Bus Extraurbani'],
                tempoStimato: '20 min in auto',
                note: 'Fuori città. Automuniti consigliato.'
            });
        } else {
            directions.push({
                luogo: 'Catania Centro',
                descrizione: `ABA (Via Franchetti) e Conservatorio (Via Ist. Sacro Cuore) sono in città.
1. **Metro FCE**: Fermata "Stesicoro" o "Milo" e poi camminare/Bus a seconda della sede esatta.
2. **Bus AMTS**: Varie linee coprono capillarmente la zona.`,
                mezziPubblici: ['Metro FCE', 'Bus AMTS'],
                tempoStimato: '10-15 min',
                note: 'Ben serviti dai mezzi urbani.'
            });
        }
    }

    // ============================================================
    // MESSINA (Cons Corelli)
    // ============================================================
    if (uni.includes('corelli') || uni.includes('messina') || id.includes('corelli') || id.includes('messina')) {
        directions.push({
            luogo: 'Messina Centro',
            descrizione: `Il Conservatorio si trova al Polo Annunziata.
1. **Tram + Bus ATM**: Tram linea 28 fino al capolinea "Annunziata" (Museo), poi navetta ATM verso il polo universitario.
2. **Auto**: Disponibilità di parcheggio nei dintorni del polo.`,
            mezziPubblici: ['Tram + Navetta ATM'],
            tempoStimato: '20-25 min',
            note: 'Polo Nord, usa il Tram.'
        });
    }

    // ============================================================
    // ALTRE PROVINCE (Trapani, Agrigento, Ragusa, Caltanissetta, Ribera)
    // ============================================================
    if (uni.includes('trapani') || uni.includes('agrigento') || uni.includes('ragusa') || uni.includes('caltanissetta') || uni.includes('toscanini') || id.includes('scontrino') || id.includes('toscanini') || id.includes('bellini_cl') || id.includes('ragusa') || id.includes('agrigento')) {
        directions.push({
            luogo: 'Stazione / Centro Città locale',
            descrizione: `Questi istituti sono situati nei centri cittadini di città a misura d'uomo (o piccoli centri come Ribera).
1. **A piedi**: Nella maggior parte dei casi (come a Caltanissetta o Ragusa), le sedi sono raggiungibili a piedi dalle stazioni centrali.
2. **Auto**: Utile per i pendolari, ma attenzione alle ZTL nei centri storici.`,
            mezziPubblici: ['A piedi', 'Auto'],
            tempoStimato: '5-15 min',
            note: 'Poli cittadini, facilmente accessibili.'
        });
    }

    return directions;
};
