"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig, primaryNav } from "@/data/siteConfig";
import { SearchBar } from "@/components/search/SearchBar";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center gap-3 px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-semibold text-content">
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand text-sm font-bold text-white"
          >
            {siteConfig.logo.mark}
          </span>
          <span className="hidden sm:inline">{siteConfig.name}</span>
        </Link>

        <nav aria-label="Primary" className="ml-4 hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm text-content-muted hover:bg-surface-muted hover:text-content"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <div className="hidden w-64 sm:block">
            <SearchBar />
          </div>
          <SearchBar variant="compact" />
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-content-muted hover:bg-surface-muted lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span aria-hidden="true">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-border bg-surface lg:hidden"
        >
          <ul className="mx-auto max-w-content px-4 py-2">
            {primaryNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-md px-3 py-2 text-content-muted hover:bg-surface-muted hover:text-content"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
