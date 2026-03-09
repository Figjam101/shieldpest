'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, Shield, ChevronDown } from 'lucide-react';
import { FadeUp } from '@/components/ui/fade-up';
import { SpinningText } from '@/components/ui/spinning-text';
import { siteConfig } from '@/data/site-config';

export function HeroSection() {
  const [mountVideo, setMountVideo] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    // Mount video after main content loads to prevent LCP penalty
    const timer = setTimeout(() => {
      setMountVideo(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center bg-forest-900 overflow-hidden">
      {/* Background Image with Opacity (Static fallback) */}
      <div
        className={`absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${videoPlaying ? 'opacity-0' : 'opacity-85'
          }`}
        style={{
          backgroundImage: 'url(/hero-bg.png)',
        }}
      />

      {/* Lazy Loaded Background Video */}
      {mountVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setVideoPlaying(true)}
          className={`absolute inset-0 z-0 w-full h-full object-cover transition-opacity duration-1000 ${videoPlaying ? 'opacity-85' : 'opacity-0'
            }`}
          src="/hero-video.mp4"
        />
      )}

      {/* Glowing accents overlay */}
      <div
        className="absolute inset-0 z-0 opacity-80"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(232,99,43,0.1) 0%, transparent 60%),
            radial-gradient(circle at 80% 20%, rgba(42,79,122,0.2) 0%, transparent 60%)
          `,
          backgroundSize: '100% 100%, 100% 100%',
        }}
      />

      {/* Decorative shield shapes */}
      <div className="absolute top-[15%] right-[10%] opacity-[0.04]">
        <Shield className="w-72 h-72" />
      </div>
      <div className="absolute bottom-[10%] left-[5%] opacity-[0.03] -rotate-[15deg]">
        <Shield className="w-48 h-48 text-amber-500" />
      </div>

      <div className="relative z-10 container-site py-32 md:py-40 flex flex-col items-center text-center">
        <div className="w-full max-w-[900px] flex flex-col items-center">
          <FadeUp>
            <div className="inline-flex items-center gap-2 bg-amber-500/12 border border-amber-500/25 rounded-full px-4 py-1.5 mb-7">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse-dot" />
              <span className="font-body text-xs font-medium text-amber-300 tracking-wide">
                Same-Day Service Available
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="font-display font-extrabold text-display text-white mb-6">
              Residential Pest Control
              <br />
              In Southern <span className="text-amber-400">Adelaide</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="font-body text-lg md:text-xl leading-relaxed text-white/70 mb-10 max-w-[540px] mx-auto">
              Fast, effective pest control backed by science — not guesswork.
              Licensed technicians. Transparent pricing. Guaranteed results.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <Link href="/quote" className="btn-primary no-underline">
                Get a Free Quote
                <ArrowRight className="w-[18px] h-[18px]" />
              </Link>
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="btn-outline no-underline"
              >
                <Phone className="w-[18px] h-[18px] text-amber-400" />
                Call {siteConfig.phone}
              </a>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bobble">
        <span className="font-body text-[0.7rem] text-white tracking-[0.1em] uppercase">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 text-white" />
      </div>

      {/* ISO 9001 Spinning Text Badge (Bottom Right) */}
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 w-28 h-28 md:w-36 md:h-36 pointer-events-none opacity-80 backdrop-blur-sm bg-black/10 rounded-full border border-white/5 shadow-2xl flex items-center justify-center">
        <SpinningText
          text="Compass Assurance Services • ISO 9001 •"
          className="w-full h-full text-amber-500"
          duration="25s"
        />
        {/* Inner static text for emphasis */}
        <div className="absolute flex flex-col items-center justify-center text-center">
          <span className="font-display font-extrabold text-white text-[0.85rem] md:text-[1.1rem] leading-none tracking-widest mb-0.5">
            ISO
          </span>
          <span className="font-body font-bold text-amber-400 text-[0.75rem] md:text-[0.95rem] leading-none">
            9001
          </span>
        </div>
      </div>
    </section>
  );
}
