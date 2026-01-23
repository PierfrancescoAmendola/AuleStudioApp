import { StudyRoom, DirectionsFromLocation } from '../../types';

export const polimiRooms: StudyRoom[] = [
    // ============================================================
    // MILANO - CAMPUS LEONARDO (Città Studi) - Architettura/Ingegneria
    // ============================================================
    {
        id: 'polimi_leo_biblio',
        nome: 'Biblioteca Campus Leonardo (BBL)',
        edificio: 'Edificio 11 (Bonardi)',
        piano: 0,
        postiDisponibili: 450,
        postiTotali: 600,
        orarioApertura: '08:00',
        orarioChiusura: '21:45',
        servizi: ['WiFi Eduroam', 'Prenotazione Affluences', 'Prese ovunque', 'Silenzio'],
        latitude: 45.4790,
        longitude: 9.2280,
        indirizzo: 'Piazza Leonardo da Vinci 32, Milano',
        university: 'PoliMi',
        occupancy_rate: 'Altissimo',
        notes: 'La biblioteca centrale. Prenotazione obbligatoria tramite app Affluences.'
    },
    {
        id: 'polimi_leo_acquario',
        nome: 'Aula Studio "Acquario"',
        edificio: 'Edificio 2 (Piano Interrato)',
        piano: -1,
        postiDisponibili: 150,
        postiTotali: 200,
        orarioApertura: '08:00',
        orarioChiusura: '21:00',
        servizi: ['WiFi', 'Vetrata', 'Socialità'],
        latitude: 45.4785,
        longitude: 9.2275,
        indirizzo: 'Piazza Leonardo da Vinci 32, Milano',
        university: 'PoliMi',
        notes: 'Storica aula studio vetrata. Meno formale della biblioteca.'
    },
    {
        id: 'polimi_leo_interfacolta',
        nome: 'Aula Interfacoltà',
        edificio: 'Edificio 2 (Primo Piano)',
        piano: 1,
        postiDisponibili: 100,
        postiTotali: 150,
        orarioApertura: '08:00',
        orarioChiusura: '21:00',
        servizi: ['WiFi', 'Tavoli larghi'],
        latitude: 45.4785,
        longitude: 9.2275,
        indirizzo: 'Piazza Leonardo da Vinci 32, Milano',
        university: 'PoliMi',
    },
    {
        id: 'polimi_leo_patio',
        nome: 'Spazio Studio "Agorà/Patio"',
        edificio: 'Edificio 11 (Architettura)',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 100,
        orarioApertura: '00:00',
        orarioChiusura: '23:59',
        servizi: ['Aperto H24', 'WiFi', 'Macchinette'],
        latitude: 45.4790,
        longitude: 9.2285,
        indirizzo: 'Via Ampère 2, Milano',
        university: 'PoliMi',
        notes: 'Uno dei pochi spazi aperti 24 ore su 24 (lato Architettura).'
    },

    // ============================================================
    // MILANO - CAMPUS BOVISA (Design/Ingegneria)
    // ============================================================
    {
        id: 'polimi_bovisa_candiani',
        nome: 'Biblioteca Bovisa Candiani (Design)',
        edificio: 'Campus Durando - Edificio B1',
        piano: 0,
        postiDisponibili: 200,
        postiTotali: 300,
        orarioApertura: '08:30',
        orarioChiusura: '20:45',
        servizi: ['WiFi', 'Design', 'Luminosa'],
        latitude: 45.5050,
        longitude: 9.1650,
        indirizzo: 'Via Candiani 72, Milano',
        university: 'PoliMi',
        notes: 'Nel cuore del polo del Design. Molto moderna.'
    },
    {
        id: 'polimi_bovisa_lamasa',
        nome: 'Biblioteca Bovisa La Masa (Ingegneria)',
        edificio: 'Campus La Masa - Edificio BL28',
        piano: 0,
        postiDisponibili: 180,
        postiTotali: 250,
        orarioApertura: '08:30',
        orarioChiusura: '20:45',
        servizi: ['WiFi', 'Silenzio', 'Consultazione'],
        latitude: 45.5020,
        longitude: 9.1580,
        indirizzo: 'Via La Masa 34, Milano',
        university: 'PoliMi',
        notes: 'Sede dei dipartimenti di Ingegneria Meccanica, Aerospaziale ed Energia.'
    },
    {
        id: 'polimi_bovisa_bl27',
        nome: 'Edificio BL27 (Aule Studio)',
        edificio: 'Campus La Masa',
        piano: 0,
        postiDisponibili: 150,
        postiTotali: 200,
        orarioApertura: '07:30',
        orarioChiusura: '23:45',
        servizi: ['Orario Esteso', 'WiFi', 'Aule libere'],
        latitude: 45.5025,
        longitude: 9.1585,
        indirizzo: 'Via La Masa 34, Milano',
        university: 'PoliMi',
        notes: 'Spesso accessibile fino a tarda notte.'
    },

    // ============================================================
    // POLO TERRITORIALE DI COMO
    // ============================================================
    {
        id: 'polimi_como_biblio',
        nome: 'Biblioteca Polo di Como',
        edificio: 'Edificio A',
        piano: 1,
        postiDisponibili: 80,
        postiTotali: 120,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Laboratori'],
        latitude: 45.8030,
        longitude: 9.0950,
        indirizzo: 'Via Valleggio 11, Como',
        university: 'PoliMi',
        notes: 'Vicino alla stazione Como Borghi.'
    },

    // ============================================================
    // POLO TERRITORIALE DI LECCO
    // ============================================================
    {
        id: 'polimi_lecco_biblio',
        nome: 'Biblioteca Polo di Lecco',
        edificio: 'Edificio 8 (Primo Piano)',
        piano: 1,
        postiDisponibili: 104,
        postiTotali: 150,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Vista Montagne', 'Modernissima'],
        latitude: 45.8550,
        longitude: 9.3980,
        indirizzo: 'Via Previati 1/c, Lecco',
        university: 'PoliMi',
        notes: 'Campus di nuova costruzione, molto luminoso.'
    },
    {
        id: 'polimi_lecco_b04',
        nome: 'Aula Studio B0.4',
        edificio: 'Edificio 9 (Piano Terra)',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 50,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Prese', 'Silenzio'],
        latitude: 45.8552,
        longitude: 9.3982,
        indirizzo: 'Via Previati 1/c, Lecco',
        university: 'PoliMi',
    },

    // ============================================================
    // POLO TERRITORIALE DI MANTOVA
    // ============================================================
    {
        id: 'polimi_mantova_biblio',
        nome: 'Biblioteca Polo di Mantova',
        edificio: 'Sede Storica',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Centro Storico', 'Chiusura tardiva'],
        latitude: 45.1600,
        longitude: 10.7920,
        indirizzo: 'Piazza d\'Arco 3, Mantova',
        university: 'PoliMi',
        notes: 'Il Campus chiude alle 24:00, le aule studio spesso seguono orari lunghi.'
    },

    // ============================================================
    // AGGIUNTE LEONARDO: I LUOGHI "INSIDER"
    // ============================================================
    {
        id: 'polimi_leo_nave',
        nome: 'Spazio Studio "La Nave" (Edificio 14)',
        edificio: 'Edificio 14 (Nave)',
        piano: -1, // Seminterrato e Piano Terra
        postiDisponibili: 200,
        postiTotali: 300,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Tavoli da disegno', 'Iconico', 'Macchinette'],
        latitude: 45.4795,
        longitude: 9.2295,
        indirizzo: 'Via Bonardi 9, Milano',
        university: 'PoliMi',
        notes: 'Chiamato "La Nave" per la sua forma e le finestre a oblò. È il cuore pulsante di Architettura. Spesso caotico ma creativo.'
    },
    {
        id: 'polimi_leo_trifoglio',
        nome: 'Aule Studio "Trifoglio" (Edificio 13)',
        edificio: 'Edificio 13 (Trifoglio)',
        piano: 0,
        postiDisponibili: 150,
        postiTotali: 200,
        orarioApertura: '08:00',
        orarioChiusura: '21:00',
        servizi: ['WiFi', 'Architettura d\'autore', 'Luminoso'],
        latitude: 45.4792,
        longitude: 9.2290,
        indirizzo: 'Via Bonardi 9, Milano',
        university: 'PoliMi',
        notes: 'Edificio progettato da Gio Ponti. Gli spazi studio sono nell\'atrio e ai piani bassi.'
    },
    {
        id: 'polimi_leo_matematica',
        nome: 'Biblioteca di Matematica',
        edificio: 'Edificio 14 (Nave) - Piano 1',
        piano: 1,
        postiDisponibili: 40,
        postiTotali: 60,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['WiFi', 'Silenzio Assoluto', 'Poco conosciuta'],
        latitude: 45.4795,
        longitude: 9.2295,
        indirizzo: 'Via Bonardi 9, Milano',
        university: 'PoliMi',
        notes: 'Una gemma nascosta dentro la Nave. Se cerchi silenzio vero mentre sotto c\'è il caos, vieni qui.'
    },
    {
        id: 'polimi_leo_sottomarino',
        nome: 'Aula Studio "Sottomarino"',
        edificio: 'Edificio 8 (Fisica/Giulio Natta)',
        piano: -1,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['WiFi', 'Nascosto', 'Silenzioso'],
        latitude: 45.4775,
        longitude: 9.2290,
        indirizzo: 'Piazza Leonardo da Vinci 32, Milano',
        university: 'PoliMi',
        notes: 'Situata nei sotterranei di Chimica/Fisica. Ideale per chi vuole isolarsi dal mondo.'
    },

    // ============================================================
    // AGGIUNTE BOVISA: OVALE E COLLINA
    // ============================================================
    {
        id: 'polimi_bovisa_ovale',
        nome: 'Aula Studio "L\'Ovale" (Durando)',
        edificio: 'Edificio B8 (Ovale)',
        piano: 0,
        postiDisponibili: 120,
        postiTotali: 180,
        orarioApertura: '08:30',
        orarioChiusura: '20:30',
        servizi: ['WiFi', 'Design', 'Tavoli lavoro di gruppo'],
        latitude: 45.5055,
        longitude: 9.1660,
        indirizzo: 'Via Candiani 72, Milano',
        university: 'PoliMi',
        notes: 'Il punto di riferimento per gli studenti di Design. Forma ovale caratteristica, ambiente open space.'
    },
    {
        id: 'polimi_bovisa_collina',
        nome: 'La Collina degli Studenti',
        edificio: 'Campus La Masa (Esterno/Interno)',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 150,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Zona Relax', 'Prato esterno', 'Microonde'],
        latitude: 45.5030,
        longitude: 9.1590,
        indirizzo: 'Via La Masa 34, Milano',
        university: 'PoliMi',
        notes: 'Edificio B23. È uno spazio ibrido con vetrate sul verde. Molto "chill" rispetto alle biblioteche.'
    },
    {
        id: 'polimi_bovisa_mn',
        nome: 'Spazi Studio Edificio MN (Ex-Mensa)',
        edificio: 'Edificio MN',
        piano: 0,
        postiDisponibili: 200,
        postiTotali: 300,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Tavoli grandi', 'Rumoroso'],
        latitude: 45.5040,
        longitude: 9.1640,
        indirizzo: 'Via Candiani 72, Milano',
        university: 'PoliMi',
        notes: 'Spesso usato per mangiare e studiare contemporaneamente.'
    },

    // ============================================================
    // AGGIUNTE POLI TERRITORIALI (Dettagli Insider)
    // ============================================================
    {
        id: 'polimi_mantova_salone',
        nome: 'Salone Mantegnesco',
        edificio: 'Polo di Mantova',
        piano: 1,
        postiDisponibili: 50,
        postiTotali: 50,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Affreschi', 'Monumentale', 'Silenzio'],
        latitude: 45.1600,
        longitude: 10.7920,
        indirizzo: 'Piazza d\'Arco 3, Mantova',
        university: 'PoliMi',
        notes: 'Studiare sotto affreschi storici. Un\'esperienza unica del polo di Mantova.'
    },
    {
        id: 'polimi_piacenza_vegezzi',
        nome: 'Padiglione Vegezzi',
        edificio: 'Campus Arata',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 120,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['WiFi', 'Architettura', 'Laboratori'],
        latitude: 45.0480,
        longitude: 9.7050,
        indirizzo: 'Via Scalabrini 113, Piacenza',
        university: 'PoliMi',
        notes: 'Il cuore pulsante della vita studentesca a Piacenza, oltre alla biblioteca.'
    },

    // ============================================================
    // POLO TERRITORIALE DI CREMONA
    // ============================================================
    {
        id: 'polimi_cremona_blu',
        nome: 'Aula Studio "Blu" e "Gialla"',
        edificio: 'Palazzina B',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Aperta Sabato/Domenica'],
        latitude: 45.1400,
        longitude: 10.0300,
        indirizzo: 'Via S.L. Bissolati 34, Cremona',
        university: 'PoliMi',
        notes: 'Aperta anche la Domenica (14:00-20:00), un grande vantaggio.'
    },

    // ============================================================
    // POLO TERRITORIALE DI PIACENZA (Al posto di Lodi)
    // ============================================================
    {
        id: 'polimi_piacenza_neve',
        nome: 'Biblioteca Caserma Neve',
        edificio: 'Campus Arata/Neve',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 150,
        orarioApertura: '09:00',
        orarioChiusura: '19:30',
        servizi: ['WiFi', 'Affluences', 'Ex Caserma'],
        latitude: 45.0480,
        longitude: 9.7050,
        indirizzo: 'Via Scalabrini 113, Piacenza',
        university: 'PoliMi',
        notes: 'Polo principale per Architettura e Ingegneria Meccanica fuori Milano.'
    },

    // ============================================================
    // AGGIUNTE LEONARDO: SPAZI UFFICIALI MANCANTI
    // ============================================================
    {
        id: 'polimi_leo_tensostrutture',
        nome: 'Tensostrutture (Edificio 2)',
        edificio: 'Edificio 2 (Piano Terra)',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 150,
        orarioApertura: '08:00',
        orarioChiusura: '21:00',
        servizi: ['WiFi', 'Spazio aperto', 'Macchinette'],
        latitude: 45.4785,
        longitude: 9.2275,
        indirizzo: 'Piazza Leonardo da Vinci 32, Milano',
        university: 'PoliMi',
        notes: 'Struttura coperta al piano terra dell\'Edificio 2. Ottima per pause studio.'
    },
    {
        id: 'polimi_leo_edificio16c',
        nome: 'Aula Studio Edificio 16C',
        edificio: 'Edificio 16C (Seminterrato)',
        piano: -1,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['WiFi', 'Silenzio', 'Nascosta'],
        latitude: 45.4780,
        longitude: 9.2300,
        indirizzo: 'Via Golgi 40, Milano',
        university: 'PoliMi',
        notes: 'Poco conosciuta, ideale per chi cerca tranquillità.'
    },
    {
        id: 'polimi_leo_golgi22',
        nome: 'Spazi Comuni Edificio 22 (Campus Golgi)',
        edificio: 'Edificio 22',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Atrio', 'Chimica/Materiali'],
        latitude: 45.4770,
        longitude: 9.2310,
        indirizzo: 'Via Golgi 20, Milano',
        university: 'PoliMi',
        notes: 'Nell\'area dei dipartimenti di Chimica e Materiali.'
    },
    {
        id: 'polimi_leo_golgi25',
        nome: 'Spazi Comuni Edificio 25 (Campus Golgi)',
        edificio: 'Edificio 25',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 70,
        orarioApertura: '08:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Bioingegneria'],
        latitude: 45.4772,
        longitude: 9.2315,
        indirizzo: 'Via Golgi 39, Milano',
        university: 'PoliMi',
        notes: 'Zona Bioingegneria, spazi negli atri.'
    },
    {
        id: 'polimi_leo_golgi26',
        nome: 'Spazi Comuni Edificio 26 (Campus Golgi)',
        edificio: 'Edificio 26',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 60,
        orarioApertura: '08:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Elettronica'],
        latitude: 45.4775,
        longitude: 9.2320,
        indirizzo: 'Via Ponzio 34, Milano',
        university: 'PoliMi',
        notes: 'Area dipartimento di Elettronica.'
    },

    // ============================================================
    // AGGIUNTE BOVISA: SPAZI UFFICIALI MANCANTI
    // ============================================================
    {
        id: 'polimi_bovisa_b20',
        nome: 'Aula Studio Edificio B20',
        edificio: 'Edificio B20 (Seminterrato)',
        piano: -1,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Silenzio', 'Prese'],
        latitude: 45.5022,
        longitude: 9.1582,
        indirizzo: 'Via La Masa 34, Milano',
        university: 'PoliMi',
        notes: 'Aula studio dedicata nel seminterrato del B20 (La Masa).'
    },
    {
        id: 'polimi_bovisa_b24',
        nome: 'Aula Studio Edificio B24',
        edificio: 'Edificio B24 (Seminterrato)',
        piano: -1,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Tranquillo'],
        latitude: 45.5028,
        longitude: 9.1588,
        indirizzo: 'Via La Masa 34, Milano',
        university: 'PoliMi',
        notes: 'Alternativa poco affollata nel campus La Masa.'
    },
    {
        id: 'polimi_bovisa_b12',
        nome: 'Spazi Comuni Edificio B12',
        edificio: 'Edificio B12 (Terra/Primo)',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 120,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Tavoli grandi', 'Laboratori vicini'],
        latitude: 45.5024,
        longitude: 9.1584,
        indirizzo: 'Via La Masa 34, Milano',
        university: 'PoliMi',
        notes: 'Spazi comuni distribuiti su due piani.'
    },
    {
        id: 'polimi_bovisa_b2',
        nome: 'Spazi Studio Edificio B2 (Durando)',
        edificio: 'Edificio B2',
        piano: 0,
        postiDisponibili: 150,
        postiTotali: 200,
        orarioApertura: '08:30',
        orarioChiusura: '20:30',
        servizi: ['WiFi', 'Design', 'Moderno'],
        latitude: 45.5052,
        longitude: 9.1655,
        indirizzo: 'Via Candiani 72, Milano',
        university: 'PoliMi',
        notes: 'Spazi comuni su seminterrato, piano terra e secondo piano. Cuore del Design.'
    },
    {
        id: 'polimi_bovisa_b8_aula',
        nome: 'Aula Studio Edificio B8 (Secondo Piano)',
        edificio: 'Edificio B8',
        piano: 2,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Silenzio', 'Vista'],
        latitude: 45.5055,
        longitude: 9.1660,
        indirizzo: 'Via Candiani 72, Milano',
        university: 'PoliMi',
        notes: 'Aula studio al secondo piano, separata dall\'Ovale al piano terra.'
    },

    // ============================================================
    // ULTIMI SPAZI MANCANTI - LEONARDO
    // ============================================================
    {
        id: 'polimi_leo_biblio_storica',
        nome: 'Biblioteca Storica',
        edificio: 'Edificio 9',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 40,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['WiFi', 'Patrimonio Storico', 'Silenzio Assoluto'],
        latitude: 45.4788,
        longitude: 9.2282,
        indirizzo: 'Piazza Leonardo da Vinci 32, Milano',
        university: 'PoliMi',
        notes: 'Raccoglie il patrimonio librario più antico del Politecnico. Ambiente suggestivo.'
    },

    // ============================================================
    // ULTIMI SPAZI MANCANTI - BOVISA
    // ============================================================
    {
        id: 'polimi_bovisa_b1_seminterrato',
        nome: 'Aula Studio B1 (Seminterrato)',
        edificio: 'Edificio B1',
        piano: -1,
        postiDisponibili: 50,
        postiTotali: 70,
        orarioApertura: '08:30',
        orarioChiusura: '20:45',
        servizi: ['WiFi', 'Stessi orari BBC', 'Silenzio'],
        latitude: 45.5050,
        longitude: 9.1650,
        indirizzo: 'Via Candiani 72, Milano',
        university: 'PoliMi',
        notes: 'Nel seminterrato dell\'edificio della Biblioteca Candiani. Segue gli stessi orari.'
    },
    {
        id: 'polimi_bovisa_bl27_studio',
        nome: 'Aula Studio BL27 (Piano Terra)',
        edificio: 'Edificio BL27',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 130,
        orarioApertura: '08:00',
        orarioChiusura: '21:45',
        servizi: ['WiFi', 'Orario Esteso', 'Vicino BBL'],
        latitude: 45.5025,
        longitude: 9.1585,
        indirizzo: 'Via La Masa 34, Milano',
        university: 'PoliMi',
        notes: 'Aula studio dedicata al piano terra. Spazi comuni anche al primo piano.'
    },
    {
        id: 'polimi_bovisa_collina_primo',
        nome: 'Collina degli Studenti (Primo Piano)',
        edificio: 'Edificio B23',
        piano: 1,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi', 'Zona Relax', 'Vista Verde'],
        latitude: 45.5030,
        longitude: 9.1590,
        indirizzo: 'Via La Masa 34, Milano',
        university: 'PoliMi',
        notes: 'Primo piano della Collina, più tranquillo rispetto al piano terra.'
    },
    {
        id: 'polimi_bovisa_b30_meeting',
        nome: 'Meeting Room B30 (Prenotabile)',
        edificio: 'Edificio B30',
        piano: 2,
        postiDisponibili: 20,
        postiTotali: 20,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Prenotazione', 'Lavoro di Gruppo'],
        latitude: 45.5035,
        longitude: 9.1592,
        indirizzo: 'Via La Masa 34, Milano',
        university: 'PoliMi',
        notes: 'Sala riunioni prenotabile per lavori di gruppo. Prenota su Affluences o sito PoliMi.'
    },
    {
        id: 'polimi_bovisa_b24_self',
        nome: 'Self-Service B24 (Spazio Studio)',
        edificio: 'Edificio B24 (Piano Terra)',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '08:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Macchinette', 'Microonde', 'Informale'],
        latitude: 45.5028,
        longitude: 9.1588,
        indirizzo: 'Via La Masa 34, Milano',
        university: 'PoliMi',
        notes: 'Zona self-service con possibilità di mangiare e studiare. Ambiente informale.'
    }
];

export const getDirectionsPolimi = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    // Aggiunta Via Golgi e Via Ponzio per Campus Leonardo (Campus Golgi)
    const isLeonardo = room.indirizzo.includes('Leonardo') || room.indirizzo.includes('Bonardi') || room.indirizzo.includes('Ampère') || room.indirizzo.includes('Golgi') || room.indirizzo.includes('Ponzio');
    const isBovisa = room.indirizzo.includes('Candiani') || room.indirizzo.includes('La Masa');
    const isLecco = room.indirizzo.includes('Lecco');
    const isComo = room.indirizzo.includes('Como');
    const isCremona = room.indirizzo.includes('Cremona');
    const isMantova = room.indirizzo.includes('Mantova');
    const isPiacenza = room.indirizzo.includes('Piacenza');

    // MILANO - CAMPUS LEONARDO (Include Campus Golgi)
    if (isLeonardo) {
        directions.push({
            luogo: 'Stazione Centrale',
            descrizione: `Per Campus Leonardo (Città Studi):
1. Prendi la **Metro M2 (Verde)** direzione Cologno/Gessate.
2. Scendi alla fermata **Piola**.
3. Uscita Via Pacini/Politecnico.
4. Cammina 5 minuti fino a Piazza Leonardo da Vinci.

Per Campus Golgi (Via Golgi/Ponzio):
- Da Piola, prosegui verso Via Golgi (10 min a piedi).
- Alternativa: fermata **Lambrate** (M2) + 10 min a piedi.`,
            mezziPubblici: ['Metro M2 (Piola)', 'Metro M2 (Lambrate)', 'Tram 19, 33'],
            tempoStimato: '15-25 min',
            note: 'Il Campus Golgi ospita Chimica, Materiali, Bioingegneria ed Elettronica.'
        });
    }

    // MILANO - CAMPUS BOVISA
    else if (isBovisa) {
        const isDurando = room.indirizzo.includes('Candiani');
        const isLaMasa = room.indirizzo.includes('La Masa');

        directions.push({
            luogo: 'Milano Centrale / Garibaldi / Cadorna',
            descrizione: `Per Campus Bovisa:
1. Prendi un Treno Suburbano (Passante) che ferma a **Milano Bovisa Politecnico**.
2. Linee: S1, S2, S3, S4, S13 e Malpensa Express.
3. Uscita stazione:
   ${isDurando ? '→ Esci lato SINISTRO per Design (Durando/Candiani).' : ''}
   ${isLaMasa ? '→ Esci lato DESTRO per Ingegneria (La Masa).' : ''}
   ${!isDurando && !isLaMasa ? '→ Lato sinistro: Design (Durando)\n   → Lato destro: Ingegneria (La Masa)' : ''}`,
            mezziPubblici: ['Treno (Passante S1-S4, S13)', 'Malpensa Express'],
            tempoStimato: '8-12 min da Garibaldi/Cadorna',
            note: 'La stazione ti lascia dentro il campus. Da Centrale prendi Passante da P.ta Garibaldi.'
        });
    }

    // POLO COMO
    else if (isComo) {
        directions.push({
            luogo: 'Stazione Como Borghi / Como San Giovanni',
            descrizione: `Per Polo di Como (Via Valleggio):
**Da Como Borghi (consigliata):**
1. Esci dalla stazione e cammina verso sud (5 min).
2. Il campus è in Via Valleggio 11.

**Da Como San Giovanni:**
1. Prendi **Bus C10** direzione Borghi/Ospedale.
2. Scendi alla fermata "Valleggio" o "Politecnico".
3. Oppure cammina (15 min) lungo Via Borgo Vico.

**Da Milano:**
- Treno Regionale da Milano Cadorna (Trenord, 1h).
- Scendi a Como Borghi.`,
            mezziPubblici: ['Treno da Milano Cadorna', 'Bus C10'],
            tempoStimato: '1h treno + 5 min a piedi',
            note: 'Como Borghi è più vicina al campus rispetto a Como San Giovanni.'
        });
    }

    // POLO LECCO
    else if (isLecco) {
        directions.push({
            luogo: 'Stazione FS Lecco',
            descrizione: `Per Campus Lecco (Via Previati):
1. Dalla stazione, esci dall'uscita principale.
2. Cammina verso il centro/zona ospedale (5-10 min).
3. Segui le indicazioni "Politecnico".

**Da Milano:**
- Treno Regionale da Milano Centrale (Dir. Tirano/Sondrio).
- Tempo: circa 45-50 minuti.`,
            mezziPubblici: ['Treno da Milano Centrale', 'A piedi'],
            tempoStimato: '50 min treno + 10 min a piedi',
            note: 'Campus moderno con vista sulle montagne. Treni ogni 30 min circa.'
        });
    }

    // POLO CREMONA
    else if (isCremona) {
        directions.push({
            luogo: 'Stazione FS Cremona',
            descrizione: `Per Campus Cremona (Via Bissolati):
1. Dalla stazione, prendi la **Linea U** (Arriva Italia).
2. Collega direttamente stazione e sedi universitarie.
3. Scendi alla fermata "Via Bissolati".

**Alternativa a piedi:**
- Dalla stazione, circa 20-25 minuti a piedi.

**Da Milano:**
- Treno Regionale da Milano Centrale (via Codogno) o da Rogoredo.`,
            mezziPubblici: ['Linea U bus', 'Treno Regionale'],
            tempoStimato: '1h 10m treno + 10 min bus',
            note: 'Il campus è aperto anche Domenica pomeriggio (14-20)!'
        });
    }

    // POLO MANTOVA
    else if (isMantova) {
        directions.push({
            luogo: 'Stazione FS Mantova',
            descrizione: `Per Campus Mantova (Piazza d'Arco):
1. Dalla stazione, cammina verso il centro storico.
2. Attraversa Piazza Mantegna e Piazza delle Erbe.
3. Piazza d'Arco è all'estremità ovest del centro.

**Da Milano:**
- Treno Regionale da Milano Centrale (via Cremona o Verona).
- Tempo: circa 1h 45 min - 2h.`,
            mezziPubblici: ['A piedi', 'Navetta Centro'],
            tempoStimato: '15 min a piedi dalla stazione',
            note: 'Studiare sotto affreschi rinascimentali in un palazzo storico!'
        });
    }

    // POLO PIACENZA
    else if (isPiacenza) {
        directions.push({
            luogo: 'Stazione FS Piacenza',
            descrizione: `Per Campus Piacenza (Arata/Neve - Via Scalabrini):
1. Dalla stazione (Piazzale Marconi), prendi **Bus Linea 2** o 3.
2. Scendi alla fermata "Via Scalabrini" o "Politecnico".

**A piedi:**
- Circa 20-25 minuti dalla stazione.

**Da Milano:**
- Treno Regionale da Milano Centrale (45-50 min).
- Piacenza è sulla linea Milano-Bologna.`,
            mezziPubblici: ['Bus Linea 2/3', 'Treno Regionale'],
            tempoStimato: '50 min treno + 10 min bus',
            note: 'Sede di Architettura e Ingegneria Meccanica. Ex caserma storica.'
        });
    }

    return directions;
};
