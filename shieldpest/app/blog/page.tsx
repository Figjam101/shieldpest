import type { Metadata } from 'next';
import { CTABanner } from '@/components/sections/cta-banner';

export const metadata: Metadata = {
  title: 'Blog — Pest Control Tips & Advice',
  description: 'Expert advice from ShieldPest technicians. Pest prevention tips, seasonal guides, and honest answers to common pest control questions.',
};

const blogPosts = [
  { slug: '5-signs-you-have-termites', title: '5 Signs You Have Termites (And What to Do Next)', excerpt: 'Termites are often called the "silent destroyers" for good reason. Here are the warning signs every homeowner should know.', date: '2025-03-15', category: 'Termites' },
  { slug: 'how-much-does-pest-control-cost', title: 'How Much Does Pest Control Cost in Sydney? 2025 Guide', excerpt: 'A transparent breakdown of what you can expect to pay for different pest control services in the Sydney area.', date: '2025-03-01', category: 'Guides' },
  { slug: 'cockroach-prevention-mistakes', title: 'Cockroach Prevention: 8 Things Sydney Homeowners Get Wrong', excerpt: 'Think keeping a clean kitchen is enough? Here are the common mistakes that keep cockroaches coming back.', date: '2025-02-15', category: 'Prevention' },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-forest-900 via-forest-800 to-forest-700 pt-32 pb-20">
        <div className="container-site">
          <h1 className="font-display font-extrabold text-h1 text-white mb-4">
            Expert Advice from Our Pest Specialists
          </h1>
          <p className="font-body text-lg text-white/70 max-w-[500px]">
            Practical tips, prevention guides, and honest answers to your pest control questions.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article key={post.slug} className="card-base overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-forest-700 to-forest-900 flex items-center justify-center">
                  <span className="font-body text-xs font-semibold tracking-wider uppercase text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <time className="font-body text-xs text-gray-400 block mb-2">{post.date}</time>
                  <h2 className="font-display font-bold text-lg text-forest-900 mb-2 leading-tight">
                    {post.title}
                  </h2>
                  <p className="font-body text-sm text-gray-500 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
