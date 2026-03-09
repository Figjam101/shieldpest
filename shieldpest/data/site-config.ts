export const siteConfig = {
  name: 'Mr Solutions',
  tagline: 'Your Home\'s First Line of Defence Against Pests',
  description: 'Professional pest control services across southern Adelaide. Same-day service, licensed technicians, transparent pricing, guaranteed results.',
  url: 'https://www.mrsolutions.com.au',
  phone: '(02) XXXX XXXX',
  phoneTel: '+610200000000',
  email: 'info@mrsolutions.com.au',
  address: {
    street: '123 Example Street',
    suburb: 'Seaford',
    state: 'SA',
    postcode: '5169',
    country: 'AU',
  },
  licence: 'XXXXXXX',
  abn: 'XX XXX XXX XXX',
  social: {
    facebook: 'https://facebook.com/mrsolutions',
    instagram: 'https://instagram.com/mrsolutions',
    google: 'https://g.page/mrsolutions',
  },
  openingHours: {
    weekdays: '7:00 AM – 6:00 PM',
    saturday: '8:00 AM – 4:00 PM',
    sunday: 'Emergency Only',
  },
} as const;

export const seoDefaults = {
  titleTemplate: '%s | Mr Solutions Adelaide',
  defaultTitle: 'Mr Solutions — Professional Pest Control Adelaide | Licensed & Insured',
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: siteConfig.url,
    siteName: siteConfig.name,
  },
} as const;
