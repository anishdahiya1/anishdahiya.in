import {useEffect} from 'react'

export default function Effects(){
  useEffect(()=>{
    const rotatingRoles = ["NLP","Computer Vision","Data Engineering","ML Ops","Research"]
    let roleIdx = 0
    const roleEl = document.getElementById('rotating-role')
    function rotateRole(){ if(!roleEl) return; roleIdx=(roleIdx+1)%rotatingRoles.length; roleEl.animate([{opacity:0, transform:'translateY(6px)'},{opacity:1, transform:'translateY(0)'}],{duration:420,easing:'cubic-bezier(.2,.9,.2,1)'}); roleEl.textContent=rotatingRoles[roleIdx] }
    const rI = setInterval(rotateRole,3200)

    function updateClock(){const el = document.querySelector('.widget.clock'); if(!el) return; const now = new Date(); el.textContent = now.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}
    const cI = setInterval(updateClock,1000); updateClock()

    let visitors = Math.floor(120 + Math.random()*420)
    const vEl = document.getElementById('visitors'); if(vEl) vEl.textContent = visitors
    const vI = setInterval(()=>{visitors += Math.round(Math.random()*3); if(vEl) vEl.textContent = visitors}, 6000)

    return ()=>{clearInterval(rI); clearInterval(cI); clearInterval(vI)}
  },[])
  return null
}
