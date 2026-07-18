import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";
import { publishedTerms } from "@/lib/dictionary";
import { categories, slugify } from "@/data/categories";
import { guides } from "@/content/guides";
import { ALPHABET } from "@/lib/urls";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticPaths = [
    "/",
    "/terms",
    "/guides",
    "/about",
    "/editorial-policy",
    "/corrections-policy",
    "/references-policy",
    "/suggest",
    "/contact",
    "/privacy",
    "/terms-of-use",
    "/disclaimer",
    "/accessibility",
  ];

  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.6,
  }));

  for (const f of siteConfig.fields) {
    entries.push({
      url: `${base}/${f.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  for (const c of categories) {
    entries.push({
      url: `${base}/${slugify(c.field)}/${c.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.5,
    });
  }

  for (const l of ALPHABET) {
    entries.push({
      url: `${base}/terms/${l.toLowerCase()}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.4,
    });
  }

  for (const g of guides) {
    entries.push({
      url: `${base}/guides/${g.slug}`,
      lastModified: new Date(g.lastReviewed),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  for (const t of publishedTerms) {
    entries.push({
      url: `${base}/term/${t.slug}`,
      lastModified: new Date(t.dateModified),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  return entries;
}
