'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FadeUp } from '@/components/ui/fade-up';
import { faqs } from '@/data/faqs';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-surface-50 section-padding relative overflow-hidden">
      {/* Subtle Dot Pattern Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: 'radial-gradient(var(--color-forest-900) 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      />
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-surface-100/50 to-transparent pointer-events-none" />
      <div className="absolute -left-40 top-40 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[800px] mx-auto px-6 relative z-10">
        <FadeUp>
          <div className="text-center mb-16">
            <span className="label-overline block mb-3 text-amber-500">FAQ</span>
            <h2 className="font-display font-extrabold text-h2 text-forest-900 mb-4">
              Common Questions
            </h2>
            <p className="font-body text-forest-900/60 max-w-lg mx-auto">
              Everything you need to know about our pest control services, pricing, and guarantees.
            </p>
          </div>
        </FadeUp>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <FadeUp key={i} delay={i * 0.05}>
                <div
                  className={`bg-white rounded-2xl border transition-all duration-300 ${isOpen
                    ? 'border-amber-400 shadow-lg shadow-amber-500/5 ring-1 ring-amber-400/20 scale-[1.01]'
                    : 'border-surface-200 hover:border-surface-300 hover:shadow-md'
                    } overflow-hidden`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full px-6 py-6 flex justify-between items-center bg-transparent border-none cursor-pointer text-left group"
                  >
                    <span className={`font-body text-[1.05rem] font-bold transition-colors duration-300 pr-8 ${isOpen ? 'text-amber-600' : 'text-forest-900 group-hover:text-amber-600'
                      }`}>
                      {faq.question}
                    </span>
                    <div className={`relative w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-amber-100 rotate-180' : 'bg-surface-100 group-hover:bg-amber-50'
                      }`}>
                      <div className={`absolute w-3 h-[2px] rounded-full transition-colors duration-300 ${isOpen ? 'bg-amber-600' : 'bg-forest-900'}`} />
                      <div className={`absolute w-[2px] h-3 rounded-full transition-all duration-300 ${isOpen ? 'bg-amber-600 rotate-90 opacity-0' : 'bg-forest-900 opacity-100'}`} />
                    </div>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                  >
                    <div className="overflow-hidden">
                      <p className="font-body text-base leading-relaxed text-forest-900/70 px-6 pb-6 pt-2">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
