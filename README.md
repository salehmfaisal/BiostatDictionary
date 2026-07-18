# BiostatDictionary

**The language of health and data science, explained in plain English.**

A production-ready scientific dictionary for **Biostatistics, Bioinformatics, Epidemiology, and Data Science**. Search or browse clear, original, plain-English definitions written for students, researchers, clinicians, and data professionals.

Built with Next.js (App Router) + TypeScript + Tailwind CSS + Fuse.js (search) + KaTeX (formulas) + Zod (content validation). Content lives in static TypeScript files — **no database required**.

---

## Table of contents

- [Quick start](#quick-start)
- [Project structure](#project-structure)
- [Content model](#content-model)
- [How to add a term](#how-to-add-a-term)
- [How to edit a term](#how-to-edit-a-term)
- [How to add a category](#how-to-add-a-category)
- [How to add a learning guide](#how-to-add-a-learning-guide)
- [Review & publishing workflow](#review--publishing-workflow)
- [Content validation](#content-validation)
- [How search works](#how-search-works)
- [How selected-term links work](#how-selected-term-links-work)
- [Changing the site name, branding & domain](#changing-the-site-name-branding--domain)
- [Testing](#testing)
- [Deployment](#deployment)
- [Maintaining content quality](#maintaining-content-quality)

---

## Quick start

```bash
npm install
npm run dev          # start the dev server at http://localhost:3000
```

Other scripts:

```bash
npm run build            # production build (static generation)
npm run start            # serve the production build
npm run typecheck        # TypeScript type checking
npm run lint             # ESLint
npm run validate:content # validate the term database (see below)
npm run test             # unit tests (Vitest)
npm run test:e2e         # end-to-end tests (Playwright)
```

Requirements: Node.js 18.18+ (developed on Node 24).

---

## Project structure

```text
app/
  [field]/                 # /biostatistics, /bioinformatics, /epidemiology, /data-science
    [category]/            # /<field>/<category>
  term/[slug]/             # individual term pages (/term/hazard-ratio)
  terms/                   # all terms (with ?q= filter)
    [letter]/              # /terms/a ... /terms/z
  guides/[slug]/           # learning guides
  about, contact, suggest, privacy, disclaimer, ...   # info & policy pages
  layout.tsx, page.tsx     # root layout + homepage (the reading view)
  sitemap.ts, robots.ts    # SEO
components/
  dictionary/  layout/  search/  seo/  ui/
content/
  terms/                   # term data (one file per field/batch) + index.ts
  guides/                  # learning-guide content
data/
  siteConfig.ts            # <-- single source of truth for branding
  categories.ts            # category definitions + slug helpers
lib/
  dictionary.ts  search.ts  validation.ts  metadata.ts  structuredData.ts  urls.ts
types/
  dictionary.ts            # the DictionaryTerm content model
scripts/
  validate-content.ts      # content validation gate (npm run validate:content)
tests/                     # Vitest unit tests + Playwright e2e (tests/e2e)
```

---

## Content model

Every term matches the `DictionaryTerm` interface in [`types/dictionary.ts`](types/dictionary.ts):

```ts
interface DictionaryTerm {
  id: string;
  slug: string;             // lowercase-kebab-case, unique
  term: string;
  abbreviation?: string;
  aliases?: string[];       // alternative names / search variants
  field: "Biostatistics" | "Bioinformatics" | "Epidemiology" | "Data Science";
  category: string;         // must match a category name in data/categories.ts
  shortDefinition: string;
  simpleExplanation: string;
  whyItMatters?: string;
  whenItIsUsed?: string;
  example?: string;
  formula?: string;         // KaTeX LaTeX, no surrounding $ delimiters
  formulaExplanation?: string;
  assumptions?: string[];
  interpretation?: string;
  commonMistakes?: string[];
  relatedTerms: string[];   // slugs of related terms
  references?: { citation: string; url?: string }[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  author: string;
  reviewer?: string;
  reviewStatus: "Draft" | "Needs Review" | "Reviewed" | "Published";
  dateCreated: string;      // YYYY-MM-DD
  lastReviewed: string;     // YYYY-MM-DD
  dateModified: string;     // YYYY-MM-DD
}
```

Only terms with `reviewStatus: "Published"` appear on the public site.

---

## How to add a term

1. Open the content file for the relevant field, e.g. [`content/terms/biostatistics.ts`](content/terms/biostatistics.ts) (or create a new file — see below).
2. Add an object to the exported `terms` array:

```ts
{
  slug: "relative-risk",
  term: "Relative Risk",
  abbreviation: "RR",
  aliases: ["risk ratio"],
  field: "Epidemiology",
  category: "Epidemiologic Measures",   // must exist in data/categories.ts
  shortDefinition: "…",
  simpleExplanation: "…",
  whyItMatters: "…",
  whenItIsUsed: "…",
  example: "…",
  relatedTerms: ["risk", "odds-ratio", "cohort-study"],
  difficulty: "Beginner",
  author: "BiostatDictionary Editorial Team",
  reviewer: "Your name",
  reviewStatus: "Published",
  dateCreated: "2026-07-18",
  lastReviewed: "2026-07-18",
  dateModified: "2026-07-18",
}
```

3. Run `npm run validate:content` to check it.

**Creating a new content file** (recommended once a file grows large): create `content/terms/my-batch.ts` exporting `export const terms: TermInput[] = [ … ]`, then import it in [`content/terms/index.ts`](content/terms/index.ts) and add it to the `sources` array. Duplicate slugs are automatically de-duplicated (first occurrence wins), so batches are safe to add.

Formulas use KaTeX. In a TypeScript string every backslash must be doubled:

```ts
formula: "\\bar{x} \\pm z \\cdot \\dfrac{s}{\\sqrt{n}}",
```

---

## How to edit a term

Find the term (search the codebase for its `slug`), change the fields, and bump `dateModified` (and `lastReviewed` if you re-reviewed it). Run `npm run validate:content`.

---

## How to add a category

Add the category name to the correct field array in [`data/categories.ts`](data/categories.ts). The slug is generated automatically. A term joins a category by setting its `category` field to the exact category **name**. Category pages live at `/<field-slug>/<category-slug>`.

---

## How to add a learning guide

Add a `Guide` object to the `guides` array in [`content/guides/index.ts`](content/guides/index.ts). Each guide has a `slug`, `title`, `summary`, optional `field`, `relatedTerms`, and a `body` (an array of `{ heading, paragraphs }` sections). It becomes available at `/guides/<slug>` and is listed on `/guides` and the homepage.

---

## Review & publishing workflow

Content moves through four `reviewStatus` stages:

1. **Draft** — first version, not shown publicly.
2. **Needs Review** — ready for a reviewer.
3. **Reviewed** — checked for accuracy and clarity.
4. **Published** — live on the public site.

Only `Published` terms are indexed, searched, linked, and included in the sitemap. To publish a term, set `reviewStatus: "Published"` and make sure it has an author and a `lastReviewed` date.

---

## Content validation

```bash
npm run validate:content
```

This fails the build (exit code 1) on any **hard error**:

- a term has no slug, or two terms share a slug
- a published term has no explanation, author, or review date
- a reference is structurally invalid
- placeholder text (e.g. `TODO`, `lorem ipsum`) appears in a published entry
- a term lists itself as related

Missing related-term links are reported as **warnings** — they are pruned automatically at load so they never render as broken links. The same checks run in the unit test suite (`tests/content.test.ts`).

---

## How search works

Search is powered by [Fuse.js](https://fusejs.io/) over a slim client index built from published terms ([`lib/search.ts`](lib/search.ts)). It supports:

- exact term, abbreviation, and alias matches (ranked first)
- partial and fuzzy matching (tolerates small typos)
- spacing/hyphen normalization, so `RNA seq`, `rna-seq`, and `RNAseq` behave alike
- category and field matching

Examples that work out of the box: `GLM → Generalized Linear Model`, `FDR → False Discovery Rate`, `PCA → Principal Component Analysis`, `scRNA seq → Single Cell RNA Sequencing`, `KM curve → Kaplan-Meier Curve`.

Keyboard: `/` or `Ctrl/Cmd+K` opens search; arrow keys move; Enter opens; Esc closes.

---

## How selected-term links work

The homepage renders the whole dictionary as one readable document. Selecting a term is handled by [`components/dictionary/SelectedTermManager.tsx`](components/dictionary/SelectedTermManager.tsx):

- Visiting `/?term=hazard-ratio` scrolls to the term, highlights it, moves focus to it, and updates the page title.
- Clicking a term in the reading view updates the URL with `?term=<slug>` using `pushState` (no full reload), highlights it, and preserves browser back/forward navigation.
- Without JavaScript, the same term links fall back to the permanent `/term/<slug>` page.

Every term also has a permanent, SEO-friendly page at `/term/<slug>` with full structured data.

---

## Changing the site name, branding & domain

Everything editable lives in [`data/siteConfig.ts`](data/siteConfig.ts): name, tagline, description, `url` (domain), logo mark/image, founder name and role, contact email, social links, and field blurbs. Colors and fonts are CSS variables in [`app/globals.css`](app/globals.css) (`--color-brand`, `--color-highlight`, etc.) and mapped to Tailwind tokens in [`tailwind.config.ts`](tailwind.config.ts).

> ⚠️ Placeholders to replace before launch: `founder.name`, `founder.role`, `contact.email`, `url`, and the reviewer name in the content files.

---

## Testing

```bash
npm run test       # Vitest: search, validation, dictionary integrity
npm run test:e2e   # Playwright: homepage, ?term= behavior, search, term pages, 404
```

The Playwright config builds and starts the app automatically on port 3100.

---

## Deployment

The site is fully static-friendly. Deploy anywhere that runs Next.js (e.g. Vercel):

1. Set `url` in `data/siteConfig.ts` to your production domain.
2. `npm run build`.
3. Deploy the project (Vercel auto-detects Next.js), or `npm run start` behind your own host.

`robots.txt` and `sitemap.xml` are generated automatically from published content.

---

## Maintaining content quality

- Write in plain English. Short sentences. Explain one idea at a time and define jargon the moment it appears.
- Keep the teaching order: what it means → why it matters → when it is used → example → common mistakes.
- Every definition must be **original**. Do not copy from textbooks, websites, documentation, or articles. Do not invent facts, software features, or references.
- Re-review terms periodically and whenever a reader reports an error (see the on-site corrections policy).
- Run `npm run validate:content`, `npm run typecheck`, and `npm run test` before publishing.
```
