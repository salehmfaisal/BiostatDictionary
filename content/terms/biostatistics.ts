import type { TermInput } from "@/types/dictionary";

const AUTHOR = "BiostatDictionary Editorial Team";
const REVIEWER = "[Reviewer name — replace in content]";
const D = "2026-07-18";

export const terms: TermInput[] = [
  {
    slug: "hazard-ratio",
    term: "Hazard Ratio",
    abbreviation: "HR",
    aliases: ["relative hazard"],
    field: "Biostatistics",
    category: "Survival Analysis",
    shortDefinition:
      "A hazard ratio compares how quickly an event happens in one group with how quickly it happens in another group over time.",
    simpleExplanation:
      "Imagine two groups of patients getting different treatments. Researchers follow both groups and note when an event happens, such as death, recovery, or the disease coming back. The hazard ratio compares the speed of that event between the two groups across the whole study period, not just at the end.",
    whyItMatters:
      "Many health studies care about how long people stay well, not only whether an event eventually happens. The hazard ratio captures timing, so it can show that a treatment delays a bad outcome even when the same number of events occurs in both groups.",
    whenItIsUsed:
      "It is reported in survival analysis, most often from a Cox proportional hazards model, in clinical trials and cohort studies that track time until an event.",
    example:
      "In a cancer trial, a hazard ratio of 0.70 for a new drug means that at any moment during the study, patients on the drug had about a 30% lower rate of death than patients on the standard treatment.",
    formula: "HR = \\dfrac{h_1(t)}{h_0(t)}",
    formulaExplanation:
      "h_1(t) is the hazard (instantaneous event rate) in the treated group at time t, and h_0(t) is the hazard in the comparison group at the same time. A proportional hazards model assumes this ratio stays roughly constant over time.",
    interpretation:
      "A value of 1 means the event rate is similar in both groups. A value above 1 means the event happens faster in the first group. A value below 1 means it happens more slowly.",
    assumptions: [
      "The ratio of hazards between groups stays roughly constant over time (proportional hazards).",
      "Censoring is unrelated to the chance of the event (non-informative censoring).",
    ],
    commonMistakes: [
      "Treating a hazard ratio as if it were a risk ratio. It compares event rates over time, not the final count of events.",
      "Reading a hazard ratio as a change in survival time. A hazard ratio of 0.5 does not mean people live twice as long.",
    ],
    relatedTerms: [
      "kaplan-meier-curve",
      "cox-proportional-hazards-model",
      "risk-ratio",
      "censoring",
      "confidence-interval",
    ],
    references: [
      {
        citation:
          "Cox, D. R. (1972). Regression models and life-tables. Journal of the Royal Statistical Society, Series B.",
      },
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
    slug: "confidence-interval",
    term: "Confidence Interval",
    abbreviation: "CI",
    field: "Biostatistics",
    category: "Estimation",
    shortDefinition:
      "A confidence interval is a range of values that is likely to contain the true value you are trying to estimate.",
    simpleExplanation:
      "When you measure something in a sample, your single number is only an estimate. A confidence interval gives you a range around that estimate to show how much it might move if you repeated the study. A wider range means more uncertainty.",
    whyItMatters:
      "A single number can look precise even when it is shaky. The interval shows how much the estimate could vary, which is often more useful for decisions than the estimate alone.",
    whenItIsUsed:
      "It accompanies almost any estimate: a mean, a proportion, a risk ratio, or a treatment effect. A 95% interval is the most common choice.",
    example:
      "A study reports that a drug lowers blood pressure by 8 mmHg with a 95% confidence interval from 3 to 13. The best estimate is 8, but the true effect is plausibly anywhere from 3 to 13.",
    formula: "\\bar{x} \\pm z \\cdot \\dfrac{s}{\\sqrt{n}}",
    formulaExplanation:
      "For a mean, x̄ is the sample average, s is the standard deviation, n is the sample size, and z is a value from the normal distribution (about 1.96 for 95%). The term after ± is the margin of error.",
    interpretation:
      "A 95% interval means that if you repeated the study many times, about 95% of the intervals built this way would contain the true value. It does not mean there is a 95% chance the true value is inside this one interval.",
    assumptions: [
      "The sample is representative of the population.",
      "The method matches the data (for example, large enough samples or a correct model).",
    ],
    commonMistakes: [
      "Saying there is a 95% probability the true value lies in a specific interval. The confidence refers to the long-run procedure, not one interval.",
      "Treating a result as meaningful only if the interval excludes a null value, ignoring the width and the practical size of the effect.",
    ],
    relatedTerms: [
      "p-value",
      "standard-error",
      "point-estimate",
      "statistical-significance",
      "sampling-distribution",
    ],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "p-value",
    term: "P-Value",
    aliases: ["probability value"],
    field: "Biostatistics",
    category: "Hypothesis Testing",
    shortDefinition:
      "A p-value is the probability of seeing results at least as extreme as yours if there were really no effect.",
    simpleExplanation:
      "Start by assuming nothing is going on, which is called the null hypothesis. The p-value asks: if that assumption were true, how surprising is my data? A small p-value means the data would be unusual under 'no effect', which makes people doubt the assumption.",
    whyItMatters:
      "P-values are one common way to judge whether an observed pattern could easily be due to chance. They are used across almost every field that runs experiments.",
    whenItIsUsed:
      "In hypothesis tests such as t-tests, chi-squared tests, and regression coefficients, to help decide whether a result is worth taking seriously.",
    example:
      "A trial finds a p-value of 0.03 for a new drug. If the drug truly did nothing, data this striking would appear only about 3% of the time, so researchers lean toward the drug having a real effect.",
    interpretation:
      "Smaller p-values give more evidence against the null hypothesis. A common cutoff is 0.05, but the cutoff is a convention, not a law of nature.",
    assumptions: [
      "The statistical test matches the study design and data.",
      "The analysis was planned rather than chosen after seeing many results.",
    ],
    commonMistakes: [
      "Thinking the p-value is the probability that the null hypothesis is true. It is not.",
      "Treating p = 0.049 and p = 0.051 as completely different when they carry nearly the same evidence.",
      "Confusing statistical significance with a large or important effect.",
    ],
    relatedTerms: [
      "confidence-interval",
      "statistical-significance",
      "null-hypothesis",
      "type-i-error",
      "multiple-testing",
    ],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "null-hypothesis",
    term: "Null Hypothesis",
    abbreviation: "H0",
    field: "Biostatistics",
    category: "Hypothesis Testing",
    shortDefinition:
      "The null hypothesis is the starting assumption that there is no effect or no difference.",
    simpleExplanation:
      "Before testing, you set up a default position that says nothing interesting is happening, such as 'the two groups are the same'. The test then checks how well your data fits that default. If the fit is poor, you have evidence against it.",
    whyItMatters:
      "It gives a clear, testable baseline. Without a stated null, there is nothing precise to argue against and no way to compute a p-value.",
    whenItIsUsed:
      "In every classical hypothesis test, paired with an alternative hypothesis that describes the effect you suspect.",
    example:
      "To test a new painkiller, the null hypothesis might be 'the drug and placebo reduce pain by the same amount'. The alternative is that they differ.",
    interpretation:
      "You either reject the null hypothesis (the data are hard to explain by chance alone) or fail to reject it. Failing to reject is not the same as proving the null is true.",
    commonMistakes: [
      "Concluding that the null hypothesis is true when a test is not significant. Absence of evidence is not evidence of absence.",
    ],
    relatedTerms: ["p-value", "type-i-error", "type-ii-error", "statistical-power", "statistical-significance"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "type-i-error",
    term: "Type I Error",
    aliases: ["false positive", "alpha error"],
    field: "Biostatistics",
    category: "Hypothesis Testing",
    shortDefinition:
      "A Type I error is finding an effect that is not really there — a false alarm.",
    simpleExplanation:
      "If you reject the null hypothesis when it was actually true, you have made a Type I error. You concluded something is happening when it is not.",
    whyItMatters:
      "False positives can lead to useless treatments, wasted follow-up studies, and lost trust. Controlling them keeps science reliable.",
    whenItIsUsed:
      "Whenever you set a significance level. The chosen alpha, often 0.05, is the accepted chance of a Type I error.",
    example:
      "A study declares a supplement effective when it truly does nothing. Patients may take it for no benefit.",
    interpretation:
      "The significance level alpha is the long-run rate of Type I errors you are willing to accept.",
    commonMistakes: [
      "Running many tests without adjusting, which quietly raises the overall chance of at least one false positive.",
    ],
    relatedTerms: ["type-ii-error", "p-value", "statistical-power", "multiple-testing", "null-hypothesis"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "type-ii-error",
    term: "Type II Error",
    aliases: ["false negative", "beta error"],
    field: "Biostatistics",
    category: "Hypothesis Testing",
    shortDefinition:
      "A Type II error is missing a real effect — concluding nothing is there when something is.",
    simpleExplanation:
      "If you fail to reject the null hypothesis when it was actually false, you have made a Type II error. A real effect existed, but your study did not detect it, often because the sample was too small.",
    whyItMatters:
      "Missing a real benefit can stop a useful treatment from reaching patients. Understanding this error is the basis of power and sample size planning.",
    whenItIsUsed:
      "When designing studies and interpreting negative results, especially in small trials.",
    example:
      "A small trial of an effective drug shows no significant difference simply because it did not enrol enough patients.",
    interpretation:
      "The probability of a Type II error is called beta. Statistical power equals 1 minus beta.",
    commonMistakes: [
      "Reading a non-significant result as proof of no effect, when the study may have been underpowered.",
    ],
    relatedTerms: ["type-i-error", "statistical-power", "sample-size", "null-hypothesis", "p-value"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "statistical-power",
    term: "Statistical Power",
    field: "Biostatistics",
    category: "Study Design",
    shortDefinition:
      "Statistical power is the chance that a study will detect a real effect when one truly exists.",
    simpleExplanation:
      "Power is your study's ability to spot something real. A well-powered study is like a good camera: if there is something to see, it will catch it. Low power means you might miss it.",
    whyItMatters:
      "Underpowered studies waste resources and produce confusing results. Planning for adequate power protects against false negatives.",
    whenItIsUsed:
      "During study design to choose a sample size, and when interpreting negative findings.",
    example:
      "Researchers aim for 80% power, meaning that if the treatment truly works at the expected size, they have an 80% chance of getting a significant result.",
    formula: "\\text{Power} = 1 - \\beta",
    formulaExplanation:
      "Beta is the probability of a Type II error (missing a real effect). Power is the complement, so higher power means fewer missed effects.",
    interpretation:
      "Power rises with a larger sample, a bigger true effect, less noise, and a higher accepted false-positive rate.",
    assumptions: [
      "You have a reasonable guess of the effect size and variability before the study.",
    ],
    commonMistakes: [
      "Calculating power after the study using the observed effect, which adds nothing beyond the p-value.",
    ],
    relatedTerms: ["sample-size", "type-ii-error", "effect-size", "type-i-error", "null-hypothesis"],
    difficulty: "Intermediate",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "sample-size",
    term: "Sample Size",
    abbreviation: "n",
    field: "Biostatistics",
    category: "Study Design",
    shortDefinition:
      "Sample size is the number of people or units included in a study.",
    simpleExplanation:
      "It is simply how many participants or observations you collect. More data usually gives more precise and more trustworthy estimates, but also costs more time and money.",
    whyItMatters:
      "Too few participants and the study may miss real effects; too many wastes resources and can expose extra people to risk. Choosing the right number is a core planning step.",
    whenItIsUsed:
      "Set during study design through a sample size calculation that balances power, effect size, and variability.",
    example:
      "A trial calculates that it needs 400 patients per group to detect a 10% difference in recovery with 80% power.",
    interpretation:
      "Larger samples shrink confidence intervals and increase power, with diminishing returns as numbers grow very large.",
    commonMistakes: [
      "Picking a round number without a calculation, which risks an underpowered or wastefully large study.",
    ],
    relatedTerms: ["statistical-power", "effect-size", "confidence-interval", "standard-error", "type-ii-error"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "effect-size",
    term: "Effect Size",
    field: "Biostatistics",
    category: "Estimation",
    shortDefinition:
      "An effect size measures how big a difference or relationship is, not just whether it exists.",
    simpleExplanation:
      "A p-value tells you whether an effect is likely real. The effect size tells you how large it is. A tiny effect can be statistically significant in a huge study yet mean little in practice.",
    whyItMatters:
      "Decisions depend on size. A treatment that lowers risk by half matters more than one that lowers it by a hair, even if both are significant.",
    whenItIsUsed:
      "When reporting results, planning sample size, and combining studies in a meta-analysis.",
    example:
      "Two teaching methods differ with a standardized effect size (Cohen's d) of 0.8, a large gap, versus 0.1, which is barely noticeable.",
    interpretation:
      "Common benchmarks call about 0.2 small, 0.5 medium, and 0.8 large for standardized mean differences, but context matters more than labels.",
    commonMistakes: [
      "Reporting only p-values and ignoring how big the effect actually is.",
    ],
    relatedTerms: ["statistical-power", "confidence-interval", "meta-analysis", "sample-size", "p-value"],
    difficulty: "Intermediate",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "statistical-significance",
    term: "Statistical Significance",
    field: "Biostatistics",
    category: "Hypothesis Testing",
    shortDefinition:
      "A result is statistically significant when it is unlikely to have happened by chance alone.",
    simpleExplanation:
      "If your data would be surprising under the assumption of no effect, the result is called significant. In practice this usually means the p-value fell below a chosen cutoff such as 0.05.",
    whyItMatters:
      "It gives a shared rule for deciding when a pattern is worth acting on, though it should never be the only thing considered.",
    whenItIsUsed:
      "Whenever hypothesis tests are reported in research papers and trial results.",
    example:
      "A difference in cure rates with p = 0.01 is called statistically significant at the 0.05 level.",
    interpretation:
      "Significant means 'unlikely by chance', not 'large' or 'important'. Always look at the effect size and confidence interval too.",
    commonMistakes: [
      "Equating statistical significance with clinical or practical importance.",
      "Ignoring that with enough data, trivial differences become significant.",
    ],
    relatedTerms: ["p-value", "confidence-interval", "effect-size", "null-hypothesis", "multiple-testing"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "standard-error",
    term: "Standard Error",
    abbreviation: "SE",
    field: "Biostatistics",
    category: "Estimation",
    shortDefinition:
      "The standard error measures how much an estimate would bounce around if you repeated the study.",
    simpleExplanation:
      "Every sample gives a slightly different answer. The standard error captures that expected wobble in your estimate, such as a sample mean. Smaller standard errors mean steadier estimates.",
    whyItMatters:
      "It is the building block of confidence intervals and many test statistics, so it drives how precise your conclusions are.",
    whenItIsUsed:
      "Whenever you report an estimate with its uncertainty, such as a mean, proportion, or regression coefficient.",
    example:
      "A mean weight loss of 5 kg with a standard error of 0.5 kg is far more precise than the same 5 kg with a standard error of 3 kg.",
    formula: "SE = \\dfrac{s}{\\sqrt{n}}",
    formulaExplanation:
      "s is the sample standard deviation and n is the sample size. Larger samples shrink the standard error, which is why more data gives tighter estimates.",
    interpretation:
      "Do not confuse it with the standard deviation. The standard deviation describes spread among individuals; the standard error describes uncertainty in a summary estimate.",
    commonMistakes: [
      "Reporting the standard error when you meant to describe the spread of the data, which is the standard deviation.",
    ],
    relatedTerms: ["confidence-interval", "standard-deviation", "sampling-distribution", "sample-size", "point-estimate"],
    difficulty: "Intermediate",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "standard-deviation",
    term: "Standard Deviation",
    abbreviation: "SD",
    field: "Biostatistics",
    category: "Descriptive Statistics",
    shortDefinition:
      "The standard deviation measures how spread out individual values are around the average.",
    simpleExplanation:
      "It tells you whether data points cluster tightly near the mean or scatter widely. A small standard deviation means most values sit close to the average; a large one means they are more varied.",
    whyItMatters:
      "Two groups can share the same average but behave very differently. Spread often matters as much as the center.",
    whenItIsUsed:
      "In descriptive statistics to summarize variability, and as an input to many other calculations.",
    example:
      "Two classes both average 70 on a test, but one has a standard deviation of 3 (everyone scored near 70) and the other 15 (scores ranged widely).",
    formula: "s = \\sqrt{\\dfrac{1}{n-1}\\sum_{i=1}^{n}(x_i - \\bar{x})^2}",
    formulaExplanation:
      "Each value x_i is compared with the mean x̄, the differences are squared, averaged (dividing by n−1 for a sample), and the square root is taken to return to the original units.",
    interpretation:
      "It is in the same units as the data. Roughly two thirds of values fall within one standard deviation of the mean when data are bell-shaped.",
    commonMistakes: [
      "Confusing it with the standard error, which measures uncertainty in an estimate rather than spread among individuals.",
    ],
    relatedTerms: ["standard-error", "variance", "mean", "normal-distribution", "descriptive-statistics"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "variance",
    term: "Variance",
    field: "Biostatistics",
    category: "Descriptive Statistics",
    shortDefinition:
      "Variance is the average of the squared distances of values from their mean.",
    simpleExplanation:
      "It is another way to measure spread. Because it squares the distances, larger gaps count more. Its square root is the standard deviation, which is easier to read because it is in the original units.",
    whyItMatters:
      "Variance is central to many statistical methods, including analysis of variance and the math behind regression.",
    whenItIsUsed:
      "In theory and modeling wherever spread needs to be added, compared, or partitioned.",
    example:
      "If test scores have a standard deviation of 10, their variance is 100.",
    formula: "s^2 = \\dfrac{1}{n-1}\\sum_{i=1}^{n}(x_i - \\bar{x})^2",
    formulaExplanation:
      "Same as the standard deviation formula but without the final square root, so the result is in squared units.",
    interpretation:
      "Bigger variance means more spread. Its units are squared, which is why the standard deviation is often preferred for reporting.",
    commonMistakes: [
      "Reporting variance in a context where readers expect original units; use the standard deviation instead.",
    ],
    relatedTerms: ["standard-deviation", "mean", "descriptive-statistics", "normal-distribution", "standard-error"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "mean",
    term: "Mean",
    aliases: ["average", "arithmetic mean"],
    field: "Biostatistics",
    category: "Descriptive Statistics",
    shortDefinition:
      "The mean is the sum of all values divided by how many values there are.",
    simpleExplanation:
      "It is the everyday average. Add up every value and divide by the count. It gives a single number that represents the center of the data.",
    whyItMatters:
      "The mean is the most common summary of a group of numbers and feeds into countless other methods.",
    whenItIsUsed:
      "To summarize roughly symmetric data such as heights, blood pressures, or test scores.",
    example:
      "The mean of 4, 6, and 8 is (4 + 6 + 8) / 3 = 6.",
    formula: "\\bar{x} = \\dfrac{1}{n}\\sum_{i=1}^{n} x_i",
    formulaExplanation:
      "Each value x_i is added together and divided by n, the number of values.",
    interpretation:
      "The mean works well for symmetric data but gets pulled toward extreme values, so it can mislead for skewed data.",
    commonMistakes: [
      "Using the mean for very skewed data such as income, where the median describes the typical case better.",
    ],
    relatedTerms: ["median", "standard-deviation", "descriptive-statistics", "variance", "skewness"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "median",
    term: "Median",
    field: "Biostatistics",
    category: "Descriptive Statistics",
    shortDefinition:
      "The median is the middle value when all values are lined up in order.",
    simpleExplanation:
      "Sort the numbers from smallest to largest and pick the one in the middle. Half the values fall below it and half above. With an even count, average the two middle values.",
    whyItMatters:
      "Unlike the mean, the median is barely affected by a few extreme values, so it describes the typical case in skewed data.",
    whenItIsUsed:
      "For skewed data such as income, hospital length of stay, or survival times.",
    example:
      "For the values 2, 3, 100, the median is 3, while the mean of about 35 is dragged up by the outlier.",
    interpretation:
      "The median is the 50th percentile. Comparing it with the mean hints at skew: a mean far above the median suggests a long right tail.",
    commonMistakes: [
      "Assuming the mean and median are interchangeable; they diverge whenever data are skewed.",
    ],
    relatedTerms: ["mean", "descriptive-statistics", "skewness", "quantile", "standard-deviation"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "linear-regression",
    term: "Linear Regression",
    field: "Biostatistics",
    category: "Regression",
    shortDefinition:
      "Linear regression models how an outcome changes on average as one or more predictors change, using a straight-line relationship.",
    simpleExplanation:
      "It draws the best straight line (or flat surface, with several predictors) through the data. The line summarizes how the average outcome shifts when a predictor goes up by one unit.",
    whyItMatters:
      "It is the workhorse method for describing relationships and adjusting for several factors at once, and it underpins many more advanced models.",
    whenItIsUsed:
      "When the outcome is a continuous number, such as blood pressure, weight, or cost.",
    example:
      "A model predicts that each extra hour of exercise per week is linked to a 2 mmHg drop in blood pressure, holding age and weight constant.",
    formula: "y = \\beta_0 + \\beta_1 x_1 + \\dots + \\beta_k x_k + \\varepsilon",
    formulaExplanation:
      "y is the outcome, each x is a predictor, each β (beta) is the effect of that predictor, β0 is the intercept, and ε is the leftover error the model does not explain.",
    interpretation:
      "Each coefficient is the average change in the outcome for a one-unit rise in that predictor, holding the others fixed.",
    assumptions: [
      "The relationship is roughly linear.",
      "Errors are independent, have constant spread, and are roughly normal.",
    ],
    commonMistakes: [
      "Reading a coefficient as proof of cause when the data are observational.",
      "Extrapolating far beyond the range of the data.",
    ],
    relatedTerms: ["logistic-regression", "generalized-linear-model", "confounding", "r-squared", "residual"],
    difficulty: "Intermediate",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "logistic-regression",
    term: "Logistic Regression",
    field: "Biostatistics",
    category: "Generalized Linear Models",
    shortDefinition:
      "Logistic regression models the probability of a yes/no outcome and reports effects as odds ratios.",
    simpleExplanation:
      "When the outcome is binary, such as disease or no disease, a straight line does not fit well. Logistic regression bends the line so predictions stay between 0 and 1, and it links predictors to the odds of the event.",
    whyItMatters:
      "Most clinical outcomes are yes/no. Logistic regression is the standard way to study them while adjusting for several factors.",
    whenItIsUsed:
      "When the outcome has two categories, such as survived/died or positive/negative.",
    example:
      "A model finds that each 10-year increase in age is associated with 1.5 times the odds of a positive test, adjusting for sex and smoking.",
    formula: "\\log\\left(\\dfrac{p}{1-p}\\right) = \\beta_0 + \\beta_1 x_1 + \\dots + \\beta_k x_k",
    formulaExplanation:
      "p is the probability of the event. The left side is the log-odds (logit). Each β is added on the log-odds scale, and exponentiating a β gives an odds ratio.",
    interpretation:
      "Exponentiating a coefficient gives an odds ratio: values above 1 raise the odds, below 1 lower them.",
    assumptions: [
      "Observations are independent.",
      "The log-odds are linearly related to continuous predictors.",
    ],
    commonMistakes: [
      "Interpreting odds ratios as risk ratios, which overstates effects when the outcome is common.",
    ],
    relatedTerms: [
      "generalized-linear-model",
      "odds-ratio",
      "maximum-likelihood",
      "confounding",
      "binary-outcome",
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
    slug: "generalized-linear-model",
    term: "Generalized Linear Model",
    abbreviation: "GLM",
    field: "Biostatistics",
    category: "Generalized Linear Models",
    shortDefinition:
      "A generalized linear model extends linear regression to outcomes that are not continuous, such as counts or yes/no results.",
    simpleExplanation:
      "It keeps the familiar idea of adding up predictor effects but connects them to the outcome through a link function and allows different types of outcome distributions. This lets one framework handle binary, count, and continuous data.",
    whyItMatters:
      "It unifies many common models — linear, logistic, Poisson — under one set of ideas, making them easier to learn and apply.",
    whenItIsUsed:
      "Whenever the outcome breaks the assumptions of plain linear regression, such as probabilities or counts.",
    example:
      "Logistic regression is a GLM with a logit link for binary data; Poisson regression is a GLM with a log link for counts.",
    interpretation:
      "The choice of distribution and link function determines how coefficients are read, for example as odds ratios or rate ratios.",
    assumptions: [
      "The outcome follows the chosen distribution family.",
      "The link function correctly relates predictors to the outcome.",
    ],
    commonMistakes: [
      "Using an ordinary linear model for counts or binary data when a GLM is more appropriate.",
    ],
    relatedTerms: [
      "logistic-regression",
      "linear-regression",
      "poisson-regression",
      "maximum-likelihood",
      "negative-binomial-model",
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
    slug: "poisson-regression",
    term: "Poisson Regression",
    field: "Biostatistics",
    category: "Generalized Linear Models",
    shortDefinition:
      "Poisson regression models count outcomes, such as the number of events in a period, and reports rate ratios.",
    simpleExplanation:
      "When the outcome is a count — hospital visits, seizures, infections — Poisson regression links predictors to the rate at which events happen. It uses a log link so predicted counts stay positive.",
    whyItMatters:
      "Counts are common in health data, and ordinary regression can give impossible negative predictions. Poisson regression handles them properly.",
    whenItIsUsed:
      "For counts and rates, often with an offset to account for different follow-up times or population sizes.",
    example:
      "A study models the number of asthma attacks per year and finds that air pollution is linked to a 1.2 times higher rate.",
    formula: "\\log(\\lambda) = \\beta_0 + \\beta_1 x_1 + \\dots + \\beta_k x_k",
    formulaExplanation:
      "λ (lambda) is the expected count or rate. Predictor effects add on the log scale, so exponentiating a coefficient gives a rate ratio.",
    interpretation:
      "Exponentiated coefficients are rate ratios: how many times higher or lower the event rate is per unit change.",
    assumptions: [
      "The mean and variance of the counts are roughly equal (no overdispersion).",
      "Events are independent.",
    ],
    commonMistakes: [
      "Ignoring overdispersion, when the variance exceeds the mean; a negative binomial model often fits better.",
    ],
    relatedTerms: [
      "generalized-linear-model",
      "negative-binomial-model",
      "rate-ratio",
      "incidence",
      "person-time",
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
    slug: "negative-binomial-model",
    term: "Negative Binomial Model",
    abbreviation: "NB",
    field: "Biostatistics",
    category: "Generalized Linear Models",
    shortDefinition:
      "The negative binomial model handles count data that varies more than a Poisson model allows.",
    simpleExplanation:
      "Real count data are often more scattered than the Poisson model expects, a situation called overdispersion. The negative binomial model adds an extra parameter to soak up that extra spread, giving more honest uncertainty.",
    whyItMatters:
      "Using Poisson when data are overdispersed makes results look more precise than they are. The negative binomial model fixes this.",
    whenItIsUsed:
      "For counts whose variance is larger than their mean, common in disease counts and sequencing read counts.",
    example:
      "RNA-sequencing tools model gene read counts with a negative binomial distribution because expression varies a lot between samples.",
    interpretation:
      "Coefficients are read like Poisson rate ratios, but confidence intervals are wider to reflect the extra variability.",
    assumptions: [
      "Counts are overdispersed relative to Poisson.",
      "The extra variability follows the model's assumed pattern.",
    ],
    commonMistakes: [
      "Defaulting to Poisson without checking for overdispersion.",
    ],
    relatedTerms: [
      "poisson-regression",
      "generalized-linear-model",
      "differential-expression",
      "rna-sequencing",
      "rate-ratio",
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
    slug: "maximum-likelihood",
    term: "Maximum Likelihood Estimation",
    abbreviation: "MLE",
    field: "Biostatistics",
    category: "Estimation",
    shortDefinition:
      "Maximum likelihood picks the parameter values that make the observed data most probable.",
    simpleExplanation:
      "Given a model, this method asks which settings would have made your actual data most likely to occur, and chooses those. It is a general recipe for fitting many kinds of models.",
    whyItMatters:
      "It is the engine behind logistic regression, survival models, and much of modern statistics, with well-understood properties in large samples.",
    whenItIsUsed:
      "To estimate parameters in most generalized linear models and many other statistical models.",
    example:
      "Fitting a logistic regression finds the coefficients that make the observed pattern of yes/no outcomes most probable.",
    interpretation:
      "The estimates are the 'best fit' values; their standard errors come from how sharply the likelihood peaks.",
    assumptions: [
      "The chosen model is a reasonable description of the data.",
      "The sample is large enough for the method's approximations to hold.",
    ],
    commonMistakes: [
      "Trusting large-sample properties in very small datasets where they may not apply.",
    ],
    relatedTerms: [
      "logistic-regression",
      "generalized-linear-model",
      "bayesian-statistics",
      "confidence-interval",
      "linear-regression",
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
    slug: "odds-ratio",
    term: "Odds Ratio",
    abbreviation: "OR",
    field: "Biostatistics",
    category: "Estimation",
    shortDefinition:
      "An odds ratio compares the odds of an event between two groups.",
    simpleExplanation:
      "Odds are the chance something happens divided by the chance it does not. An odds ratio divides the odds in one group by the odds in another to show how the event's likelihood differs.",
    whyItMatters:
      "It is the natural effect measure from logistic regression and case-control studies, so it appears throughout medical research.",
    whenItIsUsed:
      "In logistic regression and case-control studies, where risks cannot always be measured directly.",
    example:
      "Smokers have 3 times the odds of a disease compared with non-smokers, an odds ratio of 3.",
    formula: "OR = \\dfrac{a/b}{c/d} = \\dfrac{ad}{bc}",
    formulaExplanation:
      "In a 2x2 table, a and b are exposed cases and non-cases, c and d are unexposed cases and non-cases. The ratio of the two odds simplifies to ad divided by bc.",
    interpretation:
      "An odds ratio of 1 means no difference, above 1 means higher odds, below 1 means lower odds.",
    commonMistakes: [
      "Reading an odds ratio as a risk ratio when the outcome is common, which exaggerates the effect.",
    ],
    relatedTerms: ["risk-ratio", "logistic-regression", "case-control-study", "confidence-interval", "binary-outcome"],
    difficulty: "Intermediate",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "risk-ratio",
    term: "Risk Ratio",
    abbreviation: "RR",
    aliases: ["relative risk"],
    field: "Biostatistics",
    category: "Estimation",
    shortDefinition:
      "A risk ratio compares the probability of an event between two groups.",
    simpleExplanation:
      "It divides the risk (the simple proportion who get the event) in one group by the risk in another. Unlike the odds ratio, it uses plain probabilities, which most people find easier to picture.",
    whyItMatters:
      "Risk ratios are intuitive and are the preferred effect measure in cohort studies and trials where risk can be measured directly.",
    whenItIsUsed:
      "In cohort studies and randomized trials that follow groups over time.",
    example:
      "If 10% of an exposed group and 5% of an unexposed group get sick, the risk ratio is 2: exposure doubles the risk.",
    formula: "RR = \\dfrac{\\text{risk in exposed}}{\\text{risk in unexposed}}",
    formulaExplanation:
      "Each risk is the number of events divided by the number of people in that group. The ratio compares the two.",
    interpretation:
      "A value of 1 means equal risk, above 1 means higher risk, below 1 means lower risk.",
    commonMistakes: [
      "Confusing it with the odds ratio or the hazard ratio, which are computed differently.",
    ],
    relatedTerms: ["odds-ratio", "hazard-ratio", "cohort-study", "incidence", "risk"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "confounding",
    term: "Confounding",
    field: "Biostatistics",
    category: "Causal Inference",
    shortDefinition:
      "Confounding happens when a third factor distorts the apparent link between an exposure and an outcome.",
    simpleExplanation:
      "Sometimes two things look related only because a hidden factor drives both. That hidden factor is a confounder. If you ignore it, you can be fooled into seeing a cause that is not there.",
    whyItMatters:
      "It is one of the biggest threats to valid conclusions from observational studies. Handling it well is central to causal reasoning.",
    whenItIsUsed:
      "Whenever you study cause and effect without a randomized experiment.",
    example:
      "Coffee drinkers had more lung cancer, but the real driver was smoking: smokers drank more coffee. Smoking confounded the coffee-cancer link.",
    interpretation:
      "A confounder is linked to both the exposure and the outcome and is not on the causal pathway between them.",
    assumptions: [
      "You can identify and measure the confounders to adjust for them.",
    ],
    commonMistakes: [
      "Adjusting for a variable that lies on the causal pathway (a mediator), which can hide a real effect.",
    ],
    relatedTerms: ["causal-inference", "effect-modification", "bias", "selection-bias", "logistic-regression"],
    difficulty: "Intermediate",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "causal-inference",
    term: "Causal Inference",
    field: "Biostatistics",
    category: "Causal Inference",
    shortDefinition:
      "Causal inference is the set of methods used to decide whether one thing actually causes another.",
    simpleExplanation:
      "It goes beyond noticing that two things move together and asks whether changing one would change the other. This needs careful design and assumptions, because correlation alone cannot prove cause.",
    whyItMatters:
      "Health decisions depend on cause, not just association. Good causal thinking prevents harmful or useless interventions.",
    whenItIsUsed:
      "In trials, and in observational studies using tools such as adjustment, matching, instrumental variables, and causal diagrams.",
    example:
      "A randomized trial shows a drug causes lower blood pressure, because random assignment balances other factors between groups.",
    assumptions: [
      "No unmeasured confounding, or a design that removes it.",
      "Clear definition of the exposure and outcome.",
    ],
    commonMistakes: [
      "Claiming causation from an observational association without addressing confounding and bias.",
    ],
    relatedTerms: ["confounding", "randomization", "mediation", "bias", "cohort-study"],
    difficulty: "Advanced",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "randomization",
    term: "Randomization",
    field: "Biostatistics",
    category: "Clinical Trials",
    shortDefinition:
      "Randomization assigns participants to groups by chance so the groups start out comparable.",
    simpleExplanation:
      "By using a coin flip or a random number to decide who gets which treatment, you spread known and unknown differences evenly across groups. That makes later differences easier to credit to the treatment.",
    whyItMatters:
      "It is the feature that makes randomized trials the strongest design for judging cause and effect.",
    whenItIsUsed:
      "In clinical trials and experiments when assignment to groups is under the researcher's control.",
    example:
      "In a drug trial, a computer randomly assigns each patient to the drug or placebo, balancing age, sex, and severity on average.",
    interpretation:
      "Randomization does not guarantee identical groups in one study, but it removes systematic bias in assignment.",
    assumptions: [
      "Assignment is truly random and concealed from those enrolling patients.",
    ],
    commonMistakes: [
      "Breaking allocation concealment, which lets selection bias creep back in.",
    ],
    relatedTerms: ["randomized-controlled-trial", "causal-inference", "confounding", "blinding", "selection-bias"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "randomized-controlled-trial",
    term: "Randomized Controlled Trial",
    abbreviation: "RCT",
    field: "Biostatistics",
    category: "Clinical Trials",
    shortDefinition:
      "A randomized controlled trial compares treatments by assigning participants to groups at random.",
    simpleExplanation:
      "Participants are randomly placed into a treatment group or a control group, then followed to compare outcomes. Because chance decides the groups, differences at the end are likely due to the treatment.",
    whyItMatters:
      "It is considered the gold standard for testing whether a treatment works, because randomization controls for confounding.",
    whenItIsUsed:
      "To evaluate drugs, devices, and interventions when random assignment is ethical and practical.",
    example:
      "A vaccine trial randomly gives half the volunteers the vaccine and half a placebo, then compares infection rates.",
    interpretation:
      "A well-run RCT supports causal claims more strongly than observational studies.",
    assumptions: [
      "Randomization and blinding are done properly.",
      "Enough participants complete the study.",
    ],
    commonMistakes: [
      "Assuming trial results always generalize to patients very different from those enrolled.",
    ],
    relatedTerms: ["randomization", "blinding", "causal-inference", "confounding", "intention-to-treat"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "bayesian-statistics",
    term: "Bayesian Statistics",
    field: "Biostatistics",
    category: "Bayesian Statistics",
    shortDefinition:
      "Bayesian statistics updates what you believe about a quantity as new data arrive, expressing results as probabilities.",
    simpleExplanation:
      "You start with a prior belief, collect data, and combine the two to get an updated belief called the posterior. It treats unknown quantities as having probability distributions, which allows direct statements like 'there is a 90% chance the effect is positive'.",
    whyItMatters:
      "It offers an intuitive way to talk about uncertainty and to fold in existing knowledge, and it is flexible for complex models.",
    whenItIsUsed:
      "In adaptive clinical trials, hierarchical models, and settings with useful prior information.",
    example:
      "A trial starts with a cautious prior about a drug, then updates to a posterior showing a 92% probability the drug beats placebo.",
    formula: "P(\\theta \\mid \\text{data}) \\propto P(\\text{data} \\mid \\theta)\\,P(\\theta)",
    formulaExplanation:
      "The posterior P(θ | data) is proportional to the likelihood P(data | θ) times the prior P(θ). Data reshape the prior into the posterior.",
    interpretation:
      "Results are given as probability distributions, so you can read credible intervals as direct probability statements about the parameter.",
    assumptions: [
      "The prior and the model are chosen thoughtfully and reported honestly.",
    ],
    commonMistakes: [
      "Using a strong prior that quietly drives the conclusion without justification.",
    ],
    relatedTerms: ["maximum-likelihood", "confidence-interval", "p-value", "prior-distribution", "posterior-distribution"],
    difficulty: "Advanced",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "kaplan-meier-curve",
    term: "Kaplan-Meier Curve",
    abbreviation: "KM curve",
    aliases: ["survival curve", "km curve"],
    field: "Biostatistics",
    category: "Survival Analysis",
    shortDefinition:
      "A Kaplan-Meier curve shows the estimated proportion of people who have not yet had an event as time passes.",
    simpleExplanation:
      "It is a step-shaped graph that starts at 100% and drops each time an event happens. It handles people who leave the study early (censoring) so you can see survival over time without needing everyone to finish.",
    whyItMatters:
      "It gives a clear picture of how quickly events occur and lets you compare groups visually before formal testing.",
    whenItIsUsed:
      "In survival analysis to display time-to-event data, often for two treatment groups side by side.",
    example:
      "A cancer study plots two Kaplan-Meier curves; the higher curve shows the group with better survival at each time point.",
    interpretation:
      "The height at any time is the estimated chance of still being event-free. A gap between two curves suggests a difference in survival.",
    assumptions: [
      "Censoring is unrelated to prognosis (non-informative).",
    ],
    commonMistakes: [
      "Comparing curves only at one time point instead of over the whole follow-up, and forgetting to check numbers at risk.",
    ],
    relatedTerms: ["hazard-ratio", "cox-proportional-hazards-model", "censoring", "survival-analysis", "log-rank-test"],
    difficulty: "Intermediate",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "cox-proportional-hazards-model",
    term: "Cox Proportional Hazards Model",
    abbreviation: "Cox model",
    field: "Biostatistics",
    category: "Survival Analysis",
    shortDefinition:
      "The Cox model relates predictors to the rate of an event over time without assuming a specific shape for the baseline risk.",
    simpleExplanation:
      "It is the most common way to study time-to-event data with several predictors. It estimates how each factor multiplies the hazard, while leaving the underlying time pattern unspecified, which makes it flexible.",
    whyItMatters:
      "It lets researchers adjust for many factors when analyzing survival, producing hazard ratios that are easy to report.",
    whenItIsUsed:
      "In survival analysis whenever you want adjusted hazard ratios from time-to-event data.",
    example:
      "A Cox model estimates that a treatment lowers the hazard of death by 25% after adjusting for age and stage.",
    formula: "h(t \\mid x) = h_0(t)\\,\\exp(\\beta_1 x_1 + \\dots + \\beta_k x_k)",
    formulaExplanation:
      "h0(t) is the unspecified baseline hazard over time, and the exponential term scales it up or down based on the predictors. Exponentiating a β gives a hazard ratio.",
    interpretation:
      "Each exponentiated coefficient is a hazard ratio for a one-unit change in that predictor.",
    assumptions: [
      "Hazards are proportional over time.",
      "Censoring is non-informative.",
    ],
    commonMistakes: [
      "Not checking the proportional hazards assumption before trusting the results.",
    ],
    relatedTerms: ["hazard-ratio", "kaplan-meier-curve", "censoring", "survival-analysis", "generalized-linear-model"],
    difficulty: "Advanced",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "censoring",
    term: "Censoring",
    field: "Biostatistics",
    category: "Survival Analysis",
    shortDefinition:
      "Censoring occurs when you only know that a person's event had not happened by a certain time.",
    simpleExplanation:
      "In time-to-event studies, some people finish the study, drop out, or are still event-free at the end. You do not see their event, but you know they went a certain time without it. That partial information is called censoring.",
    whyItMatters:
      "Ignoring censored people would throw away useful information and bias the results. Survival methods are built to use it correctly.",
    whenItIsUsed:
      "In any survival analysis where follow-up ends before every person has the event.",
    example:
      "A patient still alive when a 5-year study closes is censored at 5 years; we know they survived at least that long.",
    interpretation:
      "Censored observations contribute the time they were followed, even though their final event time is unknown.",
    assumptions: [
      "Censoring is unrelated to the risk of the event (non-informative).",
    ],
    commonMistakes: [
      "Treating censored people as if they had the event, or dropping them entirely.",
    ],
    relatedTerms: ["kaplan-meier-curve", "hazard-ratio", "cox-proportional-hazards-model", "survival-analysis", "person-time"],
    difficulty: "Intermediate",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "survival-analysis",
    term: "Survival Analysis",
    aliases: ["time-to-event analysis"],
    field: "Biostatistics",
    category: "Survival Analysis",
    shortDefinition:
      "Survival analysis studies the time until an event happens and handles incomplete follow-up.",
    simpleExplanation:
      "Instead of asking only whether an event occurred, it asks when. It is built to deal with people who have not yet had the event when the study ends, using tools like Kaplan-Meier curves and Cox models.",
    whyItMatters:
      "Timing carries information that a simple yes/no summary loses. Survival methods use it and handle censoring properly.",
    whenItIsUsed:
      "For outcomes measured as time until death, relapse, recovery, or device failure.",
    example:
      "Researchers compare time to relapse between two therapies using survival analysis rather than just counting relapses.",
    relatedTerms: ["kaplan-meier-curve", "hazard-ratio", "cox-proportional-hazards-model", "censoring", "log-rank-test"],
    difficulty: "Intermediate",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "log-rank-test",
    term: "Log-Rank Test",
    field: "Biostatistics",
    category: "Survival Analysis",
    shortDefinition:
      "The log-rank test checks whether two or more survival curves differ overall.",
    simpleExplanation:
      "It compares the number of events seen in each group at each event time with the number expected if the groups shared the same survival. Adding up these comparisons gives a single test of whether the curves differ.",
    whyItMatters:
      "It is the standard significance test that goes with Kaplan-Meier curves.",
    whenItIsUsed:
      "To compare survival between groups, such as treatment versus control.",
    example:
      "After plotting two Kaplan-Meier curves, a log-rank p-value of 0.02 suggests the survival difference is unlikely due to chance.",
    interpretation:
      "A small p-value indicates the survival experiences of the groups differ; it does not measure how big the difference is.",
    assumptions: [
      "Proportional hazards; the test is most powerful when group differences are consistent over time.",
    ],
    commonMistakes: [
      "Relying on it when curves cross, where it can miss real differences.",
    ],
    relatedTerms: ["kaplan-meier-curve", "hazard-ratio", "survival-analysis", "p-value", "cox-proportional-hazards-model"],
    difficulty: "Intermediate",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "multiple-testing",
    term: "Multiple Testing",
    aliases: ["multiple comparisons"],
    field: "Biostatistics",
    category: "Multiple Testing",
    shortDefinition:
      "Multiple testing is the problem that running many tests raises the chance of false positives.",
    simpleExplanation:
      "Each test has some chance of a false alarm. Do enough tests and you are almost sure to get a few significant results by luck alone. Correction methods rein this in.",
    whyItMatters:
      "Modern studies, especially in genomics, run thousands of tests. Without correction, many 'findings' would be noise.",
    whenItIsUsed:
      "In genome-wide studies, screening many outcomes, or comparing many subgroups.",
    example:
      "Testing 20,000 genes at p < 0.05 would flag about 1,000 by chance even if none truly differ, so a correction is essential.",
    interpretation:
      "Corrections either control the family-wise error rate (any false positive) or the false discovery rate (proportion of false positives among hits).",
    commonMistakes: [
      "Reporting the most significant of many tests without any adjustment.",
    ],
    relatedTerms: ["false-discovery-rate", "p-value", "type-i-error", "statistical-significance", "differential-expression"],
    difficulty: "Intermediate",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "false-discovery-rate",
    term: "False Discovery Rate",
    abbreviation: "FDR",
    field: "Biostatistics",
    category: "Multiple Testing",
    shortDefinition:
      "The false discovery rate is the expected share of false positives among the results you call significant.",
    simpleExplanation:
      "When you flag many findings, some will be wrong. The false discovery rate is the fraction of those flagged findings that are actually false. Controlling it lets you accept a few mistakes in exchange for more discoveries.",
    whyItMatters:
      "It is the practical standard in high-throughput biology, where being slightly permissive is better than missing everything.",
    whenItIsUsed:
      "In genomics and other settings with thousands of tests, often via the Benjamini-Hochberg procedure.",
    example:
      "An FDR of 0.05 among 200 significant genes means about 10 are expected to be false positives.",
    interpretation:
      "A q-value is the smallest FDR at which a given result is called significant.",
    commonMistakes: [
      "Confusing the FDR with the p-value; the FDR describes a set of findings, not a single test.",
    ],
    relatedTerms: ["multiple-testing", "p-value", "differential-expression", "type-i-error", "statistical-significance"],
    difficulty: "Intermediate",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "meta-analysis",
    term: "Meta-Analysis",
    field: "Biostatistics",
    category: "Meta Analysis",
    shortDefinition:
      "A meta-analysis statistically combines results from several studies into one overall estimate.",
    simpleExplanation:
      "Instead of relying on a single study, it pools many studies on the same question, giving more weight to larger and more precise ones. The result is a single summary effect with tighter uncertainty.",
    whyItMatters:
      "Pooling evidence can settle questions that individual studies leave uncertain and reveal patterns across settings.",
    whenItIsUsed:
      "In systematic reviews that gather all credible studies on a treatment or exposure.",
    example:
      "A meta-analysis of ten blood pressure trials combines their effects into one estimate with a narrower confidence interval.",
    interpretation:
      "A forest plot shows each study's effect and the pooled estimate; heterogeneity measures how much studies disagree.",
    assumptions: [
      "The combined studies are similar enough to pool.",
      "Publication bias is checked and addressed.",
    ],
    commonMistakes: [
      "Pooling studies that are too different, or ignoring that unpublished negative studies may be missing.",
    ],
    relatedTerms: ["effect-size", "confidence-interval", "publication-bias", "heterogeneity", "systematic-review"],
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
