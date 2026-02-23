import { StudyRoom, DirectionsFromLocation } from '../../types';

export const iussRooms: StudyRoom[] = [
    // ============================================================
    // SEDE CENTRALE - PALAZZO DEL BROLETTO (Piazza della Vittoria)
    // ============================================================
    {
        id: 'iuss_broletto_aule',
        nome: 'Aule Didattiche Palazzo del Broletto',
        edificio: 'Palazzo del Broletto (Ingresso Piazza Vittoria)',
        piano: 1, // Accesso dallo scalone o ascensore
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['WiFi Eduroam', 'Edificio Medievale', 'Silenzio Assoluto', 'Aule 1-17'],
        latitude: 45.1860,
        longitude: 9.1550,
        indirizzo: 'Piazza della Vittoria 15, Pavia',
        university: 'IUSS',
        occupancy_rate: 'Medio',
        notes: 'Sede principale e prestigiosa. Le aule, quando non usate per le lezioni magistrali, sono accessibili agli allievi per lo studio.',
        tags: ['Aula Studio', 'WiFi', '🔇 Silenzio'],
    },
    {
        id: 'iuss_sala_camino',
        nome: 'Sala del Camino',
        edificio: 'Palazzo del Broletto',
        piano: 2,
        postiDisponibili: 40,
        postiTotali: 50,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Conferenze', 'Ambiente di pregio'],
        latitude: 45.1860,
        longitude: 9.1550,
        indirizzo: 'Piazza della Vittoria 15, Pavia',
        university: 'IUSS',
        notes: 'Sala storica utilizzata per seminari e studio avanzato. Accesso spesso regolato o su richiesta.',
        tags: ['Aula Studio', 'WiFi'],
    },

    // ============================================================
    // SEDI AMMINISTRATIVE & RICERCA (Lungoticino)
    // ============================================================
    {
        id: 'iuss_lungoticino',
        nome: 'Sede Amministrativa e Ricerca',
        edificio: 'Palazzo IUSS Lungoticino',
        piano: 0,
        postiDisponibili: 20,
        postiTotali: 30,
        orarioApertura: '09:00',
        orarioChiusura: '17:30',
        servizi: ['Uffici', 'Laboratori', 'WiFi'],
        latitude: 45.1810,
        longitude: 9.1580,
        indirizzo: 'Lungoticino Sforza 56, Pavia',
        university: 'IUSS',
        notes: 'Sede principalmente dedicata agli uffici e ai dottorati di ricerca.',
        tags: ['Aula Studio', 'WiFi'],
    },

    // ============================================================
    // COLLEGAMENTI AI COLLEGI (Partner IUSS)
    // ============================================================
    {
        id: 'iuss_collegio_borromeo',
        nome: 'Biblioteca Collegio Borromeo (Partner IUSS)',
        edificio: 'Almo Collegio Borromeo',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 150,
        orarioApertura: '09:00',
        orarioChiusura: '22:00',
        servizi: ['WiFi', 'Biblioteca Storica', 'Giardino', 'Mensa'],
        latitude: 45.1830,
        longitude: 9.1590,
        indirizzo: 'Piazza del Collegio Borromeo 9, Pavia',
        university: 'IUSS',
        notes: 'Molti allievi IUSS risiedono qui. Biblioteca prestigiosa accessibile agli ospiti autorizzati.',
        tags: ['Biblioteca', 'WiFi', '☕ Ristoro'],
    },
    {
        id: 'iuss_collegio_ghislieri',
        nome: 'Biblioteca Collegio Ghislieri (Partner IUSS)',
        edificio: 'Collegio Ghislieri',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 150,
        orarioApertura: '09:00',
        orarioChiusura: '22:00',
        servizi: ['WiFi', 'Salone San Pio', 'Storico'],
        latitude: 45.1855,
        longitude: 9.1525,
        indirizzo: 'Piazza Ghislieri 5, Pavia',
        university: 'IUSS',
        notes: 'Altro pilastro storico dello IUSS. Accesso regolato.',
        tags: ['Biblioteca', 'WiFi'],
    },

    // ============================================================
    // NUOVA SEDE EX MARELLI (dal 2021 - Scienze, Tecnologie e Società)
    // ============================================================
    {
        id: 'iuss_marelli_lab',
        nome: 'Aule e Laboratori Ex Marelli',
        edificio: 'Sede Ex Marelli (Area Stazione)',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 80,
        orarioApertura: '09:00',
        orarioChiusura: '18:30',
        servizi: ['WiFi', 'Moderno', 'Vicino Stazione', 'Laboratori di Ricerca'],
        latitude: 45.1830,
        longitude: 9.1610,
        indirizzo: 'Via Ferrata (Area Ex Marelli), Pavia',
        university: 'IUSS',
        notes: 'Nuova sede inaugurata nel 2021. Ospita la Classe di Scienze, Tecnologie e Società. Spazi moderni.',
        tags: ['Laboratorio', 'WiFi'],
    },
    {
        id: 'iuss_aula_magna',
        nome: 'Aula Magna (Palazzo del Broletto)',
        edificio: 'Palazzo del Broletto',
        piano: 1,
        postiDisponibili: 25,
        postiTotali: 30,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Storica', 'Silenziosa'],
        latitude: 45.1860,
        longitude: 9.1550,
        indirizzo: 'Piazza della Vittoria 15, Pavia',
        university: 'IUSS',
        notes: 'Quando non ci sono eventi, può essere usata come spazio studio di prestigio.',
        tags: ['Aula Studio', 'WiFi', '🔇 Silenzio'],
    },
    {
        id: 'iuss_biblioteca_unipv',
        nome: 'Accesso Biblioteca Universitaria (Convenzionato)',
        edificio: 'Biblioteca Universitaria di Pavia',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 90,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Biblioteca Storica', 'Fondi Antichi'],
        latitude: 45.1855,
        longitude: 9.1535,
        indirizzo: 'Strada Nuova 65, Pavia',
        university: 'IUSS',
        notes: 'Gli allievi IUSS hanno accesso alla storica Biblioteca Universitaria di Pavia (una delle più antiche d\'Italia!).',
        tags: ['Biblioteca', 'WiFi'],
    }
];

export const getDirectionsIUSS = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const isBroletto = room.indirizzo.includes('Vittoria') || room.indirizzo.includes('Broletto');
    const isLungoticino = room.indirizzo.includes('Sforza');
    const isCollegio = room.indirizzo.includes('Collegio') || room.indirizzo.includes('Ghislieri');

    // HUB PRINCIPALE: STAZIONE PAVIA
    directions.push({
        luogo: 'Stazione FS Pavia',
        descrizione: `Lo IUSS è nel cuore esatto della città (Piazza della Vittoria). Dalla stazione:
1. Esci e prosegui dritto su **Viale Vittorio Emanuele II**.
2. Arriva alla rotonda della Minerva e imbocca **Corso Cavour**.
3. Percorrilo tutto fino a **Piazza della Vittoria** (la piazza principale).
4. L'ingresso dello IUSS è nel **Palazzo del Broletto** (l'edificio storico che chiude la piazza a sud).`,
        mezziPubblici: ['A piedi (10 min)', 'Bus 3 (Fermata Cavour/Vittoria)'],
        tempoStimato: '10-15 min',
        note: 'Pavia è piccola, dalla stazione allo IUSS è una piacevole passeggiata rettilinea.'
    });

    // SPECIFICO PER LUNGOTICINO
    if (isLungoticino) {
        directions.push({
            luogo: 'Centro Storico',
            descrizione: `Dalla sede centrale (Piazza Vittoria) alla sede Lungoticino:
1. Scendi verso il fiume Ticino (Via XX Settembre).
2. Arriva al Ponte Coperto, gira a sinistra su Lungoticino Sforza.
3. La sede è al numero 56, vicino al Ponte.`,
            mezziPubblici: ['A piedi'],
            tempoStimato: '5 min',
            note: 'Si trova proprio sulla riva del fiume.'
        });
    }

    // SPECIFICO PER I COLLEGI
    if (isCollegio) {
        directions.push({
            luogo: 'Piazza della Vittoria (Sede IUSS)',
            descrizione: `I Collegi sono a pochi passi dalla sede centrale:
• **Borromeo**: Scendi verso il fiume e vai verso est (zona Piazza Borromeo). 5 min a piedi.
• **Ghislieri**: Vai verso ovest (zona Strada Nuova/San Francesco). 3 min a piedi.
Lo IUSS e i suoi Collegi formano un "campus diffuso" nel centro storico.`,
            mezziPubblici: ['A piedi'],
            tempoStimato: '5 min',
            note: 'Tutto è raggiungibile a piedi nel raggio di 500 metri.'
        });
    }

    return directions;
};
