"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { socials } from "@/lib/data";

const heroText = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export function Hero() {
  return (
    <div className="lg:flex lg:items-center lg:gap-16">
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="relative hidden lg:flex lg:flex-shrink-0 lg:justify-center lg:items-center"
      >
        <Image
          src="/images/profile.webp"
          alt="Portrait of Anish Dahiya"
          width={240}
          height={240}
          priority
          className="rounded-full border-2 border-slate-200 object-cover shadow-xl shadow-brand-500/20 dark:border-slate-700"
        />
      </motion.div>
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-12 shadow-xl shadow-brand-500/5 transition dark:border-slate-800 dark:bg-slate-950/80">
        <motion.div
          initial="initial"
          animate="animate"
          variants={heroText}
          className="space-y-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-200">
            Data Scientist • Creator • Founder, X-Corp
          </span>
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl md:whitespace-nowrap">
            Designing intelligent systems that move people forward.
          </h1>
          <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            I'm Anish Dahiya — a data scientist building practical AI products at X-Corp and
            documenting the process for builders. I help teams move from prototype to production
            with pragmatic model design, robust data pipelines, and repeatable shipping patterns.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-full bg-brand-500 px-8 py-4 font-medium text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-600"
            >
              Explore projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-8 py-4 font-medium text-slate-700 transition hover:border-brand-200 hover:text-brand-500 dark:border-slate-600 dark:text-slate-200"
            >
              Partner with me
            </Link>
          </div>
          <div className="pt-2 text-sm text-slate-500">
            <Link href={socials.instagram} target="_blank" className="hover:text-brand-500">
              Instagram
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pointer-events-none absolute -right-28 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-brand-200 via-brand-400 to-brand-600 blur-3xl dark:from-brand-600/30 dark:via-brand-500/20 dark:to-brand-400/30"
        />
      </section>
    </div>
  );
}
