import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { guides, getGuideBySlug } from "@/content/guides";
import { pageMetadata } from "@/lib/metadata";
import {
  breadcrumbStructuredData,
  guideStructuredData,
  type Crumb,
} from "@/lib/structuredData";
import { guidePath } from "@/lib/urls";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { RelatedTerms } from "@/components/dictionary/RelatedTerms";
import { JsonLd } from "@/components/seo/JsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return pageMetadata({
    title: guide.title,
    description: guide.summary,
    path: guidePath(guide.slug),
  });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const crumbs: Crumb[] = [
    { name: "Home", path: "/" },
    { name: "Learning guides", path: "/guides" },
    { name: guide.title, path: guidePath(guide.slug) },
  ];

  return (
    <article className="mx-auto max-w-content px-4 py-8">
      <JsonLd
        data={[
          guideStructuredData(guide, guidePath(guide.slug)),
          breadcrumbStructuredData(crumbs),
        ]}
      />
      <Breadcrumbs crumbs={crumbs} />

      <header className="mt-4 max-w-reading">
        <div className="text-xs font-medium text-brand">{guide.field}</div>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-content sm:text-4xl">
          {guide.title}
        </h1>
        <p className="mt-2 text-lg text-content-muted">{guide.summary}</p>
      </header>

      <div className="reading mt-8 max-w-reading text-content">
        {guide.body.map((section, i) => (
          <section key={i} className="mt-8 first:mt-0">
            <h2 className="text-xl font-semibold text-content">{section.heading}</h2>
            <div className="mt-2">
              {section.paragraphs.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      {guide.relatedTerms && guide.relatedTerms.length > 0 && (
        <section className="mt-10 max-w-reading">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-content-muted">
            Related terms
          </h2>
          <div className="mt-3">
            <RelatedTerms slugs={guide.relatedTerms} />
          </div>
        </section>
      )}

      <footer className="mt-10 max-w-reading rounded-lg border border-border bg-surface-muted p-4 text-sm text-content-muted">
        <p>
          <span className="font-medium text-content">Author:</span> {guide.author} ·{" "}
          <span className="font-medium text-content">Last reviewed:</span>{" "}
          {guide.lastReviewed}
        </p>
      </footer>
    </article>
  );
}
