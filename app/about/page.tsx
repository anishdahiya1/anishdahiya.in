import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { timeline } from "@/lib/data";
import { Timeline } from "@/components/timeline";
import type { Metadata } from "next";

const snapshot = [
  { label: "Current role", value: "Data Scientist, Applied AI (since Apr 2025)" },
  { label: "Degree", value: "B.Tech CSE (AIML) · Chandigarh University" },
  { label: "Focus", value: "MLOps, forecasting, narrative design" }
];

export const metadata: Metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <section className="grid gap-10 md:grid-cols-[2fr,1fr]">
        <div className="space-y-6">
          <h1 className="font-display text-4xl font-semibold text-slate-900 dark:text-slate-100">
            Architecting the intersection of data, design, and narrative.
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            I'm Anish Dahiya, an early-career data scientist focused on shipping practical AI for operations and product teams. Since April 2025 I've been part of an applied AI squad turning research spikes into deployable models and thoughtful enablement.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Before the full-time role I cycled through internships, freelance assignments, and my final-year capstone—building forecasting systems, data quality automations, and documentation so the next builder can pick up where I leave off.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            I completed a B.Tech in CSE (AIML) at Chandigarh University, contributed as a Computer Science SME at Chegg, and shipped projects like the DIMTS bus congestion predictor along the way. I still share notes from the journey to help other students navigate that leap into professional AI work.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {snapshot.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
                <p className="font-display text-base text-brand-500">{item.value}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-brand-200 via-brand-400 to-brand-600 shadow-xl dark:border-slate-800 dark:from-brand-500/60 dark:via-brand-500/40 dark:to-brand-400/60">
          <Image
            src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80"
            alt="Anish Dahiya"
            fill
            className="object-cover mix-blend-multiply"
            priority
          />
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Origin Story"
          title="Where it all clicked"
          description="A timeline of the decisions, experiments, and communities that shaped my craft."
        />
        <Timeline entries={timeline} />
      </section>

      
    </div>
  );
}
