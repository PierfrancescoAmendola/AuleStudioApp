# UniStudy Italia 🎓🇮🇹

[🌐 Consulta la pagina web](https://pierfrancescoamendola.github.io/AuleStudioApp/)

**UniStudy Italia** è l'applicazione definitiva per gli studenti universitari italiani che cercano il posto perfetto per studiare. Che tu abbia bisogno di silenzio assoluto, di un'aula per lavori di gruppo o di una biblioteca aperta 24h, UniStudy ti aiuta a trovarla.


---

## 🌟 Funzionalità Principali

*   **Multi-Ateneo**: Supporto per oltre 100 atenei e istituti su tutto il territorio nazionale:
    *   **Lombardia**: PoliMi, UniMi, UniMib, UniPv.
    *   **Campania**: Federico II, Vanvitelli, Parthenope, L'Orientale, UniSa, UniSannio, Suor Orsola.
    *   **Lazio**: La Sapienza, Tor Vergata, Roma Tre.
    *   **Piemonte**: UniTO, PoliTO, UPO.
    *   **Puglia**: UniBa, PoliBa, UniSalento, UniFg.
    *   **Marche & Abruzzo**: UniCam, UNIVPM, UniUrb, Univaq, Unite, GSSI.
    *   **Alta Formazione Artistica e Musicale (AFAM)**: Accademie di Belle Arti e Conservatori in tutta Italia.
    *   *...e in continuo aggiornamento!*
*   **Filtri Intelligenti Avanzati**:
    *   Filtra per **Regione**, **Ateneo**, **Polo Universitario**, **Città** o **Edificio** (es. Campus vs Centro Storico).
    *   Ricerca testuale rapida per nome o indirizzo dell'aula.
*   **Dettagli Completi sulle Aule**:
    *   Orari di apertura/chiusura in tempo reale (stato "Aperto/Chiuso").
    *   Descrizione del "Vibe", consigli sui parcheggi e note di sopravvivenza universitaria!
    *   Servizi disponibili (WiFi, Prese Elettriche, Aria Condizionata, Postazioni, ecc.).
*   **Geolocalizzazione e Navigazione**:
    *   Calcolo istantaneo della distanza in base alla tua posizione attuale.
    *   Ottieni indicazioni precise e mezzi consigliati per raggiungere ogni aula (Bus, Metro, Percorsi a piedi).
    *   Integrazione nativa con Mappe Apple e Google Maps (con clustering avanzato ottimizzato per Android).
*   **SmartWeather e Temi**:
    *   **SmartWeatherCard**: per sapere sempre il micrometeo locale del campus prima di uscire.
    *   Salva le tue aule **Preferite** per un accesso rapido offline.
    *   **Theming Dinamico**: l'interfaccia dell'app si adatta all'istante ai colori ufficiali della tua università!

---

## 🛠 Stack Tecnologico

Costruita per garantire prestazioni elevate, stabilità e fluidità grafica a 60 FPS:

*   **React Native** & **Expo** (SDK 50+) per un'esperienza cross-platform nativa su iOS e Android.
*   **TypeScript** per la tipizzazione statica e la robustezza del codice.
*   **React Navigation** (Stack) per il routing e le transizioni fluide.
*   **React Native Maps** (`react-native-maps` & clustering) per gestire la mappa nazionale senza cali di framerate.
*   **Expo Location** per la geolocalizzazione dell'utente e il sorting per distanza.
*   **AsyncStorage** per la persistenza sicura dei dati (preferiti, regione scelta).

---

## 📸 Screenshots

*(In questa sezione potrai aggiungere GIF e screenshot dell'app in azione sui diversi ecosistemi)*

---

## 🚀 Come iniziare (Sviluppo Locale)

1.  **Clona il repository:**
    ```bash
    git clone https://github.com/tuo-username/UniStudy-Italia.git
    cd UniStudy-Italia
    ```
2.  **Ambiente Node.js:**
    Assicurati di usare Node.js 20+ (raccomandato `nvm use 20`).
3.  **Installa le dipendenze:**
    ```bash
    npm install
    # oppure con yarn
    yarn install
    ```
4.  **Avvia il bundler Metro tramite Expo:**
    ```bash
    npx expo start
    # Usa "npx expo start --clear" per svuotare la cache in caso di anomalie
    ```
5.  **Esegui l'app:**
    *   Premi `i` nel terminale per aprire il simulatore iOS.
    *   Premi `a` nel terminale per aprire l'emulatore Android.
    *   Scansiona il QR code con l'app Expo Go sul tuo smartphone fisico per un test sul dispositivo reale.

---

## 🧪 Testing e Qualità del Codice

La stabilità dell'applicazione è fondamentale, specialmente per UI complesse e per le API native (Mappe/GPS). Utilizziamo un approccio di testing misto:

### 1. Unit Testing e Component Testing (Jest)
I test automatici garantiscono che la logica di calcolo, come i controlli sugli orari di apertura e il filtraggio delle aule, funzionino senza sbavature al variare dei fusi orari.

*   **Avvio dei test:**
    ```bash
    npm run test
    # Per avviare i test in modalità watch durante lo sviluppo attivo:
    npm run test -- --watch
    ```

### 2. Controlli Specifici per Piattaforma (Android / iOS)
Data la natura di React Native, alcune differenze grafiche richiedono QA e test mirati:

*   **Android QA (Edge Cases Nativi su Mappe e UI):**
    Il comportamento del motore di rendering grafico di Android differisce da quello iOS. Lo sviluppo include:
    *   Gestione dei ritardi strategici per il ricalcolo nativo dei Custom Map Callouts su Android (`tracksViewChanges` delay handling).
    *   Forzatura della ricreazione dei componenti di Mappa e Clustering tramite keying dinamici in concomitanza con i filtri di ricerca, al fine di evitare la scomparsa grafica dei nodi (Ghost Pins).
    *   Evitare background ereditati che formano "rettangoli bianchi sfocati" dietro i testi (fix su nested `Text` components via `transparent` backgrounds).
    *   *Se modifichi le componenti in `StudyRoomsScreen.tsx` o `RoomDetailScreen.tsx`, effettua sempre una verifica finale su un emulatore o un device Android fisico!*

### 3. Error Handling e Fallback (Location / UX)
L'app è sviluppata tenendo conto che l'utente possa negare i permessi o perdere la connessione:
*   **Location Flow**: Se l'utente rifiuta l'accesso al GPS, l'app presenta un Dialog Custom (UX amichevole) anziché crashare, fornendo all'utente i pulsanti per saltare la funzione mappa o per accedere facilmente alle impostazioni dirette di sistema per abilitare la geolocalizzazione manuale.

---

## 🤝 Contribuire

Siamo un progetto guidato dalle esigenze degli studenti veri. Manca il tuo ateneo o la tua aula preferita? Vuoi migliorare la descrizione di un polo universitario?

1. Fai il **Fork** del progetto.
2. Crea il tuo branch (`git checkout -b feature/AggiungiUniversitaX`).
3. Compila un nuovo file TypeScript in `src/data/Regione/Ateneo.ts` seguendo le interfacce esportate.
4. Fai il push al tuo branch (`git push origin feature/AggiungiUniversitaX`).
5. Apri una solida **Pull Request**!

Siamo aperti al contributo di tutti per mappare in maniera ineccepibile ogni singola sedia studio italiana.

---

Sviluppato con ❤️ per gli studenti italiani, da dev italiani.
