import { SectionHeading } from "@/components/section-heading";
import { PillarsSection } from "@/components/x-corp/pillars-section";
import { OffersSection } from "@/components/x-corp/offers-section";
import Link from "next/link";
import type { Metadata } from "next";

const pillars = [
  {
    title: "Intelligent Products",
    description:
      "We co-design AI-native experiences that augment decision-making and unlock creative momentum for product, ops, and revenue teams.",
    outcomes: ["Product strategy", "Experience design", "Responsible AI"]
  },
  {
    title: "MLOps & Platforms",
    description:
      "From data contracts to evaluation harnesses, we architect infrastructure that keeps experimentation velocity high and governance resilient.",
    outcomes: ["Feature stores", "LLM orchestration", "Observability"]
  },
  {
    title: "Capability Building",
    description:
      "We embed with leadership to create playbooks, rituals, and training loops. The goal: AI fluency that sticks long after we leave.",
    outcomes: ["Team enablement", "Operating models", "Creator labs"]
  }
];

const offers = [
  {
    name: "Strategy Intensives",
    detail: "Two-week engagements to clarify north star metrics, data assets, and opportunity maps.",
    cta: "Book an intensive",
    href: "/contact"
  },
  {
    name: "Launch Sprints",
    detail: "8-week build cycles that take core AI ideas from prototype to production-solid pilots.",
    cta: "Design a sprint",
    href: "/contact"
  },
  {
    name: "Embedded Partner",
    detail: "Fractional data & AI leadership shaping roadmap, hiring, and communication alongside your exec team.",
    cta: "Discuss an engagement",
    href: "/contact"
  }
];

export const metadata: Metadata = {
  title: "X-Corp"
};

export default function XCorpPage() {
  return (
    <div className="space-y-16">
      <section className="space-y-6">
        <h1 className="font-display text-4xl font-semibold text-slate-900 dark:text-slate-100">
          X-Corp is the applied AI lab helping ambitious teams ship transformative work.
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300">
          We partner with founders and executives who want to move beyond AI theater. Together, we deliver products, platforms, and narratives that compound.
        </p>
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Operating System"
          title="Three pillars powering every engagement"
        />
        <PillarsSection pillars={pillars} className="grid gap-8 md:grid-cols-3" />
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Services"
          title="Choose your entry point"
          description="Each offer is a lightweight doorway into a deeper partnership."
        />
        <OffersSection offers={offers} className="grid gap-6 md:grid-cols-3" />
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-xl dark:border-slate-800 dark:bg-slate-900/80">
        <h2 className="font-display text-3xl font-semibold text-slate-900 dark:text-slate-100">
          Let's architect the next chapter together
        </h2>
        <p className="mt-4 max-w-3xl text-base text-slate-600 dark:text-slate-300">
          X-Corp engagements begin with a discovery workshop to align on vision, constraints, and success metrics. We'll craft a roadmap and creative direction you can socialize with stakeholders immediately.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-600"
          >
            Schedule discovery
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:text-brand-500 dark:border-slate-700 dark:text-slate-200"
          >
            Meet the team
          </Link>
        </div>
      </section>
    </div>
  );
}
