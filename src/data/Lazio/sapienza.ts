import { StudyRoom, DirectionsFromLocation } from '../../types';

export const sapienzaRooms: StudyRoom[] = [
    // ============================================================
    // AULE H24 (APERTE NOTTE E GIORNO)
    // ============================================================
    {
        id: 'sapienza_h24_delollis',
        nome: 'Aula Studio H24 - Via De Lollis',
        edificio: 'Residenze Universitarie',
        piano: 0,
        postiDisponibili: 120,
        postiTotali: 120,
        orarioApertura: '00:00',
        orarioChiusura: '23:59',
        servizi: ['Aperta 24h', 'WiFi', 'Distributori', 'Sicurezza', 'Microonde'],
        latitude: 41.8995,
        longitude: 12.5165,
        indirizzo: 'Via Cesare De Lollis 20, Roma (San Lorenzo)',
        university: 'La Sapienza',
        occupancy_rate: 'Sempre Alto',
        notes: 'Il rifugio notturno per eccellenza. Serve documento Sapienza per entrare.',
        tags: ['Aula Studio', 'WiFi', '🌙 H24'],
    },
    {
        id: 'sapienza_h24_goliardi',
        nome: 'Aula H24 - Via dei Goliardi',
        edificio: 'Zona San Lorenzo',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 60,
        orarioApertura: '00:00',
        orarioChiusura: '23:59',
        servizi: ['Aperta 24h', 'WiFi', 'Prese'],
        latitude: 41.9010,
        longitude: 12.5185,
        indirizzo: 'Via dei Goliardi 4, Roma',
        university: 'La Sapienza',
        notes: 'Più piccola della De Lollis, spesso piena.',
        tags: ['Aula Studio', 'WiFi', '🌙 H24'],
    },
    {
        id: 'sapienza_h24_castro',
        nome: 'Reading Room H24 - Castro Laurenziano',
        edificio: 'Facoltà di Economia',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 80,
        orarioApertura: '00:00',
        orarioChiusura: '23:59',
        servizi: ['Aperta 24h', 'WiFi', 'Aria Condizionata'],
        latitude: 41.9085,
        longitude: 12.5120,
        indirizzo: 'Via del Castro Laurenziano 9, Roma',
        university: 'La Sapienza',
        notes: 'Ingresso laterale Facoltà di Economia.',
        tags: ['Aula Studio', 'WiFi', '❄️ Climatizzato', '🌙 H24'],
    },

    // ============================================================
    // CITTÀ UNIVERSITARIA (Piazzale Aldo Moro) - CUORE
    // ============================================================
    {
        id: 'sapienza_alessandrina',
        nome: 'Biblioteca Universitaria Alessandrina',
        edificio: 'Rettorato (Retro)',
        piano: 0,
        postiDisponibili: 400,
        postiTotali: 600,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['WiFi Sapienza', 'Prese al banco', 'Monumentale'],
        latitude: 41.9045,
        longitude: 12.5140,
        indirizzo: 'Piazzale Aldo Moro 5, Roma',
        university: 'La Sapienza',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'sapienza_giurisprudenza',
        nome: 'Biblioteca Centrale Giurisprudenza',
        edificio: 'Facoltà Giurisprudenza (CU002)',
        piano: 1,
        postiDisponibili: 250,
        postiTotali: 350,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Silenzio', 'Sala Bandiere'],
        latitude: 41.9038,
        longitude: 12.5125,
        indirizzo: 'Piazzale Aldo Moro 5, Roma',
        university: 'La Sapienza',
        tags: ['Biblioteca', 'WiFi', '🔇 Silenzio'],
    },
    {
        id: 'sapienza_scienzepolitiche',
        nome: 'Sala Vetrate - Scienze Politiche',
        edificio: 'Scienze Politiche (CU002)',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 150,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['WiFi', 'Luminosa', 'Sociale'],
        latitude: 41.9035,
        longitude: 12.5120,
        indirizzo: 'Piazzale Aldo Moro 5, Roma',
        university: 'La Sapienza',
        tags: ['Aula Studio', 'WiFi'],
    },
    {
        id: 'sapienza_fisica_fermi',
        nome: 'Biblioteca di Fisica "Enrico Fermi"',
        edificio: 'Edificio Marconi (Fisica) - CU013',
        piano: 1,
        postiDisponibili: 90,
        postiTotali: 120,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi', 'Silenzio Assoluto', 'Prese'],
        latitude: 41.9030,
        longitude: 12.5160,
        indirizzo: 'Piazzale Aldo Moro 5, Roma',
        university: 'La Sapienza',
        notes: 'Luogo storico della fisica italiana.',
        tags: ['Biblioteca', 'WiFi', '🔇 Silenzio'],
    },
    {
        id: 'sapienza_chimica',
        nome: 'Biblioteca di Chimica "Gabriello Illuminati"',
        edificio: 'Edificio Chimica (CU032)',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['WiFi', 'Aria Condizionata'],
        latitude: 41.9028,
        longitude: 12.5150,
        indirizzo: 'Piazzale Aldo Moro 5, Roma',
        university: 'La Sapienza',
        tags: ['Biblioteca', 'WiFi', '❄️ Climatizzato'],
    },
    {
        id: 'sapienza_statistica',
        nome: 'Biblioteca di Statistica',
        edificio: 'Edificio Statistica (CU002)',
        piano: 2,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'PC Fissi'],
        latitude: 41.9040,
        longitude: 12.5122,
        indirizzo: 'Piazzale Aldo Moro 5, Roma',
        university: 'La Sapienza',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'sapienza_matematica',
        nome: 'Biblio. Matematica "G. Castelnuovo"',
        edificio: 'Edificio Matematica (CU006)',
        piano: 1,
        postiDisponibili: 80,
        postiTotali: 120,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi', 'Architettura Gio Ponti', 'Silenzio'],
        latitude: 41.9030,
        longitude: 12.5155,
        indirizzo: 'Piazzale Aldo Moro 5, Roma',
        university: 'La Sapienza',
        tags: ['Biblioteca', 'WiFi', '🔇 Silenzio'],
    },
    {
        id: 'sapienza_farmacia',
        nome: 'Sala Studio Farmacia',
        edificio: 'Edificio Farmacia (CU024)',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Prese'],
        latitude: 41.9035,
        longitude: 12.5150,
        indirizzo: 'Piazzale Aldo Moro 5, Roma',
        university: 'La Sapienza',
        tags: ['Aula Studio', 'WiFi'],
    },

    // ============================================================
    // ZONA POLICLINICO (Medicina)
    // ============================================================
    {
        id: 'sapienza_medicina_centrale',
        nome: 'Biblioteca Centrale di Medicina',
        edificio: 'Policlinico Umberto I - Clinica Ortopedica',
        piano: 0,
        postiDisponibili: 150,
        postiTotali: 200,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi Eduroam', 'Ambiente Medico'],
        latitude: 41.9055,
        longitude: 12.5110,
        indirizzo: 'Viale del Policlinico 155, Roma',
        university: 'La Sapienza',
        tags: ['Biblioteca', 'Medicina', 'WiFi'],
    },
    {
        id: 'sapienza_anatomia',
        nome: 'Biblioteca Istituto Anatomia Umana',
        edificio: 'Istituto di Anatomia',
        piano: 1,
        postiDisponibili: 40,
        postiTotali: 60,
        orarioApertura: '09:00',
        orarioChiusura: '16:00',
        servizi: ['WiFi', 'Storico', 'Museo Anatomico'],
        latitude: 41.9060,
        longitude: 12.5135,
        indirizzo: 'Via Alfonso Borelli 50, Roma',
        university: 'La Sapienza',
        tags: ['Biblioteca', 'WiFi'],
    },

    // ============================================================
    // SAN LORENZO & SCALO (Fuori le mura)
    // ============================================================
    {
        id: 'sapienza_marco_polo',
        nome: 'Biblioteca Edificio Marco Polo',
        edificio: 'Complesso Marco Polo (Ex Poste)',
        piano: 1,
        postiDisponibili: 200,
        postiTotali: 300,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Modernissima', 'Prese USB', 'Mensa'],
        latitude: 41.8960,
        longitude: 12.5220,
        indirizzo: 'Viale dello Scalo S. Lorenzo 82, Roma',
        university: 'La Sapienza',
        notes: 'Sede di Studi Orientali e Lettere. Molto colorata e luminosa.',
        tags: ['Biblioteca', 'Campus', 'WiFi', '☕ Ristoro'],
    },
    {
        id: 'sapienza_psicologia',
        nome: 'Biblioteca Psicologia e Pedagogia',
        edificio: 'Sede Via dei Marsi',
        piano: 1,
        postiDisponibili: 70,
        postiTotali: 100,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['WiFi', 'Silenzio'],
        latitude: 41.8980,
        longitude: 12.5130,
        indirizzo: 'Via dei Marsi 78, Roma',
        university: 'La Sapienza',
        tags: ['Biblioteca', 'WiFi', '🔇 Silenzio'],
    },

    // ============================================================
    // INGEGNERIA (San Pietro in Vincoli) - CENTRO STORICO
    // ============================================================
    {
        id: 'sapienza_ing_chiostro',
        nome: 'Sala del Chiostro (Ingegneria)',
        edificio: 'Facoltà Ingegneria',
        piano: 0,
        postiDisponibili: 120,
        postiTotali: 180,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['WiFi', 'Chiostro Rinascimentale', 'Bar'],
        latitude: 41.8935,
        longitude: 12.4930,
        indirizzo: 'Via Eudossiana 18, Roma',
        university: 'La Sapienza',
        tags: ['Outdoor', 'WiFi', '☕ Ristoro'],
    },
    {
        id: 'sapienza_ing_acquario',
        nome: 'Aula "Acquario"',
        edificio: 'Facoltà Ingegneria',
        piano: -1,
        postiDisponibili: 80,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Pareti vetrate'],
        latitude: 41.8935,
        longitude: 12.4930,
        indirizzo: 'Via Eudossiana 18, Roma',
        university: 'La Sapienza',
        tags: ['Aula Studio', 'WiFi'],
    },
    {
        id: 'sapienza_ing_boezio',
        nome: 'Biblioteca "Boezio"',
        edificio: 'Facoltà Ingegneria',
        piano: 1,
        postiDisponibili: 60,
        postiTotali: 90,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Consultazione'],
        latitude: 41.8935,
        longitude: 12.4930,
        indirizzo: 'Via Eudossiana 18, Roma',
        university: 'La Sapienza',
        tags: ['Biblioteca', 'WiFi'],
    },

    // ============================================================
    // ARCHITETTURA (Varie Sedi)
    // ============================================================
    {
        id: 'sapienza_arch_valle_giulia',
        nome: 'Biblioteca Centrale Architettura',
        edificio: 'Sede Valle Giulia',
        piano: 1,
        postiDisponibili: 90,
        postiTotali: 150,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Tavoli da disegno', 'Luce naturale'],
        latitude: 41.9180,
        longitude: 12.4825,
        indirizzo: 'Via Antonio Gramsci 53, Roma',
        university: 'La Sapienza',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'sapienza_arch_borghese',
        nome: 'Biblioteca Piazza Borghese',
        edificio: 'Palazzo Borghese',
        piano: 1,
        postiDisponibili: 50,
        postiTotali: 80,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['WiFi', 'Palazzo Storico', 'Centro Storico'],
        latitude: 41.9048,
        longitude: 12.4760,
        indirizzo: 'Piazza Borghese 9, Roma',
        university: 'La Sapienza',
        tags: ['Biblioteca', 'Centro', 'WiFi'],
    },
    {
        id: 'sapienza_arch_flaminia',
        nome: 'Sala Studio Via Flaminia',
        edificio: 'Sede Via Flaminia',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 60,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi', 'Vicina Metro A'],
        latitude: 41.9140,
        longitude: 12.4740,
        indirizzo: 'Via Flaminia 70, Roma',
        university: 'La Sapienza',
        tags: ['Aula Studio', 'WiFi'],
    },

    // ============================================================
    // SEDI DISTACCATE (Mirafiori, Salaria, Economia)
    // ============================================================
    {
        id: 'sapienza_mirafiori',
        nome: 'Biblioteca Villa Mirafiori (Filosofia)',
        edificio: 'Villa Mirafiori',
        piano: 1,
        postiDisponibili: 100,
        postiTotali: 180,
        orarioApertura: '09:00',
        orarioChiusura: '17:30',
        servizi: ['WiFi', 'Parco', 'Giardino', 'Molto Silenziosa'],
        latitude: 41.9230,
        longitude: 12.5180,
        indirizzo: 'Via Carlo Fea 2, Roma (Nomentana)',
        university: 'La Sapienza',
        notes: 'Una villa storica immersa nel verde. Ideale per studiare in tranquillità.',
        tags: ['Biblioteca', 'WiFi', '🔇 Silenzio'],
    },
    {
        id: 'sapienza_economia',
        nome: 'Biblio. Economia "E. Barone"',
        edificio: 'Facoltà di Economia',
        piano: 0,
        postiDisponibili: 250,
        postiTotali: 400,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Aria Condizionata', 'Prese'],
        latitude: 41.9085,
        longitude: 12.5120,
        indirizzo: 'Via del Castro Laurenziano 9, Roma',
        university: 'La Sapienza',
        tags: ['Biblioteca', 'WiFi', '❄️ Climatizzato'],
    },
    {
        id: 'sapienza_salaria',
        nome: 'Biblioteca Scienze della Comunicazione',
        edificio: 'Sede Via Salaria',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 80,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['WiFi', 'Cortile interno'],
        latitude: 41.9210,
        longitude: 12.5020,
        indirizzo: 'Via Salaria 113, Roma',
        university: 'La Sapienza',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'sapienza_sc_formazione',
        nome: 'Biblioteca Scienze della Formazione',
        edificio: 'Sede Via Principe Amedeo',
        piano: 1,
        postiDisponibili: 60,
        postiTotali: 90,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['WiFi', 'Vicino Termini'],
        latitude: 41.8985,
        longitude: 12.5030,
        indirizzo: 'Via Principe Amedeo 184, Roma',
        university: 'La Sapienza',
        tags: ['Biblioteca', 'WiFi'],
    }
];

// Funzione Helper per le direzioni
export const getDirectionsSapienza = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];
    const addr = room.indirizzo.toLowerCase();

    // LOGICHE PER ZONA
    const isCittaUniv = addr.includes('aldo moro');
    const isPoliclinico = addr.includes('policlinico') || addr.includes('borelli');
    const isSanLorenzo = addr.includes('san lorenzo') || addr.includes('de lollis') || addr.includes('marsi') || addr.includes('goliardi');
    const isIngegneria = addr.includes('eudossiana');
    const isValleGiulia = addr.includes('gramsci');
    const isMirafiori = addr.includes('carlo fea');
    const isEconomia = addr.includes('castro laurenziano');
    // const isSalaria = addr.includes('salaria'); // Removed as it was identical logic to others in previous implementation

    if (isCittaUniv || isEconomia) {
        directions.push({
            luogo: 'Da Stazione Termini',
            descrizione: 'Prendi il Bus 310 o cammina per 15 min (uscita Via Marsala).',
            mezziPubblici: ['Bus 310', 'A piedi'],
            tempoStimato: '15 min',
            note: 'Ingresso Piazzale Aldo Moro.'
        });
        directions.push({
            luogo: 'Da Metro B',
            descrizione: 'Scendi a "Policlinico" e cammina 5 min su Viale Regina Elena.',
            mezziPubblici: ['Metro B'],
            tempoStimato: '5-10 min',
        });
        directions.push({
            luogo: 'Da Stazione Tiburtina',
            descrizione: 'Bus 71, 163, 448 o 492 fino a Piazzale del Verano.',
            mezziPubblici: ['Bus'],
            tempoStimato: '15 min',
            note: 'Ingresso Viale dell\'Università.'
        });
    } else if (isPoliclinico) {
        directions.push({
            luogo: 'Metro B (Policlinico)',
            descrizione: 'Fermata proprio davanti agli ingressi principali dell\'Ospedale.',
            mezziPubblici: ['Metro B'],
            tempoStimato: '2 min',
            note: 'Attento a non perderti nei viali interni.'
        });
        directions.push({
            luogo: 'Tram 3 o 19',
            descrizione: 'Fermata Viale Regina Elena / Policlinico.',
            mezziPubblici: ['Tram 3', 'Tram 19'],
            tempoStimato: '-',
        });
    } else if (isSanLorenzo) {
        directions.push({
            luogo: 'Da Stazione Termini',
            descrizione: 'A piedi (15 min) via Marsala -> Sottopasso -> Via dei Sabelli.',
            mezziPubblici: ['A piedi'],
            tempoStimato: '15 min',
            note: 'Cuore del quartiere universitario.'
        });
        directions.push({
            luogo: 'Tram 3 o 19',
            descrizione: 'Scendi a "Scalo San Lorenzo".',
            mezziPubblici: ['Tram'],
            tempoStimato: '5 min',
            note: 'Per Marco Polo è la fermata più comoda.'
        });
    } else if (isIngegneria) {
        directions.push({
            luogo: 'Metro B (Cavour)',
            descrizione: 'Scendi a Cavour, prendi le scale ripide (Via delle Scale) e sei arrivato.',
            mezziPubblici: ['Metro B'],
            tempoStimato: '5 min',
            note: 'Non andare al Colosseo, è la fermata dopo!'
        });
        directions.push({
            luogo: 'Colosseo',
            descrizione: 'A piedi dal Colosseo salendo per Via degli Annibaldi.',
            mezziPubblici: ['Metro B'],
            tempoStimato: '10 min',
        });
    } else if (isValleGiulia) {
        directions.push({
            luogo: 'Tram 19',
            descrizione: 'Fermata Galleria Arte Moderna (di fronte alla facoltà).',
            mezziPubblici: ['Tram 19'],
            tempoStimato: '-',
            note: 'Zona Villa Borghese.'
        });
        directions.push({
            luogo: 'Metro A (Flaminio)',
            descrizione: 'Da Piazzale Flaminio, a piedi (10 min) o Tram 2/19.',
            mezziPubblici: ['Metro A'],
            tempoStimato: '15 min',
        });
    } else if (isMirafiori) {
        directions.push({
            luogo: 'Metro B1 (S. Agnese)',
            descrizione: 'Scendi a S. Agnese/Annibaliano. 10 minuti a piedi su Via Nomentana.',
            mezziPubblici: ['Metro B1'],
            tempoStimato: '10 min',
        });
        directions.push({
            luogo: 'Bus da Termini',
            descrizione: 'Linea 90 Express o 60 su Via Nomentana.',
            mezziPubblici: ['Bus 90', 'Bus 60'],
            tempoStimato: '20 min',
        });
    }

    return directions;
};
