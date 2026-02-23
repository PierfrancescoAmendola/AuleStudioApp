import { StudyRoom, DirectionsFromLocation } from '../../types';

export const afamMarcheRooms: StudyRoom[] = [
    // ============================================================
    // URBINO - ISIA (Design Grafico/Editoriale)
    // ============================================================
    {
        id: 'isia_urbino_monastero',
        nome: 'Ex Monastero Santa Chiara (Sede ISIA)',
        edificio: 'Ex Monastero Santa Chiara',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 120,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Mac Lab', 'Stampa', 'Progetti'],
        latitude: 43.7235,
        longitude: 12.6390,
        indirizzo: 'Via Santa Chiara 36, Urbino',
        university: 'AFAM',
        occupancy_rate: 'Altissimo',
        notes: 'Comunità creativa. Ex monastero.',
        tags: ['Aula Studio', '❄️ Climatizzato'],
    },
    // ============================================================
    // URBINO - ACCADEMIA BELLE ARTI
    // ============================================================
    {
        id: 'aba_urbino_maceri',
        nome: 'Sede Accademia Belle Arti',
        edificio: 'Ex Convento Carmelitani',
        piano: 1,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Scultura', 'Chiostro'],
        latitude: 43.7280,
        longitude: 12.6350,
        indirizzo: 'Via dei Maceri 2, Urbino',
        university: 'AFAM',
        notes: 'Laboratori attivi.',
        tags: ['Aula Studio'],
    },
    // ============================================================
    // MACERATA - ACCADEMIA BELLE ARTI
    // ============================================================
    {
        id: 'aba_macerata',
        nome: 'Sede Accademia Macerata',
        edificio: 'Palazzo Galeotti',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['Arti Visive', 'Light Design'],
        latitude: 43.2995,
        longitude: 13.4515,
        indirizzo: 'Piazza Vittorio Veneto 5, Macerata',
        university: 'AFAM',
        notes: 'Centro storico.',
        tags: ['Aula Studio'],
    },
    {
        id: 'macerata_mozzi',
        nome: 'Biblioteca Mozzi Borgetti (Civica usata)',
        edificio: 'Palazzo Mozzi Borgetti',
        piano: 1,
        postiDisponibili: 150,
        postiTotali: 180,
        orarioApertura: '09:00',
        orarioChiusura: '18:30',
        servizi: ['Sale Affrescate'],
        latitude: 43.2990,
        longitude: 13.4510,
        indirizzo: 'Piazza Vittorio Veneto 2, Macerata',
        university: 'AFAM',
        notes: 'Civica iconica accanto.',
        tags: ['Biblioteca'],
    },
    // ============================================================
    // PESARO - CONSERVATORIO ROSSINI
    // ============================================================
    {
        id: 'cons_rossini',
        nome: 'Biblioteca e Aule Conservatorio Rossini',
        edificio: 'Palazzo Olivieri',
        piano: 1,
        postiDisponibili: 50,
        postiTotali: 60,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['Manoscritti Rossini'],
        latitude: 43.9100,
        longitude: 12.9120,
        indirizzo: 'Piazza Olivieri 5, Pesaro',
        university: 'AFAM',
        notes: 'Biblioteca musicale top.',
        tags: ['Biblioteca'],
    },
    {
        id: 'pesaro_sangiovanni',
        nome: 'Biblioteca San Giovanni (Civica usata)',
        edificio: 'Parco Miralfiore',
        piano: 0,
        postiDisponibili: 300,
        postiTotali: 350,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['Design'],
        latitude: 43.9080,
        longitude: 12.9050,
        indirizzo: 'Via Passeri 102, Pesaro',
        university: 'AFAM',
        notes: 'Hub studenti Pesaro.',
        tags: ['Biblioteca'],
    },
    // ============================================================
    // FERMO - CONSERVATORIO PERGOLESI
    // ============================================================
    {
        id: 'cons_fermo',
        nome: 'Sede Conservatorio Pergolesi',
        edificio: 'Sede Storica',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 60,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Auditorium'],
        latitude: 43.1620,
        longitude: 13.7190,
        indirizzo: 'Via dell\'Università 16, Fermo',
        university: 'AFAM',
        notes: 'Vista Girfalco.',
        tags: ['Aula Studio'],
    },
    {
        id: 'fermo_spezioli',
        nome: 'Biblioteca Spezioli (Civica usata)',
        edificio: 'Palazzo Priori',
        piano: 1,
        postiDisponibili: 120,
        postiTotali: 140,
        orarioApertura: '08:30',
        orarioChiusura: '18:45',
        servizi: ['Piazza Popolo'],
        latitude: 43.1610,
        longitude: 13.7170,
        indirizzo: 'Piazza del Popolo, Fermo',
        university: 'AFAM',
        notes: 'Civica centro.',
        tags: ['Biblioteca', 'Campus'],
    },
    // ============================================================
    // ANCONA - POLIARTE
    // ============================================================
    {
        id: 'poliarte_ancona',
        nome: 'Campus Poliarte',
        edificio: 'Sede Valle Miano',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Fashion', 'Cinema'],
        latitude: 43.6050,
        longitude: 13.5100,
        indirizzo: 'Via Valle Miano 41b, Ancona',
        university: 'AFAM',
        notes: 'Privata dinamica.',
        tags: ['Aula Studio', 'Campus'],
    },
];

export const getDirectionsAFAM_Marche = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const isUrbino = room.indirizzo.includes('Urbino');
    const isPesaro = room.indirizzo.includes('Pesaro');
    const isAncona = room.id.includes('poliarte');
    const isFermo = room.indirizzo.includes('Fermo');

    // URBINO
    if (isUrbino) {
        directions.push({
            luogo: 'Borgo Mercatale',
            descrizione: `Per ISIA/Accademia Urbino:
1. **Bus Adriabus** → Borgo Mercatale
2. **Salita**: Ascensori/rampa → centro (ISIA Santa Chiara bassa, Accademia Maceri alta)
**NOTE**: Urbino collinare.`,
            mezziPubblici: ['Bus Adriabus', 'Ascensori'],
            tempoStimato: '10 min salita',
            note: 'No treno.'
        });
    }
    // PESARO
    else if (isPesaro) {
        directions.push({
            luogo: 'Stazione Pesaro',
            descrizione: `Per Rossini/San Giovanni:
1. **A piedi** 15 min centro (Piazza Olivieri/Miralfiore)
**NOTE**: Bicipolitana.`,
            mezziPubblici: ['A piedi/Bici'],
            tempoStimato: '15 min',
            note: 'Città musica.'
        });
    }
    // ANCONA POLIARTE
    else if (isAncona) {
        directions.push({
            luogo: 'Stazione Ancona',
            descrizione: `Per Poliarte Valle Miano:
1. **Bus Conerobus** 1/4 → Valle Miano
**NOTE**: Semi-centrale.`,
            mezziPubblici: ['Bus Conerobus'],
            tempoStimato: '15 min',
            note: 'Parcheggio.'
        });
    }
    // FERMO
    else if (isFermo) {
        directions.push({
            luogo: 'Terminal Fermo',
            descrizione: `Per Pergolesi/Spezioli:
1. **Risalita** → centro/Piazza Popolo
**NOTE**: Salita meccanizzata.`,
            mezziPubblici: ['Risalita'],
            tempoStimato: '15 min',
            note: 'Girfalco vista.'
        });
    }

    // Info generali
    directions.push({
        luogo: 'Info Generali AFAM Marche',
        descrizione: `**AFAM Marche**: ISIA/Accademia Urbino, Accademia Macerata, Rossini Pesaro, Pergolesi Fermo, Poliarte Ancona.
**Trasporti**: Adriabus/Conerobus.
Marche artistiche rinascimentali.`,
        mezziPubblici: ['Bus Adriabus'],
        tempoStimato: 'Variabile',
        note: 'Istituzioni prestigiose.'
    });

    return directions;
};
