import { StudyRoom, DirectionsFromLocation } from '../../types';

export const unisiRooms: StudyRoom[] = [
    // ============================================================
    // SIENA CENTRO STORICO (Economia, Giurisprudenza, Lettere, Scienze Politiche)
    // ============================================================
    {
        id: 'unisi_san_francesco_biblio',
        nome: 'Biblioteca Area Economica (San Francesco)',
        edificio: 'Plesso San Francesco',
        piano: 1,
        postiDisponibili: 80,
        postiTotali: 250,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['Fondi Economici', 'Soffitti Affrescati', 'Silenzio Assoluto'],
        latitude: 43.3215,
        longitude: 11.3350,
        indirizzo: 'Piazza San Francesco 7, Siena',
        university: 'UniSi',
        tags: ['Economia', 'Siena Centro', '🏛️ Ex Convento', '🔇 Silenzio'],
        notes: 'Situata in un ex convento medievale. Silenzio tombale e atmosfera austera. Una delle biblioteche più belle e rigorose d\'Italia.'
    },
    {
        id: 'unisi_san_francesco_cripta',
        nome: 'Aule Studio "La Cripta" e Chiostro',
        edificio: 'Plesso San Francesco',
        piano: -1,
        postiDisponibili: 40,
        postiTotali: 150,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Fresco Naturale', 'Lavoro di Gruppo', 'Macchinette'],
        latitude: 43.3216,
        longitude: 11.3352,
        indirizzo: 'Piazza San Francesco 7, Siena',
        university: 'UniSi',
        tags: ['Economia', 'Siena Centro', '🧊 Fresco Naturale', '🗣️ Gruppo'],
        notes: 'Letteralmente ricavata nei sotterranei (cripta) del convento. Freschissima d\'estate. Il brusio è costante, perfetta per ripetere in gruppo.'
    },
    {
        id: 'unisi_mattioli_biblio',
        nome: 'Biblioteca Circolo Giuridico e Scienze Politiche',
        edificio: 'Polo Mattioli',
        piano: 1,
        postiDisponibili: 50,
        postiTotali: 200,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['Codici e Diritto', 'Prese PC', 'Luminosità'],
        latitude: 43.3140,
        longitude: 11.3310,
        indirizzo: 'Via P.A. Mattioli 10, Siena',
        university: 'UniSi',
        tags: ['Giurisprudenza', 'Scienze Politiche', 'Siena Centro', '🔇 Silenzio'],
        notes: 'Polo incastonato nelle mura cittadine (vicino a Porta Tufi). Sede storica per giuristi e politologi. Molto frequentata.'
    },
    {
        id: 'unisi_umanistica_fieravecchia',
        nome: 'Biblioteca di Area Umanistica (BAU)',
        edificio: 'Plesso San Galgano / Fieravecchia',
        piano: 2,
        postiDisponibili: 60,
        postiTotali: 180,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['Archivi Storici', 'Consultazione', 'Silenzio'],
        latitude: 43.3155,
        longitude: 11.3365,
        indirizzo: 'Via Fieravecchia 19, Siena',
        university: 'UniSi',
        tags: ['Lettere', 'Siena Centro', '📖 Consultazione', '🔇 Silenzio'],
        notes: 'Il paradiso per gli studenti di Lettere, Lingue e Filosofia. I labirinti di libri richiedono orientamento. Atmosfera iper-intellettuale.'
    },
    {
        id: 'unisi_san_niccolo_aule',
        nome: 'Aule Studio Complesso San Niccolò',
        edificio: 'Ex Ospedale Psichiatrico San Niccolò',
        piano: 0,
        postiDisponibili: 70,
        postiTotali: 300,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Ampi Spazi', 'Prese PC', 'Lavoro di Gruppo'],
        latitude: 43.3125,
        longitude: 11.3380,
        indirizzo: 'Via Roma 56, Siena',
        university: 'UniSi',
        tags: ['Ingegneria', 'Psicologia', 'Siena Centro', '🗣️ Dinamico'],
        notes: 'Un ex manicomio trasformato in un polo all\'avanguardia (Ingegneria dell\'Informazione e Psicologia). Grandi corridoi e aule perfette per il brainstorming.'
    },
    {
        id: 'unisi_orto_botanico',
        nome: 'Orto Botanico dell\'Università',
        edificio: 'Spazi Esterni Mattioli',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 60,
        orarioApertura: '08:00',
        orarioChiusura: '15:00',
        servizi: ['Natura', 'Relax', 'Pausa'],
        latitude: 43.3135,
        longitude: 11.3315,
        indirizzo: 'Via P.A. Mattioli 4, Siena',
        university: 'UniSi',
        tags: ['Outdoor', 'Siena Centro', '🌲 Natura', '☀️ Relax'],
        notes: 'Adiacente al Polo Mattioli. Un museo a cielo aperto dove rifugiarsi per una pausa pranzo rigenerante. Wi-Fi debole.'
    },

    // ============================================================
    // SIENA NORD - POLO SCIENTIFICO E MEDICO (San Miniato & Le Scotte)
    // ============================================================
    {
        id: 'unisi_san_miniato_biblio',
        nome: 'Biblioteca Area Medico-Farmaco-Biologica',
        edificio: 'Polo Scientifico San Miniato',
        piano: 1,
        postiDisponibili: 90,
        postiTotali: 350,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['Aria Condizionata', 'Prese PC', 'Silenzio'],
        latitude: 43.3360,
        longitude: 11.3250,
        indirizzo: 'Via Aldo Moro 2, Siena',
        university: 'UniSi',
        tags: ['Scienze', 'San Miniato', '🔬 Medicina', '❄️ A/C', '🔇 Silenzio'],
        notes: 'Il polo "moderno" fuori dalle mura cittadine. Enorme, luminoso e pieno di prese elettriche. Il silenzio è rispettato rigorosamente.'
    },
    {
        id: 'unisi_san_miniato_aule',
        nome: 'Aule Didattiche e Spazi Comuni (San Miniato)',
        edificio: 'Polo Scientifico San Miniato',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 150,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Lavoro di Gruppo', 'Macchinette', 'Mensa Vicina'],
        latitude: 43.3362,
        longitude: 11.3252,
        indirizzo: 'Via Aldo Moro 2, Siena',
        university: 'UniSi',
        tags: ['Scienze', 'San Miniato', '🗣️ Gruppo', '☕ Pausa'],
        notes: 'Spazi aperti dove biologi e farmacisti ripetono ad alta voce i cicli metabolici.'
    },
    {
        id: 'unisi_scotte_medicina',
        nome: 'Centro Didattico Policlinico "Le Scotte"',
        edificio: 'Ospedale Le Scotte',
        piano: 1,
        postiDisponibili: 40,
        postiTotali: 120,
        orarioApertura: '08:00',
        orarioChiusura: '19:00',
        servizi: ['Vicinanza Reparti', 'Testi Clinici'],
        latitude: 43.3390,
        longitude: 11.3410,
        indirizzo: 'Viale Mario Bracci 16, Siena',
        university: 'UniSi',
        tags: ['Medicina', 'Le Scotte', '🏥 Ospedale', '⚕️ Tirocinio'],
        notes: 'Il quartier generale degli specializzandi e degli studenti in tirocinio clinico. Clima ospedaliero, molto teso sotto esame.'
    },

    // ============================================================
    // CAMPUS AREZZO (Polo Didattico del Pionta)
    // ============================================================
    {
        id: 'unisi_arezzo_pionta_biblio',
        nome: 'Biblioteca Campus Arezzo',
        edificio: 'Palazzina Orologio (Campus del Pionta)',
        piano: 1,
        postiDisponibili: 45,
        postiTotali: 100,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Fondi di Scienze dell\'Educazione', 'Infermieristica', 'Silenzio'],
        latitude: 43.4600,
        longitude: 11.8710,
        indirizzo: 'Viale Luigi Cittadini 33, Arezzo',
        university: 'UniSi - Arezzo',
        tags: ['Scienze della Formazione', 'Arezzo', '🌲 Parco Pionta', '🔇 Silenzio'],
        notes: 'Polo distaccato immerso nel verde di Arezzo. Focalizzato su Scienze dell\'Educazione, Lingue e Professioni Sanitarie.'
    },
    {
        id: 'unisi_arezzo_aule_studio',
        nome: 'Sale Lettura Campus Arezzo',
        edificio: 'Aule Didattiche Pionta',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['Lavoro di Gruppo', 'Prese PC'],
        latitude: 43.4602,
        longitude: 11.8712,
        indirizzo: 'Viale Luigi Cittadini 33, Arezzo',
        university: 'UniSi - Arezzo',
        tags: ['Campus Pionta', 'Arezzo', '🗣️ Gruppo'],
        notes: 'Strutture moderne all\'interno del campus. Ottime per lavori di gruppo e presentazioni.'
    },
    {
        id: 'unisi_arezzo_parco_pionta',
        nome: 'Parco del Pionta',
        edificio: 'Spazi Esterni Campus Arezzo',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 200,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Natura', 'Relax', 'Pausa Pranzo'],
        latitude: 43.4605,
        longitude: 11.8705,
        indirizzo: 'Viale Luigi Cittadini, Arezzo',
        university: 'UniSi - Arezzo',
        tags: ['Outdoor', 'Arezzo', '🌳 Parco Storico', '☀️ Relax'],
        notes: 'Un immenso parco storico. Quando il clima lo permette, è il posto migliore per studiare distesi sul prato.'
    },

    // ============================================================
    // POLO UNIVERSITARIO GROSSETANO
    // ============================================================
    {
        id: 'unisi_grosseto_biblio',
        nome: 'Sale Studio Polo Grossetano',
        edificio: 'Fondazione Polo Universitario Grossetano',
        piano: 1,
        postiDisponibili: 25,
        postiTotali: 60,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['Economia', 'Scienze Politiche', 'Silenzio'],
        latitude: 42.7600,
        longitude: 11.1150,
        indirizzo: 'Via Aurelio Saffi 17/C, Grosseto',
        university: 'UniSi - Grosseto',
        tags: ['Polo Grossetano', 'Grosseto', '🏛️ Centro Storico', '🔇 Silenzio'],
        notes: 'In pieno centro storico a Grosseto. Sede distaccata accogliente e familiare, ideale per Economia, Scienze Politiche e Infermieristica.'
    },

    // ============================================================
    // VALDELSA / SAN GIOVANNI VALDARNO (Centro di Geotecnologie)
    // ============================================================
    {
        id: 'unisi_valdarno_cgt',
        nome: 'Aule Studio Centro di Geotecnologie (CGT)',
        edificio: 'CGT San Giovanni Valdarno',
        piano: 0,
        postiDisponibili: 15,
        postiTotali: 40,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Laboratori Geologici', 'Mappe', 'Tranquillità'],
        latitude: 43.5650,
        longitude: 11.5300,
        indirizzo: 'Via Vetri Vecchi 34, San Giovanni Valdarno (AR)',
        university: 'UniSi - Valdarno',
        tags: ['Geologia', 'Valdarno', '🗺️ Cartografia', '🔬 Ricerca'],
        notes: 'Polo d\'eccellenza per le geoscienze. Ambiente iper-specializzato e silenzioso, immerso in laboratori di ricerca.'
    }
];

export const getDirectionsUniSi = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];
    const id = room.id.toLowerCase();
    const uni = (room.university || '').toLowerCase();

    // ============================================================
    // SIENA CENTRO (ZTL, Colline e Scale Mobili)
    // ============================================================
    if (uni === 'unisi') {
        // ... (resto della logica) ...
        if (id.includes('san_francesco') || id.includes('mattioli') || id.includes('umanistica') || id.includes('san_niccolo') || id.includes('orto_botanico')) {
            directions.push({
                luogo: 'Stazione FS Siena / Parcheggi Esterni',
                descrizione: `Siena è arroccata su tre colli. Il centro è una gigantesca ZTL pedonale.
1. **Risalite Meccanizzate (Scale Mobili)**: Sono il segreto di Siena. Dalla Stazione FS prendi l'Antiperto per salire in centro senza fatica. Per San Francesco usa la risalita omonima.
2. **Pollicino (Minibus)**: I piccoli bus urbani (Pollicino) si muovono agilmente nei vicoli medievali.
3. **Auto**: Lasciala fuori dalle mura (es. Parcheggio Il Campo o Santa Caterina).`,
                mezziPubblici: ['Scale Mobili (Risalite)', 'Pollicino', 'A piedi'],
                tempoStimato: '15-20 min in salita',
                note: 'ZTL Severa. Usa le scale mobili (Risalite Meccanizzate).'
            });
        }

        // ============================================================
        // SIENA NORD (San Miniato e Le Scotte)
        // ============================================================
        else if (id.includes('san_miniato') || id.includes('scotte')) {
            directions.push({
                luogo: 'Siena Stazione FS / Centro',
                descrizione: `I poli scientifici e il Policlinico si trovano nella zona Nord, fuori dalle mura.
1. **Bus Urbani (Autolinee Toscane)**: Le linee S10, S17 o S3 collegano la Stazione FS e il centro (Piazza Gramsci) direttamente a San Miniato e all'Ospedale.
2. **Auto**: Consigliata. Ci sono ampi parcheggi sia al polo scientifico che al Policlinico (spesso a pagamento).`,
                mezziPubblici: ['Bus S10/S17', 'Auto'],
                tempoStimato: '15 min in Bus',
                note: 'Sede esterna alle mura. I bus S10/S17 sono fondamentali.'
            });
        }
    }

    // ============================================================
    // AREZZO (Campus Pionta)
    // ============================================================
    if (uni.includes('arezzo')) {
        directions.push({
            luogo: 'Stazione FS Arezzo',
            descrizione: `Il Campus del Pionta si trova letteralmente dietro la stazione ferroviaria.
1. **A piedi**: Esci dal lato posteriore della stazione (Via Baldaccio d'Arezzo) ed entra direttamente nel parco del Pionta in 5 minuti.
2. **Auto**: Possibilità di parcheggio nelle vie limitrofe al campus.`,
            mezziPubblici: ['A piedi', 'Treno'],
            tempoStimato: '5 min a piedi',
            note: 'Dietro la Stazione. Zero sbattimenti per i pendolari.'
        });
    }

    // ============================================================
    // GROSSETO E VALDARNO
    // ============================================================
    if (uni.includes('grosseto')) {
        directions.push({
            luogo: 'Stazione FS Grosseto / Centro Storico',
            descrizione: `La fondazione Polo Grossetano è nel centro storico (dentro le Mura Medicee).
1. **A piedi**: 10 minuti di passeggiata dalla stazione ferroviaria lungo Via Roma.
**NOTE**: Il centro storico di Grosseto è ZTL.`,
            mezziPubblici: ['A piedi'],
            tempoStimato: '10 min a piedi',
            note: 'Centro ZTL.'
        });
    }

    if (uni.includes('valdarno')) {
        directions.push({
            luogo: 'Stazione FS San Giovanni Valdarno',
            descrizione: `Il CGT (Centro Geotecnologie) è molto vicino alla linea ferroviaria Firenze-Arezzo.
1. **A piedi**: 15 minuti a piedi dalla stazione.
2. **Auto**: Ampia possibilità di parcheggio in loco.`,
            mezziPubblici: ['Treno', 'Auto', 'A piedi'],
            tempoStimato: '15 min',
            note: 'Ottimo per chi viaggia in auto.'
        });
    }

    return directions;
};
