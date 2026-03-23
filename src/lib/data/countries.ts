export interface VisaType {
  name: string;
  type: string;
  duration: string;
  cost: string;
  requirements: string[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
  processingTime: string;
  description: string;
}

export interface Climate {
  type: string;
  avgTemp: string;
  bestMonths: string[];
}

export interface CostOfLiving {
  rent1BR: string;
  rent2BR: string;
  groceries: string;
  dining: string;
  transport: string;
  internet: string;
  utilities: string;
  gym: string;
  coffee: string;
}

export interface Healthcare {
  system: string;
  quality: string;
  publicAvailable: boolean;
  insuranceCost: string;
  emergencyNumber: string;
}

export interface Country {
  slug: string;
  name: string;
  flag: string;
  continent: string;
  heroImage: string;
  population: string;
  capital: string;
  currency: string;
  language: string;
  timezone: string;
  costIndex: number;
  safetyRating: number;
  internetSpeed: number;
  healthcareRating: number;
  climate: Climate;
  visaTypes: VisaType[];
  costOfLiving: CostOfLiving;
  healthcare: Healthcare;
  pros: string[];
  cons: string[];
  lastVerified: string;
}

export const countries: Country[] = [
  {
    slug: 'portugal',
    name: 'Portugal',
    flag: '🇵🇹',
    continent: 'Europe',
    heroImage: '/images/countries/portugal.jpg',
    population: '10.3 million',
    capital: 'Lisbon',
    currency: 'Euro (EUR)',
    language: 'Portuguese',
    timezone: 'WET/WEST (UTC+0 / UTC+1)',
    costIndex: 5,
    safetyRating: 5,
    internetSpeed: 188,
    healthcareRating: 4,
    climate: {
      type: 'Mediterranean',
      avgTemp: '16°C (61°F) annual average',
      bestMonths: ['March', 'April', 'May', 'September', 'October'],
    },
    visaTypes: [
      {
        name: 'D7 Passive Income Visa',
        type: 'Long-term residency',
        duration: '2 years (renewable)',
        cost: '€90 application fee + €320 residence permit fee',
        requirements: [
          'Proof of passive income of at least €820/month (minimum wage threshold)',
          'Valid passport with at least 6 months validity',
          'Proof of accommodation in Portugal (rental contract or property deed)',
          'Criminal background check from home country (apostilled)',
          'Health insurance covering Portugal',
          'Bank statements showing sufficient funds (typically 12 months of income proof)',
          'NIF (Portuguese tax number)',
          'Completed application form (VLD)',
        ],
        difficulty: 'Medium',
        processingTime: '2–4 months at Portuguese consulate; SEF/AIMA appointment can add 3–6 months',
        description:
          'The D7 Visa, also called the Passive Income Visa or Retirement Visa, is designed for individuals who can sustain themselves through passive income sources such as pensions, rental income, dividends, or investment returns. It grants residency and a path to permanent residency after 5 years and citizenship after 5 years of legal residence.',
      },
      {
        name: 'Digital Nomad Visa (D8)',
        type: 'Remote work residency',
        duration: '1 year (temporary stay) or 2-year residency permit',
        cost: '€90 application fee + €320 residence permit fee',
        requirements: [
          'Proof of remote work income of at least €3,280/month (4× minimum wage)',
          'Employment contract or freelance contracts with non-Portuguese clients',
          'Valid passport',
          'Proof of accommodation in Portugal',
          'Criminal background check (apostilled)',
          'Health insurance',
          'NIF (Portuguese tax number)',
          'Bank statements for the last 3 months',
        ],
        difficulty: 'Medium',
        processingTime: '4–8 weeks for visa; additional 2–4 months for residency permit at AIMA',
        description:
          'Launched in October 2022, the D8 Digital Nomad Visa allows remote workers and freelancers who work for foreign clients or employers to live in Portugal. The income threshold is 4× the national minimum wage. After 2 years, you can renew; after 5 years of legal residence you may apply for permanent residency or citizenship.',
      },
      {
        name: 'Golden Visa (ARI)',
        type: 'Investment residency',
        duration: '2 years (renewable), leads to permanent residency/citizenship',
        cost: 'Minimum investment from €250,000 (fund units or cultural donation) to €500,000+ (real estate in low-density areas); administrative fees ~€5,000–€7,500',
        requirements: [
          'Qualifying investment (fund subscription, cultural/scientific donation, or real estate in eligible areas)',
          'Clean criminal record',
          'Valid passport',
          'Proof of legal entry and stay in Portugal',
          'NIF and Portuguese bank account',
          'Proof of investment maintained',
          'Health insurance',
        ],
        difficulty: 'Hard',
        processingTime: '12–18 months from investment to permit issuance',
        description:
          'Portugal\'s Autorização de Residência para Atividade de Investimento (ARI), commonly called the Golden Visa, grants residency through qualifying investments. As of 2024, direct residential real estate in Lisbon, Porto, and the Algarve is no longer eligible. Holders only need to spend 7 days/year in Portugal and may bring family members. After 5 years they may apply for permanent residency or citizenship.',
      },
      {
        name: 'Student Visa (D4)',
        type: 'Study visa',
        duration: '1 year (renewable for duration of studies)',
        cost: '€90 application fee',
        requirements: [
          'Acceptance letter from a recognised Portuguese educational institution',
          'Proof of sufficient funds (€665/month or support from family/scholarship)',
          'Valid passport',
          'Criminal background check',
          'Health insurance',
          'Proof of accommodation',
          'Completed visa application form',
        ],
        difficulty: 'Easy',
        processingTime: '4–8 weeks',
        description:
          'The D4 Student Visa is for individuals enrolled in a recognised higher education institution, language course (minimum 20 hours/week for language courses), or vocational training programme in Portugal. It allows part-time work (up to 20 hours/week during term). Language course students may also qualify for the shorter Temporary Stay Visa.',
      },
    ],
    costOfLiving: {
      rent1BR: '$900–$1,600/month (Lisbon/Porto); $500–$900 (smaller cities)',
      rent2BR: '$1,400–$2,400/month (Lisbon/Porto); $800–$1,400 (smaller cities)',
      groceries: '$250–$400/month',
      dining: '$150–$350/month (mix of budget meals ~$10 and mid-range restaurants ~$20–$35/person)',
      transport: '$40–$80/month (monthly public transport pass ~$40 in Lisbon)',
      internet: '$25–$45/month (fibre broadband, widely available)',
      utilities: '$80–$150/month (electricity, water, gas — higher in winter)',
      gym: '$30–$60/month',
      coffee: '$1.00–$1.50 (espresso); $2–$4 (specialty coffee)',
    },
    healthcare: {
      system:
        'Portugal has a universal public healthcare system (Serviço Nacional de Saúde, SNS) funded through taxation. Legal residents can access SNS services, though wait times for specialists can be long. A robust private healthcare sector offers faster access and English-speaking doctors.',
      quality: 'Good to Very Good — ranked among top 25 globally by WHO',
      publicAvailable: true,
      insuranceCost: '$50–$150/month for comprehensive private health insurance',
      emergencyNumber: '112',
    },
    pros: [
      'One of the safest countries in the world (Global Peace Index top 5)',
      'EU membership with Schengen Zone access',
      'Non-Habitual Resident (NHR) tax regime offers 10% flat tax on foreign income for 10 years (new regime from 2024)',
      'English widely spoken in cities and tourist areas',
      'Excellent quality of life with mild climate year-round',
      'Strong expat and digital nomad community',
      'Path to EU citizenship after 5 years of residency',
      'Affordable compared to Western European peers',
      'High-speed fibre internet widely available',
      'Rich culture, cuisine, and outdoor lifestyle',
    ],
    cons: [
      'Housing market in Lisbon and Porto is increasingly expensive and competitive',
      'AIMA (formerly SEF) appointment backlogs can mean very long waits for residency permits',
      'Portuguese bureaucracy can be slow and document-heavy',
      'Language barrier outside major cities',
      'Public healthcare wait times can be lengthy for non-emergency specialist care',
      'Wages are low if seeking local employment',
      'Summers in the Algarve and Lisbon can be very hot (35°C+)',
      'Remote areas have limited public transport',
    ],
    lastVerified: '2026-03-15',
  },
  {
    slug: 'mexico',
    name: 'Mexico',
    flag: '🇲🇽',
    continent: 'North America',
    heroImage: '/images/countries/mexico.jpg',
    population: '128 million',
    capital: 'Mexico City',
    currency: 'Mexican Peso (MXN)',
    language: 'Spanish',
    timezone: 'CST/CDT (UTC-6 / UTC-5); varies by region (Pacific, Mountain zones)',
    costIndex: 3,
    safetyRating: 2,
    internetSpeed: 60,
    healthcareRating: 3,
    climate: {
      type: 'Varied — tropical coast, highland temperate, arid north',
      avgTemp: '18°C (64°F) in Mexico City; 28°C+ on coasts',
      bestMonths: ['November', 'December', 'January', 'February', 'March'],
    },
    visaTypes: [
      {
        name: 'Tourist Visa / FMM (Forma Migratoria Múltiple)',
        type: 'Temporary visitor permit',
        duration: 'Up to 180 days (at immigration officer\'s discretion)',
        cost: 'Free (land crossings); ~$24 USD included in airfare',
        requirements: [
          'Valid passport with at least 6 months validity',
          'Return or onward ticket',
          'Proof of sufficient funds (approx. $1,000 USD or credit card)',
          'Completed FMM form (available at port of entry or airline)',
        ],
        difficulty: 'Easy',
        processingTime: 'Issued at port of entry',
        description:
          'Citizens of the US, Canada, EU, UK, and many other countries receive a free tourist permit (FMM) upon arrival allowing stays of up to 180 days. The exact number of days is at the immigration officer\'s discretion. This permit cannot be extended or converted in-country; you must depart and re-enter. Many digital nomads use this on a rolling basis.',
      },
      {
        name: 'Temporary Resident Visa',
        type: 'Temporary residency',
        duration: '1 year (renewable for up to 4 years)',
        cost: '$43 USD consular fee + ~$300 USD INM processing fee in Mexico',
        requirements: [
          'Valid passport',
          'Completed application form',
          'Proof of economic solvency: bank statements showing average monthly balance of ~$43,000 USD (1,458 × daily minimum wage) OR monthly income of ~$2,150 USD (500 × daily minimum wage) for the last 6–12 months',
          'OR proof of employment/pension from a foreign company',
          'OR family tie to a Mexican national/resident',
          'Two recent passport photos',
          'Application fee payment',
        ],
        difficulty: 'Medium',
        processingTime: '5–10 business days at consulate; additional 30–60 days for INM canje in Mexico',
        description:
          'The Temporary Resident Visa (Visa de Residente Temporal) allows foreigners to live in Mexico for up to 4 years. After obtaining the visa at a Mexican consulate abroad, you must complete a "canje" at Instituto Nacional de Migración (INM) within 30 days of arrival to receive your physical resident card (tarjeta de residencia). Holders can open bank accounts, sign leases, and access certain public services.',
      },
      {
        name: 'Permanent Resident Visa',
        type: 'Permanent residency',
        duration: 'Permanent (card renewed every 10 years)',
        cost: '$43 USD consular fee + ~$300 USD INM processing fee',
        requirements: [
          'Valid passport',
          'Proof of very high economic solvency: average monthly balance of ~$172,000 USD OR monthly income of ~$8,600 USD (2,000 × daily minimum wage)',
          'OR completion of 4 years as Temporary Resident',
          'OR marriage to or being a minor child of a Mexican national',
          'OR being a retiree with pension income meeting threshold',
          'Criminal background check',
          'Two passport photos',
        ],
        difficulty: 'Hard',
        processingTime: '30–90 days',
        description:
          'Permanent Residency (Residente Permanente) grants indefinite right to live and work in Mexico without restriction. It can be obtained directly from abroad if meeting very high income thresholds, after 4 years of temporary residency, or through family ties to Mexican nationals. After 5 years of legal residency, you may apply for Mexican citizenship (naturalization).',
      },
    ],
    costOfLiving: {
      rent1BR: '$600–$1,200/month (Mexico City Roma/Condesa); $400–$800 (Oaxaca, Mérida); $800–$1,800 (Tulum, Los Cabos)',
      rent2BR: '$900–$2,000/month (Mexico City central); $600–$1,200 (secondary cities)',
      groceries: '$200–$350/month',
      dining: '$150–$400/month (street tacos $1–$3; mid-range restaurant $15–$30/person)',
      transport: '$20–$60/month (Mexico City Metro pass ~$12; Uber widely available)',
      internet: '$20–$40/month (cable/fibre broadband; reliability varies)',
      utilities: '$30–$80/month (electricity, water; A/C raises costs significantly)',
      gym: '$20–$50/month',
      coffee: '$1–$2 (local coffee shop); $3–$5 (specialty cafe)',
    },
    healthcare: {
      system:
        'Mexico has a tiered healthcare system: IMSS (social security, for employees), ISSSTE (government workers), Seguro Popular/INSABI (public), and a large private sector. Expats and tourists typically use private hospitals and clinics, which are modern in major cities and significantly cheaper than the US. Medical tourism is common.',
      quality: 'Good in major cities (CDMX, Guadalajara, Monterrey); variable in rural areas',
      publicAvailable: false,
      insuranceCost: '$60–$200/month for private health insurance (international plan); local plan $30–$100/month',
      emergencyNumber: '911',
    },
    pros: [
      'Very low cost of living relative to quality of life',
      'Extremely diverse landscapes, climate, and culture',
      'World-class food scene from street food to fine dining',
      'Large, established expat and digital nomad communities (CDMX, Oaxaca, Playa del Carmen)',
      'No income tax on foreign-sourced income (consult tax advisor for specifics)',
      'Direct flights to most major global cities',
      'Tourist permit allows up to 180 days without bureaucracy',
      'Warm weather year-round in most regions',
      'Affordable private healthcare',
      'Rich indigenous and colonial history',
    ],
    cons: [
      'Safety concerns in certain states and areas; US State Department issues advisories for several regions',
      'Internet reliability can be inconsistent outside major cities',
      'Bureaucracy and corruption can complicate official processes',
      'Air quality in Mexico City is a concern, particularly in winter',
      'Altitude (2,240m) in Mexico City affects some newcomers',
      'Tourist visa cannot be extended; must exit and re-enter',
      'Income thresholds for residency are high',
      'Water is not potable from the tap in most areas',
      'Traffic congestion is severe in major cities',
    ],
    lastVerified: '2026-03-15',
  },
  {
    slug: 'spain',
    name: 'Spain',
    flag: '🇪🇸',
    continent: 'Europe',
    heroImage: '/images/countries/spain.jpg',
    population: '47.4 million',
    capital: 'Madrid',
    currency: 'Euro (EUR)',
    language: 'Spanish (Castilian)',
    timezone: 'CET/CEST (UTC+1 / UTC+2)',
    costIndex: 6,
    safetyRating: 4,
    internetSpeed: 214,
    healthcareRating: 5,
    climate: {
      type: 'Mediterranean (coast/south); Continental (interior); Oceanic (north)',
      avgTemp: '15°C (59°F) in Madrid annual average; warmer on coasts',
      bestMonths: ['April', 'May', 'June', 'September', 'October'],
    },
    visaTypes: [
      {
        name: 'Digital Nomad Visa (Ley de Startups)',
        type: 'Remote work residency',
        duration: '1 year visa; converts to 3-year residence permit (renewable for 2 more years)',
        cost: '~€80 consular fee; €500–€1,000 for permit processing and gestor fees',
        requirements: [
          'Proof of remote work for a foreign company or foreign clients for at least 3 months',
          'Minimum income of €2,334/month (200% of minimum wage in 2024) for the primary applicant; +75% per additional family member',
          'Company or client relationship of at least 1 year',
          'Criminal background check (apostilled, issued within 5 years)',
          'Valid passport',
          'Health insurance covering Spain',
          'Proof of accommodation in Spain',
          'University degree or 3+ years of professional experience',
          'Social Security registration (or private insurance if not covered)',
        ],
        difficulty: 'Medium',
        processingTime: '10–20 business days for consulate decision; 1–3 months for residence permit at UGE-CE',
        description:
          'Introduced under Spain\'s Startup Act (Ley de Startups) in January 2023, the Digital Nomad Visa (Visado para Teletrabajadores de Carácter Internacional) allows non-EU remote workers to live in Spain. Holders can benefit from the Beckham Law (Régimen Especial de Trabajadores Desplazados), a special tax regime offering a flat 24% tax rate on Spanish-sourced income up to €600,000 for 6 years.',
      },
      {
        name: 'Non-Lucrative Visa (NLV)',
        type: 'Non-working residency',
        duration: '1 year (renewable in 2-year increments)',
        cost: '~€80 consular fee',
        requirements: [
          'Proof of sufficient passive income: ~€27,115/year for the primary applicant (500% IPREM); ~€6,778/year per additional family member',
          'Bank statements for at least 6 months',
          'Valid passport',
          'Criminal background check (apostilled)',
          'Medical certificate (no contagious diseases)',
          'Health insurance covering Spain with no co-pays',
          'Proof of accommodation in Spain',
          'Completed application forms (EX-01, national visa form)',
        ],
        difficulty: 'Medium',
        processingTime: '1–3 months at Spanish consulate',
        description:
          'The Non-Lucrative Visa allows financially independent individuals who do not intend to work in Spain to reside there. You are NOT permitted to work — including remote work for foreign clients — making it distinct from the Digital Nomad Visa. After 5 years of continuous legal residency (with proof of 183+ days/year in Spain), you can apply for permanent residency.',
      },
      {
        name: 'Student Visa',
        type: 'Study visa',
        duration: '1 year (renewable for duration of programme)',
        cost: '~€80 consular fee',
        requirements: [
          'Acceptance letter from a recognised Spanish educational institution',
          'Proof of financial means (~€600/month or scholarship documentation)',
          'Valid passport',
          'Criminal background check',
          'Medical certificate',
          'Health insurance',
          'Proof of enrolment fee payment',
          'Proof of accommodation',
        ],
        difficulty: 'Easy',
        processingTime: '3–8 weeks',
        description:
          'The Student Visa (Visado de Estudios) is for enrolment in full-time programmes at accredited Spanish universities, language schools (minimum 20 hours/week), or vocational courses. Students may work part-time (up to 30 hours/week with work authorisation). After completing studies, graduates can apply for a job-seeking visa (12 months).',
      },
      {
        name: 'Golden Visa',
        type: 'Investment residency',
        duration: '2 years (renewable for 5 years at a time)',
        cost: 'Minimum €500,000 real estate investment (free of mortgages/encumbrances); ~€5,000–€10,000 in fees',
        requirements: [
          'Investment of at least €500,000 in Spanish real estate (unencumbered portion)',
          'OR €1 million in Spanish company shares or bank deposits',
          'OR €2 million in Spanish government bonds',
          'OR OR creation of business deemed of general interest (jobs, innovation)',
          'Valid passport',
          'Criminal background check',
          'Health insurance',
          'Proof of investment',
          'Medical certificate',
        ],
        difficulty: 'Hard',
        processingTime: '20 business days for UGE-CE processing (statutory); often 3–6 months in practice',
        description:
          'Spain\'s Golden Visa (Visa de Inversor) grants residency through qualifying investments. Note: In April 2024, the Spanish government announced plans to eliminate the real estate pathway, though as of early 2026 this has not yet been enacted into law — applicants should check current status. Holders need only visit Spain once a year to maintain the permit.',
      },
    ],
    costOfLiving: {
      rent1BR: '$1,200–$2,200/month (Madrid/Barcelona centre); $700–$1,300 (Valencia, Seville, Malaga)',
      rent2BR: '$1,800–$3,200/month (Madrid/Barcelona); $1,100–$2,000 (secondary cities)',
      groceries: '$280–$450/month',
      dining: '$200–$450/month (menu del día lunch ~$12–$15; dinner restaurant $20–$40/person)',
      transport: '$55–$90/month (Madrid Metro monthly pass ~$55; trains affordable)',
      internet: '$30–$50/month (fibre very widely available; one of Europe\'s fastest networks)',
      utilities: '$100–$180/month (electricity, water, gas; higher in summer for A/C)',
      gym: '$25–$60/month',
      coffee: '$1.20–$1.80 (café solo); $2–$4 (specialty coffee)',
    },
    healthcare: {
      system:
        'Spain has one of the best public healthcare systems in the world (Sistema Nacional de Salud, SNS), ranked 7th globally by WHO. Legal residents can access public healthcare, which is comprehensive and largely free at point of use. The private sector is also well-developed and affordable by international standards.',
      quality: 'Excellent — consistently ranked top 10 globally',
      publicAvailable: true,
      insuranceCost: '$50–$120/month for private health insurance (required for visa applications)',
      emergencyNumber: '112',
    },
    pros: [
      'Excellent quality of life — climate, food, culture, and lifestyle',
      'World-class public healthcare system',
      'EU membership with full Schengen Zone access',
      'Beckham Law tax incentive: flat 24% rate on Spanish income for Digital Nomad Visa holders',
      'High-speed fibre internet among Europe\'s best',
      'Rich history, architecture, and diverse regional cultures',
      'Path to permanent residency (5 years) and citizenship (10 years; 2 years for Latin Americans/others)',
      'Strong transport infrastructure (AVE high-speed rail)',
      'Vibrant nightlife, arts, and social scene',
      'Expat communities in major cities and coastal areas',
    ],
    cons: [
      'High unemployment rate historically; local job market competitive',
      'Bureaucracy is notoriously slow and complex (cita previa system)',
      'Major cities (Madrid, Barcelona) have become expensive',
      'Language barrier in daily life outside tourist areas',
      'Rental market very tight and competitive in major cities',
      'Siesta culture means many businesses close midday, and late dinner culture takes adjustment',
      'Non-Lucrative Visa prohibits any remote work',
      'Summers in Madrid and Seville are extremely hot (40°C+)',
      'Regional political tensions (Catalonia, Basque Country)',
    ],
    lastVerified: '2026-03-15',
  },
  {
    slug: 'thailand',
    name: 'Thailand',
    flag: '🇹🇭',
    continent: 'Asia',
    heroImage: '/images/countries/thailand.jpg',
    population: '71.6 million',
    capital: 'Bangkok',
    currency: 'Thai Baht (THB)',
    language: 'Thai',
    timezone: 'ICT (UTC+7)',
    costIndex: 3,
    safetyRating: 3,
    internetSpeed: 175,
    healthcareRating: 4,
    climate: {
      type: 'Tropical monsoon with three seasons: hot, rainy, and cool',
      avgTemp: '28°C (82°F) annual average; hot season can reach 40°C',
      bestMonths: ['November', 'December', 'January', 'February', 'March'],
    },
    visaTypes: [
      {
        name: 'Tourist Visa (TR) / Visa Exemption',
        type: 'Short-term visitor',
        duration: '30 days visa exemption (extendable once to 60 days); 60 days for Tourist Visa; from 2024 land crossings limited to 2 per year',
        cost: 'Free (visa exemption for 93 nationalities); $35 USD for Tourist Visa at consulate',
        requirements: [
          'Valid passport with at least 6 months validity',
          'Return or onward ticket',
          'Proof of sufficient funds (20,000 THB per person / 40,000 THB per family)',
          'Hotel booking or accommodation proof',
          'For visa extension: TM.7 form, 1,900 THB fee, passport photo, proof of address',
        ],
        difficulty: 'Easy',
        processingTime: 'Issued on arrival for visa exemption; 1–3 business days at consulate for TR visa',
        description:
          'Thailand offers visa-free entry (visa exemption) for citizens of 93 countries for 30 days (extended to 60 days from November 2024 for many nationalities as a pilot). The Tourist Visa (TR) obtained in advance gives 60 days. Both can be extended once at an immigration office for 30 additional days (1,900 THB fee). The traditional "visa run" is increasingly restricted; as of 2022, land border crossings allow maximum 2 visa exemptions per year.',
      },
      {
        name: 'Thailand Elite Visa',
        type: 'Privilege residency programme',
        duration: '5 or 10 years (multiple-entry, renewable)',
        cost: '500,000 THB (~$14,000 USD) for 5-year Elite Flexible One plan; 1,000,000 THB (~$28,000) for 10-year Elite Ultimate Privilege (prices as of 2024)',
        requirements: [
          'Valid passport',
          'Application to Thailand Privilege Card Co., Ltd.',
          'Background check conducted by Thailand Privilege',
          'Payment of membership fee',
          'No criminal record',
          'Medical examination may be required',
        ],
        difficulty: 'Easy',
        processingTime: '2–4 weeks after payment and background check',
        description:
          'Thailand Elite (officially Thailand Privilege Card) is a government-endorsed programme offering long-term multiple-entry visas of 5 to 20 years with premium concierge services. Members receive VIP airport services, government concierge assistance, and privileged access to various facilities. It does NOT grant work rights — for work, a separate work permit is required.',
      },
      {
        name: 'Long-Term Resident Visa (LTR)',
        type: 'Long-term residency',
        duration: '10 years (5-year visa + 5-year renewal)',
        cost: '50,000 THB (~$1,400 USD) application fee',
        requirements: [
          'Wealthy Global Citizen: $1 million USD in assets + $80,000 USD annual income OR $500,000 invested in Thailand',
          'OR Wealthy Pensioner: 80,000 USD/year pension income + $250,000 invested in Thailand OR $40,000/year pension only',
          'OR Work-from-Thailand Professional: $80,000 USD/year income from overseas employer + 5 years experience + work in targeted industries',
          'OR Highly Skilled Professional: offered position in Thailand + $80,000 USD/year salary OR $40,000 in targeted shortage industries',
          'Valid passport',
          'Clean criminal record',
          'Health insurance with minimum $50,000 USD coverage',
          'Bank statements and investment proof',
        ],
        difficulty: 'Hard',
        processingTime: '30–60 days after submission to Board of Investment (BOI)',
        description:
          'Launched in September 2022, the LTR Visa is a 10-year residency programme introduced by Thailand\'s Board of Investment targeting four groups: wealthy global citizens, wealthy pensioners, work-from-Thailand professionals, and highly skilled professionals. LTR holders receive a 17% personal income tax flat rate (professionals), 50% income tax exemption, multiple-entry with 1-year reporting (vs. 90-day for most visas), and the right to work (professionals category).',
      },
      {
        name: 'Education Visa (ED)',
        type: 'Study/language visa',
        duration: '1 year (renewable annually for duration of studies)',
        cost: '2,000 THB (~$56 USD) at consulate; or some schools assist with application',
        requirements: [
          'Enrolment at a government-approved school, university, language centre, or Muay Thai/yoga school',
          'Acceptance letter from institution',
          'Valid passport',
          'Passport photos',
          'Application form',
          'Minimum study hours (typically 200–400 hours per year for language courses)',
          '90-day reporting to immigration required',
        ],
        difficulty: 'Easy',
        processingTime: '1–5 business days at Thai consulate',
        description:
          'The Education Visa (Non-Immigrant ED) allows foreigners to study at approved institutions in Thailand including universities, language schools, Muay Thai camps, traditional Thai massage schools, yoga centres, and cooking schools. Some digital nomads use ED visas for long-term stays while studying Thai or other subjects. Note: immigration authorities have increased scrutiny on "visa schools" used purely for stay extension; genuine enrolment is required.',
      },
    ],
    costOfLiving: {
      rent1BR: '$400–$900/month (Bangkok central/Sukhumvit); $250–$600 (Chiang Mai); $500–$1,200 (Koh Samui/islands)',
      rent2BR: '$700–$1,600/month (Bangkok); $400–$900 (Chiang Mai)',
      groceries: '$150–$300/month (mix of local markets and supermarkets)',
      dining: '$100–$300/month (street food meal $1–$3; restaurant $8–$20/person; Western food more expensive)',
      transport: '$30–$80/month (Bangkok BTS/MRT monthly pass ~$40; motorbike taxi and tuk-tuks affordable)',
      internet: '$15–$30/month (fibre broadband; co-working spaces $80–$150/month)',
      utilities: '$60–$120/month (electricity for A/C is biggest cost; water cheap)',
      gym: '$20–$50/month',
      coffee: '$0.50–$1 (local Thai iced coffee); $3–$5 (Western-style specialty café)',
    },
    healthcare: {
      system:
        'Thailand has a strong private hospital network, particularly in Bangkok (Bumrungrad International, Bangkok Hospital, Samitivej), which attracts medical tourists worldwide. Public hospitals are affordable but can be crowded and have language barriers. Private hospitals in Bangkok offer world-class care at a fraction of Western prices.',
      quality: 'Excellent in major private hospitals; Good in urban public hospitals',
      publicAvailable: false,
      insuranceCost: '$60–$200/month for international health insurance; local Thai plan $30–$80/month',
      emergencyNumber: '1669 (medical emergency); 191 (police)',
    },
    pros: [
      'Extremely low cost of living for high quality lifestyle',
      'World-famous food culture and cuisine',
      'Warm tropical climate and stunning natural scenery',
      'Large, welcoming digital nomad communities (Chiang Mai, Bangkok)',
      'Excellent private healthcare at low cost',
      'Strong co-working culture and infrastructure in major cities',
      'Easy access to travel throughout Southeast Asia',
      'Rich Buddhist culture and temples',
      'Very fast mobile internet (AIS, DTAC, True Move) and improving fibre',
      'Friendly local population and "Land of Smiles" culture',
    ],
    cons: [
      'Visa situation is complicated; no clear long-term visa pathway for most',
      'Cannot legally work on tourist visa or most non-immigrant visas without work permit',
      'Language barrier is significant; Thai script is difficult',
      'Extreme heat during hot season (March–May)',
      'Air quality issues in Chiang Mai during burning season (Feb–April)',
      'Traffic in Bangkok is notoriously terrible',
      'LTR visa has high income/asset requirements',
      'Political instability and occasional military coups historically',
      'Strict lèse-majesté laws with severe penalties',
      'Limited political rights for foreigners; cannot own land freehold',
    ],
    lastVerified: '2026-03-15',
  },
  {
    slug: 'costa-rica',
    name: 'Costa Rica',
    flag: '🇨🇷',
    continent: 'North America',
    heroImage: '/images/countries/costa-rica.jpg',
    population: '5.2 million',
    capital: 'San José',
    currency: 'Costa Rican Colón (CRC)',
    language: 'Spanish',
    timezone: 'CST (UTC-6, no daylight saving time)',
    costIndex: 5,
    safetyRating: 4,
    internetSpeed: 55,
    healthcareRating: 4,
    climate: {
      type: 'Tropical with dry and rainy seasons; varies by altitude and region',
      avgTemp: '22°C (72°F) in San José (1,161m); hotter on coasts 28–32°C',
      bestMonths: ['December', 'January', 'February', 'March', 'April'],
    },
    visaTypes: [
      {
        name: 'Tourist Visa / Visa Exemption',
        type: 'Short-term visitor',
        duration: '90 days (extendable once for another 90 days)',
        cost: 'Free for eligible nationalities',
        requirements: [
          'Valid passport with at least 6 months validity',
          'Return or onward ticket to country of residence',
          'Proof of sufficient funds ($100 USD per month of stay, minimum $300)',
          'Travel health insurance (technically required; enforcement varies)',
          'No criminal record',
        ],
        difficulty: 'Easy',
        processingTime: 'Issued at port of entry',
        description:
          'Costa Rica grants visa-free entry for 90 days to citizens of the US, Canada, EU, UK, and many other countries. The stay can be extended once for an additional 90 days at the Dirección General de Migración y Extranjería (DGME) for ~$100 USD. After 180 days you must exit for at least 72 hours before re-entering, though immigration authorities have become stricter about "perpetual tourists."',
      },
      {
        name: 'Rentista Visa',
        type: 'Passive income residency',
        duration: '2 years (renewable indefinitely; leads to permanent residency after 3 years)',
        cost: '$50 USD application fee + ~$250–$500 in document authentication and legal fees',
        requirements: [
          'Proof of stable passive income of at least $2,500 USD/month (from investments, savings, rental income — NOT employment)',
          'The income must be deposited monthly into a Costa Rican bank account OR can be demonstrated through a deposit of $60,000 in a Costa Rican bank as a lump sum',
          'Valid passport',
          'Criminal background check from home country (apostilled)',
          'Birth certificate (apostilled)',
          'Marriage certificate if applicable (apostilled)',
          'Medical certificate',
          'Two passport photos',
          'Completed DGME application',
          'Health insurance (CAJA enrollment or private)',
        ],
        difficulty: 'Medium',
        processingTime: '6–12 months for DGME approval',
        description:
          'The Rentista category is for individuals with guaranteed passive income from sources such as investment portfolios, property rentals, trust funds, or similar instruments — but NOT from employment or services. The $2,500/month income requirement must be documented and stable. After 3 years of legal residency, you can apply for permanent residency.',
      },
      {
        name: 'Pensionado Visa',
        type: 'Retiree residency',
        duration: '2 years (renewable; permanent residency available after 3 years)',
        cost: '$50 USD application fee + ~$250–$500 in document and legal fees',
        requirements: [
          'Proof of lifetime pension income of at least $1,000 USD/month (government pension, private pension, Social Security, etc.)',
          'Pension must be permanent and guaranteed (annuity or defined benefit pension)',
          'Valid passport',
          'Criminal background check (apostilled)',
          'Birth certificate (apostilled)',
          'Pension income letter from issuing institution',
          'Medical certificate',
          'Two passport photos',
          'Health insurance (CAJA or private)',
        ],
        difficulty: 'Easy',
        processingTime: '6–12 months for DGME approval',
        description:
          'Costa Rica\'s Pensionado programme is one of the most generous retirement visa schemes in the world, requiring only $1,000/month in pension income. It is one of the most affordable retirement pathways in Latin America. Benefits include: 20% discount on entertainment and healthcare services, discounts on airline tickets, reduced property transfer taxes. After 3 years, permanent residency is available.',
      },
      {
        name: 'Digital Nomad Visa (Rentista Digital)',
        type: 'Remote work residency',
        duration: '1 year (renewable for 1 additional year)',
        cost: '$100 USD application fee',
        requirements: [
          'Proof of remote work income of at least $3,000 USD/month for individual ($4,000/month if bringing dependents)',
          'Employment contract with non-Costa Rican employer OR proof of remote freelance income',
          'Valid passport with at least 1 year validity',
          'Criminal background check from home country (apostilled or with apostille)',
          'Health insurance covering Costa Rica (CAJA enrollment not mandatory for this visa; private insurance accepted)',
          'Bank statements for last 3 months showing income',
          'Letter from employer confirming remote work arrangement',
          'Proof of accommodation',
          'Two passport photos',
        ],
        difficulty: 'Medium',
        processingTime: '4–8 weeks',
        description:
          'Costa Rica launched its Digital Nomad Visa in August 2021 (Law No. 10109), making it one of the first Latin American countries to formalise remote worker residency. The visa grants 1 year of legal residency (extendable once for a second year) and holders are exempt from Costa Rican income tax on foreign-sourced income. After the 2-year maximum, applicants must apply for a different residency category to continue living in Costa Rica. Dependents (spouse and children under 18) may be included.',
      },
    ],
    costOfLiving: {
      rent1BR: '$700–$1,400/month (San José Escazú/Santa Ana expat areas); $400–$800 (downtown or outlying areas); $800–$1,800 (Tamarindo, Nosara beach towns)',
      rent2BR: '$1,100–$2,200/month (expat areas San José); $600–$1,200 (secondary cities/towns)',
      groceries: '$300–$500/month (imported goods expensive; local produce cheap)',
      dining: '$200–$450/month (soda (local diner) meal $4–$8; mid-range restaurant $15–$30/person)',
      transport: '$40–$100/month (buses very cheap; taxis and Uber available; owning a car recommended outside San José)',
      internet: '$40–$80/month (cable broadband; fibre expanding; reliability varies outside GAM)',
      utilities: '$60–$130/month (electricity, water; no heating/cooling often needed in Central Valley)',
      gym: '$30–$60/month',
      coffee: '$1–$2 (local café); $3–$5 (specialty or expat café)',
    },
    healthcare: {
      system:
        'Costa Rica has a universal public healthcare system (Caja Costarricense de Seguro Social, CAJA/CCSS), considered one of Latin America\'s best. Legal residents are required to enroll in and pay into CAJA. The system provides comprehensive care at low cost. Private hospitals (Clínica Bíblica, CIMA Hospital, Clínica Católica) offer shorter wait times and are favored by expats and medical tourists.',
      quality: 'Good to Very Good; one of Latin America\'s best healthcare systems',
      publicAvailable: true,
      insuranceCost: '$80–$200/month for private health insurance; CAJA contributions ~10–11% of declared income for self-employed',
      emergencyNumber: '911',
    },
    pros: [
      '"Pura Vida" culture — laid-back, friendly, positive lifestyle',
      'Political stability and no standing army since 1948; one of Latin America\'s oldest democracies',
      'Outstanding biodiversity: 5% of world\'s species in 0.03% of land area',
      '99%+ renewable energy electricity grid',
      'Strong environmental and sustainability ethos ("green" country)',
      'Good public healthcare (CAJA) accessible to legal residents',
      'No tax on foreign-sourced income',
      'Safe by regional standards; one of Central America\'s safest countries',
      'Welcoming, English-speaking expat communities (Tamarindo, Nosara, Escazú)',
      'Digital Nomad Visa with clear legal framework',
    ],
    cons: [
      'More expensive than other Central American countries; imported goods costly',
      'Infrastructure can be poor: many roads unpaved, potholes common',
      'Internet reliability is inconsistent outside the Greater Metropolitan Area (GAM)',
      'Petty theft is common in tourist areas and San José',
      'Rainy season (May–November) brings heavy, persistent rain particularly in the afternoon/evening',
      'Driving can be stressful; road conditions poor in rural areas',
      'Healthcare residency bureaucracy (CAJA enrollment) can be complex',
      'Cost of living has risen significantly in expat-popular areas',
      'Limited nightlife and entertainment compared to larger cities',
      'Earthquake and volcano activity (though rarely catastrophic)',
    ],
    lastVerified: '2026-03-15',
  },
];
