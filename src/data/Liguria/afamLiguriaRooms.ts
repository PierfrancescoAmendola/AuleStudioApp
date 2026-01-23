import { StudyRoom, DirectionsFromLocation } from '../../types';

export const afamLiguriaRooms: StudyRoom[] = [
    // ============================================================
    // GENOVA - ACCADEMIA LIGUSTICA DI BELLE ARTI
    // ============================================================
    {
        id: 'aba_ligustica_biblio',
        nome: 'Biblioteca Accademia Ligustica',
        edificio: 'Palazzo Accademia',
        piano: 1,
        postiDisponibili: 50,
        postiTotali: 60,
        orarioApertura: '10:00',
        orarioChiusura: '17:00',
        servizi: ['Arte Storica', 'Silenzio'],
        latitude: 44.4072,
        longitude: 8.9342,
        indirizzo: 'Largo Pertini 4, Genova',
        university: 'AFAM',
        occupancy_rate: 'Basso',
        notes: 'Biblioteca in palazzo storico De Ferrari.'
    },
    {
        id: 'aba_ligustica_lab',
        nome: 'Laboratori Pittura/Scultura',
        edificio: 'Palazzo Accademia',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 120,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Atelier', 'Materiali'],
        latitude: 44.4072,
        longitude: 8.9342,
        indirizzo: 'Largo Pertini 4, Genova',
        university: 'AFAM',
        notes: 'Spazi creativi principali.'
    },
    // ============================================================
    // GENOVA - CONSERVATORIO NICCOLÒ PAGANINI
    // ============================================================
    {
        id: 'cons_paganini_biblio',
        nome: 'Biblioteca Conservatorio Paganini',
        edificio: 'Villa Bombrini',
        piano: 1,
        postiDisponibili: 40,
        postiTotali: 50,
        orarioApertura: '09:00',
        orarioChiusura: '17:30',
        servizi: ['Musicale', 'Parco'],
        latitude: 44.4025,
        longitude: 8.9555,
        indirizzo: 'Via Francesco Pozzo 28, Genova Albaro',
        university: 'AFAM',
        notes: 'Villa storica Albaro.'
    },
    {
        id: 'cons_paganini_aule',
        nome: 'Aule Pratica Strumentale',
        edificio: 'Villa Bombrini',
        piano: 0,
        postiDisponibili: 25,
        postiTotali: 30,
        orarioApertura: '08:00',
        orarioChiusura: '19:00',
        servizi: ['Prenotazione', 'Strumenti'],
        latitude: 44.4025,
        longitude: 8.9555,
        indirizzo: 'Via Francesco Pozzo 28, Genova',
        university: 'AFAM',
        notes: 'Aule insonorizzate.'
    },
    // ============================================================
    // LA SPEZIA - CONSERVATORIO GIACOMO PUCCINI
    // ============================================================
    {
        id: 'cons_sp_puccini',
        nome: 'Biblioteca e Aule Conservatorio Puccini',
        edificio: 'Villa Marmori',
        piano: 1,
        postiDisponibili: 50,
        postiTotali: 60,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Liberty', 'Auditorium'],
        latitude: 44.1112,
        longitude: 9.8155,
        indirizzo: 'Via XX Settembre 34, La Spezia',
        university: 'AFAM',
        notes: 'Villa Liberty iconica.'
    },
    // ============================================================
    // SANREMO - ACCADEMIA DI BELLE ARTI
    // ============================================================
    {
        id: 'aba_sanremo_lab',
        nome: 'Laboratori Accademia Sanremo',
        edificio: 'Sede Principale',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Scenografia', 'Fashion'],
        latitude: 43.8170,
        longitude: 7.7740,
        indirizzo: 'Via Val del Ponte 34, Sanremo',
        university: 'AFAM',
        notes: 'Focus eventi/Festival.'
    },
    {
        id: 'sanremo_civica',
        nome: 'Biblioteca Civica Sanremo',
        edificio: 'Palazzo Nota',
        piano: 1,
        postiDisponibili: 100,
        postiTotali: 120,
        orarioApertura: '09:00',
        orarioChiusura: '18:45',
        servizi: ['Centro'],
        latitude: 43.8180,
        longitude: 7.7760,
        indirizzo: 'Piazza Nota 6, Sanremo',
        university: 'AFAM',
        notes: 'Alternativa teorica.'
    },
];

export const getDirectionsAFAM_Liguria = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const isLigustica = room.indirizzo.includes('Pertini') || room.indirizzo.includes('De Ferrari');
    const isPaganini = room.indirizzo.includes('Pozzo') || room.indirizzo.includes('Albaro');
    const isPucciniSpezia = room.indirizzo.includes('Settembre') || room.indirizzo.includes('Spezia');
    const isSanremo = room.indirizzo.includes('Ponte') || room.indirizzo.includes('Sanremo');

    // LIGUSTICA GENOVA
    if (isLigustica) {
        directions.push({
            luogo: 'Piazza De Ferrari / Metro',
            descrizione: `Per Accademia Ligustica (Largo Pertini 4):
1. **Metro AMT**: Fermata De Ferrari (centrale)
2. **A piedi centro**: 2 min (palazzo accanto Teatro Carlo Felice)
3. **Da Principe/Brignole**: Metro De Ferrari
**NOTE**: Centro assoluto.`,
            mezziPubblici: ['Metro AMT'],
            tempoStimato: '2-10 min',
            note: 'ZTL pedonale.'
        });
    }
    // PAGANINI GENOVA ALBARO
    else if (isPaganini) {
        directions.push({
            luogo: 'Stazione Brignole',
            descrizione: `Per Conservatorio Paganini (Via Pozzo 28, Albaro):
1. **Bus AMT da Brignole**: Linea 42/43 → fermata "Albaro" o "Piazza Leopardi"
2. **In bici**: 15 min salita
3. **In auto**: Parcheggio difficile Albaro
**NOTE**: Villa aristocratica.`,
            mezziPubblici: ['Bus AMT 42, 43'],
            tempoStimato: '15 min',
            note: 'Quartiere chic.'
        });
    }
    // PUCCINI LA SPEZIA
    else if (isPucciniSpezia) {
        directions.push({
            luogo: 'Stazione La Spezia Centrale',
            descrizione: `Per Conservatorio Puccini (Via XX Settembre 34):
1. **A piedi dalla Stazione**: 10 min (Via Prione → XX Settembre)
2. **Bus ATC**: Linee centro
**NOTE**: Villa Liberty centro.`,
            mezziPubblici: ['A piedi'],
            tempoStimato: '10 min',
            note: 'Centro pedonale.'
        });
    }
    // SANREMO
    else if (isSanremo) {
        directions.push({
            luogo: 'Stazione Sanremo',
            descrizione: `Per Accademia Sanremo (Via Val del Ponte):
1. **A piedi dalla Stazione** (uscita tapis roulant): 15-20 min verso Casinò/Chiesa Russa
2. **Bus urbano**: Direzione centro
**NOTE**: Stazione sotterranea.`,
            mezziPubblici: ['A piedi', 'Bus'],
            tempoStimato: '15-20 min',
            note: 'Riviera fiori.'
        });
    }

    // Info generali
    directions.push({
        luogo: 'Info Generali AFAM Liguria',
        descrizione: `**AFAM Liguria**: Ligustica/Paganini Genova, Puccini Spezia, Accademia Sanremo.
**Trasporti**: AMT Genova, ATC Spezia, Riviera Trasporti Sanremo.
Liguria "verticale", bus essenziali.`,
        mezziPubblici: ['Bus/Metro', 'A piedi'],
        tempoStimato: 'Variabile',
        note: 'Istituzioni artistiche prestigiose.'
    });

    return directions;
};
