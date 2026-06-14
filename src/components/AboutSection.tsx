import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PortraitFrame } from "./PortraitFrame";

const stats = [
  { value: "57.7M", label: "LLM parameters built" },
  { value: "1.35B", label: "Hindi tokens trained" },
  { value: "15+", label: "AI projects shipped" },
  { value: "86%", label: "Perplexity reduction" },
];

const skills = [
  { name: "PyTorch / Deep Learning", pct: 92 },
  { name: "Python · Pandas · NumPy", pct: 96 },
  { name: "NLP / LLMs / RAG", pct: 89 },
  { name: "MLOps · AWS · Docker", pct: 78 },
  { name: "Data Visualization", pct: 88 },
];

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="grid gap-16 lg:grid-cols-2 items-start">
      {/* Photo column */}
      <motion.div
        initial={{ opacity: 0, x: -32 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center gap-8"
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <PortraitFrame
            src="/new.jpg"
            alt="Anish Dahiya"
            className="h-64 w-64 md:h-80 md:w-80"
          />
        </motion.div>

        {/* Stats grid */}
        <div className="w-full grid grid-cols-2 gap-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.04] backdrop-blur-sm p-4 text-center shadow-[0_10px_40px_rgba(0,0,0,0.18)]"
            >
                <p className="font-display text-2xl font-bold text-white">{s.value}</p>
                <p className="text-[11px] text-zinc-400 mt-0.5 leading-tight">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Text column */}
      <motion.div
        initial={{ opacity: 0, x: 32 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="space-y-8 pt-4"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="h-px w-5 bg-blue-400/80" />
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-400">About Me</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
            Bridging research and production — from Hindi LLMs to enterprise ML
          </h2>
        </div>

        <div className="space-y-4 text-sm text-zinc-300/80 leading-relaxed">
          <p>
            I'm Anish Dahiya — I build from the ground up. I recently trained a{" "}
            <span className="text-white font-medium">57.7M-parameter Hindi GPT entirely from scratch</span>{" "}
            using PyTorch, reducing perplexity from ~400 to ~53 on 1.35B tokens. That first-principles
            thinking shapes everything I build.
          </p>
          <p>
            By day I'm part of an applied AI squad turning research spikes into production deployments.
            I completed a B.Tech in CSE (AIML) at Chandigarh University and have shipped projects ranging
            from biomedical classifiers to bus congestion prediction for Delhi's transit system.
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500">Core expertise</p>
          <div className="space-y-3">
            {skills.map((sk, i) => (
              <motion.div
                key={sk.name}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.07 }}
                className="space-y-1.5"
              >
                <div className="flex justify-between text-xs">
                  <span className="text-zinc-300">{sk.name}</span>
                  <span className="font-mono text-zinc-500">{sk.pct}%</span>
                </div>
                <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${sk.pct}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + i * 0.07, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex h-10 items-center rounded-full bg-white px-6 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-100"
          >
            Work with me
          </a>
          <a
            href="https://github.com/anishdahiya1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center rounded-full border border-white/[0.1] bg-white/[0.04] backdrop-blur-sm px-6 text-sm text-zinc-300 transition hover:bg-white/[0.08]"
          >
            GitHub →
          </a>
        </div>
      </motion.div>
    </div>
  );
}
