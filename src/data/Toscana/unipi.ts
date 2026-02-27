import { StudyRoom, DirectionsFromLocation } from '../../types';

export const unipiRooms: StudyRoom[] = [
    // ============================================================
    // PISA CENTRO STORICO (Giurisprudenza, Lettere, Lingue)
    // ============================================================
    {
        id: 'unipi_sapienza_biblio',
        nome: 'Biblioteca Storica Palazzo della Sapienza',
        edificio: 'Palazzo della Sapienza',
        piano: 1,
        postiDisponibili: 45,
        postiTotali: 150,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['Fondi Storici Giuridici', 'Soffitti Affrescati', 'Silenzio Assoluto'],
        latitude: 43.7165,
        longitude: 10.3980,
        indirizzo: 'Via Curtatone e Montanara 15, Pisa',
        university: 'UniPi',
        tags: ['Giurisprudenza', 'Centro Storico', '🏛️ Sapienza', '🔇 Silenzio'],
        notes: 'Il cuore storico di UniPi, a due passi da Lungarno Pacinotti. Atmosfera accademica solenne, ideale per studiare Diritto.'
    },
    {
        id: 'unipi_carmignani_aule',
        nome: 'Aule Studio Polo Carmignani',
        edificio: 'Polo Carmignani',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 200,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Lavoro di Gruppo', 'Macchinette', 'Ampia Capienza'],
        latitude: 43.7192,
        longitude: 10.4005,
        indirizzo: 'Piazza dei Cavalieri, Pisa',
        university: 'UniPi',
        tags: ['Umanistica', 'Centro Storico', '🗣️ Lavoro di Gruppo', '☕ Pausa'],
        notes: 'Situato nella magnifica Piazza dei Cavalieri (vicino alla Normale). Molto frequentato, perfetto per fare gruppo.'
    },
    {
        id: 'unipi_matteucci_biblio',
        nome: 'Biblioteca di Lettere (Polo Matteucci)',
        edificio: 'Palazzo Matteucci',
        piano: 1,
        postiDisponibili: 30,
        postiTotali: 90,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Emeroteca', 'Dizionari', 'Prese PC'],
        latitude: 43.7175,
        longitude: 10.4030,
        indirizzo: 'Piazza Torricelli 2, Pisa',
        university: 'UniPi',
        tags: ['Lettere', 'Centro Storico', '📖 Teoria', '🔇 Silenzio'],
        notes: 'Dedicata agli studenti umanistici. Spazi raccolti e silenziosi, essenziale arrivare all\'apertura in sessione.'
    },
    {
        id: 'unipi_pacinotti_sala',
        nome: 'Sala Lettura Pacinotti (Lungarno)',
        edificio: 'Plesso Pacinotti',
        piano: 0,
        postiDisponibili: 25,
        postiTotali: 50,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Vista Arno', 'Tranquillità'],
        latitude: 43.7160,
        longitude: 10.3995,
        indirizzo: 'Lungarno Pacinotti 43, Pisa',
        university: 'UniPi',
        tags: ['Centro Storico', 'Pisa', '🌊 Vista Arno', '📖 Lettura'],
        notes: 'Studiare guardando il fiume Arno. Posti limitati, perfetti per la lettura o la scrittura della tesi.'
    },

    // ============================================================
    // PISA - POLO FIBONACCI (Informatica, Matematica, Fisica)
    // ============================================================
    {
        id: 'unipi_fibonacci_biblio',
        nome: 'Biblioteca Polo Fibonacci (Ex Marzotto)',
        edificio: 'Polo Fibonacci',
        piano: 1,
        postiDisponibili: 80,
        postiTotali: 300,
        orarioApertura: '08:30',
        orarioChiusura: '20:00',
        servizi: ['Prese Elettriche', 'Luminosità', 'Silenzio'],
        latitude: 43.7225,
        longitude: 10.4080,
        indirizzo: 'Largo Bruno Pontecorvo 3, Pisa',
        university: 'UniPi',
        tags: ['Scienze', 'Polo Fibonacci', '💻 Prese PC', '🔇 Silenzio'],
        notes: 'Il regno degli informatici e dei fisici. Cablaggio eccellente, silenzio rigoroso.'
    },
    {
        id: 'unipi_fibonacci_aule',
        nome: 'Aule Studio Informali Fibonacci',
        edificio: 'Polo Fibonacci (Piano Terra)',
        piano: 0,
        postiDisponibili: 120,
        postiTotali: 250,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Lavagne a Gesso', 'Lavoro di Gruppo', 'Distributori'],
        latitude: 43.7223,
        longitude: 10.4082,
        indirizzo: 'Largo Bruno Pontecorvo 3, Pisa',
        university: 'UniPi',
        tags: ['Scienze', 'Polo Fibonacci', '📝 Lavagne', '🗣️ Gruppo'],
        notes: 'In queste aule vedrai equazioni scritte su lavagne o sui vetri. Il brusio intellettuale è costante.'
    },
    {
        id: 'unipi_fibonacci_prato',
        nome: 'Prato Polo Fibonacci',
        edificio: 'Spazi Esterni Ex Marzotto',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 150,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Pausa Pranzo', 'Relax', 'Rastrelliere Bici'],
        latitude: 43.7228,
        longitude: 10.4075,
        indirizzo: 'Largo Bruno Pontecorvo, Pisa',
        university: 'UniPi',
        tags: ['Outdoor', 'Polo Fibonacci', '☀️ Sole', '🚲 Bici Friendly'],
        notes: 'Punto di sosta per centinaia di biciclette. Perfetto per la pausa pranzo al sole tra una lezione di algoritmi e l\'altra.'
    },

    // ============================================================
    // PISA - POLO PORTA NUOVA E DIOTISALVI (Ingegneria)
    // ============================================================
    {
        id: 'unipi_ingegneria_biblio',
        nome: 'Biblioteca Polo di Ingegneria',
        edificio: 'Plesso Via Diotisalvi',
        piano: 1,
        postiDisponibili: 50,
        postiTotali: 200,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['Tavoli Grandi', 'Prese PC', 'Silenzio Assoluto'],
        latitude: 43.7230,
        longitude: 10.3885,
        indirizzo: 'Via Diotisalvi 2, Pisa',
        university: 'UniPi',
        tags: ['Ingegneria', 'Polo PN', '📐 Tavoli Grandi', '💻 Prese PC'],
        notes: 'A pochi passi da Piazza dei Miracoli. Gli ingegneri vivono qui dentro. Silenzio tombale e prese sempre occupate.'
    },
    {
        id: 'unipi_portanuova_aule_f',
        nome: 'Aule Studio Polo F',
        edificio: 'Polo Porta Nuova',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 150,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Lavoro di Gruppo', 'Macchinette', 'Progettazione'],
        latitude: 43.7235,
        longitude: 10.3890,
        indirizzo: 'Via Diotisalvi, Pisa',
        university: 'UniPi',
        tags: ['Ingegneria', 'Polo PN', '🗣️ Gruppo', '⚙️ Progetti'],
        notes: 'Area di lavoro dinamica. Usata pesantemente per preparare i progetti di fine corso in team.'
    },

    // ============================================================
    // PISA - POLO LE PIAGGE (Economia, Veterinaria, Agraria)
    // ============================================================
    {
        id: 'unipi_piagge_biblio',
        nome: 'Biblioteca SMS (Scienze Economiche e Sociali)',
        edificio: 'Polo Le Piagge',
        piano: 1,
        postiDisponibili: 100,
        postiTotali: 400,
        orarioApertura: '08:30',
        orarioChiusura: '23:00',
        servizi: ['Apertura Serale', 'Aria Condizionata', 'Silenzio'],
        latitude: 43.7085,
        longitude: 10.4215,
        indirizzo: 'Viale delle Piagge 2, Pisa',
        university: 'UniPi',
        tags: ['Economia', 'Polo Piagge', '🌙 Serale', '❄️ A/C', '🔇 Silenzio'],
        notes: 'Uno dei poli più grandi e moderni. Apertura serale fino alle 23:00. Il Viale delle Piagge accanto è perfetto per correre dopo lo studio.'
    },
    {
        id: 'unipi_piagge_aule_aperte',
        nome: 'Open Space Polo Le Piagge',
        edificio: 'Polo Le Piagge',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 250,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Lavoro di Gruppo', 'Ampia Capienza'],
        latitude: 43.7082,
        longitude: 10.4210,
        indirizzo: 'Viale delle Piagge 2, Pisa',
        university: 'UniPi',
        tags: ['Scienze Politiche', 'Polo Piagge', '🗣️ Lavoro di Gruppo'],
        notes: 'Frenetico incrocio di studenti di Economia, Scienze Politiche e Veterinaria. Brusio costante.'
    },
    {
        id: 'unipi_agraria_borghetto',
        nome: 'Biblioteca Dipartimento Agraria',
        edificio: 'Polo Agraria',
        piano: 1,
        postiDisponibili: 30,
        postiTotali: 70,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['Tranquillità', 'Testi Specifici'],
        latitude: 43.7100,
        longitude: 10.4180,
        indirizzo: 'Via del Borghetto 80, Pisa',
        university: 'UniPi',
        tags: ['Agraria', 'Pisa', '🌾 Natura', '🔇 Silenzio'],
        notes: 'Storica sede di Agraria. Molto tranquilla, lontana dal caos di Ingegneria o Lettere.'
    },

    // ============================================================
    // PISA - AREA MEDICA E OSPEDALIERA (Santa Chiara / Cisanello)
    // ============================================================
    {
        id: 'unipi_medicina_santachiara',
        nome: 'Sale Lettura Polo Santa Chiara',
        edificio: 'Ex Ospedale Santa Chiara',
        piano: 1,
        postiDisponibili: 40,
        postiTotali: 100,
        orarioApertura: '08:00',
        orarioChiusura: '19:00',
        servizi: ['Vicinanza Reparti', 'Soffitti Alti'],
        latitude: 43.7205,
        longitude: 10.3950,
        indirizzo: 'Via Roma 55, Pisa',
        university: 'UniPi',
        tags: ['Medicina', 'Centro Storico', '🏥 Ospedale'],
        notes: 'Polo storico a due passi dalla Torre Pendente. Frequentato per studiare tra una lezione e l\'altra.'
    },
    {
        id: 'unipi_medicina_cisanello',
        nome: 'Biblioteca Polo Biomedico (Cisanello)',
        edificio: 'Ospedale Cisanello (Polo Didattico)',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 150,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['Aria Condizionata', 'Testi Clinici', 'Prese PC'],
        latitude: 43.7080,
        longitude: 10.4350,
        indirizzo: 'Via Paradisa 2, Pisa',
        university: 'UniPi',
        tags: ['Medicina', 'Cisanello', '⚕️ Tirocinio', '🔇 Silenzio'],
        notes: 'Lontano dal centro, attaccato al mega-ospedale di Cisanello. Vitale per gli specializzandi e i tirocinanti.'
    },

    // ============================================================
    // AREE COMUNI E MENSE (DSU Toscana)
    // ============================================================
    {
        id: 'unipi_mensa_martiri',
        nome: 'Aree Studio Mensa Martiri',
        edificio: 'Mensa DSU Martiri',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 200,
        orarioApertura: '10:00',
        orarioChiusura: '18:00',
        servizi: ['Pausa Veloce', 'Rumoroso', 'Vicinanza Sapienza'],
        latitude: 43.7180,
        longitude: 10.4010,
        indirizzo: 'Via degli Orti 12, Pisa',
        university: 'UniPi',
        tags: ['Mensa', 'Centro Storico', '🥪 Pausa Pranzo', '🔊 Rumore'],
        notes: 'In pieno centro. Fuori dall\'orario del pranzo si trasforma in un open space per ripassi last-minute.'
    },
    {
        id: 'unipi_mensa_betti',
        nome: 'Aree Studio Mensa Betti',
        edificio: 'Mensa DSU Betti',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 150,
        orarioApertura: '10:00',
        orarioChiusura: '18:00',
        servizi: ['Vicinanza Polo Fibonacci', 'Caffetteria'],
        latitude: 43.7210,
        longitude: 10.4060,
        indirizzo: 'Via Betti, Pisa',
        university: 'UniPi',
        tags: ['Mensa', 'Pisa', '☕ Pausa Caffè', '🗣️ Social'],
        notes: 'La mensa di riferimento per gli studenti di Informatica e Fisica.'
    },

    // ============================================================
    // LIVORNO - POLO UNIVERSITARIO SISTEMI LOGISTICI
    // ============================================================
    {
        id: 'unipi_livorno_letizia_biblio',
        nome: 'Biblioteca Polo Sistemi Logistici',
        edificio: 'Villa Letizia',
        piano: 1,
        postiDisponibili: 25,
        postiTotali: 60,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['Silenzio', 'Fondi di Economia/Logistica'],
        latitude: 43.5180,
        longitude: 10.3200,
        indirizzo: 'Via dei Pensieri 60, Livorno',
        university: 'UniPi - Livorno',
        tags: ['Logistica', 'Livorno', '🏛️ Villa Letizia', '🔇 Silenzio'],
        notes: 'Sede distaccata d\'eccellenza per Economia e Logistica. Villa storica vicina allo Stadio Armando Picchi.'
    },
    {
        id: 'unipi_livorno_letizia_aule',
        nome: 'Aule Progetto e Gruppo (Villa Letizia)',
        edificio: 'Villa Letizia',
        piano: 0,
        postiDisponibili: 20,
        postiTotali: 40,
        orarioApertura: '09:00',
        orarioChiusura: '18:30',
        servizi: ['Lavoro di Gruppo', 'Distributori'],
        latitude: 43.5182,
        longitude: 10.3202,
        indirizzo: 'Via dei Pensieri 60, Livorno',
        university: 'UniPi - Livorno',
        tags: ['Logistica', 'Livorno', '🗣️ Gruppo'],
        notes: 'Aule usate per simulazioni logistiche e lavori di economia aziendale in team.'
    },
    {
        id: 'unipi_livorno_parco',
        nome: 'Parco di Villa Letizia',
        edificio: 'Spazi Esterni Livorno',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 60,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Pausa', 'Natura'],
        latitude: 43.5178,
        longitude: 10.3198,
        indirizzo: 'Via dei Pensieri 60, Livorno',
        university: 'UniPi - Livorno',
        tags: ['Outdoor', 'Livorno', '🌲 Parco', '☀️ Relax'],
        notes: 'Ottimo sfogo all\'aperto per staccare la mente godendosi il parco della villa.'
    },

    // ============================================================
    // LA SPEZIA - POLO UNIVERSITARIO GUGLIELMO MARCONI (Ingegneria Nautica)
    // ============================================================
    {
        id: 'unipi_laspezia_marconi_biblio',
        nome: 'Biblioteca Ingegneria Nautica e Navale',
        edificio: 'Polo G. Marconi',
        piano: 1,
        postiDisponibili: 20,
        postiTotali: 50,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['Testi Tecnici Navali', 'Progettazione', 'Silenzio'],
        latitude: 44.1030,
        longitude: 9.8220,
        indirizzo: 'Viale Fieschi 16/18, La Spezia',
        university: 'UniPi - La Spezia',
        tags: ['Ingegneria Navale', 'La Spezia', '🚢 Arsenale', '🔇 Silenzio'],
        notes: 'Incastonata nella zona dell\'Arsenale Militare. Hub iperspecializzato per i futuri ingegneri nautici.'
    },
    {
        id: 'unipi_laspezia_marconi_aule',
        nome: 'Laboratorio Modelli e Aule Studio',
        edificio: 'Polo G. Marconi',
        piano: 0,
        postiDisponibili: 15,
        postiTotali: 40,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['Tavoli Grandi', 'Prese PC', 'Lavoro di Gruppo'],
        latitude: 44.1032,
        longitude: 9.8222,
        indirizzo: 'Viale Fieschi, La Spezia',
        university: 'UniPi - La Spezia',
        tags: ['Ingegneria Nautica', 'La Spezia', '📐 Progettazione'],
        notes: 'Spazi dinamici dove gli studenti tracciano le linee d\'acqua degli scafi e preparano modelli.'
    },

    // ============================================================
    // LUCCA - POLO UNIVERSITARIO LUCCHESE (Celsius)
    // ============================================================
    {
        id: 'unipi_lucca_celsius_biblio',
        nome: 'Sale Lettura Polo Lucchese',
        edificio: 'Complesso San Micheletto / Polo Celsius',
        piano: 1,
        postiDisponibili: 15,
        postiTotali: 35,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Silenzio', 'Turismo', 'Ingegneria'],
        latitude: 43.8410,
        longitude: 10.5050,
        indirizzo: 'Via San Micheletto 3, Lucca',
        university: 'UniPi - Lucca',
        tags: ['Polo Lucchese', 'Lucca', '🏛️ Mura Storiche', '🔇 Silenzio'],
        notes: 'Polo distaccato (collaborazione UniPi) per i corsi in Scienze del Turismo e alcune magistrali. In pieno centro storico a Lucca.'
    },
    {
        id: 'unipi_lucca_sanmicheletto_chiostro',
        nome: 'Chiostro di San Micheletto',
        edificio: 'Spazi Esterni Lucca',
        piano: 0,
        postiDisponibili: 20,
        postiTotali: 40,
        orarioApertura: '09:00',
        orarioChiusura: '18:30',
        servizi: ['Fresco d\'Estate', 'Pausa Caffè'],
        latitude: 43.8412,
        longitude: 10.5052,
        indirizzo: 'Via San Micheletto, Lucca',
        university: 'UniPi - Lucca',
        tags: ['Outdoor', 'Lucca', '☕ Pausa', '☀️ Relax'],
        notes: 'Il chiostro offre un ambiente rinascimentale perfetto per ripassare all\'aperto.'
    }
];

export const getDirectionsUniPi = (room: StudyRoom, isRainy?: boolean): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];
    const id = room.id.toLowerCase();

    // ============================================================
    // PISA (Centro Storico - Sapienza, Carmignani, Matteucci, Pacinotti, Martiri)
    // ============================================================
    if (id.includes('sapienza') || id.includes('carmignani') || id.includes('matteucci') || id.includes('pacinotti') || id.includes('mensa_martiri')) {
        directions.push({
            luogo: 'Pisa Stazione Centrale',
            descrizione: isRainy
                ? `Piove a dirotto? Non prendere la bici: il lastricato di Piazza dei Cavalieri scivola!
1. **Lam Verde (Bus Urbani)**: Da Pisa Centrale direzione Nord, ti lascia dietro Piazza Garibaldi.
2. **A piedi**: 15 min tranquilli sotto i portici di Corso Italia e attraversando Ponte di Mezzo.`
                : `Il meteo è clemente, la zona è a traffico interdetto (ZTL severissima).
1. **Bicicletta (CicloPi)**: Pedala in Corso Italia (attenzione ai pedoni!) e arriva in 5 minuti.
2. **A piedi**: 10-15 minuti di passeggiata dalla stazione, goditi i Lungarni.`,
            mezziPubblici: isRainy ? ['Lam Verde', 'A piedi'] : ['Bici / CicloPi', 'A piedi'],
            tempoStimato: isRainy ? '15 min (Bus)' : '5 min (Bici)',
            note: isRainy ? 'Non usare scooter, lastricato viscido. Prendi il bus.' : 'Zona pedonale. Bici consigliatissima.'
        });
    }

    // ============================================================
    // PISA - POLO FIBONACCI / MENSA BETTI
    // ============================================================
    else if (id.includes('fibonacci') || id.includes('mensa_betti')) {
        directions.push({
            luogo: 'Pisa Stazione C.le / San Rossore',
            descrizione: isRainy
                ? `Il Polo Ex-Marzotto è più fuori e in caso di pioggia è scomodo arrivarci a piedi dalla Centrale.
1. **Lam Rossa (Bus)**: Circolare perfetta dalla Stazione Centrale per risparmiare tempo e rimanere asciutti.
2. **Treno (Pisa San Rossore)**: A San Rossore il treno ferma a ridosso del polo (Via Buonarroti/Largo Pontecorvo).`
                : `Largo Pontecorvo ospita centinaia di studenti di Scienze.
1. **Bicicletta**: Segui i Lungarni, attraversa Ponte della Vittoria e sali fino al prato. Rastrelliere colme!
2. **Treno (San Rossore FS)**: Se vieni da fuori, scendi a Pisa San Rossore. 10 min a piedi per il Polo.`,
            mezziPubblici: isRainy ? ['Lam Rossa (Bus)'] : ['Bici', 'Lam Rossa', 'San Rossore FS'],
            tempoStimato: '15 min faticando',
            note: 'Se vieni da Viareggio/Lucca scendi a S. Rossore.'
        });
    }

    // ============================================================
    // PISA - INGEGNERIA (Porta Nuova / F) e SANT'ANNA / SANTA CHIARA
    // ============================================================
    else if (id.includes('ingegneria') || id.includes('portanuova') || id.includes('santachiara')) {
        directions.push({
            luogo: 'Stazione San Rossore / Piazza dei Miracoli',
            descrizione: `Siamo a due passi dalla Torre e dall'Ospedale storico!
1. **Treno (Pisa San Rossore FS)**: Scendi qui, passa il sottopasso pedonale e sei ai poli d'Ingegneria in 3 minuti netti.
2. **Lam Rossa / Linea 5**: Se arrivi a Pisa Centrale (dove i regionali per Firenze si fermano chiudendo), prendi questi bus.
3. **Auto**: Via Pisano o parcheggio scambiatore di Via Pietrasantina (con bus navetta gratuito).`,
            mezziPubblici: ['Pisa San Rossore FS', 'Lam Rossa'],
            tempoStimato: '5 min da FS S.Rossore',
            note: 'Evita a tutti i costi Pisa Centrale, scendi a San Rossore.'
        });
    }

    // ============================================================
    // PISA - PIAGGE E AGRARIA
    // ============================================================
    else if (id.includes('piagge') || id.includes('agraria')) {
        directions.push({
            luogo: 'Pisa Stazione C.le / Lungarni',
            descrizione: isRainy
                ? `Le Piagge sono perfette col sole, ma con la pioggia il lungo viale è faticoso a piedi.
1. **Lam Blu / Linea 14**: Dalla Centrale ti portano dritti al polo Economia/Veterinaria.
2. **Auto**: Ci sono parcheggi gratuiti ai margini del polo SMS, ma finiscono entro le 08:45!`
                : `Viale alberato perfetto per pedalare o correre!
1. **Bicicletta**: Segui i Lungarni (sud) o Viale delle Piagge. È tutto dritto.
2. **A piedi**: Circa 20 min di camminata dalla Stazione Centrale, molto godibile al tramonto.`,
            mezziPubblici: isRainy ? ['Lam Blu', 'Linea 14'] : ['Bici', 'Lam Blu'],
            tempoStimato: '15 min in Bici o Bus',
            note: 'Parcheggio rapido con l\'auto solo all\'alba.'
        });
    }

    // ============================================================
    // PISA - CISANELLO (Medicina)
    // ============================================================
    else if (id.includes('cisanello')) {
        directions.push({
            luogo: 'Pisa Periferia Est',
            descrizione: `L'Ospedale Civile di Cisanello è il cuore della medicina toscana, enorme e decentrato.
1. **Lam Rossa / Lam Blu / 13 / 14**: Collegano l'Ospedale alla Stazione e al centro. Indispensabili a chi non guida.
2. **Auto**: I parcheggi (come il Parcheggio Ponte della Vittoria o Via Bargagna) sono immensi ma tariffati (gratis per personale/studenti autorizzati in alcune aree). Scambiatore gratuito + bus navetta.`,
            mezziPubblici: ['Lam Rossa / Blu', 'Auto Scambiatore'],
            tempoStimato: '25-30 min dal Centro',
            note: 'Munisciti di abbonamento CPT per i bus se sei tirocinante.'
        });
    }

    // ============================================================
    // PISA (Default if unaccounted specifically)
    // ============================================================
    else if (id.startsWith('unipi_') && !id.includes('livorno') && !id.includes('spezia') && !id.includes('lucca')) {
        directions.push({
            luogo: 'Pisa Centro',
            descrizione: `Edificio universitario di Pisa.
1. **Bicicletta**: Muoversi in bici a Pisa è sempre l'opzione migliore, le distanze sono minime.
2. **Autolinee CPT (Lam)**: Acquista i biglietti tramite app prima di salire sull'autobus locale.`,
            mezziPubblici: ['Bicicletta', 'Bus Lam'],
            tempoStimato: '15 min',
            note: 'Città piatta e piccola, bici obbligatoria.'
        });
    }

    // ============================================================
    // LIVORNO, LA SPEZIA, LUCCA (Poli Decentrati via Treno)
    // ============================================================
    if (id.includes('livorno')) {
        directions.push({
            luogo: 'Livorno Centrale FS / Stadio Picchi',
            descrizione: `Villa Letizia si trova nel quartiere sud (Zona Ardenza/Stadio).
1. **Bus AT (Linea 8N/8R o Linea 5)**: Dalla stazione ti portano sul Viale Italia o Via dei Pensieri, proprio davanti alla villa d'eccellenza navale.
2. **Auto**: A differenza di Pisa, qui trovare parcheggio (gratuito) fuori dalla villa è facilissimo!`,
            mezziPubblici: ['Bus AT Linea 8/5', 'Auto'],
            tempoStimato: '20 min da Livorno C.le',
            note: 'Ottimo parcheggio libero.'
        });
    }

    if (id.includes('spezia')) {
        directions.push({
            luogo: 'La Spezia Centrale',
            descrizione: `Il Polo dell'Ingegneria Navale (G. Marconi) è verso Portovenere.
1. **Bus Linea 11 o Linea P**: Dalla Stazione C.le di Spezia scendi in Via Fieschi prima dello Stadio Picco/Arsenale Ovest.
2. **Auto**: Comodo arrivarci, parcheggi liberi intorno allo stadio Spezia Calcio (se non c'è partita!).`,
            mezziPubblici: ['Bus Linea 11/P'],
            tempoStimato: '15 min in Bus',
            note: 'Fermata vicino all\'Arsenale/Stadio Picco.'
        });
    }

    if (id.includes('lucca')) {
        directions.push({
            luogo: 'Stazione Lucca FS / Mura Storiche',
            descrizione: `Complesso San Micheletto: sei incastonato nelle Mura Cinquecentesche!
1. **A piedi o in Bici**: Da Lucca FS esci, vai a destra, superi Porta San Pietro o S. Maria e sei arrivato. Tempo stimato 8 min a piedi.
2. **Auto**: In centro storico non puoi entrare. Parcheggia fuori (es. Parcheggio Stazione o Parcheggio Mazzini) e incamminati.`,
            mezziPubblici: ['A piedi', 'Bicicletta'],
            tempoStimato: '8 min a piedi',
            note: 'ZTL Pedonale totale.'
        });
    }

    return directions;
};
