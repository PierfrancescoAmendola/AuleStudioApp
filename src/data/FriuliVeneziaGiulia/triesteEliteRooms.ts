import { StudyRoom, DirectionsFromLocation } from '../../types';

export const triesteEliteRooms: StudyRoom[] = [
    // ============================================================
    // SISSA - Via Bonomea (Carso / Opicina)
    // 🌟 PhD Physics/Math/Neuroscience - Vista Golfo Incredibile
    // ============================================================
    {
        id: 'sissa_main_library',
        nome: 'SISSA Main Library',
        edificio: 'Main Building',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: 'H24',
        orarioChiusura: 'H24',
        servizi: ['Vista Golfo', 'Silenzio', 'Prese', 'Blackboards', 'Badge Access', '⚠️ Bora Forte'],
        latitude: 45.6792,
        longitude: 13.7728,
        indirizzo: 'Via Bonomea 265, 34136 Trieste',
        university: 'SISSA',
        occupancy_rate: 'Medio',
        notes: '🌟⭐ Biblioteca centrale con vetrate sul Golfo. Accesso 24/7 con badge. Luogo iconico per PhD Physics/Math/Neuroscience. Vista mozzafiato ma ESPOSTA ALLA BORA (campus sul Carso alto)!'
    },
    {
        id: 'sissa_cantina_lounge',
        nome: 'SISSA Cafeteria & Terrace Lounge',
        edificio: 'Main Building (Terrazza)',
        piano: -1,
        postiDisponibili: 150,
        postiTotali: 200,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Social', 'Caffè', 'Vista Mare', 'Discussioni Informali', '🌟 Terrazza'],
        latitude: 45.6792,
        longitude: 13.7728,
        indirizzo: 'Via Bonomea 265, Trieste',
        university: 'SISSA',
        notes: '☕🌟 Cuore sociale SISSA. Tavoli esterni con vista panoramica su Trieste e Golfo. Ideale per pause o discussioni scientifiche informali. Atmosfera internazionale.'
    },
    {
        id: 'sissa_sector_labs',
        nome: 'Sector Libraries & Study Rooms',
        edificio: 'Edifici Settoriali (Physics/Math/Neuro)',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: 'H24',
        orarioChiusura: 'H24',
        servizi: ['Specializzate', 'Lavagne', 'Badge Access', 'Silenzio Assoluto'],
        latitude: 45.6790,
        longitude: 13.7730,
        indirizzo: 'Via Bonomea 265, Trieste',
        university: 'SISSA',
        notes: 'Biblioteche settoriali distribuite per area (Physics, Mathematics, Neuroscience). Silenzio assoluto, accesso riservato PhD/staff. Lavagne ovunque per equazioni.'
    },
    // ============================================================
    // ICTP - Strada Costiera (Miramare)
    // 🌍 UNESCO Physics - Castello Miramare + Mare
    // ============================================================
    {
        id: 'ictp_marie_curie',
        nome: 'Marie Curie Library',
        edificio: 'Leonardo da Vinci Building',
        piano: 1,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '08:30',
        orarioChiusura: '20:00',
        servizi: ['Fisica Top-Level', 'PC Room', 'International', '🌍 UNESCO'],
        latitude: 45.7038,
        longitude: 13.7180,
        indirizzo: 'Strada Costiera 11, 34151 Trieste',
        university: 'ICTP',
        notes: '🌍⭐ Biblioteca eccellente fisica teorica. Accesso con badge visitatore (richiedi a reception). Centro UNESCO per fisica teorica - comunità internazionale unica!'
    },
    {
        id: 'ictp_fermi_lounge',
        nome: 'Fermi Building Study Lounge',
        edificio: 'Enrico Fermi Building',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 60,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Vista Parco Miramare', 'Quiet', '🏰 Castello Vicino'],
        latitude: 45.7035,
        longitude: 13.7185,
        indirizzo: 'Strada Costiera 11, Trieste',
        university: 'ICTP',
        notes: '🏰 Spazio studio con vista Castello Miramare e parco/mare. Location da sogno per studiare fisica!'
    },
    {
        id: 'ictp_adriatico',
        nome: 'Adriatico Guest House Lounge',
        edificio: 'Adriatico Guest House',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 50,
        orarioApertura: 'H24',
        orarioChiusura: 'H24',
        servizi: ['Residenziale', 'Vista Mare', 'H24'],
        latitude: 45.7040,
        longitude: 13.7175,
        indirizzo: 'Strada Costiera 11, Trieste',
        university: 'ICTP',
        notes: 'Spazio per visiting scientists/PhD. Accesso regolato (ospiti ICTP). Vista mare spettacolare.'
    },
    // ============================================================
    // MIB TRIESTE SCHOOL OF MANAGEMENT - Ferdinandeo
    // 💼 Executive Business School - Palazzo Asburgico
    // ============================================================
    {
        id: 'mib_rotonda',
        nome: 'Sala della Rotonda',
        edificio: 'Palazzo Ferdinandeo',
        piano: 1,
        postiDisponibili: 70,
        postiTotali: 90,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Elegante', 'Business', 'WiFi', '🏛️ Palazzo Storico'],
        latitude: 45.6555,
        longitude: 13.7995,
        indirizzo: 'Largo Caduti di Nasiriya 1, Trieste',
        university: 'MIB',
        notes: '💼🏛️ Sala storica in palazzo giallo asburgico. Ambiente executive elegante. Dress smart casual gradito. Location prestigiosa per MBA/Master.'
    },
    {
        id: 'mib_pavilion',
        nome: 'New Pavilion Study Rooms',
        edificio: 'Ala Moderna',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '08:00',
        orarioChiusura: '22:00',
        servizi: ['Moderno', 'Group Work', 'Badge', 'Project Rooms'],
        latitude: 45.6555,
        longitude: 13.7995,
        indirizzo: 'Largo Caduti di Nasiriya 1, Trieste',
        university: 'MIB',
        notes: '💼 Estensione moderna vetrata per project work e team building. Sale attrezzate per case study.'
    },
    {
        id: 'mib_library',
        nome: 'MIB Library',
        edificio: 'Palazzo Ferdinandeo',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 60,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Business Collection', 'Quiet', 'Executive'],
        latitude: 45.6555,
        longitude: 13.7995,
        indirizzo: 'Largo Caduti di Nasiriya 1, Trieste',
        university: 'MIB',
        notes: 'Biblioteca dedicata management/executive MBA. Collezione specializzata business internazionale.'
    },
];

export const getDirectionsTriesteElite = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];
    
    const isSISSA = room.university === 'SISSA' || room.indirizzo.includes('Bonomea');
    const isICTP = room.university === 'ICTP' || room.indirizzo.includes('Costiera') || room.indirizzo.includes('Miramare');
    const isMIB = room.university === 'MIB' || room.indirizzo.includes('Nasiriya') || room.indirizzo.includes('Ferdinandeo');

    // SISSA - Via Bonomea (Carso alto) - LINEA 38 DEDICATA
    if (isSISSA) {
        directions.push({
            luogo: 'Centro Trieste / Piazza Oberdan',
            descrizione: `🌟 **SISSA - VIA BONOMEA 265** (Campus sul Carso Alto)

Per SISSA (Scuola Internazionale Superiore di Studi Avanzati):

1. **🚌 BUS TT - LINEA 38** (Dedicata SISSA) ⭐
   - Partenza: Via Galatti/Piazza Oberdan (capolinea Tram Opicina)
   - Fermata finale: **"SISSA"**
   - Frequenza: ogni 20-30 min
   - Tempo: 20-25 min salita Carso
   - **Questa è LA linea per SISSA**!

2. **Alternative**: Linea 39 o 51 (meno frequenti, solo emergenza)

3. **🚗 In auto**: Via Bonomea salita (parcheggio interno disponibile su richiesta)

4. **🚶 A piedi/bici**: NON consigliato (salita ripida 300m di dislivello!)

⚠️ **BORA FORTISSIMA SUL CARSO**:
- SISSA è esposta come Campus Europa UniTS
- Con Bora >80km/h il bus può avere ritardi
- Vista incredibile sul Golfo ma porta giacca pesante!

🌟 **ACCESSO**: 
- Badge richiesto per edifici (reception per visitatori)
- Community PhD internazionale (Physics, Math, Neuroscience)
- Ambiente top-level ricerca`,
            mezziPubblici: ['🚌 Bus TT 38 (DEDICATA)', '39, 51 (backup)'],
            tempoStimato: '20-25 min bus dalla città',
            note: '⚠️ Bora forte sul Carso! Campus isolato ma vista incredibile. Linea 38 fondamentale.'
        });
    }
    // ICTP - Strada Costiera (Miramare) - CASTELLO UNESCO
    else if (isICTP) {
        directions.push({
            luogo: 'Stazione Centrale / Centro',
            descrizione: `🌍 **ICTP - STRADA COSTIERA 11** (Miramare - UNESCO)

Per ICTP (Abdus Salam International Centre for Theoretical Physics):

1. **🚌 BUS TT - LINEA 6** (direzione Barcola/Grignano) ⭐
   - Partenza: Stazione FS/Corso Italia
   - Fermata: **"ICTP"** o **"Miramare Castello"**
   - Frequenza: ogni 15-20 min
   - Tempo: 25-30 min lungo costa
   - Percorso panoramico sul mare!

2. **🚆 Treno Regionale**: Direzione Venezia → fermata **"Miramare"**
   - Tempo: 10 min treno + 5 min a piedi discesa verso mare
   - Alternativa veloce!

3. **🚗 In auto**: Strada Costiera (parcheggio limitato - arrivo presto)

4. **🚴 In bici**: 30 min da centro lungo costa (bellissimo!)

🏰 **LOCATION SPETTACOLARE**:
- Campus sul mare vicino Castello Miramare
- Parco enorme con cervi e fauna
- Pausa pranzo possibile a Barcola (spiaggia urbana Trieste)

🌍 **ACCESSO**: 
- Badge visitatore da reception (porta documento)
- Centro UNESCO per fisica teorica
- Community internazionale eccellente

**INSIDER TIP**: Dopo studio, 5 min a piedi al Castello Miramare (aperto fino tramonto).`,
            mezziPubblici: ['🚌 Bus TT 6 (principale)', '🚆 Treno Regionale TS-VE'],
            tempoStimato: '25-30 min bus / 15 min treno da Stazione',
            note: '🏰 Location da sogno! Castello + Mare + Fisica top-level. Spiaggia Barcola vicina.'
        });
    }
    // MIB - Ferdinandeo (Parco Farneto) - PALAZZO GIALLO ASBURGICO
    else if (isMIB) {
        directions.push({
            luogo: 'Centro Trieste / Via Carducci',
            descrizione: `💼 **MIB FERDINANDEO** (Largo Caduti di Nasiriya 1)

Per MIB Trieste School of Management:

1. **🚌 BUS TT**: Linea **11** o **25** 
   - Partenza: Via Carducci/Corso Italia
   - Fermata: **"Ferdinandeo"** o **"Rozzol"**
   - Frequenza: ogni 20 min
   - Tempo: 15-20 min salita

2. **🚗 In auto**: Salita Rozzol (parcheggio interno disponibile)

3. **🚴 In bici**: 20 min salita (moderata, meno ripida di SISSA)

🏛️ **PALAZZO STORICO**:
- Edificio giallo asburgico restaurato
- Zona alta con vista su Trieste e porto
- Ambiente elegante executive

💼 **DRESS CODE**: 
- Smart casual gradito (ambiente business school)
- MBA/Master in Management internazionali
- Networking professionale

**AMBIENTE**: Istituzione privata prestigiosa con forte identità internazionale.`,
            mezziPubblici: ['🚌 Bus TT 11, 25'],
            tempoStimato: '15-20 min da centro',
            note: '💼 Zona alta con vista città. Palazzo storico elegante. Ambiente executive.'
        });
    }

    // Info generali Elite Trieste
    directions.push({
        luogo: '🎯 Info Generali Trieste Elite',
        descrizione: `**ISTITUZIONI TOP-LEVEL TRIESTE**:

🌟 **SISSA**: PhD Physics/Math/Neuroscience - Campus Carso alto
🌍 **ICTP**: UNESCO Theoretical Physics - Miramare mare
💼 **MIB**: Executive MBA/Management - Palazzo Ferdinandeo

⚠️ **ACCESSO RISERVATO**:
- Tutte richiedono **badge/registrazione**
- Visitatori: contattare reception in anticipo
- Community internazionale (inglese lingua principale)

**TRASPORTI**:
- SISSA: Bus 38 dedicato dal centro
- ICTP: Bus 6 costiera o Treno Miramare
- MIB: Bus 11/25 salita Rozzol

**BORA**: 
- SISSA espostissima (come Campus Europa UniTS)
- ICTP protetta da Parco Miramare
- MIB zone collinare ventosa

☕ **CULTURA**: 
- SISSA: Cantina sociale terrazza vista Golfo
- ICTP: Cafeteria internazionale + Castello vicino
- MIB: Ambiente business executive

**TRIESTE "CITTÀ DELLA SCIENZA"**: Queste 3 istituzioni + UniTS/Area Science Park rendono Trieste hub ricerca internazionale unico in Italia!`,
        mezziPubblici: ['Bus TT 6, 11, 25, 38', 'Treno Regionale'],
        tempoStimato: '15-30 min da centro',
        note: '🌟 Istituzioni internazionali eccellenti. Accesso regolato ma ambiente top-level!'
    });

    return directions;
};
