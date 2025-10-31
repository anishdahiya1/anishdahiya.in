import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Nav(){
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
          <ThemeToggle />
        </div>
      </header>
    </div>
  )
}
