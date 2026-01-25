const VOCAB = [  // Core Entities & Tables
  "student",
  "fees",
  "marks",
  "attendance",
  "exam",
  "course",
  "courses",
  "program",
  "programme",
  "faculty",
  "hostel",
  "subject",
  "subjects",
  "duration",
  "major",
  "minor",
  "vocational",
  "certification",
  "undergraduate",
  "postgraduate",
  "diploma",
  "department",
  "guardian",
  "gender",
  "library",
  "scholarship",
  "placement",
  "canteen",
  "sports",
  "event",
  "campus", // Academic & Evaluation
  "test",
  "score",
  "result",
  "percentage",
  "grades",
  "report",
  "timetable",
  "schedule",
  "semester",
  "session",
  "class",
  "room",
  "professor",
  "teacher",
  "teaches",
  "syllabus",
  "unit",
  "internal",
  "external",
  "backpaper", // Admission & Deadlines
  "admission",
  "apply",
  "form",
  "status",
  "procedure",
  "closing date",
  "admission deadline",
  "when to apply",
  "process",
  "register",
  "deadline",
  "last date",
  "cut off",
  "merit",
  "eligibility",
  "document",
  "verification",
  "allotment",
  "seat",
  "vacancy",
  "cancellation",
  "withdraw",
  "prospectus",
  "guideline",

  // Facilities & Life
  "wifi",
  "gym",
  "mess",
  "food",
  "non-ac",
  "library card",
  "book",
  "issue",
  "return",
  "placement cell",
  "interview",
  "company",
  "package",
  "salary",
  "fest",
  "cultural",
  "tournament",
  "ground",
  "infrastructure",

  // Slang, Synonyms & Helpers
  "money",
  "cost",
  "price",
  "pay",
  "due",
  "balance",
  "who",
  "where",
  "how",
  "what",
  "when",
  "contact",
  "office",
  "help",
  "support",
  "location",

  // Teacher
  "manages",
  "head",
  "sir",
  "ma'am",
  "mr.",
  "mrs.",
  "miss",
  "ms.",

  // Admission – Extended
  "eligibility criteria",
  "eligible",
  "entrance",
  "entrance exam",
  "admission test",
  "seat availability",
  "total seats",
  "intake",
];

const EmbeddingService = {
  generateEmbedding: (text) => {
    const input = text.toLowerCase();
    return VOCAB.map((word) => (input.includes(word) ? 1.0 : 0.0));
  },

  calculateSimilarity: (vecA, vecB) => {
    if (vecA.length !== vecB.length) return 0;

    let dotProduct = 0,
      normA = 0,
      normB = 0;
    for (let i = 0; i < vecA.length; i++) {
      dotProduct += vecA[i] * vecB[i];
      normA += vecA[i] ** 2;
      normB += vecB[i] ** 2;
    }
    if (normA === 0 || normB === 0) return 0;
    return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
  },
};

module.exports = EmbeddingService;
