import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-content px-4 py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand">404</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-content">
        We couldn&apos;t find that page
      </h1>
      <p className="mx-auto mt-3 max-w-reading text-content-muted">
        The term or page you were looking for may have moved or never existed. Try
        searching, or browse the dictionary from the links below.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link
          href="/terms"
          className="rounded-md bg-brand px-4 py-2 font-medium text-white hover:bg-brand-strong"
        >
          Browse all terms
        </Link>
        <Link
          href="/"
          className="rounded-md border border-border px-4 py-2 font-medium text-content hover:border-brand"
        >
          Go home
        </Link>
      </div>
      <p className="mt-6 text-sm text-content-muted">
        Tip: press <kbd className="rounded border border-border px-1">/</kbd> anywhere
        to search.
      </p>
    </div>
  );
}
