import Link from 'next/link';
import { Header } from '@/components/site-header';
import { Footer } from '@/components/site-footer';
import { newsItems } from '@/lib/content';

export default function NewsPage() {
  return (
    <div className="page-shell">
      <Header />
      <main className="container section-block">
        <div className="page-header">
          <span className="eyebrow eyebrow-alt">News</span>
          <h1>Announcements and updates</h1>
        </div>

        <div className="card-grid two-up">
          {newsItems.map((item) => (
            <article key={item.title} className="feature-card full">
              <span className="pill">{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <Link href={`/news/${item.slug}`} className="text-link">
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
