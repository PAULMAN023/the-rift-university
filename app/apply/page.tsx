import Link from 'next/link';
import { Header } from '@/components/site-header';
import { Footer } from '@/components/site-footer';

const steps = [
  'Review the programme catalogue and entry requirements.',
  'Submit an application form with the required information.',
  'Complete verification and wait for review by the admissions team.',
  'Receive a decision and complete onboarding if approved.',
];

const faqs = [
  'Do I need prior university experience? Entry requirements depend on the selected programme and are published as draft guidance until approved.',
  'Can I apply to more than one programme? The platform supports a single programme selection policy after confirmation, which is enforced in academic workflows.',
  'What if I need support? TRU provides a student support structure and contact channels for admissions and general questions.',
];

export default function AdmissionsPage() {
  return (
    <div className="page-shell">
      <Header />
      <main className="container section-block">
        <div className="page-header">
          <span className="eyebrow eyebrow-alt">Admissions</span>
          <h1>Apply with confidence</h1>
        </div>

        <div className="story-layout">
          <article className="story-panel">
            <h2>Application process</h2>
            <ol className="ordered-list">
              {steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </article>
          <article className="story-panel">
            <h2>Key requirements</h2>
            <ul className="value-list">
              <li>Valid contact information</li>
              <li>Academic background and supporting details</li>
              <li>Programme interest and personal statement</li>
              <li>Consent and acknowledgement of admissions terms</li>
            </ul>
          </article>
        </div>

        <div className="section-block compact">
          <div className="section-heading">
            <h2>Frequently asked questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map((item) => (
              <div key={item} className="faq-item">
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="inline-actions">
          <Link href="/apply" className="btn btn-primary">
            Start application
          </Link>
          <Link href="/fees" className="btn btn-secondary">
            Fees and funding
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
