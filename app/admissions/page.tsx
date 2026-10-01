import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/site-header';
import { Footer } from '@/components/site-footer';
import { programmes } from '@/lib/content';

export default function ProgrammeDetailPage({ params }: { params: { slug: string } }) {
  const programme = programmes.find((item) => item.slug === params.slug);

  if (!programme) {
    notFound();
  }

  return (
    <div className="page-shell">
      <Header />
      <main className="container section-block">
        <div className="page-header narrow">
          <span className="eyebrow eyebrow-alt">Programme detail</span>
          <h1>{programme.title}</h1>
          <p>{programme.description}</p>
        </div>

        <div className="story-layout">
          <article className="story-panel">
            <h2>Overview</h2>
            <p>
              This programme is presented as a proposed academic offer and should be reviewed by approved academic
              staff before publication.
            </p>
          </article>
          <article className="story-panel">
            <h2>Entry requirements</h2>
            <p>{programme.entryRequirements}</p>
          </article>
        </div>

        <div className="section-block compact">
          <div className="section-heading">
            <h2>Learning outcomes</h2>
          </div>
          <ul className="value-list">
            {programme.outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="inline-actions">
          <Link href="/programmes" className="btn btn-secondary">
            Back to programmes
          </Link>
          <Link href="/apply" className="btn btn-primary">
            Apply now
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
