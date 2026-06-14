import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems, socials } from "../lib/data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = navItems.map((n) => n.href);
      const hit = sections.find((id) => {
        const el = document.querySelector(id);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= 120 && r.bottom >= 120;
      });
      if (hit) setActive(hit);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.06] bg-zinc-950/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-base font-semibold text-white tracking-tight"
        >
          Anish<span className="text-blue-400">.</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => go(item.href)}
                className={`relative px-3 py-1.5 text-sm transition-colors ${
                  active === item.href ? "text-white" : "text-zinc-500 hover:text-zinc-200"
                }`}
              >
                {active === item.href && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-4 bg-blue-400 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.title}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`mailto:${socials.email}`}
            className="rounded-full bg-white/[0.06] border border-white/[0.08] px-4 py-1.5 text-sm text-zinc-300 transition hover:bg-white/[0.10] hover:text-white"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.05] text-zinc-400 hover:text-white transition"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden border-t border-white/[0.06] bg-zinc-950/98 backdrop-blur-xl"
          >
            <ul className="mx-4 py-3 space-y-0.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => go(item.href)}
                    className="w-full text-left rounded-lg px-3 py-2.5 text-sm text-zinc-400 hover:bg-white/[0.05] hover:text-white transition"
                  >
                    {item.title}
                  </button>
                </li>
              ))}
              <li className="pt-2 border-t border-white/[0.05] mt-2">
                <a
                  href={`mailto:${socials.email}`}
                  className="block rounded-lg px-3 py-2.5 text-sm text-blue-400 hover:bg-white/[0.05] transition"
                >
                  {socials.email}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
