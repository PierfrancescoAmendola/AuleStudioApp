import { StudyRoom, DirectionsFromLocation } from '../../types';

export const afamPiemonteRooms: StudyRoom[] = [
    // ============================================================
    // TORINO - ACCADEMIA ALBERTINA
    // ============================================================
    {
        id: 'aba_albertina_to',
        nome: 'Biblioteca Storica Accademia Albertina',
        edificio: 'Sede Storica',
        piano: 1,
        postiDisponibili: 70,
        postiTotali: 90,
        orarioApertura: '09:00',
        orarioChiusura: '17:30',
        servizi: ['Fondi Antichi', 'Pinacoteca Annessa', 'Silenzio', 'Ambiente Storico', 'Gessi e Tele Antiche'],
        latitude: 45.0665,
        longitude: 7.6880,
        indirizzo: 'Via Accademia Albertina 6, Torino',
        university: 'AFAM',
        occupancy_rate: 'Medio',
        notes: 'Ambiente storico straordinario. Studiare circondati da gessi e tele antiche. Accademia classica con tradizione secolare — affresco, scultura, pittura.',
        tags: ['Biblioteca', '❄️ Climatizzato', '🔇 Silenzio'],
    },
    {
        id: 'aba_albertina_lab',
        nome: 'Laboratori e Aule Pittura/Scultura',
        edificio: 'Palazzo dell\'Accademia',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 130,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['Cavalletti', 'Modelli', 'Atelier', 'Spazio Ampio', 'Acqua Corrente'],
        latitude: 45.0665,
        longitude: 7.6880,
        indirizzo: 'Via Accademia Albertina 6, Torino',
        university: 'AFAM',
        notes: 'Spazi operativi per arti visive. Tradizione classica — cavalletti, modelli dal vero, atelier di scultura.',
        tags: ['Laboratorio', '❄️ Climatizzato'],
    },
    // ============================================================
    // TORINO - IED & IAAD (Design Hubs)
    // ============================================================
    {
        id: 'ied_torino_lab',
        nome: 'Laboratori e Aule IED Torino',
        edificio: 'Sede Centrale IED',
        piano: 0,
        postiDisponibili: 120,
        postiTotali: 150,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['Mac Lab', 'Modellistica', 'Fashion Design', 'Prese Elettriche Ovunque', 'Tavoli Spaziosi', 'Rendering 3D', 'WiFi Ultra-Stabile'],
        latitude: 45.0660,
        longitude: 7.6740,
        indirizzo: 'Via San Quintino 39, Torino',
        university: 'AFAM',
        notes: '💡 Hub creativo internazionale. Zona Crocetta/Porta Nuova — comodo per pendolari in treno. Non è silenzio da biblioteca: è il ronzio delle ventole che renderizzano 3D. Prese e tavoli spaziosi ovunque.',
        tags: ['Laboratorio', 'WiFi', '⚡ Prese', '❄️ Climatizzato'],
    },
    {
        id: 'iaad_torino_open',
        nome: 'Open Space IAAD',
        edificio: 'Headquarters IAAD',
        piano: 1,
        postiDisponibili: 140,
        postiTotali: 170,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['Transportation Design', 'Coworking', 'Prese Elettriche Ovunque', 'Tavoli Spaziosi', 'Rendering 3D', 'Plastici e Prototipi', 'WiFi Ultra-Stabile'],
        latitude: 45.0805,
        longitude: 7.6935,
        indirizzo: 'Via Pisa 5, Torino',
        university: 'AFAM',
        notes: '💡 Quartiere Aurora, di fianco alla Nuvola Lavazza — ex zona industriale ora distretto creativo. Raggiungibile da Porta Susa con bus (non a piedi con plastici pesanti!). Prese e tavoli spaziosi per modelli e prototipi.',
        tags: ['Aula Studio', 'WiFi', '⚡ Prese'],
    },
    // ============================================================
    // CONSERVATORI TORINO E PROVINCIA
    // ============================================================
    {
        id: 'cons_verdi_to',
        nome: 'Biblioteca Conservatorio "G. Verdi"',
        edificio: 'Palazzo del Conservatorio',
        piano: 1,
        postiDisponibili: 60,
        postiTotali: 75,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['Partiture Rare', 'Vista Piazza Bodoni', 'Silenzio', 'Strumenti in Viaggio Friendly'],
        latitude: 45.0640,
        longitude: 7.6830,
        indirizzo: 'Via Mazzini 11, Torino',
        university: 'AFAM',
        notes: '🎵 INSIDER TIP: Piazza Bodoni è il "salotto musicale" di Torino. Durante la bella stagione e prima dei diplomi, gli studenti si esercitano a finestre aperte o direttamente in piazza — ascolto gratuito! 📍 8 min a piedi da Porta Nuova (fattibile anche con violoncello). Biblioteca musicale di altissimo livello.',
        tags: ['Biblioteca', '🔇 Silenzio'],
    },
    {
        id: 'cons_vivaldi_al',
        nome: 'Biblioteca Conservatorio "Vivaldi"',
        edificio: 'Palazzo Cuttica',
        piano: 0,
        postiDisponibili: 45,
        postiTotali: 55,
        orarioApertura: '09:30',
        orarioChiusura: '17:30',
        servizi: ['Chitarra Classica', 'Spartiti', 'Strumenti in Viaggio Friendly'],
        latitude: 44.9125,
        longitude: 8.6180,
        indirizzo: 'Via Parma 1, Alessandria',
        university: 'AFAM',
        notes: 'Eccellenza per chitarra e musica classica. 📍 10 min a piedi dalla stazione FS (percorso piano, fattibile con strumenti). Zona pedonale centrale.',
        tags: ['Biblioteca'],
    },
    {
        id: 'cons_cantelli_no',
        nome: 'Biblioteca Conservatorio "Cantelli"',
        edificio: 'Collegio Gallarini',
        piano: 1,
        postiDisponibili: 40,
        postiTotali: 50,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['Cortile Interno', 'Strumenti in Viaggio Friendly'],
        latitude: 45.4420,
        longitude: 8.6220,
        indirizzo: 'Via Collegio Gallarini 1, Novara',
        university: 'AFAM',
        notes: 'Intima e raccolta. 📍 12 min a piedi dalla stazione FS (percorso pianeggiante, gestibile con strumenti). Ottimi collegamenti Milano (40 min) e Torino (1h).',
        tags: ['Biblioteca'],
    },
    {
        id: 'cons_ghedini_cn',
        nome: 'Biblioteca Conservatorio "Ghedini"',
        edificio: 'Sede Storica',
        piano: 1,
        postiDisponibili: 35,
        postiTotali: 45,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['METS - Musica Elettronica', 'Synth & Hardware', 'Prese Elettriche', 'Cavi Audio'],
        latitude: 44.3910,
        longitude: 7.5485,
        indirizzo: 'Via Roma 19, Cuneo',
        university: 'AFAM',
        notes: '🎹 Famoso per Musica Elettronica (laboratorio METS). Chi studia qui porta sintetizzatori, laptop e hardware pesante. Aule attrezzate con cavi e prese. 📍 15 min a piedi dalla stazione FS. ⚠️ Via Roma è pedonale: perfetta per pause pranzo nei dehors, ma attenzione allo scarico strumenti dall\'auto (ZTL con permesso temporaneo).',
        tags: ['Biblioteca', '⚡ Prese'],
    },
    // ============================================================
    // ALTRE ACCADEMIE E ISTITUTI
    // ============================================================
    {
        id: 'acme_novara_media',
        nome: 'Laboratori Multimediali ACME',
        edificio: 'Sede ACME Novara',
        piano: 1,
        postiDisponibili: 60,
        postiTotali: 75,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Digital Art', 'Video', 'Cuffie', 'WiFi Ultra-Stabile', 'Tavolette Grafiche', 'Prese Elettriche'],
        latitude: 45.4460,
        longitude: 8.6190,
        indirizzo: 'Via Costantino Porta 25, Novara',
        university: 'AFAM',
        notes: '💻 Focus nuovi media e fumetto digitale. A differenza delle accademie storiche (Albertina = affresco/scultura), qui si cerca WiFi ultra-stabile e spazio per tavolette grafiche, non cavalletti. 📍 15 min a piedi dalla stazione FS.',
        tags: ['Laboratorio', 'WiFi', '⚡ Prese'],
    },
    {
        id: 'aba_cuneo_centro',
        nome: 'Aule Progettazione Accademia Cuneo',
        edificio: 'Sede Centrale',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 65,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Moda', 'Design', 'Grafica', 'Tavoli Spaziosi'],
        latitude: 44.3900,
        longitude: 7.5480,
        indirizzo: 'Via Roma 17, Cuneo',
        university: 'AFAM',
        notes: 'Nel salotto buono di Cuneo (Via Roma pedonale). Tavoli spaziosi per progettazione. ⚠️ Stessa nota ZTL del Ghedini per scarico materiali.',
        tags: ['Aula Studio'],
    }
];

export const getDirectionsAFAMPiemonte = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const isTorinoCentro = room.indirizzo.includes('Albertina') || room.id.includes('verdi');
    const isTorinoDesign = room.id.includes('ied') || room.id.includes('iaad');
    const isNovara = room.indirizzo.includes('Novara');
    const isAlessandria = room.indirizzo.includes('Alessandria');
    const isCuneo = room.indirizzo.includes('Cuneo');

    // TORINO CENTRO (Albertina & Verdi)
    if (isTorinoCentro) {
        directions.push({
            luogo: 'Stazione Porta Nuova',
            descrizione: `**Per Accademia Albertina e Conservatorio Verdi:**
1. **A piedi (8-12 min)**: Via Lagrange → Via Accademia Albertina o Piazza Bodoni. Percorso sotto i portici, fattibile anche con strumenti musicali (violoncello, chitarra).
2. **Metro Linea 1** fermata "Porta Nuova" + 5 min a piedi.
3. **Tram 9** o **Bus 68**.
**NOTE**: Tutto nel cuore di Torino, ZTL pedonale. Piazza Bodoni = "salotto musicale" della città.`,
            mezziPubblici: ['A piedi', 'Metro 1', 'Tram 9', 'Bus 68'],
            tempoStimato: '8-12 min a piedi',
            note: '🎵 Piazza Bodoni: ascolto gratuito durante la bella stagione!'
        });
    }
    // TORINO DESIGN HUBS (IED & IAAD)
    else if (isTorinoDesign) {
        if (room.id.includes('ied')) {
            directions.push({
                luogo: 'Stazione Porta Nuova',
                descrizione: `**Per IED Torino (Via San Quintino 39):**
1. **Metro Linea 1** fermata "Re Umberto" + 3 min a piedi. Percorso breve e comodo.
2. **A piedi dalla stazione**: 10 min (Via Nizza → Via San Quintino).
**NOTE**: Zona Crocetta/Porta Nuova — molto comodo per pendolari in treno. Prese elettriche e tavoli spaziosi ovunque.`,
                mezziPubblici: ['Metro 1 (fermata Re Umberto)', 'A piedi'],
                tempoStimato: '3 min da Metro / 10 min a piedi',
                note: 'Hub design centralissimo. Non è silenzio da biblioteca: ronzio di ventole e rendering 3D.'
            });
        } else {
            directions.push({
                luogo: 'Stazione Porta Susa',
                descrizione: `**Per IAAD Torino (Via Pisa 5 - Quartiere Aurora):**
1. **Bus 51 o 11** da Porta Susa verso Aurora/Nuvola Lavazza (15 min).
2. **A piedi da Porta Susa**: 20-25 min (sconsigliato con plastici o prototipi pesanti).
3. **Tram 4** fermata "Dora" + 10 min a piedi.
**NOTE**: Ex zona industriale ora distretto creativo. Di fianco al quartier generale Lavazza. ⚠️ Con plastici/prototipi ingombranti, usare il bus!`,
                mezziPubblici: ['Bus 51', 'Bus 11', 'Tram 4'],
                tempoStimato: '15 min in bus da Porta Susa',
                note: 'Quartiere Aurora: industriale-creativo. Prese e tavoli spaziosi per modelli.'
            });
        }
    }
    // NOVARA
    else if (isNovara) {
        directions.push({
            luogo: 'Stazione FS Novara',
            descrizione: `**Per ACME e Conservatorio Cantelli:**
1. **A piedi (12-15 min)**: Dal piazzale della stazione verso il centro storico. Percorso pianeggiante, gestibile con strumenti musicali o attrezzatura digitale.
2. **Bus SUN**: Linee centro (fermata vicino Piazza Martiri).
**NOTE**: Novara compatta e pianeggiante. Ottimi collegamenti: Milano 40 min, Torino 1h.`,
            mezziPubblici: ['A piedi', 'Bus SUN'],
            tempoStimato: '12-15 min a piedi',
            note: 'Distanza stazione gestibile anche con strumenti.'
        });
    }
    // ALESSANDRIA
    else if (isAlessandria) {
        directions.push({
            luogo: 'Stazione FS Alessandria',
            descrizione: `**Per Conservatorio Vivaldi (Via Parma 1):**
1. **A piedi (10-12 min)**: Piazzale stazione → Piazza Matteotti → Via Parma. Percorso piano, fattibile con strumenti.
2. **Bus AMAG**: Linee centro.
**NOTE**: Zona pedonale centrale. Eccellenza per chitarra — attenzione al trasporto custodie rigide in treno (Alessandria ben collegata verso Genova, Torino, Milano).`,
            mezziPubblici: ['A piedi', 'Bus AMAG'],
            tempoStimato: '10-12 min a piedi',
            note: 'Percorso piatto, comodo per strumenti.'
        });
    }
    // CUNEO
    else if (isCuneo) {
        directions.push({
            luogo: 'Stazione FS Cuneo',
            descrizione: `**Per Accademia e Conservatorio Ghedini (Via Roma):**
1. **A piedi (15-20 min)**: Corso Nizza fino a Via Roma (zona pedonale). Percorso lungo ma pianeggiante.
2. **Bus urbano**: Fermata centro.
**NOTE**: Via Roma è il salotto porticato di Cuneo. ⚠️ ZTL pedonale: perfetta per pause pranzo nei dehors, ma se devi scaricare synth/hardware pesanti dall'auto, chiedi permesso temporaneo ZTL.`,
            mezziPubblici: ['A piedi', 'Bus urbano'],
            tempoStimato: '15-20 min a piedi',
            note: 'ZTL: contattare conservatorio per permesso scarico strumenti.'
        });
    }

    // INFO GENERALI
    directions.push({
        luogo: 'Informazioni Generali AFAM Piemonte',
        descrizione: `**AFAM Piemonte — Alta Formazione Artistica, Musicale e Coreutica**
- **Torino**: Accademia Albertina (arti classiche), IED (design/fashion, centralissimo), IAAD (transportation design, Aurora), Conservatorio Verdi (Piazza Bodoni).
- **Provincia**: Cantelli (Novara), Vivaldi (Alessandria — chitarra), Ghedini (Cuneo — musica elettronica), ACME (Novara — digital art).
- **Pendolari con strumenti**: La rete ferroviaria piemontese collega bene tutti i conservatori. Distanze stazione → sede sempre ≤ 20 min a piedi. Per strumenti ingombranti (contrabbasso, synth), verificare accessibilità bus.
- **Design Hub**: IED e IAAD non sono biblioteche silenziose — sono spazi dinamici con prese ovunque e tavoli per prototipi/rendering.
- **Trasporti**: GTT (Torino), SUN (Novara), AMAG (Alessandria), bus urbani (Cuneo).`,
        mezziPubblici: [],
        tempoStimato: '-',
        note: 'Verificare sempre orari aggiornati sui siti delle singole istituzioni.'
    });

    return directions;
};
