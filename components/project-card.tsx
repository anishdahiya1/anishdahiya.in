"use client";

import Link from "next/link";
import type { Project } from "@/lib/data";
import { motion } from "framer-motion";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70"
    >
      <div className="space-y-3">
        <span className="inline-flex w-fit items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:bg-slate-800 dark:text-slate-300">
          {project.year}
        </span>
        <h3 className="font-display text-2xl text-slate-900 dark:text-slate-100">{project.title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
        <div className="flex flex-wrap gap-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <Link
          href={project.link}
          target="_blank"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition hover:text-brand-500 dark:text-brand-300"
        >
          View case study →
        </Link>
      </div>
    </motion.article>
  );
}
