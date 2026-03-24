import { Link } from 'react-router-dom'
import { Globe, Wifi, DollarSign, ArrowRight } from 'lucide-react'
import { countries } from '../lib/data/countries'

const descriptions: Record<string, string> = {
  portugal: 'Golden beaches, vibrant cities, and one of Europe\'s most welcoming expat communities.',
  mexico: 'Rich culture, incredible food, and an unbeatable cost of living just south of the border.',
  spain: 'World-class cuisine, stunning architecture, and a lifestyle built around enjoying life.',
  thailand: 'Tropical paradise with legendary street food, low costs, and a thriving digital nomad scene.',
  'costa-rica': 'Lush rainforests, pura vida lifestyle, and a stable democracy with excellent healthcare.',
}

const monthlyCosts: Record<string, string> = {
  portugal: '$1,800–$2,500',
  mexico: '$1,200–$1,800',
  spain: '$2,000–$2,800',
  thailand: '$1,000–$1,600',
  'costa-rica': '$1,600–$2,200',
}

function getDifficulty(slug: string): { label: string; color: string; darkColor: string } {
  const country = countries.find(c => c.slug === slug)
  if (!country) return { label: 'Medium', color: 'bg-amber-100 text-amber-800', darkColor: 'dark:bg-amber-900/40 dark:text-amber-300' }
  const first = country.visaTypes[0]?.difficulty ?? 'Medium'
  switch (first) {
    case 'Easy':
      return { label: 'Easy', color: 'bg-emerald-100 text-emerald-800', darkColor: 'dark:bg-emerald-900/40 dark:text-emerald-300' }
    case 'Hard':
      return { label: 'Hard', color: 'bg-red-100 text-red-800', darkColor: 'dark:bg-red-900/40 dark:text-red-300' }
    default:
      return { label: 'Medium', color: 'bg-amber-100 text-amber-800', darkColor: 'dark:bg-amber-900/40 dark:text-amber-300' }
  }
}

function getInternetLabel(speed: number): string {
  if (speed >= 150) return '🚀 Excellent'
  if (speed >= 100) return '⚡ Fast'
  if (speed >= 50) return '✓ Good'
  return '~ Moderate'
}

export default function CountriesPage() {
  return (
    <div className="min-h-screen bg-[#FFFBEB] dark:bg-[#0C1222]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F766E] to-emerald-800 py-20 px-4 text-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-amber-300/20 blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto">
          <Globe className="w-12 h-12 text-white/80 mx-auto mb-4" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Explore Our Country Guides
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            In-depth relocation guides for Americans moving abroad
          </p>
        </div>
      </section>

      {/* Country Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country) => {
            const difficulty = getDifficulty(country.slug)
            return (
              <Link
                key={country.slug}
                to={`/countries/${country.slug}`}
                className="group bg-white dark:bg-white/5 rounded-xl shadow-sm hover:shadow-lg border border-gray-100 dark:border-white/10 transition-all duration-200 hover:-translate-y-1 overflow-hidden flex flex-col"
              >
                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Flag & Name */}
                  <div className="text-5xl mb-3">{country.flag}</div>
                  <h2 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {country.name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-5 leading-relaxed">
                    {descriptions[country.slug]}
                  </p>

                  {/* Stats */}
                  <div className="space-y-3 mb-5 mt-auto">
                    <div className="flex items-center gap-2 text-sm">
                      <DollarSign className="w-4 h-4 text-[#0F766E] dark:text-teal-400 shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Avg. monthly: <span className="font-semibold">{monthlyCosts[country.slug]}</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="shrink-0 w-4 h-4 flex items-center justify-center">📋</span>
                      <span className="text-gray-700 dark:text-gray-300">Visa difficulty:</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${difficulty.color} ${difficulty.darkColor}`}>
                        {difficulty.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Wifi className="w-4 h-4 text-[#0F766E] dark:text-teal-400 shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Internet: <span className="font-semibold">{getInternetLabel(country.internetSpeed)}</span>
                        <span className="text-gray-400 dark:text-gray-500 ml-1">({country.internetSpeed} Mbps)</span>
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-1 text-[#0F766E] dark:text-teal-400 font-semibold text-sm group-hover:gap-2 transition-all duration-200">
                    View Guide <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Coming Soon */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <div className="text-center bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200/60 dark:border-amber-700/30 rounded-xl py-10 px-6">
          <p className="text-2xl mb-2">🌍</p>
          <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-2">
            More countries coming soon
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Germany, Colombia, Indonesia, and more — we're working on it.
          </p>
        </div>
      </section>
    </div>
  )
}
