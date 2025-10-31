import Head from 'next/head'

const PROJECTS = [
  {
    title: 'Pathfinder Intelligence Hub',
    category: 'Generative AI Platform',
    summary: 'Autonomous research companion orchestrating LLM agents, vector search, and briefing dashboards.',
    highlights: ['Multi-agent orchestration', 'Temporal memory graph', 'Executive storytelling output']
  },
  {
    title: 'Coastline 8K Travel Film',
    category: 'Creator Series',
    summary: 'Ultra-high-resolution travel film mixing FPV drone work, underwater footage, and AI-driven audio design.',
    highlights: ['Shot across 5 countries', 'Graded for Dolby Vision', 'Audio-reactive timeline automations']
  },
  {
    title: 'Nebula Motion Library',
    category: 'Realtime UI Toolkit',
    summary: 'WebGL + WASM toolkit delivering fluid UI simulations with physics-based motion cues.',
    highlights: ['Procedural shader system', 'Adaptive performance budgets', 'Design system integration']
  }
]

export default function Projects(){
  return (
    <>
      <Head>
        <title>Projects · Anish Dahiya</title>
        <meta name="description" content="Dive into Anish Dahiya's flagship projects across machine learning, filmmaking, and experiential design." />
      </Head>

      <section className="section-block projects-page">
        <div className="section-heading">
          <span>Portfolio</span>
          <h1>Flagship builds & releases</h1>
          <p>
            A collection of AI platforms, immersive travel films, and experimental toolkits crafted with a blend of engineering discipline and cinematic drive.
          </p>
        </div>
        <div className="projects-showcase">
          {PROJECTS.map(({title, category, summary, highlights}) => (
            <article key={title} className="projects-showcase__card">
              <div className="projects-showcase__meta">{category}</div>
              <h2>{title}</h2>
              <p>{summary}</p>
              <ul>
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
