import Link from "next/link";
import { ALPHABET, letterPath } from "@/lib/urls";

/** A–Z navigation. Letters with no terms are shown disabled. */
export function AlphabetNav({
  counts,
  active,
}: {
  counts: Record<string, number>;
  active?: string;
}) {
  return (
    <nav aria-label="Browse alphabetically" className="-mx-1 overflow-x-auto">
      <ul className="flex min-w-max gap-1 px-1 pb-1">
        {ALPHABET.map((letter) => {
          const count = counts[letter] ?? 0;
          const isActive = active?.toUpperCase() === letter;
          if (count === 0) {
            return (
              <li key={letter}>
                <span
                  aria-disabled="true"
                  title={`No terms starting with ${letter}`}
                  className="inline-flex h-9 w-9 cursor-not-allowed items-center justify-center rounded-md text-sm text-content-muted/40"
                >
                  {letter}
                </span>
              </li>
            );
          }
          return (
            <li key={letter}>
              <Link
                href={letterPath(letter)}
                aria-current={isActive ? "page" : undefined}
                title={`${count} term${count === 1 ? "" : "s"} starting with ${letter}`}
                className={`inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium ${
                  isActive
                    ? "bg-brand text-white"
                    : "text-content hover:bg-surface-muted hover:text-brand"
                }`}
              >
                {letter}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
