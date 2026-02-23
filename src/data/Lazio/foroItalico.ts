import { StudyRoom, DirectionsFromLocation } from '../../types';

export const foroItalicoRooms: StudyRoom[] = [
    // ============================================================
    // PALAZZO H (Cuore dell'Ateneo)
    // ============================================================
    {
        id: 'foro_biblio_centrale',
        nome: 'Biblioteca Centrale "G. Onesti"',
        edificio: 'Palazzo H (1° Piano - Lato Tevere)',
        piano: 1,
        postiDisponibili: 88,
        postiTotali: 88,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['WiFi Eduroam', 'Prese ai tavoli', 'Silenzio Assoluto', 'Architettura Fascista'],
        latitude: 41.9325,
        longitude: 12.4580,
        indirizzo: 'Piazza Lauro de Bosis 15, Roma',
        university: 'Foro Italico',
        occupancy_rate: 'Alto',
        notes: 'La sala principale. Suggestiva ma i posti finiscono subito. Chiusa Sabato/Domenica.',
        tags: ['Biblioteca', 'WiFi', '🔇 Silenzio'],
    },
    {
        id: 'foro_sala_acquario',
        nome: 'Sala Studenti "Acquario" (Piano Terra)',
        edificio: 'Palazzo H (Atrio)',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 80,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['WiFi', 'Distributori Snack', 'Socialità', 'Rumoroso'],
        latitude: 41.9325,
        longitude: 12.4580,
        indirizzo: 'Piazza Lauro de Bosis 15, Roma',
        university: 'Foro Italico',
        notes: 'Non è una vera biblioteca, ma un\'area vetrata nell\'atrio. Si può parlare e mangiare.',
        tags: ['Aula Studio', 'WiFi', '❄️ Climatizzato'],
    },
    {
        id: 'foro_aule_vuote',
        nome: 'Aule Didattiche (Studio Libero)',
        edificio: 'Palazzo H (Aule 1, 2, 3)',
        piano: 0,
        postiDisponibili: 200,
        postiTotali: 300,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Banchi a gradoni', 'Aria Condizionata'],
        latitude: 41.9328,
        longitude: 12.4582,
        indirizzo: 'Piazza Lauro de Bosis 15, Roma',
        university: 'Foro Italico',
        notes: 'Gli studenti usano le aule monumentali per studiare quando non c\'è lezione. Chiedere in portineria quali sono libere.',
        tags: ['Aula Studio', 'WiFi', '❄️ Climatizzato'],
    },

    // ============================================================
    // FORESTERIA E SPAZI RELAX
    // ============================================================
    {
        id: 'foro_foresteria_sud',
        nome: 'Sala Studio Foresteria Sud',
        edificio: 'Edificio Foresteria Sud',
        piano: 0,
        postiDisponibili: 40,
        postiTotali: 50,
        orarioApertura: '09:00',
        orarioChiusura: '22:00',
        servizi: ['WiFi', 'Aperta fino a tardi', 'Riservata Ospiti/Studenti'],
        latitude: 41.9315,
        longitude: 12.4570,
        indirizzo: 'Largo Lauro de Bosis (Lato Ostello), Roma',
        university: 'Foro Italico',
        notes: 'Spazio all\'interno dello studentato/ostello. Spesso accessibile anche ai non residenti se si chiede con gentilezza.',
        tags: ['Aula Studio', 'WiFi'],
    },
    {
        id: 'foro_bar_ateneo',
        nome: 'Area Tavoli Bar Ateneo',
        edificio: 'Edificio Mensa/Bar',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 150,
        orarioApertura: '08:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Caffetteria', 'Pranzo', 'Caotico'],
        latitude: 41.9330,
        longitude: 12.4575,
        indirizzo: 'Piazza Lauro de Bosis 15, Roma',
        university: 'Foro Italico',
        notes: 'Usatissimo per lavori di gruppo e studio informale davanti a un caffè.',
        tags: ['Aula Studio', 'WiFi', '☕ Ristoro'],
    },

    // ============================================================
    // BIBLIOTECA DEL CONI (Esterna ma cruciale)
    // ============================================================
    {
        id: 'foro_coni_lib',
        nome: 'Biblioteca Sportiva Nazionale (CONI)',
        edificio: 'Palazzo CONI',
        piano: 0,
        postiDisponibili: 50,
        postiTotali: 80,
        orarioApertura: '09:00',
        orarioChiusura: '15:30',
        servizi: ['WiFi', 'Consultazione Giornali', 'Specialistica'],
        latitude: 41.9310,
        longitude: 12.4590,
        indirizzo: 'Via dei Campi Sportivi 48, Roma',
        university: 'Foro Italico',
        occupancy_rate: 'Basso',
        notes: 'Fondamentale per le tesi. È la biblioteca dello sport più fornita d\'Italia. Orari stretti (chiude presto).',
        tags: ['Biblioteca', 'WiFi'],
    },

    // ============================================================
    // SPAZI ALL'APERTO (Tipico di Scienze Motorie)
    // ============================================================
    {
        id: 'foro_marmi_outdoor',
        nome: 'Gradoni Stadio dei Marmi',
        edificio: 'Stadio dei Marmi "Pietro Mennea"',
        piano: 0,
        postiDisponibili: 500,
        postiTotali: 5000,
        orarioApertura: '08:00',
        orarioChiusura: 'Tramonto',
        servizi: ['No WiFi', 'All\'aperto', 'Sole', 'Relax'],
        latitude: 41.9340,
        longitude: 12.4560,
        indirizzo: 'Viale dello Stadio dei Marmi, Roma',
        university: 'Foro Italico',
        notes: 'Nelle belle giornate è l\'aula studio preferita. Si studia seduti sui marmi bianchi tra un allenamento e l\'altro.',
        tags: ['Aula Studio', 'WiFi'],
    },

    // ============================================================
    // SEDE DISTACCATA (Acqua Acetosa)
    // ============================================================
    {
        id: 'foro_acqua_acetosa',
        nome: 'Lounge CPO "Giulio Onesti"',
        edificio: 'Centro Preparazione Olimpica',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 50,
        orarioApertura: '09:00',
        orarioChiusura: '19:00',
        servizi: ['Parcheggio', 'Bar interno', 'Zona Relax'],
        latitude: 41.9420,
        longitude: 12.4880,
        indirizzo: 'Largo Giulio Onesti 1, Roma',
        university: 'Foro Italico',
        notes: 'Solo per chi ha corsi pratici al CPO. Si studia nella hall o al bar del centro sportivo.',
        tags: ['Aula Studio', '☕ Ristoro', '🅿️ Parcheggio'],
    }
];

export const getDirectionsForoItalico = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];
    const isAcquaAcetosa = room.indirizzo.includes('Onesti');
    const isMainCampus = room.indirizzo.includes('Lauro de Bosis') || room.indirizzo.includes('Campi Sportivi') || room.indirizzo.includes('Marmi');

    // HUB 1: TERMINI -> METRO A -> BUS 32
    if (isMainCampus) {
        directions.push({
            luogo: 'Stazione Termini',
            descrizione: `Il percorso più classico:
1. **Metro A** (dir. Battistini) fino a **Ottaviano**.
2. Uscita Via Barletta, prendi il **Bus 32** (dir. Saxa Rubra).
3. Scendi a **Lgt. Cadorna/Ostello Gioventù** o **De Bosis**.
4. Attraversa verso il grande obelisco bianco. Sei arrivato.`,
            mezziPubblici: ['Metro A + Bus 32'],
            tempoStimato: '40 min',
            note: 'Il bus 32 ti lascia proprio davanti.'
        });

        directions.push({
            luogo: 'Piazza Mancini (Tram)',
            descrizione: `Il percorso panoramico (evita il traffico):
1. Arriva a **Piazza Mancini** (Capolinea Tram 2 da Flaminio/Metro A).
2. Attraversa a piedi il **Ponte della Musica** (il ponte bianco pedonale).
3. Sei arrivato al Foro Italico (lato Piscine/Palazzo H).`,
            mezziPubblici: ['Tram 2 + A piedi'],
            tempoStimato: '10 min da Flaminio',
            note: 'Consigliatissimo nelle belle giornate.'
        });
    }

    // HUB 2: ROMA NORD (Saxa Rubra / Corso Francia)
    if (isMainCampus) {
        directions.push({
            luogo: 'Roma Nord',
            descrizione: `Da Corso Francia o Saxa Rubra:
1. Prendi qualsiasi bus verso il centro che passi per Lungotevere (es. Bus 32, 200, 201).
2. Scendi a **Lgt. Cadorna/Stadio**.
3. Il Palazzo H è l'edificio rosso scuro dietro l'Obelisco.`,
            mezziPubblici: ['Bus 32/200'],
            tempoStimato: '15-20 min',
            note: ''
        });
    }

    // PER ACQUA ACETOSA (CPO)
    if (isAcquaAcetosa) {
        directions.push({
            luogo: 'Centro / Termini',
            descrizione: `Per il Centro Olimpico Giulio Onesti:
1. Metro A fino a **Flaminio**.
2. Treno Urbano **Roma-Viterbo** (parte dalla stazione accanto alla Metro).
3. Scendi alla fermata **Campi Sportivi** (a richiesta, schiaccia il bottone!).
4. Attraversa il ponte pedonale e sei all'ingresso.`,
            mezziPubblici: ['Treno FC3 Roma-Viterbo'],
            tempoStimato: '35 min',
            note: 'Attenzione: la fermata del treno è a richiesta.'
        });

        directions.push({
            luogo: 'Piazza Mancini',
            descrizione: `Da Piazza Mancini (Tram 2):
1. Prendi il Bus **53** o **168**.
2. Scendi davanti al CPO Giulio Onesti.`,
            mezziPubblici: ['Bus 53/168'],
            tempoStimato: '15 min',
            note: ''
        });
    }

    return directions;
};
