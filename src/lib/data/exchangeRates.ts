// Example data — replace with live exchange rate API data before production
// Rates are approximate mid-market values vs USD as of early 2026

export interface ExchangeRate {
  currency: string;
  code: string;
  rate: number;       // Units of foreign currency per 1 USD
  change24h: number;  // Percentage change over the last 24 hours (positive = foreign currency weakened vs USD)
  flag: string;       // Emoji flag for display
}

export const exchangeRates: ExchangeRate[] = [
  {
    currency: "Euro",
    code: "EUR",
    rate: 0.9215,
    change24h: -0.12,
    flag: "🇪🇺",
  },
  {
    currency: "Mexican Peso",
    code: "MXN",
    rate: 17.84,
    change24h: 0.31,
    flag: "🇲🇽",
  },
  {
    currency: "Thai Baht",
    code: "THB",
    rate: 34.52,
    change24h: 0.08,
    flag: "🇹🇭",
  },
  {
    currency: "Costa Rican Colón",
    code: "CRC",
    rate: 512.75,
    change24h: -0.05,
    flag: "🇨🇷",
  },
  {
    currency: "British Pound",
    code: "GBP",
    rate: 0.7893,
    change24h: -0.22,
    flag: "🇬🇧",
  },
  {
    currency: "Japanese Yen",
    code: "JPY",
    rate: 149.38,
    change24h: 0.45,
    flag: "🇯🇵",
  },
  {
    currency: "Brazilian Real",
    code: "BRL",
    rate: 5.074,
    change24h: 0.19,
    flag: "🇧🇷",
  },
  {
    currency: "Colombian Peso",
    code: "COP",
    rate: 4162.5,
    change24h: -0.37,
    flag: "🇨🇴",
  },
];
