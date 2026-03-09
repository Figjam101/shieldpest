import type { Metadata } from 'next';
import { FAQSection } from '@/components/sections/faq-section';
import { CTABanner } from '@/components/sections/cta-banner';
import { FAQSchema, BreadcrumbSchema } from '@/components/seo/json-ld';
import { faqs } from '@/data/faqs';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Answers to common pest control questions — costs, safety, guarantees, service areas, and more.',
};

export default function FAQPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'FAQ', href: '/faq' }]} />
      <div className="pt-0">
        <FAQSection />
        <CTABanner />
      </div>
    </>
  );
}
