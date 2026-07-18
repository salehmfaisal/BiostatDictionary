"use client";

import { useEffect } from "react";
import { siteConfig } from "@/data/siteConfig";

/**
 * Implements the selected-term behavior on the reading view:
 * - Reads ?term= from the URL and scrolls to, highlights, and focuses that term.
 * - Intercepts clicks on term links to select inline without a full reload,
 *   updating the URL via pushState so back/forward navigation is preserved.
 */
export function SelectedTermManager() {
  useEffect(() => {
    let currentSlug: string | null = null;

    function clearHighlight() {
      document
        .querySelectorAll(".term-selected")
        .forEach((el) => el.classList.remove("term-selected"));
    }

    function select(slug: string, opts: { scroll: boolean; focus: boolean }) {
      const el = document.getElementById(`term-${slug}`);
      if (!el) return;
      clearHighlight();
      el.classList.add("term-selected");
      currentSlug = slug;
      const name = el.getAttribute("data-term-name");
      if (name) document.title = `${name} — ${siteConfig.name}`;
      if (opts.scroll) el.scrollIntoView({ behavior: "smooth", block: "center" });
      if (opts.focus) (el as HTMLElement).focus({ preventScroll: true });
    }

    function fromUrl(opts: { scroll: boolean; focus: boolean }) {
      const params = new URLSearchParams(window.location.search);
      const slug = params.get("term");
      if (slug) select(slug, opts);
      else {
        clearHighlight();
        currentSlug = null;
      }
    }

    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
        return;
      const target = e.target as HTMLElement;
      const link = target.closest<HTMLElement>("a[data-term-link]");
      if (!link) return;
      const slug = link.getAttribute("data-term-slug");
      if (!slug) return;
      // Only intercept on pages that render the reading view (the term exists here).
      if (!document.getElementById(`term-${slug}`)) return;
      e.preventDefault();
      const url = `${window.location.pathname}?term=${encodeURIComponent(slug)}`;
      if (slug !== currentSlug) window.history.pushState({ term: slug }, "", url);
      select(slug, { scroll: true, focus: true });
    }

    function onPopState() {
      fromUrl({ scroll: true, focus: false });
    }

    // Initial load: honor a deep link like /?term=hazard-ratio
    fromUrl({ scroll: true, focus: true });

    document.addEventListener("click", onClick);
    window.addEventListener("popstate", onPopState);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  return null;
}
