import { useEffect, useRef } from "react";

interface Star {
  x: number; y: number; r: number;
  alpha: number; phase: number; speed: number;
  cr: number; cg: number; cb: number;
}

interface Meteor {
  x: number; y: number; dx: number; dy: number;
  len: number; alpha: number; active: boolean; timer: number;
}

export function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      stars.forEach((s) => { s.x = Math.random() * W; s.y = Math.random() * H; });
    };
    window.addEventListener("resize", resize);

    const mkStar = (): Star => {
      const roll = Math.random();
      // 10% warm yellow, 15% cool blue, 75% white
      const [cr, cg, cb] = roll < 0.1 ? [255, 210, 140] : roll < 0.25 ? [160, 200, 255] : [255, 255, 255];
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.pow(Math.random(), 2.5) * 1.8 + 0.25,
        alpha: Math.random() * 0.55 + 0.2,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.012 + 0.003,
        cr, cg, cb,
      };
    };

    const stars: Star[] = Array.from({ length: 320 }, mkStar);

    const mkMeteor = (): Meteor => ({
      x: -100, y: -100, dx: 0, dy: 0,
      len: 0, alpha: 0, active: false,
      timer: Math.floor(Math.random() * 350 + 200),
    });

    const launch = (m: Meteor) => {
      m.x = Math.random() * W * 0.75;
      m.y = Math.random() * H * 0.35;
      const angle = Math.PI * 0.18 + Math.random() * 0.14;
      const spd = 13 + Math.random() * 9;
      m.dx = Math.cos(angle) * spd;
      m.dy = Math.sin(angle) * spd;
      m.len = 90 + Math.random() * 130;
      m.alpha = 1;
      m.active = true;
    };

    const meteors: Meteor[] = Array.from({ length: 3 }, mkMeteor);

    let frame = 0;
    let animId: number;

    const draw = () => {
      frame++;

      // Deep space gradient background
      const bg = ctx.createLinearGradient(0, 0, 0, H);
      bg.addColorStop(0, "#010308");
      bg.addColorStop(0.45, "#030a17");
      bg.addColorStop(1, "#040c12");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      // Milky Way band — faint diagonal streak of denser stars
      const mw = ctx.createLinearGradient(0, H * 0.6, W, H * 0.2);
      mw.addColorStop(0, "rgba(80,100,160,0)");
      mw.addColorStop(0.3, "rgba(80,100,160,0.04)");
      mw.addColorStop(0.5, "rgba(100,120,200,0.06)");
      mw.addColorStop(0.7, "rgba(80,100,160,0.04)");
      mw.addColorStop(1, "rgba(80,100,160,0)");
      ctx.fillStyle = mw;
      ctx.fillRect(0, 0, W, H);

      // Stars
      stars.forEach((s) => {
        const tw = 0.45 + 0.55 * (0.5 + 0.5 * Math.sin(frame * s.speed + s.phase));
        const a = tw * s.alpha;

        if (s.r > 1.3) {
          ctx.shadowBlur = s.r * 4;
          ctx.shadowColor = `rgba(${s.cr},${s.cg},${s.cb},0.9)`;
        }
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.cr},${s.cg},${s.cb},${a})`;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Cross spike for the brightest stars
        if (s.r > 1.6 && tw > 0.8) {
          ctx.strokeStyle = `rgba(${s.cr},${s.cg},${s.cb},${a * 0.4})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(s.x - s.r * 5, s.y);
          ctx.lineTo(s.x + s.r * 5, s.y);
          ctx.moveTo(s.x, s.y - s.r * 5);
          ctx.lineTo(s.x, s.y + s.r * 5);
          ctx.stroke();
        }
      });

      // Meteors
      meteors.forEach((m) => {
        if (!m.active) {
          m.timer--;
          if (m.timer <= 0) launch(m);
          return;
        }

        const dist = Math.sqrt(m.dx * m.dx + m.dy * m.dy);
        const tx = m.x - (m.dx / dist) * m.len;
        const ty = m.y - (m.dy / dist) * m.len;

        const gr = ctx.createLinearGradient(tx, ty, m.x, m.y);
        gr.addColorStop(0, "rgba(255,255,255,0)");
        gr.addColorStop(0.7, `rgba(220,230,255,${m.alpha * 0.6})`);
        gr.addColorStop(1, `rgba(255,255,255,${m.alpha})`);
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(m.x, m.y);
        ctx.strokeStyle = gr;
        ctx.lineWidth = 1.8;
        ctx.shadowBlur = 6;
        ctx.shadowColor = `rgba(200,220,255,${m.alpha * 0.8})`;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Head glow
        ctx.beginPath();
        ctx.arc(m.x, m.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${m.alpha})`;
        ctx.fill();

        m.x += m.dx;
        m.y += m.dy;
        m.alpha -= 0.016;

        if (m.alpha <= 0 || m.x > W + 150 || m.y > H + 150) {
          m.active = false;
          m.timer = Math.floor(Math.random() * 450 + 250);
        }
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      {/* Canvas starfield */}
      <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />

      {/* Nebula glows — CSS only, perfectly smooth */}
      <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden" aria-hidden>
        {/* Purple nebula — top right */}
        <div
          className="absolute animate-drift"
          style={{
            top: "-10%", right: "-10%",
            width: 700, height: 700,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(88,28,135,0.18) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        {/* Blue nebula — left center */}
        <div
          className="absolute animate-drift-slow"
          style={{
            top: "30%", left: "-8%",
            width: 600, height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(29,78,216,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        {/* Teal nebula — bottom center */}
        <div
          className="absolute animate-pulse-soft"
          style={{
            bottom: "-5%", left: "35%",
            width: 500, height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6,78,59,0.10) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <div
          className="absolute inset-x-0 top-1/3 h-[1px] animate-scan"
          style={{ background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.42), rgba(255,255,255,0.12), transparent)" }}
        />

        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.18) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(circle at center, black 18%, transparent 74%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 18%, transparent 74%)",
          }}
        />
      </div>
    </>
  );
}
