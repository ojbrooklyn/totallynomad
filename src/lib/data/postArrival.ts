export interface ChecklistItem {
  task: string
  details: string
  officeName?: string
  tip?: string
}

export interface HousingInfo {
  websites: { name: string; url: string }[]
  typicalLeaseTerms: string
  depositRequirements: string
  scamWarnings: string[]
  avgTimeToFind: string
}

export interface LocalRegistration {
  process: string
  documentsNeeded: string[]
  estimatedTime: string
}

export interface PostArrivalGuide {
  countrySlug: string
  countryName: string
  firstWeekChecklist: ChecklistItem[]
  housing: HousingInfo
  localRegistration: LocalRegistration
}

export const postArrivalGuides: PostArrivalGuide[] = [
  {
    countrySlug: 'portugal',
    countryName: 'Portugal',
    firstWeekChecklist: [
      {
        task: 'Register at Câmara Municipal',
        details:
          'You must register your presence at the local Câmara Municipal within 3 days of arriving in Portugal.',
        officeName: 'Câmara Municipal',
        tip: 'Bring your passport, proof of accommodation, and visa. Arrive early as queues build up quickly after 10am.',
      },
      {
        task: 'Get a Portuguese SIM card',
        details:
          'Pick up a prepaid SIM from MEO, NOS, or Vodafone. Available at airport shops, electronics stores, and carrier stores throughout the city.',
        tip: 'MEO has the best coverage outside major cities. If you plan to travel rural Portugal, MEO is the safest choice.',
      },
      {
        task: 'Open a bank account',
        details:
          'ActivoBank offers a free online account and accepts American citizens. Millennium BCP is another solid option with branches everywhere.',
        officeName: 'ActivoBank / Millennium BCP',
        tip: 'You will need your NIF (tax identification number) before opening any bank account. Get your NIF at a Finanças office or through a fiscal representative.',
      },
      {
        task: 'Register for healthcare',
        details:
          'Register at your local Centro de Saúde (health center) with your NIF and residency documents to access the Portuguese public health system (SNS).',
        officeName: 'Centro de Saúde',
        tip: 'Registration can take a few weeks to process. Consider travel insurance or private health coverage for the interim period.',
      },
      {
        task: 'Get a transport card',
        details:
          'Purchase a Viva Viagem card in Lisbon or an Andante card in Porto for public transit. Both are available at metro stations.',
        tip: 'In Lisbon, the Navegante pass offers unlimited monthly travel across metro, bus, tram, and ferries for a flat rate.',
      },
    ],
    housing: {
      websites: [
        { name: 'Idealista', url: 'https://www.idealista.pt' },
        { name: 'Imovirtual', url: 'https://www.imovirtual.com' },
        { name: 'OLX Portugal', url: 'https://www.olx.pt' },
      ],
      typicalLeaseTerms:
        'Standard leases are 1 year with automatic renewal. Short-term furnished rentals are available but significantly more expensive, especially in Lisbon and Porto.',
      depositRequirements:
        '2 months deposit plus 1 month rent upfront is standard. Some landlords may request 3 months total before handing over keys.',
      scamWarnings: [
        'Fake listings asking for wire transfers before you have viewed the property in person. Never send money without visiting.',
        'Listings with prices significantly below market rate are often bait-and-switch or outright scams.',
        'Be cautious of landlords who claim to be abroad and cannot show the property — insist on an in-person or live video viewing.',
      ],
      avgTimeToFind:
        '2-4 weeks in Lisbon and Porto. Faster in smaller cities like Braga, Coimbra, or Faro.',
    },
    localRegistration: {
      process:
        'First, register at your local Junta de Freguesia (parish council) for proof of address. Then schedule an appointment at AIMA (formerly SEF) to complete your residency registration and obtain your residence permit.',
      documentsNeeded: [
        'Valid passport with visa',
        'NIF (Número de Identificação Fiscal)',
        'Proof of address (rental contract or utility bill)',
        'Visa or proof of legal entry',
        'Passport-sized photos',
        'Proof of financial means (bank statements)',
      ],
      estimatedTime:
        'Junta de Freguesia: 30 minutes to 1 hour. AIMA appointment: expect 2-4 hours including wait times. AIMA backlogs can mean weeks or months to get an appointment.',
    },
  },
  {
    countrySlug: 'mexico',
    countryName: 'Mexico',
    firstWeekChecklist: [
      {
        task: 'Register at INM',
        details:
          'If you hold a temporary or permanent resident visa, you must register at the Instituto Nacional de Migración (INM) within 30 days of arriving to exchange your visa for a resident card.',
        officeName: 'Instituto Nacional de Migración (INM)',
        tip: 'Book your appointment online at inm.gob.mx. Offices in CDMX, Guadalajara, and other major cities. Bring all original documents plus copies.',
      },
      {
        task: 'Get a Mexican SIM card',
        details:
          'Telcel has the best nationwide coverage, followed by AT&T Mexico and Movistar. Prepaid SIMs are available at OXXO convenience stores, carrier stores, and Walmart.',
        tip: 'Telcel is the clear winner for coverage outside major metros. If you plan to visit smaller towns or travel between cities, Telcel is essential.',
      },
      {
        task: 'Open a bank account',
        details:
          'BBVA Mexico is the easiest bank for foreigners to open an account. Banorte is another option. You will need your RFC (tax ID) first — apply at SAT (Servicio de Administración Tributaria).',
        officeName: 'BBVA Mexico / Banorte',
        tip: 'Get your RFC before attempting to open a bank account. You can apply at any SAT office with your passport and CURP (if available). Some BBVA branches are more foreigner-friendly than others — the Polanco and Roma Norte branches in CDMX are well-known for helping expats.',
      },
      {
        task: 'Set up healthcare',
        details:
          'IMSS (Instituto Mexicano del Seguro Social) offers public healthcare for approximately $500 USD per year for voluntary enrollment. For private coverage, Seguros Monterrey and GNP Seguros are popular options.',
        officeName: 'IMSS',
        tip: 'Private healthcare in Mexico is high quality and affordable by US/EU standards. Many digital nomads use a combination of IMSS for emergencies and private insurance for specialists.',
      },
      {
        task: 'Get a transit card or learn local transport',
        details:
          'In CDMX, get a rechargeable Metro card at any metro station. Outside the capital, colectivos (shared minibuses) are the primary public transit — just flag them down and pay in cash.',
        tip: 'The CDMX Metro costs 5 pesos per ride and covers most of the city. For Uber and DiDi, make sure your app is set to your Mexican phone number.',
      },
    ],
    housing: {
      websites: [
        { name: 'Inmuebles24', url: 'https://www.inmuebles24.com' },
        { name: 'Segundamano', url: 'https://www.segundamano.mx' },
        {
          name: 'Facebook Marketplace / Local Groups',
          url: 'https://www.facebook.com/marketplace',
        },
      ],
      typicalLeaseTerms:
        '1-year leases are standard. Month-to-month furnished rentals are available in expat-heavy areas like Roma Norte, Condesa, Playa del Carmen, and San Miguel de Allende but at a premium.',
      depositRequirements:
        '1-2 months deposit is standard. Some landlords also require a Mexican guarantor (aval) or a deposit equivalent to the guarantor requirement.',
      scamWarnings: [
        'Deposit-before-viewing scams are rampant on Facebook groups. Never wire money to someone you have not met in person.',
        'Fake listings using photos stolen from Airbnb or hotel listings. Reverse image search suspicious photos.',
        'Some landlords demand a fiador (guarantor) who owns property in the same state — this can be worked around with extra deposit, but negotiate upfront.',
      ],
      avgTimeToFind:
        '1-3 weeks in CDMX, Guadalajara, or Playa del Carmen. Faster in less competitive markets like Oaxaca or Mérida.',
    },
    localRegistration: {
      process:
        'Visit your nearest INM office to exchange your visa sticker for a resident card. This must be done within 30 days of entry. After receiving your temporary resident card, apply for your RFC at a SAT office.',
      documentsNeeded: [
        'Valid passport with resident visa',
        'FMM (migration form) or entry stamp',
        'Proof of address in Mexico (utility bill or bank statement)',
        'Passport-sized photos (infantil size: 2.5 x 3 cm)',
        'INM application form (filled online)',
      ],
      estimatedTime:
        'INM appointment: 1-2 hours. Resident card processing: 2-4 weeks after the appointment. RFC at SAT: 1-2 hours.',
    },
  },
  {
    countrySlug: 'spain',
    countryName: 'Spain',
    firstWeekChecklist: [
      {
        task: 'Register at the Ayuntamiento (empadronamiento)',
        details:
          'The empadronamiento (municipal registration) at your local Ayuntamiento is required for almost everything in Spain — from opening a bank account to accessing healthcare. Do this first.',
        officeName: 'Ayuntamiento',
        tip: 'Book your cita previa (appointment) online as soon as you have a rental contract. In Barcelona and Madrid, appointment slots fill up fast — check daily for cancellations.',
      },
      {
        task: 'Get a Spanish SIM card',
        details:
          'Movistar, Orange, and Vodafone are the major carriers. Digi is the cheapest option for data-heavy users with plans starting around 3 EUR/month.',
        tip: 'Digi offers the best value for data but has limited physical stores. You can find Digi SIMs at locutorios (phone shops) in most neighborhoods. For reliable nationwide coverage, Movistar is the safest bet.',
      },
      {
        task: 'Open a bank account',
        details:
          'Openbank (Santander digital bank) can be opened online. BBVA accepts Americans with a NIE. Both require your NIE or TIE number.',
        officeName: 'Openbank / BBVA',
        tip: 'Some bank branches will turn you away without a NIE. Openbank is the path of least resistance — fully digital, no branch visit needed, and free.',
      },
      {
        task: 'Register for healthcare',
        details:
          'Register at your local CAP (Centro de Atención Primaria) with your empadronamiento certificate and TIE/NIE. You will be assigned a doctor (médico de cabecera).',
        officeName: 'CAP (Centro de Atención Primaria)',
        tip: 'You need both the empadronamiento and your TIE or proof of social security registration. If you are on a digital nomad visa, confirm your healthcare entitlements as they vary by autonomous community.',
      },
      {
        task: 'Get a transport card',
        details:
          'In Barcelona, get a T-Casual (10 integrated trips) or Hola BCN for tourists. In Madrid, the Abono Transportes offers unlimited monthly travel across zones.',
        tip: 'Madrid Abono Joven is available for under-26s at a steep discount. In Barcelona, the T-Usual offers unlimited monthly travel within one zone.',
      },
    ],
    housing: {
      websites: [
        { name: 'Idealista', url: 'https://www.idealista.com' },
        { name: 'Fotocasa', url: 'https://www.fotocasa.es' },
        { name: 'Habitaclia', url: 'https://www.habitaclia.com' },
      ],
      typicalLeaseTerms:
        'Standard leases are 1 year, automatically renewable up to 5 years under current Spanish rental law (LAU). Short-term furnished rentals exist but are harder to find legally due to tourist rental regulations.',
      depositRequirements:
        '1-2 months deposit (fianza) is standard. Agency fees of 1 month rent plus VAT are common when going through an inmobiliaria (real estate agency). Some landlords ask for an additional bank guarantee.',
      scamWarnings: [
        'Fake Idealista listings with suspiciously low prices designed to collect deposits from multiple victims. If the price seems too good for the neighborhood, it probably is.',
        'Scammers posing as landlords who are "traveling abroad" and ask you to wire deposit money. Always insist on viewing the property in person.',
        'Illegal tourist apartments advertised as long-term rentals. Verify the property has a proper rental license (cédula de habitabilidad).',
      ],
      avgTimeToFind:
        '2-6 weeks in Barcelona and Madrid, where competition is intense. Faster in Valencia, Málaga, Seville, or smaller cities.',
    },
    localRegistration: {
      process:
        'First, complete your empadronamiento at the Ayuntamiento. Then apply for your NIE (Número de Identidad de Extranjero) or TIE (Tarjeta de Identidad de Extranjero) at the Oficina de Extranjería or police station (Comisaría de Policía).',
      documentsNeeded: [
        'Valid passport',
        'Rental contract (contrato de alquiler)',
        'Padrón application form (hoja padronal)',
        'EX-15 or EX-17 form for NIE/TIE',
        'Proof of visa or legal stay',
        'Passport-sized photos',
        'Tax form 790-012 (paid at a bank)',
      ],
      estimatedTime:
        'Empadronamiento: approximately 30 minutes once you have an appointment. NIE/TIE at Extranjería: the appointment itself takes 30-60 minutes, but getting an appointment can take weeks or months due to high demand. Use the sede electrónica website and check frequently for openings.',
    },
  },
  {
    countrySlug: 'thailand',
    countryName: 'Thailand',
    firstWeekChecklist: [
      {
        task: 'Complete TM30 immigration reporting',
        details:
          'You must report your address to immigration within 24 hours of arriving. Hotels do this automatically. If renting a condo or house, your landlord must file a TM30 form at the local immigration office.',
        officeName: 'Immigration Bureau',
        tip: 'Many landlords are unfamiliar with TM30 requirements or reluctant to file. Confirm before signing a lease that your landlord will complete the TM30. Without it, you may face fines or issues with visa extensions.',
      },
      {
        task: 'Get a Thai SIM card',
        details:
          'AIS has the best 5G coverage, followed by DTAC and TrueMove H. SIMs are available at the airport (best deals at 7-Eleven or carrier counters) and convenience stores.',
        tip: 'AIS is the top choice for 5G and overall network quality. Tourist SIMs with generous data allowances are available at Suvarnabhumi and Don Mueang airports. Bring your passport — it is required for SIM registration.',
      },
      {
        task: 'Open a Thai bank account',
        details:
          'Bangkok Bank and Kasikorn Bank (KBank) are the most foreigner-friendly. You will need your passport plus a work permit or a residency certificate from your embassy.',
        officeName: 'Bangkok Bank / Kasikorn Bank',
        tip: 'Without a work permit, getting a bank account is difficult. Some branches near tourist areas (Silom, Asoke) are more accommodating. A letter from your embassy certifying your address in Thailand can help. Kasikorn flagship branches tend to be more flexible.',
      },
      {
        task: 'Set up healthcare',
        details:
          'There is no public healthcare system for foreigners in Thailand. Register with a private hospital. In Bangkok, Bumrungrad International and BNH Hospital are top-tier. In Chiang Mai, try Rajavej or Bangkok Hospital Chiang Mai.',
        officeName: 'Bumrungrad International / BNH Hospital',
        tip: 'Thai private hospitals offer excellent care at a fraction of Western prices. Many accept international insurance. For routine care, local clinics are very affordable — a doctor visit may cost 300-500 THB.',
      },
      {
        task: 'Get transport sorted',
        details:
          'In Bangkok, get a Rabbit card for BTS Skytrain and a separate MRT card for the subway. The Grab app works nationwide for ride-hailing and is the local equivalent of Uber.',
        tip: 'Rabbit and MRT cards are not interchangeable. For frequent travel, top up both. Outside Bangkok, Grab and songthaews (shared trucks) are primary transport. Renting a motorbike is common in Chiang Mai but ensure you have a valid international driving permit.',
      },
    ],
    housing: {
      websites: [
        { name: 'DDProperty', url: 'https://www.ddproperty.com' },
        { name: 'Hipflat', url: 'https://www.hipflat.co.th' },
        {
          name: 'Facebook Groups (Bangkok/Chiang Mai Rentals)',
          url: 'https://www.facebook.com/marketplace',
        },
      ],
      typicalLeaseTerms:
        'Monthly and yearly leases are both widely available. Yearly leases offer lower monthly rates. Furnished condos are the most common rental for foreigners, and month-to-month is standard in many buildings.',
      depositRequirements:
        '2 months security deposit plus 1 month rent in advance is standard. Utilities deposits may also be required separately by the building.',
      scamWarnings: [
        'Agents charging "key money" on top of the listed deposit — this is not standard practice and should be questioned.',
        'Condo buildings with hidden foreigner quotas. Thai law limits foreign ownership to 49% of a condo building, which can occasionally affect rental availability.',
        'Landlords withholding the full deposit at move-out for fabricated damages. Document the condition of the unit thoroughly at move-in with photos and video.',
      ],
      avgTimeToFind:
        '1-2 weeks in Bangkok or Chiang Mai. Immediate options are available in most tourist areas, especially for furnished monthly condos.',
    },
    localRegistration: {
      process:
        'After your initial TM30 address report, you must complete 90-day reporting at immigration for every 90 days you remain in Thailand. This can be done in person, by mail, or online through the immigration website.',
      documentsNeeded: [
        'TM47 form (90-day notification)',
        'Valid passport with current visa',
        'TM6 departure card (if issued at entry)',
        'Proof of address',
        'Previous 90-day reporting receipt (for renewals)',
      ],
      estimatedTime:
        'In person at immigration: 1-2 hours depending on the office and queue. Chaeng Watthana immigration in Bangkok can take a full morning. Online filing takes 15 minutes but the system is occasionally down. Plan ahead.',
    },
  },
  {
    countrySlug: 'costa-rica',
    countryName: 'Costa Rica',
    firstWeekChecklist: [
      {
        task: 'Register at DGME',
        details:
          'If you hold a residency visa, register at the Dirección General de Migración y Extranjería (DGME) to begin your formal residency process and obtain your DIMEX (foreign ID card).',
        officeName: 'Dirección General de Migración y Extranjería (DGME)',
        tip: 'The main DGME office is in La Uruca, San José. Arrive very early (before 7am) as it gets extremely busy. Alternatively, check if satellite offices in other provinces can handle your case.',
      },
      {
        task: 'Get a Costa Rican SIM card',
        details:
          'Kolbi (by ICE, the state telecom) has the best rural coverage. Movistar and Claro are also available. Prepaid SIMs can be purchased at airports, supermarkets, and carrier stores.',
        tip: 'Kolbi is the clear winner for coverage in rural and mountainous areas. If you plan to live outside the Central Valley, Kolbi is essential. Top up at any supermarket or pulpería.',
      },
      {
        task: 'Open a bank account',
        details:
          'BAC Credomatic is the most international-friendly bank. Banco Nacional is the largest state bank. You will need your DIMEX (foreign ID) first, which requires approved residency.',
        officeName: 'BAC Credomatic / Banco Nacional',
        tip: 'Without residency and a DIMEX, opening a local bank account is nearly impossible. In the interim, use a US-based international account or Wise. Some BAC branches are more helpful than others — the Escazú and Santa Ana branches are known for better service to foreigners.',
      },
      {
        task: 'Register for healthcare (CCSS)',
        details:
          'Registration with the CCSS (Caja Costarricense de Seguro Social), commonly known as "La Caja," is mandatory for all residents. Monthly contributions are approximately $100 USD and grant access to the public health system.',
        officeName: 'CCSS (Caja Costarricense de Seguro Social)',
        tip: 'The public system works but has long wait times for specialists. Many residents use a combination of CCSS for major/emergency care and private insurance (INS or international) for routine visits and faster access.',
      },
      {
        task: 'Get familiar with local transport',
        details:
          'There are no transit cards in Costa Rica. Buses are paid in cash (colones). The Waze app is essential for driving as road signage is minimal and addresses are landmark-based.',
        tip: 'Costa Rica does not use traditional street addresses. Directions are given relative to landmarks (e.g., "200 meters north of the church"). Download offline maps and Waze before heading anywhere new.',
      },
    ],
    housing: {
      websites: [
        { name: 'Encuentra24', url: 'https://www.encuentra24.com/costa-rica' },
        {
          name: 'Facebook Groups (CR Expats, Costa Rica Real Estate)',
          url: 'https://www.facebook.com/groups',
        },
        { name: 'CRExpats', url: 'https://www.crexpats.com' },
      ],
      typicalLeaseTerms:
        '1-year leases are typical for unfurnished properties. Furnished shorter-term rentals (3-6 months) are available in expat-heavy areas like Escazú, Santa Ana, Tamarindo, and Nosara, but at higher prices.',
      depositRequirements:
        '2-3 months deposit is standard. Costa Rican rental law is tenant-friendly, which makes some landlords cautious and demanding with deposits.',
      scamWarnings: [
        'Fake property listings from non-owners. Always verify ownership through the Registro Nacional (national property registry) before signing anything.',
        'Properties advertised with amenities or conditions that do not match reality. Always visit in person and verify water pressure, internet availability, and road access, especially in rural areas.',
        'Unlicensed "property managers" who collect rent and deposits then disappear. Work with established agencies or verified contacts from expat communities.',
      ],
      avgTimeToFind:
        '2-4 weeks in the Central Valley (San José, Escazú, Santa Ana). Beach towns can take longer due to limited inventory and seasonal demand.',
    },
    localRegistration: {
      process:
        'Visit the DGME office in San José or La Uruca to submit your residency application. All foreign documents must be authenticated with an apostille and translated into Spanish by an official translator. After approval, you will receive your DIMEX card.',
      documentsNeeded: [
        'Valid passport',
        'Authenticated and apostilled birth certificate',
        'Authenticated and apostilled police background check',
        'Passport-sized photos (front-facing, white background)',
        'Proof of income or pension (authenticated)',
        'Costa Rican consulate registration or entry stamp',
        'Official Spanish translations of all documents',
      ],
      estimatedTime:
        'Expect a full-day visit at DGME for the initial submission. Processing times for residency approval range from 6-18 months. DIMEX card issuance takes an additional 2-4 weeks after approval.',
    },
  },
]
