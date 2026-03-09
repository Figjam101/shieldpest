import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, DM_Sans } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { StickyPhoneBar } from '@/components/layout/sticky-phone-bar';
import { siteConfig, seoDefaults } from '@/data/site-config';
import '@/styles/globals.css';

const fontDisplay = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const fontBody = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: seoDefaults.defaultTitle,
    template: seoDefaults.titleTemplate,
  },
  description: seoDefaults.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: seoDefaults.defaultTitle,
    description: seoDefaults.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: seoDefaults.defaultTitle,
    description: seoDefaults.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={`${fontDisplay.variable} ${fontBody.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyPhoneBar />
      </body>
    </html>
  );
}
