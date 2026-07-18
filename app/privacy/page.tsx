import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { pageMetadata } from "@/lib/metadata";
import { StaticPage, Section } from "@/components/ui/StaticPage";

export const metadata: Metadata = pageMetadata({
  title: "Privacy policy",
  description: `How ${siteConfig.name} handles your data.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <StaticPage
      title="Privacy policy"
      intro="A short, plain-English summary of how we handle your data."
      path="/privacy"
    >
      <p className="text-sm text-content-muted">
        This is a template. The site owner should review it with a qualified
        professional and adapt it to the tools and analytics actually used.
      </p>
      <Section title="What we collect">
        <p>
          The core dictionary is a static website and does not require an account.
          If you email us or submit a term suggestion, we receive the information
          you choose to send, such as your name and email address.
        </p>
      </Section>
      <Section title="How we use it">
        <p>
          We use the information you send only to respond to you, review your
          suggestion, or fix a reported error. We do not sell your information.
        </p>
      </Section>
      <Section title="Analytics and cookies">
        <p>
          If analytics or cookies are added later, this policy will be updated to
          describe them and any choices you have.
        </p>
      </Section>
      <Section title="Contact">
        <p>
          Questions about privacy? Email{" "}
          <a href={`mailto:${siteConfig.contact.email}`} className="text-brand underline">
            {siteConfig.contact.email}
          </a>
          .
        </p>
      </Section>
    </StaticPage>
  );
}
