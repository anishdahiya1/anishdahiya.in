import {useEffect, useRef} from 'react'

export default function Background({reducedMotion=false, intensity=0.8}){
  const canvasRef = useRef(null)
  useEffect(()=>{
    if(reducedMotion) return // don't run heavy visuals
    const canvas = canvasRef.current
    if(!canvas) return
    const ctx = canvas.getContext('2d')
    let particles = []
    let blobs = []
    function resize(){canvas.width = innerWidth; canvas.height = innerHeight}
    window.addEventListener('resize', resize); resize()
    function rand(min,max){return Math.random()*(max-min)+min}
    function createParticles(n){
      const base = Math.round(60 * (canvas.width/1400))
      if(typeof n === 'undefined' || n === null) n = Math.max(30, Math.round(base * (typeof intensity === 'number' ? intensity : 0.8)))
      particles = []
      for(let i=0;i<n;i++){
        particles.push({x:rand(0,canvas.width), y:rand(0,canvas.height), r:rand(0.5,2.2), vx:rand(-0.25,0.25), vy:rand(-0.25,0.25), hue:rand(180,300)})
      }
    }
    function createBlobs(n){
      if(typeof n === 'undefined' || n === null) n = Math.max(2, Math.round(4 * (typeof intensity === 'number' ? intensity : 0.8)))
      blobs = []
      for(let i=0;i<n;i++){
        const scale = 1 + (1 - (typeof intensity === 'number' ? intensity : 0.8))
        blobs.push({x:rand(0,canvas.width), y:rand(0,canvas.height), r:rand(100,320) * scale, vx:rand(-0.02,0.02), vy:rand(-0.02,0.02), hue:rand(200,260)})
      }
    }
    createParticles(); createBlobs()
    let raf = null
    function draw(){
      ctx.clearRect(0,0,canvas.width,canvas.height)
      for(const b of blobs){b.x += b.vx; b.y += b.vy; if(b.x< -b.r) b.x = canvas.width + b.r; if(b.x>canvas.width + b.r) b.x = -b.r; if(b.y<-b.r) b.y = canvas.height + b.r; if(b.y>canvas.height + b.r) b.y = -b.r; const g = ctx.createRadialGradient(b.x,b.y,b.r*0.1,b.x,b.y,b.r); g.addColorStop(0, `hsla(${b.hue},80%,60%,0.12)`); g.addColorStop(0.5, `hsla(${b.hue},80%,60%,0.06)`); g.addColorStop(1,'rgba(0,0,0,0)'); ctx.fillStyle = g; ctx.fillRect(b.x-b.r,b.y-b.r,b.r*2,b.r*2)}
      for(const p of particles){
        p.x += p.vx; p.y += p.vy; if(p.x<0) p.x=canvas.width; if(p.x>canvas.width) p.x=0; if(p.y<0) p.y=canvas.height; if(p.y>canvas.height) p.y=0;
        ctx.beginPath(); ctx.fillStyle = `hsla(${p.hue},80%,60%,0.08)`; ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill()
      }
      for(let i=0;i<particles.length;i++){
        for(let j=i+1;j<particles.length;j++){
          const a=particles[i], b=particles[j]; const dx=a.x-b.x, dy=a.y-b.y; const d2=dx*dx+dy*dy;
          if(d2<5000){
            ctx.strokeStyle = `hsla(${(a.hue+b.hue)/2},80%,60%,${0.012*(5000-d2)/5000})`;
            ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke()
          }
        }
      }
      // throttle frame rate when intensity low
      if(typeof intensity === 'number' && intensity < 0.35){ setTimeout(()=> raf = requestAnimationFrame(draw), 120) } else raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)

    // parallax background move
    const bg = document.getElementById('bg-gradient')
    function onMove(e){if(!bg) return; const px = (e.clientX/window.innerWidth - 0.5)*12; const py = (e.clientY/window.innerHeight - 0.5)*8; bg.style.transform = `translate3d(${px}px, ${py}px, 0) scale(1.02)`}
    window.addEventListener('mousemove', onMove)

    return ()=>{
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
    }
  },[reducedMotion])

  return <canvas id="particle-canvas" ref={canvasRef} aria-hidden="true" style={{position:'fixed',inset:0,zIndex:-2,opacity:0.9}} />
}
