import { z } from "zod";
import type { DictionaryTerm } from "@/types/dictionary";

const FIELDS = [
  "Biostatistics",
  "Bioinformatics",
  "Epidemiology",
  "Data Science",
] as const;

export const referenceSchema = z.object({
  citation: z.string().min(3),
  url: z.string().url().optional(),
});

/** Slug rule: lowercase letters, numbers, and single hyphens. */
export const slugSchema = z
  .string()
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "slug must be lowercase-kebab-case");

const isoDate = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "date must be YYYY-MM-DD");

export const termSchema = z.object({
  id: z.string().min(1),
  slug: slugSchema,
  term: z.string().min(1),
  abbreviation: z.string().optional(),
  aliases: z.array(z.string()).optional(),
  field: z.enum(FIELDS),
  category: z.string().min(1),
  shortDefinition: z.string().min(10),
  simpleExplanation: z.string().min(20),
  whyItMatters: z.string().optional(),
  whenItIsUsed: z.string().optional(),
  example: z.string().optional(),
  formula: z.string().optional(),
  formulaExplanation: z.string().optional(),
  assumptions: z.array(z.string()).optional(),
  interpretation: z.string().optional(),
  commonMistakes: z.array(z.string()).optional(),
  relatedTerms: z.array(z.string()),
  references: z.array(referenceSchema).optional(),
  difficulty: z.enum(["Beginner", "Intermediate", "Advanced"]),
  author: z.string().min(1),
  reviewer: z.string().optional(),
  reviewStatus: z.enum(["Draft", "Needs Review", "Reviewed", "Published"]),
  dateCreated: isoDate,
  lastReviewed: isoDate,
  dateModified: isoDate,
});

const PLACEHOLDER_PATTERNS = [
  /lorem ipsum/i,
  /\btodo\b/i,
  /\btbd\b/i,
  /placeholder/i,
  /xxxx+/i,
  /\bfixme\b/i,
];

export type Severity = "error" | "warning";

export interface ValidationIssue {
  slug: string;
  message: string;
  severity: Severity;
}

/**
 * Validate the full term set. Returns a list of issues; an empty list means
 * the content is valid. Enforces the content rules from the spec.
 */
export function validateTerms(terms: DictionaryTerm[]): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const err = (slug: string, message: string) =>
    issues.push({ slug, message, severity: "error" });
  const warn = (slug: string, message: string) =>
    issues.push({ slug, message, severity: "warning" });

  const seenSlugs = new Map<string, number>();
  const allSlugs = new Set(terms.map((t) => t.slug));

  for (const term of terms) {
    const label = term.slug || term.term || "<unknown>";

    // Shape validation via Zod.
    const parsed = termSchema.safeParse(term);
    if (!parsed.success) {
      for (const e of parsed.error.errors) {
        err(label, `${e.path.join(".")}: ${e.message}`);
      }
    }

    // Missing slug.
    if (!term.slug) err(label, "term has no slug");

    // Duplicate slug.
    seenSlugs.set(term.slug, (seenSlugs.get(term.slug) ?? 0) + 1);

    // Related terms must exist. Missing links are pruned at load, so warn only.
    for (const rel of term.relatedTerms) {
      if (!allSlugs.has(rel)) {
        warn(label, `related term "${rel}" does not exist (pruned at load)`);
      }
      if (rel === term.slug) {
        err(label, "term lists itself as related");
      }
    }

    // Rules that apply only to published terms.
    if (term.reviewStatus === "Published") {
      if (!term.simpleExplanation || term.simpleExplanation.trim().length < 20) {
        err(label, "published term has no explanation");
      }
      if (!term.author) err(label, "published term has no author");
      if (!term.lastReviewed) err(label, "published term has no review date");

      // Placeholder content must not appear in published pages.
      const haystack = [
        term.shortDefinition,
        term.simpleExplanation,
        term.whyItMatters,
        term.whenItIsUsed,
        term.example,
        term.interpretation,
        ...(term.commonMistakes ?? []),
      ]
        .filter(Boolean)
        .join("\n");
      for (const pat of PLACEHOLDER_PATTERNS) {
        if (pat.test(haystack)) {
          err(label, `placeholder content matched ${pat}`);
        }
      }
    }

    // References, if present, must be structurally valid.
    for (const ref of term.references ?? []) {
      if (!ref.citation || ref.citation.trim().length < 3) {
        err(label, "invalid reference (missing citation)");
      }
      if (ref.url) {
        try {
          new URL(ref.url);
        } catch {
          err(label, `invalid reference url: ${ref.url}`);
        }
      }
    }
  }

  // Report duplicate slugs once each.
  for (const [slug, count] of seenSlugs) {
    if (count > 1) err(slug, `duplicate slug used ${count} times`);
  }

  return issues;
}
