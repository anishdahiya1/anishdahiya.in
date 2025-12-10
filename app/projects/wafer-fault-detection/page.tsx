import Link from "next/link";
import type { Metadata } from "next";

const stack = [
  "FastAPI scoring service",
  "Docker + GitHub Actions",
  "AWS S3, SQS, Step Functions",
  "Elastic Beanstalk (Blue/Green)",
  "Grafana + Prometheus"
];

const pipeline = [
  {
    title: "Sensor integrity gate",
    detail:
      "Validates 590-sensor payloads in less than 800 ms with schema checks, missing value heuristics, and 3-sigma drift rules before persisting to S3." 
  },
  {
    title: "Feature alignment",
    detail:
      "Interpolates out-of-phase signals and standardizes per-sensor distributions to keep the downstream clustering step stable across fabs." 
  },
  {
    title: "Adaptive clustering",
    detail:
      "Uses a silhouette-tuned DBSCAN job (or K-Means fallback) to group wafers with similar fault signatures, enabling per-cluster model selection." 
  },
  {
    title: "Model selector",
    detail:
      "Tests Random Forest vs. XGBoost per cluster each week; promotes the champion to the inference stack with shadow validation in SageMaker notebooks." 
  }
];

const validation = [
  {
    title: "Lot-level backtesting",
    detail: "Replays the last 90 days of production lots nightly with time-based splits to ensure no leakage in metric reporting." 
  },
  {
    title: "Fail-fast canaries",
    detail:
      "Routes 2% of wafers through a shadow stack whenever a new model is promoted; aborts automatically if precision drops below 92%." 
  },
  {
    title: "Sensor drift monitors",
    detail:
      "Publishes a drift score per sensor to Grafana; alerts trigger when the KL divergence vs. baseline exceeds 0.08 for 15 mins." 
  }
];

export const metadata: Metadata = {
  title: "Wafer Fault Detection"
};

export default function WaferFaultDetectionPage() {
  return (
    <div className="space-y-16">
      <section className="rounded-3xl border border-zinc-200 bg-white/80 p-10 shadow-[0_35px_120px_-40px_rgba(15,23,42,0.45)] backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-300">
          Case Study
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-zinc-900 dark:text-white">
          Wafer Fault Detection
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-zinc-600 dark:text-zinc-300">
          Built an end-to-end workflow that ingests 590-sensor wafer batches, clusters
          abnormal signatures, and automatically promotes the best Random Forest or
          XGBoost model per cluster—cutting false scrap calls by 37% for a Tier-1 OSAT.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="https://github.com/anishdahiya1/wafer-fault-detection"
            target="_blank"
            className="inline-flex items-center rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900"
          >
            View GitHub repo
          </Link>
          <Link
            href="https://wafer-fault-demo.elasticbeanstalk.com"
            target="_blank"
            className="inline-flex items-center rounded-full border border-zinc-300 px-5 py-2 text-sm font-semibold text-zinc-900 transition hover:border-zinc-900 dark:border-zinc-700 dark:text-white"
          >
            Launch Elastic Beanstalk demo
          </Link>
        </div>
        <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              Role
            </dt>
            <dd className="text-base font-medium text-zinc-900 dark:text-white">
              Lead ML Engineer
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              Timeline
            </dt>
            <dd className="text-base font-medium text-zinc-900 dark:text-white">
              Feb–Jun 2024
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              Stack highlights
            </dt>
            <dd className="text-base font-medium text-zinc-900 dark:text-white">
              AWS, FastAPI, MLflow
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              Impact
            </dt>
            <dd className="text-base font-medium text-zinc-900 dark:text-white">
              37% fewer false rejects
            </dd>
          </div>
        </dl>
      </section>

      <section className="grid gap-10 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
            Why it mattered
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-300">
            Incoming wafer lots were regularly quarantined because the legacy SPC rules
            could not account for cross-sensor correlations. Operators spent hours on
            manual triage, slowing down the burn-in line and inflating scrap cost. We
            needed a classifier that treated wafers as multivariate time series, gave
            confidence bands per sensor cluster, and plugged into the existing MES APIs
            without slowing production.
          </p>
        </div>
        <div className="rounded-3xl border border-dashed border-zinc-200 p-6 dark:border-zinc-800 lg:col-span-3">
          <ul className="space-y-4 text-sm text-zinc-600 dark:text-zinc-300">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-500" />
              <p>
                <span className="font-semibold text-zinc-900 dark:text-white">
                  590 sensors x 178 wafers/lot:
                </span>
                &nbsp;raw telemetry streamed from Advantest V93000 handlers into S3 via
                Kinesis Firehose every 7 minutes.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-500" />
              <p>
                <span className="font-semibold text-zinc-900 dark:text-white">
                  92% precision floor:
                </span>
                &nbsp;business threshold to avoid swamping operators with false alarms.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-500" />
              <p>
                <span className="font-semibold text-zinc-900 dark:text-white">
                  p99 latency &lt; 2.5s:
                </span>
                &nbsp;required for real-time gating before wafers hit burn-in.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-zinc-200 p-8 dark:border-zinc-800">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Architecture snapshot
          </h3>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
            Streaming telemetry lands in S3, kicks off Step Functions that run
            validation, clustering, model selection, and metric logging. Inference lives
            inside a FastAPI service containerized via Docker, deployed on Elastic
            Beanstalk with autoscaling rules tied to lot volume.
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
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Ops automation
          </h3>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
            GitHub Actions handles build-test-lint, launches smoke tests against the
            Beanstalk staging env, and rolls traffic with a blue/green swap. Model
            metadata and experiment lineage live in MLflow so the quality team can audit
            every promotion.
          </p>
          <div className="mt-6 rounded-2xl bg-zinc-900/5 p-5 text-sm text-zinc-700 dark:bg-white/5 dark:text-zinc-200">
            <p>
              <span className="font-semibold">CI runtime:</span> 6m 20s
            </p>
            <p>
              <span className="font-semibold">Promotion cadence:</span> weekly or on
              drift alert
            </p>
            <p>
              <span className="font-semibold">Rollback budget:</span> &lt; 30s via
              blue/green swap
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="max-w-2xl">
          <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">
            Pipeline, modeling, and guardrails
          </h3>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-300">
            Each wafer is processed as a multivariate sequence. LightGBM was considered
            but ultimately rejected because tree-based methods with class weighting hit
            the latency budget without GPU burn. Guardrails keep the system safe even
            when a fab recalibrates sensors mid-shift.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {pipeline.map((stage) => (
            <div key={stage.title} className="rounded-3xl border border-zinc-200 p-6 dark:border-zinc-800">
              <h4 className="text-base font-semibold text-zinc-900 dark:text-white">
                {stage.title}
              </h4>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">{stage.detail}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {validation.map((item) => (
            <div key={item.title} className="rounded-3xl border border-zinc-200 p-6 dark:border-zinc-800">
              <h4 className="text-base font-semibold text-zinc-900 dark:text-white">
                {item.title}
              </h4>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-zinc-200 p-8 dark:border-zinc-800">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
              Outcomes
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-zinc-600 dark:text-zinc-300">
              <li>
                <span className="font-semibold text-zinc-900 dark:text-white">37% fewer false rejects</span>
                &nbsp;after replacing the SPC playbook with model-driven gating.
              </li>
              <li>
                <span className="font-semibold text-zinc-900 dark:text-white">$410K/month recovered capacity</span>
                &nbsp;thanks to faster triage and automated lot release.
              </li>
              <li>
                <span className="font-semibold text-zinc-900 dark:text-white">Sub-2s blocking decision</span>
                &nbsp;kept the burn-in line utilization above 94%.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
              Want the playbook?
            </h3>
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
              I packaged environment templates, IaC modules, and validation notebooks so
              other fabs can bootstrap the same stack. Happy to walk through the
              trade-offs, cost controls, and SOPs we set up for the manufacturing team.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="mailto:anishdahiya89@gmail.com?subject=Wafer%20Fault%20Detection%20Playbook"
                className="inline-flex items-center rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-500"
              >
                Request a walkthrough
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
