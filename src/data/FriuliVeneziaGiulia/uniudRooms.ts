import { StudyRoom, DirectionsFromLocation } from '../../types';

export const uniudRooms: StudyRoom[] = [
    // ============================================================
    // UDINE - POLO DEI RIZZI (Scientifico/Tecnologico)
    // 🏗️ Campus Americano Anni '70 - Cemento e Spazi Enormi
    // ============================================================
    {
        id: 'uniud_rizzi_bst',
        nome: 'Biblioteca Scientifica e Tecnologica (BST)',
        edificio: 'Polo dei Rizzi',
        piano: 0,
        postiDisponibili: 450,
        postiTotali: 500,
        orarioApertura: '08:30',
        orarioChiusura: '19:45',
        servizi: ['WiFi Eduroam', 'Box Insonorizzati', 'Sale Gruppo', 'Parcheggio Ampio', '❄️ Inverno Freddo'],
        latitude: 46.0818,
        longitude: 13.2115,
        indirizzo: 'Via delle Scienze 206, Udine',
        university: 'UniUd',
        occupancy_rate: 'Molto Alto',
        notes: '⭐ Biblioteca principale scientifica. Moderna e capiente. Ideale per Ingegneria, Agraria, Matematica. Campus "americano" con parcheggio enorme e mensa. INVERNO: zona ventosa e fredda!',
        tags: ['Biblioteca', 'Campus', 'WiFi', '🅿️ Parcheggio', '👥 Gruppi OK'],
    },
    {
        id: 'uniud_rizzi_nuova',
        nome: 'Nuova Biblioteca Rizzi (Via Schiavi)',
        edificio: 'Plesso Nuova Biblioteca',
        piano: 0,
        postiDisponibili: 200,
        postiTotali: 250,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['Luce Naturale', 'Sale Studio', 'Tecnologica'],
        latitude: 46.0820,
        longitude: 13.2100,
        indirizzo: 'Via Fausto Schiavi 44, Udine',
        university: 'UniUd',
        notes: 'Estensione moderna BST. Spazi aggiuntivi per studio individuale. Luminosa con molta luce naturale.',
        tags: ['Biblioteca'],
    },
    {
        id: 'uniud_rizzi_comuni',
        nome: 'Spazi Comuni e Aule Studio "Il Fungo"',
        edificio: 'Polo dei Rizzi',
        piano: 1,
        postiDisponibili: 250,
        postiTotali: 300,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Tavoli Gruppo', 'Distributori', 'Socialità', 'Mensa Vicina'],
        latitude: 46.0815,
        longitude: 13.2120,
        indirizzo: 'Via delle Scienze 206, Udine',
        university: 'UniUd',
        notes: 'Aree comuni vivaci per lavori gruppo. Non silenziosissime. Ideale per progetti collaborativi.',
        tags: ['Aula Studio', 'Campus', '☕ Ristoro', '👥 Gruppi OK'],
    },
    // ============================================================
    // UDINE - POLO MEDICINA (Kolbe / Ospedale)
    // ============================================================
    {
        id: 'uniud_medicina_kolbe',
        nome: 'Polo Medicina Kolbe - Sale Studio',
        edificio: 'Piazzale Kolbe',
        piano: 0,
        postiDisponibili: 150,
        postiTotali: 180,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['Silenzio', 'Vicino Mensa/Ospedale', 'WiFi Eduroam'],
        latitude: 46.0748,
        longitude: 13.2252,
        indirizzo: 'Piazzale Santa Maria della Misericordia 15, Udine',
        university: 'UniUd',
        notes: 'Polo principale Medicina/Professioni Sanitarie. Vicino ospedale Santa Maria della Misericordia. A 10 min dal Rizzi.',
        tags: ['Aula Studio', 'Campus', 'Medicina', 'WiFi', '☕ Ristoro', '🔇 Silenzio'],
    },
    // ============================================================
    // UDINE CENTRO - UMANISTICA / FORMAZIONE
    // 🎨 Palazzi Storici Mitteleuropei - Atmosfera Elegante
    // ============================================================
    {
        id: 'uniud_florio',
        nome: 'Biblioteca Umanistica "Florio"',
        edificio: 'Palazzo Florio',
        piano: 1,
        postiDisponibili: 160,
        postiTotali: 160,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['Affreschi Storici', 'Giardino', 'Silenzio', '🏛️ Palazzo Storico', '☕ Aperitivo Vicino'],
        latitude: 46.0638,
        longitude: 13.2305,
        indirizzo: 'Via Palladio 8, Udine',
        university: 'UniUd',
        notes: '🎨⭐ Palazzo storico elegante con affreschi. Per Lettere, Beni Culturali. Atmosfera "Mitteleuropea" con giardino. INSIDER TIP: A 19:00 chiude e sei già in centro per il tajut (aperitivo friulano)!',
        tags: ['Biblioteca', '🔇 Silenzio'],
    },
    {
        id: 'uniud_formazione_margreth',
        nome: 'Biblioteca Scienze Formazione',
        edificio: 'Via Margreth',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['Pedagogia', 'Educazione', '🏛️ Centro'],
        latitude: 46.0700,
        longitude: 13.2300,
        indirizzo: 'Via Margreth 3, Udine',
        university: 'UniUd',
        notes: 'Parte umanistica/formazione. Zona centro tranquilla.',
        tags: ['Biblioteca'],
    },
    // ============================================================
    // UDINE CENTRO - ECONOMIA / GIURISPRUDENZA
    // ============================================================
    {
        id: 'uniud_economia_giuridica',
        nome: 'Biblioteca Economica e Giuridica',
        edificio: 'Via Tomadini',
        piano: 0,
        postiDisponibili: 200,
        postiTotali: 220,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['Codici', 'Economia', 'Giurisprudenza', '🏛️ Centro'],
        latitude: 46.0695,
        longitude: 13.2350,
        indirizzo: 'Via Tomadini 30/A, Udine',
        university: 'UniUd',
        notes: 'Unificata Economia/Giurisprudenza. Centrale e ben servita. Zona residenziale tranquilla.',
        tags: ['Biblioteca'],
    },
    {
        id: 'uniud_antonini',
        nome: 'Palazzo Antonini - Spazi Lingue',
        edificio: 'Palazzo Antonini',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 120,
        orarioApertura: '08:00',
        orarioChiusura: '19:00',
        servizi: ['Lab Linguistici', 'Cortile', '🏛️ Palazzo Storico', '❄️ Cozy Inverno'],
        latitude: 46.0645,
        longitude: 13.2325,
        indirizzo: 'Via Petracco 8, Udine',
        university: 'UniUd',
        notes: '🏛️ Sede Lingue con spazi studio. Palazzo storico accogliente e caldo d\'inverno. Atmosfera "cozy" rispetto al cemento dei Rizzi.',
        tags: ['Aula Studio'],
    },
    // ============================================================
    // UDINE - BIBLIOTECA CIVICA JOPPI
    // ☕ Location Strategica per Studio + Tajut
    // ============================================================
    {
        id: 'ud_joppi',
        nome: 'Biblioteca Civica "Vincenzo Joppi"',
        edificio: 'Palazzo Bartolini',
        piano: 1,
        postiDisponibili: 200,
        postiTotali: 250,
        orarioApertura: '14:00',
        orarioChiusura: '19:00',
        servizi: ['Sala Corgnali', 'Centro Storico', '☕ Aperitivo a 0km'],
        latitude: 46.0642,
        longitude: 13.2348,
        indirizzo: 'Riva Bartolini 5, Udine',
        university: 'UniUd',
        occupancy_rate: 'Altissimo',
        notes: '☕⭐ Non UniUd ma usatissima. Sala Corgnali storica bellissima. INSIDER TIP: Location perfetta per Studio + Vita Sociale! Alle 19:00 chiude e sei GIÀ in Piazza San Giacomo o Via Mercatovecchio per il TAJUT (aperitivo friulano). Studio + Socialità a km 0!',
        tags: ['Biblioteca', 'Centro'],
    },
    // ============================================================
    // SEDI DISTACCATE
    // ============================================================
    {
        id: 'uniud_pordenone',
        nome: 'Polo Pordenone (CEGO)',
        edificio: 'Via Prasecco',
        piano: 0,
        postiDisponibili: 150,
        postiTotali: 180,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Lab', 'Parcheggio Ampio', 'Ingegneria Gestionale'],
        latitude: 45.9565,
        longitude: 12.6605,
        indirizzo: 'Via Prasecco 3/A, Pordenone',
        university: 'UniUd',
        notes: 'Polo Ingegneria Gestionale UniUd. Zona industriale con parcheggi ampi.',
        tags: ['Aula Studio', 'Campus', '🅿️ Parcheggio'],
    },
    {
        id: 'uniud_gorizia',
        nome: 'Polo Gorizia (Santa Chiara)',
        edificio: 'Via Santa Chiara',
        piano: 0,
        postiDisponibili: 120,
        postiTotali: 150,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['Relazioni Pubbliche', 'Giardino', '🌍 Confine Slovenia'],
        latitude: 45.9445,
        longitude: 13.6208,
        indirizzo: 'Via Santa Chiara 1, Gorizia',
        university: 'UniUd',
        notes: '🌍 Sede Relazioni Pubbliche/DAMS. Stesso edificio di UniTS! Confine Slovenia a 10 min per spesa/pranzo economico Nova Gorica.',
        tags: ['Aula Studio', 'Campus'],
    },
    {
        id: 'uniud_gemona',
        nome: 'Sede Gemona (Scienze Motorie)',
        edificio: 'Piazzale Castello',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 60,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Palestre', 'Impianti Sportivi', '🏃 Sport'],
        latitude: 46.2755,
        longitude: 13.1385,
        indirizzo: 'Piazzale del Castello, Gemona del Friuli',
        university: 'UniUd',
        notes: '🏃 Polo Scienze Motorie. Non solo libri ma pratica sportiva! Zona alta storica ricostruita post-terremoto. Palestre convenzionate vicine.',
        tags: ['Aula Studio'],
    },
    // ============================================================
    // NUOVI SPAZI (CAMPUS RENATI)
    // ============================================================
    {
        id: 'uniud_campus_renati',
        nome: 'Aule Studio Campus Renati',
        edificio: 'Campus Renati (Fondazione)',
        piano: 0,
        postiDisponibili: 250,
        postiTotali: 400,
        orarioApertura: '08:00',
        orarioChiusura: '22:00',
        servizi: ['WiFi Eduroam', 'Prese', 'Clima', '630mq'],
        latitude: 46.0615,
        longitude: 13.2290,
        indirizzo: 'Via Tomadini 13, 33100 Udine',
        university: 'UniUd',
        occupancy_rate: 'Alto',
        extendedHours: true,
        notes: 'Nuova convenzione con Fondazione Renati. 400 posti su 630mq. Orario Lun-Ven 08:00-11:00 e 15:00-22:00. Grandissimo spazio modernissimo.',
        tags: ['Aula Studio', 'Top Space', 'WiFi', '🌙 Serale'],
    },
];

export const getDirectionsUniUd = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const isRizzi = room.indirizzo.includes('Scienze') || room.indirizzo.includes('Rizzi') || room.indirizzo.includes('Schiavi');
    const isCentroUmanistica = room.indirizzo.includes('Palladio') || room.indirizzo.includes('Margreth') || room.indirizzo.includes('Petracco');
    const isCentroEconomiaGiuridica = room.indirizzo.includes('Tomadini') || room.indirizzo.includes('Treppo');
    const isMedicinaKolbe = room.indirizzo.includes('Kolbe') || room.indirizzo.includes('Misericordia');
    const isJoppi = room.indirizzo.includes('Bartolini');
    const isPordenone = room.indirizzo.includes('Pordenone');
    const isGorizia = room.indirizzo.includes('Gorizia') || room.indirizzo.includes('Chiara');
    const isGemona = room.indirizzo.includes('Gemona');

    // POLO DEI RIZZI (nord-ovest, vicino stadio) - LA LINEA 10 È SACRA!
    if (isRizzi) {
        directions.push({
            luogo: 'Stazione FS Udine / Centro',
            descrizione: `🚌 **LINEA 10: LA SACRA CIRCOLARE DEI RIZZI**

Per Polo Rizzi (Via delle Scienze / Schiavi):

1. **🚌 BUS TPL FVG dalla Stazione** (Piazzale D'Annunzio): ⭐
   - Linea **9** o **10** (circolare universitaria) 
   - Fermata: "Rizzi Università" o capolinea
   - Frequenza: ogni 15-20 min
   - **LA LINEA 10 È SACRA** per ogni studente dei Rizzi!
   
2. **🚗 In auto**: Parcheggio gratuito ENORME sul posto (accesso Via delle Scienze) - migliore di Udine!

3. **🚴 In bici**: 20 min nord-ovest (piste ciclabili Via Pozzuolo)

4. **🚶 A piedi dalla stazione**: 40 min (NON consigliato - troppo lontano)

⚠️ **INVERNO FRIULANO**: 
- Polo dei Rizzi è uno spazio aperto VENTOSO e FREDDO d'inverno
- Piove spesso: porta ombrello e giacca impermeabile
- Bus riscaldati sono salvezza!

**CAMPUS COMPLETO**: Mensa grande, bar, distributori. Tutto in un'area compatta. Atmosfera "campus americano anni '70" - cemento ma funzionale!`,
            mezziPubblici: ['🚌 Bus TPL FVG 9, 10 (FONDAMENTALE)', 'Bici MiMuovo'],
            tempoStimato: '15-25 min bus/auto',
            note: 'Zona periferica nord-ovest. Parcheggio facile vs Centro impossibile. Inverno freddo!'
        });
    }
    // CENTRO UMANISTICA/FORMAZIONE (Palladio, Margreth, Antonini) - MITTELEUROPA
    else if (isCentroUmanistica) {
        directions.push({
            luogo: 'Stazione FS Udine',
            descrizione: `🎨 **CENTRO STORICO: PALAZZI MITTELEUROPEI vs CEMENTO RIZZI**

Per area umanistica centro (Palazzo Florio via Palladio, Via Margreth, Antonini via Petracco):

1. **🚶 A piedi dalla Stazione**: 20-30 min nord (Viale Europa → Via Aquileia → centro) ⭐
   - Udine è PIATTA: camminare è facile!
   
2. **🚌 Bus TPL FVG**: Linea 1, 3, 4, C (fermata "Via Palladio" o "Centro")

3. **🚴 In bici**: 15 min (IDEALE per Udine piatta)

🎨 **ATMOSFERA UNICA**:
- Palazzi storici con affreschi e parquet
- **Cozy e accoglienti d'inverno** (vs freddo Rizzi)
- Atmosfera "Mitteleuropea" elegante
- Bar per aperitivo a 5 min

⚠️ **PARCHEGGIO**: ZTL parziale centro - auto NON consigliata. Usa bici o bus!

☕ **TAJUT (APERITIVO FRIULANO)**: 
- Centro perfetto per vita sociale
- Chiusura biblioteche 19:00 = già pronto per aperitivo!`,
            mezziPubblici: ['🚶 A piedi (migliore)', 'Bus TPL FVG 1, 3, 4', 'Bici'],
            tempoStimato: '20-30 min a piedi',
            note: 'Udine piatta, bici ideale. Palazzi storici accoglienti. Zero parcheggio.'
        });
    }
    // ECONOMIA/GIURIDICA (Tomadini)
    else if (isCentroEconomiaGiuridica) {
        directions.push({
            luogo: 'Stazione / Centro',
            descrizione: `📚 **VIA TOMADINI** (Economia/Giuridica)

Per Via Tomadini:

1. **🚌 Bus TPL FVG**: Linea 3 o 4 dalla stazione → fermata "Tomadini"
2. **🚶 A piedi**: 25 min nord-est
3. **🚴 In bici**: 15 min

**ZONA**: Vicino centro, residenziale e tranquilla. Buon compromesso tra Rizzi (isolato) e centro storico (turistico).`,
            mezziPubblici: ['Bus TPL FVG 3, 4', 'Bici'],
            tempoStimato: '15-25 min',
            note: 'Zona residenziale centro. Tranquilla.'
        });
    }
    // MEDICINA KOLBE
    else if (isMedicinaKolbe) {
        directions.push({
            luogo: 'Stazione / Rizzi',
            descrizione: `🏥 **PIAZZALE KOLBE** (Medicina)

Per Piazzale Kolbe (Medicina/Professioni Sanitarie):

1. **🚌 Bus TPL FVG**: Linea 9 o 10 dalla stazione → fermata "Kolbe" o "Ospedale"
2. **Dal Rizzi**: 10 min a piedi o bus (stessa zona nord-ovest)
3. **🚗 In auto**: Parcheggio ospedale disponibile

**LOCATION**: Vicino ospedale Santa Maria della Misericordia. Stesso quadrante del Rizzi (nord-ovest).`,
            mezziPubblici: ['Bus TPL FVG 9, 10'],
            tempoStimato: '20 min dalla stazione',
            note: 'Zona nord-ovest vicino Rizzi. Ospedale.'
        });
    }
    // JOPPI CIVICA - IL SEGRETO DEL TAJUT
    else if (isJoppi) {
        directions.push({
            luogo: 'Stazione / Centro',
            descrizione: `☕ **JOPPI: IL SEGRETO DELLO STUDIO + TAJUT** ⭐

Per Biblioteca Joppi (Riva Bartolini):

1. **🚶 A piedi**: 20 min centro
2. **🚌 Bus**: Linea 1 o 3

☕ **LOCATION STRATEGICA GENIALE**:
- Sala Corgnali storica BELLISSIMA
- Chiude alle 19:00
- A quel punto sei GIÀ in centro!
- Piazza San Giacomo e Via Mercatovecchio (TAJUT!) a 2 min a piedi

**INSIDER TIP**: La Joppi è il segreto per combinare studio serio + vita sociale friulana. Studio pomeriggio → Aperitivo sera a km 0. Non devi tornare a casa o spostarti!

**IL TAJUT**: Tradizione friulana del "bicchierino di vino" in osteria. Udine è famosa per questo rito sociale quotidiano.`,
            mezziPubblici: ['🚶 A piedi', 'Bus TPL FVG 1, 3'],
            tempoStimato: '20 min',
            note: '☕ Centro storico. Perfetta per Studio + Socialità. Sala Corgnali magnifica!'
        });
    }
    // PORDENONE DISTACCATA
    else if (isPordenone) {
        directions.push({
            luogo: 'Udine / Stazione Pordenone',
            descrizione: `🏭 **POLO PORDENONE (CEGO)** - Ingegneria Gestionale

Per Pordenone Via Prasecco:

1. **🚆 Treno Regionale**: 40 min Udine-Pordenone
2. **🚌 Dalla Stazione PN**: Bus ATAP o taxi (10 min Via Prasecco)
3. **🚗 In auto**: Parcheggi ampi in zona industriale

**SEDE**: Condivisa con UniTS! Stesso edificio polo Ingegneria.`,
            mezziPubblici: ['Treno Regionale', 'Bus ATAP'],
            tempoStimato: '40 min treno + 10 min',
            note: 'Zona industriale. Parcheggi ampi.'
        });
    }
    // GORIZIA DISTACCATA
    else if (isGorizia) {
        directions.push({
            luogo: 'Udine / Stazione Gorizia',
            descrizione: `🌍 **GORIZIA SANTA CHIARA** - Relazioni Pubbliche/DAMS

Per Gorizia Santa Chiara:

1. **🚆 Treno Regionale**: 30 min Udine-Gorizia
2. **🚌 Dalla Stazione Gorizia**: Bus APT 1 o a piedi 20 min lungo Corso Italia
3. **🚗 In auto**: A4 (40 min da Udine)

🌍 **INSIDER TIP - CONFINE SLOVENIA**:
- **Nova Gorica** (Slovenia) a **10 min a piedi**!
- Stesso edificio di UniTS (condiviso)
- Spesa/pranzo economico oltre confine
- Porta documento identità

**SEDE**: Prestigiosa ex convento con giardino.`,
            mezziPubblici: ['Treno Regionale', 'Bus APT Gorizia 1'],
            tempoStimato: '30 min treno + 15-20 min',
            note: '🌍 Centro Gorizia. Confine Slovenia vicino!'
        });
    }
    // GEMONA SCIENZE MOTORIE
    else if (isGemona) {
        directions.push({
            luogo: 'Udine',
            descrizione: `🏃 **GEMONA SCIENZE MOTORIE** - Polo Sportivo

Per Gemona Piazzale del Castello:

1. **🚆 Treno Regionale**: 30 min Udine-Gemona
2. **Dalla Stazione Gemona**: Salita a piedi/bus navetta verso Castello (15-20 min)

🏃 **POLO UNICO**:
- NON solo studio teorico ma **pratica sportiva**!
- Palestre e impianti sportivi convenzionati
- Zona alta storica ricostruita post-terremoto 1976
- Atmosfera diversa dalle altre sedi UniUd

**NOTE**: Se cerchi info, probabilmente ti servono anche dettagli su palestre/impianti più che biblioteche silenziose!`,
            mezziPubblici: ['Treno Regionale', 'Bus Navetta'],
            tempoStimato: '30 min treno + 20 min',
            note: '🏃 Post-terremoto ricostruita. Polo sportivo pratico.'
        });
    }

    // Info Generali UniUd - LA DICOTOMIA
    directions.push({
        luogo: '🎯 Info Generali UniUd',
        descrizione: `**LA DICOTOMIA RIZZI vs CENTRO**: 
Udine è quasi DUE città diverse:

🏗️ **RIZZI**: 
- Cemento, spazi enormi, parcheggio facile
- Mensa grande, isolamento, campus "americano anni '70"
- Freddo/ventoso d'inverno
- **Linea 10 sacra** per studenti

🎨 **CENTRO**: 
- Palazzi storici, parquet, affreschi
- Bar aperitivo, ZERO parcheggio
- Atmosfera "Mitteleuropea" accogliente
- **Tajut** (aperitivo) dopo studio

**PRENOTAZIONI**: App/portale UniUd per posti biblioteca
**BUS**: TPL FVG app per orari in tempo reale
**BICI**: Udine PIATTA - ideale per bici! Sistema MiMuovo

☕ **CULTURA LOCALE**: Il "TAJUT" (bicchierino di vino in osteria) è rito sociale quotidiano. La Joppi chiude alle 19:00 e sei già in centro per l'aperitivo!`,
        mezziPubblici: ['TPL FVG Bus', 'Bici MiMuovo', 'Treno Regionale'],
        tempoStimato: 'Max 30 min tra poli Udine',
        note: 'Università diffusa ma accessibile. Rizzi isolato, Centro sociale!'
    });

    return directions;
};
