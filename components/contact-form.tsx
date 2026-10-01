import Link from 'next/link';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>The Rift University</h3>
          <p>
            An African-rooted, future-focused university platform for academic growth, innovation and digital learning.
          </p>
        </div>

        <div>
          <h4>Quick links</h4>
          <ul>
            <li><Link href="/about">About TRU</Link></li>
            <li><Link href="/programmes">Programmes</Link></li>
            <li><Link href="/admissions">Admissions</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:hello@tru.example">hello@tru.example</a></li>
            <li><a href="mailto:support@tru.example">support@tru.example</a></li>
            <li><Link href="/contact">Contact form</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
