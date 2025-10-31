"use client";

import type { Testimonial } from "@/lib/data";
import { motion } from "framer-motion";

type TestimonialsProps = {
  testimonials: Testimonial[];
};

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <motion.figure
          key={testimonial.name}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
        >
          <blockquote className="flex-1 text-base text-slate-700 dark:text-slate-200">
            “{testimonial.quote}”
          </blockquote>
          <figcaption className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            <p className="font-semibold text-slate-700 dark:text-slate-200">{testimonial.name}</p>
            <p>{testimonial.role}</p>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
