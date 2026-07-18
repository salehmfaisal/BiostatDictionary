import Link from "next/link";
import type { DictionaryTerm } from "@/types/dictionary";
import { termPath } from "@/lib/urls";

/**
 * A single term in the reading view: the term name links to its full page,
 * with a short definition directly below.
 *
 * Progressive enhancement: without JavaScript the name link navigates to the
 * permanent /term page. With JavaScript, SelectedTermManager intercepts the
 * click to select the term inline (updates ?term=, scrolls, highlights).
 */
export function TermEntry({ term }: { term: DictionaryTerm }) {
  return (
    <article
      id={`term-${term.slug}`}
      data-term-entry={term.slug}
      data-term-name={term.term}
      tabIndex={-1}
      className="scroll-mt-24 rounded-lg px-3 py-3 outline-none"
    >
      <h3 className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
        <Link
          href={termPath(term.slug)}
          data-term-link
          data-term-slug={term.slug}
          className="text-lg font-semibold text-content hover:text-brand"
        >
          {term.term}
        </Link>
        {term.abbreviation && (
          <span className="text-sm font-medium text-content-muted">
            ({term.abbreviation})
          </span>
        )}
      </h3>
      <p className="mt-1 max-w-reading text-content-muted">{term.shortDefinition}</p>
    </article>
  );
}
