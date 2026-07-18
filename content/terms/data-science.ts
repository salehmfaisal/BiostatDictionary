import type { TermInput } from "@/types/dictionary";

const AUTHOR = "BiostatDictionary Editorial Team";
const REVIEWER = "[Reviewer name — replace in content]";
const D = "2026-07-18";

export const terms: TermInput[] = [
  {
    slug: "cross-validation",
    term: "Cross-Validation",
    aliases: ["k-fold cross-validation"],
    field: "Data Science",
    category: "Model Evaluation",
    shortDefinition:
      "Cross-validation tests a model by repeatedly training on part of the data and checking it on the rest.",
    simpleExplanation:
      "Instead of trusting a single train/test split, you split the data into several folds, train on most of them, and test on the one held out, rotating through all folds. Averaging the results gives a steadier estimate of performance.",
    whyItMatters:
      "It gives a more honest picture of how a model will do on new data and uses limited data efficiently.",
    whenItIsUsed:
      "When comparing models or tuning settings, especially with small or medium datasets.",
    example:
      "In 5-fold cross-validation, the data are split into 5 parts; each part serves as the test set once while the other 4 train the model.",
    interpretation:
      "The averaged score estimates out-of-sample performance; a large spread across folds signals instability.",
    assumptions: [
      "Rows are independent, and folds do not leak information into each other.",
    ],
    commonMistakes: [
      "Doing feature selection or scaling on the whole dataset before splitting, which leaks test information into training.",
    ],
    relatedTerms: ["training-data", "validation-data", "test-data", "overfitting", "model-selection"],
    difficulty: "Intermediate",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "training-data",
    term: "Training Data",
    field: "Data Science",
    category: "Machine Learning",
    shortDefinition:
      "Training data is the portion of data a model learns from.",
    simpleExplanation:
      "It is the set of examples the model studies to find patterns. Like a student practicing with worked problems, the model adjusts itself to fit these examples before facing anything new.",
    whyItMatters:
      "The quality and coverage of training data largely determine how well a model performs.",
    whenItIsUsed:
      "In every supervised learning workflow, as the first of the train/validate/test split.",
    example:
      "A spam filter learns from thousands of emails labeled spam or not spam; those labeled emails are the training data.",
    interpretation:
      "Good performance on training data alone means little; the model must also do well on unseen data.",
    commonMistakes: [
      "Judging a model only on training data, which hides overfitting.",
    ],
    relatedTerms: ["validation-data", "test-data", "cross-validation", "overfitting", "supervised-learning"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "validation-data",
    term: "Validation Data",
    field: "Data Science",
    category: "Model Evaluation",
    shortDefinition:
      "Validation data is a held-out set used to tune a model's settings without touching the final test set.",
    simpleExplanation:
      "While training data teaches the model, validation data checks different choices, like how complex the model should be, so you can pick the best version before the final exam on test data.",
    whyItMatters:
      "It keeps model tuning honest by separating the choices you make from the final, untouched evaluation.",
    whenItIsUsed:
      "When selecting model settings or comparing candidate models.",
    example:
      "You try several settings, measure each on the validation set, and keep the one that scores best.",
    interpretation:
      "Validation performance guides choices; the untouched test set gives the final, unbiased estimate.",
    commonMistakes: [
      "Tuning against the test set, which quietly inflates your reported performance.",
    ],
    relatedTerms: ["training-data", "test-data", "cross-validation", "model-selection", "overfitting"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "test-data",
    term: "Test Data",
    field: "Data Science",
    category: "Model Evaluation",
    shortDefinition:
      "Test data is a held-out set used once to measure final model performance on unseen examples.",
    simpleExplanation:
      "It is the final exam. The model never sees it during training or tuning, so its score on the test set is the best estimate of how it will perform in the real world.",
    whyItMatters:
      "It provides an unbiased check that guards against fooling yourself with an over-tuned model.",
    whenItIsUsed:
      "At the very end of model development, after all training and tuning is done.",
    example:
      "After choosing the best model on validation data, you report its accuracy on the untouched test set.",
    interpretation:
      "Use the test set only once; reusing it to make choices turns it into another validation set.",
    commonMistakes: [
      "Peeking at the test set repeatedly, which erodes its role as an honest final check.",
    ],
    relatedTerms: ["training-data", "validation-data", "cross-validation", "overfitting", "performance-metrics"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "overfitting",
    term: "Overfitting",
    field: "Data Science",
    category: "Model Evaluation",
    shortDefinition:
      "Overfitting is when a model learns the noise in its training data and fails on new data.",
    simpleExplanation:
      "A model that memorizes every quirk of the training examples looks brilliant on them but stumbles on anything new. It has learned the noise, not the signal, like a student who memorizes answers instead of understanding.",
    whyItMatters:
      "Overfit models give a false sense of success and perform poorly in the real world.",
    whenItIsUsed:
      "A concern whenever models are flexible or data are limited.",
    example:
      "A model scores 99% on training data but only 70% on test data, a classic sign of overfitting.",
    interpretation:
      "A large gap between training and test performance points to overfitting.",
    commonMistakes: [
      "Adding complexity to chase higher training accuracy while test accuracy falls.",
    ],
    relatedTerms: ["underfitting", "cross-validation", "regularization", "training-data", "test-data"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "underfitting",
    term: "Underfitting",
    field: "Data Science",
    category: "Model Evaluation",
    shortDefinition:
      "Underfitting is when a model is too simple to capture the real patterns in the data.",
    simpleExplanation:
      "An underfit model misses the point. It is so basic that it fails even on the training data, like using a straight line to describe something clearly curved.",
    whyItMatters:
      "Underfit models leave useful signal on the table and perform poorly everywhere.",
    whenItIsUsed:
      "A concern when models are too rigid or important features are missing.",
    example:
      "Fitting a straight line to strongly curved data underfits and predicts poorly.",
    interpretation:
      "Low performance on both training and test data suggests underfitting.",
    commonMistakes: [
      "Blaming the data when the model is simply too simple or missing key features.",
    ],
    relatedTerms: ["overfitting", "cross-validation", "regularization", "feature-engineering", "model-selection"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "model-selection",
    term: "Model Selection",
    field: "Data Science",
    category: "Model Evaluation",
    shortDefinition:
      "Model selection is the process of choosing the best model or settings from several candidates.",
    simpleExplanation:
      "You rarely know the best model up front. Model selection compares options, such as different algorithms or settings, using fair evaluation to pick the one that generalizes best.",
    whyItMatters:
      "The right choice balances accuracy and simplicity, avoiding both overfitting and underfitting.",
    whenItIsUsed:
      "Whenever multiple models or settings are on the table.",
    example:
      "Using cross-validation, you compare a simple and a complex model and keep the one with better validation scores.",
    interpretation:
      "Prefer the simplest model that performs well, since simpler models often generalize better.",
    commonMistakes: [
      "Choosing based on training performance instead of validation or cross-validation.",
    ],
    relatedTerms: ["cross-validation", "validation-data", "overfitting", "performance-metrics", "regularization"],
    difficulty: "Intermediate",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "performance-metrics",
    term: "Performance Metrics",
    field: "Data Science",
    category: "Model Evaluation",
    shortDefinition:
      "Performance metrics are numbers that summarize how well a model does its job.",
    simpleExplanation:
      "Different tasks need different yardsticks. Accuracy, precision, recall, and error measures each capture a different aspect of performance, so you pick the ones that match your goal.",
    whyItMatters:
      "The wrong metric can make a bad model look good, especially with imbalanced data.",
    whenItIsUsed:
      "Whenever you evaluate or compare models.",
    example:
      "For a rare disease, recall may matter more than accuracy, since missing cases is costly.",
    interpretation:
      "Always match the metric to the real-world cost of different mistakes.",
    commonMistakes: [
      "Relying on accuracy for imbalanced data, where predicting the majority class looks deceptively good.",
    ],
    relatedTerms: ["accuracy", "precision-and-recall", "roc-curve", "model-selection", "cross-validation"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "accuracy",
    term: "Accuracy",
    field: "Data Science",
    category: "Model Evaluation",
    shortDefinition:
      "Accuracy is the share of predictions a model gets right.",
    simpleExplanation:
      "It is the simplest score: out of all predictions, how many were correct? It works well when the classes are balanced but can mislead when one class is much more common.",
    whyItMatters:
      "It is easy to understand, but knowing its limits prevents overconfidence on imbalanced problems.",
    whenItIsUsed:
      "For balanced classification tasks and as a quick first check.",
    example:
      "A model that correctly labels 90 of 100 emails has 90% accuracy.",
    formula: "\\text{Accuracy} = \\dfrac{TP + TN}{TP + TN + FP + FN}",
    formulaExplanation:
      "The numerator is all correct predictions (true positives and true negatives); the denominator is all predictions.",
    interpretation:
      "High accuracy is meaningful only when classes are reasonably balanced.",
    commonMistakes: [
      "Using accuracy when 95% of cases are one class, where always guessing that class scores 95%.",
    ],
    relatedTerms: ["performance-metrics", "precision-and-recall", "roc-curve", "classification", "confusion-matrix"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "precision-and-recall",
    term: "Precision and Recall",
    field: "Data Science",
    category: "Model Evaluation",
    shortDefinition:
      "Precision measures how many predicted positives are correct; recall measures how many actual positives are found.",
    simpleExplanation:
      "Precision asks: when the model says yes, how often is it right? Recall asks: of all the true yeses, how many did the model catch? Improving one often lowers the other.",
    whyItMatters:
      "They reveal the trade-off between false alarms and missed cases, which accuracy hides.",
    whenItIsUsed:
      "For imbalanced classification, such as fraud or disease detection.",
    example:
      "A cancer detector with high recall catches most cases but may raise more false alarms, lowering precision.",
    formula: "\\text{Precision} = \\dfrac{TP}{TP + FP}, \\quad \\text{Recall} = \\dfrac{TP}{TP + FN}",
    formulaExplanation:
      "TP, FP, and FN are true positives, false positives, and false negatives. Precision divides by all predicted positives; recall divides by all actual positives.",
    interpretation:
      "The F1 score combines the two into one number when you need a single measure.",
    commonMistakes: [
      "Optimizing one while ignoring the other, which can make a model useless in practice.",
    ],
    relatedTerms: ["accuracy", "performance-metrics", "roc-curve", "classification", "confusion-matrix"],
    difficulty: "Intermediate",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "confusion-matrix",
    term: "Confusion Matrix",
    field: "Data Science",
    category: "Model Evaluation",
    shortDefinition:
      "A confusion matrix is a table showing correct and incorrect predictions for each class.",
    simpleExplanation:
      "It lays out how predictions line up with reality: true positives, true negatives, false positives, and false negatives. From this table you can compute most classification metrics.",
    whyItMatters:
      "It shows not just how often a model is wrong, but in which direction, which matters when errors carry different costs.",
    whenItIsUsed:
      "To diagnose classification performance in detail.",
    example:
      "A confusion matrix reveals a model rarely misses disease but often raises false alarms.",
    interpretation:
      "The diagonal holds correct predictions; off-diagonal cells show the types of mistakes.",
    relatedTerms: ["accuracy", "precision-and-recall", "roc-curve", "classification", "performance-metrics"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "roc-curve",
    term: "ROC Curve",
    abbreviation: "ROC",
    aliases: ["receiver operating characteristic", "auc"],
    field: "Data Science",
    category: "Model Evaluation",
    shortDefinition:
      "An ROC curve shows how a classifier trades off catching true positives against raising false positives.",
    simpleExplanation:
      "As you change the threshold for calling something positive, both true and false positive rates shift. The ROC curve plots this trade-off, and the area under it (AUC) summarizes overall ranking ability.",
    whyItMatters:
      "It compares classifiers across all thresholds and handles imbalanced data better than accuracy.",
    whenItIsUsed:
      "To evaluate and compare binary classifiers and diagnostic tests.",
    example:
      "An AUC of 0.9 means the model ranks a random positive above a random negative 90% of the time.",
    interpretation:
      "AUC ranges from 0.5 (no better than chance) to 1.0 (perfect ranking).",
    commonMistakes: [
      "Relying on AUC alone for very imbalanced data, where a precision-recall curve is more informative.",
    ],
    relatedTerms: ["sensitivity", "specificity", "precision-and-recall", "accuracy", "classification"],
    difficulty: "Intermediate",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "supervised-learning",
    term: "Supervised Learning",
    field: "Data Science",
    category: "Machine Learning",
    shortDefinition:
      "Supervised learning trains a model on labeled examples so it can predict labels for new data.",
    simpleExplanation:
      "You give the model inputs paired with the correct answers. It learns the mapping from inputs to answers, then applies it to new inputs where the answer is unknown.",
    whyItMatters:
      "It powers most practical machine learning, from spam filters to disease predictors.",
    whenItIsUsed:
      "When you have labeled data and want to predict a known target.",
    example:
      "Training on emails labeled spam or not spam so the model can flag future spam.",
    interpretation:
      "Tasks split into classification (predicting categories) and regression (predicting numbers).",
    relatedTerms: ["unsupervised-learning", "classification", "regression", "training-data", "machine-learning"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "unsupervised-learning",
    term: "Unsupervised Learning",
    field: "Data Science",
    category: "Machine Learning",
    shortDefinition:
      "Unsupervised learning finds structure in data that has no labels.",
    simpleExplanation:
      "There are no correct answers to learn from. Instead, the model groups similar items or simplifies the data, discovering patterns on its own, such as natural clusters of customers.",
    whyItMatters:
      "Much real data is unlabeled. Unsupervised methods reveal hidden structure and reduce complexity.",
    whenItIsUsed:
      "For clustering, dimensionality reduction, and exploring unfamiliar data.",
    example:
      "Grouping shoppers into segments based on buying habits without predefined categories.",
    interpretation:
      "Results need human judgment, since there is no ground truth to score against.",
    relatedTerms: ["supervised-learning", "clustering", "dimensionality-reduction", "machine-learning", "principal-component-analysis"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "machine-learning",
    term: "Machine Learning",
    abbreviation: "ML",
    field: "Data Science",
    category: "Machine Learning",
    shortDefinition:
      "Machine learning is a set of methods that let computers learn patterns from data instead of being explicitly programmed.",
    simpleExplanation:
      "Rather than writing exact rules, you show the computer many examples and let it work out the rules itself. The more good examples it sees, the better it usually gets.",
    whyItMatters:
      "It handles problems too complex for hand-written rules, from image recognition to risk prediction.",
    whenItIsUsed:
      "When patterns are complex, data are plentiful, and exact rules are hard to specify.",
    example:
      "A model learns to flag risky transactions from millions of past examples.",
    interpretation:
      "Machine learning finds patterns, not necessarily causes; correlations it learns may not reflect cause and effect.",
    commonMistakes: [
      "Treating a predictive model as if it proved causation.",
    ],
    relatedTerms: ["supervised-learning", "unsupervised-learning", "overfitting", "cross-validation", "artificial-intelligence"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "classification",
    term: "Classification",
    field: "Data Science",
    category: "Classification Methods",
    shortDefinition:
      "Classification is predicting which category an item belongs to.",
    simpleExplanation:
      "The model sorts inputs into discrete groups, such as spam or not spam, or disease or no disease. It learns from labeled examples and then assigns labels to new items.",
    whyItMatters:
      "Countless decisions are yes/no or multi-class, making classification one of the most common tasks.",
    whenItIsUsed:
      "When the target is a category rather than a number.",
    example:
      "Predicting whether a tumor is benign or malignant from imaging features.",
    interpretation:
      "Models often output a probability, which a threshold turns into a class.",
    relatedTerms: ["regression", "supervised-learning", "logistic-regression", "performance-metrics", "random-forest"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "regression",
    term: "Regression",
    field: "Data Science",
    category: "Regression Methods",
    shortDefinition:
      "Regression is predicting a numeric value from input features.",
    simpleExplanation:
      "Instead of a category, the model predicts a number, such as a price, a temperature, or a blood pressure. It learns how the inputs relate to the numeric target.",
    whyItMatters:
      "Many important outcomes are numbers, and regression is the standard tool for predicting them.",
    whenItIsUsed:
      "When the target is continuous rather than a category.",
    example:
      "Predicting a patient's length of hospital stay in days from their characteristics.",
    interpretation:
      "Errors are measured in the target's units, using metrics like mean squared error.",
    relatedTerms: ["classification", "linear-regression", "supervised-learning", "performance-metrics", "overfitting"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "clustering",
    term: "Clustering",
    field: "Data Science",
    category: "Clustering Methods",
    shortDefinition:
      "Clustering groups similar items together without using predefined labels.",
    simpleExplanation:
      "The method looks for natural groupings in data, placing similar points together and separating different ones. You do not tell it the groups; it finds them.",
    whyItMatters:
      "It reveals hidden structure, such as customer segments or cell types, from unlabeled data.",
    whenItIsUsed:
      "In exploratory analysis, customer segmentation, and single cell biology.",
    example:
      "Grouping cells in single cell data into clusters that later get labeled as cell types.",
    interpretation:
      "The number and meaning of clusters often require judgment; different methods can give different groupings.",
    commonMistakes: [
      "Assuming clusters are real biological or business categories without validation.",
    ],
    relatedTerms: ["unsupervised-learning", "dimensionality-reduction", "single-cell-rna-sequencing", "principal-component-analysis", "cell-type-annotation"],
    difficulty: "Intermediate",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "dimensionality-reduction",
    term: "Dimensionality Reduction",
    field: "Data Science",
    category: "Dimensionality Reduction",
    shortDefinition:
      "Dimensionality reduction simplifies data with many features into fewer while keeping the important structure.",
    simpleExplanation:
      "When data have hundreds or thousands of measurements, it is hard to see or model. These methods compress the data into a few new features that still capture most of the meaningful variation.",
    whyItMatters:
      "It makes high-dimensional data easier to visualize, speeds up models, and can reduce noise.",
    whenItIsUsed:
      "In genomics, imaging, and any setting with many features, often before clustering or plotting.",
    example:
      "Reducing thousands of genes to two dimensions to plot single cells on a simple scatter.",
    interpretation:
      "The new axes are combinations of original features and may not have direct real-world meaning.",
    commonMistakes: [
      "Over-reading distances in a 2D projection, which can distort the true structure.",
    ],
    relatedTerms: ["principal-component-analysis", "clustering", "unsupervised-learning", "single-cell-rna-sequencing", "feature-engineering"],
    difficulty: "Intermediate",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "principal-component-analysis",
    term: "Principal Component Analysis",
    abbreviation: "PCA",
    field: "Data Science",
    category: "Dimensionality Reduction",
    shortDefinition:
      "PCA finds new axes that capture the most variation in the data, letting you describe it with fewer numbers.",
    simpleExplanation:
      "PCA rotates the data to find directions, called principal components, along which it varies most. Keeping the first few components summarizes the data with little loss, which helps with plotting and modeling.",
    whyItMatters:
      "It is a fast, widely used way to compress data, remove noise, and visualize high-dimensional datasets.",
    whenItIsUsed:
      "Before clustering or modeling, and to visualize data such as gene expression.",
    example:
      "Plotting the first two principal components of gene expression can separate tumor from normal samples.",
    interpretation:
      "Each component explains a share of the total variance; the first explains the most.",
    assumptions: [
      "Directions of largest variance are the most informative, and relationships are roughly linear.",
    ],
    commonMistakes: [
      "Forgetting to scale features first, so large-scale variables dominate the components.",
    ],
    relatedTerms: ["dimensionality-reduction", "clustering", "unsupervised-learning", "feature-engineering", "single-cell-rna-sequencing"],
    difficulty: "Intermediate",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "random-forest",
    term: "Random Forest",
    field: "Data Science",
    category: "Classification Methods",
    shortDefinition:
      "A random forest combines many decision trees to make more accurate and stable predictions.",
    simpleExplanation:
      "A single decision tree is easy to read but can be unstable. A random forest grows many trees on random slices of the data and features, then averages their votes, which usually improves accuracy and reduces overfitting.",
    whyItMatters:
      "It works well out of the box on many problems and handles complex patterns with little tuning.",
    whenItIsUsed:
      "For classification and regression on tabular data.",
    example:
      "A random forest predicts disease risk from dozens of clinical features with strong accuracy.",
    interpretation:
      "Feature importance scores hint at which inputs matter, though they should be read with care.",
    assumptions: [
      "Enough trees and data for the averaging to stabilize predictions.",
    ],
    commonMistakes: [
      "Treating feature importance as proof of causation.",
    ],
    relatedTerms: ["classification", "regression", "overfitting", "cross-validation", "machine-learning"],
    difficulty: "Intermediate",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "feature-engineering",
    term: "Feature Engineering",
    field: "Data Science",
    category: "Feature Engineering",
    shortDefinition:
      "Feature engineering is creating and shaping the input variables a model learns from.",
    simpleExplanation:
      "Raw data are rarely in the best form for a model. Feature engineering transforms them, by combining, scaling, or encoding, so the model can find patterns more easily. Good features often matter more than the choice of algorithm.",
    whyItMatters:
      "Thoughtful features can lift performance far more than swapping models.",
    whenItIsUsed:
      "During data preparation, before and during modeling.",
    example:
      "Turning a birth date into an age, or combining height and weight into body mass index.",
    interpretation:
      "Features should be created using only training data to avoid leaking information from the test set.",
    commonMistakes: [
      "Building features from the whole dataset, leaking future or test information into training.",
    ],
    relatedTerms: ["data-cleaning", "dimensionality-reduction", "overfitting", "cross-validation", "machine-learning"],
    difficulty: "Intermediate",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "data-cleaning",
    term: "Data Cleaning",
    aliases: ["data cleansing"],
    field: "Data Science",
    category: "Data Cleaning",
    shortDefinition:
      "Data cleaning fixes errors, inconsistencies, and missing values so data are ready for analysis.",
    simpleExplanation:
      "Real data are messy: typos, duplicates, wrong units, and gaps. Cleaning finds and fixes these problems so later analysis is trustworthy. It often takes most of a project's time.",
    whyItMatters:
      "Analysis built on dirty data produces misleading results no matter how good the methods are.",
    whenItIsUsed:
      "Early in almost every data project, before analysis or modeling.",
    example:
      "Standardizing dates, removing duplicate records, and correcting impossible ages before analysis.",
    interpretation:
      "Document every cleaning step so the work is reproducible and defensible.",
    commonMistakes: [
      "Silently dropping rows with missing values, which can introduce bias.",
    ],
    relatedTerms: ["missing-values", "feature-engineering", "exploratory-data-analysis", "reproducible-research", "data-pipeline"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "missing-values",
    term: "Missing Values",
    aliases: ["missing data"],
    field: "Data Science",
    category: "Data Cleaning",
    shortDefinition:
      "Missing values are gaps in a dataset where information was not recorded.",
    simpleExplanation:
      "Sometimes a value is simply not there, because it was never collected, was lost, or does not apply. How you handle these gaps can change your results, so it deserves care.",
    whyItMatters:
      "Ignoring or mishandling missing data can bias estimates and weaken models.",
    whenItIsUsed:
      "In nearly every real dataset, addressed during cleaning and analysis.",
    example:
      "A survey where some people skipped the income question has missing values there.",
    interpretation:
      "Why data are missing matters: values missing at random are easier to handle than values missing because of what they would have been.",
    commonMistakes: [
      "Filling gaps with the mean without considering why the data are missing.",
    ],
    relatedTerms: ["data-cleaning", "feature-engineering", "exploratory-data-analysis", "bias", "reproducible-research"],
    difficulty: "Intermediate",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "exploratory-data-analysis",
    term: "Exploratory Data Analysis",
    abbreviation: "EDA",
    field: "Data Science",
    category: "Exploratory Analysis",
    shortDefinition:
      "Exploratory data analysis is the first look at data using summaries and plots to understand it.",
    simpleExplanation:
      "Before formal modeling, you get to know the data: its shape, ranges, oddities, and relationships. Simple charts and summaries reveal problems and hints that guide the rest of the work.",
    whyItMatters:
      "It catches errors early and shapes better questions and models.",
    whenItIsUsed:
      "Right after data cleaning and before modeling.",
    example:
      "Plotting histograms and scatterplots reveals an outlier and a strong correlation worth exploring.",
    interpretation:
      "Findings are clues to investigate, not final conclusions.",
    commonMistakes: [
      "Skipping exploration and jumping straight to modeling, missing obvious data problems.",
    ],
    relatedTerms: ["data-cleaning", "data-visualization", "missing-values", "feature-engineering", "descriptive-statistics"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "data-visualization",
    term: "Data Visualization",
    field: "Data Science",
    category: "Visualization",
    shortDefinition:
      "Data visualization presents data as charts and graphics so patterns are easy to see.",
    simpleExplanation:
      "Numbers in a table are hard to grasp. Turning them into well-chosen charts lets people spot trends, comparisons, and outliers quickly and communicate findings clearly.",
    whyItMatters:
      "Good visuals speed understanding and reduce the chance of misreading data.",
    whenItIsUsed:
      "In exploration and in communicating results to others.",
    example:
      "A line chart of cases over time makes a rising trend obvious at a glance.",
    interpretation:
      "Chart choices, such as axis scales, can shape the message, so honesty matters.",
    commonMistakes: [
      "Using misleading scales or chart types that distort the true pattern.",
    ],
    relatedTerms: ["exploratory-data-analysis", "descriptive-statistics", "data-cleaning", "reproducible-research", "volcano-plot"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "descriptive-statistics",
    term: "Descriptive Statistics",
    field: "Data Science",
    category: "Exploratory Analysis",
    shortDefinition:
      "Descriptive statistics summarize data with simple numbers like averages and spreads.",
    simpleExplanation:
      "They condense a big set of numbers into a few that describe it: where the center is, how spread out it is, and its shape. They describe what you have, without drawing conclusions about a wider population.",
    whyItMatters:
      "They are the first, clearest summary of any dataset and the foundation for deeper analysis.",
    whenItIsUsed:
      "At the start of analysis and in reporting the makeup of a sample.",
    example:
      "Reporting the mean age, the age range, and the share of women in a study sample.",
    interpretation:
      "They describe the data at hand; inferring beyond it requires inferential methods.",
    commonMistakes: [
      "Treating descriptive summaries as if they generalized to a whole population.",
    ],
    relatedTerms: ["mean", "median", "standard-deviation", "exploratory-data-analysis", "data-visualization"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "reproducible-research",
    term: "Reproducible Research",
    field: "Data Science",
    category: "Reproducible Analysis",
    shortDefinition:
      "Reproducible research means others can rerun your analysis and get the same results.",
    simpleExplanation:
      "If you share your data, code, and steps clearly enough that someone else can reproduce your findings, your work is reproducible. This builds trust and makes results easier to check and reuse.",
    whyItMatters:
      "Reproducibility is a cornerstone of trustworthy science and reliable data work.",
    whenItIsUsed:
      "Throughout a project, via version control, scripts, and clear documentation.",
    example:
      "Sharing a documented script and environment so a colleague can regenerate every figure.",
    interpretation:
      "Reproducibility (same result from same data and code) is a first step toward replicability (same conclusion from new data).",
    commonMistakes: [
      "Doing manual, undocumented steps that no one, including you later, can repeat.",
    ],
    relatedTerms: ["data-cleaning", "data-pipeline", "r-programming", "python-programming", "version-control"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "data-pipeline",
    term: "Data Pipeline",
    field: "Data Science",
    category: "Data Pipelines",
    shortDefinition:
      "A data pipeline is an automated series of steps that moves and transforms data from source to result.",
    simpleExplanation:
      "Instead of doing each step by hand, a pipeline chains them, pulling in data, cleaning it, transforming it, and delivering output, so the whole flow runs reliably and repeatably.",
    whyItMatters:
      "Pipelines make analysis reproducible, scalable, and less error-prone.",
    whenItIsUsed:
      "In production systems and any repeated analysis workflow.",
    example:
      "A nightly pipeline pulls new records, cleans them, and updates a dashboard automatically.",
    interpretation:
      "A good pipeline is monitored and versioned so failures are caught and results can be traced.",
    relatedTerms: ["data-cleaning", "reproducible-research", "sql", "cloud-computing", "python-programming"],
    difficulty: "Intermediate",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "artificial-intelligence",
    term: "Artificial Intelligence",
    abbreviation: "AI",
    field: "Data Science",
    category: "Artificial Intelligence",
    shortDefinition:
      "Artificial intelligence is the field of building systems that perform tasks that normally require human intelligence.",
    simpleExplanation:
      "AI covers any technique that lets machines do things like recognize images, understand language, or make decisions. Machine learning is the most common modern approach to building AI.",
    whyItMatters:
      "AI increasingly supports diagnosis, research, and analysis, so understanding its basics is valuable.",
    whenItIsUsed:
      "In tools for image analysis, language processing, forecasting, and decision support.",
    example:
      "An AI system reads medical images and flags ones that may show disease for a doctor to review.",
    interpretation:
      "AI systems can be powerful yet imperfect; they need human oversight and careful evaluation.",
    commonMistakes: [
      "Assuming an AI system is objective; it reflects the data and choices used to build it.",
    ],
    relatedTerms: ["machine-learning", "supervised-learning", "natural-language-processing", "model-selection", "performance-metrics"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "natural-language-processing",
    term: "Natural Language Processing",
    abbreviation: "NLP",
    field: "Data Science",
    category: "Natural Language Processing",
    shortDefinition:
      "Natural language processing lets computers work with human language, such as text and speech.",
    simpleExplanation:
      "NLP teaches machines to read, understand, and generate language. It powers tools that summarize notes, answer questions, or pull structured facts out of free text.",
    whyItMatters:
      "Much health and research information lives in text, and NLP unlocks it for analysis.",
    whenItIsUsed:
      "To mine clinical notes, search literature, and build chat and summarization tools.",
    example:
      "An NLP tool scans clinical notes to find patients who smoke, even when it is not coded.",
    interpretation:
      "Language is ambiguous, so NLP outputs need validation, especially in high-stakes settings.",
    commonMistakes: [
      "Trusting extracted information without checking accuracy on real notes.",
    ],
    relatedTerms: ["machine-learning", "artificial-intelligence", "classification", "feature-engineering", "supervised-learning"],
    difficulty: "Intermediate",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "sql",
    term: "SQL",
    abbreviation: "SQL",
    aliases: ["structured query language"],
    field: "Data Science",
    category: "SQL",
    shortDefinition:
      "SQL is a language for storing, retrieving, and managing data in relational databases.",
    simpleExplanation:
      "SQL lets you ask a database questions, like 'show all patients over 60 with diabetes', and get organized answers. It is the standard way to work with structured, table-based data.",
    whyItMatters:
      "Most organizational data live in relational databases, so SQL is a core data skill.",
    whenItIsUsed:
      "To query and join tables, aggregate data, and prepare datasets for analysis.",
    example:
      "A single SQL query counts hospital visits per month from millions of records.",
    interpretation:
      "SQL describes what data you want; the database decides how to fetch it efficiently.",
    relatedTerms: ["data-pipeline", "reproducible-research", "python-programming", "r-programming", "cloud-computing"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "python-programming",
    term: "Python",
    aliases: ["python programming"],
    field: "Data Science",
    category: "Python Programming",
    shortDefinition:
      "Python is a popular, readable programming language widely used for data science and bioinformatics.",
    simpleExplanation:
      "Python is easy to read and has powerful libraries for data work, from cleaning and analysis to machine learning. Its simplicity makes it a common first language for scientists.",
    whyItMatters:
      "Its rich ecosystem makes it a default choice for analysis, modeling, and automation.",
    whenItIsUsed:
      "For data cleaning, machine learning, bioinformatics, and building pipelines.",
    example:
      "A researcher uses Python with pandas and scikit-learn to clean data and train a model.",
    interpretation:
      "Libraries do the heavy lifting; knowing which to use is half the skill.",
    relatedTerms: ["r-programming", "sql", "machine-learning", "reproducible-research", "data-pipeline"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "r-programming",
    term: "R",
    aliases: ["r programming", "r language"],
    field: "Data Science",
    category: "R Programming",
    shortDefinition:
      "R is a programming language built for statistics, data analysis, and graphics.",
    simpleExplanation:
      "R was designed by and for statisticians. It excels at statistical modeling and visualization and has deep libraries for biostatistics and bioinformatics, such as those in Bioconductor.",
    whyItMatters:
      "It is a standard tool in statistics and genomics, with methods often available in R first.",
    whenItIsUsed:
      "For statistical modeling, visualization, and bioinformatics analysis.",
    example:
      "A biostatistician fits a survival model and plots Kaplan-Meier curves in R.",
    interpretation:
      "R shines for analysis and stats; the choice between R and Python often comes down to team and task.",
    relatedTerms: ["python-programming", "sql", "reproducible-research", "survival-analysis", "differential-expression"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "cloud-computing",
    term: "Cloud Computing",
    field: "Data Science",
    category: "Cloud Computing",
    shortDefinition:
      "Cloud computing provides computing power and storage over the internet, rented as needed.",
    simpleExplanation:
      "Instead of buying and maintaining your own servers, you rent them from a provider and scale up or down on demand. This suits large analyses, such as processing genomic data, that need bursts of power.",
    whyItMatters:
      "It makes heavy computation and storage affordable and scalable without owning hardware.",
    whenItIsUsed:
      "For large-scale data processing, storage, and running pipelines and models.",
    example:
      "A lab runs a genomics pipeline on rented cloud servers, then shuts them down to save money.",
    interpretation:
      "You trade fixed hardware costs for flexible, usage-based costs, which need monitoring.",
    commonMistakes: [
      "Leaving cloud resources running after a job finishes, leading to surprise bills.",
    ],
    relatedTerms: ["data-pipeline", "reproducible-research", "sql", "python-programming", "machine-learning"],
    difficulty: "Beginner",
    author: AUTHOR,
    reviewer: REVIEWER,
    reviewStatus: "Published",
    dateCreated: D,
    lastReviewed: D,
    dateModified: D,
  },
  {
    slug: "version-control",
    term: "Version Control",
    aliases: ["git"],
    field: "Data Science",
    category: "Reproducible Analysis",
    shortDefinition:
      "Version control tracks changes to code and files so you can review history and collaborate safely.",
    simpleExplanation:
      "It keeps a full history of your project, who changed what and when, and lets several people work together without overwriting each other. Git is the most common tool.",
    whyItMatters:
      "It underpins reproducibility and teamwork, letting you undo mistakes and trace results to exact code.",
    whenItIsUsed:
      "In every serious coding and analysis project.",
    example:
      "Using Git, a team reverts a broken change and sees exactly which edit caused a bug.",
    interpretation:
      "Commits are checkpoints; good messages make the history useful later.",
    relatedTerms: ["reproducible-research", "data-pipeline", "python-programming", "r-programming", "cloud-computing"],
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
