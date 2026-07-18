import type {
  DictionaryTerm,
  Field,
  TermInput,
} from "@/types/dictionary";
import { rawTerms } from "@/content/terms";
import { firstLetter } from "@/lib/urls";

/** Normalize authored terms into full DictionaryTerm records (id defaults to slug). */
function normalize(terms: TermInput[]): DictionaryTerm[] {
  return terms.map((t) => ({ ...t, id: t.id ?? t.slug }));
}

const ALL: DictionaryTerm[] = normalize(rawTerms);

/** Only published terms are shown on the public website. */
export const publishedTerms: DictionaryTerm[] = ALL.filter(
  (t) => t.reviewStatus === "Published",
).sort((a, b) => a.term.localeCompare(b.term));

/** Every authored term, regardless of review status (for validation and tooling). */
export const allAuthoredTerms: DictionaryTerm[] = ALL;

const bySlug = new Map(publishedTerms.map((t) => [t.slug, t]));

export function getTermBySlug(slug: string): DictionaryTerm | undefined {
  return bySlug.get(slug);
}

export function getPublishedSlugs(): string[] {
  return publishedTerms.map((t) => t.slug);
}

export function termsByField(field: Field): DictionaryTerm[] {
  return publishedTerms.filter((t) => t.field === field);
}

export function termsByCategorySlug(
  fieldSlug: string,
  categorySlug: string,
): DictionaryTerm[] {
  return publishedTerms.filter((t) => {
    const slug = t.category
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    return slug === categorySlug;
  });
}

export function termsByLetter(letter: string): DictionaryTerm[] {
  const target = letter.toUpperCase();
  return publishedTerms.filter((t) => firstLetter(t.term) === target);
}

/** Count of published terms grouped by first letter. */
export function lettersWithCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const t of publishedTerms) {
    const l = firstLetter(t.term);
    counts[l] = (counts[l] ?? 0) + 1;
  }
  return counts;
}

/** Resolve a list of related-term slugs to their term records (published only). */
export function resolveRelated(slugs: string[]): DictionaryTerm[] {
  return slugs.map((s) => bySlug.get(s)).filter((t): t is DictionaryTerm => Boolean(t));
}

/**
 * Terms grouped by field then category, preserving category order.
 * Used to render the homepage as one readable document.
 */
export interface GroupedField {
  field: Field;
  categories: { category: string; terms: DictionaryTerm[] }[];
}

export function groupedByFieldAndCategory(): GroupedField[] {
  const fields: Field[] = [
    "Biostatistics",
    "Bioinformatics",
    "Epidemiology",
    "Data Science",
  ];
  return fields
    .map((field) => {
      const inField = termsByField(field);
      const byCategory = new Map<string, DictionaryTerm[]>();
      for (const t of inField) {
        if (!byCategory.has(t.category)) byCategory.set(t.category, []);
        byCategory.get(t.category)!.push(t);
      }
      const cats = [...byCategory.entries()]
        .map(([category, terms]) => ({
          category,
          terms: terms.sort((a, b) => a.term.localeCompare(b.term)),
        }))
        .sort((a, b) => a.category.localeCompare(b.category));
      return { field, categories: cats };
    })
    .filter((g) => g.categories.length > 0);
}

/** Recently reviewed terms (most recent lastReviewed first). */
export function recentlyReviewed(limit: number): DictionaryTerm[] {
  return [...publishedTerms]
    .sort((a, b) => (a.lastReviewed < b.lastReviewed ? 1 : -1))
    .slice(0, limit);
}

/**
 * "Popular" terms. Without analytics we use a deterministic proxy:
 * terms that are most cross-referenced by others are treated as popular.
 */
export function popularTerms(limit: number): DictionaryTerm[] {
  const inbound = new Map<string, number>();
  for (const t of publishedTerms) {
    for (const r of t.relatedTerms) {
      inbound.set(r, (inbound.get(r) ?? 0) + 1);
    }
  }
  return [...publishedTerms]
    .sort((a, b) => (inbound.get(b.slug) ?? 0) - (inbound.get(a.slug) ?? 0))
    .slice(0, limit);
}

export const totalTermCount = publishedTerms.length;
