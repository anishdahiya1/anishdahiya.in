import Head from 'next/head'
import Image from 'next/image'

const TIMELINE = [
  {year: '2025', title: 'Creator-in-residence · Global travel brand', description: 'Leading narrative development, realtime edit rooms, and immersive travel drops with cinematic mini-docs.'},
  {year: '2023', title: 'Lead ML Engineer · Intelligence Lab', description: 'Shepherded multi-modal retrieval systems, agentic automation, and observability dashboards for enterprise clients.'},
  {year: '2021', title: 'AI Engineer · Startup mode', description: 'Deployed NLP pipelines, vision models, and analytics tools powering insights for media and fintech partners.'}
]

const VALUES = [
  {title: 'Systems thinking', description: 'Orchestrating data, teams, and tools like a film set — every layer knows its cue.'},
  {title: 'High fidelity storytelling', description: 'Blending field recordings, drone work, and voiceover arcs into cinematic travel narratives.'},
  {title: 'Craft + velocity', description: 'Shipping reliable ML while iterating fast on creative direction and editorial polish.'}
]

export default function About(){
  return (
    <>
      <Head>
        <title>About · Anish Dahiya</title>
        <meta name="description" content="Learn how Anish Dahiya fuses machine learning engineering with cinematic travel storytelling." />
      </Head>

      <section className="page-hero about-hero">
        <div className="page-hero__copy">
          <h1>The systems + stories blueprint</h1>
          <p>
            From GPU clusters to aerial camera rigs, I live where rigorous engineering meets colourful storytelling. Each engagement navigates research, deployment,
            shoots, and edits with the same obsession for awe.
          </p>
        </div>
        <div className="page-hero__media">
          <Image src="/images/profile2-420.webp" alt="Anish Dahiya" width={320} height={320} priority className="portrait" />
        </div>
      </section>

      <section className="section-block about-values">
        <div className="section-heading">
          <span>Operating principles</span>
          <h2>How the work comes together</h2>
        </div>
        <div className="values-grid">
          {VALUES.map(({title, description}) => (
            <article key={title} className="value-card">
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block about-timeline">
        <div className="section-heading">
          <span>Timeline</span>
          <h2>Snapshots from the journey</h2>
        </div>
        <div className="timeline">
          {TIMELINE.map(({year, title, description}) => (
            <div key={year} className="timeline__row">
              <div className="timeline__year">{year}</div>
              <div className="timeline__content">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
