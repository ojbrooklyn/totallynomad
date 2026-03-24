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
  ExternalLink,
  Plane,
  ClipboardCheck,
  Home,
  FileText,
  MessageCircle,
} from 'lucide-react'
import { countries } from '../lib/data/countries'
import { partners } from '../lib/data/partners'
import { postArrivalGuides } from '../lib/data/postArrival'
import PlusGate from '../components/PlusGate'

const COUNTRY_GRADIENTS: Record<string, string> = {
  portugal: 'from-[#0F766E] to-emerald-800',
  mexico: 'from-green-600 to-emerald-700',
  spain: 'from-orange-500 to-red-600',
  thailand: 'from-amber-600 to-orange-600',
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
        <span className="font-medium text-gray-700 dark:text-stone-300">{label}</span>
        <span className="text-gray-500 dark:text-stone-400 text-xs">{value}</span>
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
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 bg-[#FFFBEB] dark:bg-[#0C1222] text-center">
        <p className="text-7xl">🌍</p>
        <h1 className="text-4xl font-bold font-serif text-gray-900 dark:text-stone-100">Country not found</h1>
        <p className="text-gray-500 dark:text-stone-400 max-w-md">
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
    <div className="min-h-screen bg-[#FFFBEB] dark:bg-[#0C1222] text-gray-900 dark:text-stone-100">
      {/* ── Breadcrumb ───────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 pt-5 pb-1">
        <nav className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-stone-400">
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
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">

        {/* ── Section 2: Visa Options ──────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
              <Globe className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            </div>
            <h2 className="text-2xl font-bold font-serif text-gray-900 dark:text-stone-100">Visa Options</h2>
          </div>

          {/* First visa — always visible */}
          <div className="bg-white dark:bg-slate-900/80 rounded-2xl border border-stone-200 dark:border-slate-800 shadow-sm p-6 mb-4">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-stone-100">
                  {firstVisa.name}
                </h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300 text-xs font-medium">
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
              <div className="bg-stone-50 dark:bg-slate-800 rounded-lg px-4 py-3">
                <p className="text-xs text-gray-500 dark:text-stone-400 uppercase font-medium tracking-wide mb-1">
                  Duration
                </p>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {firstVisa.duration}
                </p>
              </div>
              <div className="bg-stone-50 dark:bg-slate-800 rounded-lg px-4 py-3">
                <p className="text-xs text-gray-500 dark:text-stone-400 uppercase font-medium tracking-wide mb-1">
                  Cost
                </p>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {firstVisa.cost}
                </p>
              </div>
              <div className="bg-stone-50 dark:bg-slate-800 rounded-lg px-4 py-3">
                <p className="text-xs text-gray-500 dark:text-stone-400 uppercase font-medium tracking-wide mb-1">
                  Processing Time
                </p>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {firstVisa.processingTime}
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-600 dark:text-stone-400 leading-relaxed mb-5">
              {firstVisa.description}
            </p>

            <div>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Requirements
              </p>
              <ul className="space-y-2">
                {firstVisa.requirements.map((req) => (
                  <li key={req} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-stone-300">
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
                    className="bg-white dark:bg-slate-900/80 rounded-2xl border border-stone-200 dark:border-slate-800 shadow-sm p-6"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-stone-100">
                          {visa.name}
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300 text-xs font-medium">
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
                      <div className="bg-stone-50 dark:bg-slate-800 rounded-lg px-4 py-3">
                        <p className="text-xs text-gray-500 dark:text-stone-400 uppercase font-medium tracking-wide mb-1">
                          Duration
                        </p>
                        <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                          {visa.duration}
                        </p>
                      </div>
                      <div className="bg-stone-50 dark:bg-slate-800 rounded-lg px-4 py-3">
                        <p className="text-xs text-gray-500 dark:text-stone-400 uppercase font-medium tracking-wide mb-1">
                          Cost
                        </p>
                        <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                          {visa.cost}
                        </p>
                      </div>
                      <div className="bg-stone-50 dark:bg-slate-800 rounded-lg px-4 py-3">
                        <p className="text-xs text-gray-500 dark:text-stone-400 uppercase font-medium tracking-wide mb-1">
                          Processing Time
                        </p>
                        <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                          {visa.processingTime}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-stone-400 leading-relaxed mb-5">
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
                            className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-stone-300"
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
            <h2 className="text-2xl font-bold font-serif text-gray-900 dark:text-stone-100">Cost of Living</h2>
          </div>

          <PlusGate feature={`Cost of living data for ${country.name}`}>
            <div className="bg-white dark:bg-slate-900/80 rounded-2xl border border-stone-200 dark:border-slate-800 shadow-sm p-6">
              <p className="text-sm text-gray-500 dark:text-stone-400 mb-6">
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

        {/* ── Save on Flights Tip ────────────────────────────── */}
        <div className="rounded-2xl border border-sky-200 dark:border-sky-800/60 bg-sky-50/70 dark:bg-sky-900/20 p-5 flex items-start gap-4">
          <div className="w-9 h-9 rounded-lg bg-sky-100 dark:bg-sky-900/40 flex items-center justify-center shrink-0">
            <Plane className="w-5 h-5 text-sky-600 dark:text-sky-400" />
          </div>
          <div className="space-y-1.5">
            <p className="text-sm font-semibold text-gray-900 dark:text-stone-100">
              Save on Your Flight to {country.name}
            </p>
            <p className="text-sm text-gray-600 dark:text-stone-400 leading-relaxed">
              Pro tip: Use{' '}
              <a
                href={partners.repriced.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sky-700 dark:text-sky-300 hover:underline"
              >
                {partners.repriced.name}
              </a>{' '}
              to automatically track price drops on your flights and hotels. It monitors your booking and rebooks if the price drops — you get cash back with zero effort.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={partners.repriced.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700 dark:text-sky-300 hover:text-sky-800 dark:hover:text-sky-200 transition-colors"
              >
                Try Repriced
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-xs text-gray-400 dark:text-slate-500 font-medium">Partner link</span>
            </div>
          </div>
        </div>

        {/* ── Stay Connected Tip ────────────────────────────── */}
        <div className="rounded-2xl border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/70 dark:bg-emerald-900/20 p-5 flex items-start gap-4">
          <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center shrink-0">
            <Wifi className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div className="space-y-1.5">
            <p className="text-sm font-semibold text-gray-900 dark:text-stone-100">
              Stay Connected in {country.name}
            </p>
            <p className="text-sm text-gray-600 dark:text-stone-400 leading-relaxed">
              Skip the airport SIM card hunt.{' '}
              <a
                href={partners.airalo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-emerald-700 dark:text-emerald-300 hover:underline"
              >
                {partners.airalo.name}
              </a>{' '}
              lets you buy an eSIM before you land — instant data the moment you arrive. Works in 200+ countries.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={partners.airalo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 dark:text-emerald-300 hover:text-emerald-800 dark:hover:text-emerald-200 transition-colors"
              >
                Get an eSIM
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-xs text-gray-400 dark:text-slate-500 font-medium">Partner link</span>
            </div>
          </div>
        </div>

        {/* ── Section 4: Healthcare (GATED) ───────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <h2 className="text-2xl font-bold font-serif text-gray-900 dark:text-stone-100">Healthcare</h2>
          </div>

          <PlusGate feature={`Healthcare details for ${country.name}`}>
            <div className="bg-white dark:bg-slate-900/80 rounded-2xl border border-stone-200 dark:border-slate-800 shadow-sm p-6">
              <p className="text-sm text-gray-600 dark:text-stone-400 leading-relaxed mb-6">
                {country.healthcare.system}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 bg-stone-50 dark:bg-slate-800 rounded-xl p-4">
                  <Shield className="w-5 h-5 text-teal-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-stone-400 uppercase tracking-wide mb-1">
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

                <div className="flex items-start gap-3 bg-stone-50 dark:bg-slate-800 rounded-xl p-4">
                  <CheckCircle2
                    className={`w-5 h-5 mt-0.5 shrink-0 ${
                      country.healthcare.publicAvailable
                        ? 'text-green-500'
                        : 'text-gray-400'
                    }`}
                  />
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-stone-400 uppercase tracking-wide mb-1">
                      Public System
                    </p>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                      {country.healthcare.publicAvailable
                        ? 'Available to residents'
                        : 'Private only'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-stone-50 dark:bg-slate-800 rounded-xl p-4">
                  <DollarSign className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-stone-400 uppercase tracking-wide mb-1">
                      Private Insurance Cost
                    </p>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                      {country.healthcare.insuranceCost}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-stone-50 dark:bg-slate-800 rounded-xl p-4">
                  <Phone className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-stone-400 uppercase tracking-wide mb-1">
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
            <h2 className="text-2xl font-bold font-serif text-gray-900 dark:text-stone-100">Pros & Cons</h2>
          </div>

          <PlusGate feature={`Pros & cons analysis for ${country.name}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pros */}
              <div className="bg-white dark:bg-slate-900/80 rounded-2xl border border-stone-200 dark:border-slate-800 shadow-sm p-6">
                <h3 className="text-base font-bold text-gray-900 dark:text-stone-100 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Pros
                </h3>
                <ul className="space-y-3">
                  {country.pros.map((pro) => (
                    <li key={pro} className="flex items-start gap-3 text-sm text-gray-700 dark:text-stone-300">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="bg-white dark:bg-slate-900/80 rounded-2xl border border-stone-200 dark:border-slate-800 shadow-sm p-6">
                <h3 className="text-base font-bold text-gray-900 dark:text-stone-100 mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" />
                  Cons
                </h3>
                <ul className="space-y-3">
                  {country.cons.map((con) => (
                    <li key={con} className="flex items-start gap-3 text-sm text-gray-700 dark:text-stone-300">
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
            <h2 className="text-2xl font-bold font-serif text-gray-900 dark:text-stone-100">Climate</h2>
          </div>

          <PlusGate feature={`Climate information for ${country.name}`}>
            <div className="bg-white dark:bg-slate-900/80 rounded-2xl border border-stone-200 dark:border-slate-800 shadow-sm p-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="flex items-start gap-3 bg-sky-50 dark:bg-sky-900/20 rounded-xl p-4">
                  <Globe className="w-5 h-5 text-sky-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-stone-400 uppercase tracking-wide mb-1">
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
                    <p className="text-xs font-medium text-gray-500 dark:text-stone-400 uppercase tracking-wide mb-1">
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
                    <p className="text-xs font-medium text-gray-500 dark:text-stone-400 uppercase tracking-wide mb-1">
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

      {/* ── Section 7: After You Arrive ──────────────────────────── */}
      {(() => {
        const guide = postArrivalGuides.find((g) => g.countrySlug === country.slug)
        if (!guide) return null
        return (
          <div className="max-w-6xl mx-auto px-4 pb-16 space-y-16">
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <ClipboardCheck className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                <h2 className="text-2xl font-bold font-serif text-gray-900 dark:text-stone-100">After You Arrive</h2>
              </div>

              <PlusGate feature={`Post-arrival guide for ${country.name}`}>
                <div className="space-y-8">
                  {/* First Week Checklist */}
                  <div className="bg-white dark:bg-slate-900/80 rounded-2xl border border-stone-200 dark:border-slate-800 shadow-sm p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-stone-100 mb-4 flex items-center gap-2">
                      <ClipboardCheck className="w-5 h-5 text-amber-500" />
                      First Week Checklist
                    </h3>
                    <div className="space-y-4">
                      {guide.firstWeekChecklist.map((item) => (
                        <div key={item.task} className="bg-stone-50 dark:bg-slate-800 rounded-xl p-4">
                          <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">{item.task}</p>
                          <p className="text-sm text-gray-600 dark:text-stone-400">{item.details}</p>
                          {item.officeName && (
                            <p className="text-xs text-primary-600 dark:text-primary-400 mt-1 font-medium">Office: {item.officeName}</p>
                          )}
                          {item.tip && (
                            <p className="text-xs text-amber-600 dark:text-amber-400 mt-1">Tip: {item.tip}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Finding Housing */}
                  <div className="bg-white dark:bg-slate-900/80 rounded-2xl border border-stone-200 dark:border-slate-800 shadow-sm p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-stone-100 mb-4 flex items-center gap-2">
                      <Home className="w-5 h-5 text-violet-500" />
                      Finding Permanent Housing
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div className="bg-stone-50 dark:bg-slate-800 rounded-xl p-4">
                        <p className="text-xs text-gray-500 dark:text-stone-400 uppercase font-medium mb-2">Best Websites/Apps</p>
                        <ul className="space-y-1.5">
                          {guide.housing.websites.map((site) => (
                            <li key={site.name} className="text-sm">
                              <a href={site.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary-600 dark:text-primary-400 hover:underline">
                                {site.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-stone-50 dark:bg-slate-800 rounded-xl p-4">
                        <p className="text-xs text-gray-500 dark:text-stone-400 uppercase font-medium mb-2">Typical Terms</p>
                        <p className="text-sm text-gray-700 dark:text-stone-300 mb-1"><span className="font-medium">Lease:</span> {guide.housing.typicalLeaseTerms}</p>
                        <p className="text-sm text-gray-700 dark:text-stone-300 mb-1"><span className="font-medium">Deposit:</span> {guide.housing.depositRequirements}</p>
                        <p className="text-sm text-gray-700 dark:text-stone-300"><span className="font-medium">Avg time to find:</span> {guide.housing.avgTimeToFind}</p>
                      </div>
                    </div>

                    {guide.housing.scamWarnings.length > 0 && (
                      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
                        <p className="text-xs font-semibold text-red-800 dark:text-red-300 uppercase mb-2">Scam Warnings</p>
                        <ul className="space-y-1.5">
                          {guide.housing.scamWarnings.map((warning) => (
                            <li key={warning} className="flex items-start gap-2 text-sm text-red-700 dark:text-red-300">
                              <XCircle className="w-4 h-4 mt-0.5 shrink-0" />
                              {warning}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Local Registration */}
                  <div className="bg-white dark:bg-slate-900/80 rounded-2xl border border-stone-200 dark:border-slate-800 shadow-sm p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-stone-100 mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-sky-500" />
                      Local Registration
                    </h3>

                    <p className="text-sm text-gray-600 dark:text-stone-400 leading-relaxed mb-4">{guide.localRegistration.process}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-stone-50 dark:bg-slate-800 rounded-xl p-4">
                        <p className="text-xs text-gray-500 dark:text-stone-400 uppercase font-medium mb-2">Documents Needed</p>
                        <ul className="space-y-1.5">
                          {guide.localRegistration.documentsNeeded.map((doc) => (
                            <li key={doc} className="flex items-start gap-2 text-sm text-gray-700 dark:text-stone-300">
                              <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                              {doc}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-stone-50 dark:bg-slate-800 rounded-xl p-4">
                        <p className="text-xs text-gray-500 dark:text-stone-400 uppercase font-medium mb-2">Estimated Time</p>
                        <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{guide.localRegistration.estimatedTime}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </PlusGate>
            </section>
          </div>
        )
      })()}

      {/* ── Ask the Community CTA ──────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 pb-10">
        <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl p-8 text-white text-center">
          <MessageCircle className="w-10 h-10 mx-auto mb-4 text-white/80" />
          <h2 className="text-2xl font-bold font-serif mb-2">Ask the Community</h2>
          <p className="text-white/80 max-w-md mx-auto mb-6">
            Have questions about moving to {country.name}? Connect with expats who've already made the move.
          </p>
          <a
            href="https://discord.gg/totallynomad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-indigo-700 font-bold text-sm hover:bg-gray-100 transition-colors shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            Join Our Discord
          </a>
        </div>
      </div>

      {/* ── Bottom CTA ───────────────────────────────────────────── */}
      <section className={`bg-gradient-to-br ${gradient} mt-8`}>
        <div className="max-w-4xl mx-auto px-4 py-16 text-center text-white">
          <p className="text-white/70 text-sm font-medium uppercase tracking-widest mb-3">
            Your move awaits
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif mb-4">
            Ready to Move to {country.name}?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Find the right visa, understand the costs, and take the first step toward life in{' '}
            {country.name} with our free interactive tools.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/tools/relocation-plan"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-white text-gray-900 font-bold text-sm hover:bg-gray-100 transition-colors shadow-lg"
            >
              <MapPin className="w-4 h-4" />
              Get your personalized plan for {country.name}
            </Link>
            <Link
              to="/tools"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-white/15 border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-colors"
            >
              <Zap className="w-4 h-4" />
              Take the Visa Quiz
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
