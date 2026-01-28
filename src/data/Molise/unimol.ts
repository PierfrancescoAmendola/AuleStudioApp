import { StudyRoom, DirectionsFromLocation } from '../../types';
import { unimolPescheRooms, getDirectionsPesche } from './pesche';
import { unimolTermoliRooms, getDirectionsTermoli } from './termoli';


export const unimolCampobassoRooms: StudyRoom[] = [
    // ============================================================
    // CAMPOBASSO - CAMPUS VAZZIERI (Sede Centrale)
    // ============================================================
    {
        id: 'unimol_vazzieri_biblio',
        nome: "Bibliomediateca d'Ateneo",
        edificio: 'Edificio di Rettorato e Biblioteca',
        piano: 1,
        postiDisponibili: 300,
        postiTotali: 350,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['WiFi Eduroam', 'Postazioni PC', 'Fotocopie', 'Box studio silenzioso', 'Area relax'],
        latitude: 41.562150, // Coordinate verificate (Viale Manzoni)
        longitude: 14.667536,
        indirizzo: 'Viale Alessandro Manzoni, 86100 Campobasso',
        university: 'UniMol',
        occupancy_rate: 'Alto (specie in sessione)',
        notes: 'Hub principale. Accesso con badge universitario. Prenotazione consigliata per i box vetrata.'
    },
    {
        id: 'unimol_sala_leonardo',
        nome: 'Sala Studio "Leonardo da Vinci"',
        edificio: 'Edificio Polifunzionale',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 50,
        orarioApertura: '08:00',
        orarioChiusura: '22:00',
        servizi: ['WiFi Eduroam', 'Prese elettriche', 'Silenzio assoluto', 'Accesso disabili'],
        latitude: 41.563112,
        longitude: 14.668943,
        indirizzo: 'Via Francesco De Sanctis, 86100 Campobasso',
        university: 'UniMol',
        occupancy_rate: 'Medio-Alto',
        notes: 'Accesso riservato a studenti UniMol. **Prenotazione obbligatoria** tramite portale Esse3/App UniMol.'
    },
    {
        id: 'unimol_aula_studio_economia',
        nome: 'Aula Studio Dipartimento Economia',
        edificio: 'Blocco Aule Economia',
        piano: 1,
        postiDisponibili: 25,
        postiTotali: 30,
        orarioApertura: '07:30',
        orarioChiusura: '20:30',
        servizi: ['WiFi Eduroam', 'Proiettore', 'Lavagna', 'Postazioni gruppo'],
        latitude: 41.562894,
        longitude: 14.669220,
        indirizzo: 'Viale Manzoni (angolo Via De Sanctis), 86100 Campobasso',
        university: 'UniMol',
        occupancy_rate: 'Variabile',
        notes: 'Spesso utilizzata per studio informale tra le lezioni. Controllare calendario aule.'
    },
    // ============================================================
    // CAMPOBASSO - POLO MEDICINA (Tappino)
    // ============================================================
    {
        id: 'unimol_tappino_biblio',
        nome: 'Biblioteca Medica "Vincenzo Tiberio"',
        edificio: 'Polo Didattico di Medicina - Ospedale A. Cardarelli',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 120,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Banco prestito specialistico', 'Archivio storico', 'Postazioni medico/scientifiche'],
        latitude: 41.544830, // Coordinate verificate (Contrada Tappino)
        longitude: 14.684580,
        indirizzo: 'Contrada Tappino, 86100 Campobasso',
        university: 'UniMol',
        occupancy_rate: 'Medio',
        notes: "Accesso diretto dall'ingresso principale del polo didattico. **Attenzione**: orari possono ridursi in estate."
    },
    // ============================================================
    // CAMPOBASSO - BIBLIOTECA CIVICA (Servizio esterno convenzionato)
    // ============================================================
    {
        id: 'cb_albino',
        nome: 'Biblioteca Provinciale "P. Albino"',
        edificio: 'Palazzo della Provincia',
        piano: 2,
        postiDisponibili: 120,
        postiTotali: 150,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi pubblico', 'Sala lettura silenziosa', 'Prestito interbibliotecario', 'Archivio storico molisano'],
        latitude: 41.560129,
        longitude: 14.663782,
        indirizzo: 'Via Giuseppe Garibaldi, 25, 86100 Campobasso',
        university: 'UniMol',
        occupancy_rate: 'Medio',
        notes: 'Struttura convenzionata. Accesso aperto a tutti. Non è necessario badge universitario.'
    }
];

export const unimolIserniaRooms: StudyRoom[] = [
    // ============================================================
    // ISERNIA - SEDE UNIVERSITARIA (Via Sant'Ippolito)
    // ============================================================
    {
        id: 'unimol_isernia_biblio',
        nome: 'Biblioteca Polo di Isernia',
        edificio: 'Sede Didattica di Via Sant\'Ippolito',
        piano: 1,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi Eduroam', 'Collezione Beni Culturali/Archeologia', 'Prestito interbibliotecario', 'Fotocopie'],
        latitude: 41.595352, // Coordinate verificate
        longitude: 14.237982,
        indirizzo: 'Via Sant\'Ippolito, 86170 Isernia',
        university: 'UniMol',
        occupancy_rate: 'Medio',
        notes: 'Biblioteca di riferimento per i corsi del polo (es. Beni Culturali). Verifica orari su BiblioUniMol.'
    },
    {
        id: 'unimol_isernia_sala_leonardo',
        nome: 'Sala Studio "Leonardo da Vinci"',
        edificio: 'Sede Didattica di Via Sant\'Ippolito',
        piano: 0,
        postiDisponibili: 25,
        postiTotali: 30,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['WiFi Eduroam', 'Prese elettriche individuali', 'Silenzio assoluto', 'Accesso disabili'],
        latitude: 41.595352, // Stesso complesso
        longitude: 14.237982,
        indirizzo: 'Via Sant\'Ippolito, 86170 Isernia',
        university: 'UniMol',
        occupancy_rate: 'Alto',
        notes: '**Accesso solo con prenotazione online del posto**. Controlla la disponibilità sul portale Esse3/UniMol.'
    },
    {
        id: 'unimol_isernia_aule_informali',
        nome: 'Aule Studio Informali',
        edificio: 'Sede Didattica di Via Sant\'Ippolito',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '08:00',
        orarioChiusura: '20:00',
        servizi: ['WiFi Eduroam', 'Distributori automatici', 'Tavoli per studio di gruppo'],
        latitude: 41.595352,
        longitude: 14.237982,
        indirizzo: 'Via Sant\'Ippolito, 86170 Isernia',
        university: 'UniMol',
        occupancy_rate: 'Variabile',
        notes: 'Aule libere non prenotate quando non ci sono lezioni. Controlla le bacheche per gli orari dei corsi.'
    },
    // ============================================================
    // ISERNIA - BIBLIOTECA COMUNALE (Servizio esterno)
    // ============================================================
    {
        id: 'isernia_biblio_romano',
        nome: 'Biblioteca Comunale "Michele Romano"',
        edificio: 'Ex Convento di San Francesco',
        piano: 1,
        postiDisponibili: 100,
        postiTotali: 120,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi pubblico', 'Sala storica silenziosa', 'Archivio storico locale', 'Prestito bibliotecario'],
        latitude: 41.598256, // Coordinate verificate
        longitude: 14.229841,
        indirizzo: 'Corso Marcelli, 28, 86170 Isernia',
        university: 'UniMol',
        occupancy_rate: 'Medio',
        notes: 'Biblioteca civica in centro storico. Accesso libero a tutti. Ambiente molto suggestivo.'
    },
    // ============================================================
    // ISERNIA - MUSEO PALEOLITICO (Area ricerca/studio)
    // ============================================================
    {
        id: 'isernia_museo_pineta',
        nome: 'Area Studio Museo Paleolitico "La Pineta"',
        edificio: 'Museo Nazionale',
        piano: 1,
        postiDisponibili: 20,
        postiTotali: 25,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['WiFi', 'Collegamento diretto a laboratori ricerca', 'Materiale di consultazione specialistico'],
        latitude: 41.600124, // Coordinate verificate
        longitude: 14.218987,
        indirizzo: 'Contrada Ramiera Vecchia, 86170 Isernia',
        university: 'UniMol',
        occupancy_rate: 'Basso',
        notes: 'Spazio riservato principalmente a studenti e ricercatori dei corsi di Archeologia e Beni Culturali. Accedere in orario museale.'
    }
];

export const unimolRooms: StudyRoom[] = [
    ...unimolCampobassoRooms,
    ...unimolTermoliRooms,
    ...unimolPescheRooms,
    ...unimolIserniaRooms
];

export { unimolPescheRooms, unimolTermoliRooms };


export const getDirectionsUnimol = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    // Safety check for room.id
    if (!room.id) return directions;

    const isVazzieri = room.id.includes('vazzieri') || room.id.includes('leonardo') || room.id.includes('economia');
    const isTappino = room.id.includes('tappino');
    const isTermoli = room.id.includes('termoli');
    const isPesche = room.id.includes('pesche');
    const isAlbino = room.id.includes('albino');

    // Isernia checks
    const isIserniaSede = room.id.includes('unimol_isernia_');
    const isIserniaBiblioCivica = room.id.includes('isernia_biblio_romano');
    const isIserniaMuseo = room.id.includes('isernia_museo_pineta');

    // VAZZIERI (CAMPUS PRINCIPALE)
    if (isVazzieri) {
        directions.push({
            luogo: 'Stazione FS Campobasso / Terminal Bus',
            descrizione: `**Opzioni principali:**
1.  **Navetta Ateneo "Campus Travellers"**: Linea VAZZIERI-CENTRO. Partenze ogni 25 min dal Terminal Bus (lato Via IV Novembre). Ferma davanti al Rettorato.
2.  **Bus SEAC Linea 3**: Direzione "Vazzieri". Fermata "Università" a 150m dall'ingresso.
3.  **Auto**: Da SS87, uscita "Campobasso Centro". Parcheggi gratuiti in Via De Sanctis (blu, 2 ore) o a pagamento nel parcheggio multipiano del campus.
**NOTA**: Il campus è in collina. In inverno, verificare condizioni della strada.`,
            mezziPubblici: ['Navetta UniMol "Campus Travellers"', 'SEAC Linea 3', 'SEAC Linea 1C'],
            tempoStimato: '12-15 min dal centro',
            note: 'La navetta è gratuita per studenti UniMol (esibire badge). Orari estesi durante le sessioni d\'esame.'
        });
    }
    // TAPPINO (POLO MEDICINA)
    else if (isTappino) {
        directions.push({
            luogo: 'Centro Città (Piazza Vittorio Emanuele II / Via Cavour)',
            descrizione: `**Collegamenti specifici:**
1.  **Navetta Diretta "TAPPINO-CAMPUS"**: Servizio dedicato. Partenze da **Via Cavour (ang. Corso Bucci)** alle **7:45, 9:15, 11:00, 13:45**. Ritorni dal Tappino alle **10:00, 12:30, 15:30, 18:00**.
2.  **Bus di Linea SEAC**: Linee **CB 005** (direzione Tappino) o **CB 004** (direzione Campolieto). Fermata richiesta: "Ospedale Cardarelli - Ingresso Polo Didattico".
3.  **Auto**: Da centro, seguire indicazioni per Ospedale Cardarelli. Parcheggio interno gratuito per visitatori (settore B).
**IMPORTANTE**: La zona è servita solo dai bus sopra indicati. Evitare linee urbane standard.`,
            mezziPubblici: ['Navetta TAPPINO-CAMPUS', 'SEAC CB 005', 'SEAC CB 004'],
            tempoStimato: '18-22 min',
            note: 'Orari navetta possono subire variazioni. Verificare sul portale "Campus Life" di UniMol.'
        });
    }
    // TERMOLI
    else if (isTermoli) {
        directions.push(...getDirectionsTermoli(room));
    }
    // PESCHE (ISERNIA)
    else if (isPesche) {
        directions.push(...getDirectionsPesche(room));
    }


    // ISERNIA - SEDE UNIVERSITARIA DI VIA SANT'IPPOLITO
    else if (isIserniaSede) {
        directions.push({
            luogo: 'Stazione Ferroviaria di Isernia',
            descrizione: `**Per la Sede Universitaria (Via Sant'Ippolito):**
1.  **A piedi (consigliato)**: Usciti dalla stazione, proseguire dritto in **Viale dei Pentri** per circa 700m. Alla rotonda, prendere la prima a destra in **Via Sant'Ippolito**. L'edificio universitario è sulla sinistra dopo 200m. Tempo: 10-12 minuti.
2.  **Bus Urbano**: Linea "Circolare Destra" o "Linea 1". Fermata "**Via Sant'Ippolito (Auditorium)**" proprio davanti alla sede.
3.  **Auto**: Parcheggio libero disponibile nel piazzale antistante l'edificio e nelle vie limitrofe.
4.  **NOTA**: La sede è accanto all'Auditorium "Unità d'Italia".`,
            mezziPubblici: ['A piedi', 'Bus Circolare Destra', 'Bus Linea 1'],
            tempoStimato: '12 min a piedi, 5 min in bus',
            note: 'Percorso semplice e in pianura dalla stazione.'
        });
    }
    // ISERNIA - BIBLIOTECA COMUNALE "M. ROMANO"
    else if (isIserniaBiblioCivica) {
        directions.push({
            luogo: 'Stazione Ferroviaria di Isernia / Centro Città',
            descrizione: `**Per la Biblioteca Comunale (Corso Marcelli):**
1.  **A piedi dal Centro**: Da Piazza della Repubblica (centro città), salire per **Corso Marcelli**. La biblioteca si trova a metà della salita, al civico 28, nell'ex Convento di San Francesco. Tempo: 5 min dalla piazza.
2.  **A piedi dalla Stazione**: È una salita più lunga (circa 1.2 km). Seguire le indicazioni per "Centro Storico" fino a Piazza della Repubblica, poi come sopra. Tempo: 18-20 min.
3.  **Auto**: Zona a traffico limitato (ZTL). Parcheggiare nelle aree perimetrali (ex-Caserma, Via XX Settembre) e proseguire a piedi (5 min).`,
            mezziPubblici: ['A piedi'],
            tempoStimato: '5 min dal centro, 20 min dalla stazione',
            note: 'Ubicata nel cuore del centro storico pedonale. Zona ZTL.'
        });
    }
    // ISERNIA - MUSEO PALEOLITICO LA PINETA
    else if (isIserniaMuseo) {
        directions.push({
            luogo: 'Centro Città di Isernia',
            descrizione: `**Per il Museo Paleolitico "La Pineta" (Contrada Ramiera Vecchia):**
1.  **Auto/Taxi**: È il mezzo più pratico. Dall centro, prendere **Via XXIV Maggio** in direzione "Località Pineta". Il museo è ben segnalato. Ampio parcheggio gratuito.
2.  **Bus (servizio limitato)**: Linea "Isernia - Pineta". Poche corse giornaliere. Fermata "Museo Paleolitico".
3.  **A piedi**: Sconsigliato, tratta lunga (circa 2 km) e non del tutto pedonale.`,
            mezziPubblici: ['Bus Linea Isernia-Pineta', 'Taxi'],
            tempoStimato: '8 min in auto, 25 min a piedi',
            note: 'Mezzo proprio fortemente consigliato per questa destinazione.'
        });
    }
    // ALBINO (BIBLIOTECA CIVICA)
    else if (isAlbino) {
        directions.push({
            luogo: 'Centro Storico Campobasso (Piazza Municipio)',
            descrizione: `**Nel cuore del centro:**
1.  **A piedi**: Da Piazza Municipio, percorrere Via Mazzini per 200m, poi salire a sinistra su Via Garibaldi. L'edificio è al civico 25.
2.  **Bus**: Qualsiasi linea che ferma in Piazza Vittorio Emanuele (1, 2, 4, 5). A 3 minuti a piedi.
**NOTE**: Zona a traffico limitato (ZTL). Parcheggio auto consigliato nelle aree esterne al centro (ex-IACP, Via Marconi).`,
            mezziPubblici: ['A piedi', 'Tutte le linee bus centro'],
            tempoStimato: '4 min a piedi',
            note: 'Aperta al pubblico. Orari prolungati il martedì e giovedì (fino alle 19:30).'
        });
    }

    // INFO GENERALI DI CONTESTO PER IL POLO ISERNIA (Only if not handled by generic Pesche/Termoli functions)
    if (isIserniaSede || isIserniaBiblioCivica || isIserniaMuseo) {
        directions.push({
            luogo: 'Informazioni Generali - Polo di Isernia',
            descrizione: `**Polo di Isernia - UniMol**
- **Sede**: Il polo di Isernia Città ospita corsi di Scienze Politiche, Beni Culturali e Infermieristica.
- **Contesto**: Campus diffuso nel tessuto urbano, con la sede principale vicino all'Auditorium.
- **Trasporti**: Collegamenti urbani buoni.
- **Contatti Utili**: Segreteria Studenti Isernia.`,
            mezziPubblici: ['Bus SEAC urbani'],
            tempoStimato: '-',
            note: 'Polo a dimensione raccolta.'
        });
    }

    // INFO GENERALI DI CONTESTO
    directions.push({
        luogo: 'Informazioni Generali di Ateneo',
        descrizione: `**UniMol - Università degli Studi del Molise**
- **Poli**: Vazzieri (sede centrale, tutte le facoltà), Tappino (Medicina), Termoli (Scienze Turistiche), Pesche/Isernia (Agraria).
- **Trasporti**: Servizio navette **gratuito per studenti** tra poli principali e centri città. Abbonamenti agevolati SEAC.
- **App Utili**: "UniMol" (prenotazioni aule, news), "Moovit" (planificazione trasporti), "SEAC Mobile" (bus locali).
- **Contatti**: Centralino: 0874 4041, email: informazioni@unimol.it.`,
        mezziPubblici: [],
        tempoStimato: '-',
        note: 'Ateneo a dimensione umana, servizi di mobilità in costante miglioramento.'
    });

    return directions;
};
