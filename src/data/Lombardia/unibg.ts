import { StudyRoom, DirectionsFromLocation } from '../../types';

export const unibgRooms: StudyRoom[] = [
    // ============================================================
    // BERGAMO CITTÀ ALTA - POLO UMANISTICO
    // ============================================================
    {
        id: 'unibg_salvecchio_bunker',
        nome: 'Aula Studio "Bunker"',
        edificio: 'Sede Via Salvecchio',
        piano: -1,
        postiDisponibili: 118,
        postiTotali: 118,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['WiFi Eduroam', 'Prese elettriche', 'Silenzio'],
        latitude: 45.7045,
        longitude: 9.6610,
        indirizzo: 'Via Salvecchio 19, Bergamo (Città Alta)',
        university: 'UniBg',
        occupancy_rate: 'Alto',
        notes: 'La più famosa di Città Alta. Si trova nel seminterrato, ottima per concentrazione totale.'
    },
    {
        id: 'unibg_pignolo_biblio',
        nome: 'Biblioteca Umanistica (Sede Pignolo)',
        edificio: 'Palazzo Bassi Rathgeb',
        piano: 0, // Vari livelli
        postiDisponibili: 150,
        postiTotali: 200,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['WiFi Eduroam', 'Palazzo Storico', 'Cortile'],
        latitude: 45.7010,
        longitude: 9.6700,
        indirizzo: 'Via Pignolo 123, Bergamo',
        university: 'UniBg',
        notes: 'Situata in un palazzo rinascimentale tra Città Alta e Bassa. Aperta anche Sabato mattina (8:30-12:30).'
    },
    {
        id: 'unibg_santagostino',
        nome: 'Sala Studio Chiostro Sant\'Agostino',
        edificio: 'Ex Convento Sant\'Agostino',
        piano: 1,
        postiDisponibili: 28,
        postiTotali: 40,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Vista Panoramica', 'Chiostro'],
        latitude: 45.7060,
        longitude: 9.6680,
        indirizzo: 'Piazzale Sant\'Agostino 2, Bergamo',
        university: 'UniBg',
        notes: 'Sede monumentale. Studiare nel chiostro o nelle aule libere è un must.'
    },
    {
        id: 'unibg_rosate_4piano',
        nome: 'Aula Studio Piazza Rosate',
        edificio: 'Sede Rosate (Lingue)',
        piano: 4,
        postiDisponibili: 60,
        postiTotali: 60,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Vista Città'],
        latitude: 45.7035,
        longitude: 9.6590,
        indirizzo: 'Piazza Rosate 2, Bergamo',
        university: 'UniBg',
        notes: 'Sede del Dipartimento di Lingue. Vista spettacolare dai piani alti.'
    },

    // ============================================================
    // BERGAMO BASSA - CANIANA (Economia & Giurisprudenza)
    // ============================================================
    {
        id: 'unibg_caniana_biblio',
        nome: 'Biblioteca di Economia e Giurisprudenza',
        edificio: 'Sede Caniana',
        piano: 0,
        postiDisponibili: 240,
        postiTotali: 300,
        orarioApertura: '08:30',
        orarioChiusura: '19:30',
        servizi: ['WiFi Eduroam', 'Prenotazione App UniBg', 'Box Restituzione H24'],
        latitude: 45.6880,
        longitude: 9.6570,
        indirizzo: 'Via dei Caniana 2, Bergamo',
        university: 'UniBg',
        occupancy_rate: 'Molto Alto',
        notes: 'Cuore pulsante del campus "basso". Aperta anche Sabato mattina (8:30-12:30).'
    },
    {
        id: 'unibg_caniana_mensa',
        nome: 'Sala Studio Mensa Caniana',
        edificio: 'Sede Caniana (Piano Terra)',
        piano: 0,
        postiDisponibili: 236,
        postiTotali: 236,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Tavoli grandi', 'Rumoroso'],
        latitude: 45.6880,
        longitude: 9.6570,
        indirizzo: 'Via dei Caniana 2, Bergamo',
        university: 'UniBg',
        notes: 'Usata come aula studio al di fuori degli orari di punta del pranzo. Ambiente informale.'
    },
    {
        id: 'unibg_caniana_moroni',
        nome: 'Sala Studio Moroni',
        edificio: 'Sede Caniana',
        piano: 0,
        postiDisponibili: 32,
        postiTotali: 32,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'PC Fissi'],
        latitude: 45.6880,
        longitude: 9.6570,
        indirizzo: 'Via dei Caniana 2, Bergamo',
        university: 'UniBg',
    },

    // ============================================================
    // DALMINE - INGEGNERIA (Polo Scientifico)
    // ============================================================
    {
        id: 'unibg_dalmine_biblio',
        nome: 'Biblioteca di Ingegneria',
        edificio: 'Edificio A',
        piano: 0,
        postiDisponibili: 100,
        postiTotali: 150,
        orarioApertura: '08:30',
        orarioChiusura: '18:30',
        servizi: ['WiFi Eduroam', 'Consultazione Norme', 'Prese'],
        latitude: 45.6480,
        longitude: 9.6050,
        indirizzo: 'Viale Marconi 5, Dalmine (BG)',
        university: 'UniBg',
        notes: 'Biblioteca tecnica specializzata. Orari lun-ven.'
    },
    {
        id: 'unibg_dalmine_edificio_c',
        nome: 'Spazio Studio Edificio C',
        edificio: 'Edificio C',
        piano: 0,
        postiDisponibili: 80,
        postiTotali: 100,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Tavoli liberi', 'Pausa Pranzo'],
        latitude: 45.6485,
        longitude: 9.6055,
        indirizzo: 'Viale Marconi 5, Dalmine',
        university: 'UniBg',
        notes: 'Aperto anche per consumare pasti portati da casa (fascia 12:15-14:00).'
    },

    // ============================================================
    // BIBLIOTECA TIRABOSCHI (Comunale ma vitale per studenti)
    // ============================================================
    {
        id: 'bg_tiraboschi',
        nome: 'Biblioteca Tiraboschi (Comunale)',
        edificio: 'Edificio Mario Botta',
        piano: 0,
        postiDisponibili: 300,
        postiTotali: 500,
        orarioApertura: '09:00',
        orarioChiusura: '22:30',
        servizi: ['Aperta Serale', 'WiFi', 'Design Moderno'],
        latitude: 45.6910,
        longitude: 9.6650,
        indirizzo: 'Via San Bernardino 74, Bergamo',
        university: 'UniBg',
        notes: 'NON universitaria ma fondamentale: è aperta fino alle 22:30 (lun-ven) ed è il rifugio serale degli studenti. Vicina a Caniana.'
    },

    // ============================================================
    // DALMINE - SPAZI AGGIUNTIVI (Ingegneria)
    // ============================================================
    {
        id: 'unibg_dalmine_rialzato_b',
        nome: 'Sala Studio Edificio B (Piano Rialzato)',
        edificio: 'Edificio B',
        piano: 1,
        postiDisponibili: 65,
        postiTotali: 74,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['WiFi', 'Grande', 'Silenziosa'],
        latitude: 45.6482,
        longitude: 9.6052,
        indirizzo: 'Viale Marconi 5, Dalmine (BG)',
        university: 'UniBg',
        notes: '74 posti! Una delle sale più grandi di Dalmine.'
    },
    {
        id: 'unibg_dalmine_pasubio_terra',
        nome: 'Sala Studio Via Pasubio (Piano Terra)',
        edificio: 'Sede Via Pasubio',
        piano: 0,
        postiDisponibili: 55,
        postiTotali: 65,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['WiFi', 'Vicina Biblioteca'],
        latitude: 45.6490,
        longitude: 9.6045,
        indirizzo: 'Via Pasubio 7b, Dalmine (BG)',
        university: 'UniBg',
        notes: 'Adiacente alla Biblioteca di Ingegneria.'
    },
    {
        id: 'unibg_dalmine_pasubio_mensa',
        nome: 'Sala Studio Mensa Pasubio',
        edificio: 'Sede Via Pasubio',
        piano: 0,
        postiDisponibili: 60,
        postiTotali: 68,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Tavoli grandi', 'Informale'],
        latitude: 45.6490,
        longitude: 9.6045,
        indirizzo: 'Via Pasubio 7b, Dalmine (BG)',
        university: 'UniBg',
        notes: 'Sala mensa usata come aula studio. 68 posti.'
    },

    // ============================================================
    // BERGAMO CITTÀ ALTA/PIGNOLO - SPAZI AGGIUNTIVI
    // ============================================================
    {
        id: 'unibg_pignolo_meno4',
        nome: 'Aula Studio Pignolo (Piano -4)',
        edificio: 'Palazzo Bassi Rathgeb',
        piano: -4,
        postiDisponibili: 90,
        postiTotali: 109,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['WiFi', 'Enorme', 'Silenziosa'],
        latitude: 45.7010,
        longitude: 9.6700,
        indirizzo: 'Via Pignolo 123, Bergamo',
        university: 'UniBg',
        occupancy_rate: 'Alto',
        notes: '109 posti! La più grande aula studio del campus umanistico. Al quarto piano interrato.'
    },
    {
        id: 'unibg_pignolo_alasca',
        nome: 'Sala Studio Alasca (Piano Terra)',
        edificio: 'Palazzo Bassi Rathgeb',
        piano: 0,
        postiDisponibili: 25,
        postiTotali: 30,
        orarioApertura: '08:30',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Raccolta'],
        latitude: 45.7010,
        longitude: 9.6700,
        indirizzo: 'Via Pignolo 123, Bergamo',
        university: 'UniBg',
        notes: 'Piccola sala al piano terra. Ideale per chi cerca tranquillità.'
    },
    {
        id: 'unibg_salvecchio_4',
        nome: 'Sala Studio Via Salvecchio 4',
        edificio: 'Sede Salvecchio (Annesso)',
        piano: 0,
        postiDisponibili: 30,
        postiTotali: 36,
        orarioApertura: '08:00',
        orarioChiusura: '19:30',
        servizi: ['WiFi', 'Piccola'],
        latitude: 45.7045,
        longitude: 9.6608,
        indirizzo: 'Via Salvecchio 4, Bergamo (Città Alta)',
        university: 'UniBg',
        notes: 'Spazio aggiuntivo vicino al Bunker ma meno affollato.'
    },
    {
        id: 'unibg_salvecchio_saletta',
        nome: 'Saletta Piano Terra Salvecchio',
        edificio: 'Sede Salvecchio',
        piano: 0,
        postiDisponibili: 18,
        postiTotali: 20,
        orarioApertura: '08:00',
        orarioChiusura: '19:00',
        servizi: ['WiFi', 'Piccola', 'Silenzio'],
        latitude: 45.7045,
        longitude: 9.6610,
        indirizzo: 'Via Salvecchio 19, Bergamo (Città Alta)',
        university: 'UniBg',
        notes: 'Per chi cerca massima concentrazione in uno spazio intimo.'
    },
    {
        id: 'unibg_salvecchio_cla',
        nome: 'Centro Linguistico di Ateneo (CLA)',
        edificio: 'Sede Salvecchio',
        piano: 0,
        postiDisponibili: 15,
        postiTotali: 19,
        orarioApertura: '09:00',
        orarioChiusura: '17:00',
        servizi: ['WiFi', 'PC', 'Lingue'],
        latitude: 45.7045,
        longitude: 9.6610,
        indirizzo: 'Via Salvecchio 19, Bergamo (Città Alta)',
        university: 'UniBg',
        notes: 'Per studio delle lingue. Postazioni con PC e risorse multimediali.'
    },
    {
        id: 'unibg_santagostino_lab3',
        nome: 'Laboratorio 3 Sant\'Agostino',
        edificio: 'Ex Convento Sant\'Agostino',
        piano: 0,
        postiDisponibili: 14,
        postiTotali: 16,
        orarioApertura: '08:30',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'PC Fissi'],
        latitude: 45.7060,
        longitude: 9.6680,
        indirizzo: 'Piazzale Sant\'Agostino 2, Bergamo',
        university: 'UniBg',
        notes: 'Laboratorio informatico utilizzabile anche come aula studio.'
    },
    {
        id: 'unibg_sanlorenzo_mensa',
        nome: 'Sala Studio Mensa San Lorenzo',
        edificio: 'Via San Lorenzo',
        piano: 0,
        postiDisponibili: 130,
        postiTotali: 152,
        orarioApertura: '09:00',
        orarioChiusura: '18:00',
        servizi: ['WiFi', 'Enorme', 'Informale', 'Mensa'],
        latitude: 45.7055,
        longitude: 9.6670,
        indirizzo: 'Via San Lorenzo, Bergamo',
        university: 'UniBg',
        notes: '152 posti! Sala mensa usata come aula studio. Ambiente sociale e informale.'
    }
];

export const getDirectionsUnibg = (room: StudyRoom): DirectionsFromLocation[] => {
    const directions: DirectionsFromLocation[] = [];

    const isCittaAlta = room.indirizzo.includes('Salvecchio') || room.indirizzo.includes('Rosate') || room.indirizzo.includes('Sant\'Agostino');
    const isPignolo = room.indirizzo.includes('Pignolo');
    const isCaniana = room.indirizzo.includes('Caniana');
    const isDalmine = room.indirizzo.includes('Dalmine') || room.indirizzo.includes('Marconi');
    const isTiraboschi = room.indirizzo.includes('Bernardino');

    // BERGAMO BASSA (Caniana / Tiraboschi)
    if (isCaniana || isTiraboschi) {
        directions.push({
            luogo: 'Stazione FS Bergamo',
            descrizione: `Per Sede Caniana (Economia):
1. Dalla stazione, prendi l'uscita principale.
2. A piedi: circa 10-15 minuti. Segui Via Bonomelli e poi Via San Bernardino.
3. In Bus: Linea 5 o Linea U (Università) dal piazzale stazione.`,
            mezziPubblici: ['Bus Linea 5/U', 'A piedi'],
            tempoStimato: '10 min',
            note: 'Caniana è vicinissima al centro città.'
        });
    }

    // BERGAMO CITTÀ ALTA (Salvecchio / Rosate)
    else if (isCittaAlta) {
        directions.push({
            luogo: 'Stazione FS Bergamo',
            descrizione: `Per Città Alta (Salvecchio/Rosate):
1. Dalla stazione, prendi il **Bus Linea 1** (direzione Città Alta/Colle Aperto).
2. Scendi alla fermata capolinea o viale delle Mura.
3. **Funicolare**: Puoi prendere il bus 1 fino alla Funicolare bassa, salire, e poi camminare 5 min in Città Alta.
4. Sant'Agostino è la prima sede che incontri salendo dalle mura.`,
            mezziPubblici: ['Bus Linea 1', 'Funicolare'],
            tempoStimato: '25-30 min',
            note: 'Suggestivo ma calcola i tempi di risalita.'
        });
    }

    // SEDE PIGNOLO
    else if (isPignolo) {
        directions.push({
            luogo: 'Stazione FS Bergamo',
            descrizione: `Per Sede Pignolo (Lettere):
1. A piedi dalla stazione: 15 minuti verso "Borgo Pignolo".
2. È la via che sale verso Città Alta.
3. Bus Linea 1 ferma vicino.`,
            mezziPubblici: ['A piedi', 'Bus 1'],
            tempoStimato: '15 min',
            note: 'A metà strada tra città alta e bassa.'
        });
    }

    // DALMINE (Ingegneria)
    else if (isDalmine) {
        directions.push({
            luogo: 'Stazione FS Bergamo',
            descrizione: `Per Polo Ingegneria (Dalmine):
1. Dalla stazione autolinee (di fronte FS), prendi **Bus Linea 5** (Dir. Dalmine).
2. Scendi a Dalmine (Viale Marconi o Municipio).
3. Tempo di percorrenza: 20-30 minuti a seconda del traffico.`,
            mezziPubblici: ['Bus Linea 5 (ATB)'],
            tempoStimato: '30 min',
            note: 'Dalmine è un comune a parte.'
        });

        directions.push({
            luogo: 'Treno Diretto (Verdello-Dalmine)',
            descrizione: `Alternativa Treno:
1. Treno da Milano o Bergamo per **Verdello-Dalmine**.
2. Dalla stazione di Verdello serve però un bus navetta per il campus (meno frequente).`,
            mezziPubblici: ['Treno + Bus'],
            tempoStimato: 'Variabile',
            note: 'Il bus 5 da Bergamo è solitamente più comodo per gli studenti.'
        });
    }

    return directions;
};
