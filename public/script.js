// enhanced particles + background parallax
(() => {
  const rotatingRoles = ["NLP","Computer Vision","Data Engineering","ML Ops","Research"]
  let roleIdx=0
  const roleEl = document.getElementById('rotating-role')
  function rotateRole(){
    if(!roleEl) return
    roleIdx = (roleIdx+1)%rotatingRoles.length
    roleEl.animate([{opacity:0, transform:'translateY(6px)'},{opacity:1, transform:'translateY(0)'}],{duration:420,easing:'cubic-bezier(.2,.9,.2,1)'})
    roleEl.textContent = rotatingRoles[roleIdx]
  }
  setInterval(rotateRole,3200)

  // Live clock
  function updateClock(){
    const el = document.querySelector('.widget.clock')
    if(!el) return
    const now = new Date()
    el.textContent = now.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})
  }
  setInterval(updateClock,1000); updateClock()

  // Visitor counter (simulated)
  let visitors = Math.floor(120 + Math.random()*420)
  const vEl = document.getElementById('visitors')
  if(vEl) vEl.textContent = visitors
  setInterval(()=>{visitors += Math.round(Math.random()*3); if(vEl) vEl.textContent = visitors}, 6000)

  // Canvas particles (now with big slow blobs + parallax)
  const canvas = document.getElementById('particle-canvas')
  if(!canvas) return
  const ctx = canvas.getContext('2d')
  let particles = []
  let blobs = []
  function resize(){canvas.width = innerWidth; canvas.height = innerHeight}
  window.addEventListener('resize', resize); resize()
  function rand(min,max){return Math.random()*(max-min)+min}
  function createParticles(n=80){particles = []; for(let i=0;i<n;i++){particles.push({x:rand(0,canvas.width), y:rand(0,canvas.height), r:rand(0.6,2.2), vx:rand(-0.25,0.25), vy:rand(-0.25,0.25), hue:rand(180,300)})}}
  function createBlobs(n=4){blobs = []; for(let i=0;i<n;i++){blobs.push({x:rand(0,canvas.width), y:rand(0,canvas.height), r:rand(120,320), vx:rand(-0.02,0.02), vy:rand(-0.02,0.02), hue:rand(200,260)})}}
  createParticles(90); createBlobs(4)

  let mouseX = canvas.width/2, mouseY = canvas.height/2
  window.addEventListener('mousemove', (e)=>{mouseX = e.clientX; mouseY = e.clientY; const bg = document.getElementById('bg-gradient'); if(bg){const px = (mouseX/canvas.width - 0.5)*12; const py = (mouseY/canvas.height - 0.5)*8; bg.style.transform = `translate3d(${px}px, ${py}px, 0) scale(1.02)`}})

  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    // blobs
    for(const b of blobs){b.x += b.vx; b.y += b.vy; if(b.x< -b.r) b.x = canvas.width + b.r; if(b.x>canvas.width + b.r) b.x = -b.r; if(b.y<-b.r) b.y = canvas.height + b.r; if(b.y>canvas.height + b.r) b.y = -b.r; const g = ctx.createRadialGradient(b.x,b.y,b.r*0.1,b.x,b.y,b.r); g.addColorStop(0, `hsla(${b.hue},80%,60%,0.12)`); g.addColorStop(0.5, `hsla(${b.hue},80%,60%,0.06)`); g.addColorStop(1,'rgba(0,0,0,0)'); ctx.fillStyle = g; ctx.fillRect(b.x-b.r,b.y-b.r,b.r*2,b.r*2)}
    // small particles
    for(const p of particles){p.x += p.vx; p.y += p.vy; if(p.x<0) p.x=canvas.width; if(p.x>canvas.width) p.x=0; if(p.y<0) p.y=canvas.height; if(p.y>canvas.height) p.y=0; ctx.beginPath(); ctx.fillStyle = `hsla(${p.hue},80%,60%,0.08)`; ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill()}
    // connections
    for(let i=0;i<particles.length;i++){for(let j=i+1;j<particles.length;j++){const a=particles[i], b=particles[j]; const dx=a.x-b.x, dy=a.y-b.y; const d2=dx*dx+dy*dy; if(d2<5000){ctx.strokeStyle = `hsla(${(a.hue+b.hue)/2},80%,60%,${0.012*(5000-d2)/5000})`; ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke()}}}
    requestAnimationFrame(draw)
  }
  requestAnimationFrame(draw)

  // tilt cards
  document.querySelectorAll('.tilt').forEach(el=>{
    el.addEventListener('mousemove', e=>{
      const r = el.getBoundingClientRect(); const dx = e.clientX - r.left - r.width/2; const dy = e.clientY - r.top - r.height/2; const rx = (dy/(r.height/2)) * 6; const ry = -(dx/(r.width/2)) * 6; el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(8px)`;
    })
    el.addEventListener('mouseleave', ()=> el.style.transform='')
  })

})();
