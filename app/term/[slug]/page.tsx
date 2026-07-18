import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPublishedSlugs, getTermBySlug } from "@/lib/dictionary";
import { termMetadata } from "@/lib/metadata";
import {
  breadcrumbStructuredData,
  termStructuredData,
  type Crumb,
} from "@/lib/structuredData";
import { fieldPath, categoryPath, slugify, termPath } from "@/lib/urls";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CopyLink } from "@/components/ui/CopyLink";
import { RelatedTerms } from "@/components/dictionary/RelatedTerms";
import { FormulaDisplay } from "@/components/dictionary/FormulaDisplay";
import { JsonLd } from "@/components/seo/JsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const term = getTermBySlug(slug);
  if (!term) return {};
  return termMetadata(term);
}

/** A titled block; rendered only when its content exists. */
function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-content-muted">
        {title}
      </h2>
      <div className="reading mt-2 max-w-reading text-content">{children}</div>
    </section>
  );
}

function BulletBlock({ title, items }: { title: string; items?: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <Block title={title}>
      <ul className="list-disc space-y-1 pl-5">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </Block>
  );
}

export default async function TermPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const term = getTermBySlug(slug);
  if (!term) notFound();

  const fieldSlug = slugify(term.field);
  const categorySlug = slugify(term.category);
  const crumbs: Crumb[] = [
    { name: "Home", path: "/" },
    { name: term.field, path: fieldPath(term.field) },
    { name: term.category, path: categoryPath(fieldSlug, categorySlug) },
    { name: term.term, path: termPath(term.slug) },
  ];

  return (
    <article className="mx-auto max-w-content px-4 py-8">
      <JsonLd
        data={[termStructuredData(term), breadcrumbStructuredData(crumbs)]}
      />
      <Breadcrumbs crumbs={crumbs} />

      <header className="mt-4">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <Link
            href={fieldPath(term.field)}
            className="rounded-full bg-brand/10 px-2.5 py-1 font-medium text-brand"
          >
            {term.field}
          </Link>
          <Link
            href={categoryPath(fieldSlug, categorySlug)}
            className="rounded-full border border-border px-2.5 py-1 text-content-muted hover:text-brand"
          >
            {term.category}
          </Link>
          <span className="rounded-full border border-border px-2.5 py-1 text-content-muted">
            {term.difficulty}
          </span>
        </div>

        <h1 className="mt-3 text-3xl font-bold tracking-tight text-content sm:text-4xl">
          {term.term}
        </h1>

        {(term.abbreviation || (term.aliases && term.aliases.length > 0)) && (
          <dl className="mt-2 space-y-1 text-sm text-content-muted">
            {term.abbreviation && (
              <div className="flex gap-2">
                <dt className="font-medium text-content">Abbreviation:</dt>
                <dd>{term.abbreviation}</dd>
              </div>
            )}
            {term.aliases && term.aliases.length > 0 && (
              <div className="flex gap-2">
                <dt className="font-medium text-content">Also known as:</dt>
                <dd>{term.aliases.join(", ")}</dd>
              </div>
            )}
          </dl>
        )}

        <p className="mt-4 max-w-reading text-lg text-content">
          {term.shortDefinition}
        </p>

        <div className="mt-4">
          <CopyLink label="Copy link to this term" />
        </div>
      </header>

      <Block title="Simple explanation">
        <p>{term.simpleExplanation}</p>
      </Block>

      {term.whyItMatters && (
        <Block title="Why it matters">
          <p>{term.whyItMatters}</p>
        </Block>
      )}

      {term.whenItIsUsed && (
        <Block title="When it is used">
          <p>{term.whenItIsUsed}</p>
        </Block>
      )}

      {term.example && (
        <Block title="Practical example">
          <p>{term.example}</p>
        </Block>
      )}

      {term.formula && (
        <Block title="Formula">
          <FormulaDisplay formula={term.formula} ariaLabel={`Formula for ${term.term}`} />
          {term.formulaExplanation && (
            <p className="mt-2 text-content-muted">{term.formulaExplanation}</p>
          )}
        </Block>
      )}

      {term.interpretation && (
        <Block title="Interpretation">
          <p>{term.interpretation}</p>
        </Block>
      )}

      <BulletBlock title="Assumptions" items={term.assumptions} />
      <BulletBlock title="Common mistakes" items={term.commonMistakes} />

      {term.relatedTerms.length > 0 && (
        <Block title="Related terms">
          <RelatedTerms slugs={term.relatedTerms} />
        </Block>
      )}

      {term.references && term.references.length > 0 && (
        <Block title="References">
          <ul className="list-disc space-y-1 pl-5">
            {term.references.map((ref, i) => (
              <li key={i}>
                {ref.url ? (
                  <a
                    href={ref.url}
                    className="text-brand underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {ref.citation}
                  </a>
                ) : (
                  ref.citation
                )}
              </li>
            ))}
          </ul>
        </Block>
      )}

      <footer className="mt-10 rounded-lg border border-border bg-surface-muted p-4 text-sm text-content-muted">
        <p>
          <span className="font-medium text-content">Author:</span> {term.author}
          {term.reviewer && (
            <>
              {" · "}
              <span className="font-medium text-content">Reviewer:</span>{" "}
              {term.reviewer}
            </>
          )}
        </p>
        <p className="mt-1">
          <span className="font-medium text-content">Status:</span>{" "}
          {term.reviewStatus} ·{" "}
          <span className="font-medium text-content">Last reviewed:</span>{" "}
          {term.lastReviewed}
        </p>
        <p className="mt-2">
          Spotted an error?{" "}
          <Link href="/corrections-policy" className="text-brand underline">
            See our corrections policy
          </Link>
          .
        </p>
      </footer>
    </article>
  );
}
