"use client";

import { useState } from "react";

/** Copies a link to the clipboard. If no href is given, copies the current URL. */
export function CopyLink({ href, label = "Copy link" }: { href?: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    const url = href
      ? new URL(href, window.location.origin).toString()
      : window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard may be unavailable; fail quietly.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm text-content-muted hover:border-brand hover:text-brand"
      aria-live="polite"
    >
      <span aria-hidden="true">{copied ? "✓" : "🔗"}</span>
      {copied ? "Copied" : label}
    </button>
  );
}
