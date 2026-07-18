"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useSearch } from "./SearchProvider";
import { termPath } from "@/lib/urls";
import type { SearchHit } from "@/lib/search";

export function SearchDialog() {
  const { open, closeSearch, search } = useSearch();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [hits, setHits] = useState<SearchHit[]>([]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      setHits([]);
      // Focus the input once the dialog is rendered.
      const t = setTimeout(() => inputRef.current?.focus(), 10);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    setHits(search(query, 25));
    setActive(0);
  }, [query, search]);

  // Lock body scroll while the dialog is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  function go(hit: SearchHit) {
    closeSearch();
    router.push(termPath(hit.doc.slug));
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") {
      e.preventDefault();
      closeSearch();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, hits.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter" && hits[active]) {
      e.preventDefault();
      go(hits[active]);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 p-4 pt-[10vh]"
      role="presentation"
      onClick={closeSearch}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search the dictionary"
        className="w-full max-w-reading overflow-hidden rounded-xl border border-border bg-surface shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={onKeyDown}
      >
        <div className="flex items-center gap-2 border-b border-border px-4">
          <span aria-hidden="true" className="text-content-muted">
            ⌕
          </span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search terms, abbreviations, aliases…"
            aria-label="Search terms"
            aria-controls="search-results"
            className="w-full bg-transparent py-4 text-content outline-none placeholder:text-content-muted"
          />
          <kbd className="hidden rounded border border-border px-1.5 py-0.5 text-xs text-content-muted sm:inline">
            Esc
          </kbd>
        </div>

        <ul
          id="search-results"
          ref={listRef}
          role="listbox"
          aria-label="Search results"
          className="max-h-[60vh] overflow-y-auto"
        >
          {query && hits.length === 0 && (
            <li className="px-4 py-8 text-center text-content-muted">
              No terms match “{query}”. Try an abbreviation or a related word.
            </li>
          )}
          {!query && (
            <li className="px-4 py-8 text-center text-sm text-content-muted">
              Start typing to search. Use ↑ ↓ to move, Enter to open, Esc to close.
            </li>
          )}
          {hits.map((hit, i) => (
            <li key={hit.doc.slug} role="option" aria-selected={i === active}>
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onClick={() => go(hit)}
                className={`flex w-full flex-col items-start gap-0.5 px-4 py-3 text-left ${
                  i === active ? "bg-surface-muted" : ""
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="font-medium text-content">{hit.doc.term}</span>
                  {hit.doc.abbreviation && (
                    <span className="text-xs text-content-muted">
                      {hit.doc.abbreviation}
                    </span>
                  )}
                </span>
                <span className="line-clamp-1 text-sm text-content-muted">
                  {hit.doc.shortDefinition}
                </span>
                <span className="text-xs text-brand">
                  {hit.doc.field} · {hit.doc.category}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
