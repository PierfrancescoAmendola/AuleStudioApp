import { StudyRoom, DirectionsFromLocation } from '../../types';

export const unitsRooms: StudyRoom[] = [
    // ============================================================
    // TRIESTE - CAMPUS PIAZZALE EUROPA (Colle Scoglietto)
    // ⚠️ ZONA ESPOSTA BORA - Bus 17 arteria vitale
    // ============================================================
    {
        id: 'units_biblio_generale',
        nome: 'Biblioteca Generale d\'Ateneo (BGA)',
        edificio: 'Edificio Centrale A',
        piano: 1,
        postiDisponibili: 400,
        postiTotali: 450,
        orarioApertura: '08:00',
        orarioChiusura: '19:55',
        servizi: ['WiFi Eduroam', 'Prese', 'Box Riservati', 'Vista Golfo', '⚠️ Esposta Bora'],
        latitude: 45.6578,
        longitude: 13.7925,
        indirizzo: 'Piazzale Europa 1, Trieste',
        university: 'UniTS',
        occupancy_rate: 'Molto Alto',
        notes: '⭐ Sala lettura principale con vista spettacolare sul Golfo. ATTENZIONE BORA: il campus è espostissimo al vento! Con Bora forte (>80km/h) il bus 17 è affollato e possibili ritardi. Porta giacca a vento anche d\'estate!'
    },
    {
        id: 'units_edificio_h3',
        nome: 'Sale Studio Edificio H3 (Nuovo Polo)',
        edificio: 'Edificio H3',
        piano: 0,
        postiDisponibili: 250,
        postiTotali: 300,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Moderno', 'Aria Condizionata', 'Prese', 'Psicologia/Architettura', '⚠️ Esposta Bora'],
        latitude: 45.6585,
        longitude: 13.7930,
        indirizzo: 'Via Alfonso Valerio 6/2, Trieste',
        university: 'UniTS',
        notes: '⭐ Edificio moderno più amato dagli studenti. Luminoso e confortevole. A 5 min a piedi dalla BGA ma OCCHIO ALLA BORA nei giorni di vento forte!'
    },
    {
        id: 'units_acquario',
        nome: 'Sala "Acquario" e Spazi Piano Terra',
        edificio: 'Edificio Centrale A',
        piano: 0,
        postiDisponibili: 120,
        postiTotali: 150,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['Socialità', 'Distributori', 'Accesso Rapido', '⚠️ Esposta Bora'],
        latitude: 45.6578,
        longitude: 13.7925,
        indirizzo: 'Piazzale Europa 1, Trieste',
        university: 'UniTS',
        notes: 'Sala vetrata informale per studio rapido tra lezioni. Ambiente sociale ma funzionale.'
    },
    {
        id: 'units_dipartimentali_campus',
        nome: 'Biblioteche Dipartimentali Campus (Fisica, Ingegneria, Chimica)',
        edificio: 'Vari Edifici Campus',
        piano: 0,
        postiDisponibili: 150,
        postiTotali: 200,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['Specializzate', 'Laboratori Vicini', '⚠️ Esposta Bora'],
        latitude: 45.6575,
        longitude: 13.7920,
        indirizzo: 'Parco Piazzale Europa, Trieste',
        university: 'UniTS',
        notes: 'Spazi dipartimentali integrati (Fisica Ed. C, Ingegneria Ed. D, Chimica Ed. E). Campus compatto tutto raggiungibile a piedi in 10 min.'
    },
    // ============================================================
    // TRIESTE - CENTRO STORICO (Umanistica, Interpreti)
    // Zone compatte - Tutto a piedi!
    // ============================================================
    {
        id: 'units_dsu_androna',
        nome: 'Biblioteca DSU Androna Baciocchi (Umanistica)',
        edificio: 'Palazzo Alvarez',
        piano: 1,
        postiDisponibili: 100,
        postiTotali: 120,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Silenzio', 'Centro Città', 'Lettere/Filosofia'],
        latitude: 45.6505,
        longitude: 13.7700,
        indirizzo: 'Androna Baciocchi 4, Trieste',
        university: 'UniTS',
        notes: '⭐ Nel quartiere San Giusto. Atmosfera storica ideale per Umanistica. Centro città compatto: tutto raggiungibile a piedi in 15-20 min dalla Stazione.'
    },
    {
        id: 'units_sslmit_filzi',
        nome: 'Biblioteca SSLMIT (Interpreti e Traduttori)',
        edificio: 'Narodni Dom',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Lab Linguistici', 'Multilingue'],
        latitude: 45.6540,
        longitude: 13.7760,
        indirizzo: 'Via Fabio Filzi 14, Trieste',
        university: 'UniTS',
        notes: '⭐ Ambiente internazionale per lingue. Sede storica SSLMIT con forte identità multilinguistica.'
    },
    // ============================================================
    // TRIESTE - MEDICINA (Cattinara)
    // ⚠️ ISOLATO - Non si torna in centro per pranzo!
    // ============================================================
    {
        id: 'units_medicina_cattinara',
        nome: 'Biblioteca Medica e Sale Studio Cattinara',
        edificio: 'Polo Ospedaliero Cattinara',
        piano: 0,
        postiDisponibili: 180,
        postiTotali: 200,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Silenzio', 'Testi Medici', 'Bar Ospedale', 'Mensa Ospedaliera'],
        latitude: 45.6335,
        longitude: 13.8255,
        indirizzo: 'Strada di Fiume 447, Trieste',
        university: 'UniTS',
        occupancy_rate: 'Alto',
        notes: '⚠️ IMPORTANTE: Cattinara è ISOLATO dal Campus Europa e dal Centro (30 min bus). Non è possibile "saltare" in centro per pranzo. Organizzati per restare qui tutto il giorno! Mensa ospedaliera disponibile. Esclusiva Medicina.'
    },
    // ============================================================
    // TRIESTE - BIBLIOTECHE PUBBLICHE & CAFFÈ ICONICI
    // 🎨 Cultura Triestina: Studiare al Caffè è Tradizione!
    // ============================================================
    {
        id: 'ts_biblio_statale',
        nome: 'Biblioteca Statale "Stelio Crise"',
        edificio: 'Largo Papa Giovanni XXIII',
        piano: 1,
        postiDisponibili: 200,
        postiTotali: 250,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['Prese', 'Vista Parziale Mare', 'Silenzio Assoluto'],
        latitude: 45.6490,
        longitude: 13.7690,
        indirizzo: 'Largo Papa Giovanni XXIII 6, Trieste',
        university: 'UniTS',
        occupancy_rate: 'Altissimo',
        notes: '⭐ LA preferita del centro/Borgo Teresiano. Affollata soprattutto periodo sessione. Arriva presto!'
    },
    {
        id: 'ts_biblio_hortis',
        nome: 'Biblioteca Civica "Attilio Hortis"',
        edificio: 'Piazza Hortis',
        piano: 1,
        postiDisponibili: 120,
        postiTotali: 150,
        orarioApertura: '09:00',
        orarioChiusura: '18:30',
        servizi: ['Atmosfera Letteraria', 'Museo Sveviano'],
        latitude: 45.6475,
        longitude: 13.7710,
        indirizzo: 'Piazza Hortis 4, Trieste',
        university: 'UniTS',
        notes: '🎨 Quartiere Cavana, vibe joyceiana e letteraria. Per chi ama l\'atmosfera storica di Trieste.'
    },
    {
        id: 'ts_caffe_sanmarco',
        nome: 'Caffè San Marco (Study Spot Iconico)',
        edificio: 'Caffè Storico',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 100,
        orarioApertura: '09:00',
        orarioChiusura: '22:00',
        servizi: ['WiFi', 'Libreria Interna', 'Caffè', '🎨 Literary Heritage'],
        latitude: 45.6535,
        longitude: 13.7785,
        indirizzo: 'Via Cesare Battisti 18, Trieste',
        university: 'UniTS',
        notes: '🎨⭐ LEGGENDARIO! Studiare qui è tradizione triestina centenaria (Svevo, Joyce, Saba). Caffè + Libreria. Non è solo un bar, è quasi una biblioteca pubblica letteraria. Ambiente unico, consuma qualcosa e rispetta il luogo!'
    },
    // ============================================================
    // GORIZIA - POLO INTERNAZIONALE
    // 🌍 Confine Slovenia - Shopping economico a Nova Gorica!
    // ============================================================
    {
        id: 'units_gorizia_santachiara',
        nome: 'Biblioteca Polo Gorizia (Santa Chiara)',
        edificio: 'Ex Convento Santa Chiara',
        piano: 0,
        postiDisponibili: 150,
        postiTotali: 180,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['Chiostro', 'Giardino', 'Internazionale', '🌍 Confine Slovenia'],
        latitude: 45.9440,
        longitude: 13.6205,
        indirizzo: 'Via Santa Chiara 1, Gorizia',
        university: 'UniTS',
        notes: '🌍⭐ Sede prestigiosa Diplomatici e Internazionale. INSIDER TIP: A 10 min a piedi c\'è il confine con Nova Gorica (Slovenia) - molti studenti vanno lì per spesa/pranzo economico! A 10 min da Via Alviano.'
    },
    {
        id: 'units_gorizia_alviano',
        nome: 'Sale Studio Via Alviano',
        edificio: 'Polo Gorizia',
        piano: 1,
        postiDisponibili: 100,
        postiTotali: 120,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['Mensa', 'WiFi', '🌍 Confine Slovenia'],
        latitude: 45.9425,
        longitude: 13.6180,
        indirizzo: 'Via Luigi Alviano 18, Gorizia',
        university: 'UniTS',
        notes: 'Sede operativa lezioni. Vibe internazionale. Nova Gorica (Slovenia) a 10 min a piedi per shopping economico!'
    },
    // ============================================================
    // PORDENONE & PORTOGRUARO
    // ============================================================
    {
        id: 'units_pordenone',
        nome: 'Biblioteca Polo Pordenone',
        edificio: 'Consorzio Universitario',
        piano: 0,
        postiDisponibili: 120,
        postiTotali: 150,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['Parcheggio', 'Mensa'],
        latitude: 45.9560,
        longitude: 12.6600,
        indirizzo: 'Via Prasecco 3/A, Pordenone',
        university: 'UniTS',
        notes: 'Polo Ingegneria/Design. Zona industriale, parcheggi ampi. Da Trieste 1h 10min treno.'
    },
    {
        id: 'units_portogruaro',
        nome: 'Biblioteca Polo Portogruaro',
        edificio: 'Villa Martinelli',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 60,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['Parco Storico'],
        latitude: 45.7760,
        longitude: 12.8370,
        indirizzo: 'Via Seminario 34, Portogruaro (VE)',
        university: 'UniTS',
        notes: 'Polo Educazione/Infermieristica. Villa Martinelli storica con parco. Piccolo e tranquillo. Da Trieste 1h 30min treno.'
    },
];

export const getDirectionsUniTS = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];
    
    const isCampusEuropa = room.indirizzo.includes('Europa') || room.indirizzo.includes('Valerio');
    const isCattinara = room.indirizzo.includes('Cattinara') || room.indirizzo.includes('Fiume');
    const isCentroTrieste = room.indirizzo.includes('Filzi') || room.indirizzo.includes('Baciocchi') || room.indirizzo.includes('Battisti') || room.indirizzo.includes('Hortis') || room.indirizzo.includes('Giovanni');
    const isGorizia = room.indirizzo.includes('Gorizia') || room.indirizzo.includes('Chiara') || room.indirizzo.includes('Alviano');
    const isPordenone = room.indirizzo.includes('Pordenone') || room.indirizzo.includes('Prasecco');
    const isPortogruaro = room.indirizzo.includes('Portogruaro') || room.indirizzo.includes('Seminario');

    // CAMPUS PIAZZALE EUROPA (Colle) - LA LINEA 17 È TUTTO!
    if (isCampusEuropa) {
        directions.push({
            luogo: 'Stazione Trieste Centrale / Centro',
            descrizione: `🚌 **LINEA 17: L'ARTERIA VITALE DEL CAMPUS**

Per il Campus Piazzale Europa (in cima al colle):

1. **🚌 BUS TRIESTE TRASPORTI - LINEA 17 / 17/** ⭐
   - Partenza: Piazza Libertà (vicino Stazione) o Via Galatti
   - Fermata finale: "Università - Piazzale Europa"
   - Frequenza: ogni 10-15 min
   - **LA 17 È L'UNICO MEZZO CHE CONTA per il campus**
   
2. ⚠️ **ATTENZIONE BORA**: 
   - Campus ESPOSTISSIMO al vento
   - Con Bora >80km/h: bus 17 affollato e ritardi possibili
   - Porta **giacca a vento anche d'estate**!
   - Vista spettacolare sul Golfo ma arrivaci coperto!

3. **A piedi (solo sportivi)**: Scala dei Giganti + Via del Monte (30-40 min salita ripida)

4. **In bici**: 20 min con pista ciclabile (PERICOLOSO CON BORA!)

5. **In auto**: Parcheggio campus limitato (meglio bus)

**CAMPUS COMPATTO**: H3 a 5 min dalla BGA, tutto raggiungibile a piedi in 10 min.`,
            mezziPubblici: ['🚌 Bus TT 17, 17/ (FONDAMENTALE)', 'Bici (pericolosa con Bora)'],
            tempoStimato: '15 min bus / 30-40 min a piedi',
            note: '⚠️ BORA: Vento forte frequente. Campus ventoso ma vista mozzafiato. La 17 è vita!'
        });
    }
    // CATTINARA (Medicina) - ISOLATO!
    else if (isCattinara) {
        directions.push({
            luogo: 'Centro Trieste / Stazione',
            descrizione: `🏥 **CATTINARA: POLO ISOLATO - ORGANIZZATI PER RESTARE TUTTO IL GIORNO**

⚠️ **IMPORTANTE**: Cattinara è **LONTANO** da Campus Europa e Centro città!

Per Ospedale Cattinara:

1. **🚌 Bus TT**:
   - Linea **22** dalla Stazione o Corso Italia
   - Linea **25** dal centro
   - Capolinea "Ospedale Cattinara"
   - Frequenza: ogni 20-30 min
   - Tempo: 30-35 min dal centro
   
2. **In auto**: Tangenziale est (20 min dal centro)

3. **In bici**: 30 min (salita)

⚠️ **NON PUOI "SALTARE" IN CENTRO PER PRANZO**:
- Troppo lontano (30 min solo andata)
- Porta pranzo o usa **Mensa Ospedaliera** disponibile
- Bar ospedale aperto tutto il giorno
- Organizzati per **restare a Cattinara l'intera giornata**

**PARCHEGGI**: Disponibili e ampi (meglio che al Campus Europa)`,
            mezziPubblici: ['Bus TT 22, 25'],
            tempoStimato: '30-35 min bus / 20 min auto',
            note: '⚠️ ISOLATO: Organizzati per giornata intera. Mensa ospedaliera ok.'
        });
    }
    // CENTRO TRIESTE (Umanistica, Interpreti, Pubbliche, CAFFÈ!)
    else if (isCentroTrieste) {
        directions.push({
            luogo: 'Stazione / Rive',
            descrizione: `🎨 **CENTRO TRIESTE: TUTTO A PIEDI + TRADIZIONE CAFFÈ LETTERARI**

Per sedi centro (Filzi, Androna Baciocchi, Crise, Hortis, **San Marco**):

1. **🚶 A piedi dalla Stazione**: 15-25 min (pianeggiante) ⭐
   - Percorso: Viale Miramare → Ponterosso → centro
   - **Trieste centro è compatta: tutto entro 1 km!**
   
2. **🚌 Bus TT**: Linee 8, 9, 10 (fermata Ponterosso/Cavana)

3. **🚴 In bici**: 10 min (attento Bora!)

🎨 **CULTURA TRIESTINA UNICA**:
- **Caffè San Marco** (Via Battisti): NON è solo un bar, è quasi una biblioteca letteraria!
- Tradizione centenaria (Svevo, Joyce, Saba)
- Studiare al caffè è **cultura locale** a Trieste
- Rispetta il luogo, consuma qualcosa

**ZONA**: Borgo Teresiano/Cavana - atmosfera joyceiana e letteraria unica in Italia.`,
            mezziPubblici: ['🚶 A piedi (migliore)', 'Bus TT 8, 9, 10', 'Bici'],
            tempoStimato: '15-25 min a piedi dalla Stazione',
            note: '🎨 Centro compatto. Caffè letterari tradizione triestina unica!'
        });
    }
    // GORIZIA - Confine Slovenia!
    else if (isGorizia) {
        directions.push({
            luogo: 'Stazione Gorizia / Trieste',
            descrizione: `🌍 **GORIZIA: POLO INTERNAZIONALE + CONFINE SLOVENIA**

Per Polo Gorizia:

1. **🚆 Da Trieste**: Treno Regionale (30 min) → Stazione Gorizia
2. **🚌 Dalla Stazione Gorizia**: Bus APT 1 o 8 (10 min) o a piedi 20 min lungo Corso Italia
3. **🚗 In auto**: A4 (40 min da Trieste)

🌍 **INSIDER TIP - CONFINE SLOVENIA**:
- **Nova Gorica** (Slovenia) a **10 min a piedi** dal campus!
- Molti studenti attraversano il confine per:
  - Spesa economica (supermercati sloveni)
  - Pranzo/cena meno costosi
  - Caffè più economico
- **Porta documento identità per attraversare**

**SEDI**: Santa Chiara (prestigiosa, ex convento con chiostro) e Alviano (operativa) a 10 min a piedi tra loro.`,
            mezziPubblici: ['🚆 Treno Regionale TS-GO', 'Bus APT Gorizia 1, 8'],
            tempoStimato: '30 min treno + 10-20 min locale',
            note: '🌍 Confine Slovenia a 10 min! Shopping/pranzo economico Nova Gorica.'
        });
    }
    // PORDENONE
    else if (isPordenone) {
        directions.push({
            luogo: 'Trieste / Stazione Pordenone',
            descrizione: `🏭 **POLO PORDENONE** (Ingegneria/Design)

Per Polo Pordenone:

1. **🚆 Da Trieste**: Treno Regionale (1h 10min) → Stazione Pordenone
2. **🚌 Dalla Stazione PN**: Bus extraurbano o taxi (10 min)
3. **🚗 In auto**: A4 (1h da Trieste)

**SEDE**: Via Prasecco in zona industriale.

**PARCHEGGI**: Ampi e disponibili (migliore per chi viene in auto).`,
            mezziPubblici: ['🚆 Treno Regionale'],
            tempoStimato: '1h 10min treno da Trieste',
            note: 'Parcheggi ampi. Zona industriale.'
        });
    }
    // PORTOGRUARO
    else if (isPortogruaro) {
        directions.push({
            luogo: 'Trieste',
            descrizione: `🏛️ **POLO PORTOGRUARO** (Educazione/Infermieristica)

Per Polo Portogruaro:

1. **🚆 Da Trieste**: Treno Regionale (1h 30min) → Stazione Portogruaro
2. **🚶 Dalla Stazione**: A piedi 15 min o bus locale
3. **🚗 In auto**: A4 (1h 20min da Trieste)

**SEDE**: Villa Martinelli storica con parco.

**AMBIENTE**: Polo piccolo e tranquillo, ideale per chi cerca quiete.`,
            mezziPubblici: ['🚆 Treno Regionale'],
            tempoStimato: '1h 30min treno da Trieste',
            note: 'Polo piccolo e tranquillo. Villa storica con parco.'
        });
    }

    // Fallback generico se nessun caso matcha (non dovrebbe mai succedere)
    if (directions.length === 0) {
        directions.push({
            luogo: 'Posizione da verificare',
            descrizione: `Per questa location specifica, consulta Google Maps per le indicazioni dettagliate.

Indirizzo: ${room.indirizzo}

**CONSIGLIO**: Verifica sempre orari e percorsi dei mezzi pubblici in tempo reale sulle app ufficiali dei trasporti.`,
            mezziPubblici: ['Consulta Google Maps'],
            tempoStimato: 'Variabile',
            note: 'Usa Google Maps per pianificare il percorso in base alla tua posizione di partenza.'
        });
    }

    return directions;
};
