import { StudyRoom, DirectionsFromLocation } from '../../types';

export const afamBasilicataRooms: StudyRoom[] = [
  // ============================================================
  // CONSERVATORIO "GESUALDO DA VENOSA" (POTENZA)
  // ============================================================
  {
    id: 'cons_pz_biblio',
    nome: 'Biblioteca Musicale "Gesualdo da Venosa"',
    edificio: 'Sede Centrale (Piano Terra)',
    piano: 0,
    postiDisponibili: 40,
    postiTotali: 50,
    orarioApertura: '08:00',
    orarioChiusura: '15:00', // Chiude presto
    servizi: ['Ascolto Musica', 'Consultazione Spartiti', 'WiFi'],
    latitude: 40.6385,
    longitude: 15.8110,
    indirizzo: 'Via V. Tammone 1, 85100 Potenza',
    university: 'AFAM',
    occupancy_rate: 'Basso',
    notes: "La biblioteca e' piccola ma ben fornita. Attenzione agli orari: chiude spesso nel primo pomeriggio. E' situata nel complesso moderno vicino agli uffici della Provincia.",
    tags: ['Musica', 'Orari Ridotti'],
    vibe: 'Intima e raccolta'
  },
  {
    id: 'cons_pz_aule_studio',
    nome: 'Aule Esercitazione Strumento',
    edificio: 'Sede Centrale',
    piano: 1, // Vari piani
    postiDisponibili: 20, // Numero stanze
    postiTotali: 25,
    orarioApertura: '08:00',
    orarioChiusura: '19:30',
    servizi: ['Pianoforti', 'Leggii', 'Insonorizzazione'],
    latitude: 40.6385,
    longitude: 15.8110,
    indirizzo: 'Via V. Tammone 1, Potenza',
    university: 'AFAM',
    notes: "Accessibili solo agli iscritti. Necessaria prenotazione in portineria. L'edificio e' grande e moderno, facile trovare parcheggio nei dintorni.",
    tags: ['Prenotazione', 'Insonorizzate'],
    vibe: 'Practice rooms'
  },

  // ============================================================
  // CONSERVATORIO "E.R. DUNI" (MATERA) - SEDE DIFFUSA
  // ============================================================
  {
    id: 'cons_mt_sedile',
    nome: "Sede Storica 'Palazzo del Sedile'",
    edificio: 'Palazzo del Sedile (Piazza Sedile)',
    piano: 0,
    postiDisponibili: 30,
    postiTotali: 40,
    orarioApertura: '08:30',
    orarioChiusura: '19:00',
    servizi: ['Auditorium', 'Aule Lezione', 'Centro Storico'],
    latitude: 40.6655,
    longitude: 16.6065,
    indirizzo: 'Piazza del Sedile, 75100 Matera',
    university: 'AFAM',
    notes: "Si studia dentro un monumento, nel cuore dei Sassi. Acustica eccezionale, ma parcheggio impossibile (ZTL rigorosa).",
    tags: ['Sassi', 'Storica'],
    vibe: 'Iconico'
  },
  {
    id: 'cons_mt_biblio_ridola',
    nome: 'Biblioteca Conservatorio (Palazzo Ridola)',
    edificio: 'Palazzo Ridola',
    piano: 0,
    postiDisponibili: 25,
    postiTotali: 30,
    orarioApertura: '09:00',
    orarioChiusura: '17:00', // Variabile
    servizi: ['Fondo Antico', 'Silenzio', 'Consultazione'],
    latitude: 40.6660,
    longitude: 16.6070,
    indirizzo: 'Via Duomo, Matera',
    university: 'AFAM',
    notes: 'Situata a due passi dal Duomo. Luogo molto suggestivo e silenzioso, ideale per studi di musicologia.',
    tags: ['Deep Work', 'Matera'],
    vibe: 'Suggestiva'
  },

  // ============================================================
  // ISTITUTO DEL DESIGN (MATERA)
  // ============================================================
  {
    id: 'idm_matera_lab',
    nome: 'Laboratori IDM (Design)',
    edificio: 'Sede Via Lazazzera',
    piano: 0,
    postiDisponibili: 50,
    postiTotali: 60,
    orarioApertura: '09:00',
    orarioChiusura: '18:00',
    servizi: ['Workstation Grafica', 'WiFi', 'Laboratori Modellistica'],
    latitude: 40.6700,
    longitude: 16.5950,
    indirizzo: 'Via R. Lazazzera 27, 75100 Matera',
    university: 'AFAM',
    notes: "Sede moderna nella parte 'nuova' della citta'. Open space creativo dove gli studenti lavorano ai progetti di Graphic e Interior Design.",
    tags: ['Design District', 'Laboratori'],
    vibe: 'Moderno'
  }
];

export const getDirectionsAFAM_Basilicata = (room: StudyRoom): DirectionsFromLocation[] => {
  const directions: DirectionsFromLocation[] = [];
  
  const isPotenza = room.indirizzo.includes('Potenza') || room.id.includes('cons_pz');
  const isMateraCons = room.id.includes('cons_mt');
  const isMateraDesign = room.id.includes('idm');

  // ============================================================
  // POTENZA (CONSERVATORIO)
  // ============================================================
  if (isPotenza) {
    directions.push({
      luogo: 'Piazza Zara / Via Tammone',
      descrizione: `Il Conservatorio e' nella parte bassa (vicino alla Provincia).
1. E' facilmente raggiungibile in auto (parcheggi in zona).
2. Se arrivi dal Centro (Via Pretoria), usa le Scale Mobili "Santa Lucia" fino in fondo e poi cammina 5 minuti.`,
      mezziPubblici: ['Auto', 'Bus Urbano', 'Scale Mobili'],
      tempoStimato: '10 min',
      note: 'Posizione strategica, fuori dal caos del centro storico.'
    });
  }

  // ============================================================
  // MATERA (CONSERVATORIO - SASSI)
  // ============================================================
  if (isMateraCons) {
    directions.push({
      luogo: 'Piazza Vittorio Veneto (Accesso Sassi)',
      descrizione: `Il Conservatorio e' in piena ZTL (Sassi).
1. Arriva a Piazza Vittorio Veneto (a piedi o bus).
2. Scendi a piedi lungo Via delle Beccherie fino a **Piazza del Sedile**.
3. Non provare a entrare in auto: multe sicure.`,
      mezziPubblici: ['A piedi'],
      tempoStimato: '5-7 min dalla Piazza principale',
      note: 'Location turistica: preparati a fare lo slalom tra i turisti per andare a lezione.'
    });
  }

  // ============================================================
  // MATERA (ISTITUTO DESIGN - CITTÀ NUOVA)
  // ============================================================
  if (isMateraDesign) {
    directions.push({
      luogo: 'Stazione Matera Centrale',
      descrizione: `L'Istituto e' nella zona moderna (Matera Nord).
1. Dalla stazione centrale, e' raggiungibile a piedi (10-15 min) o con bus urbano.
2. Si trova in una zona residenziale/commerciale (Via Lazazzera).`,
      mezziPubblici: ['A piedi', 'Bus Miccolis'],
      tempoStimato: '10 min',
      note: 'Molto comodo logisticamente, lontano dai disagi dei Sassi.'
    });
  }

  return directions;
};

// Note Strategiche per l'App (Basilicata AFAM Edition)
// 1) Matera Conservatorio: warning "turist trap" + ZTL. Parcheggi esterni consigliati.
// 2) Potenza: facile parcheggio (unica sede a Potenza). Vantaggio per pendolari.
// 3) IDM: accesso carrabile facile, ideale per portare tavole/plastici/computer pesanti.
// 4) Orari ridotti biblioteca Potenza: tag "Check Opening Hours" / "By Appointment".
// 5) Acustica: specifica che aule studio conservatori permeabili al suono; consiglia Nazionale/Stigliani per silenzio assoluto.
