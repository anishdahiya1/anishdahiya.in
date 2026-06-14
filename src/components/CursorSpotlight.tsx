import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorSpotlight() {
  const cursorX = useMotionValue(-400);
  const cursorY = useMotionValue(-400);

  const springX = useSpring(cursorX, { damping: 30, stiffness: 200, mass: 0.5 });
  const springY = useSpring(cursorY, { damping: 30, stiffness: 200, mass: 0.5 });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [cursorX, cursorY]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Spotlight glow that follows cursor */}
      <motion.div
        style={{
          left: springX,
          top: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute w-[620px] h-[620px] rounded-full pointer-events-none mix-blend-screen"
        aria-hidden
      >
        <div className="absolute inset-0 rounded-full bg-gradient-radial from-cyan-400/[0.08] via-blue-600/[0.06] to-transparent animate-pulse-soft" />
        <div className="absolute inset-[22%] rounded-full border border-cyan-300/10 bg-cyan-300/[0.02] blur-[0.5px]" />
        <div className="absolute inset-[38%] rounded-full bg-gradient-radial from-white/[0.08] to-transparent animate-drift-slow" />
      </motion.div>
    </div>
  );
}
