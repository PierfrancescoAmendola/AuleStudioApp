import { StudyRoom, DirectionsFromLocation } from '../../types';

export const unimibRooms: StudyRoom[] = [
    // ============================================================
    // CAMPUS MILANO - AREA CENTRALE (Piazza dell'Ateneo Nuovo)
    // ============================================================
    {
        id: 'unimib_biblio_centrale',
        nome: 'Biblioteca di Ateneo (Sede Centrale)',
        edificio: 'Edificio U6 (Agorà) - 2° Piano',
        piano: 2,
        postiDisponibili: 466,
        postiTotali: 500,
        orarioApertura: '08:30',
        orarioChiusura: '22:00',
        servizi: ['WiFi Eduroam', 'Prenotazione Affluences', 'Prese ovunque', 'Aperta fino alle 22'],
        latitude: 45.5180,
        longitude: 9.2135,
        indirizzo: 'Piazza dell\'Ateneo Nuovo 1, Milano',
        university: 'Unimib',
        occupancy_rate: 'Altissimo',
        notes: 'Il cuore pulsante dell\'ateneo. Aperta fino a tardi e il sabato mattina. Prenotazione obbligatoria con app "Affluences".'
    },
    {
        id: 'unimib_u6_study',
        nome: 'Spazi Studio U6 (Piano Terra/-1)',
        edificio: 'Edificio U6 (Agorà)',
        piano: 0,
        postiDisponibili: 200,
        postiTotali: 300,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Mensa', 'Bar', 'Rumoroso'],
        latitude: 45.5180,
        longitude: 9.2135,
        indirizzo: 'Piazza dell\'Ateneo Nuovo 1, Milano',
        university: 'Unimib',
        notes: 'Tavoli liberi negli spazi comuni e al piano interrato vicino alla mensa. Ottimo per lavori di gruppo.'
    },
    {
        id: 'unimib_u7_civitas',
        nome: 'Aule Studio Edificio U7 (Civitas)',
        edificio: 'Edificio U7 (Civitas)',
        piano: 2, // e vari piani
        postiDisponibili: 150,
        postiTotali: 200,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['WiFi', 'Terrazze', 'Tunnel collegamento U6'],
        latitude: 45.5175,
        longitude: 9.2120,
        indirizzo: 'Via Bicocca degli Arcimboldi 8, Milano',
        university: 'Unimib',
        notes: 'Edificio collegato all\'U6 da un tunnel. Meno affollato della biblioteca centrale.'
    },
    {
        id: 'unimib_u12_auditorium',
        nome: 'Aula Studio U12 (Auditorium)',
        edificio: 'Edificio U12',
        piano: 1,
        postiDisponibili: 100,
        postiTotali: 150,
        orarioApertura: '09:00',
        orarioChiusura: '21:00',
        servizi: ['WiFi', 'Mensa Serale', 'Palestra', 'Residenza'],
        latitude: 45.5190,
        longitude: 9.2150,
        indirizzo: 'Via Vizzola 5, Milano',
        university: 'Unimib',
        occupancy_rate: 'Alto la sera',
        notes: 'Punto di riferimento per lo studio serale e la cena (mensa aperta la sera). Frequentato dai residenti del campus.'
    },

    // ============================================================
    // CAMPUS MILANO - AREA SCIENZE (Piazza della Scienza)
    // ============================================================
    {
        id: 'unimib_scienze_u2',
        nome: 'Spazi Studio Edificio U2 (Quantum)',
        edificio: 'Edificio U2',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Silenzioso', 'Vicino Stazione'],
        latitude: 45.5135,
        longitude: 9.2115,
        indirizzo: 'Piazza della Scienza 3, Milano',
        university: 'Unimib',
        notes: 'Gli studenti di Fisica/Matematica studiano qui. Proprio di fronte alla stazione Greco Pirelli.'
    },
    {
        id: 'unimib_u4_tellus',
        nome: 'Aula Studio U4 (Tellus)',
        edificio: 'Edificio U4 (Geologia)',
        piano: 1,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Tranquillo'],
        latitude: 45.5140,
        longitude: 9.2110,
        indirizzo: 'Piazza della Scienza 4, Milano',
        university: 'Unimib',
        notes: 'Meno conosciuta, spesso si trova posto.'
    },

    // ============================================================
    // POLO DI MONZA (Medicina - Ospedale San Gerardo)
    // ============================================================
    {
        id: 'unimib_monza_biblio',
        nome: 'Biblioteca di Medicina (Sede Monza)',
        edificio: 'Edificio U8 (Asclepio)',
        piano: 0,
        postiDisponibili: 114,
        postiTotali: 120,
        orarioApertura: '08:30',
        orarioChiusura: '22:00',
        servizi: ['WiFi', 'Ambiente Medico', 'Prenotazione Affluences', 'Microonde'],
        latitude: 45.5980,
        longitude: 9.2680,
        indirizzo: 'Via Cadore 48, Monza (MB)',
        university: 'Unimib',
        occupancy_rate: 'Alto',
        notes: 'Biblioteca di riferimento per Medicina. Orari estesi fino alle 22:00 (verificare periodi esami).'
    },
    {
        id: 'unimib_monza_ospedale',
        nome: 'Aula Studio Ospedale (Settore A)',
        edificio: 'Ospedale San Gerardo (Nuovo)',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 50,
        orarioApertura: '08:30',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Dentro l\'ospedale', 'Silenzio'],
        latitude: 45.5990,
        longitude: 9.2690,
        indirizzo: 'Via Pergolesi 33, Monza (Settore A)',
        university: 'Unimib',
        notes: 'Nuova aula studio inaugurata recentemente all\'interno dell\'ospedale, adiacente agli ambulatori. Accesso libero con prenotazione Affluences.'
    },
    {
        id: 'unimib_monza_u18',
        nome: 'Spazi Studio U18',
        edificio: 'Edificio U18 (Ygeia)',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi', 'Bar interno', 'Moderno'],
        latitude: 45.6020,
        longitude: 9.2700,
        indirizzo: 'Via Podgora, Vedano al Lambro (MB)',
        university: 'Unimib',
        notes: 'Sede dei corsi di laurea triennali e infermieristica. Edificio moderno con spazi comuni.'
    },

    // ============================================================
    // CAMPUS MILANO - EDIFICI AGGIUNTIVI
    // ============================================================
    {
        id: 'unimib_u1_atlas',
        nome: 'Spazi Studio U1 (Atlas)',
        edificio: 'Edificio U1 (Atlas)',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 150,
        orarioApertura: '07:30',
        orarioChiusura: '20:30',
        servizi: ['WiFi', 'Fisica/Matematica', 'Vicino Greco Pirelli'],
        latitude: 45.5135,
        longitude: 9.2115,
        indirizzo: 'Piazza della Scienza 1, Milano',
        university: 'Unimib',
        notes: 'Edificio di Fisica e Matematica. 13 aule, 1126 posti. Proprio di fronte alla stazione Greco Pirelli!'
    },
    {
        id: 'unimib_u3_bios',
        nome: 'Spazi Studio U3 (Bios)',
        edificio: 'Edificio U3 (Bios)',
        piano: 0,
        postiDisponibili: 120,
        postiTotali: 180,
        orarioApertura: '07:30',
        orarioChiusura: '20:30',
        servizi: ['WiFi', 'Biotecnologie', 'Laboratori'],
        latitude: 45.5138,
        longitude: 9.2110,
        indirizzo: 'Piazza della Scienza 2, Milano',
        university: 'Unimib',
        notes: 'Biotecnologie e Scienze Biologiche. 11 aule, 1531 posti totali.'
    },
    {
        id: 'unimib_u5_ratio',
        nome: 'Spazi Studio U5 (Ratio)',
        edificio: 'Edificio U5 (Ratio)',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['WiFi', 'Informatica', 'Laboratori PC'],
        latitude: 45.5160,
        longitude: 9.2130,
        indirizzo: 'Via Roberto Cozzi 55, Milano',
        university: 'Unimib',
        notes: 'Dipartimento di Informatica. Spazi studio nei corridoi e aule libere.'
    },
    {
        id: 'unimib_u9_koine',
        nome: 'Aule Studio U9 (Koinè)',
        edificio: 'Edificio U9 (Koinè)',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 150,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Aula Magna', 'Ristrutturato'],
        latitude: 45.5200,
        longitude: 9.2155,
        indirizzo: 'Viale dell\'Innovazione 10, Milano',
        university: 'Unimib',
        notes: 'Edificio ristrutturato con nuove aule didattiche. Spazi studio disponibili.'
    },
    {
        id: 'unimib_u14_abacus',
        nome: 'Sala Studio U14 (Abacus)',
        edificio: 'Edificio U14 (Abacus) - Piano -1',
        piano: -1,
        postiDisponibili: 32,
        postiTotali: 32,
        orarioApertura: '08:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Informatica', 'Silenzioso'],
        latitude: 45.5155,
        longitude: 9.2085,
        indirizzo: 'Viale Sarca 336, Milano',
        university: 'Unimib',
        notes: 'Sala studio autonoma al piano -1. A volte riservata a laureandi Informatica.'
    },
    {
        id: 'unimib_u16_maieutica',
        nome: 'Spazi Studio U16 (Maieutica)',
        edificio: 'Edificio U16 (Maieutica)',
        piano: 0,
        postiDisponibili: 150,
        postiTotali: 200,
        orarioApertura: '07:30',
        orarioChiusura: '20:30',
        servizi: ['WiFi', 'Psicologia/Scienze Formazione', 'Moderno'],
        latitude: 45.5165,
        longitude: 9.2070,
        indirizzo: 'Via Thomas Mann 8, Milano',
        university: 'Unimib',
        notes: 'Scienze della Formazione e Psicologia. 9 aule, 825 posti. Raggiungibile da Metro Ponale.'
    },
    {
        id: 'unimib_carrel',
        nome: 'Carrel (Studio Individuale Prenotabile)',
        edificio: 'Edificio U6 (Agorà) - 2° Piano',
        piano: 2,
        postiDisponibili: 20,
        postiTotali: 20,
        orarioApertura: '09:00',
        orarioChiusura: '21:45',
        servizi: ['WiFi', 'Box Singolo', 'Silenzio Assoluto', 'Prenotazione Affluences'],
        latitude: 45.5180,
        longitude: 9.2135,
        indirizzo: 'Piazza dell\'Ateneo Nuovo 1, Milano',
        university: 'Unimib',
        notes: '20 box individuali prenotabili tramite Affluences. Ideali per tesi e studio concentrato.'
    },
    {
        id: 'unimib_biblio_scienze',
        nome: 'Biblioteca Sede Scienze',
        edificio: 'Edificio U2 (Quantum)',
        piano: 1,
        postiDisponibili: 100,
        postiTotali: 134,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Scienze', 'Consultazione', 'Silenzio'],
        latitude: 45.5135,
        longitude: 9.2115,
        indirizzo: 'Piazza della Scienza 3, Milano',
        university: 'Unimib',
        notes: 'Biblioteca dedicata alle discipline scientifiche. Più silenziosa della centrale.'
    }
];

export const getDirectionsUnimib = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const isMonza = room.indirizzo.includes('Monza') || room.indirizzo.includes('Cadore') || room.indirizzo.includes('Vedano') || room.indirizzo.includes('Pergolesi');
    const isPiazzaAteneo = room.indirizzo.includes('Ateneo Nuovo') || room.indirizzo.includes('Arcimboldi') || room.indirizzo.includes('Vizzola'); // U6, U7, U12
    const isPiazzaScienza = room.indirizzo.includes('Scienza'); // U1, U2, U3, U4
    const isU5Cozzi = room.indirizzo.includes('Cozzi'); // U5
    const isU9Innovazione = room.indirizzo.includes('Innovazione'); // U9
    const isU14Sarca = room.indirizzo.includes('Sarca'); // U14
    const isU16Mann = room.indirizzo.includes('Mann'); // U16

    // CAMPUS MILANO - PIAZZA ATENEO (U6, U7, U12)
    if (isPiazzaAteneo) {
        directions.push({
            luogo: 'Milano Centro / Stazione Centrale',
            descrizione: `Per Piazza dell'Ateneo Nuovo (U6, U7, U12):
1. **Metro M5 (Lilla)**: Scendi a **Bicocca**. Dall'uscita sono 5 min a piedi.
2. **Tram 7**: Da Zara (M3/M5) o Precotto (M1). Fermata "Arcimboldi Ateneo Nuovo" - davanti all'U6.
3. **Bus 87**: Da Stazione Centrale, ti lascia dentro il campus.
4. **Treno**: Stazione **Greco Pirelli** + 10 min a piedi (meglio per Piazza Scienza).`,
            mezziPubblici: ['Metro M5 (Bicocca)', 'Tram 7', 'Bus 87'],
            tempoStimato: '15-20 min da Centrale',
            note: 'L\'U6 (Agorà) è il cuore del campus con biblioteca, mensa e servizi.'
        });
    }

    // CAMPUS MILANO - PIAZZA SCIENZA (U1, U2, U3, U4)
    else if (isPiazzaScienza) {
        directions.push({
            luogo: 'Milano Centro / Stazione Centrale',
            descrizione: `Per Piazza della Scienza (U1, U2, U3, U4):
1. **Treno (OPZIONE MIGLIORE)**: Scendi a **Milano Greco Pirelli**. La stazione è LETTERALMENTE davanti agli edifici!
   - Linee S8, S9, S11, S13 da Garibaldi/Centrale.
2. **Metro M5 (Lilla)**: Scendi a **Bicocca** + 8-10 min a piedi verso est.
3. **Tram 7**: Fermata "Bicocca Università" + 5 min a piedi.`,
            mezziPubblici: ['Treno (Greco Pirelli)', 'Metro M5 (Bicocca)', 'Tram 7'],
            tempoStimato: '12-15 min da Centrale',
            note: 'Greco Pirelli è l\'hub fondamentale per i pendolari delle facoltà scientifiche.'
        });
    }

    // U5 RATIO (Via Cozzi - Informatica)
    else if (isU5Cozzi) {
        directions.push({
            luogo: 'Milano Centro',
            descrizione: `Per U5 Ratio - Informatica (Via Cozzi):
1. **Metro M5 (Lilla)**: Scendi a **Bicocca** + 5 min a piedi.
2. **Tram 7**: Fermata "Arcimboldi" + 3 min.
3. L'U5 è tra l'U6 e Piazza Scienza.`,
            mezziPubblici: ['Metro M5 (Bicocca)', 'Tram 7'],
            tempoStimato: '15 min da Centrale',
            note: 'Dipartimento di Informatica, Sistemistica e Comunicazione.'
        });
    }

    // U9 KOINÈ (Viale Innovazione)
    else if (isU9Innovazione) {
        directions.push({
            luogo: 'Milano Centro',
            descrizione: `Per U9 Koinè (Viale dell'Innovazione):
1. **Metro M5 (Lilla)**: Scendi a **Bicocca** + 8 min a piedi verso nord.
2. **Bus 87**: Da Centrale, fermata "Viale Innovazione".
3. L'edificio è nella parte nord del campus.`,
            mezziPubblici: ['Metro M5 (Bicocca)', 'Bus 87'],
            tempoStimato: '18 min da Centrale',
            note: 'Edificio ristrutturato con nuova aula magna.'
        });
    }

    // U14 ABACUS (Viale Sarca)
    else if (isU14Sarca) {
        directions.push({
            luogo: 'Milano Centro',
            descrizione: `Per U14 Abacus (Viale Sarca):
1. **Metro M5 (Lilla)**: Scendi a **Ponale** + 5 min a piedi.
2. **Tram 7**: Fermata "Sarca/Testi" + 5 min.
3. L'U14 è nella zona ovest del campus, vicino all'U16.`,
            mezziPubblici: ['Metro M5 (Ponale)', 'Tram 7'],
            tempoStimato: '18 min da Centrale',
            note: 'Sede di parte del Dipartimento di Informatica.'
        });
    }

    // U16 MAIEUTICA (Via Thomas Mann)
    else if (isU16Mann) {
        directions.push({
            luogo: 'Milano Centro',
            descrizione: `Per U16 Maieutica (Via Thomas Mann):
1. **Metro M5 (Lilla)**: Scendi a **Ponale** (la fermata più vicina!) + 3 min a piedi.
2. **Tram 7**: Fermata "Sarca/Ponale" + 5 min.
3. L'U16 è nella parte sud-ovest del campus.`,
            mezziPubblici: ['Metro M5 (Ponale)', 'Tram 7'],
            tempoStimato: '15 min da Centrale',
            note: 'Scienze della Formazione e Psicologia. Ponale è la fermata ideale!'
        });
    }

    // CAMPUS MONZA (Medicina)
    else if (isMonza) {
        directions.push({
            luogo: 'Stazione Monza / Milano',
            descrizione: `Per il Polo Biomedico di Monza (U8/U18/Ospedale):
1. **Treno**: Da Milano Centrale/Garibaldi, arriva a **Stazione di Monza** (15-20 min).
2. **Bus Z206**: Dalla stazione Monza, porta all'ospedale/università.
3. **Bus Z221**: Alternativa da Sesto S. Giovanni.
4. **Navetta Ateneo**: Gratuita per studenti, collega stazione ↔ U8/U18 (verifica orari sul sito).

**Da Milano Bicocca**:
- Bus 727 da Piazzale Sesto Marelli (M1).`,
            mezziPubblici: ['Treno + Bus Z206/Z221', 'Navetta Ateneo', 'Bus 727'],
            tempoStimato: '35-45 min da Milano Centro',
            note: 'L\'U8 (Asclepio) è in Via Cadore, dietro l\'Ospedale San Gerardo.'
        });
    }

    return directions;
};
