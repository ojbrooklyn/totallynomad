import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ChevronRight,
  ChevronLeft,
  MapPin,
  DollarSign,
  Users,
  Briefcase,
  Sun,
  Calendar,
  Shield,
  AlertTriangle,
  Check,
  Star,
  Printer,
  ArrowRight,
  Globe,
  Heart,
  Wifi,
  Building,
  Trees,
} from 'lucide-react'
import PlusGate from '../components/PlusGate'
import {
  calculateRelocationMatches,
  type RelocationInputs,
  type RelocationResult,
} from '../lib/tools/relocationMatcher'

// ─── Constants ────────────────────────────────────────────────────────────────

const TOTAL_STEPS = 10

const CITIZENSHIP_OPTIONS = [
  'United States',
  'Canada',
  'United Kingdom',
  'Australia',
  'Germany',
  'France',
  'Other',
]

const AGE_RANGES: RelocationInputs['ageRange'][] = [
  '18-29',
  '30-39',
  '40-49',
  '50-59',
  '60+',
]

const EMPLOYMENT_OPTIONS: {
  value: RelocationInputs['employmentType']
  label: string
  icon: typeof Briefcase
  description: string
}[] = [
  { value: 'remote', label: 'Remote employee', icon: Wifi, description: 'Working remotely for a company' },
  { value: 'freelancer', label: 'Self-employed / Freelancer', icon: Briefcase, description: 'Independent contractor or freelancer' },
  { value: 'business-owner', label: 'Business owner', icon: Building, description: 'Own and operate a business' },
  { value: 'retired', label: 'Retired', icon: Sun, description: 'Living on pension or savings' },
  { value: 'student', label: 'Student', icon: Globe, description: 'Currently studying or planning to' },
  { value: 'unemployed', label: 'Unemployed / Seeking', icon: Users, description: 'Looking for new opportunities' },
]

const SAVINGS_OPTIONS: { value: RelocationInputs['savings']; label: string }[] = [
  { value: '<5k', label: 'Less than $5K' },
  { value: '5-15k', label: '$5K - $15K' },
  { value: '15-30k', label: '$15K - $30K' },
  { value: '30-50k', label: '$30K - $50K' },
  { value: '50k+', label: '$50K+' },
]

const FAMILY_OPTIONS: {
  value: RelocationInputs['family']
  label: string
  icon: typeof Users
}[] = [
  { value: 'solo', label: 'Solo', icon: MapPin },
  { value: 'partner', label: 'With partner', icon: Heart },
  { value: 'partner-1kid', label: 'Partner + 1 kid', icon: Users },
  { value: 'partner-2kids', label: 'Partner + 2+ kids', icon: Users },
]

const CLIMATE_OPTIONS: {
  value: RelocationInputs['climate']
  label: string
  emoji: string
  examples: string
}[] = [
  { value: 'tropical', label: 'Tropical', emoji: '\u{1F334}', examples: 'Thailand, Costa Rica' },
  { value: 'mediterranean', label: 'Mediterranean', emoji: '\u{1F3D6}\uFE0F', examples: 'Portugal, Spain' },
  { value: 'urban', label: 'Urban / Any', emoji: '\u{1F3D9}\uFE0F', examples: 'Mexico City' },
  { value: 'no-preference', label: 'No preference', emoji: '\u{1F30D}', examples: 'Open to anywhere' },
]

const PRIORITY_OPTIONS: { key: string; label: string; icon: typeof DollarSign }[] = [
  { key: 'cost', label: 'Cost of living', icon: DollarSign },
  { key: 'safety', label: 'Safety', icon: Shield },
  { key: 'internet', label: 'Internet speed', icon: Wifi },
  { key: 'english', label: 'English-friendly', icon: Globe },
  { key: 'residency', label: 'Path to residency', icon: MapPin },
  { key: 'healthcare', label: 'Healthcare quality', icon: Heart },
  { key: 'nightlife', label: 'Nightlife / Culture', icon: Star },
  { key: 'nature', label: 'Nature / Outdoors', icon: Trees },
]

const TIMELINE_OPTIONS: { value: RelocationInputs['timeline']; label: string }[] = [
  { value: '1-3months', label: 'Moving in 1-3 months' },
  { value: '3-6months', label: '3-6 months' },
  { value: '6-12months', label: '6-12 months' },
  { value: 'exploring', label: 'Just exploring' },
]

const DEALBREAKER_OPTIONS: { value: string; label: string }[] = [
  { value: 'pets', label: 'Must be pet-friendly visa process' },
  { value: 'vehicle', label: 'Need to bring a vehicle' },
  { value: 'healthcare', label: 'Need specific healthcare coverage' },
  { value: 'direct-flights', label: 'Must have direct flights from US' },
  { value: 'intl-school', label: 'Need international school for kids' },
  { value: 'none', label: 'None of the above' },
]

// ─── Income bracket helper ───────────────────────────────────────────────────

function getIncomeBracket(income: number): string {
  if (income < 2000) return '<$2K'
  if (income < 3500) return '$2-3.5K'
  if (income < 5000) return '$3.5-5K'
  if (income < 10000) return '$5-10K'
  return '$10K+'
}

const INCOME_BRACKETS = ['<$2K', '$2-3.5K', '$3.5-5K', '$5-10K', '$10K+']

// ─── Component ────────────────────────────────────────────────────────────────

export default function RelocationPlanPage() {
  const [step, setStep] = useState(1)
  const [inputs, setInputs] = useState<Partial<RelocationInputs>>({
    citizenship: 'United States',
    priorities: [],
    dealBreakers: [],
  })
  const [results, setResults] = useState<RelocationResult[] | null>(null)
  const [showResults, setShowResults] = useState(false)

  // ── Step validation ──────────────────────────────────────────

  function isStepValid(): boolean {
    switch (step) {
      case 1:
        return !!inputs.citizenship
      case 2:
        return !!inputs.ageRange
      case 3:
        return !!inputs.employmentType
      case 4:
        return inputs.monthlyIncome !== undefined && inputs.monthlyIncome > 0
      case 5:
        return !!inputs.savings
      case 6:
        return !!inputs.family
      case 7:
        return !!inputs.climate
      case 8:
        return (inputs.priorities?.length ?? 0) === 3
      case 9:
        return !!inputs.timeline
      case 10:
        return (inputs.dealBreakers?.length ?? 0) > 0
      default:
        return false
    }
  }

  function handleNext() {
    if (step < TOTAL_STEPS) {
      setStep(step + 1)
    } else {
      // Final step — calculate
      const fullInputs = inputs as RelocationInputs
      const matches = calculateRelocationMatches(fullInputs)
      setResults(matches)
      setShowResults(true)
    }
  }

  function handleBack() {
    if (step > 1) setStep(step - 1)
  }

  // ── Priority handling ────────────────────────────────────────

  function togglePriority(key: string) {
    const current = inputs.priorities ?? []
    if (current.includes(key)) {
      setInputs({ ...inputs, priorities: current.filter((p) => p !== key) })
    } else if (current.length < 3) {
      setInputs({ ...inputs, priorities: [...current, key] })
    }
  }

  // ── Deal-breaker handling ────────────────────────────────────

  function toggleDealBreaker(value: string) {
    const current = inputs.dealBreakers ?? []
    if (value === 'none') {
      setInputs({ ...inputs, dealBreakers: ['none'] })
      return
    }
    const withoutNone = current.filter((d) => d !== 'none')
    if (withoutNone.includes(value)) {
      setInputs({ ...inputs, dealBreakers: withoutNone.filter((d) => d !== value) })
    } else {
      setInputs({ ...inputs, dealBreakers: [...withoutNone, value] })
    }
  }

  // ── Shared card class helper ─────────────────────────────────

  const cardBase =
    'cursor-pointer rounded-xl border p-4 transition-all duration-150 '
  const cardDefault =
    'border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 hover:shadow-md'
  const cardSelected =
    'border-[#0F766E] bg-teal-50 dark:bg-teal-900/20 shadow-sm ring-1 ring-[#0F766E]'

  // ── Results view ─────────────────────────────────────────────

  if (showResults && results) {
    return (
      <>
        {/* Print-friendly styles */}
        <style>{`
          @media print {
            nav, footer, .no-print { display: none !important; }
            body { background: white !important; }
            .print-break { page-break-before: always; }
          }
        `}</style>

        <div className="min-h-screen bg-[#FFFBEB] dark:bg-[#0C1222] py-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <PlusGate feature="Personalized Relocation Plan" fallbackHeight="800px">
              <div className="space-y-8">
                {/* Header */}
                <div className="text-center">
                  <h1 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
                    Your Personalized Relocation Plan
                  </h1>
                  <p className="mt-3 text-lg text-slate-600 dark:text-stone-400">
                    Based on your preferences, here are your top 3 country matches.
                  </p>
                </div>

                {/* Country cards */}
                {results.map((result, idx) => (
                  <div
                    key={result.country.slug}
                    className={`rounded-xl border border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 shadow-sm overflow-hidden ${idx > 0 ? 'print-break' : ''}`}
                  >
                    {/* Country header */}
                    <div className="flex items-center justify-between border-b border-stone-200 dark:border-slate-700 px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{result.country.flag}</span>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                          {result.country.name}
                        </h2>
                      </div>
                      <span className="inline-flex items-center rounded-full bg-[#0F766E] px-3 py-1 text-sm font-semibold text-white">
                        {result.matchScore}% match
                      </span>
                    </div>

                    <div className="space-y-6 p-6">
                      {/* Why it matches */}
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                          Why It Matches
                        </h3>
                        <ul className="space-y-1.5">
                          {result.matchReasons.map((reason, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-stone-400">
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0F766E]" />
                              <span>{reason}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Recommended visa */}
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                          Recommended Visa
                        </h3>
                        <div className="rounded-lg bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 p-4">
                          <p className="font-medium text-slate-900 dark:text-white">
                            {result.recommendedVisa.name}
                          </p>
                          <p className="mt-1 text-sm text-slate-600 dark:text-stone-400">
                            {result.recommendedVisa.requirements}
                          </p>
                        </div>
                      </div>

                      {/* Estimated costs */}
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                          Estimated Costs
                        </h3>
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                          <div className="flex items-center gap-3 rounded-lg border border-stone-200 dark:border-slate-700 p-4">
                            <DollarSign className="h-5 w-5 text-[#0F766E]" />
                            <div>
                              <p className="text-sm text-slate-600 dark:text-stone-400">One-time move cost</p>
                              <p className="text-lg font-semibold text-slate-900 dark:text-white">
                                ${result.estimatedMoveCost.toLocaleString()}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 rounded-lg border border-stone-200 dark:border-slate-700 p-4">
                            <Calendar className="h-5 w-5 text-[#0F766E]" />
                            <div>
                              <p className="text-sm text-slate-600 dark:text-stone-400">Monthly cost</p>
                              <p className="text-lg font-semibold text-slate-900 dark:text-white">
                                ${result.estimatedMonthlyCost.toLocaleString()}/mo
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Week-by-week timeline */}
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                          Week-by-Week Timeline
                        </h3>
                        <ol className="space-y-2">
                          {result.timeline.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-stone-400">
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0F766E] text-xs font-semibold text-white">
                                {i + 1}
                              </span>
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      {/* Key risks */}
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                          Key Risks
                        </h3>
                        <ul className="space-y-1.5">
                          {result.risks.map((risk, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-stone-400">
                              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                              <span className="text-sm">{risk}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Actions below results */}
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center no-print">
                  <button
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#0F766E] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#0D9488]"
                  >
                    <Printer className="h-5 w-5" />
                    Print Your Full Relocation Plan
                  </button>
                  <Link
                    to="/tools/checklist"
                    className="inline-flex items-center gap-2 rounded-xl border border-[#0F766E] px-6 py-3 font-semibold text-[#0F766E] dark:text-teal-400 transition-colors hover:bg-teal-50 dark:hover:bg-teal-900/20"
                  >
                    Start Your Document Checklist
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>

                {/* Restart button */}
                <div className="text-center no-print">
                  <button
                    onClick={() => {
                      setShowResults(false)
                      setResults(null)
                      setStep(1)
                      setInputs({ citizenship: 'United States', priorities: [], dealBreakers: [] })
                    }}
                    className="text-sm text-slate-500 dark:text-stone-400 underline hover:text-slate-700 dark:hover:text-stone-300"
                  >
                    Start over
                  </button>
                </div>
              </div>
            </PlusGate>
          </div>
        </div>
      </>
    )
  }

  // ── Wizard view ──────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-[#FFFBEB] dark:bg-[#0C1222] py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        {/* Page heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Relocation Plan Generator
          </h1>
          <p className="mt-2 text-slate-600 dark:text-stone-400">
            Answer 10 quick questions and we'll build your personalized relocation plan.
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-sm text-slate-600 dark:text-stone-400 mb-2">
            <span>Step {step} of {TOTAL_STEPS}</span>
            <span>{Math.round((step / TOTAL_STEPS) * 100)}%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-stone-200 dark:bg-slate-700">
            <div
              className="h-2 rounded-full bg-[#0F766E] transition-all duration-300"
              style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
            />
          </div>
        </div>

        {/* Step content card */}
        <div className="rounded-xl border border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 shadow-sm p-6 sm:p-8">
          {/* ── Step 1: Citizenship ── */}
          {step === 1 && (
            <div className="space-y-4">
              <label className="block text-lg font-semibold text-slate-900 dark:text-white">
                What's your current citizenship?
              </label>
              <select
                value={inputs.citizenship ?? ''}
                onChange={(e) => setInputs({ ...inputs, citizenship: e.target.value })}
                className="w-full rounded-lg border border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 text-slate-900 dark:text-white focus:border-[#0F766E] focus:outline-none focus:ring-2 focus:ring-[#0F766E]/20"
              >
                {CITIZENSHIP_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* ── Step 2: Age Range ── */}
          {step === 2 && (
            <div className="space-y-4">
              <label className="block text-lg font-semibold text-slate-900 dark:text-white">
                What's your age range?
              </label>
              <div className="flex flex-wrap gap-3">
                {AGE_RANGES.map((age) => (
                  <button
                    key={age}
                    onClick={() => setInputs({ ...inputs, ageRange: age })}
                    className={`${cardBase} ${inputs.ageRange === age ? cardSelected : cardDefault} px-5 py-2.5 text-sm font-medium text-slate-900 dark:text-white`}
                  >
                    {age}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── Step 3: Employment Type ── */}
          {step === 3 && (
            <div className="space-y-4">
              <label className="block text-lg font-semibold text-slate-900 dark:text-white">
                What's your employment situation?
              </label>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {EMPLOYMENT_OPTIONS.map((opt) => {
                  const Icon = opt.icon
                  return (
                    <button
                      key={opt.value}
                      onClick={() => setInputs({ ...inputs, employmentType: opt.value })}
                      className={`${cardBase} ${inputs.employmentType === opt.value ? cardSelected : cardDefault} flex items-start gap-3 text-left`}
                    >
                      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#0F766E]" />
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">{opt.label}</p>
                        <p className="text-sm text-slate-500 dark:text-stone-400">{opt.description}</p>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* ── Step 4: Monthly Income ── */}
          {step === 4 && (
            <div className="space-y-4">
              <label className="block text-lg font-semibold text-slate-900 dark:text-white">
                What's your monthly income?
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-stone-400 font-medium">
                  $
                </span>
                <input
                  type="number"
                  min={0}
                  value={inputs.monthlyIncome ?? ''}
                  onChange={(e) =>
                    setInputs({ ...inputs, monthlyIncome: Number(e.target.value) })
                  }
                  placeholder="e.g. 5000"
                  className="w-full rounded-lg border border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-800 pl-8 pr-4 py-3 text-slate-900 dark:text-white focus:border-[#0F766E] focus:outline-none focus:ring-2 focus:ring-[#0F766E]/20"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {INCOME_BRACKETS.map((bracket) => (
                  <span
                    key={bracket}
                    className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                      inputs.monthlyIncome && getIncomeBracket(inputs.monthlyIncome) === bracket
                        ? 'bg-[#0F766E] text-white'
                        : 'bg-stone-100 dark:bg-slate-700 text-slate-600 dark:text-stone-400'
                    }`}
                  >
                    {bracket}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* ── Step 5: Savings ── */}
          {step === 5 && (
            <div className="space-y-4">
              <label className="block text-lg font-semibold text-slate-900 dark:text-white">
                How much savings do you have for the move?
              </label>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {SAVINGS_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setInputs({ ...inputs, savings: opt.value })}
                    className={`${cardBase} ${inputs.savings === opt.value ? cardSelected : cardDefault} text-center font-medium text-slate-900 dark:text-white`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── Step 6: Family ── */}
          {step === 6 && (
            <div className="space-y-4">
              <label className="block text-lg font-semibold text-slate-900 dark:text-white">
                Who's coming with you?
              </label>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {FAMILY_OPTIONS.map((opt) => {
                  const Icon = opt.icon
                  return (
                    <button
                      key={opt.value}
                      onClick={() => setInputs({ ...inputs, family: opt.value })}
                      className={`${cardBase} ${inputs.family === opt.value ? cardSelected : cardDefault} flex items-center gap-3 font-medium text-slate-900 dark:text-white`}
                    >
                      <Icon className="h-5 w-5 text-[#0F766E]" />
                      {opt.label}
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* ── Step 7: Climate ── */}
          {step === 7 && (
            <div className="space-y-4">
              <label className="block text-lg font-semibold text-slate-900 dark:text-white">
                What climate do you prefer?
              </label>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {CLIMATE_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setInputs({ ...inputs, climate: opt.value })}
                    className={`${cardBase} ${inputs.climate === opt.value ? cardSelected : cardDefault} text-left`}
                  >
                    <p className="text-lg">
                      <span className="mr-2">{opt.emoji}</span>
                      <span className="font-medium text-slate-900 dark:text-white">{opt.label}</span>
                    </p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-stone-400">{opt.examples}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── Step 8: Priorities ── */}
          {step === 8 && (
            <div className="space-y-4">
              <label className="block text-lg font-semibold text-slate-900 dark:text-white">
                Rank your top 3 priorities
              </label>
              <p className="text-sm text-slate-500 dark:text-stone-400">
                Click to select in order of importance. Click again to deselect.
              </p>

              {/* Selected priorities */}
              {(inputs.priorities?.length ?? 0) > 0 && (
                <div className="flex flex-wrap gap-2">
                  {inputs.priorities!.map((key, i) => {
                    const opt = PRIORITY_OPTIONS.find((p) => p.key === key)
                    if (!opt) return null
                    return (
                      <button
                        key={key}
                        onClick={() => togglePriority(key)}
                        className="inline-flex items-center gap-1.5 rounded-full bg-[#0F766E] px-3 py-1.5 text-sm font-medium text-white"
                      >
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-xs font-bold">
                          {i + 1}
                        </span>
                        {opt.label}
                      </button>
                    )
                  })}
                </div>
              )}

              {/* Available options */}
              <div className="flex flex-wrap gap-2">
                {PRIORITY_OPTIONS.filter((p) => !(inputs.priorities ?? []).includes(p.key)).map((opt) => {
                  const Icon = opt.icon
                  return (
                    <button
                      key={opt.key}
                      onClick={() => togglePriority(opt.key)}
                      disabled={(inputs.priorities?.length ?? 0) >= 3}
                      className={`${cardBase} ${cardDefault} inline-flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white disabled:opacity-40 disabled:cursor-not-allowed`}
                    >
                      <Icon className="h-4 w-4 text-[#0F766E]" />
                      {opt.label}
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* ── Step 9: Timeline ── */}
          {step === 9 && (
            <div className="space-y-4">
              <label className="block text-lg font-semibold text-slate-900 dark:text-white">
                When are you planning to move?
              </label>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {TIMELINE_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setInputs({ ...inputs, timeline: opt.value })}
                    className={`${cardBase} ${inputs.timeline === opt.value ? cardSelected : cardDefault} text-center font-medium text-slate-900 dark:text-white`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── Step 10: Deal-Breakers ── */}
          {step === 10 && (
            <div className="space-y-4">
              <label className="block text-lg font-semibold text-slate-900 dark:text-white">
                Any deal-breakers?
              </label>
              <div className="space-y-3">
                {DEALBREAKER_OPTIONS.map((opt) => {
                  const isSelected = (inputs.dealBreakers ?? []).includes(opt.value)
                  return (
                    <button
                      key={opt.value}
                      onClick={() => toggleDealBreaker(opt.value)}
                      className={`${cardBase} ${isSelected ? cardSelected : cardDefault} flex w-full items-center gap-3 text-left`}
                    >
                      <div
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${
                          isSelected
                            ? 'border-[#0F766E] bg-[#0F766E]'
                            : 'border-stone-300 dark:border-slate-600'
                        }`}
                      >
                        {isSelected && <Check className="h-3.5 w-3.5 text-white" />}
                      </div>
                      <span className="font-medium text-slate-900 dark:text-white">
                        {opt.label}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          )}
        </div>

        {/* Navigation buttons */}
        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={handleBack}
            disabled={step === 1}
            className="inline-flex items-center gap-2 rounded-xl border border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 px-5 py-3 font-medium text-slate-700 dark:text-stone-300 transition-colors hover:bg-stone-50 dark:hover:bg-slate-700/50 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={!isStepValid()}
            className="inline-flex items-center gap-2 rounded-xl bg-[#0F766E] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#0D9488] disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {step === TOTAL_STEPS ? 'Get My Relocation Plan' : 'Next'}
            {step < TOTAL_STEPS && <ChevronRight className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </div>
  )
}
