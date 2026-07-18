"use client";

import type { ReactNode } from "react";
import { SearchProvider } from "@/components/search/SearchProvider";
import type { SearchDoc } from "@/lib/search";

export function Providers({
  docs,
  children,
}: {
  docs: SearchDoc[];
  children: ReactNode;
}) {
  return <SearchProvider docs={docs}>{children}</SearchProvider>;
}
