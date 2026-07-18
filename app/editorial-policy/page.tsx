import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { pageMetadata } from "@/lib/metadata";
import { StaticPage, Section } from "@/components/ui/StaticPage";

export const metadata: Metadata = pageMetadata({
  title: "Editorial policy",
  description: `How ${siteConfig.name} writes, reviews, and publishes its content.`,
  path: "/editorial-policy",
});

export default function EditorialPolicyPage() {
  return (
    <StaticPage
      title="Editorial policy"
      intro="How we write, review, and publish definitions."
      path="/editorial-policy"
    >
      <Section title="Our writing standards">
        <p>
          We write in plain English, one idea at a time. Sentences are kept short,
          jargon is explained the moment it appears, and every term follows the same
          teaching order: what it means, why it matters, when it is used, an example,
          and common mistakes.
        </p>
      </Section>
      <Section title="Originality">
        <p>
          Every definition is original. We do not copy from textbooks, websites,
          software documentation, or published articles. We do not invent scientific
          facts, software features, or references.
        </p>
      </Section>
      <Section title="Review stages">
        <p>Content moves through four stages before it reaches you:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Draft — a first version, not yet checked.</li>
          <li>Needs review — ready for a subject-matter reviewer.</li>
          <li>Reviewed — checked for accuracy and clarity.</li>
          <li>Published — live on the public site.</li>
        </ul>
        <p className="mt-2">Only published terms appear publicly.</p>
      </Section>
      <Section title="Accountability">
        <p>
          Each published term records its author, reviewer, and last review date.
          We revisit terms periodically and whenever a reader reports a problem.
        </p>
      </Section>
    </StaticPage>
  );
}
