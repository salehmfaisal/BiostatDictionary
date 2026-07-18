import Link from "next/link";
import { resolveRelated } from "@/lib/dictionary";
import { termPath } from "@/lib/urls";

/** Chips linking to related terms; silently drops any that are not published. */
export function RelatedTerms({ slugs }: { slugs: string[] }) {
  const related = resolveRelated(slugs);
  if (related.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {related.map((t) => (
        <Link
          key={t.slug}
          href={termPath(t.slug)}
          className="inline-flex items-center rounded-full border border-border bg-surface-muted px-3 py-1 text-sm text-content hover:border-brand hover:text-brand"
        >
          {t.term}
        </Link>
      ))}
    </div>
  );
}
