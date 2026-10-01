import Link from 'next/link';
import { Header } from '@/components/site-header';
import { Footer } from '@/components/site-footer';
import { schoolCards } from '@/lib/content';

export default function SchoolsPage() {
  return (
    <div className="page-shell">
      <Header />
      <main className="container section-block">
        <div className="page-header">
          <span className="eyebrow eyebrow-alt">Schools</span>
          <h1>Academic schools</h1>
          <p>
            TRU is designed around flexible disciplines that combine digital skills, academic depth, leadership and
            professional relevance.
          </p>
        </div>

        <div className="card-grid two-up">
          {schoolCards.map((school) => (
            <article key={school.title} className="feature-card full">
              <span className="pill">Proposed</span>
              <h3>{school.title}</h3>
              <p>{school.description}</p>
              <Link href="/programmes" className="text-link">
                Explore programmes →
              </Link>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
