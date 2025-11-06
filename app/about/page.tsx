import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { ContentGrid } from "@/components/content-grid";
import { contentHighlights, timeline } from "@/lib/data";
import { Timeline } from "@/components/timeline";
import type { Metadata } from "next";

const stats = [
  { label: "Years building ML systems", value: "7" },
  { label: "Products shipped", value: "28" },
  { label: "Creators mentored", value: "120+" }
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
            I'm Anish Dahiya, a data scientist and storyteller who builds intelligent products and communities. At X-Corp, I lead a team experimenting with applied AI—from platform strategy and model architecture to change management and creative automation.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            My work spans predictive modeling, computer vision, and generative systems. I love translating complex technology into crisp strategy for leadership teams, and I document the journey for builders around the world through my creator studio.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            I studied B.Tech in CSE (AIML) at Chandigarh University from 2021–2025, worked as a Subject Matter Expert (Computer Science) at Chegg, and built a bus congestion prediction model for DIMTS in 2023. Today, I'm a data scientist and creator, building X-Corp and publishing regularly across YouTube and LinkedIn.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
                <p className="font-display text-3xl text-brand-500">{stat.value}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{stat.label}</p>
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

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Creator DNA"
          title="What I'm teaching and documenting"
          description="The channels where I share systems, templates, and ideas for ambitious builders."
        />
        <ContentGrid items={contentHighlights} />
      </section>
    </div>
  );
}
