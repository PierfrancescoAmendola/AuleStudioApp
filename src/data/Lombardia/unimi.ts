import { StudyRoom, DirectionsFromLocation } from '../../types';

export const unimiRooms: StudyRoom[] = [
    // ============================================================
    // SEDE CENTRALE (Festa del Perdono / Centro Storico)
    // ============================================================
    {
        id: 'unimi_bsgu_centrale',
        nome: 'Biblioteca di Studi Giuridici e Umanistici (BSGU)',
        edificio: 'Sede Centrale (Ca\' Granda)',
        piano: 1, // Cortile del Richini
        postiDisponibili: 400,
        postiTotali: 600,
        orarioApertura: '09:00',
        orarioChiusura: '23:00',
        servizi: ['WiFi Eduroam', 'Aperta fino alle 23:00', 'Sabato aperto (9-14)'],
        latitude: 45.4605,
        longitude: 9.1945,
        indirizzo: 'Via Festa del Perdono 7, Milano',
        university: 'Unimi',
        occupancy_rate: 'Molto Alto',
        notes: 'La sala centrale (Crociera) è spettacolare. Una delle poche aperte fino a tardi in centro.',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'unimi_santalessandro',
        nome: 'Biblioteca di Lingue e Letterature Straniere',
        edificio: 'Polo Sant\'Alessandro',
        piano: 0,
        postiDisponibili: 120,
        postiTotali: 180,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Silenzio Assoluto', 'Cortile Interno'],
        latitude: 45.4590,
        longitude: 9.1895,
        indirizzo: 'Piazza Sant\'Alessandro 1, Milano',
        university: 'Unimi',
        notes: 'A pochi passi da Missori. Ambiente molto raccolto e silenzioso.',
        tags: ['Biblioteca', 'Campus', 'WiFi', '🔇 Silenzio'],
    },
    {
        id: 'unimi_conservatorio',
        nome: 'Biblioteca Scienze Politiche "E. Collotti Pischel"',
        edificio: 'Facoltà Scienze Politiche',
        piano: 1,
        postiDisponibili: 150,
        postiTotali: 200,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Prese elettriche', 'Aria Condizionata'],
        latitude: 45.4660,
        longitude: 9.2015,
        indirizzo: 'Via Conservatorio 7, Milano',
        university: 'Unimi',
        notes: 'Vicino al Tribunale e San Babila.',
        tags: ['Biblioteca', 'WiFi', '⚡ Prese', '❄️ Climatizzato'],
    },

    // ============================================================
    // CITTÀ STUDI (Area Scientifica - Lambrate/Piola)
    // ============================================================
    {
        id: 'unimi_agraria',
        nome: 'Biblioteca di Scienze Agrarie e Alimentari',
        edificio: 'Facoltà di Agraria',
        piano: 0,
        postiDisponibili: 200,
        postiTotali: 300,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Giardino', 'Mensa vicina'],
        latitude: 45.4760,
        longitude: 9.2270,
        indirizzo: 'Via Celoria 2, Milano',
        university: 'Unimi',
        notes: 'Nel cuore di Città Studi. Spesso affollata in sessione esami.',
        tags: ['Biblioteca', 'WiFi', '☕ Ristoro'],
    },
    {
        id: 'unimi_biomedica_cittastudi',
        nome: 'Biblioteca Biomedica di Città Studi',
        edificio: 'Edificio Biologia',
        piano: 1,
        postiDisponibili: 312,
        postiTotali: 312,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Sale Gruppo', 'Prese al banco'],
        latitude: 45.4785,
        longitude: 9.2315,
        indirizzo: 'Via Valvassori Peroni 21, Milano',
        university: 'Unimi',
        notes: 'Molto grande e luminosa. Vicino alla Biblioteca Comunale Valvassori Peroni.',
        tags: ['Biblioteca', 'WiFi', '👥 Gruppi OK'],
    },

    // ============================================================
    // POLI OSPEDALIERI (Medicina)
    // ============================================================
    {
        id: 'unimi_policlinico',
        nome: 'Biblioteca Polo Centrale di Medicina',
        edificio: 'Policlinico (Via Commenda)',
        piano: 0,
        postiDisponibili: 150,
        postiTotali: 200,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['WiFi', 'Ambiente Medico', 'Orario Lungo'],
        latitude: 45.4575,
        longitude: 9.1980,
        indirizzo: 'Via della Commenda 19, Milano',
        university: 'Unimi',
        notes: 'Sede storica di Medicina, dietro il Tribunale.',
        tags: ['Biblioteca', 'Campus', 'Medicina', 'WiFi'],
    },
    {
        id: 'unimi_sanpaolo',
        nome: 'Biblioteca di Medicina Polo San Paolo',
        edificio: 'Ospedale San Paolo (Blocco C)',
        piano: 3,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['WiFi', 'Interno Ospedale'],
        latitude: 45.4320,
        longitude: 9.1630,
        indirizzo: 'Via Antonio di Rudinì 8, Milano',
        university: 'Unimi',
        notes: 'Zona Barona/Famagosta. Utile per tirocinanti.',
        tags: ['Biblioteca', 'Campus', 'Medicina', 'WiFi'],
    },
    {
        id: 'unimi_vialba_sacco',
        nome: 'Biblioteca "Alberto Malliani" (Polo Vialba)',
        edificio: 'Ospedale Luigi Sacco',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 90,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['WiFi', 'Parcheggio'],
        latitude: 45.5220,
        longitude: 9.1050,
        indirizzo: 'Via G.B. Grassi 74, Milano',
        university: 'Unimi',
        notes: 'Estremo nord-ovest di Milano (Roserio). Serve il Polo Vialba.',
        tags: ['Biblioteca', 'Campus', 'Medicina', 'WiFi', '🅿️ Parcheggio'],
    },

    // ============================================================
    // POLI DISTACCATI (Lodi, Segrate, Sesto, Noto)
    // ============================================================
    {
        id: 'unimi_lodi_vet',
        nome: 'Biblioteca di Medicina Veterinaria (Lodi)',
        edificio: 'Polo Universitario Veterinario',
        piano: 0,
        postiDisponibili: 248,
        postiTotali: 248,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Nuova Struttura', 'Ospedale Veterinario', 'Mensa'],
        latitude: 45.3175,
        longitude: 9.4920,
        indirizzo: 'Via dell\'Università 6, Lodi (LO)',
        university: 'Unimi',
        occupancy_rate: 'Medio',
        notes: 'Campus modernissimo progettato da Renzo Piano. Si trova a Lodi città.',
        tags: ['Biblioteca', 'Campus', 'Medicina', 'WiFi', '☕ Ristoro'],
    },
    {
        id: 'unimi_mediazione_sesto',
        nome: 'Biblioteca Mediazione Linguistica',
        edificio: 'Polo di Sesto San Giovanni',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 150,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Vicina Metro'],
        latitude: 45.5350,
        longitude: 9.2370,
        indirizzo: 'Piazza Indro Montanelli 4, Sesto S. Giovanni (MI)',
        university: 'Unimi',
        notes: 'Sede dei corsi di Mediazione. Facilmente raggiungibile con M1.',
        tags: ['Biblioteca', 'Campus', 'WiFi'],
    },
    {
        id: 'unimi_noto_beni',
        nome: 'Biblioteca Beni Culturali e Spettacolo',
        edificio: 'Sede Via Noto',
        piano: 2,
        postiDisponibili: 50,
        postiTotali: 80,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Silenziosa', 'Zona Ripamonti'],
        latitude: 45.4385,
        longitude: 9.2060,
        indirizzo: 'Via Noto 6, Milano',
        university: 'Unimi',
        notes: 'Sede distaccata per Storia dell\'Arte e Musica.',
        tags: ['Biblioteca', 'WiFi', '🔇 Silenzio'],
    },
    {
        id: 'unimi_segrate_lita',
        nome: 'Spazio Studio Polo LITA',
        edificio: 'L.I.T.A. Segrate',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 40,
        orarioApertura: '08:30',
        orarioChiusura: '17:30',
        servizi: ['WiFi', 'Laboratori'],
        latitude: 45.5030,
        longitude: 9.2730,
        indirizzo: 'Via Fratelli Cervi 93, Segrate (MI)',
        university: 'Unimi',
        notes: 'Polo tecnologico avanzato (Milano 2).',
        tags: ['Aula Studio', 'Campus', 'WiFi'],
    },

    // ============================================================
    // SEDE CENTRALE - SPAZI STUDIO AGGIUNTIVI
    // ============================================================
    {
        id: 'unimi_sala_levi',
        nome: 'Sala Levi (ex-CIDis)',
        edificio: 'Centro Universitario (Piano Terra)',
        piano: 0,
        postiDisponibili: 350,
        postiTotali: 450,
        orarioApertura: '08:30',
        orarioChiusura: '22:00',
        servizi: ['WiFi', '450 Posti!', 'Orario Esteso', 'Gruppi'],
        latitude: 45.4605,
        longitude: 9.1948,
        indirizzo: 'Via Festa del Perdono 7, Milano',
        university: 'Unimi',
        occupancy_rate: 'Alto',
        notes: 'Una delle aule studio più grandi di Milano! 450 posti. Perfetta per sessione.',
        tags: ['Aula Studio', 'WiFi'],
    },
    {
        id: 'unimi_cortile_pesci',
        nome: 'Cortile dei Pesci (Aula Studio)',
        edificio: 'Sede Centrale',
        piano: 0,
        postiDisponibili: 150,
        postiTotali: 200,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Cortile', 'Atmosfera Storica'],
        latitude: 45.4603,
        longitude: 9.1942,
        indirizzo: 'Via Festa del Perdono 7, Milano',
        university: 'Unimi',
        notes: 'Nel cortile interno della Ca\' Granda. Ambiente suggestivo.',
        tags: ['Aula Studio', 'WiFi'],
    },
    {
        id: 'unimi_bronxlab',
        nome: 'Bronxlab',
        edificio: 'Sede Centrale (Interrato)',
        piano: -1,
        postiDisponibili: 40,
        postiTotali: 56,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'PC disponibili', 'Stampa'],
        latitude: 45.4605,
        longitude: 9.1945,
        indirizzo: 'Via Festa del Perdono 7, Milano',
        university: 'Unimi',
        notes: 'Sala computer con postazioni attrezzate. Utile per progetti e stampe.',
        tags: ['Aula Studio', 'WiFi'],
    },
    {
        id: 'unimi_crociera_bassa',
        nome: 'Aula Studio Crociera Bassa',
        edificio: 'Sede Centrale (Piano Terra)',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 150,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Silenzio', 'Storica'],
        latitude: 45.4606,
        longitude: 9.1946,
        indirizzo: 'Via Festa del Perdono 7, Milano',
        university: 'Unimi',
        notes: 'Sotto la famosa Crociera. Ambiente molto raccolto.',
        tags: ['Aula Studio', 'WiFi', '🔇 Silenzio'],
    },
    {
        id: 'unimi_cortile_laghetto',
        nome: 'Aula Studio Cortile Laghetto',
        edificio: 'Sede Centrale',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Vista Cortile'],
        latitude: 45.4604,
        longitude: 9.1940,
        indirizzo: 'Via Festa del Perdono 7, Milano',
        university: 'Unimi',
        notes: 'Affacciata sul caratteristico cortile con laghetto.',
        tags: ['Aula Studio', 'WiFi'],
    },
    {
        id: 'unimi_giurisprudenza_studio',
        nome: 'Aula Studio Giurisprudenza',
        edificio: 'Sede Centrale',
        piano: 1,
        postiDisponibili: 120,
        postiTotali: 150,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Riservata Giurisprudenza', 'Silenzio'],
        latitude: 45.4605,
        longitude: 9.1947,
        indirizzo: 'Via Festa del Perdono 7, Milano',
        university: 'Unimi',
        notes: 'Dedicata principalmente agli studenti di Giurisprudenza.',
        tags: ['Aula Studio', 'WiFi', '🔇 Silenzio'],
    },

    // ============================================================
    // BIBLIOTECHE AGGIUNTIVE - SEDE CENTRALE
    // ============================================================
    {
        id: 'unimi_biblio_filosofia',
        nome: 'Biblioteca di Filosofia',
        edificio: 'Sede Centrale',
        piano: 2,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Silenzio Assoluto', 'Consultazione'],
        latitude: 45.4605,
        longitude: 9.1944,
        indirizzo: 'Via Festa del Perdono 7, Milano',
        university: 'Unimi',
        notes: 'Biblioteca specializzata con ricco patrimonio di filosofia.',
        tags: ['Biblioteca', 'WiFi', '🔇 Silenzio'],
    },
    {
        id: 'unimi_biblio_storia',
        nome: 'Biblioteca di Storia',
        edificio: 'Sede Centrale',
        piano: 2,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Archivi', 'Ricerca'],
        latitude: 45.4605,
        longitude: 9.1943,
        indirizzo: 'Via Festa del Perdono 7, Milano',
        university: 'Unimi',
        notes: 'Sezione storica con documenti e archivi.',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'unimi_biblio_safm',
        nome: 'Biblioteca SAFM (Antichità e Filologia)',
        edificio: 'Sede Centrale',
        piano: 1,
        postiDisponibili: 70,
        postiTotali: 90,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Classici', 'Papiri'],
        latitude: 45.4605,
        longitude: 9.1942,
        indirizzo: 'Via Festa del Perdono 7, Milano',
        university: 'Unimi',
        notes: 'Scienze dell\'Antichità e Filologia Moderna. Include testi rari.',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'unimi_biblio_papirologia',
        nome: 'Biblioteca di Papirologia ed Egittologia',
        edificio: 'Sede Centrale',
        piano: 2,
        postiDisponibili: 25,
        postiTotali: 30,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['WiFi', 'Specializzata', 'Collezioni Uniche'],
        latitude: 45.4605,
        longitude: 9.1941,
        indirizzo: 'Via Festa del Perdono 7, Milano',
        university: 'Unimi',
        notes: 'Biblioteca unica con collezione di papiri egizi. Ambiente molto intimo.',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'unimi_sala_settecento',
        nome: 'Sala del Settecento',
        edificio: 'Sede Centrale',
        piano: 1,
        postiDisponibili: 40,
        postiTotali: 50,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['WiFi', 'Monumentale', 'Affreschi'],
        latitude: 45.4605,
        longitude: 9.1946,
        indirizzo: 'Via Festa del Perdono 7, Milano',
        university: 'Unimi',
        notes: 'Sala storica con soffitti affrescati. Studiare in un museo!',
        tags: ['Aula Studio', 'WiFi'],
    },

    // ============================================================
    // CITTÀ STUDI - SPAZI AGGIUNTIVI
    // ============================================================
    {
        id: 'unimi_mediateca',
        nome: 'Mediateca Universitaria',
        edificio: 'Polo Città Studi',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'PC', 'Audio/Video', 'Lingue'],
        latitude: 45.4785,
        longitude: 9.2315,
        indirizzo: 'Via Valvassori Peroni 21, Milano',
        university: 'Unimi',
        notes: 'Risorse multimediali per studio delle lingue. Postazioni computer.',
        tags: ['Aula Studio', 'Campus', 'WiFi'],
    },
    {
        id: 'unimi_sala_venezian',
        nome: 'Sala Studio Via Venezian',
        edificio: 'Settore Didattico',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 120,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Tavoli Larghi', 'Vicino Mensa'],
        latitude: 45.4770,
        longitude: 9.2280,
        indirizzo: 'Via Venezian 15, Milano',
        university: 'Unimi',
        notes: 'Nel settore didattico di Città Studi. Comoda per le pause pranzo.',
        tags: ['Aula Studio', 'WiFi', '☕ Ristoro'],
    },
    {
        id: 'unimi_bicf',
        nome: 'Biblioteca BICF (Biologia, Informatica, Chimica, Fisica)',
        edificio: 'Polo Scientifico',
        piano: 0,
        postiDisponibili: 150,
        postiTotali: 200,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Scienze', 'Laboratori Vicini'],
        latitude: 45.4780,
        longitude: 9.2300,
        indirizzo: 'Via Celoria 16, Milano',
        university: 'Unimi',
        notes: 'Biblioteca centrale per le scienze dure. Molto frequentata.',
        tags: ['Biblioteca', 'Campus', 'WiFi'],
    },
    {
        id: 'unimi_matematica_ricci',
        nome: 'Biblioteca Matematica "Giovanni Ricci"',
        edificio: 'Dipartimento Matematica',
        piano: 1,
        postiDisponibili: 50,
        postiTotali: 70,
        orarioApertura: '09:00',
        orarioChiusura: '17:30',
        servizi: ['WiFi', 'Silenzio', 'Specializzata'],
        latitude: 45.4775,
        longitude: 9.2305,
        indirizzo: 'Via Saldini 50, Milano',
        university: 'Unimi',
        notes: 'Per studenti di Matematica. Ambiente molto tranquillo.',
        tags: ['Biblioteca', 'WiFi', '🔇 Silenzio'],
    },
    {
        id: 'unimi_scienze_terra',
        nome: 'Biblioteca Scienze della Terra "Ardito Desio"',
        edificio: 'Dipartimento Geologia',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 60,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['WiFi', 'Geologia', 'Collezioni Minerali'],
        latitude: 45.4782,
        longitude: 9.2295,
        indirizzo: 'Via Mangiagalli 34, Milano',
        university: 'Unimi',
        notes: 'Dedicata a Scienze della Terra. Include collezioni geologiche.',
        tags: ['Biblioteca', 'WiFi'],
    },

    // ============================================================
    // APICE - ARCHIVI SPECIALI
    // ============================================================
    {
        id: 'unimi_apice',
        nome: 'APICE - Archivi della Parola, Immagine, Comunicazione',
        edificio: 'Via Noto',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 40,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['WiFi', 'Archivi Storici', 'Editoria', 'Prenotazione'],
        latitude: 45.4385,
        longitude: 9.2062,
        indirizzo: 'Via Noto 10, Milano',
        university: 'Unimi',
        notes: 'Centro di eccellenza per archivi editoriali e comunicazione. Richiede prenotazione.',
        tags: ['Aula Studio', 'WiFi'],
    },

    // ============================================================
    // MILANO - BIBLIOTECHE COMUNALI (disponibili per studenti UniMi)
    // ============================================================
    {
        id: 'unimi_sormani',
        nome: 'Biblioteca Comunale Centrale Sormani',
        edificio: 'Palazzo Sormani',
        piano: 0,
        postiDisponibili: 400,
        postiTotali: 800,
        orarioApertura: '08:45',
        orarioChiusura: '19:30',
        servizi: ['WiFi Gratuito', 'Catalogo 600.000 volumi', 'Emeroteca', 'Fotocopie', 'Sale Tematiche', 'Sabato Aperto'],
        latitude: 45.4585,
        longitude: 9.1990,
        indirizzo: 'Corso di Porta Vittoria 6, 20122 Milano',
        university: 'Unimi',
        occupancy_rate: 'Molto Alto',
        notes: 'Gestita dal Comune di Milano. La più grande biblioteca pubblica della città con 800 posti. Usatissima da studenti di UniMi, PoliMi e UniMib. Palazzo storico con giardino interno. Sabato 09:30-19:30, domenica chiusa.',
        tags: ['Biblioteca', 'Comunale', 'WiFi', '📚 600K volumi', '🏛️ Storica'],
    },
    // ============================================================
    // MILANO - SPAZI CIVICI E INDIPENDENTI
    // ============================================================
    {
        id: 'unimi_base_milano',
        nome: 'Base Milano (Spazio Sociale)',
        edificio: 'Base Milano',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 100,
        orarioApertura: '08:00',
        orarioChiusura: '22:00',
        servizi: ['WiFi Gratuito', 'Prese', 'Tavoli Ampi', 'Accesso Libero'],
        latitude: 45.4535,
        longitude: 9.1625,
        indirizzo: 'Via Bergognone 34, 20144 Milano',
        university: 'Unimi',
        occupancy_rate: 'Alto',
        extendedHours: true,
        notes: 'Spazio ibrido/sociale con tavoli ampi, prese elettriche, WiFi e accesso libero e gratuito. Usato da studenti di tutte le università milanesi.',
        tags: ['Comunale', 'WiFi', 'Serale', 'Zona Tortona'],
    },
    {
        id: 'unimi_giambellino',
        nome: 'Spazio Studio Giambellino',
        edificio: 'Spazio Autogestito',
        piano: 0,
        postiDisponibili: 20,
        postiTotali: 30,
        orarioApertura: '10:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Prese', 'Aperta Domenica'],
        latitude: 45.4470,
        longitude: 9.1450,
        indirizzo: 'Via Giambellino, 20146 Milano',
        university: 'Unimi',
        occupancy_rate: 'Medio',
        notes: 'Spazio autogestito e gratuito. Vitale perché aperto anche la domenica, quando molte biblioteche civiche sono chiuse.',
        tags: ['Autogestita', 'Weekend', 'WiFi'],
    }
];

export const getDirectionsUnimi = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const isLodi = room.indirizzo.includes('Lodi') || room.indirizzo.includes('Università 6');
    const isSesto = room.indirizzo.includes('Sesto');
    // Aggiunta Via Saldini, Mangiagalli, Venezian per Città Studi
    const isCittaStudi = room.indirizzo.includes('Celoria') || room.indirizzo.includes('Valvassori') || room.indirizzo.includes('Saldini') || room.indirizzo.includes('Mangiagalli') || room.indirizzo.includes('Venezian');
    const isFestaPerdono = room.indirizzo.includes('Festa del Perdono') || room.indirizzo.includes('Sant\'Antonio') || room.indirizzo.includes('Sant\'Alessandro');
    const isSegrate = room.indirizzo.includes('Segrate') || room.indirizzo.includes('Cervi');
    const isSanPaolo = room.indirizzo.includes('Rudinì');
    const isVialba = room.indirizzo.includes('Grassi') || room.indirizzo.includes('Sacco');
    const isNoto = room.indirizzo.includes('Noto');
    const isConservatorio = room.indirizzo.includes('Conservatorio');
    const isCommenda = room.indirizzo.includes('Commenda');

    // POLO LODI (Veterinaria)
    if (isLodi) {
        directions.push({
            luogo: 'Milano (Passante/Centrale)',
            descrizione: `Per il Campus Veterinario di Lodi:
1. Prendi il **Passante Ferroviario S1** (da Bovisa, Garibaldi, Dateo, Porta Vittoria, Rogoredo) direzione **Lodi**.
2. Oppure Treno Regionale da Milano Centrale/Rogoredo per Lodi/Bologna/Mantova.
3. Scendi alla stazione di **Lodi**.
4. Dal terminal bus della stazione, prendi la **Navetta Linea 4** o il Bus Urbano 3 che portano al Polo Universitario (Via dell'Università).`,
            mezziPubblici: ['Treno S1', 'Regionale', 'Navetta Lodi'],
            tempoStimato: '40-50 min da Milano',
            note: 'Il Campus è fuori dal centro di Lodi, serve il bus dalla stazione. Progettato da Renzo Piano!'
        });
    }

    // POLO SESTO (Mediazione)
    else if (isSesto) {
        directions.push({
            luogo: 'Milano Centro',
            descrizione: `Per Sesto San Giovanni (Piazza Montanelli):
1. Prendi la **Metro M1 (Rossa)** direzione Sesto 1° Maggio.
2. Scendi alla fermata **Sesto Marelli**.
3. L'edificio universitario è a 3 minuti a piedi (uscita verso Viale Edison/Piazza Montanelli).`,
            mezziPubblici: ['Metro M1'],
            tempoStimato: '20 min da Duomo',
            note: 'Sede dei corsi di Mediazione Linguistica.'
        });
    }

    // POLO SEGRATE (LITA)
    else if (isSegrate) {
        directions.push({
            luogo: 'Milano Centro',
            descrizione: `Per il LITA di Segrate (Milano 2):
1. Prendi la **Metro M2 (Verde)** fino a **Cascina Gobba** o **Udine**.
2. Da Gobba: Bus **925** (fermata Via F.lli Cervi - Residenza Ponti).
3. Da Udine: Bus **923** (verso Ospedale San Raffaele/Milano 2).`,
            mezziPubblici: ['Metro M2', 'Bus 925/923'],
            tempoStimato: '35-40 min',
            note: 'Polo tecnologico in Milano 2.'
        });
    }

    // CITTÀ STUDI (Agraria/Scienze/Matematica/Geologia)
    else if (isCittaStudi) {
        directions.push({
            luogo: 'Stazione Centrale / Centro',
            descrizione: `Per Città Studi (Via Celoria/Valvassori/Saldini/Mangiagalli):
1. **Metro M2 (Verde)**: Scendi a **Piola**.
2. Via Celoria/Valvassori: 5-10 min a piedi da Piola.
3. Via Saldini/Mangiagalli: 10 min a piedi (verso est).
4. Alternativa: **Lambrate FS** (M2 + Treni) + 10 min a piedi.
5. Bus/Tram: 19, 33, 90, 91 (fermata P.za Leonardo da Vinci).`,
            mezziPubblici: ['Metro M2 (Piola/Lambrate)', 'Bus 90/91', 'Tram 19/33'],
            tempoStimato: '15-20 min',
            note: 'Hub scientifico UNIMI vicino al Politecnico.'
        });
    }

    // SEDE CENTRALE (Festa del Perdono)
    else if (isFestaPerdono) {
        directions.push({
            luogo: 'Duomo / Stazione Centrale',
            descrizione: `Per la Sede Centrale (Ca' Granda - Via Festa del Perdono):
1. **Metro M3 (Gialla)**: Scendi a **Missori** (5 min a piedi).
2. **Metro M1 (Rossa)**: Scendi a **Duomo** (10 min a piedi).
3. Da Duomo: cammina verso Via Larga, poi Via Festa del Perdono.
4. Tram 12, 19, 24 o Bus 54, 73 (fermata Via Larga).

**NOTA**: Per Piazza Sant'Alessandro (Lingue), scendi a **Missori** (2 min a piedi).`,
            mezziPubblici: ['Metro M3 (Missori)', 'Metro M1 (Duomo)', 'Tram 12/24'],
            tempoStimato: '5-10 min',
            note: 'Zona Area C. La sede è nel bellissimo edificio della Ca\' Granda (ex Ospedale Maggiore).'
        });
    }

    // VIA CONSERVATORIO (Scienze Politiche)
    else if (isConservatorio) {
        directions.push({
            luogo: 'Centro Milano',
            descrizione: `Per Via Conservatorio (Scienze Politiche):
1. **Metro M1 (Rossa)**: Scendi a **San Babila**.
2. Cammina 5-7 minuti verso Corso Monforte/Via Conservatorio.
3. Alternativa: Tram 12, 27 (fermata Conservatorio).`,
            mezziPubblici: ['Metro M1 (San Babila)', 'Tram 12/27'],
            tempoStimato: '10 min',
            note: 'Zona elegante vicino al Tribunale.'
        });
    }

    // VIA COMMENDA (Policlinico Medicina)
    else if (isCommenda) {
        directions.push({
            luogo: 'Centro Milano',
            descrizione: `Per Via della Commenda (Polo Medicina - Policlinico):
1. **Metro M3 (Gialla)**: Scendi a **Crocetta**.
2. Cammina 5 minuti verso Via della Commenda.
3. Alternativa: Tram 9 o Bus 77 (fermata Policlinico).`,
            mezziPubblici: ['Metro M3 (Crocetta)', 'Tram 9'],
            tempoStimato: '10 min',
            note: 'Sede storica della Facoltà di Medicina.'
        });
    }

    // POLO SAN PAOLO
    else if (isSanPaolo) {
        directions.push({
            luogo: 'Milano Centro',
            descrizione: `Per Ospedale San Paolo (Via di Rudinì):
1. **Metro M2 (Verde)** direzione Abbiategrasso/Assago.
2. Scendi a **Famagosta**.
3. A piedi 10-15 min o Bus 71, 74.`,
            mezziPubblici: ['Metro M2 (Famagosta)', 'Bus 71/74'],
            tempoStimato: '25 min',
            note: 'L\'università è nel blocco C dell\'ospedale. Zona Barona.'
        });
    }

    // POLO VIALBA/SACCO
    else if (isVialba) {
        directions.push({
            luogo: 'Milano Centro',
            descrizione: `Per Ospedale Sacco - Polo Vialba (Via G.B. Grassi):
1. **Metro M3 (Gialla)**: Scendi a **Affori FN**.
2. Bus **40** o **41** verso Ospedale Sacco.
3. Alternativa: Treno FN da Cadorna fino a **Affori**, poi bus.`,
            mezziPubblici: ['Metro M3 (Affori)', 'Bus 40/41'],
            tempoStimato: '30-35 min',
            note: 'Estremo nord-ovest di Milano (Roserio). Polo ospedaliero.'
        });
    }

    // VIA NOTO (Beni Culturali / APICE)
    else if (isNoto) {
        directions.push({
            luogo: 'Milano Centro',
            descrizione: `Per Via Noto (Beni Culturali / APICE):
1. **Metro M3 (Gialla)**: Scendi a **Porta Romana** o **Lodi TIBB**.
2. Bus **90** o **91** (fermata Via Noto).
3. A piedi: 10-15 min da Porta Romana.`,
            mezziPubblici: ['Metro M3 (Porta Romana/Lodi)', 'Bus 90/91'],
            tempoStimato: '15-20 min',
            note: 'Zona Ripamonti. Sede per Storia dell\'Arte e Archivi APICE.'
        });
    }

    // BIBLIOTECA SORMANI (Comunale)
    else if (room.id.includes('sormani')) {
        directions.push({
            luogo: 'Centro Milano',
            descrizione: `Per la Biblioteca Sormani (Corso di Porta Vittoria):
1. **Metro M3 (Gialla)**: Scendi a **Crocetta** o **Porta Romana**.
2. Cammina 5-8 min verso Corso di Porta Vittoria.
3. **Tram 12, 27** (fermata Porta Vittoria).
4. Da **Piazza Duomo**: 15 min a piedi (Via Larga → Corso Porta Vittoria).`,
            mezziPubblici: ['Metro M3 (Crocetta/Porta Romana)', 'Tram 12/27'],
            tempoStimato: '10-15 min',
            note: 'La più grande biblioteca pubblica di Milano. Palazzo storico con giardino.'
        });
    }

    return directions;
};
