export interface Neighborhood {
  name: string;
  vibe: string;
  avgRentRange: string;
  pros: string[];
  cons: string[];
  bestFor: string;
}

export interface CoworkingSpace {
  name: string;
  priceRange: string;
  vibe: string;
}

export interface CostBreakdown {
  studioRent: string;
  oneBRRent: string;
  twoBRRent: string;
  groceries: string;
  diningOut: string;
  transport: string;
  utilities: string;
  internet: string;
}

export interface City {
  slug: string;
  name: string;
  country: string;
  countrySlug: string;
  flag: string;
  heroDescription: string;
  population: string;
  expatCommunitySize: string;
  costBreakdown: CostBreakdown;
  neighborhoods: Neighborhood[];
  coworkingSpaces: CoworkingSpace[];
  healthcare: {
    nearestInternationalHospital: string;
    qualityRating: number;
  };
  internet: {
    avgSpeed: number;
    reliabilityRating: number;
  };
  safety: {
    overallRating: number;
    areasToAvoid: string[];
    tips: string[];
  };
  weather: {
    avgTempsBySeasonF: { spring: string; summer: string; fall: string; winter: string };
    rainySeason: string;
  };
  gettingAround: { mode: string; cost: string }[];
  insiderTips: string[];
}

export const cities: City[] = [
  // ─────────────────────────────────────────────
  // PORTUGAL
  // ─────────────────────────────────────────────
  {
    slug: 'lisbon',
    name: 'Lisbon',
    country: 'Portugal',
    countrySlug: 'portugal',
    flag: '🇵🇹',
    heroDescription:
      'Europe\'s sunniest capital blends centuries-old tiled facades with a booming tech scene, world-class pastéis de nata, and some of the fastest fiber internet on the continent.',
    population: '545,000 (metro: 2.9 million)',
    expatCommunitySize: 'Very large — estimated 100,000+ expats and digital nomads',
    costBreakdown: {
      studioRent: '€900–€1,300/mo',
      oneBRRent: '€1,100–€1,600/mo',
      twoBRRent: '€1,400–€2,200/mo',
      groceries: '€250–€350/mo',
      diningOut: '€10–€18 per meal',
      transport: '€40/mo (Navegante metro pass)',
      utilities: '€100–€150/mo',
      internet: '€30–€40/mo (fiber, 200–500 Mbps)',
    },
    neighborhoods: [
      {
        name: 'Príncipe Real',
        vibe: 'Upscale, leafy, LGBTQ+-friendly with boutique shops and rooftop bars',
        avgRentRange: '€1,400–€2,200/mo for a 1BR',
        pros: [
          'Beautiful garden (Jardim Botânico) and miradouro',
          'Walkable to Bairro Alto nightlife',
          'Excellent brunch and specialty coffee scene',
        ],
        cons: [
          'Highest rents in the city center',
          'Street parking is nearly impossible',
          'Can be noisy on weekend nights near Bairro Alto border',
        ],
        bestFor: 'solo, couple',
      },
      {
        name: 'Alfama',
        vibe: 'Historic, winding streets, fado music, tourist-heavy but atmospheric',
        avgRentRange: '€1,000–€1,500/mo for a 1BR',
        pros: [
          'Authentic Lisbon character and architecture',
          'Walking distance to the waterfront and Castelo de São Jorge',
          'Great local tascas with affordable lunch menus',
        ],
        cons: [
          'Very steep hills — not wheelchair or stroller friendly',
          'Heavy tourist foot traffic, especially around Portas do Sol',
          'Older buildings with poor insulation and no central heating',
        ],
        bestFor: 'solo',
      },
      {
        name: 'Estrela / Lapa',
        vibe: 'Quiet, residential, embassy district with family-friendly parks',
        avgRentRange: '€1,200–€1,800/mo for a 1BR',
        pros: [
          'Jardim da Estrela is one of Lisbon\'s best parks',
          'Close to international schools (St. Julian\'s, Lycée Français)',
          'Tram 28 and good bus connections',
        ],
        cons: [
          'Fewer restaurants and nightlife compared to central neighborhoods',
          'Slightly farther from the main tech/startup hubs',
          'Limited metro access — nearest station is Rato',
        ],
        bestFor: 'family, couple',
      },
      {
        name: 'Intendente / Arroios',
        vibe: 'Multicultural, up-and-coming, affordable by Lisbon standards',
        avgRentRange: '€900–€1,300/mo for a 1BR',
        pros: [
          'Most diverse food scene in Lisbon — Indian, Nepalese, Chinese, African',
          'Direct metro access on the green line',
          'Rapidly improving with new cafés and coworking spaces',
        ],
        cons: [
          'Some blocks still feel rough, especially late at night',
          'Construction noise from ongoing renovation projects',
          'Gentrifying fast, so rents are climbing year over year',
        ],
        bestFor: 'solo, couple',
      },
    ],
    coworkingSpaces: [
      {
        name: 'Second Home Lisboa',
        priceRange: '€250–€350/mo for a hot desk',
        vibe: 'Design-forward space in the Mercado da Ribeira building with lush plants and natural light',
      },
      {
        name: 'Outsite Lisbon (Cais do Sodré)',
        priceRange: '€200–€280/mo for a hot desk',
        vibe: 'Digital nomad–oriented with coliving option, rooftop, and community events',
      },
      {
        name: 'LACS Conde D\'Óbidos',
        priceRange: '€180–€260/mo for a hot desk',
        vibe: 'Creative industries hub in a converted warehouse near Santos',
      },
    ],
    healthcare: {
      nearestInternationalHospital: 'Hospital da Luz Lisboa',
      qualityRating: 8,
    },
    internet: {
      avgSpeed: 190,
      reliabilityRating: 9,
    },
    safety: {
      overallRating: 8,
      areasToAvoid: [
        'Martim Moniz area late at night',
        'Cais do Sodré after 3 AM on weekends (drunk crowds)',
        'Chelas (eastern suburbs)',
      ],
      tips: [
        'Pickpocketing is the main risk — watch your pockets on Tram 28 and in Baixa',
        'Avoid leaving bags unattended at Rossio or Terreiro do Paço',
        'Portugal is one of the safest countries in Europe; violent crime is very rare',
      ],
    },
    weather: {
      avgTempsBySeasonF: {
        spring: '58–68°F',
        summer: '72–85°F',
        fall: '60–72°F',
        winter: '48–58°F',
      },
      rainySeason: 'November through February; summers are almost entirely dry',
    },
    gettingAround: [
      { mode: 'Metro', cost: '€1.65 single trip / €40 monthly Navegante pass (all zones)' },
      { mode: 'Tram', cost: 'Included with Navegante pass' },
      { mode: 'Bolt / Uber', cost: '€5–€12 for most trips within the city' },
      { mode: 'E-scooter (Lime, Bolt)', cost: '€0.25/min + €1 unlock' },
      { mode: 'Bike (Gira)', cost: '€25/year for the municipal bike-share system' },
    ],
    insiderTips: [
      'Get the Navegante municipal pass (€40/mo) — it covers metro, bus, tram, and ferries across all Lisbon zones and is far cheaper than individual tickets.',
      'Avoid eating near Praça do Comércio or Rossio; instead walk 5 minutes to Rua dos Bacalhoeiros or Intendente for meals that are half the price and twice as good.',
      'NHR tax status was replaced by the IFICI regime in 2024 — consult a Portuguese tax advisor (try Borga & Associates or Lisbontax) before assuming you qualify for the 20% flat rate.',
      'Lisbon apartments rarely come with air conditioning or central heating. Bring a portable heater for winter and budget for a portable AC unit in summer, or negotiate installation with your landlord.',
      'The Facebook group "Lisbon Digital Nomads" and the Slack community "Nomads Lisboa" are the best places to find short-term rentals and roommate situations — far better than Idealista for furnished places.',
    ],
  },
  {
    slug: 'porto',
    name: 'Porto',
    country: 'Portugal',
    countrySlug: 'portugal',
    flag: '🇵🇹',
    heroDescription:
      'Portugal\'s second city delivers port wine cellars along the Douro, a gritty creative energy, and significantly lower rents than Lisbon — with the same fast fiber internet.',
    population: '250,000 (metro: 1.7 million)',
    expatCommunitySize: 'Large — estimated 30,000+ expats, growing rapidly',
    costBreakdown: {
      studioRent: '€650–€950/mo',
      oneBRRent: '€800–€1,200/mo',
      twoBRRent: '€1,000–€1,600/mo',
      groceries: '€220–€320/mo',
      diningOut: '€8–€15 per meal',
      transport: '€40/mo (Andante metro pass)',
      utilities: '€90–€130/mo',
      internet: '€30–€35/mo (fiber, 200–500 Mbps)',
    },
    neighborhoods: [
      {
        name: 'Cedofeita / Galerias',
        vibe: 'Artsy, youthful, filled with galleries, vinyl shops, and natural wine bars',
        avgRentRange: '€800–€1,200/mo for a 1BR',
        pros: [
          'Best café and specialty coffee density in Porto (Mesa 325, Combi Coffee)',
          'Central location with flat terrain — easy walking and cycling',
          'Rua de Miguel Bombarda gallery district',
        ],
        cons: [
          'Street noise from nightlife, especially Thursday–Saturday',
          'Parking is very limited',
          'Some landlords only rent unfurnished',
        ],
        bestFor: 'solo, couple',
      },
      {
        name: 'Foz do Douro',
        vibe: 'Upscale, seaside, quiet residential streets near the river mouth',
        avgRentRange: '€1,000–€1,600/mo for a 1BR',
        pros: [
          'Ocean and river access — beautiful promenade walks',
          'Quieter and more spacious apartments than the center',
          'Good for families with Jardim do Passeio Alegre',
        ],
        cons: [
          'Far from the city center (20 min by bus/tram)',
          'Fewer coworking spaces and cafés for remote workers',
          'Higher rents compared to central Porto',
        ],
        bestFor: 'family, couple',
      },
      {
        name: 'Bonfim',
        vibe: 'Up-and-coming, local, with new restaurants opening monthly',
        avgRentRange: '€700–€1,000/mo for a 1BR',
        pros: [
          'Best value-for-money in central Porto',
          'Authentic neighborhood feel with local markets',
          'Walking distance to Campanhã train station and new food market',
        ],
        cons: [
          'Some streets feel neglected — uneven sidewalks and graffiti',
          'Fewer tourist-oriented amenities',
          'Limited metro coverage — the nearest station is a 10–15 min walk for some blocks',
        ],
        bestFor: 'solo, couple',
      },
    ],
    coworkingSpaces: [
      {
        name: 'Porto i/o (Riverside)',
        priceRange: '€120–€200/mo for a hot desk',
        vibe: 'Community-driven with regular meetups, overlooking the Douro river',
      },
      {
        name: 'CRU Cowork',
        priceRange: '€100–€170/mo for a hot desk',
        vibe: 'Minimalist industrial space in Cedofeita with fast Wi-Fi and quiet work zones',
      },
    ],
    healthcare: {
      nearestInternationalHospital: 'Hospital CUF Porto',
      qualityRating: 8,
    },
    internet: {
      avgSpeed: 180,
      reliabilityRating: 9,
    },
    safety: {
      overallRating: 9,
      areasToAvoid: [
        'São Bento train station area very late at night',
        'Bairro do Aleixo (largely demolished but fringe areas can feel unsafe)',
      ],
      tips: [
        'Porto is generally safer than Lisbon with much less petty crime',
        'Keep valuables secure on the D line metro (Trindade to São Bento) during peak tourist hours',
        'Stick to well-lit streets in Ribeira after midnight',
      ],
    },
    weather: {
      avgTempsBySeasonF: {
        spring: '52–64°F',
        summer: '64–77°F',
        fall: '54–66°F',
        winter: '42–55°F',
      },
      rainySeason: 'October through March — Porto gets significantly more rain than Lisbon',
    },
    gettingAround: [
      { mode: 'Metro', cost: '€1.20–€2.00 single trip / €40 Andante monthly pass' },
      { mode: 'Bus (STCP)', cost: 'Included with Andante pass' },
      { mode: 'Bolt / Uber', cost: '€4–€10 for most trips within the city' },
      { mode: 'Historic Tram (Line 1)', cost: '€3.50 (tourist-oriented)' },
    ],
    insiderTips: [
      'Rents in Porto are 25–35% cheaper than Lisbon and the city has a more walkable scale — you can live without public transport if you pick the right neighborhood.',
      'The Bolhão Market reopened in 2022 after renovation and is the best place for fresh produce, cheese, and bacalhau — go in the morning before 11 AM for the best selection.',
      'Porto\'s winters are cold and damp — most apartments have poor insulation. Ask for photos of the heating system before signing a lease and budget for a dehumidifier.',
      'For the best francesinha (Porto\'s signature sandwich), skip the tourist spots and go to Café Santiago or Capa Negra II on Rua de Passos Manuel.',
      'If you\'re flying Ryanair frequently, Porto is a better hub than Lisbon — OPO has more low-cost routes to European cities.',
    ],
  },

  // ─────────────────────────────────────────────
  // MEXICO
  // ─────────────────────────────────────────────
  {
    slug: 'mexico-city',
    name: 'Mexico City',
    country: 'Mexico',
    countrySlug: 'mexico',
    flag: '🇲🇽',
    heroDescription:
      'A sprawling megalopolis with world-class museums, tacos al pastor at 2 AM, and one of the most exciting food scenes on Earth — all at a fraction of the cost of US cities.',
    population: '9.2 million (metro: 21.8 million)',
    expatCommunitySize: 'Very large — estimated 80,000+ American expats alone, plus large communities from Europe and South America',
    costBreakdown: {
      studioRent: '$8,000–$14,000 MXN/mo ($470–$820 USD)',
      oneBRRent: '$12,000–$22,000 MXN/mo ($700–$1,300 USD)',
      twoBRRent: '$18,000–$35,000 MXN/mo ($1,050–$2,050 USD)',
      groceries: '$3,000–$5,000 MXN/mo ($175–$290 USD)',
      diningOut: '$80–$250 MXN per meal ($5–$15 USD)',
      transport: '$380 MXN/mo for metro ($22 USD) / $2,500–$4,000 MXN for Uber',
      utilities: '$1,000–$2,000 MXN/mo ($60–$115 USD)',
      internet: '$500–$800 MXN/mo ($30–$47 USD)',
    },
    neighborhoods: [
      {
        name: 'Roma Norte',
        vibe: 'Tree-lined streets, art deco buildings, craft cocktail bars, and the digital nomad epicenter',
        avgRentRange: '$15,000–$25,000 MXN/mo for a 1BR ($880–$1,470 USD)',
        pros: [
          'Walkable to restaurants, cafés, and coworking spaces',
          'Beautiful architecture and the Álvaro Obregón corridor',
          'Close to Metro Insurgentes and Metrobús Line 1',
        ],
        cons: [
          'Gentrification has pushed rents up 40%+ since 2020',
          'Can feel like an American expat bubble — less immersive',
          'Street parking is a nightmare; car break-ins happen',
        ],
        bestFor: 'solo, couple',
      },
      {
        name: 'Condesa',
        vibe: 'Leafy, relaxed, Parque México at its center, slightly more upscale than Roma',
        avgRentRange: '$16,000–$28,000 MXN/mo for a 1BR ($940–$1,640 USD)',
        pros: [
          'Parque México and Parque España — best urban green spaces in the city',
          'Excellent brunch and specialty coffee scene',
          'Very walkable with wide sidewalks and bike lanes',
        ],
        cons: [
          'Most expensive neighborhood alongside Polanco',
          'September 2017 earthquake damage led to ongoing building inspections — check seismic certifications',
          'Tourist-heavy restaurants along Tamaulipas',
        ],
        bestFor: 'couple, family',
      },
      {
        name: 'Coyoacán',
        vibe: 'Colonial, bohemian, university-town feel around the Frida Kahlo Museum',
        avgRentRange: '$10,000–$18,000 MXN/mo for a 1BR ($590–$1,050 USD)',
        pros: [
          'More affordable than Roma/Condesa with larger apartments',
          'Rich cultural life — Cineteca Nacional, UNAM campus, Viveros park',
          'Mercado de Coyoacán for incredible tostadas and fresh produce',
        ],
        cons: [
          'Farther from the digital nomad hubs — 30+ min Uber to Roma',
          'Public transport options are more limited (Metro line 3 edge)',
          'Fewer coworking spaces',
        ],
        bestFor: 'family, couple',
      },
      {
        name: 'Juárez / Cuauhtémoc',
        vibe: 'Central, edgy, fast-gentrifying with new galleries and Korean restaurants',
        avgRentRange: '$11,000–$18,000 MXN/mo for a 1BR ($640–$1,050 USD)',
        pros: [
          'Walking distance to both Roma and the Centro Histórico',
          'Excellent Metro access (Cuauhtémoc, Balderas, Juárez stations)',
          'Lower rents than Roma with a similar lifestyle',
        ],
        cons: [
          'Some blocks feel sketchy after dark, especially west of Bucareli',
          'Street noise from Paseo de la Reforma',
          'Fewer grocery stores — rely on Cornershop delivery or Superama in Roma',
        ],
        bestFor: 'solo',
      },
    ],
    coworkingSpaces: [
      {
        name: 'WeWork Varsovia (Roma Norte)',
        priceRange: '$4,500–$7,000 MXN/mo ($265–$410 USD)',
        vibe: 'Polished, corporate-meets-creative with rooftop bar and strong AC',
      },
      {
        name: 'Selina CDMX Downtown',
        priceRange: '$3,000–$5,500 MXN/mo ($175–$320 USD)',
        vibe: 'Backpacker-chic with coliving, a pool, and social events — younger crowd',
      },
      {
        name: 'Homework Condesa',
        priceRange: '$3,500–$5,000 MXN/mo ($205–$290 USD)',
        vibe: 'Quiet, professional space with dedicated desks, natural light, and a garden terrace',
      },
    ],
    healthcare: {
      nearestInternationalHospital: 'Hospital ABC (Centro Médico ABC)',
      qualityRating: 8,
    },
    internet: {
      avgSpeed: 75,
      reliabilityRating: 7,
    },
    safety: {
      overallRating: 6,
      areasToAvoid: [
        'Tepito (open-air black market — serious risk)',
        'Doctores (south of Centro) after dark',
        'Iztapalapa (eastern suburb with high crime rates)',
        'La Merced area at night',
      ],
      tips: [
        'Use Uber/Didi instead of street hailing taxis — registered taxi kidnappings still occur',
        'Don\'t wear flashy jewelry or watches on public transit',
        'Carry a copy of your passport, not the original',
        'The expat neighborhoods (Roma, Condesa, Polanco) are generally safe during daytime hours',
      ],
    },
    weather: {
      avgTempsBySeasonF: {
        spring: '60–80°F',
        summer: '58–76°F',
        fall: '55–72°F',
        winter: '45–68°F',
      },
      rainySeason: 'June through September — expect heavy afternoon downpours most days, but mornings are usually clear',
    },
    gettingAround: [
      { mode: 'Metro', cost: '$5 MXN per ride (~$0.30 USD) — one of the cheapest in the world' },
      { mode: 'Metrobús', cost: '$6 MXN per ride with dedicated bus lanes' },
      { mode: 'Uber / Didi', cost: '$40–$120 MXN for most rides ($2.50–$7 USD)' },
      { mode: 'Ecobici (bike share)', cost: '$500 MXN/year (~$30 USD)' },
    ],
    insiderTips: [
      'Ask for your apartment lease in both Spanish and English, and have a local lawyer review it — landlords in Roma/Condesa sometimes add clauses requiring 6+ months upfront or forfeiture of deposits without cause.',
      'Altitude sickness is real at 2,240m (7,350 ft). Take it easy the first 2–3 days, stay hydrated, and avoid heavy drinking upon arrival.',
      'For furnished apartments, check Inmuebles24 and Facebook groups ("Departamentos Roma Condesa CDMX") before Airbnb — you\'ll pay 30–50% less for the same quality.',
      'Get a Mexican phone number with Telcel (best coverage) or AT&T México immediately — many services, banks, and delivery apps require a local number.',
      'The best tacos are not in Roma/Condesa. Take a Uber to Taquería Orinoco (Monterrey-style) in Roma, El Vilsito in Narvarte (a mechanic shop that becomes a taquería at night), or Tacos Hola in the Centro.',
    ],
  },
  {
    slug: 'playa-del-carmen',
    name: 'Playa del Carmen',
    country: 'Mexico',
    countrySlug: 'mexico',
    flag: '🇲🇽',
    heroDescription:
      'A Caribbean beach town turned digital nomad hub on the Riviera Maya — warm year-round, with cenotes, scuba diving, and a walkable downtown strip along Quinta Avenida.',
    population: '350,000',
    expatCommunitySize: 'Large — estimated 20,000+ expats, heavily American and European',
    costBreakdown: {
      studioRent: '$10,000–$16,000 MXN/mo ($590–$940 USD)',
      oneBRRent: '$14,000–$22,000 MXN/mo ($820–$1,300 USD)',
      twoBRRent: '$20,000–$32,000 MXN/mo ($1,175–$1,880 USD)',
      groceries: '$3,500–$5,500 MXN/mo ($205–$320 USD)',
      diningOut: '$100–$300 MXN per meal ($6–$18 USD)',
      transport: '$500–$1,500 MXN/mo (bike + occasional colectivo)',
      utilities: '$1,200–$2,500 MXN/mo ($70–$145 USD) — AC is expensive',
      internet: '$600–$900 MXN/mo ($35–$53 USD)',
    },
    neighborhoods: [
      {
        name: 'Centro (near Quinta Avenida)',
        vibe: 'Walkable, lively, tourist-heavy with shops, restaurants, and beach access',
        avgRentRange: '$16,000–$24,000 MXN/mo for a 1BR ($940–$1,410 USD)',
        pros: [
          'Walk to the beach in under 5 minutes',
          'Everything you need within walking distance',
          'Best nightlife and restaurant density',
        ],
        cons: [
          'Noisy, especially on 5th Avenue and 12th Street',
          'Tourist-inflated prices at most restaurants',
          'Apartment quality varies wildly — inspect before signing',
        ],
        bestFor: 'solo',
      },
      {
        name: 'Playacar (Phase 2)',
        vibe: 'Gated residential community with golf courses, quiet streets, and wildlife',
        avgRentRange: '$18,000–$28,000 MXN/mo for a 1BR ($1,050–$1,640 USD)',
        pros: [
          'Very safe — gated with 24/7 security',
          'Peaceful with iguanas, coatis, and lush vegetation',
          'Private beach access',
        ],
        cons: [
          'Need a car or bike to get to town',
          'Can feel isolated — limited walkable restaurants',
          'HOA fees on top of rent',
        ],
        bestFor: 'family, couple',
      },
      {
        name: 'Ejidal / Gonzalo Guerrero',
        vibe: 'Local-feeling residential area just west of Quinta Avenida with growing café scene',
        avgRentRange: '$12,000–$18,000 MXN/mo for a 1BR ($700–$1,050 USD)',
        pros: [
          'More affordable and authentic than beachfront areas',
          'Walking distance to Quinta Avenida (10–15 min)',
          'Good taco stands and local comedores',
        ],
        cons: [
          'No beach views or direct ocean access',
          'Some streets lack proper sidewalks',
          'Periodic flooding in heavy rains',
        ],
        bestFor: 'solo, couple',
      },
    ],
    coworkingSpaces: [
      {
        name: 'Nest Coworking Playa',
        priceRange: '$3,500–$5,500 MXN/mo ($205–$320 USD)',
        vibe: 'Modern, air-conditioned, 2 blocks from the beach with community events',
      },
      {
        name: 'Bunker Coworking',
        priceRange: '$3,000–$4,500 MXN/mo ($175–$265 USD)',
        vibe: 'Underground (literally) workspace with strong AC and no distractions',
      },
    ],
    healthcare: {
      nearestInternationalHospital: 'Hospiten Riviera Maya',
      qualityRating: 7,
    },
    internet: {
      avgSpeed: 55,
      reliabilityRating: 6,
    },
    safety: {
      overallRating: 6,
      areasToAvoid: [
        'Blocks west of Highway 307 (Avenida Federal) at night',
        'La Guadalupana neighborhood after dark',
        'Deserted stretches of beach late at night',
      ],
      tips: [
        'Cartel-related violence occasionally spills into the tourist zone — follow local news and US embassy alerts',
        'Avoid buying drugs — undercover police stings and cartel-connected dealers are common',
        'Use hotel/apartment safes for passports and valuables',
      ],
    },
    weather: {
      avgTempsBySeasonF: {
        spring: '80–90°F',
        summer: '82–92°F',
        fall: '78–88°F',
        winter: '72–84°F',
      },
      rainySeason: 'June through October, with hurricane season peaking August–September',
    },
    gettingAround: [
      { mode: 'Bicycle', cost: '$1,500–$2,500 MXN/mo to rent ($90–$145 USD)' },
      { mode: 'Colectivo (shared van)', cost: '$15–$45 MXN depending on distance' },
      { mode: 'Uber / Taxi', cost: '$30–$80 MXN for local trips' },
      { mode: 'ADO Bus (to Cancún/Tulum)', cost: '$80–$250 MXN per trip' },
    ],
    insiderTips: [
      'Buy a used beach cruiser bike for $2,000–$3,000 MXN instead of renting — Playa is flat and cycling is the best way to get around. Sell it when you leave on Facebook Marketplace.',
      'Internet reliability is the biggest issue for remote workers. Always have a Telcel hotspot as backup — fiber coverage is spotty outside the main avenues.',
      'The best cenotes for swimming are Cenote Azul and Cenote Cristalino near Puerto Aventuras (20 min south), not the overcrowded ones promoted to tourists.',
      'Negotiate rent directly with landlords on the ground — Airbnb prices are 40–60% higher. Walk the neighborhoods and look for "Se Renta" signs.',
      'Sargassum seaweed season (April–August) can make beaches unusable. Check the real-time sargassum map at sfrdata.org before booking beachfront accommodation.',
    ],
  },

  // ─────────────────────────────────────────────
  // SPAIN
  // ─────────────────────────────────────────────
  {
    slug: 'barcelona',
    name: 'Barcelona',
    country: 'Spain',
    countrySlug: 'spain',
    flag: '🇪🇸',
    heroDescription:
      'Gaudí architecture, Mediterranean beaches, and a deep creative and tech scene converge in Spain\'s most cosmopolitan city — with tapas, vermouth, and year-round sunshine.',
    population: '1.65 million (metro: 5.6 million)',
    expatCommunitySize: 'Very large — estimated 300,000+ foreign residents',
    costBreakdown: {
      studioRent: '€850–€1,200/mo',
      oneBRRent: '€1,100–€1,700/mo',
      twoBRRent: '€1,400–€2,300/mo',
      groceries: '€250–€380/mo',
      diningOut: '€12–€20 per meal',
      transport: '€40/mo (T-usual metro/bus pass)',
      utilities: '€120–€170/mo',
      internet: '€30–€45/mo (fiber, 300–600 Mbps)',
    },
    neighborhoods: [
      {
        name: 'El Born (Sant Pere, Santa Caterina)',
        vibe: 'Medieval streets, indie boutiques, natural wine bars, and Picasso Museum proximity',
        avgRentRange: '€1,200–€1,800/mo for a 1BR',
        pros: [
          'One of the most beautiful neighborhoods in Europe',
          'Walkable to the beach and Ciutadella Park',
          'Vibrant bar and restaurant scene on Passeig del Born',
        ],
        cons: [
          'Very noisy at night — bars are open until 3 AM',
          'Small, older apartments with limited storage',
          'Tourist congestion around Santa Maria del Mar',
        ],
        bestFor: 'solo, couple',
      },
      {
        name: 'Gràcia',
        vibe: 'Village-within-a-city feel, independent shops, plaças with outdoor terraces',
        avgRentRange: '€1,000–€1,500/mo for a 1BR',
        pros: [
          'Strong community feel with local festivities (Festa Major de Gràcia in August)',
          'Many plazas for outdoor working and socializing (Plaça del Sol, Plaça de la Vila)',
          'Slightly cheaper than Eixample with more character',
        ],
        cons: [
          'Hilly streets in the upper parts',
          'Parking is nearly impossible',
          'Narrow streets amplify noise from bars on plaza',
        ],
        bestFor: 'solo, couple',
      },
      {
        name: 'Eixample (Esquerra)',
        vibe: 'Grid-plan avenues, modernist architecture, excellent connectivity, family-friendly',
        avgRentRange: '€1,200–€1,800/mo for a 1BR',
        pros: [
          'Best metro connectivity in the city (multiple lines)',
          'Wide sidewalks and bike lanes on superblocks',
          'Abundant grocery stores, pharmacies, and services',
        ],
        cons: [
          'Can feel impersonal compared to older neighborhoods',
          'Interior apartments on light wells can be dark',
          'Street-facing units pick up significant traffic noise',
        ],
        bestFor: 'family, couple',
      },
      {
        name: 'Poblenou',
        vibe: 'Former industrial district turned tech hub (22@) with beach access and creative studios',
        avgRentRange: '€1,100–€1,600/mo for a 1BR',
        pros: [
          'Closest residential area to the best city beaches',
          'Growing tech and startup ecosystem in the 22@ district',
          'Rambla del Poblenou is a charming local pedestrian street',
        ],
        cons: [
          'Still gentrifying — some blocks feel empty or under construction',
          'Fewer restaurants and nightlife than central Barcelona',
          'Can feel windy near the waterfront in winter',
        ],
        bestFor: 'solo, couple',
      },
    ],
    coworkingSpaces: [
      {
        name: 'Heden (Eixample)',
        priceRange: '€250–€350/mo for a hot desk',
        vibe: 'Scandinavian design, excellent espresso bar, and a strong community of freelancers and startups',
      },
      {
        name: 'MOB (Makers of Barcelona) — Bailén',
        priceRange: '€190–€280/mo for a hot desk',
        vibe: 'Cooperative-model coworking with a social impact focus, events, and workshops',
      },
      {
        name: 'Aticco (22@ Poblenou)',
        priceRange: '€220–€320/mo for a hot desk',
        vibe: 'Modern, corporate-style with meeting rooms, phone booths, and a rooftop terrace',
      },
    ],
    healthcare: {
      nearestInternationalHospital: 'Hospital Clínic de Barcelona',
      qualityRating: 9,
    },
    internet: {
      avgSpeed: 200,
      reliabilityRating: 9,
    },
    safety: {
      overallRating: 7,
      areasToAvoid: [
        'El Raval (south of Carrer de l\'Hospital) — petty crime hotspot',
        'La Rambla — pickpocket central, especially at night',
        'Barceloneta beach after dark',
      ],
      tips: [
        'Pickpocketing is Barcelona\'s biggest safety issue — use a crossbody bag and keep phones in front pockets',
        'Metro Line 3 (green) is the worst for pickpockets, especially Liceu and Drassanes stations',
        'Apartment break-ins happen in ground-floor units — always choose upper floors or buildings with portero',
      ],
    },
    weather: {
      avgTempsBySeasonF: {
        spring: '55–68°F',
        summer: '72–86°F',
        fall: '58–72°F',
        winter: '42–55°F',
      },
      rainySeason: 'October and November are the wettest; summers are hot and dry',
    },
    gettingAround: [
      { mode: 'Metro / Bus (TMB)', cost: '€11.35 for T-casual 10-trip / €40 T-usual monthly' },
      { mode: 'Bicing (bike share)', cost: '€50/year — the best deal in the city' },
      { mode: 'Cabify / FreeNow', cost: '€7–€15 for most trips (Uber is limited in Barcelona)' },
      { mode: 'Renfe Rodalies (commuter rail)', cost: '€2–€5 per trip' },
    ],
    insiderTips: [
      'Uber operates in Barcelona but with licensed taxi drivers only (VTC), so use Cabify or FreeNow (formerly MyTaxi) — they\'re cheaper and more reliable here.',
      'To get a rental apartment, you\'ll need a NIE (foreigner ID number), 2 months deposit, and often proof of employment or 6 months rent in a Spanish bank. Start the NIE process immediately upon arrival at the Oficina de Extranjería.',
      'Barcelona\'s digital nomad visa (Ley de Startups) requires proving €2,520/mo income. Apply through the Spanish consulate before arrival for a smoother process.',
      'For groceries, Mercadona is the best value chain. For quality produce, visit Mercat de Sant Antoni (reopened after renovation) or Mercat de l\'Abaceria in Gràcia.',
      'Join the "Barcelona Expats" and "Digital Nomads Barcelona" Telegram groups — they\'re more active than Facebook for apartment leads and meetups.',
    ],
  },
  {
    slug: 'valencia',
    name: 'Valencia',
    country: 'Spain',
    countrySlug: 'spain',
    flag: '🇪🇸',
    heroDescription:
      'Spain\'s third-largest city delivers beach life, the futuristic City of Arts and Sciences, and a paella birthplace claim — with rents 30–40% below Barcelona.',
    population: '800,000 (metro: 1.6 million)',
    expatCommunitySize: 'Large and growing — estimated 40,000+ expats, increasingly popular with remote workers',
    costBreakdown: {
      studioRent: '€600–€900/mo',
      oneBRRent: '€750–€1,100/mo',
      twoBRRent: '€950–€1,500/mo',
      groceries: '€220–€320/mo',
      diningOut: '€10–€16 per meal',
      transport: '€40/mo (Metrovalencia pass)',
      utilities: '€100–€140/mo',
      internet: '€30–€40/mo (fiber, 300–600 Mbps)',
    },
    neighborhoods: [
      {
        name: 'Ruzafa',
        vibe: 'Hipster epicenter — vintage shops, brunch spots, street art, and buzzing nightlife',
        avgRentRange: '€850–€1,200/mo for a 1BR',
        pros: [
          'Best café and restaurant density in Valencia',
          'Walkable to the central market and train station',
          'Strong expat and digital nomad community',
        ],
        cons: [
          'Most popular = most expensive non-luxury neighborhood',
          'Very noisy on weekends — terrace bars until 2 AM',
          'Parking is extremely limited',
        ],
        bestFor: 'solo, couple',
      },
      {
        name: 'El Cabanyal',
        vibe: 'Former fishing village with colorful tiled houses, beach access, and a DIY creative scene',
        avgRentRange: '€650–€1,000/mo for a 1BR',
        pros: [
          'Direct access to Malvarrosa and Cabanyal beaches',
          'Rapidly improving with new restaurants and galleries',
          'More affordable than Ruzafa with bigger apartments',
        ],
        cons: [
          'Some streets remain run-down — gentrification is uneven',
          'Farther from the city center (20 min by tram)',
          'Beach area flooding risk during rare gota fría storms',
        ],
        bestFor: 'solo, couple',
      },
      {
        name: 'Benimaclet',
        vibe: 'University-adjacent, alternative, with a community garden scene and student energy',
        avgRentRange: '€600–€900/mo for a 1BR',
        pros: [
          'Cheapest central neighborhood with good quality of life',
          'Strong local community with markets and festivals',
          'Metro access on Lines 1 and 2',
        ],
        cons: [
          'Student-heavy area — turnover is high and apartments are basic',
          'Farther from the beach (30 min walk)',
          'Limited upscale dining options',
        ],
        bestFor: 'solo',
      },
      {
        name: 'Ciutat Vella (El Carmen)',
        vibe: 'Historic old town with medieval towers, plazas, and a labyrinth of pedestrian streets',
        avgRentRange: '€800–€1,200/mo for a 1BR',
        pros: [
          'Stunning architecture and walkable historic center',
          'Central Market and Mercat de Colón nearby',
          'Car-free streets in much of the neighborhood',
        ],
        cons: [
          'Tourist noise and nightlife on Calle de Caballeros',
          'Old buildings with limited modern amenities',
          'Ground-floor apartments can be damp',
        ],
        bestFor: 'solo, couple',
      },
    ],
    coworkingSpaces: [
      {
        name: 'Wayco (Ruzafa)',
        priceRange: '€150–€220/mo for a hot desk',
        vibe: 'Bright, well-designed space with a terrace, strong community events, and barista coffee',
      },
      {
        name: 'Nido Coworking',
        priceRange: '€120–€180/mo for a hot desk',
        vibe: 'Intimate space near the Turia gardens with a rooftop and quiet work environment',
      },
      {
        name: 'La Pinada Lab',
        priceRange: '€100–€160/mo for a hot desk',
        vibe: 'Sustainability-focused coworking in a former warehouse with indoor plants and natural materials',
      },
    ],
    healthcare: {
      nearestInternationalHospital: 'Hospital Universitari i Politècnic La Fe',
      qualityRating: 8,
    },
    internet: {
      avgSpeed: 185,
      reliabilityRating: 9,
    },
    safety: {
      overallRating: 8,
      areasToAvoid: [
        'Parts of Orriols (northern district) at night',
        'El Carmen\'s club strip in the very early morning hours',
      ],
      tips: [
        'Valencia is generally very safe — safer than Barcelona or Madrid',
        'Basic pickpocket awareness near the Central Market and Fallas festival',
        'Lock your bike properly — bicycle theft is common',
      ],
    },
    weather: {
      avgTempsBySeasonF: {
        spring: '57–72°F',
        summer: '72–90°F',
        fall: '58–75°F',
        winter: '45–60°F',
      },
      rainySeason: 'September–November, with occasional intense "gota fría" (cold drop) flooding events',
    },
    gettingAround: [
      { mode: 'Metro / Tram (Metrovalencia)', cost: '€1.50 single trip / €40 monthly pass' },
      { mode: 'Valenbisi (bike share)', cost: '€30/year — best value transport option' },
      { mode: 'Cabify / FreeNow', cost: '€5–€12 for most trips within the city' },
      { mode: 'EMT Bus', cost: '€1.50 per ride / included in monthly pass' },
    ],
    insiderTips: [
      'Valencia\'s Turia riverbed park is a 9 km green corridor perfect for running, cycling, and working from park cafés — it alone is reason enough to choose this city.',
      'Learn some Valenciano (the local Catalan dialect) even if you speak Spanish — it shows respect and locals appreciate the effort, especially in markets and government offices.',
      'The Fallas festival (March 15–19) is incredible but makes the city nearly unlivable — expect explosions (mascletas) at 2 PM daily, extreme crowds, and zero sleep. Plan accordingly or leave town.',
      'For paella, never order it at a restaurant in El Carmen. Instead, go to La Pepica, Casa Carmela, or any restaurant in El Palmar village (15 min south) where it\'s cooked over wood fire.',
      'Idealista.com is the dominant rental platform. Set alerts and respond within minutes — good apartments in Ruzafa and El Carmen are gone within 24 hours.',
    ],
  },

  // ─────────────────────────────────────────────
  // THAILAND
  // ─────────────────────────────────────────────
  {
    slug: 'bangkok',
    name: 'Bangkok',
    country: 'Thailand',
    countrySlug: 'thailand',
    flag: '🇹🇭',
    heroDescription:
      'A sensory overload capital where ancient temples sit beside towering skyscrapers, street food costs a dollar, and the digital nomad infrastructure is world-class.',
    population: '10.7 million (metro: 16 million)',
    expatCommunitySize: 'Very large — estimated 200,000+ expats from all over the world',
    costBreakdown: {
      studioRent: '฿10,000–฿18,000/mo ($280–$510 USD)',
      oneBRRent: '฿15,000–฿30,000/mo ($425–$850 USD)',
      twoBRRent: '฿25,000–฿50,000/mo ($710–$1,420 USD)',
      groceries: '฿5,000–฿8,000/mo ($140–$225 USD)',
      diningOut: '฿50–฿250 per meal ($1.50–$7 USD for street food / local; $10–$25 for restaurants)',
      transport: '฿2,000–฿4,000/mo for BTS/MRT ($55–$115 USD)',
      utilities: '฿3,000–฿6,000/mo ($85–$170 USD) — AC is the biggest expense',
      internet: '฿600–฿900/mo ($17–$25 USD)',
    },
    neighborhoods: [
      {
        name: 'Ari (Saphan Khwai)',
        vibe: 'Trendy Thai neighborhood with specialty coffee, independent restaurants, and a local feel',
        avgRentRange: '฿15,000–฿25,000/mo for a 1BR condo ($425–$710 USD)',
        pros: [
          'Best food scene in Bangkok for both Thai and international',
          'BTS Ari station for easy transit',
          'Less touristy — feels like "real Bangkok" with a modern twist',
        ],
        cons: [
          'Limited English signage compared to Sukhumvit',
          'Fewer luxury condo options than Silom or Asoke',
          'Some soi (side streets) flood during heavy rains',
        ],
        bestFor: 'solo, couple',
      },
      {
        name: 'Thonglor / Ekkamai',
        vibe: 'Upscale, nightlife-heavy, full of Japanese restaurants, rooftop bars, and condo towers',
        avgRentRange: '฿20,000–฿40,000/mo for a 1BR condo ($570–$1,135 USD)',
        pros: [
          'Premium condo buildings with gyms, pools, and co-working lounges',
          'Excellent BTS connectivity (Thong Lo and Ekkamai stations)',
          'Bangkok\'s dining capital — Iron Fairies, 72 Courtyard, J Avenue',
        ],
        cons: [
          'Expensive by Bangkok standards',
          'Heavy traffic on Sukhumvit, especially during evening rush',
          'Can feel soulless in the mega-condo corridors',
        ],
        bestFor: 'couple, solo',
      },
      {
        name: 'Silom / Sathorn',
        vibe: 'Bangkok\'s financial district with luxury condos, rooftop bars, and Lumpini Park',
        avgRentRange: '฿18,000–฿35,000/mo for a 1BR condo ($510–$995 USD)',
        pros: [
          'Lumpini Park — massive green space for jogging, yoga, and monitor lizard spotting',
          'BTS and MRT interchange at Sala Daeng / Si Lom',
          'Chong Nonsi area has great value condos with skyline views',
        ],
        cons: [
          'Patpong night market area is a red-light district',
          'Rush-hour traffic is the worst in the city',
          'Fewer casual dining options than Thonglor or Ari',
        ],
        bestFor: 'solo, couple',
      },
      {
        name: 'On Nut / Phra Khanong',
        vibe: 'Budget-friendly BTS corridor with Tesco Lotus, night markets, and a growing expat scene',
        avgRentRange: '฿10,000–฿18,000/mo for a 1BR condo ($280–$510 USD)',
        pros: [
          'Best value-for-money on the BTS line',
          'W District market and On Nut night market',
          'Easy access to central Bangkok (15 min BTS to Asoke)',
        ],
        cons: [
          'Farther from central nightlife and attractions',
          'Less walkable — more spread out than central neighborhoods',
          'Flooding risk during monsoon season',
        ],
        bestFor: 'solo, budget-conscious',
      },
    ],
    coworkingSpaces: [
      {
        name: 'HUBBA (Ekkamai)',
        priceRange: '฿4,500–฿7,000/mo ($128–$200 USD)',
        vibe: 'Bangkok\'s original coworking — startup community, regular pitch nights, and strong Wi-Fi',
      },
      {
        name: 'The Hive (Thonglor)',
        priceRange: '฿5,000–฿8,500/mo ($140–$240 USD)',
        vibe: 'Polished multi-floor space with meeting rooms, podcast booth, and excellent coffee',
      },
      {
        name: 'AIS D.C. (Samyan)',
        priceRange: 'Free (sponsored by AIS telecom)',
        vibe: 'Free coworking in the Samyan Mitrtown mall — fast internet, large space, popular with students and freelancers',
      },
    ],
    healthcare: {
      nearestInternationalHospital: 'Bumrungrad International Hospital',
      qualityRating: 9,
    },
    internet: {
      avgSpeed: 130,
      reliabilityRating: 8,
    },
    safety: {
      overallRating: 7,
      areasToAvoid: [
        'Khao San Road area after 2 AM (drugged drinks and scams)',
        'Patpong and Nana area (tourist scams, aggressive touts)',
        'Klong Toei slum area, especially at night',
      ],
      tips: [
        'Never take a tuk-tuk that offers a "free tour" — it\'s a gem scam that\'s been running for decades',
        'Always use the meter in metered taxis or use Grab/Bolt apps instead',
        'Scams targeting foreigners are more common than violent crime — lèse-majesté law means never speak negatively about the royal family',
      ],
    },
    weather: {
      avgTempsBySeasonF: {
        spring: '86–97°F',
        summer: '82–92°F (monsoon)',
        fall: '80–90°F',
        winter: '72–90°F',
      },
      rainySeason: 'May through October — heavy afternoon storms, but mornings are usually clear. November–February is the best season.',
    },
    gettingAround: [
      { mode: 'BTS Skytrain', cost: '฿16–฿59 per trip ($0.45–$1.70)' },
      { mode: 'MRT Subway', cost: '฿16–฿42 per trip ($0.45–$1.20)' },
      { mode: 'Grab / Bolt', cost: '฿60–฿200 for most trips ($1.70–$5.70)' },
      { mode: 'Motorcycle taxi', cost: '฿10–฿50 ($0.30–$1.40) — fastest in traffic' },
      { mode: 'Canal boat (Khlong Saen Saep)', cost: '฿10–฿20 — a shortcut across central Bangkok' },
    ],
    insiderTips: [
      'Get a Rabbit card (BTS) and MRT card immediately to avoid queueing for tokens — they\'re not interchangeable, so you need both. The Mangmoom integrated card is rolling out but adoption is still limited.',
      'Negotiate condo rent directly with the owner on Facebook groups ("Bangkok Condos for Rent") or Hipflat/DDProperty — agents on PropertyScout add 5–10% markup.',
      'The 180-day visa run reality: Thailand\'s tourist visa gives 60 days + 30-day extension. For longer stays, apply for the 5-year LTR (Long-Term Resident) visa if you earn $80,000+/year, or the DTV (Digital Nomad) visa introduced in mid-2024.',
      'Bangkok\'s tap water is not potable. Budget ฿200–400/mo for 5-gallon water delivery jugs — most condos have a water dispenser or you can get a subscription from Sprinkle.',
      'For real Thai food, eat where Thai people eat: Jeh O Chula (tom yum), Jay Fai (street food with a Michelin star — book weeks ahead), and Prachak Roasted Duck on Charoen Krung. Skip the tourist-oriented restaurants on Khao San Road.',
    ],
  },
  {
    slug: 'chiang-mai',
    name: 'Chiang Mai',
    country: 'Thailand',
    countrySlug: 'thailand',
    flag: '🇹🇭',
    heroDescription:
      'The original digital nomad city — surrounded by mountains, filled with temples, and offering an unbeatable cost of living with fast internet and a massive coworking ecosystem.',
    population: '130,000 (metro: 1.2 million)',
    expatCommunitySize: 'Large — estimated 40,000+ expats and long-term digital nomads',
    costBreakdown: {
      studioRent: '฿6,000–฿10,000/mo ($170–$285 USD)',
      oneBRRent: '฿8,000–฿16,000/mo ($225–$455 USD)',
      twoBRRent: '฿12,000–฿25,000/mo ($340–$710 USD)',
      groceries: '฿4,000–฿6,000/mo ($115–$170 USD)',
      diningOut: '฿40–฿150 per meal ($1.15–$4.25 USD for local / $6–$15 for Western)',
      transport: '฿1,500–฿3,000/mo for a scooter rental ($42–$85 USD)',
      utilities: '฿2,000–฿4,500/mo ($55–$125 USD) — AC is the main cost',
      internet: '฿500–฿800/mo ($14–$23 USD)',
    },
    neighborhoods: [
      {
        name: 'Nimmanhaemin (Nimman)',
        vibe: 'The digital nomad main street — trendy cafés, coworking spaces, boutique malls, and hip restaurants',
        avgRentRange: '฿10,000–฿18,000/mo for a 1BR condo ($285–$510 USD)',
        pros: [
          'Walkable to dozens of cafés with strong Wi-Fi',
          'MAYA mall, One Nimman, and Think Park lifestyle malls',
          'Highest concentration of coworking spaces in the city',
        ],
        cons: [
          'Touristy and expensive by Chiang Mai standards',
          'Traffic congestion on the main road during rush hours',
          'Can feel like a digital nomad bubble — less cultural immersion',
        ],
        bestFor: 'solo',
      },
      {
        name: 'Old City (within the moat)',
        vibe: 'Temples, guesthouses, Sunday Walking Street market, and backpacker infrastructure',
        avgRentRange: '฿7,000–฿12,000/mo for a 1BR ($200–$340 USD)',
        pros: [
          'Most atmospheric area with 30+ temples within walking distance',
          'Sunday Walking Street market is a weekly highlight',
          'Affordable food on every corner — Khao Soi stalls galore',
        ],
        cons: [
          'Building height restrictions mean no modern condos with pools/gyms',
          'Very hot in March–May with no high-rises for shade',
          'Tourist-heavy — songthaew drivers quote inflated prices',
        ],
        bestFor: 'solo, budget-conscious',
      },
      {
        name: 'Santitham',
        vibe: 'Local Thai neighborhood just north of the Old City — quiet, authentic, with growing café scene',
        avgRentRange: '฿6,000–฿10,000/mo for a 1BR ($170–$285 USD)',
        pros: [
          'Best value in a central location',
          'Authentic neighborhood restaurants and street food',
          'Walking distance to both Old City and Nimman',
        ],
        cons: [
          'Fewer modern condo options',
          'Limited English spoken in local shops',
          'Some streets are poorly lit at night',
        ],
        bestFor: 'solo, couple',
      },
    ],
    coworkingSpaces: [
      {
        name: 'Punspace (Nimman)',
        priceRange: '฿3,500–฿5,500/mo ($100–$155 USD)',
        vibe: 'Chiang Mai\'s most established coworking — reliable Wi-Fi, 24/7 access, and a proven nomad community',
      },
      {
        name: 'CAMP (MAYA Mall, 5th floor)',
        priceRange: 'Free with any drink purchase',
        vibe: 'Sponsored by AIS — hundreds of seats, fast Wi-Fi, open 24 hours. The free coworking that started the Chiang Mai nomad movement.',
      },
      {
        name: 'Yellow Coworking',
        priceRange: '฿2,800–฿4,500/mo ($80–$128 USD)',
        vibe: 'Colorful, community-focused space with a garden, standing desks, and quiet phone booths',
      },
    ],
    healthcare: {
      nearestInternationalHospital: 'Chiang Mai Ram Hospital',
      qualityRating: 7,
    },
    internet: {
      avgSpeed: 100,
      reliabilityRating: 8,
    },
    safety: {
      overallRating: 8,
      areasToAvoid: [
        'Dark alleys east of the Old City moat late at night',
        'Unlicensed after-hours clubs (occasional police raids)',
      ],
      tips: [
        'Chiang Mai is one of the safest cities for digital nomads in Southeast Asia',
        'Scooter accidents are the biggest real danger — always wear a helmet and avoid driving at night',
        'The burning season (February–April) causes hazardous air quality — check the AQI daily on IQAir and consider leaving for the coast',
      ],
    },
    weather: {
      avgTempsBySeasonF: {
        spring: '80–100°F (burning season — very hot and smoky)',
        summer: '78–92°F (rainy)',
        fall: '72–88°F',
        winter: '60–85°F (best season)',
      },
      rainySeason: 'June through October; February–April is the burning/smoke season with dangerously poor air quality',
    },
    gettingAround: [
      { mode: 'Scooter rental', cost: '฿2,500–฿3,500/mo ($70–$100 USD)' },
      { mode: 'Songthaew (red truck)', cost: '฿30–฿60 per trip ($0.85–$1.70)' },
      { mode: 'Grab', cost: '฿40–฿120 for most trips ($1.15–$3.40)' },
      { mode: 'Bicycle', cost: '฿1,500/mo rental or buy used for ฿3,000–฿5,000' },
    ],
    insiderTips: [
      'Leave Chiang Mai during burning season (late Feb–April). The AQI regularly exceeds 200+ (hazardous level). Fly to the southern islands or go to Bangkok — your lungs will thank you.',
      'Rent a scooter from Mr. Mechanic (Nimman area) or Pop\'s — they\'re the most reputable and won\'t scam you on "damage" when returning. Get the insurance option.',
      'Don\'t sign a 12-month condo lease sight-unseen. Fly in, stay at a guesthouse for a week, and walk the neighborhoods. Most condos offer month-to-month at ฿1,000–2,000 premium over yearly leases.',
      'The Sunday Walking Street market (Ratchadamnoen Rd) is better than the Saturday Night Market (Wualai Rd) for food. Get the sai ua (northern Thai sausage) and khao soi from the stalls near Wat Phra Singh.',
      'For an International Driving Permit (required for legal scooter riding), get one from AAA before you leave your home country — Thai police conduct checkpoint stops and the fine is ฿500+ without one.',
    ],
  },

  // ─────────────────────────────────────────────
  // COSTA RICA
  // ─────────────────────────────────────────────
  {
    slug: 'san-jose',
    name: 'San José',
    country: 'Costa Rica',
    countrySlug: 'costa-rica',
    flag: '🇨🇷',
    heroDescription:
      'Costa Rica\'s capital is a gritty, vibrant city in the Central Valley — not a beach destination, but the country\'s cultural hub with the best healthcare, infrastructure, and urban amenities.',
    population: '350,000 (metro: 2.2 million)',
    expatCommunitySize: 'Large — estimated 50,000+ American and Canadian expats in the Greater Metropolitan Area',
    costBreakdown: {
      studioRent: '₡250,000–₡400,000/mo ($475–$760 USD)',
      oneBRRent: '₡350,000–₡550,000/mo ($665–$1,050 USD)',
      twoBRRent: '₡500,000–₡800,000/mo ($950–$1,520 USD)',
      groceries: '₡150,000–₡250,000/mo ($285–$475 USD)',
      diningOut: '₡4,000–₡10,000 per meal ($7.50–$19 USD)',
      transport: '₡30,000–₡50,000/mo for buses ($57–$95 USD)',
      utilities: '₡40,000–₡80,000/mo ($76–$152 USD)',
      internet: '₡20,000–₡35,000/mo ($38–$67 USD)',
    },
    neighborhoods: [
      {
        name: 'Escazú',
        vibe: 'Upscale suburb with malls, American chains, gated communities, and mountain views',
        avgRentRange: '₡450,000–₡700,000/mo for a 1BR ($855–$1,330 USD)',
        pros: [
          'Safest area in the metro — gated condos with security',
          'Multiplaza and Avenida Escazú for shopping and dining',
          'Close to CIMA Hospital (best private hospital in Central America)',
        ],
        cons: [
          'Car-dependent — nearly impossible without a vehicle',
          'Feels like an American suburb, not Costa Rica',
          'Premium pricing on everything',
        ],
        bestFor: 'family, couple',
      },
      {
        name: 'Barrio Escalante',
        vibe: 'San José\'s gastronomic district — walkable, tree-lined, with craft breweries and gourmet restaurants',
        avgRentRange: '₡350,000–₡500,000/mo for a 1BR ($665–$950 USD)',
        pros: [
          'Best food scene in the country — Silvestre, Al Mercat, Franco',
          'Walkable and relatively safe by San José standards',
          'Close to the University of Costa Rica',
        ],
        cons: [
          'Limited housing stock — most buildings are commercial',
          'Street parking is competitive',
          'Can be noisy with restaurant deliveries and foot traffic',
        ],
        bestFor: 'solo, couple',
      },
      {
        name: 'Santa Ana',
        vibe: 'Quiet valley town west of San José with growing expat community and modern condos',
        avgRentRange: '₡350,000–₡550,000/mo for a 1BR ($665–$1,050 USD)',
        pros: [
          'Warmer and sunnier microclimate than central San José',
          'Forum business park area has modern amenities',
          'Good mix of local and expat culture',
        ],
        cons: [
          'Traffic to San José is brutal during rush hours (Route 27)',
          'Car required for most errands',
          'Limited nightlife',
        ],
        bestFor: 'family, couple',
      },
      {
        name: 'Sabana / Rohrmoser',
        vibe: 'Upper-middle-class residential area adjacent to La Sabana park — the "Central Park" of San José',
        avgRentRange: '₡300,000–₡480,000/mo for a 1BR ($570–$912 USD)',
        pros: [
          'Parque La Sabana for jogging, soccer, and outdoor exercise',
          'Central location with bus routes in every direction',
          'Proximity to the National Stadium and museums',
        ],
        cons: [
          'Some blocks near Rohrmoser have had security issues',
          'Traffic congestion during rush hours',
          'Fewer trendy restaurants compared to Escalante',
        ],
        bestFor: 'solo, couple',
      },
    ],
    coworkingSpaces: [
      {
        name: 'Selina San José',
        priceRange: '₡75,000–₡120,000/mo ($143–$228 USD)',
        vibe: 'Nomad-friendly coliving/coworking combo in a renovated heritage building downtown',
      },
      {
        name: 'Inpulse Coworking (Sabana)',
        priceRange: '₡80,000–₡140,000/mo ($152–$266 USD)',
        vibe: 'Professional space near La Sabana park with private offices, fast fiber, and meeting rooms',
      },
      {
        name: 'Impact Hub San José',
        priceRange: '₡70,000–₡110,000/mo ($133–$209 USD)',
        vibe: 'Social enterprise–focused global coworking network with events and workshops',
      },
    ],
    healthcare: {
      nearestInternationalHospital: 'Hospital CIMA San José',
      qualityRating: 8,
    },
    internet: {
      avgSpeed: 80,
      reliabilityRating: 7,
    },
    safety: {
      overallRating: 5,
      areasToAvoid: [
        'Downtown San José (Avenida Central) after dark',
        'Barrios del Sur (Sagrada Familia, Cristo Rey)',
        'Areas around the Coca-Cola bus terminal',
        'Parque La Merced at night',
      ],
      tips: [
        'Don\'t walk around downtown with expensive electronics visible — snatch-and-grab theft is common',
        'Use Uber instead of official red taxis — pirate taxis are a real risk',
        'Secure your apartment with bars on windows (common in CR) and avoid ground-floor units without rejas',
      ],
    },
    weather: {
      avgTempsBySeasonF: {
        spring: '65–80°F',
        summer: '62–78°F (rainy season)',
        fall: '62–78°F (rainy season)',
        winter: '60–80°F (dry season / verano)',
      },
      rainySeason: 'May through November — afternoon storms are heavy but predictable. Mornings are usually clear.',
    },
    gettingAround: [
      { mode: 'Bus', cost: '₡350–₡650 per trip ($0.65–$1.25)' },
      { mode: 'Uber', cost: '₡2,000–₡6,000 for most trips ($3.80–$11.40)' },
      { mode: 'Car rental', cost: '₡300,000–₡500,000/mo ($570–$950 USD)' },
      { mode: 'Train (INCOFER commuter)', cost: '₡500 per trip — limited routes but expanding' },
    ],
    insiderTips: [
      'Costa Rica operates on "Tico time" — expect everything to take longer than scheduled. Banks, government offices, and even restaurant service run on a relaxed clock.',
      'The Caja (CCSS) public healthcare system is available to legal residents for ~11% of income and covers everything. Private insurance through INS or international providers costs $100–$300/mo and gives you access to CIMA or Clínica Bíblica.',
      'San José is at 1,100m elevation — the climate is spring-like year-round (no AC needed). This is a huge plus compared to the sweltering coast.',
      'Addresses in Costa Rica don\'t use street numbers. Everything is described relative to landmarks ("200 meters north of the church"). Use Waze — Google Maps is less reliable here.',
      'Open a Kolbi (ICE) prepaid SIM for ₡3,000 ($5.70) at any convenience store. Kolbi has the best coverage nationwide, including rural and mountain areas.',
    ],
  },
  {
    slug: 'tamarindo',
    name: 'Tamarindo',
    country: 'Costa Rica',
    countrySlug: 'costa-rica',
    flag: '🇨🇷',
    heroDescription:
      'A Pacific coast surf town in Guanacaste province that\'s evolved from backpacker village to upscale beach community — year-round waves, spectacular sunsets, and a growing remote worker scene.',
    population: '8,000 (swells to 25,000+ in high season)',
    expatCommunitySize: 'Medium — estimated 3,000+ long-term expats, heavily American, Canadian, and European',
    costBreakdown: {
      studioRent: '₡300,000–₡500,000/mo ($570–$950 USD)',
      oneBRRent: '₡450,000–₡750,000/mo ($855–$1,425 USD)',
      twoBRRent: '₡650,000–₡1,100,000/mo ($1,235–$2,090 USD)',
      groceries: '₡180,000–₡300,000/mo ($340–$570 USD)',
      diningOut: '₡5,000–₡15,000 per meal ($9.50–$28.50 USD)',
      transport: '₡20,000–₡40,000/mo if walking/biking ($38–$76 USD)',
      utilities: '₡50,000–₡100,000/mo ($95–$190 USD) — AC is essential',
      internet: '₡25,000–₡40,000/mo ($47–$76 USD)',
    },
    neighborhoods: [
      {
        name: 'Tamarindo Centro (town center)',
        vibe: 'The main strip — surf shops, restaurants, bars, and beach access within 2 minutes',
        avgRentRange: '₡500,000–₡800,000/mo for a 1BR ($950–$1,520 USD)',
        pros: [
          'Walk to everything — beach, restaurants, grocery stores',
          'Best nightlife in the area (Sharky\'s, Pacifico Bar)',
          'Easy to meet other expats and nomads',
        ],
        cons: [
          'Noisy, especially during high season (Dec–April)',
          'Most expensive area — tourist pricing on everything',
          'Dust from unpaved roads in dry season; mud in rainy season',
        ],
        bestFor: 'solo',
      },
      {
        name: 'Langosta',
        vibe: 'Quieter, upscale residential area south of Tamarindo with a beautiful beach',
        avgRentRange: '₡600,000–₡1,000,000/mo for a 1BR ($1,140–$1,900 USD)',
        pros: [
          'Playa Langosta is less crowded and better for swimming',
          'More spacious properties with pools',
          'Walking distance to Tamarindo town (15 min)',
        ],
        cons: [
          'Higher prices and geared toward luxury travelers',
          'Fewer dining options — you\'ll walk to Tamarindo for most meals',
          'Can feel isolated in low season',
        ],
        bestFor: 'couple, family',
      },
      {
        name: 'Villareal',
        vibe: 'The local Tico town 5 minutes inland — authentic, affordable, community-oriented',
        avgRentRange: '₡250,000–₡400,000/mo for a 1BR ($475–$760 USD)',
        pros: [
          'Significantly cheaper than beachfront Tamarindo',
          'Local sodas with casados for ₡3,000 ($5.70)',
          'Feels more like real Costa Rica',
        ],
        cons: [
          'Need a car, scooter, or bicycle to reach the beach (10 min drive)',
          'Less scenic — no ocean views',
          'Limited infrastructure and slower internet',
        ],
        bestFor: 'solo, couple, budget-conscious',
      },
    ],
    coworkingSpaces: [
      {
        name: 'Selina Tamarindo',
        priceRange: '₡65,000–₡100,000/mo ($124–$190 USD)',
        vibe: 'Beachfront coliving and coworking with a pool, surf school, and community dinners',
      },
      {
        name: 'The Hub Tamarindo',
        priceRange: '₡55,000–₡90,000/mo ($105–$170 USD)',
        vibe: 'Small, quiet dedicated workspace with AC, fast internet, and a chill garden area',
      },
    ],
    healthcare: {
      nearestInternationalHospital: 'Hospital Metropolitano (Liberia, 1 hour away) or Clínica Bíblica (San José)',
      qualityRating: 5,
    },
    internet: {
      avgSpeed: 50,
      reliabilityRating: 5,
    },
    safety: {
      overallRating: 7,
      areasToAvoid: [
        'Deserted stretches of beach after dark',
        'Unlit back roads between Tamarindo and Villareal at night',
      ],
      tips: [
        'Petty theft from cars and beachgoers is the main concern — never leave valuables visible in a parked car',
        'Rip currents are strong — swim near lifeguard stations at the main beach',
        'Crocodiles live in the estuary at the north end of Tamarindo beach — don\'t swim there',
      ],
    },
    weather: {
      avgTempsBySeasonF: {
        spring: '82–95°F',
        summer: '78–90°F (rainy season)',
        fall: '78–88°F (rainy season)',
        winter: '78–95°F (dry season)',
      },
      rainySeason: 'May through November — Guanacaste is the driest province, but rains are still heavy. December–April is bone-dry.',
    },
    gettingAround: [
      { mode: 'Walking / bicycle', cost: 'Free — Tamarindo is small enough to walk' },
      { mode: 'ATV / scooter rental', cost: '₡100,000–₡200,000/mo ($190–$380 USD)' },
      { mode: 'Car rental', cost: '₡350,000–₡600,000/mo ($665–$1,140 USD) — 4x4 recommended' },
      { mode: 'Shuttle to Liberia airport', cost: '₡15,000–₡25,000 ($28–$47) per person' },
    ],
    insiderTips: [
      'Fly into Liberia (LIR) airport, not San José (SJO) — it\'s only 1 hour to Tamarindo versus 5+ hours from the capital. Southwest, JetBlue, and United have direct flights from the US.',
      'Internet reliability is Tamarindo\'s Achilles heel for remote workers. Get a Kolbi 4G hotspot as a backup, and confirm the Wi-Fi speed (ideally fiber from Telecable) before signing any lease.',
      'Negotiate long-term rentals directly with property managers on Facebook ("Tamarindo Costa Rica Rentals" group) — Airbnb markup is 50–80% in beach towns.',
      'Surf lessons at Witch\'s Rock Surf Camp or Blue Trailz are ₡25,000–₡35,000/hr ($47–$67). After a week of lessons, rent a board for ₡5,000/day ($9.50) and practice at Playa Grande (next beach north, less crowded).',
      'Tamarindo\'s tap water is safe to drink — Costa Rica has excellent water infrastructure, even in beach towns. Don\'t waste money on bottled water.',
    ],
  },
];
