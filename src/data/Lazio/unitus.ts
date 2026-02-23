import { StudyRoom, DirectionsFromLocation } from '../../types';

export const unitusRooms: StudyRoom[] = [
    // ============================================================
    // VITERBO - SEDE CENTRALE & UMANISTICA (S. Maria in Gradi)
    // ============================================================
    {
        id: 'unitus_biblio_umanistica',
        nome: 'Polo Bibliotecario Umanistico-Sociale',
        edificio: 'Complesso S. Maria in Gradi',
        piano: 0,
        postiDisponibili: 180,
        postiTotali: 250,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Chiostro Medievale', 'Postazioni PC', 'Silenzio'],
        latitude: 42.4155,
        longitude: 12.1050,
        indirizzo: 'Via Santa Maria in Gradi 4, Viterbo',
        university: 'Unitus',
        occupancy_rate: 'Alto',
        notes: 'Situata in un ex convento medievale bellissimo. È la sede del Rettorato. Atmosfera molto suggestiva.',
        tags: ['Biblioteca', 'Campus', 'WiFi', '🔇 Silenzio'],
    },
    {
        id: 'unitus_sancarlo_aule',
        nome: 'Aule Studio San Carlo (DISTU)',
        edificio: 'Complesso San Carlo',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['WiFi', 'Vicina al Centro', 'Aule studio libere'],
        latitude: 42.4130,
        longitude: 12.1020,
        indirizzo: 'Via San Carlo 32, Viterbo',
        university: 'Unitus',
        notes: 'Sede del Dipartimento di Studi Umanistici. Le aule vuote vengono usate per lo studio (chiedere in portineria).',
        tags: ['Aula Studio', 'WiFi'],
    },
    {
        id: 'unitus_paradiso_eco',
        nome: 'Sala Studio Economia (Paradiso)',
        edificio: 'Sede Via del Paradiso',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 60,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Zona Relax', 'Distributori'],
        latitude: 42.4185,
        longitude: 12.1015,
        indirizzo: 'Via del Paradiso 47, Viterbo',
        university: 'Unitus',
        notes: 'Sede di Economia (DEIM). Ambiente più piccolo e raccolto rispetto a Riello.',
        tags: ['Aula Studio', 'WiFi'],
    },

    // ============================================================
    // VITERBO - CAMPUS RIELLO (Scientifico)
    // ============================================================
    {
        id: 'unitus_biblio_scientifica',
        nome: 'Polo Bibliotecario Tecnico-Scientifico',
        edificio: 'Campus Riello',
        piano: 0,
        postiDisponibili: 200,
        postiTotali: 300,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Prese ai tavoli', 'Aria Condizionata', 'Parcheggio'],
        latitude: 42.4280,
        longitude: 12.0970,
        indirizzo: 'Via San Camillo de Lellis, Viterbo',
        university: 'Unitus',
        occupancy_rate: 'Alto',
        notes: 'La biblioteca principale per Agraria, Scienze e Ingegneria. Appena fuori dalle mura.',
        tags: ['Biblioteca', 'Campus', 'WiFi', '❄️ Climatizzato', '🅿️ Parcheggio'],
    },
    {
        id: 'unitus_riello_bloccof',
        nome: 'Sala Studio "Blocco F"',
        edificio: 'Campus Riello - Blocco F',
        piano: 1,
        postiDisponibili: 100,
        postiTotali: 150,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['WiFi', 'Moderna', 'Adiacente alle aule'],
        latitude: 42.4285,
        longitude: 12.0975,
        indirizzo: 'Largo dell\'Università, Viterbo',
        university: 'Unitus',
        notes: 'Spazio moderno dedicato agli studenti di Ingegneria e DEIM.',
        tags: ['Aula Studio', 'Campus', 'WiFi', '❄️ Climatizzato'],
    },

    // ============================================================
    // POLO DI CIVITAVECCHIA (Biologia Marina, Economia)
    // ============================================================
    {
        id: 'unitus_civita_centrale',
        nome: 'Aula Studio Polo Universitario',
        edificio: 'Sede Piazza Verdi',
        piano: 2,
        postiDisponibili: 40,
        postiTotali: 60,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Vista Mare', 'Laboratori vicini'],
        latitude: 42.0915,
        longitude: 11.7950,
        indirizzo: 'Piazza Giuseppe Verdi 1, Civitavecchia (RM)',
        university: 'Unitus',
        notes: 'Sede distaccata sul mare. Ospita corsi di Biologia ed Economia circolare.',
        tags: ['Aula Studio', 'Campus', 'WiFi'],
    },

    // ============================================================
    // POLO DI RIETI (Agraria, Ingegneria - Sabina Universitas)
    // ============================================================
    {
        id: 'unitus_rieti_aluffi',
        nome: 'Sala Studio Palazzo Aluffi',
        edificio: 'Palazzo Aluffi',
        piano: 1,
        postiDisponibili: 30,
        postiTotali: 50,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Centro Storico', 'Silenziosa'],
        latitude: 42.4020,
        longitude: 12.8630,
        indirizzo: 'Via Cintia 106, Rieti',
        university: 'Unitus',
        notes: 'Nel cuore di Rieti. Sede storica della Sabina Universitas.',
        tags: ['Aula Studio', 'Centro', 'WiFi', '🔇 Silenzio'],
    },
    {
        id: 'unitus_rieti_ciancarelli',
        nome: 'Aule Studio Polo Scienze della Montagna',
        edificio: 'Istituto Ciancarelli',
        piano: 0,
        postiDisponibili: 45,
        postiTotali: 45,
        orarioApertura: '08:30',
        orarioChiusura: '17:30',
        servizi: ['WiFi', 'Laboratori', 'Parcheggio'],
        latitude: 42.4080,
        longitude: 12.8550,
        indirizzo: 'Via Angelo Maria Ricci 35/A, Rieti',
        university: 'Unitus',
        notes: 'Sede operativa dei corsi di Scienze della Montagna e Ingegneria.',
        tags: ['Aula Studio', 'Campus', 'WiFi', '🅿️ Parcheggio'],
    }
];

export const getDirectionsUnitus = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const isViterboCentro = room.indirizzo.includes('Gradi') || room.indirizzo.includes('San Carlo') || room.indirizzo.includes('Paradiso');
    const isRiello = room.indirizzo.includes('Camillo') || room.indirizzo.includes('Riello') || room.indirizzo.includes('Largo');
    const isCivitavecchia = room.indirizzo.includes('Civitavecchia');
    const isRieti = room.indirizzo.includes('Rieti');

    // VITERBO (Sede Principale)
    if (isViterboCentro) {
        directions.push({
            luogo: 'Stazione Viterbo Porta Romana',
            descrizione: `Per S. Maria in Gradi / Centro:
1. Scendi alla stazione Viterbo Porta Romana (Linea FL3 da Roma Ostiense/Tiburtina).
2. Uscendo, vai a destra su Viale Raniero Capocci.
3. Dopo 300m trovi l'ingresso monumentale di S. Maria in Gradi sulla sinistra.
4. Per San Carlo/Paradiso: prosegui a piedi dentro le mura (10-15 min).`,
            mezziPubblici: ['Treno FL3', 'A piedi'],
            tempoStimato: '5-10 min',
            note: 'La stazione di Porta Romana è praticamente attaccata al Rettorato.'
        });
    } else if (isRiello) {
        directions.push({
            luogo: 'Stazione Viterbo Porta Fiorentina / Terminal Bus',
            descrizione: `Per Campus Riello (Scientifico):
1. **Treno**: Scendi a Porta Fiorentina.
2. **Bus Cotral**: Arrivano tutti al Terminal Riello.
3. Il Campus è adiacente al Terminal Bus e a 10 min a piedi dalla stazione Porta Fiorentina.
4. Segui le indicazioni per "Università" (edifici colorati moderni).`,
            mezziPubblici: ['Bus Cotral', 'Circolare Urbana'],
            tempoStimato: '5 min a piedi dal Terminal',
            note: 'Il Campus Riello è il nodo dei trasporti, comodissimo per i pendolari.'
        });
    }

    // CIVITAVECCHIA
    else if (isCivitavecchia) {
        directions.push({
            luogo: 'Stazione Civitavecchia',
            descrizione: `Per il Polo Universitario (Piazza Verdi):
1. Dalla stazione ferroviaria, esci e vai a destra su Viale della Repubblica.
2. Prosegui dritto per circa 600 metri (lungomare/centro).
3. Arrivi in Piazza Verdi. L'università è nel palazzo storico.`,
            mezziPubblici: ['A piedi', 'Bus locale'],
            tempoStimato: '10 min',
            note: 'Passeggiata piacevole vicino al porto.'
        });
    }

    // RIETI
    else if (isRieti) {
        directions.push({
            luogo: 'Stazione Rieti / Capolinea Cotral',
            descrizione: `Per le sedi di Rieti:
1. **Palazzo Aluffi (Centro)**: Dalla stazione, prendi un bus urbano per Via Cintia o cammina 15 min verso il centro storico (mura).
2. **Via A.M. Ricci (Scienze)**: Serve il Bus Urbano (ASM) linea 1 o navetta universitaria se attiva. È fuori dal centro, zona ospedale/licei.`,
            mezziPubblici: ['Bus ASM Rieti', 'Cotral'],
            tempoStimato: '15-20 min',
            note: 'Rieti ha due sedi distanti, controlla bene dove devi andare!'
        });
    }

    // COLLEGAMENTI DA ROMA (Generale)
    directions.push({
        luogo: 'Da Roma (Generale)',
        descrizione: `Per raggiungere la Tuscia da Roma:
• **Viterbo**: Treno FL3 (da Ostiense/Tiburtina) o Bus Cotral (da Saxa Rubra).
• **Civitavecchia**: Treno FL5 (da Termini/Ostiense).
• **Rieti**: Bus Cotral (da Stazione Tiburtina) o Treno per Terni + cambio (sconsigliato, meglio il bus).`,
        mezziPubblici: ['Cotral', 'Treno'],
        tempoStimato: 'Variabile (1h - 1h 30m)',
        note: 'Unitus è un\'università per pendolari, i collegamenti sono frequenti.'
    });

    return directions;
};
