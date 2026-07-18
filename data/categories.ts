import type { Category, Field } from "@/types/dictionary";

/** Turn a human name into a URL-safe slug. */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/['"’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function build(field: Field, names: string[]): Category[] {
  return names.map((name) => ({
    slug: slugify(name),
    name,
    field,
    description: `${name} terms in ${field}.`,
  }));
}

export const categories: Category[] = [
  ...build("Biostatistics", [
    "Statistical Foundations",
    "Probability",
    "Probability Distributions",
    "Descriptive Statistics",
    "Sampling",
    "Study Design",
    "Hypothesis Testing",
    "Estimation",
    "Regression",
    "Generalized Linear Models",
    "Mixed Models",
    "Longitudinal Data",
    "Survival Analysis",
    "Bayesian Statistics",
    "Causal Inference",
    "Clinical Trials",
    "Diagnostic Testing",
    "Missing Data",
    "Multiple Testing",
    "Meta Analysis",
    "Statistical Software",
  ]),
  ...build("Bioinformatics", [
    "Molecular Biology Foundations",
    "Genomics",
    "Transcriptomics",
    "Epigenomics",
    "Proteomics",
    "Metabolomics",
    "Sequence Analysis",
    "Genome Alignment",
    "Variant Analysis",
    "RNA Sequencing",
    "Single Cell Analysis",
    "Spatial Biology",
    "Pathway Analysis",
    "Gene Regulation",
    "Multiomics",
    "Bioinformatics Algorithms",
    "Bioinformatics File Formats",
    "Bioinformatics Software",
    "Quality Control",
    "Data Integration",
  ]),
  ...build("Epidemiology", [
    "Epidemiologic Measures",
    "Study Designs",
    "Disease Surveillance",
    "Screening",
    "Diagnostic Accuracy",
    "Bias",
    "Confounding",
    "Effect Modification",
    "Causal Inference",
    "Clinical Epidemiology",
    "Cancer Epidemiology",
    "Infectious Disease Epidemiology",
    "Environmental Epidemiology",
    "Genetic Epidemiology",
    "Molecular Epidemiology",
    "Social Epidemiology",
    "Public Health Research",
    "Population Health",
    "Outbreak Investigation",
  ]),
  ...build("Data Science", [
    "Data Collection",
    "Data Cleaning",
    "Data Preparation",
    "Exploratory Analysis",
    "Visualization",
    "Feature Engineering",
    "Machine Learning",
    "Model Evaluation",
    "Regression Methods",
    "Classification Methods",
    "Clustering Methods",
    "Dimensionality Reduction",
    "Time Series",
    "Natural Language Processing",
    "Artificial Intelligence",
    "Databases",
    "Data Pipelines",
    "R Programming",
    "Python Programming",
    "SQL",
    "Cloud Computing",
    "Reproducible Analysis",
  ]),
];

export const categoriesByField: Record<Field, Category[]> = {
  Biostatistics: categories.filter((c) => c.field === "Biostatistics"),
  Bioinformatics: categories.filter((c) => c.field === "Bioinformatics"),
  Epidemiology: categories.filter((c) => c.field === "Epidemiology"),
  "Data Science": categories.filter((c) => c.field === "Data Science"),
};

const categoryBySlugMap = new Map(categories.map((c) => [c.slug, c]));
export function getCategoryBySlug(slug: string): Category | undefined {
  return categoryBySlugMap.get(slug);
}

const fieldBySlugMap: Record<string, Field> = {
  biostatistics: "Biostatistics",
  bioinformatics: "Bioinformatics",
  epidemiology: "Epidemiology",
  "data-science": "Data Science",
};
export function fieldFromSlug(slug: string): Field | undefined {
  return fieldBySlugMap[slug];
}
export function fieldToSlug(field: Field): string {
  return slugify(field);
}
