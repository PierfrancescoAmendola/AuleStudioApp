import { StudyRoom, DirectionsFromLocation } from '../../types';

export const romaTreRooms: StudyRoom[] = [
    // ============================================================
    // POLO OSTIENSE (Giurisprudenza, Lettere, Scienze Politiche)
    // ============================================================
    {
        id: 'r3_giurisprudenza_centrale',
        nome: 'Biblioteca Area Giuridica (Ostiense)',
        edificio: 'Dipartimento Giurisprudenza',
        piano: 1,
        postiDisponibili: 300,
        postiTotali: 450,
        orarioApertura: '09:00',
        orarioChiusura: '23:00',
        servizi: ['WiFi Eduroam', 'Aperta fino alle 23:00', 'Aperta Sabato (14-18)'],
        latitude: 41.8685,
        longitude: 12.4830,
        indirizzo: 'Via Ostiense 163, Roma',
        university: 'Roma Tre',
        occupancy_rate: 'Molto Alto',
        notes: 'Una delle poche biblioteche aperte fino a tardi (23:00). Ingresso piano terra.'
    },
    {
        id: 'r3_umanistica_petrocchi',
        nome: 'Biblioteca Umanistica "Giorgio Petrocchi"',
        edificio: 'Edificio Lettere (Aula Magna)',
        piano: 0,
        postiDisponibili: 200,
        postiTotali: 256,
        orarioApertura: '09:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Sala Joris Coppetti (1° piano)', 'Prese elettriche'],
        latitude: 41.8620,
        longitude: 12.4800,
        indirizzo: 'Via Ostiense 236, Roma',
        university: 'Roma Tre',
        notes: 'Sede centrale umanistica. C\'è anche una sala studio nell\'edificio adiacente aperta fino alle 23:00.'
    },
    {
        id: 'r3_sala_studio_236',
        nome: 'Sala Studio Serale Via Ostiense 236',
        edificio: 'Edificio Lettere (Adiacente Aula Magna)',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '09:00',
        orarioChiusura: '23:00',
        servizi: ['WiFi', 'Aperta fino alle 23:00', 'Distributori'],
        latitude: 41.8620,
        longitude: 12.4800,
        indirizzo: 'Via Ostiense 236, Roma',
        university: 'Roma Tre',
        occupancy_rate: 'Alto',
        notes: 'Ottima per chi studia la sera in zona Ostiense.'
    },
    {
        id: 'r3_sc_politiche',
        nome: 'Biblioteca Studi Politici "Pietro Grilli"',
        edificio: 'Dip. Scienze Politiche',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 150,
        orarioApertura: '09:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Box restituzione H24'],
        latitude: 41.8590,
        longitude: 12.4785,
        indirizzo: 'Via Gabriello Chiabrera 199, Roma',
        university: 'Roma Tre',
        notes: 'In zona San Paolo, molto frequentata dagli studenti di SP.'
    },
    {
        id: 'r3_dams_micciche',
        nome: 'Biblioteca Spettacolo "Lino Micciché" (DAMS)',
        edificio: 'Ex-Vetreria Sciarra',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 90,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Collezione Cinema', 'Audiovisivi'],
        latitude: 41.8695,
        longitude: 12.4820,
        indirizzo: 'Via Ostiense 139, Roma',
        university: 'Roma Tre',
        notes: 'Specializzata in cinema e teatro.'
    },

    // ============================================================
    // POLO SAN PAOLO / MARCONI (Economia, Ingegneria, Scienze)
    // ============================================================
    {
        id: 'r3_economia_garegnani',
        nome: 'Biblioteca Scienze Economiche "P. Garegnani"',
        edificio: 'Dip. Economia',
        piano: -1, // Seminterrato luminoso
        postiDisponibili: 180,
        postiTotali: 250,
        orarioApertura: '09:00',
        orarioChiusura: '23:00',
        servizi: ['WiFi', 'Aperta fino alle 23:00', 'Ampia'],
        latitude: 41.8565,
        longitude: 12.4825,
        indirizzo: 'Via Silvio D\'Amico 77, Roma',
        university: 'Roma Tre',
        occupancy_rate: 'Alto',
        notes: 'Una delle più moderne e frequentate.'
    },
    {
        id: 'r3_ing_vasca_navale',
        nome: 'Biblioteca Area Scientifica "Decio Levi"',
        edificio: 'Dip. Ingegneria (Vasca Navale)',
        piano: 1,
        postiDisponibili: 120,
        postiTotali: 180,
        orarioApertura: '09:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Consultazione Testi Tecnici'],
        latitude: 41.8540,
        longitude: 12.4720,
        indirizzo: 'Via della Vasca Navale 79, Roma',
        university: 'Roma Tre',
        notes: 'Sede centrale per Ingegneria e Scienze.'
    },
    {
        id: 'r3_aula_arata',
        nome: 'Aula Studio "Arata" (Ex Ottica)',
        edificio: 'Comprensorio Vasca Navale',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '09:00',
        orarioChiusura: '23:00',
        servizi: ['WiFi', 'Aperta fino alle 23:00', 'Mensa vicina'],
        latitude: 41.8542,
        longitude: 12.4725,
        indirizzo: 'Via della Vasca Navale 79, Roma',
        university: 'Roma Tre',
        occupancy_rate: 'Medio',
        notes: 'Di fronte alla mensa LazioDisco. Molto comoda per il "dopo cena" universitario.'
    },
    {
        id: 'r3_torri_scienze',
        nome: 'Biblioteca Scienze "Sede delle Torri"',
        edificio: 'Edificio Torri (Lgt. Dante)',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 80,
        orarioApertura: '09:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Nuova struttura'],
        latitude: 41.8510,
        longitude: 12.4750,
        indirizzo: 'Lungotevere Dante 376, Roma',
        university: 'Roma Tre',
        notes: 'Sede distaccata molto tranquilla lungo il Tevere.'
    },

    // ============================================================
    // POLO MATTATOIO (Architettura - Testaccio)
    // ============================================================
    {
        id: 'r3_arch_mattiello',
        nome: 'Biblioteca Architettura "Enrico Mattiello"',
        edificio: 'Ex-Mattatoio (Padiglione 9E)',
        piano: 0,
        postiDisponibili: 106,
        postiTotali: 150,
        orarioApertura: '09:00',
        orarioChiusura: '19:30',
        servizi: ['WiFi', 'Tavoli da disegno', 'Contesto Archeologia Industriale'],
        latitude: 41.8760,
        longitude: 12.4740,
        indirizzo: 'Largo Giovanni Battista Marzi 10, Roma',
        university: 'Roma Tre',
        notes: 'Situata nell\'affascinante complesso dell\'Ex-Mattatoio. Atmosfera unica.'
    },
    {
        id: 'r3_aula_pelanda',
        nome: 'Aula Studio "La Pelanda"',
        edificio: 'La Pelanda (Mattatoio)',
        piano: 0,
        postiDisponibili: 28,
        postiTotali: 40,
        orarioApertura: '09:30',
        orarioChiusura: '19:30',
        servizi: ['WiFi', 'Aperta 7 giorni su 7', 'Spazio Culturale', 'Aperto Domenica'],
        latitude: 41.8765,
        longitude: 12.4735,
        indirizzo: 'Piazza Orazio Giustiniani 4, Roma',
        university: 'Roma Tre',
        notes: 'Aperta anche Sabato e Domenica! Spazio gestito con il Comune di Roma.'
    },
    {
        id: 'r3_arch_padiglioni',
        nome: 'Aule Studio Studenti (Padiglioni 15A - 2B)',
        edificio: 'Ex-Mattatoio',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Laboratorio Modelli'],
        latitude: 41.8760,
        longitude: 12.4740,
        indirizzo: 'Largo G.B. Marzi 10, Roma',
        university: 'Roma Tre',
        notes: 'Spazi liberi per studenti di architettura.'
    },

    // ============================================================
    // POLO TERMINI (Scienze della Formazione)
    // ============================================================
    {
        id: 'r3_formazione_broccoli',
        nome: 'Biblioteca Scienze Formazione "Angelo Broccoli"',
        edificio: 'Sede Via del Castro Pretorio',
        piano: 1,
        postiDisponibili: 120,
        postiTotali: 180,
        orarioApertura: '09:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Vicino Stazione Termini'],
        latitude: 41.9050,
        longitude: 12.5050,
        indirizzo: 'Via del Castro Pretorio 20, Roma',
        university: 'Roma Tre',
        notes: 'Comodissima per i pendolari che arrivano a Termini.'
    },
    {
        id: 'r3_formazione_amedeo',
        nome: 'Sala Studio Piano Terra (Principe Amedeo)',
        edificio: 'Sede Via Principe Amedeo',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['WiFi', 'Zona Esquilino'],
        latitude: 41.8985,
        longitude: 12.5030,
        indirizzo: 'Via Principe Amedeo 184, Roma',
        university: 'Roma Tre',
    }
];

export const getDirectionsRomaTre = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const isOstiense = room.indirizzo.includes('Ostiense') || room.id.includes('petrocchi') || room.id.includes('dams');
    const isSanPaolo = room.indirizzo.includes('Silvio') || room.indirizzo.includes('Chiabrera') || room.indirizzo.includes('Vasca Navale') || room.indirizzo.includes('Dante');
    const isMattatoio = room.indirizzo.includes('Marzi') || room.indirizzo.includes('Giustiniani');
    const isTermini = room.indirizzo.includes('Castro Pretorio') || room.indirizzo.includes('Principe Amedeo');

    // HUB PRINCIPALE: METRO B
    if (isOstiense) {
        directions.push({
            luogo: 'Stazione Termini / Tiburtina',
            descrizione: `Per Giurisprudenza/Lettere (Ostiense):
1. Prendi la **Metro B** (Direzione Laurentina).
2. Scendi a **Garbatella** (o Basilica S. Paolo).
3. A piedi 5-10 minuti su Via Ostiense.
4. L'edificio di Giurisprudenza è riconoscibile (vetrate), Lettere è poco più avanti.`,
            mezziPubblici: ['Metro B (Garbatella)', 'Bus 23, 769'],
            tempoStimato: '15 min da Termini',
            note: 'Cuore della "movida" universitaria.'
        });
    } else if (isSanPaolo) {
        directions.push({
            luogo: 'Stazione Termini / Tiburtina',
            descrizione: `Per Economia/Ingegneria/Scienze (San Paolo):
1. Prendi la **Metro B** (Direzione Laurentina).
2. Scendi a **Basilica San Paolo** o **Marconi**.
3. Economia (Via Silvio d'Amico) è a 5 min a piedi da S. Paolo.
4. Ingegneria (Vasca Navale): da S. Paolo prendi Bus 23, 769, 128 o cammina 15 min.`,
            mezziPubblici: ['Metro B (S. Paolo/Marconi)', 'Bus 769'],
            tempoStimato: '20 min da Termini',
            note: 'Vasca Navale è un po\' interna, il bus aiuta.'
        });
    } else if (isMattatoio) {
        directions.push({
            luogo: 'Stazione Termini / Tiburtina',
            descrizione: `Per Architettura (Ex-Mattatoio/Testaccio):
1. Prendi la **Metro B** (Direzione Laurentina).
2. Scendi a **Piramide**.
3. Cammina 10 minuti verso il Tevere/Testaccio (Via Marmorata -> Via Galvani).
4. Oppure Bus 718, 719, 775 da Piramide.`,
            mezziPubblici: ['Metro B (Piramide)', 'A piedi'],
            tempoStimato: '20 min',
            note: 'Location suggestiva nell\'Ex Mattatoio.'
        });
    } else if (isTermini) {
        directions.push({
            luogo: 'Stazione Termini',
            descrizione: `Per Scienze della Formazione:
1. Sei già in zona!
2. Via Principe Amedeo è parallela alla stazione (lato via Giolitti).
3. Via del Castro Pretorio è raggiungibile a piedi (10 min) o con Metro B (fermata Castro Pretorio).`,
            mezziPubblici: ['A piedi', 'Metro B'],
            tempoStimato: '5-10 min',
            note: 'Sede distaccata comodissima per i fuori sede.'
        });
    }

    return directions;
};
