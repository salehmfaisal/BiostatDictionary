import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { fieldPath } from "@/lib/urls";
import { termsByField } from "@/lib/dictionary";

/** Cards linking to each of the four field pages. */
export function FieldNav() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {siteConfig.fields.map((f) => {
        const count = termsByField(f.name).length;
        return (
          <Link
            key={f.slug}
            href={fieldPath(f.name)}
            className="group rounded-lg border border-border bg-surface p-5 hover:border-brand"
          >
            <div className="flex items-baseline justify-between">
              <h3 className="text-lg font-semibold text-content group-hover:text-brand">
                {f.name}
              </h3>
              <span className="text-sm text-content-muted">{count} terms</span>
            </div>
            <p className="mt-2 text-sm text-content-muted">{f.blurb}</p>
          </Link>
        );
      })}
    </div>
  );
}
