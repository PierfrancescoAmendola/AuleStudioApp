import { StudyRoom, DirectionsFromLocation } from '../../types';

export const gssiRooms: StudyRoom[] = [
  // ============================================================
  // SEDE CENTRALE (Ex-ISEF) - Viale Crispi
  // ============================================================
  {
    id: 'gssi_main_library',
    nome: 'GSSI Library & Reading Room',
    edificio: 'Main Building (Ex-ISEF)',
    piano: 0,
    postiDisponibili: 40,
    postiTotali: 50,
    orarioApertura: '08:00',
    orarioChiusura: '20:00', // H24 per dottorandi con badge
    servizi: ['WiFi Eduroam', 'Prese Internazionali', 'Poltrone Ergonomiche', 'Silenzio Assoluto'],
    latitude: 42.3465,
    longitude: 13.4020,
    indirizzo: "Viale Francesco Crispi 7, 67100 L'Aquila",
    university: 'GSSI',
    occupancy_rate: 'Basso',
    notes: "Ambiente esclusivo e molto silenzioso. Accesso prioritario a dottorandi e ricercatori GSSI. Lingua uff. inglese.",
    tags: ['Accesso Regolato', 'Deep Work'],
  },
  {
    id: 'gssi_common_area',
    nome: 'PhD Lounge & Coffee Area',
    edificio: 'Main Building (Piano Terra)',
    piano: 0,
    postiDisponibili: 30,
    postiTotali: 40,
    orarioApertura: '08:30',
    orarioChiusura: '19:00',
    servizi: ['Caffè', 'Lavagne', 'Divanetti', 'Networking'],
    latitude: 42.3465,
    longitude: 13.4020,
    indirizzo: "Viale Francesco Crispi 7, L'Aquila",
    university: 'GSSI',
    notes: "Area informale con lavagne ovunque. Perfetta per brainstorming e networking scientifico.",
    tags: ['Accesso Regolato', 'Networking'],
  },
  {
    id: 'gssi_rect_study',
    nome: 'Rectorate Study Rooms',
    edificio: 'Palazzo del Rettorato',
    piano: 1,
    postiDisponibili: 20,
    postiTotali: 25,
    orarioApertura: '09:00',
    orarioChiusura: '18:00',
    servizi: ['WiFi', 'Sale Riunioni'],
    latitude: 42.3450,
    longitude: 13.4030,
    indirizzo: "Via Michele Iacobucci 2, L'Aquila",
    university: 'GSSI',
    notes: 'Sede amministrativa con salette per studio di gruppo/supervisioni.',
    tags: ['Accesso Regolato'],
  },

  // ============================================================
  // OUTDOOR / VICINANZE
  // ============================================================
  {
    id: 'gssi_villa_comunale',
    nome: 'Villa Comunale (Parco)',
    edificio: 'Esterno (Fronte GSSI)',
    piano: 0,
    postiDisponibili: 100,
    postiTotali: 100,
    orarioApertura: 'H24',
    orarioChiusura: 'H24',
    servizi: ['Panchine', 'Verde', 'Relax'],
    latitude: 42.3455,
    longitude: 13.4015,
    indirizzo: "Viale Collemaggio, L'Aquila",
    university: 'GSSI',
    notes: "Parco davanti al GSSI, usato per letture e pause. Estensione naturale del campus in estate.",
    tags: ['Outdoor', 'Relax'],
  }
];

export const getDirectionsGSSI = (room: StudyRoom): DirectionsFromLocation[] => {
  const directions: DirectionsFromLocation[] = [];

  // HUB 1: TERMINAL BUS COLLEMAGGIO (Vicinissimo)
  directions.push({
    luogo: 'Terminal Bus Collemaggio',
    descrizione: `Posizione strategica:
1. Scendi al Terminal.
2. Risali Viale Collemaggio verso la Basilica e la Villa Comunale.
3. Prosegui dritto per ~500m: l'edificio a vetri sulla destra è il GSSI.`,
    mezziPubblici: ['A piedi (consigliato)'],
    tempoStimato: '7-10 min a piedi',
    note: "Logistica top: arrivi da Roma/Pescara e cammini." 
  });

  // HUB 2: LABORATORI NAZIONALI (LNGS) - ASSERGI
  directions.push({
    luogo: 'Laboratori Nazionali Gran Sasso (LNGS)',
    descrizione: `Per chi va ai laboratori sotterranei:
1. Usa la navetta GSSI → Assergi.
2. In alternativa, bus TUA/AMA linea M da Collemaggio.
3. I laboratori sono fuori città, sotto il massiccio del Gran Sasso.`,
    mezziPubblici: ['Navetta GSSI', 'Bus AMA Linea M'],
    tempoStimato: '20-25 min',
    note: 'Controlla gli orari della navetta in segreteria.'
  });

  return directions;
};
