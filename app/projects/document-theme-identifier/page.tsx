import Link from "next/link";
import type { Metadata } from "next";

const features = [
  "Upload 75+ PDFs, scans, or mixed-format files in one batch",
  "Automatic OCR for image-based docs with quality heuristics",
  "Semantic clustering to surface recurring themes",
  "LLM answers with inline citations back to sources",
  "Audit-friendly chat history with exportable traces"
];

const pipeline = [
  {
    title: "Ingestion + OCR",
    detail:
      "Handles PDF, scanned PDF, PNG, and TIFF files. A Celery worker runs Tesseract + layout repair, then stores clean text and metadata in S3." 
  },
  {
    title: "Embedding + store",
    detail:
      "Chunks documents with adaptive windowing, generates transformer embeddings, and writes them to a Postgres + pgvector store for hybrid search." 
  },
  {
    title: "Theme engine",
    detail:
      "DBSCAN and Top2Vec cluster embeddings to label emergent themes, feeding a summary graph that powers instant overviews." 
  },
  {
    title: "Chat orchestration",
    detail:
      "A FastAPI layer retrieves the most relevant passages, injects citation metadata, and calls the LLM with guardrails for source-grounded responses." 
  }
];

const stack = [
  "Python",
  "FastAPI",
  "LangChain",
  "pgvector",
  "Celery",
  "Redis",
  "Tesseract OCR",
  "Next.js frontend"
];

export const metadata: Metadata = {
  title: "Document Theme Identifier"
};

export default function DocumentThemeIdentifierPage() {
  return (
    <div className="space-y-16">
      <section className="rounded-3xl border border-zinc-200 bg-white/80 p-10 shadow-[0_35px_120px_-40px_rgba(15,23,42,0.45)] backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-300">
          Case Study
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-zinc-900 dark:text-white">
          Document Theme Identifier Chatbot
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-zinc-600 dark:text-zinc-300">
          A full-stack AI research assistant that ingests 75+ documents at once, runs
          OCR + semantic indexing, and lets teams query their corpus with citation-backed
          responses. Perfect for audits, academic reviews, legal diligence, and
          enterprise knowledge search.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="https://github.com/anishdahiya1/Document-theme-identification-chatbot"
            target="_blank"
            className="inline-flex items-center rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900"
          >
            View GitHub repo
          </Link>
          <Link
            href="mailto:anishdahiya89@gmail.com?subject=Document%20Theme%20Identifier%20Demo"
            className="inline-flex items-center rounded-full border border-zinc-300 px-5 py-2 text-sm font-semibold text-zinc-900 transition hover:border-zinc-900 dark:border-zinc-700 dark:text-white"
          >
            Request a live demo
          </Link>
        </div>
        <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Role</dt>
            <dd className="text-base font-medium text-zinc-900 dark:text-white">Full-stack ML Engineer</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Timeline</dt>
            <dd className="text-base font-medium text-zinc-900 dark:text-white">Jan–Apr 2025</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Stack highlights</dt>
            <dd className="text-base font-medium text-zinc-900 dark:text-white">FastAPI, LangChain, pgvector</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Impact</dt>
            <dd className="text-base font-medium text-zinc-900 dark:text-white">4x faster audit synthesis</dd>
          </div>
        </dl>
      </section>

      <section className="grid gap-10 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">Why it mattered</h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-300">
            Research teams were spending days skimming PDFs and screenshots just to build
            a first-pass summary. The goal was to centralize ingestion, automate OCR,
            and give analysts a conversational interface that cites every statement. That
            meant reliable processing at scale, zero hallucinations, and governance-grade
            traceability.
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
            Documents flow through an ingestion service that shards workloads across
            Celery workers. Extracted text lands in S3 with metadata before embeddings are
            written to pgvector. A Next.js UI controls uploads, progress, and chat while
            FastAPI exposes RAG endpoints with rate limiting, audit logging, and
            observability hooks.
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
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Citation-first UX</h3>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
            Every chat turn highlights the supporting snippets, page ranges, and
            filenames. Analysts can expand a citation to preview the original paragraph
            without leaving the thread, or export a report with footnotes—ideal for audits
            and research compliance.
          </p>
          <div className="mt-6 rounded-2xl bg-zinc-900/5 p-5 text-sm text-zinc-700 dark:bg-white/5 dark:text-zinc-200">
            <p><span className="font-semibold">Throughput:</span> 75 docs / 8 min ingest window</p>
            <p><span className="font-semibold">Answer latency:</span> ~1.7 s median</p>
            <p><span className="font-semibold">Citation coverage:</span> 100% responses with ≥2 references</p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="max-w-2xl">
          <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">Workflow + guardrails</h3>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-300">
            The RAG pipeline favors transparency: we log embeddings, prompt templates,
            and responses for replay. Automated evaluations run nightly with synthetic
            questions to ensure the LLM stays grounded in source material.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-4">
          {pipeline.map((stage) => (
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
                <span className="font-semibold text-zinc-900 dark:text-white">4x faster audit briefing</span>
                &nbsp;because analysts receive citation-ready answers instantly.
              </li>
              <li>
                <span className="font-semibold text-zinc-900 dark:text-white">Zero hallucination policy</span>
                &nbsp;backed by guardrails that block responses without supporting chunks.
              </li>
              <li>
                <span className="font-semibold text-zinc-900 dark:text-white">Enterprise-ready governance</span>
                &nbsp;with full chain-of-custody logs for every query.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Bring it to your corpus</h3>
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
              I can adapt the ingestion adapters, embedding models, and prompt flows to
              your compliance requirements or private cloud. Let's explore data residency,
              on-prem vector stores, or custom evaluators together.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="mailto:anishdahiya89@gmail.com?subject=Document%20Theme%20Identifier%20Rollout"
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
