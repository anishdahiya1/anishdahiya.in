import { SectionHeading } from "@/components/section-heading";
import { ContentGrid } from "@/components/content-grid";
import { contentHighlights } from "@/lib/data";
import Link from "next/link";
import type { Metadata } from "next";

const playlists = [
  {
    title: "The Applied AI Almanac",
    description: "Deep dives on building intelligent products end-to-end—from ideation to post-launch stewardship.",
    link: "https://www.youtube.com/@AnishDahiya8"
  },
  {
    title: "Creator OS",
    description: "Systems, rituals, and templates to build a content engine while leading high-stakes teams.",
    link: "https://www.youtube.com/@AnishDahiya8"
  },
  {
    title: "Signals & Stories",
    description: "Weekly reflections and prompts for leaders navigating AI transformation and mindful productivity.",
    link: "https://open.spotify.com/show/anishdahiya"
  }
];

export const metadata: Metadata = {
  title: "Content"
};

export default function ContentPage() {
  return (
    <div className="space-y-16">
      <SectionHeading
        eyebrow="Creator Studio"
        title="Lessons, frameworks, and experiments in public"
        description="Every piece is built to demystify AI systems, leadership, and creative flow."
      />

      <section className="space-y-6">
        <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-slate-100">
          Latest Highlights
        </h2>
        <ContentGrid items={contentHighlights} />
      </section>

      <section className="space-y-6">
        <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-slate-100">
          Signature Series
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {playlists.map((playlist) => (
            <div key={playlist.title} className="space-y-3 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
              <h3 className="font-display text-xl text-brand-600 dark:text-brand-300">
                {playlist.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{playlist.description}</p>
              <Link
                href={playlist.link}
                target="_blank"
                className="inline-flex items-center text-sm font-semibold text-brand-600 hover:text-brand-500"
              >
                Explore series →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
