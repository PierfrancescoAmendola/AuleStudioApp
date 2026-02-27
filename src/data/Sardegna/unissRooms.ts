import { StudyRoom, DirectionsFromLocation } from '../../types';

export const unissRooms: StudyRoom[] = [
    // ============================================================
    // SASSARI - POLO UMANISTICO E GIURIDICO (Centro Storico)
    // ============================================================
    {
        id: 'uniss_giuri_mancini',
        nome: 'Biblioteca Dipartimento Giurisprudenza',
        edificio: 'Plesso Centrale Giurisprudenza',
        piano: 1,
        postiTotali: 150,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Silenzio Assoluto', 'Codici Aggiornati', 'Prese Elettriche'],
        latitude: 40.7235,
        longitude: 8.5620,
        indirizzo: 'Viale Mancini 5, 07100 Sassari',
        university: 'UniSS',
        occupancy_rate: 'Altissimo',
        tags: ['Giurisprudenza', 'Silenzio', 'Centro'],
        notes: 'Il tempio dei giuristi sassaresi. L\'atmosfera è formale e il silenzio è rispettato religiosamente. Trovare posto sotto esame richiede tempismo.'
    },
    {
        id: 'uniss_quadrilatero_aule',
        nome: 'Aule Studio "Il Quadrilatero"',
        edificio: 'Complesso Didattico Quadrilatero',
        piano: 0,
        postiTotali: 250,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['Macchinette', 'Ampia Capienza', 'Rumore Tollerato'],
        latitude: 40.7240,
        longitude: 8.5630,
        indirizzo: 'Viale Mancini / Via Vienna, Sassari',
        university: 'UniSS',
        tags: ['Economia', 'Scienze Politiche', 'Social'],
        notes: 'Il vero hub sociale dell\'Ateneo in centro. Qui si incrociano studenti di Economia e Scienze Politiche. Perfetto per i lavori di gruppo e per chiacchierare.'
    },
    {
        id: 'uniss_umanistica_viaroma',
        nome: 'Biblioteca Polo Umanistico (DUMAS)',
        edificio: 'Plesso Lettere e Lingue',
        piano: 1,
        postiTotali: 120,
        orarioApertura: '08:30',
        orarioChiusura: '18:45',
        servizi: ['Emeroteca', 'WiFi Eduroam', 'Climatizzazione'],
        latitude: 40.7255,
        longitude: 8.5645,
        indirizzo: 'Via Roma 151, Sassari',
        university: 'UniSS',
        tags: ['Umanistica', 'Lettere'],
        notes: 'Frequentata dagli studenti di Lettere, Lingue e Storia. Ambiente molto rilassato e intellettuale, a due passi dal centro.'
    },
    {
        id: 'uniss_biblio_universitaria',
        nome: 'Biblioteca Universitaria di Sassari (Ministero)',
        edificio: 'Ex Ospedale Civile',
        piano: 0,
        postiTotali: 100,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['Manoscritti Storici', 'Silenzio Monumentale'],
        latitude: 40.7260,
        longitude: 8.5610,
        indirizzo: 'Piazza Fiume / Via Enrico Costa, Sassari',
        university: 'UniSS',
        tags: ['Civica', 'Storico'],
        notes: 'Non è gestita direttamente dall\'Ateneo ma dal Ministero. Tuttavia è un rifugio amato dagli universitari in cerca di concentrazione estrema in una cornice storica.'
    },

    // ============================================================
    // SASSARI - POLO MEDICO E SCIENTIFICO (Viale San Pietro)
    // ============================================================
    {
        id: 'uniss_medicina_sanpietro',
        nome: 'Biblioteca Complesso Biologico',
        edificio: 'Polo Biomedico',
        piano: 1,
        postiTotali: 180,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['Clima Ospedaliero', 'Aria Condizionata', 'Testi Clinici'],
        latitude: 40.7205,
        longitude: 8.5580,
        indirizzo: 'Viale San Pietro 43, Sassari',
        university: 'UniSS',
        occupancy_rate: 'Alto',
        tags: ['Medicina', 'Silenzio'],
        notes: 'Avamposto dei futuri medici e infermieri. Sorge proprio accanto alle cliniche universitarie. Clima teso e studio "matto e disperato".'
    },
    {
        id: 'uniss_scienze_piandanna',
        nome: 'Aule Studio Campus Piandanna',
        edificio: 'Polo Scientifico e Orto Botanico',
        piano: 0,
        postiTotali: 150,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Parcheggio', 'Spazi Nuovi', 'Verde'],
        latitude: 40.7150,
        longitude: 8.5500,
        indirizzo: 'Regione Piandanna, Sassari',
        university: 'UniSS',
        tags: ['Scienze', 'Chimica', 'Natura'],
        notes: 'Fuori dal traffico del centro. Un campus moderno circondato dal verde, ideale per chi studia Chimica, Fisica o Scienze Naturali.'
    },

    // ============================================================
    // SASSARI - L'ECCELLENZA (Agraria & Veterinaria)
    // ============================================================
    {
        id: 'uniss_agraria_vialeitalia',
        nome: 'Biblioteca Dipartimento Agraria',
        edificio: 'Complesso Storico Viale Italia',
        piano: 1,
        postiTotali: 100,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['Tranquillità', 'Luce Naturale'],
        latitude: 40.7190,
        longitude: 8.5600,
        indirizzo: 'Viale Italia 39, Sassari',
        university: 'UniSS',
        tags: ['Agraria', 'Silenzio'],
        notes: 'UniSS è nata ed è diventata grande grazie ad Agraria. Questo plesso è storico e trasuda tradizione. Molto tranquillo.'
    },
    {
        id: 'uniss_veterinaria_vienna',
        nome: 'Biblioteca Scienze Veterinarie',
        edificio: 'Polo Medico-Veterinario',
        piano: 0,
        postiTotali: 90,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['Medicina Animale', 'Laboratori Adiacenti'],
        latitude: 40.7185,
        longitude: 8.5650,
        indirizzo: 'Via Vienna 2, Sassari',
        university: 'UniSS',
        tags: ['Veterinaria'],
        notes: 'Vicinissima al Quadrilatero ma con un ecosistema tutto suo. Frequentata esclusivamente dagli studenti di veterinaria.'
    },
    {
        id: 'uniss_ospedale_vet_aule',
        nome: 'Sale Lettura Ospedale Veterinario',
        edificio: 'Ospedale Didattico Veterinario',
        piano: 0,
        postiTotali: 40,
        orarioApertura: '08:30',
        orarioChiusura: '17:30',
        servizi: ['Casi Clinici', 'Isolato'],
        latitude: 40.7140,
        longitude: 8.5450,
        indirizzo: 'Regione Piandanna (S.P. 15), Sassari',
        university: 'UniSS',
        tags: ['Veterinaria', 'Pratica'],
        notes: 'Gli studenti studiano qui tra un intervento chirurgico su un animale e l\'altro. Ambiente puramente clinico.'
    },

    // ============================================================
    // ALGHERO - POLO ARCHITETTURA E DESIGN
    // ============================================================
    {
        id: 'uniss_alghero_stachiara',
        nome: 'Biblioteca Architettura "Santa Chiara"',
        edificio: 'Complesso Santa Chiara',
        piano: 1,
        postiTotali: 120,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['Vista Mare', 'Tavoli Enormi', 'Design'],
        latitude: 40.5585,
        longitude: 8.3120,
        indirizzo: 'Bastioni Marco Polo 77, Alghero (SS)',
        university: 'UniSS - Alghero',
        tags: ['Architettura', 'Vista Mare', 'Storico'],
        notes: 'In assoluto una delle biblioteche universitarie più belle d\'Italia. Sorge sulle mura spagnole (Bastioni) a picco sul mare.'
    },
    {
        id: 'uniss_alghero_asilosella',
        nome: 'Aule Progettazione "Asilo Sella"',
        edificio: 'Complesso Asilo Sella',
        piano: 0,
        postiTotali: 150,
        orarioApertura: '08:30',
        orarioChiusura: '20:00',
        servizi: ['Open Space', 'Prese Industriali', 'Macelli Creativi'],
        latitude: 40.5620,
        longitude: 8.3180,
        indirizzo: 'Lungomare Garibaldi 35, Alghero (SS)',
        university: 'UniSS - Alghero',
        occupancy_rate: 'Altissimo',
        tags: ['Design', 'Laboratorio', 'Lavoro Notturno'],
        notes: 'Qui non si viene per leggere nel silenzio. Si viene per tagliare cartone, stampare in 3D e renderizzare progetti fino a chiusura.'
    },
    {
        id: 'uniss_alghero_chiostro',
        nome: 'Chiostro di Santa Chiara (Outdoor)',
        edificio: 'Complesso Santa Chiara',
        piano: 0,
        postiTotali: 60,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['Socialità', 'Pausa Caffè', 'Brezza Marina'],
        latitude: 40.5586,
        longitude: 8.3121,
        indirizzo: 'Bastioni Marco Polo, Alghero',
        university: 'UniSS - Alghero',
        tags: ['Outdoor', 'Architettura'],
        notes: 'Il luogo perfetto per far riposare gli occhi dallo schermo guardando l\'architettura gotico-catalana del chiostro.'
    },

    // ============================================================
    // OLBIA - POLO ECONOMIA E TURISMO (UniOlbia)
    // ============================================================
    {
        id: 'uniss_olbia_airport_biblio',
        nome: 'Biblioteca Polo Universitario Olbia',
        edificio: 'Aeroporto Costa Smeralda (1° Piano)',
        piano: 1,
        postiTotali: 80,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Dentro l\'Aeroporto', 'Aria Condizionata', 'Parcheggio Gratuito'],
        latitude: 40.9020,
        longitude: 9.5160,
        indirizzo: 'Aeroporto Costa Smeralda, Olbia (SS)',
        university: 'UniSS - Olbia',
        tags: ['Turismo', 'Economia', 'Aeroporto'],
        notes: 'Studiare guardando gli aerei decollare. Unico in Italia: il consorzio universitario è fisicamente integrato nell\'aeroporto di Olbia.'
    },
    {
        id: 'uniss_olbia_airport_aule',
        nome: 'Aule Studio / Aree Comuni UniOlbia',
        edificio: 'Area Universitaria Aeroporto',
        piano: 1,
        postiTotali: 100,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Bar dell\'Aeroporto', 'Lavoro di Gruppo'],
        latitude: 40.9022,
        longitude: 9.5162,
        indirizzo: 'Aeroporto Costa Smeralda, Olbia',
        university: 'UniSS - Olbia',
        tags: ['Lounge', 'Social'],
        notes: 'Essendo un polo dedicato all\'Economia del Turismo, gli spazi comuni ricordano molto le lounge aeroportuali.'
    },

    // ============================================================
    // NUORO - CONSORZIO UNIVERSITARIO NUORESE
    // ============================================================
    {
        id: 'uniss_nuoro_salaris_biblio',
        nome: 'Biblioteca UniNuoro',
        edificio: 'Polo Universitario',
        piano: 1,
        postiTotali: 70,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Silenzio', 'Scienze Forestali'],
        latitude: 40.3200,
        longitude: 9.3280,
        indirizzo: 'Via Salaris 18, Nuoro',
        university: 'UniSS - Nuoro',
        tags: ['Nuoro', 'Silenzio'],
        notes: 'Polo condiviso con UniCa. Per la parte UniSS, il focus è su Scienze Forestali e Ambientali.'
    },
    {
        id: 'uniss_nuoro_infermieristica',
        nome: 'Sale Lettura Infermieristica',
        edificio: 'Ospedale San Francesco (Polo Formativo)',
        piano: 0,
        postiTotali: 40,
        orarioApertura: '08:30',
        orarioChiusura: '17:30',
        servizi: ['Testi Clinici', 'Vicinanza Reparti'],
        latitude: 40.3280,
        longitude: 9.3150,
        indirizzo: 'Via Salvatore Mannironi, Nuoro',
        university: 'UniSS - Nuoro',
        tags: ['Medicina', 'Tirocinio'],
        notes: 'Postazione tattica per gli studenti delle professioni sanitarie.'
    },

    // ============================================================
    // ORISTANO - CONSORZIO UNO
    // ============================================================
    {
        id: 'uniss_oristano_carmine',
        nome: 'Aule Studio UniSS (Oristano)',
        edificio: 'Chiostro del Carmine',
        piano: 0,
        postiTotali: 50,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['Viticoltura', 'Ambiente Storico'],
        latitude: 39.9025,
        longitude: 8.5910,
        indirizzo: 'Via Carmine 18, Oristano',
        university: 'UniSS - Oristano',
        tags: ['Oristano', 'Agraria'],
        notes: 'Condiviso con UniCa, ma la porzione UniSS è dominata dagli studenti di Viticoltura ed Enologia e Qualità dei Prodotti.'
    },

    // ============================================================
    // SASSARI - AREE COMUNI E MENSE
    // ============================================================
    {
        id: 'uniss_mensa_via_vienna',
        nome: 'Aree Studio Mensa ERSU',
        edificio: 'Mensa Universitaria Via Vienna',
        piano: 0,
        postiTotali: 150,
        orarioApertura: '10:00',
        orarioChiusura: '18:00', // Fuori orario pasti
        servizi: ['Pausa Caffè', 'Lavoro di Gruppo', 'Ricarica Device'],
        latitude: 40.7245,
        longitude: 8.5640,
        indirizzo: 'Via Vienna, Sassari',
        university: 'UniSS',
        tags: ['Mensa', 'Social', 'Pausa'],
        notes: 'Fuori dagli orari di erogazione dei pasti (12:30-14:30), l\'enorme sala mensa dell\'ERSU viene usata come gigantesco open space per studiare in gruppo.'
    },
    {
        id: 'uniss_cortile_giurisprudenza',
        nome: 'Cortile Interno Giurisprudenza',
        edificio: 'Viale Mancini',
        piano: 0,
        postiTotali: 60,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Outdoor', 'Ombra'],
        latitude: 40.7236,
        longitude: 8.5622,
        indirizzo: 'Viale Mancini 5, Sassari',
        university: 'UniSS',
        tags: ['Outdoor'],
        notes: 'Ottimo rifugio all\'aperto per una pausa veloce senza dover uscire dal plesso.'
    },
    {
        id: 'uniss_orto_botanico_ss',
        nome: 'Orto Botanico dell\'Università (Piandanna)',
        edificio: 'Aree Verdi Piandanna',
        piano: 0,
        postiTotali: 40,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['Natura Estrema', 'Aria Pura'],
        latitude: 40.7145,
        longitude: 8.5490,
        indirizzo: 'Regione Piandanna, Sassari',
        university: 'UniSS',
        tags: ['Outdoor', 'Natura'],
        notes: 'Utilizzato dagli studenti di Scienze Naturali per le lezioni, ma accessibile per leggere un libro su una panchina in pace totale.'
    }
];

export const getDirectionsUniSS = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const isSassariCentro = room.indirizzo.includes('Mancini') || room.indirizzo.includes('Roma') || room.indirizzo.includes('Vienna') || room.indirizzo.includes('Italia');
    const isSassariPiandanna = room.indirizzo.includes('Piandanna');
    const isAlghero = room.id.includes('alghero');
    const isOlbia = room.id.includes('olbia');

    if (isSassariCentro) {
        directions.push({
            luogo: 'Stazione FS Sassari / Emiciclo Garibaldi',
            descrizione: `I poli centrali (Giurisprudenza, Lettere, Agraria, Quadrilatero) sono attaccati tra loro.
1. Dalla Stazione Ferroviaria, prendi la **Metropolitana di Superficie (Sirio)** e scendi alla fermata "Emiciclo Garibaldi" o "Cliniche Universitarie".
2. Sei a 5 minuti a piedi da Viale Mancini, Via Roma e Via Vienna.`,
            mezziPubblici: ['Metro Sirio', 'A piedi'],
            tempoStimato: '10 min',
            note: 'La Metro di Superficie (Sirio) è il mezzo per eccellenza degli studenti a Sassari.'
        });
    }

    if (isSassariPiandanna) {
        directions.push({
            luogo: 'Sassari Centro',
            descrizione: `Il Campus Scientifico di Piandanna è leggermente fuori dal tessuto urbano compatto.
1. Utilizza gli autobus urbani dell'ATP (es. Linea 8).
2. L'auto è un'ottima opzione essendoci grandi parcheggi.`,
            mezziPubblici: ['Bus ATP', 'Auto'],
            tempoStimato: '15 min (dal centro)',
        });
    }

    if (isAlghero) {
        directions.push({
            luogo: 'Porto / Centro Storico Alghero',
            descrizione: `I due poli sono centralissimi ma separati.
1. Per l'**Asilo Sella**, segui il Lungomare Garibaldi (di fronte al porto turistico).
2. Per **Santa Chiara**, entra nella città murata e sali sui Bastioni Marco Polo a picco sul mare. L'uso dell'auto nel centro storico è vietato.`,
            mezziPubblici: ['A piedi', 'Bici'],
            tempoStimato: '5-10 min',
        });
    }

    if (isOlbia) {
        directions.push({
            luogo: 'Stazione Olbia / Centro',
            descrizione: `Il polo UniOlbia si trova letteralmente DENTRO l'Aeroporto Costa Smeralda.
1. Prendi i bus ASPO (Linea 2 o 10) che collegano il centro all'aeroporto in frequenza continua.
2. Parcheggio auto enorme dedicato agli studenti (spesso con convenzioni UniOlbia).`,
            mezziPubblici: ['Bus ASPO (Linea 2/10)'],
            tempoStimato: '10-15 min',
        });
    }

    return directions;
};