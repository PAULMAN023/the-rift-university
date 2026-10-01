import Link from 'next/link';
import { Header } from '@/components/site-header';
import { Footer } from '@/components/site-footer';
import { programHighlights, schoolCards, stats, testimonials } from '@/lib/content';

export default function HomePage() {
  return (
    <div className="page-shell">
      <Header />

      <main>
        <section className="hero-section">
          <div className="hero-overlay" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Founded in 2026</span>
              <h1>Your Future, Your Knowledge, Your World.</h1>
              <p>
                The Rift University is building a modern African-inspired digital university for ambitious students,
                educators, and professionals who want to learn, lead, and shape tomorrow.
              </p>

              <div className="cta-row">
                <Link href="/programmes" className="btn btn-primary">
                  Explore programmes
                </Link>
                <Link href="/apply" className="btn btn-secondary">
                  Apply now
                </Link>
              </div>

              <div className="stats-grid">
                {stats.map((stat) => (
                  <div key={stat.label} className="stat-card">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-panel">
              <div className="panel-inner">
                <span className="section-label">TRU Vision</span>
                <div className="vision-card">
                  <span className="mini-label">Mission</span>
                  <p>
                    To create a modern, inclusive, and future-focused digital university that develops relevant skills
                    for Africa and the global world.
                  </p>
                </div>
                <div className="vision-card alt">
                  <span className="mini-label">Core Values</span>
                  <ul>
                    {['African-rooted academic identity', 'Flexible online learning pathways', 'Student-centred support', 'Future-ready innovation'].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container section-block">
          <div className="section-heading">
            <span className="eyebrow eyebrow-alt">About TRU</span>
            <h2>A new generation of university learning</h2>
          </div>

          <div className="card-grid three-up">
            {programHighlights.map((item) => (
              <article key={item.title} className="feature-card">
                <div className="feature-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block dark-section">
          <div className="container">
            <div className="section-heading light">
              <span className="eyebrow">Academic Schools</span>
              <h2>Flexible, future-ready learning pathways</h2>
            </div>

            <div className="card-grid three-up">
              {schoolCards.map((school) => (
                <article key={school.title} className="school-card">
                  <span className="pill">Proposed</span>
                  <h3>{school.title}</h3>
                  <p>{school.description}</p>
                  <Link href="/schools" className="text-link">
                    View school details →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container section-block">
          <div className="split-layout">
            <div>
              <span className="eyebrow eyebrow-alt">Student experience</span>
              <h2>Built for digital learning, growth and momentum.</h2>
              <p className="lead">
                TRU combines accessible learning, guided progression, AI-assisted academic support and practical,
                student-centred experiences in one coherent digital environment.
              </p>
            </div>

            <div className="mini-grid">
              {[
                ['Student portal', 'Study dashboards, records, certificates and progress tracking.'],
                ['Academic systems', 'Course structures, assessments, grading and progression oversight.'],
                ['Lecturer tools', 'Teaching resources, marking workflows and course management.'],
                ['Admin control', 'Institutional oversight, approvals, compliance and reporting.'],
              ].map(([title, text]) => (
                <div key={title} className="mini-card">
                  <div className="mini-bullet" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container section-block">
          <div className="cta-panel">
            <div>
              <span className="eyebrow eyebrow-alt">Admissions</span>
              <h2>Ready to begin your next chapter?</h2>
            </div>
            <Link href="/apply" className="btn btn-primary">
              Request application guide
            </Link>
          </div>
        </section>

        <section className="container section-block">
          <div className="section-heading">
            <span className="eyebrow eyebrow-alt">Student voice</span>
            <h2>What future learners are looking for</h2>
          </div>
          <div className="card-grid three-up">
            {testimonials.map((item) => (
              <article key={item.name} className="quote-card">
                <p>“{item.quote}”</p>
                <div className="quote-meta">
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
