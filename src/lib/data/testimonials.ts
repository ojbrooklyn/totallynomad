// Example stories — replace with real member testimonials before production

export interface Testimonial {
  id: string;
  name: string;
  from: string;       // US city/state they moved from
  to: string;         // Country/city they moved to
  quote: string;
  role: string;       // Occupation or life situation
  avatar: string;     // Two-letter initials for avatar fallback
  rating: number;     // 1–5 star rating
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-001",
    name: "Marcus T.",
    from: "Austin, TX",
    to: "Lisbon, Portugal",
    quote:
      "I kept telling myself I'd move 'someday.' TotallyNomad gave me the actual checklist — NHR tax status, the D7 visa paperwork, the neighborhood breakdowns. I landed in Lisbon four months after signing up. My rent dropped by $1,200 a month and I haven't looked back once.",
    role: "Senior Software Engineer",
    avatar: "MT",
    rating: 5,
  },
  {
    id: "testimonial-002",
    name: "Renee & Dave P.",
    from: "Phoenix, AZ",
    to: "Medellín, Colombia",
    quote:
      "We retired earlier than planned because the numbers just didn't work in the US. A friend pointed us to TotallyNomad and the Colombia cost-of-living calculator blew our minds. We're living on $2,800 a month in a beautiful apartment and our healthcare is actually better than what we had on our old employer plan.",
    role: "Retired Couple",
    avatar: "RP",
    rating: 5,
  },
  {
    id: "testimonial-003",
    name: "Jade W.",
    from: "Brooklyn, NY",
    to: "Chiang Mai, Thailand",
    quote:
      "As a freelance designer, I was always one slow month away from stress. The FEIE explainer alone saved me thousands in taxes I didn't know I was overpaying. The community helped me find a co-working space within my first week. I feel more financially stable abroad than I ever did in New York.",
    role: "Freelance UX Designer",
    avatar: "JW",
    rating: 5,
  },
  {
    id: "testimonial-004",
    name: "Carlos M.",
    from: "Miami, FL",
    to: "San José, Costa Rica",
    quote:
      "Being bilingual, I thought I knew everything about moving to Latin America. I was wrong. TotallyNomad walked me through the Digital Nomad Visa process, helped me understand CAJA healthcare enrollment, and connected me with a local attorney who sorted my residency in under three months. Worth every penny.",
    role: "Marketing Consultant",
    avatar: "CM",
    rating: 4,
  },
];
