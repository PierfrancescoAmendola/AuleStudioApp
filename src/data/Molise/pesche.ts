import { StudyRoom, DirectionsFromLocation } from '../../types';

export const unimolPescheRooms: StudyRoom[] = [
    // ============================================================
    // PESCHE - DIPARTIMENTO BIOSCIENZE E TERRITORIO
    // ============================================================
    {
        id: 'unimol_pesche_biblio',
        nome: 'Biblioteca Tecnico-Scientifica Pesche',
        edificio: 'Sede Dipartimentale',
        piano: 1,
        postiDisponibili: 90,
        postiTotali: 100,
        orarioApertura: '08:30', // Orario ufficiale corretto
        orarioChiusura: '13:00', // Orario ufficiale corretto
        servizi: ['WiFi Eduroam', 'Prese', 'Collezioni scientifiche', 'Prestito'],
        latitude: 41.614580, // Coordinate verificate
        longitude: 14.276510,
        indirizzo: 'Contrada Fonte Lappone, 86090 Pesche (IS)',
        university: 'UniMol',
        occupancy_rate: 'Medio',
        notes: 'Biblioteca principale. Orario: lun-ven 8:30-13:00, lun-gio 14:00-17:00. Verifica aggiornamenti su BiblioUniMol.',
        tags: ['Biblioteca', 'WiFi'],
    },
    {
        id: 'unimol_pesche_lab_open',
        nome: 'Aule e Laboratori per Studio Informale',
        edificio: 'Sede Dipartimentale',
        piano: 0,
        postiDisponibili: 70,
        postiTotali: 80,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['Workstation', 'Distributori', 'WiFi Eduroam'],
        latitude: 41.614580,
        longitude: 14.276510,
        indirizzo: 'Contrada Fonte Lappone, Pesche',
        university: 'UniMol',
        notes: 'Spazi non ufficiali. Disponibilità soggetta all\'orario delle lezioni e delle attività di laboratorio.',
        tags: ['Laboratorio', 'WiFi'],
    },
    {
        id: 'unimol_pesche_mensa',
        nome: 'Area Mensa e Relax',
        edificio: 'Edificio Mensa/Bar',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['Tavoli Esterni', 'Distributori automatici'],
        latitude: 41.614580,
        longitude: 14.276510,
        indirizzo: 'Contrada Fonte Lappone, Pesche',
        university: 'UniMol',
        notes: 'Spazio principalmente destinato alla pausa pranzo. Utilizzo per studio possibile ma non garantito negli orari di picco.',
        tags: ['Mensa/Ristoro'],
    },
    {
        id: 'unimol_pesche_outdoor',
        nome: 'Riserva Naturale Oasi Le Mortine (Area Studio all\'Aperto)',
        edificio: 'Esterno',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 50,
        orarioApertura: 'H24',
        orarioChiusura: 'H24',
        servizi: ['Natura', 'Botanica', 'Panchine'],
        latitude: 41.6160,
        longitude: 14.2810,
        indirizzo: 'Riserva Pesche',
        university: 'UniMol',
        notes: 'Area naturale vicina al campus. Ideale per studio individuale in condizioni meteorologiche favorevoli. Non è una struttura universitaria attrezzata.',
        tags: ['Aula Studio'],
    },
];

export const getDirectionsPesche = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    // Tutto polo Pesche
    directions.push({
        luogo: 'Stazione FS Isernia / Terminal',
        descrizione: `**Per Polo Pesche (Contrada Fonte Lappone):**
1.  **Auto (MEZZO CONSIGLIATO)**: Da Isernia, prendere la **SS17** in direzione Pesche. Dopo circa 4 km, seguire le indicazioni per l'Università/Località Fonte Lappone. **Parcheggio gratuito** disponibile all'interno del campus.
2.  **Mezzi Pubblici (Servizio Limitato)**:
    *   **Bus Aesernia**: Cercare le linee che servono **Pesche** o **Fonte Lappone**. **Attenzione**: le corse sono molto limitate, soprattutto nel pomeriggio, nei weekend e fuori dall'orario scolastico.
    *   **Navetta Universitaria**: Verificare l'esistenza di un servizio navetta dedicato "Isernia-Pesche" sul portale dell'ateneo.
3.  **A piedi**: **Sconsigliato** – la strada statale è ripida, senza marciapiede e poco sicura per i pedoni.
**NOTA CRUCIALE**: In inverno, la strada può essere soggetta a neve/ghiaccio. Verificare le condizioni meteo e, se necessario, utilizzare catene o mezzi adeguati.`,
        mezziPubblici: ['Bus Aesernia (linee per Pesche)', 'Navetta UniMol (da verificare)'],
        tempoStimato: '10-15 min in auto; 20-30+ min con mezzi (più attese)',
        note: '**Verifica assolutamente gli orari dei bus Aesernia prima della partenza.** Il sito dell\'azienda potrebbe non essere aggiornato.'
    });

    // Info generali
    directions.push({
        luogo: 'Info Generali Polo Pesche',
        descrizione: `**Polo di Pesche - UniMol**
- **Dipartimento di riferimento**: **Bioscienze e Territorio**.
- **Corsi principali**: Scienze Biologiche, Informatica, Ingegneria Civile, Scienze Turistiche.
- **Contesto**: Campus situato in una **località verde e tranquilla**, ideale per lo studio e la ricerca. I servizi commerciali (bar, negozi) sono quasi assenti nell'immediato circondario.
- **Servizi Studenti**: La mensa/bar è probabilmente l'unico punto ristoro interno. Portare con sé ciò che serve per la giornata.
- **Contatti Utili**: Segreteria Dipartimentale (Bioscienze), Servizio Trasporti di Ateneo.`,
        mezziPubblici: [],
        tempoStimato: '-',
        note: 'Polo specializzato e immerso nel verde. L\'autosufficienza è la chiave per una buona esperienza di studio qui.'
    });

    return directions;
};
