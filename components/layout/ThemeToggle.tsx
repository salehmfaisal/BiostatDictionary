"use client";

import { useEffect, useState } from "react";

type Mode = "light" | "dark" | "system";

function apply(mode: Mode) {
  const root = document.documentElement;
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const dark = mode === "dark" || (mode === "system" && systemDark);
  root.classList.toggle("dark", dark);
  if (mode === "system") localStorage.removeItem("theme");
  else localStorage.setItem("theme", mode);
}

export function ThemeToggle() {
  const [mode, setMode] = useState<Mode>("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = (localStorage.getItem("theme") as Mode | null) ?? "system";
    setMode(saved);
  }, []);

  function cycle() {
    const next: Mode = mode === "light" ? "dark" : mode === "dark" ? "system" : "light";
    setMode(next);
    apply(next);
  }

  const label =
    mode === "light" ? "Light theme" : mode === "dark" ? "Dark theme" : "System theme";
  const icon = mode === "light" ? "☀" : mode === "dark" ? "☾" : "◐";

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={`Theme: ${label}. Click to change.`}
      title={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-content-muted hover:bg-surface-muted hover:text-content"
    >
      <span aria-hidden="true" className="text-base">
        {mounted ? icon : "◐"}
      </span>
    </button>
  );
}
