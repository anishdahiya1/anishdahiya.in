"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800" />
    );
  }

  const isDark = (theme ?? resolvedTheme) === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:text-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
    >
      <motion.span
        key={isDark ? "moon" : "sun"}
        initial={{ y: -8, opacity: 0, rotate: -15 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        exit={{ y: 8, opacity: 0, rotate: 15 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="flex"
      >
        {isDark ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
      </motion.span>
    </button>
  );
}
