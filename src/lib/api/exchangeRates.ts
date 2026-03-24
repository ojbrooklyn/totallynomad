import { exchangeRates as staticRates, type ExchangeRate } from '../data/exchangeRates';

const CACHE_KEY = 'tn_exchange_rates';
const CACHE_TTL = 60 * 60 * 1000; // 1 hour

interface CachedRates {
  rates: ExchangeRate[];
  timestamp: number;
  source: 'live' | 'static';
}

const currencyMeta: Record<string, { currency: string; flag: string }> = {
  EUR: { currency: 'Euro', flag: '🇪🇺' },
  GBP: { currency: 'British Pound', flag: '🇬🇧' },
  MXN: { currency: 'Mexican Peso', flag: '🇲🇽' },
  THB: { currency: 'Thai Baht', flag: '🇹🇭' },
  CRC: { currency: 'Costa Rican Colón', flag: '🇨🇷' },
  JPY: { currency: 'Japanese Yen', flag: '🇯🇵' },
  BRL: { currency: 'Brazilian Real', flag: '🇧🇷' },
  COP: { currency: 'Colombian Peso', flag: '🇨🇴' },
};

const TARGET_CODES = ['EUR', 'MXN', 'THB', 'CRC', 'GBP', 'JPY', 'BRL', 'COP'];

function getCached(): CachedRates | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const cached: CachedRates = JSON.parse(raw);
    if (Date.now() - cached.timestamp < CACHE_TTL) return cached;
    return null;
  } catch {
    return null;
  }
}

function setCache(data: CachedRates) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  } catch {
    // localStorage full or unavailable — silently fail
  }
}

export interface LiveRateResult {
  rates: ExchangeRate[];
  source: 'live' | 'cached' | 'static';
  updatedAt: number; // timestamp
}

export async function fetchExchangeRates(): Promise<LiveRateResult> {
  // Check cache first
  const cached = getCached();
  if (cached) {
    return { rates: cached.rates, source: 'cached', updatedAt: cached.timestamp };
  }

  // Fetch from API
  try {
    const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const apiRates: Record<string, number> = data.rates;

    const rates: ExchangeRate[] = TARGET_CODES.map((code) => {
      const meta = currencyMeta[code];
      const rate = apiRates[code];
      // Find the static rate to compute a pseudo change24h
      const staticRate = staticRates.find((r) => r.code === code);
      const change24h = staticRate
        ? Number((((rate - staticRate.rate) / staticRate.rate) * 100).toFixed(2))
        : 0;
      return {
        currency: meta?.currency ?? code,
        code,
        rate,
        change24h,
        flag: meta?.flag ?? '',
      };
    });

    const now = Date.now();
    setCache({ rates, timestamp: now, source: 'live' });
    return { rates, source: 'live', updatedAt: now };
  } catch {
    // Fallback to static data
    return { rates: staticRates, source: 'static', updatedAt: 0 };
  }
}
