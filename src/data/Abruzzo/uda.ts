import { StudyRoom, DirectionsFromLocation } from '../../types';

export const udaRooms: StudyRoom[] = [
  // ============================================================
  // POLO DI CHIETI (Campus Madonna delle Piane)
  // Il "Campus Americano": Medicina, Lettere, Scienze, Psicologia
  // ============================================================
  {
    id: 'uda_chieti_paratore',
    nome: 'Biblioteca Centrale "Ettore Paratore" (Lettere)',
    edificio: 'Campus Madonna delle Piane (Area Umanistica)',
    piano: 0,
    postiDisponibili: 350,
    postiTotali: 400,
    orarioApertura: '08:30',
    orarioChiusura: '19:45',
    servizi: ['WiFi Eduroam', 'Aria Condizionata', 'Punti Ristoro Vicini', 'Estensione oraria in sessione'],
    latitude: 42.3685,
    longitude: 14.1455,
    indirizzo: 'Via dei Vestini 31, 66100 Chieti Scalo (CH)',
    university: "Ud'A",
    occupancy_rate: 'Molto Alto',
    notes: "Il centro nevralgico del campus. Se cerchi socialità vai al piano terra, per concentrazione sali ai piani superiori. In sessione d'esame l'orario viene spesso esteso (controlla i social di ateneo).",
    tags: ['Campus Hub', 'Orario Esteso'],
    extendedHours: true,
  },
  {
    id: 'uda_chieti_medicina',
    nome: 'Biblioteca Medico-Scientifica',
    edificio: 'Polo di Medicina e Chirurgia (Nuovo Polo)',
    piano: 1, // Accesso da livello piastra
    postiDisponibili: 180,
    postiTotali: 200,
    orarioApertura: '08:30',
    orarioChiusura: '19:00',
    servizi: ['Silenzio Rigoroso', 'Testi Scientifici', 'Prese elettriche'],
    latitude: 42.3650,
    longitude: 14.1430,
    indirizzo: 'Via dei Vestini (Blocco Medicina), Chieti Scalo',
    university: "Ud'A",
    notes: "L'ambiente più serio e silenzioso dell'ateneo. Frequentata da futuri medici che studiano per ore senza sosta. Rispetto assoluto del silenzio.",
    tags: ['Deep Work'],
  },
  {
    id: 'uda_chieti_farmacia_aule',
    nome: 'Aule Studio Farmacia (Informali)',
    edificio: 'Blocco Farmacia / Aule Didattiche',
    piano: 0,
    postiDisponibili: 80,
    postiTotali: 100,
    orarioApertura: '08:00',
    orarioChiusura: '19:30',
    servizi: ['WiFi', 'Distributori Automatici', 'Accesso Libero'],
    latitude: 42.3670,
    longitude: 14.1460,
    indirizzo: 'Via dei Vestini, Blocco Farmacia',
    university: "Ud'A",
    notes: "Spazi ricavati nei corridoi e nelle aule non utilizzate del blocco Farmacia. Molto utili per lavori di gruppo o ripasso veloce tra una lezione e l'altra.",
    tags: ['Social', 'Gruppi'],
  },
  {
    id: 'uda_chieti_civitella',
    nome: 'Museo Archeologico "La Civitella" (Gemma Nascosta)',
    edificio: 'Museo La Civitella (Chieti Alta)',
    piano: 0,
    postiDisponibili: 40,
    postiTotali: 60,
    orarioApertura: '09:00',
    orarioChiusura: '19:30',
    servizi: ['Silenzio', 'Contesto Culturale', 'Ingresso Libero per studio'],
    latitude: 42.3450,
    longitude: 14.1650,
    indirizzo: 'Via G. Pianell, Chieti Alta (Centro Storico)',
    university: "Ud'A",
    notes: "Non è nel campus! Si trova in centro città (Chieti Alta). Il museo mette a disposizione sale per studiare. Luogo suggestivo e molto tranquillo, perfetto per chi abita in centro e non vuole scendere allo Scalo.",
    tags: ['Per residenti in Centro', 'Deep Work'],
  },

  // ============================================================
  // POLO DI PESCARA (Viale Pindaro)
  // Campus Urbano: Economia, Architettura, Lingue
  // ============================================================
  {
    id: 'uda_pescara_unificata',
    nome: 'Biblioteca Polo Pescara (Unificata)',
    edificio: 'Edificio Viale Pindaro (Fronte Ingresso)',
    piano: 1,
    postiDisponibili: 300,
    postiTotali: 350,
    orarioApertura: '08:30',
    orarioChiusura: '23:45', // Orario serale spesso attivo
    servizi: ['WiFi', 'Apertura Serale', 'Box Studio'],
    latitude: 42.4540,
    longitude: 14.2250,
    indirizzo: 'Viale Pindaro 42, 65127 Pescara',
    university: "Ud'A",
    occupancy_rate: 'Altissimo',
    notes: 'La principale aula studio di Pescara. Spesso aperta fino a mezzanotte (controllare sempre gli avvisi mensili). Si riempie molto velocemente la mattina.',
    tags: ['Orario Esteso', 'Vicino Movida', 'Vicino Parco'],
    extendedHours: true,
  },
  {
    id: 'uda_pescara_architettura_labs',
    nome: 'Laboratori Architettura (Spazio Plastici)',
    edificio: 'Polo Pindaro (Ala Architettura)',
    piano: 0,
    postiDisponibili: 100,
    postiTotali: 150,
    orarioApertura: '08:00',
    orarioChiusura: '20:00',
    servizi: ['Tavoli da Disegno', 'Spazio Lavoro Manuale'],
    latitude: 42.4545,
    longitude: 14.2255,
    indirizzo: 'Viale Pindaro 42, Pescara',
    university: "Ud'A",
    notes: "Non è una biblioteca silenziosa. Qui si viene per disegnare, tagliare cartone per plastici e lavorare in gruppo. C'è brusio creativo.",
    tags: ['Creativo', 'Laboratorio'],
  },
  {
    id: 'uda_pescara_giurisprudenza',
    nome: 'Biblioteca Scienze Giuridiche (ATTENZIONE)',
    edificio: 'Polo Pindaro (Scala Verde)',
    piano: 1,
    postiDisponibili: 0,
    postiTotali: 50,
    orarioApertura: 'Chiusa',
    orarioChiusura: 'Chiusa',
    servizi: [],
    latitude: 42.4540,
    longitude: 14.2250,
    indirizzo: 'Viale Pindaro 42, Pescara',
    university: "Ud'A",
    occupancy_rate: 'Chiusa',
    notes: '⚠️ ATTENZIONE: Chiusa per lavori/trasloco a tempo indeterminato (aggiornamento 2025/2026). Utilizzare la Biblioteca Unificata.',
    tags: ['Chiuso'],
  },

  // ============================================================
  // SEDI DISTACCATE (Vasto)
  // ============================================================
  {
    id: 'uda_vasto',
    nome: 'Sede Didattica Vasto (Infermieristica)',
    edificio: 'Ex Asilo Carlo Della Penna / Via Michetti',
    piano: 0,
    postiDisponibili: 30,
    postiTotali: 40,
    orarioApertura: '09:00',
    orarioChiusura: '18:00',
    servizi: ['WiFi', 'Aula Studio'],
    latitude: 42.1150,
    longitude: 14.7080,
    indirizzo: 'Via Michetti, 66054 Vasto (CH)',
    university: "Ud'A",
    notes: 'Piccola sede per i corsi di professioni sanitarie. Verifica la disponibilità in portineria.',
    tags: ['Distaccata'],
  }
];

export const getDirectionsUdA = (room: StudyRoom): DirectionsFromLocation[] => {
  const directions: DirectionsFromLocation[] = [];
  
  const isChietiCampus = room.indirizzo.includes('Vestini') || room.id.includes('chieti_paratore') || room.id.includes('medicina') || room.id.includes('farmacia');
  const isChietiAlta = room.id.includes('civitella');
  const isPescara = room.indirizzo.includes('Pindaro') || room.id.includes('pescara');

  // ============================================================
  // CHIETI SCALO (CAMPUS)
  // ============================================================
  if (isChietiCampus) {
    directions.push({
      luogo: 'Treno (Opzione Migliore)',
      descrizione: `Prendi il treno per la fermata **Chieti-Madonna delle Piane** (NON Chieti Centrale).
1. Scendi dal treno e sei letteralmente dentro il campus.
2. Segui il percorso coperto. Per la **Paratore (Lettere)** vai dritto verso l'edificio del Rettorato.
3. Per **Medicina**, prosegui verso l'ospedale (5-7 min a piedi).`,
      mezziPubblici: ['Treno Regionale'],
      tempoStimato: '2 min a piedi (dalla stazione campus)',
      note: 'Attenzione: se scendi a "Chieti Stazione" (quella principale) sei lontano! Devi scendere a "Madonna delle Piane".'
    });

    directions.push({
      luogo: 'Bus da Pescara/Dintorni',
      descrizione: `Cerca il bus TUA diretto all'Università (frequenza ogni 15 min).
1. Scendi al capolinea **"Arco Blu"** (Via dei Vestini).
2. Attraversa il famoso ponte pedonale blu che scavalca la strada.
3. Ti troverai di fronte al piazzale di Lettere.`,
      mezziPubblici: ['Bus TUA'],
      tempoStimato: '25 min da Pescara',
      note: "L'Arco Blu è il punto di riferimento assoluto per orientarsi."
    });
  }

  // ============================================================
  // CHIETI ALTA (MUSEO CIVITELLA)
  // ============================================================
  if (isChietiAlta) {
    directions.push({
      luogo: 'Da Chieti Scalo / Campus',
      descrizione: `Devi salire nella città vecchia (Chieti Alta).
1. Prendi il bus **Linea 1** dal Campus o da Via Tiburtina.
2. Scendi al Terminal Bus di **Piazza San Giustino** o Largo Cavallerizza.
3. Il Museo La Civitella è a pochi passi, vicino all'Anfiteatro Romano.`,
      mezziPubblici: ['Bus Urbano Linea 1'],
      tempoStimato: '15-20 min',
      note: 'Perfetto se abiti in centro storico. Sconsigliato se sei pendolare col treno.'
    });
  }

  // ============================================================
  // PESCARA (VIALE PINDARO)
  // ============================================================
  if (isPescara) {
    directions.push({
      luogo: 'Stazione Pescara Porta Nuova',
      descrizione: `Il polo Pindaro è a Pescara Sud (Porta Nuova).
1. Se il tuo treno ferma a **Pescara Porta Nuova**, scendi lì.
2. Esci e cammina su Viale Pindaro per 500m. L'università è sulla sinistra.`,
      mezziPubblici: ['Treno / Piedi'],
      tempoStimato: '10 min a piedi',
      note: 'Molto più vicino rispetto alla stazione centrale.'
    });

    directions.push({
      luogo: 'Stazione Pescara Centrale',
      descrizione: `Dalla stazione principale:
1. Prendi il bus urbano **Linea 21** (direzione sud/stadio).
2. Scendi alla fermata **Università / Viale Pindaro**.
3. In alternativa, puoi prendere un treno regionale per Porta Nuova (1 fermata).`,
      mezziPubblici: ['Bus Linea 21'],
      tempoStimato: '20 min',
      note: 'La Linea 21 è il bus fondamentale di Pescara.'
    });
  }

  return directions;
};
