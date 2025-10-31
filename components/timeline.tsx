"use client";

import { motion } from "framer-motion";
import type { TimelineEntry } from "@/lib/data";

type TimelineProps = {
  entries: TimelineEntry[];
};

export function Timeline({ entries }: TimelineProps) {
  return (
    <div className="relative mx-auto max-w-3xl">
      <span className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-brand-300 via-brand-500/50 to-transparent dark:from-brand-500 dark:via-brand-500/20" />
      <ul className="space-y-12">
        {entries.map((entry, index) => (
          <motion.li
            key={entry.year}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            viewport={{ once: true, amount: 0.5 }}
            className="relative pl-16"
          >
            <span className="absolute left-0 top-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-200 bg-white font-display text-base font-semibold text-brand-600 shadow-md dark:border-brand-500/40 dark:bg-slate-900 dark:text-brand-200">
              {entry.year}
            </span>
            <h3 className="font-display text-2xl text-slate-900 dark:text-slate-100">
              {entry.title}
            </h3>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-300">{entry.description}</p>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
