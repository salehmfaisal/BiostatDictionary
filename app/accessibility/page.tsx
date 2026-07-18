import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { pageMetadata } from "@/lib/metadata";
import { StaticPage, Section } from "@/components/ui/StaticPage";

export const metadata: Metadata = pageMetadata({
  title: "Accessibility statement",
  description: `How ${siteConfig.name} works to be usable by everyone.`,
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <StaticPage
      title="Accessibility statement"
      intro="We want everyone to be able to read and use this dictionary."
      path="/accessibility"
    >
      <Section title="What we do">
        <p>We build the site to modern accessibility standards, including:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Full keyboard navigation, including a skip-to-content link.</li>
          <li>Visible focus outlines for keyboard users.</li>
          <li>Semantic headings in a logical order.</li>
          <li>Clear labels on search, forms, and controls.</li>
          <li>High color contrast in both light and dark modes.</li>
          <li>Respect for the reduced-motion system setting.</li>
          <li>Formulas that carry an accessible label and scroll on small screens.</li>
        </ul>
      </Section>
      <Section title="Keyboard shortcuts">
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Press / to open search.</li>
          <li>Press Ctrl or Cmd + K to open search.</li>
          <li>Use the arrow keys to move through results, Enter to open, Esc to close.</li>
        </ul>
      </Section>
      <Section title="Feedback">
        <p>
          If you hit an accessibility barrier, please email{" "}
          <a href={`mailto:${siteConfig.contact.email}`} className="text-brand underline">
            {siteConfig.contact.email}
          </a>{" "}
          so we can fix it.
        </p>
      </Section>
    </StaticPage>
  );
}
