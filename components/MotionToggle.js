import {useEffect, useState} from 'react'

export default function MotionToggle({onChange}){
  const [reduced, setReduced] = useState(false)
  // initialize on client only
  useEffect(()=>{
    try{
      const s = localStorage.getItem('reducedMotion')
      if(s !== null) setReduced(s === 'true')
      else if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) setReduced(true)
    }catch(e){}
  },[])
  useEffect(()=>{try{localStorage.setItem('reducedMotion', reduced)}catch(e){}; if(onChange) onChange(reduced)},[reduced])
  return (
    <button className="btn ghost" title="Reduce motion" onClick={()=>setReduced(r=>!r)}>
      {reduced ? 'Motion: Off' : 'Motion: On'}
    </button>
  )
}
