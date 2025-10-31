import Head from 'next/head'
import Layout from '../components/Layout'
import Image from 'next/image'
import Socials from '../components/Socials'

export default function Home(){
  return (
    <>
      <Head>
        <title>Anish Dahiya — Data Scientist · Content Creator · Travel Vlogger</title>
        <meta name="description" content="Anish Dahiya — AI/ML engineer, content creator and travel vlogger. I build data-driven systems and create travel videos that explore places and stories." />
      </Head>
      <Layout>
        <div id="bg-gradient" />
        <canvas id="particle-canvas" aria-hidden="true" />

        <section className="hero">
          <div className="hero-glass">
            <div style={{display:'flex',gap:20,alignItems:'center'}}>
              {/* avatar removed for a cleaner, modern landing look */}
              <div>
                <h1>Anish Dahiya — Data Scientist · Content Creator · Travel Vlogger</h1>
                <p className="roles">I’m a Computer Science Engineer focused on Artificial Intelligence and Machine Learning, and I also create travel videos and short-form content that document journeys and storytelling. I split my time between building data-driven ML systems (NLP, CV, analytics) and producing creative video content.</p>
              </div>
            </div>

            <div className="hero-cta">
              <a className="btn" href="#work">See my work</a>
              <a className="btn ghost" href="#videos">Watch vlogs</a>
              <a className="btn ghost" href="#contact">Get in touch</a>
            </div>

            {/* live widgets removed (clock/visitors) */}
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
        <section id="videos" className="section projects">
          <h2>Video & Creator Work</h2>
          <div className="projects-grid">
            <div className="project card tilt" data-title="Travel Vlog - Mountains">
              <img src="https://picsum.photos/600/400?random=11" alt="Thumbnail of travel vlog"/>
              <div className="project-body">
                <h4>Travel Vlog — Mountains</h4>
                <p>Short travel film exploring remote mountain towns, local food and landscapes.</p>
              </div>
            </div>
            <div className="project card tilt" data-title="Shorts - Street Food">
              <img src="https://picsum.photos/600/400?random=12" alt="Thumbnail of short video"/>
              <div className="project-body">
                <h4>Shorts — Street Food</h4>
                <p>Quick edits and highlights from food trips and city walks.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <h2>Contact</h2>
          <p>If you'd like to work together, email me at <a href="mailto:hello@anishdahiya.in">hello@anishdahiya.in</a>.</p>
          <Socials />
        </section>
      </Layout>

      <footer>
        <small>© Anish Dahiya — anishdahiya.in</small>
      </footer>

  {/* removed /script.js which updated clock/visitor counts */}
    </>
  )
}
