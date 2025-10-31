import React, {useEffect, useRef} from 'react'
import { motion } from 'framer-motion'

export default function SettingsModal({open, onClose, intensity=0.8, setIntensity=()=>{}, reduced=false, setReduced=()=>{}, dark=false, setDark=()=>{}}){
  const containerRef = useRef(null)
  const firstRef = useRef(null)
  const lastRef = useRef(null)

  useEffect(()=>{
    if(!open) return
    // focus first control
    const prev = document.activeElement
    setTimeout(()=>{ firstRef.current?.focus() }, 0)
    function onKey(e){ if(e.key === 'Escape') onClose && onClose(); if(e.key === 'Tab'){ // simple trap
        const focusable = containerRef.current?.querySelectorAll('button,input,select,textarea,a[href]') || []
        if(focusable.length === 0) return
        const first = focusable[0], last = focusable[focusable.length-1]
        if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus() }
        else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus() }
      }}
    window.addEventListener('keydown', onKey)
    return ()=>{ window.removeEventListener('keydown', onKey); prev?.focus && prev.focus() }
  },[open, onClose])

  if(!open) return null

  return (
    <div aria-modal="true" role="dialog" aria-label="Settings" style={{position:'fixed',inset:0,display:'flex',alignItems:'center',justifyContent:'center',zIndex:60}}>
      <div style={{position:'absolute',inset:0,backdropFilter:'blur(6px)',background:'rgba(10,12,20,0.35)'}} onClick={onClose} />
      <motion.div initial={{opacity:0, scale:0.98, y:6}} animate={{opacity:1, scale:1, y:0}} exit={{opacity:0, scale:0.98, y:-6}} transition={{duration:0.22}} ref={containerRef} style={{background:'var(--card-bg, white)',padding:20,borderRadius:12,boxShadow:'0 24px 60px rgba(12,16,24,0.16)',width:360,maxWidth:'90%'}}>
        <h3 style={{marginTop:0}}>Visual Settings</h3>
        <label htmlFor="visual-intensity" style={{display:'block',fontSize:13,color:'var(--muted,#475569)'}}>Visual intensity</label>
        <input
          id="visual-intensity"
          ref={firstRef}
          aria-label="Visual intensity"
          type="range"
          min={0}
          max={100}
          value={Math.round(intensity*100)}
          onChange={(e)=>setIntensity(Number(e.target.value)/100)}
          style={{width:'100%'}}
        />
        <div style={{display:'flex',gap:8,marginTop:12}}>
          <button className="btn" aria-pressed={reduced} onClick={()=>setReduced(!reduced)}>{reduced? 'Motion: Off' : 'Motion: On'}</button>
          <button className="btn ghost" aria-pressed={dark} onClick={()=>setDark(!dark)}>{dark? 'Dark':'Light'}</button>
          <button ref={lastRef} className="btn ghost" onClick={onClose}>Close</button>
        </div>
      </motion.div>
    </div>
  )
}