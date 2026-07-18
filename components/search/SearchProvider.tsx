"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import Fuse from "fuse.js";
import { fuseOptions, runSearch, type SearchDoc, type SearchHit } from "@/lib/search";
import { SearchDialog } from "./SearchDialog";

interface SearchContextValue {
  docs: SearchDoc[];
  open: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  search: (query: string, limit?: number) => SearchHit[];
}

const SearchContext = createContext<SearchContextValue | null>(null);

export function useSearch(): SearchContextValue {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error("useSearch must be used within SearchProvider");
  return ctx;
}

export function SearchProvider({
  docs,
  children,
}: {
  docs: SearchDoc[];
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const fuse = useMemo(() => new Fuse(docs, fuseOptions), [docs]);

  const search = useCallback(
    (query: string, limit = 20) => runSearch(fuse, docs, query, limit),
    [fuse, docs],
  );

  const openSearch = useCallback(() => setOpen(true), []);
  const closeSearch = useCallback(() => setOpen(false), []);

  // Global keyboard shortcuts: "/" and Ctrl/Cmd+K to open search.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      const typing =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(true);
      } else if (e.key === "/" && !typing) {
        e.preventDefault();
        setOpen(true);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const value = useMemo(
    () => ({ docs, open, openSearch, closeSearch, search }),
    [docs, open, openSearch, closeSearch, search],
  );

  return (
    <SearchContext.Provider value={value}>
      {children}
      <SearchDialog />
    </SearchContext.Provider>
  );
}
