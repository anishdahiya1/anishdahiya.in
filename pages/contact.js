import Head from 'next/head'
import Socials from '../components/Socials'

export default function Contact(){
  return (
    <>
      <Head>
        <title>Contact · Anish Dahiya</title>
        <meta name="description" content="Reach out to Anish Dahiya for AI collaborations, creator partnerships, or speaking engagements." />
      </Head>

      <section className="section-block contact-page">
        <div className="section-heading">
          <span>Connect</span>
          <h1>Let&apos;s engineer something unforgettable</h1>
          <p>
            Partnerships, residencies, advisory work, or content collabs — tell me about the challenge and we&apos;ll craft the mix of systems and storytelling it needs.
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-card">
            <h2>Email</h2>
            <a href="mailto:hello@anishdahiya.in" className="contact-link">hello@anishdahiya.in</a>
            <p>Expect a response within 48 hours with next steps or a calendar invite.</p>
          </div>
          <div className="contact-card">
            <h2>Book time</h2>
            <a href="https://cal.com" className="contact-link" target="_blank" rel="noreferrer">Schedule on Cal.com</a>
            <p>Pick a slot for project scoping, creator collabs, or product walkthroughs.</p>
          </div>
        </div>
        <div className="contact-socials">
          <Socials />
        </div>
      </section>
    </>
  )
}
