// Example data — replace with real metrics before production

export interface PlatformStat {
  label: string;
  value: string;
  icon: string;
  description: string;
}

export const platformStats: PlatformStat[] = [
  {
    label: "Country Guides",
    value: "52",
    icon: "🗺️",
    description: "In-depth relocation guides covering visa requirements, cost of living, healthcare, and more.",
  },
  {
    label: "Expats Helped",
    value: "15,000+",
    icon: "✈️",
    description: "Americans successfully guided through the process of moving and living abroad.",
  },
  {
    label: "Success Rate",
    value: "94%",
    icon: "✅",
    description: "Of members who follow our step-by-step relocation roadmap complete their move within target timelines.",
  },
  {
    label: "Avg Timeline",
    value: "3–6 Months",
    icon: "📅",
    description: "Average time from starting the TotallyNomad program to landing in your new home country.",
  },
  {
    label: "FEIE Benefit",
    value: "$126,500",
    icon: "💰",
    description: "2025 IRS Foreign Earned Income Exclusion limit — the amount US expats can exclude from federal tax.",
  },
  {
    label: "Avg Rent Savings",
    value: "40%",
    icon: "🏠",
    description: "Average reduction in monthly housing costs reported by members who relocate to our top-rated destinations.",
  },
  {
    label: "Community Members",
    value: "8,500+",
    icon: "👥",
    description: "Active members in our expat community forums, country-specific groups, and live Q&A sessions.",
  },
  {
    label: "Weekly Signups",
    value: "250+",
    icon: "📈",
    description: "New members joining TotallyNomad every week to start their path to living abroad.",
  },
];
