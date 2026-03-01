import { StudyRoom, DirectionsFromLocation } from '../../types';

export const unitoRooms: StudyRoom[] = [
    // ============================================================
    // TORINO - CAMPUS LUIGI EINAUDI (CLE) - Giurisprudenza, Scienze Politiche, Sociologia, Economia
    // ============================================================
    {
        id: 'unito_cle_bobbio',
        nome: 'Biblioteca "Norberto Bobbio"',
        edificio: 'Campus Luigi Einaudi',
        piano: 0,
        postiDisponibili: 750,
        postiTotali: 800,
        orarioApertura: '08:30',
        orarioChiusura: '19:15',
        servizi: ['WiFi', 'Postazioni PC', 'Scaffale aperto', 'Prestito', 'Fotocopie', 'Caffetteria interna'],
        latitude: 45.0740,
        longitude: 7.6982,
        indirizzo: 'Lungo Dora Siena 100/A, 10153 Torino',
        university: 'UniTo',
        occupancy_rate: 'Altissimo (specialmente in sessione)',
        notes: 'La biblioteca più grande e spettacolare di UniTo (progetto Norman Foster). Ospita oltre 650.000 volumi. Orario ridotto in agosto e durante le festività.',
        tags: ['Biblioteca', 'Campus', 'WiFi', '☕ Ristoro', '🖨️ Stampa'],
    },
    {
        id: 'unito_cle_spaziomai',
        nome: 'Spazio Mai - Aula Studio Serale',
        edificio: 'Campus Luigi Einaudi',
        piano: 0,
        postiDisponibili: 150,
        postiTotali: 180,
        orarioApertura: '08:30',
        orarioChiusura: '23:00',
        servizi: ['WiFi', 'Prese elettriche', 'Apertura serale', 'Ingresso autonomo con badge'],
        latitude: 45.0740,
        longitude: 7.6982,
        indirizzo: 'Lungo Dora Siena 100/A, 10153 Torino',
        university: 'UniTo',
        occupancy_rate: 'Alto la sera in sessione',
        notes: 'Aula studio con orario prolungato. Accesso consentito anche a studenti PoliTo (con registrazione). Chiusa in agosto.',
        tags: ['Aula Studio', 'Campus', 'WiFi', '⚡ Prese'],
    },
    // ============================================================
    // TORINO - PALAZZO NUOVO (Umanistica)
    // ============================================================
    {
        id: 'unito_pn_graf',
        nome: 'Biblioteca "Arturo Graf"',
        edificio: 'Palazzo Nuovo',
        piano: 0,
        postiDisponibili: 280,
        postiTotali: 320,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Patrimonio storico-letterario', 'Prestito', 'Fotocopie'],
        latitude: 45.0680,
        longitude: 7.6944,
        indirizzo: 'Via Sant\'Ottavio 20, 10124 Torino',
        university: 'UniTo',
        occupancy_rate: 'Alto',
        notes: 'Cuore dei dipartimenti umanistici. Vicinissima alla Mole Antonelliana. Verificare orari durante le pause didattiche.',
        tags: ['Biblioteca', 'WiFi', '🖨️ Stampa'],
    },
    // ============================================================
    // TORINO - MOLINETTE (Medicina)
    // ============================================================
    {
        id: 'unito_molinette_biblio',
        nome: 'Biblioteca Federata di Medicina "Ferdinando Rossi" - Polo Molinette',
        edificio: 'Città della Salute e della Scienza',
        piano: 0,
        postiDisponibili: 220,
        postiTotali: 260,
        orarioApertura: '09:00',
        orarioChiusura: '12:30', // Orario ufficiale: 9:00-12:30 / 14:30-17:00
        servizi: ['WiFi', 'Testi clinici e scientifici', 'Postazioni PC', 'Vicino a metro'],
        latitude: 45.0412,
        longitude: 7.6745,
        indirizzo: 'Corso Dogliotti 14, 10126 Torino',
        university: 'UniTo',
        occupancy_rate: 'Alto',
        notes: 'La biblioteca osserva orario spezzato: 9:00-12:30 e 14:30-17:00. Verificare eventuali variazioni.',
        tags: ['Biblioteca', 'Campus', 'Medicina', 'WiFi'],
    },
    // ============================================================
    // GRUGLIASCO - Campus SAMEV (Agraria, Veterinaria)
    // ============================================================
    {
        id: 'unito_grugliasco_samev',
        nome: 'Biblioteca "Carlo Enrico" - Campus SAMEV',
        edificio: 'Polo di Grugliasco',
        piano: 0,
        postiDisponibili: 320,
        postiTotali: 380,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi', 'Aree verdi', 'Mensa universitaria', 'Parcheggio gratuito'],
        latitude: 45.0658,
        longitude: 7.5902,
        indirizzo: 'Largo Paolo Braccini 2, 10095 Grugliasco (TO)',
        university: 'UniTo',
        occupancy_rate: 'Medio',
        notes: 'Campus immerso nel verde con spazi studio anche all\'aperto. Presenti animali e serre didattiche.',
        tags: ['Biblioteca', 'Campus', 'WiFi', '☕ Ristoro', '🅿️ Parcheggio'],
    },
    // ============================================================
    // ORBASSANO - Polo San Luigi (Medicina)
    // ============================================================
    {
        id: 'unito_orbassano_sanluigi',
        nome: 'Biblioteca Polo San Luigi Gonzaga',
        edificio: 'Ospedale San Luigi',
        piano: 1,
        postiDisponibili: 160,
        postiTotali: 200,
        orarioApertura: '09:00',
        orarioChiusura: '12:30', // Orario ufficiale: 9:00-12:30
        servizi: ['WiFi', 'Testi medici specialistici', 'Parcheggio'],
        latitude: 45.0065,
        longitude: 7.5408,
        indirizzo: 'Regione Gonzole 10, 10043 Orbassano (TO)',
        university: 'UniTo',
        occupancy_rate: 'Medio',
        notes: 'Biblioteca con apertura solo mattutina (9:00-12:30). Decentrata ma moderna.',
        tags: ['Biblioteca', 'Campus', 'Medicina', 'WiFi', '🅿️ Parcheggio'],
    },
    // ============================================================
    // SEDI REGIONALI (principali)
    // ============================================================
    {
        id: 'unito_cuneo_mater',
        nome: 'Biblioteca Universitaria Cuneese - Sede Mater Amabilis',
        edificio: 'Ex Mater Amabilis',
        piano: 1,
        postiDisponibili: 120,
        postiTotali: 140,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi', 'Centro città', 'Prestito'],
        latitude: 44.3892,
        longitude: 7.5485,
        indirizzo: 'Via Ferraris di Celle 2, 12100 Cuneo',
        university: 'UniTo - Cuneo',
        occupancy_rate: 'Medio',
        notes: 'Sede nel centro di Cuneo. Verificare orari estivi.',
        tags: ['Biblioteca', 'Centro', 'WiFi'],
    },
    {
        id: 'unito_biella_cittastudi',
        nome: 'Biblioteca Città Studi',
        edificio: 'Campus Città Studi',
        piano: 0,
        postiDisponibili: 180,
        postiTotali: 220,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Design moderno', 'Mensa', 'Parcheggio'],
        latitude: 45.5565,
        longitude: 8.0672,
        indirizzo: 'Corso Giuseppe Pella 2b, 13900 Biella',
        university: 'UniTo - Biella',
        occupancy_rate: 'Medio',
        notes: 'Campus condiviso con altre istituzioni. Ambiente innovativo.',
        tags: ['Biblioteca', 'Campus', 'WiFi', '☕ Ristoro', '🅿️ Parcheggio'],
    },
    {
        id: 'unito_alba_ampelion',
        nome: 'Polo Enologico Ampelion',
        edificio: 'Sede di Enologia',
        piano: 0,
        postiDisponibili: 70,
        postiTotali: 90,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Laboratori enologici', 'Vigneti didattici'],
        latitude: 44.6980,
        longitude: 8.0350,
        indirizzo: 'Corso Enotria 2, 12051 Alba (CN)',
        university: 'UniTo - Alba',
        occupancy_rate: 'Basso',
        notes: 'Centro di eccellenza per studi enologici. Spazi studio limitati ma suggestivi.',
        tags: ['Aula Studio', 'Campus', 'WiFi'],
    },
    {
        id: 'unito_asti_astiss',
        nome: 'Polo Universitario Astiss',
        edificio: 'Piazzale Fabrizio De André',
        piano: 1,
        postiDisponibili: 130,
        postiTotali: 160,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Scienze Motorie', 'Infermieristica', 'Mensa'],
        latitude: 44.9010,
        longitude: 8.2010,
        indirizzo: 'Piazzale Fabrizio De André, 14100 Asti',
        university: 'UniTo - Asti',
        occupancy_rate: 'Medio',
        notes: 'Polo vivace con più corsi di laurea.',
        tags: ['Aula Studio', 'Campus', 'WiFi', '☕ Ristoro'],
    },
    {
        id: 'unito_savigliano_monica',
        nome: 'Ex Monastero Santa Monica',
        edificio: 'Sede di Scienze della Formazione',
        piano: 1,
        postiDisponibili: 110,
        postiTotali: 140,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi', 'Chiostro storico', 'Ambiente silenzioso'],
        latitude: 44.6490,
        longitude: 7.6580,
        indirizzo: 'Via Garibaldi 6, 12038 Savigliano (CN)',
        university: 'UniTo - Savigliano',
        occupancy_rate: 'Basso-Medio',
        notes: 'Sede in edificio storico di grande suggestione.',
        tags: ['Aula Studio', 'WiFi', '🔇 Silenzio'],
    },
    {
        id: 'unito_ivrea_officina',
        nome: 'Polo Universitario "Officina H"',
        edificio: 'Ex area Olivetti',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '09:00',
        orarioChiusura: '17:30',
        servizi: ['WiFi', 'Corsi infermieristici', 'Parcheggio'],
        latitude: 45.4620,
        longitude: 7.8680,
        indirizzo: 'Via Montenavale, 10015 Ivrea (TO)',
        university: 'UniTo - Ivrea',
        occupancy_rate: 'Basso',
        notes: 'Sede in ex stabilimento Olivetti, recentemente ristrutturata.',
        tags: ['Aula Studio', 'Campus', 'WiFi', '🅿️ Parcheggio'],
    },
    // ============================================================
    // TORINO - AULE STUDIO EDISU PIEMONTE (Ente Regionale)
    // ============================================================
    {
        id: 'unito_edisu_verdi26',
        nome: 'Sala Studio EDISU Verdi 26',
        edificio: 'Palazzo EDISU Via Verdi',
        piano: 0,
        postiDisponibili: 200,
        postiTotali: 292,
        orarioApertura: '08:30',
        orarioChiusura: '24:00',
        servizi: ['WiFi Gratuito', 'Distributori automatici', 'Fotocopiatrici', 'Prenotazione via App'],
        latitude: 45.0685,
        longitude: 7.6935,
        indirizzo: 'Via Giuseppe Verdi 26, 10124 Torino',
        university: 'UniTo',
        occupancy_rate: 'Molto Alto',
        extendedHours: true,
        notes: 'Gestita da EDISU Piemonte. 292 posti, aperta fino a mezzanotte (lun-ven) e fino alle 22:00 (sab-dom). Accesso esclusivo tramite app \"Campus Piemonte ID Study Room\".',
        tags: ['Aula Studio', 'EDISU', 'WiFi', '🌙 Serale', '⚡ Prese'],
    },
    {
        id: 'unito_edisu_olimpia',
        nome: 'Sala Studio EDISU Olimpia',
        edificio: 'Residenza Olimpia',
        piano: 0,
        postiDisponibili: 120,
        postiTotali: 180,
        orarioApertura: '08:30',
        orarioChiusura: '23:00',
        servizi: ['WiFi Gratuito', 'Prese elettriche', 'Climatizzazione'],
        latitude: 45.0620,
        longitude: 7.6680,
        indirizzo: 'Via Paolo Borsellino 42, 10138 Torino',
        university: 'UniTo',
        occupancy_rate: 'Alto',
        extendedHours: true,
        notes: 'Gestita da EDISU Piemonte. Grande sala studio serale nella residenza Olimpia. Molto frequentata in sessione.',
        tags: ['Aula Studio', 'EDISU', 'WiFi', '🌙 Serale'],
    },
    {
        id: 'unito_edisu_michelangelo',
        nome: 'Sala Studio EDISU Michelangelo',
        edificio: 'Sede Via Michelangelo Buonarroti',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 150,
        orarioApertura: '08:30',
        orarioChiusura: '22:00',
        servizi: ['WiFi Gratuito', 'Prese elettriche', 'Prenotazione via App'],
        latitude: 45.0595,
        longitude: 7.6745,
        indirizzo: 'Via Michelangelo Buonarroti 17/Bis, 10126 Torino',
        university: 'UniTo',
        occupancy_rate: 'Alto',
        notes: 'Gestita da EDISU Piemonte. Accesso tramite app \"Campus Piemonte ID Study Room\". Ambiente moderno e climatizzato.',
        tags: ['Aula Studio', 'EDISU', 'WiFi', '⚡ Prese'],
    },
    {
        id: 'unito_edisu_giuria',
        nome: 'Sala Studio EDISU Pietro Giuria',
        edificio: 'Sede Via Pietro Giuria',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 120,
        orarioApertura: '08:30',
        orarioChiusura: '22:00',
        servizi: ['WiFi Gratuito', 'Prese elettriche', 'Prenotazione via App'],
        latitude: 45.0520,
        longitude: 7.6780,
        indirizzo: 'Via Pietro Giuria 17, 10125 Torino',
        university: 'UniTo',
        occupancy_rate: 'Alto',
        notes: 'Gestita da EDISU Piemonte. Vicinissima alle facoltà scientifiche (Chimica, Fisica). Prenotazione obbligatoria via app.',
        tags: ['Aula Studio', 'EDISU', 'WiFi', '⚡ Prese'],
    },
    {
        id: 'unito_edisu_principe_amedeo',
        nome: 'Sala Studio EDISU Principe Amedeo',
        edificio: 'Sede Via Principe Amedeo',
        piano: 0,
        postiDisponibili: 90,
        postiTotali: 130,
        orarioApertura: '08:30',
        orarioChiusura: '22:00',
        servizi: ['WiFi Gratuito', 'Prese elettriche', 'Climatizzazione', 'Prenotazione via App'],
        latitude: 45.0670,
        longitude: 7.6870,
        indirizzo: 'Via Principe Amedeo 18, 10123 Torino',
        university: 'UniTo',
        occupancy_rate: 'Medio',
        notes: 'Gestita da EDISU Piemonte. Posizione centralissima vicino a Porta Nuova. Prenotazione obbligatoria via app.',
        tags: ['Aula Studio', 'EDISU', 'Centro', 'WiFi', '⚡ Prese'],
    },
    {
        id: 'unito_edisu_murazzi',
        nome: 'Murazzi Student Zone (MSZ)',
        edificio: 'Arcate Murazzi del Po (30-38)',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 160,
        orarioApertura: '08:30',
        orarioChiusura: '23:00',
        servizi: ['WiFi Gratuito', 'Prese elettriche', 'Affaccio sul Po', 'Distributori'],
        latitude: 45.0640,
        longitude: 7.6960,
        indirizzo: 'Murazzi del Po, Arcate 30-38, 10124 Torino',
        university: 'UniTo',
        occupancy_rate: 'Alto',
        extendedHours: true,
        notes: 'Gestita da EDISU Piemonte. Sale studio suggestive sotto le arcate dei Murazzi del Po, affacciate sul fiume. Atmosfera unica. Progetto \"Campus Diffuso Universitario\".',
        tags: ['Aula Studio', 'EDISU', 'WiFi', '🌙 Serale', '🌊 Fiume'],
    },
    // ============================================================
    // TORINO - CAMPUS DIFFUSO (Comune + EDISU)
    // ============================================================
    {
        id: 'unito_comala',
        nome: 'Comala (Campus Diffuso)',
        edificio: 'Spazio Culturale Comala',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 60,
        orarioApertura: '09:00',
        orarioChiusura: '22:00',
        servizi: ['WiFi', 'Prese', 'Caffetteria', 'Spazio Culturale'],
        latitude: 45.0595,
        longitude: 7.6650,
        indirizzo: 'Corso Ferrucci 65/a, 10138 Torino',
        university: 'UniTo',
        occupancy_rate: 'Alto',
        extendedHours: true,
        notes: 'Parte del progetto "Campus Diffuso" della Città di Torino con EDISU. Celebre tra gli studenti del PoliTo come aula studio/hub culturale alternativo. Caffetteria interna.',
        tags: ['Campus Diffuso', 'Comunale', 'WiFi', '🌙 Serale'],
    }
];

export const getDirectionsUniTo = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const isCLE = room.id.includes('cle');
    const isPalazzoNuovo = room.id.includes('pn_graf');
    const isMolinette = room.id.includes('molinette');
    const isGrugliasco = room.id.includes('grugliasco');
    const isOrbassano = room.id.includes('orbassano');
    const isRegionale = room.university?.includes('-') ?? false;

    // CAMPUS LUIGI EINAUDI (CLE)
    if (isCLE) {
        directions.push({
            luogo: 'Stazione Porta Nuova / Stazione Porta Susa',
            descrizione: `**Per il Campus Luigi Einaudi (Lungo Dora Siena):**
1.  **Metro + Bus**: Linea 1 fermata "Dora" (da Porta Nuova 5 min, da Porta Susa 2 min). Poi bus **68** (fermata "Clemente" a 150m) o tram **16** (fermata "Cecchi").
2.  **Tram/Bus diretti**: Tram **16** da Piazza Vittorio; Bus **68** da Porta Nuova (fermata "Carlo Alberto") o Porta Susa.
3.  **Bici/Monopattino**: Pista ciclabile lungo la Dora. Stazioni Bike sharing TO'Bike nelle vicinanze.
4.  **Auto**: Parcheggio interrato del campus (a pagamento, accesso da Corso Regina Margherita). Tariffe agevolate per studenti (abbonamento mensile).
**Tempi**: 15-20 min da Porta Nuova; 10-12 min da Porta Susa.`,
            mezziPubblici: ['Metro Linea 1', 'Tram 16', 'Bus 68', 'Bus 18', 'Bus 50'],
            tempoStimato: '10-20 min',
            note: 'Il campus è ben servito. In sessione i parcheggi si riempiono rapidamente; preferire mezzi pubblici o bici.'
        });
    }
    // PALAZZO NUOVO
    else if (isPalazzoNuovo) {
        directions.push({
            luogo: 'Stazione Porta Nuova / Piazza Vittorio Veneto',
            descrizione: `**Per Palazzo Nuovo (Via Sant'Ottavio 20):**
1.  **Metro**: Linea 1 fermata "Porta Nuova", poi 5 min a piedi verso il centro.
2.  **Tram**: Linee **15** e **16** (fermata "Bertola" o "Vittorio Emanuele II").
3.  **Bus**: Linee **55**, **61**, **68** (fermata "Vittorio Emanuele II").
4.  **A piedi**: Da Piazza Vittorio Veneto, attraversare il ponte e proseguire per Via Po fino a Via Sant'Ottavio (5 min).
**Tempi**: 5-10 min da Porta Nuova; 2 min da Piazza Vittorio.`,
            mezziPubblici: ['Metro Linea 1', 'Tram 15', 'Tram 16', 'Bus 55', 'Bus 61', 'Bus 68'],
            tempoStimato: '5-10 min',
            note: 'Zona centrale a traffico limitato (ZTL). Parcheggio auto non consigliato.'
        });
    }
    // MOLINETTE
    else if (isMolinette) {
        directions.push({
            luogo: 'Stazione Porta Nuova / Piazza Carducci',
            descrizione: `**Per le Molinette (Corso Dogliotti):**
1.  **Metro**: Linea 1 fermata "Carducci-Molinette" (uscita diretta su Corso Dogliotti).
2.  **Bus**: Linee **14**, **18**, **35**, **45**, **64** (fermata "Molinette").
3.  **Tram**: Linea **4** (fermata "Molinette").
**Tempi**: 8 min da Porta Nuova con metro; 15-20 min in bus.`,
            mezziPubblici: ['Metro Linea 1', 'Tram 4', 'Bus 14', 'Bus 18', 'Bus 35', 'Bus 45', 'Bus 64'],
            tempoStimato: '8-20 min',
            note: 'La fermata metro "Carducci-Molinette" è l\'opzione più rapida e comoda.'
        });
    }
    // GRUGLIASCO (SAMEV)
    else if (isGrugliasco) {
        directions.push({
            luogo: 'Stazione Porta Nuova / Stazione Lingotto',
            descrizione: `**Per il Campus SAMEV (Grugliasco):**
1.  **Treno SFM3**: Da Porta Nuova o Lingotto, direzione "Savoia" o "Bardonecchia". Fermata "Grugliasco" (ogni 30 min). Dalla stazione, bus navetta (linea **SAV** ogni 20 min) o 10 min a piedi.
2.  **Bus**: Linea **76** dalla stazione "Fermi" (Metro Linea 1) fino alla fermata "Braccini" (direttamente in campus).
3.  **Auto**: Tangenziale Sud, uscita "Grugliasco". Parcheggio gratuito nel campus.
**Tempi**: 25-30 min con treno+bus; 30-40 min in bus da Fermi.`,
            mezziPubblici: ['Treno SFM3', 'Bus 76', 'Bus SAV (navetta)'],
            tempoStimato: '25-40 min',
            note: 'Mezzo proprio consigliato per flessibilità. Il treno SFM3 è affidabile ma richiede coincidenza.'
        });
    }
    // ORBASSANO (San Luigi)
    else if (isOrbassano) {
        directions.push({
            luogo: 'Stazione Porta Nuova / Stazione Lingotto',
            descrizione: `**Per il Polo San Luigi (Orbassano):**
1.  **Treno SFM3**: Da Porta Nuova o Lingotto, direzione "Pinerolo". Fermata "Orbassano" (ogni 30 min). Dalla stazione, 15 min a piedi o bus navetta.
2.  **Bus**: Linea **43** dalla stazione "Bengasi" (Metro Linea 1) fino all'ospedale (1 ora circa).
3.  **Auto**: Tangenziale Sud, uscita "Orbassano". Parcheggio gratuito nell'area ospedaliera.
**Tempi**: 30-35 min con treno; 50-60 min in bus.`,
            mezziPubblici: ['Treno SFM3', 'Bus 43'],
            tempoStimato: '30-60 min',
            note: 'Auto fortemente consigliata. Verificare orari treni per rientro serale.'
        });
    }
    // AULE STUDIO EDISU PIEMONTE
    else if (room.id.includes('edisu')) {
        const nomeAula = room.nome || 'Aula EDISU';
        directions.push({
            luogo: 'Raggiungere le Aule Studio EDISU',
            descrizione: `**Per ${nomeAula}:**
1.  **Mezzi pubblici (GTT)**: Tutte le sedi EDISU a Torino sono raggiungibili con metro, tram o bus. Verifica la linea più comoda dall'app GTT.
2.  **Bici/Monopattino**: Stazioni di bike sharing TO'Bike sparse in tutta la città.
3.  **Prenotazione**: Per la maggior parte delle sale EDISU è obbligatoria la prenotazione tramite app **"Campus Piemonte ID Study Room"**.
**Nota**: Accesso gratuito per tutti gli studenti universitari regolarmente iscritti.`,
            mezziPubblici: ['Metro Linea 1', 'Tram', 'Bus GTT', 'Bici'],
            tempoStimato: 'Variabile',
            note: 'Prenotazione obbligatoria tramite app Campus Piemonte. Verifica disponibilità in tempo reale.'
        });
    }
    // SEDI REGIONALI (Cuneo, Biella, Alba, Asti, Savigliano, Ivrea)
    else if (isRegionale) {
        // Estrae il nome della sede dall'university field
        const sede = room.university?.split('-')[1]?.trim() || 'regionale';
        let noteSpecifiche = '';
        if (sede.includes('Cuneo')) noteSpecifiche = 'Stazione Cuneo a 10 min a piedi.';
        else if (sede.includes('Biella')) noteSpecifiche = 'Stazione Biella San Paolo a 15 min a piedi o bus urbano.';
        else if (sede.includes('Alba')) noteSpecifiche = 'Stazione Alba a 5 min a piedi.';
        else if (sede.includes('Asti')) noteSpecifiche = 'Stazione Asti a 10 min a piedi.';
        else if (sede.includes('Savigliano')) noteSpecifiche = 'Stazione Savigliano a 8 min a piedi.';
        else if (sede.includes('Ivrea')) noteSpecifiche = 'Stazione Ivrea a 15 min a piedi (bus navetta disponibile).';

        directions.push({
            luogo: 'Stazione ferroviaria locale',
            descrizione: `**Per la sede di ${sede}:**
1.  **Treno**: Tutte le sedi sono raggiungibili con i treni regionali Trenitalia da Torino Porta Nuova/Porta Susa.
2.  **A piedi dalla stazione**: ${noteSpecifiche || 'La sede è solitamente raggiungibile in 5-15 minuti a piedi.'}
3.  **Bus urbani**: Verificare linee locali per eventuali collegamenti rapidi.
**Tempi**: Variabile in base alla tratta (30-90 min da Torino).`,
            mezziPubblici: ['Treni Regionali Trenitalia', 'Bus urbani locali'],
            tempoStimato: '5-15 min a piedi dalla stazione',
            note: 'Costo della vita inferiore a Torino. Verificare orari ultima corsa di rientro.'
        });
    }

    // INFO GENERALI DI CONTESTO
    directions.push({
        luogo: 'Informazioni Generali UniTo',
        descrizione: `**Università degli Studi di Torino (UniTo)**
- **Poli principali**: CLE (Giurisprudenza, Scienze Politiche, Economia), Palazzo Nuovo (Lettere, Filosofia), Molinette/Orbassano (Medicina), Grugliasco (Agraria, Veterinaria).
- **Trasporti urbani**: Rete GTT (metro, tram, bus). Abbonamenti agevolati per studenti (abbonamento annuale a tariffe ridotte).
- **App utili**: "UniTo" (news, servizi), "GTT" (trasporti), "Moovit" (percorsi), "MyUniTo" (portale studenti).
- **Biblioteche**: Portale BiblioUniTo per orari aggiornati, prenotazioni e avvisi di chiusura.
- **Contatti**: Centralino: 011 6706111, sito: www.unito.it`,
        mezziPubblici: [],
        tempoStimato: '-',
        note: 'Ateneo diffuso su tutto il territorio piemontese. Verificare sempre orari e chiusure straordinarie sui siti delle singole biblioteche.'
    });

    return directions;
};
