import type { TermInput } from "@/types/dictionary";
import { terms as biostatistics } from "./biostatistics";
import { terms as bioinformatics } from "./bioinformatics";
import { terms as epidemiology } from "./epidemiology";
import { terms as dataScience } from "./data-science";

/**
 * Master list of authored terms. To add more terms, create a new file that
 * exports `terms: TermInput[]` and import it here, then spread it into `sources`.
 *
 * De-duplication: if two files define the same slug, the FIRST occurrence wins
 * and later duplicates are dropped, so batches can be added without fear of
 * breaking the build on an accidental slug collision.
 */
const sources: TermInput[] = [
  ...biostatistics,
  ...bioinformatics,
  ...epidemiology,
  ...dataScience,
];

const seen = new Set<string>();
export const rawTerms: TermInput[] = sources.filter((t) => {
  if (!t.slug || seen.has(t.slug)) return false;
  seen.add(t.slug);
  return true;
});
