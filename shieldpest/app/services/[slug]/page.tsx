import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Phone, CheckCircle } from 'lucide-react';
import { services } from '@/data/services';
import { siteConfig } from '@/data/site-config';
import { pestIconMap } from '@/components/ui/pest-icons';
import { CTABanner } from '@/components/sections/cta-banner';
import { ServiceSchema, BreadcrumbSchema } from '@/components/seo/json-ld';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default function ServicePage({ params }: PageProps) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const IconComponent = pestIconMap[service.icon];

  const relatedServices = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <ServiceSchema name={service.title} description={service.metaDescription} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
          { name: service.shortTitle, href: `/services/${service.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-900 via-forest-800 to-forest-700 pt-32 pb-20">
        <div className="container-site">
          <nav className="flex items-center gap-2 text-sm text-white/40 mb-8 font-body">
            <Link href="/" className="hover:text-white/60 no-underline text-white/40">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white/60 no-underline text-white/40">Services</Link>
            <span>/</span>
            <span className="text-white/70">{service.shortTitle}</span>
          </nav>

          <div className="flex items-start gap-6 mb-6">
            {IconComponent && (
              <div className="w-16 h-16 rounded-2xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-amber-400 shrink-0">
                <IconComponent size={36} />
              </div>
            )}
            <div>
              <h1 className="font-display font-extrabold text-h1 text-white mb-4">
                {service.title}
              </h1>
              <p className="font-body text-lg leading-relaxed text-white/70 max-w-[600px]">
                {service.heroLead}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/quote" className="btn-primary no-underline">
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={`tel:${siteConfig.phoneTel}`} className="btn-outline no-underline">
              <Phone className="w-4 h-4 text-amber-400" />
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container-site max-w-[900px]">
          <h2 className="font-display font-bold text-h2 text-forest-900 mb-6">
            Why Choose Us for {service.shortTitle} Control
          </h2>
          <div className="space-y-4 mb-16">
            {[
              'Licensed and fully insured technicians',
              'Same-day emergency service available',
              'Transparent pricing — detailed quote before work begins',
              'Eco-friendly treatment options available',
              'Manufacturer-backed warranties on treatments',
              'Detailed post-treatment report and prevention plan',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                <span className="font-body text-base text-gray-600">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display font-bold text-h2 text-forest-900 mb-8">
            Related Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedServices.map((svc) => {
              const RelatedIcon = pestIconMap[svc.icon];
              return (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  className="card-base p-6 no-underline group"
                >
                  <div className="w-10 h-10 rounded-xl bg-surface-50 group-hover:bg-forest-800 flex items-center justify-center text-forest-600 group-hover:text-amber-400 mb-3 transition-all">
                    {RelatedIcon && <RelatedIcon size={24} />}
                  </div>
                  <h3 className="font-display font-bold text-base text-forest-900">
                    {svc.shortTitle}
                  </h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
