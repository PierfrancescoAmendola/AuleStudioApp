import { StudyRoom, DirectionsFromLocation } from '../../types';

export const unipvRooms: StudyRoom[] = [
    // ============================================================
    // PAVIA - POLO CENTRALE (Umanistico / Giurisprudenza)
    // ============================================================
    {
        id: 'unipv_centrale_cortili',
        nome: 'Aule Studio Cortili (Centrale)',
        edificio: 'Palazzo Centrale (Strada Nuova)',
        piano: 0,
        postiDisponibili: 150,
        postiTotali: 200,
        orarioApertura: '08:00',
        orarioChiusura: '23:00',
        servizi: ['WiFi Eduroam', 'Aperta fino alle 23', 'Aperta nel Weekend'],
        latitude: 45.1865,
        longitude: 9.1560,
        indirizzo: 'Corso Strada Nuova 65, Pavia',
        university: 'Unipv',
        occupancy_rate: 'Alto',
        notes: 'Le aule studio storiche nei cortili (Volta, Caduti, Magnolie). Aperte fino a tardi e spesso anche il weekend (8:00-19:00).'
    },
    {
        id: 'unipv_santommaso_biblio',
        nome: 'Biblioteca Studi Umanistici (San Tommaso)',
        edificio: 'Palazzo San Tommaso',
        piano: 0,
        postiDisponibili: 300,
        postiTotali: 400,
        orarioApertura: '08:30',
        orarioChiusura: '22:00',
        servizi: ['WiFi', 'Biblioteca Grande', 'Prese ovunque'],
        latitude: 45.1880,
        longitude: 9.1575,
        indirizzo: 'Piazza del Lino 2, Pavia',
        university: 'Unipv',
        notes: 'Sede principale di Lettere. Biblioteca moderna e molto frequentata. Orario esteso.'
    },
    {
        id: 'unipv_giurisprudenza',
        nome: 'Biblioteca di Giurisprudenza',
        edificio: 'Palazzo Centrale (Salone Teresiano)',
        piano: 1,
        postiDisponibili: 100,
        postiTotali: 150,
        orarioApertura: '08:30',
        orarioChiusura: '22:00',
        servizi: ['WiFi', 'Storica', 'Silenzio Assoluto'],
        latitude: 45.1865,
        longitude: 9.1560,
        indirizzo: 'Corso Strada Nuova 65, Pavia',
        university: 'Unipv',
        notes: 'Il Salone Teresiano è monumentale. Studiare qui è un\'esperienza.'
    },
    {
        id: 'unipv_sanfelice_eco',
        nome: 'Aule Studio San Felice (Economia)',
        edificio: 'Palazzo San Felice',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 120,
        orarioApertura: '09:00',
        orarioChiusura: '18:30',
        servizi: ['WiFi', 'Giardino', 'Tranquillo'],
        latitude: 45.1840,
        longitude: 9.1520,
        indirizzo: 'Via San Felice 5, Pavia',
        university: 'Unipv',
        notes: 'Sede di Economia. Comprende la suggestiva "Chiesetta" adibita ad aula studio.'
    },

    // ============================================================
    // PAVIA - POLO CRAVINO (Scientifico / Tecnologico)
    // ============================================================
    {
        id: 'unipv_cravino_tamburo',
        nome: 'Biblioteca della Scienza e Tecnica (Tamburo)',
        edificio: 'Polo Cravino - Via Ferrata',
        piano: 0,
        postiDisponibili: 250,
        postiTotali: 300,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Parcheggio', 'Mensa vicina'],
        latitude: 45.2010,
        longitude: 9.1360,
        indirizzo: 'Via Ferrata 1, Pavia',
        university: 'Unipv',
        notes: 'La biblioteca principale del polo scientifico (Ingegneria, Matematica).'
    },
    {
        id: 'unipv_cravino_aule',
        nome: 'Aule Studio Didattica (Melanzana)',
        edificio: 'Edificio Didattica (Cravino)',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 150,
        orarioApertura: '08:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Tavoli liberi', 'Distributori'],
        latitude: 45.2015,
        longitude: 9.1365,
        indirizzo: 'Via Ferrata 5, Pavia',
        university: 'Unipv',
        notes: 'Aule studio libere nell\'edificio della didattica (soprannominate "Melanzane" per il colore).'
    },
    {
        id: 'unipv_fisica_volta',
        nome: 'Biblioteca Dipartimento Fisica "A. Volta"',
        edificio: 'Istituto di Fisica',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Silenzio'],
        latitude: 45.1980,
        longitude: 9.1390,
        indirizzo: 'Via Bassi 6, Pavia',
        university: 'Unipv',
    },

    // ============================================================
    // CREMONA - MUSICOLOGIA (Sede Distaccata)
    // ============================================================
    {
        id: 'unipv_cremona_musicologia',
        nome: 'Biblioteca di Musicologia',
        edificio: 'Palazzo Raimondi',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 70,
        orarioApertura: '08:30',
        orarioChiusura: '17:00',
        servizi: ['WiFi', 'Pianoforti', 'Palazzo Storico'],
        latitude: 45.1370,
        longitude: 10.0210,
        indirizzo: 'Corso Garibaldi 178, Cremona',
        university: 'Unipv',
        notes: 'Sede prestigiosa unica in Italia. Venerdì chiude alle 12:30.'
    },
    {
        id: 'unipv_cremona_attanasi',
        nome: 'Aula Informatica "F. Attanasi"',
        edificio: 'Palazzo Raimondi',
        piano: 0,
        postiDisponibili: 20,
        postiTotali: 30,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['PC', 'Software Musicali'],
        latitude: 45.1370,
        longitude: 10.0210,
        indirizzo: 'Corso Garibaldi 178, Cremona',
        university: 'Unipv',
    },

    // ============================================================
    // PAVIA - POLO CENTRALE (Spazi Aggiuntivi)
    // ============================================================
    {
        id: 'unipv_aula_studentesse',
        nome: 'Aula Studentesse (ex)',
        edificio: 'Palazzo Centrale - Cortile Volta',
        piano: 0,
        postiDisponibili: 20,
        postiTotali: 22,
        orarioApertura: '08:00',
        orarioChiusura: '23:00',
        servizi: ['WiFi', 'Piccola', 'Aperta Sabato'],
        latitude: 45.1865,
        longitude: 9.1560,
        indirizzo: 'Corso Strada Nuova 65, Pavia',
        university: 'Unipv',
        notes: 'Aula studio piccola e raccolta nel Cortile Volta. Aperta anche sabato 8-19.'
    },
    {
        id: 'unipv_aula_scpol',
        nome: 'Aula Scienze Politiche',
        edificio: 'Palazzo Centrale',
        piano: 0,
        postiDisponibili: 22,
        postiTotali: 26,
        orarioApertura: '08:00',
        orarioChiusura: '23:00',
        servizi: ['WiFi', 'Orario Esteso'],
        latitude: 45.1865,
        longitude: 9.1560,
        indirizzo: 'Corso Strada Nuova 65, Pavia',
        university: 'Unipv',
        notes: 'Aula studio gestita dal Dipartimento di Scienze Politiche. Orari lunghi.'
    },
    {
        id: 'unipv_biblio_scpol',
        nome: 'Biblioteca Scienze Politiche e Sociali',
        edificio: 'Palazzo Centrale',
        piano: 1,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Consultazione', 'Silenzio'],
        latitude: 45.1865,
        longitude: 9.1560,
        indirizzo: 'Corso Strada Nuova 65, Pavia',
        university: 'Unipv',
        notes: 'Biblioteca dipartimentale con orario esteso fino alle 19.'
    },
    {
        id: 'unipv_sala_diritto_privato',
        nome: 'Sala Studio "Diritto Privato"',
        edificio: 'Palazzo Centrale - Cortile Caduti',
        piano: 1,
        postiDisponibili: 70,
        postiTotali: 90,
        orarioApertura: '08:30',
        orarioChiusura: '22:00',
        servizi: ['WiFi', 'Giurisprudenza', 'Grande'],
        latitude: 45.1865,
        longitude: 9.1560,
        indirizzo: 'Corso Strada Nuova 65, Pavia',
        university: 'Unipv',
        notes: '90 posti! Una delle sale più grandi. Nel Cortile dei Caduti.'
    },
    {
        id: 'unipv_chiesetta_sanfelice',
        nome: 'Chiesetta di San Felice (Aula Studio)',
        edificio: 'Palazzo San Felice',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 45,
        orarioApertura: '09:00',
        orarioChiusura: '18:30',
        servizi: ['WiFi', 'Suggestiva', 'Ex Chiesa'],
        latitude: 45.1840,
        longitude: 9.1520,
        indirizzo: 'Via San Felice 5, Pavia',
        university: 'Unipv',
        occupancy_rate: 'Medio',
        notes: 'Una vera chiesetta sconsacrata trasformata in aula studio! Ambiente unico e silenzioso.'
    },

    // ============================================================
    // PAVIA - POLO CRAVINO (Spazi Aggiuntivi)
    // ============================================================
    {
        id: 'unipv_melanzana_primo',
        nome: 'Aula Melanzana (Primo Piano)',
        edificio: 'Edificio Didattica (Cravino)',
        piano: 1,
        postiDisponibili: 20,
        postiTotali: 22,
        orarioApertura: '08:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Silenziosa'],
        latitude: 45.2015,
        longitude: 9.1365,
        indirizzo: 'Via Ferrata 5, Pavia',
        university: 'Unipv',
        notes: 'Seconda aula "Melanzana" al primo piano. Meno affollata di quella al PT.'
    },
    {
        id: 'unipv_golgi_spallanzani',
        nome: 'Aula Golgi Spallanzani',
        edificio: 'Edificio Didattica (Cravino)',
        piano: 0,
        postiDisponibili: 12,
        postiTotali: 15,
        orarioApertura: '08:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Piccola', 'Tranquilla'],
        latitude: 45.2015,
        longitude: 9.1365,
        indirizzo: 'Via Ferrata 5, Pavia',
        university: 'Unipv',
        notes: 'Piccola aula studio ideale per chi cerca massima concentrazione.'
    },
    {
        id: 'unipv_biblio_scienze',
        nome: 'Biblioteca delle Scienze',
        edificio: 'Polo Cravino',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Scienze Naturali', 'Consultazione'],
        latitude: 45.2005,
        longitude: 9.1355,
        indirizzo: 'Via Taramelli 12, Pavia',
        university: 'Unipv',
        notes: 'Biblioteca per Biologia e Scienze Naturali. Prenotazione Affluences consigliata.'
    },

    // ============================================================
    // PAVIA - CAMPUS DELLA SALUTE (Medicina - San Matteo)
    // ============================================================
    {
        id: 'unipv_campus_salute_biblio',
        nome: 'Biblioteca Area Medica (Campus della Salute)',
        edificio: 'Policlinico San Matteo',
        piano: 0,
        postiDisponibili: 120,
        postiTotali: 150,
        orarioApertura: '08:30',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Medicina', 'Orario Lungo', 'Sabato Aperta'],
        latitude: 45.1920,
        longitude: 9.1420,
        indirizzo: 'Viale Golgi 19, Pavia',
        university: 'Unipv',
        occupancy_rate: 'Alto',
        notes: 'La biblioteca principale per Medicina. Aperta fino alle 20, sabato 10:30-19:00!'
    },
    {
        id: 'unipv_campus_salute_aule',
        nome: 'Aule Studio Campus della Salute',
        edificio: 'Campus della Salute',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 130,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Moderne', 'Mensa vicina'],
        latitude: 45.1925,
        longitude: 9.1425,
        indirizzo: 'Viale Golgi 19, Pavia',
        university: 'Unipv',
        notes: 'Aule studio dedicate nel nuovo Campus della Salute. Sabato 8-18:30.'
    },
    {
        id: 'unipv_fondazione_mondino',
        nome: 'Spazi Studio Fondazione Mondino',
        edificio: 'IRCCS Mondino',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 40,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Neuroscienze'],
        latitude: 45.1970,
        longitude: 9.1380,
        indirizzo: 'Via Mondino 2, Pavia',
        university: 'Unipv',
        notes: 'Per studenti di Neuroscienze e specializzandi. Ambiente ospedaliero.'
    }
];

export const getDirectionsUnipv = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const isCravino = room.indirizzo.includes('Ferrata') || room.indirizzo.includes('Bassi') || room.indirizzo.includes('Taramelli');
    const isCentro = room.indirizzo.includes('Strada Nuova') || room.indirizzo.includes('San Felice') || room.indirizzo.includes('Lino');
    const isCremona = room.indirizzo.includes('Cremona') || room.indirizzo.includes('Garibaldi');
    // Aggiunta Campus della Salute
    const isCampusSalute = room.indirizzo.includes('Golgi') || room.indirizzo.includes('Mondino');

    // PAVIA CENTRO (Sede Storica)
    if (isCentro) {
        directions.push({
            luogo: 'Stazione FS Pavia',
            descrizione: `Per Sede Centrale / San Tommaso / San Felice:
1. Uscita dalla stazione, vai dritto su Viale Vittorio Emanuele II.
2. Alla statua della Minerva, prosegui su Corso Cavour.
3. All'incrocio con Strada Nuova:
   - **Sinistra**: Palazzo Centrale (200m)
   - **Dritto**: Piazza del Lino / San Tommaso
   - **Destra**: San Felice (Via San Felice)

**Da Milano:**
- Treno Regionale da Milano Centrale/Rogoredo (35-40 min).`,
            mezziPubblici: ['A piedi (15 min)', 'Bus 3 (fermata Cavour)'],
            tempoStimato: '15 min a piedi dalla stazione',
            note: 'Pavia è piccola e ciclabile. La bici è il mezzo preferito dagli studenti!'
        });
    }

    // PAVIA CRAVINO (Polo Scientifico)
    else if (isCravino) {
        directions.push({
            luogo: 'Stazione FS Pavia',
            descrizione: `Per Polo Cravino (Ingegneria/Scienze):
1. Dalla stazione, prendi il **Bus Linea 3** (direzione Colombarone/Maugeri).
2. Scendi a:
   - **Ferrata**: per Ingegneria/Matematica/Biblioteca Tamburo
   - **Taramelli/Bassi**: per Fisica/Biologia
3. Alternativa: **Linea 7**.

**Da Milano:**
- Treno Regionale (35-40 min) + Bus 3 (15 min).`,
            mezziPubblici: ['Bus Linea 3', 'Bus Linea 7'],
            tempoStimato: '15-20 min dalla stazione',
            note: 'Il Cravino è in periferia ovest. Parcheggio gratuito se vieni in auto.'
        });
    }

    // CAMPUS DELLA SALUTE (Medicina - San Matteo/Mondino)
    else if (isCampusSalute) {
        directions.push({
            luogo: 'Stazione FS Pavia',
            descrizione: `Per Campus della Salute / Policlinico San Matteo:
1. Dalla stazione, prendi il **Bus Linea 3** (direzione Policlinico/Mondino).
2. Scendi a:
   - **Viale Golgi**: per Policlinico San Matteo e Biblioteca Medicina
   - **Mondino**: per Fondazione Mondino (Neuroscienze)
3. Alternativa: a piedi sono circa 25-30 min.

**Da Milano:**
- Treno Regionale (35-40 min) + Bus 3 (10 min).`,
            mezziPubblici: ['Bus Linea 3', 'A piedi (25 min)'],
            tempoStimato: '10-15 min dalla stazione',
            note: 'La biblioteca di Medicina è aperta fino alle 20, anche sabato!'
        });
    }

    // CREMONA (Musicologia)
    else if (isCremona) {
        directions.push({
            luogo: 'Stazione FS Cremona',
            descrizione: `Per Palazzo Raimondi (Musicologia):
1. Dalla stazione, cammina verso il centro (20 min).
2. Percorri Via Palestro → Corso Garibaldi.
3. Palazzo Raimondi è un edificio storico al civico 178.

**Da Milano:**
- Treno Regionale da Milano Centrale (1h 10 min).
**Da Pavia:**
- Treno da Pavia (cambio a Codogno, 1h circa).`,
            mezziPubblici: ['A piedi', 'Bus Linea D/L'],
            tempoStimato: '20 min a piedi dalla stazione',
            note: 'Sede prestigiosa e unica in Italia per lo studio della Musicologia.'
        });
    }

    return directions;
};
