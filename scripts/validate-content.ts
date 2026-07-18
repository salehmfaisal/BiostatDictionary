/**
 * Content validation gate. Run with `npm run validate:content`.
 * Exits non-zero when any hard error is found so it can be used in CI.
 */
import { allAuthoredTerms } from "../lib/dictionary";
import { validateTerms } from "../lib/validation";

const issues = validateTerms(allAuthoredTerms);
const errors = issues.filter((i) => i.severity === "error");
const warnings = issues.filter((i) => i.severity === "warning");

const published = allAuthoredTerms.filter((t) => t.reviewStatus === "Published");

console.log(`Authored terms:  ${allAuthoredTerms.length}`);
console.log(`Published terms: ${published.length}`);
console.log(`Errors:          ${errors.length}`);
console.log(`Warnings:        ${warnings.length}`);

if (warnings.length) {
  console.log("\n--- Warnings ---");
  for (const w of warnings.slice(0, 50)) {
    console.log(`  [${w.slug}] ${w.message}`);
  }
  if (warnings.length > 50) console.log(`  ...and ${warnings.length - 50} more`);
}

if (errors.length) {
  console.log("\n--- Errors ---");
  for (const e of errors) {
    console.log(`  [${e.slug}] ${e.message}`);
  }
  console.error(`\nContent validation FAILED with ${errors.length} error(s).`);
  process.exit(1);
}

console.log("\nContent validation passed.");
