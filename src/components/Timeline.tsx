import { motion } from "framer-motion";
import type { TimelineEntry } from "../lib/data";

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="space-y-0">
      {entries.map((entry, i) => (
        <motion.div
          key={`${entry.year}-${i}`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
          viewport={{ once: true, margin: "-40px" }}
          className="group relative grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-6 md:gap-10 border-b border-white/[0.05] py-7 last:border-0 hover:border-white/[0.1] transition-colors"
        >
          {/* Year */}
          <div className="pt-0.5">
            <span className="font-mono text-xs text-zinc-600 group-hover:text-blue-400 transition-colors">
              {entry.year}
            </span>
          </div>

          {/* Content */}
          <div className="space-y-1.5">
            <h3 className="font-display text-base font-semibold text-white leading-snug">
              {entry.title}
            </h3>
            <p className="text-sm text-zinc-500 leading-relaxed">{entry.description}</p>
          </div>

          {/* Left line */}
          <div className="absolute left-[88px] md:left-[130px] top-0 bottom-0 w-px bg-white/[0.05] group-hover:bg-blue-500/20 transition-colors" />
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 + 0.15, type: "spring", stiffness: 300 }}
            className="absolute left-[84px] md:left-[126px] top-8 h-2 w-2 rounded-full bg-zinc-700 border border-zinc-600 group-hover:bg-blue-400 group-hover:border-blue-400 transition-colors"
          />
        </motion.div>
      ))}
    </div>
  );
}
