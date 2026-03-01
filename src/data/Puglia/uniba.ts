import { StudyRoom, DirectionsFromLocation } from '../../types';

export const unibaRooms: StudyRoom[] = [
    // ============================================================
    // BARI - CENTRO STORICO (Palazzo Ateneo e dintorni)
    // ============================================================
    {
        id: 'uniba_ateneo_centrale',
        nome: 'Biblioteca Centrale d\'Ateneo',
        edificio: 'Palazzo Ateneo',
        piano: 0,
        postiDisponibili: 280,
        postiTotali: 320,
        orarioApertura: '08:15',
        orarioChiusura: '19:45',
        servizi: ['WiFi Eduroam', 'Architettura Storica', 'Prese limitate'],
        latitude: 41.120226,
        longitude: 16.868906,
        indirizzo: 'Piazza Umberto I 1, Bari',
        university: 'UniBa',
        occupancy_rate: 'Altissimo',
        tags: ['Polo Centro Storico', '🍕 Panificio Fiore (Via Nicolai)', '🍕 Magda (Via Crispi)'],
        vibe: 'Campus a Cielo Aperto',
        notes: 'La biblioteca centrale storica. Bellissima ma affollatissima in sessione. Piazza Umberto I è il crocevia degli studenti: panchine, pendolari, vita universitaria di giorno.'
    },
    {
        id: 'uniba_giuri_starace',
        nome: 'Biblioteca di Giurisprudenza "V. Starace"',
        edificio: 'Palazzo Ateneo',
        piano: 0,
        postiDisponibili: 130,
        postiTotali: 160,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['Codici', 'Silenzio Assoluto'],
        latitude: 41.120226,
        longitude: 16.868906,
        indirizzo: 'Piazza Umberto I 1, Bari',
        university: 'UniBa',
        tags: ['Polo Centro Storico', 'Giurisprudenza', '🍕 Panificio Fiore (Via Nicolai)'],
        vibe: 'Silenzio Rigoroso',
        notes: 'Tana dei futuri avvocati. Silenzio rigoroso.'
    },
    {
        id: 'uniba_scienze_politiche',
        nome: 'Sala Lettura Scienze Politiche (Ex Poste)',
        edificio: 'Piazza Battisti',
        piano: 0,
        postiDisponibili: 160,
        postiTotali: 190,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['Spazi ampi', 'Macchinette'],
        latitude: 41.1195,
        longitude: 16.8680,
        indirizzo: 'Piazza Cesare Battisti 1, Bari',
        university: 'UniBa',
        tags: ['Polo Centro Storico', 'Scienze Politiche'],
        notes: 'Molto vissuta da studenti di Scienze Politiche.'
    },
    {
        id: 'uniba_lingue_santateresa',
        nome: 'Biblioteca di Lingue (Santa Teresa dei Maschi)',
        edificio: 'Città Vecchia',
        piano: 1,
        postiDisponibili: 90,
        postiTotali: 110,
        orarioApertura: '08:30',
        orarioChiusura: '17:30',
        servizi: ['Fascino Storico', 'Vicino Mare'],
        latitude: 41.1280,
        longitude: 16.8700,
        indirizzo: 'Str. Torretta, Bari Vecchia',
        university: 'UniBa',
        tags: ['Polo Centro Storico', 'Lingue', 'Bari Vecchia'],
        vibe: 'Magico',
        notes: 'Ex convento nel cuore di Bari Vecchia. Magico.'
    },
    // ============================================================
    // BARI - CAMPUS UNIVERSITARIO (Via Orabona / Amendola)
    // ============================================================
    {
        id: 'uniba_campus_biologia',
        nome: 'Biblioteca di Scienze Biologiche',
        edificio: 'Campus Universitario',
        piano: 1,
        postiDisponibili: 130,
        postiTotali: 160,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi', 'Aree Verdi', 'Mensa Vicina'],
        latitude: 41.1090,
        longitude: 16.8790,
        indirizzo: 'Via Edoardo Orabona 4, Bari',
        university: 'UniBa',
        tags: ['Polo Campus (Orabona)', 'Biologia', 'AMTAB 21/22'],
        notes: 'Ambiente campus con alberi e laboratori. Bus AMTAB 21 e 22 sono le navette ufficiose degli studenti.'
    },
    {
        id: 'uniba_campus_matematica',
        nome: 'Biblioteca Matematica / Informatica',
        edificio: 'Dipartimento di Matematica',
        piano: 2,
        postiDisponibili: 100,
        postiTotali: 120,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['Prese Elettriche', 'Concentrazione'],
        latitude: 41.1095,
        longitude: 16.8795,
        indirizzo: 'Via Edoardo Orabona 4, Bari',
        university: 'UniBa',
        tags: ['Polo Campus (Orabona)', 'Matematica/Informatica', 'AMTAB 21/22'],
        notes: 'Covo dei matematici e informatici. Bus AMTAB 21 e 22 per arrivarci dal centro.'
    },
    // ============================================================
    // BARI - POGGIOFRANCO (Economia)
    // ============================================================
    {
        id: 'uniba_economia_rosalba',
        nome: 'Biblioteca di Economia e Finanza',
        edificio: 'Dipartimento di Economia',
        piano: 0,
        postiDisponibili: 220,
        postiTotali: 260,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Aria Condizionata', 'Moderno', 'Parcheggio'],
        latitude: 41.0960,
        longitude: 16.8620,
        indirizzo: 'Largo Abbazia Santa Scolastica 53, Bari',
        university: 'UniBa',
        tags: ['Polo Poggiofranco', 'Economia'],
        notes: 'Zona verde, meno caotica del centro. Studenti di Economia vivono un\'altra Bari rispetto a quelli di Giurisprudenza al Centro.'
    },
    // ============================================================
    // BARI - POLICLINICO (Medicina)
    // ============================================================
    {
        id: 'uniba_medicina_policlinico',
        nome: 'Aule Studio Polo Medico',
        edificio: 'Policlinico di Bari',
        piano: 0,
        postiDisponibili: 180,
        postiTotali: 220,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['Clima Ospedaliero', 'Vicino Reparti'],
        latitude: 41.1050,
        longitude: 16.8580,
        indirizzo: 'Piazza Giulio Cesare 11, Bari',
        university: 'UniBa',
        tags: ['Polo Policlinico', 'Medicina', 'Metro Linea 1', 'FSE Pendolari'],
        notes: 'Dentro il Policlinico. Labirintico ma essenziale per medicina. Metro L1 fermata diretta. Pendolari dai paesi limitrofi: FSE offre fermata comodissima.'
    },
    // ============================================================
    // VALENZANO (Medicina Veterinaria)
    // ============================================================
    {
        id: 'uniba_veterinaria_valenzano',
        nome: 'Polo Medicina Veterinaria',
        edificio: 'Campus Valenzano',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 120,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['Cliniche', 'Verde', 'Mensa'],
        latitude: 41.0243,
        longitude: 16.8999,
        indirizzo: 'Strada Provinciale per Casamassima Km 3, Valenzano (BA)',
        university: 'UniBa',
        tags: ['Polo Valenzano', 'Veterinaria', 'Auto Consigliata'],
        notes: 'Fuori Bari, immerso nel verde. Auto o bus extraurbano consigliati.'
    },
    // ============================================================
    // TARANTO (Polo Jonico)
    // ============================================================
    {
        id: 'uniba_taranto_rossarol',
        nome: 'Sede Ex Caserma Rossarol (Taranto)',
        edificio: 'Città Vecchia',
        piano: 1,
        postiDisponibili: 110,
        postiTotali: 140,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Chiostro Monumentale'],
        latitude: 40.4760,
        longitude: 17.2280,
        indirizzo: 'Via Duomo 259, Taranto',
        university: 'UniBa - Taranto',
        tags: ['Polo Taranto', 'Chiostro Monumentale', 'Vista Mar Ionio'],
        vibe: 'Studio nell\'isola',
        notes: 'Segreto meglio custodito dell\'università italiana. Studiare nei chiostri dell\'ex convento con il Mar Ionio da due lati. L\'isola della Città Vecchia sta vivendo una forte riqualificazione. Arrivo a piedi o con mezzi pubblici consigliato: parcheggia nella città nuova.'
    },
    {
        id: 'uniba_brindisi_valesio',
        nome: 'Polo Universitario di Brindisi',
        edificio: 'Ex Ospedale Di Summa',
        piano: 0,
        postiDisponibili: 70,
        postiTotali: 90,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Parcheggio', 'Aule Informatiche'],
        latitude: 40.6350,
        longitude: 17.9350,
        indirizzo: 'Piazza Di Summa, Brindisi',
        university: 'UniBa - Brindisi',
        tags: ['Polo Brindisi'],
        notes: 'Sede distaccata Brindisi. Snodo ferroviario comodo.'
    },
    // ============================================================
    // BARI - SPAZI CIVICI
    // ============================================================
    {
        id: 'uniba_fuori_binaria',
        nome: 'Spazio Giovani "Fuori Binaria"',
        edificio: 'Spazio Riqualificato',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 50,
        orarioApertura: '09:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Prese', 'Coworking'],
        latitude: 41.1175,
        longitude: 16.8670,
        indirizzo: 'Via Indipendenza 13, 70121 Bari',
        university: 'UniBa',
        occupancy_rate: 'Medio',
        notes: 'Spazio riqualificato vicino alla Stazione Centrale. Offre un\'aula studio sganciata dalle dinamiche d\'ateneo. Ambiente giovane e inclusivo.',
        tags: ['Civico', 'Coworking', 'Centro'],
    }
];

export const getDirectionsUniBa = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const isBariCentro = room.indirizzo.includes('Umberto') || room.indirizzo.includes('Battisti') || room.indirizzo.includes('Torretta');
    const isBariCampus = room.indirizzo.includes('Orabona') || room.indirizzo.includes('Amendola');
    const isPoggiofranco = room.indirizzo.includes('Scolastica');
    const isPoliclinico = room.indirizzo.includes('Giulio Cesare');
    const isValenzano = room.indirizzo.includes('Valenzano');
    const isTaranto = room.indirizzo.includes('Taranto');
    const isBrindisi = room.indirizzo.includes('Brindisi');

    // BARI CENTRO (Palazzo Ateneo e Città Vecchia)
    if (isBariCentro) {
        directions.push({
            luogo: 'Stazione Bari Centrale',
            descrizione: `Per il centro storico (Palazzo Ateneo, Giurisprudenza, Lingue Santa Teresa):
1. **A piedi**: 3-8 minuti (Piazza Aldo Moro → Piazza Umberto I o Città Vecchia).
2. **Bus AMTAB**: Linee centro (fermata "Ateneo" o "Città Vecchia").
**NOTE**: Tutto pedonale e ZTL. Ideale per chi arriva in treno.`,
            mezziPubblici: ['A piedi', 'Bus AMTAB'],
            tempoStimato: '3-8 min a piedi',
            note: 'Centro compatto e affascinante.'
        });
    }
    // BARI CAMPUS (Via Orabona)
    else if (isBariCampus) {
        directions.push({
            luogo: 'Stazione Bari Centrale',
            descrizione: `Per Campus Universitario (Via Orabona / Amendola):
1. **Bus AMTAB**: Linea 21 o 22 (direzione San Pasquale) – le "navette ufficiose" degli studenti.
2. **Metro + Bus**: Linea 1 fermata "Bari Centrale" + bus.
3. **A piedi**: 20-25 min lungo Via Re David.
**NOTE**: Zona universitaria con verde e laboratori.`,
            mezziPubblici: ['Bus AMTAB 21', 'Bus AMTAB 22'],
            tempoStimato: '15-25 min',
            note: 'Bus AMTAB 21 e 22: frequenti dal centro, sono le navette ufficiose degli studenti.'
        });
    }
    // POGGIOFRANCO (Economia)
    else if (isPoggiofranco) {
        directions.push({
            luogo: 'Stazione Bari Centrale',
            descrizione: `Per Economia (Largo Santa Scolastica):
1. **Bus AMTAB**: Linea 6 o 27.
2. **In auto**: Parcheggio facile zona Poggiofranco.
**NOTE**: Zona residenziale verde, meno caotica del centro.`,
            mezziPubblici: ['Bus AMTAB 6', 'Bus AMTAB 27'],
            tempoStimato: '20-25 min',
            note: 'Parcheggio comodo. I ragazzi di Economia vivono un\'altra Bari.'
        });
    }
    // POLICLINICO
    else if (isPoliclinico) {
        directions.push({
            luogo: 'Stazione Bari Centrale',
            descrizione: `Per Policlinico (Piazza Giulio Cesare):
1. **Metro Linea 1** fermata "Policlinico" o "Carducci-Molinette".
2. **Bus AMTAB**: Linee dirette ospedale.
3. **FSE (Ferrovie Sud Est)**: Fermata comodissima per pendolari dai paesi limitrofi.
**NOTE**: Complesso enorme, segui indicazioni "Polo Didattico".`,
            mezziPubblici: ['Metro Linea 1', 'FSE'],
            tempoStimato: '10-15 min',
            note: 'Metro diretta e veloce. Per pendolari: FSE ha fermata dedicata.'
        });
    }
    // VALENZANO (Veterinaria)
    else if (isValenzano) {
        directions.push({
            luogo: 'Bari Città',
            descrizione: `Per Campus Veterinaria Valenzano:
1. **Bus Extraurbano Cotrap / FSE**: Linee per Casamassima/Valenzano.
2. **In auto**: SS100 Bari-Taranto, uscita Valenzano-Capurso.
**NOTE**: Polo isolato, auto consigliata.`,
            mezziPubblici: ['Bus Extraurbano'],
            tempoStimato: '20-30 min',
            note: 'Verde e cliniche. Auto fortemente consigliata.'
        });
    }
    // TARANTO
    else if (isTaranto) {
        directions.push({
            luogo: 'Stazione Taranto',
            descrizione: `Per Polo Taranto (Rossarol):
1. **Bus Kyma Mobilità**: Linee per Città Vecchia.
2. **A piedi centro**: 15-20 min dal centro moderno, oltre il Ponte Girevole.
**NOTE**: Città Vecchia affascinante ma labirintica. Parcheggia nella città nuova e prosegui a piedi o coi mezzi. La viabilità nell'isola è complessa.`,
            mezziPubblici: ['Bus Kyma Mobilità'],
            tempoStimato: '15-20 min',
            note: 'Arrivo a piedi o con mezzi pubblici consigliato. Parcheggia nella città nuova.'
        });
    }
    // BRINDISI
    else if (isBrindisi) {
        directions.push({
            luogo: 'Stazione Brindisi',
            descrizione: `Per Polo Brindisi (Ex Ospedale Di Summa):
1. **Bus STP**: Linee per centro/ospedale.
**NOTE**: Sede pratica e funzionale. Snodo ferroviario comodo.`,
            mezziPubblici: ['Bus STP'],
            tempoStimato: '15 min',
            note: 'Snodo ferroviario.'
        });
    }

    return directions;
};
