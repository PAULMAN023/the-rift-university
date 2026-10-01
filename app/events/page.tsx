import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/site-header';
import { Footer } from '@/components/site-footer';
import { newsItems } from '@/lib/content';

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const article = newsItems.find((item) => item.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="page-shell">
      <Header />
      <main className="container section-block narrow">
        <div className="page-header">
          <span className="eyebrow eyebrow-alt">{article.category}</span>
          <h1>{article.title}</h1>
          <p>{article.summary}</p>
        </div>

        <article className="story-panel">
          <p>
            This article is a draft announcement placeholder for future institutional updates. More detailed content will
            be added as the university platform develops.
          </p>
        </article>

        <div className="inline-actions">
          <Link href="/news" className="btn btn-secondary">Back to news</Link>
          <Link href="/contact" className="btn btn-primary">Contact TRU</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
