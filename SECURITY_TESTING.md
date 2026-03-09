# Documentazione Security Testing e Vulnerabilità AI

Questo documento descrive la strategia adottata per garantire la sicurezza del codice in **AuleStudioApp**, con un focus particolare sui test delle vulnerabilità, inclusione di strumenti di analisi statica ed esposizione (o mancanza di essa) riguardo alle funzionalità di Intelligenza Artificiale.

## 1. Analisi Statica del Codice (SAST)

Per garantire che il codice sia privo di vulnerabilità note fin dalle fasi di sviluppo, è stato integrato un controllo automatico usando **ESLint** con il plugin **eslint-plugin-security**.

### Strumenti Utilizzati:
- `eslint`: Analisi statica standard.
- `eslint-plugin-security`: Set di regole specifiche per individuare pattern vulnerabili in JavaScript/TypeScript (ad esempio: attacchi di Path Traversal, Regular Expression Denial of Service - ReDoS, Object Injection, ecc.).
- `@typescript-eslint/eslint-plugin`: Parsing e controlli per TypeScript.

### Come Eseguire i Test
È possibile lanciare i controlli di sicurezza manualmente in qualsiasi momento tramite il comando:
```bash
npm run lint:security
```
Questo analizzerà tutti i file sorgenti (`.js`, `.jsx`, `.ts`, `.tsx`) all'interno della cartella `src/`.

## 2. Dependancy Auditing (SCA)

Il progetto sfrutta lo strumento integrato in NPM per analizzare le librerie di terze parti (dipendenze) alla ricerca di falle e criticità conosciute (CVE).

### Come Eseguire i Test:
```bash
npm audit
```

## 3. Test contro Vulnerabilità AI (OWASP Top 10 for LLM)

I test di sicurezza sono configurati per tenere traccia delle potenziali insidie derivate dall'uso di Modelli Linguistici di Grandi Dimensioni (LLMs) o sistemi di Intelligenza Artificiale.

**Dichiarazione sullo Stato Attuale:**
Al momento (con la versione attuale del codice), **AuleStudioApp non integra direttamente chiamate ad API di AI** come OpenAI (ChatGPT), Anthropic (Claude), Gemini, né usa framework come LangChain.
Questo significa che l'applicazione è **immune (zero exposure)** dalle cosiddette vulnerabilità AI, che includono ma non si limitano a:

1. **Prompt Injection** (Iniezione di prompt dannosi).
2. **Insecure Output Handling** (Gestione insicura degli output dell'AI).
3. **Training Data Poisoning** (Avvelenamento dei dati in fase di fine-tuning).
4. **Model Denial of Service** (Sovraccarico dell'AI tramite input complessi).
5. **Overreliance** (Eccessiva affidamento su output allucinatori).

I test di sicurezza (SAST/SCA) hanno pertanto convalidato che l'applicazione non presenta superfici di attacco legate all'Intelligenza Artificiale. Qualora in futuro vengano introdotte funzionalità AI, i flussi della CI/CD e l'analisi statica andranno ampliati per prevenire tali specifiche problematiche.

## 4. Integrazione Continua (CI/CD) su GitHub Actions

Per validare in modo sistematico che le nuove modifiche non introducano vulnerabilità o interrompano le funzionalità esistenti, è stato configurato un workflow GitHub Actions in `.github/workflows/security_and_tests.yml`.

Esso esegue automaticamente ad ogni *Push* o *Pull Request*:
- Il controllo di sicurezza (lint).
- Il controllo delle dipendenze (audit).
- Eventuali test standard (se presenti).

In questo modo, nessun codice vulnerabile o "sporco" può essere mergiato per errore nel repository principale.
