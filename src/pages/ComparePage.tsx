import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ChevronDown,
  X,
  Shield,
  Wifi,
  Heart,
  Globe,
  DollarSign,
  Plane,
  Clock,
  MessageSquare,
  Users,
  CheckCircle2,
  XCircle,
  ArrowRight,
  BarChart3,
} from 'lucide-react'
import { comparisonData, type ComparisonData } from '../lib/data/countryComparison'

const DIFFICULTY_COLORS: Record<string, string> = {
  Easy: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
  Medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
  Hard: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
}

function RatingBar({ value, max = 10, color = 'bg-primary-500' }: { value: number; max?: number; color?: string }) {
  const pct = Math.round((value / max) * 100)
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-2 rounded-full bg-stone-200 dark:bg-slate-700 overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-sm font-bold text-slate-900 dark:text-white w-7 text-right">{value}</span>
    </div>
  )
}

function SafetyColor(rating: number): string {
  if (rating >= 8) return 'bg-green-500'
  if (rating >= 6) return 'bg-yellow-500'
  return 'bg-red-500'
}

export default function ComparePage() {
  const [selected, setSelected] = useState<string[]>([])
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const available = comparisonData.filter((c) => !selected.includes(c.slug))
  const selectedCountries = selected
    .map((slug) => comparisonData.find((c) => c.slug === slug))
    .filter(Boolean) as ComparisonData[]

  const addCountry = (slug: string) => {
    if (selected.length < 3 && !selected.includes(slug)) {
      setSelected([...selected, slug])
    }
    setDropdownOpen(false)
  }

  const removeCountry = (slug: string) => {
    setSelected(selected.filter((s) => s !== slug))
  }

  const canCompare = selected.length >= 2

  return (
    <div className="min-h-screen bg-[#FFFBEB] dark:bg-[#0C1222] transition-colors duration-200">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0F766E] to-emerald-800 py-16 md:py-20 px-4 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-white/90 text-xs font-medium mb-6">
            <BarChart3 className="w-3.5 h-3.5" />
            Side-by-Side Comparison Tool
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif mb-4">
            Compare Countries
          </h1>
          <p className="text-lg text-white/80 max-w-xl mx-auto">
            Select 2-3 countries to compare costs, visas, safety, internet, healthcare, and more.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Country selector */}
        <div className="bg-white dark:bg-slate-800/50 rounded-2xl border border-stone-200 dark:border-slate-700 p-6 mb-10 shadow-sm">
          <p className="text-sm font-semibold text-slate-700 dark:text-stone-300 mb-4">
            Select countries to compare (2-3):
          </p>

          <div className="flex flex-wrap items-center gap-3">
            {/* Selected pills */}
            {selectedCountries.map((c) => (
              <span
                key={c.slug}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 font-medium text-sm"
              >
                <span className="text-lg">{c.flag}</span>
                {c.name}
                <button
                  onClick={() => removeCountry(c.slug)}
                  className="ml-1 hover:text-red-500 transition-colors"
                  aria-label={`Remove ${c.name}`}
                >
                  <X className="w-4 h-4" />
                </button>
              </span>
            ))}

            {/* Dropdown to add */}
            {selected.length < 3 && (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-dashed border-stone-300 dark:border-slate-600 text-slate-600 dark:text-stone-400 hover:border-primary-400 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium transition-colors"
                >
                  + Add Country
                  <ChevronDown className="w-4 h-4" />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full mt-2 left-0 z-20 w-56 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-stone-200 dark:border-slate-700 py-1 overflow-hidden">
                    {available.map((c) => (
                      <button
                        key={c.slug}
                        onClick={() => addCountry(c.slug)}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-slate-700 transition-colors"
                      >
                        <span className="text-xl">{c.flag}</span>
                        {c.name}
                      </button>
                    ))}
                    {available.length === 0 && (
                      <p className="px-4 py-2 text-xs text-slate-400">All countries selected</p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {!canCompare && (
            <p className="mt-3 text-xs text-slate-400 dark:text-slate-500">
              Select at least 2 countries to start comparing.
            </p>
          )}
        </div>

        {/* Comparison results */}
        {canCompare && (
          <div className="space-y-10" id="comparison-results">
            {/* ── Monthly Cost of Living ── */}
            <section className="bg-white dark:bg-slate-800/50 rounded-2xl border border-stone-200 dark:border-slate-700 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-stone-100 dark:border-slate-700 flex items-center gap-3">
                <DollarSign className="w-5 h-5 text-emerald-500" />
                <h2 className="text-lg font-bold font-serif text-slate-900 dark:text-white">Monthly Cost of Living (USD)</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-stone-50 dark:bg-slate-900/50">
                      <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 dark:text-stone-400 uppercase">Household</th>
                      {selectedCountries.map((c) => (
                        <th key={c.slug} className="text-center px-4 py-3 text-xs font-semibold text-slate-500 dark:text-stone-400 uppercase">
                          {c.flag} {c.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 dark:divide-slate-700">
                    {(['single', 'couple', 'family'] as const).map((type) => (
                      <tr key={type} className="hover:bg-stone-50 dark:hover:bg-slate-700/30 transition-colors">
                        <td className="px-6 py-3.5 font-medium text-slate-700 dark:text-stone-300 capitalize">{type === 'single' ? 'Single person' : type === 'couple' ? 'Couple' : 'Family (2 adults + child)'}</td>
                        {selectedCountries.map((c) => {
                          const costs = selectedCountries.map((cc) => cc.monthlyCost[type])
                          const min = Math.min(...costs)
                          const isLowest = c.monthlyCost[type] === min
                          return (
                            <td key={c.slug} className="text-center px-4 py-3.5">
                              <span className={`font-mono font-bold text-base ${isLowest ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-900 dark:text-white'}`}>
                                ${c.monthlyCost[type].toLocaleString()}
                              </span>
                              {isLowest && <span className="block text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-0.5">Lowest</span>}
                            </td>
                          )
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── Visa Options ── */}
            <section className="bg-white dark:bg-slate-800/50 rounded-2xl border border-stone-200 dark:border-slate-700 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-stone-100 dark:border-slate-700 flex items-center gap-3">
                <Globe className="w-5 h-5 text-primary-500" />
                <h2 className="text-lg font-bold font-serif text-slate-900 dark:text-white">Visa Options</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-100 dark:divide-slate-700">
                {selectedCountries.map((c) => (
                  <div key={c.slug} className="p-6">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <span className="text-xl">{c.flag}</span> {c.name}
                    </h3>
                    <div className="space-y-3">
                      {c.visaSummary.map((visa) => (
                        <div key={visa.type} className="rounded-lg bg-stone-50 dark:bg-slate-900/50 p-3 border border-stone-100 dark:border-slate-700">
                          <div className="flex items-start justify-between gap-2 mb-1.5">
                            <p className="text-sm font-semibold text-slate-800 dark:text-stone-200">{visa.type}</p>
                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium shrink-0 ${DIFFICULTY_COLORS[visa.difficulty]}`}>
                              {visa.difficulty}
                            </span>
                          </div>
                          <div className="space-y-1 text-xs text-slate-600 dark:text-stone-400">
                            <p><span className="font-medium text-slate-700 dark:text-stone-300">Income:</span> {visa.incomeRequirement}</p>
                            <p><span className="font-medium text-slate-700 dark:text-stone-300">Duration:</span> {visa.duration}</p>
                            <p><span className="font-medium text-slate-700 dark:text-stone-300">Residency:</span> {visa.pathToResidency}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Ratings Grid ── */}
            <section className="bg-white dark:bg-slate-800/50 rounded-2xl border border-stone-200 dark:border-slate-700 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-stone-100 dark:border-slate-700 flex items-center gap-3">
                <BarChart3 className="w-5 h-5 text-violet-500" />
                <h2 className="text-lg font-bold font-serif text-slate-900 dark:text-white">Ratings Comparison</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-stone-50 dark:bg-slate-900/50">
                      <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 dark:text-stone-400 uppercase w-1/3">Category</th>
                      {selectedCountries.map((c) => (
                        <th key={c.slug} className="px-4 py-3 text-xs font-semibold text-slate-500 dark:text-stone-400 uppercase">
                          {c.flag} {c.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 dark:divide-slate-700">
                    {[
                      { label: 'Safety', icon: Shield, key: 'safetyRating' as const, colorFn: SafetyColor },
                      { label: 'Internet Speed (Mbps)', icon: Wifi, key: 'internetSpeed' as const, colorFn: () => 'bg-blue-500' },
                      { label: 'English Friendliness', icon: MessageSquare, key: 'englishFriendliness' as const, colorFn: () => 'bg-amber-500' },
                      { label: 'Healthcare Quality', icon: Heart, key: 'healthcareQuality' as const, colorFn: () => 'bg-red-500' },
                    ].map(({ label, icon: Icon, key, colorFn }) => (
                      <tr key={key} className="hover:bg-stone-50 dark:hover:bg-slate-700/30 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <Icon className="w-4 h-4 text-slate-400" />
                            <span className="font-medium text-slate-700 dark:text-stone-300">{label}</span>
                          </div>
                        </td>
                        {selectedCountries.map((c) => {
                          const value = c[key]
                          const max = key === 'internetSpeed' ? 300 : 10
                          return (
                            <td key={c.slug} className="px-4 py-4 min-w-[160px]">
                              <RatingBar value={value} max={max} color={colorFn(value)} />
                            </td>
                          )
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── Climate & Timezone ── */}
            <section className="bg-white dark:bg-slate-800/50 rounded-2xl border border-stone-200 dark:border-slate-700 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-stone-100 dark:border-slate-700 flex items-center gap-3">
                <Clock className="w-5 h-5 text-sky-500" />
                <h2 className="text-lg font-bold font-serif text-slate-900 dark:text-white">Climate & Time Zone</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-stone-50 dark:bg-slate-900/50">
                      <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 dark:text-stone-400 uppercase">Detail</th>
                      {selectedCountries.map((c) => (
                        <th key={c.slug} className="text-center px-4 py-3 text-xs font-semibold text-slate-500 dark:text-stone-400 uppercase">
                          {c.flag} {c.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 dark:divide-slate-700">
                    <tr>
                      <td className="px-6 py-3.5 font-medium text-slate-700 dark:text-stone-300">Climate</td>
                      {selectedCountries.map((c) => (
                        <td key={c.slug} className="text-center px-4 py-3.5 text-slate-600 dark:text-stone-400">{c.climateSummary}</td>
                      ))}
                    </tr>
                    <tr className="bg-stone-50/50 dark:bg-slate-800/60">
                      <td className="px-6 py-3.5 font-medium text-slate-700 dark:text-stone-300">Time Zone vs ET</td>
                      {selectedCountries.map((c) => (
                        <td key={c.slug} className="text-center px-4 py-3.5 font-mono font-semibold text-slate-900 dark:text-white">{c.timezoneVsET}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── Direct Flights ── */}
            <section className="bg-white dark:bg-slate-800/50 rounded-2xl border border-stone-200 dark:border-slate-700 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-stone-100 dark:border-slate-700 flex items-center gap-3">
                <Plane className="w-5 h-5 text-sky-500" />
                <h2 className="text-lg font-bold font-serif text-slate-900 dark:text-white">Direct Flights from Major US Cities</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-stone-50 dark:bg-slate-900/50">
                      <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 dark:text-stone-400 uppercase">Airport</th>
                      {selectedCountries.map((c) => (
                        <th key={c.slug} className="text-center px-4 py-3 text-xs font-semibold text-slate-500 dark:text-stone-400 uppercase">
                          {c.flag} {c.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 dark:divide-slate-700">
                    {(['fromJFK', 'fromLAX', 'fromMIA', 'fromORD'] as const).map((airport) => (
                      <tr key={airport} className="hover:bg-stone-50 dark:hover:bg-slate-700/30 transition-colors">
                        <td className="px-6 py-3.5 font-medium text-slate-700 dark:text-stone-300">
                          {airport === 'fromJFK' ? 'New York (JFK)' : airport === 'fromLAX' ? 'Los Angeles (LAX)' : airport === 'fromMIA' ? 'Miami (MIA)' : 'Chicago (ORD)'}
                        </td>
                        {selectedCountries.map((c) => (
                          <td key={c.slug} className="text-center px-4 py-3.5">
                            {c.directFlights[airport] ? (
                              <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <XCircle className="w-5 h-5 text-slate-300 dark:text-slate-600 mx-auto" />
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── Pros & Cons ── */}
            <section className="bg-white dark:bg-slate-800/50 rounded-2xl border border-stone-200 dark:border-slate-700 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-stone-100 dark:border-slate-700 flex items-center gap-3">
                <Users className="w-5 h-5 text-violet-500" />
                <h2 className="text-lg font-bold font-serif text-slate-900 dark:text-white">Pros & Cons</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-100 dark:divide-slate-700">
                {selectedCountries.map((c) => (
                  <div key={c.slug} className="p-6">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <span className="text-xl">{c.flag}</span> {c.name}
                    </h3>

                    <div className="mb-4">
                      <p className="text-xs font-semibold text-green-600 dark:text-green-400 uppercase tracking-wide mb-2">Pros</p>
                      <ul className="space-y-1.5">
                        {c.pros.map((pro) => (
                          <li key={pro} className="flex items-start gap-2 text-sm text-slate-700 dark:text-stone-300">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase tracking-wide mb-2">Cons</p>
                      <ul className="space-y-1.5">
                        {c.cons.map((con) => (
                          <li key={con} className="flex items-start gap-2 text-sm text-slate-700 dark:text-stone-300">
                            <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      to={`/countries/${c.slug}`}
                      className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      View Full Guide <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Screenshot-friendly summary card ── */}
            <section className="bg-gradient-to-br from-[#0F766E] to-emerald-800 rounded-2xl p-8 text-white shadow-lg" id="summary-card">
              <h2 className="text-2xl font-bold font-serif mb-6 text-center">Country Comparison Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedCountries.map((c) => (
                  <div key={c.slug} className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                    <div className="text-center mb-4">
                      <span className="text-4xl">{c.flag}</span>
                      <h3 className="text-xl font-bold mt-2">{c.name}</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-white/70">Monthly Cost (single)</span>
                        <span className="font-bold">${c.monthlyCost.single.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70">Safety</span>
                        <span className="font-bold">{c.safetyRating}/10</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70">Internet</span>
                        <span className="font-bold">{c.internetSpeed} Mbps</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70">English</span>
                        <span className="font-bold">{c.englishFriendliness}/10</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70">Healthcare</span>
                        <span className="font-bold">{c.healthcareQuality}/10</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70">Time vs ET</span>
                        <span className="font-bold">{c.timezoneVsET}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-white/60 text-xs mt-6">totallynomad.com — Your complete American expat platform</p>
            </section>

            {/* CTA */}
            <div className="text-center py-8">
              <p className="text-slate-500 dark:text-stone-400 mb-4">Ready to dive deeper?</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/tools"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0F766E] hover:bg-[#0D9488] text-white font-bold text-sm transition-colors shadow-md"
                >
                  Take the Visa Quiz
                </Link>
                <Link
                  to="/countries"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-stone-300 dark:border-slate-600 text-slate-700 dark:text-stone-300 font-bold text-sm hover:border-primary-400 dark:hover:border-primary-500 transition-colors"
                >
                  Browse Country Guides
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Empty state */}
        {!canCompare && (
          <div className="text-center py-20">
            <BarChart3 className="w-16 h-16 text-stone-300 dark:text-slate-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold font-serif text-slate-900 dark:text-white mb-2">
              Select countries above to compare
            </h2>
            <p className="text-slate-500 dark:text-stone-400 max-w-md mx-auto">
              Pick 2 or 3 countries from our top expat destinations to see a detailed side-by-side comparison of costs, visas, lifestyle factors, and more.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
