import Link from 'next/link';
import { Header } from '@/components/site-header';
import { Footer } from '@/components/site-footer';

export default function LearningPage() {
  return (
    <div className="page-shell">
      <Header />
      <main className="container section-block">
        <div className="page-header">
          <span className="eyebrow eyebrow-alt">Learning</span>
          <h1>Online learning experience</h1>
          <p>
            TRU combines structured course content, digital access and guided support for modern, flexible learning.
          </p>
        </div>

        <div className="card-grid three-up">
          <article className="feature-card">
            <h3>Course structure</h3>
            <p>Modules, lessons, assessments and guided progression designed for clarity and academic momentum.</p>
          </article>
          <article className="feature-card">
            <h3>Student support</h3>
            <p>Feedback, guidance and advisor touchpoints help learners stay focused on outcomes and progression.</p>
          </article>
          <article className="feature-card">
            <h3>Digital access</h3>
            <p>Learning resources are designed to be accessible, portable and usable across devices and connection speeds.</p>
          </article>
        </div>

        <div className="inline-actions">
          <Link href="/student/dashboard" className="btn btn-primary">Student dashboard</Link>
          <Link href="/library" className="btn btn-secondary">Library</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
