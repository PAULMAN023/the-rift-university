import Link from 'next/link';
import { Header } from '@/components/site-header';
import { Footer } from '@/components/site-footer';

export default function StudentProgrammePage() {
  return (
    <div className="page-shell">
      <Header />
      <main className="container section-block narrow">
        <div className="page-header">
          <span className="eyebrow eyebrow-alt">Programme</span>
          <h1>Selected programme</h1>
        </div>

        <article className="story-panel">
          <h2>School of Computing and Artificial Intelligence</h2>
          <p>
            This page is a placeholder for the student selection record, progress status and academic programme display.
          </p>
        </article>

        <div className="inline-actions">
          <Link href="/student/dashboard" className="btn btn-secondary">Dashboard</Link>
          <Link href="/student/learning" className="btn btn-primary">Learning</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
