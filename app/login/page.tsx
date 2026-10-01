import Link from 'next/link';
import { Header } from '@/components/site-header';
import { Footer } from '@/components/site-footer';

export default function AccessibilityPage() {
  return (
    <div className="page-shell">
      <Header />
      <main className="container section-block narrow">
        <div className="page-header">
          <span className="eyebrow eyebrow-alt">Accessibility</span>
          <h1>Accessibility statement</h1>
          <p>TRU strives to make its services readable, responsive and accessible to a wide range of users.</p>
        </div>

        <article className="story-panel">
          <p>
            We aim to follow accessible design principles, including readable contrast, keyboard-friendly navigation,
            descriptive labels and clear layouts. Feedback and accessibility requests can be sent through the contact page.
          </p>
        </article>

        <div className="inline-actions">
          <Link href="/contact" className="btn btn-primary">Contact</Link>
          <Link href="/privacy" className="btn btn-secondary">Privacy</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
