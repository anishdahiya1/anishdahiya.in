import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";
import { format } from "date-fns";
import Link from "next/link";
import type { Metadata } from "next";

type BlogPageProps = {
  params: { slug: string };
};

type ArticleBody = {
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
  keyTakeaways: string[];
  closing: string;
};

const articleBodies: Record<string, ArticleBody> = {
  "applied-ai-roadmaps": {
    intro:
      "Most AI roadmaps fail because they start with model wishlists instead of friction maps. Here is how I structure 120-day plans that balance stakeholder trust, technical rigor, and measurable revenue impact.",
    sections: [
      {
        heading: "Start with a constraint canvas",
        paragraphs: [
          "I facilitate a 90-minute session with product, engineering, ops, and finance to map out the three biggest constraints: data accessibility, decision latency, and credibility gaps. Every roadmap item must resolve at least one of those tensions.",
          "The artifact is a simple grid: rows for business outcomes, columns for blockers, and sticky notes describing facts not opinions. This keeps us honest when prioritizing experiments later."
        ]
      },
      {
        heading: "Time-box discovery, build, and embed phases",
        paragraphs: [
          "Day 0–30 is for instrumentation and baselines. We ship data contracts, stand up evaluation harnesses, and agree on a go/no-go metric. No modeling until telemetry is trustworthy.",
          "Day 31–75 is for iterative model delivery. Each sprint ends with a demo into the surface where users experience the outcome—emails, dashboards, or APIs. Day 76–120 is for enablement: SOPs, guardrails, and a narrative for leadership."
        ]
      },
      {
        heading: "Engineer trust loops",
        paragraphs: [
          "Every roadmap entry includes a trust loop: automated tests, qualitative pilot feedback, and a comms plan. I create a hype doc in Notion that captures experiment cadence, so executives can scan progress without chasing slides.",
          "When risks surface, we codify them in a 'kill switch' section. Having pre-agreed exits makes it easier to pivot without politics."
        ]
      }
    ],
    keyTakeaways: [
      "Anchor roadmaps on constraints, not algorithms",
      "Use 30/45/45 day swim lanes to keep momentum",
      "Document trust loops so leadership sees rigor"
    ],
    closing:
      "Ship fewer bets, but narrate them better. The combination of ruthless scoping and proactive storytelling is what gets AI into production—fast."
  },
  "ml-systems-architecture": {
    intro:
      "This is the reference stack I lean on when teams need a pragmatic ML platform without a 12-month platform rewrite. It's composable, cloud-agnostic, and optimizes for fast iteration cycles.",
    sections: [
      {
        heading: "Feature plane as the source of truth",
        paragraphs: [
          "Raw events land in an immutable object store. A lightweight feature service (think Feast or a custom Redis + DuckDB combo) version-controls transformations and guarantees training/serving parity.",
          "Every feature view ships with validation tests and ownership metadata so domain teams can self-serve without stepping on each other."
        ]
      },
      {
        heading: "Training and evaluation mesh",
        paragraphs: [
          "Orchestration runs on Dagster because typing + software-defined assets make lineage obvious. Jobs produce artifacts—models, metrics, explainer plots—pushed into MLflow.",
          "Evaluations are treated like first-class citizens: regression tests compare new models against production data slices before promotion."
        ]
      },
      {
        heading: "Inference, observability, and governance",
        paragraphs: [
          "Online services run as FastAPI containers with a shared inference SDK. Batch consumers use the same SDK inside Spark or Snowflake tasks, so guardrails are consistent.",
          "Telemetry feeds an OpenTelemetry collector that powers Grafana dashboards, drift alerts, and cost tracking. Access is enforced via short-lived tokens issued by the platform team."
        ]
      }
    ],
    keyTakeaways: [
      "Version everything: features, models, prompts, docs",
      "Treat evaluations like CI—not optional demos",
      "Observability is as important as accuracy when scaling"
    ],
    closing:
      "Great architecture is boring by design. Aim for legibility, paved paths, and the ability to swap components without rewriting the world."
  },
  "content-flywheel": {
    intro:
      "I run a content flywheel while leading data teams by batching energy, codifying prompts, and automating the dull parts. Here's the operating system.",
    sections: [
      {
        heading: "Define the thesis and voice",
        paragraphs: [
          "Every quarter I pick three themes: applied AI, systems for builders, and creator business mechanics. Anything outside gets parked. This protects creative focus.",
          "Voice is scripted in a 'tone board'—short, direct sentences with concrete metrics. It keeps GPT assistants and collaborators aligned with how I speak."
        ]
      },
      {
        heading: "Capture > polish",
        paragraphs: [
          "Daily capture sessions happen in mem.ai. I drop voice notes, screenshots, and code snippets tagged by theme. Once a week I promote the most resonant notes into outlines.",
          "Automation handles formatting: a custom script turns outline headings into LinkedIn carousels, newsletter drafts, and video shot lists." 
        ]
      },
      {
        heading: "Ship consistently without burning out",
        paragraphs: [
          "Content drops run on a kanban: capture → outline → draft → publish → repurpose. Each state has templates, so collaborators can step in.",
          "A feedback ritual closes the loop: I log hook performance, watch time, and replies inside Airtable to decide what to double down on next week."
        ]
      }
    ],
    keyTakeaways: [
      "Focus on three themes per quarter",
      "Automate formatting so creativity stays high",
      "Track performance like a product funnel"
    ],
    closing:
      "A flywheel is just a series of small systems. Once capture, editing, and distribution run on rails, you can show up as a creator without sacrificing your day job."
  }
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    return {
      title: "Post not found"
    };
  }

  return {
    title: post.title,
    description: post.summary
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = params;
  const entry = blogPosts.find((post) => post.slug === slug) ?? notFound();
  const article = articleBodies[slug];

  if (!article) {
    return notFound();
  }

  return (
    <article className="space-y-8">
      <Link href="/blog" className="text-sm font-semibold text-brand-600 hover:text-brand-500">
        ← Back to all writing
      </Link>
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
          {format(new Date(entry.publishedAt), "MMM d, yyyy")} · {entry.readingTime}
        </p>
        <h1 className="font-display text-4xl font-semibold text-slate-900 dark:text-slate-100">
          {entry.title}
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300">{entry.summary}</p>
      </header>
      <section className="prose prose-slate max-w-none dark:prose-invert">
        <p>{article.intro}</p>
        {article.sections.map((section) => (
          <div key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ))}
        <h3>Key takeaways</h3>
        <ul>
          {article.keyTakeaways.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>{article.closing}</p>
      </section>
    </article>
  );
}
