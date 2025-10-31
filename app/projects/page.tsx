import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects"
};

export default function ProjectsPage() {
  return (
    <div className="space-y-12">
      <SectionHeading
        eyebrow="Case Studies"
        title="A portfolio of intelligent systems"
        description="A snapshot of recent experiments, production deployments, and research spikes."
      />
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
