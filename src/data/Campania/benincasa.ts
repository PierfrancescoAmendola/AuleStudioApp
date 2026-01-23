import { StudyRoom, DirectionsFromLocation } from '../../types';

// Database completo delle aule studio Suor Orsola Benincasa

export const benincasaRooms: StudyRoom[] = [
    // ============================================================
    // CITTADELLA MONASTICA - SEDE PRINCIPALE
    // Complesso di 33.000 m² alle pendici di Sant'Elmo
    // Corso Vittorio Emanuele 292, Napoli
    // ============================================================
    {
        id: 'benincasa_biblio_centrale',
        nome: 'Biblioteca Centrale di Ateneo',
        edificio: 'Cittadella Monastica - Corpo Principale',
        piano: 1,
        postiDisponibili: 80,
        postiTotali: 120,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi Eduroam', 'PC Consultazione', 'Prestito Libri', 'Biblioteca', 'Sala Periodici', 'Storico'],
        latitude: 40.8445,
        longitude: 14.2360,
        indirizzo: 'Corso Vittorio Emanuele 292, Napoli',
        university: 'Benincasa',
        tags: ['biblioteca', 'centrale', 'storico', 'monastero'],
        vibe: 'Raccolto e storico',
        occupancy_rate: 'Alto',
        notes: 'Biblioteca centrale con ricca collezione umanistica, giuridica e pedagogica. Fondi antichi dal \'500. Patrimoni di carta documentati.'
    },
    {
        id: 'benincasa_aula_angeli',
        nome: 'Sala degli Angeli',
        edificio: 'Eremo delle Romite',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 60,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Silenzio Assoluto', 'Arte', 'Affreschi', 'Storico'],
        latitude: 40.8447,
        longitude: 14.2358,
        indirizzo: 'Corso Vittorio Emanuele 292, Napoli',
        university: 'Benincasa',
        tags: ['storico', 'arte', 'affreschi', 'romite', 'silenzio'],
        vibe: 'Contemplativo e artistico',
        occupancy_rate: 'Medio',
        notes: 'Sala studio in ambiente monumentale. Parte dell\'Eremo costruito dopo la morte di Suor Orsola (1618). Progetto architettonico post-tridentino.'
    },
    {
        id: 'benincasa_chiostro_studio',
        nome: 'Spazio Studio Chiostro',
        edificio: 'Chiostro delle Oblate',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 45,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['WiFi', 'Giardino Interno', 'Silenzio', 'Luce Naturale'],
        latitude: 40.8444,
        longitude: 14.2362,
        indirizzo: 'Corso Vittorio Emanuele 292, Napoli',
        university: 'Benincasa',
        tags: ['chiostro', 'giardino', 'luce naturale', 'relax'],
        vibe: 'Sereno e luminoso',
        occupancy_rate: 'Basso',
        notes: 'Area studio nel chiostro storico delle Oblate. Atmosfera unica con vista sul giardino pensile. Perfetto per belle giornate.'
    },
    {
        id: 'benincasa_scienze_formazione',
        nome: 'Aula Studio Scienze della Formazione',
        edificio: 'Dipartimento Scienze Formative',
        piano: 2,
        postiDisponibili: 55,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Prese Elettriche', 'Climatizzazione', 'Moderno'],
        latitude: 40.8446,
        longitude: 14.2361,
        indirizzo: 'Corso Vittorio Emanuele 292, Napoli',
        university: 'Benincasa',
        tags: ['formazione', 'educazione', 'psicologia', 'comunicazione'],
        vibe: 'Dinamico e accademico',
        occupancy_rate: 'Alto',
        notes: 'Dipartimento di Scienze Formative, Psicologiche e della Comunicazione. Tradizione pedagogica dal 1885.'
    },
    {
        id: 'benincasa_giurisprudenza',
        nome: 'Aula Studio Giurisprudenza',
        edificio: 'Dipartimento Scienze Giuridiche ed Economiche',
        piano: 1,
        postiDisponibili: 50,
        postiTotali: 70,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi Eduroam', 'Prese', 'Silenzio', 'Biblioteca vicina'],
        latitude: 40.8445,
        longitude: 14.2359,
        indirizzo: 'Corso Vittorio Emanuele 292, Napoli',
        university: 'Benincasa',
        tags: ['giurisprudenza', 'economia', 'diritto'],
        vibe: 'Concentrato e serio',
        occupancy_rate: 'Alto',
        notes: 'Facoltà di Giurisprudenza attiva dal 1998. Laurea magistrale a ciclo unico. Ambiente silenzioso.'
    },
    {
        id: 'benincasa_lettere',
        nome: 'Aula Studio Scienze Umanistiche',
        edificio: 'Dipartimento Scienze Umanistiche',
        piano: 1,
        postiDisponibili: 45,
        postiTotali: 65,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi Eduroam', 'Prese', 'Arte', 'Storico'],
        latitude: 40.8446,
        longitude: 14.2360,
        indirizzo: 'Corso Vittorio Emanuele 292, Napoli',
        university: 'Benincasa',
        tags: ['lettere', 'beni culturali', 'lingue', 'turismo'],
        vibe: 'Umanistico e colto',
        occupancy_rate: 'Medio',
        notes: 'Dipartimento di Scienze Umanistiche. Corsi di Beni Culturali, Lingue, Digital Humanities.'
    },
    {
        id: 'benincasa_museo_pagliara',
        nome: 'Sala Lettura Museo Pagliara',
        edificio: 'Museo d\'Arte della Fondazione Pagliara',
        piano: 0,
        postiDisponibili: 20,
        postiTotali: 30,
        orarioApertura: '09:00',
        orarioChiusura: '16:00',
        servizi: ['WiFi', 'Arte', 'Silenzio Assoluto', 'Museo'],
        latitude: 40.8448,
        longitude: 14.2357,
        indirizzo: 'Corso Vittorio Emanuele 292, Napoli',
        university: 'Benincasa',
        tags: ['museo', 'arte', 'collezione', 'fondazione pagliara'],
        vibe: 'Artistico e ispirante',
        occupancy_rate: 'Basso',
        notes: 'Sala lettura nel Museo d\'Arte della Fondazione Pagliara. Collezione donata da Maria Antonietta Pagliara. Arredi, quadri e suppellettili antiche.'
    },
    {
        id: 'benincasa_museo_storico',
        nome: 'Sala Studio Museo Storico Universitario',
        edificio: 'Antico Romitorio',
        piano: 0,
        postiDisponibili: 15,
        postiTotali: 25,
        orarioApertura: '09:00',
        orarioChiusura: '16:00',
        servizi: ['WiFi', 'Museo', 'Storico', 'Silenzio'],
        latitude: 40.8447,
        longitude: 14.2356,
        indirizzo: 'Corso Vittorio Emanuele 292, Napoli',
        university: 'Benincasa',
        tags: ['museo', 'storia', 'romitorio', 'collezione'],
        vibe: 'Storico e raccolto',
        occupancy_rate: 'Basso',
        notes: 'Nel Museo Storico dell\'Istituto, nell\'antico romitorio. Documenta la storia dal 1582. Ambiente unico per studiare.'
    },
    {
        id: 'benincasa_terrazza',
        nome: 'Spazio Studio Terrazza Panoramica',
        edificio: 'Terrazza Cittadella',
        piano: 3,
        postiDisponibili: 25,
        postiTotali: 40,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['WiFi', 'Vista Panoramica', 'Aria Aperta', 'Luce Naturale'],
        latitude: 40.8449,
        longitude: 14.2361,
        indirizzo: 'Corso Vittorio Emanuele 292, Napoli',
        university: 'Benincasa',
        tags: ['terrazza', 'panorama', 'golfo', 'vista'],
        vibe: 'Mozzafiato e ispirante',
        occupancy_rate: 'Alto',
        notes: 'Terrazza con vista spettacolare sul Golfo di Napoli. Uno dei punti panoramici più belli della città. Meteo permettendo.'
    },
    {
        id: 'benincasa_chiesa_immacolata',
        nome: 'Sala Lettura Chiesa dell\'Immacolata',
        edificio: 'Chiesa dell\'Immacolata',
        piano: 0,
        postiDisponibili: 15,
        postiTotali: 20,
        orarioApertura: '09:00',
        orarioChiusura: '15:00',
        servizi: ['Silenzio Assoluto', 'Storico', 'Sacro', 'Arte'],
        latitude: 40.8444,
        longitude: 14.2358,
        indirizzo: 'Corso Vittorio Emanuele 292, Napoli',
        university: 'Benincasa',
        tags: ['chiesa', 'immacolata', '1580', 'silenzio'],
        vibe: 'Sacro e contemplativo',
        occupancy_rate: 'Basso',
        notes: 'Spazio adiacente alla Chiesa dell\'Immacolata fondata da Orsola nel 1580. Ristrutturata nel \'700 da Rocco Doyno. Silenzio assoluto.'
    },
    {
        id: 'benincasa_restauro',
        nome: 'Laboratorio Studio Restauro',
        edificio: 'Laboratori di Restauro',
        piano: -1,
        postiDisponibili: 20,
        postiTotali: 30,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['WiFi', 'Laboratorio', 'Attrezzature', 'Specializzato'],
        latitude: 40.8445,
        longitude: 14.2362,
        indirizzo: 'Corso Vittorio Emanuele 292, Napoli',
        university: 'Benincasa',
        tags: ['restauro', 'beni culturali', 'laboratorio', 'specializzato'],
        vibe: 'Tecnico e specializzato',
        occupancy_rate: 'Medio',
        notes: 'Area studio per studenti di Conservazione e Restauro dei Beni Culturali. Laurea magistrale a ciclo unico. Laboratori attrezzati.'
    },
    {
        id: 'benincasa_aula_magna',
        nome: 'Spazio Studio Aula Magna',
        edificio: 'Aula Magna',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 100,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Grande', 'Eventi', 'Aria Condizionata'],
        latitude: 40.8446,
        longitude: 14.2359,
        indirizzo: 'Corso Vittorio Emanuele 292, Napoli',
        university: 'Benincasa',
        tags: ['aula magna', 'grande', 'eventi'],
        vibe: 'Ampio e istituzionale',
        occupancy_rate: 'Variabile',
        notes: 'Spazio utilizzato come aula studio quando non ci sono eventi. Grande capienza. Verificare disponibilità.'
    }
];

export const getDirectionsBenincasa = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    // Tutte le sedi sono nella Cittadella Monastica - Corso Vittorio Emanuele 292
    directions.push({
        luogo: 'Funicolare Centrale',
        descrizione: 'Fermata Corso Vittorio Emanuele (linea Centrale). A piedi 5 min.',
        mezziPubblici: ['Funicolare Centrale'],
        tempoStimato: '5 min dalla fermata',
        note: 'Partenza da Via Toledo/Augusteo. Biglietto unico ANM.'
    });
    directions.push({
        luogo: 'Funicolare di Montesanto',
        descrizione: 'Fermata Corso Vittorio Emanuele. A piedi 7 min.',
        mezziPubblici: ['Funicolare Montesanto'],
        tempoStimato: '7 min dalla fermata',
        note: 'Partenza da Montesanto (Metro L2).'
    });
    directions.push({
        luogo: 'Metro L1 Vanvitelli',
        descrizione: 'Fermata Vanvitelli, poi scendere verso Corso Vittorio Emanuele.',
        mezziPubblici: ['Metro L1'],
        tempoStimato: '15 min dalla fermata',
        note: 'Percorso in discesa dal Vomero.'
    });
    directions.push({
        luogo: 'Bus ANM',
        descrizione: 'Linee C16, C18, C21, C28 fermano su Corso Vittorio Emanuele.',
        mezziPubblici: ['Bus C16', 'Bus C18', 'Bus C21', 'Bus C28'],
        tempoStimato: 'Variabile',
        note: 'Linee circolari collinari.'
    });
    directions.push({
        luogo: 'Da Napoli Centrale',
        descrizione: 'Metro L1 fino Toledo, poi Funicolare Centrale.',
        mezziPubblici: ['Metro L1', 'Funicolare'],
        tempoStimato: '25-30 min totali',
        note: 'Opzione più comoda.'
    });
    directions.push({
        luogo: 'In Auto',
        descrizione: 'Tangenziale uscita Vomero. Scendere verso Corso V. Emanuele. PARCHEGGIO DIFFICILE.',
        mezziPubblici: ['Auto'],
        tempoStimato: '-',
        note: 'SCONSIGLIATO. Zona collinare, strisce blu rare, ZTL parziale. Preferire mezzi pubblici.'
    });
    directions.push({
        luogo: 'A Piedi dal Centro',
        descrizione: 'Salita dal centro storico via scalinate (faticoso ma panoramico).',
        mezziPubblici: ['A piedi'],
        tempoStimato: '20-30 min',
        note: 'Percorso in forte salita. Sconsigliato con caldo.'
    });

    return directions;
};
