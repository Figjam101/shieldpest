import type { Metadata } from 'next';
import { Shield, Award, Users, ThumbsUp } from 'lucide-react';
import { CTABanner } from '@/components/sections/cta-banner';
import { TestimonialsSection } from '@/components/sections/testimonials-section';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Meet the ShieldPest team. Licensed, experienced pest control professionals serving greater Sydney with integrity and expertise.',
};

const stats = [
  { value: '10+', label: 'Years Experience', icon: Award },
  { value: '5,000+', label: 'Homes Protected', icon: Shield },
  { value: '15+', label: 'Licensed Technicians', icon: Users },
  { value: '4.9', label: 'Average Rating', icon: ThumbsUp },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-forest-900 via-forest-800 to-forest-700 pt-32 pb-20">
        <div className="container-site max-w-[800px]">
          <h1 className="font-display font-extrabold text-h1 text-white mb-6">
            Protecting Sydney Homes Since 2015
          </h1>
          <p className="font-body text-lg leading-relaxed text-white/70">
            ShieldPest was founded on a simple belief: every family deserves to live in a home
            free from pests — and they deserve honest, professional service to get there.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-b border-surface-200">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-6 h-6 text-amber-500 mx-auto mb-3" />
                <div className="font-display font-extrabold text-3xl text-forest-900 mb-1">
                  {stat.value}
                </div>
                <div className="font-body text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container-site max-w-[800px]">
          <h2 className="font-display font-bold text-h2 text-forest-900 mb-6">Our Story</h2>
          <div className="font-body text-base leading-[1.8] text-gray-600 space-y-6">
            <p>
              We started ShieldPest after years of watching the pest control industry over-promise
              and under-deliver. Too many companies rely on generic spray-and-pray tactics, leaving
              homeowners frustrated and still dealing with pests weeks later.
            </p>
            <p>
              Our approach is different. Every treatment starts with a proper inspection —
              identifying the species, mapping entry points, and understanding the conditions that
              attracted pests in the first place. Only then do we design a treatment plan, and we
              explain every option, including costs, before any work begins.
            </p>
            <p>
              We invest in the best technology — thermal imaging, Termatrac motion detection,
              APVMA-registered products — because precision matters. And we back every treatment
              with a guarantee, because if it doesn&apos;t work, we haven&apos;t done our job.
            </p>
            <p>
              Today, our team of over 15 licensed technicians serves thousands of homes across
              greater Sydney. We&apos;re proud of our 4.9-star rating, but what we&apos;re most
              proud of is the trust our customers place in us to protect their homes and families.
            </p>
          </div>

          <h2 className="font-display font-bold text-h2 text-forest-900 mb-6 mt-16">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'Transparency', desc: 'No hidden fees, no pressure tactics. We explain what we find, what it costs, and what your options are.' },
              { title: 'Precision', desc: 'We invest in technology and training so every treatment targets the problem at its source.' },
              { title: 'Accountability', desc: 'Every treatment is guaranteed. If pests return within warranty, we re-treat at no cost.' },
              { title: 'Respect', desc: 'For your home, your time, and your family. We show up on time, work cleanly, and communicate clearly.' },
            ].map((value) => (
              <div key={value.title} className="bg-surface-50 rounded-2xl border border-surface-200 p-6">
                <h3 className="font-display font-bold text-base text-forest-900 mb-2">{value.title}</h3>
                <p className="font-body text-sm leading-relaxed text-gray-500">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
