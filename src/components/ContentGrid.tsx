import { motion } from "framer-motion";
import { Youtube, Linkedin, Mic, BookOpen, ArrowUpRight } from "lucide-react";
import type { ContentPiece } from "../lib/data";

const CFG = {
  YouTube: { icon: Youtube, accent: "text-red-400", dot: "bg-red-500" },
  LinkedIn: { icon: Linkedin, accent: "text-blue-400", dot: "bg-blue-500" },
  Podcast: { icon: Mic, accent: "text-violet-400", dot: "bg-violet-500" },
  Medium: { icon: BookOpen, accent: "text-emerald-400", dot: "bg-emerald-500" },
};

const IMGS = [
  "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600&q=70",
  "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600&q=70",
  "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600&q=70",
  "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600&q=70",
];

export function ContentGrid({ items }: { items: ContentPiece[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item, i) => {
        const cfg = CFG[item.platform];
        const Icon = cfg.icon;
        return (
          <motion.a
            key={item.title}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            viewport={{ once: true, margin: "-40px" }}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-zinc-900/60 transition-all duration-400 hover:border-white/[0.12] hover:-translate-y-0.5"
          >
            {/* Thumbnail */}
            <div className="relative h-36 overflow-hidden">
              <img
                src={IMGS[i % IMGS.length]}
                alt={item.title}
                className="h-full w-full object-cover opacity-40 transition-all duration-600 group-hover:opacity-55 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900" />
            </div>

            {/* Body */}
            <div className="p-5 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Icon className={`h-3.5 w-3.5 ${cfg.accent}`} />
                  <span className={`text-[11px] font-mono uppercase tracking-widest ${cfg.accent}`}>
                    {item.platform}
                  </span>
                </div>
                <ArrowUpRight className="h-4 w-4 text-zinc-700 transition group-hover:text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <h3 className="font-display text-base font-semibold text-white leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2">
                {item.summary}
              </p>
            </div>
          </motion.a>
        );
      })}
    </div>
  );
}
