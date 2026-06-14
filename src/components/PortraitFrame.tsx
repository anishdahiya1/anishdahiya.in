import type { ReactNode } from "react";

type PortraitFrameProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  overlay?: ReactNode;
};

export function PortraitFrame({ src, alt, className = "", imageClassName = "", overlay }: PortraitFrameProps) {
  return (
    <div className={`relative isolate ${className}`}>
      <div className="absolute -inset-3 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.18)_0%,rgba(8,15,32,0)_68%)] blur-2xl" />
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/18 via-white/5 to-transparent opacity-80" />
      <div className="absolute inset-[1px] rounded-full bg-gradient-to-br from-blue-400/14 via-zinc-950/10 to-cyan-400/10" />
      <div className="absolute inset-[3px] rounded-full border border-white/8 bg-zinc-950/90 shadow-[0_24px_90px_rgba(0,0,0,0.45)]" />
      <div className="absolute inset-[6px] overflow-hidden rounded-full border border-white/10 bg-zinc-900">
        <img src={src} alt={alt} className={`h-full w-full object-cover object-top ${imageClassName}`} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.02)_28%,rgba(0,0,0,0.08)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_20%,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0)_38%)]" />
      </div>
      {overlay}
    </div>
  );
}