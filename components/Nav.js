import Link from 'next/link'

const LINKS = [
  {href: '/#story', label: 'Story'},
  {href: '/#work', label: 'Work'},
  {href: '/#experiments', label: 'Experiments'},
  {href: '/projects', label: 'Projects'},
  {href: '/contact', label: 'Contact'}
]

export default function Nav(){
  return (
    <header className="site-nav">
      <Link href="/" className="site-nav__brand">Anish Dahiya</Link>
      <nav className="site-nav__links">
        {LINKS.map(({href, label}) => (
          <Link key={href} href={href} className="site-nav__link">{label}</Link>
        ))}
      </nav>
      <a className="site-nav__cta" href="mailto:hello@anishdahiya.in">Let&apos;s collaborate</a>
    </header>
  )
}
