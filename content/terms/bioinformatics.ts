import type { TermInput } from "@/types/dictionary";

const AUTHOR = "BiostatDictionary Editorial Team";
const REVIEWER = "[Reviewer name — replace in content]";
const D = "2026-07-18";

export const terms: TermInput[] = [
  {
    slug: "dna",
    term: "DNA",
    abbreviation: "DNA",
    aliases: ["deoxyribonucleic acid"],
    field: "Bioinformatics",
    category: "Molecular Biology Foundations",
    shortDefinition:
      "DNA is the molecule that stores the genetic instructions used to build and run a living thing.",
    simpleExplanation:
      "DNA is a long chain made of four building blocks, labeled A, C, G, and T. The order of these letters spells out instructions, much like letters spell words. Cells read these instructions to make the parts they need.",
    whyItMatters:
      "Almost all of biology and medicine traces back to DNA. Reading and comparing DNA lets us study disease, ancestry, and how organisms work.",
    whenItIsUsed:
      "Whenever researchers study genes, mutations, or inheritance, or when a sample is sequenced.",
    example:
      "A short stretch of DNA might read ATGCGT, and a change of one letter can alter the protein a gene makes.",
    interpretation:
      "The sequence of letters is the raw information; bioinformatics tools turn it into meaning.",
    commonMistakes: [
      "Confusing DNA (long-term storage) with RNA (a working copy used to make proteins).",
    ],
    relatedTerms: ["rna", "gene", "genome", "protein", "variant-calling"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "rna",
    term: "RNA",
    abbreviation: "RNA",
    aliases: ["ribonucleic acid"],
    field: "Bioinformatics",
    category: "Molecular Biology Foundations",
    shortDefinition:
      "RNA is a molecule that carries and acts on the instructions copied from DNA.",
    simpleExplanation:
      "If DNA is the master cookbook kept safe in the cell, RNA is the working copy of a single recipe taken to the kitchen. The most familiar type, messenger RNA, carries a gene's instructions to the machinery that builds proteins.",
    whyItMatters:
      "Measuring RNA shows which genes are switched on, which reveals how cells behave in health and disease.",
    whenItIsUsed:
      "In studies of gene activity, such as RNA sequencing experiments.",
    example:
      "A tumor sample may show high RNA levels for genes that drive cell growth.",
    interpretation:
      "More RNA from a gene usually means that gene is more active, though not always.",
    commonMistakes: [
      "Assuming RNA amount always matches protein amount; the link is imperfect.",
    ],
    relatedTerms: ["dna", "gene", "rna-sequencing", "transcriptome", "differential-expression"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "gene",
    term: "Gene",
    field: "Bioinformatics",
    category: "Molecular Biology Foundations",
    shortDefinition:
      "A gene is a stretch of DNA that carries the instructions for making a product, usually a protein.",
    simpleExplanation:
      "Think of a gene as one recipe in the DNA cookbook. It tells the cell how to build a specific protein or functional molecule. Humans have roughly 20,000 protein-coding genes.",
    whyItMatters:
      "Genes shape traits and disease risk. Studying which genes are active or altered is central to modern biology.",
    whenItIsUsed:
      "In genetics, genomics, and any analysis that maps data back to specific genes.",
    example:
      "The BRCA1 gene, when altered, raises the risk of breast and ovarian cancer.",
    interpretation:
      "A gene's identity is fixed, but how strongly it is expressed can vary between cells and conditions.",
    relatedTerms: ["dna", "rna", "genome", "protein", "gene-ontology"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "genome",
    term: "Genome",
    field: "Bioinformatics",
    category: "Genomics",
    shortDefinition:
      "A genome is the complete set of DNA in an organism.",
    simpleExplanation:
      "It is the full instruction manual for building and running a living thing, including all its genes and the stretches in between. The human genome has about 3 billion DNA letters.",
    whyItMatters:
      "Reading whole genomes lets scientists find disease-causing changes and compare species and individuals.",
    whenItIsUsed:
      "In whole-genome sequencing, comparative genomics, and reference-based analyses.",
    example:
      "Sequencing a patient's genome can reveal a rare mutation behind an unexplained illness.",
    relatedTerms: ["dna", "gene", "reference-genome", "variant-calling", "genomics"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "transcriptome",
    term: "Transcriptome",
    field: "Bioinformatics",
    category: "Transcriptomics",
    shortDefinition:
      "The transcriptome is the full set of RNA molecules present in a cell or sample at a given time.",
    simpleExplanation:
      "While the genome is fixed, the transcriptome is a snapshot of which genes are active right now. It changes with cell type, time, and conditions, so it captures what a cell is actually doing.",
    whyItMatters:
      "Comparing transcriptomes shows how cells respond to disease, treatment, or environment.",
    whenItIsUsed:
      "In RNA sequencing studies that measure gene activity across conditions.",
    example:
      "The transcriptome of a liver cell differs sharply from that of a neuron, even though both share the same genome.",
    relatedTerms: ["rna", "rna-sequencing", "gene", "differential-expression", "single-cell-rna-sequencing"],
    difficulty: "Intermediate",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "rna-sequencing",
    term: "RNA Sequencing",
    abbreviation: "RNA-seq",
    aliases: ["rnaseq", "rna seq"],
    field: "Bioinformatics",
    category: "RNA Sequencing",
    shortDefinition:
      "RNA sequencing measures which genes are active by reading and counting the RNA in a sample.",
    simpleExplanation:
      "The method converts RNA into readable sequences, then counts how many come from each gene. More reads for a gene means that gene was more active. It gives a genome-wide picture of gene activity.",
    whyItMatters:
      "It reveals how gene activity changes between healthy and diseased tissue, or before and after treatment, guiding biology and drug discovery.",
    whenItIsUsed:
      "To compare gene expression between conditions, discover new transcripts, or profile tissues.",
    example:
      "Researchers use RNA-seq to find which genes are turned up in tumor tissue compared with normal tissue.",
    interpretation:
      "Raw read counts must be normalized before comparison, and differences are tested for statistical significance.",
    assumptions: [
      "Samples are of good quality and comparable after normalization.",
    ],
    commonMistakes: [
      "Comparing raw counts without normalizing for sequencing depth and gene length.",
    ],
    relatedTerms: [
      "differential-expression",
      "count-matrix",
      "normalization",
      "transcriptome",
      "single-cell-rna-sequencing",
    ],
    difficulty: "Intermediate",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "single-cell-rna-sequencing",
    term: "Single Cell RNA Sequencing",
    abbreviation: "scRNA-seq",
    aliases: ["scrna seq", "single-cell rna-seq", "scrnaseq"],
    field: "Bioinformatics",
    category: "Single Cell Analysis",
    shortDefinition:
      "Single cell RNA sequencing measures gene activity in thousands of individual cells, one cell at a time.",
    simpleExplanation:
      "Ordinary RNA-seq averages all cells in a sample, hiding differences between them. Single cell RNA-seq reads each cell separately, so you can see distinct cell types and states within one tissue.",
    whyItMatters:
      "Tissues are mixtures of many cell types. Studying cells individually reveals rare populations and how cells differ, which bulk methods miss.",
    whenItIsUsed:
      "To map cell types in a tissue, study development, or find rare cells such as certain immune cells.",
    example:
      "A single cell study of a tumor can separate cancer cells from immune and support cells and profile each group.",
    interpretation:
      "Cells are usually clustered and then labeled by cell type based on marker genes.",
    assumptions: [
      "Cells survive the process well and technical noise is handled during analysis.",
    ],
    commonMistakes: [
      "Ignoring quality control, so dying cells or droplets with two cells distort the results.",
    ],
    relatedTerms: [
      "rna-sequencing",
      "clustering",
      "cell-type-annotation",
      "dimensionality-reduction",
      "spatial-transcriptomics",
    ],
    difficulty: "Advanced",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "spatial-transcriptomics",
    term: "Spatial Transcriptomics",
    field: "Bioinformatics",
    category: "Spatial Biology",
    shortDefinition:
      "Spatial transcriptomics measures gene activity while keeping track of where each cell sits in the tissue.",
    simpleExplanation:
      "Regular sequencing tells you which genes are active but loses the map of where the cells were. Spatial methods keep that map, so you can see gene activity in the context of tissue structure.",
    whyItMatters:
      "Location matters in biology. Knowing where genes are active helps explain how neighboring cells interact in tumors, brains, and developing organs.",
    whenItIsUsed:
      "To study tissue architecture, tumor microenvironments, and cell-to-cell communication.",
    example:
      "In a tumor slice, spatial data can show immune cells active only at the tumor's edge.",
    interpretation:
      "Results combine gene activity with tissue coordinates, so analysis blends expression and geometry.",
    relatedTerms: ["single-cell-rna-sequencing", "transcriptome", "rna-sequencing", "cell-type-annotation", "clustering"],
    difficulty: "Advanced",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "differential-expression",
    term: "Differential Expression",
    abbreviation: "DE",
    field: "Bioinformatics",
    category: "RNA Sequencing",
    shortDefinition:
      "Differential expression finds genes whose activity differs between two or more conditions.",
    simpleExplanation:
      "After measuring gene activity, you compare groups, such as diseased versus healthy, to see which genes change. Genes that go up or down more than expected by chance are called differentially expressed.",
    whyItMatters:
      "These genes point to the biology behind a condition and can suggest drug targets or biomarkers.",
    whenItIsUsed:
      "In RNA-seq and microarray studies comparing conditions or treatments.",
    example:
      "Comparing tumor and normal samples reveals 300 genes with higher activity in the tumor.",
    interpretation:
      "Results combine a fold change (size of the difference) with an adjusted p-value or FDR (confidence), often shown in a volcano plot.",
    assumptions: [
      "Counts are properly normalized and a suitable statistical model is used.",
    ],
    commonMistakes: [
      "Ranking genes by fold change alone, ignoring statistical significance and multiple testing.",
    ],
    relatedTerms: [
      "rna-sequencing",
      "count-matrix",
      "normalization",
      "fold-change",
      "false-discovery-rate",
    ],
    difficulty: "Intermediate",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "count-matrix",
    term: "Count Matrix",
    field: "Bioinformatics",
    category: "RNA Sequencing",
    shortDefinition:
      "A count matrix is a table of how many sequencing reads map to each gene in each sample.",
    simpleExplanation:
      "It is the starting spreadsheet for many sequencing analyses. Rows are genes, columns are samples or cells, and each cell of the table holds a count of reads. Almost every downstream step begins here.",
    whyItMatters:
      "It is the shared input for differential expression, clustering, and most RNA-seq analysis.",
    whenItIsUsed:
      "After reads are aligned and counted, before normalization and statistical testing.",
    example:
      "A single cell count matrix might have 20,000 genes as rows and 10,000 cells as columns.",
    interpretation:
      "Raw counts depend on sequencing depth, so they are normalized before comparison.",
    commonMistakes: [
      "Feeding raw counts into methods that expect normalized or transformed values.",
    ],
    relatedTerms: ["rna-sequencing", "normalization", "differential-expression", "single-cell-rna-sequencing", "read-mapping"],
    difficulty: "Intermediate",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "normalization",
    term: "Normalization",
    field: "Bioinformatics",
    category: "Quality Control",
    shortDefinition:
      "Normalization adjusts data so samples can be fairly compared despite technical differences.",
    simpleExplanation:
      "Different samples are often measured with different depth or scale. Normalization rescales the numbers so that a difference you see reflects real biology, not just that one sample was sequenced more deeply.",
    whyItMatters:
      "Without it, technical quirks masquerade as biological differences, leading to false conclusions.",
    whenItIsUsed:
      "In RNA-seq, single cell analysis, proteomics, and many other high-throughput methods.",
    example:
      "If one RNA-seq sample has twice the reads of another, normalization prevents its genes from all looking more active.",
    interpretation:
      "The right normalization depends on the technology and the question; there is no single universal method.",
    commonMistakes: [
      "Applying a normalization method designed for one data type to a very different one.",
    ],
    relatedTerms: ["count-matrix", "rna-sequencing", "differential-expression", "quality-control", "single-cell-rna-sequencing"],
    difficulty: "Intermediate",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "fold-change",
    term: "Fold Change",
    field: "Bioinformatics",
    category: "RNA Sequencing",
    shortDefinition:
      "Fold change measures how many times higher or lower a value is between two conditions.",
    simpleExplanation:
      "If a gene's activity doubles from one condition to another, that is a two-fold change. It is often reported on a log2 scale, where +1 means doubling and −1 means halving, so increases and decreases look symmetric.",
    whyItMatters:
      "It captures the size of a change, which pairs with statistical significance to judge importance.",
    whenItIsUsed:
      "In differential expression and other comparison analyses.",
    example:
      "A log2 fold change of 2 means the gene is four times more active in the treated group.",
    interpretation:
      "Positive values mean an increase, negative a decrease. Large fold changes with weak significance can be noise.",
    commonMistakes: [
      "Focusing on large fold changes for low-count genes, where estimates are unstable.",
    ],
    relatedTerms: ["differential-expression", "rna-sequencing", "false-discovery-rate", "volcano-plot", "count-matrix"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "volcano-plot",
    term: "Volcano Plot",
    field: "Bioinformatics",
    category: "RNA Sequencing",
    shortDefinition:
      "A volcano plot displays differential expression results by plotting effect size against statistical significance.",
    simpleExplanation:
      "Each point is a gene. The horizontal position shows how big the change is (fold change), and the vertical position shows how confident we are (significance). The most interesting genes sit high and to the sides.",
    whyItMatters:
      "It lets you spot, at a glance, genes that are both strongly changed and statistically convincing.",
    whenItIsUsed:
      "To summarize the output of a differential expression analysis.",
    example:
      "Genes in the top corners of a volcano plot are strongly up- or down-regulated with high confidence.",
    interpretation:
      "Points far from the center horizontally have large changes; points high up have small p-values.",
    commonMistakes: [
      "Selecting genes by height alone while ignoring the size of the change, or vice versa.",
    ],
    relatedTerms: ["differential-expression", "fold-change", "false-discovery-rate", "rna-sequencing", "p-value"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "sequence-alignment",
    term: "Sequence Alignment",
    aliases: ["alignment"],
    field: "Bioinformatics",
    category: "Sequence Analysis",
    shortDefinition:
      "Sequence alignment lines up DNA, RNA, or protein sequences to reveal where they match and differ.",
    simpleExplanation:
      "By sliding sequences against each other and allowing gaps, alignment finds the arrangement that maximizes matching letters. This shows shared regions and pinpoints differences like mutations.",
    whyItMatters:
      "It is a foundational step for comparing genes, finding mutations, and placing sequencing reads on a genome.",
    whenItIsUsed:
      "In read mapping, evolutionary comparisons, and searching databases for similar sequences.",
    example:
      "Aligning a patient's gene to a reference reveals a single-letter change linked to disease.",
    interpretation:
      "Higher alignment scores mean stronger similarity; gaps represent insertions or deletions.",
    commonMistakes: [
      "Trusting a high-scoring alignment that is actually a coincidence in short sequences.",
    ],
    relatedTerms: ["read-mapping", "reference-genome", "variant-calling", "dna", "blast"],
    difficulty: "Intermediate",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "read-mapping",
    term: "Read Mapping",
    aliases: ["read alignment"],
    field: "Bioinformatics",
    category: "Genome Alignment",
    shortDefinition:
      "Read mapping finds where each short sequencing read belongs on a reference genome.",
    simpleExplanation:
      "Sequencing produces millions of short fragments called reads. Read mapping figures out the spot on the reference genome each fragment came from, like fitting puzzle pieces onto a known picture.",
    whyItMatters:
      "It is the first big step after sequencing and underlies variant calling and expression counting.",
    whenItIsUsed:
      "In nearly every DNA and RNA sequencing pipeline that uses a reference genome.",
    example:
      "A tool maps billions of reads to the human genome so variants can be found at each position.",
    interpretation:
      "Mapping quality scores indicate how confidently a read was placed; low scores suggest repetitive or ambiguous regions.",
    commonMistakes: [
      "Ignoring reads that map to many places, which can create false signals in repetitive regions.",
    ],
    relatedTerms: ["sequence-alignment", "reference-genome", "variant-calling", "count-matrix", "quality-control"],
    difficulty: "Intermediate",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "reference-genome",
    term: "Reference Genome",
    field: "Bioinformatics",
    category: "Genomics",
    shortDefinition:
      "A reference genome is a standard, agreed-upon genome sequence used as a map for comparison.",
    simpleExplanation:
      "Instead of assembling every genome from scratch, researchers compare new data to a shared reference. It acts like a master map so results from different labs can be lined up and compared.",
    whyItMatters:
      "It makes analyses consistent and comparable across studies and enables efficient read mapping.",
    whenItIsUsed:
      "In read mapping, variant calling, and most reference-based genomic analyses.",
    example:
      "Human sequencing data are often mapped to the GRCh38 reference genome.",
    interpretation:
      "A reference is a representative sequence, not a perfect or universal one; it can miss variation present in some populations.",
    commonMistakes: [
      "Mixing coordinates from different reference versions, which shifts positions and breaks comparisons.",
    ],
    relatedTerms: ["genome", "read-mapping", "variant-calling", "sequence-alignment", "genomics"],
    difficulty: "Intermediate",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "variant-calling",
    term: "Variant Calling",
    field: "Bioinformatics",
    category: "Variant Analysis",
    shortDefinition:
      "Variant calling identifies places where a sample's DNA differs from the reference genome.",
    simpleExplanation:
      "After reads are mapped, software scans each position and flags spots where the sample consistently disagrees with the reference. These differences, or variants, may explain traits or disease.",
    whyItMatters:
      "Variants are the raw material of genetics, from rare disease diagnosis to cancer profiling.",
    whenItIsUsed:
      "In whole-genome, whole-exome, and targeted sequencing studies.",
    example:
      "Variant calling in a patient reveals a single DNA change known to cause cystic fibrosis.",
    interpretation:
      "Each call comes with a quality score; low-quality calls in messy regions need extra scrutiny.",
    assumptions: [
      "Reads are well mapped and sequencing errors are modeled.",
    ],
    commonMistakes: [
      "Accepting all calls without filtering for quality, depth, and known error-prone regions.",
    ],
    relatedTerms: ["read-mapping", "reference-genome", "genome", "quality-control", "dna"],
    difficulty: "Advanced",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "protein",
    term: "Protein",
    field: "Bioinformatics",
    category: "Proteomics",
    shortDefinition:
      "A protein is a molecule built from amino acids that does most of the work inside cells.",
    simpleExplanation:
      "Proteins are the cell's machines and building blocks. Their instructions come from genes via RNA, and the order of amino acids folds into a shape that determines what the protein does.",
    whyItMatters:
      "Most drugs target proteins, and protein levels often reflect biology more directly than gene activity.",
    whenItIsUsed:
      "In proteomics, structural biology, and drug discovery.",
    example:
      "Insulin is a protein that helps control blood sugar.",
    interpretation:
      "A protein's function depends on its shape, which depends on its amino acid sequence.",
    relatedTerms: ["gene", "rna", "proteomics", "gene-ontology", "dna"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "proteomics",
    term: "Proteomics",
    field: "Bioinformatics",
    category: "Proteomics",
    shortDefinition:
      "Proteomics is the large-scale study of all the proteins in a cell, tissue, or organism.",
    simpleExplanation:
      "Just as genomics studies all genes, proteomics studies all proteins at once. It measures which proteins are present and in what amounts, usually with mass spectrometry.",
    whyItMatters:
      "Proteins carry out cell functions, so measuring them gives a direct read on biological state and drug response.",
    whenItIsUsed:
      "To find biomarkers, study disease mechanisms, and complement gene expression data.",
    example:
      "Proteomics of blood can reveal proteins that rise early in a disease.",
    relatedTerms: ["protein", "metabolomics", "multiomics", "gene-ontology", "pathway-analysis"],
    difficulty: "Advanced",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "gene-ontology",
    term: "Gene Ontology",
    abbreviation: "GO",
    field: "Bioinformatics",
    category: "Pathway Analysis",
    shortDefinition:
      "Gene Ontology is a standard vocabulary that describes what genes and their products do.",
    simpleExplanation:
      "It is a shared dictionary that labels genes by their biological role, the process they take part in, and where in the cell they act. These consistent labels let software summarize long gene lists.",
    whyItMatters:
      "It turns a raw list of genes into biological themes, making results interpretable and comparable.",
    whenItIsUsed:
      "In enrichment analysis after differential expression to find over-represented functions.",
    example:
      "A list of up-regulated genes may be enriched for the Gene Ontology term 'immune response'.",
    interpretation:
      "Enrichment shows which categories appear more than expected by chance, hinting at the biology at play.",
    commonMistakes: [
      "Over-interpreting broad categories or ignoring the background gene set used for the test.",
    ],
    relatedTerms: ["pathway-analysis", "gene", "differential-expression", "protein", "proteomics"],
    difficulty: "Intermediate",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "pathway-analysis",
    term: "Pathway Analysis",
    field: "Bioinformatics",
    category: "Pathway Analysis",
    shortDefinition:
      "Pathway analysis checks whether a set of genes is linked to known biological pathways more than expected.",
    simpleExplanation:
      "Genes work together in pathways, like assembly lines. Instead of reading genes one by one, pathway analysis asks which known processes your list of interesting genes belongs to, revealing the bigger picture.",
    whyItMatters:
      "It moves from a list of genes to biological meaning, suggesting which processes drive a condition.",
    whenItIsUsed:
      "After differential expression or variant studies to interpret gene sets.",
    example:
      "Genes changed in a tumor may cluster in a cell-cycle pathway, pointing to uncontrolled growth.",
    interpretation:
      "A significant pathway is over-represented among your genes, but this suggests, not proves, involvement.",
    commonMistakes: [
      "Treating pathway databases as complete; they are curated and can be biased toward well-studied genes.",
    ],
    relatedTerms: ["gene-ontology", "differential-expression", "gene", "proteomics", "multiomics"],
    difficulty: "Intermediate",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "cell-type-annotation",
    term: "Cell Type Annotation",
    field: "Bioinformatics",
    category: "Single Cell Analysis",
    shortDefinition:
      "Cell type annotation labels groups of cells in single cell data with their biological identity.",
    simpleExplanation:
      "After single cell analysis groups similar cells into clusters, annotation gives each cluster a name, such as T cell or neuron, based on the marker genes it expresses.",
    whyItMatters:
      "Clusters are meaningless until named. Annotation turns them into interpretable cell types for biological conclusions.",
    whenItIsUsed:
      "In single cell and spatial studies after clustering.",
    example:
      "A cluster with high CD3 gene activity is annotated as T cells.",
    interpretation:
      "Confidence depends on how specific the marker genes are and how well the clusters separate.",
    commonMistakes: [
      "Assigning a single label to a mixed cluster that actually contains several cell types.",
    ],
    relatedTerms: ["single-cell-rna-sequencing", "clustering", "spatial-transcriptomics", "dimensionality-reduction", "gene"],
    difficulty: "Advanced",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "quality-control",
    term: "Quality Control",
    abbreviation: "QC",
    field: "Bioinformatics",
    category: "Quality Control",
    shortDefinition:
      "Quality control checks that sequencing data are good enough to trust before analysis.",
    simpleExplanation:
      "Before drawing conclusions, you inspect the data for problems: low-quality reads, contamination, or failed samples. Catching these early prevents wrong results later.",
    whyItMatters:
      "Garbage in, garbage out. Skipping quality control lets technical problems masquerade as biology.",
    whenItIsUsed:
      "At the start of every sequencing pipeline and after major processing steps.",
    example:
      "Quality control flags a sample with unusually few genes detected, so it is removed before analysis.",
    interpretation:
      "Standard metrics have rough thresholds, but context and the experiment decide what counts as acceptable.",
    commonMistakes: [
      "Using the same fixed cutoffs for every experiment regardless of tissue or technology.",
    ],
    relatedTerms: ["normalization", "read-mapping", "variant-calling", "count-matrix", "single-cell-rna-sequencing"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "blast",
    term: "BLAST",
    abbreviation: "BLAST",
    aliases: ["basic local alignment search tool"],
    field: "Bioinformatics",
    category: "Bioinformatics Software",
    shortDefinition:
      "BLAST is a widely used tool that searches databases for sequences similar to a query.",
    simpleExplanation:
      "Give BLAST a DNA or protein sequence and it quickly finds close matches in huge databases. It is like a search engine for biological sequences, helping identify genes and their likely function.",
    whyItMatters:
      "It is one of the most-used bioinformatics tools, essential for identifying unknown sequences.",
    whenItIsUsed:
      "To find what an unknown sequence is, or to find related sequences across species.",
    example:
      "Pasting a mystery DNA sequence into BLAST reveals it matches a known bacterial gene.",
    interpretation:
      "The E-value indicates how likely a match is by chance; smaller E-values mean more trustworthy hits.",
    commonMistakes: [
      "Trusting matches with high E-values, which can be coincidental.",
    ],
    relatedTerms: ["sequence-alignment", "protein", "dna", "reference-genome", "gene"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "fastq",
    term: "FASTQ",
    field: "Bioinformatics",
    category: "Bioinformatics File Formats",
    shortDefinition:
      "FASTQ is a text file format that stores sequencing reads along with a quality score for each letter.",
    simpleExplanation:
      "It is the raw output of most sequencers. For each read it records the sequence of letters and, importantly, how confident the machine was about each letter, which downstream tools use to judge reliability.",
    whyItMatters:
      "It is the universal starting point for sequencing analysis, so nearly every pipeline reads FASTQ files.",
    whenItIsUsed:
      "Right after sequencing, before quality control and read mapping.",
    example:
      "A FASTQ file holds millions of reads, each with a sequence line and a matching line of quality scores.",
    interpretation:
      "Quality scores are encoded as characters; higher scores mean the base call is more reliable.",
    commonMistakes: [
      "Misreading the quality encoding version, which shifts all scores.",
    ],
    relatedTerms: ["read-mapping", "quality-control", "reference-genome", "variant-calling", "rna-sequencing"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "multiomics",
    term: "Multiomics",
    aliases: ["multi-omics"],
    field: "Bioinformatics",
    category: "Multiomics",
    shortDefinition:
      "Multiomics combines several types of biological data, such as genomics and proteomics, to study a system more fully.",
    simpleExplanation:
      "Each 'omics' layer, like DNA, RNA, proteins, or metabolites, tells part of the story. Multiomics stitches these layers together so you can see how they connect, giving a richer view than any single layer.",
    whyItMatters:
      "Biology is layered. Integrating data types can reveal mechanisms that one measurement alone would miss.",
    whenItIsUsed:
      "In complex disease studies and systems biology that need more than one data type.",
    example:
      "A study links DNA variants, gene activity, and protein levels to explain why a tumor resists treatment.",
    interpretation:
      "Integration is powerful but harder; each layer has its own noise and scale that must be reconciled.",
    commonMistakes: [
      "Merging layers without accounting for their different technologies and biases.",
    ],
    relatedTerms: ["proteomics", "metabolomics", "genomics", "pathway-analysis", "data-integration"],
    difficulty: "Advanced",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
];

export default terms;
