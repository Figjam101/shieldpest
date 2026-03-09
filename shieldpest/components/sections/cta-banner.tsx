'use client';

import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { FadeUp } from '@/components/ui/fade-up';
import { siteConfig } from '@/data/site-config';

export function CTABanner() {
  return (
    <section className="bg-gradient-to-br from-amber-600 via-amber-500 to-amber-400 section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none mix-blend-multiply"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, rgba(15,31,26,0.3) 0%, rgba(15,31,26,0.8) 100%),
            radial-gradient(circle at 90% 10%, rgba(255,255,255,0.08) 0%, transparent 50%)
          `,
        }}
      />
      <div className="relative max-w-[800px] mx-auto px-6 text-center">
        <FadeUp>
          <h2 className="font-display font-extrabold text-h2 text-white mb-4">
            Pests Don&apos;t Wait. Neither Should You.
          </h2>
          <p className="font-body text-lg leading-relaxed text-white/85 mb-9">
            Book your free inspection today and get same-day service.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2.5 bg-white text-forest-900 font-body font-bold
                         px-10 py-4 rounded-[10px] no-underline shadow-lg hover:-translate-y-0.5 transition-transform"
            >
              Get a Free Quote
              <ArrowRight className="w-[18px] h-[18px]" />
            </Link>
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-flex items-center gap-2.5 border-2 border-white/40 text-white
                         font-body font-semibold px-8 py-4 rounded-[10px] no-underline
                         hover:border-white/80 transition-colors"
            >
              <Phone className="w-[18px] h-[18px]" />
              Call {siteConfig.phone}
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
