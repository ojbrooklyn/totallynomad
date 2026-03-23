import { Link, useParams } from 'react-router-dom'
import {
  Users,
  MapPin,
  DollarSign,
  Globe,
  Clock,
  Shield,
  Wifi,
  Heart,
  CheckCircle2,
  XCircle,
  Check,
  ChevronRight,
  ArrowLeft,
  ShieldCheck,
  Thermometer,
  CalendarDays,
  Phone,
  Stethoscope,
  TrendingDown,
  Zap,
} from 'lucide-react'
import { countries } from '../lib/data/countries'
import PlusGate from '../components/PlusGate'

const COUNTRY_GRADIENTS: Record<string, string> = {
  portugal: 'from-blue-600 to-indigo-700',
  mexico: 'from-green-600 to-emerald-700',
  spain: 'from-orange-500 to-red-600',
  thailand: 'from-purple-600 to-pink-600',
  'costa-rica': 'from-emerald-500 to-teal-600',
}

const DEFAULT_GRADIENT = 'from-primary-600 to-primary-800'

const DIFFICULTY_STYLES: Record<string, string> = {
  Easy: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
  Medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
  Hard: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
}

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <span className="flex items-center gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          className={i < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}
        >
          ★
        </span>
      ))}
    </span>
  )
}

function CostBar({ label, value }: { label: string; value: string }) {
  // Derive a rough percentage from the range string for the visual bar
  const nums = value.match(/\d[\d,]*/g)?.map((n) => parseInt(n.replace(/,/g, ''), 10)) ?? []
  const avg = nums.length ? nums.reduce((a, b) => a + b, 0) / nums.length : 0
  // Cap reference at $3000 for visual normalisation
  const pct = Math.min(Math.round((avg / 3000) * 100), 100)

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-gray-700 dark:text-gray-300">{label}</span>
        <span className="text-gray-500 dark:text-gray-400 text-xs">{value}</span>
      </div>
      <div className="h-2 rounded-full bg-gray-100 dark:bg-slate-700 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary-400 to-primary-600"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

export default function CountryPage() {
  const { slug } = useParams<{ slug: string }>()
  const country = countries.find((c) => c.slug === slug)

  if (!country) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 bg-white dark:bg-slate-950 text-center">
        <p className="text-7xl">🌍</p>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Country not found</h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-md">
          We couldn't find a country guide for <strong>"{slug}"</strong>. It may not be in our
          database yet.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    )
  }

  const gradient = COUNTRY_GRADIENTS[country.slug] ?? DEFAULT_GRADIENT
  const [firstVisa, ...remainingVisas] = country.visaTypes

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-gray-100">
      {/* ── Breadcrumb ───────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 pt-5 pb-1">
        <nav className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
          <Link to="/" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link
            to="/countries"
            className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            Countries
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-800 dark:text-gray-200 font-medium">{country.name}</span>
        </nav>
        <Link
          to="/countries"
          className="inline-flex items-center gap-1.5 mt-3 text-sm text-primary-600 dark:text-primary-400 hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Countries
        </Link>
      </div>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className={`bg-gradient-to-br ${gradient} mt-4 text-white`}>
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-20">
          {/* Flag + Name */}
          <div className="flex flex-col items-center text-center mb-10">
            <span className="text-8xl md:text-9xl drop-shadow-lg mb-4">{country.flag}</span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow">
              {country.name}
            </h1>
            <p className="mt-2 text-white/80 text-lg">{country.continent}</p>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
            {[
              { icon: Users, label: 'Population', value: country.population },
              { icon: MapPin, label: 'Capital', value: country.capital },
              { icon: DollarSign, label: 'Currency', value: country.currency },
              { icon: Globe, label: 'Language', value: country.language },
              { icon: Clock, label: 'Timezone', value: country.timezone },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 flex flex-col gap-1"
              >
                <div className="flex items-center gap-1.5 text-white/70 text-xs font-medium uppercase tracking-wide">
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </div>
                <span className="text-white font-semibold text-sm leading-snug">{value}</span>
              </div>
            ))}
          </div>

          {/* Badge row */}
          <div className="flex flex-wrap justify-center gap-3">
            {/* Last verified */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white/90 text-xs font-medium">
              <CalendarDays className="w-3.5 h-3.5" />
              Last verified: {country.lastVerified}
            </span>

            {/* Safety */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white/90 text-xs font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              Safety&nbsp;
              <StarRating rating={country.safetyRating} />
            </span>

            {/* Internet */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white/90 text-xs font-medium">
              <Wifi className="w-3.5 h-3.5" />
              {country.internetSpeed} Mbps avg
            </span>

            {/* Healthcare */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white/90 text-xs font-medium">
              <Heart className="w-3.5 h-3.5" />
              Healthcare&nbsp;
              <StarRating rating={country.healthcareRating} />
            </span>
          </div>
        </div>
      </section>

      {/* ── Main content ─────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-14">

        {/* ── Section 2: Visa Options ──────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
              <Globe className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Visa Options</h2>
          </div>

          {/* First visa — always visible */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 shadow-sm p-6 mb-4">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  {firstVisa.name}
                </h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 text-xs font-medium">
                    {firstVisa.type}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      DIFFICULTY_STYLES[firstVisa.difficulty]
                    }`}
                  >
                    {firstVisa.difficulty} to obtain
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
              <div className="bg-gray-50 dark:bg-slate-800 rounded-lg px-4 py-3">
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-medium tracking-wide mb-1">
                  Duration
                </p>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {firstVisa.duration}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-slate-800 rounded-lg px-4 py-3">
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-medium tracking-wide mb-1">
                  Cost
                </p>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {firstVisa.cost}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-slate-800 rounded-lg px-4 py-3">
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-medium tracking-wide mb-1">
                  Processing Time
                </p>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {firstVisa.processingTime}
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
              {firstVisa.description}
            </p>

            <div>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Requirements
              </p>
              <ul className="space-y-2">
                {firstVisa.requirements.map((req) => (
                  <li key={req} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Remaining visas — gated */}
          {remainingVisas.length > 0 && (
            <PlusGate feature={`Full visa comparison for ${country.name}`}>
              <div className="space-y-4">
                {remainingVisas.map((visa) => (
                  <div
                    key={visa.name}
                    className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 shadow-sm p-6"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                          {visa.name}
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 text-xs font-medium">
                            {visa.type}
                          </span>
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              DIFFICULTY_STYLES[visa.difficulty]
                            }`}
                          >
                            {visa.difficulty} to obtain
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                      <div className="bg-gray-50 dark:bg-slate-800 rounded-lg px-4 py-3">
                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-medium tracking-wide mb-1">
                          Duration
                        </p>
                        <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                          {visa.duration}
                        </p>
                      </div>
                      <div className="bg-gray-50 dark:bg-slate-800 rounded-lg px-4 py-3">
                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-medium tracking-wide mb-1">
                          Cost
                        </p>
                        <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                          {visa.cost}
                        </p>
                      </div>
                      <div className="bg-gray-50 dark:bg-slate-800 rounded-lg px-4 py-3">
                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-medium tracking-wide mb-1">
                          Processing Time
                        </p>
                        <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                          {visa.processingTime}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
                      {visa.description}
                    </p>

                    <div>
                      <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3">
                        Requirements
                      </p>
                      <ul className="space-y-2">
                        {visa.requirements.map((req) => (
                          <li
                            key={req}
                            className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300"
                          >
                            <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </PlusGate>
          )}
        </section>

        {/* ── Section 3: Cost of Living (GATED) ───────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
              <TrendingDown className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Cost of Living</h2>
          </div>

          <PlusGate feature={`Cost of living data for ${country.name}`}>
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 shadow-sm p-6">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                All figures are monthly estimates in USD. Ranges reflect budget vs. mid-range
                lifestyle choices. Compared to the US average, {country.name} is generally{' '}
                <strong className="text-emerald-600 dark:text-emerald-400">
                  {country.costIndex <= 5 ? 'more affordable' : 'comparable or higher cost'}
                </strong>
                .
              </p>

              <div className="space-y-5">
                {[
                  { label: '1BR Apartment', value: country.costOfLiving.rent1BR },
                  { label: '2BR Apartment', value: country.costOfLiving.rent2BR },
                  { label: 'Groceries', value: country.costOfLiving.groceries },
                  { label: 'Dining Out', value: country.costOfLiving.dining },
                  { label: 'Transport', value: country.costOfLiving.transport },
                  { label: 'Internet', value: country.costOfLiving.internet },
                  { label: 'Utilities', value: country.costOfLiving.utilities },
                  { label: 'Gym Membership', value: country.costOfLiving.gym },
                  { label: 'Coffee', value: country.costOfLiving.coffee },
                ].map(({ label, value }) => (
                  <CostBar key={label} label={label} value={value} />
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
                <p className="text-sm text-emerald-800 dark:text-emerald-300 font-medium">
                  Cost index score: {country.costIndex}/10 (lower = cheaper than US average)
                </p>
              </div>
            </div>
          </PlusGate>
        </section>

        {/* ── Section 4: Healthcare (GATED) ───────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Healthcare</h2>
          </div>

          <PlusGate feature={`Healthcare details for ${country.name}`}>
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 shadow-sm p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {country.healthcare.system}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 bg-gray-50 dark:bg-slate-800 rounded-xl p-4">
                  <Shield className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                      Quality Rating
                    </p>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                      {country.healthcare.quality}
                    </p>
                    <div className="mt-1">
                      <StarRating rating={country.healthcareRating} />
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-gray-50 dark:bg-slate-800 rounded-xl p-4">
                  <CheckCircle2
                    className={`w-5 h-5 mt-0.5 shrink-0 ${
                      country.healthcare.publicAvailable
                        ? 'text-green-500'
                        : 'text-gray-400'
                    }`}
                  />
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                      Public System
                    </p>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                      {country.healthcare.publicAvailable
                        ? 'Available to residents'
                        : 'Private only'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-gray-50 dark:bg-slate-800 rounded-xl p-4">
                  <DollarSign className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                      Private Insurance Cost
                    </p>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                      {country.healthcare.insuranceCost}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-gray-50 dark:bg-slate-800 rounded-xl p-4">
                  <Phone className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                      Emergency Number
                    </p>
                    <p className="text-xl font-bold text-red-600 dark:text-red-400">
                      {country.healthcare.emergencyNumber}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </PlusGate>
        </section>

        {/* ── Section 5: Pros & Cons (GATED) ─────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center">
              <Zap className="w-5 h-5 text-violet-600 dark:text-violet-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Pros & Cons</h2>
          </div>

          <PlusGate feature={`Pros & cons analysis for ${country.name}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pros */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 shadow-sm p-6">
                <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Pros
                </h3>
                <ul className="space-y-3">
                  {country.pros.map((pro) => (
                    <li key={pro} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 shadow-sm p-6">
                <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" />
                  Cons
                </h3>
                <ul className="space-y-3">
                  {country.cons.map((con) => (
                    <li key={con} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </PlusGate>
        </section>

        {/* ── Section 6: Climate (GATED) ──────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center">
              <Thermometer className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Climate</h2>
          </div>

          <PlusGate feature={`Climate information for ${country.name}`}>
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 shadow-sm p-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="flex items-start gap-3 bg-sky-50 dark:bg-sky-900/20 rounded-xl p-4">
                  <Globe className="w-5 h-5 text-sky-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                      Climate Type
                    </p>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                      {country.climate.type}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4">
                  <Thermometer className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                      Average Temperature
                    </p>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                      {country.climate.avgTemp}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-4">
                  <CalendarDays className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                      Best Months to Visit / Move
                    </p>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                      {country.climate.bestMonths.join(', ')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {country.climate.bestMonths.map((month) => (
                  <span
                    key={month}
                    className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300 text-xs font-medium"
                  >
                    {month}
                  </span>
                ))}
              </div>
            </div>
          </PlusGate>
        </section>
      </div>

      {/* ── Bottom CTA ───────────────────────────────────────────── */}
      <section className={`bg-gradient-to-br ${gradient} mt-8`}>
        <div className="max-w-4xl mx-auto px-4 py-16 text-center text-white">
          <p className="text-white/70 text-sm font-medium uppercase tracking-widest mb-3">
            Your move awaits
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Move to {country.name}?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Find the right visa, understand the costs, and take the first step toward life in{' '}
            {country.name} with our free interactive tools.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/tools"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-white text-gray-900 font-bold text-sm hover:bg-gray-100 transition-colors shadow-lg"
            >
              <Zap className="w-4 h-4" />
              Take the Visa Quiz
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-white/15 border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-colors"
            >
              <DollarSign className="w-4 h-4" />
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
