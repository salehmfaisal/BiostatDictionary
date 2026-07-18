import type { TermInput } from "@/types/dictionary";

const AUTHOR = "BiostatDictionary Editorial Team";
const REVIEWER = "[Reviewer name — replace in content]";
const D = "2026-07-18";

export const terms: TermInput[] = [
  {
    slug: "incidence",
    term: "Incidence",
    field: "Epidemiology",
    category: "Epidemiologic Measures",
    shortDefinition:
      "Incidence is the rate at which new cases of a disease appear in a population over a period of time.",
    simpleExplanation:
      "It counts only new cases that develop during a set window, among people who could get the disease. It answers the question: how fast is this condition appearing?",
    whyItMatters:
      "Incidence shows whether a disease is spreading or slowing, which guides prevention and resource planning.",
    whenItIsUsed:
      "In cohort studies and surveillance to track how often new disease develops.",
    example:
      "If 20 new flu cases appear among 1,000 healthy people over one winter, the incidence is 20 per 1,000 that season.",
    formula: "\\text{Incidence rate} = \\dfrac{\\text{new cases}}{\\text{person-time at risk}}",
    formulaExplanation:
      "The numerator is new cases during the period. The denominator is person-time, the total time all at-risk people were followed.",
    interpretation:
      "Higher incidence means new cases are appearing faster. It measures risk of developing disease, unlike prevalence.",
    commonMistakes: [
      "Confusing incidence (new cases) with prevalence (all existing cases).",
    ],
    relatedTerms: ["prevalence", "risk", "person-time", "cohort-study", "rate-ratio"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "prevalence",
    term: "Prevalence",
    field: "Epidemiology",
    category: "Epidemiologic Measures",
    shortDefinition:
      "Prevalence is the share of a population that has a disease at a given time.",
    simpleExplanation:
      "It counts all existing cases, new and old, at a moment or over a period, divided by everyone in the group. It answers: how common is this condition right now?",
    whyItMatters:
      "Prevalence shows the current burden of a disease, which helps plan services and staffing.",
    whenItIsUsed:
      "In cross-sectional studies and health surveys that take a snapshot of a population.",
    example:
      "If 150 of 1,000 adults have high blood pressure today, the prevalence is 15%.",
    formula: "\\text{Prevalence} = \\dfrac{\\text{existing cases}}{\\text{total population}}",
    formulaExplanation:
      "The numerator counts everyone with the disease; the denominator is the whole population studied.",
    interpretation:
      "Prevalence reflects both how often disease appears and how long it lasts. A chronic disease can have high prevalence even with low incidence.",
    commonMistakes: [
      "Using prevalence to judge risk of getting a disease; incidence measures that.",
    ],
    relatedTerms: ["incidence", "cross-sectional-study", "risk", "disease-surveillance", "population-health"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "risk",
    term: "Risk",
    aliases: ["cumulative incidence"],
    field: "Epidemiology",
    category: "Epidemiologic Measures",
    shortDefinition:
      "Risk is the probability that a person develops a disease over a specified period.",
    simpleExplanation:
      "It is a simple chance: out of everyone who starts free of the disease, what fraction develops it during the follow-up? It ranges from 0 to 1, or 0% to 100%.",
    whyItMatters:
      "Risk is easy to understand and communicate, making it useful for talking with patients and the public.",
    whenItIsUsed:
      "In cohort studies and trials that follow people for a fixed time.",
    example:
      "If 30 of 300 people develop diabetes over five years, the five-year risk is 10%.",
    interpretation:
      "Risk depends on the time period; a 10% risk over five years differs from 10% over one year.",
    commonMistakes: [
      "Quoting a risk without its time frame, which makes it hard to interpret.",
    ],
    relatedTerms: ["incidence", "prevalence", "risk-ratio", "cohort-study", "person-time"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "person-time",
    term: "Person-Time",
    field: "Epidemiology",
    category: "Epidemiologic Measures",
    shortDefinition:
      "Person-time is the total time each person is followed and at risk, added up across everyone.",
    simpleExplanation:
      "People join and leave studies at different times. Person-time adds up how long each one was actually followed, so someone watched for two years contributes more than someone watched for two months.",
    whyItMatters:
      "It gives a fair denominator for rates when follow-up length varies, which is common in real studies.",
    whenItIsUsed:
      "In incidence-rate calculations and survival-style analyses.",
    example:
      "Ten people followed for one year each give 10 person-years, the same as one person followed for ten years.",
    formula: "\\text{Person-time} = \\sum_i t_i",
    formulaExplanation:
      "Each person i contributes the time t_i they were followed and at risk; these are summed across all people.",
    interpretation:
      "Rates using person-time are expressed per person-year, accounting for uneven follow-up.",
    commonMistakes: [
      "Counting time after a person already had the event or was no longer at risk.",
    ],
    relatedTerms: ["incidence", "risk", "rate-ratio", "cohort-study", "censoring"],
    difficulty: "Intermediate",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "rate-ratio",
    term: "Rate Ratio",
    field: "Epidemiology",
    category: "Epidemiologic Measures",
    shortDefinition:
      "A rate ratio compares the incidence rate of an event between two groups.",
    simpleExplanation:
      "It divides the rate of new cases in one group by the rate in another. Unlike a risk ratio, it uses rates based on person-time, which suits studies with varying follow-up.",
    whyItMatters:
      "It quantifies how much faster events happen in one group, guiding decisions about exposures and treatments.",
    whenItIsUsed:
      "In cohort studies and Poisson regression where rates are the natural measure.",
    example:
      "If smokers develop a disease at 8 per 1,000 person-years and non-smokers at 2, the rate ratio is 4.",
    interpretation:
      "A value of 1 means equal rates, above 1 means a higher rate in the first group, below 1 a lower rate.",
    commonMistakes: [
      "Confusing rate ratios with risk ratios or odds ratios, which use different denominators.",
    ],
    relatedTerms: ["incidence", "person-time", "risk-ratio", "poisson-regression", "cohort-study"],
    difficulty: "Intermediate",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "cohort-study",
    term: "Cohort Study",
    field: "Epidemiology",
    category: "Study Designs",
    shortDefinition:
      "A cohort study follows a group of people over time to see who develops an outcome.",
    simpleExplanation:
      "You start with people grouped by an exposure, such as smokers versus non-smokers, and watch them forward in time to compare how often each group gets the disease.",
    whyItMatters:
      "Because exposure is measured before the outcome, cohort studies can establish timing and estimate incidence and risk directly.",
    whenItIsUsed:
      "When you want to study multiple outcomes of an exposure or measure incidence.",
    example:
      "A cohort follows 10,000 adults for 20 years to compare heart disease rates by diet.",
    interpretation:
      "Cohort studies yield risks, rates, and their ratios, and can be prospective or retrospective.",
    assumptions: [
      "Groups are comparable except for the exposure, or differences are adjusted for.",
    ],
    commonMistakes: [
      "Ignoring loss to follow-up, which can bias results if dropout is related to the outcome.",
    ],
    relatedTerms: ["case-control-study", "cross-sectional-study", "incidence", "risk-ratio", "confounding"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "case-control-study",
    term: "Case-Control Study",
    field: "Epidemiology",
    category: "Study Designs",
    shortDefinition:
      "A case-control study compares people who have a disease with people who do not, looking back at past exposures.",
    simpleExplanation:
      "You start with the outcome: gather people who have the disease (cases) and similar people who do not (controls), then look backward to compare their exposures. It is efficient for rare diseases.",
    whyItMatters:
      "It is fast and cheap for studying rare diseases or outcomes that take years to develop.",
    whenItIsUsed:
      "For rare diseases or when a cohort study would take too long.",
    example:
      "To study a rare cancer, researchers compare past chemical exposure between patients and healthy controls.",
    interpretation:
      "The natural measure is the odds ratio, since risks cannot be computed directly from this design.",
    assumptions: [
      "Controls come from the same population that produced the cases.",
      "Past exposure is measured accurately.",
    ],
    commonMistakes: [
      "Recall bias, where cases remember exposures differently from controls.",
    ],
    relatedTerms: ["cohort-study", "odds-ratio", "cross-sectional-study", "selection-bias", "confounding"],
    difficulty: "Intermediate",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "cross-sectional-study",
    term: "Cross-Sectional Study",
    field: "Epidemiology",
    category: "Study Designs",
    shortDefinition:
      "A cross-sectional study measures exposure and outcome at the same single point in time.",
    simpleExplanation:
      "It is a snapshot. You survey a population once and record who has the exposure and who has the disease together, which is quick but cannot show which came first.",
    whyItMatters:
      "It is efficient for estimating prevalence and for generating hypotheses.",
    whenItIsUsed:
      "In health surveys and to measure how common conditions and exposures are.",
    example:
      "A national survey measures both obesity and diabetes on the same day to estimate their prevalence.",
    interpretation:
      "It gives prevalence and associations but usually cannot establish cause because timing is unknown.",
    commonMistakes: [
      "Inferring cause and effect from a snapshot that cannot show which factor came first.",
    ],
    relatedTerms: ["prevalence", "cohort-study", "case-control-study", "confounding", "population-health"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "bias",
    term: "Bias",
    field: "Epidemiology",
    category: "Bias",
    shortDefinition:
      "Bias is a systematic error that pushes study results away from the truth in a consistent direction.",
    simpleExplanation:
      "Unlike random noise, which scatters results, bias tilts them one way. It comes from how people are selected, how data are gathered, or how variables relate, and more data will not fix it.",
    whyItMatters:
      "Bias can create effects that are not real or hide effects that are, so recognizing it is essential to trusting a study.",
    whenItIsUsed:
      "Considered in the design and critical appraisal of every study.",
    example:
      "If only the healthiest patients enroll in a trial, its results may look better than the treatment truly is.",
    interpretation:
      "Common types include selection bias, information bias, and confounding; each distorts results differently.",
    commonMistakes: [
      "Assuming a larger sample removes bias; it only reduces random error.",
    ],
    relatedTerms: ["selection-bias", "confounding", "effect-modification", "causal-inference", "case-control-study"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "selection-bias",
    term: "Selection Bias",
    field: "Epidemiology",
    category: "Bias",
    shortDefinition:
      "Selection bias occurs when the people in a study differ from the population in ways that distort the results.",
    simpleExplanation:
      "If the way participants are chosen or kept in a study is related to both the exposure and the outcome, the sample gives a warped picture. The problem is who got in, not how many.",
    whyItMatters:
      "It can manufacture or erase associations, misleading conclusions no matter how large the study.",
    whenItIsUsed:
      "Assessed whenever participants are recruited, retained, or lost during a study.",
    example:
      "Studying a disease only in hospital patients can distort findings, since hospitalized people differ from the general public.",
    interpretation:
      "The direction and size of the distortion depend on who is over- or under-represented.",
    commonMistakes: [
      "Overlooking loss to follow-up, a common source of selection bias in cohort studies.",
    ],
    relatedTerms: ["bias", "confounding", "cohort-study", "case-control-study", "randomization"],
    difficulty: "Intermediate",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "effect-modification",
    term: "Effect Modification",
    aliases: ["interaction"],
    field: "Epidemiology",
    category: "Effect Modification",
    shortDefinition:
      "Effect modification happens when an exposure's effect differs across groups.",
    simpleExplanation:
      "Sometimes a treatment or exposure works differently depending on who you are. If a drug helps young people more than older people, age modifies the effect. It is a real feature of the biology, not an error.",
    whyItMatters:
      "It reveals that one number does not fit everyone and supports tailoring treatment to subgroups.",
    whenItIsUsed:
      "In analyses that examine whether effects vary by age, sex, or other factors.",
    example:
      "A sunburn risk from sun exposure is much stronger in fair-skinned people, so skin type modifies the effect.",
    interpretation:
      "Unlike confounding, effect modification is worth reporting, not removing; you present separate estimates per group.",
    commonMistakes: [
      "Confusing effect modification (a real, reportable difference) with confounding (a distortion to adjust away).",
    ],
    relatedTerms: ["confounding", "bias", "causal-inference", "mediation", "cohort-study"],
    difficulty: "Advanced",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "mediation",
    term: "Mediation",
    field: "Epidemiology",
    category: "Causal Inference",
    shortDefinition:
      "Mediation describes how an exposure affects an outcome through an intermediate step.",
    simpleExplanation:
      "Sometimes a cause works through a middle factor. Exercise may lower heart disease partly by reducing weight. Weight is the mediator, sitting on the path between exercise and heart disease.",
    whyItMatters:
      "Understanding the pathway shows how an effect happens and where you might intervene.",
    whenItIsUsed:
      "In causal analyses that separate direct effects from effects passing through a mediator.",
    example:
      "A study estimates how much of a diet's effect on blood pressure runs through weight loss.",
    interpretation:
      "Mediation splits a total effect into a direct part and an indirect part through the mediator.",
    commonMistakes: [
      "Adjusting for a mediator when estimating a total effect, which removes part of the effect you want to measure.",
    ],
    relatedTerms: ["causal-inference", "confounding", "effect-modification", "bias", "cohort-study"],
    difficulty: "Advanced",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "sensitivity",
    term: "Sensitivity",
    aliases: ["true positive rate", "recall"],
    field: "Epidemiology",
    category: "Diagnostic Accuracy",
    shortDefinition:
      "Sensitivity is the share of people with a disease that a test correctly identifies as positive.",
    simpleExplanation:
      "Among everyone who truly has the disease, sensitivity is the fraction the test catches. A highly sensitive test rarely misses true cases, so a negative result is reassuring.",
    whyItMatters:
      "High sensitivity matters when missing a case is dangerous, such as screening for a serious infection.",
    whenItIsUsed:
      "In evaluating diagnostic and screening tests.",
    example:
      "If a test flags 90 of 100 truly sick people, its sensitivity is 90%.",
    formula: "\\text{Sensitivity} = \\dfrac{TP}{TP + FN}",
    formulaExplanation:
      "TP is true positives (sick, test positive) and FN is false negatives (sick, test negative). The formula is the share of sick people testing positive.",
    interpretation:
      "A very sensitive test with a negative result helps rule a disease out.",
    commonMistakes: [
      "Confusing sensitivity with specificity, which concerns people without the disease.",
    ],
    relatedTerms: ["specificity", "positive-predictive-value", "screening", "diagnostic-testing", "roc-curve"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "specificity",
    term: "Specificity",
    aliases: ["true negative rate"],
    field: "Epidemiology",
    category: "Diagnostic Accuracy",
    shortDefinition:
      "Specificity is the share of people without a disease that a test correctly identifies as negative.",
    simpleExplanation:
      "Among everyone who is truly healthy, specificity is the fraction the test correctly clears. A highly specific test rarely raises false alarms, so a positive result is more convincing.",
    whyItMatters:
      "High specificity matters when a false positive leads to harmful or costly follow-up.",
    whenItIsUsed:
      "In evaluating diagnostic and screening tests, alongside sensitivity.",
    example:
      "If a test clears 95 of 100 truly healthy people, its specificity is 95%.",
    formula: "\\text{Specificity} = \\dfrac{TN}{TN + FP}",
    formulaExplanation:
      "TN is true negatives (healthy, test negative) and FP is false positives (healthy, test positive). The formula is the share of healthy people testing negative.",
    interpretation:
      "A very specific test with a positive result helps rule a disease in.",
    commonMistakes: [
      "Judging a test by specificity alone; it must be balanced against sensitivity.",
    ],
    relatedTerms: ["sensitivity", "positive-predictive-value", "screening", "diagnostic-testing", "roc-curve"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "positive-predictive-value",
    term: "Positive Predictive Value",
    abbreviation: "PPV",
    field: "Epidemiology",
    category: "Diagnostic Accuracy",
    shortDefinition:
      "Positive predictive value is the chance that someone with a positive test truly has the disease.",
    simpleExplanation:
      "It flips the question. Instead of asking how well a test detects disease, it asks: given a positive result, how likely is it real? This depends heavily on how common the disease is.",
    whyItMatters:
      "It is what patients and clinicians most want to know after a positive result.",
    whenItIsUsed:
      "When interpreting a positive test in a specific population.",
    example:
      "A test with great sensitivity can still have a low positive predictive value when the disease is rare, producing many false alarms.",
    formula: "\\text{PPV} = \\dfrac{TP}{TP + FP}",
    formulaExplanation:
      "TP is true positives and FP is false positives. The formula is the share of positive tests that are correct.",
    interpretation:
      "PPV rises as the disease becomes more common, even if the test itself does not change.",
    commonMistakes: [
      "Assuming PPV is a fixed property of the test; it shifts with prevalence.",
    ],
    relatedTerms: ["sensitivity", "specificity", "prevalence", "screening", "diagnostic-testing"],
    difficulty: "Intermediate",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "screening",
    term: "Screening",
    field: "Epidemiology",
    category: "Screening",
    shortDefinition:
      "Screening tests people who feel healthy to catch disease early, before symptoms appear.",
    simpleExplanation:
      "The idea is to find disease early, when treatment works better. Because it targets people without symptoms, a screening test must be safe, acceptable, and accurate enough to do more good than harm.",
    whyItMatters:
      "Well-designed screening can save lives, but poorly designed screening can cause false alarms and overtreatment.",
    whenItIsUsed:
      "In public health programs such as mammography or colon cancer screening.",
    example:
      "Blood pressure checks screen healthy adults to catch hypertension before it causes harm.",
    interpretation:
      "Benefits must be weighed against false positives, overdiagnosis, and the cost of follow-up.",
    commonMistakes: [
      "Judging screening only by cases found, ignoring harms from false positives and overdiagnosis.",
    ],
    relatedTerms: ["sensitivity", "specificity", "positive-predictive-value", "diagnostic-testing", "prevalence"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "disease-surveillance",
    term: "Disease Surveillance",
    field: "Epidemiology",
    category: "Disease Surveillance",
    shortDefinition:
      "Disease surveillance is the ongoing collection and analysis of health data to track disease in a population.",
    simpleExplanation:
      "It is the health system's early-warning radar. By continuously watching case counts and patterns, public health teams can spot outbreaks and see whether control efforts are working.",
    whyItMatters:
      "Timely data let authorities respond quickly to outbreaks and allocate resources where they are needed.",
    whenItIsUsed:
      "Continuously by public health agencies, and intensively during outbreaks.",
    example:
      "Weekly flu case reporting lets agencies detect the start of flu season and prepare hospitals.",
    interpretation:
      "Trends over time matter more than single counts; changes in reporting can mimic real changes in disease.",
    commonMistakes: [
      "Reading a rise in reported cases as a real increase when it may reflect more testing or reporting.",
    ],
    relatedTerms: ["outbreak-investigation", "incidence", "prevalence", "population-health", "epidemic"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "outbreak-investigation",
    term: "Outbreak Investigation",
    field: "Epidemiology",
    category: "Outbreak Investigation",
    shortDefinition:
      "An outbreak investigation is the structured effort to find the cause of a sudden rise in disease and stop it.",
    simpleExplanation:
      "When cases spike, investigators act like detectives: confirm the outbreak, define who counts as a case, gather data, form a hypothesis about the source, and take action to control it.",
    whyItMatters:
      "Fast, careful investigation can halt an outbreak and prevent future ones.",
    whenItIsUsed:
      "Whenever an unusual cluster of illness is detected.",
    example:
      "After several people fall ill, investigators trace the cause to a contaminated batch of food.",
    interpretation:
      "Early hypotheses are refined as data come in; speed and accuracy must be balanced.",
    relatedTerms: ["disease-surveillance", "epidemic", "incidence", "case-control-study", "population-health"],
    difficulty: "Intermediate",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "epidemic",
    term: "Epidemic",
    field: "Epidemiology",
    category: "Infectious Disease Epidemiology",
    shortDefinition:
      "An epidemic is a rise in disease cases clearly above what is normally expected in an area.",
    simpleExplanation:
      "When a disease appears far more often than usual for a place and time, that is an epidemic. If it spreads across many countries, it becomes a pandemic.",
    whyItMatters:
      "Recognizing an epidemic early triggers the response needed to protect a population.",
    whenItIsUsed:
      "In infectious disease monitoring and public health emergencies.",
    example:
      "A sudden surge of measles in a region where it was rare is an epidemic.",
    interpretation:
      "What counts as an epidemic depends on the usual baseline, which varies by disease and place.",
    commonMistakes: [
      "Using epidemic and pandemic interchangeably; a pandemic spans many regions or the globe.",
    ],
    relatedTerms: ["disease-surveillance", "outbreak-investigation", "incidence", "population-health", "prevalence"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "population-health",
    term: "Population Health",
    field: "Epidemiology",
    category: "Population Health",
    shortDefinition:
      "Population health looks at the health outcomes of a whole group and what drives differences within it.",
    simpleExplanation:
      "Instead of one patient at a time, it asks why some communities are healthier than others and how factors like income, environment, and care combine to shape health across a population.",
    whyItMatters:
      "Many health gains come from changes at the population level, such as clean water or vaccination, not just individual care.",
    whenItIsUsed:
      "In public health planning, policy, and health-system strategy.",
    example:
      "A population health program targets neighborhoods with high diabetes rates through food access and screening.",
    interpretation:
      "Averages can hide inequities; population health pays attention to the spread of outcomes, not just the mean.",
    relatedTerms: ["social-determinants-of-health", "disease-surveillance", "prevalence", "incidence", "cross-sectional-study"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "social-determinants-of-health",
    term: "Social Determinants of Health",
    abbreviation: "SDOH",
    field: "Epidemiology",
    category: "Social Epidemiology",
    shortDefinition:
      "Social determinants of health are the everyday conditions that shape people's health, such as income, education, and housing.",
    simpleExplanation:
      "Health is not decided only in the clinic. Where people live, learn, work, and their access to food and safety strongly influence how healthy they are and how long they live.",
    whyItMatters:
      "These factors often explain health gaps between groups more than medical care does, so addressing them can reduce inequities.",
    whenItIsUsed:
      "In social epidemiology, public health policy, and health-equity research.",
    example:
      "People in neighborhoods without fresh food or safe parks tend to have higher rates of chronic disease.",
    interpretation:
      "These determinants act together and over a lifetime, so effects build up rather than acting alone.",
    relatedTerms: ["population-health", "prevalence", "cross-sectional-study", "confounding", "disease-surveillance"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "diagnostic-testing",
    term: "Diagnostic Testing",
    field: "Epidemiology",
    category: "Diagnostic Accuracy",
    shortDefinition:
      "Diagnostic testing uses tests to confirm or rule out disease in a person, often after symptoms appear.",
    simpleExplanation:
      "Unlike screening healthy people, diagnostic testing is used when there is already a reason to suspect disease. Its job is to sort people accurately into likely sick or likely well.",
    whyItMatters:
      "Accurate diagnosis guides treatment; a wrong result can lead to missed disease or needless harm.",
    whenItIsUsed:
      "In clinics and hospitals to work up symptoms or follow up an abnormal screen.",
    example:
      "A patient with chest pain gets diagnostic tests to confirm or rule out a heart attack.",
    interpretation:
      "Results are judged by sensitivity, specificity, and predictive values in the relevant population.",
    relatedTerms: ["sensitivity", "specificity", "positive-predictive-value", "screening", "roc-curve"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
];

export default terms;
