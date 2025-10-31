import {useEffect} from 'react'
import Nav from './Nav'
import Background from './Background'
import Effects from './Effects'

export default function Layout({children}){
  // set theme from user preference if present
  useEffect(()=>{
    try{
      const s2 = localStorage.getItem('siteTheme')
      if(s2) document.documentElement.dataset.theme = s2 === 'dark' ? 'dark' : 'light'
      else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) document.documentElement.dataset.theme = 'dark'
    }catch(e){}
  },[])

  return (
    <>
      <Nav />
      {/* decorative gradient element used by CSS and Background parallax */}
      <div id="bg-gradient" aria-hidden="true" />
      <Background />
      <Effects />
      <main className="container">{children}</main>
    </>
  )
}
