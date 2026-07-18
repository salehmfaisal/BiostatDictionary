import { describe, it, expect } from "vitest";
import { publishedTerms } from "@/lib/dictionary";
import { createSearch, runSearch, toSearchDoc, normalizeQuery } from "@/lib/search";

const docs = publishedTerms.map(toSearchDoc);
const fuse = createSearch(docs);

function topSlugs(query: string, n = 5): string[] {
  return runSearch(fuse, docs, query, n).map((h) => h.doc.slug);
}

describe("search", () => {
  it("normalizes queries so 'RNA seq' and 'rna-seq' match", () => {
    expect(normalizeQuery("RNA-seq")).toBe("RNA seq");
    expect(normalizeQuery("scRNA_seq")).toBe("scRNA seq");
  });

  it("finds exact term names", () => {
    expect(topSlugs("hazard ratio")).toContain("hazard-ratio");
    expect(topSlugs("confidence interval")).toContain("confidence-interval");
  });

  it("matches abbreviations and acronyms", () => {
    expect(topSlugs("GLM")).toContain("generalized-linear-model");
    expect(topSlugs("FDR")).toContain("false-discovery-rate");
    expect(topSlugs("PCA")).toContain("principal-component-analysis");
    expect(topSlugs("HR")).toContain("hazard-ratio");
  });

  it("matches aliases and spacing variants", () => {
    expect(topSlugs("RNA seq")).toContain("rna-sequencing");
    expect(topSlugs("scRNA seq")).toContain("single-cell-rna-sequencing");
    expect(topSlugs("KM curve")).toContain("kaplan-meier-curve");
  });

  it("does partial matching", () => {
    expect(topSlugs("regress", 8)).toContain("logistic-regression");
  });

  it("tolerates a small typo (fuzzy)", () => {
    expect(topSlugs("incidnce", 8)).toContain("incidence");
  });

  it("returns nothing for an empty query", () => {
    expect(runSearch(fuse, docs, "")).toHaveLength(0);
  });
});
