import { StudyRoom, DirectionsFromLocation } from '../../types';

export const unicasRooms: StudyRoom[] = [
    // ============================================================
    // CASSINO - CAMPUS FOLCARA (Economia, Giurisprudenza, Lettere)
    // ============================================================
    {
        id: 'unicas_folcara_umanistica',
        nome: 'Biblioteca Umanistica "Giorgio Aprea"',
        edificio: 'Campus Folcara - Palazzina Lettere',
        piano: 0,
        postiDisponibili: 94,
        postiTotali: 94,
        orarioApertura: '08:15',
        orarioChiusura: '17:15',
        servizi: ['WiFi Eduroam', 'Prese elettriche', 'Aria condizionata', 'Accessibile disabili'],
        latitude: 41.4720,
        longitude: 13.8485,
        indirizzo: 'Viale dell\'Università, Località Folcara, Cassino',
        university: 'Unicas',
        occupancy_rate: 'Alto',
        notes: 'Biblioteca principale per l\'area umanistica. Venerdì chiude alle 13:45.',
        tags: ['Biblioteca', 'Campus', 'WiFi', '⚡ Prese', '❄️ Climatizzato'],
    },
    {
        id: 'unicas_folcara_giuridica',
        nome: 'Biblioteca Area Giuridico-Economica',
        edificio: 'Campus Folcara - Palazzo degli Studi',
        piano: 0,
        postiDisponibili: 90,
        postiTotali: 90,
        orarioApertura: '09:00',
        orarioChiusura: '17:30',
        servizi: ['WiFi Eduroam', 'Sala Consultazione', 'PC Ricerca'],
        latitude: 41.4725,
        longitude: 13.8490,
        indirizzo: 'Via S. Angelo, Località Folcara, Cassino',
        university: 'Unicas',
        notes: 'Situata nel corpo centrale del Campus. Venerdì chiude alle 13:30.',
        tags: ['Biblioteca', 'Campus', 'WiFi'],
    },
    {
        id: 'unicas_residenza_folcara',
        nome: 'Aula Studio Residenza Laziodisco',
        edificio: 'Residenza Universitaria Folcara',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 60,
        orarioApertura: '08:00',
        orarioChiusura: '23:00',
        servizi: ['WiFi', 'Area Relax', 'Palestra', 'Mensa vicina'],
        latitude: 41.4710,
        longitude: 13.8470,
        indirizzo: 'Campus Folcara, Cassino',
        university: 'Unicas',
        notes: 'Accessibile principalmente ai residenti, ma spesso usata dagli studenti del campus per lo studio serale.',
        tags: ['Aula Studio', 'Campus', 'WiFi', '☕ Ristoro'],
    },

    // ============================================================
    // CASSINO - POLO INGEGNERIA (Via Di Biasio - Centro)
    // ============================================================
    {
        id: 'unicas_ing_biblio',
        nome: 'Biblioteca Area Ingegneristica',
        edificio: 'Edificio Ingegneria',
        piano: 0, // Piano Terra
        postiDisponibili: 50,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '17:00',
        servizi: ['WiFi Eduroam', 'Consultazione Tecnica', 'Silenzio'],
        latitude: 41.4930,
        longitude: 13.8320,
        indirizzo: 'Via Gaetano Di Biasio 43, Cassino',
        university: 'Unicas',
        occupancy_rate: 'Medio',
        notes: 'Situata nel polo cittadino, vicino alla stazione. Lunedì e Venerdì chiude alle 13:30.',
        tags: ['Biblioteca', 'WiFi', '🔇 Silenzio'],
    },
    {
        id: 'unicas_ing_aule',
        nome: 'Aule Studio Libere Ingegneria',
        edificio: 'Edificio Didattica Ingegneria',
        piano: 1, // Piani vari
        postiDisponibili: 60,
        postiTotali: 100,
        orarioApertura: '08:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Tavoli da disegno', 'Distributori'],
        latitude: 41.4932,
        longitude: 13.8322,
        indirizzo: 'Via Gaetano Di Biasio 43, Cassino',
        university: 'Unicas',
        notes: 'Aule didattiche usate per lo studio quando non ci sono lezioni. Verificare orari in portineria.',
        tags: ['Aula Studio', 'WiFi'],
    },

    // ============================================================
    // POLO DI FROSINONE (Ingegneria Gestionale, Economia)
    // ============================================================
    {
        id: 'unicas_frosinone_marzi',
        nome: 'Sala Lettura Polo Frosinone',
        edificio: 'Sede Piazza Marzi',
        piano: 0,
        postiDisponibili: 20,
        postiTotali: 20,
        orarioApertura: '09:30',
        orarioChiusura: '13:00',
        servizi: ['WiFi', 'Punto Ristoro vicinanze', 'Centro Città'],
        latitude: 41.6430,
        longitude: 13.3520,
        indirizzo: 'Piazza Domenico Marzi 1, Frosinone',
        university: 'Unicas',
        notes: 'Piccola sala lettura nella sede distaccata. Orari ridotti: Lun/Mer anche pomeriggio (14:30-17:00).',
        tags: ['Sala Lettura', 'Campus', 'Centro', 'WiFi'],
    }
];

export const getDirectionsUnicas = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];
    const isFolcara = room.indirizzo.includes('Folcara');
    const isIngegneria = room.indirizzo.includes('Biasio');
    const isFrosinone = room.indirizzo.includes('Marzi') || room.indirizzo.includes('Frosinone');

    // CASSINO - STAZIONE (Hub Principale)
    if (isFolcara) {
        directions.push({
            luogo: 'Stazione FS Cassino',
            descrizione: `Per Campus Folcara (Economia, Giurisprudenza, Lettere):
1. Uscendo dalla stazione, dirigiti al capolinea bus (Piazza Garibaldi).
2. Prendi il **Bus Linea 16** (Magni) o la navetta universitaria (se attiva).
3. Il bus porta direttamente dentro il Campus in circa 10-15 minuti.
4. In auto: Uscita A1 Cassino, seguire indicazioni "Università/Campus Folcara".`,
            mezziPubblici: ['Bus Linea 16', 'Navetta Unicas'],
            tempoStimato: '15 min',
            note: 'A piedi è sconsigliato (percorso lungo e strada a scorrimento veloce), usa il bus.'
        });
    } else if (isIngegneria) {
        directions.push({
            luogo: 'Stazione FS Cassino',
            descrizione: `Per Ingegneria (Sede Via Di Biasio):
1. È raggiungibile comodamente **a piedi** dalla stazione (circa 10-15 minuti).
2. Esci dalla stazione e percorri Viale Ivanoe Bonomi.
3. Svolta su Via Gaetano Di Biasio. L'università è sulla destra.
4. Alternativa: Bus urbano linea 1 o circolare.`,
            mezziPubblici: ['A piedi', 'Bus Urbano'],
            tempoStimato: '10-15 min a piedi',
            note: 'La sede è praticamente in centro città.'
        });
    }

    // FROSINONE
    if (isFrosinone) {
        directions.push({
            luogo: 'Stazione FS Frosinone',
            descrizione: `Per Polo Piazza Marzi:
1. Dalla stazione, prendi il bus navetta o linee urbane (GEAF) che salgono verso la parte alta della città (Piazzale Vittorio Veneto/Prefettura).
2. La sede di Piazza Marzi si trova vicino alla Prefettura e al Parco Matusa.
3. L'ascensore inclinato collega la parte bassa alla parte alta (se attivo).`,
            mezziPubblici: ['Bus Urbano', 'Ascensore Inclinato'],
            tempoStimato: '20-25 min',
            note: 'Frosinone ha una parte bassa (Stazione) e una alta (Centro/Università).'
        });
    }

    return directions;
};
