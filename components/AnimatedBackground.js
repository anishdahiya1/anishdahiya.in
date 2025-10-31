import {useEffect, useRef} from 'react'

const PARTICLES = [
  {size: 520, top: '8%', left: '6%', blur: 120, opacity: 0.55, duration: 38},
  {size: 420, top: '72%', left: '12%', blur: 160, opacity: 0.4, duration: 44},
  {size: 610, top: '42%', left: '80%', blur: 180, opacity: 0.5, duration: 56},
  {size: 480, top: '18%', left: '84%', blur: 140, opacity: 0.42, duration: 34},
  {size: 360, top: '60%', left: '58%', blur: 120, opacity: 0.48, duration: 48},
  {size: 420, top: '26%', left: '46%', blur: 150, opacity: 0.5, duration: 52},
  {size: 540, top: '76%', left: '86%', blur: 190, opacity: 0.42, duration: 62},
  {size: 380, top: '12%', left: '46%', blur: 130, opacity: 0.46, duration: 36},
  {size: 420, top: '86%', left: '32%', blur: 170, opacity: 0.44, duration: 58}
]

export default function AnimatedBackground(){
  const rootRef = useRef(null)

  useEffect(() => {
    const root = rootRef.current
    if(!root || typeof window === 'undefined') return

    const state = {targetX: 0, targetY: 0, currentX: 0, currentY: 0}
    let raf = 0

    const handleMove = (event) => {
      const {innerWidth, innerHeight} = window
      state.targetX = (event.clientX / innerWidth - 0.5) * 26
      state.targetY = (event.clientY / innerHeight - 0.5) * 18
    }

    const update = () => {
      state.currentX += (state.targetX - state.currentX) * 0.08
      state.currentY += (state.targetY - state.currentY) * 0.08
      root.style.setProperty('--parallax-x', `${state.currentX.toFixed(2)}px`)
      root.style.setProperty('--parallax-y', `${state.currentY.toFixed(2)}px`)
      raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('pointermove', handleMove)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', handleMove)
    }
  }, [])

  return (
    <div className="animated-background" ref={rootRef} aria-hidden="true">
      <div className="background-gradient" />
      <div className="background-vignette" />
      <div className="background-noise" />
      <div className="background-grid" />
      {PARTICLES.map((particle, index) => (
        <span
          key={index}
          className="background-orb"
          style={{
            width: particle.size,
            height: particle.size,
            top: particle.top,
            left: particle.left,
            filter: `blur(${particle.blur}px)`,
            opacity: particle.opacity,
            animationDuration: `${particle.duration}s`
          }}
        />
      ))}
    </div>
  )
}
