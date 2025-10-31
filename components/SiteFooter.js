import Link from 'next/link'

export default function SiteFooter(){
  return (
    <footer className="site-footer">
      <div className="site-footer__brand">anishdahiya.in</div>
      <div className="site-footer__links">
        <a href="mailto:hello@anishdahiya.in">hello@anishdahiya.in</a>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="site-footer__note">© {new Date().getFullYear()} Anish Dahiya · Crafted with motion & storytelling</div>
    </footer>
  )
}
