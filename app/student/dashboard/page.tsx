import Link from 'next/link';
import { Header } from '@/components/site-header';
import { Footer } from '@/components/site-footer';

export default function VerifyEmailPage() {
  return (
    <div className="page-shell">
      <Header />
      <main className="container section-block narrow">
        <div className="page-header">
          <span className="eyebrow eyebrow-alt">Verify email</span>
          <h1>Email verification</h1>
          <p>Your account is ready for verification once the authentication service is configured.</p>
        </div>

        <div className="story-panel">
          <p>This is a placeholder verification page for future Supabase authentication flows.</p>
        </div>

        <div className="inline-actions">
          <Link href="/login" className="btn btn-primary">Login</Link>
          <Link href="/register" className="btn btn-secondary">Register</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
