import { useEffect } from 'react'
import Nav from './Nav'
import AnimatedBackground from './AnimatedBackground'
import SiteFooter from './SiteFooter'

export default function Layout({children}){
  useEffect(() => {
    document.documentElement.classList.add('hyper-surface')
    return () => document.documentElement.classList.remove('hyper-surface')
  }, [])

  return (
    <div className="layout-shell">
      <AnimatedBackground />
      <Nav />
      <main className="layout-main">{children}</main>
      <SiteFooter />
    </div>
  )
}
