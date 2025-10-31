import Head from 'next/head'

const STACK = [
  'Python',
  'TypeScript',
  'Next.js',
  'TensorFlow',
  'PyTorch',
  'LangChain',
  'Figma',
  'DaVinci Resolve',
  'After Effects'
]

const EXPERIENCE = [
  {
    title: 'Lead ML Engineer · Narrative AI Lab',
    period: '2023 — Present',
    bullets: [
      'Architected multi-agent intelligence workflows with streaming embeddings.',
      'Partnered with content teams to convert ML signals into daily editorial briefings.',
      'Led cross-functional squads shipping AI assistants across web and mobile.'
    ]
  },
  {
    title: 'Creator · Travel & Narrative Films',
    period: '2019 — Present',
    bullets: [
      'Directed and edited travel series reaching millions across YouTube, Instagram, and OTT.',
      'Developed AI-assisted scripting pipeline to accelerate storyboarding and shot lists.',
      'Spoke at conferences about blending AI tooling with creative storytelling.'
    ]
  }
]

export default function Resume(){
  return (
    <>
      <Head>
        <title>Resume · Anish Dahiya</title>
        <meta name="description" content="Download Anish Dahiya's resume and explore core expertise across machine learning, creative direction, and storytelling." />
      </Head>

      <section className="section-block resume-page">
        <div className="section-heading">
          <span>Resume</span>
          <h1>Experience snapshot</h1>
          <p>Download the full CV or browse the highlights blending deep technical work with travel storytelling.</p>
          <a className="button button--primary" href="/resume.pdf" target="_blank" rel="noreferrer">Download PDF</a>
        </div>

        <div className="resume-content">
          <div className="resume-experience">
            {EXPERIENCE.map(({title, period, bullets}) => (
              <article key={title} className="resume-card">
                <div className="resume-card__meta">{period}</div>
                <h2>{title}</h2>
                <ul>
                  {bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="resume-stack">
            <h2>Toolkit</h2>
            <div className="stack-grid">
              {STACK.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
