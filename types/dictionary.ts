export type Field =
  | "Biostatistics"
  | "Bioinformatics"
  | "Epidemiology"
  | "Data Science";

export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export type ReviewStatus = "Draft" | "Needs Review" | "Reviewed" | "Published";

export interface Reference {
  /** Human-readable citation, written in the site's own words. */
  citation: string;
  /** Optional link to a trustworthy public resource. */
  url?: string;
}

export interface DictionaryTerm {
  id: string;
  slug: string;
  term: string;
  abbreviation?: string;
  aliases?: string[];
  field: Field;
  category: string;
  shortDefinition: string;
  simpleExplanation: string;
  whyItMatters?: string;
  whenItIsUsed?: string;
  example?: string;
  /** KaTeX-compatible LaTeX string, without surrounding delimiters. */
  formula?: string;
  formulaExplanation?: string;
  assumptions?: string[];
  interpretation?: string;
  commonMistakes?: string[];
  /** Slugs of related terms. Validated to exist at build time. */
  relatedTerms: string[];
  references?: Reference[];
  difficulty: Difficulty;
  author: string;
  reviewer?: string;
  reviewStatus: ReviewStatus;
  dateCreated: string;
  lastReviewed: string;
  dateModified: string;
}

/** A term as authored in content files (before ids/slugs are normalized). */
export type TermInput = Omit<DictionaryTerm, "id"> & { id?: string };

export interface Category {
  slug: string;
  name: string;
  field: Field;
  description: string;
}

export interface GuideMeta {
  slug: string;
  title: string;
  summary: string;
  field?: Field | "General";
  relatedTerms?: string[];
  author: string;
  lastReviewed: string;
}
