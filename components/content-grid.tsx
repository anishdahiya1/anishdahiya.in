"use client";

import type { ContentPiece } from "@/lib/data";
import Link from "next/link";
import { motion } from "framer-motion";

type ContentGridProps = {
  items: ContentPiece[];
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

export function ContentGrid({ items }: ContentGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {items.map((item, index) => (
        <motion.article
          key={item.url}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: index * 0.05, duration: 0.5 }}
          className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
            {item.platform}
          </span>
          <h3 className="mt-3 font-display text-xl text-slate-900 dark:text-slate-100">
            {item.title}
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.summary}</p>
          <Link
            href={item.url}
            target="_blank"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition hover:text-brand-500 dark:text-brand-300"
          >
            Watch / Read →
          </Link>
        </motion.article>
      ))}
    </div>
  );
}
