import { StudyRoom, DirectionsFromLocation } from '../../types';

export const unimcRooms: StudyRoom[] = [
    // ============================================================
    // MACERATA - CENTRO STORICO (CASB / Pantaleoni)
    // ============================================================
    {
        id: 'unimc_casb',
        nome: "Biblioteca Didattica d'Ateneo (CASB)",
        edificio: 'Ex Palazzo Poste',
        piano: 0,
        postiDisponibili: 250,
        postiTotali: 300,
        orarioApertura: '08:30',
        orarioChiusura: '19:45',
        servizi: ['WiFi Eduroam', 'Box Vetrate', 'Macchinette'],
        latitude: 43.3002,
        longitude: 13.4532,
        indirizzo: 'Piazza Oberdan 4, Macerata',
        university: 'UniMC',
        occupancy_rate: 'Altissimo',
        notes: 'Fulcro ateneo. Piani alti silenzio, piano terra social.'
    },
    {
        id: 'unimc_pantaleoni',
        nome: 'Polo Pantaleoni - Spazi Studio',
        edificio: 'Polo Pantaleoni',
        piano: 0,
        postiDisponibili: 200,
        postiTotali: 250,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Moderno', 'Prese', 'Bar/Mensa'],
        latitude: 43.3020,
        longitude: 13.4505,
        indirizzo: 'Via della Pescheria Vecchia, Macerata',
        university: 'UniMC',
        notes: 'Astronave blu. Corridoi/tavoli gruppo.'
    },
    {
        id: 'unimc_giuridica',
        nome: 'Biblioteca Giuridica/Formazione',
        edificio: 'Piaggia Università',
        piano: 1,
        postiDisponibili: 100,
        postiTotali: 120,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Silenzio', 'Storica'],
        latitude: 43.3010,
        longitude: 13.4520,
        indirizzo: "Piaggia dell'Università, Macerata",
        university: 'UniMC',
        notes: 'Ambiente austero centro.'
    },
    {
        id: 'unimc_mozzi_borgetti',
        nome: 'Biblioteca Mozzi Borgetti',
        edificio: 'Palazzo Mozzi Borgetti',
        piano: 1,
        postiDisponibili: 150,
        postiTotali: 180,
        orarioApertura: '09:00',
        orarioChiusura: '18:30',
        servizi: ['Sale Affrescate', 'Terrazza'],
        latitude: 43.2990,
        longitude: 13.4510,
        indirizzo: 'Piazza Vittorio Veneto 2, Macerata',
        university: 'UniMC',
        notes: 'Civica top storica. Galleria Specchi.'
    },
    // ============================================================
    // CIVITANOVA MARCHE
    // ============================================================
    {
        id: 'civitanova_zavatti',
        nome: 'Biblioteca Zavatti',
        edificio: 'Palazzo Sforza',
        piano: 1,
        postiDisponibili: 120,
        postiTotali: 150,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Stazione Vicina'],
        latitude: 43.3080,
        longitude: 13.7250,
        indirizzo: 'Viale Vittorio Veneto 124, Civitanova Marche',
        university: 'UniMC',
        notes: 'Hub pendolari costa.'
    },
    // ============================================================
    // JESI
    // ============================================================
    {
        id: 'jesi_colocci',
        nome: 'Fondazione Colocci',
        edificio: 'Palazzo Colocci',
        piano: 1,
        postiDisponibili: 50,
        postiTotali: 60,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Centro'],
        latitude: 43.5220,
        longitude: 13.2430,
        indirizzo: 'Via Angeloni 3, Jesi',
        university: 'UniMC',
        notes: 'Sede distaccata.'
    },
    {
        id: 'jesi_planettiana',
        nome: 'Biblioteca Planettiana',
        edificio: 'Palazzo Signoria',
        piano: 1,
        postiDisponibili: 100,
        postiTotali: 120,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['Mappamondo'],
        latitude: 43.5230,
        longitude: 13.2440,
        indirizzo: 'Piazza Colocci, Jesi',
        university: 'UniMC',
        notes: 'Sala Mappamondo iconica.'
    },
    // ============================================================
    // FERMO
    // ============================================================
    {
        id: 'fermo_spezioli',
        nome: 'Biblioteca Spezioli',
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
        university: 'UniMC',
        notes: 'Centro Fermo.'
    },
];

export const getDirectionsUniMC = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const isMacerataCentro = room.indirizzo.includes('Macerata') || room.indirizzo.includes('Oberdan') || room.indirizzo.includes('Pescheria') || room.indirizzo.includes('Vittorio Veneto');
    const isCivitanova = room.indirizzo.includes('Civitanova');
    const isJesi = room.indirizzo.includes('Jesi');
    const isFermo = room.indirizzo.includes('Fermo');

    // MACERATA CENTRO
    if (isMacerataCentro) {
        directions.push({
            luogo: 'Stazione Macerata',
            descrizione: `Per centro Macerata (CASB/Pantaleoni/Mozzi Borgetti):
1. **Bus APM dalla Stazione**: Linea circolare o diretta Piazza Libertà (ogni 15 min)
2. **Ascensori Viale Trieste** (dietro Sferisterio) per salita rapida
3. **A piedi**: 20-25 min salita Piagge
**NOTE**: Macerata collinare, bus/ascensori essenziali.`,
            mezziPubblici: ['Bus APM', 'Ascensori'],
            tempoStimato: '10-25 min',
            note: 'ZTL centro.'
        });
    }
    // CIVITANOVA
    else if (isCivitanova) {
        directions.push({
            luogo: 'Stazione Civitanova',
            descrizione: `Per Zavatti (Viale Veneto):
1. **A piedi stazione**: 10 min nord
**NOTE**: Piatta costa.`,
            mezziPubblici: ['A piedi'],
            tempoStimato: '10 min',
            note: 'Hub treno Macerata.'
        });
    }
    // JESI
    else if (isJesi) {
        directions.push({
            luogo: 'Stazione Jesi',
            descrizione: `Per Colocci/Planettiana:
1. **Impianto risalita** (scale mobili/ascensore) → centro
2. **A piedi**: 10 min
**NOTE**: Salita evitabile.`,
            mezziPubblici: ['Risalita'],
            tempoStimato: '10 min',
            note: 'Centro storico.'
        });
    }
    // FERMO
    else if (isFermo) {
        directions.push({
            luogo: 'Stazione Fermo',
            descrizione: `Per Spezioli (Piazza Popolo):
1. **A piedi centro**: 10 min
**NOTE**: Piazza principale.`,
            mezziPubblici: ['A piedi'],
            tempoStimato: '10 min',
            note: 'Centro Fermo.'
        });
    }

    // Info generali
    directions.push({
        luogo: 'Info Generali UniMC',
        descrizione: `**Poli**: Macerata principale, distaccati costa/entroterra.
**Bus**: APM Macerata.
Macerata "città teatro" collinare.`,
        mezziPubblici: ['APM Bus'],
        tempoStimato: 'Max 30 min',
        note: 'Ateneo umanistico.'
    });

    return directions;
};
