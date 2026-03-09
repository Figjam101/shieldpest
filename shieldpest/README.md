# ShieldPest — Modern Pest Control Website

A production-ready Next.js 14 website for a professional pest control company. Built with Tailwind CSS, TypeScript, and optimized for SEO, conversion, and Vercel deployment.

## Quick Start (Google Antigravity)

1. Open this folder in Google Antigravity
2. The agent can install dependencies and run the dev server:

```bash
npm install
npm run dev
```

3. Open `http://localhost:3000` to preview

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.4
- **Fonts:** Plus Jakarta Sans (display) + DM Sans (body)
- **Deployment:** Vercel-ready (zero config)
- **SEO:** JSON-LD schema, sitemap, robots.txt, Open Graph

## Project Structure

```
shieldpest/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (fonts, header, footer)
│   ├── page.tsx                # Homepage
│   ├── not-found.tsx           # 404 page
│   ├── sitemap.ts              # Auto-generated sitemap
│   ├── robots.ts               # robots.txt
│   ├── services/
│   │   ├── page.tsx            # Services index
│   │   └── [slug]/page.tsx     # Dynamic service pages
│   ├── locations/page.tsx      # Locations index
│   ├── about/page.tsx          # About page
│   ├── blog/page.tsx           # Blog index
│   ├── contact/page.tsx        # Contact + quote form
│   ├── faq/page.tsx            # FAQ page
│   ├── quote/page.tsx          # Redirects to /contact
│   └── reviews/page.tsx        # Reviews page
├── components/
│   ├── layout/                 # Header, Footer, StickyPhoneBar
│   ├── sections/               # Page sections (Hero, Services, Process, etc.)
│   ├── seo/                    # JSON-LD schema components
│   └── ui/                     # FadeUp, PestIcons
├── data/                       # Content data (services, locations, FAQs, etc.)
├── lib/                        # Utilities (cn, useInView)
├── styles/globals.css          # Tailwind + custom CSS
├── tailwind.config.ts          # Design tokens
└── package.json
```

## Pages

| Route | Page | Status |
|-------|------|--------|
| `/` | Homepage | ✅ Complete |
| `/services` | Services index | ✅ Complete |
| `/services/[slug]` | 10 service pages | ✅ Complete |
| `/locations` | Service areas | ✅ Complete |
| `/about` | About / team | ✅ Complete |
| `/blog` | Blog index | ✅ Placeholder |
| `/contact` | Contact + form | ✅ Complete |
| `/faq` | FAQ | ✅ Complete |
| `/reviews` | Reviews | ✅ Complete |

## Design System

### Colors
- **Navy** (trust/authority): `#0B1426` → `#2A4F7A`
- **Ember** (action/urgency): `#D04E1A` → `#F49560`
- **Surfaces**: Clean whites and warm grays

### Typography
- **Display:** Plus Jakarta Sans (800, 700, 600)
- **Body:** DM Sans (400, 500, 600, 700)

### Components
All reusable: ServiceCard, TestimonialCard, FAQAccordion, ProcessSteps, CTABanner, TrustBar, StickyPhoneBar, and more.

## SEO

- JSON-LD schemas: LocalBusiness, Service, FAQ, BreadcrumbList
- Auto-generated sitemap.xml and robots.txt
- Open Graph + Twitter Card meta on all pages
- Semantic HTML throughout
- Breadcrumb navigation on service pages

## Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect GitHub repo to Vercel dashboard for auto-deploy
```

Zero configuration needed — Next.js is auto-detected.

## Next Steps / TODOs

- [ ] Replace placeholder phone number and address in `data/site-config.ts`
- [ ] Add real images to `/public/images/`
- [ ] Wire contact form to serverless email function (Resend/SendGrid)
- [ ] Add dynamic location suburb pages (`/locations/[region]/[suburb]`)
- [ ] Write full blog post MDX content
- [ ] Set up Google Analytics 4 + Search Console
- [ ] Add real customer review data
- [ ] Connect to headless CMS for blog (optional)
- [ ] Performance audit and image optimization

## Licence

Private project. All rights reserved.
