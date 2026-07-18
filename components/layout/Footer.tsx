import Link from "next/link";
import { siteConfig, footerNav } from "@/data/siteConfig";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-surface-muted">
      <div className="mx-auto max-w-content px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-semibold text-content">
              <span
                aria-hidden="true"
                className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-brand text-xs font-bold text-white"
              >
                {siteConfig.logo.mark}
              </span>
              {siteConfig.name}
            </div>
            <p className="mt-3 max-w-xs text-sm text-content-muted">
              {siteConfig.tagline}
            </p>
          </div>

          {footerNav.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-semibold text-content">{group.title}</h2>
              <ul className="mt-3 space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-content-muted hover:text-brand"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-border pt-6 text-sm text-content-muted">
          <p>
            © {siteConfig.name}. Educational content only — not medical advice. See our{" "}
            <Link href="/disclaimer" className="underline hover:text-brand">
              disclaimer
            </Link>
            .
          </p>
          <p className="mt-2">
            Definitions are written and reviewed by our editorial team. Found an error?{" "}
            <Link href="/corrections-policy" className="underline hover:text-brand">
              Tell us
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
