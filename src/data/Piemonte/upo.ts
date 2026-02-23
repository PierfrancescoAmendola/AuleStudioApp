import { StudyRoom, DirectionsFromLocation } from '../../types';

export const upoRooms: StudyRoom[] = [
    // ============================================================
    // NOVARA - POLO PERRONE (Economia, Giurisprudenza, Professioni Sanitarie)
    // ============================================================
    {
        id: 'upo_novara_perrone_biblio',
        nome: 'Biblioteca del Polo Universitario di Novara "Rita Fossaceca"',
        edificio: 'Complesso Perrone',
        piano: -1,
        postiDisponibili: 280,
        postiTotali: 320,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi Eduroam', 'Postazioni PC su prenotazione', 'Sofa/work station', 'Prestito', 'Fotocopie', 'Prese Elettriche'],
        latitude: 45.4432,
        longitude: 8.6185,
        indirizzo: 'Via Generale E. Perrone 18, 28100 Novara',
        university: 'UPO',
        occupancy_rate: 'Altissimo',
        notes: 'Orario: lun-gio 9:00-13:00 e 14:00-18:00; ven 9:00-13:00. Prenotazione obbligatoria per postazioni PC e sofa/work station tramite MyBiblio o app biblioUPO. Ingresso pedonale da Via Perrone 18, auto da Via Passalacqua 9. Piano interrato (sala lettura).'
    },
    {
        id: 'upo_novara_perrone_mensa',
        nome: 'Mensa e Area Relax Perrone',
        edificio: 'Complesso Perrone',
        piano: 0,
        postiDisponibili: 120,
        postiTotali: 150,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['Tavoli Esterni', 'Distributori automatici', 'Socialità', 'Lavori di Gruppo', 'Rumore Tollerato'],
        latitude: 45.4432,
        longitude: 8.6185,
        indirizzo: 'Via Generale E. Perrone 18, 28100 Novara',
        university: 'UPO',
        notes: 'Spazio informale per studio e pausa. Non richiede prenotazione. Perfetto per gruppi e socialità.'
    },
    {
        id: 'upo_novara_nova',
        nome: 'Spazio Nòva (Ex Caserma)',
        edificio: 'Ex Caserma Passalacqua',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 130,
        orarioApertura: '09:00',
        orarioChiusura: '22:00',
        servizi: ['WiFi', 'Caffetteria', 'Coworking', 'Lavori di Gruppo', 'Rumore Tollerato', 'Brainstorming', 'Eventi culturali', 'Spazio Aggregazione'],
        latitude: 45.4448,
        longitude: 8.6170,
        indirizzo: 'Via Passalacqua, 28100 Novara',
        university: 'UPO',
        occupancy_rate: 'Medio',
        notes: '💡 INSIDER TIP: Non è una biblioteca silenziosa — è un centro giovanile moderno dove si può parlare, fare brainstorming e bere un caffè senza ansie. Perfetto per la salute mentale universitaria. Apertura serale. Ideale come alternativa quando il Perrone scoppia.'
    },
    {
        id: 'upo_novara_solaroli',
        nome: 'Ex Biblioteca Biomedica (Servizi confluiti)',
        edificio: 'Polo Medicina',
        piano: 0,
        postiDisponibili: 110,
        postiTotali: 130,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['Testi Clinici', 'Vicinanza Ospedale', 'Prese Elettriche'],
        latitude: 45.4405,
        longitude: 8.6202,
        indirizzo: 'Via Solaroli 17, Novara',
        university: 'UPO',
        notes: 'ATTENZIONE: dal 16/12/2025 le pagine web della biblioteca sono confluite nel Sistema Bibliotecario di Ateneo. Verificare se i servizi sono stati trasferiti al Polo Perrone.'
    },
    // ============================================================
    // ALESSANDRIA - POLO BORSALINO & DISIT
    // ============================================================
    {
        id: 'upo_alessandria_borsalino',
        nome: 'Biblioteca e Aule - Palazzo Borsalino (DIGSPES)',
        edificio: 'Palazzo Borsalino',
        piano: 0,
        postiDisponibili: 200,
        postiTotali: 240,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Aule studio', 'Laboratori informatici', 'Aula lauree', 'Portineria 8:00-19:00', 'Centro Storico', 'Archeologia Industriale'],
        latitude: 44.9102,
        longitude: 8.6155,
        indirizzo: 'Via Cavour 84, 15121 Alessandria',
        university: 'UPO',
        occupancy_rate: 'Alto',
        notes: 'Sede del DIGSPES in un ex stabilimento Borsalino (archeologia industriale). In pieno centro storico — si vive a piedi, parcheggio difficile. Palazzo affascinante con storia manifatturiera. Sedi satellite: Via Mondovì 8 e Corso Borsalino 44.'
    },
    {
        id: 'upo_alessandria_disit_biblio',
        nome: 'Biblioteca e Aule - DiSIT (Scienze e Innovazione)',
        edificio: 'Viale Teresa Michel',
        piano: 0,
        postiDisponibili: 180,
        postiTotali: 220,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['WiFi Eduroam', 'Laboratori moderni', 'Aule studio', 'Area verde', 'Portineria 8:00-18:30', 'Parcheggio Facile', 'Prese Elettriche'],
        latitude: 44.9125,
        longitude: 8.6252,
        indirizzo: 'Viale Teresa Michel 11, 15121 Alessandria',
        university: 'UPO',
        occupancy_rate: 'Medio',
        notes: 'Dipartimento di Scienze e Innovazione Tecnologica (DiSIT). Zona periferica, moderna e verde — l\'opposto di Borsalino. Tanto spazio e parcheggio facile. Ricezione al piano terra.'
    },
    // ============================================================
    // VERCELLI - POLO UMANISTICO (DISUM) — "Quiet & Historic"
    // ============================================================
    {
        id: 'upo_vercelli_sangiuseppe',
        nome: 'Polo San Giuseppe - Aule e Uffici',
        edificio: 'Complesso San Giuseppe',
        piano: 1,
        postiDisponibili: 120,
        postiTotali: 150,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi Eduroam', 'Chiostro storico', 'Affreschi', 'Portineria 8:00-18:30', 'Quiet & Historic', 'Ambiente Silenzioso'],
        latitude: 45.3262,
        longitude: 8.4225,
        indirizzo: 'Piazza Sant\'Eusebio 5, 13100 Vercelli',
        university: 'UPO',
        occupancy_rate: 'Medio',
        notes: 'Sede principale DISUM. Chiostro storico con affreschi — calma assoluta rispetto ai grandi atenei metropolitani. Vicino alla Basilica di Sant\'Andrea.'
    },
    {
        id: 'upo_vercelli_biblio',
        nome: 'Biblioteca Universitaria del Polo di Vercelli',
        edificio: 'Edificio Biblioteca',
        piano: 0,
        postiDisponibili: 180,
        postiTotali: 220,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Sale lettura', 'Prestito', 'Fotocopie', 'Postazioni PC', 'Quiet & Historic', 'Ambiente Silenzioso'],
        latitude: 45.3270,
        longitude: 8.4215,
        indirizzo: 'Via Galileo Ferraris 54, 13100 Vercelli',
        university: 'UPO',
        occupancy_rate: 'Alto',
        notes: 'Biblioteca principale del polo umanistico. Esperienza di calma assoluta. Vicina a Palazzo Tartara e all\'Ospedaletto.'
    },
    {
        id: 'upo_vercelli_tartara',
        nome: 'Palazzo Tartara - Aule e Laboratori',
        edificio: 'Palazzo Tartara',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi Eduroam', 'Laboratori (DIGILIBlt, Antropologia, Geografia, LASA, LICOTT)', 'Aule', 'Portineria 8:00-18:30', 'Quiet & Historic'],
        latitude: 45.3268,
        longitude: 8.4210,
        indirizzo: 'Via Galileo Ferraris 109, 13100 Vercelli',
        university: 'UPO',
        occupancy_rate: 'Medio',
        notes: 'Studi docenti e laboratori di ricerca del DISUM. Ingresso anche da Piazza Roma 16. Atmosfera storica.'
    },
    {
        id: 'upo_vercelli_ospedaletto',
        nome: 'Ex Ospedaletto - Aule',
        edificio: 'Ex Ospedaletto',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '08:00',
        orarioChiusura: '18:30',
        servizi: ['WiFi Eduroam', 'Aule', 'Portineria 8:00-18:30', 'Quiet & Historic'],
        latitude: 45.3272,
        longitude: 8.4212,
        indirizzo: 'Viale Garibaldi 98, 13100 Vercelli',
        university: 'UPO',
        occupancy_rate: 'Basso',
        notes: 'Aule didattiche del DISUM. Ingresso anche da Via Galileo Ferraris 109 e Piazza Roma. Ambiente tranquillo e storico.'
    },
    // ============================================================
    // DISTACCATI (Asti, Biella, Verbania) — "Servizi Dedicati / Zero Stress"
    // ============================================================
    {
        id: 'upo_asti_astiss',
        nome: 'Polo Universitario Astiss (Uni-ASTISS)',
        edificio: 'Campus Rita Levi Montalcini',
        piano: 0,
        postiDisponibili: 130,
        postiTotali: 160,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi Eduroam', 'Aule', 'Corso di Laurea in Servizio Sociale', 'Portineria 8:30-13:30', 'Servizi Dedicati', 'Zero Stress'],
        latitude: 44.9010,
        longitude: 8.2010,
        indirizzo: 'Piazzale Fabrizio De André, 14100 Asti',
        university: 'UPO',
        occupancy_rate: 'Medio',
        notes: 'Sede distaccata condivisa con UniTo. Ospita il Corso di Laurea in Servizio Sociale. Niente lotta per i posti — servizi pronti all\'uso. Contatto: tel. 0141 590423.'
    },
    {
        id: 'upo_biella_infermieristica',
        nome: 'Polo di Biella - Corso di Laurea in Infermieristica',
        edificio: 'Sede ASL Biella',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 120,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi Eduroam', 'Laboratorio di Simulazione', 'Aule', 'Biblioteca', 'Servizi Dedicati', 'Zero Stress'],
        latitude: 45.5565,
        longitude: 8.0672,
        indirizzo: 'Corso Giuseppe Pella 2b, 13900 Biella',
        university: 'UPO',
        occupancy_rate: 'Medio',
        notes: 'Polo formativo per Infermieristica. Campus Città Studi (condiviso con PoliTo e UniTo). Laboratorio di Simulazione con postazione informatica per esercitazioni cliniche. Servizi dedicati, zero stress.'
    },
    {
        id: 'upo_verbania',
        nome: 'Polo Verbania',
        edificio: 'Istituto Cobianchi',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 60,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['Turismo', 'Vicino Lago', 'Servizi Dedicati', 'Zero Stress'],
        latitude: 45.9280,
        longitude: 8.5480,
        indirizzo: 'Piazza Martiri di Trarego, Verbania',
        university: 'UPO',
        occupancy_rate: 'Basso',
        notes: 'ATTENZIONE: sede non verificata nelle fonti ufficiali recenti. Verificare l\'attivazione dei corsi prima di recarsi sul posto. Zero stress: nessuna lotta per i posti.'
    }
];

export const getDirectionsUPO = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const isNovara = room.indirizzo.includes('Novara') || room.id.includes('novara');
    const isAlessandria = room.indirizzo.includes('Alessandria') || room.id.includes('alessandria');
    const isVercelli = room.indirizzo.includes('Vercelli') || room.id.includes('vercelli');
    const isDistaccata = room.id.includes('asti') || room.id.includes('biella') || room.id.includes('verbania');

    // NOVARA
    if (isNovara) {
        directions.push({
            luogo: 'Stazione Ferroviaria di Novara',
            descrizione: `**Per i poli di Novara (Perrone e Solaroli):**
1.  **A piedi (consigliato)**: Dalla stazione, percorrere Baluardo Partigiani, poi Viale Ferrucci fino a Via Perrone. Tempo: 10-15 minuti. Percorso pianeggiante.
2.  **Bus SUN**: Linee urbane che fermano in prossimità dell'Ospedale o di Via Perrone (linee 1, 2, 3, 4).
3.  **Auto**: Parcheggi a pagamento nelle vie limitrofe. Per il Complesso Perrone, ingresso auto da Via Passalacqua 9.
**NOTE**: Novara è compatta e pianeggiante. Ottimi collegamenti ferroviari da Milano (40 min) e Torino (1h).`,
            mezziPubblici: ['A piedi', 'Bus SUN linee 1,2,3,4'],
            tempoStimato: '10-15 min a piedi',
            note: 'La nuova biblioteca "Rita Fossaceca" richiede prenotazione per postazioni speciali.'
        });
    }
    // ALESSANDRIA
    else if (isAlessandria) {
        directions.push({
            luogo: 'Stazione Ferroviaria di Alessandria',
            descrizione: `**Per i poli di Alessandria (Borsalino e DiSIT):**
1.  **Palazzo Borsalino (Via Cavour 84)**: 8-12 min a piedi dalla stazione. Uscire, attraversare Piazza Matteotti e proseguire su Corso Roma fino a Via Cavour.
2.  **DiSIT (Viale Teresa Michel 11)**: Bus linea 2 (fermata "Michel") o 20-25 min a piedi.
3.  **Auto**: Parcheggio più facile al DiSIT (area verde con parcheggi). Per Borsalino, parcheggi a pagamento in centro.
**NOTE**: Alessandria è ben collegata da autostrade A21, A26 e A7. Portineria DiSIT aperta 8:00-18:30.`,
            mezziPubblici: ['Bus AMAG linea 2 (per DiSIT)', 'A piedi (per Borsalino)'],
            tempoStimato: '8-25 min',
            note: 'Palazzo Borsalino è in centro storico; DiSIT è in zona più moderna e verde.'
        });
    }
    // VERCELLI
    else if (isVercelli) {
        let noteSpecifiche = '';
        if (room.id.includes('sangiuseppe')) {
            noteSpecifiche = 'Polo San Giuseppe: uscito dalla stazione, attraversare Piazza Roma e proseguire per Via San Giuseppe. 5 min.';
        } else if (room.id.includes('biblio')) {
            noteSpecifiche = 'Biblioteca (Via Ferraris 54): dalla stazione, 8 min a piedi verso Piazza Roma, poi Via Ferraris.';
        } else if (room.id.includes('tartara')) {
            noteSpecifiche = 'Palazzo Tartara (Via Ferraris 109): 10 min a piedi, proseguire oltre la biblioteca.';
        } else if (room.id.includes('ospedaletto')) {
            noteSpecifiche = 'Ex Ospedaletto (Viale Garibaldi 98): 10 min a piedi, ingresso anche da Via Ferraris.';
        }

        directions.push({
            luogo: 'Stazione Ferroviaria di Vercelli',
            descrizione: `**Per il polo umanistico di Vercelli (DISUM):**
1.  **A piedi**: Tutte le sedi sono raggiungibili in 5-10 minuti a piedi dalla stazione. ${noteSpecifiche || 'Seguire le indicazioni per Piazza Sant\'Eusebio.'}
2.  **Auto**: Vercelli è raggiungibile da A4 (Torino-Milano) con uscita A26 per Vercelli. Parcheggi nelle vie limitrofe (strisce blu e gratuite).
**NOTE**: Città piccola e pianeggiante, perfetta per spostarsi a piedi o in bici.`,
            mezziPubblici: ['A piedi', 'Bus urbani (linee 1,2,3,4)'],
            tempoStimato: '5-10 min',
            note: 'Tutte le strutture sono vicine tra loro. Portinerie aperte 8:00-18:30.'
        });
    }
    // DISTACCATE (Asti, Biella, Verbania)
    else if (isDistaccata) {
        if (room.id.includes('asti')) {
            directions.push({
                luogo: 'Stazione Ferroviaria di Asti',
                descrizione: `**Per il polo Astiss (Piazzale De André):**
1.  **A piedi**: 15 minuti dalla stazione (direzione Corso Torino, poi Piazzale De André).
2.  **Bus urbano**: Linee 1, 3 (fermata "Astiss").
3.  **Auto**: Parcheggio gratuito nel piazzale del campus.
**NOTE**: Campus condiviso con UniTo. Contatto: 0141 590423.`,
                mezziPubblici: ['Treni Regionali', 'Bus urbani 1, 3'],
                tempoStimato: '10-15 min',
                note: 'Costo vita più basso rispetto a Novara.'
            });
        } else if (room.id.includes('biella')) {
            directions.push({
                luogo: 'Stazione Ferroviaria di Biella San Paolo',
                descrizione: `**Per il polo di Biella (Città Studi):**
1.  **Bus urbano**: Linee 2, 4 (fermata "Città Studi").
2.  **A piedi**: 20 minuti circa (Corso Pella).
3.  **Auto**: Ampio parcheggio gratuito nel campus.
**NOTE**: Il polo ospita il Corso di Laurea in Infermieristica con Laboratorio di Simulazione.`,
                mezziPubblici: ['Treni Regionali', 'Bus urbani 2, 4'],
                tempoStimato: '5-10 min in bus',
                note: 'Campus condiviso con PoliTo e UniTo.'
            });
        } else if (room.id.includes('verbania')) {
            directions.push({
                luogo: 'Stazione Ferroviaria di Verbania-Pallanza',
                descrizione: `**Per il polo di Verbania:**
1.  **Bus urbano**: Linee VCO (Verbania - Pallanza).
2.  **Auto**: Parcheggi nelle vie limitrofe.
**ATTENZIONE**: Sede non verificata nelle fonti ufficiali. Verificare l'attivazione dei corsi prima di recarsi sul posto.`,
                mezziPubblici: ['Treni Regionali', 'Bus VCO'],
                tempoStimato: '10-15 min',
                note: 'Verificare attivazione corsi.'
            });
        } else {
            directions.push({
                luogo: 'Stazioni Regionali',
                descrizione: `Le sedi distaccate (Asti, Biella, Verbania) sono raggiungibili con treni regionali e bus locali. Verificare orari su Trenitalia e siti dei trasporti locali.`,
                mezziPubblici: ['Treni Regionali', 'Bus locali'],
                tempoStimato: '5-15 min a piedi dalla stazione',
                note: 'Costo vita più basso rispetto a Novara.'
            });
        }
    }

    // INFO GENERALI DI CONTESTO
    directions.push({
        luogo: 'Informazioni Generali UPO',
        descrizione: `**Università del Piemonte Orientale (UPO)**
- **Poli principali**: Novara (Economia, Giurisprudenza, Medicina), Alessandria (Giurisprudenza, Scienze Politiche, Scienze e Innovazione), Vercelli (Studi Umanistici), Asti (Servizio Sociale), Biella (Infermieristica).
- **Il Triangolo dei Pendolari**: È normale spostarsi tra Novara, Alessandria e Vercelli in treno. Tutti i poli sono collegati dalla linea Torino-Milano.
- **Trasporti**: Bus urbani gestiti da SUN (Novara), AMAG (Alessandria), ATAP (Vercelli).
- **App utili**: "biblioUPO" (prenotazione posti in biblioteca), "MyBiblio" (portale biblioteche), "UPORisponde" (ticketing per segreterie).
- **Contatti**: Centralino: 0321 3751, sito: www.uniupo.it`,
        mezziPubblici: [],
        tempoStimato: '-',
        note: 'Ateneo diffuso su tutto il Piemonte orientale. Verificare sempre orari aggiornati su biblioUPO e avvisi di chiusura.'
    });

    return directions;
};
