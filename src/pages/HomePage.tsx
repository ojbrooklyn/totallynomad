import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Globe,
  Calculator,
  ClipboardCheck,
  Users,
  Newspaper,
  MessageCircle,
  Map,
  TrendingUp,
  Star,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Zap,
  DollarSign,
  ExternalLink,
  Plane,
} from 'lucide-react';
import { platformStats } from '../lib/data/stats';
import { exchangeRates } from '../lib/data/exchangeRates';
import { newsItems } from '../lib/data/news';
import { testimonials } from '../lib/data/testimonials';
import { countries } from '../lib/data/countries';
import { partners } from '../lib/data/partners';

// ─── Hero background images ─────────────────────────────────────────────────
const heroImages = [
  'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1920&q=80',
  'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1920&q=80',
  'https://images.unsplash.com/photo-1528181304800-259b08848526?w=1920&q=80',
  'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=1920&q=80',
  'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=1920&q=80',
];

// ─── Category badge colours ───────────────────────────────────────────────────
const categoryColours: Record<string, string> = {
  'Visa & Immigration': 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300',
  'Cost of Living':     'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  'Tax & Finance':      'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300',
  Healthcare:           'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
  Community:            'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  Policy:               'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300',
};

// ─── Country gradient colours ─────────────────────────────────────────────────
const countryGradients: Record<string, string> = {
  portugal:   'from-red-500 to-rose-600',
  mexico:     'from-green-500 to-emerald-600',
  spain:      'from-orange-500 to-amber-600',
  thailand:   'from-purple-500 to-violet-600',
  'costa-rica': 'from-teal-500 to-cyan-600',
};

// ─── Feature card data ────────────────────────────────────────────────────────
const features = [
  {
    icon: Globe,
    title: 'Country Guides',
    description: 'In-depth relocation guides for 52 countries covering visas, cost of living, healthcare, and neighbourhoods.',
    iconBg: 'bg-gradient-to-br from-teal-500 to-emerald-600',
    href: '/countries',
  },
  {
    icon: Calculator,
    title: 'Budget Calculator',
    description: 'Model your new life abroad with our interactive cost-of-living calculator. Enter your lifestyle, get real numbers.',
    iconBg: 'bg-gradient-to-br from-teal-600 to-teal-500',
    href: '/calculator',
  },
  {
    icon: ClipboardCheck,
    title: 'Visa Eligibility Quiz',
    description: 'Answer a few questions and discover which visas you qualify for across dozens of countries — instantly.',
    iconBg: 'bg-gradient-to-br from-green-500 to-emerald-600',
    href: '/visa-quiz',
  },
  {
    icon: Users,
    title: 'Licensed Agents',
    description: 'Connect with vetted immigration attorneys and relocation specialists who specialise in American expats.',
    iconBg: 'bg-gradient-to-br from-orange-500 to-amber-600',
    href: '/agents',
  },
  {
    icon: Newspaper,
    title: 'Expat News',
    description: 'Stay current with visa rule changes, tax updates, and destination news that directly affect Americans abroad.',
    iconBg: 'bg-gradient-to-br from-amber-500 to-orange-600',
    href: '/news',
  },
  {
    icon: MessageCircle,
    title: 'Community',
    description: 'Join 8,500+ Americans abroad in country-specific forums, live Q&As, and peer-to-peer advice threads.',
    iconBg: 'bg-gradient-to-br from-amber-600 to-amber-500',
    href: '/community',
  },
];

// ─── Stat icon mapping ────────────────────────────────────────────────────────
const statIconComponents = [Map, Users, TrendingUp, Star, DollarSign, Globe, MessageCircle, Zap];

// ─── Helper: format date ──────────────────────────────────────────────────────
function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(0);

  // Preload hero images
  useEffect(() => {
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Rotate hero background every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const featuredCountries = countries.filter(c =>
    ['portugal', 'mexico', 'spain', 'thailand', 'costa-rica'].includes(c.slug)
  );

  // Monthly budget estimate from rent1BR lower bound
  const monthlyFrom: Record<string, string> = {
    portugal:   '$1,500',
    mexico:     '$1,200',
    spain:      '$1,800',
    thailand:   '$900',
    'costa-rica': '$1,400',
  };

  return (
    <div className="bg-[#FFFBEB] dark:bg-[#0C1222] min-h-screen">

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. HERO                                                             */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center">
        {/* Rotating background images */}
        {heroImages.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: i === currentImage ? 1 : 0,
            }}
            aria-hidden="true"
          />
        ))}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-44 flex items-center justify-center">
          <div className="max-w-4xl text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-white/90 text-sm font-medium mb-10">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              The Complete American Expat Platform
            </div>

            {/* Headline */}
            <h1 className="font-serif text-6xl md:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-8">
              Stop Dreaming.{' '}
              <span className="text-teal-200 italic">Start Moving.</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
              The Complete Platform for Americans Moving Abroad — country guides,
              visa tools, budget calculators, and a community of 8,500+ expats.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center gap-2 bg-white text-teal-700 font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-teal-50 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
              >
                Start Your Journey Free
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/countries"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/70 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-200"
              >
                Browse Countries
                <Globe className="w-5 h-5" />
              </Link>
            </div>

            {/* Social proof */}
            <div className="mt-14 flex items-center justify-center gap-3">
              <div className="flex -space-x-2">
                {['MT', 'JW', 'RP', 'CM'].map((initials) => (
                  <div
                    key={initials}
                    className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-300 to-emerald-400 border-2 border-white flex items-center justify-center text-white font-bold text-xs"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <p className="text-white/80 text-sm">
                <span className="font-bold text-white">15,000+</span> Americans moved abroad with our help
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 2. TRUST INDICATORS                                                 */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-white dark:bg-[#0C1222] border-b border-stone-200 dark:border-[#2A3444]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 divide-y md:divide-y-0 md:divide-x divide-stone-200 dark:divide-slate-700">
            <div className="flex items-center justify-center gap-3 py-3 md:py-0">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center">
                <Globe className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white">52 Country Guides</p>
                <p className="text-sm text-slate-500 dark:text-stone-400">Updated regularly by local experts</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 py-3 md:py-0 md:pl-8">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/40 flex items-center justify-center">
                <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white">Real-Time Visa Updates</p>
                <p className="text-sm text-slate-500 dark:text-stone-400">Policy changes tracked as they happen</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 py-3 md:py-0 md:pl-8">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white">$0 to Start</p>
                <p className="text-sm text-slate-500 dark:text-stone-400">Free tier gives you everything to begin</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 3. KEY METRICS DASHBOARD                                            */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white dark:bg-[#0C1222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section heading */}
          <div className="mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
              Platform at a Glance
            </h2>
            <p className="text-lg text-slate-500 dark:text-stone-400">
              Real data to power your move abroad
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {platformStats.map((stat, idx) => {
              const IconComponent = statIconComponents[idx % statIconComponents.length];
              return (
                <div
                  key={stat.label}
                  className="bg-white dark:bg-slate-800/50 rounded-xl p-5 hover:shadow-md transition-all duration-200 shadow-sm"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-9 h-9 rounded-lg bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                    </div>
                    <span className="text-2xl">{stat.icon}</span>
                  </div>
                  <p className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-1 leading-none">
                    {stat.value}
                  </p>
                  <p className="text-sm font-semibold text-slate-700 dark:text-stone-300 mb-2">
                    {stat.label}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 leading-snug line-clamp-3">
                    {stat.description}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="mt-4 text-xs text-slate-400 dark:text-slate-600">
            * Example data for demonstration purposes
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 4. VALUE PROPOSITION                                                */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#FFFBEB] dark:bg-[#0C1222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Everything You Need to Move Abroad
            </h2>
            <p className="text-lg text-slate-500 dark:text-stone-400 max-w-2xl mx-auto">
              From first research to touching down in your new home — we cover every step of the journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-white dark:bg-slate-800/50 rounded-xl p-7 hover:shadow-lg transition-all duration-200 group shadow-sm"
                >
                  <div className={`w-12 h-12 rounded-xl ${feature.iconBg} flex items-center justify-center mb-5 shadow-md`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <Link
                    to={feature.href}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors group-hover:gap-2"
                  >
                    Learn more
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 4b. PARTNER TOOLS TIP                                               */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-[#FFFBEB] dark:bg-[#0C1222] pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-sky-200 dark:border-sky-800/60 bg-sky-50/60 dark:bg-sky-900/20 p-6 md:p-8 flex flex-col md:flex-row items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-sky-100 dark:bg-sky-900/40 flex items-center justify-center shrink-0">
              <Plane className="w-6 h-6 text-sky-600 dark:text-sky-400" />
            </div>
            <div className="space-y-2 flex-1">
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Save on Flights Automatically
                </h3>
                <span className="text-xs text-gray-400 dark:text-slate-500 font-medium">Partner</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed max-w-2xl">
                Moving abroad? Book your flight, then let{' '}
                <a
                  href={partners.repriced.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-sky-700 dark:text-sky-300 hover:underline"
                >
                  Repriced
                </a>{' '}
                monitor the price. If it drops, they rebook automatically and you get cash back. Free to sign up — they only take 25% of the savings they find.
              </p>
              <a
                href={partners.repriced.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700 dark:text-sky-300 hover:text-sky-800 dark:hover:text-sky-200 transition-colors pt-1"
              >
                Try Repriced
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 5. EXCHANGE RATES + NEWS                                            */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white dark:bg-[#0C1222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* ── Exchange Rates ── */}
            <div className="bg-white dark:bg-slate-800/50 rounded-xl overflow-hidden shadow-sm">
              <div className="px-6 py-5 border-b border-stone-100 dark:border-slate-700 flex items-center justify-between">
                <div>
                  <h2 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                    USD Exchange Rates
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-stone-400 mt-0.5">
                    Indicative mid-market rates · Updated daily
                  </p>
                </div>
                <span className="text-xs font-medium bg-stone-100 dark:bg-slate-700 text-slate-600 dark:text-stone-300 px-2.5 py-1 rounded-full">
                  Example data
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-stone-50 dark:bg-slate-900/50">
                      <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 dark:text-stone-400 uppercase tracking-wider">
                        Currency
                      </th>
                      <th className="text-right px-4 py-3 text-xs font-semibold text-slate-500 dark:text-stone-400 uppercase tracking-wider">
                        Rate
                      </th>
                      <th className="text-right px-6 py-3 text-xs font-semibold text-slate-500 dark:text-stone-400 uppercase tracking-wider">
                        24h
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 dark:divide-slate-700">
                    {exchangeRates.map((rate) => {
                      const isPositive = rate.change24h > 0;
                      const isNeutral  = rate.change24h === 0;
                      return (
                        <tr
                          key={rate.code}
                          className="hover:bg-stone-50 dark:hover:bg-slate-700/30 transition-colors"
                        >
                          <td className="px-6 py-3.5">
                            <div className="flex items-center gap-3">
                              <span className="text-xl leading-none">{rate.flag}</span>
                              <div>
                                <p className="font-semibold text-slate-900 dark:text-white">
                                  {rate.code}
                                </p>
                                <p className="text-xs text-slate-500 dark:text-stone-400">
                                  {rate.currency}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3.5 text-right">
                            <span className="font-mono font-semibold text-slate-900 dark:text-stone-100">
                              {rate.rate.toLocaleString('en-US', {
                                minimumFractionDigits: rate.rate < 10 ? 4 : 2,
                                maximumFractionDigits: rate.rate < 10 ? 4 : 2,
                              })}
                            </span>
                          </td>
                          <td className="px-6 py-3.5 text-right">
                            <span
                              className={`inline-flex items-center gap-0.5 font-mono text-xs font-bold px-2 py-0.5 rounded-md ${
                                isNeutral
                                  ? 'text-slate-500 bg-stone-100 dark:bg-slate-700 dark:text-stone-400'
                                  : isPositive
                                  ? 'text-red-600 bg-red-50 dark:bg-red-900/30 dark:text-red-400'
                                  : 'text-green-600 bg-green-50 dark:bg-green-900/30 dark:text-green-400'
                              }`}
                            >
                              {isPositive ? '▲' : isNeutral ? '—' : '▼'}{' '}
                              {Math.abs(rate.change24h).toFixed(2)}%
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="px-6 py-3 border-t border-stone-100 dark:border-slate-700 bg-stone-50 dark:bg-slate-900/30">
                <p className="text-xs text-slate-400 dark:text-slate-600">
                  1 USD = displayed amount · Green = USD stronger · Red = USD weaker
                </p>
              </div>
            </div>

            {/* ── Expat News ── */}
            <div className="bg-white dark:bg-slate-800/50 rounded-xl overflow-hidden shadow-sm">
              <div className="px-6 py-5 border-b border-stone-100 dark:border-slate-700 flex items-center justify-between">
                <div>
                  <h2 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                    Expat News
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-stone-400 mt-0.5">
                    Visa changes, tax updates & destination news
                  </p>
                </div>
                <Link
                  to="/news"
                  className="text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline"
                >
                  View all →
                </Link>
              </div>

              <ul className="divide-y divide-stone-100 dark:divide-slate-700">
                {newsItems.slice(0, 5).map((item) => {
                  const badgeClass =
                    categoryColours[item.category] ??
                    'bg-stone-100 text-slate-700 dark:bg-slate-700 dark:text-stone-300';
                  return (
                    <li key={item.id} className="px-6 py-4 hover:bg-stone-50 dark:hover:bg-slate-700/30 transition-colors">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${badgeClass}`}>
                          {item.category}
                        </span>
                        {item.country && (
                          <span className="text-xs text-slate-400 dark:text-slate-500">
                            {item.country}
                          </span>
                        )}
                        <span className="ml-auto text-xs text-slate-400 dark:text-slate-500 flex-shrink-0">
                          {formatDate(item.date)}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white leading-snug mb-1 line-clamp-2">
                        {item.title}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-stone-400 line-clamp-2 leading-relaxed">
                        {item.summary}
                      </p>
                    </li>
                  );
                })}
              </ul>

              <div className="px-6 py-4 border-t border-stone-100 dark:border-slate-700">
                <Link
                  to="/news"
                  className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-800 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors"
                >
                  Read All News
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 6. TESTIMONIALS                                                     */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#FFFBEB] dark:bg-[#0C1222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Stories from the Community
            </h2>
            <p className="text-lg text-slate-500 dark:text-stone-400">
              Real members. Real moves. Real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white dark:bg-slate-800/50 rounded-xl p-8 hover:shadow-md transition-shadow duration-200 shadow-sm"
              >
                {/* Quote mark */}
                <div className="text-4xl font-serif text-teal-200 dark:text-teal-800 leading-none mb-4">"</div>

                {/* Quote */}
                <blockquote className="text-base text-slate-700 dark:text-stone-300 leading-relaxed mb-6">
                  {t.quote}
                </blockquote>

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < t.rating
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-stone-200 dark:text-slate-700'
                      }`}
                    />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white text-sm">
                      {t.name}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-stone-400">
                      {t.role}
                    </p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-xs text-slate-400 dark:text-slate-500">{t.from}</span>
                      <span className="text-xs text-stone-300 dark:text-slate-600">→</span>
                      <span className="text-xs font-medium text-teal-600 dark:text-teal-400">{t.to}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-slate-400 dark:text-slate-600">
            * Example stories for illustration purposes
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 7. PRICING                                                          */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white dark:bg-[#0C1222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Simple, Honest Pricing
            </h2>
            <p className="text-lg text-slate-500 dark:text-stone-400">
              Start free. Upgrade when you're ready to go deep.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">

            {/* FREE */}
            <div className="bg-white dark:bg-slate-800/50 rounded-xl p-8 flex flex-col shadow-sm">
              <div className="mb-6">
                <p className="text-sm font-semibold text-slate-500 dark:text-stone-400 uppercase tracking-wider mb-2">
                  Free
                </p>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-5xl font-black text-slate-900 dark:text-white">$0</span>
                  <span className="text-slate-500 dark:text-stone-400 mb-2">/month</span>
                </div>
                <p className="text-sm text-slate-500 dark:text-stone-400">
                  Everything you need to start your research.
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {[
                  'Basic country guides',
                  'Visa quiz (basic results)',
                  'Budget calculator (summary)',
                  'Community access',
                  'Email newsletter',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700 dark:text-stone-300">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                to="/signup"
                className="block text-center font-bold py-3 px-6 border-2 border-stone-200 dark:border-slate-600 rounded-xl text-slate-800 dark:text-stone-200 hover:border-teal-300 dark:hover:border-teal-600 hover:bg-stone-50 dark:hover:bg-slate-700 transition-all"
              >
                Get Started Free
              </Link>
            </div>

            {/* PLUS */}
            <div className="relative bg-white dark:bg-slate-800/50 border-2 border-teal-600 dark:border-teal-500 rounded-xl p-8 flex flex-col shadow-xl shadow-teal-100 dark:shadow-teal-900/20">
              {/* Badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="bg-[#0F766E] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                  Most Popular
                </span>
              </div>

              <div className="mb-6">
                <p className="text-sm font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-2">
                  Plus
                </p>
                <div className="flex items-end gap-1 mb-0.5">
                  <span className="text-5xl font-black text-slate-900 dark:text-white">$8</span>
                  <span className="text-slate-500 dark:text-stone-400 mb-2">/month</span>
                </div>
                <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-1">
                  or $89/year — save 7%
                </p>
                <p className="text-sm text-slate-500 dark:text-stone-400">
                  Full platform access for serious movers.
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {[
                  'Full country guides (all 52)',
                  'Detailed visa eligibility results',
                  'Complete budget breakdowns',
                  'Downloadable checklists & templates',
                  'Priority support',
                  'Agent matching & consultations',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700 dark:text-stone-300">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                to="/signup?plan=plus"
                className="block text-center font-bold py-3 px-6 bg-[#0F766E] hover:bg-[#0D9488] text-white rounded-xl transition-colors shadow-md hover:shadow-lg"
              >
                Start Plus — $8/mo
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 8. FEATURED COUNTRIES                                               */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#FFFBEB] dark:bg-[#0C1222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                Popular Destinations
              </h2>
              <p className="text-slate-500 dark:text-stone-400">
                The most-searched countries by Americans planning a move abroad.
              </p>
            </div>
            <Link
              to="/countries"
              className="hidden md:flex items-center gap-1.5 text-sm font-semibold text-teal-600 dark:text-teal-400 hover:underline"
            >
              See all 52 guides
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {featuredCountries.map((country) => {
              const gradient = countryGradients[country.slug] ?? 'from-slate-500 to-slate-700';
              const from = monthlyFrom[country.slug] ?? '$1,000';

              return (
                <div
                  key={country.slug}
                  className="bg-white dark:bg-slate-800/50 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group shadow-sm"
                >
                  {/* Gradient header */}
                  <div className={`bg-gradient-to-br ${gradient} p-6 flex items-center justify-between`}>
                    <span className="text-5xl">{country.flag}</span>
                    <span className="text-xs font-bold text-white/90 bg-black/20 px-2.5 py-1 rounded-full">
                      from {from}/mo
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-slate-900 dark:text-white text-base mb-3">
                      {country.name}
                    </h3>

                    {/* Key stats */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-500 dark:text-stone-400">Safety</span>
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div
                              key={i}
                              className={`w-2.5 h-2.5 rounded-sm ${
                                i < country.safetyRating
                                  ? 'bg-green-500'
                                  : 'bg-stone-200 dark:bg-slate-700'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-500 dark:text-stone-400">Internet</span>
                        <span className="font-semibold text-slate-700 dark:text-stone-300">
                          {country.internetSpeed} Mbps
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-500 dark:text-stone-400">Healthcare</span>
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div
                              key={i}
                              className={`w-2.5 h-2.5 rounded-sm ${
                                i < country.healthcareRating
                                  ? 'bg-teal-500'
                                  : 'bg-stone-200 dark:bg-slate-700'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <Link
                      to={`/countries/${country.slug}`}
                      className="flex items-center justify-center gap-1.5 w-full py-2.5 text-xs font-bold text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-800 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors group-hover:border-teal-400 dark:group-hover:border-teal-600"
                    >
                      Explore Guide
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              to="/countries"
              className="inline-flex items-center gap-2 font-semibold text-teal-600 dark:text-teal-400 hover:underline"
            >
              See all 52 country guides
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 9. FINAL CTA                                                        */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-[#0F766E] to-emerald-800 overflow-hidden">
        {/* Background decoration */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-emerald-800/40 blur-2xl" />
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight italic">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            Join 15,000+ Americans who have used TotallyNomad to research, plan, and
            successfully move abroad. Your new life is one decision away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center gap-2 bg-white text-teal-700 font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-teal-50 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
            >
              Start Free Today
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/countries"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/70 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-200"
            >
              Browse Countries
              <Globe className="w-5 h-5" />
            </Link>
          </div>

          <p className="mt-8 text-teal-200 text-sm">
            No credit card required · Free forever plan available · Cancel anytime
          </p>
        </div>
      </section>

    </div>
  );
}
