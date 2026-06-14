import { motion } from "framer-motion";
import type { Testimonial } from "../lib/data";

export function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {testimonials.map((t, i) => (
        <motion.figure
          key={t.name}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-40px" }}
          className="group flex flex-col rounded-2xl border border-white/[0.07] bg-zinc-900/60 p-6 transition hover:border-white/[0.12]"
        >
          {/* Stars */}
          <div className="flex gap-0.5 mb-5">
            {[...Array(5)].map((_, j) => (
              <svg key={j} className="h-3 w-3 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>

          <blockquote className="flex-1 text-sm text-zinc-400 leading-relaxed italic">
            "{t.quote}"
          </blockquote>

          <figcaption className="mt-5 flex items-center gap-3 border-t border-white/[0.05] pt-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/30 to-blue-700/20 text-xs font-bold text-blue-300">
              {t.name.charAt(0)}
            </div>
            <div>
              <p className="text-xs font-semibold text-white">{t.name}</p>
              <p className="text-[11px] text-zinc-600">{t.role}</p>
            </div>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
