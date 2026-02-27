import { StudyRoom, DirectionsFromLocation } from '../../types';

export const unimeRooms: StudyRoom[] = [
    // ============================================================
    // MESSINA CENTRO - POLO CENTRALE (Giurisprudenza, Economia, Sc. Politiche)
    // ============================================================
    {
        id: 'unime_centro_giuri_biblio',
        nome: 'Biblioteca Dipartimento Giurisprudenza',
        edificio: 'Polo Centrale - Palazzo Mariani / Plesso Centrale',
        piano: 1,
        postiDisponibili: 35,
        postiTotali: 150,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Codici Aggiornati', 'Silenzio Assoluto', 'Ambiente Storico'],
        latitude: 38.1885,
        longitude: 15.5532,
        indirizzo: 'Piazza Pugliatti 1, Messina',
        university: 'UniMe',
        tags: ['Giurisprudenza', 'Polo Centrale', '⚖️ Diritto', '🔇 Silenzio'],
        notes: 'Sede storica e prestigiosa. Ambiente austero, ideale per la concentrazione profonda. Silenzio d\'obbligo.'
    },
    {
        id: 'unime_centro_economia_aule',
        nome: 'Sale Lettura Economia',
        edificio: 'Plesso Centrale',
        piano: 2,
        postiDisponibili: 50,
        postiTotali: 120,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['Climatizzazione', 'Prese PC', 'Rumore Controllato'],
        latitude: 38.1887,
        longitude: 15.5535,
        indirizzo: 'Piazza Pugliatti 1, Messina',
        university: 'UniMe',
        tags: ['Economia', 'Polo Centrale', '📊 Finanza', '💻 Prese PC'],
        notes: 'Frequentata per preparare esami quantitativi. Leggero brusio tollerato.'
    },
    {
        id: 'unime_centro_sc_politiche',
        nome: 'Biblioteca Scienze Politiche e Giuridiche',
        edificio: 'Polo Centrale',
        piano: 1,
        postiDisponibili: 20,
        postiTotali: 70,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['Emeroteca', 'Consultazione', 'Silenzio'],
        latitude: 38.1882,
        longitude: 15.5530,
        indirizzo: 'Via Tommaso Cannizzaro, Messina',
        university: 'UniMe',
        tags: ['Scienze Politiche', 'Polo Centrale', '📖 Consultazione', '🔇 Silenzio'],
        notes: 'Accesso comodo da Via T. Cannizzaro. Molto tranquilla, ottima alternativa se Giurisprudenza è piena.'
    },
    {
        id: 'unime_centro_cortile',
        nome: 'Cortile Interno del Rettorato',
        edificio: 'Polo Centrale (Spazi Esterni)',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 100,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['Pausa Caffè', 'Luce Naturale', 'Porticati'],
        latitude: 38.1886,
        longitude: 15.5534,
        indirizzo: 'Piazza Pugliatti 1, Messina',
        university: 'UniMe',
        tags: ['Outdoor', 'Polo Centrale', '☕ Pausa', '🏛️ Porticati'],
        notes: 'Punto di ritrovo storico per tutti gli studenti del centro. Perfetto per staccare tra una lezione e l\'altra.'
    },

    // ============================================================
    // MESSINA NORD - POLO ANNUNZIATA (Veterinaria, Lettere, Lingue)
    // ============================================================
    {
        id: 'unime_annunziata_lettere_biblio',
        nome: 'Biblioteca Polo Umanistico (DICAM)',
        edificio: 'Polo Annunziata',
        piano: 1,
        postiDisponibili: 45,
        postiTotali: 150,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['Volumi Umanistici', 'Grandi Vetrate', 'Silenzio'],
        latitude: 38.2255,
        longitude: 15.5450,
        indirizzo: 'Viale Annunziata, Messina',
        university: 'UniMe',
        tags: ['Umanistica', 'Annunziata', '☀️ Luminosa', '🔇 Silenzio'],
        notes: 'Struttura moderna con grandi vetrate panoramiche. L\'hub principale per chi studia Lettere, Lingue e Filosofia.'
    },
    {
        id: 'unime_annunziata_veterinaria_biblio',
        nome: 'Biblioteca Scienze Veterinarie',
        edificio: 'Polo Annunziata (Corpo Veterinario)',
        piano: 1,
        postiDisponibili: 25,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '17:30',
        servizi: ['Testi Clinici', 'Isolamento'],
        latitude: 38.2260,
        longitude: 15.5455,
        indirizzo: 'Polo Universitario Annunziata, Messina',
        university: 'UniMe',
        tags: ['Veterinaria', 'Annunziata', '🩺 Scienze', '🔇 Silenzio'],
        notes: 'Plesso separato, dedicato esclusivamente agli studenti di Medicina Veterinaria.'
    },
    {
        id: 'unime_annunziata_aule_aperte',
        nome: 'Aule Lettura Polo Annunziata',
        edificio: 'Polo Annunziata (Edifici Didattici)',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 120,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['Lavoro di Gruppo', 'Macchinette', 'Prese Elettriche'],
        latitude: 38.2252,
        longitude: 15.5445,
        indirizzo: 'Viale Annunziata, Messina',
        university: 'UniMe',
        tags: ['Passaggio', 'Annunziata', '🗣️ Lavoro di Gruppo', '💻 Prese PC'],
        notes: 'Aule dinamiche, utilizzate per ripetere ad alta voce o fare lavori di gruppo.'
    },
    {
        id: 'unime_mensa_annunziata',
        nome: 'Mensa Annunziata (Aree Comuni)',
        edificio: 'Polo ERSU Annunziata',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 200,
        orarioApertura: '10:00',
        orarioChiusura: '18:00',
        servizi: ['Pausa Pranzo', 'Spazio Aperto', 'Rumoroso'],
        latitude: 38.2258,
        longitude: 15.5460,
        indirizzo: 'Polo Universitario Annunziata, Messina',
        university: 'UniMe',
        tags: ['Mensa', 'Annunziata', '🥪 Pausa Pranzo', '🔊 Rumore'],
        notes: 'Fuori orario pasti è un enorme open space per studiare insieme. C\'è sempre un forte rumore di fondo.'
    },

    // ============================================================
    // MESSINA NORD ESTREMO - POLO PAPARDO (Scienze e Ingegneria)
    // ============================================================
    {
        id: 'unime_papardo_ingegneria_biblio',
        nome: 'Biblioteca Dipartimento Ingegneria',
        edificio: 'Polo Papardo',
        piano: 1,
        postiDisponibili: 40,
        postiTotali: 150,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['Tavoli Grandi', 'Prese PC', 'Luminosità'],
        latitude: 38.2585,
        longitude: 15.5902,
        indirizzo: 'Contrada di Dio, Villaggio Papardo, Messina',
        university: 'UniMe',
        tags: ['Ingegneria', 'Papardo', '📐 Tavoli Grandi', '💻 Prese PC'],
        notes: 'Situato nell\'estremo nord della città. I tavoli sono spaziosi, adatti a disegni tecnici e laptop.'
    },
    {
        id: 'unime_papardo_scienze_biblio',
        nome: 'Biblioteca Scienze Matematiche, Fisiche e Naturali',
        edificio: 'Polo Papardo',
        piano: 1,
        postiDisponibili: 30,
        postiTotali: 100,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['Testi Avanzati', 'Silenzio Assoluto'],
        latitude: 38.2580,
        longitude: 15.5900,
        indirizzo: 'Contrada Papardo, Sperone, Messina',
        university: 'UniMe',
        tags: ['Scienze', 'Papardo', '🔇 Silenzio', '🔬 MBN'],
        notes: 'Il tempio di matematici, fisici e biologi. Silenzio ferreo garantito.'
    },
    {
        id: 'unime_papardo_aule_studio',
        nome: 'Aule Studio Papardo',
        edificio: 'Plesso Didattico Papardo',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 120,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['Lavoro di Gruppo', 'Macchinette'],
        latitude: 38.2582,
        longitude: 15.5905,
        indirizzo: 'Polo Papardo, Messina',
        university: 'UniMe',
        tags: ['Ingegneria', 'Papardo', '🗣️ Gruppo', '☕ Pausa'],
        notes: 'Molto gettonate per preparare analisi matematica o fisica in gruppo.'
    },
    {
        id: 'unime_papardo_verde',
        nome: 'Spazi Verdi Polo Papardo',
        edificio: 'Spazi Esterni',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 150,
        orarioApertura: '08:00',
        orarioChiusura: '19:00',
        servizi: ['Vista Stretto', 'Natura', 'Pausa'],
        latitude: 38.2590,
        longitude: 15.5910,
        indirizzo: 'Contrada di Dio, Messina',
        university: 'UniMe',
        tags: ['Outdoor', 'Papardo', '🌊 Vista Mare', '🌲 Natura'],
        notes: 'Il polo si affaccia sullo Stretto di Messina. Nelle giornate limpide, studiare qui all\'aperto è meraviglioso.'
    },

    // ============================================================
    // MESSINA SUD - POLO POLICLINICO (Medicina e Odontoiatria)
    // ============================================================
    {
        id: 'unime_policlinico_centrale',
        nome: 'Biblioteca Centrale Medicina (Torre Biologica)',
        edificio: 'Policlinico G. Martino (Torre Biologica)',
        piano: 1,
        postiDisponibili: 50,
        postiTotali: 200,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['Aria Condizionata', 'Testi Clinici', 'Silenzio'],
        latitude: 38.1585,
        longitude: 15.5482,
        indirizzo: 'Viale Gazzi, Messina',
        university: 'UniMe',
        tags: ['Medicina', 'Policlinico', '🏥 Torre Biologica', '🔇 Silenzio'],
        notes: 'La struttura principale per i medici in formazione. Ambiente teso, aria condizionata forte e grande silenzio.'
    },
    {
        id: 'unime_policlinico_aule_padiglioni',
        nome: 'Sale Lettura Padiglioni (NI / G)',
        edificio: 'Policlinico G. Martino',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 90,
        orarioApertura: '08:00',
        orarioChiusura: '19:00',
        servizi: ['Vicinanza Reparti', 'Clima Ospedaliero'],
        latitude: 38.1580,
        longitude: 15.5480,
        indirizzo: 'Viale Gazzi, Messina',
        university: 'UniMe',
        tags: ['Medicina', 'Policlinico', '⚕️ Tirocinio'],
        notes: 'Spazi ricavati all\'interno o vicino ai padiglioni ospedalieri. Essenziali tra un turno e l\'altro.'
    },
    {
        id: 'unime_policlinico_odontoiatria',
        nome: 'Aula Studio Odontoiatria',
        edificio: 'Plesso Odontoiatria',
        piano: 1,
        postiDisponibili: 15,
        postiTotali: 40,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['Concentrazione', 'Settoriale'],
        latitude: 38.1590,
        longitude: 15.5485,
        indirizzo: 'Viale Gazzi, Policlinico Universitario',
        university: 'UniMe',
        tags: ['Odontoiatria', 'Policlinico', '🦷 Pratica'],
        notes: 'Sezione specializzata per gli odontoiatri, più piccola e intima.'
    },
    {
        id: 'unime_policlinico_verde',
        nome: 'Aree Esterne Policlinico',
        edificio: 'Spazi Esterni Gazzi',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 70,
        orarioApertura: '08:00',
        orarioChiusura: '19:00',
        servizi: ['Pausa Veloce', 'Distributori'],
        latitude: 38.1588,
        longitude: 15.5478,
        indirizzo: 'Viale Gazzi, Messina',
        university: 'UniMe',
        tags: ['Outdoor', 'Policlinico', '☕ Pausa Veloce'],
        notes: 'Utilissime per prendere un caffè all\'aperto prima di rientrare in sala o in biblioteca.'
    },

    // ============================================================
    // NOTO - CONSORZIO UNIVERSITARIO MEDITERRANEO ORIENTALE (CUMO)
    // ============================================================
    {
        id: 'unime_cumo_noto_biblio',
        nome: 'Biblioteca Consorzio CUMO Noto',
        edificio: 'Palazzo Vallelonga',
        piano: 1,
        postiDisponibili: 35,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['Sistemi Ambientali', 'Psicologia', 'Silenzio'],
        latitude: 36.8905,
        longitude: 15.0682,
        indirizzo: 'Corso Vittorio Emanuele 149, Noto (SR)',
        university: 'CUMO Noto (UniMe)',
        tags: ['Scienze Umane', 'Noto', '🏛️ Palazzo Barocco', '🔇 Silenzio'],
        notes: 'Polo d\'eccellenza nel cuore della capitale del Barocco. Sede magnifica, studio silenzioso e suggestivo.'
    },
    {
        id: 'unime_cumo_noto_aule',
        nome: 'Aule Studio Palazzo Vallelonga',
        edificio: 'Palazzo Vallelonga',
        piano: 0,
        postiDisponibili: 25,
        postiTotali: 60,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Lavoro di Gruppo', 'Wi-Fi'],
        latitude: 36.8906,
        longitude: 15.0685,
        indirizzo: 'Corso Vittorio Emanuele 149, Noto (SR)',
        university: 'CUMO Noto (UniMe)',
        tags: ['Mediazione', 'Noto', '🗣️ Lavoro di Gruppo'],
        notes: 'Aule destinate a chi deve fare lavori di gruppo o esercitarsi ad alta voce.'
    },
    {
        id: 'unime_cumo_noto_chiostro',
        nome: 'Chiostro di Palazzo Vallelonga',
        edificio: 'Spazi Esterni',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 50,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Fresco d\'Estate', 'Relax'],
        latitude: 36.8904,
        longitude: 15.0680,
        indirizzo: 'Corso Vittorio Emanuele, Noto',
        university: 'CUMO Noto (UniMe)',
        tags: ['Outdoor', 'Noto', '☕ Pausa', '☀️ Sole'],
        notes: 'Cortile interno del palazzo nobiliare. Offre frescura e un\'atmosfera incredibilmente rilassante.'
    },

    // ============================================================
    // POLI PROFESSIONI SANITARIE (Siracusa / Priolo)
    // ============================================================
    {
        id: 'unime_sanita_priolo',
        nome: 'Polo Didattico Professioni Sanitarie (Priolo Gargallo)',
        edificio: 'Sede Formativa',
        piano: 0,
        postiDisponibili: 20,
        postiTotali: 50,
        orarioApertura: '08:30',
        orarioChiusura: '17:30',
        servizi: ['Laboratori Pratici', 'Infermieristica'],
        latitude: 37.1650,
        longitude: 15.1850,
        indirizzo: 'Polo Sanitario, Priolo Gargallo (SR)',
        university: 'UniMe - Polo Sanitario',
        tags: ['Infermieristica', 'Priolo', '⚕️ Tirocinio', '🏥 Polo Sanitario'],
        notes: 'Sede distaccata per la provincia di Siracusa. Molto settoriale, orari legati ai turni.'
    },
    {
        id: 'unime_sanita_siracusa',
        nome: 'Aule Studio Ospedale Umberto I (Siracusa)',
        edificio: 'Polo Ospedaliero',
        piano: 0,
        postiDisponibili: 15,
        postiTotali: 40,
        orarioApertura: '08:00',
        orarioChiusura: '18:00',
        servizi: ['Testi Clinici', 'Reparti'],
        latitude: 37.0750,
        longitude: 15.2850,
        indirizzo: 'Via Testaferrata, Siracusa',
        university: 'UniMe - Siracusa',
        tags: ['Medicina', 'Siracusa', '🏥 Ospedale', '⚕️ Tirocinio'],
        notes: 'Punto di appoggio per i tirocinanti delle professioni sanitarie allocati nell\'ospedale di Siracusa.'
    }
];

export const getDirectionsUniMe = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];
    const id = room.id.toLowerCase();
    const uni = (room.university || '').toLowerCase();

    // ============================================================
    // MESSINA (Policlinico, Centro, Annunziata, Papardo)
    // ============================================================
    if (uni === 'unime') {
        if (id.includes('centro') || id.includes('mensa')) {
            directions.push({
                luogo: 'Stazione Messina Centrale / Piazza Cairoli',
                descrizione: `I poli centrali (Giurisprudenza, Economia, Sc. Politiche) sono nel cuore della città.
1. **A piedi**: Da Piazza Cairoli o dalla Stazione Centrale sono circa 5-10 minuti.
2. **Tram**: Fermata "Repubblica" o "Cairoli".`,
                mezziPubblici: ['A piedi', 'Tram'],
                tempoStimato: '5-10 min',
                note: 'Centro città, comodissimo a piedi o in Tram.'
            });
        }

        if (id.includes('policlinico')) {
            directions.push({
                luogo: 'Messina Centro / Stazione',
                descrizione: `Il Policlinico (Viale Gazzi) si trova nella zona Sud di Messina.
1. **Tram (Linea 28)**: Da Piazza Cairoli prendi il Tram in direzione Sud e scendi al capolinea "Gazzi". Il capolinea è letteralmente l'ingresso del Policlinico.
2. **Auto**: Viale Gazzi è spesso trafficato e il parcheggio interno è difficile per gli studenti. Usa il tram.`,
                mezziPubblici: ['Tram (Direzione Sud)', 'Bus ATM'],
                tempoStimato: '15-20 min',
                note: 'Il Tram è l\'asso nella manica per il Policlinico.'
            });
        }

        if (id.includes('annunziata')) {
            directions.push({
                luogo: 'Messina Centro / Stazione',
                descrizione: `Il Polo Annunziata si trova a Nord del centro.
1. **Tram (Linea 28)**: Prendi il Tram direzione Nord fino al capolinea "Annunziata" (Museo). Da lì prendi i bus navetta dell'ATM (es. Linea 22 o 23) che salgono al polo universitario.
2. **Auto**: Molto più agevole parcheggiare qui rispetto al centro.`,
                mezziPubblici: ['Tram + Navetta ATM', 'Auto'],
                tempoStimato: '20-25 min',
                note: 'Devi combinare Tram (fino al Museo) e Bus Navetta.'
            });
        }

        if (id.includes('papardo')) {
            directions.push({
                luogo: 'Messina Centro',
                descrizione: `Il Polo Papardo è nell'estrema zona Nord (Sperone/Faro).
1. **Bus ATM**: Linee dirette dal centro (es. Linea 24, 31 o 32) che percorrono la litoranea o la Consolare Pompea.
2. **Auto**: Consigliata se abiti fuori città, c'è ampio margine di parcheggio rispetto al centro.`,
                mezziPubblici: ['Bus ATM', 'Auto'],
                tempoStimato: '30-40 min',
                note: 'Dista parecchio dal centro. I bus ATM sono fondamentali.'
            });
        }
    }

    // ============================================================
    // NOTO E POLI DISTACCATI
    // ============================================================
    if (uni.includes('noto')) {
        directions.push({
            luogo: 'Centro Storico Noto / Porta Reale',
            descrizione: `Il CUMO si trova a Palazzo Vallelonga, in pieno Corso Vittorio Emanuele.
1. **A piedi**: Una volta a Noto, tutto il centro storico barocco è pedonale e si gira a piedi.
2. **Auto**: Parcheggia fuori dal centro storico (es. zone limitrofe ai giardini pubblici) ed entra a piedi.`,
            mezziPubblici: ['A piedi'],
            tempoStimato: '5 min',
            note: 'ZTL attiva, zona barocca pedonale.'
        });
    }

    if (uni.includes('sanita') || uni.includes('siracusa') || uni.includes('priolo')) {
        directions.push({
            luogo: 'Viabilità Provinciale (SR)',
            descrizione: `I poli delle professioni sanitarie sono ospedalieri o di cintura.
1. **Auto**: Assolutamente necessaria per raggiungere agilmente Priolo Gargallo o per fare i turni all'Umberto I di Siracusa.`,
            mezziPubblici: ['Auto'],
            tempoStimato: 'Variabile',
            note: 'Automuniti.'
        });
    }

    return directions;
};
