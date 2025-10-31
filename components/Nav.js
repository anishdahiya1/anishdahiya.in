import Link from 'next/link'
import MotionToggle from './MotionToggle'
import ThemeToggle from './ThemeToggle'

export default function Nav({reduced, setReduced, intensity, setIntensity, onOpenSettings}){
  return (
    <div className="container">
      <header className="nav">
        <div className="brand">anishdahiya.in</div>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/contact">Contact</Link>
        </nav>
  <div style={{display:'flex',gap:12,alignItems:'center'}}>
          <label style={{display:'flex',flexDirection:'column',alignItems:'center',fontSize:11,color:'var(--muted)'}}>Visuals
            <input aria-label="visual intensity" type="range" min="0" max="100" value={Math.round(intensity*100)} onChange={(e)=>setIntensity && setIntensity(Number(e.target.value)/100)} style={{width:120}} />
          </label>
          <MotionToggle onChange={(v)=>setReduced && setReduced(v)} />
          <ThemeToggle onChange={(d)=>{document.documentElement.dataset.theme = d? 'dark':'light'}} />
          <button className="btn ghost" onClick={()=>onOpenSettings && onOpenSettings()}>Settings</button>
        </div>
      </header>
    </div>
  )
}
