import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { pageMetadata } from "@/lib/metadata";
import { StaticPage, Section } from "@/components/ui/StaticPage";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: `Why ${siteConfig.name} exists, who it serves, and how its content is written and reviewed.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <StaticPage
      title={`About ${siteConfig.name}`}
      intro={siteConfig.tagline}
      path="/about"
    >
      <Section title="Why this dictionary exists">
        <p>
          Scientific language is a barrier. A single term can hide a simple idea
          behind jargon, and the people who most need a quick, clear answer are
          often the least served by dense textbooks and encyclopedias. {siteConfig.name}{" "}
          exists to explain the language of health and data science in plain
          English, so anyone can understand a term in a few seconds.
        </p>
      </Section>

      <Section title="Who it serves">
        <p>
          The dictionary is written for students, graduate and PhD students,
          researchers, clinicians, public health professionals, biostatisticians,
          bioinformaticians, epidemiologists, data analysts and scientists,
          professors, and software developers working in biomedical fields. It aims
          to be simple enough for a beginner and precise enough for an expert.
        </p>
      </Section>

      <Section title="How terms are selected">
        <p>
          We prioritize terms that appear often in coursework, research papers,
          statistical software, and clinical practice across four fields:
          biostatistics, bioinformatics, epidemiology, and data science. Readers can
          also{" "}
          <Link href="/suggest" className="text-brand underline">
            suggest a term
          </Link>
          , and popular suggestions are added first.
        </p>
      </Section>

      <Section title="How content is written">
        <p>
          Every definition is written from scratch in plain language. We explain
          what a term means, why it matters, when it is used, and give a practical
          example, then flag common mistakes. We do not copy definitions from
          textbooks, websites, software documentation, or published articles.
        </p>
      </Section>

      <Section title="How terms are reviewed">
        <p>
          Content moves through four stages: draft, needs review, reviewed, and
          published. Only published terms appear on the public site. Each published
          term records its author, reviewer, and review date so you can see when it
          was last checked.
        </p>
      </Section>

      <Section title="How corrections are handled">
        <p>
          We take accuracy seriously. If you spot an error, our{" "}
          <Link href="/corrections-policy" className="text-brand underline">
            corrections policy
          </Link>{" "}
          explains how to report it and how quickly we respond.
        </p>
      </Section>

      <Section title="Who manages the website">
        <p>
          {siteConfig.name} is maintained by {siteConfig.founder.name}
          {" — "}
          {siteConfig.founder.role}. Reach us at{" "}
          <a href={`mailto:${siteConfig.contact.email}`} className="text-brand underline">
            {siteConfig.contact.email}
          </a>
          .
        </p>
      </Section>
    </StaticPage>
  );
}
