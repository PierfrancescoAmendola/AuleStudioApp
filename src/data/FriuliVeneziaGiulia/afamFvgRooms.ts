import { StudyRoom, DirectionsFromLocation } from '../../types';

export const afamFvgRooms: StudyRoom[] = [
    // ============================================================
    // CONSERVATORIO "GIUSEPPE TARTINI" - TRIESTE
    // 🎻 Palazzo Rittmeyer - Atmosfera Mitteleuropea
    // ============================================================
    {
        id: 'cons_ts_biblio',
        nome: 'Biblioteca del Conservatorio Tartini',
        edificio: 'Palazzo Rittmeyer',
        piano: 1,
        postiDisponibili: 50,
        postiTotali: 60,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['Fondi Storici', 'Ascolto', 'Silenzio', 'Consultazione', '🎻 Atmosfera Storica'],
        latitude: 45.6538,
        longitude: 13.7768,
        indirizzo: 'Via Carlo Ghega 12, 34132 Trieste',
        university: 'AFAM',
        occupancy_rate: 'Basso',
        notes: '🎻⭐ Biblioteca storica con fondi antichi. Atmosfera austro-ungarica seria e "mitteleuropea". Silenzio rigoroso. INSIDER TIP: A 2 min a piedi c\'è il Caffè Tommaseo (il più antico di Trieste) storicamente legato alla musica classica - studiare lì con caffè viennese è tradizione!',
        tags: ['Biblioteca', '🔇 Silenzio'],
    },
    {
        id: 'cons_ts_aule_pratica',
        nome: 'Aule Esercitazione e Pratica',
        edificio: 'Palazzo Rittmeyer',
        piano: 0,
        postiDisponibili: 35,
        postiTotali: 40,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Prenotazione Obbligatoria', 'Pianoforti a Coda', 'Insonorizzate', '🎹'],
        latitude: 45.6538,
        longitude: 13.7768,
        indirizzo: 'Via Carlo Ghega 12, Trieste',
        university: 'AFAM',
        notes: '🎹 Aule individuali per pratica strumentale. Prenotazione online obbligatoria (portale Conservatorio). Pianoforti a coda disponibili.',
        tags: ['Aula Studio'],
    },
    {
        id: 'cons_ts_sala_comune',
        nome: 'Sala Comune e Spazi Attesa',
        edificio: 'Palazzo Rittmeyer (Piano Terra)',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 40,
        orarioApertura: '08:00',
        orarioChiusura: '19:00',
        servizi: ['Socialità', 'Ripasso Teorico'],
        latitude: 45.6538,
        longitude: 13.7768,
        indirizzo: 'Via Carlo Ghega 12, Trieste',
        university: 'AFAM',
        notes: 'Spazio informale per attesa aule o studio teorico. Ambiente sociale ma rispettoso.',
        tags: ['Aula Studio'],
    },
    // ============================================================
    // CONSERVATORIO "JACOPO TOMADINI" - UDINE
    // 🌳 Piazza Primo Maggio - "Giardin Grande" Outdoor Campus
    // ============================================================
    {
        id: 'cons_ud_biblio',
        nome: 'Biblioteca Conservatorio Tomadini',
        edificio: 'Palazzo ex Tribunale',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 70,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Emeroteca', 'WiFi', 'Vista Piazza', '🌳 Vista Giardin Grande'],
        latitude: 46.0665,
        longitude: 13.2355,
        indirizzo: 'Piazza Primo Maggio 29, Udine',
        university: 'AFAM',
        notes: '🌳 Biblioteca luminosa affacciata su Piazza Primo Maggio (il "Giardin Grande"). Vista Castello Udine e prato verde.',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'cons_ud_aule_pratica',
        nome: 'Aule Pratica Strumentale',
        edificio: 'Palazzo Tomadini',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 35,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Prenotazione', 'Strumenti', '🎺 Insonorizzate'],
        latitude: 46.0665,
        longitude: 13.2355,
        indirizzo: 'Piazza Primo Maggio 29, Udine',
        university: 'AFAM',
        notes: '🎺 Aule insonorizzate per esercizio individuale. Prenotazione obbligatoria online.',
        tags: ['Aula Studio'],
    },
    {
        id: 'cons_ud_giardin_grande',
        nome: 'Piazza Primo Maggio - "Giardin Grande" (Outdoor Study)',
        edificio: 'Esterno Conservatorio',
        piano: 0,
        postiDisponibili: 500,
        postiTotali: 500,
        orarioApertura: 'H24',
        orarioChiusura: 'H24',
        servizi: ['🌳 Prato', 'Vista Castello', 'Relax', 'Outdoor Study', 'Primavera/Estate'],
        latitude: 46.0665,
        longitude: 13.2355,
        indirizzo: 'Piazza Primo Maggio, Udine',
        university: 'AFAM',
        notes: '🌳⭐ Prato ICONICO per studio all\'aperto! D\'primavera/estate è IL campus a cielo aperto degli studenti di musica. Vista Castello Udine. Luogo perfetto per ripasso all\'aperto o pause sociali. Tradizione studentesca!',
        tags: ['Outdoor'],
    },
    // ============================================================
    // ACCADEMIA DI BELLE ARTI "G.B. TIEPOLO" - UDINE
    // 🎨 Viale Ungheria - Design e Arti Visive
    // ============================================================
    {
        id: 'aba_ud_lab_design',
        nome: 'Laboratori Design e Grafica',
        edificio: 'Sede Tiepolo',
        piano: 1,
        postiDisponibili: 50,
        postiTotali: 60,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['iMac', 'Tavoli', 'Stampanti', '💻 Adobe Creative Suite'],
        latitude: 46.0608,
        longitude: 13.2405,
        indirizzo: 'Viale Ungheria 22, Udine',
        university: 'AFAM',
        notes: '🎨💻 Spazi moderni per design digitale. iMac con software professionale. Laboratori attrezzati per grafica e multimedia.',
        tags: ['Laboratorio', 'Campus', '❄️ Climatizzato'],
    },
    {
        id: 'aba_ud_atelier_pittura',
        nome: 'Atelier Pittura e Scultura',
        edificio: 'Sede Tiepolo',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 50,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Cavalletti', 'Materiali', '🎨 Luce Naturale'],
        latitude: 46.0608,
        longitude: 13.2405,
        indirizzo: 'Viale Ungheria 22, Udine',
        university: 'AFAM',
        notes: '🎨 Spazi creativi tradizionali con luce naturale. Cavalletti e materiali disponibili per pratica.',
        tags: ['Aula Studio', 'Campus'],
    },
    {
        id: 'aba_ud_biblioteca',
        nome: 'Biblioteca Accademia Tiepolo',
        edificio: 'Sede Tiepolo',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 40,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['Arte', 'Consultazione', 'Storia dell\'Arte'],
        latitude: 46.0608,
        longitude: 13.2405,
        indirizzo: 'Viale Ungheria 22, Udine',
        university: 'AFAM',
        notes: '📚 Biblioteca specializzata arti visive. Collezione storia dell\'arte e tecniche artistiche. Orari più rigidi rispetto università pubblica (ente riconosciuto privato/statale ibrido).',
        tags: ['Biblioteca', 'Campus'],
    },
];

export const getDirectionsAFAM_FVG = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];
    
    const isTartiniTrieste = room.indirizzo.includes('Ghega') || room.id.includes('cons_ts');
    const isTomadiniUdine = room.indirizzo.includes('Maggio') || room.id.includes('cons_ud');
    const isTiepoloUdine = room.indirizzo.includes('Ungheria') || room.id.includes('aba_ud');

    // CONSERVATORIO TARTINI - TRIESTE (ULTRA CENTRALE!)
    if (isTartiniTrieste) {
        directions.push({
            luogo: 'Stazione Centrale Trieste',
            descrizione: `🎻 **CONSERVATORIO TARTINI - VIA GHEGA 12** (Palazzo Rittmeyer)

Per Conservatorio "Giuseppe Tartini":

1. **🚶 A piedi dalla Stazione**: 3-5 minuti ⭐ (ULTRA COMODO!)
   - Esci da Stazione Piazza Libertà
   - Gira sinistra su Via Ghega
   - Palazzo imponente storico subito visibile sulla destra
   - **In PIANO** (ottimo per chi porta strumenti pesanti!)

2. **🚌 Bus TT**: Linee urbane centro (fermata "Stazione FS")

3. **🚴 In bici**: 2 minuti

🎻 **TRASPORTO STRUMENTI**:
- Posizione IDEALE per musicisti con strumenti grandi (contrabbassi, violoncelli, arpe)
- Niente salite/scale dalla stazione
- Accesso pianeggiante

☕ **INSIDER TIP - CAFFÈ TOMMASEO**:
- A 2 min a piedi dal Conservatorio
- IL PIÙ ANTICO CAFFÈ DI TRIESTE (1830)
- Storicamente legato alla musica classica triestina
- **Tradizione**: Studiare qui con un caffè viennese dopo le lezioni
- Ambiente elegante mitteleuropeo

🏛️ **ATMOSFERA**: 
- Palazzo storico serio, non "caciarone"
- Vibe mitteleuropea austro-ungarica
- Silenzio rigoroso in biblioteca

**LOCATION**: Posizione ultra-centrale (vicino Stazione, Piazza della Borsa, Porto Vecchio).`,
            mezziPubblici: ['🚶 A piedi (migliore)', 'Bus TT urbani'],
            tempoStimato: '3-5 min a piedi dalla Stazione',
            note: '⭐ Comodissimo per pendolari! In piano, perfetto per strumenti. Caffè Tommaseo vicino!'
        });
    }
    // CONSERVATORIO TOMADINI - UDINE (GIARDIN GRANDE!)
    else if (isTomadiniUdine) {
        directions.push({
            luogo: 'Stazione FS Udine / Centro',
            descrizione: `🌳 **CONSERVATORIO TOMADINI - PIAZZA PRIMO MAGGIO** ("Giardin Grande")

Per Conservatorio "Jacopo Tomadini":

1. **🚌 Bus TPL FVG dalla Stazione**: Linea 1, 3 o C ⭐
   - Fermata: **"Piazza Primo Maggio"** o **"Castello"**
   - Frequenza: ogni 15-20 min
   - Tempo: 10-15 min

2. **🚶 A piedi dalla Stazione**: 20-25 min nord
   - Percorso: Viale Europa → centro → salita verso Castello
   - Non ideale con strumenti pesanti (salita!)

3. **🚴 In bici**: 15 min

4. **🚗 In auto**: Parcheggio sotterraneo Piazza Primo Maggio (a pagamento)

🌳 **IL "GIARDIN GRANDE"** (Outdoor Campus Iconico):
- Piazza I Maggio ha un PRATO VERDE ENORME
- D'primavera/estate è L'AULA STUDIO all'aperto!
- Campus a cielo aperto degli studenti di musica
- Vista Castello di Udine
- Perfetto per ripasso all'aperto o pause sociali
- **Tradizione studentesca udinese**

🎺 **TRASPORTO STRUMENTI**:
- Bus necessario dalla stazione (scomodo con violoncello/contrabbasso)
- Salita verso Castello (meglio taxi con strumenti grandi)

**LOCATION**: Zona alta centro storico, affacciata su piazza iconica con vista Castello.`,
            mezziPubblici: ['🚌 Bus TPL FVG 1, 3, C', 'Bici'],
            tempoStimato: '10-25 min (bus o piedi)',
            note: '🌳 Prato perfetto per studio outdoor! Scomodo dalla stazione con strumenti.'
        });
    }
    // ACCADEMIA TIEPOLO - UDINE (VICINISSIMA STAZIONE!)
    else if (isTiepoloUdine) {
        directions.push({
            luogo: 'Stazione FS Udine',
            descrizione: `🎨 **ACCADEMIA TIEPOLO - VIALE UNGHERIA 22** (Design & Arti Visive)

Per Accademia di Belle Arti "G.B. Tiepolo":

1. **🚶 A piedi dalla Stazione**: 8-10 minuti ⭐ (IDEALE!)
   - Esci dalla stazione
   - Gira **destra** su Viale Ungheria
   - Cammina dritto
   - Accademia sulla sinistra (edificio moderno)

2. **🚌 Bus TPL FVG**: Linee dirette centro (fermata vicina)

3. **🚴 In bici**: 5 minuti

🎨 **ATTENZIONE - ENTE IBRIDO**:
- Accademia Tiepolo è **ente riconosciuto privato/statale**
- NON è Accademia Statale classica enorme (tipo Brera)
- Spazi più curati, classi piccole
- **Orari laboratori più RIGIDI** vs università pubbliche
- NON aperta H24 - verifica sempre orari accesso!

💻 **STRUTTURA**: 
- Laboratori design digitale con iMac (Adobe Suite)
- Atelier tradizionali pittura/scultura
- Biblioteca specializzata arti visive

**LOCATION**: Vicinissima stazione (ideale per pendolari). In piano.`,
            mezziPubblici: ['🚶 A piedi (migliore)', 'Bici'],
            tempoStimato: '8-10 min a piedi dalla Stazione',
            note: '⭐ Posizione ideale per pendolari! Attenzione orari più rigidi (ente privato).'
        });
    }

    // Info generali AFAM FVG
    directions.push({
        luogo: '🎯 Info Generali AFAM FVG',
        descrizione: `**ISTITUZIONI AFAM IN FRIULI VENEZIA GIULIA**:

🎻 **Conservatorio Tartini (Trieste)**:
- Ultra-centrale, 3 min dalla stazione
- Ideale per chi porta strumenti (in piano)
- Caffè Tommaseo tradizione musicale vicino

🌳 **Conservatorio Tomadini (Udine)**:
- Piazza I Maggio con "Giardin Grande" (prato outdoor study)
- Bus necessario da stazione (salita)
- Campus a cielo aperto primavera/estate

🎨 **Accademia Tiepolo (Udine)**:
- Vicinissima stazione (8 min a piedi)
- Ente privato/statale: orari più rigidi
- Design digitale + arti tradizionali

⚠️ **PRENOTAZIONI**:
- **Obbligatorie** per aule pratica strumentale
- Portale online di ogni istituzione
- Pianificare in anticipo soprattutto per pianoforti a coda

**TRASPORTI**:
- Trieste: Trieste Trasporti (TT)
- Udine: TPL FVG
- Entrambe eccellenti con app real-time

🎼 **CULTURA LOCALE**:
- Tartini: Atmosfera seria mitteleuropea + Caffè Tommaseo
- Tomadini: Prato sociale outdoor + Vista Castello
- Tiepolo: Design moderno + ambiente curato

**NOTA**: Nessun'altra istituzione AFAM statale significativa in FVG oltre a queste 3. Rappresentano l'eccellenza artistica regionale.`,
        mezziPubblici: ['Bus TT/TPL FVG', 'A piedi/Bici'],
        tempoStimato: 'Variabile (3-25 min)',
        note: '🎻 Istituzioni artistiche di eccellenza. Tartini ultra-comodo, Tomadini con prato iconico!'
    });

    return directions;
};
