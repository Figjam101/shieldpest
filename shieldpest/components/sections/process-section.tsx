'use client';

import { FadeUp } from '@/components/ui/fade-up';

const steps = [
  {
    num: '01',
    title: 'Inspect',
    desc: 'Thorough property inspection using thermal imaging and moisture detection to identify pest species, entry points, and risk areas.',
  },
  {
    num: '02',
    title: 'Treat',
    desc: 'A tailored treatment plan specific to your infestation. No cookie-cutter approaches — every home gets a customized solution.',
  },
  {
    num: '03',
    title: 'Protect',
    desc: 'Ongoing monitoring, preventive barriers, and scheduled check-ins keep your home defended year-round.',
  },
];

export function ProcessSection() {
  return (
    <section className="bg-forest-900 section-padding relative overflow-hidden">
      {/* Subtle Grid Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
      />
      {/* Radial Glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 0% 50%, rgba(226,91,24,0.15) 0%, transparent 40%),
            radial-gradient(circle at 100% 50%, rgba(226,91,24,0.15) 0%, transparent 40%)
          `,
        }}
      />

      <div className="relative container-site">
        <FadeUp>
          <div className="text-center mb-16">
            <span className="label-overline !text-amber-400 block mb-3">Our Process</span>
            <h2 className="font-display font-extrabold text-h2 text-white">
              Three Steps to a Pest-Free Home
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <FadeUp key={step.num} delay={i * 0.15}>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-[20px] p-9 relative overflow-hidden">
                <span className="absolute top-5 right-6 font-display font-extrabold text-[4.5rem] leading-none bg-gradient-to-b from-white/40 to-transparent bg-clip-text text-transparent select-none">
                  {step.num}
                </span>
                <div className="w-12 h-1 rounded bg-amber-500 mb-6" />
                <h3 className="font-display font-bold text-xl text-white mb-3.5">
                  {step.title}
                </h3>
                <p className="font-body text-[0.95rem] leading-relaxed text-white/60">
                  {step.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
