import Link from 'next/link';
import { Header } from '@/components/site-header';
import { Footer } from '@/components/site-footer';

export default function TermsPage() {
  return (
    <div className="page-shell">
      <Header />
      <main className="container section-block narrow">
        <div className="page-header">
          <span className="eyebrow eyebrow-alt">Terms</span>
          <h1>Terms of use</h1>
          <p>These terms are draft and remain subject to institutional review.</p>
        </div>

        <article className="story-panel">
          <p>
            This website is provided for informational and educational purposes. Content may be updated, revised or
            removed as the TRU platform evolves. Unverified academic or institutional statements should be treated as
            draft material pending approval.
          </p>
        </article>

        <div className="inline-actions">
          <Link href="/privacy" className="btn btn-secondary">Privacy</Link>
          <Link href="/accessibility" className="btn btn-primary">Accessibility</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
