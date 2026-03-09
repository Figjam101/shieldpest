'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Shield, Menu, X } from 'lucide-react';
import { siteConfig } from '@/data/site-config';

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Locations', href: '/locations' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [headerTheme, setHeaderTheme] = useState<'light' | 'dark'>('dark');
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 20);
      setIsPastHero(window.scrollY > 400);

      const elements = document.querySelectorAll('section, div.bg-surface-50, div.bg-surface-100, div.bg-forest-900');
      let foundTheme: 'light' | 'dark' = 'dark'; // Dark background (hero video) at the top -> white text

      for (let i = 0; i < elements.length; i++) {
        const rect = elements[i].getBoundingClientRect();
        // Check if the current section is intersecting with the header (top 40px area)
        if (rect.top <= 40 && rect.bottom >= 40) {
          const className = elements[i].className || '';
          if (className.includes('surface') || className.includes('bg-white')) {
            foundTheme = 'light';
          } else if (className.includes('forest') || className.includes('amber')) {
            foundTheme = 'dark';
          }
        }
      }
      setHeaderTheme(foundTheme);
    };

    window.addEventListener('scroll', handler, { passive: true });
    // Trigger initial check on load
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? `py-3 ${headerTheme === 'light'
          ? 'bg-white/85 backdrop-blur-xl border-b border-forest-900/10 lg:bg-transparent lg:backdrop-blur-none lg:border-transparent'
          : 'bg-forest-900/85 backdrop-blur-xl border-b border-white/10 lg:bg-transparent lg:backdrop-blur-none lg:border-transparent'
        }`
        : 'bg-transparent py-5 border-b border-transparent'
        }`}
    >
      <div className="w-full px-6 md:px-10 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col no-underline group relative z-50">
          <span className={`font-display font-black text-2xl tracking-tight leading-none group-hover:text-amber-400 transition-colors ${headerTheme === 'light' ? 'text-forest-900 drop-shadow-sm' : 'text-white'}`}>
            Mr Solutions
          </span>
          <span className="font-body font-semibold text-[0.65rem] text-amber-400 tracking-[0.2em] uppercase mt-0.5 pl-0.5">
            Pest Control
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 items-center gap-8 bg-black/60 backdrop-blur-2xl border border-white/10 shadow-[0_4px_24px_-1px_rgba(0,0,0,0.5),0_0_1px_1px_rgba(255,255,255,0.1)_inset] rounded-full px-8 py-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm font-semibold text-white no-underline hover:text-amber-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Group */}
        <div className="flex items-center gap-4 relative z-50">
          <div
            className={`flex items-center gap-4 transition-all duration-300 ease-in-out ${isPastHero
              ? 'opacity-0 scale-95 pointer-events-none translate-x-4 absolute right-16' // visually hides without collapsing violently
              : 'opacity-100 scale-100 translate-x-0 static'
              }`}
          >
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className={`flex items-center gap-2 font-body text-sm font-semibold no-underline transition-colors ${headerTheme === 'light' && !mobileOpen ? 'text-forest-900 drop-shadow-sm' : 'text-white'}`}
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span className="hidden md:inline">{siteConfig.phone}</span>
            </a>
            <Link
              href="/quote"
              className="font-body text-[0.85rem] font-semibold tracking-wide text-white bg-amber-500 px-5 py-2.5 rounded-lg no-underline hover:bg-amber-600 transition-colors"
            >
              Free Quote
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-xl transition-all duration-300 backdrop-blur-md border ${headerTheme === 'light' && !mobileOpen
              ? 'bg-white/50 border-forest-900/10 text-forest-900 shadow-sm'
              : 'bg-black/20 border-white/10 text-white'
              }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-forest-900/40 backdrop-blur-2xl transition-all duration-500 lg:hidden flex flex-col justify-center items-center ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <nav className="flex flex-col items-center w-full px-8 gap-4 pt-16">
          {navLinks.map((link, index) => (
            <div key={link.href} className="w-full text-center flex flex-col items-center">
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-display font-semibold text-3xl text-white hover:text-amber-400 tracking-wide transition-colors py-1"
              >
                {link.label}
              </Link>
              {index < navLinks.length - 1 && (
                <div className="w-12 h-px bg-white/10 mt-4" />
              )}
            </div>
          ))}

          <div className="w-12 h-px bg-white/10 mt-1 mb-1" />

          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="font-display font-bold text-3xl text-amber-500 hover:text-amber-400 tracking-wide transition-colors py-1"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
