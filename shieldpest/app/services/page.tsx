import type { Metadata } from 'next';
import { ServicesSection } from '@/components/sections/services-section';
import { CTABanner } from '@/components/sections/cta-banner';
import { BreadcrumbSchema } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Pest Control Services',
  description:
    'Professional pest control services including termite treatment, cockroach control, rodent removal, and more. Licensed technicians, guaranteed results.',
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-900 via-forest-800 to-forest-700 pt-32 pb-20">
        <div className="container-site text-center">
          <h1 className="font-display font-extrabold text-h1 text-white mb-4">
            Our Services
          </h1>
          <p className="font-body text-lg text-white/70 max-w-[600px] mx-auto">
            Comprehensive, targeted, and effective pest control solutions for your home.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="py-20 bg-surface-50">
        <ServicesSection />
      </div>
      <CTABanner />
    </>
  );
}
