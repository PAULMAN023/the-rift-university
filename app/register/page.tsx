import Link from 'next/link';
import { Header } from '@/components/site-header';
import { Footer } from '@/components/site-footer';

export default function LoginPage() {
  return (
    <div className="page-shell">
      <Header />
      <main className="container section-block narrow">
        <div className="page-header">
          <span className="eyebrow eyebrow-alt">Login</span>
          <h1>Student and staff access</h1>
        </div>

        <form className="form-card">
          <label>
            Email address
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="••••••••" />
          </label>
          <div className="inline-actions">
            <button type="submit" className="btn btn-primary">Login</button>
            <Link href="/register" className="btn btn-secondary">Create account</Link>
          </div>
          <Link href="/forgot-password" className="text-link">Forgot your password?</Link>
        </form>
      </main>
      <Footer />
    </div>
  );
}
