import Fuse, { type IFuseOptions } from "fuse.js";
import type { DictionaryTerm } from "@/types/dictionary";

/** Lightweight record used by the client search index. */
export interface SearchDoc {
  slug: string;
  term: string;
  abbreviation?: string;
  aliases?: string[];
  field: string;
  category: string;
  shortDefinition: string;
}

export function toSearchDoc(t: DictionaryTerm): SearchDoc {
  return {
    slug: t.slug,
    term: t.term,
    abbreviation: t.abbreviation,
    aliases: t.aliases,
    field: t.field,
    category: t.category,
    shortDefinition: t.shortDefinition,
  };
}

export const fuseOptions: IFuseOptions<SearchDoc> = {
  includeScore: true,
  ignoreLocation: true,
  threshold: 0.4, // fuzzy, but not too loose
  minMatchCharLength: 2,
  keys: [
    { name: "term", weight: 0.5 },
    { name: "abbreviation", weight: 0.25 },
    { name: "aliases", weight: 0.2 },
    { name: "category", weight: 0.1 },
    { name: "field", weight: 0.05 },
    { name: "shortDefinition", weight: 0.05 },
  ],
};

/** Normalize a query so "RNA seq", "rna-seq", and "RNAseq" behave alike. */
export function normalizeQuery(q: string): string {
  return q.trim().replace(/[-_]+/g, " ").replace(/\s+/g, " ");
}

export function createSearch(docs: SearchDoc[]): Fuse<SearchDoc> {
  return new Fuse(docs, fuseOptions);
}

export interface SearchHit {
  doc: SearchDoc;
  score: number;
}

/**
 * Run a search. Prioritizes exact term / abbreviation / alias matches, then
 * falls back to Fuse fuzzy matching. Returns at most `limit` hits.
 */
export function runSearch(
  fuse: Fuse<SearchDoc>,
  docs: SearchDoc[],
  query: string,
  limit = 20,
): SearchHit[] {
  const q = normalizeQuery(query).toLowerCase();
  if (!q) return [];

  const exact: SearchHit[] = [];
  const seen = new Set<string>();

  for (const doc of docs) {
    const candidates = [
      doc.term.toLowerCase(),
      doc.abbreviation?.toLowerCase(),
      ...(doc.aliases ?? []).map((a) => a.toLowerCase()),
    ].filter(Boolean) as string[];
    if (candidates.some((c) => c === q)) {
      exact.push({ doc, score: 0 });
      seen.add(doc.slug);
    }
  }

  const fuzzy = fuse
    .search(query)
    .filter((r) => !seen.has(r.item.slug))
    .map((r) => ({ doc: r.item, score: r.score ?? 1 }));

  return [...exact, ...fuzzy].slice(0, limit);
}
