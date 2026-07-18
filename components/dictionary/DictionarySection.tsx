import type { DictionaryTerm } from "@/types/dictionary";
import { TermEntry } from "./TermEntry";

/** A topic heading followed by a vertical list of terms. */
export function DictionarySection({
  title,
  id,
  description,
  terms,
  headingLevel = 2,
}: {
  title: string;
  id?: string;
  description?: string;
  terms: DictionaryTerm[];
  headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <section id={id} aria-labelledby={id ? `${id}-heading` : undefined} className="scroll-mt-24">
      <div className="border-b border-border pb-2">
        <Heading
          id={id ? `${id}-heading` : undefined}
          className="text-xl font-semibold tracking-tight text-content"
        >
          {title}
          <span className="ml-2 text-sm font-normal text-content-muted">
            {terms.length}
          </span>
        </Heading>
        {description && (
          <p className="mt-1 max-w-reading text-sm text-content-muted">{description}</p>
        )}
      </div>
      <div className="mt-2 divide-y divide-border/60">
        {terms.map((term) => (
          <TermEntry key={term.slug} term={term} />
        ))}
      </div>
    </section>
  );
}
