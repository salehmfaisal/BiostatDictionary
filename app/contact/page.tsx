import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { pageMetadata } from "@/lib/metadata";
import { StaticPage, Section } from "@/components/ui/StaticPage";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <StaticPage title="Contact" intro="We would love to hear from you." path="/contact">
      <Section title="Email">
        <p>
          For questions, corrections, or partnership ideas, email{" "}
          <a href={`mailto:${siteConfig.contact.email}`} className="text-brand underline">
            {siteConfig.contact.email}
          </a>
          .
        </p>
      </Section>
      <Section title="Suggest a term">
        <p>
          Want a term added? Use the{" "}
          <Link href="/suggest" className="text-brand underline">
            suggest a term
          </Link>{" "}
          form. We read every submission.
        </p>
      </Section>
      <Section title="Report an error">
        <p>
          Found a mistake? See our{" "}
          <Link href="/corrections-policy" className="text-brand underline">
            corrections policy
          </Link>{" "}
          for how to report it.
        </p>
      </Section>
    </StaticPage>
  );
}
