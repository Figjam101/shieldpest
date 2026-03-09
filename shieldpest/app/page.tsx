import { HeroSection } from '@/components/sections/hero';
import { TrustBar } from '@/components/sections/trust-bar';
import { ServicesSection } from '@/components/sections/services-section';
import { ProcessSection } from '@/components/sections/process-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { FAQSection } from '@/components/sections/faq-section';
import { CTABanner } from '@/components/sections/cta-banner';
import { LocalBusinessSchema, FAQSchema } from '@/components/seo/json-ld';
import { faqs } from '@/data/faqs';

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema faqs={faqs} />
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <CTABanner />
    </>
  );
}
