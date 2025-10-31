import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { Timeline } from "@/components/timeline";
import { Testimonials } from "@/components/testimonials";
import { ContentGrid } from "@/components/content-grid";
import { projects, timeline, testimonials, contentHighlights } from "@/lib/data";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-20">
      <Hero />

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Featured Work"
          title="AI products that create measurable leverage"
          description="From experiment to production, I help teams launch data products that improve revenue, retention, and trust."
          actions={<Link href="/projects" className="text-sm font-semibold text-brand-600 hover:text-brand-500">See all projects →</Link>}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Journey"
          title="Moments that shaped my craft"
          description="Every chapter blends strategy, storytelling, and system design."
        />
        <Timeline entries={timeline} />
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Creator Studio"
          title="Content designed to unblock builders"
          description="Weekly essays, videos, and conversations on applied AI, leadership, and creative focus."
          actions={<Link href="/content" className="text-sm font-semibold text-brand-600 hover:text-brand-500">Dive deeper →</Link>}
        />
        <ContentGrid items={contentHighlights} />
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Signals"
          title="Feedback from collaborators"
          description="Leaders, founders, and makers share what it's like to build together."
        />
        <Testimonials testimonials={testimonials} />
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-200 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 p-10 text-slate-50 shadow-2xl dark:border-slate-800 dark:from-brand-400 dark:via-brand-500 dark:to-brand-700">
        <h2 className="font-display text-3xl font-semibold">Bring intelligence to your roadmap.</h2>
        <p className="max-w-3xl text-base text-slate-100/80">
          Whether you're scaling product personalization, building a data platform, or crafting AI-native experiences, let's explore how X-Corp can partner with your team.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-600 transition hover:bg-slate-100"
          >
            Start a project
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
          >
            Learn more about me
          </Link>
        </div>
      </section>
    </div>
  );
}
