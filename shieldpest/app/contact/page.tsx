import type { Metadata } from 'next';
import Image from 'next/image';
import { Phone, Mail, Clock } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import { CTABanner } from '@/components/sections/cta-banner';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Mr Solutions for a free pest control quote. Same-day service available across southern Adelaide.',
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-forest-900 via-forest-800 to-forest-700 pt-32 pb-20">
        <div className="container-site">
          <h1 className="font-display font-extrabold text-h1 text-white mb-4">
            Get in Touch
          </h1>
          <p className="font-body text-lg text-white/70 max-w-[500px]">
            Have a pest problem? Need a quote? We&apos;re here to help — reach out by phone, email, or the form below.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-forest-900 mb-1">Phone</h3>
                  <a href={`tel:${siteConfig.phoneTel}`} className="font-body text-gray-600 no-underline hover:text-amber-500">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-forest-900 mb-1">Email</h3>
                  <a href={`mailto:${siteConfig.email}`} className="font-body text-gray-600 no-underline hover:text-amber-500">
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                  <Image src="/images/location-pin.png" alt="" width={96} height={96} className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-forest-900 mb-1">Service Area</h3>
                  <p className="font-body text-gray-600">Greater Adelaide, SA</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-forest-900 mb-1">Hours</h3>
                  <div className="font-body text-sm text-gray-600 space-y-1">
                    <p>Mon–Fri: {siteConfig.openingHours.weekdays}</p>
                    <p>Saturday: {siteConfig.openingHours.saturday}</p>
                    <p>Sunday: {siteConfig.openingHours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-surface-50 rounded-2xl border border-surface-200 p-8 md:p-10">
                <h2 className="font-display font-bold text-h3 text-forest-900 mb-6">
                  Request a Free Quote
                </h2>
                {/* NOTE: Form action should be wired to a serverless function (e.g., /api/contact) */}
                <form className="space-y-5" action="/api/contact" method="POST">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-body text-sm font-medium text-forest-900 mb-1.5">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-surface-200 bg-white font-body text-sm
                                   focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-sm font-medium text-forest-900 mb-1.5">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-surface-200 bg-white font-body text-sm
                                   focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition"
                        placeholder="04XX XXX XXX"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-forest-900 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg border border-surface-200 bg-white font-body text-sm
                                 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-forest-900 mb-1.5">
                      Suburb
                    </label>
                    <input
                      type="text"
                      name="suburb"
                      className="w-full px-4 py-3 rounded-lg border border-surface-200 bg-white font-body text-sm
                                 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition"
                      placeholder="e.g. Seaford"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-forest-900 mb-1.5">
                      What pest issue are you experiencing? *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-surface-200 bg-white font-body text-sm resize-y
                                 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition"
                      placeholder="Tell us about your pest problem..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full justify-center"
                  >
                    Send Request
                  </button>
                  <p className="font-body text-xs text-gray-400 text-center">
                    We&apos;ll respond within 2 hours during business hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
