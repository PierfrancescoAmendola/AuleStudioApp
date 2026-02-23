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
        notes: 'La biblioteca più grande e spettacolare di UniTo (progetto Norman Foster). Ospita oltre 650.000 volumi. Orario ridotto in agosto e durante le festività.'
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
        notes: 'Aula studio con orario prolungato. Accesso consentito anche a studenti PoliTo (con registrazione). Chiusa in agosto.'
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
        notes: 'Cuore dei dipartimenti umanistici. Vicinissima alla Mole Antonelliana. Verificare orari durante le pause didattiche.'
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
        notes: 'La biblioteca osserva orario spezzato: 9:00-12:30 e 14:30-17:00. Verificare eventuali variazioni.'
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
        notes: 'Campus immerso nel verde con spazi studio anche all\'aperto. Presenti animali e serre didattiche.'
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
        notes: 'Biblioteca con apertura solo mattutina (9:00-12:30). Decentrata ma moderna.'
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
        notes: 'Sede nel centro di Cuneo. Verificare orari estivi.'
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
        notes: 'Campus condiviso con altre istituzioni. Ambiente innovativo.'
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
        notes: 'Centro di eccellenza per studi enologici. Spazi studio limitati ma suggestivi.'
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
        notes: 'Polo vivace con più corsi di laurea.'
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
        notes: 'Sede in edificio storico di grande suggestione.'
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
        notes: 'Sede in ex stabilimento Olivetti, recentemente ristrutturata.'
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
