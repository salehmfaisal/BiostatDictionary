import type { GuideMeta } from "@/types/dictionary";

export interface GuideSection {
  heading: string;
  paragraphs: string[];
}

export interface Guide extends GuideMeta {
  body: GuideSection[];
}

const AUTHOR = "BiostatDictionary Editorial Team";
const D = "2026-07-18";

export const guides: Guide[] = [
  {
    slug: "understanding-p-values",
    title: "Understanding P-Values",
    summary:
      "A plain-English walk through what a p-value is, what it is not, and how to read one without being misled.",
    field: "Biostatistics",
    relatedTerms: ["p-value", "confidence-interval", "statistical-significance", "null-hypothesis"],
    author: AUTHOR,
    lastReviewed: D,
    body: [
      {
        heading: "What a p-value actually measures",
        paragraphs: [
          "Start with a simple assumption: nothing is going on. In statistics this is called the null hypothesis. A p-value answers one narrow question. If that assumption were true, how often would you see data at least as striking as yours, just by chance?",
          "A small p-value means your data would be unusual in a world with no real effect. That makes people doubt the assumption of 'no effect'. A large p-value means your data fit comfortably with chance, so there is little reason to abandon the assumption.",
        ],
      },
      {
        heading: "What a p-value is not",
        paragraphs: [
          "A p-value is not the probability that the null hypothesis is true. It is calculated by assuming the null is true in the first place.",
          "A p-value is also not a measure of how big or important an effect is. With enough data, a tiny, meaningless difference can produce a very small p-value. Always look at the effect size and the confidence interval alongside it.",
        ],
      },
      {
        heading: "How to read one in practice",
        paragraphs: [
          "The common cutoff of 0.05 is a convention, not a law of nature. A result with p = 0.049 and one with p = 0.051 carry almost the same evidence, so avoid treating the cutoff as a hard wall.",
          "Think of the p-value as one piece of evidence. Combine it with the size of the effect, the width of the confidence interval, the study design, and whether the analysis was planned in advance.",
        ],
      },
    ],
  },
  {
    slug: "understanding-confidence-intervals",
    title: "Understanding Confidence Intervals",
    summary:
      "Why a range is often more honest than a single number, and how to interpret a 95% confidence interval correctly.",
    field: "Biostatistics",
    relatedTerms: ["confidence-interval", "standard-error", "p-value", "effect-size"],
    author: AUTHOR,
    lastReviewed: D,
    body: [
      {
        heading: "Why a range beats a single number",
        paragraphs: [
          "Any estimate from a sample is uncertain. If you repeated the study, you would get a slightly different number each time. A confidence interval shows that wobble as a range around your estimate.",
          "A narrow interval means your estimate is precise. A wide interval means there is a lot of uncertainty, which is important to know before making a decision.",
        ],
      },
      {
        heading: "What 95% really means",
        paragraphs: [
          "A 95% confidence interval does not mean there is a 95% chance the true value sits inside this particular interval. The true value is fixed; it is either in or out.",
          "The 95% describes the procedure. If you repeated the study many times and built an interval each time, about 95% of those intervals would contain the true value.",
        ],
      },
      {
        heading: "Reading intervals well",
        paragraphs: [
          "Look at both ends. An interval from 3 to 13 tells you the effect is probably positive but could be small or fairly large.",
          "Do not reduce an interval to a yes/no test of whether it crosses a null value. The width and the practical size of the effect matter just as much.",
        ],
      },
    ],
  },
  {
    slug: "understanding-statistical-power",
    title: "Understanding Statistical Power",
    summary:
      "What power means, why underpowered studies mislead, and how power connects to sample size.",
    field: "Biostatistics",
    relatedTerms: ["statistical-power", "sample-size", "type-ii-error", "effect-size"],
    author: AUTHOR,
    lastReviewed: D,
    body: [
      {
        heading: "Power is your ability to see something real",
        paragraphs: [
          "Statistical power is the chance that a study will detect an effect that truly exists. Think of it like the resolution of a camera: high power means that if there is something to see, you will probably see it.",
          "A study with low power can easily miss a real effect and report 'no difference' when a difference is really there.",
        ],
      },
      {
        heading: "What drives power",
        paragraphs: [
          "Four things raise power: a larger sample, a bigger true effect, less noise in the measurements, and a more lenient false-positive rate.",
          "Of these, sample size is usually the lever researchers control. This is why studies do a power calculation before they start, to choose a sample size large enough to give a good chance of success.",
        ],
      },
      {
        heading: "The danger of negative results",
        paragraphs: [
          "When a study finds no significant effect, ask whether it had enough power. A non-significant result from a tiny study tells you very little.",
          "Absence of evidence is not evidence of absence. A well-powered study that finds nothing is far more informative than an underpowered one.",
        ],
      },
    ],
  },
  {
    slug: "understanding-risk-and-odds",
    title: "Understanding Risk and Odds",
    summary:
      "Risk, odds, risk ratios, and odds ratios explained side by side, with when each one applies.",
    field: "Epidemiology",
    relatedTerms: ["risk", "risk-ratio", "odds-ratio", "incidence"],
    author: AUTHOR,
    lastReviewed: D,
    body: [
      {
        heading: "Risk versus odds",
        paragraphs: [
          "Risk is a simple probability: out of everyone at risk, what fraction gets the event? If 10 of 100 people get sick, the risk is 10%.",
          "Odds compare the chance of the event happening to the chance of it not happening. With 10 sick and 90 well, the odds are 10 to 90, or about 0.11. For rare events, risk and odds are close; for common events, they diverge.",
        ],
      },
      {
        heading: "Ratios that compare groups",
        paragraphs: [
          "A risk ratio divides the risk in one group by the risk in another. A risk ratio of 2 means the first group has double the risk.",
          "An odds ratio divides the odds in one group by the odds in another. It comes naturally out of logistic regression and case-control studies.",
        ],
      },
      {
        heading: "Why the difference matters",
        paragraphs: [
          "When an outcome is common, the odds ratio is larger than the risk ratio and can exaggerate the apparent effect.",
          "Use risk ratios when you can measure risk directly, such as in cohort studies and trials. Use odds ratios where risk cannot be measured directly, such as case-control studies.",
        ],
      },
    ],
  },
  {
    slug: "rna-sequencing-explained",
    title: "RNA Sequencing Explained",
    summary:
      "A gentle tour of how RNA sequencing measures gene activity, from sample to gene list.",
    field: "Bioinformatics",
    relatedTerms: ["rna-sequencing", "differential-expression", "count-matrix", "normalization"],
    author: AUTHOR,
    lastReviewed: D,
    body: [
      {
        heading: "The basic idea",
        paragraphs: [
          "Genes carry instructions, but not every gene is active at once. RNA sequencing measures which genes are switched on by reading and counting the RNA a cell is producing.",
          "More reads from a gene usually means that gene is more active. Across thousands of genes, this paints a genome-wide picture of what a cell is doing.",
        ],
      },
      {
        heading: "From reads to a table",
        paragraphs: [
          "The sequencer produces millions of short reads. Software maps each read to its gene, then counts them, producing a count matrix with genes as rows and samples as columns.",
          "Raw counts depend on how deeply each sample was sequenced, so they must be normalized before samples can be fairly compared.",
        ],
      },
      {
        heading: "Finding what changed",
        paragraphs: [
          "Differential expression analysis compares groups, such as tumor versus normal, to find genes whose activity changed more than expected by chance.",
          "Results pair a fold change, showing the size of the change, with an adjusted p-value that controls the false discovery rate across thousands of genes.",
        ],
      },
    ],
  },
  {
    slug: "introduction-to-machine-learning",
    title: "Introduction to Machine Learning",
    summary:
      "What machine learning is, the main types, and the traps to avoid when a model looks too good.",
    field: "Data Science",
    relatedTerms: ["machine-learning", "supervised-learning", "cross-validation", "overfitting"],
    author: AUTHOR,
    lastReviewed: D,
    body: [
      {
        heading: "Learning from examples",
        paragraphs: [
          "Machine learning lets a computer find patterns from data instead of following hand-written rules. You show it many examples, and it works out the rules itself.",
          "This is powerful for problems where exact rules are hard to write, such as recognizing images or predicting risk from many factors.",
        ],
      },
      {
        heading: "Supervised and unsupervised",
        paragraphs: [
          "In supervised learning, examples come with the correct answer, and the model learns to predict it. Classification predicts categories; regression predicts numbers.",
          "In unsupervised learning, there are no labels. The model finds structure on its own, such as grouping similar items into clusters.",
        ],
      },
      {
        heading: "The overfitting trap",
        paragraphs: [
          "A model can memorize its training data and look brilliant, then fail on anything new. This is overfitting.",
          "Guard against it by evaluating on data the model has not seen, using a held-out test set or cross-validation. A big gap between training and test performance is a warning sign.",
        ],
      },
    ],
  },
  {
    slug: "how-to-choose-a-statistical-test",
    title: "How to Choose a Statistical Test",
    summary:
      "A practical framework for picking a test based on your question, your outcome, and your data.",
    field: "Biostatistics",
    relatedTerms: ["hypothesis-testing", "linear-regression", "logistic-regression", "p-value"],
    author: AUTHOR,
    lastReviewed: D,
    body: [
      {
        heading: "Start with your question and outcome",
        paragraphs: [
          "First, decide what type your outcome is. Is it a number (like blood pressure), a yes/no category (like disease), a count (like infections), or a time until an event (like survival)?",
          "The outcome type points you toward a family of methods. Numbers often use t-tests or linear regression, yes/no outcomes use logistic regression, counts use Poisson or negative binomial models, and times use survival methods.",
        ],
      },
      {
        heading: "Count your groups and account for pairing",
        paragraphs: [
          "Are you comparing two groups or more than two? Are the observations independent, or are they paired or repeated on the same people?",
          "Paired and repeated data need methods that respect that structure, such as paired tests or mixed models, otherwise the uncertainty is wrong.",
        ],
      },
      {
        heading: "Check assumptions, then decide",
        paragraphs: [
          "Every test rests on assumptions, such as roughly normal data or equal variances. Check them with plots before trusting the result.",
          "When in doubt, a regression model is often the most flexible choice because it can adjust for other factors at the same time.",
        ],
      },
    ],
  },
  {
    slug: "how-to-read-a-scientific-study",
    title: "How to Read a Scientific Study",
    summary:
      "A checklist for reading a health study critically, from the design down to the conclusions.",
    field: "General",
    relatedTerms: ["confounding", "bias", "confidence-interval", "randomized-controlled-trial"],
    author: AUTHOR,
    lastReviewed: D,
    body: [
      {
        heading: "Start with the design",
        paragraphs: [
          "The study design shapes what you can conclude. A randomized controlled trial supports cause-and-effect claims far better than an observational study.",
          "For observational studies, ask how the authors handled confounding, the hidden factors that can create fake associations.",
        ],
      },
      {
        heading: "Look past the p-value",
        paragraphs: [
          "Find the effect size and its confidence interval, not just whether a result was significant. A significant result can still be too small to matter.",
          "Check whether the outcome measured is one that patients actually care about, or a stand-in that may not translate to real benefit.",
        ],
      },
      {
        heading: "Question the conclusions",
        paragraphs: [
          "Do the conclusions match the data, or do they overreach? Watch for causal language attached to observational findings.",
          "Consider who was studied. Results from one group may not apply to patients who differ in age, sex, or health.",
        ],
      },
    ],
  },
];

export const guidesMeta: GuideMeta[] = guides.map(
  ({ slug, title, summary, field, relatedTerms, author, lastReviewed }) => ({
    slug,
    title,
    summary,
    field,
    relatedTerms,
    author,
    lastReviewed,
  }),
);

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
