import { describe, it, expect } from "vitest";
import {
  publishedTerms,
  termsByField,
  termsByLetter,
  lettersWithCounts,
  resolveRelated,
  groupedByFieldAndCategory,
  popularTerms,
  recentlyReviewed,
} from "@/lib/dictionary";
import { slugify } from "@/data/categories";

describe("dictionary helpers", () => {
  it("groups published terms across all four fields", () => {
    const fields = new Set(publishedTerms.map((t) => t.field));
    expect(fields.has("Biostatistics")).toBe(true);
    expect(fields.has("Bioinformatics")).toBe(true);
    expect(fields.has("Epidemiology")).toBe(true);
    expect(fields.has("Data Science")).toBe(true);
  });

  it("filters by field", () => {
    const bio = termsByField("Bioinformatics");
    expect(bio.length).toBeGreaterThan(0);
    expect(bio.every((t) => t.field === "Bioinformatics")).toBe(true);
  });

  it("groups by first letter with counts", () => {
    const counts = lettersWithCounts();
    const hTerms = termsByLetter("H");
    expect(counts["H"]).toBe(hTerms.length);
  });

  it("resolveRelated only returns published terms and drops unknown slugs", () => {
    const resolved = resolveRelated(["hazard-ratio", "this-slug-does-not-exist"]);
    expect(resolved).toHaveLength(1);
    expect(resolved[0].slug).toBe("hazard-ratio");
  });

  it("all related-term links on published terms resolve or are safely dropped", () => {
    for (const t of publishedTerms) {
      // resolveRelated must never throw and must return only valid published terms
      const resolved = resolveRelated(t.relatedTerms);
      for (const r of resolved) {
        expect(r.reviewStatus).toBe("Published");
      }
    }
  });

  it("every term's category slug is derivable for routing", () => {
    for (const t of publishedTerms) {
      expect(slugify(t.category)).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    }
  });

  it("grouped view is non-empty and ordered by field", () => {
    const grouped = groupedByFieldAndCategory();
    expect(grouped.length).toBeGreaterThan(0);
    expect(grouped[0].field).toBe("Biostatistics");
  });

  it("popular and recent return the requested count (or fewer)", () => {
    expect(popularTerms(5).length).toBeLessThanOrEqual(5);
    expect(recentlyReviewed(5).length).toBeLessThanOrEqual(5);
  });
});
