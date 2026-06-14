import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Instagram, Youtube, ArrowDown } from "lucide-react";
import { socials } from "../lib/data";
import { PortraitFrame } from "./PortraitFrame";

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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.12),transparent_28%),linear-gradient(180deg,rgba(2,6,23,0.18),rgba(2,6,23,0.65))]" />

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
              className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-white/[0.05] backdrop-blur-sm px-4 py-1.5 text-xs text-zinc-200 shadow-[0_12px_50px_rgba(0,0,0,0.22)]"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute animate-ping rounded-full h-full w-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              Available for select projects · 2026
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
                    className="font-display font-black text-white leading-[0.92] tracking-tight bg-[linear-gradient(90deg,#f8fafc,#67e8f9,#60a5fa,#f8fafc)] bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer"
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
              <div className="h-px w-8 bg-gradient-to-r from-cyan-300/80 to-blue-500/50" />
              <span className="font-mono text-[11px] tracking-[0.3em] text-zinc-400 uppercase">
                Data Scientist · AI Builder · Creator
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6 }}
              className="text-base text-zinc-300/80 leading-relaxed max-w-md mx-auto lg:mx-0"
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
                className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-zinc-950 transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-100 hover:shadow-[0_20px_60px_rgba(255,255,255,0.12)]"
              >
                View my work
                <ArrowDown className="h-3.5 w-3.5 -rotate-90" />
              </button>
              <a
                href={`mailto:${socials.email}`}
                className="inline-flex h-11 items-center rounded-full border border-cyan-300/12 bg-white/[0.05] backdrop-blur-sm px-7 text-sm font-medium text-zinc-200 transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.1] hover:text-white"
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
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-zinc-400 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/25 hover:text-cyan-200 hover:bg-cyan-300/[0.08]"
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
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 0.5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <PortraitFrame
                src="/new.jpg"
                alt="Anish Dahiya"
                className="h-64 w-64 md:h-72 md:w-72"
                imageClassName="transition duration-700 group-hover:scale-105"
                overlay={(
                  <motion.div
                    animate={{ rotate: 360, scale: [1, 1.02, 1] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    className="pointer-events-none absolute -inset-5 rounded-full border border-cyan-300/10 [mask:linear-gradient(#000,transparent_80%)]"
                  />
                )}
              />
            </motion.div>

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
              className="flex items-center gap-2.5 rounded-2xl border border-cyan-300/15 bg-white/[0.04] backdrop-blur-xl px-4 py-2.5 shadow-[0_18px_70px_rgba(0,0,0,0.35)]"
            >
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl border border-cyan-300/25 bg-cyan-400/10 font-bold text-cyan-200 text-sm">
                हि
              </div>
              <div>
                <p className="text-xs font-semibold text-white leading-none mb-0.5">Hindi GPT</p>
                <p className="text-[10px] text-zinc-400">57.7M params · Live on HuggingFace</p>
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
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-500 hover:text-cyan-200 transition cursor-pointer"
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
