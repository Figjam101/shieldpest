import type { Metadata } from 'next';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { CTABanner } from '@/components/sections/cta-banner';

export const metadata: Metadata = {
  title: 'Customer Reviews',
  description: 'Read reviews from ShieldPest customers across Sydney. 4.9-star average from 500+ verified reviews.',
};

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-forest-900 via-forest-800 to-forest-700 pt-32 pb-20">
        <div className="container-site">
          <h1 className="font-display font-extrabold text-h1 text-white mb-4">
            What Our Customers Say
          </h1>
          <p className="font-body text-lg text-white/70 max-w-[500px]">
            4.9-star average from 500+ verified reviews across Google, ProductReview, and Facebook.
          </p>
        </div>
      </section>
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
