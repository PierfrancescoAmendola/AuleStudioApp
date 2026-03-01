import { StudyRoom, DirectionsFromLocation } from '../../types';

export const uniteRooms: StudyRoom[] = [
  // ============================================================
  // POLO CAMPUS COSTE SANT'AGOSTINO (Il "Colle")
  // Cuore dell'ateneo: Giurisprudenza, Politiche, Comunicazione
  // ============================================================
  {
    id: 'unite_campus_mancini',
    nome: 'Biblioteca Polo Umanistico "Giovanna Mancini"',
    edificio: "Campus Coste S. Agostino (Livello -1)",
    piano: 0,
    postiDisponibili: 250,
    postiTotali: 300,
    orarioApertura: '09:00',
    orarioChiusura: '19:00',
    servizi: ['WiFi Eduroam', 'Prese al banco', 'Emeroteca', 'Accesso Disabili'],
    latitude: 42.6580,
    longitude: 13.6980,
    indirizzo: 'Via R. Balzarini 1, 64100 Teramo',
    university: 'UniTe',
    occupancy_rate: 'Alto',
    notes: "La biblioteca principale. Luminosa e moderna. Attenzione: nei periodi morti potrebbe chiudere per pausa pranzo (14:00-15:00), controlla sempre gli avvisi all'ingresso.",
    tags: ['Deep Work'],
  },
  {
    id: 'unite_campus_sala_primo',
    nome: 'Sala Studio "Primo Piano" & Lab. 3',
    edificio: 'Campus Coste S. Agostino (Area Didattica)',
    piano: 1,
    postiDisponibili: 45,
    postiTotali: 60,
    orarioApertura: '08:00',
    orarioChiusura: '19:30',
    servizi: ['WiFi', 'Silenzio relativo', 'Aria Condizionata'],
    latitude: 42.6582,
    longitude: 13.6982,
    indirizzo: 'Via R. Balzarini 1, Teramo',
    university: 'UniTe',
    notes: "Aule studio dedicate (Sala 1° piano da 28 posti + Lab 3 da 16 posti). Meno caotiche dell'Acquario, ideali per chi cerca un compromesso tra silenzio e socialità.",
    tags: ['Focus Moderato'],
  },
  {
    id: 'unite_campus_acquario',
    nome: "Spazi Comuni 'L'Acquario' e Mensa",
    edificio: 'Campus Coste S. Agostino (Livello Bar/Mensa)',
    piano: 0,
    postiDisponibili: 150,
    postiTotali: 200,
    orarioApertura: '08:00',
    orarioChiusura: '19:00',
    servizi: ['Socialità', 'Bar interno', 'Mensa ADSU', 'Distributori'],
    latitude: 42.6585,
    longitude: 13.6985,
    indirizzo: 'Via R. Balzarini 1, Teramo',
    university: 'UniTe',
    notes: "I tavoli fuori dal bar e nella zona mensa (10-12, 15-18) sono usatissimi per studiare in gruppo. C'è rumore, ma è il posto migliore per fare networking.",
    tags: ['Social Study'],
  },
  {
    id: 'unite_campus_lab_informatica',
    nome: 'Laboratori Informatici (Accesso Libero)',
    edificio: "Plesso Gabriele D'Annunzio",
    piano: 1,
    postiDisponibili: 60,
    postiTotali: 60,
    orarioApertura: '09:00',
    orarioChiusura: '18:00',
    servizi: ['PC Fissi', 'Software Statistici', 'WiFi'],
    latitude: 42.6580,
    longitude: 13.6980,
    indirizzo: 'Via R. Balzarini 1, Teramo',
    university: 'UniTe',
    notes: 'Quando non ci sono lezioni, il Laboratorio Informatico (60 posti) è accessibile agli studenti. Chiedere in portineria la disponibilità.',
    tags: ['PC Lab'],
  },

  // ============================================================
  // POLO VETERINARIA (PIANO D'ACCIO)
  // ============================================================
  {
    id: 'unite_vet_biblioteca',
    nome: 'Biblioteca Medicina Veterinaria',
    edificio: 'Campus Ruggero Bortolami',
    piano: 0,
    postiDisponibili: 80,
    postiTotali: 100,
    orarioApertura: '09:00',
    orarioChiusura: '17:00', // Verifica orario esteso
    servizi: ['Silenzio', 'Testi Veterinaria', 'PC Studenti'],
    latitude: 42.6750,
    longitude: 13.7550,
    indirizzo: "Loc. Piano d'Accio, 64100 Teramo",
    university: 'UniTe',
    occupancy_rate: 'Medio',
    notes: "Situata nel polo scientifico fuori città. Include anche un'aula informatica da 16 posti. Ambiente molto tranquillo.",
    tags: ['Deep Work'],
  },

  // ============================================================
  // TERAMO CENTRO STORICO (Per chi non sale al Campus)
  // ============================================================
  {
    id: 'unite_adsu_delfico',
    nome: 'Sala Studio ADSU "Via Delfico"',
    edificio: 'Sede ADSU Centro',
    piano: 0,
    postiDisponibili: 40,
    postiTotali: 50,
    orarioApertura: '09:00',
    orarioChiusura: '19:00', // Variabile
    servizi: ['WiFi', 'Centro Città', 'Pausa Pranzo'],
    latitude: 42.6590,
    longitude: 13.7040,
    indirizzo: 'Via M. Delfico 73, 64100 Teramo',
    university: 'UniTe',
    notes: 'Punto di riferimento fondamentale per chi abita in centro. Spesso chiusa a pranzo o aperta solo alcuni pomeriggi: controllare avvisi.',
    tags: ['Centro'],
  },
  {
    id: 'teramo_biblio_delfico',
    nome: 'Biblioteca Provinciale "Melchiorre Dèlfico"',
    edificio: 'Palazzo Dèlfico',
    piano: 1,
    postiDisponibili: 200,
    postiTotali: 250,
    orarioApertura: '08:30',
    orarioChiusura: '19:00',
    servizi: ['Silenzio Assoluto', 'Sala Storica', 'WiFi Pubblico', 'Sabato Aperta'],
    latitude: 42.6595,
    longitude: 13.7050,
    indirizzo: 'Via Delfico 16, 64100 Teramo',
    university: 'UniTe',
    occupancy_rate: 'Alto',
    notes: "Non è dell'università, ma è la biblioteca storica della città. Chiude il sabato alle 13:00. Perfetta per sessioni di studio intenso.",
    tags: ['Deep Work'],
  },
  // ============================================================
  // SEDE DISTACCATA DI AVEZZANO
  // ============================================================
  {
    id: 'unite_avezzano_irti',
    nome: 'Biblioteca "Nicola Irti" (Sede Avezzano)',
    edificio: 'Sede distaccata Dipartimento Giurisprudenza',
    piano: 0,
    postiDisponibili: 30,
    postiTotali: 40,
    orarioApertura: '09:00',
    orarioChiusura: '13:00',
    servizi: ['Consultazione', 'Accesso Disabili', 'Fondi Giuridici'],
    latitude: 42.0333,
    longitude: 13.4264,
    indirizzo: 'Via Genserico Fontana 6, 67051 Avezzano (AQ)',
    university: 'UniTe',
    occupancy_rate: 'Basso',
    notes: 'Biblioteca per gli studi storici giuridici sociali. Martedì e giovedì aperta anche 15:00-17:00. Fondamentale per il polo distaccato marsicano di UniTe.',
    tags: ['Avezzano', 'Giurisprudenza', 'Silenzio'],
  }
];

export const getDirectionsUniTe = (room: StudyRoom): DirectionsFromLocation[] => {
  const directions: DirectionsFromLocation[] = [];

  const isCoste = room.id.includes('campus'); // Campus Colleparco
  const isVet = room.id.includes('vet');     // Piano d'Accio
  const isCentro = room.id.includes('delfico'); // Centro città

  // ============================================================
  // PER IL CAMPUS (COSTE SANT'AGOSTINO)
  // ============================================================
  if (isCoste) {
    directions.push({
      luogo: 'Piazza Garibaldi (Hub Centro)',
      descrizione: `Per salire al Campus (Colleparco):
1. Vai alla fermata bus principale di **Piazza Garibaldi**.
2. Prendi il bus **Linea 1** o **1 Barrato** (passano ogni 20 min circa).
3. Il bus ti lascia dentro il campus. Non provare a salire a piedi (pendenza elevata).`,
      mezziPubblici: ['Bus TUA Linea 1'],
      tempoStimato: '10 min di bus',
      note: 'Biglietto acquistabile tramite app TUA o tabaccherie.'
    });
  }

  // ============================================================
  // PER VETERINARIA (PIANO D'ACCIO)
  // ============================================================
  if (isVet) {
    directions.push({
      luogo: 'Stazione Ferroviaria',
      descrizione: `Usa il treno come una metropolitana di superficie:
1. Prendi il treno Teramo-Giulianova.
2. Scendi alla fermata **Teramo Piano d'Accio** (la prima dopo Teramo Centrale).
3. La facoltà è a 200m a piedi.`,
      mezziPubblici: ['Treno Regionale'],
      tempoStimato: '5 min',
      note: 'Comodissimo ed evita il traffico della statale.'
    });
  }

  // ============================================================
  // PER IL CENTRO (ADSU / DELFICO)
  // ============================================================
  if (isCentro) {
    directions.push({
      luogo: 'Stazione Teramo Centrale',
      descrizione: `Se arrivi in treno/bus al terminal:
1. Percorri Viale Crucioli o Corso San Giorgio per entrare nel cuore della città.
2. Le biblioteche (Via Delfico) sono in zona pedonale, vicino al Duomo.`,
      mezziPubblici: ['A piedi'],
      tempoStimato: '10-15 min',
      note: 'Teramo centro si gira tutta a piedi.'
    });
  }

  return directions;
};
