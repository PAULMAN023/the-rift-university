import Link from 'next/link';
import { Header } from '@/components/site-header';
import { Footer } from '@/components/site-footer';

export default function NotFoundPage() {
  return (
    <div className="page-shell">
      <Header />
      <main className="container section-block narrow center-box">
        <div className="page-header">
          <span className="eyebrow eyebrow-alt">404</span>
          <h1>Page not found</h1>
          <p>The page you’re looking for doesn’t exist or isn’t available yet.</p>
        </div>
        <Link href="/" className="btn btn-primary">
          Return home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
