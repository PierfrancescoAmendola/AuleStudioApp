import { StudyRoom, DirectionsFromLocation } from '../../types';

export const afamPugliaRooms: StudyRoom[] = [
    // ============================================================
    // BARI - ACCADEMIA DI BELLE ARTI (ABA Bari)
    // ============================================================
    {
        id: 'aba_bari_biblio',
        nome: 'Biblioteca Storica Accademia Albertina di Bari',
        edificio: 'Sede Centrale',
        piano: 1,
        postiDisponibili: 65,
        postiTotali: 80,
        orarioApertura: '09:00',
        orarioChiusura: '17:30',
        servizi: ['Fondi Antichi', 'Pinacoteca Annessa', 'Silenzio'],
        latitude: 41.1118,
        longitude: 16.8728,
        indirizzo: 'Via Re David / Viale Unità d\'Italia, Bari',
        university: 'AFAM - ABA Bari',
        tags: ['Accademia', 'Bari', '🎨 Arte', '🔇 Silenzio', '📖 Storico'],
        notes: 'Ambiente ottocentesco, ideale per Storia dell\'Arte e Restauro. Silenzio richiesto — qui si studia teoria, non si lavora con i materiali.'
    },
    {
        id: 'aba_bari_lab',
        nome: 'Laboratori Pittura, Scultura e Design',
        edificio: 'Sede Operativa',
        piano: 0,
        postiDisponibili: 110,
        postiTotali: 140,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['Cavalletti', 'Tornio', 'Luce Naturale', 'Sporco Tollerato'],
        latitude: 41.1118,
        longitude: 16.8728,
        indirizzo: 'Via Re David, Bari',
        university: 'AFAM - ABA Bari',
        tags: ['Accademia', 'Bari', '🎨 Atelier', '🧱 Sporco Tollerato', '🖌️ Pratica Materiali'],
        notes: 'Spazi operativi dove si crea. Odore di trementina e argilla. Gesso, creta e colori a olio sono benvenuti — qui si può macchiare!'
    },
    {
        id: 'aba_bari_mediateca',
        nome: 'Mediateca Regionale Pugliese',
        edificio: 'Palazzo ex Poste',
        piano: 0,
        postiDisponibili: 90,
        postiTotali: 110,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['Archivio Film', 'Postazioni Video', 'Tavoli Grandi'],
        latitude: 41.1192,
        longitude: 16.8688,
        indirizzo: 'Via Zanardelli 30, Bari',
        university: 'AFAM - ABA Bari',
        tags: ['Accademia', 'Bari', '🎬 Nuovi Media', '📐 Tavoli Grandi', '🎭 Scenografia'],
        notes: 'Hub per Scenografia e Nuove Tecnologie. Tavoli grandi per srotolare progetti e storyboard.'
    },

    // ============================================================
    // FOGGIA - ACCADEMIA DI BELLE ARTI
    // ============================================================
    {
        id: 'aba_foggia_biblio',
        nome: 'Biblioteca ABA Foggia',
        edificio: 'Sede Centrale',
        piano: 1,
        postiDisponibili: 55,
        postiTotali: 70,
        orarioApertura: '09:00',
        orarioChiusura: '17:30',
        servizi: ['Cataloghi Mostre', 'Tranquillità'],
        latitude: 41.4592,
        longitude: 15.5482,
        indirizzo: 'Corso Garibaldi 18, Foggia',
        university: 'AFAM - ABA Foggia',
        tags: ['Accademia', 'Foggia', '🎨 Arte', '🔇 Silenzio'],
        notes: 'Raccolta e curata. Ambiente tranquillo per studio teorico.'
    },
    {
        id: 'aba_foggia_lab',
        nome: 'Aule Progettazione e Graphic Design',
        edificio: 'Sede Centrale',
        piano: 2,
        postiDisponibili: 70,
        postiTotali: 90,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['Tavoli Grandi', 'Prese PC', 'Sporco Tollerato'],
        latitude: 41.4592,
        longitude: 15.5482,
        indirizzo: 'Corso Garibaldi 18, Foggia',
        university: 'AFAM - ABA Foggia',
        tags: ['Accademia', 'Foggia', '🖌️ Design', '📐 Tavoli Grandi', '🧱 Sporco Tollerato'],
        notes: 'Spazi per progetti e brainstorming. Tavoli extra-large per tavole A0 e plastici.'
    },

    // ============================================================
    // LECCE - ACCADEMIA DI BELLE ARTI
    // ============================================================
    {
        id: 'aba_lecce_biblio',
        nome: 'Biblioteca ABA Lecce',
        edificio: 'Ex Convento dei Domenicani',
        piano: 1,
        postiDisponibili: 45,
        postiTotali: 60,
        orarioApertura: '09:00',
        orarioChiusura: '14:00',
        servizi: ['Affreschi', 'Centro Storico'],
        latitude: 40.3548,
        longitude: 18.1672,
        indirizzo: 'Via Libertini 3, Lecce',
        university: 'AFAM - ABA Lecce',
        tags: ['Accademia', 'Lecce', '🏛️ Barocco', '🎨 Arte', '⚠️ Orario Ridotto'],
        notes: 'Orari ridotti (chiude alle 14!) – verificare sempre. Ambiente barocco mozzafiato.'
    },
    {
        id: 'aba_lecce_chiostro',
        nome: 'Chiostro Monumentale (Aule Aperte)',
        edificio: 'Ex Convento',
        piano: 0,
        postiDisponibili: 110,
        postiTotali: 130,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['Luce Naturale', 'Spazio Scultura', 'Sporco Tollerato'],
        latitude: 40.3548,
        longitude: 18.1672,
        indirizzo: 'Via Libertini 3, Lecce',
        university: 'AFAM - ABA Lecce',
        tags: ['Accademia', 'Lecce', '☀️ Outdoor', '🧱 Sporco Tollerato', '🗿 Scultura'],
        notes: 'Studiare e lavorare direttamente nel chiostro monumentale. Scultura, installazioni e creta sono benvenuti!'
    },

    // ============================================================
    // CONSERVATORI
    // ============================================================
    {
        id: 'cons_piccinni_bari',
        nome: 'Biblioteca Musicale "Piccinni"',
        edificio: 'Villa San Giovanni',
        piano: 1,
        postiDisponibili: 55,
        postiTotali: 70,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Partiture Rare', 'Postazioni Ascolto', 'Sale Prova Prenotabili'],
        latitude: 41.1090,
        longitude: 16.8640,
        indirizzo: 'Via Cifarelli 26, Bari',
        university: 'AFAM - Cons. Bari',
        tags: ['Conservatorio', 'Bari', '🎵 Musica', '🎹 Sale Prova', '📅 Prenotazione'],
        notes: 'Tempio della musica meridionale. La lotta per un\'aula con pianoforte è feroce — prenota in anticipo!'
    },
    {
        id: 'cons_rota_monopoli',
        nome: 'Biblioteca "Nino Rota"',
        edificio: 'Ex Convento Sant\'Antonio',
        piano: 1,
        postiDisponibili: 35,
        postiTotali: 45,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['Fondi Rota', 'Vista Mare', 'Postazioni Ascolto'],
        latitude: 40.9532,
        longitude: 17.3012,
        indirizzo: 'Piazza Sant\'Antonio 27, Monopoli',
        university: 'AFAM - Cons. Monopoli',
        tags: ['Conservatorio', 'Monopoli', '🎵 Musica', '🌊 Vista Mare'],
        notes: 'Gioiello affacciato sul mare. Fondi del Maestro Nino Rota — esperienza unica.'
    },
    {
        id: 'cons_paisiello_taranto',
        nome: 'Biblioteca "Paisiello"',
        edificio: 'Città Vecchia',
        piano: 1,
        postiDisponibili: 30,
        postiTotali: 40,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['Spartiti Antichi', 'Postazioni Ascolto'],
        latitude: 40.4758,
        longitude: 17.2292,
        indirizzo: 'Via Duomo 276, Taranto',
        university: 'AFAM - Cons. Taranto',
        tags: ['Conservatorio', 'Taranto', '🎵 Musica', '🏛️ Città Vecchia'],
        notes: 'Sull\'isola della Città Vecchia. Spartiti antichi in un contesto storico unico.'
    },
    {
        id: 'cons_giordano_foggia',
        nome: 'Biblioteca "Giordano"',
        edificio: 'Sede Centrale',
        piano: 1,
        postiDisponibili: 45,
        postiTotali: 55,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Tranquillità', 'Postazioni Ascolto'],
        latitude: 41.4588,
        longitude: 15.5462,
        indirizzo: 'Piazza Vincenzo Nigri 13, Foggia',
        university: 'AFAM - Cons. Foggia',
        tags: ['Conservatorio', 'Foggia', '🎵 Musica'],
        notes: 'Vicino al polo umanistico di Via Arpi. Tranquillo e raccolto.'
    }
];

export const getDirectionsAFAMPuglia = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const isBari = room.indirizzo.includes('Bari') || room.indirizzo.includes('Re David') || room.indirizzo.includes('Cifarelli') || room.indirizzo.includes('Zanardelli');
    const isLecce = room.indirizzo.includes('Lecce') || room.indirizzo.includes('Libertini');
    const isFoggia = room.indirizzo.includes('Foggia') || room.indirizzo.includes('Garibaldi') || room.indirizzo.includes('Nigri');
    const isTaranto = room.indirizzo.includes('Taranto') || room.indirizzo.includes('Duomo');
    const isMonopoli = room.indirizzo.includes('Monopoli');

    if (isBari) {
        directions.push({
            luogo: 'Stazione Bari Centrale',
            descrizione: `Per tutte le sedi AFAM baresi (ABA Bari, Cons. Piccinni, Mediateca):
1. **A piedi**: 8-15 minuti (Via Re David per ABA, Via Cifarelli per Conservatorio, Via Zanardelli per Mediateca).
2. **Bus AMTAB**: Linee 1, 2, 4, 10 (fermata "Ateneo" o "Cifarelli").
3. **Bici**: Piste ciclabili ottime.
**NOTE**: ZTL centro – evita l'auto.`,
            mezziPubblici: ['A piedi', 'Bus AMTAB'],
            tempoStimato: '8-15 min',
            note: 'Centro compatto.'
        });
    }

    if (isLecce) {
        directions.push({
            luogo: 'Stazione FS Lecce',
            descrizione: `Per ABA Lecce (Ex Convento dei Domenicani):
1. **A piedi**: 12-18 minuti dal centro storico (Via Libertini).
2. **Bus SGM**: Linee 1, 2, 27.
**NOTE**: ZTL centro storico – bici o piedi consigliati. Attenzione: biblioteca chiude alle 14!`,
            mezziPubblici: ['A piedi', 'Bus SGM'],
            tempoStimato: '12-18 min',
            note: 'Barocco leccese.'
        });
    }

    if (isFoggia) {
        directions.push({
            luogo: 'Stazione FS Foggia',
            descrizione: `Per ABA Foggia e Cons. Giordano:
1. **A piedi**: 15-20 minuti verso centro (Corso Garibaldi / Piazza Nigri).
2. **Bus ATAF**: Linee circolari.
**NOTE**: Zona pedonale centrale. Le due sedi sono vicinissime — puoi coprirle entrambe a piedi.`,
            mezziPubblici: ['A piedi', 'Bus ATAF'],
            tempoStimato: '15-20 min',
            note: 'Centro vivace.'
        });
    }

    if (isTaranto) {
        directions.push({
            luogo: 'Ponte Girevole / Centro Taranto',
            descrizione: `Per Cons. Paisiello (Città Vecchia):
1. **A piedi o bus Kyma**: Attraversa il Ponte Girevole ed entra nei vicoli dell'isola (Via Duomo).
**NOTE**: Città Vecchia è pedonale e affascinante, auto sconsigliata. Parcheggia nella città nuova.`,
            mezziPubblici: ['Bus Kyma', 'A piedi'],
            tempoStimato: '10-15 min',
            note: 'Borgo storico.'
        });
    }

    if (isMonopoli) {
        directions.push({
            luogo: 'Stazione Monopoli',
            descrizione: `Per Cons. "Nino Rota" (Ex Convento Sant'Antonio):
1. **A piedi**: 10 minuti dal centro / stazione verso Piazza Sant'Antonio.
2. **Treno**: Monopoli è sulla linea Trenitalia Bari-Lecce.
**NOTE**: Gioiello affacciato sul mare — vale il viaggio!`,
            mezziPubblici: ['A piedi', 'Treno'],
            tempoStimato: '10 min',
            note: 'Vista mare.'
        });
    }

    return directions;
};
