import { newsItems as staticNews, type NewsItem } from '../data/news';

const CACHE_KEY = 'tn_live_news';
const CACHE_TTL = 6 * 60 * 60 * 1000; // 6 hours

interface CachedNews {
  items: NewsItem[];
  timestamp: number;
}

function getCached(): CachedNews | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const cached: CachedNews = JSON.parse(raw);
    if (Date.now() - cached.timestamp < CACHE_TTL) return cached;
    return null;
  } catch {
    return null;
  }
}

function setCache(data: CachedNews) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  } catch {
    // silently fail
  }
}

const FEEDS = [
  'https://feeds.bbci.co.uk/news/world/rss.xml',
  'https://www.schengenvisainfo.com/feed/',
];

const IMMIGRATION_KEYWORDS =
  /visa|immigra|expat|nomad|passport|residency|citizenship|abroad|relocat|tax.*abroad|foreign.*income|FEIE|work.*permit/i;

interface RSSItem {
  title: string;
  pubDate: string;
  link: string;
  description?: string;
  content?: string;
}

function detectCategory(title: string, description: string): NewsItem['category'] {
  const text = `${title} ${description}`.toLowerCase();
  if (/visa|immigra|passport|residency|citizenship|work.*permit/.test(text))
    return 'Visa & Immigration';
  if (/tax|feie|irs|income.*exclusion|filing/.test(text)) return 'Tax & Finance';
  if (/cost|rent|price|inflat|afford|budget|expens/.test(text)) return 'Cost of Living';
  if (/health|hospital|medical|insur/.test(text)) return 'Healthcare';
  if (/communit|network|meetup|forum/.test(text)) return 'Community';
  return 'Policy';
}

function detectCountry(text: string): string | undefined {
  const countryMap: Record<string, string> = {
    portugal: 'Portugal',
    spain: 'Spain',
    mexico: 'Mexico',
    thailand: 'Thailand',
    'costa rica': 'Costa Rica',
    colombia: 'Colombia',
    germany: 'Germany',
    france: 'France',
    uk: 'United Kingdom',
    italy: 'Italy',
    greece: 'Greece',
    japan: 'Japan',
    brazil: 'Brazil',
    schengen: 'Schengen',
  };
  const lower = text.toLowerCase();
  for (const [key, value] of Object.entries(countryMap)) {
    if (lower.includes(key)) return value;
  }
  return undefined;
}

export interface LiveNewsResult {
  items: NewsItem[];
  source: 'live' | 'cached' | 'static';
  updatedAt: number;
}

export async function fetchNews(): Promise<LiveNewsResult> {
  // Check cache first
  const cached = getCached();
  if (cached) {
    return { items: cached.items, source: 'cached', updatedAt: cached.timestamp };
  }

  try {
    const allItems: NewsItem[] = [];

    for (const feedUrl of FEEDS) {
      try {
        const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`;
        const res = await fetch(apiUrl);
        if (!res.ok) continue;
        const data = await res.json();
        if (data.status !== 'ok' || !data.items) continue;

        for (const item of data.items as RSSItem[]) {
          const description = item.description || item.content || '';
          const titleAndDesc = `${item.title} ${description}`;

          // Filter for immigration/expat-related content (skip for schengenvisainfo since all content is relevant)
          if (
            !feedUrl.includes('schengenvisainfo') &&
            !IMMIGRATION_KEYWORDS.test(titleAndDesc)
          ) {
            continue;
          }

          allItems.push({
            id: `rss-${allItems.length}`,
            title: item.title,
            summary: description.replace(/<[^>]*>/g, '').slice(0, 200),
            date: new Date(item.pubDate).toISOString().split('T')[0],
            category: detectCategory(item.title, description),
            country: detectCountry(titleAndDesc),
            source: feedUrl.includes('bbc') ? 'BBC News' : 'Schengen Visa Info',
          });
        }
      } catch {
        // Individual feed failure — continue with next
      }
    }

    if (allItems.length === 0) {
      return { items: staticNews, source: 'static', updatedAt: 0 };
    }

    // Sort by date descending, take top 10
    allItems.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const items = allItems.slice(0, 10);

    const now = Date.now();
    setCache({ items, timestamp: now });
    return { items, source: 'live', updatedAt: now };
  } catch {
    return { items: staticNews, source: 'static', updatedAt: 0 };
  }
}
