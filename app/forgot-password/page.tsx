import Link from 'next/link';
import { Header } from '@/components/site-header';
import { Footer } from '@/components/site-footer';

export default function RegisterPage() {
  return (
    <div className="page-shell">
      <Header />
      <main className="container section-block narrow">
        <div className="page-header">
          <span className="eyebrow eyebrow-alt">Register</span>
          <h1>Create your account</h1>
        </div>

        <form className="form-card">
          <div className="field-grid two-up">
            <label>
              Full name
              <input type="text" placeholder="Your full name" />
            </label>
            <label>
              Email
              <input type="email" placeholder="you@example.com" />
            </label>
          </div>
          <label>
            Password
            <input type="password" placeholder="Create a password" />
          </label>
          <label>
            Confirm password
            <input type="password" placeholder="Repeat your password" />
          </label>
          <div className="inline-actions">
            <button type="submit" className="btn btn-primary">Create account</button>
            <Link href="/login" className="btn btn-secondary">Back to login</Link>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}
