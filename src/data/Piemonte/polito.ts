import { StudyRoom, DirectionsFromLocation } from '../../types';

export const politoRooms: StudyRoom[] = [
    // ============================================================
    // TORINO - SEDE CENTRALE + CITADELLA (Corso Duca degli Abruzzi)
    // ============================================================
    {
        id: 'polito_centrale_biblio',
        nome: 'Biblioteca Centrale di Ingegneria',
        edificio: 'Sede Centrale - Corso Duca',
        piano: 1,
        postiDisponibili: 420,
        postiTotali: 520,
        orarioApertura: '08:30',
        orarioChiusura: '19:45',
        servizi: ['WiFi Polito', 'Prese al Tavolo', 'Silenzio Assoluto', 'Postazioni PC', 'Fotocopie', 'Prestito'],
        latitude: 45.0627,
        longitude: 7.6615,
        indirizzo: 'Corso Duca degli Abruzzi 24, 10129 Torino',
        university: 'PoliTo',
        occupancy_rate: 'Altissimo',
        notes: 'Il tempio degli ingegneri. Silenzio assoluto obbligatorio. Durante la sessione è una battaglia trovare posto. Verificare orari su portale biblioteche PoliTo.',
        tags: ['Biblioteca', 'WiFi', '🔇 Silenzio', '🖨️ Stampa'],
    },
    {
        id: 'polito_cittadella_aule',
        nome: 'Aule Studio e Spazi Cittadella',
        edificio: 'Cittadella Politecnica',
        piano: 0,
        postiDisponibili: 650,
        postiTotali: 800,
        orarioApertura: '08:00',
        orarioChiusura: '21:00',
        servizi: ['Open Space', 'Lavori di Gruppo', 'Distributori automatici', 'Mensa', 'WiFi Polito', 'Prese al Tavolo', 'Rumore Tollerato'],
        latitude: 45.0635,
        longitude: 7.6592,
        indirizzo: 'Via Boggio / Corso Castelfidardo, 10129 Torino',
        university: 'PoliTo',
        occupancy_rate: 'Alto',
        notes: 'Spazi enormi, moderni e industriali. Perfetti per progetti di gruppo e teamwork (rumore tollerato). NON è una biblioteca: è un Open Space. Accesso principale da Via Boggio. Vari piani disponibili.',
        tags: ['Aula Studio', 'WiFi', '❄️ Climatizzato', '☕ Ristoro', '👥 Gruppi OK'],
    },
    // ============================================================
    // TORINO - CASTELLO DEL VALENTINO (Architettura)
    // ============================================================
    {
        id: 'polito_valentino_biblio',
        nome: 'Biblioteca Centrale di Architettura "Roberto Gabetti"',
        edificio: 'Castello del Valentino',
        piano: 1,
        postiDisponibili: 160,
        postiTotali: 200,
        orarioApertura: '08:30',
        orarioChiusura: '20:30',
        servizi: ['WiFi Polito', 'Prese al Tavolo', 'Ampio spazio tavolo', 'Tavoli da disegno', 'Plotter/Stampa A0 nearby', 'Patrimonio architettonico', 'Vista sul Po'],
        latitude: 45.0540,
        longitude: 7.6852,
        indirizzo: 'Viale Mattioli 39, 10125 Torino',
        university: 'PoliTo',
        occupancy_rate: 'Alto',
        notes: 'Patrimonio UNESCO. Studio in un palazzo del \'600 con vista sul Po. Ingresso dal parco o da Viale Mattioli. Tavoli ampi per tavole A0 e plastici.',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'polito_valentino_cortile',
        nome: 'Cortile e Parco del Valentino (Outdoor)',
        edificio: 'Esterno Castello',
        piano: 0,
        postiDisponibili: 300,
        postiTotali: 300,
        orarioApertura: 'H24',
        orarioChiusura: 'H24',
        servizi: ['Panchine', 'Prato', 'Vista Fiume', 'Area picnic', 'Ampio spazio tavolo'],
        latitude: 45.0545,
        longitude: 7.6845,
        indirizzo: 'Parco del Valentino, 10125 Torino',
        university: 'PoliTo',
        notes: 'Aule studio a cielo aperto in primavera/estate. Connettività WiFi limitata. Perfetto per rilassarsi o lavorare su plastici.',
        tags: ['Outdoor'],
    },
    // ============================================================
    // SEDI DISTACCATE (Rete Politecnica Piemonte)
    // ============================================================
    {
        id: 'polito_alessandria',
        nome: 'Sede di Alessandria',
        edificio: 'Campus Alessandria',
        piano: 0,
        postiDisponibili: 110,
        postiTotali: 130,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Prese al Tavolo', 'Laboratori', 'Parcheggio', 'Aule studio'],
        latitude: 44.9120,
        longitude: 8.6250,
        indirizzo: 'Viale Teresa Michel 5, 15121 Alessandria',
        university: 'PoliTo',
        occupancy_rate: 'Medio',
        notes: 'Forte legame con il territorio industriale. Verificare orari sul sito del polo.',
        tags: ['Aula Studio', 'Campus', 'WiFi', '🅿️ Parcheggio'],
    },
    {
        id: 'polito_biella_cittastudi',
        nome: 'Campus Città Studi (Biella)',
        edificio: 'Città Studi',
        piano: 0,
        postiDisponibili: 160,
        postiTotali: 200,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['WiFi', 'Prese al Tavolo', 'Laboratorio Tessile', 'Design Lab', 'Mensa', 'Parcheggio'],
        latitude: 45.5565,
        longitude: 8.0672,
        indirizzo: 'Corso Giuseppe Pella 2b, 13900 Biella',
        university: 'PoliTo',
        occupancy_rate: 'Medio',
        notes: 'Campus condiviso con altre istituzioni. Ambiente innovativo e ben attrezzato.',
        tags: ['Aula Studio', 'Campus', 'WiFi', '☕ Ristoro', '🅿️ Parcheggio'],
    },
    {
        id: 'polito_mondovi',
        nome: 'Polo di Mondovì',
        edificio: 'Ex Convento di San Francesco',
        piano: 1,
        postiDisponibili: 70,
        postiTotali: 90,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Architettura', 'Design', 'Chiostro storico', 'Ampio spazio tavolo'],
        latitude: 44.3880,
        longitude: 7.8280,
        indirizzo: 'Via Cottolengo 29, 12084 Mondovì (CN)',
        university: 'PoliTo',
        occupancy_rate: 'Basso',
        notes: 'Sede storica nella parte alta di Mondovì (Piazza). Raggiungibile con funicolare da Breo. Per arrivarci serve la Funicolare Mondovì Breo→Piazza!',
        tags: ['Aula Studio', 'Campus', 'WiFi'],
    },
    {
        id: 'polito_vercelli',
        nome: 'Sede di Vercelli (Polo San Giuseppe)',
        edificio: 'Polo Didattico',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Prese al Tavolo', 'Laboratori informatici', 'Aule studio'],
        latitude: 45.3260,
        longitude: 8.4220,
        indirizzo: 'Piazza Sant\'Eusebio 5, 13100 Vercelli',
        university: 'PoliTo',
        occupancy_rate: 'Basso',
        notes: 'Avamposto nel vercellese. Vicino alla stazione ferroviaria.',
        tags: ['Aula Studio', 'Campus', 'WiFi'],
    }
];

export const getDirectionsPoliTo = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const isSedeCentrale = room.id.includes('centrale') || room.id.includes('cittadella');
    const isValentino = room.id.includes('valentino');
    const isDistaccata = room.id.includes('alessandria') || room.id.includes('biella') || room.id.includes('mondovi') || room.id.includes('vercelli');

    // SEDE CENTRALE + CITADELLA (Corso Duca)
    if (isSedeCentrale) {
        directions.push({
            luogo: 'Stazione Porta Nuova / Stazione Porta Susa',
            descrizione: `**Per la Sede Centrale e la Cittadella (Corso Duca / Via Boggio):**
1.  **Dalla Stazione Porta Nuova**:
    *   **Bus**: Linee **58** o **58/**, fermata "Politecnico" (5 min).
    *   **A piedi**: 15 minuti circa.
2.  **Dalla Stazione Porta Susa**:
    *   **Tram**: Linea **10**, fermata "Politecnico" (5 min).
    *   **A piedi**: 10 minuti circa.
3.  **Metro**: Linea 1 fermata "Vinzaglio" + 10 min a piedi.
4.  **Auto**: Parcheggio sotterraneo "Cittadella" (a pagamento) o strisce blu nelle vie limitrofe. Attenzione alle ZTL.
**NOTE**: L'ingresso principale per la Biblioteca Centrale è su Corso Duca; l'ingresso Cittadella è da Via Boggio.`,
            mezziPubblici: ['Tram 10', 'Bus 58 / 58/', 'Metro Linea 1 + piedi'],
            tempoStimato: '10-15 min',
            note: 'Zona ben servita. Bici consigliata (piste ciclabili presenti).'
        });
    }
    // CASTELLO DEL VALENTINO (Architettura)
    else if (isValentino) {
        directions.push({
            luogo: 'Stazione Porta Nuova',
            descrizione: `**Per il Castello del Valentino (Viale Mattioli 39):**
1.  **Metro**: Linea 1 fermata "Marconi" o "Nizza", poi 8-10 min a piedi attraversando il Parco del Valentino.
2.  **Tram**: Linea **9** (fermata "Valentino").
3.  **Bus**: Linea **67** (fermata "Mattioli").
4.  **A piedi**: Passeggiata di 15-20 minuti attraverso il Parco del Valentino (percorso suggestivo).
**NOTE**: L'ingresso principale è dal parco o da Viale Mattioli. Il castello è patrimonio UNESCO.`,
            mezziPubblici: ['Metro Linea 1', 'Tram 9', 'Bus 67'],
            tempoStimato: '10-20 min',
            note: 'Patrimonio UNESCO – studio con vista sul Po.'
        });
    }
    // SEDI DISTACCATE
    else if (isDistaccata) {
        if (room.id.includes('alessandria')) {
            directions.push({
                luogo: 'Stazione Ferroviaria di Alessandria',
                descrizione: `**Per la sede di Alessandria (Viale Teresa Michel):**
1.  **A piedi**: Dalla stazione, 10 minuti (direzione Corso Cento Cannoni, poi Viale Teresa Michel).
2.  **Bus urbano**: Linee 1, 3, 6 (fermata "Michel").
3.  **Auto**: Parcheggi nelle vie limitrofe (strisce blu e gratuite).`,
                mezziPubblici: ['Treni Regionali', 'Bus urbani 1, 3, 6'],
                tempoStimato: '10 min a piedi',
                note: 'Sede ben collegata con il centro.'
            });
        } else if (room.id.includes('biella')) {
            directions.push({
                luogo: 'Stazione Ferroviaria di Biella San Paolo',
                descrizione: `**Per il Campus Città Studi (Corso Pella):**
1.  **Bus urbano**: Linee 2, 4 (fermata "Città Studi").
2.  **A piedi**: 20 minuti circa.
3.  **Auto**: Ampio parcheggio gratuito nel campus.`,
                mezziPubblici: ['Treni Regionali', 'Bus urbani 2, 4'],
                tempoStimato: '5-10 min in bus',
                note: 'Campus condiviso e innovativo.'
            });
        } else if (room.id.includes('mondovi')) {
            directions.push({
                luogo: 'Stazione Ferroviaria di Mondovì (Breo)',
                descrizione: `**Per il Polo di Mondovì (Piazza):**
1.  **Funicolare**: Dalla stazione di Breo (parte bassa), prendere la funicolare per Mondovì Piazza (parte alta). La sede è a 2 min a piedi dalla stazione superiore.
2.  **Bus**: Linee extraurbane per la parte alta.
3.  **Auto**: Parcheggi nella parte alta (attenzione alle ZTL storiche).`,
                mezziPubblici: ['Funicolare Mondovì Breo-Piazza', 'Bus extraurbani'],
                tempoStimato: '10-15 min (inclusa funicolare)',
                note: 'Sede storica nella parte alta. La funicolare è un\'esperienza unica.'
            });
        } else if (room.id.includes('vercelli')) {
            directions.push({
                luogo: 'Stazione Ferroviaria di Vercelli',
                descrizione: `**Per la sede di Vercelli (Piazza Sant'Eusebio):**
1.  **A piedi**: Dalla stazione, 8 minuti (direzione centro, Piazza Sant'Eusebio).
2.  **Bus urbano**: Linee 1, 2, 4 (fermata "Sant'Eusebio").
3.  **Auto**: Parcheggi nelle vie limitrofe (strisce blu e gratuite).`,
                mezziPubblici: ['Treni Regionali', 'Bus urbani 1, 2, 4'],
                tempoStimato: '8 min a piedi',
                note: 'Vicino alla stazione e al centro storico.'
            });
        } else {
            directions.push({
                luogo: 'Stazione FS Locale',
                descrizione: `**Per la sede distaccata:**
1.  **Treno**: Collegamenti regionali Trenitalia da Torino Porta Nuova/Porta Susa.
2.  **Dalla stazione locale**: 5-15 minuti a piedi o con bus urbano.
3.  **Auto**: Parcheggio generalmente disponibile e gratuito.
**NOTE**: Tutte le sedi regionali hanno costo della vita inferiore a Torino.`,
                mezziPubblici: ['Treni Regionali Trenitalia', 'Bus locali'],
                tempoStimato: '5-15 min a piedi dalla stazione',
                note: 'Verificare orari ultima corsa di rientro.'
            });
        }
    }

    // INFO GENERALI DI CONTESTO
    directions.push({
        luogo: 'Informazioni Generali PoliTo',
        descrizione: `**Politecnico di Torino (PoliTo)**
- **Poli principali**: Sede Centrale (Corso Duca, Ingegneria), Cittadella (laboratori e aule), Castello del Valentino (Architettura e Design).
- **Trasporti urbani**: Rete GTT (metro, tram, bus). Abbonamenti agevolati per studenti (abbonamento annuale a tariffe ridotte).
- **Treni regionali**: Per le sedi distaccate (Alessandria, Biella, Mondovì, Vercelli) utilizzare i treni SFM/Trenitalia.
- **App utili**: "PoliTo" (servizi, news), "GTT" (trasporti), "Moovit" (percorsi), "MyPoliTo" (portale studenti).
- **Biblioteche**: Portale BiblioPoliTo per orari aggiornati, prenotazioni e avvisi di chiusura.
- **International Students**: PoliTo has one of Italy's highest international student ratios. English-taught programs available. Check polito.it/en for English services.
- **Contatti**: Centralino: 011 0901111, sito: www.polito.it`,
        mezziPubblici: [],
        tempoStimato: '-',
        note: 'Ateneo tecnico-scientifico diffuso su tutto il territorio piemontese. Verificare sempre orari e chiusure straordinarie sui siti ufficiali.'
    });

    return directions;
};
