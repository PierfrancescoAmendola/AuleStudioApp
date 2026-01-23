import { StudyRoom, DirectionsFromLocation } from '../../types';

export const unisaRooms: StudyRoom[] = [
    // ============================================================
    // CAMPUS DI FISCIANO (Principale)
    // ============================================================
    {
        id: 'unisa_biblio_umanistica',
        nome: 'Biblioteca Umanistica "E.R. Caianiello"',
        edificio: 'Edificio Biblioteca Centrale',
        piano: 0,
        postiDisponibili: 450,
        postiTotali: 600,
        orarioApertura: '08:30',
        orarioChiusura: '18:15',
        servizi: ['WiFi Eduroam', 'Prese al banco', 'PC Consultazione', 'Accesso Disabili', 'Aula Multimediale', '18 Sale Consultazione'],
        latitude: 40.7705,
        longitude: 14.7905,
        indirizzo: 'Via Giovanni Paolo II 132, Fisciano (SA)',
        university: 'UniSa',
        tags: ['biblioteca', 'umanistica', 'giuridica', 'economica', 'scaffale aperto', 'grande'],
        vibe: 'Silenzioso e imponente',
        occupancy_rate: 'Molto Alto',
        notes: 'La biblioteca più grande del campus. Raccoglie collezioni umanistiche, giuridiche ed economiche. 18 sale con scaffale aperto. Oltre 800.000 volumi. Centro Documentazione Europea (CDE).'
    },
    {
        id: 'unisa_biblio_scientifica',
        nome: 'Biblioteca Tecnico-Scientifica',
        edificio: 'Edificio Biblioteca Scientifica (Arch. Nicola Pagliara)',
        piano: 0,
        postiDisponibili: 400,
        postiTotali: 540,
        orarioApertura: '08:30',
        orarioChiusura: '18:15',
        servizi: ['WiFi Eduroam', 'RFID', '7 Sale Consultazione', 'Aria Condizionata', 'PC Consultazione'],
        latitude: 40.7728,
        longitude: 14.7892,
        indirizzo: 'Via Giovanni Paolo II 132, Fisciano (SA)',
        university: 'UniSa',
        tags: ['biblioteca', 'scientifica', 'ingegneria', 'farmacia', 'scienze', 'moderna'],
        vibe: 'Moderno e luminoso',
        occupancy_rate: 'Alto',
        notes: 'Inaugurata nel 2013. Edificio moderno su 8 livelli (5 visibili + 3 interrati). 540 posti in 7 sale. Tecnologia RFID. Raccoglie i fondi di Scienze, Ingegneria e Farmacia.'
    },
    {
        id: 'unisa_aula_multimediale',
        nome: 'Aula Multimediale (Biblioteca Umanistica)',
        edificio: 'Edificio Biblioteca Centrale',
        piano: 0,
        postiDisponibili: 10,
        postiTotali: 12,
        orarioApertura: '09:00',
        orarioChiusura: '14:00',
        servizi: ['PC Workstations', 'Ricerca Banche Dati', 'Assistenza'],
        latitude: 40.7705,
        longitude: 14.7905,
        indirizzo: 'Via Giovanni Paolo II 132, Fisciano (SA)',
        university: 'UniSa',
        tags: ['multimediale', 'pc', 'ricerca', 'prenotazione'],
        vibe: 'Tecnologico',
        notes: 'Aula con 12 workstations per ricerca su banche dati. Prenotazione consigliata: aulamultimedialecba@unisa.it'
    },
    {
        id: 'unisa_aula_stecca7',
        nome: 'Aula Studio Stecca 7 (Giurisprudenza)',
        edificio: 'Edificio A1 - Stecca 7',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 120,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi Eduroam', 'Macchinette Snack', 'Socialità'],
        latitude: 40.7715,
        longitude: 14.7920,
        indirizzo: 'Campus Fisciano, Stecca 7',
        university: 'UniSa',
        tags: ['giurisprudenza', 'stecca', 'informale', 'sociale'],
        vibe: 'Informale e vivace',
        notes: 'Aula studio informale, ottima per ripasso veloce tra le lezioni. Zona Giurisprudenza.'
    },
    {
        id: 'unisa_aula_stecca4',
        nome: 'Aula Studio Stecca 4 (Economia)',
        edificio: 'Edificio C - Stecca 4',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '08:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Vicino Aule Lezione'],
        latitude: 40.7712,
        longitude: 14.7898,
        indirizzo: 'Campus Fisciano, Stecca 4',
        university: 'UniSa',
        tags: ['economia', 'stecca', 'aule'],
        vibe: 'Pratico',
        notes: 'Comoda per gli studenti di Economia. Vicina alle aule delle lezioni.'
    },
    {
        id: 'unisa_aula_ingegneria',
        nome: 'Aula Studio Ingegneria (Edificio F)',
        edificio: 'Edificio F - Ingegneria',
        piano: 1,
        postiDisponibili: 100,
        postiTotali: 150,
        orarioApertura: '08:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Prese Elettriche', 'Lavagne'],
        latitude: 40.7735,
        longitude: 14.7880,
        indirizzo: 'Campus Fisciano, Edificio F',
        university: 'UniSa',
        tags: ['ingegneria', 'tecnico', 'lavagne', 'gruppo'],
        vibe: 'Tecnico e concentrato',
        notes: 'Spazio ampio per studenti di Ingegneria. Vicino alla Biblioteca Scientifica.'
    },
    {
        id: 'unisa_spazio_mensa',
        nome: 'Spazio Studio Mensa Centrale',
        edificio: 'Edificio Mensa',
        piano: 1,
        postiDisponibili: 150,
        postiTotali: 300,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Tavoli grandi', 'Rumoroso', 'Cibo ammesso'],
        latitude: 40.7740,
        longitude: 14.7910,
        indirizzo: 'Viale della Conoscenza, Fisciano (SA)',
        university: 'UniSa',
        tags: ['mensa', 'gruppo', 'rumoroso', 'cibo'],
        vibe: 'Sociale e rumoroso',
        occupancy_rate: 'Medio',
        notes: 'Ottimo per lavori di gruppo dove è permesso parlare. Evitare orario pranzo (12:30-14:30).'
    },
    {
        id: 'unisa_residenze_fisciano',
        nome: 'Aule Studio Residenze (ADISURC)',
        edificio: 'Residenze Universitarie Fisciano',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 60,
        orarioApertura: 'H24',
        orarioChiusura: 'H24',
        servizi: ['WiFi', 'H24', 'Solo Residenti'],
        latitude: 40.7750,
        longitude: 14.7930,
        indirizzo: 'Residenze Universitarie, Fisciano (SA)',
        university: 'UniSa',
        tags: ['residenze', 'h24', 'notte', 'adisu'],
        vibe: 'Notturno e residenziale',
        extendedHours: true,
        notes: 'Accessibile H24 per i residenti delle strutture ADISURC. Ideale per sessioni notturne.'
    },
    {
        id: 'unisa_teatro',
        nome: 'Spazio Teatro (eventi e studio)',
        edificio: 'Teatro di Ateneo',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 100,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['WiFi', 'Spazio Creativo', 'Eventi'],
        latitude: 40.7718,
        longitude: 14.7925,
        indirizzo: 'Campus Fisciano, Teatro',
        university: 'UniSa',
        tags: ['teatro', 'cultura', 'eventi', 'creativo'],
        vibe: 'Culturale',
        notes: 'Spazio usato per eventi ma con aree studio disponibili. Atmosfera culturale.'
    },

    // ============================================================
    // CAMPUS DI BARONISSI (Medicina)
    // ============================================================
    {
        id: 'unisa_baronissi_biblio',
        nome: 'Biblioteca di Medicina e Chirurgia',
        edificio: 'Campus Baronissi - Corpo C',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 40,
        orarioApertura: '08:30',
        orarioChiusura: '18:15',
        servizi: ['WiFi Eduroam', 'Silenzio Assoluto', 'Giardino', 'Parcheggio facile'],
        latitude: 40.7420,
        longitude: 14.7685,
        indirizzo: 'Via S. Allende, Baronissi (SA)',
        university: 'UniSa',
        tags: ['medicina', 'baronissi', 'specialistica', 'silenzio'],
        vibe: 'Tranquillo e specialistico',
        notes: 'Biblioteca riservata prevalentemente a Medicina e Chirurgia. 40 postazioni. Include donazione del chirurgo Matteo Della Corte.'
    },
    {
        id: 'unisa_baronissi_aula',
        nome: 'Aula Studio Campus Baronissi',
        edificio: 'Campus Baronissi - Edificio Didattica',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '08:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi Eduroam', 'Macchinette', 'Parcheggio'],
        latitude: 40.7425,
        longitude: 14.7690,
        indirizzo: 'Via S. Allende, Baronissi (SA)',
        university: 'UniSa',
        tags: ['medicina', 'baronissi', 'aula', 'parcheggio'],
        vibe: 'Pratico e comodo',
        notes: 'Aula studio generale del campus di Baronissi. Parcheggio ampio e gratuito.'
    },

    // ============================================================
    // SALERNO CENTRO (Sedi Staccate)
    // ============================================================
    {
        id: 'unisa_salerno_lettere',
        nome: 'Sede di Salerno (Polo Lettere)',
        edificio: 'Sede Centro Storico',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 50,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['WiFi', 'Centro Città'],
        latitude: 40.6800,
        longitude: 14.7650,
        indirizzo: 'Via dei Canali, Salerno',
        university: 'UniSa',
        tags: ['salerno', 'centro', 'lettere', 'città'],
        vibe: 'Cittadino e storico',
        notes: 'Sede staccata nel centro di Salerno. Comoda per chi abita in città e non vuole raggiungere Fisciano.'
    }
];

export const getDirectionsUnisa = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];
    const isBaronissi = room.indirizzo.includes('Baronissi');
    const isSalernoCity = room.indirizzo.includes('Via dei Canali') || (room.indirizzo.includes('Salerno') && !room.indirizzo.includes('Fisciano'));

    if (isBaronissi) {
        directions.push({
            luogo: 'Da Salerno (Stazione)',
            descrizione: 'Prendi il Bus 10 o 22 (Busitalia). Scendi a Baronissi Centro.',
            mezziPubblici: ['Bus 10', 'Bus 22'],
            tempoStimato: '25 min',
            note: 'Il campus è a 5 minuti a piedi dal centro.'
        });
        directions.push({
            luogo: 'In Treno',
            descrizione: 'Treno Regionale per Mercato San Severino. Fermata "Baronissi".',
            mezziPubblici: ['Treno Reg'],
            tempoStimato: '15 min da Salerno',
        });
        directions.push({
            luogo: 'In Auto',
            descrizione: 'Raccordo SA-AV, uscita Baronissi Sud.',
            mezziPubblici: ['Auto'],
            tempoStimato: '-',
            note: 'Parcheggio ampio gratuito.'
        });
    } else if (isSalernoCity) {
        directions.push({
            luogo: 'Da Stazione FS Salerno',
            descrizione: 'A piedi verso il centro storico (10-15 min).',
            mezziPubblici: ['A piedi'],
            tempoStimato: '15 min',
            note: 'Zona pedonale del centro.'
        });
    } else {
        // Fisciano
        directions.push({
            luogo: 'Da Napoli (Bus)',
            descrizione: 'SITA SUD o AIR CAMPANIA. Partenze frequenti da P.zza Garibaldi. Arrivo Terminal Bus UniSa.',
            mezziPubblici: ['SITA', 'AIR'],
            tempoStimato: '50 min',
            note: 'Il biglietto si fa a bordo o in biglietteria.'
        });
        directions.push({
            luogo: 'Da Salerno (Bus)',
            descrizione: 'Linee 7, 17 o 27 Busitalia dalla Stazione. Express in 20 minuti.',
            mezziPubblici: ['Bus 7', 'Bus 17', 'Bus 27'],
            tempoStimato: '25 min',
            note: 'Corse frequentissime. Arriva al Terminal Bus del campus.'
        });
        directions.push({
            luogo: 'Da Avellino',
            descrizione: 'Bus AIR Campania da Terminal Avellino. Diretto per UniSa.',
            mezziPubblici: ['AIR'],
            tempoStimato: '40 min',
            note: 'Collegamento diretto.'
        });
        directions.push({
            luogo: 'In Auto',
            descrizione: 'Raccordo SA-AV, Uscita "Università" (dedicata). Seguire indicazioni per parcheggi.',
            mezziPubblici: ['Auto'],
            tempoStimato: '-',
            note: 'Parcheggi Multipiano P1, P2 (gratuiti) o P3 (a pagamento). Uscita autostradale dedicata!'
        });
    }

    return directions;
};
