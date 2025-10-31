import Layout from '../components/Layout'
import Image from 'next/image'


export default function About(){
  return (
    <Layout>
      <section className="section about">
        <div className="about-grid">
          <div className="about-photo">
            <div>
              <div className="avatar avatar-large">
                <Image src="/images/profile2-420.webp" alt="Anish Dahiya" width={420} height={420} style={{borderRadius:16}} />
              </div>
            </div>
          </div>
          <div>
            <h2>About Me</h2>
            <p>I’m a Computer Science Engineer specializing in Artificial Intelligence and Machine Learning. I design and deploy models across NLP, Computer Vision and analytics — with focus on production-ready systems and measurable impact.</p>
            <p>Alongside engineering, I create video content and travel vlogs that capture places, food and local stories. My creator work focuses on concise storytelling, cinematic edits, and sharing practical travel tips.</p>
            <p>My workflow blends experimentation and engineering: from prototyping architectures to shipping reliable pipelines and observability — and when behind the camera, from scouting locations to editing polished short films.</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
