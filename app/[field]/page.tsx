import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/data/siteConfig";
import { fieldFromSlug, categoriesByField } from "@/data/categories";
import { termsByField, recentlyReviewed, popularTerms } from "@/lib/dictionary";
import { guides } from "@/content/guides";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbStructuredData, type Crumb } from "@/lib/structuredData";
import { fieldPath, categoryPath, guidePath, slugify } from "@/lib/urls";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { DictionarySection } from "@/components/dictionary/DictionarySection";
import { TermChips } from "@/components/dictionary/TermChips";
import { JsonLd } from "@/components/seo/JsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return siteConfig.fields.map((f) => ({ field: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ field: string }>;
}): Promise<Metadata> {
  const { field } = await params;
  const name = fieldFromSlug(field);
  if (!name) return {};
  const config = siteConfig.fields.find((f) => f.slug === field)!;
  return pageMetadata({
    title: name,
    description: `${name} terms explained in plain English. ${config.blurb}`,
    path: fieldPath(name),
  });
}

export default async function FieldPage({
  params,
}: {
  params: Promise<{ field: string }>;
}) {
  const { field } = await params;
  const name = fieldFromSlug(field);
  if (!name) notFound();

  const config = siteConfig.fields.find((f) => f.slug === field)!;
  const allTerms = termsByField(name);
  const cats = categoriesByField[name];
  const termsByCat = cats
    .map((c) => ({
      category: c,
      terms: allTerms.filter((t) => slugify(t.category) === c.slug),
    }))
    .filter((c) => c.terms.length > 0);

  const featured = popularTerms(50).filter((t) => t.field === name).slice(0, 8);
  const recent = recentlyReviewed(50).filter((t) => t.field === name).slice(0, 8);
  const fieldGuides = guides.filter((g) => g.field === name);
  const alphabetical = [...allTerms].sort((a, b) => a.term.localeCompare(b.term));

  const crumbs: Crumb[] = [
    { name: "Home", path: "/" },
    { name: name, path: fieldPath(name) },
  ];

  return (
    <div className="mx-auto max-w-content px-4 py-8">
      <JsonLd data={breadcrumbStructuredData(crumbs)} />
      <Breadcrumbs crumbs={crumbs} />

      <header className="mt-4 max-w-reading">
        <h1 className="text-3xl font-bold tracking-tight text-content sm:text-4xl">
          {name}
        </h1>
        <p className="mt-2 text-lg text-content-muted">{config.blurb}</p>
        <p className="mt-2 text-sm text-content-muted">
          {allTerms.length} published terms across {termsByCat.length} topics.
        </p>
      </header>

      {featured.length > 0 && (
        <section className="mt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-content-muted">
            Featured terms
          </h2>
          <div className="mt-3">
            <TermChips terms={featured} />
          </div>
        </section>
      )}

      {/* Topic sections */}
      <div className="mt-10 space-y-10">
        {termsByCat.map(({ category, terms }) => (
          <DictionarySection
            key={category.slug}
            id={category.slug}
            title={category.name}
            terms={terms}
          />
        ))}
      </div>

      {/* Category index */}
      <section className="mt-12">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-content-muted">
          All {name} topics
        </h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {termsByCat.map(({ category, terms }) => (
            <li key={category.slug}>
              <Link
                href={categoryPath(field, category.slug)}
                className="flex items-baseline justify-between gap-2 rounded-md border border-border px-3 py-2 hover:border-brand"
              >
                <span className="text-content">{category.name}</span>
                <span className="text-sm text-content-muted">{terms.length}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {recent.length > 0 && (
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-content-muted">
              Recently reviewed
            </h2>
            <div className="mt-3">
              <TermChips terms={recent} />
            </div>
          </section>
        )}
        {fieldGuides.length > 0 && (
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-content-muted">
              Related learning guides
            </h2>
            <ul className="mt-3 space-y-2">
              {fieldGuides.map((g) => (
                <li key={g.slug}>
                  <Link href={guidePath(g.slug)} className="text-content hover:text-brand">
                    {g.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Full alphabetical list */}
      <section className="mt-12">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-content-muted">
          All {name} terms (A–Z)
        </h2>
        <ul className="mt-3 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {alphabetical.map((t) => (
            <li key={t.slug} className="mb-1 break-inside-avoid">
              <Link href={`/term/${t.slug}`} className="text-content hover:text-brand">
                {t.term}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
