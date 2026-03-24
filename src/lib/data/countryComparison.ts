export interface ComparisonData {
  slug: string;
  name: string;
  flag: string;
  monthlyCost: {
    single: number;
    couple: number;
    family: number;
  };
  visaSummary: {
    type: string;
    incomeRequirement: string;
    duration: string;
    pathToResidency: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
  }[];
  safetyRating: number;
  internetSpeed: number;
  englishFriendliness: number;
  healthcareQuality: number;
  climateSummary: string;
  timezoneVsET: string;
  directFlights: {
    fromJFK: boolean;
    fromLAX: boolean;
    fromMIA: boolean;
    fromORD: boolean;
  };
  pros: string[];
  cons: string[];
}

export const comparisonData: ComparisonData[] = [
  {
    slug: 'portugal',
    name: 'Portugal',
    flag: '🇵🇹',
    monthlyCost: {
      single: 1800,
      couple: 2600,
      family: 3500,
    },
    visaSummary: [
      {
        type: 'D7 Passive Income Visa',
        incomeRequirement: '€760/month (minimum wage)',
        duration: '2 years, renewable',
        pathToResidency: 'Permanent residency after 5 years; citizenship after 5 years',
        difficulty: 'Medium',
      },
      {
        type: 'Digital Nomad Visa (D8)',
        incomeRequirement: '€3,040/month (4x minimum wage)',
        duration: '1 year, renewable up to 5 years',
        pathToResidency: 'Can transition to D7 or apply for permanent residency after 5 years',
        difficulty: 'Easy',
      },
      {
        type: 'Golden Visa (Investment)',
        incomeRequirement: '€500,000 fund investment or €250,000+ cultural/research contribution',
        duration: '2 years, renewable',
        pathToResidency: 'Permanent residency after 5 years with minimal stay requirement (7 days/year)',
        difficulty: 'Easy',
      },
      {
        type: 'Tech Visa',
        incomeRequirement: 'Job offer from certified Portuguese tech company',
        duration: '2 years, renewable',
        pathToResidency: 'Permanent residency after 5 years',
        difficulty: 'Medium',
      },
    ],
    safetyRating: 9,
    internetSpeed: 188,
    englishFriendliness: 7,
    healthcareQuality: 8,
    climateSummary:
      'Mediterranean climate with mild, wet winters (8–15°C) and hot, dry summers (25–35°C). Lisbon averages 300 sunny days per year. The Algarve coast is warmer year-round.',
    timezoneVsET: '+5 hours',
    directFlights: {
      fromJFK: true,
      fromLAX: false,
      fromMIA: true,
      fromORD: false,
    },
    pros: [
      'One of the safest countries in the world (Global Peace Index top 10)',
      'NHR tax regime offers 20% flat rate on Portuguese-sourced income for 10 years',
      'Excellent public healthcare system available to residents at low cost',
      'Thriving digital nomad community in Lisbon, Porto, and the Algarve',
      'English widely spoken in urban areas, especially among younger generations',
    ],
    cons: [
      'Lisbon and Porto housing costs have risen sharply due to tourism and foreign demand',
      'Bureaucracy is notoriously slow — expect weeks-to-months for government paperwork',
      'Salaries for local jobs are among the lowest in Western Europe',
      'Winter months can feel isolating in smaller towns with limited social activity',
      'Non-habitual resident tax status is being phased out for new applicants',
    ],
  },
  {
    slug: 'mexico',
    name: 'Mexico',
    flag: '🇲🇽',
    monthlyCost: {
      single: 1200,
      couple: 1800,
      family: 2500,
    },
    visaSummary: [
      {
        type: 'Temporary Resident Visa',
        incomeRequirement: '~$2,500/month or $42,000 in savings (12-month average)',
        duration: '1–4 years',
        pathToResidency: 'Permanent residency after 4 years on temporary status',
        difficulty: 'Medium',
      },
      {
        type: 'Tourist Visa (FMM)',
        incomeRequirement: 'None',
        duration: 'Up to 180 days',
        pathToResidency: 'No direct path; must apply for temporary residency separately',
        difficulty: 'Easy',
      },
      {
        type: 'Permanent Resident Visa',
        incomeRequirement: '~$4,200/month or $175,000 in investments',
        duration: 'Indefinite',
        pathToResidency: 'Immediate permanent residency; citizenship after 5 years',
        difficulty: 'Hard',
      },
      {
        type: 'Work Visa (sponsored)',
        incomeRequirement: 'Job offer from Mexican employer',
        duration: '1–4 years',
        pathToResidency: 'Permanent residency after 4 years',
        difficulty: 'Hard',
      },
    ],
    safetyRating: 5,
    internetSpeed: 45,
    englishFriendliness: 5,
    healthcareQuality: 6,
    climateSummary:
      'Varies dramatically by region. Mexico City has spring-like weather year-round (15–25°C). Coastal areas like Playa del Carmen are tropical (25–35°C). Rainy season runs June–October.',
    timezoneVsET: '-1 hour (CT) / -2 hours (MT)',
    directFlights: {
      fromJFK: true,
      fromLAX: true,
      fromMIA: true,
      fromORD: true,
    },
    pros: [
      'Very low cost of living — comfortable lifestyle on $1,200–1,500/month in many cities',
      'Close proximity to the US with abundant direct flights and same-day travel',
      'No visa required for stays up to 180 days, making trial relocations easy',
      'Rich food culture and vibrant social scene with large expat communities in CDMX, Oaxaca, and Playa',
      'Favorable time zones for working with US-based clients and teams',
    ],
    cons: [
      'Safety varies significantly by region — some areas have high crime rates requiring careful research',
      'Internet can be unreliable outside major cities, averaging only 45 Mbps nationally',
      'Working remotely on a tourist visa exists in a legal gray area with no formal digital nomad visa',
      'Air pollution in Mexico City can be severe, especially during dry season (Nov–May)',
      'Tap water is not drinkable — bottled or filtered water is a constant necessity',
    ],
  },
  {
    slug: 'spain',
    name: 'Spain',
    flag: '🇪🇸',
    monthlyCost: {
      single: 2200,
      couple: 3000,
      family: 4000,
    },
    visaSummary: [
      {
        type: 'Digital Nomad Visa',
        incomeRequirement: '€2,520/month (200% of Spain minimum wage)',
        duration: '1 year, renewable up to 3 years',
        pathToResidency: 'Can apply for residency after 5 years of legal stay',
        difficulty: 'Easy',
      },
      {
        type: 'Non-Lucrative Visa',
        incomeRequirement: '€2,400/month or €28,800/year in savings',
        duration: '1 year, renewable annually',
        pathToResidency: 'Permanent residency after 5 years; no work permitted in Spain',
        difficulty: 'Medium',
      },
      {
        type: 'Autonomous Worker Visa (Autónomo)',
        incomeRequirement: 'Business plan + proof of sufficient funds (~€25,000+)',
        duration: '1 year, renewable',
        pathToResidency: 'Permanent residency after 5 years; citizenship after 10 years',
        difficulty: 'Hard',
      },
      {
        type: 'Golden Visa (Investment)',
        incomeRequirement: '€500,000 real estate investment',
        duration: '2 years, renewable',
        pathToResidency: 'Permanent residency after 5 years with minimal stay; being phased out for real estate',
        difficulty: 'Medium',
      },
    ],
    safetyRating: 8,
    internetSpeed: 195,
    englishFriendliness: 5,
    healthcareQuality: 9,
    climateSummary:
      'Mediterranean along the coasts (hot dry summers 30–40°C, mild winters 10–15°C). Central Spain has a continental climate with cold winters. Southern Andalusia is the warmest region year-round.',
    timezoneVsET: '+6 hours',
    directFlights: {
      fromJFK: true,
      fromLAX: true,
      fromMIA: true,
      fromORD: true,
    },
    pros: [
      'World-class public healthcare system — ranked among the top 10 globally',
      'New digital nomad visa with a favorable 15% flat tax rate for the first 4 years',
      'Excellent high-speed rail (AVE) connecting major cities in under 3 hours',
      'Unmatched quality of life with late dining culture, siestas, and 300+ sunny days in the south',
      'Fast and reliable fiber internet (195 Mbps average) widely available even in smaller cities',
    ],
    cons: [
      'English proficiency is limited outside tourist areas — basic Spanish is essential for daily life',
      'Bureaucracy (the dreaded "tramites") is slow and often requires in-person appointments',
      'Higher cost of living than Portugal, especially in Barcelona and Madrid',
      'The autonomo (self-employed) social security contribution starts at ~€300/month regardless of income',
      'Rental market is extremely competitive in Barcelona and Madrid with months-long searches',
    ],
  },
  {
    slug: 'thailand',
    name: 'Thailand',
    flag: '🇹🇭',
    monthlyCost: {
      single: 1000,
      couple: 1500,
      family: 2200,
    },
    visaSummary: [
      {
        type: 'Long-Term Resident (LTR) Visa',
        incomeRequirement: '$80,000/year income or $250,000 in investments',
        duration: '10 years',
        pathToResidency: 'Renewable 10-year visa; no formal permanent residency path through LTR',
        difficulty: 'Hard',
      },
      {
        type: 'SMART Visa (for skilled professionals)',
        incomeRequirement: 'Job offer or investment in targeted industries; salary ≥200,000 THB/month',
        duration: 'Up to 4 years',
        pathToResidency: 'No direct path; must qualify for separate permanent residency',
        difficulty: 'Hard',
      },
      {
        type: 'Tourist Visa',
        incomeRequirement: 'None (proof of funds ~20,000 THB recommended)',
        duration: '60 days, extendable by 30 days',
        pathToResidency: 'No path to residency',
        difficulty: 'Easy',
      },
      {
        type: 'Thailand Elite Visa',
        incomeRequirement: '600,000–2,000,000 THB one-time fee (no income requirement)',
        duration: '5–20 years depending on tier',
        pathToResidency: 'Long-term stay but no formal residency; renewable membership program',
        difficulty: 'Easy',
      },
    ],
    safetyRating: 7,
    internetSpeed: 225,
    englishFriendliness: 4,
    healthcareQuality: 7,
    climateSummary:
      'Tropical climate year-round (25–35°C). Three seasons: hot (Mar–May), rainy (Jun–Oct), and cool (Nov–Feb). Humidity is consistently high. Chiang Mai is cooler than Bangkok and the islands.',
    timezoneVsET: '+12 hours',
    directFlights: {
      fromJFK: false,
      fromLAX: true,
      fromMIA: false,
      fromORD: false,
    },
    pros: [
      'Extremely low cost of living — full meals for $1–3, comfortable apartments for $300–500/month',
      'Surprisingly fast internet (225 Mbps average) with excellent coworking spaces in Bangkok and Chiang Mai',
      'World-renowned street food culture and diverse cuisine at rock-bottom prices',
      'Private hospitals like Bumrungrad are internationally accredited with care at a fraction of US costs',
      'Huge established digital nomad community with regular meetups and networking events',
    ],
    cons: [
      'No straightforward digital nomad visa — most remote workers operate in a legal gray area on tourist visas',
      'Language barrier is significant outside tourist zones; Thai script is difficult to learn',
      '12-hour time difference from US East Coast makes synchronous work with US teams very challenging',
      'Extreme heat and humidity (35°C+ with 80%+ humidity) can be physically draining for months at a time',
      'Air quality in Chiang Mai is hazardous during burning season (Feb–Apr) with AQI regularly exceeding 200',
    ],
  },
  {
    slug: 'costa-rica',
    name: 'Costa Rica',
    flag: '🇨🇷',
    monthlyCost: {
      single: 1500,
      couple: 2200,
      family: 3000,
    },
    visaSummary: [
      {
        type: 'Digital Nomad Visa (Rentista Digital)',
        incomeRequirement: '$3,000/month or $60,000 annual income',
        duration: '1 year, renewable for 1 additional year',
        pathToResidency: 'No direct path; must apply for separate residency category',
        difficulty: 'Easy',
      },
      {
        type: 'Rentista Visa (Passive Income)',
        incomeRequirement: '$2,500/month guaranteed income for 2 years',
        duration: '2 years, renewable',
        pathToResidency: 'Permanent residency after 3 years; citizenship after 7 years',
        difficulty: 'Medium',
      },
      {
        type: 'Pensionado Visa',
        incomeRequirement: '$1,000/month pension income',
        duration: '2 years, renewable',
        pathToResidency: 'Permanent residency after 3 years',
        difficulty: 'Easy',
      },
      {
        type: 'Inversionista Visa (Investor)',
        incomeRequirement: '$150,000 investment in Costa Rican business or real estate',
        duration: '2 years, renewable',
        pathToResidency: 'Permanent residency after 3 years; citizenship after 7 years',
        difficulty: 'Medium',
      },
    ],
    safetyRating: 6,
    internetSpeed: 50,
    englishFriendliness: 5,
    healthcareQuality: 7,
    climateSummary:
      'Tropical with two seasons: dry (Dec–Apr) and green/rainy (May–Nov). Central Valley (San José area) stays 20–28°C year-round. Coastal areas are hotter and more humid (28–35°C).',
    timezoneVsET: '-1 hour',
    directFlights: {
      fromJFK: true,
      fromLAX: true,
      fromMIA: true,
      fromORD: true,
    },
    pros: [
      'One of the most stable democracies in Latin America with no standing army since 1948',
      'Excellent digital nomad visa with straightforward $3,000/month income requirement',
      'Abundant nature and biodiversity — 5% of the world\'s species in a country the size of West Virginia',
      'Convenient time zone (ET-1) for working with US and Canadian teams',
      'Universal public healthcare (CCSS/Caja) available to legal residents at ~$50–100/month',
    ],
    cons: [
      'Internet outside the Central Valley is slow and unreliable, with national average around 50 Mbps',
      'Higher cost of living than other Central American countries — imported goods carry steep markups',
      'Petty theft and car break-ins are common, especially in tourist areas and San José',
      'Driving infrastructure is poor with potholed roads, confusing signage, and aggressive drivers',
      'Rainy season (May–Nov) brings daily downpours that can cause flooding and road closures',
    ],
  },
];
