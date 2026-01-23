import { StudyRoom, DirectionsFromLocation } from '../../types';

export const unicamRooms: StudyRoom[] = [
    // ============================================================
    // CAMERINO - CAMPUS MADONNA DELLE CARCERI (Post-Sisma)
    // ============================================================
    {
        id: 'unicam_polo_studenti',
        nome: 'Polo degli Studenti (Next Generation)',
        edificio: 'Edificio Polifunzionale',
        piano: 0,
        postiDisponibili: 200,
        postiTotali: 250,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi Eduroam', 'Aule Studio', 'Bar/Mensa'],
        latitude: 43.1432,
        longitude: 13.0602,
        indirizzo: 'Via Madonna delle Carceri, Camerino',
        university: 'UniCam',
        occupancy_rate: 'Alto',
        notes: 'Simbolo rinascita post-sisma. Moderno antisismico.'
    },
    {
        id: 'unicam_biblio_giuridica',
        nome: 'Biblioteca Giuridica/Scientifica',
        edificio: 'Campus Madonna Carceri',
        piano: 1,
        postiDisponibili: 120,
        postiTotali: 150,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Testi', 'Silenzio'],
        latitude: 43.1435,
        longitude: 13.0605,
        indirizzo: 'Via Madonna delle Carceri, Camerino',
        university: 'UniCam',
        notes: 'Biblioteca principale polo.'
    },
    {
        id: 'unicam_chip',
        nome: 'CHIP Research Building',
        edificio: 'Edificio CHIP',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Ricerca', 'Lab'],
        latitude: 43.1440,
        longitude: 13.0610,
        indirizzo: 'Via Madonna delle Carceri, Camerino',
        university: 'UniCam',
        notes: 'Avanguardia chimica/farmacia.'
    },
    {
        id: 'unicam_mensa',
        nome: 'Mensa e Area Relax',
        edificio: 'Mensa Campus',
        piano: 0,
        postiDisponibili: 150,
        postiTotali: 200,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Tavoli Esterni'],
        latitude: 43.1430,
        longitude: 13.0600,
        indirizzo: 'Via Madonna delle Carceri, Camerino',
        university: 'UniCam',
        notes: 'Prato per studio.'
    },
    // ============================================================
    // ASCOLI PICENO - ANNUNZIATA (Architettura/Design)
    // ============================================================
    {
        id: 'unicam_ascoli_annunziata',
        nome: 'Sede Annunziata SAD',
        edificio: 'Ex Convento Annunziata',
        piano: 1,
        postiDisponibili: 250,
        postiTotali: 300,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Tavoli Disegno', 'Chiostro'],
        latitude: 42.8555,
        longitude: 13.5755,
        indirizzo: 'Viale Rimembranza, Ascoli Piceno',
        university: 'UniCam',
        occupancy_rate: 'Altissimo',
        notes: 'Sede top Architettura.'
    },
    // ============================================================
    // MATELICA - VETERINARIA
    // ============================================================
    {
        id: 'unicam_matelica_vet',
        nome: 'Polo Veterinaria Matelica',
        edificio: 'Sede Didattica',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 120,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Cliniche', 'Verde'],
        latitude: 43.2555,
        longitude: 13.0105,
        indirizzo: 'Via Circonvallazione 93/95, Matelica',
        university: 'UniCam',
        notes: 'Polo specifico veterinaria.'
    },
    // ============================================================
    // SAN BENEDETTO DEL TRONTO - NUTRIZIONE
    // ============================================================
    {
        id: 'unicam_samb_bio',
        nome: 'Polo Biologia Nutrizione',
        edificio: 'Sede San Benedetto',
        piano: 1,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Mare Vicino'],
        latitude: 42.9490,
        longitude: 13.8820,
        indirizzo: 'Via del Mare, San Benedetto del Tronto',
        university: 'UniCam',
        notes: 'Polo nutrizionale.'
    },
];

export const getDirectionsUniCam = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const isCamerino = room.indirizzo.includes('Camerino') || room.indirizzo.includes('Carceri');
    const isAscoli = room.indirizzo.includes('Ascoli');
    const isMatelica = room.indirizzo.includes('Matelica');
    const isSanBenedetto = room.indirizzo.includes('Benedetto');

    // CAMERINO
    if (isCamerino) {
        directions.push({
            luogo: 'Stazione Castelraimondo-Camerino',
            descrizione: `Per Campus Madonna Carceri:
1. **Treno** → Stazione Castelraimondo-Camerino
2. **Bus Contram rosso/bianco** coincidenza immediata → Camerino (15 min curve)
3. **Fermata** Terminal/Campus
4. **In auto**: SS77 uscita Camerino/Sfercia → salita 10 km (parcheggio gratuito)
**NOTE**: No treno centro. Bus essenziale.`,
            mezziPubblici: ['Treno + Bus Contram'],
            tempoStimato: '15-20 min bus',
            note: 'Nevica inverno!'
        });
    }
    // ASCOLI
    else if (isAscoli) {
        directions.push({
            luogo: 'Stazione Ascoli Piceno',
            descrizione: `Per Annunziata:
1. **Bus START urbana** o a piedi 20 min salita
**NOTE**: Vista spettacolare.`,
            mezziPubblici: ['Bus START'],
            tempoStimato: '20 min',
            note: 'Colle dominante.'
        });
    }
    // MATELICA
    else if (isMatelica) {
        directions.push({
            luogo: 'Stazione Matelica',
            descrizione: `Per Veterinaria:
1. **A piedi** 10-15 min Circonvallazione
**NOTE**: Piatta compatta.`,
            mezziPubblici: ['A piedi'],
            tempoStimato: '15 min',
            note: 'Verdicchio famoso.'
        });
    }
    // SAN BENEDETTO
    else if (isSanBenedetto) {
        directions.push({
            luogo: 'Stazione San Benedetto',
            descrizione: `Per polo:
1. **A piedi** 10 min lungomare
**NOTE**: Balneare rilassato.`,
            mezziPubblici: ['A piedi'],
            tempoStimato: '10 min',
            note: 'Mare vicino.'
        });
    }

    // Info generali
    directions.push({
        luogo: 'Info Generali UniCam',
        descrizione: `**Poli**: Camerino principale (post-sisma ricostruito), distaccati Ascoli/Matelica/San Benedetto.
**Bus**: Contram Camerino essenziale.
Ateneo piccolo eccellente scienze/architettura.`,
        mezziPubblici: ['Contram/START'],
        tempoStimato: 'Max 30 min',
        note: 'Rinascita post-sisma.'
    });

    return directions;
};
