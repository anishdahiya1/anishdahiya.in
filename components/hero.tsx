"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const heroText = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-xl shadow-brand-500/5 transition dark:border-slate-800 dark:bg-slate-950/80">
      <motion.div
        initial="initial"
        animate="animate"
        variants={heroText}
        className="space-y-6"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-200">
          Data Scientist • Creator • Founder, X-Corp
        </span>
        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Designing intelligent systems that move people forward.
        </h1>
        <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          I'm Anish Dahiya, a data scientist crafting AI products, building X-Corp, and telling
          stories that make complex systems feel human. From strategy to deployment, I help teams
          ship impactful machine learning in weeks, not quarters.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-3 font-medium text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-600"
          >
            Explore projects
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:border-brand-200 hover:text-brand-500 dark:border-slate-600 dark:text-slate-200"
          >
            Partner with me
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="pointer-events-none absolute -right-28 -top-28 h-56 w-56 rounded-full bg-gradient-to-br from-brand-200 via-brand-400 to-brand-600 blur-3xl dark:from-brand-600/30 dark:via-brand-500/20 dark:to-brand-400/30"
      />
    </section>
  );
}
