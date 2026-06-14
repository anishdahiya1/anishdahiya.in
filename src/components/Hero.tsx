import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Instagram, Youtube, ArrowDown } from "lucide-react";
import { socials } from "../lib/data";

const SOCIAL = [
  { icon: Github, href: socials.github, label: "GitHub" },
  { icon: Linkedin, href: socials.linkedin, label: "LinkedIn" },
  { icon: Instagram, href: socials.instagram, label: "Instagram" },
  { icon: Youtube, href: socials.youtube, label: "YouTube" },
];

const WORD_VARIANTS = {
  hidden: { y: "110%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: { delay: 0.3 + i * 0.15, duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* ── LEFT: text ── */}
          <div className="flex-1 text-center lg:text-left space-y-7 order-2 lg:order-1">
            {/* Availability chip */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-sm px-4 py-1.5 text-xs text-zinc-400"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute animate-ping rounded-full h-full w-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              Available for projects · 2025
            </motion.div>

            {/* Name */}
            <div className="space-y-0 overflow-hidden">
              {["Anish", "Dahiya"].map((word, i) => (
                <div key={word} className="overflow-hidden">
                  <motion.h1
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={WORD_VARIANTS}
                    className="font-display font-black text-white leading-[0.92] tracking-tight"
                    style={{ fontSize: "clamp(4rem, 11vw, 9.5rem)" }}
                  >
                    {word}
                  </motion.h1>
                </div>
              ))}
            </div>

            {/* Role line */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              <div className="h-px w-8 bg-blue-400/70" />
              <span className="font-mono text-[11px] tracking-[0.3em] text-zinc-500 uppercase">
                Data Scientist · AI Builder · Creator
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6 }}
              className="text-base text-zinc-400 leading-relaxed max-w-md mx-auto lg:mx-0"
            >
              Building from first principles — from 57M-param Hindi LLMs to
              production ML pipelines. I turn research into real-world impact.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-100 hover:scale-105"
              >
                View my work
                <ArrowDown className="h-3.5 w-3.5 -rotate-90" />
              </button>
              <a
                href={`mailto:${socials.email}`}
                className="inline-flex h-11 items-center rounded-full border border-white/[0.12] bg-white/[0.05] backdrop-blur-sm px-7 text-sm font-medium text-zinc-300 transition hover:bg-white/[0.1] hover:text-white"
              >
                Get in touch
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="flex gap-2.5 justify-center lg:justify-start"
            >
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-zinc-500 backdrop-blur-sm transition hover:border-white/20 hover:text-zinc-200 hover:bg-white/[0.08]"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: circular photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 flex-shrink-0 flex flex-col items-center gap-6"
          >
            {/* Photo with spinning ring */}
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              {/* Outer pulse ring */}
              <motion.div
                animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)" }}
              />
              <motion.div
                animate={{ scale: [1, 1.22, 1], opacity: [0.2, 0.05, 0.2] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute inset-0 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 65%)" }}
              />

              {/* Spinning gradient ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{
                  padding: "3px",
                  background: "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #06b6d4, #10b981, #3b82f6)",
                  borderRadius: "50%",
                }}
              >
                <div className="w-full h-full rounded-full bg-zinc-950" />
              </motion.div>

              {/* Static separator ring */}
              <div
                className="absolute rounded-full bg-zinc-950"
                style={{ inset: "3px" }}
              />

              {/* Photo */}
              <div
                className="absolute overflow-hidden rounded-full border border-white/[0.06]"
                style={{ inset: "6px" }}
              >
                <img
                  src="/new.jpg"
                  alt="Anish Dahiya"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Inner glow overlay */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  inset: "6px",
                  background: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.08) 0%, transparent 60%)",
                  borderRadius: "50%",
                }}
              />
            </div>

            {/* Name badge below photo */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col items-center gap-1 text-center"
            >
              <span className="text-sm font-semibold text-white">Anish Dahiya</span>
              <span className="text-xs text-zinc-500 font-mono">Data Scientist @ AI</span>
            </motion.div>

            {/* Hindi GPT badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
              className="flex items-center gap-2.5 rounded-2xl border border-amber-500/20 bg-zinc-900/90 backdrop-blur-sm px-4 py-2.5 shadow-lg shadow-black/30"
            >
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl border border-amber-500/25 bg-amber-500/10 font-bold text-amber-400 text-sm">
                हि
              </div>
              <div>
                <p className="text-xs font-semibold text-white leading-none mb-0.5">Hindi GPT</p>
                <p className="text-[10px] text-zinc-500">57.7M params · Live on HuggingFace</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-700 hover:text-zinc-400 transition cursor-pointer"
      >
        <span className="text-[10px] font-mono tracking-[0.25em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-3.5 w-3.5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
