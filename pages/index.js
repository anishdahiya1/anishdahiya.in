import Head from 'next/head'
import {useEffect, useState} from 'react'
import Socials from '../components/Socials'

const PHRASES = [
  'cinematic AI stories',
  'human moments with data',
  'immersive ML journeys',
  'neon-soaked travel films'
]

const METRICS = [
  {label: 'Models in production', value: 27, suffix: '+'},
  {label: 'Creator reach', value: 6.4, suffix: 'M'},
  {label: 'Countries filmed', value: 12, suffix: ''}
]

const MOSAIC = [
  {title: 'Autonomous Insight Studio', accent: 'NLP · GenAI', copy: 'Interactive intelligence layer for enterprise research — multi-agent summarisation, elastic search, and live insight playback.'},
  {title: 'Atmos Motion Toolkit', accent: 'Realtime 3D', copy: 'WebGL-driven motion system powering responsive, cinematic UI moments across multi-device surfaces.'},
  {title: 'Creator Reel 2025', accent: 'Film · Travel', copy: '4K travelogue weaving aerials, hyper-lapses, and micro-narratives into a single kinetic short.'}
]

const EXPERIMENTS = [
  {title: 'Synesthetic Atlas', tag: 'Audio-reactive', description: 'Transforms footstep audio into colour fields and adaptive particle choreography.'},
  {title: 'Dreaming in Vectors', tag: 'Diffusion + SDF', description: 'Hybrid pipeline combining diffusion prompts with signed distance fields for luminous abstract sculptures.'},
  {title: 'Pulse Corridor', tag: 'Light installation', description: 'Projection-mapped tunnel responding to heartbeats captured via wearable sensors.'}
]

function AnimatedNumber({value, suffix=''}){
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    let frame = 0
    const target = value
    const totalFrames = 60
    const step = () => {
      frame += 1
      const progress = Math.min(frame / totalFrames, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Number((target * eased).toFixed(target % 1 === 0 ? 0 : 1)))
      if(progress < 1) requestAnimationFrame(step)
    }
    step()
  }, [value])

  return <span>{display}{suffix}</span>
}

export default function Home(){
  const [phraseIndex, setPhraseIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setPhraseIndex((index) => (index + 1) % PHRASES.length)
    }, 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <Head>
        <title>Anish Dahiya — Hyper-dynamic AI & Visual Storytelling</title>
        <meta
          name="description"
          content="Anish Dahiya blends machine learning systems with cinematic storytelling — shipping production AI and crafting immersive travel films."
        />
      </Head>

      <section className="hero-block" id="top">
        <div className="hero-block__content">
          <span className="hero-block__eyebrow">AI systems · Immersive content · Experiential travel</span>
          <h1>
            Orchestrating
            <span className="hero-block__swapper" key={PHRASES[phraseIndex]}>{PHRASES[phraseIndex]}</span>
          </h1>
          <p>
            I build production-grade machine learning platforms for brands and lead creator work that turns distant places into visceral stories. Every project blends
            data orchestration, motion design, and emotive narrative beats.
          </p>
          <div className="hero-block__cta">
            <a className="button button--primary" href="#work">Explore the work</a>
            <a className="button button--ghost" href="#experiments">See the lab</a>
          </div>
          <div className="hero-block__metrics">
            {METRICS.map(({label, value, suffix}) => (
              <div className="metric" key={label}>
                <AnimatedNumber value={value} suffix={suffix} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-block__reel">
          <div className="reel-card reel-card--primary">
            <div className="reel-card__label">Realtime Console</div>
            <div className="reel-card__value">ML Ops Control · Motion Visualiser</div>
          </div>
          <div className="reel-card reel-card--secondary">
            <div className="reel-card__label">Creator Timeline</div>
            <div className="reel-card__value">Vlogs · Short-form · Documentaries</div>
          </div>
          <div className="reel-card reel-card--accent">
            <div className="reel-card__label">Live signal</div>
            <div className="reel-card__value">Streaming edits & touring visuals</div>
          </div>
          <div className="reel-grid" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>

      <section className="tag-marquee" aria-label="Skill marquee">
        <div className="tag-marquee__track">
          {['LLM pipelines', 'Diffusion direction', 'Travel vlogs', 'Realtime 3D', 'Creator strategy', 'Production ML', 'Story design'].map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </section>

      <section id="story" className="section-block story-block">
        <div className="section-heading">
          <span>Story engine</span>
          <h2>Strategic narratives, engineered pipelines</h2>
          <p>
            Building experiences that travel from ideation to launch. From GPU clusters orchestrating fine-tuned models to on-location production schedules and kinetic
            edits, everything is choreographed toward emotional impact.
          </p>
        </div>
        <div className="story-grid">
          {MOSAIC.map(({title, accent, copy}) => (
            <article key={title} className="story-card">
              <span>{accent}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="section-block work-block">
        <div className="section-heading">
          <span>Spotlight</span>
          <h2>Featured builds & films</h2>
        </div>
        <div className="work-grid">
          <article className="work-card">
            <div className="work-card__media">
              <div className="work-card__pulse" />
            </div>
            <div className="work-card__body">
              <h3>Voyager Intelligence Deck</h3>
              <p>
                Executive insight cockpit blending autonomous data agents, real-time signal intelligence, and cinematic storytelling dashboards.
              </p>
              <ul>
                <li>Serverless orchestrations & streaming embeddings</li>
                <li>Motion-composed storytelling for briefings</li>
                <li>Adaptive theming synced with live sentiment</li>
              </ul>
            </div>
          </article>
          <article className="work-card">
            <div className="work-card__media work-card__media--gradient" />
            <div className="work-card__body">
              <h3>Daybreak Travel Series</h3>
              <p>
                A six-part travel saga mixing drone hyper-lapses, tactile street footage, and AI-assisted narrative arcs for a streaming launch.
              </p>
              <ul>
                <li>Script-to-shoot pipeline augmented with LLM beat sheets</li>
                <li>Colour-graded in HDR with audio-reactive titling</li>
                <li>Cross-platform release strategy reaching millions</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section id="experiments" className="section-block experiments-block">
        <div className="section-heading">
          <span>Lab notes</span>
          <h2>Current experiments</h2>
        </div>
        <div className="experiments-grid">
          {EXPERIMENTS.map(({title, tag, description}) => (
            <article key={title} className="experiment-card">
              <span>{tag}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="connect" className="section-block connect-block">
        <div className="section-heading">
          <span>Let&apos;s build</span>
          <h2>Book a session or say hi</h2>
          <p>
            Collaborations, product strategy, creator residencies, or speaking gigs — I love pairing rigorous systems with visceral storytelling.
          </p>
          <div className="connect-actions">
            <a className="button button--primary" href="mailto:hello@anishdahiya.in">Start a project</a>
            <a className="button button--ghost" href="https://cal.com" target="_blank" rel="noreferrer">Schedule a call</a>
          </div>
        </div>
        <div className="connect-socials">
          <Socials />
        </div>
      </section>
    </>
  )
}
