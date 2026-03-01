import { StudyRoom, DirectionsFromLocation } from '../../types';

export const unibsRooms: StudyRoom[] = [
    // ============================================================
    // BRESCIA - CENTRO STORICO (Economia & Giurisprudenza)
    // ============================================================
    {
        id: 'unibs_eco_biblio',
        nome: 'Biblioteca di Economia e Giurisprudenza (BIEG)',
        edificio: 'Complesso S. Chiara',
        piano: 1,
        postiDisponibili: 240,
        postiTotali: 300,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Edificio Storico', 'Silenzio Assoluto', 'Cortile Interno'],
        latitude: 45.5415,
        longitude: 10.2190,
        indirizzo: 'Contrada Santa Chiara 50, Brescia',
        university: 'UniBS',
        occupancy_rate: 'Alto',
        notes: 'Situata in un ex monastero ristrutturato. Ambiente molto suggestivo e silenzioso.',
        tags: ['Biblioteca', 'WiFi', '🔇 Silenzio'],
    },
    {
        id: 'unibs_sanfaustino_brixia',
        nome: 'Aula Studio "Brixia"',
        edificio: 'Sede San Faustino',
        piano: 0,
        postiDisponibili: 120,
        postiTotali: 150,
        orarioApertura: '08:00',
        orarioChiusura: '22:00',
        servizi: ['WiFi', 'Aperta fino a tardi', 'Socialità'],
        latitude: 45.5430,
        longitude: 10.2185,
        indirizzo: 'Via San Faustino 74/B, Brescia',
        university: 'UniBS',
        notes: 'Il punto di riferimento per lo studio serale in centro. Spesso affollata.',
        tags: ['Aula Studio', 'WiFi'],
    },
    {
        id: 'unibs_battaglie_eco',
        nome: 'Sala Studio "Umberto Eco"',
        edificio: 'Palazzo delle Mercanzie',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Zona Movida', 'Climatizzata'],
        latitude: 45.5440,
        longitude: 10.2170,
        indirizzo: 'Via delle Battaglie 58, Brescia',
        university: 'UniBS',
        notes: 'Nel cuore del quartiere Carmine.',
        tags: ['Aula Studio', 'WiFi', '❄️ Climatizzato'],
    },

    // ============================================================
    // BRESCIA - POLO NORD (Ingegneria)
    // ============================================================
    {
        id: 'unibs_ing_biblio',
        nome: 'Biblioteca di Ingegneria (Branze)',
        edificio: 'Edificio Polifunzionale Ingegneria',
        piano: 0,
        postiDisponibili: 150,
        postiTotali: 200,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi Eduroam', 'Consultazione Norme', 'Prese'],
        latitude: 45.5615,
        longitude: 10.2310,
        indirizzo: 'Via Branze 38, Brescia',
        university: 'UniBS',
        occupancy_rate: 'Medio',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'unibs_ing_acquario',
        nome: 'Aula Studio "Acquario" (Ingegneria)',
        edificio: 'Via Branze 38 (Piano Terra)',
        piano: 0,
        postiDisponibili: 200,
        postiTotali: 200,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Pareti Vetrate', 'Rumoroso', 'Distributori'],
        latitude: 45.5615,
        longitude: 10.2310,
        indirizzo: 'Via Branze 38, Brescia',
        university: 'UniBS',
        notes: 'Famosa aula vetrata. Si può parlare (moderatamente) e mangiare qualcosa.',
        tags: ['Aula Studio', 'WiFi'],
    },
    {
        id: 'unibs_ing_branze43',
        nome: 'Spazi Studio "Branze 43"',
        edificio: 'Nuovo Blocco Didattico',
        piano: 1,
        postiDisponibili: 100,
        postiTotali: 150,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Nuova Costruzione', 'Luminoso'],
        latitude: 45.5620,
        longitude: 10.2305,
        indirizzo: 'Via Branze 43, Brescia',
        university: 'UniBS',
        tags: ['Aula Studio', 'WiFi'],
    },

    // ============================================================
    // BRESCIA - POLO NORD (Medicina)
    // ============================================================
    {
        id: 'unibs_med_biblio',
        nome: 'Biblioteca di Medicina',
        edificio: 'Facoltà di Medicina',
        piano: 0,
        postiDisponibili: 180,
        postiTotali: 250,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Ambiente Medico', 'Silenzio'],
        latitude: 45.5580,
        longitude: 10.2320,
        indirizzo: 'Viale Europa 11, Brescia',
        university: 'UniBS',
        notes: 'Adiacente agli Spedali Civili di Brescia.',
        tags: ['Biblioteca', 'Medicina', 'WiFi', '🔇 Silenzio'],
    },
    {
        id: 'unibs_med_polifunzionale',
        nome: 'Sala Studio Polifunzionale Medicina',
        edificio: 'Edificio Polifunzionale',
        piano: 0,
        postiDisponibili: 120,
        postiTotali: 150,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Microonde', 'Zona Relax'],
        latitude: 45.5585,
        longitude: 10.2325,
        indirizzo: 'Viale Europa 11, Brescia',
        university: 'UniBS',
        notes: 'Spazio moderno e informale per gli studenti di Medicina e Professioni Sanitarie.',
        tags: ['Aula Studio', 'Medicina', 'WiFi'],
    },

    // ============================================================
    // MANTOVA (Sede Distaccata)
    // ============================================================
    {
        id: 'unibs_mantova_univer',
        nome: 'Biblioteca Fondazione UniverMantova',
        edificio: 'Sede Via Scarsellini',
        piano: 1,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Centro Storico', 'Condivisa con PoliMi'],
        latitude: 45.1560,
        longitude: 10.7900,
        indirizzo: 'Via Scarsellini 2, Mantova',
        university: 'UniBS',
        notes: 'Sede dei corsi di Economia e gestione aziendale a Mantova.',
        tags: ['Biblioteca', 'Centro', 'WiFi'],
    },

    // ============================================================
    // CHIARI (Sede Infermieristica)
    // ============================================================
    {
        id: 'unibs_chiari_aula',
        nome: 'Aula Studio Polo Chiari',
        edificio: 'Ex Ospedale / Polo Didattico',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 40,
        orarioApertura: '08:30',
        orarioChiusura: '17:00',
        servizi: ['WiFi', 'Vicino Stazione', 'Riservata'],
        latitude: 45.5350,
        longitude: 9.9250,
        indirizzo: 'Viale Mazzini 6, Chiari (BS)',
        university: 'UniBS',
        notes: 'Piccola aula studio all\'interno della sede del corso di Infermieristica.',
        tags: ['Aula Studio', 'Campus', 'Medicina', 'WiFi'],
    },

    // ============================================================
    // CAMPUS NORD - SPAZI ECCEZIONALI (Aperti fino a mezzanotte!)
    // ============================================================
    {
        id: 'unibs_nord_vetri',
        nome: 'Aula Vetri (APERTA H24!)',
        edificio: 'Campus Nord',
        piano: 0,
        postiDisponibili: 70,
        postiTotali: 76,
        orarioApertura: '00:00',
        orarioChiusura: '23:59',
        servizi: ['WiFi', 'APERTA H24!', 'Vetrate', 'Macchinette'],
        latitude: 45.5600,
        longitude: 10.2300,
        indirizzo: 'Via Branze, Brescia',
        university: 'UniBS',
        occupancy_rate: 'Altissimo',
        notes: '⚡ L\'UNICA aula studio H24 di Brescia! Chiude solo 5:00-8:30. Il rifugio notturno degli studenti.',
        tags: ['Aula Studio', 'Campus', 'WiFi', '❄️ Climatizzato', '🌙 H24'],
    },
    {
        id: 'unibs_nord_v3_grande',
        nome: 'Aula V3 Grande (Campus Nord)',
        edificio: 'Campus Nord',
        piano: 0,
        postiDisponibili: 70,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '23:30',
        servizi: ['WiFi', 'Aperta fino alle 23:30', 'Weekend'],
        latitude: 45.5600,
        longitude: 10.2300,
        indirizzo: 'Via Branze, Brescia',
        university: 'UniBS',
        notes: 'Aperta anche Sabato e Domenica 9-22! 80 posti.',
        tags: ['Aula Studio', 'Campus', 'WiFi'],
    },
    {
        id: 'unibs_nord_v3_piccola',
        nome: 'Aula V3 Piccola (Campus Nord)',
        edificio: 'Campus Nord',
        piano: 0,
        postiDisponibili: 45,
        postiTotali: 51,
        orarioApertura: '08:30',
        orarioChiusura: '23:30',
        servizi: ['WiFi', 'Orario Esteso'],
        latitude: 45.5600,
        longitude: 10.2300,
        indirizzo: 'Via Branze, Brescia',
        university: 'UniBS',
        notes: 'Versione più raccolta della V3. Stessi orari.',
        tags: ['Aula Studio', 'Campus', 'WiFi'],
    },
    {
        id: 'unibs_nord_emeroteca',
        nome: 'Atrio Ex-Emeroteca',
        edificio: 'Campus Nord',
        piano: 0,
        postiDisponibili: 25,
        postiTotali: 30,
        orarioApertura: '08:30',
        orarioChiusura: '23:30',
        servizi: ['WiFi', 'Informale'],
        latitude: 45.5600,
        longitude: 10.2300,
        indirizzo: 'Via Branze, Brescia',
        university: 'UniBS',
        notes: 'Spazio informale nell\'atrio. Aperta fino a tardi.',
        tags: ['Aula Studio', 'Campus', 'WiFi'],
    },
    {
        id: 'unibs_nord_emiliani',
        nome: 'Aula Ex-Emiliani',
        edificio: 'Campus Nord',
        piano: 0,
        postiDisponibili: 65,
        postiTotali: 72,
        orarioApertura: '08:30',
        orarioChiusura: '23:30',
        servizi: ['WiFi', 'Grande', 'Weekend'],
        latitude: 45.5600,
        longitude: 10.2300,
        indirizzo: 'Via Branze, Brescia',
        university: 'UniBS',
        notes: '72 posti. Aperta anche Sabato e Domenica.',
        tags: ['Aula Studio', 'Campus', 'WiFi'],
    },

    // ============================================================
    // INGEGNERIA (Via Branze) - SPAZI AGGIUNTIVI
    // ============================================================
    {
        id: 'unibs_ing_branze43_interrato',
        nome: 'Sala Studio Branze 43 (Interrato)',
        edificio: 'Blocco Didattico B (Interrato)',
        piano: -1,
        postiDisponibili: 55,
        postiTotali: 65,
        orarioApertura: '07:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Silenzioso'],
        latitude: 45.5620,
        longitude: 10.2305,
        indirizzo: 'Via Branze 43, Brescia',
        university: 'UniBS',
        notes: '65 posti individuali al piano interrato.',
        tags: ['Aula Studio', 'WiFi', '🔇 Silenzio'],
    },
    {
        id: 'unibs_ing_branze_pc',
        nome: 'Aula Studio con PC (Via Branze 38)',
        edificio: 'Edificio Ingegneria (Corpo N)',
        piano: 0,
        postiDisponibili: 28,
        postiTotali: 30,
        orarioApertura: '07:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'PC Fissi', 'Silenziosa'],
        latitude: 45.5615,
        longitude: 10.2310,
        indirizzo: 'Via Branze 38, Brescia',
        university: 'UniBS',
        notes: 'Aula con 30 postazioni PC.',
        tags: ['Aula Studio', 'WiFi', '🔇 Silenzio'],
    },
    {
        id: 'unibs_ing_branze_individuale',
        nome: 'Aula Studio Individuale (Via Branze 38)',
        edificio: 'Edificio Ingegneria (Corpo N)',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 44,
        orarioApertura: '07:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Silenzio Assoluto'],
        latitude: 45.5615,
        longitude: 10.2310,
        indirizzo: 'Via Branze 38, Brescia',
        university: 'UniBS',
        notes: 'Aula silenziosa per studio individuale. 44 posti.',
        tags: ['Aula Studio', 'WiFi', '🔇 Silenzio'],
    },

    // ============================================================
    // CENTRO STORICO - SPAZI AGGIUNTIVI (Economia/Giurisprudenza)
    // ============================================================
    {
        id: 'unibs_calini_acquario',
        nome: 'Aula Studio Acquario (Palazzo Calini)',
        edificio: 'Palazzo Calini ai Fiumi',
        piano: 0,
        postiDisponibili: 42,
        postiTotali: 48,
        orarioApertura: '08:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Palazzo Storico', 'Vetrate'],
        latitude: 45.5435,
        longitude: 10.2175,
        indirizzo: 'Via Battaglie 50, Brescia',
        university: 'UniBS',
        notes: 'Nel suggestivo Palazzo Calini. 48 posti.',
        tags: ['Aula Studio', 'WiFi'],
    },
    {
        id: 'unibs_calini_magna',
        nome: 'Aula Studio sopra Aula Magna',
        edificio: 'Palazzo Calini ai Fiumi',
        piano: 1,
        postiDisponibili: 38,
        postiTotali: 42,
        orarioApertura: '08:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Silenzioso'],
        latitude: 45.5435,
        longitude: 10.2175,
        indirizzo: 'Via Battaglie 50, Brescia',
        university: 'UniBS',
        notes: 'Aula raccolta sopra l\'Aula Magna.',
        tags: ['Aula Studio', 'WiFi', '🔇 Silenzio'],
    },
    {
        id: 'unibs_silenzio',
        nome: 'Sala del Silenzio',
        edificio: 'Area Economia',
        piano: 0,
        postiDisponibili: 6,
        postiTotali: 6,
        orarioApertura: '08:15',
        orarioChiusura: '18:30',
        servizi: ['SILENZIO ASSOLUTO', 'Piccola'],
        latitude: 45.5430,
        longitude: 10.2185,
        indirizzo: 'Via San Faustino, Brescia',
        university: 'UniBS',
        notes: 'Solo 6 posti. Per chi cerca silenzio TOTALE.',
        tags: ['Aula Studio', '🔇 Silenzio'],
    },

    // ============================================================
    // MEDICINA - SPAZI AGGIUNTIVI
    // ============================================================
    {
        id: 'unibs_med_seminterrato',
        nome: 'Aula Studio Medicina (Seminterrato D)',
        edificio: 'Edificio Centrale Medicina',
        piano: -1,
        postiDisponibili: 180,
        postiTotali: 220,
        orarioApertura: '08:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Enorme', 'Mensa vicina'],
        latitude: 45.5580,
        longitude: 10.2320,
        indirizzo: 'Viale Europa 11, Brescia',
        university: 'UniBS',
        occupancy_rate: 'Alto',
        notes: '220 posti! La più grande di Medicina.',
        tags: ['Aula Studio', 'Medicina', 'WiFi', '☕ Ristoro'],
    },
    {
        id: 'unibs_med_exbar',
        nome: 'Sala Lettura Ex-Bar (Medicina)',
        edificio: 'Facoltà di Medicina',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 68,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Informale'],
        latitude: 45.5580,
        longitude: 10.2320,
        indirizzo: 'Viale Europa 11, Brescia',
        university: 'UniBS',
        notes: 'Ex spazio bar riconvertito. 68 posti.',
        tags: ['Sala Lettura', 'Medicina', 'WiFi'],
    },
    // ============================================================
    // BRESCIA - SPAZI COMUNALI
    // ============================================================
    {
        id: 'unibs_vantini',
        nome: 'Aula Studio Comunale "Vantini"',
        edificio: 'Ex-ospedale Vantiniano',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 60,
        orarioApertura: '07:00',
        orarioChiusura: '23:59',
        servizi: ['WiFi Comunale', 'Prese', 'Badge Gratuito', '60 posti'],
        latitude: 45.5380,
        longitude: 10.2200,
        indirizzo: 'Via Vantini, 25121 Brescia',
        university: 'UniBS',
        occupancy_rate: 'Alto',
        extendedHours: true,
        notes: 'Aperta tutti i giorni dalle 7:00 alle 24:00. 60 posti, WiFi, prese. Accesso con badge (iscrizione gratuita con cauzione 5€). Lo spazio studio civico più lungo di Brescia.',
        tags: ['Comunale', 'H24-ish', 'WiFi', 'Centro'],
    }
];

export const getDirectionsUnibs = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const isCentro = room.indirizzo.includes('San Faustino') || room.indirizzo.includes('Santa Chiara') || room.indirizzo.includes('Battaglie');
    const isNord = room.indirizzo.includes('Branze') || room.indirizzo.includes('Europa');
    const isMantova = room.indirizzo.includes('Mantova');
    const isChiari = room.indirizzo.includes('Chiari');

    // BRESCIA - CENTRO (Economia/Giurisprudenza)
    if (isCentro) {
        directions.push({
            luogo: 'Stazione FS Brescia',
            descrizione: `Per il Centro (San Faustino/S. Chiara):
1. Dalla stazione, prendi la **Metropolitana** (direzione Prealpino).
2. Scendi alla fermata **San Faustino**.
3. Sei arrivato: l'uscita della metro è proprio davanti alla sede di Economia.
4. Santa Chiara è a 200m a piedi risalendo la via.`,
            mezziPubblici: ['Metro (San Faustino)'],
            tempoStimato: '10 min',
            note: 'La Metro di Brescia è automatica, frequente e comodissima.'
        });
    }

    // BRESCIA - POLO NORD (Ing/Med)
    else if (isNord) {
        directions.push({
            luogo: 'Stazione FS Brescia',
            descrizione: `Per Ingegneria e Medicina (Polo Nord):
1. Prendi la **Metropolitana** (direzione Prealpino).
2. Scendi alla fermata **Europa** (per Medicina/Branze 43) o **Mompiano** (per Ingegneria Branze 38).
3. Le due fermate sono vicine, il campus è molto grande e si estende tra le due.`,
            mezziPubblici: ['Metro (Europa/Mompiano)'],
            tempoStimato: '15 min',
            note: 'Zona stadio e ospedale.'
        });
    }

    // MANTOVA
    else if (isMantova) {
        directions.push({
            luogo: 'Stazione FS Mantova',
            descrizione: `Per UniverMantova (Via Scarsellini):
1. Dalla stazione, procedi a piedi verso il centro storico (Via Solferino).
2. Via Scarsellini è una traversa, a circa 10-12 minuti a piedi dalla stazione.
3. Zona Universitaria condivisa.`,
            mezziPubblici: ['A piedi'],
            tempoStimato: '12 min a piedi',
            note: 'Mantova si gira bene a piedi.'
        });
    }

    // CHIARI
    else if (isChiari) {
        directions.push({
            luogo: 'Stazione FS Chiari',
            descrizione: `Per Polo Infermieristica (Viale Mazzini):
1. Esci dalla stazione di Chiari.
2. Viale Mazzini è praticamente di fronte o a pochi minuti a piedi verso il centro.
3. La sede è nell'area dell'Ex Ospedale.`,
            mezziPubblici: ['A piedi'],
            tempoStimato: '5-10 min',
            note: 'Chiari è sulla linea ferroviaria Milano-Brescia, treni frequenti.'
        });
    }

    return directions;
};
