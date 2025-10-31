"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">404</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-slate-900 dark:text-slate-100">
          This page is still in stealth mode.
        </h1>
        <p className="mt-3 max-w-lg text-base text-slate-600 dark:text-slate-300">
          Something shifted or you found a broken link. Let's head back to home base and keep building.
        </p>
      </motion.div>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-600"
      >
        Return home
      </Link>
    </div>
  );
}
