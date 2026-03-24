import { Link } from 'react-router-dom'
import { MapPin, Users, Wifi, DollarSign, ArrowRight } from 'lucide-react'
import { cities } from '../lib/data/cities'

const COUNTRY_COLORS: Record<string, string> = {
  portugal: 'from-[#0F766E] to-emerald-800',
  mexico: 'from-green-600 to-emerald-700',
  spain: 'from-orange-500 to-red-600',
  thailand: 'from-amber-600 to-orange-600',
  'costa-rica': 'from-emerald-500 to-teal-600',
}

export default function CitiesPage() {
  // Group cities by country
  const byCountry = cities.reduce<Record<string, typeof cities>>((acc, city) => {
    if (!acc[city.countrySlug]) acc[city.countrySlug] = []
    acc[city.countrySlug].push(city)
    return acc
  }, {})

  return (
    <div className="min-h-screen bg-[#FFFBEB] dark:bg-[#0C1222] transition-colors duration-200">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0F766E] to-emerald-800 py-16 md:py-20 px-4 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-white/90 text-xs font-medium mb-6">
            <MapPin className="w-3.5 h-3.5" />
            Expat City Guides
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif mb-4">
            City Guides
          </h1>
          <p className="text-lg text-white/80 max-w-xl mx-auto">
            Detailed neighborhood, cost, and lifestyle guides for the best expat cities in our top 5 countries.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        {Object.entries(byCountry).map(([countrySlug, countryCities]) => {
          const gradient = COUNTRY_COLORS[countrySlug] ?? 'from-primary-600 to-primary-800'
          const countryName = countryCities[0]?.country ?? countrySlug
          const flag = countryCities[0]?.flag ?? ''

          return (
            <section key={countrySlug}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{flag}</span>
                <div>
                  <h2 className="text-2xl font-bold font-serif text-slate-900 dark:text-white">{countryName}</h2>
                  <Link
                    to={`/countries/${countrySlug}`}
                    className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    View country guide →
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {countryCities.map((city) => (
                  <Link
                    key={city.slug}
                    to={`/cities/${city.slug}`}
                    className="group bg-white dark:bg-slate-800/50 rounded-2xl border border-stone-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
                  >
                    {/* Color band */}
                    <div className={`h-2 bg-gradient-to-r ${gradient}`} />

                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold font-serif text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                            {city.name}
                          </h3>
                          <p className="text-sm text-slate-500 dark:text-stone-400 mt-1 line-clamp-2">
                            {city.heroDescription}
                          </p>
                        </div>
                        <span className="text-3xl shrink-0 ml-3">{city.flag}</span>
                      </div>

                      {/* Stats row */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
                        <div className="flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-slate-400" />
                          <span className="text-xs text-slate-600 dark:text-stone-400">{city.population}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <DollarSign className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="text-xs text-slate-600 dark:text-stone-400">{city.costBreakdown.oneBRRent}/mo</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Wifi className="w-3.5 h-3.5 text-blue-500" />
                          <span className="text-xs text-slate-600 dark:text-stone-400">{city.internet.avgSpeed} Mbps</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-red-500" />
                          <span className="text-xs text-slate-600 dark:text-stone-400">{city.expatCommunitySize} expats</span>
                        </div>
                      </div>

                      {/* Neighborhoods preview */}
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {city.neighborhoods.slice(0, 3).map((n) => (
                          <span
                            key={n.name}
                            className="px-2 py-0.5 rounded-full bg-stone-100 dark:bg-slate-700 text-xs text-slate-600 dark:text-stone-400"
                          >
                            {n.name}
                          </span>
                        ))}
                        {city.neighborhoods.length > 3 && (
                          <span className="px-2 py-0.5 rounded-full bg-stone-100 dark:bg-slate-700 text-xs text-slate-600 dark:text-stone-400">
                            +{city.neighborhoods.length - 3} more
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1.5 mt-4 text-sm font-semibold text-primary-600 dark:text-primary-400 group-hover:underline">
                        Explore {city.name}
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
