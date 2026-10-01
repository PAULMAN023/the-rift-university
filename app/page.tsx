const programmes = [
  {
    title: 'School of Computing and Artificial Intelligence',
    description: 'AI, software engineering, digital systems, and data-driven innovation.',
    accent: 'bg-tru-gold/15 text-tru-navy',
  },
  {
    title: 'School of Cybersecurity and Digital Systems',
    description: 'Secure systems design, digital protection, and trust-focused technology.',
    accent: 'bg-tru-teal/15 text-tru-navy',
  },
  {
    title: 'School of Business and Entrepreneurship',
    description: 'Leadership, enterprise, strategy, and future-ready business skills.',
    accent: 'bg-tru-olive/15 text-tru-navy',
  },
];

const features = [
  'African-rooted academic identity',
  'Flexible online learning pathways',
  'Supportive student experience',
  'Future-ready digital university model',
];

const stats = [
  { label: 'Schools', value: '5' },
  { label: 'Programmes', value: 'Drafting' },
  { label: 'Learning model', value: 'Online-first' },
  { label: 'Founder', value: 'Paul Manyololi' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-tru-ivory text-tru-navy">
      <header className="border-b border-tru-navy/10 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-tru-navy text-lg font-bold text-white">
              TRU
            </div>
            <div>
              <p className="text-lg font-bold tracking-wide">The Rift University</p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-tru-olive">Learn. Innovate. Lead.</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#about">About</a>
            <a href="#programmes">Programmes</a>
            <a href="#experience">Experience</a>
            <a href="#admissions">Admissions</a>
            <a href="#contact">Contact</a>
          </nav>

          <button className="rounded-full bg-tru-gold px-5 py-2.5 text-sm font-semibold text-tru-navy transition hover:bg-tru-gold/90">
            Apply now
          </button>
        </div>
      </header>

      <section className="relative overflow-hidden bg-sunrise">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(201,154,59,0.20),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(40,127,120,0.18),_transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="inline-flex rounded-full border border-tru-gold bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-tru-navy">
              Founded in 2026
            </span>
            <h1 className="mt-6 max-w-xl text-4xl font-black leading-tight text-tru-navy md:text-6xl">
              Your Future, Your Knowledge, Your World.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-tru-navy/80">
              The Rift University is building a future-focused digital learning environment for ambitious students, educators, and professionals across Africa and beyond.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-tru-teal px-6 py-3 font-semibold text-white shadow-soft transition hover:bg-tru-teal/90">
                Explore programmes
              </button>
              <button className="rounded-full border border-tru-navy/20 bg-white px-6 py-3 font-semibold text-tru-navy transition hover:border-tru-navy/40">
                Book a consultation
              </button>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-tru-navy/10 bg-white/70 p-4 shadow-soft">
                  <div className="text-xl font-black text-tru-navy">{stat.value}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.15em] text-tru-navy/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-tru-navy/10 bg-white p-6 shadow-soft">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-tru-gold via-tru-sandstone to-tru-ivory p-5">
              <div className="rounded-[1.25rem] border border-tru-navy/10 bg-white/75 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tru-forest">TRU Vision</p>
                <div className="mt-5 space-y-4">
                  <div className="rounded-2xl bg-tru-navy p-4 text-white">
                    <p className="text-xs uppercase tracking-[0.2em] text-tru-sandstone">Mission</p>
                    <p className="mt-2 text-sm leading-6 text-white/90">
                      To create a modern, inclusive, and future-focused digital university that develops relevant skills for today and tomorrow.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-tru-navy/10 bg-tru-ivory p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-tru-olive">Core values</p>
                    <ul className="mt-3 space-y-2 text-sm text-tru-navy/80">
                      {features.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="inline-block h-2 w-2 rounded-full bg-tru-gold" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-tru-teal">About TRU</p>
          <h2 className="mt-4 text-3xl font-black text-tru-navy md:text-5xl">A new generation of university learning</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-tru-navy/10 bg-white p-7 shadow-soft">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-tru-gold/15 text-xl">📘</div>
            <h3 className="text-xl font-bold text-tru-navy">Academic excellence</h3>
            <p className="mt-3 text-base leading-7 text-tru-navy/70">
              Structured programmes and digital learning pathways designed to develop critical thinking, applied skills, and leadership.
            </p>
          </div>

          <div className="rounded-3xl border border-tru-navy/10 bg-white p-7 shadow-soft">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-tru-teal/15 text-xl">🌍</div>
            <h3 className="text-xl font-bold text-tru-navy">African identity</h3>
            <p className="mt-3 text-base leading-7 text-tru-navy/70">
              Inspired by African savanna landscapes, resilience, and opportunity, while remaining globally relevant and future-ready.
            </p>
          </div>

          <div className="rounded-3xl border border-tru-navy/10 bg-white p-7 shadow-soft">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-tru-olive/15 text-xl">⚙️</div>
            <h3 className="text-xl font-bold text-tru-navy">Digital transformation</h3>
            <p className="mt-3 text-base leading-7 text-tru-navy/70">
              Online-first delivery, digital administration, strong security, and accessible experiences built for modern learners.
            </p>
          </div>
        </div>
      </section>

      <section id="programmes" className="bg-tru-navy text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-tru-sandstone">Academic schools</p>
            <h2 className="mt-4 text-3xl font-black md:text-5xl">Flexible, future-ready learning pathways</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {programmes.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <div className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${item.accent}`}>
                  Proposed
                </div>
                <h3 className="mt-5 text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-4 leading-7 text-white/75">{item.description}</p>
                <button className="mt-7 text-sm font-semibold text-tru-gold">View school details →</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-tru-teal">Student experience</p>
            <h2 className="mt-4 text-3xl font-black text-tru-navy md:text-5xl">A digital campus designed for growth</h2>
            <p className="mt-6 text-lg leading-8 text-tru-navy/75">
              TRU combines accessible learning, guided progression, AI-assisted academic support, and strong student services in one coherent digital environment.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ['Student portal', 'Study dashboards, records, certificates, and progress tracking.'],
              ['Academic systems', 'Course structures, assessments, grading, and progression management.'],
              ['Lecturer tools', 'Teaching support, resources, marking workflows, and course management.'],
              ['Admin control', 'Institutional oversight, approvals, finance, compliance, and reporting.'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl border border-tru-navy/10 bg-white p-6 shadow-soft">
                <div className="mb-3 h-10 w-10 rounded-2xl bg-tru-gold/15" />
                <h3 className="text-xl font-bold text-tru-navy">{title}</h3>
                <p className="mt-3 text-base leading-7 text-tru-navy/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="admissions" className="bg-tru-ivory">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-[2rem] border border-tru-navy/10 bg-white p-8 shadow-soft md:p-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-tru-teal">Admissions</p>
                <h2 className="mt-4 text-3xl font-black text-tru-navy md:text-5xl">Ready to begin your next chapter?</h2>
              </div>

              <button className="rounded-full bg-tru-forest px-6 py-3 font-semibold text-white transition hover:bg-tru-forest/90">
                Request application guide
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-tru-navy text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">
          <div>
            <p className="text-xl font-black">The Rift University</p>
            <p className="mt-3 max-w-xs text-sm leading-7 text-white/70">
              An African-rooted, future-focused university platform designed for academic growth, innovation, and digital transformation.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-tru-sandstone">Quick links</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>About TRU</li>
              <li>Programmes</li>
              <li>Admissions</li>
              <li>Student support</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-tru-sandstone">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>hello@tru.example</li>
              <li>support@tru.example</li>
              <li>Draft contact details</li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
