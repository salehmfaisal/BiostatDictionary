import type { Metadata } from "next";
import { publishedTerms, lettersWithCounts } from "@/lib/dictionary";
import { toSearchDoc } from "@/lib/search";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbStructuredData, type Crumb } from "@/lib/structuredData";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { AlphabetNav } from "@/components/ui/AlphabetNav";
import { TermsBrowser } from "@/components/search/TermsBrowser";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = pageMetadata({
  title: "All terms",
  description:
    "Browse and filter every published term in the dictionary, grouped alphabetically.",
  path: "/terms",
});

export default function AllTermsPage() {
  const docs = publishedTerms.map(toSearchDoc);
  const counts = lettersWithCounts();
  const crumbs: Crumb[] = [
    { name: "Home", path: "/" },
    { name: "All terms", path: "/terms" },
  ];

  return (
    <div className="mx-auto max-w-content px-4 py-8">
      <JsonLd data={breadcrumbStructuredData(crumbs)} />
      <Breadcrumbs crumbs={crumbs} />

      <header className="mt-4 max-w-reading">
        <h1 className="text-3xl font-bold tracking-tight text-content sm:text-4xl">
          All terms
        </h1>
        <p className="mt-2 text-content-muted">
          {docs.length} published terms. Filter below, jump to a letter, or open
          any term for its full explanation.
        </p>
      </header>

      <div className="mt-6 rounded-lg border border-border bg-surface p-3">
        <AlphabetNav counts={counts} />
      </div>

      <div className="mt-8">
        <TermsBrowser docs={docs} />
      </div>
    </div>
  );
}
