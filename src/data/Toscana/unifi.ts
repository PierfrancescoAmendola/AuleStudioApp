import { StudyRoom, DirectionsFromLocation } from '../../types';

export const unifiRooms: StudyRoom[] = [
    // ============================================================
    // FIRENZE NOVOLI - POLO DELLE SCIENZE SOCIALI (Giuri, Eco, Scienze Pol)
    // ============================================================
    {
        id: 'unifi_novoli_biblio',
        nome: 'Biblioteca di Scienze Sociali',
        edificio: 'Polo di Novoli (Edificio D10)',
        piano: 1,
        postiDisponibili: 120,
        postiTotali: 450,
        orarioApertura: '08:30',
        orarioChiusura: '23:30',
        servizi: ['Apertura Serale', 'Aria Condizionata', 'Silenzio Assoluto', 'Prese PC'],
        latitude: 43.7935,
        longitude: 11.2185,
        indirizzo: 'Via delle Pandette 2, Firenze',
        university: 'UniFi',
        tags: ['Polo Novoli', 'Firenze', '🌙 Serale', '🔇 Silenzio', '🏢 Moderno'],
        notes: 'La biblioteca più imponente di UniFi. Essenziale arrivare presto in sessione. Aperta fino a tardi (23:30), perfetta per i nottambuli.'
    },
    {
        id: 'unifi_novoli_aule_d15',
        nome: 'Aule Studio Edificio D15',
        edificio: 'Polo di Novoli (Edificio D15)',
        piano: 0,
        postiDisponibili: 85,
        postiTotali: 200,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Lavoro di Gruppo', 'Distributori', 'Rumore Tollerato'],
        latitude: 43.7932,
        longitude: 11.2190,
        indirizzo: 'Piazza Ugo di Toscana, Firenze',
        university: 'UniFi',
        tags: ['Polo Novoli', 'Firenze', '🗣️ Lavoro di Gruppo', '☕ Pausa'],
        notes: 'Aule caotiche e dinamiche, usate per preparare presentazioni, fare gruppo e chiacchierare tra una lezione e l\'altra.'
    },
    {
        id: 'unifi_novoli_parco',
        nome: 'Parco San Donato (Spazi Esterni Novoli)',
        edificio: 'Spazi Esterni Polo Novoli',
        piano: 0,
        postiDisponibili: 150,
        postiTotali: 300,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Verde', 'Pausa Pranzo', 'Relax'],
        latitude: 43.7920,
        longitude: 11.2175,
        indirizzo: 'Parco di San Donato, Firenze',
        university: 'UniFi',
        tags: ['Outdoor', 'Firenze', '🌳 Parco', '☀️ Relax'],
        notes: 'Il parco adiacente al polo. Appena esce il sole a Firenze, gli studenti si riversano qui sui prati con i libri e la schiacciata.'
    },

    // ============================================================
    // FIRENZE CENTRO STORICO (Umanistica, Lettere, Architettura)
    // ============================================================
    {
        id: 'unifi_brunelleschi_biblio',
        nome: 'Biblioteca Umanistica (Brunelleschi)',
        edificio: 'Plesso Brunelleschi',
        piano: 1,
        postiDisponibili: 40,
        postiTotali: 150,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Architettura Storica', 'Soffitti a Volta', 'Silenzio'],
        latitude: 43.7745,
        longitude: 11.2610,
        indirizzo: 'Piazza Filippo Brunelleschi 4, Firenze',
        university: 'UniFi',
        tags: ['Centro Storico', 'Firenze', '🏛️ Rinascimento', '🔇 Silenzio'],
        notes: 'Studiare dentro un chiostro rinascimentale a due passi dal Duomo. Atmosfera unica, ma tavoli antichi con poche prese di corrente.'
    },
    {
        id: 'unifi_capponi_biblio',
        nome: 'Sala Lettura Via Capponi (Storia e Filosofia)',
        edificio: 'Plesso Capponi',
        piano: 0,
        postiDisponibili: 25,
        postiTotali: 60,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Fondi Antichi', 'Rigoroso Silenzio'],
        latitude: 43.7780,
        longitude: 11.2645,
        indirizzo: 'Via Gino Capponi 9, Firenze',
        university: 'UniFi',
        tags: ['Centro Storico', 'Firenze', '📖 Teoria', '🔇 Silenzio'],
        notes: 'Nascosta e meno affollata di Brunelleschi. Perfetta per chi cerca la concentrazione estrema in centro.'
    },
    {
        id: 'unifi_architettura_santateresa',
        nome: 'Biblioteca di Architettura (Santa Teresa)',
        edificio: 'Ex Complesso di Santa Teresa',
        piano: 1,
        postiDisponibili: 35,
        postiTotali: 100,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['Tavoli da Disegno', 'Luce Naturale', 'Archivio'],
        latitude: 43.7705,
        longitude: 11.2680,
        indirizzo: 'Via della Mattonaia 8, Firenze',
        university: 'UniFi',
        tags: ['Architettura', 'Firenze', '📐 Tavoli Grandi', '☀️ Luminosa'],
        notes: 'Grandi spazi per le tavole degli architetti. Ex carcere femminile riqualificato magnificamente.'
    },
    {
        id: 'unifi_mensa_apollonia',
        nome: 'Aule Studio Mensa Sant\'Apollonia',
        edificio: 'Plesso Sant\'Apollonia',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 150,
        orarioApertura: '10:00',
        orarioChiusura: '18:00',
        servizi: ['Mensa Centrale', 'Lavoro di Gruppo'],
        latitude: 43.7775,
        longitude: 11.2565,
        indirizzo: 'Via Santa Reparata 12, Firenze',
        university: 'UniFi',
        tags: ['Mensa', 'Centro Storico', '🥪 Pausa Pranzo', '🗣️ Gruppo'],
        notes: 'La mensa storica del centro. Fuori dall\'orario dei pasti è un punto di ritrovo vitale per chi studia nelle facoltà umanistiche.'
    },

    // ============================================================
    // FIRENZE CAREGGI / MORGAGNI (Medicina, Professioni Sanitarie, STEM)
    // ============================================================
    {
        id: 'unifi_careggi_biomedica',
        nome: 'Biblioteca Biomedica',
        edificio: 'Polo Biomedico Careggi',
        piano: 1,
        postiDisponibili: 50,
        postiTotali: 200,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Testi Medici', 'Silenzio', 'Prese Elettriche'],
        latitude: 43.8050,
        longitude: 11.2460,
        indirizzo: 'Viale G.B. Morgagni 85, Firenze',
        university: 'UniFi',
        tags: ['Careggi', 'Firenze', '🏥 Ospedale', '🔇 Silenzio'],
        notes: 'L\'hub per i futuri medici e infermieri. Ambiente clinico e studio molto intenso. Attaccata all\'Ospedale di Careggi.'
    },
    {
        id: 'unifi_morgagni_matematica',
        nome: 'Biblioteca Scienze Matematiche e Fisiche',
        edificio: 'Plesso Viale Morgagni',
        piano: 1,
        postiDisponibili: 40,
        postiTotali: 120,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Lavagne a Gesso', 'Tranquillità'],
        latitude: 43.8035,
        longitude: 11.2475,
        indirizzo: 'Viale G.B. Morgagni 67/A, Firenze',
        university: 'UniFi',
        tags: ['Morgagni', 'Firenze', '📝 Lavagne', '🔇 Silenzio'],
        notes: 'Regno di matematici e fisici. Troverai lavagne sparse dove gli studenti risolvono equazioni in gruppo.'
    },
    {
        id: 'unifi_morgagni_ingegneria',
        nome: 'Aule Studio Centro Didattico Morgagni',
        edificio: 'Plesso Morgagni',
        piano: 0,
        postiDisponibili: 70,
        postiTotali: 250,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Aule Moderne', 'Lavoro di Gruppo', 'Macchinette'],
        latitude: 43.8040,
        longitude: 11.2470,
        indirizzo: 'Viale G.B. Morgagni 40, Firenze',
        university: 'UniFi',
        tags: ['Ingegneria', 'Morgagni', '🗣️ Gruppo', '💻 Prese PC'],
        notes: 'Mega-struttura didattica. Le aule aperte al piano terra sono il crocevia di migliaia di studenti STEM.'
    },

    // ============================================================
    // SESTO FIORENTINO (Polo Scientifico - Chimica, Biologia, Fisica)
    // ============================================================
    {
        id: 'unifi_sesto_biblio_scienze',
        nome: 'Biblioteca Polo Scientifico',
        edificio: 'Edificio della Biblioteca Centrale (Sesto)',
        piano: 1,
        postiDisponibili: 90,
        postiTotali: 300,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Isolamento', 'Testi Scientifici Avanzati', 'Luminosità'],
        latitude: 43.8185,
        longitude: 11.1925,
        indirizzo: 'Via B. Rossi 15, Sesto Fiorentino (FI)',
        university: 'UniFi - Sesto F.',
        tags: ['Polo Scientifico', 'Sesto F.', '🔬 Ricerca', '🔇 Silenzio'],
        notes: 'Struttura immensa e moderna. Essendo lontana dal centro di Firenze, l\'atmosfera è molto focalizzata sulla ricerca pura.'
    },
    {
        id: 'unifi_sesto_blocco_aule',
        nome: 'Aule Lavoro di Gruppo (Blocco Aule)',
        edificio: 'Polo Scientifico Sesto',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 150,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['Lavagne Grandi', 'Spazio Aperto', 'Macchinette'],
        latitude: 43.8190,
        longitude: 11.1930,
        indirizzo: 'Via B. Rossi, Sesto Fiorentino (FI)',
        university: 'UniFi - Sesto F.',
        tags: ['Polo Scientifico', 'Sesto F.', '🗣️ Gruppo', '📝 Lavagne'],
        notes: 'Qui biologi e chimici ripassano prima dei laboratori. Il brusio è costante e incoraggiato.'
    },
    {
        id: 'unifi_sesto_prato',
        nome: 'Prato Centrale del Polo Scientifico',
        edificio: 'Spazi Esterni Sesto',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 200,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Ampi Spazi', 'Sole', 'Pausa Pranzo'],
        latitude: 43.8188,
        longitude: 11.1928,
        indirizzo: 'Campus di Sesto Fiorentino',
        university: 'UniFi - Sesto F.',
        tags: ['Outdoor', 'Sesto F.', '☀️ Sole', '🥪 Pausa'],
        notes: 'Il campus ha ispirazioni americane, con grandi spazi verdi ideali per mangiare o rilassarsi al sole.'
    },

    // ============================================================
    // PRATO - POLO UNIVERSITARIO "CITTÀ DI PRATO" (PIN)
    // ============================================================
    {
        id: 'unifi_prato_pin_biblio',
        nome: 'Biblioteca Polo Universitario PIN',
        edificio: 'Polo PIN Prato',
        piano: 1,
        postiDisponibili: 35,
        postiTotali: 100,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Silenzio', 'Prese PC', 'Vicinanza Stazione'],
        latitude: 43.8820,
        longitude: 11.1030,
        indirizzo: 'Piazza Ciardi 25, Prato',
        university: 'UniFi - PIN Prato',
        tags: ['PIN', 'Prato', '🚉 Comodo Treni', '🔇 Silenzio'],
        notes: 'Consorzio strategico di UniFi a Prato (Economia aziendale, Ingegneria dell\'Informazione). Davanti alla stazione di Prato Porta al Serraglio.'
    },
    {
        id: 'unifi_prato_pin_aule',
        nome: 'Aule Studio e Progetto PIN',
        edificio: 'Polo PIN Prato',
        piano: 0,
        postiDisponibili: 25,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['Lavoro di Gruppo', 'Distributori'],
        latitude: 43.8822,
        longitude: 11.1032,
        indirizzo: 'Piazza Ciardi 25, Prato',
        university: 'UniFi - PIN Prato',
        tags: ['PIN', 'Prato', '🗣️ Gruppo', '💻 Informatica'],
        notes: 'Molto frequentate dagli studenti di Ingegneria Gestionale e Informatica per sviluppare progetti software insieme.'
    },

    // ============================================================
    // EMPOLI E SCANDICCI (Poli Decentrati e Design)
    // ============================================================
    {
        id: 'unifi_empoli_polo',
        nome: 'Sale Lettura Polo di Empoli',
        edificio: 'Polo Didattico Empoli',
        piano: 1,
        postiDisponibili: 20,
        postiTotali: 60,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['Silenzio', 'Professioni Sanitarie'],
        latitude: 43.7180,
        longitude: 10.9450,
        indirizzo: 'Piazza della Vittoria / Via R. Sanzio, Empoli (FI)',
        university: 'UniFi - Empoli',
        tags: ['Polo Empoli', 'Empoli', '🏥 Sanità', '🔇 Silenzio'],
        notes: 'Piccolo polo ma fondamentale per le professioni sanitarie e il servizio sociale. Ambiente raccolto.'
    },
    {
        id: 'unifi_scandicci_design',
        nome: 'Laboratori Design Campus Scandicci',
        edificio: 'Plesso Design',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 80,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['Modelli 3D', 'Tavoli Grandi', 'Sporco Tollerato'],
        latitude: 43.7540,
        longitude: 11.1850,
        indirizzo: 'Via Sandro Pertini, Scandicci (FI)',
        university: 'UniFi - Scandicci',
        tags: ['Design', 'Scandicci', '📐 Progettazione', '🧱 Laboratorio'],
        notes: 'Il distretto creativo dei designer (Calenzano/Scandicci). Frenetico, rumoroso, pieno di prototipi in legno e plastica.'
    },

    // ============================================================
    // PISTOIA - POLO UNIVERSITARIO (UNISER)
    // ============================================================
    {
        id: 'unifi_pistoia_uniser_biblio',
        nome: 'Biblioteca Polo Uniser Pistoia',
        edificio: 'Uniser Pistoia',
        piano: 1,
        postiDisponibili: 25,
        postiTotali: 70,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Scienze Turistiche', 'Infermieristica', 'Silenzio'],
        latitude: 43.9310,
        longitude: 10.9160,
        indirizzo: 'Via Sandro Pertini 358, Pistoia',
        university: 'UniFi - Pistoia',
        tags: ['Uniser', 'Pistoia', '🔇 Silenzio'],
        notes: 'Polo tranquillo e ben organizzato, gestito dal consorzio Uniser. Accoglie gli studenti di Agraria (Vivaio) e Turismo.'
    },
    {
        id: 'unifi_pistoia_uniser_aule',
        nome: 'Aree Studio e Gruppo Uniser',
        edificio: 'Uniser Pistoia',
        piano: 0,
        postiDisponibili: 20,
        postiTotali: 50,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['Lavoro di Gruppo', 'Distributori'],
        latitude: 43.9312,
        longitude: 10.9162,
        indirizzo: 'Via Sandro Pertini, Pistoia',
        university: 'UniFi - Pistoia',
        tags: ['Uniser', 'Pistoia', '🗣️ Gruppo'],
        notes: 'Ideale per chiacchierare in pausa o ripassare in compagnia senza disturbare la sala lettura.'
    },

    // ============================================================
    // FIRENZE - SPAZI DSU TOSCANA / COMUNALI
    // ============================================================
    {
        id: 'unifi_oblate',
        nome: 'Biblioteca delle Oblate',
        edificio: 'Ex Convento delle Oblate',
        piano: 1,
        postiDisponibili: 80,
        postiTotali: 200,
        orarioApertura: '09:00',
        orarioChiusura: '24:00',
        servizi: ['WiFi Gratuito', 'Terrazza Panoramica con vista Duomo', 'Caffetteria', 'Sezione Bambini', 'Apertura Serale'],
        latitude: 43.7730,
        longitude: 11.2590,
        indirizzo: 'Via dell\'Oriuolo 24, 50122 Firenze',
        university: 'UniFi',
        occupancy_rate: 'Molto Alto',
        extendedHours: true,
        tags: ['Comunale', 'Centro Storico', 'Firenze', '🌙 Serale', '☕ Ristoro', '🏛️ Panorama'],
        notes: 'Gestita dal Comune di Firenze. Probabilmente lo spazio di studio più amato dagli universitari fiorentini. Terrazza con vista mozzafiato sul Duomo. Aperta fino a mezzanotte. Affollatissima in sessione.'
    },
    {
        id: 'unifi_dsu_calamandrei',
        nome: 'Sala Studio DSU Residenza Calamandrei',
        edificio: 'Residenza Calamandrei (DSU Toscana)',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 100,
        orarioApertura: '08:00',
        orarioChiusura: '01:00',
        servizi: ['WiFi Gratuito', 'Accesso Libero', 'Aperta fino all\'1:00', 'Climatizzazione'],
        latitude: 43.7870,
        longitude: 11.2430,
        indirizzo: 'Viale G. Morgagni 51, 50134 Firenze',
        university: 'UniFi',
        occupancy_rate: 'Alto',
        extendedHours: true,
        tags: ['DSU Toscana', 'Firenze', '🌙 Notturna', '❄️ Climatizzato'],
        notes: 'Gestita dal DSU Toscana. Accesso libero per tutti gli studenti (non solo residenti). Aperta ogni giorno fino all\'1:00 di notte. Perfetta per i nottambuli, specialmente in sessione.'
    }
];

export const getDirectionsUniFi = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];
    const id = room.id.toLowerCase();

    // ============================================================
    // FIRENZE NOVOLI
    // ============================================================
    if (id.includes('novoli_biblio')) {
        directions.push({
            luogo: 'Stazione SMN / Firenze Centro',
            descrizione: `La Biblioteca di Scienze Sociali è di fronte alla fermata della Tramvia.
1. **Tram T2**: Da Piazza dell'Unità (Stazione SMN) prendi la Linea T2 (direz. Peretola) e scendi esattamente a "San Donato - Università". La biblioteca è il cubo rosso alla tua destra.
2. **Auto**: Meglio evitare, la zona è super trafficata. Il parcheggio sotterraneo San Donato costa molto, i posti bianchi sono rari.`,
            mezziPubblici: ['Tram T2 (San Donato)', 'Bici'],
            tempoStimato: '15 min da SMN',
            note: 'Fermata della Tramvia vicinissima.'
        });
    } else if (id.includes('novoli_aule_d15') || id.includes('novoli_parco')) {
        directions.push({
            luogo: 'Polo di Novoli',
            descrizione: `Le aule e il parco sono al centro del Campus di Novoli.
1. **Tram T2**: Scendi a "San Donato - Università" ed entra nel viottolo principale tra gli edifici, supera la biblioteca e arrivi alla piazza centrale (Edificio D15).
2. **Bici**: Pista ciclabile comodissima dal centro (direzione Viale Redi) fino al parco di San Donato.`,
            mezziPubblici: ['Tram T2', 'Bici'],
            tempoStimato: '18 min da Centro',
            note: 'Ottimo prato, arrivaci in bici o Tram.'
        });
    }

    // ============================================================
    // CENTRO STORICO (Brunelleschi, Capponi, Architettura)
    // ============================================================
    else if (id.includes('brunelleschi') || id.includes('mensa_apollonia')) {
        directions.push({
            luogo: 'Piazza San Marco / Duomo',
            descrizione: `Sei in pieno centro pedonale. La ZTL è attiva tutto il giorno!
1. **A piedi da SMN**: Dalla Stazione vai verso il Duomo, poi prendi Via dei Servi o Via Ginori. Sono circa 15 minuti a piedi.
2. **Bus Urbani**: Le linee C1 e C2 (bussini) passano in zona. La fermata Santa Maria Nuova è la più comoda per Brunelleschi.`,
            mezziPubblici: ['A piedi', 'Bus C1/C2'],
            tempoStimato: '15 min a piedi da SMN',
            note: 'Centro Storico. Auto e scooter off-limits (ZTL).'
        });
    } else if (id.includes('capponi')) {
        directions.push({
            luogo: 'Piazza SS. Annunziata',
            descrizione: `Sede situata in Via Gino Capponi, parallela affollata di Palazzo Medici.
1. **Bus ATAF**: Linee 14, 23 o C1 fino a Piazza San Marco, poi 3 minuti a piedi.
2. **Bici**: Legale pedalare nell'isola pedonale di San Marco ma fai attenzione a tram e pedoni.`,
            mezziPubblici: ['Bus 14/23', 'A piedi'],
            tempoStimato: '10 min da P.za San Marco',
            note: 'Parcheggio impossibile. Vai coi mezzi.'
        });
    } else if (id.includes('architettura_santateresa')) {
        directions.push({
            luogo: 'Piazza Beccaria / Sant\'Ambrogio',
            descrizione: `L'ex carcere è nella zona di Sant'Ambrogio.
1. **Bus**: Dalla Stazione SMN prendi la Linea 14 (A, B o C) e scendi in Via della Mattonaia o Piazza Ghiberti.
2. **Auto**: Fuori dalla ZTL c'è il Parcheggio Murate/Sant'Ambrogio (a pagamento).`,
            mezziPubblici: ['Bus 14', 'Auto'],
            tempoStimato: '20 min da SMN',
            note: 'Vicino al mercato Sant\'Ambrogio.'
        });
    }

    // ============================================================
    // CAREGGI / MORGAGNI
    // ============================================================
    else if (id.includes('careggi_biomedica')) {
        directions.push({
            luogo: 'Stazione Firenze Rifredi / SMN',
            descrizione: `La Biblioteca è incastonata nell'imbuto ospedaliero di Careggi.
1. **Tram T1**: Da SMN (fermata Alamanni - Stazione) fino al capolinea "Careggi - Ospedale". Poi 5 minuti a piedi nella cittadella sanitaria.
2. **Rifredi FS**: Scendi al treno a Rifredi e cammina per 15 min attraversando Viale Morgagni.`,
            mezziPubblici: ['Tram T1', 'Treno FS'],
            tempoStimato: '25 min dal Centro',
            note: 'Il capolinea della T1 è l\'opzione migliore.'
        });
    } else if (id.includes('morgagni_matematica') || id.includes('morgagni_ingegneria')) {
        directions.push({
            luogo: 'Viale Morgagni',
            descrizione: `Fronte Polo Didattico e vicino ai dipartimenti matematici.
1. **Tram T1**: Fermata "Morgagni - Università". Scesi dal tram sei letteralmente al cancello del polo!
2. **Bici**: Pista ciclabile protetta lungo Viale Morgagni. Molto veloce.`,
            mezziPubblici: ['Tram T1 (Morgagni)', 'Bici'],
            tempoStimato: '20 min dal Centro',
            note: 'La Tramvia ferma davanti all\'ingresso.'
        });
    }

    // ============================================================
    // SESTO FIORENTINO
    // ============================================================
    else if (id.includes('sesto')) {
        directions.push({
            luogo: 'Firenze Rifredi / Stazione Zambra',
            descrizione: `Il Polo Scientifico di Sesto è isolato.
1. **Treno Regionale**: Da SMN o Rifredi prendi il treno verso Prato/Pistoia e scendi alla stazioncina "Zambra". Poi 10 minuti a piedi sicuri lungo il viottolo dedicato.
2. **Bus**: La linea 59 (Autolinee Toscane) da Rifredi ti porta dritto nel campus, ma è meno frequente.
3. **Bici**: Ottima la ciclabile che da Novoli porta fino al campus!`,
            mezziPubblici: ['Treno (Zambra)', 'Bus 59', 'Bici'],
            tempoStimato: '35 min da SMN',
            note: 'Il treno per Zambra evita il traffico.'
        });
    }

    // ============================================================
    // PRATO PIN
    // ============================================================
    else if (id.includes('prato')) {
        directions.push({
            luogo: 'Prato Porta al Serraglio',
            descrizione: `Il PIN è in Piazza Ciardi, adiacente ai binari del treno.
1. **Treno Regionale da Firenze**: Sali su qualsiasi treno per Viareggio, Lucca o Pistoia. **Non** scendere a Prato Centrale, ma alla successiva "Prato Porta al Serraglio"! Esci dalla stazione e ci sei.
2. **Auto**: Parcheggio a pagamento Piazza del Mercato Nuovo, a 5 minuti a piedi.`,
            mezziPubblici: ['Treno (Porta Serraglio)'],
            tempoStimato: '25 min da SMN',
            note: 'Treno comodissimo. Sede sui binari.'
        });
    }

    // ============================================================
    // SCANDICCI
    // ============================================================
    else if (id.includes('scandicci')) {
        directions.push({
            luogo: 'Tramvia Firenze-Scandicci',
            descrizione: `Plesso Design facilmente accessibile dal capoluogo.
1. **Tram T1**: Direzione Villa Costanza. Scendi a "Resistenza" o "De Andrè", farai due passi a piedi per arrivare al campus.
2. **Superstrada SGC FI-PI-LI**: Uscita Scandicci per chi guida. Parcheggi vicini gratuiti disponibili.`,
            mezziPubblici: ['Tram T1', 'Auto'],
            tempoStimato: '25 min da Firenze',
            note: 'Collegato stupendamente dalla tramvia.'
        });
    }

    // ============================================================
    // EMPOLI / PISTOIA
    // ============================================================
    else if (id.includes('empoli')) {
        directions.push({
            luogo: 'Stazione FS Empoli',
            descrizione: `Il polo ospita corsi sanitari, vicino al centro empolese.
1. **Treno Regionale**: Da Pisa Centrale o Firenze SMN i treni per Empoli sono frequentissimi (ogni 15-20 min). Poi cammina per 15 min o offri servizio bus circolare locale.`,
            mezziPubblici: ['Treno'],
            tempoStimato: '30 min in Treno',
            note: 'A piedi dalla stazione Empoli FS.'
        });
    } else if (id.includes('pistoia')) {
        directions.push({
            luogo: 'Uniser Pistoia',
            descrizione: `1. **Treno per Pistoia**: Dalla stazione FS cammina per circa 15-20 minuti. 
2. **Auto**: Sede munita di comodissimi parcheggi gratuiti attorno via Pertini! Perfetto per i pendolari automuniti.`,
            mezziPubblici: ['Auto', 'Treno'],
            tempoStimato: '45 min da Firenze',
            note: 'Consigliata l\'auto per i pendolari.'
        });
    }
    // BIBLIOTECA DELLE OBLATE (Comunale)
    else if (id.includes('oblate')) {
        directions.push({
            luogo: 'Piazza del Duomo / Stazione SMN',
            descrizione: `La Biblioteca delle Oblate è a pochi passi dal Duomo.\n1. **A piedi da SMN**: 10 min percorrendo Via de' Panzani e Via dei Calzaiuoli.\n2. **Bus C1/C2**: Fermata \"Santa Maria Nuova\", la biblioteca è nella via successiva.\n3. **In arrivo in Tram**: T2 fermata \"Unità\", poi 12 min a piedi.`,
            mezziPubblici: ['A piedi', 'Bus C1/C2'],
            tempoStimato: '10 min da SMN',
            note: 'Centro storico, ZTL attiva. Non portare l\'auto.'
        });
    }
    // DSU CALAMANDREI (Zona Careggi)
    else if (id.includes('dsu_calamandrei')) {
        directions.push({
            luogo: 'Viale Morgagni / Careggi',
            descrizione: `La Residenza Calamandrei è in zona Careggi (Viale Morgagni).\n1. **Tram T1**: Fermata \"Morgagni - Università\", poi 3 min a piedi.\n2. **Da Rifredi FS**: 10 min a piedi lungo Viale Morgagni.\n3. **Auto**: Parcheggi su Viale Morgagni (strisce blu) o Parcheggio Careggi.`,
            mezziPubblici: ['Tram T1 (Morgagni)', 'Treno (Rifredi)'],
            tempoStimato: '20 min da Centro',
            note: 'Aperta fino all\'1:00. Accesso libero per tutti gli studenti.'
        });
    } else {
        directions.push({
            luogo: 'Polo Universitario Fiorentino',
            descrizione: 'Questa è una sede universitaria fiorentina. Verifica la posizione esatta con il tuo navigatore.',
            mezziPubblici: ['Vari'],
            tempoStimato: 'Variabile',
            note: 'Controlla l\'app At-Bus (Autolinee Toscane) per i mezzi pubblici.'
        });
    }

    return directions;
};
