import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Youtube, Mail, ArrowUp } from "lucide-react";
import { socials, navItems } from "../lib/data";

const social = [
  { label: "GitHub", href: socials.github, icon: Github },
  { label: "LinkedIn", href: socials.linkedin, icon: Linkedin },
  { label: "Instagram", href: socials.instagram, icon: Instagram },
  { label: "YouTube", href: socials.youtube, icon: Youtube },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.05] bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr_1fr]">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="font-display text-lg font-semibold text-white">
              Anish<span className="text-blue-400">.</span>
            </p>
            <p className="text-xs text-zinc-600 leading-relaxed max-w-[200px]">
              Data Scientist and AI builder. Building from first principles.
            </p>
            <div className="flex gap-2.5">
              {social.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.07] text-zinc-600 transition hover:border-white/[0.14] hover:text-zinc-300"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Nav */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.07 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-700">Navigation</p>
            <ul className="space-y-2">
              {navItems.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={(e) => { e.preventDefault(); document.querySelector(n.href)?.scrollIntoView({ behavior: "smooth" }); }}
                    className="text-xs text-zinc-500 hover:text-zinc-200 transition"
                  >
                    {n.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-700">Contact</p>
            <a
              href={`mailto:${socials.email}`}
              className="text-xs text-zinc-500 hover:text-zinc-200 transition flex items-center gap-1.5"
            >
              <Mail className="h-3 w-3" />
              {socials.email}
            </a>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex items-center justify-between border-t border-white/[0.04] pt-6">
          <p className="text-[11px] text-zinc-700">
            {new Date().getFullYear()} Anish Dahiya
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.07] text-zinc-700 transition hover:border-white/[0.14] hover:text-zinc-400"
            aria-label="Back to top"
          >
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
