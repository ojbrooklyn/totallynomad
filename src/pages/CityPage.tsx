import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ChevronRight,
  MapPin,
  Users,
  DollarSign,
  Wifi,
  Shield,
  Heart,
  Thermometer,
  Train,
  Lightbulb,
  Building2,
  Home,
  MessageCircle,
  ArrowRight,
} from 'lucide-react'
import { cities } from '../lib/data/cities'

const COUNTRY_GRADIENTS: Record<string, string> = {
  portugal: 'from-[#0F766E] to-emerald-800',
  mexico: 'from-green-600 to-emerald-700',
  spain: 'from-orange-500 to-red-600',
  thailand: 'from-amber-600 to-orange-600',
  'costa-rica': 'from-emerald-500 to-teal-600',
}

function RatingDots({ rating, max = 10 }: { rating: number; max?: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <div
          key={i}
          className={`w-2.5 h-2.5 rounded-full ${
            i < rating
              ? rating >= 8
                ? 'bg-green-500'
                : rating >= 5
                ? 'bg-yellow-500'
                : 'bg-red-500'
              : 'bg-stone-200 dark:bg-slate-700'
          }`}
        />
      ))}
      <span className="ml-1.5 text-sm font-bold text-slate-900 dark:text-white">{rating}/{max}</span>
    </div>
  )
}

export default function CityPage() {
  const { slug } = useParams<{ slug: string }>()
  const city = cities.find((c) => c.slug === slug)

  if (!city) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 bg-[#FFFBEB] dark:bg-[#0C1222] text-center">
        <p className="text-7xl">🏙️</p>
        <h1 className="text-4xl font-bold font-serif text-gray-900 dark:text-stone-100">City not found</h1>
        <p className="text-gray-500 dark:text-stone-400 max-w-md">
          We couldn't find a city guide for <strong>"{slug}"</strong>.
        </p>
        <Link
          to="/cities"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Cities
        </Link>
      </div>
    )
  }

  const gradient = COUNTRY_GRADIENTS[city.countrySlug] ?? 'from-primary-600 to-primary-800'

  return (
    <div className="min-h-screen bg-[#FFFBEB] dark:bg-[#0C1222] text-gray-900 dark:text-stone-100">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 pt-5 pb-1">
        <nav className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-stone-400">
          <Link to="/" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/cities" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Cities</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-800 dark:text-gray-200 font-medium">{city.name}</span>
        </nav>
        <Link
          to="/cities"
          className="inline-flex items-center gap-1.5 mt-3 text-sm text-primary-600 dark:text-primary-400 hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Cities
        </Link>
      </div>

      {/* Hero */}
      <section className={`bg-gradient-to-br ${gradient} mt-4 text-white`}>
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-20">
          <div className="flex flex-col items-center text-center mb-10">
            <span className="text-7xl md:text-8xl drop-shadow-lg mb-4">{city.flag}</span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow">{city.name}</h1>
            <p className="mt-2 text-white/80 text-lg">{city.country}</p>
          </div>

          <p className="text-center text-white/90 text-lg max-w-2xl mx-auto mb-8">
            {city.heroDescription}
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: Users, label: 'Population', value: city.population },
              { icon: MapPin, label: 'Expat Community', value: city.expatCommunitySize },
              { icon: Wifi, label: 'Internet', value: `${city.internet.avgSpeed} Mbps` },
              { icon: Shield, label: 'Safety', value: `${city.safety.overallRating}/10` },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-white/70 text-xs font-medium uppercase tracking-wide">
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </div>
                <span className="text-white font-semibold text-sm">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">

        {/* ── Cost of Living ── */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold font-serif">Cost of Living</h2>
          </div>

          <div className="bg-white dark:bg-slate-900/80 rounded-2xl border border-stone-200 dark:border-slate-800 shadow-sm p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[
                { label: 'Studio', value: city.costBreakdown.studioRent },
                { label: '1BR Apartment', value: city.costBreakdown.oneBRRent },
                { label: '2BR Apartment', value: city.costBreakdown.twoBRRent },
                { label: 'Groceries/mo', value: city.costBreakdown.groceries },
              ].map(({ label, value }) => (
                <div key={label} className="bg-stone-50 dark:bg-slate-800 rounded-xl p-4">
                  <p className="text-xs text-gray-500 dark:text-stone-400 uppercase font-medium tracking-wide mb-1">{label}</p>
                  <p className="text-sm font-bold text-gray-800 dark:text-gray-200">{value}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Dining Out', value: city.costBreakdown.diningOut },
                { label: 'Transport', value: city.costBreakdown.transport },
                { label: 'Utilities', value: city.costBreakdown.utilities },
                { label: 'Internet', value: city.costBreakdown.internet },
              ].map(({ label, value }) => (
                <div key={label} className="bg-stone-50 dark:bg-slate-800 rounded-xl p-3">
                  <p className="text-xs text-gray-500 dark:text-stone-400 uppercase font-medium tracking-wide mb-1">{label}</p>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Neighborhoods ── */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center">
              <Home className="w-5 h-5 text-violet-600 dark:text-violet-400" />
            </div>
            <h2 className="text-2xl font-bold font-serif">Best Neighborhoods for Expats</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {city.neighborhoods.map((n) => (
              <div
                key={n.name}
                className="bg-white dark:bg-slate-900/80 rounded-2xl border border-stone-200 dark:border-slate-800 shadow-sm p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-stone-100 mb-1">{n.name}</h3>
                <p className="text-sm text-slate-500 dark:text-stone-400 mb-3">{n.vibe}</p>

                <div className="bg-stone-50 dark:bg-slate-800 rounded-lg px-3 py-2 mb-3">
                  <span className="text-xs text-gray-500 dark:text-stone-400">Avg rent: </span>
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{n.avgRentRange}</span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <p className="text-xs font-semibold text-green-600 dark:text-green-400 mb-1">Pros</p>
                    <ul className="space-y-1">
                      {n.pros.map((pro) => (
                        <li key={pro} className="text-xs text-slate-600 dark:text-stone-400 flex items-start gap-1.5">
                          <span className="text-green-500 mt-0.5">+</span> {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-red-600 dark:text-red-400 mb-1">Cons</p>
                    <ul className="space-y-1">
                      {n.cons.map((con) => (
                        <li key={con} className="text-xs text-slate-600 dark:text-stone-400 flex items-start gap-1.5">
                          <span className="text-red-500 mt-0.5">−</span> {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 text-xs font-medium">
                  Best for: {n.bestFor}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Coworking Spaces ── */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <h2 className="text-2xl font-bold font-serif">Coworking Spaces</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {city.coworkingSpaces.map((space) => (
              <div
                key={space.name}
                className="bg-white dark:bg-slate-900/80 rounded-2xl border border-stone-200 dark:border-slate-800 shadow-sm p-5"
              >
                <h3 className="font-bold text-gray-900 dark:text-stone-100 mb-1">{space.name}</h3>
                <p className="text-xs text-slate-500 dark:text-stone-400 mb-2">{space.vibe}</p>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-xs font-medium">
                  {space.priceRange}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Healthcare ── */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
              <Heart className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <h2 className="text-2xl font-bold font-serif">Healthcare</h2>
          </div>

          <div className="bg-white dark:bg-slate-900/80 rounded-2xl border border-stone-200 dark:border-slate-800 shadow-sm p-6">
            <p className="text-sm text-gray-700 dark:text-stone-300 mb-3">
              <span className="font-semibold">Nearest international hospital/clinic:</span>{' '}
              {city.healthcare.nearestInternationalHospital}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700 dark:text-stone-300">Quality rating:</span>
              <RatingDots rating={city.healthcare.qualityRating} />
            </div>
          </div>
        </section>

        {/* ── Internet ── */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <Wifi className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold font-serif">Internet</h2>
          </div>

          <div className="bg-white dark:bg-slate-900/80 rounded-2xl border border-stone-200 dark:border-slate-800 shadow-sm p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-500 dark:text-stone-400 uppercase font-medium mb-1">Average Speed</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">{city.internet.avgSpeed} <span className="text-sm font-normal text-slate-500">Mbps</span></p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-stone-400 uppercase font-medium mb-1">Reliability</p>
                <RatingDots rating={city.internet.reliabilityRating} />
              </div>
            </div>
          </div>
        </section>

        {/* ── Safety ── */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-2xl font-bold font-serif">Safety</h2>
          </div>

          <div className="bg-white dark:bg-slate-900/80 rounded-2xl border border-stone-200 dark:border-slate-800 shadow-sm p-6">
            <div className="mb-4">
              <span className="text-sm font-medium text-gray-700 dark:text-stone-300 mr-2">Overall rating:</span>
              <RatingDots rating={city.safety.overallRating} />
            </div>

            {city.safety.areasToAvoid.length > 0 && (
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Areas to be cautious:</p>
                <div className="flex flex-wrap gap-2">
                  {city.safety.areasToAvoid.map((area) => (
                    <span key={area} className="px-2.5 py-0.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 text-xs font-medium">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Safety tips:</p>
              <ul className="space-y-1.5">
                {city.safety.tips.map((tip) => (
                  <li key={tip} className="flex items-start gap-2 text-sm text-slate-600 dark:text-stone-400">
                    <Shield className="w-3.5 h-3.5 text-green-500 mt-0.5 shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Weather ── */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center">
              <Thermometer className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            </div>
            <h2 className="text-2xl font-bold font-serif">Weather</h2>
          </div>

          <div className="bg-white dark:bg-slate-900/80 rounded-2xl border border-stone-200 dark:border-slate-800 shadow-sm p-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
              {Object.entries(city.weather.avgTempsBySeasonF).map(([season, temp]) => (
                <div key={season} className="bg-stone-50 dark:bg-slate-800 rounded-xl p-3 text-center">
                  <p className="text-xs text-gray-500 dark:text-stone-400 uppercase font-medium mb-1 capitalize">{season}</p>
                  <p className="text-lg font-bold text-gray-800 dark:text-gray-200">{temp}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-600 dark:text-stone-400">
              <span className="font-semibold text-gray-800 dark:text-gray-200">Rainy season:</span> {city.weather.rainySeason}
            </p>
          </div>
        </section>

        {/* ── Getting Around ── */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
              <Train className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h2 className="text-2xl font-bold font-serif">Getting Around</h2>
          </div>

          <div className="bg-white dark:bg-slate-900/80 rounded-2xl border border-stone-200 dark:border-slate-800 shadow-sm p-6">
            <div className="space-y-3">
              {city.gettingAround.map((t) => (
                <div key={t.mode} className="flex items-center justify-between bg-stone-50 dark:bg-slate-800 rounded-lg px-4 py-3">
                  <span className="text-sm font-medium text-gray-700 dark:text-stone-300">{t.mode}</span>
                  <span className="text-sm text-slate-500 dark:text-stone-400">{t.cost}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Insider Tips ── */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <h2 className="text-2xl font-bold font-serif">Insider Tips</h2>
          </div>

          <div className="bg-white dark:bg-slate-900/80 rounded-2xl border border-stone-200 dark:border-slate-800 shadow-sm p-6">
            <ul className="space-y-3">
              {city.insiderTips.map((tip) => (
                <li key={tip} className="flex items-start gap-3 text-sm text-slate-700 dark:text-stone-300">
                  <Lightbulb className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Community CTA ── */}
        <section className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl p-8 text-white text-center">
          <MessageCircle className="w-10 h-10 mx-auto mb-4 text-white/80" />
          <h2 className="text-2xl font-bold font-serif mb-2">Ask the Community</h2>
          <p className="text-white/80 max-w-md mx-auto mb-6">
            Have questions about living in {city.name}? Connect with expats who are already there.
          </p>
          <a
            href="https://discord.gg/t2Y3Qw2C"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-indigo-700 font-bold text-sm hover:bg-gray-100 transition-colors shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            Join Our Discord
          </a>
        </section>

        {/* ── Country Guide CTA ── */}
        <section className={`bg-gradient-to-br ${gradient} rounded-2xl`}>
          <div className="max-w-4xl mx-auto px-6 py-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-extrabold font-serif mb-3">
              Get your relocation plan for {city.country}
            </h2>
            <p className="text-white/80 max-w-lg mx-auto mb-6">
              Full visa guides, cost breakdowns, healthcare info, and step-by-step relocation checklists.
            </p>
            <Link
              to={`/countries/${city.countrySlug}`}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-white text-gray-900 font-bold text-sm hover:bg-gray-100 transition-colors shadow-lg"
            >
              View {city.country} Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
