import Link from 'next/link';
import { Header } from '@/components/site-header';
import { Footer } from '@/components/site-footer';

const pricing = [
  ['Programme fee', 'Pending institutional approval'],
  ['Application fee', 'Pending institutional approval'],
  ['Scholarship support', 'To be confirmed'],
  ['Payment methods', 'To be confirmed'],
];

export default function FeesPage() {
  return (
    <div className="page-shell">
      <Header />
      <main className="container section-block">
        <div className="page-header">
          <span className="eyebrow eyebrow-alt">Fees</span>
          <h1>Fees and funding information</h1>
          <p>
            Fees, scholarships and funding information are draft placeholders until institutional approval and financial
            policy confirmation.
          </p>
        </div>

        <div className="card-grid two-up">
          {pricing.map(([label, value]) => (
            <article key={label} className="feature-card full">
              <h3>{label}</h3>
              <p>{value}</p>
            </article>
          ))}
        </div>

        <div className="inline-actions">
          <Link href="/scholarships" className="btn btn-primary">
            Scholarships
          </Link>
          <Link href="/admissions" className="btn btn-secondary">
            Admissions
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
