import Link from 'next/link';
import { Header } from '@/components/site-header';
import { Footer } from '@/components/site-footer';

const values = [
  'Academic excellence and integrity',
  'African-rooted identity and relevance',
  'Inclusive access and opportunity',
  'Innovation with responsibility',
  'Student-centred digital learning',
];

export default function AboutPage() {
  return (
    <div className="page-shell">
      <Header />
      <main className="container section-block">
        <div className="page-header">
          <span className="eyebrow eyebrow-alt">About TRU</span>
          <h1>The Rift University</h1>
          <p>
            The Rift University is an African-rooted digital university platform focused on practical learning,
            student support, future-ready skills, and credible academic growth.
          </p>
        </div>

        <div className="card-grid two-up">
          <article className="feature-card full">
            <h3>Our purpose</h3>
            <p>
              TRU exists to provide a modern, approachable and future-focused university experience rooted in
              academic quality, innovation and opportunity.
            </p>
          </article>
          <article className="feature-card full">
            <h3>Institutional identity</h3>
            <p>
              Learn. Innovate. Lead. TRU combines the warmth of African heritage with the professionalism of a modern
              online academic institution.
            </p>
          </article>
        </div>

        <div className="story-layout">
          <div className="story-panel">
            <h2>Mission</h2>
            <p>
              To create an inclusive digital university environment where students can learn, innovate and lead with
              confidence in a changing world.
            </p>
          </div>
          <div className="story-panel">
            <h2>Vision</h2>
            <p>
              To become a recognised, future-focused online university that supports African talent, practical skills,
              and accessible academic opportunity.
            </p>
          </div>
        </div>

        <div className="section-block compact">
          <div className="section-heading">
            <h2>Core values</h2>
          </div>
          <ul className="value-list">
            {values.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="cta-panel small">
          <div>
            <span className="eyebrow eyebrow-alt">Explore more</span>
            <h3>Learn how TRU is structured and how students progress.</h3>
          </div>
          <div className="inline-actions">
            <Link href="/about/mission-vision" className="btn btn-secondary">
              Mission & vision
            </Link>
            <Link href="/about/governance" className="btn btn-secondary">
              Governance
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
