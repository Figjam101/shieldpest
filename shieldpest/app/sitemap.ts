import type { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { siteConfig } from '@/data/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPages = [
    '', '/services', '/locations', '/about', '/contact', '/blog', '/faq', '/reviews',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const servicePages = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const locationPages = locations.flatMap((region) =>
    region.suburbs.map((suburb) => ({
      url: `${baseUrl}/locations/${region.slug}/${suburb.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );

  return [...staticPages, ...servicePages, ...locationPages];
}
