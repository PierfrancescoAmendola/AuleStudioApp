import { StudyRoom, DirectionsFromLocation } from '../../types';

export const unistrasiRooms: StudyRoom[] = [
    // ============================================================
    // SEDE CENTRALE (Piazzale Rosselli) - MAPPATURA PIANO PER PIANO
    // ============================================================
    {
        id: 'unistrasi_rosselli_biblio_centrale',
        nome: 'Sala Lettura Principale (Biblioteca)',
        edificio: 'Sede Centrale - Piano 1',
        piano: 1,
        postiDisponibili: 40,
        postiTotali: 100,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Linguistica', 'Prese PC', 'Silenzio Assoluto'],
        latitude: 43.3280,
        longitude: 11.3210,
        indirizzo: 'Piazza Carlo Rosselli 27/28, Siena',
        university: 'UniStrasi',
        tags: ['Sede Centrale', 'Siena', '📖 Consultazione', '🔇 Silenzio'],
        notes: 'Il sancta sanctorum dell\'ateneo. Silenzio tombale. Essenziale per chi prepara esami di linguistica generale o filologia.'
    },
    {
        id: 'unistrasi_rosselli_emeroteca',
        nome: 'Emeroteca e Consultazione Rapida',
        edificio: 'Sede Centrale - Piano 1 (Area Esterna Biblioteca)',
        piano: 1,
        postiDisponibili: 15,
        postiTotali: 30,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Riviste Internazionali', 'Quotidiani Esteri', 'Luce Naturale'],
        latitude: 43.3281,
        longitude: 11.3211,
        indirizzo: 'Piazza Carlo Rosselli 27/28, Siena',
        university: 'UniStrasi',
        tags: ['Sede Centrale', 'Siena', '📰 Emeroteca', '🌍 Internazionale'],
        notes: 'Area dedicata alla lettura di riviste e giornali stranieri. Ottima per tenersi aggiornati e fare letture leggere tra una lezione e l\'altra.'
    },
    {
        id: 'unistrasi_rosselli_lab_multimediale',
        nome: 'Laboratorio Linguistico Multimediale (Lab 1)',
        edificio: 'Sede Centrale - Piano 2',
        piano: 2,
        postiDisponibili: 20,
        postiTotali: 40,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Cuffie', 'Postazioni Audio', 'Aria Condizionata'],
        latitude: 43.3282,
        longitude: 11.3212,
        indirizzo: 'Piazza Carlo Rosselli 27/28, Siena',
        university: 'UniStrasi',
        tags: ['Laboratorio', 'Sede Centrale', '🎧 Ascolto', '🖥️ PC'],
        notes: 'Il regno della fonetica. Accessibile per l\'autoapprendimento quando non ci sono lezioni. Fondamentale per chi studia lingue orientali o arabo.'
    },
    {
        id: 'unistrasi_rosselli_lab_informatico',
        nome: 'Aula Informatica Studenti (Lab 2)',
        edificio: 'Sede Centrale - Piano 3',
        piano: 3,
        postiDisponibili: 15,
        postiTotali: 35,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['PC Windows', 'Stampanti', 'Connessione LAN'],
        latitude: 43.3281,
        longitude: 11.3213,
        indirizzo: 'Piazza Carlo Rosselli 27/28, Siena',
        university: 'UniStrasi',
        tags: ['Informatica', 'Sede Centrale', '💻 PC Desktop', '🖨️ Stampa'],
        notes: 'Utile per fare ricerche sulle banche dati, scrivere la tesi o stampare i biglietti del treno. Spesso usata per le simulazioni CILS.'
    },
    {
        id: 'unistrasi_rosselli_aule_vuote',
        nome: 'Aule Didattiche (Piani Superiori 4-5)',
        edificio: 'Sede Centrale - Piani 4 e 5',
        piano: 4,
        postiDisponibili: 50,
        postiTotali: 150,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['Lavoro di Gruppo', 'Lavagne', 'Aria Condizionata'],
        latitude: 43.3280,
        longitude: 11.3214,
        indirizzo: 'Piazza Carlo Rosselli 27/28, Siena',
        university: 'UniStrasi',
        tags: ['Aule', 'Sede Centrale', '🗣️ Lavoro di Gruppo', '📝 Lavagne'],
        notes: 'Quando non ci sono lezioni, gli studenti "occupano" queste aule per studiare in gruppo o fare simulazioni d\'esame ad alta voce.'
    },
    {
        id: 'unistrasi_rosselli_hall',
        nome: 'Hall d\'Ingresso / Open Space',
        edificio: 'Sede Centrale - Piano Terra',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 80,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Wi-Fi', 'Divanetti', 'Tandem Linguistico'],
        latitude: 43.3283,
        longitude: 11.3210,
        indirizzo: 'Piazza Carlo Rosselli 27/28, Siena',
        university: 'UniStrasi',
        tags: ['Social', 'Sede Centrale', '🗣️ Conversazione', '🛋️ Relax'],
        notes: 'Il crocevia internazionale. C\'è molto rumore, ma è il posto migliore per incontrare nativi stranieri e fare pratica linguistica informale.'
    },
    {
        id: 'unistrasi_rosselli_mensa',
        nome: 'Caffetteria e Area Ristoro',
        edificio: 'Sede Centrale - Seminterrato',
        piano: -1,
        postiDisponibili: 40,
        postiTotali: 100,
        orarioApertura: '08:00',
        orarioChiusura: '18:00',
        servizi: ['Pausa Pranzo', 'Macchinette', 'Rumoroso'],
        latitude: 43.3282,
        longitude: 11.3208,
        indirizzo: 'Piazza Carlo Rosselli 27/28, Siena',
        university: 'UniStrasi',
        tags: ['Mensa', 'Sede Centrale', '☕ Pausa Caffè', '🥪 Pranzo'],
        notes: 'Punto di ristoro interno. Fuori dagli orari di punta, i tavolini vengono usati per studiare o chiacchierare, ma il rumore delle macchinette è costante.'
    },
    {
        id: 'unistrasi_rosselli_terrazza',
        nome: 'Terrazza Panoramica (Se Aperta)',
        edificio: 'Sede Centrale - Ultimo Piano',
        piano: 6,
        postiDisponibili: 15,
        postiTotali: 30,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['Vista su Siena', 'Aria Pura', 'Pausa Veloce'],
        latitude: 43.3284,
        longitude: 11.3211,
        indirizzo: 'Piazza Carlo Rosselli 27/28, Siena',
        university: 'UniStrasi',
        tags: ['Outdoor', 'Sede Centrale', '☀️ Sole', '📸 Vista'],
        notes: 'L\'accesso è variabile, ma quando è aperta offre una vista spettacolare sulla città. Ottima per staccare gli occhi dai libri.'
    },

    // ============================================================
    // SEDE STORICA (Via dei Pispini / Ex Convento San Girolamo)
    // ============================================================
    {
        id: 'unistrasi_pispini_sala_lettura',
        nome: 'Sala Lettura Complesso San Girolamo',
        edificio: 'Sede Storica Pispini',
        piano: 1,
        postiDisponibili: 25,
        postiTotali: 60,
        orarioApertura: '09:00',
        orarioChiusura: '18:30',
        servizi: ['Silenzio', 'Prese PC', 'Ambiente Storico'],
        latitude: 43.3158,
        longitude: 11.3395,
        indirizzo: 'Via San Girolamo / Via dei Pispini, Siena',
        university: 'UniStrasi - Pispini',
        tags: ['Centro Storico', 'Siena', '🏛️ Ex Convento', '🔇 Silenzio'],
        notes: 'Incastonata dentro le mura medievali. L\'atmosfera è diametralmente opposta alla sede centrale: antica, raccolta, lentissima. Perfetta per la teoria.'
    },
    {
        id: 'unistrasi_pispini_chiostro',
        nome: 'Chiostro di San Girolamo',
        edificio: 'Sede Storica Pispini (Spazi Esterni)',
        piano: 0,
        postiDisponibili: 20,
        postiTotali: 40,
        orarioApertura: '09:00',
        orarioChiusura: '18:30',
        servizi: ['Fresco d\'Estate', 'Relax', 'Architettura'],
        latitude: 43.3159,
        longitude: 11.3396,
        indirizzo: 'Via San Girolamo, Siena',
        university: 'UniStrasi - Pispini',
        tags: ['Outdoor', 'Centro Storico', '🌲 Chiostro', '☕ Pausa'],
        notes: 'Studiare all\'aperto nel cortile dell\'ex convento. Il rumore della città qui non arriva. Un vero rifugio.'
    },
    {
        id: 'unistrasi_pispini_aule_progetto',
        nome: 'Aule Seminariali e Lavoro di Gruppo',
        edificio: 'Sede Storica Pispini',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 70,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Monitor', 'Tavoli Mobili', 'Dinamico'],
        latitude: 43.3160,
        longitude: 11.3394,
        indirizzo: 'Via San Girolamo, Siena',
        university: 'UniStrasi - Pispini',
        tags: ['Centro Storico', 'Siena', '🗣️ Seminari', '📺 Monitor'],
        notes: 'Aule dotate di schermi e tavoli modulari. Spesso usate per i laboratori di traduzione o didattica dell\'italiano L2.'
    },
    {
        id: 'unistrasi_pispini_ricerca',
        nome: 'Sala Ricerca e Dottorato (CeSIM)',
        edificio: 'Sede Storica Pispini - Piano 2',
        piano: 2,
        postiDisponibili: 10,
        postiTotali: 20,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Altissimo Silenzio', 'Fondi di Ricerca', 'Climatizzazione'],
        latitude: 43.3161,
        longitude: 11.3393,
        indirizzo: 'Via San Girolamo, Siena',
        university: 'UniStrasi - Pispini',
        tags: ['Ricerca', 'Centro Storico', '📚 Traduzione', '🔇 Silenzio'],
        notes: 'Area tendenzialmente riservata a ricercatori, tesisti e dottorandi. Se trovi posto, la concentrazione è garantita al 100%.'
    },

    // ============================================================
    // AREE ERSU (A supporto degli studenti UniStrasi)
    // ============================================================
    {
        id: 'unistrasi_mensa_bandini',
        nome: 'Aree Studio Mensa Bandini (ERSU)',
        edificio: 'Mensa Universitaria Bandini',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 150,
        orarioApertura: '10:00',
        orarioChiusura: '18:00',
        servizi: ['Vicinanza Pispini', 'Lavoro di Gruppo', 'Pausa Pranzo'],
        latitude: 43.3185,
        longitude: 11.3340,
        indirizzo: 'Via Sallustio Bandini 47, Siena',
        university: 'UniStrasi',
        tags: ['Mensa', 'ERSU', 'Siena Centro', '🥪 Pranzo', '🗣️ Social'],
        notes: 'La mensa più vicina alla sede dei Pispini. Fuori dall\'orario dei pasti diventa un enorme salotto di studio per studenti italiani e stranieri.'
    },
    {
        id: 'unistrasi_residenza_sperandie',
        nome: 'Sala Studio Residenza Sperandie',
        edificio: 'Residenza Universitaria ERSU Sperandie',
        piano: 0,
        postiDisponibili: 20,
        postiTotali: 40,
        orarioApertura: '08:00',
        orarioChiusura: '23:00',
        servizi: ['Apertura Serale', 'Internazionale', 'Wi-Fi'],
        latitude: 43.3110,
        longitude: 11.3280,
        indirizzo: 'Via delle Sperandie 37, Siena',
        university: 'UniStrasi',
        tags: ['Residenza', 'ERSU', 'Siena', '🌙 Serale', '🌍 Internazionale'],
        notes: 'Una delle residenze con la più alta concentrazione di studenti UniStrasi. La sala studio è accessibile anche in orari serali ed è ottima per studiare in piccoli gruppi.'
    }
];

export const getDirectionsUniStrasi = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];
    const id = room.id.toLowerCase();

    // ============================================================
    // PIAZZALE ROSSELLI (Il Paradiso dei Pendolari)
    // ============================================================
    if (id.includes('rosselli')) {
        directions.push({
            luogo: 'Stazione FS Siena',
            descrizione: `La Sede Centrale è l'hub logistico perfetto.
1. **A piedi**: Esci dalla Stazione, attraversa Piazzale Rosselli e sei dentro. (1 minuto).
2. **Auto**: Parcheggio sotterraneo della Stazione (a pagamento) o sosta libera nelle zone periferiche limitrofe.
3. **Bus Extraurbani**: Il terminal (Piazza Gramsci) dista una breve passeggiata o un bus urbano.`,
            mezziPubblici: ['A piedi', 'Treno', 'Auto'],
            tempoStimato: '1 min',
            note: 'Pendolari friendly. Zero stress di trasporto.'
        });
    }

    // ============================================================
    // VIA DEI PISPINI E SAN GIROLAMO (Centro Storico)
    // ============================================================
    if (id.includes('pispini') || id.includes('bandini') || id.includes('sperandie')) {
        directions.push({
            luogo: 'Siena Centro Storico',
            descrizione: `Questi spazi sono tutti all'interno delle Mura Medievali (ZTL).
1. **Dalla Stazione FS (Piazzale Rosselli)**: Prendi l'autobus urbano (es. s10 o Pollicino) verso il centro e scendi a Piazza del Sale/Logge del Papa, poi prosegui a piedi verso Via dei Pispini.
2. **A piedi dal Centro**: Da Piazza del Campo sono circa 10 minuti di camminata piacevole.
**ATTENZIONE**: Auto assolutamente vietata.`,
            mezziPubblici: ['Pollicino', 'A piedi'],
            tempoStimato: '15 min in Bus',
            note: 'Zona a Traffico Limitato. Procedere con i mini-bus urbani.'
        });
    }

    return directions;
};
