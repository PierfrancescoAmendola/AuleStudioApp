import { StudyRoom, DirectionsFromLocation } from '../../types';

export const unimolTermoliRooms: StudyRoom[] = [
    // ============================================================
    // TERMOLI - POLO UNIVERSITARIO (Via Duca degli Abruzzi)
    // ============================================================
    {
        id: 'unimol_termoli_biblio',
        nome: 'Biblioteca del Polo di Termoli',
        edificio: 'Edificio Didattico Principale',
        piano: 1,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi Eduroam', 'Postazioni PC', 'Collezione Turismo/Trasporti/Logistica', 'Prestito'],
        latitude: 42.004820, // Coordinate verificate per l'edificio principale
        longitude: 14.993450,
        indirizzo: 'Via Duca degli Abruzzi, 86039 Termoli (CB)',
        university: 'UniMol',
        occupancy_rate: 'Medio',
        notes: 'Biblioteca di riferimento per i corsi del polo. Verifica gli orari estivi sul portale BiblioUniMol.',
        tags: ['Biblioteca', 'Campus', 'WiFi'],
    },
    {
        id: 'unimol_termoli_aule_studio',
        nome: 'Aule per Studio Individuale e di Gruppo',
        edificio: 'Edificio Didattico Principale',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Prese elettriche', 'Aria condizionata', 'Lavagne'],
        latitude: 42.004820,
        longitude: 14.993450,
        indirizzo: 'Via Duca degli Abruzzi, 86039 Termoli (CB)',
        university: 'UniMol',
        occupancy_rate: 'Variabile',
        notes: 'Aule libere quando non ci sono lezioni. La disponibilità è massima al pomeriggio. Controlla le bacheche per l\'orario delle lezioni.',
        tags: ['Aula Studio', 'WiFi', '⚡ Prese', '❄️ Climatizzato'],
    },
    {
        id: 'unimol_termoli_mensa_relax',
        nome: 'Mensa e Area Relax',
        edificio: 'Edificio Mensa / Bar',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 60,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['Tavoli interni ed esterni', 'Distributori automatici', 'Microwave'],
        latitude: 42.004820,
        longitude: 14.993450,
        indirizzo: 'Via Duca degli Abruzzi, 86039 Termoli (CB)',
        university: 'UniMol',
        occupancy_rate: 'Basso',
        notes: 'Spazio principalmente per la pausa pranzo. Ideale per studio informale o di gruppo al di fuori dell\'orario di punta (13:00-14:00).',
        tags: ['Mensa/Ristoro'],
    },
    // ============================================================
    // TERMOLI - BIBLIOTECA CIVICA (Servizio esterno)
    // ============================================================
    {
        id: 'termoli_biblio_perrotta',
        nome: 'Biblioteca Comunale "G. Perrotta"',
        edificio: 'Palazzo Storico - Ex Mattatoio',
        piano: 1,
        postiDisponibili: 50,
        postiTotali: 60,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi pubblico', 'Sala lettura silenziosa', 'Prestito bibliotecario', 'Archivio locale'],
        latitude: 41.999267, // Coordinate verificate
        longitude: 14.994873,
        indirizzo: 'Corso Fratelli Brigida, 86039 Termoli (CB)',
        university: 'UniMol',
        occupancy_rate: 'Medio',
        notes: 'Biblioteca civica in centro città. Accesso libero a tutti. Ambiente tranquillo e meno affollato della biblioteca universitaria.',
        tags: ['Biblioteca', 'WiFi', '🔇 Silenzio'],
    },
    // ============================================================
    // TERMOLI - AREA STUDIO INFORMALE ALL'APERTO
    // ============================================================
    {
        id: 'termoli_borgo_antico',
        nome: 'Borgo Antico - Area Studio all\'Aperto',
        edificio: 'Area Pubblica - Lungomare / Giardini',
        piano: 0,
        postiDisponibili: 100, // Stima per panchine e spazi
        postiTotali: 100,
        orarioApertura: 'H24',
        orarioChiusura: 'H24',
        servizi: ['Panchine', 'Vista mare', 'Silenzio relativo'],
        latitude: 42.003500, // Coordinate verificate per l'area del Borgo Vecchio
        longitude: 14.995800,
        indirizzo: 'Borgo Vecchio, 86039 Termoli (CB)',
        university: 'UniMol',
        notes: 'Area pubblica informale. Ideale per studio individuale in condizioni meteorologiche favorevoli. Ottima per pause rigeneranti. Non è uno spazio attrezzato con prese o tavoli dedicati.',
        tags: ['Aula Studio', '🔇 Silenzio'],
    },
];

export const getDirectionsTermoli = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const isPoloUnimol = room.id.includes('unimol_termoli');
    const isBiblioCivica = room.id.includes('perrotta');
    const isBorgo = room.id.includes('borgo');

    // POLO UNIVERSITARIO (VIA DUCA DEGLI ABRUZZI)
    if (isPoloUnimol) {
        directions.push({
            luogo: 'Stazione Ferroviaria di Termoli',
            descrizione: `**Per il Polo Universitario (Via Duca degli Abruzzi):**
1.  **A piedi (MEZZO CONSIGLIATO)**: Usciti dalla stazione (Piazza Garibaldi), svoltare a sinistra in **Viale Po**. Proseguire per 300m, quindi svoltare a destra in **Via Duca degli Abruzzi**. L'edificio universitario è sulla sinistra dopo 250m. **Percorso totale: circa 7-10 minuti**.
2.  **Bus Urbano**: Linee urbane gestite da **Molisana Trasporti**. Cercare le linee che fermano in "Via Duca degli Abruzzi" o "Piazza Vittorio Veneto" (adiacente).
3.  **Auto**: Parcheggi a pagamento (strisce blu) nelle vie limitrofe. Parcheggio gratuito più ampio nella zona del **Porto** (5 minuti a piedi in più).`,
            mezziPubblici: ['A piedi', 'Bus Molisana Trasporti (linee urbane)'],
            tempoStimato: '7-10 min a piedi',
            note: 'Il polo è estremamente comodo per chi arriva in treno, essendo a pochi minuti a piedi dalla stazione.'
        });
    }
    // BIBLIOTECA CIVICA "G. PERROTTA"
    else if (isBiblioCivica) {
        directions.push({
            luogo: 'Stazione Ferroviaria di Termoli / Centro',
            descrizione: `**Per la Biblioteca Comunale (Corso Fratelli Brigida):**
1.  **A piedi dalla Stazione**: Usciti dalla stazione, attraversare Piazza Garibaldi e imboccare **Corso Nazionale**. Proseguire dritto per circa 600m fino a incrociare **Corso Fratelli Brigida**. La biblioteca si trova sulla destra. **Percorso: 10-12 minuti**.
2.  **A piedi dal Polo Universitario**: Da Via Duca degli Abruzzi, tornare verso Viale Po e svoltare a sinistra su Corso Nazionale. Proseguire come sopra. **Percorso: 12-15 minuti**.
3.  **Auto**: Zona a traffico limitato (ZTL) o parcheggi a pagamento. Si consiglia di parcheggiare nelle aree periferiche del centro (es. Via Martiri della Resistenza) e proseguire a piedi.`,
            mezziPubblici: ['A piedi'],
            tempoStimato: '10-12 min dalla stazione',
            note: 'Situata nel cuore del centro commerciale pedonale. Zona molto vivace.'
        });
    }
    // BORGO ANTICO (AREA ALL'APERTO)
    else if (isBorgo) {
        directions.push({
            luogo: 'Polo Universitario / Stazione',
            descrizione: `**Per il Borgo Antico (area studio all'aperto):**
1.  **A piedi dal Polo Universitario**: Da Via Duca degli Abruzzi, dirigersi verso il mare (sud). Superare la ferrovia tramite il sottopasso pedonale e salire verso le mura del borgo. **Percorso: 8-10 minuti**.
2.  **A piedi dalla Stazione**: Seguire le indicazioni per il "Centro Storico" o "Borgo Vecchio" (cartelli turistici). Attraversare il corso e salire per le scalinate. **Percorso: 12-15 minuti**.
**NOTA**: Il Borgo Antico è un labirinto di vicoli. La zona più tranquilla per studiare è spesso il lungomare nord o i giardini pubblici appena fuori le mura.`,
            mezziPubblici: ['A piedi'],
            tempoStimato: '8-15 min a piedi',
            note: 'Location iconica e suggestiva. Ideale per una pausa studio con vista sull\'Adriatico.'
        });
    }

    // INFO GENERALI DI CONTESTO PER IL POLO
    directions.push({
        luogo: 'Informazioni Generali - Polo di Termoli',
        descrizione: `**Polo di Termoli - UniMol**
- **Corsi principali**: **Scienze del Turismo** (Triennale e Magistrale), **Ingegneria dei Trasporti e Logistica**.
- **Trasporti Pubblici**: Servizi urbani gestiti da **Molisana Trasporti**. Termoli è un importante **snodo ferroviario** sulla linea Adriatica.
- **Contesto**: Polo situato a **pochi passi dal mare e dal centro storico**. Ottimale per chi apprezza uno studio dinamico tra aula e territorio.
- **Contatti Utili**: Segreteria Polo Termoli, email: polo.termoli@unimol.it.`,
        mezziPubblici: ['Treni regionali/nazionali', 'Bus Molisana Trasporti'],
        tempoStimato: '-',
        note: 'Polo vivace e ben collegato. La vicinanza alla stazione lo rende ideale per gli studenti pendolari.'
    });

    return directions;
};
