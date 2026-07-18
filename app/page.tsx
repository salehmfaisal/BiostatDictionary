import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import {
  groupedByFieldAndCategory,
  lettersWithCounts,
  popularTerms,
  recentlyReviewed,
  totalTermCount,
} from "@/lib/dictionary";
import { guides } from "@/content/guides";
import { fieldPath, guidePath, slugify } from "@/lib/urls";
import { SearchBar } from "@/components/search/SearchBar";
import { FieldNav } from "@/components/dictionary/FieldNav";
import { AlphabetNav } from "@/components/ui/AlphabetNav";
import { TermChips } from "@/components/dictionary/TermChips";
import { DictionarySection } from "@/components/dictionary/DictionarySection";
import { SelectedTermManager } from "@/components/dictionary/SelectedTermManager";

export default function HomePage() {
  const grouped = groupedByFieldAndCategory();
  const counts = lettersWithCounts();
  const popular = popularTerms(siteConfig.featuredCount);
  const recent = recentlyReviewed(siteConfig.featuredCount);

  return (
    <div className="mx-auto max-w-content px-4 py-8">
      <SelectedTermManager />

      {/* Simple header — the dictionary begins near the top, no sales hero. */}
      <section className="max-w-reading">
        <h1 className="text-3xl font-bold tracking-tight text-content sm:text-4xl">
          {siteConfig.name}
        </h1>
        <p className="mt-2 text-lg text-content-muted">{siteConfig.tagline}</p>
        <p className="mt-3 text-sm text-content-muted">
          {totalTermCount} plain-English definitions across biostatistics,
          bioinformatics, epidemiology, and data science.
        </p>
        <div className="mt-5">
          <SearchBar />
        </div>
        <p className="mt-2 text-xs text-content-muted">
          Tip: press <kbd className="rounded border border-border px-1">/</kbd> or{" "}
          <kbd className="rounded border border-border px-1">Ctrl</kbd>+
          <kbd className="rounded border border-border px-1">K</kbd> to search.
        </p>
      </section>

      {/* Browse by field */}
      <section aria-labelledby="browse-fields" className="mt-10">
        <h2 id="browse-fields" className="text-sm font-semibold uppercase tracking-wide text-content-muted">
          Browse by field
        </h2>
        <div className="mt-3">
          <FieldNav />
        </div>
      </section>

      {/* Browse alphabetically */}
      <section aria-labelledby="browse-az" className="mt-10">
        <div className="flex items-baseline justify-between">
          <h2 id="browse-az" className="text-sm font-semibold uppercase tracking-wide text-content-muted">
            Browse alphabetically
          </h2>
          <Link href="/terms" className="text-sm text-brand hover:underline">
            All terms →
          </Link>
        </div>
        <div className="mt-3 rounded-lg border border-border bg-surface p-3">
          <AlphabetNav counts={counts} />
        </div>
      </section>

      {/* Popular + recently reviewed */}
      <section className="mt-10 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-content-muted">
            Popular terms
          </h2>
          <div className="mt-3">
            <TermChips terms={popular} />
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-content-muted">
            Recently reviewed
          </h2>
          <div className="mt-3">
            <TermChips terms={recent} />
          </div>
        </div>
      </section>

      {/* Learning guides + calls to action */}
      <section className="mt-10 rounded-lg border border-border bg-surface-muted p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-content-muted">
            Learning guides
          </h2>
          <Link href="/guides" className="text-sm text-brand hover:underline">
            All guides →
          </Link>
        </div>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {guides.slice(0, 6).map((g) => (
            <li key={g.slug}>
              <Link href={guidePath(g.slug)} className="text-content hover:text-brand">
                {g.title}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-content-muted">
          Missing a term?{" "}
          <Link href="/suggest" className="text-brand hover:underline">
            Suggest a term
          </Link>{" "}
          ·{" "}
          <Link href="/about" className="text-brand hover:underline">
            About this dictionary
          </Link>
        </p>
      </section>

      {/* The dictionary as one readable document */}
      <div className="mt-14">
        <h2 className="text-2xl font-bold tracking-tight text-content">
          The dictionary
        </h2>
        <p className="mt-1 max-w-reading text-content-muted">
          Every published term, grouped by field and topic. Click a term to
          highlight it and copy its link, or open its full page.
        </p>

        {grouped.map((group) => (
          <section
            key={group.field}
            id={slugify(group.field)}
            aria-labelledby={`${slugify(group.field)}-field-heading`}
            className="mt-12 scroll-mt-24"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3
                id={`${slugify(group.field)}-field-heading`}
                className="text-2xl font-bold tracking-tight text-brand"
              >
                {group.field}
              </h3>
              <Link
                href={fieldPath(group.field)}
                className="text-sm text-brand hover:underline"
              >
                Explore {group.field} →
              </Link>
            </div>

            <div className="mt-6 space-y-10">
              {group.categories.map((cat) => (
                <DictionarySection
                  key={cat.category}
                  title={cat.category}
                  id={`${slugify(group.field)}-${slugify(cat.category)}`}
                  terms={cat.terms}
                  headingLevel={3}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
