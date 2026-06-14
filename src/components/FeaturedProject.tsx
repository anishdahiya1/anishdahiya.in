import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Cpu, Database, Zap, BarChart3 } from "lucide-react";
import type { Project } from "../lib/data";

const SPEC_ICONS: Record<string, typeof Cpu> = {
  Parameters: Cpu,
  Layers: BarChart3,
  Tokens: Database,
  Precision: Zap,
};

interface FeaturedProjectProps {
  project: Project;
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const specs = project.specs ?? {};
  const specEntries = Object.entries(specs);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-[1.75rem] border border-white/[0.09] bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.12),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.02))] backdrop-blur-xl"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-amber-500/[0.08] blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-sky-500/[0.05] blur-[100px]" />
      </div>

      {/* Top border highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

      <div className="relative p-8 md:p-12">
        {/* Label row */}
        <div className="mb-8 flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/[0.08] px-3 py-1 text-xs font-semibold text-amber-300 tracking-wide backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
            Featured Project
          </span>
          <span className="text-xs text-zinc-400">{project.year}</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_420px]">
          {/* Left: info */}
          <div className="space-y-6">
            {/* Hindi char decoration */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-500/20 bg-amber-500/[0.08] text-3xl font-bold text-amber-400 select-none">
                हि
              </div>
              <div>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-400 font-mono">
                  Pretraining → SFT → Deployment
                </p>
              </div>
            </div>

            <p className="text-zinc-300/75 leading-relaxed text-base max-w-lg">
              {project.description}
            </p>

            {/* Pipeline steps */}
            <div className="flex flex-wrap gap-2">
              {["Pretraining", "SentencePiece BPE", "SFT on Alpaca", "Gradio UI", "HuggingFace Spaces"].map((step, i) => (
                <motion.span
                  key={step}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.06 }}
                  className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-xs text-zinc-300/75 backdrop-blur-sm"
                >
                  {step}
                </motion.span>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-amber-500/[0.08] px-3 py-0.5 text-xs font-medium text-amber-300/85"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Perplexity stat — the big win */}
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5 backdrop-blur-sm">
              <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-3">
                Training Result
              </p>
              <div className="flex items-end gap-4">
                <div>
                  <p className="text-xs text-zinc-500 mb-1">Perplexity start</p>
                  <p className="font-display text-2xl font-bold text-zinc-400">~400</p>
                </div>
                <div className="flex-1 flex items-center gap-2 mb-2">
                  <div className="flex-1 h-px bg-gradient-to-r from-zinc-700 via-amber-500 to-emerald-500" />
                  <span className="text-xs text-zinc-600">→</span>
                </div>
                <div>
                  <p className="text-xs text-zinc-500 mb-1">Perplexity final</p>
                  <p className="font-display text-2xl font-bold text-emerald-400">~53</p>
                </div>
                <div className="ml-2">
                  <p className="text-xs text-zinc-500 mb-1">Reduction</p>
                  <p className="font-display text-2xl font-bold text-amber-400">86%</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex h-11 items-center gap-2 rounded-full bg-amber-500 px-6 text-sm font-semibold text-zinc-950 transition duration-300 hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-[0_18px_50px_rgba(245,158,11,0.18)]"
            >
              Try live demo
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          </div>

          {/* Right: specs grid + architecture */}
          <div className="space-y-4">
            {/* Architecture visualization */}
            <div className="rounded-2xl border border-white/[0.06] bg-zinc-950/60 p-5 font-mono text-xs">
              <p className="text-zinc-600 mb-4 text-[10px] uppercase tracking-widest">Architecture</p>
              <div className="space-y-2">
                {[
                  { label: "Input Tokens", color: "bg-zinc-700", width: "w-full", text: "Hindi BPE · vocab 32,768" },
                  { label: "Embedding", color: "bg-blue-600/50", width: "w-11/12", text: "d_model = 512" },
                  { label: "× 12 Transformer Blocks", color: "bg-indigo-600/50", width: "w-10/12", text: "8 heads · FFN = 2,048" },
                  { label: "LayerNorm", color: "bg-violet-600/40", width: "w-9/12", text: "Pre-norm architecture" },
                  { label: "LM Head", color: "bg-amber-600/50", width: "w-8/12", text: "Tied weights" },
                  { label: "Softmax Output", color: "bg-emerald-600/40", width: "w-7/12", text: "Hindi token distribution" },
                ].map((row, i) => (
                  <motion.div
                    key={row.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.07 }}
                    className="flex items-center gap-2"
                  >
                    <div className={`h-7 ${row.width} ${row.color} rounded flex items-center px-2.5 justify-between shrink-0`}>
                      <span className="text-white/80 text-[10px] truncate">{row.label}</span>
                    </div>
                    <span className="text-zinc-600 text-[10px] whitespace-nowrap hidden sm:block">{row.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Spec grid */}
            <div className="grid grid-cols-2 gap-2">
              {specEntries.slice(0, 8).map(([key, val], i) => {
                const Icon = SPEC_ICONS[key];
                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.05 }}
                    className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-3"
                  >
                    {Icon && <Icon className="h-3.5 w-3.5 text-zinc-600 mb-1.5" />}
                    <p className="text-[10px] text-zinc-600 mb-0.5">{key}</p>
                    <p className="text-xs font-semibold text-zinc-300 leading-snug">{val}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
