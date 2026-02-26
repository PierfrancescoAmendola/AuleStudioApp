export interface ExamCategory {
    title: string;
    data: string[];
}

export const EXAM_CATEGORIES: ExamCategory[] = [
    {
        title: "Ingegneria e Informatica",
        data: [
            "Analisi Matematica 1",
            "Analisi Matematica 2",
            "Fisica 1",
            "Fisica 2",
            "Geometria e Algebra Lineare",
            "Fondamenti di Informatica",
            "Programmazione ad Oggetti",
            "Algoritmi e Strutture Dati",
            "Basi di Dati",
            "Sistemi Operativi",
            "Reti di Calcolatori",
            "Elettrotecnica",
            "Elettronica",
            "Meccanica Razionale",
            "Scienza delle Costruzioni",
            "Controlli Automatici",
            "Ricerca Operativa"
        ]
    },
    {
        title: "Medicina e Professioni Sanitarie",
        data: [
            "Anatomia Umana",
            "Istologia ed Embriologia",
            "Fisiologia",
            "Biochimica",
            "Biologia Molecolare",
            "Patologia Generale",
            "Farmacologia",
            "Microbiologia",
            "Medicina Interna",
            "Chirurgia Generale",
            "Igiene e Medicina Preventiva",
            "Neurologia",
            "Pediatria",
            "Ginecologia e Ostetricia",
            "Psichiatria"
        ]
    },
    {
        title: "Economia e Management",
        data: [
            "Economia Aziendale",
            "Microeconomia",
            "Macroeconomia",
            "Matematica Finanziaria",
            "Statistica",
            "Scienze delle Finanze",
            "Diritto Commerciale",
            "Diritto Privato",
            "Diritto Pubblico",
            "Marketing",
            "Organizzazione Aziendale",
            "Contabilità e Bilancio",
            "Economia degli Intermediari Finanziari",
            "Politica Economica"
        ]
    },
    {
        title: "Giurisprudenza e Scienze Politiche",
        data: [
            "Diritto Costituzionale",
            "Istituzioni di Diritto Privato",
            "Diritto Pubblico",
            "Diritto Commerciale",
            "Diritto Penale",
            "Diritto Processuale Civile",
            "Diritto Processuale Penale",
            "Diritto Amministrativo",
            "Diritto del Lavoro",
            "Diritto Internazionale",
            "Filosofia del Diritto",
            "Storia del Diritto Romano",
            "Scienza Politica",
            "Sociologia Generale",
            "Relazioni Internazionali",
            "Storia Contemporanea"
        ]
    },
    {
        title: "Scienze Matematiche, Fisiche e Naturali",
        data: [
            "Algebra",
            "Geometria",
            "Analisi Reale",
            "Fisica Generale 1",
            "Fisica Generale 2",
            "Meccanica Quantistica",
            "Chimica Generale ed Inorganica",
            "Chimica Organica",
            "Chimica Fisica",
            "Biologia Generale",
            "Genetica",
            "Botanica",
            "Zoologia",
            "Scienze della Terra",
            "Ecologia"
        ]
    },
    {
        title: "Lettere, Filosofia, Lingue e Beni Culturali",
        data: [
            "Letteratura Italiana",
            "Letteratura Latina",
            "Letteratura Greca",
            "Linguistica Generale",
            "Filologia Romanza",
            "Storia dell'Arte Medievale",
            "Storia dell'Arte Moderna",
            "Storia dell'Arte Contemporanea",
            "Storia Romana",
            "Storia Greca",
            "Storia Medievale",
            "Storia Moderna",
            "Filosofia Teoretica",
            "Filosofia Morale",
            "Storia della Filosofia",
            "Letteratura Inglese",
            "Lingua Inglese",
            "Lingua Spagnola",
            "Lingua Francese"
        ]
    },
    {
        title: "Architettura e Design",
        data: [
            "Disegno dell'Architettura",
            "Storia dell'Architettura Applicata",
            "Progettazione Architettonica 1",
            "Progettazione Architettonica 2",
            "Urbanistica",
            "Restauro Architettonico",
            "Tecnologia dell'Architettura",
            "Fisica Tecnica Ambientale",
            "Fondamenti di Design",
            "Design del Prodotto",
            "Design della Comunicazione"
        ]
    },
    {
        title: "Scienze della Formazione e Psicologia",
        data: [
            "Psicologia Generale",
            "Psicologia Clinica",
            "Psicologia dello Sviluppo",
            "Psicometria",
            "Psicologia Sociale",
            "Neuroscienze Cognitive",
            "Pedagogia Generale",
            "Didattica Generale",
            "Storia della Pedagogia",
            "Sociologia dell'Educazione",
            "Antropologia Culturale"
        ]
    }
];

// Helper to sort alphabetically globally if needed in the future
export const GET_ALL_EXAMS_ALPHABETICAL = (): string[] => {
    const allExams = EXAM_CATEGORIES.flatMap(category => category.data);
    return Array.from(new Set(allExams)).sort((a, b) => a.localeCompare(b));
};
