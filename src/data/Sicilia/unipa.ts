import { StudyRoom, DirectionsFromLocation } from '../../types';

export const unipaRooms: StudyRoom[] = [
    // ============================================================
    // PALERMO - CITTÀ UNIVERSITARIA (Viale delle Scienze)
    // ============================================================
    {
        id: 'unipa_viale_polididattico',
        nome: 'Aule Studio Polididattico (Edificio 19)',
        edificio: 'Campus Viale delle Scienze',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 300,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Lavoro di Gruppo', 'Macchinette', 'Rumore Tollerato', 'Aria Condizionata'],
        latitude: 38.1045,
        longitude: 13.3482,
        indirizzo: 'Viale delle Scienze, Ed. 19, Palermo',
        university: 'UniPa',
        tags: ['Viale delle Scienze', 'Palermo', '🗣️ Lavoro di Gruppo', '🏢 Edificio 19', '⚡ Dinamico'],
        notes: 'Il cuore battente di Viale delle Scienze. Molto caotico, perfetto per ripassare in gruppo ma sconsigliato a chi cerca il silenzio assoluto.'
    },
    {
        id: 'unipa_viale_ingegneria_biblio',
        nome: 'Biblioteca di Ingegneria',
        edificio: 'Campus Viale delle Scienze - Edificio 8',
        piano: 1,
        postiDisponibili: 40,
        postiTotali: 150,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['Tavoli Grandi', 'Prese PC', 'Silenzio'],
        latitude: 38.1050,
        longitude: 13.3465,
        indirizzo: 'Viale delle Scienze, Ed. 8, Palermo',
        university: 'UniPa',
        tags: ['Ingegneria', 'Palermo', '💻 Prese PC', '🔇 Silenzio'],
        notes: 'Ambiente rigoroso. La lotta per una presa di corrente è spietata, arriva all\'apertura se hai il PC scarico.'
    },
    {
        id: 'unipa_viale_architettura_biblio',
        nome: 'Biblioteca di Architettura',
        edificio: 'Campus Viale delle Scienze - Edificio 14',
        piano: 1,
        postiDisponibili: 35,
        postiTotali: 120,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Tavoli da Disegno', 'Luce Naturale', 'Archivio Progetti'],
        latitude: 38.1060,
        longitude: 13.3470,
        indirizzo: 'Viale delle Scienze, Ed. 14, Palermo',
        university: 'UniPa',
        tags: ['Architettura', 'Palermo', '📐 Tavoli Grandi', '☀️ Luce Naturale'],
        notes: 'Spazi immensi per srotolare tavole e progetti. L\'atmosfera è creativa ma molto focalizzata.'
    },
    {
        id: 'unipa_viale_economia_biblio',
        nome: 'Biblioteca Scienze Economiche (SEAS)',
        edificio: 'Campus Viale delle Scienze - Edificio 13',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 180,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Silenzio Assoluto', 'Emeroteca', 'Climatizzazione'],
        latitude: 38.1035,
        longitude: 13.3490,
        indirizzo: 'Viale delle Scienze, Ed. 13, Palermo',
        university: 'UniPa',
        tags: ['Economia', 'Palermo', '🔇 Silenzio', '📊 Finanza'],
        notes: 'Sotto sessione si riempie in fretta. Il silenzio è fatto rispettare dal personale in modo molto rigido.'
    },
    {
        id: 'unipa_viale_lettere_biblio',
        nome: 'Biblioteca Centrale Umanistica',
        edificio: 'Campus Viale delle Scienze - Edificio 12/15',
        piano: 1,
        postiDisponibili: 60,
        postiTotali: 200,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Consultazione', 'Postazioni Studio', 'Fondi Storici'],
        latitude: 38.1025,
        longitude: 13.3485,
        indirizzo: 'Viale delle Scienze, Ed. 12, Palermo',
        university: 'UniPa',
        tags: ['Umanistica', 'Palermo', '📖 Consultazione', '🔇 Silenzio'],
        notes: 'Un labirinto di libri e postazioni. Perfetta per chi deve scrivere la tesi senza distrazioni.'
    },
    {
        id: 'unipa_viale_prato',
        nome: 'Prato di Viale delle Scienze',
        edificio: 'Spazi Esterni Campus',
        piano: 0,
        postiDisponibili: 150,
        postiTotali: 300,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Natura', 'Pausa Pranzo', 'Socialità'],
        latitude: 38.1040,
        longitude: 13.3475,
        indirizzo: 'Viale delle Scienze, Palermo',
        university: 'UniPa',
        tags: ['Outdoor', 'Palermo', '🌲 Natura', '🥪 Pausa Pranzo'],
        notes: 'In primavera diventa l\'aula studio più grande dell\'Ateneo. Attenzione: WiFi Eduroam debole in alcune zone del prato.'
    },
    {
        id: 'unipa_mensa_santi_romano',
        nome: 'Mensa "Santi Romano" (Aree Comuni)',
        edificio: 'Pensionato Universitario',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 250,
        orarioApertura: '10:00',
        orarioChiusura: '18:00',
        servizi: ['Pausa Caffè', 'Lavoro di Gruppo', 'Prese Cibo'],
        latitude: 38.1015,
        longitude: 13.3480,
        indirizzo: 'Viale delle Scienze, Palermo',
        university: 'UniPa',
        tags: ['Mensa', 'Palermo', '☕ Pausa Caffè', '🗣️ Social'],
        notes: 'Fuori dagli orari di punta dei pasti è un ottimo open space per studiare in gruppo e confrontarsi ad alta voce.'
    },

    // ============================================================
    // PALERMO - POLICLINICO (Medicina e Chirurgia)
    // ============================================================
    {
        id: 'unipa_policlinico_biblio_centrale',
        nome: 'Biblioteca Centrale Medicina "Paolo Giaccone"',
        edificio: 'Policlinico Universitario',
        piano: 1,
        postiDisponibili: 45,
        postiTotali: 150,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['Silenzio Assoluto', 'Aria Condizionata', 'Testi Clinici'],
        latitude: 38.1030,
        longitude: 13.3640,
        indirizzo: 'Via del Vespro 129, Palermo',
        university: 'UniPa',
        tags: ['Medicina', 'Palermo', '🏥 Policlinico', '🔇 Silenzio'],
        notes: 'Ambiente clinico e silenzioso. Piena di specializzandi e studenti di medicina in pre-esame.'
    },
    {
        id: 'unipa_policlinico_aule_nuove',
        nome: 'Aule Nuove Polo Didattico',
        edificio: 'Policlinico Universitario',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 120,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Luminosità', 'Vicinanza Reparti'],
        latitude: 38.1035,
        longitude: 13.3645,
        indirizzo: 'Via del Vespro, Palermo',
        university: 'UniPa',
        tags: ['Medicina', 'Palermo', '⚕️ Tirocinio', '🏢 Aule Nuove'],
        notes: 'Postazione tattica per chi deve incastrare lo studio teorico tra i turni di tirocinio in reparto.'
    },
    {
        id: 'unipa_policlinico_bar_esterno',
        nome: 'Area Esterna Polo Didattico',
        edificio: 'Spazi Esterni Policlinico',
        piano: 0,
        postiDisponibili: 20,
        postiTotali: 50,
        orarioApertura: '08:00',
        orarioChiusura: '19:00',
        servizi: ['Pausa Veloce', 'Distributori'],
        latitude: 38.1028,
        longitude: 13.3638,
        indirizzo: 'Via del Vespro, Palermo',
        university: 'UniPa',
        tags: ['Outdoor', 'Palermo', '☕ Pausa Veloce'],
        notes: 'Unica valvola di sfogo per staccare dal clima ospedaliero e prendere un po\' d\'aria.'
    },

    // ============================================================
    // PALERMO - CENTRO STORICO (Giurisprudenza & Polo Archirafi)
    // ============================================================
    {
        id: 'unipa_maqueda_biblio_giuri',
        nome: 'Biblioteca Centrale Giurisprudenza',
        edificio: 'Polo Storico Via Maqueda',
        piano: 1,
        postiDisponibili: 40,
        postiTotali: 160,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Codici', 'Ambiente Storico', 'Silenzio'],
        latitude: 38.1150,
        longitude: 13.3610,
        indirizzo: 'Via Maqueda 172, Palermo',
        university: 'UniPa',
        tags: ['Giurisprudenza', 'Palermo', '🏛️ Storico', '🔇 Silenzio'],
        notes: 'Nel cuore del centro storico di Palermo. I giuristi studiano qui da generazioni. Silenzio tombale.'
    },
    {
        id: 'unipa_maqueda_scienze_pol',
        nome: 'Sale Lettura Scienze Politiche',
        edificio: 'Polo Storico Via Maqueda',
        piano: 2,
        postiDisponibili: 25,
        postiTotali: 80,
        orarioApertura: '09:00',
        orarioChiusura: '18:30',
        servizi: ['Archivi Storici', 'Consultazione'],
        latitude: 38.1152,
        longitude: 13.3615,
        indirizzo: 'Via Maqueda 324, Palermo',
        university: 'UniPa',
        tags: ['Scienze Politiche', 'Palermo', '📖 Consultazione'],
        notes: 'Sale più piccole e intime rispetto a Giurisprudenza, perfette per lo studio solitario.'
    },
    {
        id: 'unipa_maqueda_atrio',
        nome: 'Atrio Monumentale Giurisprudenza',
        edificio: 'Polo Storico Via Maqueda',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 100,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['Porticati', 'Socialità', 'Pausa Caffè'],
        latitude: 38.1148,
        longitude: 13.3612,
        indirizzo: 'Via Maqueda 172, Palermo',
        university: 'UniPa',
        tags: ['Outdoor', 'Palermo', '🏛️ Storico', '☕ Pausa'],
        notes: 'Tra statue e porticati settecenteschi, è il salotto buono degli universitari palermitani del centro.'
    },
    {
        id: 'unipa_archirafi_scienze',
        nome: 'Biblioteca Scienze Fisiche e Chimiche',
        edificio: 'Polo Via Archirafi',
        piano: 1,
        postiDisponibili: 30,
        postiTotali: 90,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['Vicinanza Laboratori', 'Tranquillità'],
        latitude: 38.1110,
        longitude: 13.3740,
        indirizzo: 'Via Archirafi 36, Palermo',
        university: 'UniPa',
        tags: ['Scienze', 'Palermo', '🧪 Laboratori', '🔇 Silenzio'],
        notes: 'Il feudo delle scienze dure a Palermo. Pieno di fisici e chimici che ripassano prima di entrare in laboratorio.'
    },

    // ============================================================
    // AGRIGENTO - POLO TERRITORIALE (CUPA)
    // ============================================================
    {
        id: 'unipa_agrigento_genuardi_biblio',
        nome: 'Biblioteca Villa Genuardi (Archeologia)',
        edificio: 'Villa Genuardi',
        piano: 1,
        postiDisponibili: 20,
        postiTotali: 50,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['Testi Antichi', 'Ambiente Nobiliare', 'Silenzio'],
        latitude: 37.3000,
        longitude: 13.5880,
        indirizzo: 'Via Petrarca, Agrigento',
        university: 'UniPa - Agrigento',
        tags: ['Archeologia', 'Agrigento', '🏛️ Villa Nobiliare', '🔇 Silenzio'],
        notes: 'Studiare archeologia e beni culturali dentro una villa storica a due passi dalla Valle dei Templi. Orari ristretti.'
    },
    {
        id: 'unipa_agrigento_quartararo_aule',
        nome: 'Aule Studio Via Quartararo',
        edificio: 'Polo Universitario',
        piano: 0,
        postiDisponibili: 35,
        postiTotali: 100,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['Lavoro di Gruppo', 'Prese PC'],
        latitude: 37.3020,
        longitude: 13.5890,
        indirizzo: 'Via Quartararo 6, Agrigento',
        university: 'UniPa - Agrigento',
        tags: ['Polo Centrale', 'Agrigento', '🗣️ Lavoro di Gruppo'],
        notes: 'L\'hub principale per Giurisprudenza ed Economia ad Agrigento. Ottimo per lavori di gruppo.'
    },
    {
        id: 'unipa_agrigento_genuardi_giardino',
        nome: 'Giardino Botanico Villa Genuardi',
        edificio: 'Spazi Esterni',
        piano: 0,
        postiDisponibili: 25,
        postiTotali: 60,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['Verde', 'Relax', 'Vista'],
        latitude: 37.2995,
        longitude: 13.5885,
        indirizzo: 'Via Petrarca, Agrigento',
        university: 'UniPa - Agrigento',
        tags: ['Outdoor', 'Agrigento', '🌲 Natura', '☀️ Relax'],
        notes: 'Perfetto per leggere appunti immersi nella flora mediterranea. Wi-Fi assente o debole.'
    },

    // ============================================================
    // CALTANISSETTA - POLO TERRITORIALE (CEFPAS)
    // ============================================================
    {
        id: 'unipa_cl_medicina_biblio',
        nome: 'Biblioteca Polo CEFPAS (Medicina)',
        edificio: 'Centro CEFPAS',
        piano: 1,
        postiDisponibili: 30,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['Testi Medici', 'Silenzio', 'Prese Elettriche'],
        latitude: 37.4900,
        longitude: 14.0620,
        indirizzo: 'Via G. Mulè 1, Caltanissetta',
        university: 'UniPa - Caltanissetta',
        tags: ['Medicina', 'Caltanissetta', '🏥 CEFPAS', '🔇 Silenzio'],
        notes: 'Il polo d\'eccellenza per Medicina a Caltanissetta. Ambiente clinico ed estremamente silenzioso.'
    },
    {
        id: 'unipa_cl_ingegneria_aule',
        nome: 'Aule Studio Ingegneria Biomedica',
        edificio: 'Polo Universitario',
        piano: 0,
        postiDisponibili: 20,
        postiTotali: 50,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Lavoro di Gruppo', 'Tavoli Grandi'],
        latitude: 37.4905,
        longitude: 14.0625,
        indirizzo: 'Via G. Mulè, Caltanissetta',
        university: 'UniPa - Caltanissetta',
        tags: ['Ingegneria', 'Caltanissetta', '⚙️ Biomedica', '🗣️ Lavoro di Gruppo'],
        notes: 'Aule dinamiche usate dagli studenti di Ingegneria Biomedica per confrontarsi sui progetti.'
    },
    {
        id: 'unipa_cl_cefpas_parco',
        nome: 'Aree Verdi Campus CEFPAS',
        edificio: 'Spazi Esterni CEFPAS',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 100,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['Pausa', 'Natura'],
        latitude: 37.4910,
        longitude: 14.0610,
        indirizzo: 'Via G. Mulè, Caltanissetta',
        university: 'UniPa - Caltanissetta',
        tags: ['Outdoor', 'Caltanissetta', '☀️ Pausa'],
        notes: 'Grandi spazi verdi ideali per staccare la mente tra le lezioni e le ore di studio in biblioteca.'
    },

    // ============================================================
    // TRAPANI - POLO TERRITORIALE (Lungomare Dante Alighieri)
    // ============================================================
    {
        id: 'unipa_tp_biblio_polo',
        nome: 'Biblioteca Centrale Polo di Trapani',
        edificio: 'Polo Universitario Trapani',
        piano: 1,
        postiDisponibili: 40,
        postiTotali: 90,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['Silenzio', 'Vista Mare', 'Prese PC'],
        latitude: 38.0260,
        longitude: 12.5310,
        indirizzo: 'Lungomare Dante Alighieri 2/4, Trapani',
        university: 'UniPa - Trapani',
        tags: ['Polo Centrale', 'Trapani', '🌊 Vista Mare', '🔇 Silenzio'],
        notes: 'Studiare guardando il mare di Trapani. Il rumore delle onde rilassa, ma il silenzio in sala è d\'obbligo.'
    },
    {
        id: 'unipa_tp_giuri_sale',
        nome: 'Sale di Lettura Giurisprudenza',
        edificio: 'Polo Universitario Trapani',
        piano: 0,
        postiDisponibili: 25,
        postiTotali: 60,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['Codici', 'Concentrazione'],
        latitude: 38.0262,
        longitude: 12.5312,
        indirizzo: 'Lungomare Dante Alighieri, Trapani',
        university: 'UniPa - Trapani',
        tags: ['Giurisprudenza', 'Trapani', '⚖️ Diritto'],
        notes: 'Sezione dedicata prevalentemente ai giuristi per la preparazione di diritto pubblico e privato.'
    },
    {
        id: 'unipa_tp_economia_viticoltura',
        nome: 'Aule Economia e Viticoltura',
        edificio: 'Polo Universitario Trapani',
        piano: 2,
        postiDisponibili: 30,
        postiTotali: 70,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['Lavoro di Gruppo', 'Tavoli Grandi'],
        latitude: 38.0265,
        longitude: 12.5315,
        indirizzo: 'Lungomare Dante Alighieri, Trapani',
        university: 'UniPa - Trapani',
        tags: ['Economia', 'Viticoltura', 'Trapani', '🍷 Enologia', '🗣️ Gruppo'],
        notes: 'Ambiente più colloquiale. Sede vitale per i famosi corsi di Viticoltura ed Enologia del territorio trapanese.'
    },
    {
        id: 'unipa_tp_outdoor_mare',
        nome: 'Area Esterna Lungomare',
        edificio: 'Piazzale del Polo',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 80,
        orarioApertura: '08:00',
        orarioChiusura: '19:00',
        servizi: ['Brezza Marina', 'Pausa Caffè'],
        latitude: 38.0270,
        longitude: 12.5320,
        indirizzo: 'Lungomare Dante Alighieri, Trapani',
        university: 'UniPa - Trapani',
        tags: ['Outdoor', 'Trapani', '🌬️ Brezza', '☕ Relax'],
        notes: 'Ideale nelle mezze stagioni. Attenzione al forte vento invernale che rende impossibile tenere fermi gli appunti.'
    },
    {
        id: 'unipa_tp_lab_informatico',
        nome: 'Laboratorio Informatico Trapani',
        edificio: 'Polo Universitario Trapani',
        piano: 0,
        postiDisponibili: 15,
        postiTotali: 30,
        orarioApertura: '09:00',
        orarioChiusura: '17:30',
        servizi: ['PC Fissi', 'Aria Condizionata'],
        latitude: 38.0261,
        longitude: 12.5311,
        indirizzo: 'Lungomare Dante Alighieri, Trapani',
        university: 'UniPa - Trapani',
        tags: ['Informatica', 'Trapani', '💻 PC Fissi', '❄️ A/C'],
        notes: 'Utile per chi deve effettuare ricerche su banche dati universitarie o non ha portato il PC portatile.'
    }
];

export const getDirectionsUniPa = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];
    const uni = (room.university || '').toLowerCase();
    const id = room.id.toLowerCase();

    // ============================================================
    // PALERMO (Viale delle Scienze, Policlinico, Maqueda)
    // ============================================================
    if (uni === 'unipa') {
        if (id.includes('viale')) {
            directions.push({
                luogo: 'Stazione Palermo Centrale / Viale delle Scienze',
                descrizione: `Viale delle Scienze è una vera e propria cittadella.
1. **Metro/Treno**: Fermata "Palazzo Reale-Orleans", poi 2 minuti a piedi.
2. **Bus AMAT**: Diverse linee portano al campus (es. 104, 108, 118).
**NOTE**: Evita l'auto, il traffico e i parcheggi interni sono un incubo per chi arriva tardi.`,
                mezziPubblici: ['Metro', 'Bus AMAT', 'A piedi'],
                tempoStimato: '10-20 min',
                note: 'Hub principale.'
            });
        } else if (id.includes('policlinico')) {
            directions.push({
                luogo: 'Stazione Palermo Centrale / Via del Vespro',
                descrizione: `Il Policlinico è raggiungibile dal centro o dalla Stazione Centrale.
1. **Metro**: Fermata "Vespri", scendi ed entra direttamente nel Policlinico.
2. **A piedi**: 10-15 minuti dalla Stazione Centrale.`,
                mezziPubblici: ['Metro (Vespri)', 'A piedi'],
                tempoStimato: '10-15 min',
                note: 'Zona ospedaliera.'
            });
        } else if (id.includes('maqueda') || id.includes('archirafi')) {
            directions.push({
                luogo: 'Centro Storico Palermo',
                descrizione: `I poli di Via Maqueda (Giuri) e Archirafi (Scienze) sono nel cuore antico e vicino alla stazione.
1. **A piedi**: Via Maqueda è pedonale. Via Archirafi è vicinissima alla Stazione Centrale.
**NOTE**: Usa bici o cammina. Accesso auto vietato (ZTL).`,
                mezziPubblici: ['A piedi', 'Bici'],
                tempoStimato: '5-10 min',
                note: 'ZTL / Pedonale.'
            });
        }
    }

    // ============================================================
    // AGRIGENTO
    // ============================================================
    if (uni.includes('agrigento') || id.includes('agrigento')) {
        directions.push({
            luogo: 'Stazione Agrigento Centrale / Centro',
            descrizione: `Poli di Via Quartararo e Villa Genuardi:
1. **Bus TUA**: Le linee urbane collegano bene il centro ai poli decentrati.
2. **Auto**: Ampi parcheggi disponibili vicino alle sedi.`,
            mezziPubblici: ['Bus TUA', 'Auto'],
            tempoStimato: '15 min',
            note: 'Mezzi o Auto.'
        });
    }

    // ============================================================
    // CALTANISSETTA
    // ============================================================
    if (uni.includes('caltanissetta') || id.includes('cl_')) {
        directions.push({
            luogo: 'Caltanissetta Centro',
            descrizione: `Il polo CEFPAS si trova fuori dal centro urbano compatto (Via G. Mulè).
1. **Auto**: La soluzione nettamente migliore, ampi spazi di sosta.
2. **Bus Urbani**: Verificare gli orari delle linee che collegano il centro all'ospedale S. Elia / CEFPAS.`,
            mezziPubblici: ['Auto', 'Bus'],
            tempoStimato: '10 min in auto',
            note: 'Auto raccomandata.'
        });
    }

    // ============================================================
    // TRAPANI
    // ============================================================
    if (uni.includes('trapani') || id.includes('tp_')) {
        directions.push({
            luogo: 'Trapani Centro / Stazione',
            descrizione: `Il Polo si trova sul Lungomare Dante Alighieri.
1. **Bus ATM Trapani**: Le linee urbane collegano la stazione al lungomare.
2. **Auto**: Parcheggiare lungo il litorale è generalmente semplice fuori dall'alta stagione estiva.`,
            mezziPubblici: ['Bus ATM', 'Auto'],
            tempoStimato: '10 min',
            note: 'Fronte mare.'
        });
    }

    return directions;
};
