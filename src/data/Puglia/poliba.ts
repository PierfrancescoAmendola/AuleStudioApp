import { StudyRoom, DirectionsFromLocation } from '../../types';

export const polibaRooms: StudyRoom[] = [
    // ============================================================
    // BARI CAMPUS - BIBLIOTECHE PRINCIPALI
    // ============================================================
    {
        id: 'poliba_biblio_caianiello',
        nome: 'Biblioteca Centrale "Enrico Caianiello"',
        edificio: 'Plesso Centrale PoliBa',
        piano: 1,
        postiDisponibili: 320,
        postiTotali: 380,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Prese Elettriche', 'Silenzio Assoluto'],
        latitude: 41.1085,
        longitude: 16.8800,
        indirizzo: 'Via Edoardo Orabona 4, Bari',
        university: 'PoliBa',
        occupancy_rate: 'Altissimo',
        tags: ['Biblioteca', 'Campus', '⚡ Prese', '🔇 Silenzio', '📊 Affollamento Alto'],
        notes: 'La biblioteca principale del Politecnico. Durante la sessione è una vera e propria guerra per trovare posto — arrivo prima delle 9:00 consigliato.'
    },
    {
        id: 'poliba_biblio_dicar',
        nome: 'Biblioteca DICAR (Architettura e Design)',
        edificio: 'Dipartimento DICAR',
        piano: 0,
        postiDisponibili: 90,
        postiTotali: 110,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['Tavoli Grandi', 'Riviste Design', 'Luce Naturale', 'Prese Elettriche'],
        latitude: 41.1095,
        longitude: 16.8805,
        indirizzo: 'Via Orabona 4, Bari',
        university: 'PoliBa',
        tags: ['Biblioteca', 'Campus', 'Architettura', '📐 Tavoli Grandi'],
        notes: 'Spazi ampi per tavole A0 e modellini. I tavoli extra-large sono fondamentali per gli studenti di Architettura.'
    },
    {
        id: 'poliba_biblio_dei',
        nome: 'Biblioteca DEI (Ingegneria Elettrica e Informatica)',
        edificio: 'Dipartimento DEI',
        piano: 2,
        postiDisponibili: 70,
        postiTotali: 90,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['Prese Cablate', 'Testi IT/Elettronica', 'WiFi Eduroam', 'Prese Elettriche'],
        latitude: 41.1082,
        longitude: 16.8815,
        indirizzo: 'Via Orabona 4, Bari',
        university: 'PoliBa',
        tags: ['Biblioteca', 'Campus', 'Informatica', '⚡ Prese Cablate'],
        notes: 'Rifugio per informatici ed elettronici. Prese cablate ovunque — il paradiso del laptop.'
    },
    {
        id: 'poliba_biblio_dmmm',
        nome: 'Biblioteca DMMM (Meccanica, Matematica, Management)',
        edificio: 'Dipartimento DMMM',
        piano: 1,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '08:30',
        orarioChiusura: '17:30',
        servizi: ['Testi Meccanica', 'Silenzio', 'Prese Elettriche'],
        latitude: 41.1090,
        longitude: 16.8790,
        indirizzo: 'Via Orabona 4, Bari',
        university: 'PoliBa',
        tags: ['Biblioteca', 'Campus', 'Meccanica', '⚡ Prese'],
        notes: 'Alternativa valida quando la Caianiello è piena. Meno affollata ma chiude prima.'
    },
    // ============================================================
    // BARI CAMPUS - AULE STUDIO E SPAZI COMUNI
    // ============================================================
    {
        id: 'poliba_aule_studio_corpo_o',
        nome: 'Aule Studio "Corpo O" (Nuovo Plesso)',
        edificio: 'Campus - Corpo O',
        piano: 0,
        postiDisponibili: 220,
        postiTotali: 270,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['Lavoro di Gruppo', 'Distributori', 'Prese Elettriche', 'WiFi Eduroam'],
        latitude: 41.1080,
        longitude: 16.8810,
        indirizzo: 'Via Orabona 4, Bari',
        university: 'PoliBa',
        occupancy_rate: 'Alto',
        tags: ['Aula Studio', 'Campus', '👥 Gruppi', '⚡ Prese'],
        notes: 'Spazi moderni per progetti di gruppo. Perfetto per sessioni di lavoro collaborative con prese ovunque.'
    },
    {
        id: 'poliba_aule_corpo_c',
        nome: 'Aule Studio "Corpo C"',
        edificio: 'Campus - Corpo C',
        piano: 0,
        postiDisponibili: 160,
        postiTotali: 190,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['Isolamento', 'Tavoli Studio', 'Prese Elettriche'],
        latitude: 41.1088,
        longitude: 16.8812,
        indirizzo: 'Via Orabona 4, Bari',
        university: 'PoliBa',
        tags: ['Aula Studio', 'Campus', '⚡ Prese'],
        notes: 'Aule e corridoi usati come spazi studio. Più tranquillo rispetto al Corpo O.'
    },
    {
        id: 'poliba_lab_info',
        nome: 'Laboratori Informatici Open Access',
        edificio: 'Dipartimenti DEI / Centrale',
        piano: 0,
        postiDisponibili: 110,
        postiTotali: 130,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['PC Fissi', 'Software CAD/MATLAB', 'Prese Elettriche', 'WiFi Eduroam'],
        latitude: 41.1083,
        longitude: 16.8808,
        indirizzo: 'Via Orabona 4, Bari',
        university: 'PoliBa',
        tags: ['Laboratorio', 'Campus', '💻 PC Fissi'],
        notes: 'Fondamentali per simulazioni pesanti. PC con MATLAB, AutoCAD e software di simulazione preinstallati.'
    },
    {
        id: 'poliba_piazzetta',
        nome: 'La "Piazzetta" PoliBa (Outdoor)',
        edificio: 'Spazio Esterno Centrale',
        piano: 0,
        postiDisponibili: 150,
        postiTotali: 150,
        orarioApertura: 'H24',
        orarioChiusura: 'H24',
        servizi: ['Pausa Caffè', 'Socialità', 'Aperto Domenica'],
        latitude: 41.1088,
        longitude: 16.8802,
        indirizzo: 'Campus Via Orabona, Bari',
        university: 'PoliBa',
        tags: ['Outdoor', 'Campus', '☀️ All\'aperto'],
        notes: 'Hub sociale del Politecnico. Perfetto per pause e discussioni tra una lezione e l\'altra.'
    },
    // ============================================================
    // TARANTO - POLO "MAGNA GRECIA" E CITTÀ VECCHIA
    // ============================================================
    {
        id: 'poliba_taranto_magna_grecia_biblio',
        nome: 'Biblioteca Polo Magna Grecia',
        edificio: 'Centro Interdipartimentale',
        piano: 1,
        postiDisponibili: 90,
        postiTotali: 110,
        orarioApertura: '08:30',
        orarioChiusura: '17:30',
        servizi: ['Testi Navale/Aeronautica', 'Prese Elettriche', 'WiFi Eduroam'],
        latitude: 40.5255,
        longitude: 17.2655,
        indirizzo: 'Viale del Turismo 8, Taranto',
        university: 'PoliBa - Taranto',
        tags: ['Biblioteca', 'Taranto', 'Paolo VI'],
        notes: 'Spazio studio tecnico a Paolo VI. Zona periferica ma parcheggio facile e spazi moderni.'
    },
    {
        id: 'poliba_taranto_magna_grecia_aule',
        nome: 'Aule Studio Polo Magna Grecia',
        edificio: 'Centro Interdipartimentale',
        piano: 0,
        postiDisponibili: 170,
        postiTotali: 220,
        orarioApertura: '08:00',
        orarioChiusura: '19:00',
        servizi: ['Parcheggio Immenso', 'Mensa', 'Prese Elettriche', 'WiFi Eduroam'],
        latitude: 40.5250,
        longitude: 17.2650,
        indirizzo: 'Viale del Turismo 8, Taranto',
        university: 'PoliBa - Taranto',
        tags: ['Aula Studio', 'Taranto', 'Paolo VI', '🅿️ Parcheggio'],
        notes: 'Spazi vasti e moderni con parcheggio immenso gratuito. L\'opposto del caos di Bari centro.'
    },
    {
        id: 'poliba_taranto_citta_vecchia',
        nome: 'Sede Restauro / Architettura (Città Vecchia)',
        edificio: 'Ex Convento / Strutture Storiche',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 60,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Fascino Storico', 'Tavoli Grandi'],
        latitude: 40.4765,
        longitude: 17.2285,
        indirizzo: 'Città Vecchia, Taranto',
        university: 'PoliBa - Taranto',
        tags: ['Architettura', 'Taranto', 'Città Vecchia', '📐 Tavoli Grandi'],
        notes: 'Laboratorio a cielo aperto nel borgo antico. Studiare Restauro tra le mura storiche di Taranto è un\'esperienza unica.'
    }
];

export const getDirectionsPoliBa = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const isBariCampus = room.indirizzo.includes('Orabona');
    const isTarantoPaoloVI = room.indirizzo.includes('Turismo') || room.indirizzo.includes('Paolo VI');
    const isTarantoCentro = room.indirizzo.includes('Città Vecchia');

    // BARI CAMPUS (Via Orabona)
    if (isBariCampus) {
        directions.push({
            luogo: 'Stazione Bari Centrale',
            descrizione: `Per Campus PoliBa (Via Orabona 4):
1. **Bus AMTAB**: Linea 21 o 22 (direzione San Pasquale/Campus) → fermata "Orabona" o "PoliBa" (ogni 10-15 min)
2. **A piedi**: 20-25 min lungo Via Re David / Via Capruzzi
3. **Metro + Bus**: Linea 1 fermata "Bari Centrale" + bus
4. **In bici**: Pista ciclabile lungo Via Re David
**NOTE**: Parcheggio in zona Campus è molto difficile e controllato. Usa i mezzi o la bici.`,
            mezziPubblici: ['Bus AMTAB 21, 22', 'Bici'],
            tempoStimato: '15-25 min',
            note: 'Zona universitaria con verde e laboratori.'
        });
    }
    // TARANTO - POLO MAGNA GRECIA (Paolo VI)
    else if (isTarantoPaoloVI) {
        directions.push({
            luogo: 'Stazione Taranto / Centro',
            descrizione: `Per Polo Magna Grecia (Viale del Turismo, Paolo VI):
1. **Bus Kyma Mobilità**: Linee per Paolo VI / Viale del Turismo (es. linea 1 o 8)
2. **In auto**: SS7 o tangenziale → uscita Paolo VI (parcheggio immenso gratuito)
3. **A piedi dal centro**: 30-40 min (non consigliato)
**NOTE**: Il complesso è grande e moderno, con parcheggio facile.`,
            mezziPubblici: ['Bus Kyma', 'Auto'],
            tempoStimato: '20-25 min dal centro',
            note: 'Zona periferica, auto consigliata.'
        });
    }
    // TARANTO - CITTÀ VECCHIA
    else if (isTarantoCentro) {
        directions.push({
            luogo: 'Ponte Girevole / Centro Taranto',
            descrizione: `Per sedi nella Città Vecchia:
1. **A piedi o bus Kyma**: Attraversa il Ponte Girevole e entra nei vicoli dell'isola antica.
2. **Bus Kyma**: Linee per Città Vecchia.
**NOTE**: Zona pedonale affascinante ma con parcheggi limitati. L'auto è sconsigliata.`,
            mezziPubblici: ['Bus Kyma', 'A piedi'],
            tempoStimato: '10-15 min dal centro moderno',
            note: 'Borgo storico bellissimo.'
        });
    }

    return directions;
};
