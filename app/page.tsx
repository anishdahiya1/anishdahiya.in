import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { Timeline } from "@/components/timeline";
import { projects, timeline } from "@/lib/data";
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


    </div>
  );
}
