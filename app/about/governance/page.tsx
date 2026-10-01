import Link from 'next/link';
import { Header } from '@/components/site-header';
import { Footer } from '@/components/site-footer';

export default function MissionVisionPage() {
  return (
    <div className="page-shell">
      <Header />
      <main className="container section-block">
        <div className="page-header">
          <span className="eyebrow eyebrow-alt">Mission & Vision</span>
          <h1>Learn. Innovate. Lead.</h1>
        </div>

        <div className="story-layout">
          <article className="story-panel">
            <h2>Mission</h2>
            <p>
              To build an inclusive, future-focused university experience that equips students with the knowledge,
              confidence and practical skills needed to thrive in a digital world.
            </p>
          </article>
          <article className="story-panel">
            <h2>Vision</h2>
            <p>
              To be a trusted African-inspired university platform that supports accessible learning, innovation and
              leadership across communities and the global professional economy.
            </p>
          </article>
        </div>

        <div className="section-block compact">
          <div className="section-heading">
            <h2>Values</h2>
          </div>
          <ul className="value-list">
            <li>Academic integrity and excellence</li>
            <li>Inclusive access and opportunity</li>
            <li>Practical, career-relevant learning</li>
            <li>Resilience, creativity and leadership</li>
            <li>Responsible innovation with human impact</li>
          </ul>
        </div>

        <div className="inline-actions">
          <Link href="/about" className="btn btn-secondary">
            Back to About
          </Link>
          <Link href="/about/governance" className="btn btn-primary">
            Governance
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
