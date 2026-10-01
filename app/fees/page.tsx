import Link from 'next/link';
import { Header } from '@/components/site-header';
import { Footer } from '@/components/site-footer';

export default function ApplyPage() {
  return (
    <div className="page-shell">
      <Header />
      <main className="container section-block narrow">
        <div className="page-header">
          <span className="eyebrow eyebrow-alt">Apply</span>
          <h1>Application form</h1>
          <p>Complete the form below to begin your TRU application. All fields are draft placeholders pending final institutional review.</p>
        </div>

        <form className="form-card">
          <div className="field-grid two-up">
            <label>
              Full name
              <input type="text" name="fullName" placeholder="Your full name" />
            </label>
            <label>
              Email address
              <input type="email" name="email" placeholder="you@example.com" />
            </label>
          </div>

          <div className="field-grid two-up">
            <label>
              Phone number
              <input type="tel" name="phone" placeholder="+254..." />
            </label>
            <label>
              Programme of interest
              <select name="programme">
                <option value="">Select a programme</option>
                <option>School of Computing & AI</option>
                <option>School of Cybersecurity</option>
                <option>School of Business & Entrepreneurship</option>
                <option>School of Education & Research</option>
              </select>
            </label>
          </div>

          <label>
            Tell us about your academic background
            <textarea rows={5} placeholder="Briefly describe your interests and relevant background." />
          </label>

          <label className="checkbox-label">
            <input type="checkbox" name="consent" />
            I confirm that the information provided is accurate and I understand this is a draft application workflow.
          </label>

          <div className="inline-actions">
            <button type="submit" className="btn btn-primary">Submit application</button>
            <Link href="/admissions" className="btn btn-secondary">Back to admissions</Link>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}
