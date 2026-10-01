import Link from 'next/link';
import { Header } from '@/components/site-header';
import { Footer } from '@/components/site-footer';

export default function ScholarshipsPage() {
  return (
    <div className="page-shell">
      <Header />
      <main className="container section-block">
        <div className="page-header">
          <span className="eyebrow eyebrow-alt">Scholarships</span>
          <h1>Financial support</h1>
          <p>
            Scholarship programmes, eligibility and award criteria are draft placeholders until approved by the
            institution.
          </p>
        </div>

        <div className="story-layout">
          <article className="story-panel">
            <h2>Support pathways</h2>
            <ul className="value-list">
              <li>Need-based support</li>
              <li>Merit-based awards</li>
              <li>Programme-specific assistance</li>
              <li>External funding guidance</li>
            </ul>
          </article>
          <article className="story-panel">
            <h2>Important note</h2>
            <p>
              This content is presented as draft information only and is not an official award or promise of funding.
            </p>
          </article>
        </div>

        <div className="inline-actions">
          <Link href="/fees" className="btn btn-secondary">Fees</Link>
          <Link href="/apply" className="btn btn-primary">Apply</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
