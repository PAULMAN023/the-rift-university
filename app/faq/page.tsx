import Link from 'next/link';
import { Header } from '@/components/site-header';
import { Footer } from '@/components/site-footer';

const events = [
  ['Launch planning', 'Academic strategy and stakeholder planning'],
  ['Open house', 'Virtual session for prospective applicants'],
  ['Student onboarding', 'Orientation and digital campus walkthrough'],
];

export default function EventsPage() {
  return (
    <div className="page-shell">
      <Header />
      <main className="container section-block">
        <div className="page-header">
          <span className="eyebrow eyebrow-alt">Events</span>
          <h1>Academic calendar and events</h1>
        </div>

        <div className="card-grid two-up">
          {events.map(([title, description]) => (
            <article key={title} className="feature-card full">
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>

        <div className="inline-actions">
          <Link href="/admissions" className="btn btn-primary">Admissions</Link>
          <Link href="/contact" className="btn btn-secondary">Contact</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
