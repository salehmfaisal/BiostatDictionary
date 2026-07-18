import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { pageMetadata } from "@/lib/metadata";
import { StaticPage, Section } from "@/components/ui/StaticPage";

export const metadata: Metadata = pageMetadata({
  title: "Corrections policy",
  description: "How to report an error and how we handle corrections.",
  path: "/corrections-policy",
});

export default function CorrectionsPolicyPage() {
  return (
    <StaticPage
      title="Corrections policy"
      intro="We want the dictionary to be accurate. Here is how we fix mistakes."
      path="/corrections-policy"
    >
      <Section title="How to report an error">
        <p>
          Email{" "}
          <a href={`mailto:${siteConfig.contact.email}`} className="text-brand underline">
            {siteConfig.contact.email}
          </a>{" "}
          with the term name, what you believe is wrong, and, if possible, a
          trustworthy source. Clear reports help us act quickly.
        </p>
      </Section>
      <Section title="How we respond">
        <p>
          We review every report. If a correction is needed, we update the term,
          record a new review date, and, where the change is significant, note that
          the entry was revised. If we decide no change is needed, we will explain
          why.
        </p>
      </Section>
      <Section title="Our commitment">
        <p>
          We would rather be corrected than be wrong. Reader feedback is a core part
          of keeping the dictionary trustworthy.
        </p>
      </Section>
    </StaticPage>
  );
}
