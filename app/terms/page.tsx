import Link from 'next/link';
import { Header } from '@/components/site-header';
import { Footer } from '@/components/site-footer';

export default function PrivacyPage() {
  return (
    <div className="page-shell">
      <Header />
      <main className="container section-block narrow">
        <div className="page-header">
          <span className="eyebrow eyebrow-alt">Privacy</span>
          <h1>Privacy policy</h1>
          <p>This page is a draft privacy notice and remains subject to institutional review and approval.</p>
        </div>

        <article className="story-panel">
          <p>
            TRU takes student privacy and data protection seriously. Personal information will be used only for the
            purpose for which it was collected, subject to permissions, data handling controls and future institutional
            policies.
          </p>
        </article>

        <div className="inline-actions">
          <Link href="/terms" className="btn btn-secondary">Terms of use</Link>
          <Link href="/contact" className="btn btn-primary">Contact us</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
