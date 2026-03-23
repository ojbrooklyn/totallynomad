// Example data — replace with real or API-sourced news before production

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string; // ISO 8601 date string
  category: "Visa & Immigration" | "Cost of Living" | "Tax & Finance" | "Healthcare" | "Community" | "Policy";
  country?: string;
  source: string;
}

export const newsItems: NewsItem[] = [
  {
    id: "news-001",
    title: "Portugal Extends Digital Nomad Visa to Cover Freelancers Under New Income Rules",
    summary:
      "Portugal's immigration authority (AIMA) announced updated income thresholds for the D8 Digital Nomad Visa, lowering the minimum monthly proof-of-income requirement and expanding eligibility to include self-employed freelancers in creative and tech fields.",
    date: "2026-02-18",
    category: "Visa & Immigration",
    country: "Portugal",
    source: "AIMA Official Bulletin",
  },
  {
    id: "news-002",
    title: "Mexico City Rent Prices Stabilize After Three Years of Gentrification Pressure",
    summary:
      "New data from Inmuebles24 shows that average monthly rents in Colonia Roma and Condesa have plateaued for the first time since 2022, offering some relief to both local residents and American expats who bore the brunt of rapid price increases driven by remote-work migration.",
    date: "2026-01-30",
    category: "Cost of Living",
    country: "Mexico",
    source: "Inmuebles24 Market Report Q1 2026",
  },
  {
    id: "news-003",
    title: "IRS Confirms 2025 FEIE Exclusion Limit at $126,500 — What US Expats Need to Know",
    summary:
      "The IRS has officially confirmed the Foreign Earned Income Exclusion (FEIE) ceiling for tax year 2025 at $126,500, up from $120,000 in 2023. Tax advisors urge expats to review their Physical Presence Test documentation and file Form 2555 accurately to maximize the benefit.",
    date: "2026-02-05",
    category: "Tax & Finance",
    source: "IRS Revenue Procedure 2025-61",
  },
  {
    id: "news-004",
    title: "Thailand Elite Visa Overhaul Adds 5-Year Tier Aimed at American Retirees",
    summary:
      "The Thai government relaunched its premium long-stay program under the Thailand Privilege Visa brand, introducing a more affordable 5-year entry-level tier at THB 500,000. The move is widely seen as an effort to attract middle-income American and European retirees priced out of competing Southeast Asian markets.",
    date: "2026-03-01",
    category: "Visa & Immigration",
    country: "Thailand",
    source: "Thailand Privilege Card Co.",
  },
  {
    id: "news-005",
    title: "Costa Rica's CAJA Healthcare Now Accepts Foreign Residents Under Digital Nomad Visa",
    summary:
      "A legislative amendment signed in San José allows holders of Costa Rica's Digital Nomad Visa (Law 9996) to voluntarily enroll in the Caja Costarricense de Seguro Social (CAJA) public health system, closing a major gap for expats who previously relied entirely on private insurance.",
    date: "2026-01-14",
    category: "Healthcare",
    country: "Costa Rica",
    source: "La Nación / CCSS Press Release",
  },
  {
    id: "news-006",
    title: "Colombia Simplifies Residency Path for Remote Workers With New Visa Category",
    summary:
      "Colombia's Cancillería introduced a dedicated remote-worker visa category (M-10) requiring proof of foreign-sourced income of at least three times the Colombian minimum wage. Holders may apply for permanent residency (R visa) after five continuous years, making Colombia one of the most accessible long-term expat destinations in Latin America.",
    date: "2026-02-27",
    category: "Visa & Immigration",
    country: "Colombia",
    source: "Cancillería de Colombia Resolución 2026-047",
  },
];
