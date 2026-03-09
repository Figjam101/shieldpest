'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FadeUp } from '@/components/ui/fade-up';
import { pestIconMap } from '@/components/ui/pest-icons';
import { services } from '@/data/services';

import Image from 'next/image';

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  const IconComponent = pestIconMap[service.icon];

  return (
    <div className="card-base relative p-6 flex flex-col h-full group overflow-hidden">
      {/* Absolute link covers the entire card, making any click act on the card */}
      <Link href={`/services/${service.slug}`} className="absolute inset-0 z-10" aria-label={`Learn more about ${service.title}`} />

      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface-100 shadow-sm border border-surface-200 mb-5">
        <Image
          src={service.image}
          alt={service.shortTitle}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* Floating Icon Badge */}
        {IconComponent && (
          <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-forest-700 shadow-sm group-hover:text-amber-500 transition-colors">
            <IconComponent size={20} />
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1">
        <h3 className="font-display font-bold text-lg text-forest-900 tracking-tight mb-2.5">
          {service.title}
        </h3>
        <p className="font-body text-[0.95rem] leading-relaxed text-gray-500 flex-1 mb-6">
          {service.cardDescription}
        </p>

        <div className="flex flex-wrap items-center justify-between gap-3 mt-auto pt-4 border-t border-surface-200">
          <span className="flex items-center gap-1.5 font-body text-sm font-semibold text-forest-600 group-hover:text-amber-500 transition-colors">
            Learn more
            <ArrowRight className="w-4 h-4" />
          </span>

          <Link
            href="/quote"
            className="relative z-20 inline-flex items-center justify-center bg-forest-900 text-white font-body text-xs font-bold px-4 py-2.5 rounded-[8px] hover:bg-amber-500 hover:-translate-y-0.5 transition-all shadow-sm no-underline"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="bg-surface-50 section-padding">
      <div className="container-site">
        <FadeUp>
          <div className="text-center mb-16">
            <span className="label-overline block mb-3">Our Services</span>
            <h2 className="font-display font-extrabold text-h2 text-forest-900 mb-4">
              Targeted Solutions for Every Threat
            </h2>
            <p className="font-body text-base leading-relaxed text-gray-500 max-w-[520px] mx-auto">
              We don&apos;t spray and pray. Every treatment is tailored to your
              home, your pest, and your peace of mind.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((svc, i) => (
            <FadeUp key={svc.slug} delay={i * 0.05}>
              <ServiceCard service={svc} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
