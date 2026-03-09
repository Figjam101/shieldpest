export const siteConfig = {
  name: 'ShieldPest',
  tagline: 'Your Home\'s First Line of Defence Against Pests',
  description: 'Professional pest control services across greater Sydney. Same-day service, licensed technicians, transparent pricing, guaranteed results.',
  url: 'https://www.shieldpest.com.au',
  phone: '(02) XXXX XXXX',
  phoneTel: '+610200000000',
  email: 'info@shieldpest.com.au',
  address: {
    street: '123 Example Street',
    suburb: 'Parramatta',
    state: 'NSW',
    postcode: '2150',
    country: 'AU',
  },
  licence: 'XXXXXXX',
  abn: 'XX XXX XXX XXX',
  social: {
    facebook: 'https://facebook.com/shieldpest',
    instagram: 'https://instagram.com/shieldpest',
    google: 'https://g.page/shieldpest',
  },
  openingHours: {
    weekdays: '7:00 AM – 6:00 PM',
    saturday: '8:00 AM – 4:00 PM',
    sunday: 'Emergency Only',
  },
} as const;

export const seoDefaults = {
  titleTemplate: '%s | ShieldPest Sydney',
  defaultTitle: 'ShieldPest — Professional Pest Control Sydney | Licensed & Insured',
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: siteConfig.url,
    siteName: siteConfig.name,
  },
} as const;
