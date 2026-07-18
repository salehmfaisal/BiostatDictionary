import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { pageMetadata } from "@/lib/metadata";
import { StaticPage, Section } from "@/components/ui/StaticPage";

export const metadata: Metadata = pageMetadata({
  title: "Disclaimer",
  description: "Educational content only, not professional or medical advice.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <StaticPage title="Disclaimer" path="/disclaimer">
      <Section title="Educational use only">
        <p>
          {siteConfig.name} is an educational reference. Its definitions are meant
          to help you understand scientific and technical terms. They are not
          medical advice, clinical guidance, or a substitute for professional
          judgment.
        </p>
      </Section>
      <Section title="No professional relationship">
        <p>
          Reading this site does not create a doctor-patient, statistician-client,
          or any other professional relationship. Always consult a qualified
          professional before making decisions about health, research design, or
          data analysis.
        </p>
      </Section>
      <Section title="Accuracy">
        <p>
          We work hard to keep content accurate and up to date, but we cannot
          guarantee that every entry is complete or error-free. If you spot a
          problem, please tell us.
        </p>
      </Section>
    </StaticPage>
  );
}
