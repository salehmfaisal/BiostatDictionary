import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { StaticPage, Section } from "@/components/ui/StaticPage";

export const metadata: Metadata = pageMetadata({
  title: "References policy",
  description: "How we choose and present references.",
  path: "/references-policy",
});

export default function ReferencesPolicyPage() {
  return (
    <StaticPage
      title="References policy"
      intro="How we source and cite the ideas behind our definitions."
      path="/references-policy"
    >
      <Section title="What we cite">
        <p>
          Where a term rests on a well-known method or foundational idea, we point
          to trustworthy, publicly recognized sources such as standard textbooks,
          peer-reviewed articles, or official documentation. References support
          further reading; our definitions are written in our own words.
        </p>
      </Section>
      <Section title="What we will not do">
        <p>
          We never invent references or attach citations we have not verified. If a
          term does not yet have a reference, we would rather show none than show a
          fabricated one.
        </p>
      </Section>
      <Section title="Accuracy of links">
        <p>
          External links can change or break over time. If you find a broken or
          incorrect reference, please tell us so we can fix it.
        </p>
      </Section>
    </StaticPage>
  );
}
