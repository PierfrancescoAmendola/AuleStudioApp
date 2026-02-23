import { StudyRoom, DirectionsFromLocation } from '../../types';

export const torVergataRooms: StudyRoom[] = [
    // ============================================================
    // MACROAREA ECONOMIA (Via Columbia)
    // ============================================================
    {
        id: 'tor_eco_pareto',
        nome: 'Biblioteca "Vilfredo Pareto" (Economia)',
        edificio: 'Edificio Ricerca - Economia',
        piano: 0,
        postiDisponibili: 270,
        postiTotali: 270,
        orarioApertura: '09:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi Eduroam', 'Prenotazione Affluences', 'Prese elettriche', 'Aria Condizionata'],
        latitude: 41.8535,
        longitude: 12.6120,
        indirizzo: 'Via Columbia 2, Roma',
        university: 'Tor Vergata',
        occupancy_rate: 'Alto',
        notes: 'Biblioteca principale. Prenotazione obbligatoria tramite app "Affluences".',
        tags: ['Biblioteca', 'WiFi', '⚡ Prese', '❄️ Climatizzato'],
    },
    {
        id: 'tor_eco_reading',
        nome: 'Reading Room Edificio A',
        edificio: 'Edificio Didattica (A)',
        piano: 1,
        postiDisponibili: 80,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['WiFi', 'Tavoli liberi', 'Macchinette snack'],
        latitude: 41.8535,
        longitude: 12.6122,
        indirizzo: 'Via Columbia 2, Roma',
        university: 'Tor Vergata',
        notes: 'Spazio meno formale, ottimo per ripetere tra una lezione e l\'altra.',
        tags: ['Aula Studio', 'WiFi', '❄️ Climatizzato'],
    },
    {
        id: 'tor_eco_acquario',
        nome: 'Acquario Economia (Atrio)',
        edificio: 'Edificio A (Piano Terra)',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 40,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Vetrata', 'Socialità'],
        latitude: 41.8535,
        longitude: 12.6120,
        indirizzo: 'Via Columbia 2, Roma',
        university: 'Tor Vergata',
        notes: 'Zona vetrata nell\'atrio. Molto usata per lavori di gruppo, un po\' rumorosa.',
        tags: ['Aula Studio', 'WiFi'],
    },

    // ============================================================
    // MACROAREA INGEGNERIA (Via del Politecnico)
    // ============================================================
    {
        id: 'tor_ing_centrale',
        nome: 'Biblioteca Area Ingegneria',
        edificio: 'Edificio Didattica',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '09:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Consultazione', 'Prese'],
        latitude: 41.8560,
        longitude: 12.6230,
        indirizzo: 'Via del Politecnico 1, Roma',
        university: 'Tor Vergata',
        notes: 'Spazio silenzioso. Ottima per consultare testi tecnici e norme.',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'tor_ing_aule_studio',
        nome: 'Aule Studio Didattica (L1 - L2)',
        edificio: 'Edificio Didattica',
        piano: 0,
        postiDisponibili: 120,
        postiTotali: 150,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['WiFi', 'Tavoli ampi', 'Aria condizionata'],
        latitude: 41.8560,
        longitude: 12.6230,
        indirizzo: 'Via del Politecnico 1, Roma',
        university: 'Tor Vergata',
        notes: 'Aule dedicate allo studio libero quando non ci sono lezioni. Controllare monitor all\'ingresso.',
        tags: ['Aula Studio', 'WiFi', '❄️ Climatizzato'],
    },
    {
        id: 'tor_ing_civile',
        nome: 'Sala Studio Ingegneria Civile',
        edificio: 'Edificio Ingegneria Civile',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 50,
        orarioApertura: '09:00',
        orarioChiusura: '16:00',
        servizi: ['WiFi', 'Silenzio'],
        latitude: 41.8565,
        longitude: 12.6235,
        indirizzo: 'Via del Politecnico 1, Roma',
        university: 'Tor Vergata',
        tags: ['Aula Studio', 'WiFi', '🔇 Silenzio'],
    },

    // ============================================================
    // MACROAREA LETTERE (Via Columbia - Fronte Economia)
    // ============================================================
    {
        id: 'tor_lettere_biblio',
        nome: 'Biblioteca Area Letteraria (BALSF)',
        edificio: 'Edificio B - Lettere',
        piano: 0,
        postiDisponibili: 174,
        postiTotali: 174,
        orarioApertura: '09:00',
        orarioChiusura: '19:30',
        servizi: ['WiFi Eduroam', 'Audiovideoteca', 'Prenotazione Affluences'],
        latitude: 41.8545,
        longitude: 12.6140,
        indirizzo: 'Via Columbia 1, Roma',
        university: 'Tor Vergata',
        notes: 'Prenotazione obbligatoria con Affluences. Ambiente molto tranquillo.',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'tor_lettere_atrio',
        nome: 'Atrio e Tavoli Lettere',
        edificio: 'Edificio A - Lettere',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 100,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Socialità', 'Prese scarse'],
        latitude: 41.8542,
        longitude: 12.6138,
        indirizzo: 'Via Columbia 1, Roma',
        university: 'Tor Vergata',
        notes: 'L\'immenso atrio è pieno di tavoli. Caotico ma vitale per gruppi.',
        tags: ['Aula Studio', 'WiFi'],
    },

    // ============================================================
    // MACROAREA MEDICINA (Via Montpellier - Zona PTV)
    // ============================================================
    {
        id: 'tor_med_fasella',
        nome: 'Biblioteca Biomedica "Paolo Fasella"',
        edificio: 'Facoltà Medicina (Edificio D)',
        piano: 1,
        postiDisponibili: 177,
        postiTotali: 200,
        orarioApertura: '09:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi Eduroam', 'Prenotazione Affluences', 'Armadietti'],
        latitude: 41.8580,
        longitude: 12.6350,
        indirizzo: 'Via Montpellier 1, Roma',
        university: 'Tor Vergata',
        occupancy_rate: 'Molto Alto',
        notes: 'La più ambita. Prenotare con giorni di anticipo su Affluences.',
        tags: ['Biblioteca', 'Medicina', 'WiFi'],
    },
    {
        id: 'tor_med_aulette',
        nome: 'Aulette Studio Studenti (Montpellier)',
        edificio: 'Edificio Didattica Medicina',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Autogestite'],
        latitude: 41.8582,
        longitude: 12.6355,
        indirizzo: 'Via Montpellier 1, Roma',
        university: 'Tor Vergata',
        notes: 'Chiedere in portineria quali aule sono libere per lo studio oggi.',
        tags: ['Aula Studio', 'Medicina', 'WiFi'],
    },

    // ============================================================
    // MACROAREA SCIENZE (SOGENE - Via della Ricerca Scientifica)
    // ============================================================
    {
        id: 'tor_scienze_biblio',
        nome: 'Biblioteca Area Scientifico-Tecnologica',
        edificio: 'Edificio Sogene',
        piano: 0,
        postiDisponibili: 200,
        postiTotali: 200,
        orarioApertura: '09:30',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Aperta Sabato Mattina (9-14)'],
        latitude: 41.8520,
        longitude: 12.6280,
        indirizzo: 'Via della Ricerca Scientifica 1, Roma',
        university: 'Tor Vergata',
        notes: 'Situata nel gigantesco edificio giallo (Sogene). Unica aperta sabato mattina.',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'tor_scienze_acquario',
        nome: 'Acquario Scienze (Sogene)',
        edificio: 'Edificio Sogene (Atrio)',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Tavoli lunghi', 'Macchinette'],
        latitude: 41.8520,
        longitude: 12.6280,
        indirizzo: 'Via della Ricerca Scientifica 1, Roma',
        university: 'Tor Vergata',
        notes: 'Postazioni studio informali lungo i corridoi chilometrici.',
        tags: ['Aula Studio', 'WiFi', '❄️ Climatizzato'],
    },

    // ============================================================
    // GIURISPRUDENZA & RETTORATO
    // ============================================================
    {
        id: 'tor_giurisprudenza',
        nome: 'Biblioteca Area Giuridica',
        edificio: 'Edificio D - Giurisprudenza',
        piano: 0,
        postiDisponibili: 161,
        postiTotali: 161,
        orarioApertura: '09:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Prenotazione Affluences', 'Silenziosa'],
        latitude: 41.8575,
        longitude: 12.6080,
        indirizzo: 'Via Orazio Raimondo 18, Roma',
        university: 'Tor Vergata',
        notes: 'Nel complesso del Rettorato (la "Croce").',
        tags: ['Biblioteca', 'WiFi', '🔇 Silenzio'],
    },
    {
        id: 'tor_cappella',
        nome: 'Aule Studio Cappella San Tommaso',
        edificio: 'Cappella Universitaria',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 80,
        orarioApertura: '08:45',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Aperta Domenica Pomeriggio', 'Silenzio'],
        latitude: 41.8570,
        longitude: 12.6090,
        indirizzo: 'Via Salamanca 26, Roma',
        university: 'Tor Vergata',
        notes: 'Davanti al Rettorato. Unica risorsa per la Domenica pomeriggio (15:00-20:00).',
        tags: ['Aula Studio', 'WiFi', '🔇 Silenzio'],
    },

    // ============================================================
    // RESIDENZE & LAZIODISCO
    // ============================================================
    {
        id: 'tor_campusx',
        nome: 'CampusX Study Areas',
        edificio: 'CampusX Roma',
        piano: 0,
        postiDisponibili: 300,
        postiTotali: 500,
        orarioApertura: '00:00',
        orarioChiusura: '23:59',
        servizi: ['WiFi', 'Bar', 'Palestra', 'Navetta Privata'],
        latitude: 41.8500,
        longitude: 12.6300,
        indirizzo: 'Via di Passolombardo 341, Roma',
        university: 'Tor Vergata',
        notes: 'Resort studentesco. Accessibile (spesso serve documento o consumazione al bar).',
        tags: ['Aula Studio', 'Campus', 'WiFi', '☕ Ristoro'],
    },
    {
        id: 'tor_laziodisco_cambridge',
        nome: 'Mensa e Aule Laziodisco Cambridge',
        edificio: 'Residenza Laziodisco',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 150,
        orarioApertura: '09:00',
        orarioChiusura: '22:00',
        servizi: ['WiFi', 'Mensa Economica', 'Sala TV'],
        latitude: 41.8550,
        longitude: 12.6160,
        indirizzo: 'Via Cambridge 115, Roma',
        university: 'Tor Vergata',
        notes: 'Edificio arancione tra Ingegneria ed Economia. Punto strategico per pranzo+studio.',
        tags: ['Mensa/Ristoro', 'WiFi', '☕ Ristoro'],
    }
];

export const getDirectionsTorVergata = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    // Rilevamento Facoltà
    const isMedicina = room.indirizzo.includes('Montpellier');
    const isScienze = room.indirizzo.includes('Ricerca Scientifica');
    const isEconomia = room.indirizzo.includes('Columbia');
    const isIngegneria = room.indirizzo.includes('Politecnico');
    const isLettere = room.indirizzo.includes('Columbia') && room.id.includes('lettere');
    const isRettorato = room.indirizzo.includes('Raimondo') || room.indirizzo.includes('Salamanca');
    const isCampusX = room.indirizzo.includes('Passolombardo');

    // Opzione 1: Metro A + Navetta/Bus (Principale)
    directions.push({
        luogo: 'Da Metro A (Anagnina)',
        descrizione: 'Prendi la Metro A fino al capolinea Anagnina. Da qui prendi la Navetta Ateneo (gratuita) o il Bus 20 Express.',
        mezziPubblici: ['Metro A', 'Navetta', 'Bus 20'],
        tempoStimato: '20-30 min',
        note: 'Il bus 20 è più veloce per Economia e Ingegneria.'
    });

    // Opzione 2: Metro C (Roma Est)
    directions.push({
        luogo: 'Da Metro C (Torre Angela)',
        descrizione: 'Scendi a Torre Angela e prendi il Bus 20 o 500 verso l\'interno del campus.',
        mezziPubblici: ['Metro C', 'Bus 20'],
        tempoStimato: '15 min',
        note: 'Comodo se vieni da Centocelle o Pantano.'
    });

    // Opzione 3: Specifiche per Facoltà
    if (isEconomia || isLettere) {
        directions.push({
            luogo: 'Fermata Specifica',
            descrizione: 'Scendi a "Via Cambridge - Economia". Lettere è di fronte.',
            mezziPubblici: ['Fermata Cambridge'],
            tempoStimato: '-',
            note: 'Attento all\'attraversamento pedonale su Via Columbia.'
        });
        directions.push({
            luogo: 'In Auto',
            descrizione: 'Ampio parcheggio sterrato gratuito su Via Columbia.',
            mezziPubblici: ['Auto'],
            tempoStimato: '-',
            note: 'Spesso affollato dopo le 10:00.'
        });
    } else if (isIngegneria) {
        directions.push({
            luogo: 'Fermata Specifica',
            descrizione: 'Navetta Ateneo ferma davanti l\'ingresso. Bus 20 ferma a Cambridge (poi 5 min a piedi).',
            mezziPubblici: ['Fermata Ingegneria'],
            tempoStimato: '-',
            note: 'Se prendi il 20 devi fare una scalinata.'
        });
        directions.push({
            luogo: 'In Auto',
            descrizione: 'Parcheggi liberi lungo Via del Politecnico.',
            mezziPubblici: ['Auto'],
            tempoStimato: '-',
            note: 'Si trova posto facilmente.'
        });
    } else if (isScienze) {
        directions.push({
            luogo: 'Fermata Specifica',
            descrizione: 'Fermata "Via della Ricerca Scientifica" (davanti al Sogene).',
            mezziPubblici: ['Fermata Sogene'],
            tempoStimato: '-',
        });
        directions.push({
            luogo: 'In Auto',
            descrizione: 'Grande parcheggio sul retro (Via del Fontanile di Carcaricola).',
            mezziPubblici: ['Auto'],
            tempoStimato: '-',
        });
    } else if (isMedicina) {
        directions.push({
            luogo: 'Fermata Specifica',
            descrizione: 'Scendi a "Viale Montpellier" o capolinea Policlinico.',
            mezziPubblici: ['Fermata PTV'],
            tempoStimato: '-',
        });
        directions.push({
            luogo: 'In Auto',
            descrizione: 'Parcheggi a pagamento PTV o gratuiti su Viale Oxford (rari).',
            mezziPubblici: ['Auto'],
            tempoStimato: '-',
            note: 'Tariffa oraria nel parcheggio coperto.'
        });
    }

    return directions;
};
