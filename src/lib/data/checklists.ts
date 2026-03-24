export interface ChecklistItem {
  id: string
  title: string
  description: string
  whereToGet: string
  estimatedCost: string
  estimatedTime: string
  tips: string
  dependsOn: string[]
  sequence: number
}

export interface VisaChecklist {
  country: string
  countryFlag: string
  visaType: string
  visaDescription: string
  items: ChecklistItem[]
}

export const checklists: VisaChecklist[] = [
  // ─────────────────────────────────────────────
  // 1. Portugal D7 Passive Income Visa (15 items)
  // ─────────────────────────────────────────────
  {
    country: 'Portugal',
    countryFlag: '🇵🇹',
    visaType: 'D7 Passive Income Visa',
    visaDescription:
      'The Portugal D7 visa is designed for retirees, remote workers, and individuals with passive income who want to reside in Portugal. It grants a temporary residence permit renewable for two years, with a path to permanent residency after five years.',
    items: [
      {
        id: 'portugal-1',
        title: 'Valid Passport',
        description:
          'Your passport must have at least 6 months of validity beyond your planned entry date into Portugal, with at least two blank pages for visa stamps.',
        whereToGet:
          'U.S. Department of State — travel.state.gov or your nearest passport acceptance facility. Expedited processing available at regional passport agencies.',
        estimatedCost: '$130 for renewal; $165 for first-time applicants (plus $60 expedited fee if needed)',
        estimatedTime: '4-6 weeks for routine processing; 2-3 weeks expedited',
        tips: 'Apply early — passport processing times can spike seasonally. If your passport expires within a year, renew it now to avoid complications with visa timelines.',
        dependsOn: [],
        sequence: 1
      },
      {
        id: 'portugal-2',
        title: 'Biometric Passport Photos',
        description:
          'Two recent biometric passport-style photos (35mm x 45mm) with a white background. Must be taken within the last 6 months.',
        whereToGet:
          'CVS, Walgreens, USPS, AAA offices, or professional photo studios. Many consulates also accept photos taken via apps like Passport Photo Online.',
        estimatedCost: '$15',
        estimatedTime: 'Same day',
        tips: 'Some consulates are very strict about photo dimensions and background color. Use a professional service rather than a self-service kiosk to avoid rejections.',
        dependsOn: [],
        sequence: 2
      },
      {
        id: 'portugal-3',
        title: 'FBI Criminal Background Check',
        description:
          'An Identity History Summary from the FBI, required to prove you have no serious criminal record. Portugal requires this for all D7 visa applicants.',
        whereToGet:
          'FBI Criminal Justice Information Services (CJIS) — www.fbi.gov/services/cjis/identity-history-summary-checks. Submit electronically via the FBI website.',
        estimatedCost: '$18',
        estimatedTime: '12-18 weeks if submitted directly to the FBI',
        tips: 'Use an FBI-approved channeler (such as Fieldprint or Identogo) to get results in 1-3 weeks instead of 12-18. The extra cost ($50-60) is well worth the time saved.',
        dependsOn: [],
        sequence: 3
      },
      {
        id: 'portugal-4',
        title: 'Apostille for FBI Background Check',
        description:
          'The FBI background check must be apostilled by the U.S. Department of State to be recognized as legally valid in Portugal under the Hague Apostille Convention.',
        whereToGet:
          'U.S. Department of State, Office of Authentications — travel.state.gov/content/travel/en/records-and-authentications.html. Submit by mail to the Washington, D.C. office.',
        estimatedCost: '$20',
        estimatedTime: '4-6 weeks by mail; faster with private courier services',
        tips: 'Several private companies (e.g., One Source Process, National Apostille) will handle the entire apostille process for you for an additional $75-150. Worth it if you are on a tight timeline.',
        dependsOn: ['portugal-3'],
        sequence: 4
      },
      {
        id: 'portugal-5',
        title: 'Proof of Income or Pension',
        description:
          'Bank statements from the last 3-6 months showing sufficient passive income, pension, or savings. Portugal requires proof of at least the minimum wage (approximately EUR 760/month in 2024) but showing EUR 1,000-1,500/month or more strengthens your application.',
        whereToGet:
          'Your bank (online banking portal or branch). Request official stamped statements if possible. For pension income, contact your pension provider for an official letter.',
        estimatedCost: 'Free',
        estimatedTime: '1 week to gather and organize',
        tips: 'Highlight recurring deposits (salary, dividends, rental income) and ensure your statements clearly show your name, account number, and bank logo. Translate to Portuguese if your consulate requires it.',
        dependsOn: [],
        sequence: 5
      },
      {
        id: 'portugal-6',
        title: 'Health Insurance Valid in Portugal',
        description:
          'A health insurance policy that provides full medical coverage in Portugal for the duration of your stay. Must cover hospitalization, emergency, and repatriation.',
        whereToGet:
          'International providers: SafetyWing (safetywing.com), Allianz Care (allianzcare.com), Cigna Global (cigna.com/global), or Genki (genki.world). Portuguese providers: Multicare or Medis after arrival.',
        estimatedCost: '$45-100/month depending on age and coverage level',
        estimatedTime: 'Immediate — policies can be purchased online and certificates issued same day',
        tips: 'SafetyWing is popular among digital nomads for its affordability and ease. However, some consulates specifically require a policy from a company licensed in the EU. Check your specific consulate requirements before purchasing.',
        dependsOn: [],
        sequence: 6
      },
      {
        id: 'portugal-7',
        title: 'NIF (Numero de Identificacao Fiscal)',
        description:
          'A Portuguese tax identification number (NIF) is required to open a bank account, sign a lease, and conduct most financial activities in Portugal. You need it before your visa appointment in many cases.',
        whereToGet:
          'In person at a Portuguese Financas (tax office) or remotely through a fiscal representative. Online services: Bordr (bordr.io), AnchorLess (anchorless.io), or e-Residence Portugal.',
        estimatedCost: 'Free if done in person; $100-150 via a remote fiscal representative',
        estimatedTime: '1-2 weeks via agent; same day if done in person in Portugal',
        tips: 'You legally need a fiscal representative if applying from outside the EU. Many online services bundle NIF + bank account opening for around $200-300 total. This is often the most efficient route.',
        dependsOn: [],
        sequence: 7
      },
      {
        id: 'portugal-8',
        title: 'Portuguese Bank Account',
        description:
          'A bank account at a Portuguese bank is required to show financial ties to Portugal and is needed for paying rent, utilities, and taxes.',
        whereToGet:
          'Millennium BCP, Novo Banco, ActivoBank (online-friendly), or Caixa Geral de Depositos. Some can be opened remotely with a NIF; ActivoBank is the most digital-nomad-friendly option.',
        estimatedCost: 'Free to open (some banks charge small monthly maintenance fees of EUR 2-5)',
        estimatedTime: '1-2 weeks (some banks require an in-person visit to Portugal)',
        tips: 'ActivoBank allows fully remote account opening with a NIF and has no monthly fees. Wise (formerly TransferWise) multi-currency account can also serve as a bridge while your Portuguese account is being set up.',
        dependsOn: ['portugal-7'],
        sequence: 8
      },
      {
        id: 'portugal-9',
        title: 'Proof of Accommodation in Portugal',
        description:
          'Evidence of where you will live in Portugal — a signed rental contract, property deed, or a hotel/Airbnb booking for at least your initial stay.',
        whereToGet:
          'Idealista (idealista.pt), Uniplaces (uniplaces.com), or local real estate agencies. For short-term proof, an Airbnb booking confirmation for 1-3 months is often accepted.',
        estimatedCost: 'Varies — Lisbon averages EUR 800-1,200/month; Porto EUR 500-800/month for a one-bedroom',
        estimatedTime: '1-2 weeks to secure a rental agreement',
        tips: 'Many consulates accept an Airbnb booking as initial proof. Securing a long-term lease remotely from abroad is difficult — consider booking a month of Airbnb first and finding permanent housing after arrival.',
        dependsOn: [],
        sequence: 9
      },
      {
        id: 'portugal-10',
        title: 'D7 Visa Application Form',
        description:
          'The official D7 visa application form issued by the Portuguese consulate. Must be filled out completely, signed, and dated.',
        whereToGet:
          'Download from your local Portuguese consulate website or from vistos.mne.gov.pt. Some consulates require you to fill out the form through their online portal.',
        estimatedCost: 'Free',
        estimatedTime: '30 minutes',
        tips: 'Fill out the form digitally if possible, then print and sign. Double-check every field — incomplete applications are the number one reason for delays. Keep a photocopy for your records.',
        dependsOn: [],
        sequence: 10
      },
      {
        id: 'portugal-11',
        title: 'Cover Letter Explaining Purpose of Stay',
        description:
          'A personal statement explaining why you want to move to Portugal, your income sources, your accommodation plans, and how you intend to support yourself.',
        whereToGet:
          'Self-written. Templates available on expat forums such as ExpatForum.com, Reddit r/PortugalExpats, and various D7 visa blogs.',
        estimatedCost: 'Free',
        estimatedTime: '1-2 hours',
        tips: 'Be specific and genuine. Mention your ties to Portugal (language learning, cultural interest, community involvement). Consulates appreciate applicants who clearly intend to integrate rather than just take advantage of favorable tax rates.',
        dependsOn: [],
        sequence: 11
      },
      {
        id: 'portugal-12',
        title: 'Schedule Appointment at Portuguese Consulate',
        description:
          'Book a visa appointment at your nearest Portuguese consulate or embassy. Many consulates use an online scheduling system with limited availability.',
        whereToGet:
          'Your nearest Portuguese consulate website. In the U.S.: San Francisco, New York, Boston, Washington D.C., Newark, or Miami. Use vistos.mne.gov.pt for the online portal.',
        estimatedCost: 'Free to schedule (visa processing fee of approximately EUR 90 paid at appointment)',
        estimatedTime: '2-4 weeks wait for an available appointment slot',
        tips: 'Appointment slots fill up fast, especially at popular consulates like San Francisco and New York. Check the portal early in the morning when new slots are released. Some consulates allow walk-ins for emergencies.',
        dependsOn: [],
        sequence: 12
      },
      {
        id: 'portugal-13',
        title: 'Attend Consulate Appointment',
        description:
          'Present all required documents at your scheduled consulate appointment. The consular officer will review your paperwork, take biometrics, and may ask questions about your plans.',
        whereToGet:
          'At your scheduled Portuguese consulate. Bring originals AND photocopies of every document. Some consulates require documents in Portuguese — confirm translation requirements in advance.',
        estimatedCost: 'EUR 90 visa processing fee (approximately $100)',
        estimatedTime: '1-2 hours for the appointment itself',
        tips: 'Arrive 15 minutes early. Organize documents in the order listed on the consulate checklist. Bring extra passport photos and a folder with labeled tabs. If asked about your plans, be confident and specific about your income and accommodation.',
        dependsOn: [
          'portugal-1',
          'portugal-2',
          'portugal-3',
          'portugal-4',
          'portugal-5',
          'portugal-6',
          'portugal-7',
          'portugal-8',
          'portugal-9',
          'portugal-10',
          'portugal-11',
          'portugal-12'
        ],
        sequence: 13
      },
      {
        id: 'portugal-14',
        title: 'Wait for Visa Approval',
        description:
          'After submitting your application, the consulate forwards it to SEF (now AIMA) in Portugal for processing. You will be notified by email or phone when a decision is made.',
        whereToGet:
          'No action required — the consulate processes your application. You can check status online if your consulate provides a tracking number.',
        estimatedCost: 'Free (already paid at appointment)',
        estimatedTime: '30-60 days on average; can take up to 90 days in busy periods',
        tips: 'Do not book non-refundable flights until you have your visa in hand. Use this waiting period to study Portuguese (Duolingo, Pimsleur, or iTalki), research neighborhoods, and connect with expat communities online.',
        dependsOn: ['portugal-13'],
        sequence: 14
      },
      {
        id: 'portugal-15',
        title: 'Register at Local Camara Municipal Upon Arrival',
        description:
          'Within 3 days of arriving in Portugal, you must register your presence at the local Camara Municipal (town hall) or Junta de Freguesia (parish council) in the area where you will be residing.',
        whereToGet:
          'Your local Camara Municipal or Junta de Freguesia. Find your nearest office at autarquias.pt. You will also need to schedule an appointment with AIMA for your residence permit.',
        estimatedCost: 'Free for registration; AIMA residence permit fee approximately EUR 72',
        estimatedTime: '1-2 hours for registration; AIMA appointment may take several weeks to schedule',
        tips: 'This step is often overlooked by new arrivals. Set a reminder on your phone for the day you land. Bring your passport, visa, rental contract, and NIF to the registration. Also register with AIMA (formerly SEF) for your residence permit as soon as possible — wait times have been long.',
        dependsOn: ['portugal-14'],
        sequence: 15
      }
    ]
  },

  // ──────────────────────────────────────────────
  // 2. Mexico Temporary Resident Visa (12 items)
  // ──────────────────────────────────────────────
  {
    country: 'Mexico',
    countryFlag: '🇲🇽',
    visaType: 'Temporary Resident Visa',
    visaDescription:
      'The Mexico Temporary Resident Visa allows foreign nationals to live in Mexico for up to four years. It is ideal for remote workers, retirees, and individuals with sufficient financial means who want to establish residency in Mexico.',
    items: [
      {
        id: 'mexico-1',
        title: 'Valid Passport',
        description:
          'Your passport must be valid for at least 6 months beyond your intended entry date to Mexico and have at least one blank page for the visa sticker.',
        whereToGet:
          'U.S. Department of State — travel.state.gov. Apply at a passport acceptance facility or renew by mail.',
        estimatedCost: '$130 for renewal; $165 for first-time applicants',
        estimatedTime: '4-6 weeks routine; 2-3 weeks expedited',
        tips: 'Mexican consulates will not accept a passport that is damaged, discolored, or has any irregularities. If your passport shows any wear, consider renewing before applying.',
        dependsOn: [],
        sequence: 1
      },
      {
        id: 'mexico-2',
        title: 'Passport Photos',
        description:
          'One recent passport-style photograph meeting Mexican consulate specifications: white background, front-facing, no glasses, no head coverings.',
        whereToGet:
          'CVS, Walgreens, or a professional photo studio. Some Mexican consulates take photos on-site for a small fee.',
        estimatedCost: '$15',
        estimatedTime: 'Same day',
        tips: 'Mexican consulates may have slightly different photo size requirements (3.9cm x 3.1cm) than U.S. passport photos. Check your specific consulate guidelines.',
        dependsOn: [],
        sequence: 2
      },
      {
        id: 'mexico-3',
        title: 'Proof of Financial Solvency',
        description:
          'Bank statements from the last 12 months showing a minimum average monthly balance of approximately $2,700 USD/month, or investments/savings of at least $45,000 USD. Amounts are updated periodically by the Mexican government.',
        whereToGet:
          'Your bank — download official statements from online banking or request stamped copies from your branch. Investment accounts: use brokerage statements from Fidelity, Schwab, Vanguard, etc.',
        estimatedCost: 'Free',
        estimatedTime: '1 week to gather 12 months of statements',
        tips: 'The income threshold is based on Mexico City daily minimum wage (UMA) multiples. The exact amounts change annually — verify the current threshold on your consulate website before applying. Some consulates want to see no months below the minimum, while others look at averages.',
        dependsOn: [],
        sequence: 3
      },
      {
        id: 'mexico-4',
        title: 'Employment Letter or Proof of Remote Work',
        description:
          'A letter from your employer confirming your position, salary, and that you are authorized to work remotely. Freelancers should provide client contracts or a portfolio of recent invoices.',
        whereToGet:
          'Request from your HR department or direct supervisor on company letterhead. Freelancers can compile contracts and invoices along with a self-declaration letter.',
        estimatedCost: 'Free',
        estimatedTime: '1-3 days',
        tips: 'The letter should explicitly state your annual salary and that your position is remote-compatible. If freelancing, create a professional summary document listing your major clients, monthly revenue, and contract terms.',
        dependsOn: [],
        sequence: 4
      },
      {
        id: 'mexico-5',
        title: 'Completed Visa Application Form',
        description:
          'The official Mexican visa application form, filled out completely with all personal details, travel plans, and purpose of stay.',
        whereToGet:
          'Download from your local Mexican consulate website or from consulmex.sre.gob.mx. Some consulates use the online scheduling system MiConsulado which generates the form.',
        estimatedCost: 'Free',
        estimatedTime: '30 minutes',
        tips: 'Fill out the form digitally, print it, and sign in blue ink. Double-check that your name matches your passport exactly, including middle names. Leave no fields blank — write "N/A" where not applicable.',
        dependsOn: [],
        sequence: 5
      },
      {
        id: 'mexico-6',
        title: 'Schedule Appointment at Mexican Consulate',
        description:
          'Book a visa interview appointment at your nearest Mexican consulate. Most consulates use the MiConsulado online system or MiCita scheduling portal.',
        whereToGet:
          'MiCita portal (citas.sre.gob.mx) or your local Mexican consulate website. In the U.S., there are approximately 50 Mexican consulates — find your nearest at directorio.sre.gob.mx.',
        estimatedCost: 'Free to schedule',
        estimatedTime: '1-2 weeks for an available appointment',
        tips: 'Mexican consulates are often very busy. Book as early as possible. Some consulates (like smaller ones in less populated areas) may have faster appointment availability than major city consulates.',
        dependsOn: [],
        sequence: 6
      },
      {
        id: 'mexico-7',
        title: 'Pay Consulate Visa Fee',
        description:
          'A non-refundable visa processing fee payable at the time of your consulate appointment. The fee is set by the Mexican government and updated annually.',
        whereToGet:
          'Paid directly at the consulate during your appointment. Most consulates accept credit/debit cards and money orders. Some accept cash (USD).',
        estimatedCost: '~$40 USD (approximately 730 MXN, subject to annual adjustments)',
        estimatedTime: 'Paid at appointment',
        tips: 'Bring multiple payment methods — some consulates only accept specific forms of payment. Check your consulate website for accepted payment methods before your appointment.',
        dependsOn: [],
        sequence: 7
      },
      {
        id: 'mexico-8',
        title: 'Attend Consulate Appointment',
        description:
          'Present all documents at your scheduled appointment. A consular officer will review your paperwork, conduct a brief interview, and collect your passport for visa sticker placement.',
        whereToGet:
          'At your scheduled Mexican consulate appointment. Bring originals and photocopies of all documents.',
        estimatedCost: 'No additional cost (visa fee paid at this step)',
        estimatedTime: '1-2 hours',
        tips: 'The interview is usually straightforward. Be prepared to explain your income sources clearly and why you want to live in Mexico. Dress professionally and be polite — consular officers have wide discretion.',
        dependsOn: [
          'mexico-1',
          'mexico-2',
          'mexico-3',
          'mexico-4',
          'mexico-5',
          'mexico-6',
          'mexico-7'
        ],
        sequence: 8
      },
      {
        id: 'mexico-9',
        title: 'Receive Visa Sticker in Passport',
        description:
          'After approval, the consulate will place a visa sticker in your passport. This sticker allows you to enter Mexico as a temporary resident. It is valid for 180 days for a single entry.',
        whereToGet:
          'Pick up from the consulate or receive by mail (depends on consulate). Some consulates mail your passport back via prepaid shipping label.',
        estimatedCost: 'Free (already paid)',
        estimatedTime: '5-10 business days after appointment',
        tips: 'Some consulates return your passport the same day if approved; others require you to return in a few days. Ask at your appointment about the timeline. Do NOT book flights until you have your passport back with the visa sticker.',
        dependsOn: ['mexico-8'],
        sequence: 9
      },
      {
        id: 'mexico-10',
        title: 'Enter Mexico with Temporary Resident Visa',
        description:
          'Travel to Mexico and enter through immigration using your visa sticker. The immigration officer will stamp your passport and give you an FMM (migration form) or digital equivalent.',
        whereToGet:
          'Any Mexican international airport or land border crossing. Major entry points: Mexico City (MEX), Cancun (CUN), Guadalajara (GDL), or any official border crossing.',
        estimatedCost: 'Varies — flight costs depend on origin and timing',
        estimatedTime: 'Plan your travel within 180 days of visa sticker issuance',
        tips: 'Tell the immigration officer that you have a Temporary Resident visa — they need to process you differently than tourists. Keep your FMM or entry receipt safe; you will need it for the INM exchange process.',
        dependsOn: ['mexico-9'],
        sequence: 10
      },
      {
        id: 'mexico-11',
        title: 'Exchange Visa for Temporary Resident Card at INM',
        description:
          'Within 30 days of entering Mexico, you must visit your local INM (Instituto Nacional de Migracion) office to exchange your visa sticker for a physical Temporary Resident Card (Tarjeta de Residente Temporal).',
        whereToGet:
          'Your local INM office — find locations at inm.gob.mx. You must schedule an appointment online through the INM portal and bring all original documents, passport, and FMM.',
        estimatedCost: '$300-400 USD (varies by year — approximately 5,000-7,000 MXN for rights and card issuance)',
        estimatedTime: '2-4 weeks for processing after INM appointment; multiple visits may be required',
        tips: 'This step is mandatory and time-sensitive — missing the 30-day deadline can void your visa. INM offices can be bureaucratic; bring a Spanish speaker if you do not speak Spanish. Consider hiring an immigration lawyer or facilitator ($200-500) to handle the INM process.',
        dependsOn: ['mexico-10'],
        sequence: 11
      },
      {
        id: 'mexico-12',
        title: 'Register with Local Authorities',
        description:
          'After receiving your Temporary Resident Card, register your address with local municipal authorities. This is required for various local services and establishes your legal residence.',
        whereToGet:
          'Your local municipal government office (Ayuntamiento or Registro Civil). Requirements vary by state and municipality.',
        estimatedCost: 'Free',
        estimatedTime: 'Within 30 days of receiving your resident card',
        tips: 'This step is often not strictly enforced, but having local registration helps when dealing with banks, vehicle registration, and other bureaucratic processes. Bring your resident card, passport, and proof of address (utility bill or rental contract).',
        dependsOn: ['mexico-11'],
        sequence: 12
      }
    ]
  },

  // ────────────────────────────────────────────
  // 3. Spain Digital Nomad Visa (14 items)
  // ────────────────────────────────────────────
  {
    country: 'Spain',
    countryFlag: '🇪🇸',
    visaType: 'Digital Nomad Visa',
    visaDescription:
      'Spain\'s Digital Nomad Visa (Visado para Teletrabajo de Caracter Internacional), introduced under the Startups Act of 2023, allows remote workers employed by non-Spanish companies to live in Spain for up to one year, renewable for up to five years. It includes a favorable tax regime (Beckham Law eligibility).',
    items: [
      {
        id: 'spain-1',
        title: 'Valid Passport',
        description:
          'Your passport must have at least 1 year of validity remaining at the time of application and at least two blank pages. Spain recommends extra validity to cover the full visa period.',
        whereToGet:
          'U.S. Department of State — travel.state.gov. Apply or renew at a passport acceptance facility.',
        estimatedCost: '$130 for renewal; $165 for first-time applicants',
        estimatedTime: '4-6 weeks routine; 2-3 weeks expedited',
        tips: 'Since the digital nomad visa can last up to a year initially (renewable up to 5 years), having a passport with at least 2-3 years of remaining validity is strongly recommended to avoid mid-stay renewal complications.',
        dependsOn: [],
        sequence: 1
      },
      {
        id: 'spain-2',
        title: 'Biometric Passport Photos',
        description:
          'Two recent biometric passport-style photographs (32mm x 26mm) with a white background, taken within the last 6 months.',
        whereToGet:
          'CVS, Walgreens, or professional photo studios. Ensure the photos meet Spanish consulate specifications, which differ slightly from U.S. passport photo dimensions.',
        estimatedCost: '$15',
        estimatedTime: 'Same day',
        tips: 'Spanish consulates can be particular about photo specs. The photos should be 32x26mm (smaller than U.S. standard). Ask the photo service specifically for "Spanish visa photos" or bring the consulate spec sheet.',
        dependsOn: [],
        sequence: 2
      },
      {
        id: 'spain-3',
        title: 'FBI Criminal Background Check',
        description:
          'An Identity History Summary from the FBI, proving you have no serious criminal convictions. Required for all long-stay Spanish visa applications.',
        whereToGet:
          'FBI CJIS — www.fbi.gov/services/cjis/identity-history-summary-checks. Electronic submission via the FBI website.',
        estimatedCost: '$18',
        estimatedTime: '12-18 weeks directly from FBI',
        tips: 'Use an FBI-approved channeler like Fieldprint or Identogo to receive results in 1-3 weeks. The background check must be recent (typically less than 3-6 months old at time of application), so time your request carefully.',
        dependsOn: [],
        sequence: 3
      },
      {
        id: 'spain-4',
        title: 'Apostille for FBI Background Check',
        description:
          'The FBI background check must be apostilled by the U.S. Department of State so it is legally recognized in Spain under the Hague Convention.',
        whereToGet:
          'U.S. Department of State, Office of Authentications — travel.state.gov/content/travel/en/records-and-authentications.html.',
        estimatedCost: '$20',
        estimatedTime: '4-6 weeks by mail',
        tips: 'After apostilling, the document also needs to be translated into Spanish by a sworn translator (traductor jurado). You can find sworn translators through the Spanish Ministry of Foreign Affairs list or use online services specializing in Spanish legal translation ($30-75).',
        dependsOn: ['spain-3'],
        sequence: 4
      },
      {
        id: 'spain-5',
        title: 'Proof of Remote Employment or Freelance Contracts',
        description:
          'Documentation proving you work remotely for a company outside of Spain or are a self-employed freelancer with clients outside Spain. Must show at least 3 months of existing work history with the employer or clients.',
        whereToGet:
          'Request an employment verification letter from your HR department, or compile freelance contracts, invoices, and client correspondence. The letter must confirm remote work authorization and employment duration.',
        estimatedCost: 'Free',
        estimatedTime: '1 week to gather and organize documentation',
        tips: 'The law requires your employer/clients to be based outside Spain and the relationship must have existed for at least 3 months (or you must show the company has been operating for at least 1 year). Include your employment contract and a letter specifically stating your work is performed remotely.',
        dependsOn: [],
        sequence: 5
      },
      {
        id: 'spain-6',
        title: 'Proof of Sufficient Income',
        description:
          'Bank statements or pay stubs demonstrating income of at least 200% of the Spanish minimum wage (approximately EUR 2,520/month or $2,800/month). Higher amounts strengthen your application.',
        whereToGet:
          'Your bank — download official statements. Pay stubs from your employer. Tax returns can supplement bank statements.',
        estimatedCost: 'Free',
        estimatedTime: '1 week to compile',
        tips: 'The threshold is 200% of Spain IPREM (Indicador Publico de Renta de Efectos Multiples), which is updated annually. For families, add 75% of IPREM per additional family member. Showing income well above the minimum demonstrates financial stability.',
        dependsOn: [],
        sequence: 6
      },
      {
        id: 'spain-7',
        title: 'Health Insurance with Full Coverage in Spain',
        description:
          'A comprehensive health insurance policy valid in Spain with no copays or deductibles for basic medical care. Must cover the full duration of your stay. Spanish consulates are strict about coverage levels.',
        whereToGet:
          'Adeslas (adeslas.es), Sanitas (sanitas.es), MAPFRE (mapfre.es), Cigna Global, or Allianz Care. Spanish-based providers are often preferred by consulates.',
        estimatedCost: '$60-120/month depending on age and coverage',
        estimatedTime: 'Immediate — purchase online and receive policy documents same day',
        tips: 'Many consulates specifically require a Spanish or EU-based insurance provider, not international nomad insurance. Adeslas and Sanitas are the most commonly accepted. Make sure the policy explicitly states "full coverage in Spain" and has no geographic limitations.',
        dependsOn: [],
        sequence: 7
      },
      {
        id: 'spain-8',
        title: 'University Degree or Professional Experience Proof',
        description:
          'A university degree from a recognized institution, OR proof of at least 3 years of professional experience in your field. This demonstrates your qualifications for remote work.',
        whereToGet:
          'Request official transcripts or diploma copies from your university. For professional experience, compile LinkedIn profile printout, employment verification letters, or reference letters from former employers.',
        estimatedCost: 'Free (university transcript copies may cost $10-25)',
        estimatedTime: '1-2 weeks to request and receive official documents',
        tips: 'If using a university degree, it may need to be apostilled and translated into Spanish. If relying on professional experience, provide a detailed CV plus at least one official letter confirming your experience and role. Tech workers and creatives typically have an easier time documenting this.',
        dependsOn: [],
        sequence: 8
      },
      {
        id: 'spain-9',
        title: 'Spanish Digital Nomad Visa Application Form',
        description:
          'The official national visa application form (Solicitud de Visado Nacional) for Spain, completed in full with all personal and professional details.',
        whereToGet:
          'Download from your Spanish consulate website or from exteriores.gob.es. The form is standardized across all Spanish consulates.',
        estimatedCost: 'Free',
        estimatedTime: '30 minutes',
        tips: 'Complete the form in Spanish if possible — it demonstrates effort and may be viewed favorably. Use block letters or type the form digitally. Sign with blue ink. The form asks for your "tipo de visado" — select the option for international telework (teletrabajo).',
        dependsOn: [],
        sequence: 9
      },
      {
        id: 'spain-10',
        title: 'Cover Letter Explaining Work Arrangement',
        description:
          'A detailed letter explaining your remote work setup, your employer or freelance business, why you want to live in Spain, and how your work is performed entirely remotely for non-Spanish entities.',
        whereToGet:
          'Self-written. Reference templates from Spain digital nomad visa blogs and communities such as BalearicsDN or SpainExpat forums.',
        estimatedCost: 'Free',
        estimatedTime: '1-2 hours',
        tips: 'Emphasize that your work has no impact on the Spanish labor market (you are not taking jobs from Spanish residents). Mention your intention to contribute to the local economy through rent, spending, and taxes. Writing it in both English and Spanish shows effort.',
        dependsOn: [],
        sequence: 10
      },
      {
        id: 'spain-11',
        title: 'Proof of Accommodation in Spain',
        description:
          'Documentation showing where you will live in Spain — a signed rental agreement, property reservation, or booking confirmation for at least your initial period.',
        whereToGet:
          'Idealista (idealista.com), Fotocasa (fotocasa.es), Spotahome (spotahome.com), or HousingAnywhere. Airbnb booking confirmations are sometimes accepted for initial accommodation.',
        estimatedCost: 'Varies — Madrid averages EUR 900-1,400/month; Barcelona EUR 800-1,300/month for a one-bedroom',
        estimatedTime: '1-2 weeks to secure accommodation',
        tips: 'Spain has a competitive rental market, especially in Madrid and Barcelona. Consider starting with a 2-3 month Airbnb or serviced apartment while you search for long-term housing after arrival. Spotahome and HousingAnywhere specialize in remote rental processes for expats.',
        dependsOn: [],
        sequence: 11
      },
      {
        id: 'spain-12',
        title: 'Schedule Appointment at Spanish Consulate',
        description:
          'Book a visa application appointment at your nearest Spanish consulate or embassy. Most use the online scheduling system BLS International or direct consulate booking.',
        whereToGet:
          'BLS International (blsspainvisa.com) or your local Spanish consulate website. In the U.S., consulates are located in Washington D.C., New York, Miami, Chicago, Houston, Los Angeles, San Francisco, and Boston.',
        estimatedCost: 'Free to schedule',
        estimatedTime: '2-4 weeks for an available appointment slot',
        tips: 'Spanish consulate appointments can be difficult to get, especially in New York and Los Angeles. Check for cancellations frequently. Some consulates release new slots at specific times — join expat forums to learn the patterns for your consulate.',
        dependsOn: [],
        sequence: 12
      },
      {
        id: 'spain-13',
        title: 'Attend Consulate Appointment',
        description:
          'Present all required documents in person at your Spanish consulate appointment. The officer will review your complete application package, verify originals, and accept your submission.',
        whereToGet:
          'At your scheduled Spanish consulate. Bring all originals plus two photocopies of every document, organized in the order specified by the consulate checklist.',
        estimatedCost: 'EUR 80 visa fee (approximately $90)',
        estimatedTime: '1-2 hours',
        tips: 'Organize your documents in a clear folder with labeled dividers. Spanish consulates are known for being meticulous — a missing copy or unsigned form can result in rejection. Bring extra passport photos, a pen with blue ink, and cash (euros if possible) for the visa fee.',
        dependsOn: [
          'spain-1',
          'spain-2',
          'spain-3',
          'spain-4',
          'spain-5',
          'spain-6',
          'spain-7',
          'spain-8',
          'spain-9',
          'spain-10',
          'spain-11',
          'spain-12'
        ],
        sequence: 13
      },
      {
        id: 'spain-14',
        title: 'Wait for Visa Approval',
        description:
          'After submission, the consulate processes your application through the Spanish immigration system (Unidad de Grandes Empresas y Colectivos Estrategicos). You will be contacted when a decision is made.',
        whereToGet:
          'No action required — await notification from the consulate by email or phone.',
        estimatedCost: 'Free (already paid at appointment)',
        estimatedTime: '20-45 days; processing times vary by consulate and season',
        tips: 'Use this waiting period productively: start learning Spanish (the investment pays off enormously), research your target city, open a Wise multi-currency account, and connect with expat groups on Facebook and Telegram. If you have not heard back in 45 days, contact the consulate for a status update.',
        dependsOn: ['spain-13'],
        sequence: 14
      }
    ]
  },

  // ──────────────────────────────────────────────────
  // 4. Thailand Long-Term Resident Visa (13 items)
  // ──────────────────────────────────────────────────
  {
    country: 'Thailand',
    countryFlag: '🇹🇭',
    visaType: 'Long-Term Resident Visa',
    visaDescription:
      'Thailand\'s Long-Term Resident (LTR) Visa is a 10-year renewable visa designed to attract high-income individuals, retirees, remote workers, and highly skilled professionals. It offers benefits including a reduced personal income tax rate (17%), exemption from the 90-day reporting requirement (changed to annual reporting), and a digital work permit.',
    items: [
      {
        id: 'thailand-1',
        title: 'Valid Passport',
        description:
          'Your passport must have at least 18 months of validity remaining at the time of application, as the LTR visa is a long-term commitment. At least four blank pages are recommended.',
        whereToGet:
          'U.S. Department of State — travel.state.gov. Given the 18-month requirement, renew early if your passport expires within 2 years.',
        estimatedCost: '$130 for renewal; $165 for first-time applicants',
        estimatedTime: '4-6 weeks routine; 2-3 weeks expedited',
        tips: 'The 18-month validity requirement is stricter than most countries. If your passport has less than 2 years remaining, renew it before starting the LTR application process to avoid delays.',
        dependsOn: [],
        sequence: 1
      },
      {
        id: 'thailand-2',
        title: 'Passport Photos',
        description:
          'Six recent passport-style photographs in Thai format (4cm x 6cm) with a white background. Note that Thai photo requirements differ from U.S. standard passport photos.',
        whereToGet:
          'Professional photo studios that offer international visa photo services. Standard U.S. pharmacy photo services may not offer 4x6cm format — use a studio or online service like Visafoto.',
        estimatedCost: '$20',
        estimatedTime: 'Same day',
        tips: 'The 4x6cm format is specific to Thailand and larger than many countries require. Not all U.S. photo services stock this size. Visafoto.com can digitally reformat your photo to the exact Thai specifications, which you can then print at any pharmacy.',
        dependsOn: [],
        sequence: 2
      },
      {
        id: 'thailand-3',
        title: 'FBI Criminal Background Check',
        description:
          'An official Identity History Summary from the FBI. Thailand requires a clean criminal record for LTR visa applicants.',
        whereToGet:
          'FBI CJIS — www.fbi.gov/services/cjis/identity-history-summary-checks.',
        estimatedCost: '$18',
        estimatedTime: '12-18 weeks directly from FBI',
        tips: 'Start this immediately — it is almost always the longest single step. Use an FBI channeler to cut the wait to 1-3 weeks. The background check must be less than 6 months old when submitted.',
        dependsOn: [],
        sequence: 3
      },
      {
        id: 'thailand-4',
        title: 'Apostille for FBI Background Check',
        description:
          'The FBI background check must be apostilled by the U.S. Department of State. Thailand is a member of the Hague Apostille Convention (as of 2024), so an apostille is the required authentication.',
        whereToGet:
          'U.S. Department of State, Office of Authentications — travel.state.gov/content/travel/en/records-and-authentications.html.',
        estimatedCost: '$20',
        estimatedTime: '4-6 weeks by mail',
        tips: 'Since Thailand joined the Hague Apostille Convention in 2024, the process is simpler than the previous embassy legalization route. Ensure you apostille after receiving the FBI results — the apostille covers the FBI document, not your fingerprints.',
        dependsOn: ['thailand-3'],
        sequence: 4
      },
      {
        id: 'thailand-5',
        title: 'Proof of Income ($80,000+/year)',
        description:
          'Official documentation proving personal income of at least $80,000 USD per year for the "Work-from-Thailand Professionals" category. Alternatively, $40,000+/year with an advanced degree (Masters or above) from a top-ranked university or significant employment history.',
        whereToGet:
          'Employment contracts, tax returns (IRS Form 1040 or equivalent), W-2 forms, official pay stubs, or investment income statements. For the reduced $40K threshold, include certified copies of advanced degrees.',
        estimatedCost: 'Free',
        estimatedTime: '1-2 weeks to compile and organize',
        tips: 'This is a high income threshold and the most common disqualifier. The $80K is gross personal income, not household. If you earn between $40K-$80K, research whether you qualify for the reduced threshold with advanced degrees or specialized skills. Company income does not count — it must be personal income.',
        dependsOn: [],
        sequence: 5
      },
      {
        id: 'thailand-6',
        title: 'Health Insurance with $50,000+ Coverage',
        description:
          'A health insurance policy providing at least $50,000 USD in coverage that is valid in Thailand. The policy must cover inpatient and outpatient care. This is a strict LTR visa requirement.',
        whereToGet:
          'International providers: Cigna Global, Allianz Care, AXA International, BUPA Global, or Pacific Cross (Thailand-based). Luma Health Insurance (specifically designed for Thailand LTR visa holders).',
        estimatedCost: '$100-200/month depending on age and coverage level',
        estimatedTime: 'Immediate — purchase online',
        tips: 'Pacific Cross and Luma Health are specifically popular among LTR visa holders as they are Thailand-based and well-recognized by the BOI. Ensure your policy document explicitly states the minimum $50,000 coverage amount. Some applicants have been rejected for policies that had high deductibles reducing effective coverage below $50K.',
        dependsOn: [],
        sequence: 6
      },
      {
        id: 'thailand-7',
        title: 'Personal Income Tax Returns (Last 2 Years)',
        description:
          'Certified copies of your personal income tax returns from the last two years, proving consistent income above the threshold. These corroborate your income claims and are required by the BOI.',
        whereToGet:
          'IRS — request tax return transcripts at irs.gov/individuals/get-transcript. For other countries, contact your national tax authority. You may also use certified copies of filed returns.',
        estimatedCost: 'Free from IRS; accountant-certified copies may cost $25-50',
        estimatedTime: '1-2 weeks from IRS; immediate if you have copies on file',
        tips: 'IRS tax transcripts are free and can be downloaded online for the last 3 years. If your accountant filed on your behalf, they can provide certified copies. Ensure the income shown matches or exceeds your claimed income in the application.',
        dependsOn: [],
        sequence: 7
      },
      {
        id: 'thailand-8',
        title: 'Online Application through Thailand BOI Website',
        description:
          'Submit your LTR visa application through the Board of Investment (BOI) of Thailand online portal. This is the first formal step in the LTR process — all other documents are uploaded here.',
        whereToGet:
          'BOI LTR Visa Portal — ltr.boi.go.th. Create an account, select your applicant category (Work-from-Thailand Professional, Wealthy Global Citizen, Wealthy Pensioner, or Highly Skilled Professional), and upload all supporting documents.',
        estimatedCost: 'Free to apply',
        estimatedTime: '1-2 hours to complete the online form and upload documents',
        tips: 'Have all your documents scanned as PDFs before starting — the system can time out. The portal categorizes applicants into 4 groups; "Work-from-Thailand Professional" is the most common for remote workers. Double-check file size limits (usually 5MB per document). Save your application ID number immediately.',
        dependsOn: [],
        sequence: 8
      },
      {
        id: 'thailand-9',
        title: 'Pay Application Fee',
        description:
          'The LTR visa application fee of 50,000 THB (approximately $1,575 USD). This is a one-time fee for the 10-year visa and is non-refundable.',
        whereToGet:
          'Paid through the BOI portal via bank transfer to the designated BOI account. Payment instructions are provided after your application is submitted and preliminarily accepted.',
        estimatedCost: '$1,575 (50,000 THB)',
        estimatedTime: 'Payment due within 30 days of application acceptance',
        tips: 'This is one of the more expensive visa application fees globally but covers a 10-year visa. Use a service like Wise for the bank transfer to get the best THB exchange rate. Keep your transfer receipt — you will need to upload it to the BOI portal.',
        dependsOn: ['thailand-8'],
        sequence: 9
      },
      {
        id: 'thailand-10',
        title: 'Attend Interview (Virtual or In-Person)',
        description:
          'After initial document review, the BOI may schedule an interview to verify your application details. Interviews can be conducted virtually (via video call) or in person at a Thai consulate/embassy.',
        whereToGet:
          'Scheduled by the BOI — you will receive an email with interview details and available time slots. Virtual interviews are conducted through Microsoft Teams or Zoom.',
        estimatedCost: 'Free',
        estimatedTime: '30-60 minutes; scheduled 2-4 weeks after application review',
        tips: 'Not all applicants are interviewed — straightforward applications with clear documentation may be approved without one. If interviewed, be prepared to explain your income sources, work arrangement, and reasons for choosing Thailand. Have your documents accessible during the call.',
        dependsOn: ['thailand-8'],
        sequence: 10
      },
      {
        id: 'thailand-11',
        title: 'Wait for Visa Approval from BOI',
        description:
          'The BOI reviews your complete application, conducts background verification, and issues a decision. Approved applicants receive an endorsement letter to present at a Thai embassy/consulate or immigration office.',
        whereToGet:
          'Decision communicated via email and through the BOI LTR portal. Check your portal dashboard regularly for status updates.',
        estimatedCost: 'Free (already paid)',
        estimatedTime: '20-60 days; complex cases may take longer',
        tips: 'If your application is flagged for additional documentation, respond promptly — delays in providing requested information can significantly extend processing time. The BOI sometimes requests additional financial documentation or employment verification.',
        dependsOn: ['thailand-9', 'thailand-10'],
        sequence: 11
      },
      {
        id: 'thailand-12',
        title: 'Enter Thailand and Report to Immigration',
        description:
          'After receiving BOI endorsement, obtain your LTR visa stamp at a Thai embassy/consulate or apply for the visa upon arrival. Within 90 days of entering Thailand, report to the local immigration office to register your address.',
        whereToGet:
          'Thai embassy/consulate in your home country for pre-arrival visa, OR immigration checkpoint upon arrival in Thailand. Post-arrival registration at your local Immigration Bureau office — find locations at immigration.go.th.',
        estimatedCost: 'Free for registration',
        estimatedTime: 'Within first 90 days of arrival',
        tips: 'LTR visa holders enjoy the dedicated fast-track lane at major Thai airports (Suvarnabhumi, Don Mueang). Register your address within 24 hours of settling at your accommodation (your hotel/landlord usually handles TM.30 reporting). Keep multiple copies of your BOI endorsement letter.',
        dependsOn: ['thailand-11'],
        sequence: 12
      },
      {
        id: 'thailand-13',
        title: 'Set Up Ongoing 90-Day Reporting',
        description:
          'All foreign residents in Thailand must report their address to immigration every 90 days. LTR visa holders may qualify for annual reporting instead, but confirm with your local immigration office.',
        whereToGet:
          'Online through the TM47 e-filing system at tm47.immigration.go.th, by mail to your local immigration office, or in person. Some immigration offices also accept reports via the Immigration TM47 mobile app.',
        estimatedCost: 'Free',
        estimatedTime: 'Every 90 days (or annually for qualifying LTR holders); takes 15-30 minutes online',
        tips: 'The online system works well but can be unreliable during peak times. Set calendar reminders 2 weeks before each due date. LTR visa holders are supposed to benefit from annual reporting (instead of 90-day), but implementation varies by immigration office — confirm locally. Missing a report can result in a 2,000 THB fine.',
        dependsOn: ['thailand-12'],
        sequence: 13
      }
    ]
  },

  // ────────────────────────────────────────────────
  // 5. Costa Rica Digital Nomad Visa (11 items)
  // ────────────────────────────────────────────────
  {
    country: 'Costa Rica',
    countryFlag: '🇨🇷',
    visaType: 'Digital Nomad Visa',
    visaDescription:
      'Costa Rica\'s Digital Nomad Visa (Ley 10.008, "Ley para atraer trabajadores y prestadores remotos de servicios de caracter internacional") allows remote workers earning at least $3,000/month to reside in Costa Rica for one year, renewable for an additional year. The visa exempts holders from Costa Rican income tax on foreign-source earnings.',
    items: [
      {
        id: 'costarica-1',
        title: 'Valid Passport',
        description:
          'Your passport must have at least 6 months of validity remaining beyond your planned arrival date in Costa Rica and at least two blank pages.',
        whereToGet:
          'U.S. Department of State — travel.state.gov. Renew by mail or apply at a passport acceptance facility.',
        estimatedCost: '$130 for renewal; $165 for first-time applicants',
        estimatedTime: '4-6 weeks routine; 2-3 weeks expedited',
        tips: 'Costa Rica is relatively lenient on passport condition compared to some countries, but ensure there are no torn pages or water damage. If you plan to extend the visa for a second year, make sure you have enough validity to cover the full two years.',
        dependsOn: [],
        sequence: 1
      },
      {
        id: 'costarica-2',
        title: 'Passport Photos',
        description:
          'Two recent passport-style photographs with a white background, meeting standard international specifications.',
        whereToGet:
          'CVS, Walgreens, or any professional photo service. Standard U.S. passport photos (2x2 inches) are generally accepted.',
        estimatedCost: '$15',
        estimatedTime: 'Same day',
        tips: 'The digital application process may require a digital photo upload in addition to physical copies. Have both a digital file (JPEG, 600x600 pixels minimum) and printed copies ready.',
        dependsOn: [],
        sequence: 2
      },
      {
        id: 'costarica-3',
        title: 'FBI Criminal Background Check',
        description:
          'An FBI Identity History Summary to demonstrate you have no serious criminal record. Costa Rica requires this for digital nomad visa applicants.',
        whereToGet:
          'FBI CJIS — www.fbi.gov/services/cjis/identity-history-summary-checks.',
        estimatedCost: '$18',
        estimatedTime: '12-18 weeks directly from FBI',
        tips: 'This is typically the biggest bottleneck in the entire process. Start this step first, even before gathering other documents. Use an FBI channeler to receive results in 1-3 weeks. The document must be less than 6 months old at the time of submission.',
        dependsOn: [],
        sequence: 3
      },
      {
        id: 'costarica-4',
        title: 'Apostille for FBI Background Check',
        description:
          'The FBI background check must be apostilled by the U.S. Department of State for recognition in Costa Rica under the Hague Apostille Convention.',
        whereToGet:
          'U.S. Department of State, Office of Authentications — travel.state.gov/content/travel/en/records-and-authentications.html.',
        estimatedCost: '$20',
        estimatedTime: '4-6 weeks by mail',
        tips: 'After apostilling, the document must also be translated into Spanish by an official translator recognized by the Costa Rican Ministry of Foreign Affairs. Budget an additional $40-80 and 3-5 days for certified translation.',
        dependsOn: ['costarica-3'],
        sequence: 4
      },
      {
        id: 'costarica-5',
        title: 'Proof of Remote Income ($3,000+/month)',
        description:
          'Official documentation proving you earn at least $3,000 USD per month (or $4,000/month for families) from remote work for a company or clients located outside Costa Rica. This is the core financial requirement.',
        whereToGet:
          'Employer letter on company letterhead stating salary, position, and remote work authorization. Freelancers: bank statements showing consistent income, plus client contracts or invoices for the last 3-6 months.',
        estimatedCost: 'Free',
        estimatedTime: '1 week to compile documentation',
        tips: 'The employer letter is the strongest form of proof — request that it explicitly states your monthly gross salary in USD and confirms your role is fully remote. For freelancers, showing a diversified client base strengthens the application. Income must be from outside Costa Rica to qualify.',
        dependsOn: [],
        sequence: 5
      },
      {
        id: 'costarica-6',
        title: 'Health Insurance Valid in Costa Rica',
        description:
          'A health insurance policy that covers medical expenses in Costa Rica for the full duration of your stay, including COVID-19 coverage and medical evacuation.',
        whereToGet:
          'INS (Instituto Nacional de Seguros — the Costa Rican government insurer at portal.ins-cr.com), SafetyWing, Cigna Global, or IMG (International Medical Group). Costa Rica specifically recommends INS policies for visa applicants.',
        estimatedCost: '$80-150/month depending on age and coverage level',
        estimatedTime: 'Immediate — policies can be purchased online',
        tips: 'While international insurance is accepted, purchasing a policy from INS (Costa Rica national insurer) can simplify your application as immigration officers are familiar with their coverage. INS offers a specific product for digital nomads. COVID-19 coverage is typically required.',
        dependsOn: [],
        sequence: 6
      },
      {
        id: 'costarica-7',
        title: 'Completed Digital Nomad Visa Application',
        description:
          'The official digital nomad visa application form with all personal details, employment information, and declaration of intent to reside in Costa Rica as a remote worker.',
        whereToGet:
          'Available through the DGME (Direccion General de Migracion y Extranjeria) website at migracion.go.cr or through the Tramites Digitales portal.',
        estimatedCost: 'Free',
        estimatedTime: '1 hour to complete thoroughly',
        tips: 'Complete the form in Spanish if possible — while not strictly required, it can facilitate processing. Ensure all names, dates, and passport numbers match your official documents exactly. Have your passport nearby for reference while filling it out.',
        dependsOn: [],
        sequence: 7
      },
      {
        id: 'costarica-8',
        title: 'Online Application through DGME Website',
        description:
          'Submit your complete application package through the DGME (Costa Rican immigration authority) online portal. Upload all supporting documents as PDFs and pay the filing fee.',
        whereToGet:
          'DGME Tramites Digitales — tramites.migracion.go.cr. Create an account, select "Categoria Especial — Trabajador Remoto o Prestador Remoto de Servicios," and upload all documents.',
        estimatedCost: 'Free to submit (application fee paid separately)',
        estimatedTime: '30 minutes if all documents are pre-scanned and ready',
        tips: 'Scan all documents as clear, legible PDFs under 5MB each. The portal occasionally experiences downtime — try during Costa Rica business hours (8 AM - 4 PM CST). Save your confirmation number and take screenshots of each submission step.',
        dependsOn: [],
        sequence: 8
      },
      {
        id: 'costarica-9',
        title: 'Pay Application Fee',
        description:
          'The non-refundable application processing fee for the digital nomad visa. This covers administrative processing by DGME.',
        whereToGet:
          'Paid through the DGME online portal via credit/debit card, or via bank deposit to the Banco de Costa Rica (BCR) DGME account. Payment instructions provided during online application.',
        estimatedCost: '$100 USD',
        estimatedTime: 'Immediate — pay online during application submission',
        tips: 'Keep your payment receipt — you will need it as proof of payment if there are any processing questions. If paying by international credit card, ensure your card allows international transactions and inform your bank beforehand to avoid a fraud block.',
        dependsOn: [],
        sequence: 9
      },
      {
        id: 'costarica-10',
        title: 'Wait for Visa Approval',
        description:
          'DGME reviews your application package and issues a decision. Approved applicants receive an authorization letter by email that they can use to enter Costa Rica under digital nomad visa status.',
        whereToGet:
          'Decision communicated via email to the address registered in the DGME portal. You can also check status by logging into your DGME portal account.',
        estimatedCost: 'Free (already paid)',
        estimatedTime: '15-30 days; some applicants report receiving approval in as few as 7 days',
        tips: 'Costa Rica has been relatively fast and efficient with digital nomad visa processing compared to other countries. If you have not received a response within 30 days, contact DGME directly at info@migracion.go.cr or call +506 2299-8100. Approval rates are high for applicants who meet all income and documentation requirements.',
        dependsOn: ['costarica-8', 'costarica-9'],
        sequence: 10
      },
      {
        id: 'costarica-11',
        title: 'Register with CCSS (Caja Costarricense de Seguro Social)',
        description:
          'Within 30 days of arrival in Costa Rica, you must register with the CCSS (the Costa Rican social security system), which provides access to the public healthcare system. This is a legal requirement for all residents.',
        whereToGet:
          'Your nearest CCSS office (Sucursal de la CCSS) — find locations at ccss.sa.cr. Bring your passport, approved visa documentation, and proof of address. Some areas allow registration at the local EBAIS (community health clinic).',
        estimatedCost: '$50-100/month based on declared income (assessed individually)',
        estimatedTime: 'Registration takes 1-2 hours; must be completed within 30 days of arrival',
        tips: 'CCSS registration is mandatory even if you have private insurance — it funds the Costa Rican public health system. The monthly contribution is based on your declared income (typically 7-11% of earnings). Many digital nomads maintain both CCSS and private insurance. The public system covers a wide range of services including prescriptions and specialist care, though wait times can be long.',
        dependsOn: ['costarica-10'],
        sequence: 11
      }
    ]
  }
]

export function getChecklistForCountryVisa(
  country: string,
  visaType: string
): VisaChecklist | undefined {
  return checklists.find(
    (c) =>
      c.country.toLowerCase() === country.toLowerCase() &&
      c.visaType.toLowerCase() === visaType.toLowerCase()
  )
}

export const countryVisaOptions: Record<string, string[]> = {
  Portugal: ['D7 Passive Income Visa'],
  Mexico: ['Temporary Resident Visa'],
  Spain: ['Digital Nomad Visa'],
  Thailand: ['Long-Term Resident Visa'],
  'Costa Rica': ['Digital Nomad Visa']
}
