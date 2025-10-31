import {useState, useEffect} from 'react'
import Nav from './Nav'
import Background from './Background'
import Effects from './Effects'
import SettingsModal from './SettingsModal'

export default function Layout({children}){
  const [reduced, setReduced] = useState(false)
  const [dark, setDark] = useState(false)
  useEffect(()=>{
    try{const s = localStorage.getItem('reducedMotion'); if(s!==null) setReduced(s==='true'); else if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) setReduced(true)}catch(e){}
    try{const s2 = localStorage.getItem('siteTheme'); if(s2) setDark(s2==='dark'); else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) setDark(true)}catch(e){}
  },[])
  // visual intensity: 0..1
  const [intensity, setIntensity] = useState(0.8)
  // persist intensity
  useEffect(()=>{try{const s = localStorage.getItem('visualIntensity'); if(s!==null) setIntensity(Number(s))}catch(e){}},[])
  useEffect(()=>{try{localStorage.setItem('visualIntensity', String(intensity))}catch(e){}},[intensity])
  useEffect(()=>{ if(typeof document !== 'undefined'){ document.documentElement.dataset.theme = dark? 'dark':'light' } },[dark])
  useEffect(()=>{
    // detect low-power devices and reduce defaults
    try{
      const isMobile = /Mobi|Android/i.test(navigator.userAgent)
      if(isMobile) setIntensity(0.45)
    }catch(e){}
  },[])
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <Nav reduced={reduced} setReduced={setReduced} intensity={intensity} setIntensity={setIntensity} onOpenSettings={()=>setModalOpen(true)} />
      <Background reducedMotion={reduced} intensity={intensity} />
      <Effects />
      <SettingsModal open={modalOpen} onClose={()=>setModalOpen(false)} intensity={intensity} setIntensity={setIntensity} reduced={reduced} setReduced={setReduced} dark={dark} setDark={setDark} />
      <main className="container">{children}</main>
    </>
  )
}
