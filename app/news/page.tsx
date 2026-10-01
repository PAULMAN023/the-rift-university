import Link from 'next/link';
import { Header } from '@/components/site-header';
import { Footer } from '@/components/site-footer';

const resources = ['Academic articles', 'Digital textbooks', 'Video resources', 'Research guides'];

export default function LibraryPage() {
  return (
    <div className="page-shell">
      <Header />
      <main className="container section-block">
        <div className="page-header">
          <span className="eyebrow eyebrow-alt">Library</span>
          <h1>Digital library</h1>
          <p>
            The TRU digital library is designed as a future-facing learning resource centre with structured access and
            curated academic materials.
          </p>
        </div>

        <div className="story-layout">
          <article className="story-panel">
            <h2>Collections</h2>
            <ul className="value-list">
              {resources.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="story-panel">
            <h2>Access model</h2>
            <p>
              Access is managed by role and permission, with a clear path for approved lecturers, learners and staff.
            </p>
          </article>
        </div>

        <div className="inline-actions">
          <Link href="/learning" className="btn btn-secondary">Learning</Link>
          <Link href="/contact" className="btn btn-primary">Contact support</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
