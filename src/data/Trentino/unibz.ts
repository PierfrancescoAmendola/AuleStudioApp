import { StudyRoom, DirectionsFromLocation } from '../../types';

export const unibzRooms: StudyRoom[] = [
    // ============================================================
    // SEDE BOLZANO - CAMPUS CENTRALE
    // ============================================================
    {
        id: 'unibz_bz_main_library',
        nome: 'Biblioteca Universitaria di Bolzano',
        edificio: 'Campus Bolzano - Edificio Principale',
        piano: 1,
        postiDisponibili: 250,
        postiTotali: 400,
        orarioApertura: '08:00',
        orarioChiusura: '24:00',
        servizi: ['WiFi Eduroam', 'Prese elettriche', 'Aperta Domenica', 'Materiali Trilingui', 'Armadietti'],
        latitude: 46.4984,
        longitude: 11.3508,
        indirizzo: 'Piazza Università 1, 39100 Bolzano (BZ)',
        university: 'unibz',
        occupancy_rate: 'Molto Alto',
        extendedHours: true,
        vibe: 'Moderna / Internazionale',
        notes: 'Biblioteca pluripremiata, cuore del campus di Bolzano. Design moderno e luminosissimo. Ottima per Economia e Design.',
        tags: ['Biblioteca', 'Centro', 'Orario Esteso', 'Domenica', 'Prese'],
    },
    {
        id: 'unibz_bz_foyer',
        nome: 'Spazi Studio Foyer e Corridoi',
        edificio: 'Campus Bolzano',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 150,
        orarioApertura: '07:30',
        orarioChiusura: '20:00',
        servizi: ['WiFi Eduroam', 'Lavori di gruppo', 'Caffetteria', 'Accessibile disabili'],
        latitude: 46.4985,
        longitude: 11.3505,
        indirizzo: 'Piazza Università 1, 39100 Bolzano (BZ)',
        university: 'unibz',
        occupancy_rate: 'Alto',
        extendedHours: false,
        vibe: 'Dinamica / Social Hub',
        notes: 'Spazi informali dislocati lungo i corridoi e le hall. Perfetti per lavori di gruppo e pausa caffè.',
        tags: ['Gruppi OK', 'Social Hub', 'Centro'],
    },
    // ============================================================
    // SEDE BOLZANO - NOI TECHPARK (Ingegneria)
    // ============================================================
    {
        id: 'unibz_bz_noi_techpark',
        nome: 'Aule Studio e Foyer NOI Techpark',
        edificio: 'NOI Techpark',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 200,
        orarioApertura: '08:00',
        orarioChiusura: '22:00',
        servizi: ['WiFi Eduroam', 'Prese elettriche', 'Mensa', 'Stampanti 3D (Labs)'],
        latitude: 46.4795,
        longitude: 11.3325,
        indirizzo: 'Via A. Volta 13, 39100 Bolzano (BZ)',
        university: 'unibz',
        occupancy_rate: 'Medio',
        extendedHours: true,
        vibe: 'Tech / Innovazione',
        notes: 'Polo di eccellenza per l\'Ingegneria e la Ricerca. Spazi ultramoderni ex-Alumix. Include spazi di coworking.',
        tags: ['Ingegneria', 'Tech', 'WiFi', 'Mensa'],
    },
    // ============================================================
    // SEDE BRESSANONE - SCIENZE DELLA FORMAZIONE
    // ============================================================
    {
        id: 'unibz_bx_library',
        nome: 'Biblioteca Universitaria di Bressanone',
        edificio: 'Campus Bressanone',
        piano: 0,
        postiDisponibili: 120,
        postiTotali: 180,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi Eduroam', 'Scienze della Formazione', 'Letteratura per l\'infanzia'],
        latitude: 46.7170,
        longitude: 11.6500,
        indirizzo: 'Viale Ratisbona 16, 39042 Bressanone (BZ)',
        university: 'unibz',
        occupancy_rate: 'Medio',
        extendedHours: false,
        vibe: 'Accogliente / Focus',
        notes: 'Struttura focalizzata sulla pedagogia e formazione. Sabato chiusura anticipata.',
        tags: ['Biblioteca', 'Bressanone', 'Formazione', 'Silenzio'],
    },
    // ============================================================
    // SEDE BRUNICO - TURISMO, SPORT E EVENTI
    // ============================================================
    {
        id: 'unibz_bk_library',
        nome: 'Biblioteca Universitaria di Brunico',
        edificio: 'Campus Brunico',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Management del Turismo', 'Spazi studio individuali'],
        latitude: 46.7950,
        longitude: 11.9380,
        indirizzo: 'Piazzetta dell\'Università 1, 39031 Brunico (BZ)',
        university: 'unibz',
        occupancy_rate: 'Medio',
        extendedHours: false,
        vibe: 'Business / Intima',
        notes: 'Polo specializzato in economia del turismo. Biblioteca compatta ma ben fornita.',
        tags: ['Biblioteca', 'Brunico', 'Turismo', 'Prese'],
    }
];

export const getDirectionsUnibz = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const isBressanone = room.indirizzo.includes('Bressanone');
    const isBrunico = room.indirizzo.includes('Brunico');
    const isNoiTechpark = room.indirizzo.includes('Volta');
    const isBolzanoCentro = room.indirizzo.includes('Piazza Università');

    if (isBressanone) {
        directions.push({
            luogo: 'Stazione Ferroviaria Bressanone / Brixen',
            descrizione: 'Dalla Stazione FS, il Campus dista circa 10-15 minuti a piedi procedendo verso ovest (Viale Ratisbona). In alternativa, utilizzare i Citybus locali (linee 1 o 2).',
            mezziPubblici: ['A piedi', 'Citybus 1, 2'],
            tempoStimato: '15 min a piedi',
            note: 'Ottimamente collegata via treno regionale da Bolzano (circa 30 min).'
        });
    } else if (isBrunico) {
        directions.push({
            luogo: 'Stazione Ferroviaria Brunico / Bruneck',
            descrizione: 'Prendere il treno regionale per la Val Pusteria (fermata Brunico Centro/Bruneck Nord o Centrale). Da lì il campus in Piazzetta dell\'Università è raggiungibile a piedi in circa 10 minuti attraversando il centro.',
            mezziPubblici: ['Treno Val Pusteria', 'A piedi'],
            tempoStimato: '10 min a piedi',
            note: 'La stazione di Fortezza funge da snodo per arrivare a Brunico da Bolzano/Bressanone.'
        });
    } else if (isNoiTechpark) {
        directions.push({
            luogo: 'Stazione Bolzano Centrale / Centro',
            descrizione: 'Il NOI Techpark si trova nella zona industriale di Bolzano Sud. Dalla Stazione Centrale prendere il treno regionale e scendere a "Bolzano Sud / Fiera" (3 min di viaggio), poi 5 min a piedi. In alternativa, Bus 10A o 10B.',
            mezziPubblici: ['Treno Regionale', 'Bus 10A, 10B'],
            tempoStimato: '15 min',
            note: 'Zona facilmente raggiungibile anche in bicicletta tramite la capillare rete ciclabile di Bolzano.'
        });
    } else if (isBolzanoCentro) {
        directions.push({
            luogo: 'Stazione Bolzano Centrale / Bozen',
            descrizione: 'Il Campus centrale si trova nel cuore di Bolzano. Uscendo dalla stazione, procedere dritto per Viale Stazione, girare a destra verso Piazza Walther e poi seguire per Piazza Università. Meno di 10 minuti a piedi.',
            mezziPubblici: ['A piedi'],
            tempoStimato: '5-8 min a piedi',
            note: 'Area interamente pedonale e ciclabile. Non è consigliato l\'uso dell\'auto.'
        });
    }

    // Auto / Hub Generale Alto Adige
    directions.push({
        luogo: 'Arrivo in Auto (A22 del Brennero)',
        descrizione: 'Per Bolzano Centro: uscita Bolzano Sud, seguire per il centro e parcheggiare al Parcheggio Bolzano Centro. Per Bressanone: uscita Bressanone/Val Pusteria. Per Brunico: uscire a Bressanone/Val Pusteria e proseguire sulla SS49 per circa 30km.',
        mezziPubblici: ['Auto'],
        tempoStimato: 'Variabile',
        note: 'Attenzione alle ZTL e ai costi elevati dei parcheggi in struttura nei centri storici.'
    });

    return directions;
};
