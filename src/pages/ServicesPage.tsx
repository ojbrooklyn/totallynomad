import { useState } from 'react'
import {
  Scale,
  Calculator,
  MapPin,
  Truck,
  Heart,
  PawPrint,
  ExternalLink,
  Star,
  Filter,
} from 'lucide-react'
import { services, serviceCategories, type ServiceCategory } from '../lib/data/services'

const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  'Immigration Lawyers': Scale,
  'Tax Advisors': Calculator,
  'Relocation Services': MapPin,
  'International Moving': Truck,
  'Health Insurance': Heart,
  'Pet Relocation': PawPrint,
}

const PRICE_COLORS: Record<string, string> = {
  $: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
  $$: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
  $$$: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300',
}

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'all'>('all')

  const filtered =
    activeCategory === 'all'
      ? services
      : services.filter((s) => s.category === activeCategory)

  return (
    <div className="min-h-screen bg-[#FFFBEB] dark:bg-[#0C1222] transition-colors duration-200">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0F766E] to-emerald-800 py-16 md:py-20 px-4 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-white/90 text-xs font-medium mb-6">
            <Scale className="w-3.5 h-3.5" />
            Curated Service Directory
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif mb-4">
            Expat Services
          </h1>
          <p className="text-lg text-white/80 max-w-xl mx-auto">
            Vetted immigration lawyers, tax advisors, movers, health insurance, and more — everything you need for your move abroad.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === 'all'
                ? 'bg-[#0F766E] text-white'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-stone-400 border border-stone-200 dark:border-slate-700 hover:border-primary-400 dark:hover:border-primary-500'
            }`}
          >
            <Filter className="w-3.5 h-3.5 inline mr-1.5" />
            All Services
          </button>
          {serviceCategories.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.name]
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat.name
                    ? 'bg-[#0F766E] text-white'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-stone-400 border border-stone-200 dark:border-slate-700 hover:border-primary-400 dark:hover:border-primary-500'
                }`}
              >
                {Icon && <Icon className="w-3.5 h-3.5 inline mr-1.5" />}
                {cat.name}
              </button>
            )
          })}
        </div>

        {/* Category sections */}
        {activeCategory === 'all' ? (
          serviceCategories.map((cat) => {
            const catServices = services.filter((s) => s.category === cat.name)
            const Icon = CATEGORY_ICONS[cat.name]
            return (
              <section key={cat.name} className="mb-12">
                <div className="flex items-center gap-3 mb-2">
                  {Icon && (
                    <div className="w-9 h-9 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                  )}
                  <h2 className="text-xl font-bold font-serif text-slate-900 dark:text-white">{cat.name}</h2>
                </div>
                <p className="text-sm text-slate-500 dark:text-stone-400 mb-6 ml-12">{cat.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {catServices.map((service) => (
                    <ServiceCard key={service.name} service={service} />
                  ))}
                </div>
              </section>
            )
          })
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((service) => (
              <ServiceCard key={service.name} service={service} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  return (
    <div className="bg-white dark:bg-slate-800/50 rounded-2xl border border-stone-200 dark:border-slate-700 shadow-sm p-6 flex flex-col hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-white">{service.name}</h3>
        <span className={`px-2 py-0.5 rounded-full text-xs font-bold shrink-0 ${PRICE_COLORS[service.priceRange]}`}>
          {service.priceRange}
        </span>
      </div>

      <p className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed mb-4 flex-1">
        {service.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {service.countriesServed.slice(0, 3).map((country) => (
          <span key={country} className="px-2 py-0.5 rounded-full bg-stone-100 dark:bg-slate-700 text-xs text-slate-600 dark:text-stone-400">
            {country}
          </span>
        ))}
        {service.countriesServed.length > 3 && (
          <span className="px-2 py-0.5 rounded-full bg-stone-100 dark:bg-slate-700 text-xs text-slate-600 dark:text-stone-400">
            +{service.countriesServed.length - 3} more
          </span>
        )}
      </div>

      {/* Star rating placeholder */}
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-3.5 h-3.5 ${
              service.starRating && i < service.starRating
                ? 'text-amber-400 fill-amber-400'
                : 'text-stone-200 dark:text-slate-700'
            }`}
          />
        ))}
        {service.starRating ? (
          <span className="text-xs text-slate-500 dark:text-stone-400 ml-1">{service.starRating}/5</span>
        ) : (
          <span className="text-xs text-slate-400 dark:text-slate-600 ml-1">No reviews yet</span>
        )}
      </div>

      <a
        href={service.website}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-primary-200 dark:border-primary-800 text-primary-600 dark:text-primary-400 font-semibold text-sm hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
      >
        Visit Website
        <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </div>
  )
}
