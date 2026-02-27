import { StudyRoom, DirectionsFromLocation } from '../../types';

export const unicaRooms: StudyRoom[] = [
    // ============================================================
    // POLO UMANISTICO E LETTERE (Sa Duchessa)
    // ============================================================
    {
        id: 'unica_biblio_dante',
        nome: 'Biblioteca Polo Umanistico "Dante Alighieri"',
        edificio: 'Campus Sa Duchessa',
        piano: 1,
        postiTotali: 250,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['WiFi Eduroam', 'Silenzio Assoluto', 'Emeroteca', 'Climatizzazione'],
        latitude: 39.2275,
        longitude: 9.1085,
        indirizzo: 'Piazza d\'Armi, 09123 Cagliari',
        university: 'UniCa',
        occupancy_rate: 'Altissimo',
        tags: ['Umanistica', 'Silenzio', 'Sa Duchessa'],
        notes: 'Il cuore pulsante di Lettere, Filosofia e Magistero. Rigorosa sul silenzio, essenziale per la concentrazione profonda. I posti finiscono in fretta in sessione.'
    },
    {
        id: 'unica_lingue_biblio',
        nome: 'Biblioteca di Lingue e Letterature Straniere',
        edificio: 'Campus Sa Duchessa - Corpo Centrale',
        piano: 0,
        postiTotali: 120,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Dizionari', 'Postazioni Audio', 'Prese Elettriche'],
        latitude: 39.2272,
        longitude: 9.1088,
        indirizzo: 'Via Is Mirrionis 1, Cagliari',
        university: 'UniCa',
        tags: ['Lingue', 'Audio'],
        notes: 'Ottima per gli studenti di lingue. Contiene postazioni multimediali per l\'ascolto.'
    },
    {
        id: 'unica_saduchessa_aule_aperte',
        nome: 'Aule Studio "Corpo A" (Sa Duchessa)',
        edificio: 'Campus Sa Duchessa - Corpo A',
        piano: 0,
        postiTotali: 150,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Lavoro di Gruppo', 'Macchinette', 'Rumore Tollerato'],
        latitude: 39.2270,
        longitude: 9.1090,
        indirizzo: 'Via Is Mirrionis 1, Cagliari',
        university: 'UniCa',
        tags: ['Social', 'Gruppo'],
        notes: 'Aule più informali dove si può ripassare ad alta voce e preparare presentazioni in team.'
    },
    {
        id: 'unica_saduchessa_cortile',
        nome: 'Cortile Interno Sa Duchessa',
        edificio: 'Spazi Esterni Campus',
        piano: 0,
        postiTotali: 200,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Pausa Pranzo', 'Sole', 'Socialità'],
        latitude: 39.2273,
        longitude: 9.1082,
        indirizzo: 'Piazza d\'Armi, Cagliari',
        university: 'UniCa',
        tags: ['Outdoor', 'Relax'],
        notes: 'Il punto di ritrovo storico per la pausa panino. In primavera è letteralmente invaso dagli studenti stesi al sole tra una lezione e l\'altra.'
    },

    // ============================================================
    // POLO INGEGNERIA E ARCHITETTURA
    // ============================================================
    {
        id: 'unica_biblio_ingegneria',
        nome: 'Biblioteca Centrale Ingegneria',
        edificio: 'Polo Ingegneria (Piazza d\'Armi)',
        piano: 1,
        postiTotali: 180,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['Testi Tecnici', 'Tavoli Ampi', 'Prese USB'],
        latitude: 39.2285,
        longitude: 9.1055,
        indirizzo: 'Via Marengo 2, Cagliari',
        university: 'UniCa',
        occupancy_rate: 'Alto',
        tags: ['Ingegneria', 'Prese'],
        notes: 'La casa dei futuri ingegneri sardi. Severa, efficiente e sempre piena di gente che fissa schermi con AutoCAD e MATLAB.'
    },
    {
        id: 'unica_ing_aule_padiglione',
        nome: 'Aule Studio Padiglioni (Ingegneria)',
        edificio: 'Polo Ingegneria',
        piano: 0,
        postiTotali: 150,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['Lavagne', 'Lavoro di Gruppo'],
        latitude: 39.2288,
        longitude: 9.1052,
        indirizzo: 'Via Marengo 2, Cagliari',
        university: 'UniCa',
        tags: ['Ingegneria', 'Tech'],
        notes: 'Spazi per il brainstorming ingegneristico. Spesso si vedono formule scritte su lavagne o fogli protocollo sparsi ovunque.'
    },
    {
        id: 'unica_architettura_castello',
        nome: 'Sala Studio Architettura (Santa Croce)',
        edificio: 'Ex Asilo dei Marinai / Quartiere Castello',
        piano: 1,
        postiTotali: 80,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['Centro Storico', 'Luce Naturale', 'Tavoli da Disegno'],
        latitude: 39.2195,
        longitude: 9.1150,
        indirizzo: 'Via Santa Croce 67, Cagliari',
        university: 'UniCa',
        tags: ['Architettura', 'Castello', 'Storico'],
        notes: 'Nel quartiere più alto e antico di Cagliari. Una vista mozzafiato sul Golfo. Posti limitati ma tavoli enormi per stendere i progetti.'
    },

    // ============================================================
    // POLO ECONOMICO E GIURIDICO (Viale Sant'Ignazio)
    // ============================================================
    {
        id: 'unica_biblio_bsseg',
        nome: 'Biblioteca Scienze Sociali, Eco e Giuridiche',
        edificio: 'Campus Sant\'Ignazio',
        piano: 0,
        postiTotali: 300,
        orarioApertura: '08:30',
        orarioChiusura: '19:45',
        servizi: ['Emeroteca', 'Codici Aggiornati', 'Silenzio'],
        latitude: 39.2210,
        longitude: 9.1080,
        indirizzo: 'Viale Sant\'Ignazio da Laconi 78, Cagliari',
        university: 'UniCa',
        occupancy_rate: 'Altissimo',
        tags: ['Economia', 'Giurisprudenza', 'Silenzio'],
        notes: 'Uno degli hub più grandi. Frequentatissima sotto sessione. Essenziale arrivare prima dell\'apertura per accaparrarsi una postazione con la presa.'
    },
    {
        id: 'unica_giuri_sale_lettura',
        nome: 'Sale Lettura Giurisprudenza',
        edificio: 'Plesso Giurisprudenza',
        piano: 1,
        postiTotali: 100,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Aria Condizionata', 'Consultazione'],
        latitude: 39.2215,
        longitude: 9.1085,
        indirizzo: 'Viale Sant\'Ignazio da Laconi 17, Cagliari',
        university: 'UniCa',
        tags: ['Giurisprudenza'],
        notes: 'Sezione distaccata molto amata dai giuristi per la preparazione dell\'esame di Stato o di Diritto Privato.'
    },
    {
        id: 'unica_economia_viale74',
        nome: 'Aule Studio Economia (Plesso 74)',
        edificio: 'Plesso Economia',
        piano: 0,
        postiTotali: 120,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['Macchinette', 'Rumore Tollerato'],
        latitude: 39.2205,
        longitude: 9.1075,
        indirizzo: 'Viale Sant\'Ignazio da Laconi 74, Cagliari',
        university: 'UniCa',
        tags: ['Economia', 'Gruppo'],
        notes: 'Più caotica della biblioteca centrale, perfetta per ripassare micro e macroeconomia insieme ai colleghi.'
    },
    {
        id: 'unica_orto_botanico',
        nome: 'Orto Botanico (Spazio Outdoor Esterno)',
        edificio: 'Orto Botanico di Cagliari',
        piano: 0,
        postiTotali: 50, // Posti informali su panchine
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Natura', 'Ombra', 'Silenzio Naturale'],
        latitude: 39.2220,
        longitude: 9.1095,
        indirizzo: 'Viale Sant\'Ignazio da Laconi 11, Cagliari',
        university: 'UniCa',
        tags: ['Outdoor', 'Natura'],
        notes: 'Non è un\'aula vera e propria, ma trovandosi esattamente di fronte al Polo, molti studenti si rifugiano sulle panchine dell\'Orto Botanico per leggere o rilassarsi.'
    },

    // ============================================================
    // CITTADELLA UNIVERSITARIA DI MONSERRATO (Scienze, Medicina)
    // ============================================================
    {
        id: 'unica_monserrato_biblio_scienze',
        nome: 'Biblioteca del Distretto Biomedico Scientifico',
        edificio: 'Asse Didattico Monserrato',
        piano: 1,
        postiTotali: 400,
        orarioApertura: '08:30',
        orarioChiusura: '19:45',
        servizi: ['WiFi Eduroam', 'Ampia Disponibilità', 'Prese', 'Silenzio'],
        latitude: 39.2620,
        longitude: 9.1415,
        indirizzo: 'SS554, Bivio Sestu, Monserrato (CA)',
        university: 'UniCa',
        occupancy_rate: 'Alto',
        tags: ['Monserrato', 'Scienze', 'Medicina'],
        notes: 'La biblioteca più grande e moderna dell\'Ateneo. Immersa nella Cittadella. Serve medici, biologi, chimici e fisici.'
    },
    {
        id: 'unica_mons_blocco_g',
        nome: 'Aule Studio Blocco G (Medicina)',
        edificio: 'Cittadella - Blocco G',
        piano: 0,
        postiTotali: 200,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Vicinanza Policlinico', 'Luminose', 'Distributori'],
        latitude: 39.2625,
        longitude: 9.1405,
        indirizzo: 'Cittadella Universitaria, Monserrato',
        university: 'UniCa',
        tags: ['Medicina', 'Monserrato'],
        notes: 'Punto di appoggio vitale per gli studenti di medicina tra un turno di tirocinio al Policlinico Universitario e le lezioni.'
    },
    {
        id: 'unica_mons_blocco_a',
        nome: 'Sala Studio Blocco A (Biologia)',
        edificio: 'Cittadella - Blocco A',
        piano: 1,
        postiTotali: 150,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Isolato', 'Laboratori'],
        latitude: 39.2610,
        longitude: 9.1425,
        indirizzo: 'Cittadella Universitaria, Monserrato',
        university: 'UniCa',
        tags: ['Biologia', 'Monserrato'],
        notes: 'Sezione più interna del campus. Più silenziosa rispetto all\'Asse Didattico centrale.'
    },
    {
        id: 'unica_mons_asse_didattico',
        nome: 'Aree Lettura Asse Didattico',
        edificio: 'Galleria Principale Monserrato',
        piano: 0,
        postiTotali: 250,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Lavoro di Gruppo', 'Forte Rumore', 'Mensa Vicina'],
        latitude: 39.2618,
        longitude: 9.1410,
        indirizzo: 'Asse Didattico, Cittadella Universitaria',
        university: 'UniCa',
        tags: ['Social', 'Mensa'],
        notes: 'I "tavoli nel corridoio". Sono postazioni libere lungo l\'asse centrale. Perfette per lavori di gruppo o per studiare mangiando.'
    },
    {
        id: 'unica_mons_outdoor',
        nome: 'Prati della Cittadella (Aree Verdi)',
        edificio: 'Spazi Esterni Cittadella',
        piano: 0,
        postiTotali: 300,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Sole', 'Prato All\'Inglese', 'Pausa'],
        latitude: 39.2630,
        longitude: 9.1420,
        indirizzo: 'Cittadella Universitaria, Monserrato',
        university: 'UniCa',
        tags: ['Outdoor', 'Monserrato'],
        notes: 'Con l\'arrivo del bel tempo, le aule si svuotano e centinaia di studenti studiano seduti sui muretti o direttamente sull\'erba nei giardini del campus.'
    },

    // ============================================================
    // POLO CENTRO / DIREZIONE
    // ============================================================
    {
        id: 'unica_rettorato_via_roma',
        nome: 'Sale Lettura Palazzo del Rettorato',
        edificio: 'Rettorato',
        piano: 0,
        postiTotali: 40,
        orarioApertura: '09:00',
        orarioChiusura: '14:00',
        servizi: ['Storico', 'Rappresentanza', 'Portici'],
        latitude: 39.2150,
        longitude: 9.1120,
        indirizzo: 'Via Università 40, Cagliari',
        university: 'UniCa',
        tags: ['Centro Storico'],
        notes: 'Spazi limitatissimi usati più per consultazioni veloci. Sei nel cuore antico della città.'
    },
    {
        id: 'unica_mem_civica',
        nome: 'MEM - Mediateca del Mediterraneo (Polo Civico)',
        edificio: 'Ex Mercato Civico',
        piano: 1,
        postiTotali: 200,
        orarioApertura: '09:00',
        orarioChiusura: '20:00',
        servizi: ['Aria Condizionata', 'Pieno Centro', 'Design Moderno'],
        latitude: 39.2155,
        longitude: 9.1175,
        indirizzo: 'Via Mameli 164, Cagliari',
        university: 'UniCa',
        occupancy_rate: 'Alto',
        tags: ['Biblioteca Civica', 'Centro'],
        notes: 'Non è dell\'Università, ma del Comune. Tuttavia, è un hub vitale e amatissimo dagli studenti universitari che vivono in centro e non vogliono salire a Sa Duchessa.'
    },

    // ============================================================
    // POLI DISTACCATI (ORISTANO & NUORO)
    // ============================================================
    {
        id: 'unica_oristano_chiostro',
        nome: 'Biblioteca Consorzio UNO',
        edificio: 'Chiostro del Carmine',
        piano: 1,
        postiTotali: 60,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['Tecnologie Alimentari', 'Turismo', 'Storico'],
        latitude: 39.9025,
        longitude: 8.5910,
        indirizzo: 'Via Carmine 18, Oristano',
        university: 'UniCa - Oristano',
        tags: ['Oristano', 'Silenzio'],
        notes: 'Il Chiostro è bellissimo. Hub fondamentale per i corsi distaccati di UniCa legati a Beni Culturali e Tecnologie Alimentari.'
    },
    {
        id: 'unica_nuoro_biblio',
        nome: 'Biblioteca Polo Universitario Nuorese',
        edificio: 'Ex Artiglieria',
        piano: 0,
        postiTotali: 80,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Scienze Forestali', 'Polo Centrale Nuoro'],
        latitude: 40.3200,
        longitude: 9.3280,
        indirizzo: 'Via Salaris 18, Nuoro',
        university: 'UniCa - Nuoro',
        tags: ['Nuoro', 'Scienze Forestali'],
        notes: 'Il presidio accademico della Barbagia. Ottimamente attrezzata per le facoltà legate all\'ambiente e al territorio.'
    },
    {
        id: 'unica_nuoro_aule',
        nome: 'Aule Studio e Lavoro di Gruppo (UniNuoro)',
        edificio: 'Polo di Nuoro',
        piano: 1,
        postiTotali: 40,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['Spazi Ampi', 'WiFi'],
        latitude: 40.3202,
        longitude: 9.3282,
        indirizzo: 'Via Salaris 18, Nuoro',
        university: 'UniCa - Nuoro',
        tags: ['Nuoro', 'Gruppo'],
        notes: 'Aule più libere adiacenti alla biblioteca centrale di Nuoro.'
    }
];

export const getDirectionsUniCa = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const id = room.id.toLowerCase();
    const isMonserrato = id.includes('mons') || room.indirizzo.includes('Monserrato');
    const isCagliariCentro = id.includes('saduchessa') || id.includes('ing') || id.includes('bsseg') || id.includes('castello');
    const isOristano = id.includes('oristano');
    const isNuoro = id.includes('nuoro');

    // ============================================================
    // CITTADELLA DI MONSERRATO
    // ============================================================
    if (isMonserrato) {
        directions.push({
            luogo: 'Cagliari Centro / Piazza Repubblica',
            descrizione: `La Cittadella è fuori città. L'arteria vitale è la Metropolitana Leggera (MetroCagliari).
1. Prendi la **Metro Linea 1** da Piazza Repubblica o San Gottardo.
2. Scendi al capolinea "Policlinico" o "Cittadella Universitaria". Ti lascerà esattamente dentro l'asse didattico.`,
            mezziPubblici: ['MetroCagliari L1', 'Bus CTM (Linea University Express)'],
            tempoStimato: '25-35 min',
            note: 'ATTENZIONE: Se vieni in auto (SS554), c\'è un parcheggio immenso, ma negli orari di punta (08:30) l\'ingresso si congestiona totalmente.'
        });
    }

    // ============================================================
    // CAGLIARI CITTÀ (Sa Duchessa, Ingegneria, Economia)
    // ============================================================
    if (isCagliariCentro) {
        directions.push({
            luogo: 'Stazione FS Piazza Matteotti',
            descrizione: `I poli storici sono arroccati in città.
1. Per **Sa Duchessa/Ingegneria** (Piazza d'Armi): Prendi il bus CTM linea 8 o il 5 Zeuddi.
2. Per **Economia/Giurisprudenza** (Viale S. Ignazio): Il bus 8 ti lascia molto vicino (fermata Buoncammino) oppure ci arrivi con una passeggiata in salita di 15 minuti dal centro.`,
            mezziPubblici: ['Bus CTM 8', 'Bus CTM 5'],
            tempoStimato: '15 min',
            note: 'Parcheggiare intorno a Piazza d\'Armi o Viale Sant\'Ignazio (strisce blu) è un incubo costoso. I mezzi CTM sono l\'opzione migliore.'
        });
    }

    // ============================================================
    // ORISTANO E NUORO
    // ============================================================
    if (isOristano) {
        directions.push({
            luogo: 'Stazione Oristano FS',
            descrizione: `Il Chiostro del Carmine è in pieno centro storico. Dalla stazione dei treni di Oristano è una passeggiata in piano di circa 10-15 minuti.`,
            mezziPubblici: ['A piedi'],
            tempoStimato: '15 min',
        });
    }

    if (isNuoro) {
        directions.push({
            luogo: 'Nuoro Centro / ARST',
            descrizione: `Il Polo Universitario è raggiungibile a piedi dal centro o usando gli autobus urbani della città (ATP Nuoro).`,
            mezziPubblici: ['Bus ATP', 'A piedi'],
            tempoStimato: '10 min',
        });
    }

    return directions;
};