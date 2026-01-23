import { StudyRoom, DirectionsFromLocation } from '../../types';

export const unigeSavonaRooms: StudyRoom[] = [
    // ============================================================
    // CAMPUS SAVONA (Legino - Via Magliotto)
    // 🌱 Smart City Living Lab - Green Campus
    // ============================================================
    {
        id: 'unige_sv_biblio',
        nome: 'Biblioteca Campus Savona',
        edificio: 'Palazzina Biblioteche',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 120,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['WiFi Eduroam', 'Box Insonorizzati', '🌱 Smart Grid', 'Parcheggio Gratuito'],
        latitude: 44.3085,
        longitude: 8.4650,
        indirizzo: 'Via Armando Magliotto 2, Savona',
        university: 'UniGe',
        occupancy_rate: 'Medio',
        notes: '🌱 Biblioteca principale del Living Lab! Campus moderna alimentata da smart grid (produce la propria energia). Box insonorizzati per concentrazione. PARCHEGGIO GRATUITO interno - paradiso per pendolari vs caos Genova!'
    },
    {
        id: 'unige_sv_lagorio',
        nome: 'Aule Studio Palazzina Lagorio',
        edificio: 'Palazzina Lagorio',
        piano: 1,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '08:00',
        orarioChiusura: '19:00',
        servizi: ['AC', 'Prese', 'Group Work', 'Parcheggio Gratuito'],
        latitude: 44.3088,
        longitude: 8.4652,
        indirizzo: 'Via Magliotto 2, Savona',
        university: 'UniGe',
        notes: 'Spazi ideali per lavori di gruppo. Focus Ingegneria/Comunicazione. Ambiente moderno e collaborativo. Campus compatto - tutto a 5 min a piedi.'
    },
    {
        id: 'unige_sv_branca',
        nome: 'Palazzina Branca - Spazi Studio',
        edificio: 'Palazzina Branca',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['Scienze Motorie', 'Relax', 'Vista Impianti'],
        latitude: 44.3080,
        longitude: 8.4645,
        indirizzo: 'Via Magliotto 2, Savona',
        university: 'UniGe',
        notes: '⚽ Vicino agli impianti sportivi! Atmosfera dinamica e sportiva - molti atleti studiano qui. Perfetto per chi alterna studio e allenamento (Scienze Motorie).'
    },
    {
        id: 'unige_sv_mensa',
        nome: 'Area Mensa & Lounge Outdoor',
        edificio: 'Edificio Mensa',
        piano: 0,
        postiDisponibili: 150,
        postiTotali: 200,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Ristorazione', 'Parco Esterno', 'Tavoli Outdoor', '🌳 Verde'],
        latitude: 44.3090,
        longitude: 8.4655,
        indirizzo: 'Campus Savona',
        university: 'UniGe',
        notes: '🌳 Studio outdoor sul prato! Tavoli esterni immersi nel verde del campus. Mensa disponibile - organizzati per giornata intera. Atmosfera rilassata vs Genova caotica.'
    },
    {
        id: 'unige_sv_sport',
        nome: 'Zone Relax Impianti Sportivi',
        edificio: 'Area Sportiva',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 60,
        orarioApertura: 'Variabile',
        orarioChiusura: 'Variabile',
        servizi: ['Pista', 'Campo', 'Gradinate', '⚽ Sport Hub'],
        latitude: 44.3075,
        longitude: 8.4640,
        indirizzo: 'Campus Savona',
        university: 'UniGe',
        notes: '⚽ SPORT SCIENCE HUB! Gradinate e prato vicino impianti. Atmosfera dinamica con atleti che corrono/nuotano. Perfetto per ripasso leggero post-allenamento. Scienze Motorie cuore pulsante.'
    },
    // ============================================================
    // SAVONA CENTRO (Civica e Outdoor)
    // 🏰 Centro storico pianeggiante - Mare a due passi
    // ============================================================
    {
        id: 'sv_barrili',
        nome: 'Biblioteca Civica "Anton Giulio Barrili"',
        edificio: 'Ex Convento Monturbano',
        piano: 1,
        postiDisponibili: 150,
        postiTotali: 180,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['Storica', 'Centro Città', 'Silenzio'],
        latitude: 44.3075,
        longitude: 8.4795,
        indirizzo: 'Piazza Monturbano 1, Savona',
        university: 'UniGe',
        occupancy_rate: 'Alto',
        notes: '📚 Civica principale di Savona! Ex convento storico usatissima da studenti UniGe. Centro città pianeggiante a 10 min a piedi dalla stazione. Ambiente silenzioso e concentrato.'
    },
    {
        id: 'sv_priamar',
        nome: 'Fortezza del Priamar (Outdoor Study)',
        edificio: 'Bastioni Priamar',
        piano: 0,
        postiDisponibili: 200,
        postiTotali: 200,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['Vista Mare', 'Panchine', '🏰 Fortezza Storica', 'Outdoor'],
        latitude: 44.3055,
        longitude: 8.4850,
        indirizzo: 'Corso Mazzini, Savona',
        university: 'UniGe',
        notes: '🏰⭐ SPOT ICONICO VISTA PORTO! Fortezza storica con bastioni e vista mare spettacolare. Perfetto per ripasso leggero o lettura outdoor. Panchine panoramiche. NON per studio intenso ma per rilassarsi studiando con panorama!'
    },
];

export const getDirectionsSavona = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];
    
    const isCampus = room.indirizzo.includes('Magliotto') || room.id.includes('unige_sv');
    const isCentro = room.id.includes('barrili') || room.id.includes('priamar');

    // CAMPUS LEGINO
    if (isCampus) {
        directions.push({
            luogo: 'Stazione FS Savona / Da Genova',
            descrizione: `🌱 **CAMPUS SAVONA (Via Magliotto, Legino) - GREEN LIVING LAB**

⭐ **PARCHEGGIO GRATUITO = PARADISO** (vs incubo Genova!)

**Da Stazione FS Savona** (Piazza Aldo Moro):

1. **🚌 BUS TPL SAVONA (CONSIGLIATO PER PENDOLARI)**:
   - Linea **1** (direzione Legino) o **4/1** (circolare)
   - Fermata: "Università" o "Magliotto"
   - Frequenza: ogni 15-20 min
   - Tempo: 10-15 min
   - 💡 App TPL Savona per orari real-time!

2. **🚶 A PIEDI**:
   - 25-30 min verso ovest (Via Nizza → Via Stalingrado → Via Magliotto)
   - Percorso pianeggiante
   - Fattibile ma meglio bus se hai zaino pesante

3. **🚴 IN BICI**:
   - 15 min dalla stazione
   - Piste ciclabili parziali

4. **🚗 IN AUTO (HIGHLIGHT!)** ⭐:
   - Uscita A10 Savona → Segui indicazioni "Università"
   - **PARCHEGGIO GRATUITO INTERNO ENORME** - entra nel campus e parcheggi sotto l'aula!
   - Mostra badge UniGe all'ingresso se richiesto (ma di solito libero)
   - 🎯 VANTAGGIO ENORME: A Genova trovare parcheggio è impossibile, qui è facile e gratis!

**🚆 DA GENOVA (PENDOLARI)**:
- Treno Regionale Genova → Savona (40-50 min)
- Poi: Bus TPL 1 dalla stazione (coincidenza standard)
- Molti studenti fanno questo percorso quotidiano

**CAMPUS COMPATTO**: Tutto raggiungibile a piedi in 5 min. Verde immerso nella natura!`,
            mezziPubblici: ['🚌 Bus TPL 1, 4/1 (FONDAMENTALE)', '🚴 Bici', '🚗 Auto (parcheggio gratuito!)'],
            tempoStimato: '10-15 min bus / 40-50 min da Genova',
            note: '🚗 PARCHEGGIO GRATUITO! 🌱 Smart grid campus.'
        });
    }
    // CENTRO SAVONA (Civica / Priamar)
    else if (isCentro) {
        directions.push({
            luogo: 'Stazione FS Savona / Porto',
            descrizione: `🏰 **CENTRO SAVONA (Barrili / Priamar) - PIANEGGIANTE E COMODO**

Per centro storico (Biblioteca Barrili / Fortezza Priamar):

1. **🚶 A PIEDI DALLA STAZIONE (CONSIGLIATO)**:
   - 10-15 min verso est (Via Paleocapa → centro storico)
   - Savona centro è **PIANEGGIANTE** (non come Genova verticale!)
   - Tutto facilmente raggiungibile a piedi

2. **🚌 BUS TPL URBANE**:
   - Linee centro città
   - Fermate: "Piazza del Popolo" o "Priamar"
   - Ma a piedi è più veloce

3. **🚴 IN BICI**:
   - 5-10 min dalla stazione
   - Centro ciclabile

🏰 **FORTEZZA PRIAMAR**:
- Vista porto spettacolare!
- Bastioni storici per studio outdoor scenografico
- NON per sessioni intense, ma per ripasso/lettura con panorama
- Mare visibile - atmosfera rilassante

📚 **BIBLIOTECA BARRILI**:
- Ex convento storico
- Civica principale usatissima da studenti UniGe
- Silenzio e concentrazione

**NOTE**: Centro storico piccolo e pedonale. Tutto vicino!`,
            mezziPubblici: ['🚶 A piedi (migliore)', '🚌 Bus TPL urbane', '🚴 Bici'],
            tempoStimato: '10-15 min a piedi dalla stazione',
            note: '🏰 Priamar vista porto spettacolare! Centro pianeggiante.'
        });
    }

    // Info generali SEMPRE
    directions.push({
        luogo: '🌍 INFO GENERALI CAMPUS SAVONA',
        descrizione: `🌱 **SAVONA: IL CAMPUS "DIVERSO" DI UNIGE**

**CARATTERISTICHE UNICHE**:

1. **🌱 SMART CITY LIVING LAB**:
   - Il campus **produce la propria energia** tramite smart grid!
   - Progetto eco-sostenibile unico in Italia
   - Tag: Green Campus / Eco-Friendly
   - Focus: Ingegneria Energetica, Comunicazione, Scienze Motorie

2. **🚗 PARCHEGGIO = PARADISO**:
   - **Gratuito interno enorme** (vs incubo Genova!)
   - Entri nel campus con l'auto e parcheggi sotto l'aula
   - Info cruciale per pendolari dalla Liguria di Ponente!

3. **⚽ SPORT SCIENCE HUB**:
   - Sede di Scienze Motorie = atmosfera sportiva
   - Pieno di atleti che corrono/nuotano/studiano
   - Più dinamico rispetto alle sedi accademiche classiche
   - Impianti sportivi integrati nel campus

4. **🌳 CAMPUS COMPATTO E VERDE**:
   - Tutto raggiungibile a piedi in 5 min
   - Parco e prato per studio outdoor
   - Atmosfera tranquilla vs Genova caotica
   - Meno monumentale ma più funzionale e moderno

5. **🚆 PENDOLARI TRENO**:
   - Molti studenti arrivano da Genova (40-50 min)
   - Coincidenza standard: Treno → Stazione Savona → Bus TPL 1
   - App TPL Savona essenziale per orari
   - Campus più piccolo = meno dispersivo

6. **🏖️ MARE (MA NON TROPPO)**:
   - Campus Legino NON è sul mare (come Darsena Genova)
   - Mare a 10-15 min bus/bici
   - Fortezza Priamar per vista porto scenografica

**CONFRONTO GENOVA ↔ SAVONA**:
- Genova: Monumentale, verticale, caotica, parcheggio impossibile
- Savona: Moderna, pianeggiante, tranquilla, parcheggio facile

**LOGISTICA**:
- Piccolo polo ma completo (Ingegneria, Sport, Comunicazione)
- Mensa disponibile - organizzati per giornata intera se pendolare
- Meno sedi sparse = meno spostamenti

Savona è l'alternativa "green e sportiva" per chi vuole studiare in un ambiente moderno immerso nel verde, con la comodità del parcheggio e l'atmosfera rilassata rispetto al caos genovese!`,
        mezziPubblici: ['🚌 TPL Bus', '🚴 Bici', '🚗 Auto (consigliata!)'],
        tempoStimato: 'Max 15 min interni campus',
        note: '🌱 Living Lab eco-friendly. 🚗 Parcheggio gratis!'
    });

    return directions;
};
