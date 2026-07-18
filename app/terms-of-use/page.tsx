import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { pageMetadata } from "@/lib/metadata";
import { StaticPage, Section } from "@/components/ui/StaticPage";

export const metadata: Metadata = pageMetadata({
  title: "Terms of use",
  description: `The terms for using ${siteConfig.name}.`,
  path: "/terms-of-use",
});

export default function TermsOfUsePage() {
  return (
    <StaticPage
      title="Terms of use"
      intro="Please read these terms before using the site."
      path="/terms-of-use"
    >
      <p className="text-sm text-content-muted">
        This is a template. The site owner should have it reviewed by a qualified
        professional before launch.
      </p>
      <Section title="Acceptable use">
        <p>
          You may read, share, and link to our content for personal, educational,
          and professional learning. Please do not scrape the site at scale or
          republish large portions as your own.
        </p>
      </Section>
      <Section title="Content and accuracy">
        <p>
          Content is provided for educational purposes and may change. We make no
          warranty that it is complete or error-free. See our{" "}
          <a href="/disclaimer" className="text-brand underline">
            disclaimer
          </a>
          .
        </p>
      </Section>
      <Section title="Intellectual property">
        <p>
          Our original definitions and site design belong to {siteConfig.name}.
          Referenced works belong to their respective owners.
        </p>
      </Section>
      <Section title="Changes">
        <p>These terms may be updated. Continued use means you accept the current terms.</p>
      </Section>
    </StaticPage>
  );
}
