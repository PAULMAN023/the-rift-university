import Link from 'next/link';
import { Header } from '@/components/site-header';
import { Footer } from '@/components/site-footer';

export default function StudentDashboardPage() {
  return (
    <div className="page-shell">
      <Header />
      <main className="container section-block">
        <div className="page-header">
          <span className="eyebrow eyebrow-alt">Student portal</span>
          <h1>Welcome back, student</h1>
        </div>

        <div className="card-grid three-up">
          <article className="feature-card">
            <h3>Current programme</h3>
            <p>School of Computing and Artificial Intelligence</p>
          </article>
          <article className="feature-card">
            <h3>Progress</h3>
            <p>Module completion is currently a draft status pending full integration.</p>
          </article>
          <article className="feature-card">
            <h3>Upcoming tasks</h3>
            <p>Assignments and assessment dates are shown here once linked to live academic records.</p>
          </article>
        </div>

        <div className="inline-actions">
          <Link href="/student/programme" className="btn btn-primary">Programme</Link>
          <Link href="/student/learning" className="btn btn-secondary">Learning</Link>
          <Link href="/student/profile" className="btn btn-secondary">Profile</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
