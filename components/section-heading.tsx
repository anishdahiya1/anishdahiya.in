"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
};

export function SectionHeading({ eyebrow, title, description, actions }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-2xl space-y-2"
      >
        {eyebrow ? (
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">
            {eyebrow}
          </span>
        ) : null}
        <h2 className="font-display text-3xl font-semibold text-slate-900 dark:text-slate-100">
          {title}
        </h2>
        {description ? (
          <p className="text-base text-slate-600 dark:text-slate-300">{description}</p>
        ) : null}
      </motion.div>
      {actions ? <div className="flex items-center gap-3">{actions}</div> : null}
    </div>
  );
}
