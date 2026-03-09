'use client';

import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/data/site-config';

export function StickyPhoneBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-350 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      {/* Desktop: floating button */}
      <div className="hidden lg:flex justify-end p-6">
        <a
          href={`tel:${siteConfig.phoneTel}`}
          className="flex items-center gap-2.5 bg-amber-500 text-white font-body font-bold text-sm
                     px-7 py-3.5 rounded-xl no-underline shadow-cta hover:bg-amber-600 transition-colors"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
      </div>

      {/* Mobile: full-width bar */}
      <div className="lg:hidden bg-forest-900 border-t-2 border-amber-500 px-4 py-3 flex gap-3">
        <a
          href={`tel:${siteConfig.phoneTel}`}
          className="flex-1 flex items-center justify-center gap-2 bg-amber-500 text-white
                     font-body font-bold text-[0.95rem] py-3.5 rounded-[10px] no-underline"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <Link
          href="/quote"
          className="flex-1 flex items-center justify-center gap-2 border border-white/20
                     text-white font-body font-semibold text-[0.95rem] py-3.5 rounded-[10px] no-underline"
        >
          Free Quote
        </Link>
      </div>
    </div>
  );
}
