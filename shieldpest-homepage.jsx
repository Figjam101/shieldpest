import { useState, useEffect, useRef } from "react";

// ============================================================
// SHIELDPEST — COMPLETE HOMEPAGE
// Design System: Navy + Ember, Clash Display + Satoshi
// ============================================================

// --- Design Tokens ---
const colors = {
  navy900: "#0B1426",
  navy800: "#111D35",
  navy700: "#162847",
  navy600: "#1E3A5F",
  navy500: "#2A4F7A",
  ember600: "#D04E1A",
  ember500: "#E8632B",
  ember400: "#F07A42",
  ember300: "#F49560",
  surface50: "#F8F9FB",
  surface100: "#F0F2F5",
  surface200: "#E2E5EB",
  textPrimary: "#0B1426",
  textSecondary: "#4A5568",
  textMuted: "#8896A6",
  white: "#FFFFFF",
  success: "#16A34A",
};

// --- Font Imports (via Google Fonts CDN) ---
const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href =
  "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap";
if (!document.querySelector(`link[href="${fontLink.href}"]`)) {
  document.head.appendChild(fontLink);
}

const fontDisplay = "'Plus Jakarta Sans', sans-serif";
const fontBody = "'DM Sans', sans-serif";

// --- Intersection Observer Hook ---
function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, isInView];
}

// --- Animated Wrapper ---
function FadeUp({ children, delay = 0, className = "" }) {
  const [ref, isInView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// --- Icons ---
const ShieldIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const PhoneIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const CheckCircleIcon = ({ size = 20, color = colors.success }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const StarIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const ArrowRightIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

const ChevronDownIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// Pest-specific icons (abstract/geometric, not cartoonish)
const pestIcons = {
  termite: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="4" y="8" width="24" height="16" rx="3" stroke="currentColor" strokeWidth="2"/>
      <line x1="16" y1="8" x2="16" y2="24" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2"/>
      <circle cx="10" cy="16" r="2" fill="currentColor" opacity="0.3"/>
      <circle cx="22" cy="16" r="2" fill="currentColor" opacity="0.3"/>
    </svg>
  ),
  cockroach: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <ellipse cx="16" cy="16" rx="8" ry="10" stroke="currentColor" strokeWidth="2"/>
      <line x1="8" y1="12" x2="4" y2="8" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="24" y1="12" x2="28" y2="8" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="8" y1="20" x2="4" y2="24" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="24" y1="20" x2="28" y2="24" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  ant: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="10" r="4" stroke="currentColor" strokeWidth="2"/>
      <circle cx="16" cy="22" r="5" stroke="currentColor" strokeWidth="2"/>
      <line x1="16" y1="14" x2="16" y2="17" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  spider: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="2"/>
      <line x1="12" y1="12" x2="6" y2="6" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="20" y1="12" x2="26" y2="6" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="11" y1="16" x2="4" y2="16" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="21" y1="16" x2="28" y2="16" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="12" y1="20" x2="6" y2="26" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="20" y1="20" x2="26" y2="26" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  rodent: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <ellipse cx="16" cy="18" rx="10" ry="7" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 14 Q6 8 10 10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M24 14 Q26 8 22 10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <circle cx="13" cy="16" r="1" fill="currentColor"/>
      <circle cx="19" cy="16" r="1" fill="currentColor"/>
    </svg>
  ),
  bedbug: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <ellipse cx="16" cy="16" rx="7" ry="9" stroke="currentColor" strokeWidth="2"/>
      <line x1="9" y1="13" x2="23" y2="13" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
      <line x1="9" y1="19" x2="23" y2="19" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
    </svg>
  ),
  flea: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <ellipse cx="16" cy="14" rx="5" ry="6" stroke="currentColor" strokeWidth="2"/>
      <path d="M13 20 Q10 28 16 26 Q22 28 19 20" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    </svg>
  ),
  wasp: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <ellipse cx="16" cy="10" rx="5" ry="4" stroke="currentColor" strokeWidth="2"/>
      <ellipse cx="16" cy="22" rx="4" ry="5" stroke="currentColor" strokeWidth="2"/>
      <line x1="16" y1="14" x2="16" y2="17" stroke="currentColor" strokeWidth="2"/>
      <line x1="11" y1="8" x2="7" y2="4" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="21" y1="8" x2="25" y2="4" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  possum: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="15" r="8" stroke="currentColor" strokeWidth="2"/>
      <path d="M10 9 Q8 4 12 7" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M22 9 Q24 4 20 7" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <circle cx="13" cy="14" r="1.5" fill="currentColor"/>
      <circle cx="19" cy="14" r="1.5" fill="currentColor"/>
    </svg>
  ),
  inspection: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="6" y="4" width="16" height="22" rx="2" stroke="currentColor" strokeWidth="2"/>
      <line x1="10" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="10" y1="14" x2="18" y2="14" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="10" y1="18" x2="15" y2="18" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="23" cy="23" r="5" stroke="currentColor" strokeWidth="2"/>
      <line x1="26.5" y1="26.5" x2="30" y2="30" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
};

// --- Data ---
const services = [
  { slug: "termite-control", title: "Termites", icon: "termite", desc: "Detect, treat, and prevent termite damage before it costs you thousands." },
  { slug: "cockroach-control", title: "Cockroaches", icon: "cockroach", desc: "Eliminate cockroach colonies at the source with targeted baiting and barrier treatments." },
  { slug: "ant-control", title: "Ants", icon: "ant", desc: "Stop ant trails and destroy nests with precision treatments that last." },
  { slug: "spider-control", title: "Spiders", icon: "spider", desc: "Remove dangerous spiders and web infestations safely from your home." },
  { slug: "rodent-control", title: "Rodents", icon: "rodent", desc: "Seal entry points, set strategic traps, and remove rats and mice for good." },
  { slug: "bed-bug-treatment", title: "Bed Bugs", icon: "bedbug", desc: "Heat and chemical treatments that eliminate bed bugs at every life stage." },
  { slug: "flea-tick-control", title: "Fleas & Ticks", icon: "flea", desc: "Protect your family and pets with thorough flea and tick eradication." },
  { slug: "wasp-bee-removal", title: "Wasps & Bees", icon: "wasp", desc: "Safe removal of wasp nests and bee hives by licensed professionals." },
  { slug: "possum-removal", title: "Possums", icon: "possum", desc: "Humane possum removal and entry-point sealing to keep them out." },
  { slug: "pre-purchase-inspections", title: "Inspections", icon: "inspection", desc: "Comprehensive pest and termite inspections with detailed, lender-ready reports." },
];

const testimonials = [
  {
    text: "Found termites in our subfloor on a Friday afternoon. ShieldPest had a technician out within 3 hours. Professional, thorough, and genuinely reassuring during a stressful moment.",
    name: "Sarah M.",
    location: "Parramatta",
    rating: 5,
  },
  {
    text: "We've used ShieldPest for annual inspections for three years now. Their reports are detailed, their team is punctual, and they actually explain what they find instead of just upselling.",
    name: "David R.",
    location: "Castle Hill",
    rating: 5,
  },
  {
    text: "After trying two other companies for a persistent cockroach problem, ShieldPest finally solved it. The difference was their approach — they found the source, not just the symptoms.",
    name: "Priya K.",
    location: "Blacktown",
    rating: 5,
  },
];

const trustItems = [
  { label: "4.9★ from 500+ Reviews", icon: "star" },
  { label: "Licensed & Fully Insured", icon: "shield" },
  { label: "Same-Day Service", icon: "clock" },
  { label: "100% Satisfaction Guarantee", icon: "check" },
  { label: "Eco-Friendly Options", icon: "leaf" },
];

const faqs = [
  { q: "How quickly can you come out?", a: "We offer same-day service for most pest emergencies. Call before 2pm and we'll have a licensed technician at your property the same day, subject to availability in your area." },
  { q: "Are your treatments safe for kids and pets?", a: "Absolutely. All products we use are registered with the APVMA and specifically approved for residential use. We'll brief you on any short-term precautions — most treatments are safe to be around within hours." },
  { q: "Do you offer a guarantee?", a: "Yes. All treatments come with a service guarantee. If pests return within the warranty period, we'll re-treat at no additional cost. Chemical termite barriers carry manufacturer warranties of up to 8 years." },
  { q: "How much does pest control cost?", a: "General pest treatments for an average home start from around $220. Termite treatments range from $2,500–$5,000 depending on severity and method. We provide transparent quotes after inspection — no hidden fees." },
  { q: "Do I need to leave the house during treatment?", a: "For most general pest treatments, you can stay home. For certain fumigation or intensive treatments, we may ask you to vacate for 2–4 hours. Your technician will advise you in advance." },
];

// --- Components ---

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(11,20,38,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
        transition: "all 0.3s ease",
        padding: scrolled ? "12px 0" : "20px 0",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ color: colors.ember500 }}>
            <ShieldIcon size={28} color={colors.ember500} />
          </div>
          <span style={{ fontFamily: fontDisplay, fontWeight: 800, fontSize: "1.25rem", color: colors.white, letterSpacing: "-0.02em" }}>
            Shield<span style={{ color: colors.ember400 }}>Pest</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="desktop-nav">
          {["Services", "Locations", "About", "Blog", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                fontFamily: fontBody,
                fontSize: "0.9rem",
                fontWeight: 500,
                color: "rgba(255,255,255,0.8)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = colors.white)}
              onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.8)")}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA Group */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <a
            href="tel:+610200000000"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontFamily: fontBody,
              fontSize: "0.9rem",
              fontWeight: 600,
              color: colors.white,
              textDecoration: "none",
            }}
          >
            <PhoneIcon size={16} color={colors.ember400} />
            <span className="phone-text">(02) XXXX XXXX</span>
          </a>
          <a
            href="#quote"
            style={{
              fontFamily: fontBody,
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.03em",
              color: colors.white,
              background: colors.ember500,
              padding: "10px 22px",
              borderRadius: 8,
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.background = colors.ember600)}
            onMouseLeave={(e) => (e.target.style.background = colors.ember500)}
          >
            Free Quote
          </a>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        background: `linear-gradient(160deg, ${colors.navy900} 0%, ${colors.navy800} 40%, ${colors.navy700} 100%)`,
        overflow: "hidden",
      }}
    >
      {/* Geometric pattern overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(232,99,43,0.06) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(42,79,122,0.15) 0%, transparent 50%),
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 100% 100%, 60px 60px, 60px 60px",
        }}
      />

      {/* Floating shield shapes */}
      <div style={{ position: "absolute", top: "15%", right: "10%", opacity: 0.04 }}>
        <ShieldIcon size={300} color={colors.white} />
      </div>
      <div style={{ position: "absolute", bottom: "10%", left: "5%", opacity: 0.03, transform: "rotate(-15deg)" }}>
        <ShieldIcon size={200} color={colors.ember500} />
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1280, margin: "0 auto", padding: "120px 24px 80px", width: "100%" }}>
        <div style={{ maxWidth: 720 }}>
          <FadeUp>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(232,99,43,0.12)",
                border: "1px solid rgba(232,99,43,0.25)",
                borderRadius: 100,
                padding: "6px 16px",
                marginBottom: 28,
              }}
            >
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: colors.ember400, animation: "pulse 2s infinite" }} />
              <span style={{ fontFamily: fontBody, fontSize: "0.8rem", fontWeight: 500, color: colors.ember300, letterSpacing: "0.04em" }}>
                Same-Day Service Available
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1
              style={{
                fontFamily: fontDisplay,
                fontWeight: 800,
                fontSize: "clamp(2.5rem, 5.5vw, 4.25rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                color: colors.white,
                margin: "0 0 24px",
              }}
            >
              Your Home Deserves
              <br />
              a Shield Against
              <br />
              <span style={{ color: colors.ember400 }}>Pests</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p
              style={{
                fontFamily: fontBody,
                fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)",
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.7)",
                margin: "0 0 40px",
                maxWidth: 540,
              }}
            >
              Fast, effective pest control backed by science — not guesswork.
              Licensed technicians. Transparent pricing. Guaranteed results.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
              <a
                href="#quote"
                style={{
                  fontFamily: fontBody,
                  fontWeight: 700,
                  fontSize: "1rem",
                  letterSpacing: "0.03em",
                  color: colors.white,
                  background: colors.ember500,
                  padding: "16px 36px",
                  borderRadius: 10,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  transition: "all 0.25s ease",
                  boxShadow: "0 4px 24px rgba(232,99,43,0.35)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = colors.ember600;
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 6px 32px rgba(232,99,43,0.45)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = colors.ember500;
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 24px rgba(232,99,43,0.35)";
                }}
              >
                Get a Free Quote
                <ArrowRightIcon size={18} />
              </a>
              <a
                href="tel:+610200000000"
                style={{
                  fontFamily: fontBody,
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: "rgba(255,255,255,0.85)",
                  padding: "16px 28px",
                  borderRadius: 10,
                  border: "1.5px solid rgba(255,255,255,0.2)",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <PhoneIcon size={18} color={colors.ember400} />
                Call (02) XXXX XXXX
              </a>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          opacity: 0.4,
          animation: "bobble 2s ease-in-out infinite",
        }}
      >
        <span style={{ fontFamily: fontBody, fontSize: "0.7rem", color: colors.white, letterSpacing: "0.1em", textTransform: "uppercase" }}>Scroll</span>
        <ChevronDownIcon size={18} />
      </div>
    </section>
  );
}

function TrustBar() {
  const icons = {
    star: "★",
    shield: "🛡",
    clock: "⚡",
    check: "✓",
    leaf: "🌿",
  };
  return (
    <section style={{ background: colors.white, borderBottom: `1px solid ${colors.surface200}`, padding: "20px 0" }}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "12px 36px",
        }}
      >
        {trustItems.map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 0" }}>
            <span style={{ fontSize: "1rem" }}>{icons[item.icon]}</span>
            <span style={{ fontFamily: fontBody, fontSize: "0.85rem", fontWeight: 600, color: colors.textPrimary }}>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" style={{ background: colors.surface50, padding: "clamp(64px, 10vw, 120px) 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span
              style={{
                fontFamily: fontBody,
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: colors.ember500,
                display: "block",
                marginBottom: 12,
              }}
            >
              Our Services
            </span>
            <h2
              style={{
                fontFamily: fontDisplay,
                fontWeight: 800,
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                color: colors.textPrimary,
                margin: "0 0 16px",
              }}
            >
              Targeted Solutions for Every Threat
            </h2>
            <p style={{ fontFamily: fontBody, fontSize: "1.05rem", lineHeight: 1.6, color: colors.textSecondary, maxWidth: 520, margin: "0 auto" }}>
              We don't spray and pray. Every treatment is tailored to your home, your pest, and your peace of mind.
            </p>
          </div>
        </FadeUp>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
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

function ServiceCard({ service }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: colors.white,
        borderRadius: 16,
        padding: 28,
        border: `1px solid ${hovered ? colors.ember400 : colors.surface200}`,
        boxShadow: hovered ? "0 8px 32px rgba(11,20,38,0.08)" : "0 1px 4px rgba(11,20,38,0.04)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.3s ease",
        cursor: "pointer",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 14,
          background: hovered ? colors.navy800 : colors.surface50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: hovered ? colors.ember400 : colors.navy600,
          marginBottom: 20,
          transition: "all 0.3s ease",
        }}
      >
        {pestIcons[service.icon]}
      </div>
      <h3
        style={{
          fontFamily: fontDisplay,
          fontWeight: 700,
          fontSize: "1.15rem",
          color: colors.textPrimary,
          margin: "0 0 10px",
          letterSpacing: "-0.01em",
        }}
      >
        {service.title}
      </h3>
      <p style={{ fontFamily: fontBody, fontSize: "0.9rem", lineHeight: 1.6, color: colors.textSecondary, margin: 0, flex: 1 }}>
        {service.desc}
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          marginTop: 20,
          fontFamily: fontBody,
          fontSize: "0.85rem",
          fontWeight: 600,
          color: hovered ? colors.ember500 : colors.navy600,
          transition: "color 0.3s",
        }}
      >
        Learn more
        <ArrowRightIcon size={16} />
      </div>
    </div>
  );
}

function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Inspect",
      desc: "Thorough property inspection using thermal imaging and moisture detection to identify pest species, entry points, and risk areas.",
    },
    {
      num: "02",
      title: "Treat",
      desc: "A tailored treatment plan specific to your infestation. No cookie-cutter approaches — every home gets a customized solution.",
    },
    {
      num: "03",
      title: "Protect",
      desc: "Ongoing monitoring, preventive barriers, and scheduled check-ins keep your home defended year-round.",
    },
  ];

  return (
    <section style={{ background: colors.navy900, padding: "clamp(64px, 10vw, 120px) 0", position: "relative", overflow: "hidden" }}>
      {/* Subtle texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle at 70% 30%, rgba(232,99,43,0.04) 0%, transparent 60%)",
        }}
      />

      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span
              style={{
                fontFamily: fontBody,
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: colors.ember400,
                display: "block",
                marginBottom: 12,
              }}
            >
              Our Process
            </span>
            <h2
              style={{
                fontFamily: fontDisplay,
                fontWeight: 800,
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                color: colors.white,
                margin: 0,
              }}
            >
              Three Steps to a Pest-Free Home
            </h2>
          </div>
        </FadeUp>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
          {steps.map((step, i) => (
            <FadeUp key={step.num} delay={i * 0.15}>
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 20,
                  padding: 36,
                  position: "relative",
                }}
              >
                <span
                  style={{
                    fontFamily: fontDisplay,
                    fontWeight: 800,
                    fontSize: "3.5rem",
                    color: "rgba(232,99,43,0.12)",
                    position: "absolute",
                    top: 20,
                    right: 24,
                    lineHeight: 1,
                  }}
                >
                  {step.num}
                </span>
                <div
                  style={{
                    width: 48,
                    height: 4,
                    borderRadius: 2,
                    background: colors.ember500,
                    marginBottom: 24,
                  }}
                />
                <h3
                  style={{
                    fontFamily: fontDisplay,
                    fontWeight: 700,
                    fontSize: "1.35rem",
                    color: colors.white,
                    margin: "0 0 14px",
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontFamily: fontBody, fontSize: "0.95rem", lineHeight: 1.65, color: "rgba(255,255,255,0.6)", margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section style={{ background: colors.white, padding: "clamp(64px, 10vw, 120px) 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span
              style={{
                fontFamily: fontBody,
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: colors.ember500,
                display: "block",
                marginBottom: 12,
              }}
            >
              Reviews
            </span>
            <h2
              style={{
                fontFamily: fontDisplay,
                fontWeight: 800,
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                color: colors.textPrimary,
                margin: 0,
              }}
            >
              Trusted by Sydney Homeowners
            </h2>
          </div>
        </FadeUp>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {testimonials.map((t, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div
                style={{
                  background: colors.surface50,
                  borderRadius: 20,
                  padding: 32,
                  border: `1px solid ${colors.surface200}`,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ display: "flex", gap: 3, marginBottom: 20 }}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <StarIcon key={j} />
                  ))}
                </div>
                <p
                  style={{
                    fontFamily: fontBody,
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    color: colors.textSecondary,
                    margin: "0 0 24px",
                    flex: 1,
                    fontStyle: "italic",
                  }}
                >
                  "{t.text}"
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: colors.navy800,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: fontDisplay,
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      color: colors.ember400,
                    }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontFamily: fontBody, fontWeight: 600, fontSize: "0.9rem", color: colors.textPrimary }}>{t.name}</div>
                    <div style={{ fontFamily: fontBody, fontSize: "0.8rem", color: colors.textMuted }}>{t.location}</div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" style={{ background: colors.surface50, padding: "clamp(64px, 10vw, 120px) 0" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ fontFamily: fontBody, fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: colors.ember500, display: "block", marginBottom: 12 }}>
              FAQ
            </span>
            <h2 style={{ fontFamily: fontDisplay, fontWeight: 800, fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", lineHeight: 1.15, letterSpacing: "-0.02em", color: colors.textPrimary, margin: 0 }}>
              Common Questions
            </h2>
          </div>
        </FadeUp>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map((faq, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <div
                style={{
                  background: colors.white,
                  borderRadius: 14,
                  border: `1px solid ${open === i ? colors.ember400 : colors.surface200}`,
                  overflow: "hidden",
                  transition: "border-color 0.3s",
                }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: "100%",
                    padding: "20px 24px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: fontBody,
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: colors.textPrimary,
                    textAlign: "left",
                  }}
                >
                  {faq.q}
                  <span
                    style={{
                      transform: open === i ? "rotate(180deg)" : "rotate(0)",
                      transition: "transform 0.3s",
                      color: colors.textMuted,
                      flexShrink: 0,
                      marginLeft: 16,
                    }}
                  >
                    <ChevronDownIcon size={20} />
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: open === i ? 300 : 0,
                    opacity: open === i ? 1 : 0,
                    overflow: "hidden",
                    transition: "all 0.35s ease",
                  }}
                >
                  <p style={{ fontFamily: fontBody, fontSize: "0.92rem", lineHeight: 1.7, color: colors.textSecondary, margin: 0, padding: "0 24px 20px" }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section
      id="quote"
      style={{
        background: `linear-gradient(135deg, ${colors.ember600} 0%, ${colors.ember500} 50%, ${colors.ember400} 100%)`,
        padding: "clamp(56px, 8vw, 96px) 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle at 90% 10%, rgba(255,255,255,0.08) 0%, transparent 50%)`,
        }}
      />
      <div style={{ position: "relative", maxWidth: 800, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
        <FadeUp>
          <h2
            style={{
              fontFamily: fontDisplay,
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: colors.white,
              margin: "0 0 16px",
            }}
          >
            Pests Don't Wait. Neither Should You.
          </h2>
          <p style={{ fontFamily: fontBody, fontSize: "1.1rem", lineHeight: 1.6, color: "rgba(255,255,255,0.85)", margin: "0 0 36px" }}>
            Book your free inspection today and get same-day service.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
            <a
              href="#quote-form"
              style={{
                fontFamily: fontBody,
                fontWeight: 700,
                fontSize: "1rem",
                letterSpacing: "0.03em",
                color: colors.navy900,
                background: colors.white,
                padding: "16px 40px",
                borderRadius: 10,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                transition: "all 0.25s",
                boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              Get a Free Quote
              <ArrowRightIcon size={18} color={colors.navy900} />
            </a>
            <a
              href="tel:+610200000000"
              style={{
                fontFamily: fontBody,
                fontWeight: 600,
                fontSize: "0.95rem",
                color: colors.white,
                padding: "16px 32px",
                borderRadius: 10,
                border: "2px solid rgba(255,255,255,0.4)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.8)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)")}
            >
              <PhoneIcon size={18} />
              Call (02) XXXX XXXX
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function Footer() {
  const linkGroups = [
    {
      title: "Services",
      links: ["Termite Control", "Cockroach Control", "Ant Control", "Spider Control", "Rodent Control", "Pre-Purchase Inspections"],
    },
    {
      title: "Company",
      links: ["About Us", "Our Team", "Reviews", "Blog", "Careers", "Contact"],
    },
    {
      title: "Resources",
      links: ["FAQ", "Pest Library", "Service Areas", "Free Quote", "Emergency Service"],
    },
  ];

  return (
    <footer style={{ background: colors.navy900, padding: "64px 0 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 48, paddingBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <ShieldIcon size={24} color={colors.ember500} />
              <span style={{ fontFamily: fontDisplay, fontWeight: 800, fontSize: "1.15rem", color: colors.white }}>
                Shield<span style={{ color: colors.ember400 }}>Pest</span>
              </span>
            </div>
            <p style={{ fontFamily: fontBody, fontSize: "0.85rem", lineHeight: 1.65, color: "rgba(255,255,255,0.5)", margin: "0 0 20px", maxWidth: 260 }}>
              Professional pest control services across greater Sydney. Licensed, insured, and committed to protecting your home.
            </p>
            <div style={{ fontFamily: fontBody, fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>
              Licence No: XXXXXXX
              <br />
              ABN: XX XXX XXX XXX
            </div>
          </div>

          {/* Link Groups */}
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4
                style={{
                  fontFamily: fontDisplay,
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.7)",
                  margin: "0 0 20px",
                }}
              >
                {group.title}
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {group.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    style={{
                      fontFamily: fontBody,
                      fontSize: "0.85rem",
                      color: "rgba(255,255,255,0.45)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = colors.ember400)}
                    onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.45)")}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            padding: "24px 0",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <span style={{ fontFamily: fontBody, fontSize: "0.8rem", color: "rgba(255,255,255,0.3)" }}>
            © 2025 ShieldPest. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((link) => (
              <a
                key={link}
                href="#"
                style={{ fontFamily: fontBody, fontSize: "0.8rem", color: "rgba(255,255,255,0.3)", textDecoration: "none" }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function StickyPhoneBar() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        transform: visible ? "translateY(0)" : "translateY(100%)",
        transition: "transform 0.35s ease",
      }}
    >
      {/* Desktop: minimal floating button */}
      <div
        className="sticky-bar-desktop"
        style={{
          display: "none",
          justifyContent: "flex-end",
          padding: "0 24px 24px",
        }}
      >
        <a
          href="tel:+610200000000"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: colors.ember500,
            color: colors.white,
            fontFamily: fontBody,
            fontWeight: 700,
            fontSize: "0.9rem",
            padding: "14px 28px",
            borderRadius: 12,
            textDecoration: "none",
            boxShadow: "0 8px 32px rgba(232,99,43,0.4)",
          }}
        >
          <PhoneIcon size={18} />
          Call Now
        </a>
      </div>

      {/* Mobile: full-width bar */}
      <div
        className="sticky-bar-mobile"
        style={{
          background: colors.navy900,
          borderTop: `2px solid ${colors.ember500}`,
          padding: "12px 16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 12,
        }}
      >
        <a
          href="tel:+610200000000"
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            background: colors.ember500,
            color: colors.white,
            fontFamily: fontBody,
            fontWeight: 700,
            fontSize: "0.95rem",
            padding: "14px",
            borderRadius: 10,
            textDecoration: "none",
          }}
        >
          <PhoneIcon size={18} />
          Call Now
        </a>
        <a
          href="#quote"
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            background: "transparent",
            color: colors.white,
            fontFamily: fontBody,
            fontWeight: 600,
            fontSize: "0.95rem",
            padding: "14px",
            borderRadius: 10,
            border: "1.5px solid rgba(255,255,255,0.2)",
            textDecoration: "none",
          }}
        >
          Free Quote
        </a>
      </div>
    </div>
  );
}

// --- Global Styles ---
function GlobalStyles() {
  return (
    <style>{`
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; }
      body { overflow-x: hidden; }

      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.4; }
      }

      @keyframes bobble {
        0%, 100% { transform: translateX(-50%) translateY(0); }
        50% { transform: translateX(-50%) translateY(8px); }
      }

      /* Responsive helpers */
      .desktop-nav { display: none !important; }
      .phone-text { display: none; }
      .sticky-bar-desktop { display: none !important; }
      .sticky-bar-mobile { display: flex !important; }

      @media (min-width: 768px) {
        .phone-text { display: inline; }
      }

      @media (min-width: 1024px) {
        .desktop-nav { display: flex !important; }
        .sticky-bar-desktop { display: flex !important; }
        .sticky-bar-mobile { display: none !important; }
      }
    `}</style>
  );
}

// --- Main App ---
export default function ShieldPestHomepage() {
  return (
    <div style={{ fontFamily: fontBody, color: colors.textPrimary }}>
      <GlobalStyles />
      <Header />
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <CTABanner />
      <Footer />
      <StickyPhoneBar />
    </div>
  );
}
