import Link from 'next/link';
import { Header } from '@/components/site-header';
import { Footer } from '@/components/site-footer';

export default function StudentProfilePage() {
  return (
    <div className="page-shell">
      <Header />
      <main className="container section-block narrow">
        <div className="page-header">
          <span className="eyebrow eyebrow-alt">Profile</span>
          <h1>Student profile</h1>
        </div>

        <article className="story-panel">
          <p>
            Student profile details, contact information and account preferences are placeholders pending authentication and
            database integration.
          </p>
        </article>

        <div className="inline-actions">
          <Link href="/student/dashboard" className="btn btn-secondary">Dashboard</Link>
          <Link href="/login" className="btn btn-primary">Logout</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
