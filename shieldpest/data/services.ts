export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  heroLead: string;
  icon: string;
  image: string;
  cardDescription: string;
}

export const services: Service[] = [
  {
    slug: 'termite-control',
    title: 'Termite Control & Treatment',
    shortTitle: 'Termites',
    metaTitle: 'Termite Control & Treatment Services | ShieldPest Sydney',
    metaDescription: 'Professional termite detection, treatment, and prevention. Chemical barriers, baiting systems, and thermal inspections. Licensed & insured. Free quotes.',
    heroLead: 'Termites cause more damage to Australian homes than fire, flood, and storms combined. Our detection and treatment systems stop them before the damage spreads.',
    icon: 'termite',
    image: '/images/services/termite_service.png',
    cardDescription: 'Detect, treat, and prevent termite damage before it costs you thousands.',
  },
  {
    slug: 'cockroach-control',
    title: 'Cockroach Control & Extermination',
    shortTitle: 'Cockroaches',
    metaTitle: 'Cockroach Control & Extermination | ShieldPest Sydney',
    metaDescription: 'Eliminate cockroach infestations with targeted baiting and barrier treatments. Safe for families. Same-day service available.',
    heroLead: 'Cockroaches breed fast and hide well. Our targeted approach eliminates colonies at the source — not just the ones you can see.',
    icon: 'cockroach',
    image: '/images/services/cockroach_service.png',
    cardDescription: 'Eliminate cockroach colonies at the source with targeted baiting and barrier treatments.',
  },
  {
    slug: 'ant-control',
    title: 'Ant Control & Nest Elimination',
    shortTitle: 'Ants',
    metaTitle: 'Ant Control & Nest Elimination | ShieldPest Sydney',
    metaDescription: 'Professional ant control that targets nests, not just trails. Precision baiting and barrier treatments for lasting results.',
    heroLead: 'Ant trails are a symptom. The real problem is the nest. We find and eliminate the colony so they stop coming back.',
    icon: 'ant',
    image: '/images/services/ant_service.png',
    cardDescription: 'Stop ant trails and destroy nests with precision treatments that last.',
  },
  {
    slug: 'spider-control',
    title: 'Spider Control & Removal',
    shortTitle: 'Spiders',
    metaTitle: 'Spider Control & Removal Services | ShieldPest Sydney',
    metaDescription: 'Safe spider removal including redbacks and funnel-webs. Web clearance and barrier treatments for homes and businesses.',
    heroLead: 'Australia is home to some of the world\'s most dangerous spiders. We remove them safely and create barriers to keep them out.',
    icon: 'spider',
    image: '/images/services/spider_service.png',
    cardDescription: 'Remove dangerous spiders and web infestations safely from your home.',
  },
  {
    slug: 'rodent-control',
    title: 'Rat & Mouse Control',
    shortTitle: 'Rodents',
    metaTitle: 'Rat & Mouse Control Services | ShieldPest Sydney',
    metaDescription: 'Professional rodent control — entry point sealing, strategic trapping, and baiting. Safe for families and pets.',
    heroLead: 'Rodents contaminate food, gnaw through wiring, and breed rapidly. We seal their entry, remove the population, and prevent their return.',
    icon: 'rodent',
    image: '/images/services/rodent_service.png',
    cardDescription: 'Seal entry points, set strategic traps, and remove rats and mice for good.',
  },
  {
    slug: 'bed-bug-treatment',
    title: 'Bed Bug Detection & Treatment',
    shortTitle: 'Bed Bugs',
    metaTitle: 'Bed Bug Treatment & Removal | ShieldPest Sydney',
    metaDescription: 'Comprehensive bed bug elimination using heat and chemical treatments. Every life stage targeted. Discreet, effective service.',
    heroLead: 'Bed bugs are hitchhikers — once they\'re in, they\'re hard to remove without professional treatment targeting every life stage.',
    icon: 'bedbug',
    image: '/images/services/bedbug_service.png',
    cardDescription: 'Heat and chemical treatments that eliminate bed bugs at every life stage.',
  },
  {
    slug: 'flea-tick-control',
    title: 'Flea & Tick Control',
    shortTitle: 'Fleas & Ticks',
    metaTitle: 'Flea & Tick Control Services | ShieldPest Sydney',
    metaDescription: 'Thorough flea and tick eradication for homes and yards. Safe for families and pets. Fast-acting treatments.',
    heroLead: 'Fleas and ticks don\'t just affect pets — they infest carpets, bedding, and yards. Our treatments break the breeding cycle for good.',
    icon: 'flea',
    image: '/images/services/flea_service.png',
    cardDescription: 'Protect your family and pets with thorough flea and tick eradication.',
  },
  {
    slug: 'wasp-bee-removal',
    title: 'Wasp & Bee Nest Removal',
    shortTitle: 'Wasps & Bees',
    metaTitle: 'Wasp & Bee Removal Services | ShieldPest Sydney',
    metaDescription: 'Licensed wasp nest and bee hive removal. Safe, professional service for homes and businesses. Same-day emergency service.',
    heroLead: 'Wasp and bee nests near your home are a serious sting risk. Our licensed technicians remove them safely — including hard-to-reach locations.',
    icon: 'wasp',
    image: '/images/services/wasp_service.png',
    cardDescription: 'Safe removal of wasp nests and bee hives by licensed professionals.',
  },
  {
    slug: 'possum-removal',
    title: 'Possum Removal & Proofing',
    shortTitle: 'Possums',
    metaTitle: 'Possum Removal & Roof Proofing | ShieldPest Sydney',
    metaDescription: 'Humane possum removal and entry-point sealing. Licensed wildlife handlers. Compliant with NSW regulations.',
    heroLead: 'Possums in your roof cause noise, damage, and mess. We remove them humanely and seal every entry point so they can\'t return.',
    icon: 'possum',
    image: '/images/services/possum_service.png',
    cardDescription: 'Humane possum removal and entry-point sealing to keep them out.',
  },
  {
    slug: 'pre-purchase-inspections',
    title: 'Pre-Purchase Pest & Termite Inspections',
    shortTitle: 'Inspections',
    metaTitle: 'Pre-Purchase Pest & Termite Inspections | ShieldPest Sydney',
    metaDescription: 'Comprehensive pest and termite inspections with detailed, lender-ready reports. Thermal imaging included. Book online.',
    heroLead: 'Don\'t buy a home with hidden pest damage. Our detailed inspections use thermal imaging and moisture detection to reveal what\'s invisible to the eye.',
    icon: 'inspection',
    image: '/images/services/inspection_service.webp',
    cardDescription: 'Comprehensive pest and termite inspections with detailed, lender-ready reports.',
  },
];
