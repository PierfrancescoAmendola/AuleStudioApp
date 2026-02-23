import { StudyRoom, DirectionsFromLocation } from '../../types';

export const uninsubriaRooms: StudyRoom[] = [
    // ============================================================
    // VARESE - CAMPUS BIZZOZERO (Il cuore pulsante di Varese)
    // ============================================================
    {
        id: 'insubria_va_biblio_eco',
        nome: 'Biblioteca di Economia',
        edificio: 'Padiglione Monte Generoso',
        piano: 0, // Piano terra/rialzato
        postiDisponibili: 120,
        postiTotali: 180,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Prese elettriche', 'Aria Condizionata', 'Parcheggio'],
        latitude: 45.8005,
        longitude: 8.8470,
        indirizzo: 'Via Monte Generoso 71, Varese',
        university: 'Insubria',
        occupancy_rate: 'Alto',
        notes: 'Sede centrale del Campus di Varese. Grande, luminosa e con ampio parcheggio gratuito davanti.',
        tags: ['Biblioteca', 'WiFi', '⚡ Prese', '❄️ Climatizzato', '🅿️ Parcheggio'],
    },
    {
        id: 'insubria_va_biblio_bio',
        nome: 'Biblioteca Biomedica (Dunant)',
        edificio: 'Padiglione Bassani',
        piano: 1,
        postiDisponibili: 100,
        postiTotali: 150,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Silenzio Assoluto', 'Consultazione'],
        latitude: 45.7980,
        longitude: 8.8490,
        indirizzo: 'Via J.H. Dunant 3, Varese',
        university: 'Insubria',
        notes: 'Riferimento per Medicina e Scienze. Ambiente molto tranquillo.',
        tags: ['Biblioteca', 'WiFi', '🔇 Silenzio'],
    },
    {
        id: 'insubria_va_rossi',
        nome: 'Aule Studio Padiglione Rossi',
        edificio: 'Area Ex Ospedale Psichiatrico',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 120,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['WiFi', 'Parco Esterno', 'Aule Didattiche Libere'],
        latitude: 45.7950,
        longitude: 8.8520,
        indirizzo: 'Via Ottorino Rossi 9, Varese',
        university: 'Insubria',
        notes: 'Immerso nel verde. Le aule didattiche (Pad. Antonini/Morselli) sono spesso usate per lo studio libero.',
        tags: ['Aula Studio', 'Medicina', 'WiFi'],
    },
    {
        id: 'insubria_va_collegio',
        nome: 'Sala Studio Collegio Cattaneo',
        edificio: 'Collegio Cattaneo',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 60,
        orarioApertura: '08:00',
        orarioChiusura: '22:00',
        servizi: ['WiFi', 'Aperta fino a tardi', 'Priorità Residenti'],
        latitude: 45.7985,
        longitude: 8.8495,
        indirizzo: 'Via Dunant 7, Varese',
        university: 'Insubria',
        notes: 'All\'interno del collegio universitario. Verificare accessibilità per gli esterni alla reception.',
        tags: ['Aula Studio', 'WiFi'],
    },

    // ============================================================
    // COMO - CAMPUS SANT'ABBONDIO (Umanistico / Giurisprudenza)
    // ============================================================
    {
        id: 'insubria_co_chiostro',
        nome: 'Biblioteca Sant\'Abbondio',
        edificio: 'Chiostro di Sant\'Abbondio',
        piano: 0,
        postiDisponibili: 110,
        postiTotali: 150,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Edificio Storico', 'Chiostro', 'Silenzio'],
        latitude: 45.8055,
        longitude: 9.0830,
        indirizzo: 'Via Sant\'Abbondio 12, Como',
        university: 'Insubria',
        occupancy_rate: 'Alto',
        notes: 'Una delle sedi più belle d\'Italia, in un antico monastero con chiostro. Atmosfera unica.',
        tags: ['Biblioteca', 'WiFi', '🔇 Silenzio'],
    },

    // ============================================================
    // COMO - POLO SCIENTIFICO (Valleggio / Castelnuovo)
    // ============================================================
    {
        id: 'insubria_co_scienze',
        nome: 'Biblioteca di Scienze (Valleggio)',
        edificio: 'Sede Via Valleggio',
        piano: 2,
        postiDisponibili: 80,
        postiTotali: 120,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Laboratori', 'Moderno'],
        latitude: 45.8020,
        longitude: 9.0940,
        indirizzo: 'Via Valleggio 11, Como',
        university: 'Insubria',
        notes: 'Polo moderno condiviso in parte con il Politecnico di Milano (sede distaccata).',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'insubria_co_castelnuovo',
        nome: 'Aule Studio Via Castelnuovo',
        edificio: 'Sede Castelnuovo',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 90,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Aule Didattiche'],
        latitude: 45.8010,
        longitude: 9.0960,
        indirizzo: 'Via Castelnuovo 7, Como',
        university: 'Insubria',
        notes: 'A pochi passi dalla sede di Valleggio.',
        tags: ['Aula Studio', 'WiFi'],
    },

    // ============================================================
    // BUSTO ARSIZIO (Scienze Motorie / Biologia)
    // ============================================================
    {
        id: 'insubria_busto_molini',
        nome: 'Sala Studio Molini Marzoli',
        edificio: 'Ex Molini Marzoli Massari',
        piano: 1,
        postiDisponibili: 90,
        postiTotali: 130,
        orarioApertura: '09:00',
        orarioChiusura: '18:30',
        servizi: ['WiFi', 'Archeologia Industriale', 'Parcheggio'],
        latitude: 45.6080,
        longitude: 8.8570,
        indirizzo: 'Via Alberto da Giussano 12, Busto Arsizio (VA)',
        university: 'Insubria',
        notes: 'Sede suggestiva in un ex edificio industriale recuperato. Ospita Biologia e Scienze Motorie.',
        tags: ['Aula Studio', 'WiFi', '🅿️ Parcheggio'],
    },

    // ============================================================
    // COMO - SPAZI AGGIUNTIVI
    // ============================================================
    {
        id: 'insubria_co_torre',
        nome: 'Aula Studio Torre (Via Valleggio)',
        edificio: 'Torre Valleggio',
        piano: 1,
        postiDisponibili: 45,
        postiTotali: 50,
        orarioApertura: '08:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Silenzio', 'Vista'],
        latitude: 45.8020,
        longitude: 9.0940,
        indirizzo: 'Via Valleggio 11, Como',
        university: 'Insubria',
        notes: 'Aula dedicata nella Torre. 50 posti. Silenzio obbligatorio.',
        tags: ['Aula Studio', 'WiFi', '🔇 Silenzio'],
    },
    {
        id: 'insubria_co_giurisprudenza',
        nome: 'Biblioteca Giurisprudenza e Scienze Umane',
        edificio: 'Sede Via Bossi',
        piano: 0,
        postiDisponibili: 70,
        postiTotali: 100,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Silenzio Assoluto', 'Centro Storico'],
        latitude: 45.8070,
        longitude: 9.0815,
        indirizzo: 'Via Bossi 5, Como',
        university: 'Insubria',
        notes: 'Biblioteca di Giurisprudenza nel centro storico di Como.',
        tags: ['Biblioteca', 'Centro', 'WiFi', '🔇 Silenzio'],
    },
    {
        id: 'insubria_co_oriani',
        nome: 'Aule Didattiche Oriani (Campus Umanistico)',
        edificio: 'Sede Via Oriani',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi', 'Aule Libere'],
        latitude: 45.8050,
        longitude: 9.0825,
        indirizzo: 'Via Oriani, Como',
        university: 'Insubria',
        notes: 'Aule didattiche usate come spazi studio quando libere.',
        tags: ['Aula Studio', 'Campus', 'WiFi'],
    },

    // ============================================================
    // VARESE - SPAZI AGGIUNTIVI (Campus Bizzozero)
    // ============================================================
    {
        id: 'insubria_va_antonini',
        nome: 'Aule Padiglione Antonini',
        edificio: 'Padiglione Antonini',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Parco', 'Aule Didattiche'],
        latitude: 45.7955,
        longitude: 8.8515,
        indirizzo: 'Via Ottorino Rossi, Varese',
        university: 'Insubria',
        notes: 'Aule didattiche nel verde del Campus Bizzozero.',
        tags: ['Aula Studio', 'WiFi'],
    },
    {
        id: 'insubria_va_lanzavecchia',
        nome: 'Aule Padiglione Lanzavecchia',
        edificio: 'Padiglione Lanzavecchia',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 70,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Moderno'],
        latitude: 45.7960,
        longitude: 8.8510,
        indirizzo: 'Via Ottorino Rossi, Varese',
        university: 'Insubria',
        notes: 'Aule per Medicina e Biotecnologie.',
        tags: ['Aula Studio', 'WiFi'],
    },
    {
        id: 'insubria_va_morselli',
        nome: 'Aule Padiglione Morselli',
        edificio: 'Padiglione Morselli',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 60,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi', 'Tranquillo'],
        latitude: 45.7945,
        longitude: 8.8525,
        indirizzo: 'Via Ottorino Rossi, Varese',
        university: 'Insubria',
        notes: 'Padiglione più tranquillo, immerso nel parco.',
        tags: ['Aula Studio', 'WiFi'],
    },
    {
        id: 'insubria_va_ristoro',
        nome: 'Sala Ristoro Monte Generoso (con Studio)',
        edificio: 'Padiglione Monte Generoso',
        piano: 0,
        postiDisponibili: 12,
        postiTotali: 14,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['WiFi', 'Macchinette', 'Microonde', 'Informale'],
        latitude: 45.8005,
        longitude: 8.8470,
        indirizzo: 'Via Monte Generoso 71, Varese',
        university: 'Insubria',
        notes: 'Sala ristoro con 14 posti studio. Ambiente informale.',
        tags: ['Aula Studio', 'WiFi', '❄️ Climatizzato'],
    }
];

export const getDirectionsUninsubria = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const isVarese = room.indirizzo.includes('Varese') || room.indirizzo.includes('Monte Generoso') || room.indirizzo.includes('Dunant');
    const isComoSA = room.indirizzo.includes('Sant\'Abbondio');
    const isComoScienze = room.indirizzo.includes('Valleggio') || room.indirizzo.includes('Castelnuovo');
    const isBusto = room.indirizzo.includes('Busto');

    // VARESE - CAMPUS BIZZOZERO
    if (isVarese) {
        directions.push({
            luogo: 'Stazioni FS/Nord Varese',
            descrizione: `Per Campus Bizzozero (Monte Generoso/Dunant):
1. Dalle stazioni (Piazzale Trieste), recati alla fermata bus di Viale Milano o Via Morosini.
2. Prendi il **Bus Linea C** (direzione Bizzozero/Nabresina) o la linea speciale universitaria **"Insubria"**.
3. Scendi alla fermata **Monte Generoso (Università)** o **Dunant** a seconda della sede.
4. Tempo di percorrenza bus: 15-20 minuti.`,
            mezziPubblici: ['Bus Linea C', 'Bus Linea E'],
            tempoStimato: '25 min dalla stazione',
            note: 'Il Campus è in collina, a piedi dalla stazione è lunga (40 min in salita).'
        });
    }

    // COMO - SANT'ABBONDIO
    else if (isComoSA) {
        directions.push({
            luogo: 'Stazione Como San Giovanni (FS)',
            descrizione: `Per Sant'Abbondio (Giurisprudenza):
1. Dalla stazione San Giovanni, scendi a piedi lungo Via Gallio.
2. Prosegui su Viale Innocenzo XI.
3. Svolta a destra in Via Sant'Abbondio (circa 10-15 min a piedi).
4. Alternativa: Bus urbano linea 7 o 11.`,
            mezziPubblici: ['A piedi', 'Bus 7'],
            tempoStimato: '15 min',
            note: 'Molto vicina alla stazione principale (FS).'
        });
    }

    // COMO - VALLEGGIO (Scienze)
    else if (isComoScienze) {
        directions.push({
            luogo: 'Stazione Como Borghi (Nord)',
            descrizione: `Per Sede Valleggio (Scienze):
1. Scendi alla stazione **Como Borghi** (Trenord).
2. La sede è praticamente dietro la stazione (5 min a piedi).
3. Percorri Via Aldo Moro e svolta in Via Valleggio.`,
            mezziPubblici: ['Treno (Como Borghi)', 'A piedi'],
            tempoStimato: '5 min',
            note: 'La stazione Como Borghi è strategica per questo polo.'
        });
    }

    // BUSTO ARSIZIO
    else if (isBusto) {
        directions.push({
            luogo: 'Stazione FS Busto Arsizio',
            descrizione: `Per Molini Marzoli:
1. Dalla stazione FS, prendi l'uscita principale.
2. I Molini Marzoli sono raggiungibili a piedi in circa 10-15 minuti.
3. Segui Via Caprera e poi Viale Cadorna fino a Via da Giussano.`,
            mezziPubblici: ['A piedi'],
            tempoStimato: '15 min',
            note: 'Edificio in mattoni rossi molto riconoscibile.'
        });
    }

    return directions;
};
