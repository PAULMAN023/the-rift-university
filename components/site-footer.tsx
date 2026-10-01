"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/schools', label: 'Schools' },
  { href: '/programmes', label: 'Programmes' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/contact', label: 'Contact' },
  { href: '/login', label: 'Login' },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-row">
        <Link href="/" className="brand" aria-label="The Rift University home page">
          <div className="brand-mark">TRU</div>
          <div>
            <strong>The Rift University</strong>
            <span>Learn. Innovate. Lead.</span>
          </div>
        </Link>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>

        <nav className={`site-nav ${open ? 'open' : ''}`}>
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/apply" className="btn btn-primary nav-cta">
            Apply now
          </Link>
        </nav>
      </div>
    </header>
  );
}
