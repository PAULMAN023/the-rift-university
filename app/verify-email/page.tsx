import Link from 'next/link';
import { Header } from '@/components/site-header';
import { Footer } from '@/components/site-footer';

export default function ForgotPasswordPage() {
  return (
    <div className="page-shell">
      <Header />
      <main className="container section-block narrow">
        <div className="page-header">
          <span className="eyebrow eyebrow-alt">Password reset</span>
          <h1>Reset your password</h1>
        </div>

        <form className="form-card">
          <label>
            Email address
            <input type="email" placeholder="you@example.com" />
          </label>
          <div className="inline-actions">
            <button type="submit" className="btn btn-primary">Send reset link</button>
            <Link href="/login" className="btn btn-secondary">Back to login</Link>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}
