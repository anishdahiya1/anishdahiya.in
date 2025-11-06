"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navItems } from "@/lib/data";
import { socials } from "@/lib/data";
import { ModeToggle } from "./mode-toggle";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-display text-xl font-semibold">
          Anish Dahiya
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "text-sm font-medium transition hover:text-brand-500",
                pathname === item.href
                  ? "text-brand-500 dark:text-brand-400"
                  : "text-slate-600 dark:text-slate-300"
              )}
            >
              {item.title}
            </Link>
          ))}
          <Link
            href={socials.instagram}
            target="_blank"
            className="text-sm font-medium text-slate-600 transition hover:text-brand-500 dark:text-slate-300"
          >
            Instagram
          </Link>
          <ModeToggle />
        </nav>
        <button
          type="button"
          aria-label="Toggle navigation"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:text-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mb-4 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-lg dark:border-slate-800 dark:bg-slate-900/95 md:hidden"
          >
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={clsx(
                      "block rounded-lg px-3 py-2 text-base font-medium",
                      pathname === item.href
                        ? "bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-200"
                        : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center justify-between">
              <Link
                href={socials.instagram}
                target="_blank"
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                onClick={() => setOpen(false)}
              >
                Instagram
              </Link>
              <ModeToggle />
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
