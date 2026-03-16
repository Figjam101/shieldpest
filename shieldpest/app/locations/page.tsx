import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { locations } from '@/data/locations';
import { CTABanner } from '@/components/sections/cta-banner';
import { BreadcrumbSchema } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Service Areas',
  description: 'Mr Solutions serves southern Adelaide — Seaford, Moana, Aldinga Beach, Victor Harbor, and surrounding suburbs. Find pest control near you.',
};

export default function LocationsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Locations', href: '/locations' }]} />

      <section className="bg-gradient-to-br from-forest-900 via-forest-800 to-forest-700 pt-32 pb-20">
        <div className="container-site">
          <h1 className="font-display font-extrabold text-h1 text-white mb-4">
            Service Areas
          </h1>
          <p className="font-body text-lg text-white/70 max-w-[500px]">
            Professional pest control across southern Adelaide. Find your suburb below.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site">
          <div className="space-y-16">
            {locations.map((region) => (
              <div key={region.slug}>
                <h2 className="font-display font-bold text-h3 text-forest-900 mb-6 flex items-center gap-2">
                  <Image src="/images/location-pin.png" alt="" width={96} height={96} className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain" />
                  {region.name}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {region.suburbs.map((suburb) => (
                    <Link
                      key={suburb.slug}
                      href={`/locations/${region.slug}/${suburb.slug}`}
                      className="card-base p-6 no-underline group"
                    >
                      <h3 className="font-display font-bold text-base text-forest-900 mb-2">
                        Pest Control in {suburb.name}
                      </h3>
                      <p className="font-body text-sm text-gray-500 mb-3 line-clamp-2">
                        {suburb.uniqueContent.slice(0, 120)}...
                      </p>
                      <div className="flex items-center gap-1 font-body text-sm font-semibold text-amber-500">
                        View details <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
