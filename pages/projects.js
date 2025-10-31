import Layout from '../components/Layout'

export default function Projects(){
  return (
    <Layout>
      <section className="section">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="card">
            <h3>Smart OCR</h3>
            <p>OCR + post-processing pipeline with domain-adapted transformers for higher accuracy.</p>
          </div>
          <div className="card">
            <h3>Audio Event Detection</h3>
            <p>Lightweight convnets with self-supervised pretraining for edge inference.</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
