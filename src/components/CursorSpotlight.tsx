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
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        aria-hidden
      >
        <div className="w-full h-full rounded-full bg-gradient-radial from-blue-600/[0.07] to-transparent" />
      </motion.div>
    </div>
  );
}
