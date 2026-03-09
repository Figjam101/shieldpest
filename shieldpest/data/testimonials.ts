export interface Testimonial {
  text: string;
  name: string;
  location: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
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
  {
    text: "Prompt, professional, and reasonably priced. They even followed up a week later to check everything was still clear. That level of care is rare these days.",
    name: "Michael T.",
    location: "Penrith",
    rating: 5,
  },
  {
    text: "We manage 12 rental properties and ShieldPest handles all our pest control. Reliable scheduling, clean reports for landlords, and never a complaint from tenants.",
    name: "Jenny L.",
    location: "Liverpool",
    rating: 5,
  },
];
