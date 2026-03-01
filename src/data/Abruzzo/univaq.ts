import { StudyRoom, DirectionsFromLocation } from '../../types';

export const univaqRooms: StudyRoom[] = [
  // ============================================================
  // POLO DI COPPITO (Scienze, Fisica, Matematica, Medicina)
  // ============================================================
  {
    id: 'univaq_coppito_acquario',
    nome: 'Aula Studio "L\'Acquario"',
    edificio: 'Coppito 1 (Piano Terra, ingresso principale)',
    piano: 0,
    postiDisponibili: 150,
    postiTotali: 150,
    orarioApertura: '08:00',
    orarioChiusura: '20:00',
    servizi: ['WiFi UnivAQ', 'Socialità', 'Distributori automatici', 'Prese elettriche', 'Mensa ADSU vicina'],
    latitude: 42.3676,
    longitude: 13.3522,
    indirizzo: 'Via Vetoio, Coppito 1, 67100 L\'Aquila',
    university: 'Univaq',
    occupancy_rate: 'Molto Alto',
    notes: 'Chiamata "Acquario" per le pareti a vetri. È il punto di ritrovo principale. C\'è brusio, non adatta a chi cerca silenzio assoluto. Ecosistema Mensa + Studio molto comodo.',
    tags: ['Social Hub']
  },
  {
    id: 'univaq_biblio_scienze',
    nome: 'Biblioteca Area Scientifica (BATS)',
    edificio: 'Coppito 2 (Edificio Angelo Camillo De Meis)',
    piano: 1,
    postiDisponibili: 180,
    postiTotali: 200,
    orarioApertura: '08:30',
    orarioChiusura: '19:00', // Spesso chiude prima dell'Acquario
    servizi: ['Silenzio Assoluto', 'Consultazione Testi', 'WiFi', 'Postazioni PC'],
    latitude: 42.3680,
    longitude: 13.3530,
    indirizzo: 'Via Vetoio, Coppito 2, 67100 L\'Aquila',
    university: 'Univaq',
    notes: 'La vera aula studio per chi deve concentrarsi. Richiesto silenzio rigoroso.',
    tags: ['Deep Work']
  },
  {
    id: 'univaq_biblio_medicina',
    nome: 'Biblioteca Area Medica',
    edificio: 'Edificio Delta 6 (Area Medicina)',
    piano: 0,
    postiDisponibili: 80,
    postiTotali: 100,
    orarioApertura: '08:30',
    orarioChiusura: '18:00',
    servizi: ['WiFi', 'Testi Medicina', 'Aria Condizionata'],
    latitude: 42.3665,
    longitude: 13.3510,
    indirizzo: 'Via Vetoio, Delta 6, 67100 L\'Aquila',
    university: 'Univaq',
    notes: 'Frequentata prevalentemente da studenti di Medicina e Odontoiatria.',
    tags: ['Deep Work']
  },
  {
    id: 'univaq_coppito_corridoi',
    nome: 'Spazi Studio "I Tavoloni" (Informale)',
    edificio: 'Coppito 1 e 2 (Vari piani)',
    piano: 0, // Vari piani
    postiDisponibili: 300,
    postiTotali: 500, // Stima degli spazi diffusi
    orarioApertura: '08:00',
    orarioChiusura: '20:00',
    servizi: ['Accesso Libero', 'Senza prenotazione'],
    latitude: 42.3676,
    longitude: 13.3522,
    indirizzo: 'Via Vetoio, Coppito, 67100 L\'Aquila',
    university: 'Univaq',
    notes: 'Lungo tutti i corridoi di Coppito ci sono tavoli e sedie. Se le aule ufficiali sono piene, qui si trova sempre posto. Rumoroso durante i cambi d\'ora.',
    tags: ['Social Hub']
  },

  // ============================================================
  // POLO DI ROIO (Ingegneria)
  // ============================================================
  {
    id: 'univaq_biblio_ingegneria',
    nome: 'Biblioteca Area Ingegneria',
    edificio: 'Facoltà di Ingegneria (Monteluco)',
    piano: 1, // Corpo centrale
    postiDisponibili: 90,
    postiTotali: 100,
    orarioApertura: '08:30',
    orarioChiusura: '18:30',
    servizi: ['WiFi', 'Silenzio', 'Vista Panoramica'],
    latitude: 42.3358,
    longitude: 13.3765,
    indirizzo: 'Piazzale Ernesto Pontieri, Roio, 67100 L\'Aquila',
    university: 'Univaq',
    notes: 'Ambiente molto luminoso e tranquillo, isolato dal caos cittadino.',
    tags: ['Panoramica / Focus']
  },
  {
    id: 'univaq_aule_studio_roio',
    nome: 'Aule Studio Libere Roio',
    edificio: 'Facoltà di Ingegneria',
    piano: 0,
    postiDisponibili: 60,
    postiTotali: 80,
    orarioApertura: '08:00',
    orarioChiusura: '19:30',
    servizi: ['Tavoli da disegno', 'WiFi'],
    latitude: 42.3358,
    longitude: 13.3765,
    indirizzo: 'Piazzale Ernesto Pontieri, Roio, 67100 L\'Aquila',
    university: 'Univaq',
    notes: 'Spesso vengono usate le aule didattiche non occupate per studiare in gruppo o fare progetti.',
    tags: ['Panoramica / Focus']
  },

  // ============================================================
  // POLO CENTRO / UMANE / ECONOMIA
  // ============================================================
  {
    id: 'univaq_biblio_umane',
    nome: 'Biblioteca "Alessandro Clementi" (Umane)',
    edificio: 'Dipartimento Scienze Umane',
    piano: 0,
    postiDisponibili: 120,
    postiTotali: 150,
    orarioApertura: '08:30',
    orarioChiusura: '19:00',
    servizi: ['WiFi', 'Consultazione', 'Postazioni lettura'],
    latitude: 42.3555,
    longitude: 13.3960,
    indirizzo: 'Viale Nizza 14, 67100 L\'Aquila',
    university: 'Univaq',
    notes: 'La principale risorsa per chi studia in centro. Recentemente rinnovata.',
    tags: ['Deep Work']
  },
  {
    id: 'univaq_biblio_economia',
    nome: 'Biblioteca Area Economica',
    edificio: 'Ex Carcere Minorile / Complesso San Basilio',
    piano: 0,
    postiDisponibili: 50,
    postiTotali: 60,
    orarioApertura: '09:00',
    orarioChiusura: '17:00',
    servizi: ['WiFi', 'Ambiente raccolto'],
    latitude: 42.3560,
    longitude: 13.3970,
    indirizzo: 'Via Giuseppe Mezzanotte / San Basilio, 67100 L\'Aquila',
    university: 'Univaq',
    notes: 'Situata nel complesso adiacente a Scienze Umane.',
    tags: ['Deep Work']
  },

  // ============================================================
  // SPAZI ADSU & ALTRI (Diritto allo studio)
  // ============================================================
  {
    id: 'adsu_moro',
    nome: 'Sala Studio Residenza "Moro" (ADSU)',
    edificio: 'Complesso Residenziale ADSU',
    piano: 0,
    postiDisponibili: 40,
    postiTotali: 50,
    orarioApertura: '08:00',
    orarioChiusura: '23:00', // Spesso orari estesi per residenti
    servizi: ['WiFi', 'Aperta fino a tardi'],
    latitude: 42.3650,
    longitude: 13.3480,
    indirizzo: 'Via Borsellino e Falcone, zona Bellavista (Vicino Coppito)',
    university: 'Univaq',
    notes: 'Accessibile prioritariamente ai borsisti/residenti, ma punto di riferimento per chi vive in zona Coppito ovest.',
    tags: ['ADSU']
  },
  // ============================================================
  // CENTRO STORICO - SPAZI STUDENTESCHI
  // ============================================================
  {
    id: 'univaq_praxis',
    nome: 'Spazio Praxis (Aula Studio UDU)',
    edificio: 'Spazio gestito dagli studenti (UDU)',
    piano: 0,
    postiDisponibili: 30,
    postiTotali: 40,
    orarioApertura: '10:00',
    orarioChiusura: '20:00',
    servizi: ['WiFi', 'Socialità', 'Eventi culturali'],
    latitude: 42.3510,
    longitude: 13.3960,
    indirizzo: 'Via Veneziani 4, 67100 L\'Aquila',
    university: 'Univaq',
    occupancy_rate: 'Alto',
    notes: 'Spazio autogestito dal sindacato studentesco UDU. Tessera associativa 2€. Orari variabili comunicati via Instagram (@spazio_praxis). Atmosfera vivace e inclusiva.',
    tags: ['Autogestita', 'Social Hub', 'Centro'],
  }
];

export const getDirectionsUnivaq = (room: StudyRoom): DirectionsFromLocation[] => {
  const directions: DirectionsFromLocation[] = [];

  // Identificazione della zona in base all'ID o indirizzo
  const isCoppito = room.indirizzo.includes('Vetoio') || room.id.includes('coppito') || room.id.includes('medicina') || room.id.includes('scienze');
  const isRoio = room.indirizzo.includes('Roio') || room.indirizzo.includes('Pontieri');
  const isCentro = room.indirizzo.includes('Nizza') || room.indirizzo.includes('Basilio') || room.indirizzo.includes('Mezzanotte');
  const isADSU = room.id.includes('adsu');

  // HUB 1: TERMINAL BUS COLLEMAGGIO
  if (isCoppito || isADSU) {
    directions.push({
      luogo: 'Terminal Bus Collemaggio',
      descrizione: `Per Coppito (Biblioteche, Acquario, Medicina):
1. Prendi bus AMA linee **1** (direz. Ospedale/Coppito) o **6**.
2. Scendi alla fermata **Università Coppito**.
3. Per **Coppito 1/Acquario**: Segui la folla verso l'ingresso principale basso.
4. Per **Coppito 2/Biblioteca Scienze**: È l'edificio subito a destra dell'Acquario.
5. Per **Delta 6/Medicina**: Prosegui verso l'Ospedale, edificio in fondo al campus.`,
      mezziPubblici: ['Bus AMA 1', 'Bus AMA 6'],
      tempoStimato: '20 min',
      note: 'Biglietto acquistabile via SMS o app AMA.'
    });
  }

  if (isRoio) {
    directions.push({
      luogo: 'Terminal Bus Collemaggio',
      descrizione: `Per la Biblioteca di Ingegneria (Roio):
1. Cerca lo stallo per la linea **Roio / Ingegneria**.
2. Il bus sale per circa 15-20 minuti.
3. Scendi al capolinea (Piazzale Pontieri).
4. Entra nell'edificio principale: la biblioteca è al primo livello, spesso indicata dalla segnaletica interna.`,
      mezziPubblici: ['Bus Navetta Ingegneria'],
      tempoStimato: '25 min',
      note: 'Attenzione agli orari: l\'ultima corsa a scendere spesso non è molto tardi la sera.'
    });
  }

  if (isCentro) {
    directions.push({
      luogo: 'Terminal Bus Collemaggio',
      descrizione: `Per le biblioteche Umane ed Economia:
1. Sali in centro col **Tunnel di Collemaggio** (piedi) o navetta.
2. Arrivato a Piazza Duomo, prosegui su Corso Vittorio Emanuele verso la Fontana Luminosa.
3. Prima della Fontana, gira a sinistra verso **Viale Nizza / San Basilio**.
4. Biblioteca Umane: Edificio giallo su Viale Nizza.
5. Biblioteca Economia: Complesso interno San Basilio.`,
      mezziPubblici: ['A piedi', 'Navetta Centro'],
      tempoStimato: '15-20 min',
      note: 'Zona ZTL, ideale muoversi a piedi.'
    });
  }

  // HUB 2: STAZIONE FERROVIARIA
  directions.push({
    luogo: 'Stazione FS L\'Aquila',
    descrizione: `Dalla stazione dei treni:
1. Non sei né in centro né a Coppito.
2. Ti conviene prendere un bus verso il **Terminal Collemaggio** (per andare in centro/Roio) o verso la **SS17/Ovest** (per andare a Coppito).
3. Sconsigliato andare a piedi a Roio o Coppito dalla stazione.`,
    mezziPubblici: ['Bus AMA'],
    tempoStimato: 'Variabile',
    note: 'La stazione è in valle, l\'università è sparsa in alto o in periferia.'
  });

  return directions;
};
