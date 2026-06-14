import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../lib/data";

type Props = { project: Project; index: number };

const IMGS = [
  "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600&q=70",
  "https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=600&q=70",
  "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=600&q=70",
  "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600&q=70",
  "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600&q=70",
];

export function ProjectCard({ project, index }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-40px" }}
      className="group relative flex flex-col overflow-hidden rounded-[1.4rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-white/[0.14] hover:shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={IMGS[index % IMGS.length]}
          alt={project.title}
          className="h-full w-full object-cover opacity-55 transition-all duration-700 group-hover:opacity-75 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.02)_0%,rgba(2,6,23,0.35)_58%,rgba(2,6,23,0.92)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <span className="absolute right-4 top-4 rounded-full border border-white/[0.08] bg-zinc-950/50 px-2.5 py-0.5 font-mono text-[10px] text-zinc-300 backdrop-blur-md">
          {project.year}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 gap-3 p-5">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span key={t} className="rounded-full border border-white/[0.07] bg-white/[0.03] px-2 py-0.5 text-[10px] text-zinc-300/70">
              {t}
            </span>
          ))}
        </div>

        <h3 className="font-display text-lg font-semibold text-white leading-snug transition-colors group-hover:text-blue-200">
          {project.title}
        </h3>

        <p className="text-xs text-zinc-300/65 leading-relaxed flex-1 line-clamp-3">
          {project.description}
        </p>

        <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
          <span className="text-xs text-zinc-400">{project.linkLabel ?? "View project"}</span>
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-zinc-400 transition group-hover:border-blue-500/40 group-hover:bg-blue-500/12 group-hover:text-blue-200">
            <ArrowUpRight className="h-3.5 w-3.5" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
