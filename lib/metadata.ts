import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import type { DictionaryTerm } from "@/types/dictionary";
import { termPath } from "@/lib/urls";

interface PageMetaInput {
  title: string;
  description: string;
  /** Path beginning with "/". */
  path: string;
}

export function pageMetadata({ title, description, path }: PageMetaInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle =
    path === "/" ? `${siteConfig.name} — ${siteConfig.tagline}` : `${title} — ${siteConfig.name}`;
  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: siteConfig.locale,
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description,
    },
  };
}

export function termMetadata(term: DictionaryTerm): Metadata {
  const bits = [term.abbreviation, ...(term.aliases ?? [])].filter(Boolean).join(", ");
  const description =
    term.shortDefinition.length > 155
      ? `${term.shortDefinition.slice(0, 152)}...`
      : term.shortDefinition;
  const meta = pageMetadata({
    title: term.term,
    description,
    path: termPath(term.slug),
  });
  return {
    ...meta,
    keywords: [term.term, term.field, term.category, bits].filter(Boolean).join(", "),
  };
}
