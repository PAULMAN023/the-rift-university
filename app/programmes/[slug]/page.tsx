import Link from 'next/link';
import { Header } from '@/components/site-header';
import { Footer } from '@/components/site-footer';
import { programmes } from '@/lib/content';

const filters = ['All programmes', 'Technology', 'Business', 'Design', 'Education'];

export default function ProgrammesPage() {
  return (
    <div className="page-shell">
      <Header />
      <main className="container section-block">
        <div className="page-header">
          <span className="eyebrow eyebrow-alt">Programmes</span>
          <h1>Programme catalogue</h1>
          <p>
            This catalogue is intentionally flexible and designed for future academic review, curricular approval and
            programme expansion.
          </p>
        </div>

        <div className="filter-row"> 
          {filters.map((filter) => (
            <button key={filter} type="button" className="filter-chip">
              {filter}
            </button>
          ))}
        </div>

        <div className="card-grid two-up">
          {programmes.map((programme) => (
            <article key={programme.title} className="feature-card full">
              <span className="pill">Draft</span>
              <h3>{programme.title}</h3>
              <p>{programme.description}</p>
              <div className="meta-row">
                <span>{programme.duration}</span>
                <span>{programme.level}</span>
              </div>
              <Link href={`/programmes/${programme.slug}`} className="text-link">
                View details →
              </Link>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
