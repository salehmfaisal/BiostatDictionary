import { siteConfig } from "@/data/siteConfig";
import type { DictionaryTerm, GuideMeta } from "@/types/dictionary";
import { termPath } from "@/lib/urls";

export interface Crumb {
  name: string;
  path: string;
}

/** schema.org DefinedTerm for a dictionary entry. */
export function termStructuredData(term: DictionaryTerm) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "@id": `${siteConfig.url}${termPath(term.slug)}`,
    name: term.term,
    description: term.shortDefinition,
    termCode: term.abbreviation,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    url: `${siteConfig.url}${termPath(term.slug)}`,
    dateModified: term.dateModified,
    author: { "@type": "Organization", name: siteConfig.name },
  };
}

/** schema.org Article for a learning guide. */
export function guideStructuredData(guide: GuideMeta, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.summary,
    url: `${siteConfig.url}${path}`,
    dateModified: guide.lastReviewed,
    author: { "@type": "Person", name: guide.author },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };
}

export function breadcrumbStructuredData(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${siteConfig.url}${c.path}`,
    })),
  };
}

export function websiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/terms?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}
