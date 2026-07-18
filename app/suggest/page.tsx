import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { StaticPage } from "@/components/ui/StaticPage";
import { SuggestForm } from "@/components/ui/SuggestForm";

export const metadata: Metadata = pageMetadata({
  title: "Suggest a term",
  description: "Suggest a term to add to the dictionary. We review every submission.",
  path: "/suggest",
});

export default function SuggestPage() {
  return (
    <StaticPage
      title="Suggest a term"
      intro="Missing a term? Tell us. Submissions are reviewed by our editors and are never published automatically."
      path="/suggest"
    >
      <SuggestForm />
    </StaticPage>
  );
}
