'use client';

import { Star } from 'lucide-react';
import { FadeUp } from '@/components/ui/fade-up';
import { Marquee } from '@/components/ui/marquee';
import { testimonials } from '@/data/testimonials';

export function TestimonialsSection() {
  return (
    <section className="bg-white section-padding">
      <div className="container-site">
        <FadeUp>
          <div className="text-center mb-16">
            <span className="label-overline block mb-3">Reviews</span>
            <h2 className="font-display font-extrabold text-h2 text-forest-900">
              Trusted by Adelaide Homeowners
            </h2>
          </div>
        </FadeUp>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <FadeUp delay={0.2} className="w-full">
            <Marquee pauseOnHover className="[--duration:20s] py-4">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-surface-50 rounded-[20px] p-8 border border-surface-200 h-[320px] w-[350px] flex flex-col shrink-0 mx-3 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex gap-0.5 mb-5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="font-body text-[0.95rem] leading-[1.7] text-gray-500 italic flex-1 mb-6">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-forest-800 flex items-center justify-center font-display font-bold text-sm text-amber-400">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="font-body font-semibold text-sm text-forest-900">
                        {t.name}
                      </div>
                      <div className="font-body text-xs text-gray-400">
                        {t.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
          </FadeUp>
          {/* Edge Fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 lg:w-1/4 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 lg:w-1/4 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </section>
  );
}
