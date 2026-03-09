import Link from 'next/link';
import { Shield } from 'lucide-react';
import { siteConfig } from '@/data/site-config';

const linkGroups = [
  {
    title: 'Services',
    links: [
      { label: 'Termite Control', href: '/services/termite-control' },
      { label: 'Cockroach Control', href: '/services/cockroach-control' },
      { label: 'Ant Control', href: '/services/ant-control' },
      { label: 'Spider Control', href: '/services/spider-control' },
      { label: 'Rodent Control', href: '/services/rodent-control' },
      { label: 'Inspections', href: '/services/pre-purchase-inspections' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Reviews', href: '/reviews' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Service Areas', href: '/locations' },
      { label: 'Free Quote', href: '/quote' },
      { label: 'Emergency Service', href: '/contact' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-forest-900 pt-16">
      <div className="container-site">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex flex-col no-underline group mb-6">
              <span className="font-display font-black text-2xl tracking-tight leading-none group-hover:text-amber-400 transition-colors text-white">
                Mr Solutions
              </span>
              <span className="font-body font-semibold text-[0.65rem] text-amber-400 tracking-[0.2em] uppercase mt-0.5 pl-0.5">
                Pest Control
              </span>
            </Link>
            <p className="font-body text-sm leading-relaxed text-white/50 mb-5 max-w-[260px]">
              Professional pest control services across greater Sydney.
              Licensed, insured, and committed to protecting your home.
            </p>
            <div className="font-body text-xs text-white/40 space-y-1">
              <p>Licence No: {siteConfig.licence}</p>
              <p>ABN: {siteConfig.abn}</p>
            </div>
          </div>

          {/* Link Groups */}
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="font-display font-bold text-xs tracking-[0.06em] uppercase text-white/70 mb-5">
                {group.title}
              </h4>
              <div className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-body text-sm text-white/45 no-underline hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.08] py-6 flex flex-wrap justify-between gap-3">
          <span className="font-body text-xs text-white/30">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </span>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((link) => (
              <Link
                key={link}
                href="#"
                className="font-body text-xs text-white/30 no-underline hover:text-white/50 transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
