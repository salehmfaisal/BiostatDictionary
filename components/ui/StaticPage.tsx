import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { breadcrumbStructuredData, type Crumb } from "@/lib/structuredData";
import { JsonLd } from "@/components/seo/JsonLd";

/** Consistent shell for editorial and policy pages. */
export function StaticPage({
  title,
  intro,
  path,
  children,
}: {
  title: string;
  intro?: string;
  path: string;
  children: ReactNode;
}) {
  const crumbs: Crumb[] = [
    { name: "Home", path: "/" },
    { name: title, path },
  ];
  return (
    <div className="mx-auto max-w-content px-4 py-8">
      <JsonLd data={breadcrumbStructuredData(crumbs)} />
      <Breadcrumbs crumbs={crumbs} />
      <header className="mt-4 max-w-reading">
        <h1 className="text-3xl font-bold tracking-tight text-content sm:text-4xl">
          {title}
        </h1>
        {intro && <p className="mt-2 text-lg text-content-muted">{intro}</p>}
      </header>
      <div className="reading mt-8 max-w-reading text-content">{children}</div>
    </div>
  );
}

/** A titled section within a static page. */
export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-8 first:mt-0">
      <h2 className="text-xl font-semibold text-content">{title}</h2>
      <div className="mt-2">{children}</div>
    </section>
  );
}
