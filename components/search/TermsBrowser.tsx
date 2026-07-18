"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Fuse from "fuse.js";
import { fuseOptions, runSearch, type SearchDoc } from "@/lib/search";
import { termPath, firstLetter } from "@/lib/urls";

/** Browse and filter the full term list. Reads an initial query from the URL. */
export function TermsBrowser({
  docs,
  initialQuery = "",
}: {
  docs: SearchDoc[];
  initialQuery?: string;
}) {
  const [query, setQuery] = useState(initialQuery);
  const fuse = useMemo(() => new Fuse(docs, fuseOptions), [docs]);

  // Read an initial ?q= from the URL on mount (works with static export).
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("q");
    if (q) setQuery(q);
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) return docs;
    return runSearch(fuse, docs, query, 200).map((h) => h.doc);
  }, [query, docs, fuse]);

  const grouped = useMemo(() => {
    const map = new Map<string, SearchDoc[]>();
    for (const d of [...results].sort((a, b) => a.term.localeCompare(b.term))) {
      const l = firstLetter(d.term);
      if (!map.has(l)) map.set(l, []);
      map.get(l)!.push(d);
    }
    return [...map.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  }, [results]);

  return (
    <div>
      <label htmlFor="terms-filter" className="sr-only">
        Filter terms
      </label>
      <input
        id="terms-filter"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Filter terms by name, abbreviation, or alias…"
        className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-content outline-none focus:border-brand"
      />
      <p className="mt-2 text-sm text-content-muted" aria-live="polite">
        {results.length} term{results.length === 1 ? "" : "s"}
        {query.trim() ? ` matching “${query}”` : ""}
      </p>

      {grouped.length === 0 ? (
        <p className="mt-6 rounded-lg border border-border bg-surface-muted p-6 text-content-muted">
          No terms match your filter. Try a shorter or different word.
        </p>
      ) : (
        <div className="mt-6 space-y-8">
          {grouped.map(([letter, items]) => (
            <section key={letter} id={`letter-${letter}`} className="scroll-mt-24">
              <h2 className="border-b border-border pb-1 text-lg font-bold text-brand">
                {letter}
              </h2>
              <ul className="mt-3 columns-1 gap-6 sm:columns-2 lg:columns-3">
                {items.map((d) => (
                  <li key={d.slug} className="mb-2 break-inside-avoid">
                    <Link href={termPath(d.slug)} className="text-content hover:text-brand">
                      {d.term}
                    </Link>
                    {d.abbreviation && (
                      <span className="ml-1 text-xs text-content-muted">
                        {d.abbreviation}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
