import { ContactForm } from '@/components/contact-form';
import { Header } from '@/components/site-header';
import { Footer } from '@/components/site-footer';

export default function ContactPage() {
  return (
    <div className="page-shell">
      <Header />
      <main className="container section-block narrow">
        <div className="page-header">
          <span className="eyebrow eyebrow-alt">Contact</span>
          <h1>Get in touch with TRU</h1>
          <p>Use the form below to contact the university. Email details are draft placeholders until confirmed.</p>
        </div>

        <div className="contact-layout">
          <div className="story-panel">
            <h2>Contact details</h2>
            <ul className="value-list">
              <li>Email: hello@tru.example</li>
              <li>Support: support@tru.example</li>
              <li>Phone: +254 700 000 000</li>
              <li>Hours: Monday to Friday, 9:00 AM to 5:00 PM</li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
