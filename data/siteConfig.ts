/**
 * Single source of truth for editable site identity.
 * Change the name, tagline, colors, logo, domain, founder, and contact here —
 * nothing else in the codebase should hard-code these values.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  /** Production URL, no trailing slash. Used for canonical URLs, sitemap, OG tags. */
  url: string;
  locale: string;
  logo: {
    /** Emoji or short text mark shown when no image logo is provided. */
    mark: string;
    /** Optional path to an image logo in /public. Leave empty to use the text mark. */
    image?: string;
  };
  founder: {
    name: string;
    /** Visible placeholder until the owner provides real details. */
    role: string;
  };
  contact: {
    email: string;
  };
  social: {
    twitter?: string;
    github?: string;
  };
  fields: {
    slug: string;
    name: "Biostatistics" | "Bioinformatics" | "Epidemiology" | "Data Science";
    blurb: string;
  }[];
  /** Number of terms shown in the "Recently reviewed" and "Popular" strips. */
  featuredCount: number;
}

export const siteConfig: SiteConfig = {
  name: "BiostatDictionary",
  shortName: "BiostatDictionary",
  tagline: "The language of health and data science, explained in plain English.",
  description:
    "A plain-English scientific dictionary covering biostatistics, bioinformatics, epidemiology, and data science. Search or browse clear definitions written for students, researchers, and clinicians.",
  // Live deployment URL. Change to your custom domain when you have one.
  url: "https://salehmfaisal.github.io/BiostatDictionary",
  locale: "en_US",
  logo: {
    mark: "BD",
    image: "",
  },
  founder: {
    // Placeholder — replace with the real owner details before launch.
    name: "Abu Saleh Mosa Faisal",
    role: "CEO, Biostat Consultant LLC",
  },
  contact: {
    email: "afaisal@isrt.ac.bd",
  },
  social: {
    twitter: "",
    github: "",
  },
  fields: [
    {
      slug: "biostatistics",
      name: "Biostatistics",
      blurb:
        "The methods used to design health studies and make sense of their numbers, from p-values to survival analysis.",
    },
    {
      slug: "bioinformatics",
      name: "Bioinformatics",
      blurb:
        "The tools and ideas used to read and analyze biological data such as DNA, RNA, and proteins.",
    },
    {
      slug: "epidemiology",
      name: "Epidemiology",
      blurb:
        "The study of how often disease happens, who it affects, and why, across whole populations.",
    },
    {
      slug: "data-science",
      name: "Data Science",
      blurb:
        "The practice of turning raw data into reliable answers using programming, statistics, and machine learning.",
    },
  ],
  featuredCount: 8,
};

/** Primary navigation shown in the header. */
export const primaryNav: NavLink[] = [
  { label: "All terms", href: "/terms" },
  { label: "Biostatistics", href: "/biostatistics" },
  { label: "Bioinformatics", href: "/bioinformatics" },
  { label: "Epidemiology", href: "/epidemiology" },
  { label: "Data Science", href: "/data-science" },
  { label: "Guides", href: "/guides" },
  { label: "About", href: "/about" },
];

/** Footer link groups. */
export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Browse",
    links: [
      { label: "All terms", href: "/terms" },
      { label: "Biostatistics", href: "/biostatistics" },
      { label: "Bioinformatics", href: "/bioinformatics" },
      { label: "Epidemiology", href: "/epidemiology" },
      { label: "Data Science", href: "/data-science" },
      { label: "Learning guides", href: "/guides" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About", href: "/about" },
      { label: "Editorial policy", href: "/editorial-policy" },
      { label: "Corrections policy", href: "/corrections-policy" },
      { label: "References policy", href: "/references-policy" },
      { label: "Suggest a term", href: "/suggest" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of use", href: "/terms-of-use" },
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Accessibility statement", href: "/accessibility" },
    ],
  },
];
