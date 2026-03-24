export interface ServiceProvider {
  name: string
  category: ServiceCategory
  countriesServed: string[]
  priceRange: '$' | '$$' | '$$$'
  website: string
  description: string
  starRating: number | null
}

export type ServiceCategory =
  | 'Immigration Lawyers'
  | 'Tax Advisors'
  | 'Relocation Services'
  | 'International Moving'
  | 'Health Insurance'
  | 'Pet Relocation'

export const serviceCategories: { name: ServiceCategory; icon: string; description: string }[] = [
  { name: 'Immigration Lawyers', icon: 'Scale', description: 'Visa applications, residency permits, and citizenship pathways' },
  { name: 'Tax Advisors', icon: 'Calculator', description: 'US expat tax compliance, FEIE, FBAR, and treaty benefits' },
  { name: 'Relocation Services', icon: 'MapPin', description: 'End-to-end relocation assistance and settling-in support' },
  { name: 'International Moving', icon: 'Truck', description: 'Shipping household goods and personal belongings overseas' },
  { name: 'Health Insurance', icon: 'Heart', description: 'Global health coverage designed for expats and digital nomads' },
  { name: 'Pet Relocation', icon: 'PawPrint', description: 'Safe international transport for your pets' },
]

export const services: ServiceProvider[] = [
  // ─── Immigration Lawyers ───────────────────────────────────────────────
  {
    name: 'Immigram',
    category: 'Immigration Lawyers',
    countriesServed: ['Global'],
    priceRange: '$$',
    website: 'https://immigram.io',
    description: 'AI-powered immigration platform for skilled professionals seeking work permits and residency in top destinations.',
    starRating: null,
  },
  {
    name: 'Legalpad',
    category: 'Immigration Lawyers',
    countriesServed: ['Global'],
    priceRange: '$$$',
    website: 'https://legalpad.io',
    description: 'Full-service immigration for startups and remote workers, covering visa sponsorship and compliance.',
    starRating: null,
  },
  {
    name: 'VisaHQ',
    category: 'Immigration Lawyers',
    countriesServed: ['Global'],
    priceRange: '$',
    website: 'https://visahq.com',
    description: 'Visa processing and legalization services for 200+ countries with online application tracking.',
    starRating: null,
  },
  {
    name: 'Fragomen',
    category: 'Immigration Lawyers',
    countriesServed: ['Global'],
    priceRange: '$$$',
    website: 'https://fragomen.com',
    description: "World's largest immigration law firm providing corporate and individual immigration services across 170+ countries.",
    starRating: null,
  },
  {
    name: 'Boundless',
    category: 'Immigration Lawyers',
    countriesServed: ['United States'],
    priceRange: '$$',
    website: 'https://boundless.com',
    description: 'Streamlined US immigration and visa applications with independent attorney review and government fee transparency.',
    starRating: null,
  },

  // ─── Tax Advisors ─────────────────────────────────────────────────────
  {
    name: 'Bright!Tax',
    category: 'Tax Advisors',
    countriesServed: ['Global'],
    priceRange: '$$',
    website: 'https://brighttax.com',
    description: 'US expat tax preparation with CPAs who specialize in Americans abroad, covering FEIE, FBAR, and FATCA compliance.',
    starRating: null,
  },
  {
    name: 'Greenback Expat Tax Services',
    category: 'Tax Advisors',
    countriesServed: ['Global'],
    priceRange: '$$',
    website: 'https://greenbacktaxservices.com',
    description: 'Expat tax returns starting at $350 with a dedicated CPA for each client and a flat-fee pricing model.',
    starRating: null,
  },
  {
    name: 'US Tax Help',
    category: 'Tax Advisors',
    countriesServed: ['Global'],
    priceRange: '$',
    website: 'https://ustaxhelp.com',
    description: 'Affordable US tax filing for Americans living overseas, including streamlined filing procedures for delinquent returns.',
    starRating: null,
  },
  {
    name: 'H&R Block Expat Tax',
    category: 'Tax Advisors',
    countriesServed: ['Global'],
    priceRange: '$$',
    website: 'https://hrblock.com/expat-tax-preparation',
    description: 'Major brand with a dedicated expat tax team offering virtual tax prep for Americans filing from abroad.',
    starRating: null,
  },
  {
    name: 'Taxes for Expats',
    category: 'Tax Advisors',
    countriesServed: ['Global'],
    priceRange: '$$',
    website: 'https://taxesforexpats.com',
    description: 'CPA firm specializing in US expat tax returns since 2002, with expertise in treaty benefits and foreign tax credits.',
    starRating: null,
  },

  // ─── Relocation Services ──────────────────────────────────────────────
  {
    name: 'Jobbatical',
    category: 'Relocation Services',
    countriesServed: ['Europe'],
    priceRange: '$$',
    website: 'https://jobbatical.com',
    description: 'Relocation and immigration platform for Europe, handling work permits, visa applications, and settling-in services.',
    starRating: null,
  },
  {
    name: 'Relocate.me',
    category: 'Relocation Services',
    countriesServed: ['Global'],
    priceRange: '$$',
    website: 'https://relocate.me',
    description: 'Tech job relocation platform connecting developers and engineers with companies that sponsor international moves.',
    starRating: null,
  },
  {
    name: 'Crown Relocations',
    category: 'Relocation Services',
    countriesServed: ['Global'],
    priceRange: '$$$',
    website: 'https://crownrelo.com',
    description: 'Full-service corporate and personal relocation with destination services, home search, and cultural training.',
    starRating: null,
  },
  {
    name: 'SIRVA',
    category: 'Relocation Services',
    countriesServed: ['Global'],
    priceRange: '$$$',
    website: 'https://sirva.com',
    description: 'Global relocation and moving services offering end-to-end mobility solutions for individuals and corporations.',
    starRating: null,
  },

  // ─── International Moving ─────────────────────────────────────────────
  {
    name: 'International Van Lines',
    category: 'International Moving',
    countriesServed: ['Global'],
    priceRange: '$$',
    website: 'https://internationalvanlines.com',
    description: 'Rated #1 international mover with door-to-door service, customs clearance, and ocean and air freight options.',
    starRating: null,
  },
  {
    name: 'Allied International',
    category: 'International Moving',
    countriesServed: ['Global'],
    priceRange: '$$$',
    website: 'https://allied.com',
    description: 'Full-service international household goods shipping with packing, crating, and destination delivery.',
    starRating: null,
  },
  {
    name: 'AGS Movers',
    category: 'International Moving',
    countriesServed: ['Global'],
    priceRange: '$$',
    website: 'https://agsmovers.com',
    description: 'International removals operating in 146 countries with personalized moving plans and real-time shipment tracking.',
    starRating: null,
  },
  {
    name: '1st Move International',
    category: 'International Moving',
    countriesServed: ['Global'],
    priceRange: '$',
    website: 'https://1stmoveinternational.co.uk',
    description: 'Budget-friendly international shipping specializing in smaller loads and shared container services.',
    starRating: null,
  },

  // ─── Health Insurance ─────────────────────────────────────────────────
  {
    name: 'SafetyWing',
    category: 'Health Insurance',
    countriesServed: ['Global'],
    priceRange: '$',
    website: 'https://safetywing.com',
    description: 'Affordable nomad health insurance starting at $45/month with worldwide coverage and no long-term commitment.',
    starRating: null,
  },
  {
    name: 'Cigna Global',
    category: 'Health Insurance',
    countriesServed: ['Global'],
    priceRange: '$$$',
    website: 'https://cigna.com/global',
    description: 'Comprehensive international health plans with access to over 1.65 million medical professionals worldwide.',
    starRating: null,
  },
  {
    name: 'Allianz Care',
    category: 'Health Insurance',
    countriesServed: ['Global'],
    priceRange: '$$',
    website: 'https://allianzcare.com',
    description: 'International health insurance with global coverage, modular plan options, and multilingual customer support.',
    starRating: null,
  },
  {
    name: 'Aetna International',
    category: 'Health Insurance',
    countriesServed: ['Global'],
    priceRange: '$$$',
    website: 'https://aetnainternational.com',
    description: 'Premium global health plans with extensive provider networks, wellness programs, and 24/7 member support.',
    starRating: null,
  },
  {
    name: 'World Nomads',
    category: 'Health Insurance',
    countriesServed: ['Global'],
    priceRange: '$',
    website: 'https://worldnomads.com',
    description: 'Travel insurance for adventurous travelers covering medical emergencies, trip cancellation, and gear protection.',
    starRating: null,
  },

  // ─── Pet Relocation ───────────────────────────────────────────────────
  {
    name: 'PetRelocation.com',
    category: 'Pet Relocation',
    countriesServed: ['Global'],
    priceRange: '$$$',
    website: 'https://petrelocation.com',
    description: 'Full-service international pet transport handling flights, paperwork, customs, and door-to-door delivery.',
    starRating: null,
  },
  {
    name: 'Airpets International',
    category: 'Pet Relocation',
    countriesServed: ['Global'],
    priceRange: '$$',
    website: 'https://airpets.com',
    description: 'Pet shipping specialists since 1972 with expertise in airline regulations and country-specific import requirements.',
    starRating: null,
  },
  {
    name: 'Happy Tails Travel',
    category: 'Pet Relocation',
    countriesServed: ['Global'],
    priceRange: '$$',
    website: 'https://happytailstravel.com',
    description: 'Pet transport with personal care, offering ground and air options with real-time updates throughout the journey.',
    starRating: null,
  },
  {
    name: 'CitizenShipper',
    category: 'Pet Relocation',
    countriesServed: ['United States', 'Global'],
    priceRange: '$',
    website: 'https://citizenshipper.com',
    description: 'Affordable pet transport marketplace connecting pet owners with vetted, independent drivers and transporters.',
    starRating: null,
  },
]
