import Head from 'next/head'
import Script from 'next/script'
import Layout from '../components/Layout'
import Image from 'next/image'

export default function Home(){
  return (
    <>
      <Head>
        <title>Anish Dahiya — Data Scientist | AI/ML Engineer | Innovator</title>
        <meta name="description" content="Anish Dahiya — AI/ML engineer building data-driven solutions in NLP, CV and analytics." />
      </Head>
      <Layout>
        <div id="bg-gradient" />
        <canvas id="particle-canvas" aria-hidden="true" />

        <section className="hero">
          <div className="hero-glass">
            <div style={{display:'flex',gap:20,alignItems:'center'}}>
              <div style={{flex:'0 0 auto'}}>
                <div className="avatar">
                  <Image src="/images/profile2-420.webp" alt="Anish Dahiya" width={120} height={120} style={{borderRadius:14}} priority />
                </div>
              </div>
              <div>
                <h1>Anish Dahiya — Data Scientist | AI/ML Engineer | Innovator</h1>
                <p className="roles">I’m a Computer Science Engineer specializing in Artificial Intelligence and Machine Learning. I build data-driven models and systems (NLP, CV, analytics) that solve real problems and push the boundaries of intelligent automation.</p>
              </div>
            </div>

            <div className="hero-cta">
              <a className="btn" href="#work">See my work</a>
              <a className="btn ghost" href="#contact">Get in touch</a>
            </div>

            <div className="live-widgets">
              <div className="widget clock" aria-label="Local time">--:--</div>
              <div className="widget visitors">Visitors: <span id="visitors">0</span></div>
            </div>
          </div>
        </section>

        <section id="about" className="section cards">
          <h2>About</h2>
          <div className="card-grid">
            <article className="card">
              <h3>Who I am</h3>
              <p>Creative developer focused on motion, accessibility and performance.</p>
            </article>
            <article className="card">
              <h3>What I do</h3>
              <p>Web apps, animations, design systems, and delightful micro-interactions.</p>
            </article>
            <article className="card">
              <h3>How I work</h3>
              <p>Modern toolchain, static-first, and progressive enhancement.</p>
            </article>
          </div>
        </section>

        <section id="work" className="section projects">
          <h2>Selected Projects</h2>
          <div className="projects-grid">
            <div className="project card tilt" data-title="Project One">
              <img src="https://picsum.photos/600/400?random=1" alt="Screenshot of project one"/>
              <div className="project-body">
                <h4>Project One</h4>
                <p>Experimental UI with WebGL shaders and audio-reactive visuals.</p>
              </div>
            </div>
            <div className="project card tilt" data-title="Project Two">
              <img src="https://picsum.photos/600/400?random=2" alt="Screenshot of project two"/>
              <div className="project-body">
                <h4>Project Two</h4>
                <p>Design system and component library for rapid product builds.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <h2>Contact</h2>
          <p>If you'd like to work together, email me at <a href="mailto:hello@anishdahiya.in">hello@anishdahiya.in</a>.</p>
          <div className="socials">
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </section>
      </Layout>

      <footer>
        <small>© Anish Dahiya — anishdahiya.in</small>
      </footer>

      <Script src="/script.js" strategy="afterInteractive" />
    </>
  )
}
