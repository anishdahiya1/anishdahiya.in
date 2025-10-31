import {useEffect, useState} from 'react'

export default function ThemeToggle({onChange}){
  const [dark, setDark] = useState(false)
  useEffect(()=>{
    try{
      const s = localStorage.getItem('siteTheme')
      if(s) setDark(s === 'dark')
      else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) setDark(true)
    }catch(e){}
  },[])
  useEffect(()=>{try{localStorage.setItem('siteTheme', dark? 'dark':'light')}catch(e){}; if(onChange) onChange(dark)},[dark])
  return (
    <button className="btn ghost" onClick={()=>setDark(d=>!d)}>{dark? 'Dark':'Light'}</button>
  )
}
