import { StudyRoom, DirectionsFromLocation } from '../../types';

export const univpmRooms: StudyRoom[] = [
    // ============================================================
    // ANCONA - POLO MONTE DAGO (Ingegneria/Scienze/Agraria)
    // ============================================================
    {
        id: 'univpm_montedago_biblio',
        nome: 'Biblioteca Tecnico-Scientifica',
        edificio: 'Quota 155',
        piano: 1,
        postiDisponibili: 450,
        postiTotali: 500,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['WiFi Eduroam', 'Box Vetrate', 'Mensa'],
        latitude: 43.5865,
        longitude: 13.5165,
        indirizzo: 'Via Brecce Bianche 12, Ancona',
        university: 'UNIVPM',
        occupancy_rate: 'Altissimo',
        notes: 'Biblioteca principale polo. Moderna, capiente.'
    },
    {
        id: 'univpm_montedago_aule',
        nome: 'Aule Studio e Spazi Comuni',
        edificio: 'Blocco Aule/Fungo',
        piano: 0,
        postiDisponibili: 250,
        postiTotali: 300,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Group Work', 'Distributori'],
        latitude: 43.5865,
        longitude: 13.5165,
        indirizzo: 'Via Brecce Bianche, Ancona',
        university: 'UNIVPM',
        notes: 'Spazi vivaci per gruppo.'
    },
    {
        id: 'univpm_montedago_mensa',
        nome: 'Mensa e Area Relax',
        edificio: 'Mensa Universitaria',
        piano: 0,
        postiDisponibili: 150,
        postiTotali: 200,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Tavoli Esterni'],
        latitude: 43.5860,
        longitude: 13.5160,
        indirizzo: 'Via Brecce Bianche, Ancona',
        university: 'UNIVPM',
        notes: 'Prato per studio.'
    },
    // ============================================================
    // ANCONA - POLO VILLAREY (Economia)
    // ============================================================
    {
        id: 'univpm_villarey_biblio',
        nome: 'Biblioteca Economia "G. Fuà"',
        edificio: 'Ex Caserma Villarey',
        piano: 0,
        postiDisponibili: 200,
        postiTotali: 220,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Chiostro', 'Giardino'],
        latitude: 43.6215,
        longitude: 13.5130,
        indirizzo: 'Piazzale Martelli 8, Ancona',
        university: 'UNIVPM',
        notes: 'Ex caserma storica con chiostro.'
    },
    // ============================================================
    // ANCONA - POLO TORRETTE (Medicina)
    // ============================================================
    {
        id: 'univpm_torrette_biblio',
        nome: 'Biblioteca Medica Torrette',
        edificio: 'Polo Didattico Ospedale',
        piano: 0,
        postiDisponibili: 150,
        postiTotali: 180,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['Testi Medici'],
        latitude: 43.6040,
        longitude: 13.4670,
        indirizzo: 'Via Conca 71, Ancona',
        university: 'UNIVPM',
        notes: 'Dentro ospedale.'
    },
    // ============================================================
    // ANCONA - BIBLIOTECA CIVICA BENINCASA
    // ============================================================
    {
        id: 'an_benincasa',
        nome: 'Biblioteca Civica "Benincasa"',
        edificio: 'Palazzo Anziani',
        piano: 1,
        postiDisponibili: 120,
        postiTotali: 150,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['Vista Porto'],
        latitude: 43.6185,
        longitude: 13.5110,
        indirizzo: 'Piazza Plebiscito 33, Ancona',
        university: 'UNIVPM',
        notes: 'Civica iconica centro.'
    },
    // ============================================================
    // ASCOLI PICENO (Architettura)
    // ============================================================
    {
        id: 'univpm_ascoli',
        nome: 'Sede Annunziata - Spazi Studio',
        edificio: 'Ex Convento Annunziata',
        piano: 1,
        postiDisponibili: 180,
        postiTotali: 200,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['Lab Modelli', 'Chiostro'],
        latitude: 42.8555,
        longitude: 13.5755,
        indirizzo: 'Viale Rimembranza, Ascoli Piceno',
        university: 'UNIVPM',
        notes: 'Sede bellissima Architettura.'
    },
    // ============================================================
    // FERMO (Ingegneria Gestionale)
    // ============================================================
    {
        id: 'univpm_fermo',
        nome: 'Palazzo Montani - Spazi Studio',
        edificio: 'Sede Fermo',
        piano: 1,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Centro Storico'],
        latitude: 43.1605,
        longitude: 13.7180,
        indirizzo: 'Via Montani 1, Fermo',
        university: 'UNIVPM',
        notes: 'Sede piccola curata.'
    },
    // ============================================================
    // SAN BENEDETTO DEL TRONTO (Economia)
    // ============================================================
    {
        id: 'univpm_samb',
        nome: 'Polo Didattico San Benedetto',
        edificio: 'Palazzina',
        piano: 1,
        postiDisponibili: 100,
        postiTotali: 120,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Mare Vicino'],
        latitude: 42.9485,
        longitude: 13.8805,
        indirizzo: 'Via del Mare 220, San Benedetto del Tronto',
        university: 'UNIVPM',
        notes: 'Rilassato balneare.'
    },
    // ============================================================
    // PESARO (Ingegneria)
    // ============================================================
    {
        id: 'univpm_pesaro',
        nome: 'Biblioteca San Giovanni Pesaro',
        edificio: 'Parco Miralfiore',
        piano: 0,
        postiDisponibili: 250,
        postiTotali: 300,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['Giardino', 'Caffetteria'],
        latitude: 43.9080,
        longitude: 12.9050,
        indirizzo: 'Via Passeri 102, Pesaro',
        university: 'UNIVPM',
        notes: 'Civica top per studenti Pesaro.'
    },
];

export const getDirectionsUNIVPM = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const isMonteDago = room.indirizzo.includes('Brecce') || room.indirizzo.includes('Ancona') && room.indirizzo.includes('Scienze');
    const isVillarey = room.indirizzo.includes('Martelli') || room.indirizzo.includes('Ancona') && room.indirizzo.includes('Economia');
    const isTorrette = room.indirizzo.includes('Conca') || room.indirizzo.includes('Ancona') && room.indirizzo.includes('Medicina');
    const isBenincasa = room.indirizzo.includes('Plebiscito');
    const isAscoli = room.indirizzo.includes('Ascoli');
    const isFermo = room.indirizzo.includes('Fermo');
    const isSanBenedetto = room.indirizzo.includes('Benedetto');
    const isPesaro = room.indirizzo.includes('Pesaro');

    // MONTE DAGO
    if (isMonteDago) {
        directions.push({
            luogo: 'Stazione Ancona Centrale',
            descrizione: `Per Polo Monte Dago (Via Brecce Bianche):
1. **Bus Conerobus dalla Stazione**: Linea 1/4 (Uno-Quarto) → capolinea "Università" (ogni 15 min)
2. **In bici**: 20 min nord
3. **In auto**: Parcheggio gratuito enorme
**NOTE**: Bus pieno mattino.`,
            mezziPubblici: ['Bus Conerobus 1/4'],
            tempoStimato: '15-20 min',
            note: 'Polo compatto.'
        });
    }
    // VILLAREY
    else if (isVillarey) {
        directions.push({
            luogo: 'Stazione Ancona / Centro',
            descrizione: `Per Villarey (Piazzale Martelli):
1. **Bus Conerobus**: Linea 1/4 o CD/CS → Piazza Cavour/Kennedy
2. **A piedi centro**: 15 min salita
**NOTE**: Chiostro storico.`,
            mezziPubblici: ['Bus Conerobus 1/4'],
            tempoStimato: '15 min',
            note: 'Vicino Passetto mare.'
        });
    }
    // TORRETTE
    else if (isTorrette) {
        directions.push({
            luogo: 'Stazione Ancona',
            descrizione: `Per Torrette (Via Conca):
1. **Bus Conerobus**: Linea 30/31 → ingresso ospedale
**NOTE**: Labirintico.`,
            mezziPubblici: ['Bus Conerobus 30'],
            tempoStimato: '15 min',
            note: 'Zona nord.'
        });
    }
    // BENINCASA CIVICA
    else if (isBenincasa) {
        directions.push({
            luogo: 'Centro Ancona',
            descrizione: `Per Benincasa (Piazza Plebiscito):
1. **A piedi centro**: 5 min Piazza Papa
**NOTE**: Vista porto.`,
            mezziPubblici: ['A piedi'],
            tempoStimato: '5 min',
            note: 'Centro assoluto.'
        });
    }
    // DISTACCATE
    else if (isAscoli) {
        directions.push({
            luogo: 'Stazione Ascoli',
            descrizione: `Per Annunziata Ascoli:
1. **Bus START urbana**: Salita colle
2. **A piedi**: 20 min
**NOTE**: Vista spettacolare.`,
            mezziPubblici: ['Bus START'],
            tempoStimato: '20 min',
            note: 'Ex convento.'
        });
    }
    else if (isFermo) {
        directions.push({
            luogo: 'Stazione Fermo',
            descrizione: `Per Montani Fermo:
1. **A piedi centro**: 10 min
**NOTE**: Centro storico.`,
            mezziPubblici: ['A piedi'],
            tempoStimato: '10 min',
            note: 'Piccola curata.'
        });
    }
    else if (isSanBenedetto) {
        directions.push({
            luogo: 'Stazione San Benedetto',
            descrizione: `Per Polo San Benedetto:
1. **Bus locale**: Direzione mare
**NOTE**: Rilassato balneare.`,
            mezziPubblici: ['Bus locale'],
            tempoStimato: '10 min',
            note: 'Mare vicino.'
        });
    }
    else if (isPesaro) {
        directions.push({
            luogo: 'Stazione Pesaro',
            descrizione: `Per San Giovanni Pesaro:
1. **Bus**: Direzione Miralfiore
**NOTE**: Parco verde.`,
            mezziPubblici: ['Bus'],
            tempoStimato: '15 min',
            note: 'Civica top.'
        });
    }

    // Info generali
    directions.push({
        luogo: 'Info Generali UNIVPM',
        descrizione: `**Poli diffusi**: Ancona principale, distaccati Marche.
**Bus**: App Conerobus orari.
Parcheggio facile Monte Dago.`,
        mezziPubblici: ['Conerobus/START'],
        tempoStimato: 'Max 30 min',
        note: 'Ateneo tecnico forte.'
    });

    return directions;
};
