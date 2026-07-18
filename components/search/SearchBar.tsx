"use client";

import { useSearch } from "./SearchProvider";

/** A button that looks like a search box and opens the search dialog. */
export function SearchBar({
  variant = "full",
}: {
  variant?: "full" | "compact";
}) {
  const { openSearch } = useSearch();

  if (variant === "compact") {
    return (
      <button
        type="button"
        onClick={openSearch}
        aria-label="Open search"
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-content-muted hover:bg-surface-muted hover:text-content sm:hidden"
      >
        <span aria-hidden="true">⌕</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={openSearch}
      className="group flex w-full items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 text-left text-content-muted hover:border-brand"
      aria-label="Open search"
    >
      <span aria-hidden="true" className="text-lg">
        ⌕
      </span>
      <span className="flex-1">Search 4 fields — terms, abbreviations, aliases…</span>
      <kbd className="hidden rounded border border-border px-1.5 py-0.5 text-xs group-hover:border-brand sm:inline">
        /
      </kbd>
    </button>
  );
}
