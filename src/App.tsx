import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { StarfieldBackground } from "./components/StarfieldBackground";
import { CursorSpotlight } from "./components/CursorSpotlight";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SectionHeading } from "./components/SectionHeading";
import { FeaturedProject } from "./components/FeaturedProject";
import { ProjectCard } from "./components/ProjectCard";
import { Timeline } from "./components/Timeline";
import { ContentGrid } from "./components/ContentGrid";
import { Testimonials } from "./components/Testimonials";
import { AboutSection } from "./components/AboutSection";
import { Footer } from "./components/Footer";
import { projects, timeline, contentHighlights, testimonials, socials } from "./lib/data";

const featured = projects.find((p) => p.featured)!;
const rest = projects.filter((p) => !p.featured);

function SectionWrap({ children, id, className = "" }: {
  children: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-16 relative ${className}`}
    >
      {/* Glass layer over starfield */}
      <div className="absolute inset-0 bg-zinc-950/75 backdrop-blur-[2px]" />
      <div className="relative z-10">{children}</div>
    </section>
  );
}

function Divider() {
  return (
    <div className="relative h-px">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-50 antialiased">
      {/* ── BACKGROUNDS (fixed) ── */}
      <StarfieldBackground />
      <CursorSpotlight />

      {/* ── NAV ── */}
      <Navbar />

      <main>
        {/* ── HERO (transparent — starfield shows fully) ── */}
        <Hero />

        {/* ── FEATURED: HINDI GPT ── */}
        <SectionWrap id="projects">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24 space-y-10">
            <SectionHeading
              label="Featured Project"
              title="Hindi GPT — built from scratch"
              description="A decoder-only transformer pretrained on 1.35B Hindi tokens, fine-tuned with SFT, deployed live."
            />
            <FeaturedProject project={featured} />
          </div>
        </SectionWrap>

        <Divider />

        {/* ── MORE PROJECTS ── */}
        <SectionWrap>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24 space-y-10">
            <SectionHeading
              label="More Work"
              title="Other AI projects"
              description="Production systems, research spikes, and shipped experiments."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((p, i) => (
                <ProjectCard key={p.title} project={p} index={i} />
              ))}
            </div>
          </div>
        </SectionWrap>

        <Divider />

        {/* ── ABOUT ── */}
        <SectionWrap id="about">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24">
            <AboutSection />
          </div>
        </SectionWrap>

        <Divider />

        {/* ── JOURNEY ── */}
        <SectionWrap id="journey">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24 space-y-10">
            <SectionHeading
              label="Timeline"
              title="How I got here"
              description="Research, internships, and the projects that leveled me up."
            />
            <Timeline entries={timeline} />
          </div>
        </SectionWrap>

        <Divider />

        {/* ── CONTENT ── */}
        <SectionWrap id="content">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24 space-y-10">
            <SectionHeading
              label="Content"
              title="Ideas for builders"
              description="Long-form content on ML systems, mental models, and the craft of shipping AI."
            />
            <ContentGrid items={contentHighlights} />
          </div>
        </SectionWrap>

        <Divider />

        {/* ── TESTIMONIALS ── */}
        <SectionWrap>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24 space-y-10">
            <SectionHeading label="Testimonials" title="What collaborators say" />
            <Testimonials testimonials={testimonials} />
          </div>
        </SectionWrap>

        <Divider />

        {/* ── CONTACT ── */}
        <SectionWrap id="contact">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 py-28">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-60px" }}
              className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-xl px-8 md:px-16 py-16 text-center"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-56 w-56 bg-blue-600/[0.06] blur-3xl rounded-full pointer-events-none" />

              <div className="relative space-y-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] px-4 py-1.5 text-xs text-emerald-400">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute animate-ping rounded-full h-full w-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </span>
                  Open to new projects
                </div>

                <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
                  Let's build something
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                    remarkable.
                  </span>
                </h2>

                <p className="text-sm text-zinc-500 max-w-sm mx-auto leading-relaxed">
                  Whether it's an AI product, a research collaboration, or a
                  conversation about what to build next — I'm here for it.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
                  <a
                    href={`mailto:${socials.email}`}
                    className="group inline-flex h-11 items-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-100"
                  >
                    <Mail className="h-4 w-4" />
                    {socials.email}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] backdrop-blur-sm px-7 text-sm font-medium text-zinc-400 transition hover:bg-white/[0.08] hover:text-white"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                  <a
                    href={socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] backdrop-blur-sm px-7 text-sm font-medium text-zinc-400 transition hover:bg-white/[0.08] hover:text-white"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </SectionWrap>
      </main>

      <Footer />
    </div>
  );
}
