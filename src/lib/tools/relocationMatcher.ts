// ─────────────────────────────────────────────────────────────
// Relocation Matching Algorithm
// Scores 5 target countries against user inputs from a 10-step
// relocation wizard and returns the top 3 matches.
// ─────────────────────────────────────────────────────────────

// ── Types ────────────────────────────────────────────────────

export interface RelocationInputs {
  citizenship: string
  ageRange: '18-29' | '30-39' | '40-49' | '50-59' | '60+'
  employmentType: 'remote' | 'freelancer' | 'business-owner' | 'retired' | 'student' | 'unemployed'
  monthlyIncome: number // USD
  savings: '<5k' | '5-15k' | '15-30k' | '30-50k' | '50k+'
  family: 'solo' | 'partner' | 'partner-1kid' | 'partner-2kids'
  climate: 'tropical' | 'mediterranean' | 'urban' | 'no-preference'
  priorities: string[] // ordered array of 3 priorities from: cost, safety, internet, english, residency, healthcare, nightlife, nature
  timeline: '1-3months' | '3-6months' | '6-12months' | 'exploring'
  dealBreakers: string[] // from: pets, vehicle, healthcare, direct-flights, intl-school, none
}

export interface CountryProfile {
  slug: string
  name: string
  flag: string
  climate: 'tropical' | 'mediterranean' | 'urban'
  scores: {
    cost: number
    safety: number
    internet: number
    english: number
    residency: number
    healthcare: number
    nightlife: number
    nature: number
  }
  petFriendly: boolean
  directFlightsUS: boolean
  intlSchools: boolean
  vehicleImport: boolean
  avgMonthlyCost: { solo: number; couple: number; family: number }
  estimatedMoveCost: { solo: number; couple: number; family: number }
  visaProcessingMonths: number
  recommendedVisa: Record<string, { name: string; requirements: string; minIncome?: number }>
  strengths: string[]
  risks: string[]
  weekByWeekPlan: string[]
}

export interface RelocationResult {
  country: CountryProfile
  matchScore: number // 0-100
  matchReasons: string[]
  recommendedVisa: { name: string; requirements: string }
  estimatedMoveCost: number
  estimatedMonthlyCost: number
  timeline: string[]
  risks: string[]
}

// ── Helpers ──────────────────────────────────────────────────

export function savingsToNumber(savings: RelocationInputs['savings']): number {
  switch (savings) {
    case '<5k':
      return 3000
    case '5-15k':
      return 10000
    case '15-30k':
      return 22500
    case '30-50k':
      return 40000
    case '50k+':
      return 65000
  }
}

export function familySize(family: RelocationInputs['family']): 'solo' | 'couple' | 'family' {
  switch (family) {
    case 'solo':
      return 'solo'
    case 'partner':
      return 'couple'
    case 'partner-1kid':
    case 'partner-2kids':
      return 'family'
  }
}

function timelineToMonths(timeline: RelocationInputs['timeline']): number {
  switch (timeline) {
    case '1-3months':
      return 2
    case '3-6months':
      return 4.5
    case '6-12months':
      return 9
    case 'exploring':
      return 12
  }
}

function hasFamily(family: RelocationInputs['family']): boolean {
  return family === 'partner-1kid' || family === 'partner-2kids'
}

// ── Country Profiles ─────────────────────────────────────────

const COUNTRIES: CountryProfile[] = [
  // ── Portugal ───────────────────────────────────────────────
  {
    slug: 'portugal',
    name: 'Portugal',
    flag: '🇵🇹',
    climate: 'mediterranean',
    scores: {
      cost: 6,
      safety: 8,
      internet: 7,
      english: 7,
      residency: 8,
      healthcare: 8,
      nightlife: 7,
      nature: 7,
    },
    petFriendly: true,
    directFlightsUS: true,
    intlSchools: true,
    vehicleImport: false,
    avgMonthlyCost: { solo: 1800, couple: 2500, family: 3200 },
    estimatedMoveCost: { solo: 4000, couple: 6000, family: 8000 },
    visaProcessingMonths: 3,
    recommendedVisa: {
      remote: {
        name: 'D7 Passive Income Visa',
        requirements: 'Proof of regular remote income (min ~€760/month), clean criminal record, health insurance, Portuguese tax number (NIF)',
        minIncome: 850,
      },
      freelancer: {
        name: 'D8 Digital Nomad Visa',
        requirements: 'Proof of freelance income (min €3,040/month), active contract or client invoices, health insurance, NIF',
        minIncome: 3040,
      },
      'business-owner': {
        name: 'D7 Passive Income Visa',
        requirements: 'Evidence of business income, proof of stable revenue, clean criminal record, health insurance, NIF',
        minIncome: 850,
      },
      retired: {
        name: 'D7 Passive Income Visa',
        requirements: 'Proof of pension or passive income (min ~€760/month), health insurance, clean criminal record, NIF',
        minIncome: 850,
      },
      student: {
        name: 'Student Visa (D4)',
        requirements: 'Acceptance letter from a Portuguese institution, proof of funds (~€760/month), health insurance, clean criminal record',
      },
    },
    strengths: [
      'One of the easiest residency pathways in Europe with the D7 visa and path to EU citizenship in 5 years',
      'Excellent public healthcare system (SNS) ranked among the top in Western Europe',
      'Strong English proficiency in cities like Lisbon and Porto, with a thriving digital nomad community',
    ],
    risks: [
      'Housing costs in Lisbon and Porto have risen sharply; affordable rentals require looking outside city centers',
      'Bureaucracy can be slow—expect delays at SEF (immigration) and when opening bank accounts',
      'Non-Habitual Resident tax regime changes may affect future tax benefits for new arrivals',
    ],
    weekByWeekPlan: [
      'Weeks 1-2: Research visa requirements and gather documents (income proof, criminal record, health insurance)',
      'Week 3: Apply for a Portuguese NIF (tax number) online or through a fiscal representative',
      'Week 4: Submit D7/D8 visa application at your local Portuguese consulate',
      'Weeks 5-8: Wait for visa approval; begin remote apartment search on Idealista or Uniplaces',
      'Week 9: Book flights and arrange temporary accommodation for first 2 weeks',
      'Week 10: Arrive in Portugal; register at local Junta de Freguesia (parish council)',
      'Week 11: Open a Portuguese bank account (Millennium BCP, ActivoBank, or Wise)',
      'Week 12: Sign a rental lease and set up utilities (electricity, water, internet)',
      'Weeks 13-14: Schedule SEF appointment for residence permit; register with local health center',
      'Weeks 15-16: Settle in—join local coworking spaces, explore neighborhoods, register for NHR tax status',
    ],
  },

  // ── Mexico ─────────────────────────────────────────────────
  {
    slug: 'mexico',
    name: 'Mexico',
    flag: '🇲🇽',
    climate: 'urban',
    scores: {
      cost: 9,
      safety: 5,
      internet: 6,
      english: 5,
      residency: 6,
      healthcare: 6,
      nightlife: 9,
      nature: 8,
    },
    petFriendly: true,
    directFlightsUS: true,
    intlSchools: true,
    vehicleImport: true,
    avgMonthlyCost: { solo: 1200, couple: 1800, family: 2400 },
    estimatedMoveCost: { solo: 2500, couple: 4000, family: 5500 },
    visaProcessingMonths: 1,
    recommendedVisa: {
      remote: {
        name: 'Temporary Resident Visa',
        requirements: 'Proof of monthly income (min ~$2,500 USD or $150k in investments), passport valid 6+ months, consulate interview',
        minIncome: 2500,
      },
      freelancer: {
        name: 'Temporary Resident Visa',
        requirements: 'Proof of freelance income (~$2,500/month) or bank statements showing $36k+ over 12 months, consulate interview',
        minIncome: 2500,
      },
      'business-owner': {
        name: 'Temporary Resident Visa',
        requirements: 'Proof of business income or investment (~$2,500/month), business registration documents, consulate interview',
        minIncome: 2500,
      },
      retired: {
        name: 'Temporary Resident Visa (Rentista)',
        requirements: 'Proof of pension or retirement income (~$2,500/month), bank statements, consulate interview',
        minIncome: 2500,
      },
      student: {
        name: 'Student Visa',
        requirements: 'Acceptance letter from a Mexican institution, proof of funds, health insurance, consulate interview',
      },
    },
    strengths: [
      'Extremely low cost of living—comfortable lifestyle possible on $1,200/month in cities like Merida or Oaxaca',
      'No visa required for stays up to 180 days, and fastest temporary residency processing of the five countries',
      'Vibrant food scene, rich culture, and close proximity to the US with abundant direct flights',
    ],
    risks: [
      'Safety varies significantly by region; research neighborhoods carefully and avoid certain areas at night',
      'Internet speeds can be inconsistent outside major cities and premium coworking spaces',
      'Healthcare quality is uneven—private hospitals in major cities are good, but rural areas lack resources',
    ],
    weekByWeekPlan: [
      'Week 1: Research target cities (Mexico City, Merida, Playa del Carmen, Oaxaca) and visa requirements',
      'Week 2: Gather documents—bank statements, income proof, passport photos for consulate',
      'Week 3: Schedule and attend consulate appointment for Temporary Resident Visa',
      'Week 4: Receive visa approval (typically fast, 1-3 weeks)',
      'Week 5: Book flights and arrange short-term Airbnb for first month',
      'Week 6: Arrive in Mexico; within 30 days visit INM (immigration office) to exchange visa for resident card',
      'Week 7: Open a Mexican bank account (BBVA, Banorte) with your resident card and get a local SIM card',
      'Week 8: Search for long-term rental on Inmuebles24 or Facebook Marketplace groups',
      'Week 9: Sign lease, set up utilities and internet (Telmex/Izzi)',
      'Week 10: Register with IMSS (public health) or arrange private health insurance (GNP, AXA)',
      'Week 11: Get settled—find local gym, coworking space, and explore the neighborhood',
      'Week 12: Join expat communities (InterNations, local Facebook groups) and establish your routine',
    ],
  },

  // ── Spain ──────────────────────────────────────────────────
  {
    slug: 'spain',
    name: 'Spain',
    flag: '🇪🇸',
    climate: 'mediterranean',
    scores: {
      cost: 5,
      safety: 8,
      internet: 8,
      english: 5,
      residency: 7,
      healthcare: 9,
      nightlife: 9,
      nature: 7,
    },
    petFriendly: true,
    directFlightsUS: true,
    intlSchools: true,
    vehicleImport: false,
    avgMonthlyCost: { solo: 2200, couple: 3000, family: 3800 },
    estimatedMoveCost: { solo: 5000, couple: 7000, family: 9000 },
    visaProcessingMonths: 4,
    recommendedVisa: {
      remote: {
        name: 'Digital Nomad Visa (Ley de Startups)',
        requirements: 'Remote employment contract with non-Spanish company, min income ~€2,520/month, health insurance, clean criminal record',
        minIncome: 2800,
      },
      freelancer: {
        name: 'Autónomo Freelancer Visa (Non-Lucrative or DN Visa)',
        requirements: 'Proof of freelance income (min ~€2,520/month), client contracts, health insurance, clean criminal record, NIE application',
        minIncome: 2800,
      },
      'business-owner': {
        name: 'Entrepreneur Visa',
        requirements: 'Business plan with economic impact in Spain, proof of sufficient funds, endorsement letter, clean criminal record',
        minIncome: 2800,
      },
      retired: {
        name: 'Non-Lucrative Visa',
        requirements: 'Proof of passive income (~€2,520/month) or savings (~€30k+), private health insurance, clean criminal record, no work allowed',
        minIncome: 2800,
      },
      student: {
        name: 'Student Visa',
        requirements: 'Enrollment at a Spanish institution, proof of funds (~€600/month), health insurance, clean criminal record',
      },
    },
    strengths: [
      'World-class public healthcare system consistently ranked in the top 10 globally, accessible to residents',
      'Best nightlife and social scene in Europe with a culture that values work-life balance and long meals',
      'New Digital Nomad Visa (2023) with favorable 15% flat tax rate for the first 4 years',
    ],
    risks: [
      'Higher cost of living than Portugal or Mexico, especially in Barcelona and Madrid',
      'Visa processing is the slowest of the five countries at ~4 months; plan well ahead',
      'Lower English proficiency outside tourist areas—basic Spanish is strongly recommended',
    ],
    weekByWeekPlan: [
      'Weeks 1-2: Research visa options (Digital Nomad vs Non-Lucrative) and target cities (Valencia, Malaga, Barcelona)',
      'Week 3: Begin gathering documents—apostilled criminal record, income proof, health insurance quotes',
      'Week 4: Get documents translated to Spanish by a sworn translator (traductor jurado)',
      'Weeks 5-6: Submit visa application at your local Spanish consulate',
      'Weeks 7-14: Wait for visa approval (~8-16 weeks); research apartments on Idealista, Fotocasa',
      'Week 15: Book flights and arrange temporary accommodation for the first 2-3 weeks',
      'Week 16: Arrive in Spain; obtain NIE (foreigner identification number) at police station',
      'Week 17: Open a Spanish bank account (Sabadell, CaixaBank, or online with N26)',
      'Week 18: Find and sign a long-term rental; set up empadronamiento (municipal registration)',
      'Weeks 19-20: Register with Social Security if working, or activate private health insurance',
      'Weeks 21-22: Apply for TIE (residence card); settle into local coworking and social communities',
    ],
  },

  // ── Thailand ───────────────────────────────────────────────
  {
    slug: 'thailand',
    name: 'Thailand',
    flag: '🇹🇭',
    climate: 'tropical',
    scores: {
      cost: 10,
      safety: 6,
      internet: 7,
      english: 4,
      residency: 4,
      healthcare: 7,
      nightlife: 8,
      nature: 9,
    },
    petFriendly: false,
    directFlightsUS: false,
    intlSchools: true,
    vehicleImport: false,
    avgMonthlyCost: { solo: 1000, couple: 1500, family: 2200 },
    estimatedMoveCost: { solo: 3000, couple: 4500, family: 6000 },
    visaProcessingMonths: 2,
    recommendedVisa: {
      remote: {
        name: 'Long-Term Resident (LTR) Visa or Thailand Digital Nomad Visa (DTV)',
        requirements: 'DTV: Proof of remote employment and income ($5k+/month or $80k annual), health insurance, passport valid 6+ months',
        minIncome: 5000,
      },
      freelancer: {
        name: 'Destination Thailand Visa (DTV)',
        requirements: 'Proof of freelance work and income, portfolio or client contracts, health insurance, $5k+/month income recommended',
        minIncome: 5000,
      },
      'business-owner': {
        name: 'Business Visa (Non-Immigrant B) or BOI Visa',
        requirements: 'Thai company registration or BOI-endorsed business, work permit, minimum capitalization requirements (~2M THB)',
        minIncome: 3000,
      },
      retired: {
        name: 'Retirement Visa (Non-Immigrant O-A)',
        requirements: 'Age 50+, proof of pension/income (~65,000 THB/month or 800,000 THB in Thai bank), health insurance',
        minIncome: 1800,
      },
      student: {
        name: 'Education Visa (Non-Immigrant ED)',
        requirements: 'Enrollment in approved Thai language school or university, proof of funds, health insurance',
      },
    },
    strengths: [
      'Lowest cost of living of all five countries—a comfortable lifestyle in Chiang Mai for under $1,000/month',
      'Exceptional natural beauty from northern mountains to southern islands, with world-class beaches and temples',
      'Established digital nomad infrastructure in Chiang Mai and Bangkok with fast internet and coworking spaces',
    ],
    risks: [
      'Long-term residency is difficult; most visa options require renewal every 90 days or yearly with border runs',
      'English proficiency is limited outside tourist areas and major cities; Thai language basics are essential',
      'Bringing pets is challenging due to strict import regulations, quarantine requirements, and airline restrictions',
    ],
    weekByWeekPlan: [
      'Week 1: Research visa options (DTV, LTR, Tourist Visa) and target cities (Chiang Mai, Bangkok, Koh Samui)',
      'Week 2: Gather documents—income verification, health insurance, passport photos',
      'Week 3: Apply for DTV or appropriate visa at Thai consulate or online (e-Visa system)',
      'Weeks 4-5: Wait for visa approval; arrange travel vaccinations if needed',
      'Week 6: Book flights (plan for a layover—no direct US flights) and short-term accommodation',
      'Week 7: Arrive in Thailand; do 90-day reporting at immigration within 24 hours of address',
      'Week 8: Get a Thai SIM card (AIS, DTAC, or True) and open a Thai bank account (Bangkok Bank, Kasikorn)',
      'Week 9: Search for long-term rental on Hipflat, DDProperty, or Facebook groups',
      'Week 10: Sign lease, set up utilities and high-speed internet (True or 3BB fiber)',
      'Week 11: Register with local immigration for 90-day reporting; arrange health insurance (Pacific Cross, Luma)',
      'Week 12: Settle in—join coworking spaces (Punspace, Hubba), explore local markets and neighborhoods',
    ],
  },

  // ── Costa Rica ─────────────────────────────────────────────
  {
    slug: 'costa-rica',
    name: 'Costa Rica',
    flag: '🇨🇷',
    climate: 'tropical',
    scores: {
      cost: 7,
      safety: 7,
      internet: 5,
      english: 6,
      residency: 7,
      healthcare: 6,
      nightlife: 5,
      nature: 10,
    },
    petFriendly: true,
    directFlightsUS: true,
    intlSchools: false,
    vehicleImport: true,
    avgMonthlyCost: { solo: 1500, couple: 2200, family: 3000 },
    estimatedMoveCost: { solo: 3500, couple: 5500, family: 7000 },
    visaProcessingMonths: 3,
    recommendedVisa: {
      remote: {
        name: 'Digital Nomad Visa (Rentista Digital)',
        requirements: 'Proof of remote income (min $3,000/month), employment contract with foreign company, health insurance, clean criminal record',
        minIncome: 3000,
      },
      freelancer: {
        name: 'Rentista Visa',
        requirements: 'Proof of stable income ($2,500/month for 2 years) or deposit of $60,000 in Costa Rican bank, clean criminal record',
        minIncome: 2500,
      },
      'business-owner': {
        name: 'Inversionista (Investor) Visa',
        requirements: 'Investment of at least $150,000 in Costa Rican business or real estate, business plan, clean criminal record',
        minIncome: 2500,
      },
      retired: {
        name: 'Pensionado Visa',
        requirements: 'Proof of pension income (min $1,000/month from a permanent source), clean criminal record, health insurance',
        minIncome: 1000,
      },
      student: {
        name: 'Student Visa',
        requirements: 'Enrollment at a Costa Rican institution, proof of funds, health insurance, clean criminal record',
      },
    },
    strengths: [
      'Unmatched natural beauty—rainforests, volcanoes, and two coastlines with some of the best biodiversity on Earth',
      'Stable democracy with no military, strong environmental policies, and a welcoming "Pura Vida" culture',
      'Easy pet importation process and vehicle import allowed, making it practical for families with belongings',
    ],
    risks: [
      'Internet infrastructure is weaker outside San Jose and major tourist towns; verify speeds before committing',
      'No international schools available in most areas; homeschooling or online schooling may be necessary for families',
      'Cost of imported goods and electronics is significantly higher than in the US or Europe due to import taxes',
    ],
    weekByWeekPlan: [
      'Week 1: Research visa options and target areas (San Jose, Tamarindo, Santa Teresa, Arenal)',
      'Week 2: Gather documents—income proof, criminal background check (apostilled), health insurance',
      'Week 3: Get documents authenticated and translated to Spanish if required',
      'Week 4: Submit visa application at Costa Rican consulate or plan to apply in-country',
      'Weeks 5-8: Wait for visa processing; research housing on Encuentra24 or Facebook expat groups',
      'Week 9: Book flights (many direct options from US) and arrange short-term rental for first month',
      'Week 10: Arrive in Costa Rica; visit Migración (immigration) to finalize residency if applying in-country',
      'Week 11: Open a bank account (BAC, Banco Nacional) with residency documents; get a local Kolbi or Claro SIM',
      'Week 12: Find long-term housing and sign a lease; set up internet (ICE or Tigo)',
      'Week 13: Register with CCSS (Caja—public healthcare system) as a resident',
      'Week 14: Settle in—explore local communities, join expat groups, and establish your daily routine',
    ],
  },
]

// ── Matching Algorithm ───────────────────────────────────────

export function calculateRelocationMatches(inputs: RelocationInputs): RelocationResult[] {
  const size = familySize(inputs.family)
  const savings = savingsToNumber(inputs.savings)
  const timelineMonths = timelineToMonths(inputs.timeline)
  const userHasFamily = hasFamily(inputs.family)

  const scored: RelocationResult[] = COUNTRIES.map((country) => {
    let score = 0
    const reasons: string[] = []

    // ── 1. Income vs cost fit (max 25 points) ──────────────
    const monthlyCost = country.avgMonthlyCost[size]
    const incomeRatio = inputs.monthlyIncome / monthlyCost
    let incomeScore: number
    if (incomeRatio >= 2) {
      incomeScore = 25
    } else if (incomeRatio >= 1) {
      incomeScore = 15 + (incomeRatio - 1) * 10
    } else {
      incomeScore = Math.max(0, incomeRatio * 15)
    }
    score += incomeScore
    if (incomeScore >= 20) {
      reasons.push(`Your income comfortably covers the ${size === 'solo' ? 'solo' : size === 'couple' ? 'couple' : 'family'} cost of living (~$${monthlyCost.toLocaleString()}/month)`)
    }

    // ── 2. Employment vs visa eligibility (max 20 points) ──
    const visa = country.recommendedVisa[inputs.employmentType]
    let visaScore = 0
    if (visa) {
      visaScore = 15
      // Bonus if income meets minimum
      if (!visa.minIncome || inputs.monthlyIncome >= visa.minIncome) {
        visaScore = 20
      }
      reasons.push(`Eligible for the ${visa.name} based on your ${inputs.employmentType.replace('-', ' ')} status`)
    }
    score += visaScore

    // ── 3. Climate match (max 10 points) ───────────────────
    let climateScore: number
    if (inputs.climate === 'no-preference') {
      climateScore = 8
    } else if (inputs.climate === country.climate) {
      climateScore = 10
      reasons.push(`${country.name} matches your preferred ${inputs.climate} climate`)
    } else {
      climateScore = 3
    }
    score += climateScore

    // ── 4. Priority alignment (max 25 points) ──────────────
    const priorities = inputs.priorities.slice(0, 3)
    const weights = [3, 2, 1]
    let priorityRaw = 0
    const maxPriorityRaw = (3 + 2 + 1) * 10 // 60

    priorities.forEach((priority, i) => {
      const key = priority as keyof typeof country.scores
      if (country.scores[key] !== undefined) {
        priorityRaw += weights[i] * country.scores[key]
      }
    })

    const priorityScore = (priorityRaw / maxPriorityRaw) * 25
    score += priorityScore

    if (priorities.length > 0) {
      const topPriority = priorities[0] as keyof typeof country.scores
      if (country.scores[topPriority] >= 8) {
        reasons.push(`Scores highly on your top priority: ${topPriority} (${country.scores[topPriority]}/10)`)
      }
    }

    // ── 5. Family friendliness (max 10 if family, 5 if solo)
    if (userHasFamily) {
      const familyRaw =
        (country.scores.healthcare / 10) * 3 +
        (country.scores.safety / 10) * 3 +
        (country.intlSchools ? 4 : 0)
      score += familyRaw
      if (familyRaw >= 8) {
        reasons.push(`Family-friendly with strong healthcare, safety, and ${country.intlSchools ? 'international school options' : 'good education access'}`)
      }
    } else {
      const soloRaw =
        (country.scores.safety / 10) * 2.5 +
        (country.scores.nightlife / 10) * 2.5
      score += soloRaw
    }

    // ── 6. Savings vs move cost (max 5 points) ─────────────
    const moveCost = country.estimatedMoveCost[size]
    const savingsRatio = savings / moveCost
    let savingsScore: number
    if (savingsRatio >= 1) {
      savingsScore = 5
    } else {
      savingsScore = savingsRatio * 5
    }
    score += savingsScore

    // ── 7. Timeline feasibility (max 5 points) ─────────────
    const buffer = timelineMonths - country.visaProcessingMonths
    let timelineScore: number
    if (buffer >= 3) {
      timelineScore = 5
    } else if (buffer >= 1) {
      timelineScore = 3
    } else if (buffer >= 0) {
      timelineScore = 1
    } else {
      timelineScore = 0
    }
    score += timelineScore
    if (timelineScore <= 1 && buffer < 0) {
      reasons.push(`Visa processing (~${country.visaProcessingMonths} months) may be tight for your timeline`)
    }

    // ── Deal-breaker elimination ───────────────────────────
    for (const breaker of inputs.dealBreakers) {
      if (breaker === 'none') continue
      if (breaker === 'pets' && !country.petFriendly) {
        score = 0
      }
      if (breaker === 'vehicle' && !country.vehicleImport) {
        score = 0
      }
      if (breaker === 'intl-school' && !country.intlSchools) {
        score = 0
      }
      if (breaker === 'direct-flights' && !country.directFlightsUS) {
        score = 0
      }
      if (breaker === 'healthcare' && country.scores.healthcare < 7) {
        score = 0
      }
    }

    // ── Clamp score to 0-100 ───────────────────────────────
    score = Math.round(Math.min(100, Math.max(0, score)))

    // ── Trim reasons to top 3 ──────────────────────────────
    const topReasons = reasons.slice(0, 3)

    return {
      country,
      matchScore: score,
      matchReasons: topReasons,
      recommendedVisa: visa
        ? { name: visa.name, requirements: visa.requirements }
        : { name: 'Tourist Visa / Visa-Free Entry', requirements: 'Check entry requirements for your citizenship' },
      estimatedMoveCost: moveCost,
      estimatedMonthlyCost: monthlyCost,
      timeline: country.weekByWeekPlan,
      risks: country.risks,
    }
  })

  // Sort by score descending and return top 3
  scored.sort((a, b) => b.matchScore - a.matchScore)
  return scored.slice(0, 3)
}
