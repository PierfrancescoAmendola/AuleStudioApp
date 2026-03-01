import { StudyRoom, DirectionsFromLocation } from '../../types';

export const unigeRooms: StudyRoom[] = [
    // ============================================================
    // GENOVA - VIA BALBI (Storico / Principe)
    // 🏛️ Zona UNESCO - Stazione Principe a piedi
    // ============================================================
    {
        id: 'unige_balbi_bug',
        nome: 'Biblioteca Universitaria Genova (BUG)',
        edificio: 'Ex Hotel Colombia',
        piano: 0,
        postiDisponibili: 300,
        postiTotali: 350,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Monumentale', 'Silenzio', 'Liberty Style'],
        latitude: 44.4148,
        longitude: 8.9272,
        indirizzo: 'Via Balbi 40, Genova',
        university: 'UniGe',
        occupancy_rate: 'Alto',
        notes: '⭐ Biblioteca centrale storica in ex hotel Liberty. Via Balbi è Patrimonio UNESCO! Letteralmente di fronte Stazione Principe (2 min a piedi). Ambiente monumentale con soffitti affrescati.',
        tags: ['Biblioteca', 'WiFi', '🔇 Silenzio'],
    },
    {
        id: 'unige_giuri_cabella',
        nome: 'Sala Lettura "Cabella" Giurisprudenza',
        edificio: 'Via Balbi 5',
        piano: 1,
        postiDisponibili: 100,
        postiTotali: 120,
        orarioApertura: '08:00',
        orarioChiusura: '19:00',
        servizi: ['Codici', 'Storica', 'Giurisprudenza'],
        latitude: 44.4152,
        longitude: 8.9265,
        indirizzo: 'Via Balbi 5, Genova',
        university: 'UniGe',
        notes: 'Ambiente classico Via Balbi per studenti Giuri. Palazzo barocco con aule affrescate. Stazione Principe a 3 min a piedi.',
        tags: ['Sala Lettura'],
    },
    // ============================================================
    // GENOVA - DARSENA / PORTO ANTICO (Economia)
    // 🌊 Vista mare - Vicino Acquario
    // ============================================================
    {
        id: 'unige_economia_darsena',
        nome: 'Biblioteca Economia',
        edificio: 'Facoltà Economia',
        piano: 2,
        postiDisponibili: 180,
        postiTotali: 200,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Vista Porto', 'Moderno', 'Luminoso'],
        latitude: 44.4115,
        longitude: 8.9255,
        indirizzo: 'Via Vivaldi 5, Darsena, Genova',
        university: 'UniGe',
        notes: '🌊 Affacciata sul Porto Antico! Vista incredibile su Acquario e mare. Ambiente moderno diverso dalle sedi storiche. Metro Darsena diretta o 10 min discesa a piedi da Principe.',
        tags: ['Biblioteca'],
    },
    // ============================================================
    // GENOVA - ALBERGO DEI POVERI (Scienze Politiche, Lingue)
    // ⛰️ ZONA ALTA - Salita ripida ma vista panoramica
    // ============================================================
    {
        id: 'unige_albergo_poveri',
        nome: 'Biblioteca "E. Luzzati" Albergo dei Poveri',
        edificio: 'Albergo dei Poveri',
        piano: 1,
        postiDisponibili: 150,
        postiTotali: 180,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['Storico', 'Cortili', 'Vista Panoramica'],
        latitude: 44.4190,
        longitude: 8.9285,
        indirizzo: 'Piazzale Brignole 2, Genova',
        university: 'UniGe',
        notes: '⛰️ ATTENZIONE: Edificio monumentale in ZONA ALTA con salita ripida! Non confondere Piazzale Brignole (qui, zona Circonvallazione a Monte) con Stazione Brignole (in basso). Usa Bus AMT 35/36. Vista panoramica mozzafiato sul porto.',
        tags: ['Biblioteca'],
    },
    // ============================================================
    // GENOVA - SARZANO (Architettura)
    // 🏰 Centro medievale - Metro diretta!
    // ============================================================
    {
        id: 'unige_architettura',
        nome: 'Biblioteca Architettura',
        edificio: 'Stradone Sant\'Agostino',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 120,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Chiostro', 'Disegno', 'Tavoli Grandi'],
        latitude: 44.4055,
        longitude: 8.9320,
        indirizzo: 'Stradone Sant\'Agostino 37, Genova',
        university: 'UniGe',
        notes: '🏰⭐ Nel cuore del centro storico medievale! VANTAGGIO ENORME: Metro Sarzano/Sant\'Agostino diretta (unica sede centro servita da metro). Chiostro interno atmosferico. Centro storico altrimenti labirintico.',
        tags: ['Biblioteca'],
    },
    // ============================================================
    // GENOVA - ALBARO (Ingegneria)
    // 🎨 Villa storica con affreschi '500!
    // ============================================================
    {
        id: 'unige_ingegneria_cambiaso',
        nome: 'Biblioteca Politecnica Ingegneria',
        edificio: 'Villa Cambiaso',
        piano: 1,
        postiDisponibili: 200,
        postiTotali: 220,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['Parco', 'Affreschi', 'Silenziosa', '🎨 Villa Storica'],
        latitude: 44.4045,
        longitude: 8.9590,
        indirizzo: 'Via Montallegro 1, Albaro, Genova',
        university: 'UniGe',
        occupancy_rate: 'Alto',
        notes: '🎨⭐ PROBABILMENTE LA SEDE DI INGEGNERIA PIÙ BELLA D\'ITALIA! Villa storica del \'500 con affreschi originali e parco. Studi tra soffitti decorati in quartiere chic Albaro. Bus 42/43 da Brignole. Ambiente unico ma un po\' isolato.',
        tags: ['Biblioteca', '🔇 Silenzio'],
    },
    // ============================================================
    // GENOVA - SAN MARTINO (Medicina / Scienze)
    // 🏥 Dentro ospedale - Labirintico!
    // ============================================================
    {
        id: 'unige_medicina_rosmarino',
        nome: 'Biblioteca Biomedica San Martino',
        edificio: 'Polo San Martino',
        piano: 0,
        postiDisponibili: 250,
        postiTotali: 300,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['AC', 'Mensa', 'H20 (fino 20:00)', 'Bar Ospedale'],
        latitude: 44.3985,
        longitude: 8.9690,
        indirizzo: 'Largo Rosanna Benzi 10, Genova',
        university: 'UniGe',
        notes: '🏥 Dentro complesso ospedaliero San Martino. ATTENZIONE: Labirintico! Segui indicazioni "Polo Didattico Medicina". Mensa e bar ospedale. Bus 18/48 da Brignole. Organizzati per orientarti alla prima visita.',
        tags: ['Biblioteca', 'Campus', 'Medicina', '❄️ Climatizzato', '☕ Ristoro'],
    },
    {
        id: 'unige_scienze_valletta',
        nome: 'Biblioteca Scienze MFN',
        edificio: 'Valletta Puggia',
        piano: 0,
        postiDisponibili: 150,
        postiTotali: 180,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Scienze Naturali', 'Parcheggio'],
        latitude: 44.4020,
        longitude: 8.9520,
        indirizzo: 'Corso Europa 26, Genova',
        university: 'UniGe',
        notes: 'Vicino polo Ingegneria Albaro (10 min a piedi). Zona est Genova, meno monumentale ma funzionale. Bus 42/43 da Brignole.',
        tags: ['Biblioteca', '🅿️ Parcheggio'],
    },
    // ============================================================
    // GENOVA - BIBLIOTECA CIVICA BERIO
    // 🎭 Hub sociale - Centro assoluto!
    // ============================================================
    {
        id: 'ge_berio',
        nome: 'Biblioteca Civica Berio',
        edificio: 'Via del Seminario',
        piano: 0,
        postiDisponibili: 350,
        postiTotali: 400,
        orarioApertura: '08:00',
        orarioChiusura: '19:00',
        servizi: ['Socialità', 'Chiostro', 'WiFi', '🎭 Hub Multifacoltà'],
        latitude: 44.4065,
        longitude: 8.9385,
        indirizzo: 'Via del Seminario 16, Genova',
        university: 'UniGe',
        occupancy_rate: 'Altissimo',
        notes: '🎭⭐ IL PUNTO D\'INCONTRO! Civica principale a 5 min da Piazza De Ferrari (centro assoluto). Chiostro interno oasi di pace. MEGLIO per socialità e studio interdisciplinare - qui trovi studenti di TUTTE le facoltà. FILA SPESSO in sessione - arriva presto!',
        tags: ['Biblioteca', 'WiFi', '❄️ Climatizzato'],
    },
    // ============================================================
    // SPAZI COMUNALI E ALiSEO
    // ============================================================
    {
        id: 'unige_spazio_circuito',
        nome: 'Spazio Circuito (Aula Studio Comunale)',
        edificio: 'Spazio Circuito',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 60,
        orarioApertura: '09:00',
        orarioChiusura: '21:00',
        servizi: ['WiFi Gratuito', 'Prese', 'Booksharing'],
        latitude: 44.4070,
        longitude: 8.9345,
        indirizzo: 'Salita Santa Caterina 48r, 16123 Genova',
        university: 'UniGe',
        occupancy_rate: 'Medio',
        notes: 'Nuova aula studio gratuita con servizio di booksharing. Aperta 9-21. Ambiente informale e accogliente.',
        tags: ['Comunale', 'WiFi', 'Centro'],
    },
    {
        id: 'unige_aliseo_gastaldi',
        nome: 'Aula Studio ALiSEO Gastaldi',
        edificio: 'Casa dello Studente Gastaldi',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 80,
        orarioApertura: '08:00',
        orarioChiusura: '22:00',
        servizi: ['WiFi', 'Prese', 'Aperta Festivi'],
        latitude: 44.4025,
        longitude: 8.9560,
        indirizzo: 'Corso Gastaldi 25, 16131 Genova',
        university: 'UniGe',
        occupancy_rate: 'Alto',
        extendedHours: true,
        notes: 'Gestita da ALiSEO Liguria. Aperta tutti i giorni 8:00-22:00, inclusi festivi. Fondamentale per lo studio serale.',
        tags: ['ALiSEO', 'Serale', 'Festivi'],
    },
    {
        id: 'unige_aliseo_asiago',
        nome: 'Aula Studio ALiSEO Asiago',
        edificio: 'Casa dello Studente Asiago',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 60,
        orarioApertura: '08:00',
        orarioChiusura: '22:00',
        servizi: ['WiFi', 'Prese', 'Aperta Festivi'],
        latitude: 44.4140,
        longitude: 8.9290,
        indirizzo: 'Via Asiago 2, 16132 Genova',
        university: 'UniGe',
        occupancy_rate: 'Medio',
        extendedHours: true,
        notes: 'Gestita da ALiSEO Liguria. Aperta tutti i giorni 8:00-22:00.',
        tags: ['ALiSEO', 'Serale', 'Festivi'],
    },
];

export const getDirectionsUniGe = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const isBalbiPrincipe = room.indirizzo.includes('Balbi') || room.indirizzo.includes('Darsena') || room.indirizzo.includes('Vivaldi');
    const isAlbaroSanMartino = room.indirizzo.includes('Albaro') || room.indirizzo.includes('Montallegro') || room.indirizzo.includes('Benzi') || room.indirizzo.includes('Europa');
    const isSarzano = room.indirizzo.includes('Agostino');
    const isAlbergoPoveri = room.indirizzo.includes('Piazzale Brignole');
    const isBerio = room.indirizzo.includes('Seminario');

    // VIA BALBI / DARSENA (Principe)
    if (isBalbiPrincipe) {
        directions.push({
            luogo: 'Stazione Genova Principe / Altre Città',
            descrizione: `🏛️ VIA BALBI & DARSENA: ZONA PRINCIPE (UNESCO)

⚠️ SCELTA STAZIONE CRITICA: Genova ha 2 stazioni! Se arrivi da fuori, scendi a PRINCIPE!

Per Via Balbi / Darsena:

1. 🚶 A PIEDI DA STAZIONE PRINCIPE (CONSIGLIATO):
   - Via Balbi: 2-3 min (letteralmente davanti alla stazione, scendi e svolta destra)
   - Darsena/Economia: 10 min discesa verso porto (Via Gramsci → Porto Antico)
   - Via Balbi è strada UNESCO Patrimonio Mondiale!

2. 🚇 METRO AMT:
   - Da Brignole → Principe (5 min, 4 fermate)
   - Per Darsena: Principe → Darsena (1 fermata, 2 min)

3. 🚌 BUS AMT:
   - Linee 1, 18, 20 collegano Principe-Brignole
   - Per Darsena: 18, 20 verso Porto Antico

⚠️ ZTL PARZIALE: Centro storico limitato, meglio mezzi pubblici.

INSIDER TIP: Via Balbi è una delle vie più belle d'Italia (Palazzi dei Rolli). Studiare qui è studiare in palazzi barocchi UNESCO!`,
            mezziPubblici: ['🚶 A piedi (migliore da Principe)', '🚇 Metro AMT', '🚌 Bus AMT 1, 18, 20'],
            tempoStimato: '2-10 min da Principe',
            note: '🏛️ Zona UNESCO. Principe è la stazione giusta!'
        });
    }
    // ALBARO / SAN MARTINO (Levante)
    else if (isAlbaroSanMartino) {
        directions.push({
            luogo: 'Stazione Genova Brignole / Altre Città',
            descrizione: `🎨 ALBARO & SAN MARTINO: ZONA EST - SCENDI A BRIGNOLE!

⚠️ SCELTA STAZIONE CRITICA: Per Ingegneria/Medicina DEVI scendere a BRIGNOLE (non Principe)!

Per Albaro (Ingegneria Villa Cambiaso) / San Martino (Medicina):

1. **🚌 BUS AMT DA BRIGNOLE (FONDAMENTALE)**:
   - Linea 42/43: Per Albaro/Ingegneria (Corso Buenos Aires → Albaro)
   - Linea 18/48: Per San Martino Ospedale/Medicina
   - Frequenza: ogni 10-15 min
   - Tempo: 15-20 min

2. 🚇 ALTERNATIVA METRO:
   - Brignole → De Ferrari (centro) → poi bus specifico
   - Più lento ma sicuro se non conosci le fermate

3. 🚗 IN AUTO:
   - Corso Buenos Aires → Via Albaro (Ingegneria)
   - Parcheggio limitato (meglio bus)

⚠️ SAN MARTINO LABIRINTICO: 
- Il Polo Ospedaliero è ENORME e confusionario
- Alla prima visita segui cartelli "POLO DIDATTICO MEDICINA" o "BIBLIOTECA BIOMEDICA"
- Chiedi indicazioni al primo giro, non è intuitivo!

🎨 VILLA CAMBIASO (Ingegneria): Studi tra affreschi del '500 in un parco - probabilmente la sede di Ingegneria più bella d'Italia!`,
            mezziPubblici: ['🚌 Bus AMT 42, 43 (Albaro)', '🚌 Bus AMT 18, 48 (San Martino)'],
            tempoStimato: '15-25 min da Brignole',
            note: '⚠️ Brignole è la stazione giusta! San Martino labirintico.'
        });
    }
    // SARZANO (Architettura)
    else if (isSarzano) {
        directions.push({
            luogo: 'Genova Centro / Stazioni',
            descrizione: `🏰 ARCHITETTURA SARZANO: CENTRO MEDIEVALE CON METRO!

⭐ VANTAGGIO ENORME: Unica sede nel centro storico servita da METRO diretta!

Per Stradone Sant'Agostino (Architettura):

1. 🚇 METRO AMT - FERMATA SARZANO/SANT'AGOSTINO (MIGLIORE):
   - Da Principe: Metro Sarzano (4 fermate, 8 min)
   - Da Brignole: Metro cambio De Ferrari → Sarzano (10 min totale)
   - ⚠️ Ascensori profondi: La metro scende nel cuore della collina!

2. 🚶 A PIEDI DAL CENTRO:
   - Da De Ferrari: 10-15 min attraverso caruggi (vicoli) medievali
   - Esperienza autentica ma labirintico per chi non conosce

3. 🚌 BUS AMT:
   - Linee 20, 35 passano vicino
   - Metro più comoda

🏰 CONTESTO: Sei nel CENTRO STORICO MEDIEVALE più grande d'Europa! I "caruggi" (vicoli stretti) sono patrimonio ma confusi. La metro Sarzano è il tuo salvavita logistico.

CHIOSTRO INTERNO: La sede ha un chiostro bellissimo - pausa studio d'autore!`,
            mezziPubblici: ['🚇 Metro AMT Sarzano (CONSIGLIATA)', '🚶 A piedi centro', '🚌 Bus AMT 20, 35'],
            tempoStimato: '8-15 min metro dalle stazioni',
            note: '🏰 Metro diretta = grande vantaggio nel labirinto medievale!'
        });
    }
    // ALBERGO DEI POVERI
    else if (isAlbergoPoveri) {
        directions.push({
            luogo: 'Stazione Genova Principe',
            descrizione: `⛰️ ALBERGO DEI POVERI: ZONA ALTA - ATTENZIONE AL DISLIVELLO!

⚠️ IMPORTANTE: NON CONFONDERE!
- Piazzale Brignole (QUI - zona Circonvallazione a Monte, ALTA) ≠ Stazione Brignole (in basso, zona mare)
- Sulla mappa 2D sembrano vicine ma ci sono 100 METRI DI DISLIVELLO!

Per Albergo dei Poveri (Scienze Politiche/Lingue):

1. 🚌 BUS AMT 35/36 (CONSIGLIATO):
   - Da Principe: Linea 35 o 36 direzione Circonvallazione a Monte
   - Fermata: "Albergo dei Poveri" o "Piazzale Brignole"
   - Frequenza: ogni 12-15 min
   - Salita ripida ma il bus ci arriva diretto!

2. 🚡 FUNICOLARE ZECCA-RIGHI (ALTERNATIVA):
   - Da Largo Zecca (centro) prendi funicolare verso Righi
   - Poi bus locale o 10 min a piedi
   - Esperienza suggestiva ma meno diretta

3. 🚶 A PIEDI:
   - Solo sportivi: Salita ripida 20-30 min da Principe
   - Non consigliato se hai zaino pesante!

⛰️ COMPENSAZIONE: Vista panoramica MOZZAFIATO sul porto di Genova!

INSIDER TIP: Edificio monumentale imponente (uno dei più grandi d'Europa nel '600). Studenti Lingue/PoliSci lo chiamano "il Castello".`,
            mezziPubblici: ['🚌 Bus AMT 35, 36 (FONDAMENTALE)', '🚡 Funicolare Zecca-Righi'],
            tempoStimato: '10-15 min bus da Principe',
            note: '⛰️ Zona ALTA! Non è vicino Stazione Brignole (100m dislivello).'
        });
    }
    // BERIO CIVICA
    else if (isBerio) {
        directions.push({
            luogo: 'Piazza De Ferrari / Stazioni',
            descrizione: `🎭 BERIO: IL CUORE SOCIALE - CENTRO ASSOLUTO!

⭐ LA BIBLIOTECA DOVE SI INCONTRANO TUTTE LE FACOLTÀ!

Per Berio (Via del Seminario):

1. 🚶 DA PIAZZA DE FERRARI (CENTRO):
   - 5 min a piedi (dietro Teatro Carlo Felice)
   - Percorso: De Ferrari → Via XXV Aprile → Via del Seminario
   - Centro pedonale

2. 🚇 METRO DE FERRARI:
   - Da Principe: 6 min (5 fermate)
   - Da Brignole: 4 min (3 fermate)
   - Poi 5 min a piedi

3. 🚌 BUS AMT:
   - Tutte le linee principali passano da De Ferrari
   - Linee 18, 20, 35, 36, 40 e molte altre

🎭 CHIOSTRO & SOCIALITÀ:
- Chiostro interno bellissimo - oasi di pace in pieno centro
- Vicino a Galleria Colombo (tunnel pedonale)
- Migliore per incontrare studenti di facoltà diverse

⚠️ FILA IN SESSIONE:
- Biblioteca civica più popolare di Genova
- Periodo esami: arriva entro le 8:30 o trova già fila
- Alternativa: Sedi universitarie specifiche meno affollate

INSIDER TIP: Via del Seminario è tranquilla rispetto al caos di De Ferrari. La Berio è il "salotto buono" dello studio genovese.`,
            mezziPubblici: ['🚶 A piedi da De Ferrari (5 min)', '🚇 Metro De Ferrari', '🚌 Bus AMT (tutte le linee)'],
            tempoStimato: '5 min da De Ferrari / 10-15 min dalle stazioni',
            note: '🎭 Hub multifacoltà! Fila spesso - arriva presto.'
        });
    }

    // Info generali SEMPRE (Genova = città verticale!)
    directions.push({
        luogo: '🌍 INFO GENERALI UNIGE - LA CITTÀ VERTICALE',
        descrizione: `⚠️ GENOVA È DIVERSA: Università Verticale & Diffusa!

PRINCIPI FONDAMENTALI:

1. 🚉 DUE STAZIONI = DUE GENOVA:
   - PRINCIPE: Via Balbi, Economia Darsena, Giurisprudenza, Albergo Poveri
   - BRIGNOLE: Ingegneria Albaro, Medicina San Martino, Scienze
   - Sbagliare stazione = perdere 30 minuti!

2. ⛰️ GENOVA SI MUOVE IN VERTICALE:
   - Non fidarti della mappa 2D: ci sono dislivelli enormi!
   - Usa bus, metro, funicolari, ascensori pubblici AMT
   - Es: Albergo dei Poveri sembra vicino a Principe ma è 100m più in alto!

3. 🚇 TRASPORTI AMT:
   - Metro: Unica linea Brin-Brignole (sottoterra profonda con ascensori)
   - Bus: Frequenti ma traffico possibile nel centro storico
   - Funicolari: Zecca-Righi, Sant'Anna (per zone alte)
   - App AMT per orari real-time

4. 🏛️ UNIVERSITÀ DIFFUSA:
   - 5 poli principali sparsi in città
   - Centro storico: Labirintico ma affascinante (caruggi medievali)
   - Alcune sedi in palazzi UNESCO (Via Balbi)

5. 📱 PRENOTAZIONI:
   - Portale UniGe o App Affluences per sale studio principali
   - Berio civica: Sistema prenotazione separato (fila spesso)

INSIDER TIPS:
- Studia la metro: È il tuo asse portante Brignole-Principe-Darsena
- Prima volta a Genova? Usa Google Maps + AMT app contemporaneamente
- Palazzi storici = scale! Porta zaino leggero
- Berio = socialità, Sedi UniGe = concentrazione

Genova non è una città universitaria "compatta" come Bologna. È un'esperienza verticale tra mare e montagna. Sfrutta la bellezza ma organizzati logisticamente!`,
        mezziPubblici: ['🚇 Metro AMT', '🚌 Bus AMT', '🚡 Funicolari', '🚶 A piedi (centro)'],
        tempoStimato: 'Max 30 min tra poli principali',
        note: '⚠️ Città verticale! Studia le 2 stazioni e usa mezzi pubblici.'
    });

    return directions;
};
