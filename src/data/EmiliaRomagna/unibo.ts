import { StudyRoom, DirectionsFromLocation } from '../../types';
export const uniboRooms: StudyRoom[] = [
    // ============================================================
    // SEDE BOLOGNA - ZONA UNIVERSITARIA (Via Zamboni e dintorni)
    // ============================================================
    {
        id: 'unibo_bub',
        nome: 'Biblioteca Universitaria di Bologna (BUB)',
        edificio: 'Palazzo Poggi',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 138,
        orarioApertura: '09:00',
        orarioChiusura: '18:45',
        servizi: ['WiFi Eduroam', 'Sala Trattati', 'Sala Bibliografica', 'Patrimonio Storico'],
        latitude: 44.4963,
        longitude: 11.3531,
        indirizzo: 'Via Zamboni 33/35, Bologna',
        university: 'UniBo',
        occupancy_rate: 'Alto',
        notes: 'Biblioteca centrale dell\'Università fondata nel 1712. Oltre 1.250.000 volumi. Palazzo storico con affreschi.',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'unibo_cicu',
        nome: 'Biblioteca Giuridica "Antonio Cicu"',
        edificio: 'Palazzo Malvezzi',
        piano: 1,
        postiDisponibili: 180,
        postiTotali: 250,
        orarioApertura: '08:30',
        orarioChiusura: '24:00',
        servizi: ['WiFi', 'Aperta fino alle 24:00', 'Sale A, B, C, Biagi, Caputo', 'Sabato aperto'],
        latitude: 44.4965,
        longitude: 11.3535,
        indirizzo: 'Via Zamboni 27/29, Bologna',
        university: 'UniBo',
        occupancy_rate: 'Molto Alto',
        notes: 'Una delle poche biblioteche aperte fino a mezzanotte! Perfetta per studenti di Giurisprudenza.',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'unibo_bur',
        nome: 'Biblioteca di Studi Umanistici (BUR)',
        edificio: 'Via Zamboni',
        piano: 0,
        postiDisponibili: 200,
        postiTotali: 300,
        orarioApertura: '09:00',
        orarioChiusura: '23:50',
        servizi: ['WiFi', 'Orario serale', 'Consultazione'],
        latitude: 44.4962,
        longitude: 11.3532,
        indirizzo: 'Via Zamboni 36, Bologna',
        university: 'UniBo',
        notes: 'Biblioteca umanistica con orario esteso fino a tarda sera.',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'unibo_filosofia',
        nome: 'Biblioteca di Filosofia e Comunicazione',
        edificio: 'Via Zamboni (Filosofia)',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 120,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Scaffale Aperto Parziale', 'Consultazione'],
        latitude: 44.4960,
        longitude: 11.3540,
        indirizzo: 'Via Zamboni 38, Bologna',
        university: 'UniBo',
        notes: 'Biblioteca specializzata in discipline filosofiche.',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'unibo_orientalistica',
        nome: 'Biblioteca di Orientalistica e Antropologia',
        edificio: 'Via Zamboni',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 90,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Materiali Orientalistici', 'Antropologia'],
        latitude: 44.4963,
        longitude: 11.3531,
        indirizzo: 'Via Zamboni 33, Bologna',
        university: 'UniBo',
        notes: 'Collezioni su civiltà asiatiche, letterature orientali e antropologia.',
        tags: ['Biblioteca', 'Campus', 'WiFi'],
    },
    {
        id: 'unibo_lilec',
        nome: 'Biblioteca LILEC (Lingue e Letterature Straniere)',
        edificio: 'Via Cartoleria',
        piano: 0,
        postiDisponibili: 70,
        postiTotali: 100,
        orarioApertura: '09:00',
        orarioChiusura: '18:30',
        servizi: ['WiFi', '8 PC fissi', 'Consultazione', '153.000 volumi'],
        latitude: 44.4943,
        longitude: 11.3458,
        indirizzo: 'Via Cartoleria 5, Bologna',
        university: 'UniBo',
        notes: 'Biblioteca del Dipartimento di Lingue. Ingresso da Via dei Chiari 25/A. 369 posti totali.',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'unibo_comunicazione',
        nome: 'Biblioteca di Comunicazione',
        edificio: 'Via Azzo Gardino',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 70,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Scaffale Aperto Totale', 'Scienze della Comunicazione'],
        latitude: 44.4985,
        longitude: 11.3395,
        indirizzo: 'Via Azzo Gardino 23, Bologna',
        university: 'UniBo',
        notes: 'Biblioteca specializzata in scienze della comunicazione con scaffale aperto.',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'unibo_storia',
        nome: 'Biblioteca di Storia',
        edificio: 'Piazza San Giovanni in Monte',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 60,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Archeologia Medievistica', 'Storia Antica'],
        latitude: 44.4930,
        longitude: 11.3510,
        indirizzo: 'Piazza San Giovanni in Monte 2, Bologna',
        university: 'UniBo',
        notes: 'Include sezioni di archeologia e storia antica.',
        tags: ['Biblioteca', 'WiFi'],
    },
    // ============================================================
    // SEDE BOLOGNA - SALE STUDIO PLESSO BELMELORO (Giurisprudenza)
    // ============================================================
    {
        id: 'unibo_belmeloro_andreatta2',
        nome: 'Sala Studio Via Andreatta 2-4',
        edificio: 'Plesso Belmeloro',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Studio Individuale'],
        latitude: 44.4940,
        longitude: 11.3570,
        indirizzo: 'Via Andreatta 2-4, Bologna',
        university: 'UniBo',
        notes: 'Sala studio per studenti di Giurisprudenza.',
        tags: ['Aula Studio', 'WiFi'],
    },
    {
        id: 'unibo_belmeloro_andreatta8',
        nome: 'Sala Studio Via Andreatta 8',
        edificio: 'Plesso Belmeloro',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 50,
        orarioApertura: '09:00',
        orarioChiusura: '19:30',
        servizi: ['WiFi', '2 Postazioni PC', 'Studio Individuale'],
        latitude: 44.4942,
        longitude: 11.3572,
        indirizzo: 'Via Andreatta 8, Bologna',
        university: 'UniBo',
        notes: 'Sala studio con postazioni PC nel complesso di Giurisprudenza.',
        tags: ['Aula Studio', 'WiFi'],
    },
    {
        id: 'unibo_filopanti',
        nome: 'Sala Studio Viale Filopanti',
        edificio: 'Viale Filopanti',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 40,
        orarioApertura: '09:30',
        orarioChiusura: '12:30',
        servizi: ['WiFi', 'Studio Mattutino'],
        latitude: 44.4950,
        longitude: 11.3560,
        indirizzo: 'Viale Filopanti 9, Bologna',
        university: 'UniBo',
        notes: 'Sala studio con orario mattutino. Sezione della Biblioteca Giuridica.',
        tags: ['Aula Studio', 'WiFi'],
    },
    // ============================================================
    // SEDE BOLOGNA - SCIENZE POLITICHE E SOCIALI
    // ============================================================
    {
        id: 'unibo_scienzepol',
        nome: 'Biblioteca Dipartimento Scienze Politiche e Sociali',
        edificio: 'Palazzo Hercolani',
        piano: 1,
        postiDisponibili: 80,
        postiTotali: 120,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Consultazione', 'Patrimonio Scienze Politiche'],
        latitude: 44.4920,
        longitude: 11.3470,
        indirizzo: 'Strada Maggiore 45, Bologna',
        university: 'UniBo',
        notes: 'Biblioteca nel prestigioso Palazzo Hercolani.',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'unibo_lab_hercolani_pt',
        nome: 'Laboratorio Informatico Hercolani (Piano Terra)',
        edificio: 'Palazzo Hercolani',
        piano: 0,
        postiDisponibili: 12,
        postiTotali: 16,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['16 PC', 'WiFi', 'Office', 'Internet'],
        latitude: 44.4920,
        longitude: 11.3470,
        indirizzo: 'Strada Maggiore 45, Bologna',
        university: 'UniBo',
        notes: 'Laboratorio informatico per studenti di Scienze Politiche e Sociali. Non è ad accesso libero.',
        tags: ['Laboratorio', 'WiFi'],
    },
    {
        id: 'unibo_lab_hercolani_p1',
        nome: 'Laboratorio Informatico Hercolani (Primo Piano)',
        edificio: 'Palazzo Hercolani',
        piano: 1,
        postiDisponibili: 12,
        postiTotali: 16,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['16 PC', 'WiFi', 'Office', 'Internet'],
        latitude: 44.4920,
        longitude: 11.3470,
        indirizzo: 'Strada Maggiore 45, Bologna',
        university: 'UniBo',
        notes: 'Secondo laboratorio informatico. Aperto 45 ore settimanali. Non ad accesso libero.',
        tags: ['Laboratorio', 'WiFi'],
    },
    {
        id: 'unibo_lab_sanpetronio',
        nome: 'Laboratorio Informatico Via San Petronio Vecchio',
        edificio: 'Via San Petronio Vecchio',
        piano: 0,
        postiDisponibili: 15,
        postiTotali: 20,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['20 PC', 'WiFi', 'Accesso Libero', 'Office'],
        latitude: 44.4910,
        longitude: 11.3450,
        indirizzo: 'Via San Petronio Vecchio, Bologna',
        university: 'UniBo',
        notes: 'Laboratorio a libero accesso per studenti di Scienze Politiche.',
        tags: ['Laboratorio', 'WiFi', '❄️ Climatizzato'],
    },
    // ============================================================
    // SEDE BOLOGNA - AREA SCIENTIFICA
    // ============================================================
    {
        id: 'unibo_matematica',
        nome: 'Biblioteca di Matematica',
        edificio: 'Piazza di Porta San Donato',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 80,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Consultazione Specializzata', 'Silenzio'],
        latitude: 44.4980,
        longitude: 11.3560,
        indirizzo: 'Piazza di Porta San Donato 5, Bologna',
        university: 'UniBo',
        notes: 'Biblioteca specializzata in matematica.',
        tags: ['Biblioteca', 'WiFi', '🔇 Silenzio'],
    },
    {
        id: 'unibo_fisica',
        nome: 'Biblioteca di Fisica',
        edificio: 'Via Irnerio',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 60,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Consultazione', 'Fisica'],
        latitude: 44.4970,
        longitude: 11.3550,
        indirizzo: 'Via Irnerio 46, Bologna',
        university: 'UniBo',
        notes: 'Biblioteca del Dipartimento di Fisica.',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'unibo_astronomia',
        nome: 'Biblioteca di Astronomia',
        edificio: 'Via Ranzani',
        piano: 0,
        postiDisponibili: 25,
        postiTotali: 35,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['WiFi', 'Consultazione', 'Astronomia'],
        latitude: 44.5000,
        longitude: 11.3400,
        indirizzo: 'Via Ranzani 1, Bologna',
        university: 'UniBo',
        notes: 'Biblioteca specializzata in astronomia.',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'unibo_biologia',
        nome: 'Biblioteca di Biologia',
        edificio: 'Via Selmi',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 90,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Consultazione', 'Scienze Biologiche'],
        latitude: 44.4955,
        longitude: 11.3545,
        indirizzo: 'Via Selmi 3, Bologna',
        university: 'UniBo',
        notes: 'Biblioteca per studenti di biologia. Zone via Selmi e via Irnerio 42.',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'unibo_geologia',
        nome: 'Biblioteca di Geologia',
        edificio: 'Piazza di Porta San Donato',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 60,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Consultazione', 'Geologia'],
        latitude: 44.4978,
        longitude: 11.3558,
        indirizzo: 'Piazza di Porta San Donato 1, Bologna',
        university: 'UniBo',
        notes: 'Biblioteca specializzata in geologia. Include sede in Via Zamboni 67.',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'unibo_architettura_dore',
        nome: 'Biblioteca "Gian Paolo Dore" (Architettura)',
        edificio: 'Viale Risorgimento',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 120,
        orarioApertura: '09:00',
        orarioChiusura: '24:00',
        servizi: ['WiFi', 'Orario serale', 'Architettura'],
        latitude: 44.4890,
        longitude: 11.3280,
        indirizzo: 'Viale Risorgimento 2, Bologna',
        university: 'UniBo',
        notes: 'Biblioteca di Architettura aperta fino a mezzanotte.',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'unibo_architettura_foraboschi',
        nome: 'Biblioteca "Franco P. Foraboschi"',
        edificio: 'Via Terracini',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 60,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Ingegneria Edile'],
        latitude: 44.4920,
        longitude: 11.3150,
        indirizzo: 'Via Terracini 28, Bologna',
        university: 'UniBo',
        notes: 'Biblioteca di Ingegneria e Architettura.',
        tags: ['Biblioteca', 'WiFi'],
    },
    // ============================================================
    // SEDE BOLOGNA - ALTRE BIBLIOTECHE SPECIALIZZATE
    // ============================================================
    {
        id: 'unibo_educazione',
        nome: 'Biblioteca di Scienze dell\'Educazione "Mario Gattullo"',
        edificio: 'Via Filippo Re',
        piano: 0,
        postiDisponibili: 70,
        postiTotali: 100,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Pedagogia', 'Psicologia', 'Sociologia'],
        latitude: 44.4950,
        longitude: 11.3450,
        indirizzo: 'Via Filippo Re 6, Bologna',
        university: 'UniBo',
        notes: 'Biblioteca per studenti di Scienze dell\'Educazione.',
        tags: ['Biblioteca', 'WiFi'],
    },
    // ============================================================
    // SEDE BOLOGNA - ECONOMIA E AZIENDALE (AGGIUNTA)
    // ============================================================
    {
        id: 'unibo_economia_bigiavi',
        nome: 'Biblioteca di Discipline Economico-Aziendali "Walter Bigiavi"',
        edificio: 'Piazza Scaravilli',
        piano: 0,
        postiDisponibili: 150,
        postiTotali: 220,
        orarioApertura: '08:30',
        orarioChiusura: '23:00',
        servizi: ['WiFi', 'Orario esteso', 'Consultazione', 'Postazioni PC'],
        latitude: 44.4938,
        longitude: 11.3525,
        indirizzo: 'Piazza Scaravilli 1-2, Bologna',
        university: 'UniBo',
        occupancy_rate: 'Molto Alto',
        notes: 'Una delle biblioteche più frequentate per Economia e Management. Orario prolungato.',
        tags: ['Biblioteca', 'WiFi'],
    },
    // ============================================================
    // SEDE BOLOGNA - INGEGNERIA (AGGIUNTA)
    // ============================================================
    {
        id: 'unibo_ingegneria_avogadro',
        nome: 'Biblioteca Centrale di Ingegneria "Antonio Avogadro"',
        edificio: 'Via Terracini',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 120,
        orarioApertura: '09:00',
        orarioChiusura: '19:30',
        servizi: ['WiFi', 'Consultazione Ingegneria', 'Sale studio'],
        latitude: 44.4915,
        longitude: 11.3140,
        indirizzo: 'Via Terracini 24-28, Bologna',
        university: 'UniBo',
        notes: 'Biblioteca principale per Ingegneria Civile, Chimica, Meccanica.',
        tags: ['Biblioteca', 'WiFi'],
    },
    // ============================================================
    // SEDE BOLOGNA - MEDICINA E AREA SANITARIA (AGGIUNTE PRINCIPALI)
    // ============================================================
    {
        id: 'unibo_medicina_irnerio',
        nome: 'Biblioteca di Medicina e Chirurgia',
        edificio: 'Via Irnerio',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 150,
        orarioApertura: '08:30',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Consultazione Medica', 'Postazioni PC'],
        latitude: 44.4975,
        longitude: 11.3540,
        indirizzo: 'Via Irnerio 48, Bologna',
        university: 'UniBo',
        notes: 'Biblioteca centrale per Medicina e Chirurgia.',
        tags: ['Biblioteca', 'Medicina', 'WiFi'],
    },
    {
        id: 'unibo_medicina_sorsola',
        nome: 'Biblioteca Biomedica Policlinico S. Orsola',
        edificio: 'Policlinico Sant\'Orsola-Malpighi',
        piano: 0,
        postiDisponibili: 120,
        postiTotali: 180,
        orarioApertura: '08:00',
        orarioChiusura: '22:00',
        servizi: ['WiFi', 'Orario esteso', 'Risorse biomediche'],
        latitude: 44.4890,
        longitude: 11.3630,
        indirizzo: 'Via Massarenti 9, Bologna',
        university: 'UniBo',
        occupancy_rate: 'Alto',
        notes: 'Grande biblioteca ospedaliera con orario prolungato.',
        tags: ['Biblioteca', 'Medicina', 'WiFi'],
    },
    // ============================================================
    // SEDE BOLOGNA - PSICOLOGIA E STATISTICA (AGGIUNTE)
    // ============================================================
    {
        id: 'unibo_psicologia_bertipichat',
        nome: 'Biblioteca di Psicologia "Enrico Valentini"',
        edificio: 'Viale Berti Pichat',
        piano: 0,
        postiDisponibili: 90,
        postiTotali: 130,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Psicologia', 'Scienze Formazione'],
        latitude: 44.4820,
        longitude: 11.3600,
        indirizzo: 'Viale Berti Pichat 5, Bologna',
        university: 'UniBo',
        notes: 'Biblioteca per Psicologia e Scienze della Formazione.',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'unibo_statistica',
        nome: 'Biblioteca di Scienze Statistiche',
        edificio: 'Via Belle Arti',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 80,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Statistica', 'Econometria'],
        latitude: 44.5030,
        longitude: 11.3520,
        indirizzo: 'Via Belle Arti 41, Bologna',
        university: 'UniBo',
        notes: 'Biblioteca specializzata in Statistica e Scienze dei Dati.',
        tags: ['Biblioteca', 'WiFi'],
    },
    // ============================================================
    // SEDE BOLOGNA - SALE STUDIO AGGIUNTIVE
    // ============================================================
    {
        id: 'unibo_paleotti',
        nome: 'Sala Studio Palazzo Paleotti',
        edificio: 'Via Zamboni 25',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Studio individuale'],
        latitude: 44.4955,
        longitude: 11.3510,
        indirizzo: 'Via Zamboni 25, Bologna',
        university: 'UniBo',
        notes: 'Sala studio storica vicino alla zona universitaria.',
        tags: ['Aula Studio', 'WiFi'],
    },
    // ============================================================
    // CAMPUS CESENA
    // ============================================================
    {
        id: 'unibo_cesena_alfa',
        nome: 'Sala Studio ALFA',
        edificio: 'Via dei Mulini',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 120,
        orarioApertura: '09:00',
        orarioChiusura: '21:45',
        servizi: ['WiFi', 'Orario esteso', 'Aperto domenica'],
        latitude: 44.1397,
        longitude: 12.2435,
        indirizzo: 'Via dei Mulini 23/25, Cesena (FC)',
        university: 'UniBo',
        occupancy_rate: 'Medio',
        notes: 'Sala studio con orario continuato fino a sera. Domenica aperta 12:00-21:00.',
        tags: ['Aula Studio', 'WiFi'],
    },
    {
        id: 'unibo_cesena_beta',
        nome: 'Sala Studio BETA',
        edificio: 'Piazzale Karl Marx',
        piano: 0,
        postiDisponibili: 70,
        postiTotali: 100,
        orarioApertura: '09:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Orario continuato', 'Aperto domenica'],
        latitude: 44.1385,
        longitude: 12.2450,
        indirizzo: 'Piazzale Karl Marx 131, Cesena (FC)',
        university: 'UniBo',
        occupancy_rate: 'Medio',
        notes: 'Seconda sala studio di Cesena. Domenica aperta 12:00-20:00.',
        tags: ['Aula Studio', 'WiFi'],
    },
    {
        id: 'unibo_cesena_campus',
        nome: 'Sala Polivalente Campus Cesena',
        edificio: 'Campus Via dell\'Università',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 136,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', '17 PC', 'Consumo pasti 12-14', 'Stampante'],
        latitude: 44.1365,
        longitude: 12.2470,
        indirizzo: 'Via dell\'Università 50, Cesena (FC)',
        university: 'UniBo',
        notes: 'Grande sala polivalente con possibilità di consumare il pasto a pranzo.',
        tags: ['Aula Studio', 'Campus', 'WiFi', '🖨️ Stampa'],
    },
    {
        id: 'unibo_cesena_scialimenti',
        nome: 'Sala Studio Scienze degli Alimenti',
        edificio: 'Piazza Goidanich',
        piano: 0,
        postiDisponibili: 35,
        postiTotali: 48,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Sede Didattica'],
        latitude: 44.1395,
        longitude: 12.2425,
        indirizzo: 'Piazza Goidanich 60, Cesena (FC)',
        university: 'UniBo',
        notes: 'Sala studio presso la sede di Scienze degli Alimenti.',
        tags: ['Aula Studio', 'WiFi'],
    },
    {
        id: 'unibo_cesenatico',
        nome: 'Sala Studio Cesenatico (Acquacoltura)',
        edificio: 'Via Magrini',
        piano: 0,
        postiDisponibili: 18,
        postiTotali: 24,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi', 'Orario continuato'],
        latitude: 44.1975,
        longitude: 12.4010,
        indirizzo: 'Via Magrini 31, Cesenatico (FC)',
        university: 'UniBo',
        notes: 'Sala studio nella sede di Acquacoltura a Cesenatico.',
        tags: ['Aula Studio', 'WiFi'],
    },
    {
        id: 'unibo_cesena_ingegneria',
        nome: 'Biblioteca di Ingegneria Cesena',
        edificio: 'Via dell\'Università',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 90,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Ingegneria Informatica', 'Consultazione'],
        latitude: 44.1360,
        longitude: 12.2460,
        indirizzo: 'Via dell\'Università 50, Cesena (FC)',
        university: 'UniBo',
        notes: 'Biblioteca del Dipartimento di Ingegneria (aggiunta per completezza).',
        tags: ['Biblioteca', 'WiFi'],
    },
    // ============================================================
    // CAMPUS FORLÌ
    // ============================================================
    {
        id: 'unibo_forli_ruffilli',
        nome: 'Biblioteca Roberto Ruffilli',
        edificio: 'Campus Forlì',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 150,
        orarioApertura: '09:00',
        orarioChiusura: '24:00',
        servizi: ['WiFi', 'Orario serale', 'Studio fino a mezzanotte'],
        latitude: 44.2228,
        longitude: 12.0403,
        indirizzo: 'Corso della Repubblica, Forlì (FC)',
        university: 'UniBo',
        occupancy_rate: 'Medio',
        notes: 'Biblioteca del Campus di Forlì con orario esteso fino a mezzanotte.',
        tags: ['Biblioteca', 'Campus', 'WiFi'],
    },
    {
        id: 'unibo_forli_teachinghub',
        nome: 'Sale Studio Teaching Hub',
        edificio: 'Campus Forlì Teaching Hub',
        piano: 0,
        postiDisponibili: 120,
        postiTotali: 180,
        orarioApertura: '08:30',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Aule studio', 'Postazioni PC'],
        latitude: 44.2150,
        longitude: 12.0350,
        indirizzo: 'Viale Corridoni 20, Forlì (FC)',
        university: 'UniBo',
        notes: 'Grande complesso moderno con molteplici sale studio (aggiunta).',
        tags: ['Aula Studio', 'Campus', 'WiFi'],
    },
    // ============================================================
    // CAMPUS RAVENNA
    // ============================================================
    {
        id: 'unibo_ravenna_biblioteca',
        nome: 'Biblioteca Campus Ravenna',
        edificio: 'Palazzo Corradini',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 120,
        orarioApertura: '09:00',
        orarioChiusura: '24:00',
        servizi: ['WiFi', 'Orario serale', 'Ambiente multiculturale'],
        latitude: 44.4184,
        longitude: 12.1993,
        indirizzo: 'Via Mariani 5, Ravenna (RA)',
        university: 'UniBo',
        occupancy_rate: 'Medio',
        notes: 'Biblioteca con orario esteso fino a mezzanotte. Campus internazionale.',
        tags: ['Biblioteca', 'Campus', 'WiFi'],
    },
    {
        id: 'unibo_ravenna_lab',
        nome: 'Laboratori e Spazi Studio Ravenna',
        edificio: 'Campus Ravenna',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 70,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Laboratori informatici', 'Studio'],
        latitude: 44.4180,
        longitude: 12.1990,
        indirizzo: 'Via Sant\'Alberto 163, Ravenna (RA)',
        university: 'UniBo',
        notes: 'Spazi per lo studio con laboratori informatici.',
        tags: ['Laboratorio', 'Campus', 'WiFi'],
    },
    {
        id: 'unibo_ravenna_venier',
        nome: 'Biblioteca Palazzo Venier (Beni Culturali)',
        edificio: 'Palazzo Venier',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 90,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Conservazione Beni Culturali'],
        latitude: 44.4170,
        longitude: 12.2020,
        indirizzo: 'Via degli Ariani 1, Ravenna (RA)',
        university: 'UniBo',
        notes: 'Biblioteca specializzata in Beni Culturali (aggiunta).',
        tags: ['Biblioteca', 'WiFi'],
    },
    // ============================================================
    // CAMPUS RIMINI
    // ============================================================
    {
        id: 'unibo_rimini_biblioteca',
        nome: 'Biblioteca Centrale di Campus Rimini',
        edificio: 'Campus Rimini',
        piano: 0,
        postiDisponibili: 120,
        postiTotali: 180,
        orarioApertura: '09:00',
        orarioChiusura: '24:00',
        servizi: ['WiFi', 'Aperta 7 giorni su 7', 'Orario serale', 'Coworking'],
        latitude: 44.0678,
        longitude: 12.5695,
        indirizzo: 'Via Cattaneo, Rimini (RN)',
        university: 'UniBo',
        occupancy_rate: 'Medio',
        notes: 'Biblioteca aperta 7 giorni su 7 con orario serale. Spazi per coworking.',
        tags: ['Biblioteca', 'Campus', 'WiFi'],
    },
    {
        id: 'unibo_rimini_sale',
        nome: 'Sale Studio Campus Rimini',
        edificio: 'Centro Storico Rimini',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Studio individuale', 'Studio di gruppo'],
        latitude: 44.0610,
        longitude: 12.5650,
        indirizzo: 'Centro Storico, Rimini (RN)',
        university: 'UniBo',
        notes: 'Sale studio nel centro storico di Rimini, vicino alla stazione.',
        tags: ['Aula Studio', 'Campus', 'Centro', 'WiFi', '👥 Gruppi OK'],
    },
    {
        id: 'unibo_rimini_vittoria',
        nome: 'Sala Studio Villa Vittoria',
        edificio: 'Villa Vittoria',
        piano: 0,
        postiDisponibili: 70,
        postiTotali: 100,
        orarioApertura: '09:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Spazi moderni', 'Medicina e Farmacia'],
        latitude: 44.0500,
        longitude: 12.5700,
        indirizzo: 'Via Angherà 22, Rimini (RN)',
        university: 'UniBo',
        notes: 'Sala studio presso sede di Medicina e Farmacia (aggiunta).',
        tags: ['Aula Studio', 'Medicina', 'WiFi', '❄️ Climatizzato'],
    },
    // ============================================================
    // SEDE IMOLA
    // ============================================================
    {
        id: 'unibo_imola_vespignani',
        nome: 'Sala Studio Palazzo Vespignani',
        edificio: 'Palazzo Vespignani',
        piano: 0,
        postiDisponibili: 35,
        postiTotali: 50,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi AlmaWiFi', 'Fotocopie', 'Stampa', 'Affluences'],
        latitude: 44.3534,
        longitude: 11.7148,
        indirizzo: 'Palazzo Vespignani, Imola (BO)',
        university: 'UniBo',
        notes: 'Sala studio con servizio fotocopie e stampa. Verificare posti con app Affluences.',
        tags: ['Aula Studio', 'WiFi', '🖨️ Stampa'],
    },
    {
        id: 'unibo_imola_biblioteca',
        nome: 'Biblioteca Comunale Imola (Plesso Vespignani)',
        edificio: 'Centro Imola',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 60,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Consultazione', 'Patrimonio Comunale'],
        latitude: 44.3530,
        longitude: 11.7145,
        indirizzo: 'Imola (BO)',
        university: 'UniBo',
        notes: 'Biblioteca comunale disponibile per studenti UniBo. Verificare orari sul sito.',
        tags: ['Biblioteca', 'WiFi'],
    },
    // ============================================================
    // BOLOGNA - BIBLIOTECHE COMUNALI (disponibili per studenti UniBo)
    // ============================================================
    {
        id: 'bologna_salaborsa',
        nome: 'Salaborsa',
        edificio: 'Piazza Nettuno',
        piano: 0,
        postiDisponibili: 150,
        postiTotali: 250,
        orarioApertura: '10:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'PC gratuiti', '255.000 volumi', 'Pavimento di cristallo'],
        latitude: 44.4938,
        longitude: 11.3430,
        indirizzo: 'Piazza Nettuno, Bologna',
        university: 'UniBo',
        occupancy_rate: 'Molto Alto',
        notes: 'Biblioteca civica in pieno centro con scavi archeologici visibili sotto il pavimento di cristallo. Molto frequentata.',
        tags: ['Aula Studio', 'WiFi'],
    },
];

export const getDirectionsUnibo = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const isBologna = room.indirizzo.includes('Bologna');
    const isCesena = room.indirizzo.includes('Cesena') && !room.indirizzo.includes('Cesenatico');
    const isCesenatico = room.indirizzo.includes('Cesenatico');
    const isForli = room.indirizzo.includes('Forlì');
    const isRavenna = room.indirizzo.includes('Ravenna');
    const isRimini = room.indirizzo.includes('Rimini');
    const isImola = room.indirizzo.includes('Imola');

    if (isBologna) {
        const addr = room.indirizzo;
        const isZamboni = addr.includes('Via Zamboni') || addr.includes('Scaravilli') || addr.includes('Belle Arti') || addr.includes('San Donato');
        const isIrnerio = addr.includes('Via Irnerio') || addr.includes('Filippo Re');
        const isAndreatta = addr.includes('Via Andreatta') || addr.includes('Filopanti');
        const isStradaMaggiore = addr.includes('Strada Maggiore') || addr.includes('San Petronio');
        const isCartoleria = addr.includes('Cartoleria') || addr.includes('Via dei Chiari');
        const isAzzoGardino = addr.includes('Azzo Gardino');
        const isSanGiovanni = addr.includes('San Giovanni in Monte');
        const isArchitettura = addr.includes('Viale Risorgimento') || addr.includes('Via Terracini');
        const isPoliclinico = addr.includes('Massarenti') || addr.includes('Berti Pichat');
        const isSalaborsa = addr.includes('Piazza Nettuno');

        // OPZIONE 1: DALLA STAZIONE FS
        let stazioneDesc = '';
        let stazioneMezzi: string[] = [];
        let stazioneTempo = '15-20 min';

        if (isZamboni || isIrnerio) {
            stazioneDesc = 'Dalla Stazione Centrale: Bus 27 o 28 (Fermata Irnerio) oppure Bus 32/33 (Fermata Porta San Donato). A piedi sono 15-20 min via Indipendenza-Irnerio.';
            stazioneMezzi = ['Bus 27, 28, 32, 33', 'TPER C'];
        } else if (isAndreatta || isStradaMaggiore || isSanGiovanni) {
            stazioneDesc = 'Dalla Stazione Centrale: Bus 25 o 27 fino a Piazza San Vitale o Strada Maggiore. In alternativa Navetta Tper A.';
            stazioneMezzi = ['Bus 25, 27', 'Navetta A'];
        } else if (isAzzoGardino) {
            stazioneDesc = 'Dalla Stazione Centrale: 10 min a piedi verso sud-ovest (Zona MAMbo). Bus 32, 33 o 35.';
            stazioneMezzi = ['A piedi', 'Bus 32, 33, 35'];
            stazioneTempo = '10 min';
        } else if (isArchitettura) {
            stazioneDesc = 'Dalla Stazione Centrale: Circolare 33 (Sinistra) per Viale Risorgimento. Per Via Terracini Bus 35 o 38.';
            stazioneMezzi = ['Bus 33, 35, 38'];
            stazioneTempo = '20-25 min';
        } else if (isPoliclinico) {
            stazioneDesc = 'Dalla Stazione Centrale: Bus 36 o 37 fino alla fermata Ospedale Sant\'Orsola (Via Massarenti).';
            stazioneMezzi = ['Bus 36, 37'];
            stazioneTempo = '15 min';
        } else if (isSalaborsa) {
            stazioneDesc = 'Dalla Stazione Centrale: Percorri tutta Via Indipendenza dritto (15 min) oppure Bus 25 o 27.';
            stazioneMezzi = ['Bus 25, 27', 'A piedi'];
            stazioneTempo = '15 min';
        } else {
            stazioneDesc = 'Dalla Stazione Centrale: Bus 25, 27 o Navetta A per il centro storico.';
            stazioneMezzi = ['Bus 25, 27', 'Navetta A'];
        }

        directions.push({
            luogo: 'Stazione Bologna Centrale',
            descrizione: stazioneDesc,
            mezziPubblici: stazioneMezzi,
            tempoStimato: stazioneTempo,
            note: 'Usa l\'uscita Piazza Medaglio d\'Oro per autobus urbani verso il centro.'
        });

        // OPZIONE 2: DA PIAZZA MAGGIORE (CENTRO)
        let centroDesc = '';
        let centroTempo = '10 min';

        if (isZamboni || isIrnerio || isSanGiovanni) {
            centroDesc = 'Dal cuore del centro (Due Torri): percorri Via Rizzoli e imbocca Via Zamboni o Via S. Vitale. Tutte le sedi sono raggiungibili a piedi in pochi minuti.';
            centroTempo = '5-10 min';
        } else if (isStradaMaggiore) {
            centroDesc = 'Da Piazza Maggiore: percorri Strada Maggiore fino a Palazzo Hercolani. Una passeggiata sotto i portici di circa 8-10 minuti.';
            centroTempo = '8 min';
        } else if (isCartoleria) {
            centroDesc = 'Da Piazza Maggiore: percorri Via Castiglione e svolta in Via Cartoleria. Circa 5-7 minuti a piedi.';
            centroTempo = '6 min';
        } else if (isArchitettura) {
            centroDesc = 'Da Piazza Maggiore: Bus 20 o 28 verso Porta Saragozza. Oppure una passeggiata di 25 minuti sotto i portici di Via Saragozza/Risorgimento.';
            centroTempo = '20-25 min';
        } else if (isSalaborsa) {
            centroDesc = 'La biblioteca Salaborsa si trova esattamente in Piazza Nettuno, a ridosso di Piazza Maggiore.';
            centroTempo = '1 min';
        } else {
            centroDesc = 'Dalla zona centrale delle Due Torri, muoviti a piedi lungo le vie principali del centro storico.';
        }

        directions.push({
            luogo: 'Piazza Maggiore / Due Torri',
            descrizione: centroDesc,
            mezziPubblici: ['A piedi', 'Bus 20, 28, 29'],
            tempoStimato: centroTempo,
            note: 'Bologna è la "Città dei Portici": camminare è quasi sempre il modo più piacevole per spostarsi.'
        });
    }
    // CAMPUS CESENA
    else if (isCesena) {
        directions.push({
            luogo: 'Stazione Cesena / Auto',
            descrizione: `Per il Campus di Cesena:
1. **Treno**: Linea Bologna-Ancona (40-50 min da Bologna).
2. **A piedi dalla Stazione**: Le sale ALFA e BETA sono a circa 10 min. Il nuovo Campus di Via dell'Università è a 15 min.
3. **Auto**: Uscita Cesena Nord (A14) e segui per il centro.`,
            mezziPubblici: ['Treno Regionale', 'Bus urbani 6, 7'],
            tempoStimato: '10-15 min dalla stazione',
            note: 'Cesena è una città ciclabile e sicura, ideale per muoversi a piedi tra le sedi.'
        });
    }
    // CESENATICO
    else if (isCesenatico) {
        directions.push({
            luogo: 'Cesena / Bologna',
            descrizione: `Per Cesenatico:
1. **Da Cesena**: Treno Regionale (15 min) o Bus extraurbano.
2. **Da Bologna**: Treno diretto per Cervia/Rimini (fermata Cesenatico).
3. La sede è in Via Magrini.`,
            mezziPubblici: ['Treno Regionale', 'Bus'],
            tempoStimato: '15-60 min',
            note: 'Sede distaccata di Acquacoltura.'
        });
    }
    // CAMPUS FORLÌ
    else if (isForli) {
        directions.push({
            luogo: 'Stazione Forlì / Centro',
            descrizione: `Per Forlì (Ruffilli e Teaching Hub):
1. **Treno**: Fermata Forlì.
2. **A piedi**: Esci dalla stazione e percorri Viale della Libertà dritto per 15 minuti fino ai Giardini Pubblici/Campus.
3. **Bus**: Linee 1, 4, 6.`,
            mezziPubblici: ['Treno Regionale/Freccia', 'Bus 1, 4, 6'],
            tempoStimato: '15 min a piedi',
            note: 'Il Teaching Hub di Forlì è un campus moderno e verde, facile da raggiungere a piedi.'
        });
    }
    // CAMPUS RAVENNA
    else if (isRavenna) {
        directions.push({
            luogo: 'Stazione Ravenna / Centro',
            descrizione: `Per il Campus di Ravenna:
1. **Treno**: Regionale da Bologna (70 min).
2. **A piedi**: Palazzo Corradini e Venier sono in pieno centro storico (10 min).
3. **Auto**: Parcheggio di Via De Gasperi.`,
            mezziPubblici: ['Treno Regionale', 'Bus 1, 2, 3'],
            tempoStimato: '10 min a piedi',
            note: 'Campus storico situato nel cuore della città dei mosaici.'
        });
    }
    // CAMPUS RIMINI
    else if (isRimini) {
        directions.push({
            luogo: 'Stazione Rimini / Centro',
            descrizione: `Per Rimini Campus:
1. **Treno**: Fermata Rimini (Stazione Centrale).
2. **A piedi**: Tutte le sedi del Polo sono a 5-10 min verso il centro storico.
3. **Villa Vittoria**: 15 min a piedi o Bus 4/11.`,
            mezziPubblici: ['Treno Regionale/Freccia', 'Bus 4, 11'],
            tempoStimato: '5-15 min a piedi',
            note: 'Rimini è un campus vivo 7 giorni su 7, molto agevole da girare a piedi.'
        });
    }
    // SEDE IMOLA
    else if (isImola) {
        directions.push({
            luogo: 'Stazione Imola / Bologna',
            descrizione: `Per Imola:
1. **Treno**: 25-30 minuti da Bologna.
2. **A piedi**: 10 minuti verso il centro per Palazzo Vespignani.`,
            mezziPubblici: ['Treno Regionale', 'Bus 101'],
            tempoStimato: '10 min dalla stazione',
            note: 'Sede distaccata molto tranquilla.'
        });
    }

    return directions;
};
