import Link from "next/link";
import type { Metadata } from "next";

const biomarkers = [
  "MDVP:Fo(Hz) – fundamental frequency",
  "Jitter / Jitter(%) – micro-variations in pitch",
  "Shimmer / Shimmer(dB) – amplitude deviations",
  "NHR / HNR – noise-to-harmonics ratios",
  "RPDE + DFA – nonlinear complexity measures",
  "PPE – fundamental frequency variation"
];

const workflow = [
  {
    title: "Data curation",
    detail:
      "Aggregated biomedical voice samples from Parkinson's and healthy cohorts, tracked provenance, and tagged recordings with session metadata." 
  },
  {
    title: "Preprocessing + EDA",
    detail:
      "Imputed missing values, standardized every feature, and ran correlation heatmaps plus SHAP-style importance to understand drivers." 
  },
  {
    title: "Model benchmarking",
    detail:
      "Cross-validated Logistic Regression, SVM (RBF), Random Forest, and KNN classifiers with precision/recall + ROC monitoring." 
  },
  {
    title: "Explainability + reporting",
    detail:
      "Generated coefficient tables, confusion matrices, and clinician-friendly insights that highlight dominant biomarkers." 
  }
];

const stack = [
  "Python",
  "NumPy",
  "pandas",
  "scikit-learn",
  "Matplotlib",
  "Seaborn"
];

const models = [
  {
    name: "Logistic Regression",
    metric: "≈86% accuracy",
    note: "Champion model—interpretable weights and reliable calibration for screening workflows."
  },
  {
    name: "SVM (RBF)",
    metric: "High accuracy",
    note: "Great precision but harder to explain to clinicians."
  },
  {
    name: "Random Forest",
    metric: "Strong F1",
    note: "Captures feature interactions; used as a robustness check."
  },
  {
    name: "KNN",
    metric: "Lagging",
    note: "Too sensitive to scaling and noisy neighbors, documented as a baseline."
  }
];

export const metadata: Metadata = {
  title: "Parkinson's Disease Prediction"
};

export default function ParkinsonsDiseasePredictionPage() {
  return (
    <div className="space-y-16">
      <section className="rounded-3xl border border-zinc-200 bg-white/80 p-10 shadow-[0_35px_120px_-40px_rgba(15,23,42,0.45)] backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-300">
          Case Study
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-zinc-900 dark:text-white">
          Parkinson's Disease Prediction
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-zinc-600 dark:text-zinc-300">
          A biomedical voice analytics pipeline that detects early Parkinsonian
          signatures. The project standardizes acoustic biomarkers, compares supervised
          learning models, and surfaces interpretable outputs clinicians can trust for
          screening support.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="https://github.com/anishdahiya1/An-Ensemble-Learning-Approach-for-Early-Diagnosis-of-Parkinson-s-Disease-using-Multimodal-Dataa"
            target="_blank"
            className="inline-flex items-center rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900"
          >
            View GitHub repo
          </Link>
          <Link
            href="mailto:anishdahiya89@gmail.com?subject=Parkinson%27s%20Prediction%20Review"
            className="inline-flex items-center rounded-full border border-zinc-300 px-5 py-2 text-sm font-semibold text-zinc-900 transition hover:border-zinc-900 dark:border-zinc-700 dark:text-white"
          >
            Request a walkthrough
          </Link>
        </div>
        <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Role</dt>
            <dd className="text-base font-medium text-zinc-900 dark:text-white">ML Researcher</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Timeline</dt>
            <dd className="text-base font-medium text-zinc-900 dark:text-white">Jan–Apr 2022</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Stack highlights</dt>
            <dd className="text-base font-medium text-zinc-900 dark:text-white">scikit-learn, pandas, Seaborn</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Impact</dt>
            <dd className="text-base font-medium text-zinc-900 dark:text-white">86% accuracy baseline</dd>
          </div>
        </dl>
      </section>

      <section className="grid gap-10 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">Why voice?</h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-300">
            Voice deviations appear before overt motor decline, making acoustic biomarkers
            a promising early-warning channel. By quantifying jitter, shimmer, and
            spectral noise, the model offers clinicians an inexpensive triage aid that
            complements in-person exams.
          </p>
        </div>
        <div className="rounded-3xl border border-dashed border-zinc-200 p-6 dark:border-zinc-800 lg:col-span-3">
          <ul className="space-y-4 text-sm text-zinc-600 dark:text-zinc-300">
            {biomarkers.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand-500" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-zinc-200 p-8 dark:border-zinc-800">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Architecture snapshot</h3>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
            A modular notebook-to-library workflow: preprocessing utilities clean and
            scale inputs, training scripts benchmark models with cross-validation, and a
            reporting module exports metrics, plots, and coefficients for clinicians.
          </p>
          <ul className="mt-6 grid gap-3 text-sm text-zinc-600 dark:text-zinc-300">
            {stack.map((item) => (
              <li key={item} className="rounded-2xl border border-zinc-100 px-4 py-3 dark:border-zinc-800">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-zinc-200 p-8 dark:border-zinc-800">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Model lineup</h3>
          <ul className="mt-4 space-y-4 text-sm text-zinc-600 dark:text-zinc-300">
            {models.map((model) => (
              <li key={model.name} className="rounded-2xl border border-zinc-100 p-4 dark:border-zinc-800">
                <p className="font-semibold text-zinc-900 dark:text-white">{model.name}</p>
                <p>
                  {model.metric} — {model.note}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-8">
        <div className="max-w-2xl">
          <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">Workflow and validation</h3>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-300">
            Every experiment logs confusion matrices, ROC curves, and class-wise recall.
            Clinical usability is preserved by favoring interpretable coefficients and
            by flagging predictions that fall within an uncertainty margin.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-4">
          {workflow.map((stage) => (
            <div key={stage.title} className="rounded-3xl border border-zinc-200 p-6 dark:border-zinc-800">
              <h4 className="text-base font-semibold text-zinc-900 dark:text-white">{stage.title}</h4>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">{stage.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-zinc-200 p-8 dark:border-zinc-800">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Outcomes</h3>
            <ul className="mt-4 space-y-4 text-sm text-zinc-600 dark:text-zinc-300">
              <li>
                <span className="font-semibold text-zinc-900 dark:text-white">86% accuracy baseline</span>
                &nbsp;with clean coefficient reporting for clinicians.
              </li>
              <li>
                <span className="font-semibold text-zinc-900 dark:text-white">ROC-AUC 0.91</span>
                &nbsp;demonstrating strong separation of positive cases.
              </li>
              <li>
                <span className="font-semibold text-zinc-900 dark:text-white">Feature transparency</span>
                &nbsp;thanks to per-biomarker importance exports.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Extend it</h3>
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
              The repo includes preprocessing scripts, model configs, and evaluation
              templates so labs can swap in new biomarkers or multimodal signals. I'm
              happy to adapt the workflow to your research study or clinical trial.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="mailto:anishdahiya89@gmail.com?subject=Parkinson%27s%20AI%20Collab"
                className="inline-flex items-center rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-500"
              >
                Book a working session
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:border-zinc-900 dark:border-zinc-700 dark:text-white"
              >
                Talk to me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
