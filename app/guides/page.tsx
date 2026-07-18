import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/content/guides";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbStructuredData, type Crumb } from "@/lib/structuredData";
import { guidePath } from "@/lib/urls";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = pageMetadata({
  title: "Learning guides",
  description:
    "Plain-English guides that explain core ideas in biostatistics, bioinformatics, epidemiology, and data science.",
  path: "/guides",
});

export default function GuidesPage() {
  const crumbs: Crumb[] = [
    { name: "Home", path: "/" },
    { name: "Learning guides", path: "/guides" },
  ];
  return (
    <div className="mx-auto max-w-content px-4 py-8">
      <JsonLd data={breadcrumbStructuredData(crumbs)} />
      <Breadcrumbs crumbs={crumbs} />
      <header className="mt-4 max-w-reading">
        <h1 className="text-3xl font-bold tracking-tight text-content sm:text-4xl">
          Learning guides
        </h1>
        <p className="mt-2 text-content-muted">
          Short, practical explainers that connect the dictionary terms into
          bigger ideas. No textbook required.
        </p>
      </header>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {guides.map((g) => (
          <li key={g.slug}>
            <Link
              href={guidePath(g.slug)}
              className="group block h-full rounded-lg border border-border bg-surface p-5 hover:border-brand"
            >
              <div className="text-xs font-medium text-brand">{g.field}</div>
              <h2 className="mt-1 text-lg font-semibold text-content group-hover:text-brand">
                {g.title}
              </h2>
              <p className="mt-2 text-sm text-content-muted">{g.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
