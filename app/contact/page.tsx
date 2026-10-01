import { Header } from '@/components/site-header';
import { Footer } from '@/components/site-footer';

const faqs = [
  ['What is TRU?', 'The Rift University is an African-inspired university platform focused on digital learning, academic support and future-ready skills.'],
  ['Are the programmes final?', 'The academic programmes and schools are presented as draft proposals pending formal review and institutional approval.'],
  ['Is admissions open?', 'Admissions workflows are being prepared and can be accessed in the application section when operational.'],
  ['Does TRU offer scholarships?', 'Scholarship programmes and funding criteria are placeholders until approved by the institution.'],
];

export default function FaqPage() {
  return (
    <div className="page-shell">
      <Header />
      <main className="container section-block">
        <div className="page-header">
          <span className="eyebrow eyebrow-alt">FAQ</span>
          <h1>Frequently asked questions</h1>
        </div>

        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <div key={question} className="faq-item">
              <h3>{question}</h3>
              <p>{answer}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
