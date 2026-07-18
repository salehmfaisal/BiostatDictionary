import type { Field } from "@/types/dictionary";
import { slugify } from "@/data/categories";

/** Canonical path for a term detail page. */
export function termPath(slug: string): string {
  return `/term/${slug}`;
}

/** Homepage anchor link that selects a term in the reading view. */
export function termAnchor(slug: string): string {
  return `/?term=${slug}`;
}

export function fieldPath(field: Field): string {
  return `/${slugify(field)}`;
}

export function categoryPath(fieldSlug: string, categorySlug: string): string {
  return `/${fieldSlug}/${categorySlug}`;
}

export function letterPath(letter: string): string {
  return `/terms/${letter.toLowerCase()}`;
}

export function guidePath(slug: string): string {
  return `/guides/${slug}`;
}

/** First letter used for alphabetical grouping; non-letters group under "#". */
export function firstLetter(term: string): string {
  const c = term.trim().charAt(0).toUpperCase();
  return /[A-Z]/.test(c) ? c : "#";
}

export const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export { slugify };
