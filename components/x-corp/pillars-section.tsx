"use client";

import { motion } from "framer-motion";

type Pillar = {
  title: string;
  description: string;
  outcomes: string[];
};

type PillarsSectionProps = {
  pillars: Pillar[];
  className?: string;
};

export function PillarsSection({ pillars, className }: PillarsSectionProps) {
  return (
    <div className={className}>
      {pillars.map((pillar, index) => (
        <motion.article
          key={pillar.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.5 }}
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
        >
          <h3 className="font-display text-2xl text-slate-900 dark:text-slate-100">{pillar.title}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">{pillar.description}</p>
          <ul className="mt-auto flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {pillar.outcomes.map((outcome) => (
              <li key={outcome} className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">
                {outcome}
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  );
}
