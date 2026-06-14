import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  actions?: ReactNode;
};

export function SectionHeading({ label, title, description, actions }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-60px" }}
      className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
    >
      <div className="space-y-3 max-w-2xl">
        <div className="flex items-center gap-2.5">
          <span className="h-px w-5 bg-blue-400" />
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500">
            {label}
          </span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
          {title}
        </h2>
        {description && (
          <p className="text-sm text-zinc-500 leading-relaxed max-w-xl">{description}</p>
        )}
      </div>
      {actions && <div>{actions}</div>}
    </motion.div>
  );
}
