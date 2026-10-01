import Link from 'next/link';
import { Header } from '@/components/site-header';
import { Footer } from '@/components/site-footer';

export default function StudentLearningPage() {
  return (
    <div className="page-shell">
      <Header />
      <main className="container section-block">
        <div className="page-header">
          <span className="eyebrow eyebrow-alt">Learning</span>
          <h1>Course learning experience</h1>
        </div>

        <div className="card-grid two-up">
          <article className="feature-card full">
            <h3>Current lesson</h3>
            <p>Foundations of digital learning and university systems.</p>
          </article>
          <article className="feature-card full">
            <h3>Course progress</h3>
            <p>Progress monitoring and lesson completion will be linked to the academic workflow when the LMS is live.</p>
          </article>
        </div>

        <div className="inline-actions">
          <Link href="/student/dashboard" className="btn btn-secondary">Dashboard</Link>
          <Link href="/student/profile" className="btn btn-primary">Profile</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
