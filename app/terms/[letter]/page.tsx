import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { termsByLetter, lettersWithCounts } from "@/lib/dictionary";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbStructuredData, type Crumb } from "@/lib/structuredData";
import { ALPHABET, letterPath, termPath } from "@/lib/urls";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { AlphabetNav } from "@/components/ui/AlphabetNav";
import { DictionarySection } from "@/components/dictionary/DictionarySection";
import { JsonLd } from "@/components/seo/JsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return ALPHABET.map((l) => ({ letter: l.toLowerCase() }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ letter: string }>;
}): Promise<Metadata> {
  const { letter } = await params;
  const L = letter.toUpperCase();
  return pageMetadata({
    title: `Terms starting with ${L}`,
    description: `Dictionary terms that begin with the letter ${L}.`,
    path: letterPath(letter),
  });
}

export default async function LetterPage({
  params,
}: {
  params: Promise<{ letter: string }>;
}) {
  const { letter } = await params;
  const L = letter.toUpperCase();
  if (!/^[A-Z]$/.test(L)) notFound();

  const terms = termsByLetter(L);
  const counts = lettersWithCounts();
  const crumbs: Crumb[] = [
    { name: "Home", path: "/" },
    { name: "All terms", path: "/terms" },
    { name: L, path: letterPath(letter) },
  ];

  return (
    <div className="mx-auto max-w-content px-4 py-8">
      <JsonLd data={breadcrumbStructuredData(crumbs)} />
      <Breadcrumbs crumbs={crumbs} />

      <header className="mt-4">
        <h1 className="text-3xl font-bold tracking-tight text-content sm:text-4xl">
          Terms starting with {L}
        </h1>
      </header>

      <div className="mt-6 rounded-lg border border-border bg-surface p-3">
        <AlphabetNav counts={counts} active={L} />
      </div>

      <div className="mt-8">
        {terms.length > 0 ? (
          <DictionarySection title={`${L} (${terms.length})`} terms={terms} />
        ) : (
          <p className="rounded-lg border border-border bg-surface-muted p-6 text-content-muted">
            No terms start with {L} yet.{" "}
            <Link href="/terms" className="text-brand underline">
              Back to all terms
            </Link>
            .
          </p>
        )}
      </div>
    </div>
  );
}
