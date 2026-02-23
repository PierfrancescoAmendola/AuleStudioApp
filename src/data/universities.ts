import { University } from '../types';
import { studyRoomsData as federicoIIRooms } from './Campania/federicoII';
import { studyRoomsData as vanvitelliRooms } from './Campania/vanvitelli';
import { parthenopeRooms } from './Campania/parthenope';
import { orientaleRooms } from './Campania/orientale';
import { unisaRooms } from './Campania/unisa';
import { unisannioRooms } from './Campania/unisannio';
import { benincasaRooms } from './Campania/benincasa';
import { sapienzaRooms } from './Lazio/sapienza';
import { torVergataRooms } from './Lazio/torvergata';
import { romaTreRooms } from './Lazio/romatre';
import { foroItalicoRooms } from './Lazio/foroItalico';
import { unitusRooms } from './Lazio/unitus';
import { unicasRooms } from './Lazio/unicas';
import { unimiRooms } from './Lombardia/unimi';
import { polimiRooms } from './Lombardia/polimi';
import { unimibRooms } from './Lombardia/unimib';
import { unipvRooms } from './Lombardia/unipv';
import { unibsRooms } from './Lombardia/unibs';
import { unibgRooms } from './Lombardia/unibg';
import { uninsubriaRooms } from './Lombardia/uninsubria';
import { iussRooms } from './Lombardia/iuss';
import { uniboRooms } from './EmiliaRomagna/unibo';
import { unifeRooms } from './EmiliaRomagna/unife';
import { unimoreRooms } from './EmiliaRomagna/unimore';
import { uniprRooms } from './EmiliaRomagna/unipr';
import { unitsRooms } from './FriuliVeneziaGiulia/unitsRooms';
import { uniudRooms } from './FriuliVeneziaGiulia/uniudRooms';
import { triesteEliteRooms } from './FriuliVeneziaGiulia/triesteEliteRooms';
import { afamFvgRooms } from './FriuliVeneziaGiulia/afamFvgRooms';
import { univaqRooms } from './Abruzzo/univaq';
import { udaRooms } from './Abruzzo/uda';
import { uniteRooms } from './Abruzzo/unite';
import { gssiRooms } from './Abruzzo/gssi';
import { afamRooms } from './Abruzzo/afam';
import { unimolRooms, unimolCampobassoRooms, unimolTermoliRooms, unimolPescheRooms, unimolIserniaRooms } from './Molise/unimol';
import { unibasRooms } from './Basilicata/unibas';
import { afamBasilicataRooms } from './Basilicata/afamBasilicata';
import { unicalRooms } from './Calabria/unical';
import { umgRooms } from './Calabria/umg';
import { unircRooms } from './Calabria/unirc';
import { afamCalabriaRooms } from './Calabria/afamCalabria';
import { unigeRooms } from './Liguria/unigeRooms';
import { unigeSavonaRooms } from './Liguria/unigeSavonaRooms';
import { unigeImperiaRooms } from './Liguria/unigeImperiaRooms';
import { unigeSpeziaRooms } from './Liguria/unigeSpeziaRooms';
import { unigeHealthDecentralizedRooms } from './Liguria/unigeHealthRooms';
import { afamLiguriaRooms } from './Liguria/afamLiguriaRooms';
import { univpmRooms, getDirectionsUNIVPM } from './Marche/univpm';
import { uniurbRooms, getDirectionsUniUrb } from './Marche/uniurb';
import { unimcRooms, getDirectionsUniMC } from './Marche/unimc';
import { unicamRooms, getDirectionsUniCam } from './Marche/unicam';
import { afamMarcheRooms, getDirectionsAFAM_Marche } from './Marche/afamMarche';
import { unitoRooms } from './Piemonte/unito';
import { politoRooms } from './Piemonte/polito';
import { upoRooms } from './Piemonte/upo';
import { afamPiemonteRooms } from './Piemonte/afamPiemonte';
import { unibaRooms } from './Puglia/uniba';
import { polibaRooms } from './Puglia/poliba';
import { unisalentoRooms } from './Puglia/unisalento';
import { unifgRooms } from './Puglia/unifg';
import { afamPugliaRooms } from './Puglia/afamPuglia';






// Centralized university registry
export const universities: University[] = [
    {
        id: 'afam',
        name: 'AFAM',
        fullName: 'Accademie e Conservatori Abruzzo (ABAQ, Casella, Braga, ISIA)',
        city: "L'Aquila / Pescara / Teramo",
        regionName: 'Abruzzo',
        region: {
            latitude: 42.35,
            longitude: 13.90,
            latitudeDelta: 1.0,
            longitudeDelta: 1.5,
        },
        studyRooms: afamRooms,
        availableFilters: [
            'Tutti',
            "L'Aquila",
            'Pescara',
            'Teramo',
            'Strumenti'
        ],
        color: '#7c3aed', // Violet-600
        darkColor: '#4c1d95', // Violet-900
    },
    {
        id: 'gssi',
        name: 'GSSI',
        fullName: 'Gran Sasso Science Institute',
        city: "L'Aquila",
        regionName: 'Abruzzo',
        region: {
            latitude: 42.347,
            longitude: 13.402,
            latitudeDelta: 0.04,
            longitudeDelta: 0.04,
        },
        studyRooms: gssiRooms,
        availableFilters: [
            'Tutti',
            'Main',
            'Outdoor'
        ],
        color: '#0f172a', // Slate-900 vibe research
        darkColor: '#020617',
    },
    {
        id: 'unite',
        name: 'UniTe',
        fullName: 'Università degli Studi di Teramo',
        city: 'Teramo',
        regionName: 'Abruzzo',
        region: {
            latitude: 42.66,
            longitude: 13.71,
            latitudeDelta: 0.35,
            longitudeDelta: 0.45,
        },
        studyRooms: uniteRooms,
        availableFilters: [
            'Tutti',
            'Campus',
            'Veterinaria',
            'Centro'
        ],
        color: '#f97316', // Orange-500
        darkColor: '#c2410c', // Orange-700
    },
    {
        id: 'uda',
        name: "Ud'A",
        fullName: "Università degli Studi 'G. d'Annunzio' Chieti-Pescara",
        city: 'Chieti / Pescara',
        regionName: 'Abruzzo',
        region: {
            latitude: 42.40,
            longitude: 14.22,
            latitudeDelta: 0.7,
            longitudeDelta: 0.9,
        },
        studyRooms: udaRooms,
        availableFilters: [
            'Tutti',
            'Chieti',
            'Chieti Alta',
            'Pescara',
            'Vasto'
        ],
        color: '#0ea5e9', // Sky-500
        darkColor: '#0369a1', // Sky-700
    },
    {
        id: 'univaq',
        name: 'UnivAQ',
        fullName: "Università degli Studi dell'Aquila",
        city: "L'Aquila",
        regionName: 'Abruzzo',
        region: {
            latitude: 42.3570,
            longitude: 13.3810,
            latitudeDelta: 0.25,
            longitudeDelta: 0.25,
        },
        studyRooms: univaqRooms,
        availableFilters: [
            'Tutti',
            'Coppito',
            'Roio',
            'Centro',
            'ADSU'
        ],
        color: '#0ea5e9', // Sky-500
        darkColor: '#0369a1', // Sky-700
    },
    {
        id: 'unimol_cb',
        name: 'UniMol CB',
        fullName: 'UniMol - Campobasso',
        city: 'Campobasso',
        regionName: 'Molise',
        region: {
            latitude: 41.562150,
            longitude: 14.667536,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
        },
        studyRooms: unimolCampobassoRooms,
        availableFilters: [
            'Tutti',
            'Vazzieri',
            'Tappino (Medicina)',
            'Economia',
            'Campobasso (Albino)'
        ],
        color: '#be123c', // Rose-700
        darkColor: '#881337', // Rose-900
    },
    {
        id: 'unimol_termoli',
        name: 'UniMol Termoli',
        fullName: 'UniMol - Termoli',
        city: 'Termoli',
        regionName: 'Molise',
        region: {
            latitude: 42.004820,
            longitude: 14.993450,
            latitudeDelta: 0.03,
            longitudeDelta: 0.03,
        },
        studyRooms: unimolTermoliRooms,
        availableFilters: [
            'Tutti',
            'Polo Universitario',
            'Biblioteca Civica',
            'Borgo Antico'
        ],
        color: '#0ea5e9', // Sky-500 (Sea vibe)
        darkColor: '#0369a1', // Sky-700
    },
    {
        id: 'unimol_isernia_pesche',
        name: 'UniMol Isernia',
        fullName: 'UniMol - Isernia/Pesche',
        city: 'Isernia / Pesche',
        regionName: 'Molise',
        region: {
            latitude: 41.6050,
            longitude: 14.2500, // Centered between Isernia and Pesche
            latitudeDelta: 0.07,
            longitudeDelta: 0.07,
        },
        studyRooms: [...unimolPescheRooms, ...unimolIserniaRooms],
        availableFilters: [
            'Tutti',
            'Pesche (Agraria)',
            'Isernia (Sede)',
            'Isernia (Biblio Comunale)',
            'Museo Paleolitico'
        ],
        color: '#16a34a', // Green-600 (Nature/Bioscienze vibe)
        darkColor: '#14532d', // Green-900
    },
    {
        id: 'unibas',
        name: 'Unibas',
        fullName: "Università degli Studi della Basilicata",
        city: 'Potenza / Matera',
        regionName: 'Basilicata',
        region: {
            latitude: 40.65,
            longitude: 16.20,
            latitudeDelta: 1.0,
            longitudeDelta: 1.2,
        },
        studyRooms: unibasRooms,
        availableFilters: [
            'Tutti',
            'Macchia',
            'Francioso',
            'Gallitello',
            'Matera',
            'ADSU'
        ],
        color: '#22c55e', // Green-500
        darkColor: '#15803d', // Green-700
    },
    {
        id: 'afamBasilicata',
        name: 'AFAM',
        fullName: 'Accademie e Conservatori Basilicata (Gesualdo da Venosa, E.R. Duni, IDM)',
        city: 'Potenza / Matera',
        regionName: 'Basilicata',
        region: {
            latitude: 40.65,
            longitude: 16.20,
            latitudeDelta: 1.0,
            longitudeDelta: 1.2,
        },
        studyRooms: afamBasilicataRooms,
        availableFilters: [
            'Tutti',
            'Potenza',
            'Matera',
            'Design',
            'Strumenti'
        ],
        color: '#7c3aed', // Violet-600
        darkColor: '#4c1d95', // Violet-900
    },
    {
        id: 'unical',
        name: 'UniCal',
        fullName: 'Università della Calabria',
        city: 'Rende / Cosenza',
        regionName: 'Calabria',
        region: {
            latitude: 39.36,
            longitude: 16.23,
            latitudeDelta: 0.3,
            longitudeDelta: 0.3,
        },
        studyRooms: unicalRooms,
        availableFilters: [
            'Tutti',
            'Biblioteche',
            'Umanistica',
            'Scientifica',
            'Economia',
            'Medicina',
            'Residenziale'
        ],
        color: '#dc2626', // Red-600 (Rosso Fuoco)
        darkColor: '#991b1b', // Red-900
    },
    {
        id: 'umg',
        name: 'UMG',
        fullName: 'Università degli Studi Magna Græcia di Catanzaro',
        city: 'Catanzaro',
        regionName: 'Calabria',
        region: {
            latitude: 38.87,
            longitude: 16.58,
            latitudeDelta: 0.4,
            longitudeDelta: 0.4,
        },
        studyRooms: umgRooms,
        availableFilters: [
            'Tutti',
            'Campus',
            'Medicina',
            'Giurisprudenza',
            'Centro',
            'Lido',
            'Residenziale'
        ],
        color: '#06b6d4', // Cyan-500 (Blu Teal/Azzurro Mare)
        darkColor: '#0891b2', // Cyan-700
    },
    {
        id: 'unirc',
        name: 'UniRC',
        fullName: 'Università per Stranieri Reggio Calabria',
        city: 'Reggio Calabria',
        regionName: 'Calabria',
        region: {
            latitude: 38.12,
            longitude: 15.66,
            latitudeDelta: 0.3,
            longitudeDelta: 0.3,
        },
        studyRooms: unircRooms,
        availableFilters: [
            'Tutti',
            'Biblioteche',
            'Architettura',
            'Ingegneria',
            'Giurisprudenza',
            'Centro',
            'Residenziale'
        ],
        color: '#1e40af', // Blue-800 (Blu Navy Stretto)
        darkColor: '#1e3a8a', // Blue-900
    },
    {
        id: 'afamCalabria',
        name: 'AFAM Calabria',
        fullName: 'Accademie e Conservatori Calabria (Giacomantonio, Cilea, Torrefranca, Tchaikovsky, ABARC, Fidia)',
        city: 'Cosenza / Reggio / Catanzaro / Vibo / Nocera',
        regionName: 'Calabria',
        region: {
            latitude: 38.90,
            longitude: 16.20,
            latitudeDelta: 1.5,
            longitudeDelta: 1.2,
        },
        studyRooms: afamCalabriaRooms,
        availableFilters: [
            'Tutti',
            'Cosenza',
            'Reggio',
            'Catanzaro',
            'Vibo',
            'Nocera',
            'Conservatori',
            'Accademie',
            'Biblioteche Esterne'
        ],
        color: '#a855f7', // Purple-500 (Viola Artistico)
        darkColor: '#7e22ce', // Purple-700
    },
    {
        id: 'federico-ii',
        name: 'UniNa',
        fullName: 'Università degli Studi di Napoli Federico II',
        city: 'Napoli',
        regionName: 'Campania',
        region: {
            latitude: 40.8359,
            longitude: 14.2488,
            latitudeDelta: 0.15,
            longitudeDelta: 0.15,
        },
        studyRooms: federicoIIRooms,
        availableFilters: [
            'Tutti',
            'Centro Storico',
            "Monte Sant'Angelo",
            'Via Claudio',
            'Piazzale Tecchio',
            'Agnano',
            'Policlinico',
            'Zona Ospedaliera',
            'San Giovanni',
            'Scampia',
            'Portici',
            'Veterinaria',
            'Avellino',
            'Bacoli'
        ],
        color: '#10b981', // Emerald Green
        darkColor: '#059669', // Darker Emerald
    },
    {
        id: 'vanvitelli',
        name: 'UniVa',
        fullName: 'Università degli Studi della Campania "Luigi Vanvitelli"',
        city: 'Caserta / Napoli',
        regionName: 'Campania',
        region: {
            latitude: 41.0,
            longitude: 14.25,
            latitudeDelta: 0.4,
            longitudeDelta: 0.4,
        },
        studyRooms: vanvitelliRooms,
        availableFilters: [
            'Tutti',
            'Aversa',
            'Caserta',
            'Napoli',
            'S. Maria C.V.',
            'Capua',
        ],
        color: '#3b82f6', // Helper Blue
        darkColor: '#1d4ed8', // Darker Blue
    },
    {
        id: 'parthenope',
        name: 'UniParth',
        fullName: 'Università degli Studi di Napoli Parthenope',
        city: 'Napoli',
        regionName: 'Campania',
        region: {
            latitude: 40.8409,
            longitude: 14.2500,
            latitudeDelta: 0.08,
            longitudeDelta: 0.15,
        },
        studyRooms: parthenopeRooms,
        availableFilters: [
            'Tutti',
            'Palazzo Pacanowski',
            "Villa Doria d'Angri",
            'Centro Direzionale',
            'Sede Centrale Acton',
            'Via Medina',
            'Nola'
        ],
        color: '#0284c7', // Sky Blue/Navy mix
        darkColor: '#0369a1', // Darker Sky
    },
    {
        id: 'orientale',
        name: 'UniOr',
        fullName: "Università degli Studi di Napoli L'Orientale",
        city: 'Napoli',
        regionName: 'Campania',
        region: {
            latitude: 40.8450,
            longitude: 14.2560,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
        },
        studyRooms: orientaleRooms,
        availableFilters: [
            'Tutti',
            'Palazzo Giusso',
            'Palazzo del Mediterraneo',
            'Palazzo S.M. Porta Coeli',
            'Palazzo Corigliano',
        ],
        // User requested RED color
        color: '#dc2626', // Red-600
        darkColor: '#991b1b', // Red-800
    },
    {
        id: 'unisa',
        name: 'UniSa',
        fullName: 'Università degli Studi di Salerno',
        city: 'Fisciano / Baronissi',
        regionName: 'Campania',
        region: {
            latitude: 40.7720,
            longitude: 14.7900,
            latitudeDelta: 0.06,
            longitudeDelta: 0.08,
        },
        studyRooms: unisaRooms,
        availableFilters: [
            'Tutti',
            'Biblioteche',
            'Stecche',
            'Servizi Campus',
            'Baronissi',
            'Salerno Centro',
        ],
        color: '#f97316', // Orange-500
        darkColor: '#c2410c', // Orange-700
    },
    {
        id: 'unisannio',
        name: 'UniSannio',
        fullName: 'Università degli Studi del Sannio',
        city: 'Benevento',
        regionName: 'Campania',
        region: {
            latitude: 41.1300,
            longitude: 14.7800,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
        },
        studyRooms: unisannioRooms,
        availableFilters: [
            'Tutti',
            'Centro Storico',
            'Il Cubo',
            'Polo SEA',
            'Piazza Roma',
            'Corso Garibaldi',
        ],
        color: '#8b5cf6', // Violet-500
        darkColor: '#5b21b6', // Violet-800
    },
    {
        id: 'benincasa',
        name: 'Suor Orsola',
        fullName: 'Università degli Studi Suor Orsola Benincasa',
        city: 'Napoli',
        regionName: 'Campania',
        region: {
            latitude: 40.8447,
            longitude: 14.2380,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
        },
        studyRooms: benincasaRooms,
        availableFilters: [
            'Tutti',
        ],
        color: '#dc2626', // Red-600
        darkColor: '#991b1b', // Red-800
    },
    {
        id: 'sapienza',
        name: 'Sapienza',
        fullName: 'Sapienza Università di Roma',
        city: 'Roma',
        regionName: 'Lazio',
        region: {
            latitude: 41.9035,
            longitude: 12.5150,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
        },
        studyRooms: sapienzaRooms,
        availableFilters: [
            'Tutti',
            'Città Universitaria',
            'H24',
            'Sedi Esterne',
            'San Lorenzo',
            'Ingegneria',
            'Architettura'
        ],
        color: '#842029', // Sapienza Burgundy/Red
        darkColor: '#541218', // Darker Burgundy
    },
    {
        id: 'torvergata',
        name: 'Tor Vergata',
        fullName: 'Università degli Studi di Roma "Tor Vergata"',
        city: 'Roma',
        regionName: 'Lazio',
        region: {
            latitude: 41.8550,
            longitude: 12.6200,
            latitudeDelta: 0.12, // Increased to cover Anagnina (Metro A) and Metro C
            longitudeDelta: 0.12,
        },
        studyRooms: torVergataRooms,
        availableFilters: [
            'Tutti',
            'Economia',
            'Ingegneria',
            'Lettere',
            'Medicina',
            'Scienze',
            'CampusX',
        ],
        color: '#16a34a', // Green-600
        darkColor: '#14532d', // Green-900
    },
    {
        id: 'romatre',
        name: 'Roma Tre',
        fullName: 'Università degli Studi Roma Tre',
        city: 'Roma',
        regionName: 'Lazio',
        region: {
            latitude: 41.8600,
            longitude: 12.4800,
            latitudeDelta: 0.12, // Increased to cover Termini (Nord) to EUR (Sud)
            longitudeDelta: 0.12,
        },
        studyRooms: romaTreRooms,
        availableFilters: [
            'Tutti',
            'Ostiense',
            'San Paolo',
            'Vasca Navale',
            'Mattatoio',
            'Termini'
        ],
        color: '#2563eb', // Royal Blue
        darkColor: '#1e3a8a', // Dark Blue
    },
    {
        id: 'foro-italico',
        name: 'Foro Italico',
        fullName: 'Università degli Studi di Roma "Foro Italico"',
        city: 'Roma',
        regionName: 'Lazio',
        region: {
            latitude: 41.9325,
            longitude: 12.4580,
            latitudeDelta: 0.04,
            longitudeDelta: 0.04,
        },
        studyRooms: foroItalicoRooms,
        availableFilters: [
            'Tutti',
            'Palazzo H',
            'Foresteria',
            'CONI',
            'Stadio Marmi',
            'Acqua Acetosa',
        ],
        color: '#e11d48', // Rose-600
        darkColor: '#9f1239', // Rose-800
    },
    {
        id: 'unitus',
        name: 'Tuscia',
        fullName: 'Università degli Studi della Tuscia',
        city: 'Viterbo / Rieti',
        regionName: 'Lazio',
        region: {
            latitude: 42.4200,
            longitude: 12.1000,
            latitudeDelta: 0.6,
            longitudeDelta: 0.6,
        },
        studyRooms: unitusRooms,
        availableFilters: [
            'Tutti',
            'S. Maria in Gradi',
            'Riello',
            'Civitavecchia',
            'Rieti',
            'Paradiso/San Carlo'
        ],
        // User requested Viterbo/Tuscia color - dark blue/dark green? 
        // UniTus logo is Blue and Yellow/Gold. 
        color: '#0f172a', // Slate-900 (Elegant Dark Blue)
        darkColor: '#020617', // Slate-950
    },
    {
        id: 'unicas',
        name: 'Unicas',
        fullName: 'Università degli Studi di Cassino e del Lazio Meridionale',
        city: 'Cassino / Frosinone',
        regionName: 'Lazio',
        region: {
            latitude: 41.4800,
            longitude: 13.8400,
            latitudeDelta: 0.15,
            longitudeDelta: 0.15,
        },
        studyRooms: unicasRooms,
        availableFilters: [
            'Tutti',
            'Folcara',
            'Ingegneria',
            'Frosinone',
            'Residenze'
        ],
        color: '#be123c', // Rose-700
        darkColor: '#881337', // Rose-900
    },
    {
        id: 'unimi',
        name: 'Statale Mi',
        fullName: 'Università degli Studi di Milano',
        city: 'Milano / Lodi',
        regionName: 'Lombardia',
        region: {
            latitude: 45.4200, // Center to balance between Milan and Lodi
            longitude: 9.3000,
            latitudeDelta: 0.35, // High delta to cover Lodi (South) and Sesto (North)
            longitudeDelta: 0.35,
        },
        studyRooms: unimiRooms,
        availableFilters: [
            'Tutti',
            'Sede Centrale',
            'Città Studi',
            'Policlinico',
            'Sesto S.G.',
            'Lodi (Vet)',
            'Segrate'
        ],
        // Brand color is often Dark Blue/Gold, or distinct from others
        color: '#0e7490', // Cyan-700 (Teal-ish Blue) to distinguish
        darkColor: '#155e75', // Cyan-800
    },
    {
        id: 'polimi',
        name: 'PoliMi',
        fullName: 'Politecnico di Milano',
        city: 'Lombardia / Emilia',
        regionName: 'Lombardia',
        region: {
            latitude: 45.4790, // Centered on Leonardo
            longitude: 9.2280,
            latitudeDelta: 1.2, // Very wide to cover Lecco (North) to Piacenza (South)
            longitudeDelta: 1.2,
        },
        studyRooms: polimiRooms,
        availableFilters: [
            'Tutti',
            'Leonardo',
            'Bovisa',
            'Lecco',
            'Como',
            'Cremona',
            'Mantova',
            'Piacenza'
        ],
        // PoliMi standard colors are Blue/Cyan, but let's go with a distinct Engineering Blue
        color: '#2563eb', // Blue-600
        darkColor: '#1e40af', // Blue-800
    },
    {
        id: 'unimib',
        name: 'Bicocca',
        fullName: 'Università degli Studi di Milano-Bicocca',
        city: 'Milano / Monza',
        regionName: 'Lombardia',
        region: {
            latitude: 45.5500, // Midpoint between Bicocca (45.51) and Monza (45.59)
            longitude: 9.2400,
            latitudeDelta: 0.15, // Covers both campuses
            longitudeDelta: 0.15,
        },
        studyRooms: unimibRooms,
        availableFilters: [
            'Tutti',
            'Sede Centrale (U6)',
            'Piazza della Scienza',
            'Monza (Medicina)',
            'U12/U7'
        ],
        color: '#b91c1c', // Red-700 (Unimib Red)
        darkColor: '#7f1d1d', // Red-900
    },
    {
        id: 'unipv',
        name: 'UniPv',
        fullName: 'Università degli Studi di Pavia',
        city: 'Pavia / Cremona',
        regionName: 'Lombardia',
        region: {
            latitude: 45.1865,
            longitude: 9.6000, // Shifted east to include Cremona (9.15 to 10.02)
            latitudeDelta: 0.3,
            longitudeDelta: 1.1, // Wide longitude to cover Pavia and Cremona
        },
        studyRooms: unipvRooms,
        availableFilters: [
            'Tutti',
            'Polo Centrale',
            'Cravino (Scienze)',
            'San Tommaso',
            'Cremona',
        ],
        color: '#f59e0b', // Amber-500 (Yellow/Gold is traditional for Pavia)
        darkColor: '#b45309', // Amber-700
    },
    {
        id: 'unibs',
        name: 'UniBS',
        fullName: 'Università degli Studi di Brescia',
        city: 'Brescia',
        regionName: 'Lombardia',
        region: {
            latitude: 45.5500, // Centered between Historic Center and North Pole
            longitude: 10.2200,
            latitudeDelta: 0.15,
            longitudeDelta: 0.15,
        },
        studyRooms: unibsRooms,
        availableFilters: [
            'Tutti',
            'Centro (Eco/Giur)',
            'Polo Nord (Ing/Med)',
            'Mantova',
            'Chiari',
        ],
        color: '#2563eb', // Blue-600 (UniBS Blue)
        darkColor: '#1e40af', // Blue-800
    },
    {
        id: 'unibg',
        name: 'UniBg',
        fullName: 'Università degli Studi di Bergamo',
        city: 'Bergamo / Dalmine',
        regionName: 'Lombardia',
        region: {
            latitude: 45.6800, // Balanced point
            longitude: 9.6500,
            latitudeDelta: 0.12,
            longitudeDelta: 0.12,
        },
        studyRooms: unibgRooms,
        availableFilters: [
            'Tutti',
            'Città Alta (Umanistico)',
            'Caniana (Eco/Giur)',
            'Dalmine (Ing)',
            'Biblioteche Serali',
        ],
        color: '#be185d', // Pink-700 (UniBg Red/Amaranth)
        darkColor: '#831843', // Pink-900
    },
    {
        id: 'uninsubria',
        name: 'Insubria',
        fullName: 'Università degli Studi dell’Insubria',
        city: 'Varese / Como',
        regionName: 'Lombardia',
        region: {
            latitude: 45.8000,
            longitude: 8.9800, // Midpoint between Varese (8.84) and Como (9.08)
            latitudeDelta: 0.25,
            longitudeDelta: 0.5, // Wide enough to cover both
        },
        studyRooms: uninsubriaRooms,
        availableFilters: [
            'Tutti',
            'Varese (Bizzozero)',
            'Como (Sant\'Abbondio)',
            'Como (Scienze)',
            'Busto Arsizio',
        ],
        color: '#047857', // Emerald-700 (Greenish, fitting for Insubria)
        darkColor: '#064e3b', // Emerald-900
    },
    {
        id: 'iuss',
        name: 'IUSS',
        fullName: 'IUSS - Scuola Universitaria Superiore Pavia',
        city: 'Pavia',
        regionName: 'Lombardia',
        region: {
            latitude: 45.1860,
            longitude: 9.1550, // Perfect center on Piazza Vittoria
            latitudeDelta: 0.015, // Very tight zoom
            longitudeDelta: 0.015,
        },
        studyRooms: iussRooms,
        availableFilters: [
            'Tutti',
            'Sede Centrale (Broletto)',
            'Lungoticino',
            'Collegi Partner',
        ],
        color: '#7f1d1d', // Dark Red / Maroon (Prestigious/Classical)
        darkColor: '#450a0a',
    },
    {
        id: 'unibo',
        name: 'UniBo',
        fullName: 'Alma Mater Studiorum - Università di Bologna',
        city: 'Bologna / Romagna',
        regionName: 'Emilia-Romagna',
        region: {
            latitude: 44.4000, // Balanced center for Bologna and Romagna campuses
            longitude: 11.8000,
            latitudeDelta: 0.8, // Covers from Bologna to the coast
            longitudeDelta: 1.2,
        },
        studyRooms: uniboRooms,
        availableFilters: [
            'Tutti',
            'Bologna',
            'Cesena',
            'Forlì',
            'Ravenna',
            'Rimini',
            'Imola',
            'H24/Mezzanotte'
        ],
        color: '#be123c', // UniBo Red
        darkColor: '#881337',
    },
    {
        id: 'unife',
        name: 'UniFe',
        fullName: 'Università degli Studi di Ferrara',
        city: 'Ferrara / Rovigo',
        regionName: 'Emilia-Romagna',
        region: {
            latitude: 44.8333,
            longitude: 11.6167,
            latitudeDelta: 0.5,
            longitudeDelta: 0.8,
        },
        studyRooms: unifeRooms,
        availableFilters: [
            'Tutti',
            'Ferrara Centro',
            'Polo Scientifico',
            'Cona (Medicina)',
            'Rovigo',
            'Serali/Weekend'
        ],
        color: '#b91c1c', // UniFe Red
        darkColor: '#7f1d1d',
    },
    {
        id: 'unimore',
        name: 'UniMoRe',
        fullName: 'Università di Modena e Reggio Emilia',
        city: 'Modena / Reggio Emilia / Carpi',
        regionName: 'Emilia-Romagna',
        region: {
            latitude: 44.6460,
            longitude: 10.9252,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
        },
        studyRooms: unimoreRooms,
        availableFilters: [
            'Tutti',
            'Modena Centro',
            'Modena Campus',
            'Modena Policlinico',
            'Reggio Emilia',
            'Carpi',
            'Serali/Weekend'
        ],
        color: '#FFCC00', // UniMoRe Yellow
        darkColor: '#FFCC00', // UniMoRe Blue
    },
    {
        id: 'unipr',
        name: 'UniPr',
        fullName: 'Università degli Studi di Parma',
        city: 'Parma',
        regionName: 'Emilia-Romagna',
        region: {
            latitude: 44.8015,
            longitude: 10.3279,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
        },
        studyRooms: uniprRooms,
        availableFilters: [
            'Tutti',
            'Campus',
            'Centro Kennedy',
            'Ospedale',
            'Biblioteche Comunali'
        ],
        color: '#004a96', // UniPr Blue
        darkColor: '#003366',
    },
    {
        id: 'units',
        name: 'UniTS',
        fullName: 'Università degli Studi di Trieste',
        city: 'Trieste / Gorizia / Pordenone',
        regionName: 'Friuli-Venezia Giulia',
        region: {
            latitude: 45.6578,
            longitude: 13.7925,
            latitudeDelta: 0.5,
            longitudeDelta: 0.8,
        },
        studyRooms: unitsRooms,
        availableFilters: [
            'Tutti',
            'Campus Europa',
            'Centro Trieste',
            'Cattinara (Medicina)',
            'Gorizia',
            'Pordenone/Portogruaro',
            'Caffè Letterari'
        ],
        color: '#d32f2f', // UniTS Red
        darkColor: '#b71c1c',
    },
    {
        id: 'uniud',
        name: 'UniUd',
        fullName: 'Università degli Studi di Udine',
        city: 'Udine / Pordenone / Gorizia / Gemona',
        regionName: 'Friuli-Venezia Giulia',
        region: {
            latitude: 46.0695,
            longitude: 13.2350,
            latitudeDelta: 0.3,
            longitudeDelta: 0.4,
        },
        studyRooms: uniudRooms,
        availableFilters: [
            'Tutti',
            'Rizzi (Scienze)',
            'Centro Storico',
            'Medicina Kolbe',
            'Gorizia/Pordenone',
            'Gemona (Sport)',
            'Biblioteca Joppi'
        ],
        color: '#0066cc', // UniUd Blue
        darkColor: '#004999',
    },
    {
        id: 'trieste_elite',
        name: 'SISSA/ICTP/MIB',
        fullName: 'Istituzioni Elite Trieste (SISSA, ICTP, MIB)',
        city: 'Trieste',
        regionName: 'Friuli-Venezia Giulia',
        region: {
            latitude: 45.6792,
            longitude: 13.7728,
            latitudeDelta: 0.15,
            longitudeDelta: 0.15,
        },
        studyRooms: triesteEliteRooms,
        availableFilters: [
            'Tutti',
            'SISSA (Physics/Math)',
            'ICTP (UNESCO)',
            'MIB (Business)'
        ],
        color: '#7c3aed', // Purple Elite
        darkColor: '#5b21b6',
    },
    {
        id: 'afam_fvg',
        name: 'AFAM FVG',
        fullName: 'Istituzioni AFAM Friuli Venezia Giulia (Tartini, Tomadini, Tiepolo)',
        city: 'Trieste / Udine',
        regionName: 'Friuli-Venezia Giulia',
        region: {
            latitude: 46.0,
            longitude: 13.5,
            latitudeDelta: 0.4,
            longitudeDelta: 0.5,
        },
        studyRooms: afamFvgRooms,
        availableFilters: [
            'Tutti',
            'Tartini Trieste',
            'Tomadini Udine',
            'Tiepolo Udine',
            'Outdoor Study'
        ],
        color: '#ea580c', // Orange AFAM
        darkColor: '#c2410c',
    },
    {
        id: 'unige',
        name: 'UniGe',
        fullName: 'Università degli Studi di Genova',
        city: 'Genova',
        regionName: 'Liguria',
        region: {
            latitude: 44.4070,
            longitude: 8.9340,
            latitudeDelta: 0.08,
            longitudeDelta: 0.08,
        },
        studyRooms: unigeRooms,
        availableFilters: [
            'Tutti',
            'Via Balbi (Principe)',
            'Darsena (Economia)',
            'Albaro (Ingegneria)',
            'San Martino (Medicina)',
            'Sarzano (Architettura)',
            'Berio (Civica)'
        ],
        color: '#dc2626', // Red Genova
        darkColor: '#991b1b',
    },
    {
        id: 'unige_savona',
        name: 'UniGe Savona',
        fullName: 'Università di Genova - Campus Savona',
        city: 'Savona',
        regionName: 'Liguria',
        region: {
            latitude: 44.3085,
            longitude: 8.4650,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
        },
        studyRooms: unigeSavonaRooms,
        availableFilters: [
            'Tutti',
            'Campus Legino',
            'Barrili (Civica)',
            'Priamar (Outdoor)',
            'Sport Hub'
        ],
        color: '#16a34a', // Green Eco
        darkColor: '#15803d',
    },
    {
        id: 'unige_imperia',
        name: 'UniGe Imperia',
        fullName: 'Università di Genova - Polo Imperia',
        city: 'Imperia',
        regionName: 'Liguria',
        region: {
            latitude: 43.8820,
            longitude: 8.0280,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
        },
        studyRooms: unigeImperiaRooms,
        availableFilters: [
            'Tutti',
            'Campus (Via Nizza)',
            'Oneglia (Centro)',
            'Porto Maurizio',
            'Outdoor'
        ],
        color: '#0284c7', // Sky Blue
        darkColor: '#0369a1',
    },
    {
        id: 'unige_spezia',
        name: 'UniGe Spezia',
        fullName: 'Università di Genova - Polo Marconi',
        city: 'La Spezia',
        regionName: 'Liguria',
        region: {
            latitude: 44.1100,
            longitude: 9.8250,
            latitudeDelta: 0.08,
            longitudeDelta: 0.08,
        },
        studyRooms: unigeSpeziaRooms,
        availableFilters: [
            'Tutti',
            'Campus Marconi',
            'Beghi (Canaletto)',
            'Centro',
            'Outdoor'
        ],
        color: '#0f172a', // Slate-900 (Military/Nautical vibe)
        darkColor: '#020617',
    },
    {
        id: 'unige_health',
        name: 'UniGe Salute (Decentralizzata)',
        fullName: 'UniGe - Poli Sanitari Decentralizzati (Chiavari / Pietra Ligure)',
        city: 'Chiavari / Pietra Ligure',
        regionName: 'Liguria',
        region: {
            latitude: 44.2500,
            longitude: 8.8000,
            latitudeDelta: 0.8,
            longitudeDelta: 1.5,
        },
        studyRooms: unigeHealthDecentralizedRooms,
        availableFilters: [
            'Tutti',
            'Chiavari',
            'Pietra Ligure',
            'Ospedale (ASL)',
            'Civica',
            'Outdoor'
        ],
        color: '#34d399', // Emerald-400 (Health/Fresh vibe)
        darkColor: '#059669',
    },
    {
        id: 'afam_liguria',
        name: 'AFAM Liguria',
        fullName: 'Accademie e Conservatori Liguria',
        city: 'Genova / La Spezia / Sanremo',
        regionName: 'Liguria',
        region: {
            latitude: 44.2000,
            longitude: 8.9000,
            latitudeDelta: 1.0,
            longitudeDelta: 1.5,
        },
        studyRooms: afamLiguriaRooms,
        availableFilters: [
            'Tutti',
            'Genova',
            'La Spezia',
            'Sanremo',
            'Accademia',
            'Conservatorio'
        ],
        color: '#7c3aed', // Violet AFAM
        darkColor: '#4c1d95',
    },
    {
        id: 'univpm',
        name: 'UNIVPM',
        fullName: 'Università Politecnica delle Marche',
        city: 'Ancona / Marche',
        regionName: 'Marche',
        region: {
            latitude: 43.4500,
            longitude: 13.4000,
            latitudeDelta: 1.2,
            longitudeDelta: 1.2,
        },
        studyRooms: univpmRooms,
        availableFilters: [
            'Tutti',
            'Monte Dago',
            'Villarey',
            'Torrette',
            'Ancona Centro',
            'Ascoli',
            'Fermo',
            'San Benedetto',
            'Pesaro'
        ],
        color: '#003366', // Deep blue
        darkColor: '#001a33',
    },
    {
        id: 'uniurb',
        name: 'UniUrb',
        fullName: 'Università degli Studi di Urbino Carlo Bo',
        city: 'Urbino / Marche',
        regionName: 'Marche',
        region: {
            latitude: 43.726,
            longitude: 12.636,
            latitudeDelta: 0.5,
            longitudeDelta: 0.8,
        },
        studyRooms: uniurbRooms,
        availableFilters: [
            'Tutti',
            'Centro Storico',
            'Collegi',
            'Scientifico',
            'Fano',
            'Pesaro'
        ],
        color: '#ffcc00', // Yellow
        darkColor: '#cca300',
    },
    {
        id: 'unimc',
        name: 'UniMC',
        fullName: 'Università degli Studi di Macerata',
        city: 'Macerata / Marche',
        regionName: 'Marche',
        region: {
            latitude: 43.300,
            longitude: 13.450,
            latitudeDelta: 0.6,
            longitudeDelta: 0.8,
        },
        studyRooms: unimcRooms,
        availableFilters: [
            'Tutti',
            'Macerata Centro',
            'Civitanova',
            'Jesi',
            'Fermo'
        ],
        color: '#004d40', // Deep Teal
        darkColor: '#00251a',
    },
    {
        id: 'unicam',
        name: 'UniCam',
        fullName: 'Università di Camerino',
        city: 'Camerino / Marche',
        regionName: 'Marche',
        region: {
            latitude: 43.136,
            longitude: 13.068,
            latitudeDelta: 0.5,
            longitudeDelta: 0.8,
        },
        studyRooms: unicamRooms,
        availableFilters: [
            'Tutti',
            'Camerino',
            'Ascoli Piceno',
            'Matelica',
            'San Benedetto'
        ],
        color: '#880e4f', // Deep Pink/Magenta
        darkColor: '#560027',
    },
    {
        id: 'afamMarche',
        name: 'AFAM Marche',
        fullName: 'Istituzioni AFAM Marche (ISIA, Accademie, Conservatori)',
        city: 'Urbino / Macerata / Pesaro / Fermo  Ancona',
        regionName: 'Marche',
        region: {
            latitude: 43.500,
            longitude: 13.200,
            latitudeDelta: 1.5,
            longitudeDelta: 1.5,
        },
        studyRooms: afamMarcheRooms,
        availableFilters: [
            'Tutti',
            'Urbino (ISIA/ABA)',
            'Macerata (ABA)',
            'Pesaro (Rossini)',
            'Fermo (Pergolesi)',
            'Ancona (Poliarte)',
            'Conservatori',
            'Accademie'
        ],
        color: '#ef6c00', // Deep Orange
        darkColor: '#b53d00',
    },
    {
        id: 'unito',
        name: 'UniTo',
        fullName: 'Università degli Studi di Torino',
        city: 'Torino / Piemonte',
        regionName: 'Piemonte',
        region: {
            latitude: 45.0700,
            longitude: 7.6800,
            latitudeDelta: 1.5,
            longitudeDelta: 1.5,
        },
        studyRooms: unitoRooms,
        availableFilters: [
            'Tutti',
            'CLE (Campus Einaudi)',
            'Palazzo Nuovo',
            'Molinette (Medicina)',
            'Grugliasco (SAMEV)',
            'Orbassano (San Luigi)',
            'Sedi Regionali'
        ],
        color: '#004B8D', // UniTo Blue
        darkColor: '#002d56',
    },
    {
        id: 'polito',
        name: 'PoliTo',
        fullName: 'Politecnico di Torino',
        city: 'Torino / Piemonte',
        regionName: 'Piemonte',
        region: {
            latitude: 45.0630,
            longitude: 7.6600,
            latitudeDelta: 1.5,
            longitudeDelta: 1.5,
        },
        studyRooms: politoRooms,
        availableFilters: [
            'Tutti',
            'Sede Centrale (Corso Duca)',
            'Cittadella (Lavori di Gruppo)',
            'Valentino (Architettura)',
            'Prese al Tavolo',
            'Sedi Distaccate'
        ],
        color: '#003576', // PoliTo Blue
        darkColor: '#001d42',
    },
    {
        id: 'upo',
        name: 'UPO',
        fullName: 'Università del Piemonte Orientale',
        city: 'Novara / Alessandria / Vercelli',
        regionName: 'Piemonte',
        region: {
            latitude: 45.4430,
            longitude: 8.6200,
            latitudeDelta: 2.0,
            longitudeDelta: 2.0,
        },
        studyRooms: upoRooms,
        availableFilters: [
            'Tutti',
            'Novara',
            'Alessandria (Borsalino)',
            'Alessandria (DiSIT)',
            'Vercelli (Quiet & Historic)',
            'Sedi Distaccate'
        ],
        color: '#00457C', // UPO Blue
        darkColor: '#002244',
    },
    {
        id: 'afam_piemonte',
        name: 'AFAM Piemonte',
        fullName: 'Alta Formazione Artistica e Musicale - Piemonte',
        city: 'Torino / Piemonte',
        regionName: 'Piemonte',
        region: {
            latitude: 45.0700,
            longitude: 7.6800,
            latitudeDelta: 2.0,
            longitudeDelta: 2.0,
        },
        studyRooms: afamPiemonteRooms,
        availableFilters: [
            'Tutti',
            'Torino (Albertina & Verdi)',
            'Design Hub (IED & IAAD)',
            'Conservatori Provincia',
            'Digital Art (ACME)',
            'Prese Elettriche'
        ],
        color: '#8B0000', // Deep Art Red
        darkColor: '#4A0000',
    },
    {
        id: 'uniba',
        name: 'UniBa',
        fullName: 'Università degli Studi di Bari Aldo Moro',
        city: 'Bari / Taranto / Brindisi',
        regionName: 'Puglia',
        region: {
            latitude: 41.10,
            longitude: 16.87,
            latitudeDelta: 1.5,
            longitudeDelta: 1.5,
        },
        studyRooms: unibaRooms,
        availableFilters: [
            'Tutti',
            'Centro Storico',
            'Campus (Orabona)',
            'Poggiofranco',
            'Policlinico',
            'Valenzano',
            'Taranto',
            'Brindisi'
        ],
        color: '#dc2626', // Red-600 (UniBa brand)
        darkColor: '#991b1b', // Red-800
    },
    {
        id: 'poliba',
        name: 'PoliBa',
        fullName: 'Politecnico di Bari',
        city: 'Bari / Taranto',
        regionName: 'Puglia',
        region: {
            latitude: 41.10,
            longitude: 16.88,
            latitudeDelta: 1.5,
            longitudeDelta: 1.5,
        },
        studyRooms: polibaRooms,
        availableFilters: [
            'Tutti',
            'Biblioteche',
            'Aule Studio',
            'Laboratori',
            'Campus',
            'Taranto',
            'Architettura'
        ],
        color: '#2563eb', // Blue-600 (PoliBa brand)
        darkColor: '#1e40af', // Blue-800
    },
    {
        id: 'unisalento',
        name: 'UniSalento',
        fullName: 'Università del Salento',
        city: 'Lecce / Brindisi',
        regionName: 'Puglia',
        region: {
            latitude: 40.40,
            longitude: 18.00,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8,
        },
        studyRooms: unisalentoRooms,
        availableFilters: [
            'Tutti',
            'Centro Storico',
            'Ecotekne',
            'Brindisi',
            'Biblioteche',
            'Aria Condizionata'
        ],
        color: '#f59e0b', // Amber-500 (Salento sun)
        darkColor: '#d97706', // Amber-600
    },
    {
        id: 'unifg',
        name: 'UniFg',
        fullName: 'Università degli Studi di Foggia',
        city: 'Foggia / Barletta / Gargano',
        regionName: 'Puglia',
        region: {
            latitude: 41.46,
            longitude: 15.55,
            latitudeDelta: 1.0,
            longitudeDelta: 1.5,
        },
        studyRooms: unifgRooms,
        availableFilters: [
            'Tutti',
            'Centro Storico',
            'Semi-Centro',
            'Periferia',
            'Poli Distaccati',
            'Lavoro di Gruppo',
            'Biblioteche'
        ],
        color: '#16a34a', // Green-600 (Agraria/Tavoliere)
        darkColor: '#14532d', // Green-900
    },
    {
        id: 'afamPuglia',
        name: 'AFAM Puglia',
        fullName: 'Accademie e Conservatori Puglia (ABA Bari, Foggia, Lecce, Cons. Piccinni, Rota, Paisiello, Giordano)',
        city: 'Bari / Foggia / Lecce / Taranto / Monopoli',
        regionName: 'Puglia',
        region: {
            latitude: 41.10,
            longitude: 16.87,
            latitudeDelta: 2.0,
            longitudeDelta: 2.0,
        },
        studyRooms: afamPugliaRooms,
        availableFilters: [
            'Tutti',
            'Accademie',
            'Conservatori',
            'Sporco Tollerato',
            'Tavoli Grandi',
            'Sale Prova'
        ],
        color: '#7c3aed', // Violet-600 (AFAM standard)
        darkColor: '#4c1d95', // Violet-900
    },
];

// Helper function to get university by ID
export const getUniversityById = (id: string): University | undefined => {
    return universities.find((uni) => uni.id === id);
};
