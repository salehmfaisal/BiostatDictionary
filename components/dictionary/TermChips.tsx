import Link from "next/link";
import type { DictionaryTerm } from "@/types/dictionary";
import { termPath } from "@/lib/urls";

/** A compact, scannable list of term links used for "popular" / "recent" strips. */
export function TermChips({ terms }: { terms: DictionaryTerm[] }) {
  if (terms.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-2">
      {terms.map((t) => (
        <li key={t.slug}>
          <Link
            href={termPath(t.slug)}
            className="inline-flex items-center rounded-full border border-border px-3 py-1 text-sm text-content hover:border-brand hover:text-brand"
          >
            {t.term}
          </Link>
        </li>
      ))}
    </ul>
  );
}
