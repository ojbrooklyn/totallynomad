// ─── Affiliate / Partner Links ──────────────────────────────────────────────
// Centralised partner data so we can add new affiliates without touching every page.

export interface Partner {
  name: string
  url: string
  description: string
  category: string
}

export const partners: Record<string, Partner> = {
  repriced: {
    name: 'Repriced',
    url: 'https://repriced.ai/?via=oj',
    description:
      'Automatically tracks flight & hotel price drops. Get cash back on bookings.',
    category: 'travel-savings',
  },
  airalo: {
    name: 'Airalo',
    url: 'https://ref.airalo.com/ELF0017293',
    description:
      'Buy an eSIM before you land — instant data in 200+ countries. No roaming fees, no hunting for local SIM cards.',
    category: 'connectivity',
  },
  // More partners will be added here: wise, safetywing, nordvpn, etc.
}
