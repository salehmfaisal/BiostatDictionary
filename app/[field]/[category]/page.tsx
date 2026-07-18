import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories, fieldFromSlug, getCategoryBySlug } from "@/data/categories";
import { termsByCategorySlug } from "@/lib/dictionary";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbStructuredData, type Crumb } from "@/lib/structuredData";
import { fieldPath, categoryPath, slugify } from "@/lib/urls";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { DictionarySection } from "@/components/dictionary/DictionarySection";
import { JsonLd } from "@/components/seo/JsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((c) => ({
    field: slugify(c.field),
    category: c.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ field: string; category: string }>;
}): Promise<Metadata> {
  const { field, category } = await params;
  const name = fieldFromSlug(field);
  const cat = getCategoryBySlug(category);
  if (!name || !cat || cat.field !== name) return {};
  return pageMetadata({
    title: `${cat.name} — ${name}`,
    description: `${cat.name} terms in ${name}, explained in plain English.`,
    path: categoryPath(field, category),
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ field: string; category: string }>;
}) {
  const { field, category } = await params;
  const name = fieldFromSlug(field);
  const cat = getCategoryBySlug(category);
  if (!name || !cat || cat.field !== name) notFound();

  const terms = termsByCategorySlug(field, category).filter(
    (t) => t.field === name,
  );

  const crumbs: Crumb[] = [
    { name: "Home", path: "/" },
    { name: name, path: fieldPath(name) },
    { name: cat.name, path: categoryPath(field, category) },
  ];

  return (
    <div className="mx-auto max-w-content px-4 py-8">
      <JsonLd data={breadcrumbStructuredData(crumbs)} />
      <Breadcrumbs crumbs={crumbs} />

      <header className="mt-4 max-w-reading">
        <h1 className="text-3xl font-bold tracking-tight text-content sm:text-4xl">
          {cat.name}
        </h1>
        <p className="mt-2 text-content-muted">
          {cat.name} terms in {name}. {terms.length} published term
          {terms.length === 1 ? "" : "s"}.
        </p>
      </header>

      <div className="mt-8">
        {terms.length > 0 ? (
          <DictionarySection title={cat.name} terms={terms} />
        ) : (
          <p className="rounded-lg border border-border bg-surface-muted p-6 text-content-muted">
            No published terms in this topic yet. Check back soon, or{" "}
            <a href="/suggest" className="text-brand underline">
              suggest a term
            </a>
            .
          </p>
        )}
      </div>
    </div>
  );
}
