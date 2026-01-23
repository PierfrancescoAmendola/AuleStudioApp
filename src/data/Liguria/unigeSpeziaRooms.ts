import { StudyRoom, DirectionsFromLocation } from '../../types';

export const unigeSpeziaRooms: StudyRoom[] = [
    // ============================================================
    // CAMPUS "G. MARCONI" (Viale Fieschi - Zona Arsenale/Stadio)
    // ============================================================
    {
        id: 'sp_campus_biblio',
        nome: 'Biblioteca Polo Spezia',
        edificio: 'Edificio Principale',
        piano: 1,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi Eduroam', 'Testi Nautici', 'Silenzio'],
        latitude: 44.1025,
        longitude: 9.8155,
        indirizzo: 'Viale Nicolò Fieschi 16/18, La Spezia',
        university: 'UniGe - Polo SP',
        occupancy_rate: 'Medio',
        notes: 'Biblioteca tecnica focus nautica/meccanica.'
    },
    {
        id: 'sp_campus_aule_studio',
        nome: 'Aule Studio e Spazi Comuni',
        edificio: 'Campus Marconi',
        piano: 0,
        postiDisponibili: 120,
        postiTotali: 150,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['AC', 'Prese', 'Group Work'],
        latitude: 44.1025,
        longitude: 9.8155,
        indirizzo: 'Viale Fieschi, La Spezia',
        university: 'UniGe - Polo SP',
        notes: 'Spazi moderni ex ospedale militare.'
    },
    {
        id: 'sp_campus_lab_design',
        nome: 'Laboratori Design Navale',
        edificio: 'Padiglione Lab',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Workstation', 'Plotter'],
        latitude: 44.1028,
        longitude: 9.8160,
        indirizzo: 'Viale Fieschi, La Spezia',
        university: 'UniGe - Polo SP',
        notes: 'Per Yacht Design.'
    },
    {
        id: 'sp_campus_mensa',
        nome: 'Mensa e Area Relax',
        edificio: 'Edificio Mensa',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 120,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Tavoli Esterni'],
        latitude: 44.1023,
        longitude: 9.8150,
        indirizzo: 'Campus Marconi, La Spezia',
        university: 'UniGe - Polo SP',
        notes: 'Spazio pausa/studio.'
    },
    // ============================================================
    // LA SPEZIA CENTRO (Civiche e Multimediale)
    // ============================================================
    {
        id: 'sp_beghi',
        nome: 'Biblioteca Civica "P.M. Beghi"',
        edificio: 'Ex Fitram Canaletto',
        piano: 0,
        postiDisponibili: 250,
        postiTotali: 300,
        orarioApertura: '08:00',
        orarioChiusura: '19:00',
        servizi: ['Design', 'WiFi', 'Eventi'],
        latitude: 44.1150,
        longitude: 9.8350,
        indirizzo: 'Via del Canaletto 100, La Spezia',
        university: 'UniGe - Polo SP',
        occupancy_rate: 'Altissimo',
        notes: 'Top moderna ex industriale.'
    },
    {
        id: 'sp_mazzini',
        nome: 'Biblioteca Storica "U. Mazzini"',
        edificio: 'Palazzo Crozza',
        piano: 1,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['Storica', 'Centro'],
        latitude: 44.1080,
        longitude: 9.8180,
        indirizzo: 'Corso Cavour 251, La Spezia',
        university: 'UniGe - Polo SP',
        notes: 'Atmosfera ottocentesca.'
    },
    {
        id: 'sp_mediateca',
        nome: 'Mediateca Regionale "Sergio Fregoso"',
        edificio: 'Ex Cinema Odeon',
        piano: 1,
        postiDisponibili: 100,
        postiTotali: 120,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['Multimediale', 'Bar'],
        latitude: 44.1100,
        longitude: 9.8150,
        indirizzo: 'Via Firenze 37, La Spezia',
        university: 'UniGe - Polo SP',
        notes: 'Informale per ricerche visive.'
    },
    // ============================================================
    // OUTDOOR NAUTICO
    // ============================================================
    {
        id: 'sp_mirabello',
        nome: 'Porto Mirabello (Yacht Spot)',
        edificio: 'Moli',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 100,
        orarioApertura: 'H24',
        orarioChiusura: 'H24',
        servizi: ['Vista Superyacht'],
        latitude: 44.1000,
        longitude: 9.8250,
        indirizzo: 'Viale Italia, La Spezia',
        university: 'UniGe - Polo SP',
        notes: 'Laboratorio vivo design nautico.'
    },
];

export const getDirectionsSpezia = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const isCampus = room.indirizzo.includes('Fieschi') || room.id.includes('campus');
    const isBeghi = room.id.includes('beghi');
    const isCentro = room.id.includes('mazzini') || room.id.includes('mediateca');
    const isMirabello = room.id.includes('mirabello');

    // CAMPUS MARCONI
    if (isCampus) {
        directions.push({
            luogo: 'Stazione La Spezia Centrale',
            descrizione: `Per Campus Marconi (Viale Fieschi):
1. **Bus ATC dalla Stazione** (Piazza Saint Bon):
   - Linea **P** (Portovenere) o **L** (Lerici) o **S** → fermata "Polo Universitario" o "Fieschi" (ogni 15-20 min)
   - Tempo: 10-15 min
2. **A piedi**: 25-30 min ovest (Via Fiume → Viale Fieschi)
3. **In bici**: 15 min
4. **In auto**: Parcheggio Piazza d'Armi/Stadio (gratuito, vicino)
**NOTE**: Campus ex ospedale militare.`,
            mezziPubblici: ['Bus ATC P, L, S', 'Bici'],
            tempoStimato: '10-15 min bus',
            note: 'Giorni partite Spezia: traffico!'
        });
    }
    // BEGHI CANALETTO
    else if (isBeghi) {
        directions.push({
            luogo: 'Stazione / Centro',
            descrizione: `Per Beghi (Via Canaletto):
1. **Bus ATC**: Linea **3** o **5** → fermata "Canaletto Beghi"
2. **In bici**: Pista ciclabile lungomare
3. **In auto**: Parcheggio gratuito davanti
**NOTE**: Ex capannone, bellissima.`,
            mezziPubblici: ['Bus ATC 3, 5'],
            tempoStimato: '15 min',
            note: 'Zona est.'
        });
    }
    // CENTRO (Mazzini / Mediateca)
    else if (isCentro) {
        directions.push({
            luogo: 'Stazione Centrale',
            descrizione: `Per centro (Corso Cavour / Via Firenze):
1. **A piedi**: 10-15 min (Via Prione pedonale)
2. **Bus ATC urbane**: Fermata centro
**NOTE**: Pedonale, facile.`,
            mezziPubblici: ['A piedi'],
            tempoStimato: '10-15 min',
            note: 'Centro storico.'
        });
    }
    // MIRABELLO
    else if (isMirabello) {
        directions.push({
            luogo: 'Campus / Centro',
            descrizione: `Per Porto Mirabello:
1. **A piedi dal Campus**: 20 min lungomare
2. **Bus ATC**: Linea costiera
**NOTE**: Vista superyacht.`,
            mezziPubblici: ['A piedi'],
            tempoStimato: '20 min',
            note: 'Ispirazione nautica.'
        });
    }

    // Info generali
    directions.push({
        luogo: 'Info Generali Polo Spezia',
        descrizione: `**Polo piccolo**: Nautica, Design Navale, Meccanica.
**Bus**: App ATC La Spezia orari.
La Spezia "città del mare", campus focus navale.`,
        mezziPubblici: ['ATC Bus', 'A piedi/Bici'],
        tempoStimato: 'Max 20 min',
        note: 'Polo moderno tranquillo.'
    });

    return directions;
};
