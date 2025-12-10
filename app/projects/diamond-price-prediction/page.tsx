import Link from "next/link";
import type { Metadata } from "next";

const features = [
  "Guided ingestion that validates CSV schemas and catches missing attributes before training",
  "Transformation service that scales numeric fields and one-hot encodes cut, color, and clarity",
  "Model registry comparing Linear, Lasso, Ridge, and Decision Tree regressors",
  "Flask UI with a responsive form and instant predictions",
  "Background job that logs each prediction for drift analysis"
];

const attributes = [
  { label: "carat", detail: "Gemstone weight captured to two decimal places" },
  { label: "cut", detail: "Categorical grade capturing light performance" },
  { label: "color", detail: "Graded scale from D to J representing hue" },
  { label: "clarity", detail: "Visibility of inclusions under 10x magnification" },
  { label: "depth", detail: "Height from culet to table expressed as a percentage" },
  { label: "table", detail: "Top facet width relative to the girdle" },
  { label: "x", detail: "Length in millimeters" },
  { label: "y", detail: "Width in millimeters" },
  { label: "z", detail: "Depth in millimeters" }
];

const stack = [
  "Python",
  "Pandas",
  "scikit-learn",
  "Flask",
  "HTML/CSS",
  "Docker"
];

const workflow = [
  {
    title: "Data ingestion",
    detail:
      "Batch jobs pull raw Kaggle exports, validate schema, and persist clean parquet files so training stays reproducible." 
  },
  {
    title: "Feature engineering",
    detail:
      "Numeric fields are scaled with RobustScaler, categorical grades become one-hot vectors, and interaction terms capture non-linear relationships." 
  },
  {
    title: "Model comparison",
    detail:
      "Grid search tunes Linear, Lasso, Ridge, and Decision Tree regressors. Metrics, coefficients, and feature importances are logged for review." 
  },
  {
    title: "Serving layer",
    detail:
      "The champion model is serialized to pickle, loaded inside a Flask Blueprint, and fronted by a user-friendly HTML form with validation." 
  }
];

export const metadata: Metadata = {
  title: "Diamond Price Prediction"
};

export default function DiamondPricePredictionPage() {
  return (
    <div className="space-y-16">
      <section className="rounded-3xl border border-zinc-200 bg-white/80 p-10 shadow-[0_35px_120px_-40px_rgba(15,23,42,0.45)] backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-300">
          Case Study
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-zinc-900 dark:text-white">
          Diamond Price Prediction
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-zinc-600 dark:text-zinc-300">
          An open-source workflow that helps gem traders, jewelers, and hobbyists price
          diamonds with confidence. The system ingests raw datasets, engineers features,
          benchmarks multiple regressors, and wraps the winning model in a polished Flask
          app so anyone can estimate prices from a browser.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="https://github.com/anishdahiya1/Diamond-price-prediction"
            target="_blank"
            className="inline-flex items-center rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900"
          >
            View GitHub repo
          </Link>
          <Link
            href="mailto:anishdahiya89@gmail.com?subject=Diamond%20Price%20Prediction%20Demo"
            className="inline-flex items-center rounded-full border border-zinc-300 px-5 py-2 text-sm font-semibold text-zinc-900 transition hover:border-zinc-900 dark:border-zinc-700 dark:text-white"
          >
            Request a walkthrough
          </Link>
        </div>
        <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Role</dt>
            <dd className="text-base font-medium text-zinc-900 dark:text-white">Data Scientist</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Timeline</dt>
            <dd className="text-base font-medium text-zinc-900 dark:text-white">May–Aug 2023</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Stack highlights</dt>
            <dd className="text-base font-medium text-zinc-900 dark:text-white">Flask, scikit-learn, Docker</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Impact</dt>
            <dd className="text-base font-medium text-zinc-900 dark:text-white">R2 of 0.98 on holdout</dd>
          </div>
        </dl>
      </section>

      <section className="grid gap-10 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">Why it mattered</h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-300">
            Appraisers often rely on spreadsheets or manual heuristics to price stones.
            This project shows how a transparent ML workflow can turn raw data into an
            interactive estimator that educates end users about the levers that influence
            price while keeping the experience approachable.
          </p>
        </div>
        <div className="rounded-3xl border border-dashed border-zinc-200 p-6 dark:border-zinc-800 lg:col-span-3">
          <ul className="space-y-4 text-sm text-zinc-600 dark:text-zinc-300">
            {features.map((item) => (
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
            Training pipelines run inside Docker so feature engineering and evaluation are
            identical locally and in CI. The Flask app consumes the packaged model via a
            lightweight service that performs validation, prediction, and response
            formatting in under 200 ms.
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
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Dataset essentials</h3>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
            Users can inspect the exact attributes the model expects. Each field is
            documented in both the repo and the UI so collectors know why predictions move
            when they tweak inputs.
          </p>
          <dl className="mt-6 grid gap-4 text-sm text-zinc-600 dark:text-zinc-300">
            {attributes.map((attr) => (
              <div key={attr.label}>
                <dt className="font-semibold text-zinc-900 dark:text-white">{attr.label}</dt>
                <dd>{attr.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="space-y-8">
        <div className="max-w-2xl">
          <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">Workflow and guardrails</h3>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-300">
            The end-to-end flow mirrors production data science teams: ingest, feature,
            model, evaluate, deploy, monitor. Each layer surfaces artifacts so future
            contributors can extend the stack with gradient boosting or cloud hosting.
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
                <span className="font-semibold text-zinc-900 dark:text-white">R2 0.98 / RMSE 492</span>
                &nbsp;on a held-out validation split.
              </li>
              <li>
                <span className="font-semibold text-zinc-900 dark:text-white">Two-minute onboarding</span>
                &nbsp;since the web form explains every field inline.
              </li>
              <li>
                <span className="font-semibold text-zinc-900 dark:text-white">Deployment ready</span>
                &nbsp;with Dockerfile, requirements lock, and CI hooks.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Extend it</h3>
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
              Want to swap in gradient boosting, add SHAP explanations, or host on
              Render? The repo includes templates and docs to accelerate your fork. Happy
              to pair on custom pricing tools for retail or wholesale operations.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="mailto:anishdahiya89@gmail.com?subject=Diamond%20Pricing%20Collab"
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
