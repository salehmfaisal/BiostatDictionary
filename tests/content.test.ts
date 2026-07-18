import { describe, it, expect } from "vitest";
import { allAuthoredTerms, publishedTerms, getTermBySlug } from "@/lib/dictionary";
import { validateTerms } from "@/lib/validation";

describe("content validation", () => {
  const issues = validateTerms(allAuthoredTerms);
  const errors = issues.filter((i) => i.severity === "error");

  it("has no hard validation errors", () => {
    if (errors.length) {
      console.error(errors.map((e) => `[${e.slug}] ${e.message}`).join("\n"));
    }
    expect(errors).toHaveLength(0);
  });

  it("has no duplicate slugs among authored terms is enforced (published are unique)", () => {
    const slugs = publishedTerms.map((t) => t.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("every published term has an author and review date", () => {
    for (const t of publishedTerms) {
      expect(t.author, `${t.slug} author`).toBeTruthy();
      expect(t.lastReviewed, `${t.slug} lastReviewed`).toBeTruthy();
    }
  });

  it("every published term has a non-trivial explanation", () => {
    for (const t of publishedTerms) {
      expect(t.simpleExplanation.length, t.slug).toBeGreaterThan(20);
    }
  });

  it("only publishes terms marked Published", () => {
    for (const t of publishedTerms) {
      expect(t.reviewStatus).toBe("Published");
    }
  });

  it("draft/unpublished terms are excluded from the public list", () => {
    const drafts = allAuthoredTerms.filter((t) => t.reviewStatus !== "Published");
    for (const d of drafts) {
      expect(getTermBySlug(d.slug)).toBeUndefined();
    }
  });

  it("resolves the spec exemplar term correctly", () => {
    const hr = getTermBySlug("hazard-ratio");
    expect(hr).toBeDefined();
    expect(hr?.field).toBe("Biostatistics");
    expect(hr?.abbreviation).toBe("HR");
  });
});
