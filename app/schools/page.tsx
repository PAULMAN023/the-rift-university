import Link from 'next/link';
import { Header } from '@/components/site-header';
import { Footer } from '@/components/site-footer';

const governanceItems = [
  'Institutional leadership model under review',
  'Academic review and programme oversight in preparation',
  'Administrative and student support structures to be confirmed',
  'Board and governance roles remain placeholders until formal approval',
];

export default function GovernancePage() {
  return (
    <div className="page-shell">
      <Header />
      <main className="container section-block">
        <div className="page-header">
          <span className="eyebrow eyebrow-alt">Governance</span>
          <h1>Institutional structure</h1>
          <p>
            Governance details are being prepared with institutional review. This page is intentionally clear about draft
            placeholders and pending confirmation.
          </p>
        </div>

        <div className="card-grid two-up">
          {governanceItems.map((item) => (
            <article key={item} className="feature-card full">
              <h3>Draft framework</h3>
              <p>{item}</p>
            </article>
          ))}
        </div>

        <div className="inline-actions">
          <Link href="/about" className="btn btn-secondary">
            Back to About
          </Link>
          <Link href="/schools" className="btn btn-primary">
            Explore schools
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
