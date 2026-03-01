import { StudyRoom, DirectionsFromLocation } from '../../types';

export const uniprRooms: StudyRoom[] = [
    // ============================================================
    // PARMA - CAMPUS SCIENZE E TECNOLOGIE (Parco Area delle Scienze)
    // ============================================================
    {
        id: 'unipr_bst_centrale',
        nome: 'Biblioteca Centrale di Scienze e Tecnologie (BST)',
        edificio: 'Campus Parco Area delle Scienze',
        piano: 0,
        postiDisponibili: 84,
        postiTotali: 100,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi Eduroam', '2 Sale Studio', 'Sala Riunioni 10 posti', 'Proiettore', 'App BiblioParma'],
        latitude: 44.7650,
        longitude: 10.3085,
        indirizzo: 'Parco Area delle Scienze 59/A, Parma',
        university: 'UniPr',
        occupancy_rate: 'Medio',
        notes: 'Biblioteca scientifica principale del Campus. Include sale studio e riunioni prenotabili.',
        tags: ['Biblioteca', 'Campus', 'WiFi'],
    },
    {
        id: 'unipr_campus_aule',
        nome: 'Plesso Aule delle Scienze - Sale Studio',
        edificio: 'Campus Parco Area delle Scienze',
        piano: 0,
        postiDisponibili: 300,
        postiTotali: 400,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Aule Multiple', 'Mense', 'CUS Sport', 'Tecnopolo'],
        latitude: 44.7645,
        longitude: 10.3090,
        indirizzo: 'Parco Area delle Scienze 181/A, Parma',
        university: 'UniPr',
        notes: 'Grande plesso con aule studio, laboratori e spazi aperti. Campus di 77 ettari con tutti i servizi.',
        tags: ['Aula Studio', 'Campus', 'WiFi'],
    },
    {
        id: 'unipr_campus_bar_cimas',
        nome: 'Bar Cimas / Spazi Studio Campus',
        edificio: 'Campus Scienze',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 60,
        orarioApertura: '08:30',
        orarioChiusura: '17:00',
        servizi: ['WiFi', 'Funzione Aula Studio', 'Bar 8-15'],
        latitude: 44.7652,
        longitude: 10.3088,
        indirizzo: 'Parco Area delle Scienze, Parma',
        university: 'UniPr',
        notes: 'Spazi bar che fungono da aula studio durante il giorno.',
        tags: ['Aula Studio', 'Campus', 'WiFi', '☕ Ristoro'],
    },
    // ============================================================
    // PARMA - CENTRO STORICO (Area Kennedy / D'Azeglio / Ospedale)
    // ============================================================
    {
        id: 'unipr_economia',
        nome: 'Biblioteca di Economia',
        edificio: 'Polo Kennedy',
        piano: 0,
        postiDisponibili: 257,
        postiTotali: 257,
        orarioApertura: '09:00',
        orarioChiusura: '24:00',
        servizi: ['WiFi', 'Aperta fino a MEZZANOTTE (lun-gio)', 'Prenotazione Online'],
        latitude: 44.8052,
        longitude: 10.3268,
        indirizzo: 'Via John Fitzgerald Kennedy 8, Parma',
        university: 'UniPr',
        occupancy_rate: 'Molto Alto',
        notes: 'Biblioteca aperta più a lungo: lun-gio fino 24:00, ven fino 20:00.',
        tags: ['Biblioteca', 'Campus', 'WiFi'],
    },
    {
        id: 'unipr_paolotti',
        nome: 'Biblioteca Umanistica dei Paolotti',
        edificio: 'Chiostro Paolotti',
        piano: 0,
        postiDisponibili: 90,
        postiTotali: 90,
        orarioApertura: '09:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Orario esteso lun-ven 9-20'],
        latitude: 44.8040,
        longitude: 10.3245,
        indirizzo: 'Via Massimo D\'Azeglio 85, Parma',
        university: 'UniPr',
        occupancy_rate: 'Alto',
        notes: 'Biblioteca umanistica nel chiostro storico.',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'unipr_medicina',
        nome: 'Biblioteca di Medicina e Chirurgia "Ottaviani"',
        edificio: 'Ospedale Maggiore',
        piano: 0,
        postiDisponibili: 350,
        postiTotali: 350,
        orarioApertura: '08:30',
        orarioChiusura: '21:00',
        servizi: ['WiFi', '2 Piani', 'Tessera Magnetica Gratuita', 'Orario serale'],
        latitude: 44.8025,
        longitude: 10.3335,
        indirizzo: 'Via Antonio Gramsci 14, Parma',
        university: 'UniPr',
        occupancy_rate: 'Alto',
        notes: 'Grande biblioteca medica su 2 piani. Tessera magnetica gratuita per ingresso.',
        tags: ['Biblioteca', 'Medicina', 'WiFi'],
    },
    {
        id: 'unipr_giurisprudenza',
        nome: 'Biblioteca di Giurisprudenza',
        edificio: 'Sede Centrale Ateneo',
        piano: 0,
        postiDisponibili: 150,
        postiTotali: 200,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Consultazione Diritto', 'Prenotazione'],
        latitude: 44.8018,
        longitude: 10.3278,
        indirizzo: 'Via dell\'Università 12, Parma',
        university: 'UniPr',
        notes: 'Biblioteca giuridica nella sede centrale storica (aggiunta per completezza).',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'unipr_veterinaria',
        nome: 'Biblioteca di Medicina Veterinaria',
        edificio: 'Dipartimento Veterinaria',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 50,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Consultazione Specializzata'],
        latitude: 44.7830,
        longitude: 10.2940,
        indirizzo: 'Strada del Taglio 10, Parma',
        university: 'UniPr',
        notes: 'Biblioteca veterinaria distaccata (zona nord-ovest Parma).',
        tags: ['Biblioteca', 'Medicina', 'WiFi'],
    },
    // ============================================================
    // PARMA - POLO DIDATTICO VICOLO SANTA MARIA / KENNEDY
    // ============================================================
    {
        id: 'unipr_santamaria_kennedy',
        nome: 'Polo Didattico Vicolo Santa Maria / Via Kennedy',
        edificio: 'Polo Didattico',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 100,
        orarioApertura: '08:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Aperto SABATO 8-18', 'Aule Studio'],
        latitude: 44.8055,
        longitude: 10.3270,
        indirizzo: 'Vicolo Santa Maria / Via Kennedy, Parma',
        university: 'UniPr',
        occupancy_rate: 'Medio',
        notes: 'Polo aperto anche il sabato.',
        tags: ['Aula Studio', 'Campus', 'WiFi'],
    },
    // ============================================================
    // PARMA - BIBLIOTECHE STORICHE E COMUNALI
    // ============================================================
    {
        id: 'parma_palatina',
        nome: 'Biblioteca Palatina',
        edificio: 'Palazzo della Pilotta',
        piano: 1,
        postiDisponibili: 20,
        postiTotali: 30,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['WiFi', '1.000.000 volumi', 'Prenotazione Obbligatoria'],
        latitude: 44.8049,
        longitude: 10.3270,
        indirizzo: 'Piazzale della Pilotta 3, Parma',
        university: 'UniPr',
        occupancy_rate: 'Basso',
        notes: 'Biblioteca monumentale UNESCO. Prenotazione obbligatoria.',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'parma_guanda',
        nome: 'Biblioteca Comunale Ugo Guanda',
        edificio: 'Complesso San Paolo',
        piano: 0,
        postiDisponibili: 120,
        postiTotali: 120,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Giardino di San Paolo'],
        latitude: 44.7990,
        longitude: 10.3258,
        indirizzo: 'Vicolo Asse 5, Parma',
        university: 'UniPr',
        occupancy_rate: 'Medio',
        notes: 'Biblioteca comunale con giardino storico.',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'parma_civica',
        nome: 'Biblioteca Civica di Parma',
        edificio: 'Centro Storico',
        piano: 0,
        postiDisponibili: 150,
        postiTotali: 150,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Sala Lettura'],
        latitude: 44.8020,
        longitude: 10.3295,
        indirizzo: 'Vicino Palazzo Pilotta, Parma',
        university: 'UniPr',
        notes: 'Biblioteca comunale principale.',
        tags: ['Biblioteca', 'Centro', 'WiFi'],
    },
    // ============================================================
    // SPAZI STUDENTESCHI E NUOVE AULE
    // ============================================================
    {
        id: 'unipr_regeni',
        nome: 'Student Hub - Aula Studio Giulio Regeni',
        edificio: 'Casa dello Studente',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 45,
        orarioApertura: '09:00',
        orarioChiusura: '22:00',
        servizi: ['WiFi', 'Socialità', 'Gestione Studentesca'],
        latitude: 44.7930,
        longitude: 10.3225,
        indirizzo: 'Vicolo Grossardi 4, 43125 Parma',
        university: 'UniPr',
        occupancy_rate: 'Alto',
        extendedHours: true,
        notes: 'Spazio dedicato allo studio gestito dalle associazioni studentesche. Atmosfera informale e inclusiva.',
        tags: ['Autogestita', 'Social Hub', 'Serale'],
    },
    {
        id: 'unipr_dazeglio',
        nome: 'Nuove Aule Studio Plesso D\'Azeglio',
        edificio: 'Dipartimento Discipline Umanistiche',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 60,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Spazi Moderni', 'Gruppi OK'],
        latitude: 44.8010,
        longitude: 10.3260,
        indirizzo: 'Via D\'Azeglio 85, 43125 Parma',
        university: 'UniPr',
        occupancy_rate: 'Medio',
        notes: 'Aule studio moderne nel plesso umanistico. Ideali per studio di gruppo.',
        tags: ['Umanistica', 'Moderno', 'Gruppi OK'],
    },
];

export const getDirectionsUnipr = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const isCampusScienze = (room.indirizzo || '').includes('Parco Area delle Scienze') || (room.indirizzo || '').includes('Campus');
    const isCentroKennedy = (room.indirizzo || '').includes('Kennedy') || (room.indirizzo || '').includes('D\'Azeglio') || (room.indirizzo || '').includes('Università') || (room.indirizzo || '').includes('Vicolo Santa Maria');
    const isOspedaleMedicina = (room.indirizzo || '').includes('Gramsci') || (room.indirizzo || '').includes('Ospedale');
    const isPilottaPalatina = (room.indirizzo || '').includes('Pilotta') || (room.indirizzo || '').includes('Piazzale della Pilotta');
    const isVeterinaria = (room.indirizzo || '').includes('Taglio');

    // CAMPUS PARCO AREA DELLE SCIENZE (zona sud)
    if (isCampusScienze) {
        directions.push({
            luogo: 'Stazione Parma / Centro Storico',
            descrizione: `Per il Campus Parco Area delle Scienze (sud Parma):
1. **Dalla Stazione FS Parma**:
   - Autobus TEP **6** o **21** (direzione Campus) → fermata "Campus Universitario" (15-20 min, frequenza ogni 15 min)
   - Biglietto: app TEP o in stazione
2. **In bici** (consigliata): 20-25 min (piste ciclabili Via Emilia Ovest → Campus)
3. **A piedi dalla stazione**: 45 min (non consigliato)
4. **Dal Centro (Duomo)**: Bus 6 o 21 (20-25 min)
5. **In auto**: Tangenziale sud, uscita Campus – parcheggi gratuiti ampi
**NOTE**: Campus verde di 77 ettari con mense, CUS sport, Tecnopolo. Tutto compatto.`,
            mezziPubblici: ['Bus TEP 6, 21', 'Bici (MiMuovo bike sharing)'],
            tempoStimato: '15-25 min da stazione/centro',
            note: 'Uno dei pochi veri campus italiani. Area sud Parma.'
        });
    }
    // CENTRO STORICO / KENNEDY (Economia, Paolotti, Giurisprudenza, Polo Didattico)
    else if (isCentroKennedy) {
        directions.push({
            luogo: 'Stazione Parma / Pilotta',
            descrizione: `Per area Kennedy / D'Azeglio / Via Università (zona centro-est):
1. **A piedi dalla Stazione**: 15-25 min
   - Percorso: Viale Bottego → Ponte di Mezzo → Via Kennedy / D'Azeglio
2. **Autobus TEP**: Linee 6, 7, 12, 15 (fermata "Kennedy" o "Università")
3. **In bici**: 10 min dalla stazione
4. **Dal Duomo/Pilotta**: 10-15 min a piedi
**Biblioteca Economia (Kennedy 8)**: aperta fino mezzanotte!
**Paolotti (D'Azeglio 85)**: chiostro storico.
**Giurisprudenza (Via Università 12)**: sede centrale Ateneo.`,
            mezziPubblici: ['Bus TEP 6, 7, 12, 15'],
            tempoStimato: '15-25 min a piedi da stazione',
            note: 'Zona universitaria centrale, compatta e ZTL.'
        });
    }
    // OSPEDALE MAGGIORE (Medicina)
    else if (isOspedaleMedicina) {
        directions.push({
            luogo: 'Stazione / Centro',
            descrizione: `Per Ospedale Maggiore (Biblioteca Medicina - Via Gramsci 14):
1. **Autobus TEP dalla Stazione**: Linea 5 o 7 (10-15 min) → fermata "Ospedale"
2. **A piedi dalla Stazione**: 20 min
3. **Dal Centro/Duomo**: Bus 5 (10 min) o a piedi 15 min
4. **In bici**: 10 min
**NOTE**: Biblioteca su 2 piani con 350 posti. Tessera magnetica gratuita all'ingresso.`,
            mezziPubblici: ['Bus TEP 5, 7'],
            tempoStimato: '10-20 min',
            note: 'Zona centrale, vicino Ponte di Mezzo.'
        });
    }
    // PALAZZO DELLA PILOTTA (Palatina)
    else if (isPilottaPalatina) {
        directions.push({
            luogo: 'Stazione / Centro',
            descrizione: `Per Palazzo della Pilotta (Biblioteca Palatina):
1. **A piedi dalla Stazione**: 15 min
   - Percorso: Viale Bottego → Lungoparma → Pilotta
2. **Dal Duomo**: 5 min a piedi
3. **Autobus**: Linee 1, 7, 11 (fermata "Pilotta")
**NOTE**: Ingresso separato per biblioteca. Prenotazione obbligatoria posto studio. Salone monumentale con 20-30 posti.`,
            mezziPubblici: ['Bus TEP 1, 7, 11'],
            tempoStimato: '5-15 min',
            note: 'Complesso culturale UNESCO.'
        });
    }
    // VETERINARIA (distaccata nord-ovest)
    else if (isVeterinaria) {
        directions.push({
            luogo: 'Stazione / Campus',
            descrizione: `Per Dipartimento Veterinaria (Strada del Taglio):
1. **Autobus TEP**: Linea 3 o 23 dalla stazione (20-25 min)
2. **In auto**: Tangenziale nord (15 min dal centro)
3. **In bici**: 25 min dal centro
**NOTE**: Sede distaccata, tranquilla.`,
            mezziPubblici: ['Bus TEP 3, 23'],
            tempoStimato: '20-25 min',
            note: 'Zona nord-ovest Parma.'
        });
    }

    // Info generali (sempre aggiunte)
    directions.push({
        luogo: 'Informazioni Generali UniPr Parma',
        descrizione: `**PRENOTAZIONI**: App BiblioParma per tutti gli spazi UniPr.
**TRASPORTI**: TEP bus frequenti, bike sharing MiMuovo, Parma bike-friendly.
**ORARI SPECIALI**:
- Economia: fino mezzanotte
- Medicina: fino 21:00
- Palatina: prenotazione obbligatoria
Parma piccola: max 20-30 min per qualsiasi sede.`,
        mezziPubblici: ['TEP Bus', 'Bici', 'A piedi'],
        tempoStimato: 'Max 30 min tra sedi',
        note: 'Università fondata 1412, una delle più antiche d\'Europa.'
    });

    return directions;
};
