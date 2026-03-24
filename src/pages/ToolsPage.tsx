import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  Calculator,
  ClipboardList,
  CheckCircle,
  DollarSign,
  TrendingDown,
  AlertCircle,
  ExternalLink,
  Plane,
  Wifi,
  MapPin,
  FileCheck,
  Star,
  ArrowRight,
} from 'lucide-react'
import PlusGate from '../components/PlusGate'
import { countries } from '../lib/data/countries'
import { partners } from '../lib/data/partners'

// ─── Types ───────────────────────────────────────────────────────────────────

type Tab = 'quiz' | 'calculator'

// ─── Quiz Data ────────────────────────────────────────────────────────────────

interface Question {
  id: number
  text: string
  options: string[]
}

const questions: Question[] = [
  {
    id: 1,
    text: 'What is your age range?',
    options: ['18–25', '26–35', '36–45', '46–55', '56–65', '65+'],
  },
  {
    id: 2,
    text: 'What is your annual income (USD)?',
    options: ['Under $30k', '$30k–$60k', '$60k–$100k', '$100k–$150k', '$150k+'],
  },
  {
    id: 3,
    text: 'What is your current employment status?',
    options: [
      'Remote Employee',
      'Freelancer / Self-employed',
      'Business Owner',
      'Retired',
      'Student',
      'Unemployed',
    ],
  },
  {
    id: 4,
    text: 'Do you have any criminal record?',
    options: ['None', 'Minor (misdemeanor)', 'Major (felony)'],
  },
  {
    id: 5,
    text: 'What is your highest level of education?',
    options: ["High School", "Associate's", "Bachelor's", "Master's", 'Doctorate'],
  },
  {
    id: 6,
    text: 'How much savings do you have available for the move?',
    options: ['Under $5k', '$5k–$15k', '$15k–$50k', '$50k–$100k', '$100k+'],
  },
  {
    id: 7,
    text: 'What is your family situation?',
    options: ['Single', 'Couple', 'Family with children', 'Single parent'],
  },
  {
    id: 8,
    text: 'How long do you intend to stay?',
    options: ['3–6 months', '6–12 months', '1–2 years', '2+ years', 'Permanent'],
  },
]

// ─── Visa Matching Logic ──────────────────────────────────────────────────────

interface VisaMatch {
  visaName: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  matchReason: string
  keyRequirement: string
  score: number
}

interface CountryResult {
  slug: string
  name: string
  flag: string
  visaMatches: VisaMatch[]
}

type QuizAnswers = Record<number, string>

function getIncomeNum(answer: string): number {
  if (answer === 'Under $30k') return 25000
  if (answer === '$30k–$60k') return 45000
  if (answer === '$60k–$100k') return 80000
  if (answer === '$100k–$150k') return 125000
  if (answer === '$150k+') return 200000
  return 0
}

function getSavingsNum(answer: string): number {
  if (answer === 'Under $5k') return 2500
  if (answer === '$5k–$15k') return 10000
  if (answer === '$15k–$50k') return 32000
  if (answer === '$50k–$100k') return 75000
  if (answer === '$100k+') return 150000
  return 0
}

function getAgeNum(answer: string): number {
  if (answer === '18–25') return 22
  if (answer === '26–35') return 30
  if (answer === '36–45') return 40
  if (answer === '46–55') return 50
  if (answer === '56–65') return 60
  if (answer === '65+') return 68
  return 30
}

function computeMatches(answers: QuizAnswers): CountryResult[] {
  const income = getIncomeNum(answers[2] ?? '')
  const savings = getSavingsNum(answers[6] ?? '')
  const employment = answers[3] ?? ''
  const duration = answers[8] ?? ''
  const education = answers[5] ?? ''
  const criminal = answers[4] ?? ''
  const age = getAgeNum(answers[1] ?? '')
  const monthlyIncome = income / 12

  const isRetired = employment === 'Retired'
  const isStudent = employment === 'Student'
  const isRemote =
    employment === 'Remote Employee' ||
    employment === 'Freelancer / Self-employed' ||
    employment === 'Business Owner'
  const hasDegree =
    education === "Bachelor's" || education === "Master's" || education === 'Doctorate'
  const isLongStay =
    duration === '1–2 years' || duration === '2+ years' || duration === 'Permanent'
  const isPermanent = duration === 'Permanent'
  const cleanRecord = criminal === 'None'

  const results: CountryResult[] = []

  // ─── Portugal ──────────────────────────────────────────────────────────────
  {
    const visaMatches: VisaMatch[] = []

    // D8 Digital Nomad
    if (isRemote && monthlyIncome >= 3280 && cleanRecord) {
      visaMatches.push({
        visaName: 'Digital Nomad Visa (D8)',
        difficulty: 'Medium',
        matchReason: 'Your remote income meets the €3,280/month threshold.',
        keyRequirement: 'Proof of remote employment or freelance contracts with foreign clients.',
        score: monthlyIncome >= 5000 ? 90 : 75,
      })
    }

    // D7 Passive Income
    if ((isRetired || income >= 30000) && monthlyIncome >= 820 && cleanRecord) {
      visaMatches.push({
        visaName: 'D7 Passive Income Visa',
        difficulty: 'Medium',
        matchReason: isRetired
          ? 'Your retirement income qualifies for the passive income visa.'
          : 'Your income exceeds the €820/month passive income threshold.',
        keyRequirement: 'Bank statements showing at least €820/month in passive or pension income.',
        score: isRetired ? 85 : 70,
      })
    }

    // Student
    if (isStudent) {
      visaMatches.push({
        visaName: 'Student Visa (D4)',
        difficulty: 'Easy',
        matchReason: 'Students can enrol in Portuguese universities or language schools.',
        keyRequirement: 'Acceptance letter from a recognised Portuguese institution.',
        score: 80,
      })
    }

    // Golden Visa
    if (savings >= 100000 && cleanRecord && isLongStay) {
      visaMatches.push({
        visaName: 'Golden Visa (ARI)',
        difficulty: 'Hard',
        matchReason: 'Your savings suggest investment capacity for the Golden Visa.',
        keyRequirement: 'Minimum €250,000 qualifying investment (fund units or cultural donation).',
        score: 60,
      })
    }

    if (visaMatches.length > 0) {
      results.push({ slug: 'portugal', name: 'Portugal', flag: '🇵🇹', visaMatches })
    }
  }

  // ─── Mexico ────────────────────────────────────────────────────────────────
  {
    const visaMatches: VisaMatch[] = []

    // Tourist / FMM
    if (!isLongStay) {
      visaMatches.push({
        visaName: 'Tourist Visa / FMM',
        difficulty: 'Easy',
        matchReason: 'For shorter stays, the tourist permit allows up to 180 days.',
        keyRequirement: 'Valid passport and proof of onward travel.',
        score: 95,
      })
    }

    // Temporary Resident
    if (monthlyIncome >= 2150 && cleanRecord) {
      visaMatches.push({
        visaName: 'Temporary Resident Visa',
        difficulty: 'Medium',
        matchReason: 'Your income meets the ~$2,150/month solvency threshold.',
        keyRequirement: 'Bank statements or proof of income for the last 6–12 months.',
        score: monthlyIncome >= 4000 ? 85 : 70,
      })
    }

    // Permanent Resident
    if (isPermanent && (isRetired || monthlyIncome >= 8600) && cleanRecord) {
      visaMatches.push({
        visaName: 'Permanent Resident Visa',
        difficulty: 'Hard',
        matchReason: isRetired
          ? 'Retirees with pension income can qualify for permanent residency.'
          : 'High income meets the permanent residency threshold.',
        keyRequirement: 'Proof of income of ~$8,600/month or 4 years of temporary residency.',
        score: 65,
      })
    }

    if (visaMatches.length > 0) {
      results.push({ slug: 'mexico', name: 'Mexico', flag: '🇲🇽', visaMatches })
    }
  }

  // ─── Spain ─────────────────────────────────────────────────────────────────
  {
    const visaMatches: VisaMatch[] = []

    // Digital Nomad
    if (isRemote && monthlyIncome >= 2334 && hasDegree && cleanRecord) {
      visaMatches.push({
        visaName: 'Digital Nomad Visa (Ley de Startups)',
        difficulty: 'Medium',
        matchReason: 'Your remote income and degree qualify for the Startup Act nomad visa.',
        keyRequirement: 'Min. €2,334/month income; foreign client relationship of 1+ year.',
        score: monthlyIncome >= 4000 ? 88 : 72,
      })
    }

    // Non-Lucrative Visa
    if (!isRemote && income >= 27000 && cleanRecord) {
      visaMatches.push({
        visaName: 'Non-Lucrative Visa (NLV)',
        difficulty: 'Medium',
        matchReason: 'Your passive or retirement income meets the ~€27,115/year requirement.',
        keyRequirement: 'Private health insurance and proof of ~€2,259/month in income.',
        score: 70,
      })
    }

    // Student
    if (isStudent) {
      visaMatches.push({
        visaName: 'Student Visa',
        difficulty: 'Easy',
        matchReason: 'Students can study at Spanish universities or language schools.',
        keyRequirement: 'Acceptance letter and ~€600/month in financial support.',
        score: 82,
      })
    }

    // Golden Visa
    if (savings >= 100000 && cleanRecord && isLongStay) {
      visaMatches.push({
        visaName: 'Golden Visa',
        difficulty: 'Hard',
        matchReason: 'Investment capital may qualify you for the investor visa.',
        keyRequirement: 'Minimum €500,000 unencumbered real estate investment.',
        score: 55,
      })
    }

    if (visaMatches.length > 0) {
      results.push({ slug: 'spain', name: 'Spain', flag: '🇪🇸', visaMatches })
    }
  }

  // ─── Thailand ──────────────────────────────────────────────────────────────
  {
    const visaMatches: VisaMatch[] = []

    // Visa Exemption / Tourist
    if (!isLongStay) {
      visaMatches.push({
        visaName: 'Tourist Visa / Visa Exemption',
        difficulty: 'Easy',
        matchReason: 'Most nationalities receive a 30-day visa exemption on arrival.',
        keyRequirement: 'Valid passport; land border entries limited to 2 per year.',
        score: 92,
      })
    }

    // LTR Visa
    if (isRemote && income >= 80000 && cleanRecord) {
      visaMatches.push({
        visaName: 'Long-Term Resident (LTR) Visa',
        difficulty: 'Medium',
        matchReason: 'Remote workers earning $80k+ can apply for the 10-year LTR visa.',
        keyRequirement: 'Proof of $80,000+/year income and employment from abroad.',
        score: income >= 150000 ? 90 : 76,
      })
    }

    // Retirement Visa (Non-OA)
    if (isRetired && age >= 50 && savings >= 25000) {
      visaMatches.push({
        visaName: 'Retirement Visa (Non-OA)',
        difficulty: 'Easy',
        matchReason: 'Retirees aged 50+ with sufficient funds can retire in Thailand.',
        keyRequirement: 'Minimum 800,000 THB (~$22,000) in a Thai bank account.',
        score: 88,
      })
    }

    // Education Visa
    if (isStudent) {
      visaMatches.push({
        visaName: 'Education / Student Visa (ED)',
        difficulty: 'Easy',
        matchReason: 'Language schools and universities accept international students.',
        keyRequirement: 'Enrolment letter from a recognised Thai institution.',
        score: 78,
      })
    }

    if (visaMatches.length > 0) {
      results.push({ slug: 'thailand', name: 'Thailand', flag: '🇹🇭', visaMatches })
    }
  }

  // ─── Costa Rica ────────────────────────────────────────────────────────────
  {
    const visaMatches: VisaMatch[] = []

    // Tourist
    if (!isLongStay) {
      visaMatches.push({
        visaName: 'Tourist Visa',
        difficulty: 'Easy',
        matchReason: 'Many nationalities can stay up to 90 days without a visa.',
        keyRequirement: 'Valid passport and proof of onward travel.',
        score: 90,
      })
    }

    // Digital Nomad Visa
    if (isRemote && monthlyIncome >= 3000 && cleanRecord) {
      visaMatches.push({
        visaName: 'Digital Nomad Visa',
        difficulty: 'Easy',
        matchReason: 'Costa Rica\'s nomad visa requires just $3,000/month gross income.',
        keyRequirement: 'Proof of $3,000/month income from foreign sources.',
        score: monthlyIncome >= 5000 ? 92 : 78,
      })
    }

    // Pensionado
    if (isRetired && monthlyIncome >= 1000 && cleanRecord) {
      visaMatches.push({
        visaName: 'Pensionado (Retiree) Visa',
        difficulty: 'Easy',
        matchReason: 'Your retirement pension meets the $1,000/month minimum.',
        keyRequirement: 'Proof of $1,000/month in pension or Social Security income.',
        score: 91,
      })
    }

    // Rentista
    if (!isRetired && monthlyIncome >= 2500 && cleanRecord) {
      visaMatches.push({
        visaName: 'Rentista (Income) Visa',
        difficulty: 'Medium',
        matchReason: 'Passive income earners can qualify for the rentista category.',
        keyRequirement: '$2,500/month in guaranteed passive income for 2 years.',
        score: 73,
      })
    }

    if (visaMatches.length > 0) {
      results.push({ slug: 'costarica', name: 'Costa Rica', flag: '🇨🇷', visaMatches })
    }
  }

  // Sort by best visa score
  results.sort((a, b) => {
    const aMax = Math.max(...a.visaMatches.map((v) => v.score))
    const bMax = Math.max(...b.visaMatches.map((v) => v.score))
    return bMax - aMax
  })

  return results
}

// ─── Budget Calculator Data ───────────────────────────────────────────────────

type CountrySlug = 'portugal' | 'mexico' | 'spain' | 'thailand' | 'costarica'

interface BudgetData {
  visaFee: number
  flight: number
  deposit: number
  shipping: number
  emergencyFund: number
  rent: number
  groceries: number
  dining: number
  transport: number
  utilities: number
  internet: number
  healthInsurance: number
  entertainment: number
}

const budgetBase: Record<CountrySlug, BudgetData> = {
  portugal: {
    visaFee: 450,
    flight: 900,
    deposit: 2400,
    shipping: 1500,
    emergencyFund: 3000,
    rent: 1200,
    groceries: 325,
    dining: 250,
    transport: 60,
    utilities: 115,
    internet: 35,
    healthInsurance: 100,
    entertainment: 150,
  },
  mexico: {
    visaFee: 350,
    flight: 550,
    deposit: 1600,
    shipping: 1200,
    emergencyFund: 2500,
    rent: 900,
    groceries: 275,
    dining: 275,
    transport: 40,
    utilities: 55,
    internet: 30,
    healthInsurance: 130,
    entertainment: 120,
  },
  spain: {
    visaFee: 500,
    flight: 950,
    deposit: 3000,
    shipping: 1600,
    emergencyFund: 3500,
    rent: 1500,
    groceries: 365,
    dining: 325,
    transport: 70,
    utilities: 140,
    internet: 40,
    healthInsurance: 85,
    entertainment: 175,
  },
  thailand: {
    visaFee: 200,
    flight: 1100,
    deposit: 1200,
    shipping: 1000,
    emergencyFund: 2000,
    rent: 750,
    groceries: 200,
    dining: 200,
    transport: 50,
    utilities: 80,
    internet: 25,
    healthInsurance: 90,
    entertainment: 100,
  },
  costarica: {
    visaFee: 250,
    flight: 650,
    deposit: 1800,
    shipping: 1300,
    emergencyFund: 2500,
    rent: 1000,
    groceries: 300,
    dining: 220,
    transport: 50,
    utilities: 100,
    internet: 45,
    healthInsurance: 110,
    entertainment: 130,
  },
}

const familySizeMultiplier: Record<string, number> = {
  '1': 1.0,
  '2': 1.5,
  '3': 1.8,
  '4+': 2.2,
}

const preferenceMultiplier: Record<string, number> = {
  Budget: 0.8,
  Moderate: 1.0,
  Comfortable: 1.3,
}

const countryLabels: Record<CountrySlug, string> = {
  portugal: 'Portugal',
  mexico: 'Mexico',
  spain: 'Spain',
  thailand: 'Thailand',
  costarica: 'Costa Rica',
}

const countryFlags: Record<CountrySlug, string> = {
  portugal: '🇵🇹',
  mexico: '🇲🇽',
  spain: '🇪🇸',
  thailand: '🇹🇭',
  costarica: '🇨🇷',
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function DifficultyBadge({ level }: { level: 'Easy' | 'Medium' | 'Hard' }) {
  const base = 'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold'
  if (level === 'Easy')
    return <span className={`${base} bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300`}>Easy</span>
  if (level === 'Medium')
    return <span className={`${base} bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300`}>Medium</span>
  return <span className={`${base} bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300`}>Hard</span>
}

function ScoreBar({ score }: { score: number }) {
  const color =
    score >= 80 ? 'bg-green-500' : score >= 60 ? 'bg-yellow-500' : 'bg-orange-500'
  return (
    <div className="flex items-center gap-2 mt-1">
      <div className="flex-1 h-1.5 bg-stone-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div className={`h-full ${color} rounded-full transition-all duration-500`} style={{ width: `${score}%` }} />
      </div>
      <span className="text-xs text-gray-500 dark:text-stone-400 w-8 text-right">{score}%</span>
    </div>
  )
}

// ─── Visa Quiz Component ──────────────────────────────────────────────────────

function VisaQuiz() {
  const [step, setStep] = useState(0) // 0 = intro, 1–8 = questions, 9 = results
  const [answers, setAnswers] = useState<QuizAnswers>({})
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [results, setResults] = useState<CountryResult[]>([])

  const currentQuestion = step >= 1 && step <= 8 ? questions[step - 1] : null
  const progress = step > 0 && step <= 8 ? (step / 8) * 100 : 0

  function handleStart() {
    setStep(1)
    setAnswers({})
    setSelectedOption(null)
  }

  function handleOptionSelect(option: string) {
    setSelectedOption(option)
  }

  function handleNext() {
    if (!selectedOption || !currentQuestion) return
    const newAnswers = { ...answers, [currentQuestion.id]: selectedOption }
    setAnswers(newAnswers)
    setSelectedOption(null)
    if (step === 8) {
      setResults(computeMatches(newAnswers))
      setStep(9)
    } else {
      setStep(step + 1)
    }
  }

  function handleBack() {
    if (step <= 1) {
      setStep(0)
    } else {
      setStep(step - 1)
      const prevAnswer = answers[step - 1]
      setSelectedOption(prevAnswer ?? null)
    }
  }

  function handleRestart() {
    setStep(0)
    setAnswers({})
    setSelectedOption(null)
    setResults([])
  }

  // Intro screen
  if (step === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center gap-6">
        <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
          <ClipboardList className="w-8 h-8 text-purple-600 dark:text-purple-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Visa Eligibility Quiz</h2>
        <p className="text-gray-500 dark:text-stone-400 max-w-md leading-relaxed">
          Answer 8 quick questions and we'll match you with the best visa options across Portugal, Mexico, Spain, Thailand, and Costa Rica.
        </p>
        <ul className="text-sm text-gray-500 dark:text-stone-400 space-y-1 text-left">
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> Takes about 2 minutes</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> No account required</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> Personalized visa matches</li>
        </ul>
        <button
          onClick={handleStart}
          className="mt-2 inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm shadow-md transition-colors duration-150"
        >
          Start Quiz <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    )
  }

  // Results screen
  if (step === 9) {
    const freeResults = results.slice(0, 2)
    const gatedResults = results.slice(2)

    return (
      <div className="py-6 px-4 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Your Visa Matches</h2>
          <button
            onClick={handleRestart}
            className="inline-flex items-center gap-1.5 text-sm text-purple-600 dark:text-purple-400 hover:underline font-medium"
          >
            <RotateCcw className="w-4 h-4" /> Start Over
          </button>
        </div>
        <p className="text-gray-500 dark:text-stone-400 text-sm">
          Based on your answers, here are your top visa options ranked by relevance.
        </p>

        {results.length === 0 && (
          <div className="flex flex-col items-center py-12 gap-4 text-center">
            <AlertCircle className="w-10 h-10 text-orange-400" />
            <p className="text-gray-600 dark:text-stone-400 max-w-sm">
              No strong visa matches found based on your profile. Consider adjusting your income or employment status, or consult an immigration attorney.
            </p>
          </div>
        )}

        <div className="space-y-4">
          {freeResults.map((country) => (
            <CountryResultCard key={country.slug} country={country} />
          ))}
        </div>

        {gatedResults.length > 0 && (
          <PlusGate feature="Additional visa match countries" fallbackHeight="280px">
            <div className="space-y-4">
              {gatedResults.map((country) => (
                <CountryResultCard key={country.slug} country={country} />
              ))}
            </div>
          </PlusGate>
        )}
      </div>
    )
  }

  // Question screen
  return (
    <div className="py-6 px-4 space-y-6">
      {/* Progress bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-gray-500 dark:text-stone-400">
          <span>Question {step} of 8</span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <div className="w-full h-2 bg-stone-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-purple-500 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{currentQuestion?.text}</h2>

      {/* Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {currentQuestion?.options.map((option) => {
          const isSelected = selectedOption === option
          return (
            <button
              key={option}
              onClick={() => handleOptionSelect(option)}
              className={`text-left px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all duration-150 ${
                isSelected
                  ? 'border-teal-500 bg-teal-50 dark:bg-teal-900/30 dark:border-teal-400 text-teal-700 dark:text-teal-300'
                  : 'border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-700 dark:text-stone-300 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-stone-50 dark:hover:bg-gray-750'
              }`}
            >
              {option}
            </button>
          )
        })}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-2">
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-1.5 text-sm text-gray-600 dark:text-stone-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Back
        </button>
        <button
          onClick={handleNext}
          disabled={!selectedOption}
          className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold text-sm shadow-sm transition-colors duration-150"
        >
          {step === 8 ? 'See Results' : 'Next'} <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

function CountryResultCard({ country }: { country: CountryResult }) {
  return (
    <div className="rounded-xl border border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-5 space-y-4 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="text-3xl leading-none">{country.flag}</span>
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{country.name}</h3>
          <p className="text-xs text-gray-500 dark:text-stone-400">{country.visaMatches.length} visa option{country.visaMatches.length !== 1 ? 's' : ''} matched</p>
        </div>
      </div>
      <div className="space-y-3">
        {country.visaMatches.map((visa) => (
          <div key={visa.visaName} className="rounded-lg bg-stone-50 dark:bg-gray-750 dark:bg-gray-900/40 p-4 space-y-2 border border-gray-100 dark:border-slate-700/50">
            <div className="flex items-start justify-between gap-2 flex-wrap">
              <span className="font-semibold text-sm text-gray-900 dark:text-gray-100">{visa.visaName}</span>
              <DifficultyBadge level={visa.difficulty} />
            </div>
            <ScoreBar score={visa.score} />
            <p className="text-xs text-gray-600 dark:text-stone-400">{visa.matchReason}</p>
            <div className="flex items-start gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-teal-500 shrink-0 mt-0.5" />
              <p className="text-xs text-gray-500 dark:text-stone-400">{visa.keyRequirement}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Budget Calculator Component ──────────────────────────────────────────────

interface BudgetResult {
  oneTime: {
    visaFee: number
    flight: number
    deposit: number
    shipping: number
    emergencyFund: number
    total: number
  }
  monthly: {
    rent: number
    groceries: number
    dining: number
    transport: number
    utilities: number
    internet: number
    healthInsurance: number
    entertainment: number
    total: number
  }
  sixMonthTotal: number
  monthlySalary: number
  affordabilityRatio: number
  usSavings: number
}

// Rough US monthly baseline for comparison
const US_MONTHLY_BASELINE = 3800

function computeBudget(
  salary: number,
  country: CountrySlug,
  familySize: string,
  preference: string,
): BudgetResult {
  const base = budgetBase[country]
  const fm = familySizeMultiplier[familySize] ?? 1
  const pm = preferenceMultiplier[preference] ?? 1

  const m = (val: number) => Math.round(val * fm * pm)
  const o = (val: number) => Math.round(val * fm * pm)

  const oneTimeTotal =
    o(base.visaFee) +
    o(base.flight) +
    o(base.deposit) +
    o(base.shipping) +
    o(base.emergencyFund)

  const monthlyTotal =
    m(base.rent) +
    m(base.groceries) +
    m(base.dining) +
    m(base.transport) +
    m(base.utilities) +
    m(base.internet) +
    m(base.healthInsurance) +
    m(base.entertainment)

  const sixMonthTotal = oneTimeTotal + monthlyTotal * 6

  const affordabilityRatio = salary > 0 ? monthlyTotal / salary : 0

  const usMonthlyCost = Math.round(US_MONTHLY_BASELINE * fm * pm)
  const usSavings = usMonthlyCost - monthlyTotal

  return {
    oneTime: {
      visaFee: o(base.visaFee),
      flight: o(base.flight),
      deposit: o(base.deposit),
      shipping: o(base.shipping),
      emergencyFund: o(base.emergencyFund),
      total: oneTimeTotal,
    },
    monthly: {
      rent: m(base.rent),
      groceries: m(base.groceries),
      dining: m(base.dining),
      transport: m(base.transport),
      utilities: m(base.utilities),
      internet: m(base.internet),
      healthInsurance: m(base.healthInsurance),
      entertainment: m(base.entertainment),
      total: monthlyTotal,
    },
    sixMonthTotal,
    monthlySalary: salary,
    affordabilityRatio,
    usSavings,
  }
}

function fmt(n: number) {
  return `$${n.toLocaleString()}`
}

function AffordabilityIndicator({ ratio }: { ratio: number }) {
  const pct = Math.round(ratio * 100)
  if (ratio < 0.4) {
    return (
      <div className="flex items-center gap-2 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 shrink-0" />
        <div>
          <p className="text-sm font-semibold text-green-800 dark:text-green-300">Easily Affordable</p>
          <p className="text-xs text-green-700 dark:text-green-400">Monthly costs are {pct}% of your salary — very comfortable.</p>
        </div>
      </div>
    )
  }
  if (ratio < 0.6) {
    return (
      <div className="flex items-center gap-2 p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
        <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 shrink-0" />
        <div>
          <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-300">Manageable</p>
          <p className="text-xs text-yellow-700 dark:text-yellow-400">Monthly costs are {pct}% of your salary — leaves limited savings buffer.</p>
        </div>
      </div>
    )
  }
  return (
    <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
      <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0" />
      <div>
        <p className="text-sm font-semibold text-red-800 dark:text-red-300">Tight Budget</p>
        <p className="text-xs text-red-700 dark:text-red-400">Monthly costs are {pct}% of your salary — consider a higher income or lower preference level.</p>
      </div>
    </div>
  )
}

function MiniBar({ label, value, max }: { label: string; value: number; max: number }) {
  const pct = max > 0 ? Math.min(100, (value / max) * 100) : 0
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-gray-500 dark:text-stone-400 w-28 shrink-0 truncate">{label}</span>
      <div className="flex-1 h-2 bg-stone-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div className="h-full bg-purple-500 rounded-full" style={{ width: `${pct}%` }} />
      </div>
      <span className="text-xs font-medium text-gray-700 dark:text-stone-300 w-16 text-right shrink-0">{fmt(value)}</span>
    </div>
  )
}

function BudgetCalculator() {
  const [salary, setSalary] = useState('')
  const [country, setCountry] = useState<CountrySlug>('portugal')
  const [familySize, setFamilySize] = useState('1')
  const [preference, setPreference] = useState('Moderate')
  const [result, setResult] = useState<BudgetResult | null>(null)

  // Find country data from countries array for any additional context
  const _countryData = countries.find((c) => c.slug === country); void _countryData

  function handleCalculate() {
    const salaryNum = parseFloat(salary.replace(/,/g, ''))
    if (!isNaN(salaryNum) && salaryNum >= 0) {
      setResult(computeBudget(salaryNum, country, familySize, preference))
    }
  }

  function handleRecalculate() {
    setResult(null)
  }

  const maxMonthlyItem = result
    ? Math.max(
        result.monthly.rent,
        result.monthly.groceries,
        result.monthly.dining,
        result.monthly.transport,
        result.monthly.utilities,
        result.monthly.internet,
        result.monthly.healthInsurance,
        result.monthly.entertainment,
      )
    : 1

  return (
    <div className="py-6 px-4 space-y-6">
      {/* Form */}
      {!result && (
        <div className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Monthly Salary */}
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-gray-700 dark:text-stone-300">
                Monthly Salary (USD)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-slate-500">
                  <DollarSign className="w-4 h-4" />
                </span>
                <input
                  type="number"
                  min="0"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  placeholder="e.g. 5000"
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder:text-gray-400 dark:placeholder:text-gray-500"
                />
              </div>
            </div>

            {/* Target Country */}
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-gray-700 dark:text-stone-300">
                Target Country
              </label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value as CountrySlug)}
                className="w-full px-3 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {(Object.keys(countryLabels) as CountrySlug[]).map((slug) => (
                  <option key={slug} value={slug}>
                    {countryFlags[slug]} {countryLabels[slug]}
                  </option>
                ))}
              </select>
            </div>

            {/* Family Size */}
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-gray-700 dark:text-stone-300">
                Family Size
              </label>
              <div className="grid grid-cols-4 gap-2">
                {['1', '2', '3', '4+'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setFamilySize(size)}
                    className={`py-2.5 rounded-xl border-2 text-sm font-medium transition-all duration-150 ${
                      familySize === size
                        ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/30 dark:border-purple-400 text-purple-700 dark:text-purple-300'
                        : 'border-stone-200 dark:border-slate-700 text-gray-700 dark:text-stone-300 hover:border-gray-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Moving Preference */}
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-gray-700 dark:text-stone-300">
                Lifestyle Preference
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Budget', 'Moderate', 'Comfortable'].map((pref) => (
                  <button
                    key={pref}
                    onClick={() => setPreference(pref)}
                    className={`py-2.5 rounded-xl border-2 text-xs font-medium transition-all duration-150 ${
                      preference === pref
                        ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/30 dark:border-purple-400 text-purple-700 dark:text-purple-300'
                        : 'border-stone-200 dark:border-slate-700 text-gray-700 dark:text-stone-300 hover:border-gray-300'
                    }`}
                  >
                    {pref}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={handleCalculate}
            disabled={!salary || parseFloat(salary) <= 0}
            className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold text-sm shadow-md transition-colors duration-150 flex items-center justify-center gap-2"
          >
            <Calculator className="w-4 h-4" /> Calculate Budget
          </button>
        </div>
      )}

      {/* Results */}
      {result && (
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {countryFlags[country]} {countryLabels[country]} Budget Estimate
              </h3>
              <p className="text-xs text-gray-500 dark:text-stone-400 mt-0.5">
                Family of {familySize} · {preference} lifestyle
              </p>
            </div>
            <button
              onClick={handleRecalculate}
              className="inline-flex items-center gap-1.5 text-sm text-purple-600 dark:text-purple-400 hover:underline font-medium"
            >
              <RotateCcw className="w-4 h-4" /> Recalculate
            </button>
          </div>

          {/* Free Summary Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 space-y-1 shadow-sm">
              <p className="text-xs font-medium text-gray-500 dark:text-stone-400 uppercase tracking-wide">Monthly Cost</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{fmt(result.monthly.total)}</p>
            </div>
            <div className="rounded-xl border border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 space-y-1 shadow-sm">
              <p className="text-xs font-medium text-gray-500 dark:text-stone-400 uppercase tracking-wide">One-Time Costs</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{fmt(result.oneTime.total)}</p>
            </div>
            <div className="rounded-xl border border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 space-y-1 shadow-sm">
              <p className="text-xs font-medium text-gray-500 dark:text-stone-400 uppercase tracking-wide">6-Month Budget</p>
              <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{fmt(result.sixMonthTotal)}</p>
            </div>
          </div>

          <AffordabilityIndicator ratio={result.affordabilityRatio} />

          {result.usSavings > 0 && (
            <div className="flex items-center gap-3 p-3 rounded-lg bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800">
              <TrendingDown className="w-5 h-5 text-teal-500 shrink-0" />
              <p className="text-sm text-teal-800 dark:text-teal-300">
                Estimated <strong>{fmt(result.usSavings)}/month</strong> savings compared to a similar US lifestyle.
              </p>
            </div>
          )}
          {result.usSavings < 0 && (
            <div className="flex items-center gap-3 p-3 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800">
              <AlertCircle className="w-5 h-5 text-orange-500 shrink-0" />
              <p className="text-sm text-orange-800 dark:text-orange-300">
                This destination + preference level costs <strong>{fmt(Math.abs(result.usSavings))}/month more</strong> than the US baseline — consider a budget lifestyle setting.
              </p>
            </div>
          )}

          {/* Flight savings tip */}
          <div className="rounded-xl border border-sky-200 dark:border-sky-800/60 bg-sky-50/70 dark:bg-sky-900/20 p-4 flex items-start gap-3">
            <Plane className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="text-sm font-semibold text-gray-900 dark:text-stone-100">
                Want to save on flights?
              </p>
              <p className="text-xs text-gray-600 dark:text-stone-400 leading-relaxed">
                <a
                  href={partners.repriced.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-sky-700 dark:text-sky-300 hover:underline"
                >
                  Repriced
                </a>{' '}
                monitors your booking for price drops and automatically gets you cash back. Free to use — they only take a cut of the savings they find.
              </p>
              <div className="flex items-center gap-3 pt-0.5">
                <a
                  href={partners.repriced.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 dark:text-sky-300 hover:text-sky-800 dark:hover:text-sky-200 transition-colors"
                >
                  Save on your flight <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-xs text-gray-400 dark:text-slate-500 font-medium">Partner link</span>
              </div>
            </div>
          </div>

          {/* eSIM data tip */}
          <div className="rounded-xl border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/70 dark:bg-emerald-900/20 p-4 flex items-start gap-3">
            <Wifi className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="text-sm font-semibold text-gray-900 dark:text-stone-100">
                Need data abroad?
              </p>
              <p className="text-xs text-gray-600 dark:text-stone-400 leading-relaxed">
                <a
                  href={partners.airalo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-emerald-700 dark:text-emerald-300 hover:underline"
                >
                  Airalo
                </a>{' '}
                eSIMs start at $5 — way cheaper than roaming. Buy before you fly and get instant data on arrival.
              </p>
              <div className="flex items-center gap-3 pt-0.5">
                <a
                  href={partners.airalo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300 hover:text-emerald-800 dark:hover:text-emerald-200 transition-colors"
                >
                  Get an eSIM <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-xs text-gray-400 dark:text-slate-500 font-medium">Partner link</span>
              </div>
            </div>
          </div>

          {/* Detailed Breakdown — gated */}
          <PlusGate feature="Full budget breakdown" fallbackHeight="420px">
            <div className="space-y-6">
              {/* Monthly Chart */}
              <div className="rounded-xl border border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5 shadow-sm space-y-4">
                <h4 className="font-bold text-gray-900 dark:text-gray-100 text-sm">Monthly Costs Breakdown</h4>
                <div className="space-y-2.5">
                  <MiniBar label="Rent" value={result.monthly.rent} max={maxMonthlyItem} />
                  <MiniBar label="Groceries" value={result.monthly.groceries} max={maxMonthlyItem} />
                  <MiniBar label="Dining Out" value={result.monthly.dining} max={maxMonthlyItem} />
                  <MiniBar label="Transportation" value={result.monthly.transport} max={maxMonthlyItem} />
                  <MiniBar label="Utilities" value={result.monthly.utilities} max={maxMonthlyItem} />
                  <MiniBar label="Internet" value={result.monthly.internet} max={maxMonthlyItem} />
                  <MiniBar label="Health Insurance" value={result.monthly.healthInsurance} max={maxMonthlyItem} />
                  <MiniBar label="Entertainment" value={result.monthly.entertainment} max={maxMonthlyItem} />
                </div>
                <div className="border-t border-stone-200 dark:border-slate-700 pt-3 flex justify-between">
                  <span className="text-sm font-bold text-gray-900 dark:text-gray-100">Monthly Total</span>
                  <span className="text-sm font-bold text-purple-600 dark:text-purple-400">{fmt(result.monthly.total)}</span>
                </div>
              </div>

              {/* One-Time Costs */}
              <div className="rounded-xl border border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5 shadow-sm space-y-3">
                <h4 className="font-bold text-gray-900 dark:text-gray-100 text-sm">One-Time Moving Costs</h4>
                <div className="space-y-2">
                  {[
                    ['Visa Application Fees', result.oneTime.visaFee],
                    ['Flights', result.oneTime.flight],
                    ['Initial Housing Deposit', result.oneTime.deposit],
                    ['Shipping / Moving', result.oneTime.shipping],
                    ['Emergency Fund', result.oneTime.emergencyFund],
                  ].map(([label, value]) => (
                    <div key={label as string} className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-stone-400">{label as string}</span>
                      <span className="font-medium text-gray-900 dark:text-gray-100">{fmt(value as number)}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-stone-200 dark:border-slate-700 pt-3 flex justify-between">
                  <span className="text-sm font-bold text-gray-900 dark:text-gray-100">One-Time Total</span>
                  <span className="text-sm font-bold text-purple-600 dark:text-purple-400">{fmt(result.oneTime.total)}</span>
                </div>
              </div>

              {/* 6-Month Summary */}
              <div className="rounded-xl bg-[#0F766E] p-5 text-white space-y-3 shadow-md">
                <h4 className="font-bold text-sm opacity-90">Total 6-Month Budget</h4>
                <p className="text-4xl font-extrabold">{fmt(result.sixMonthTotal)}</p>
                <p className="text-sm opacity-80">
                  = {fmt(result.oneTime.total)} one-time + ({fmt(result.monthly.total)} × 6 months)
                </p>
              </div>
            </div>
          </PlusGate>
        </div>
      )}
    </div>
  )
}

// ─── Main ToolsPage Component ─────────────────────────────────────────────────

export default function ToolsPage() {
  const [activeTab, setActiveTab] = useState<Tab>('quiz')

  return (
    <div className="min-h-screen bg-[#FFFBEB] dark:bg-[#0C1222]">
      {/* Header Banner */}
      <div className="bg-white dark:bg-[#0C1222] py-20 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif text-slate-900 dark:text-white tracking-tight">
            Relocation Tools
          </h1>
          <p className="text-slate-500 dark:text-stone-400 text-lg md:text-xl max-w-xl mx-auto">
            Free tools to help plan your move abroad
          </p>

          {/* Premium Tools */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
            <Link
              to="/tools/relocation-plan"
              className="group relative rounded-xl border-2 border-teal-500/30 dark:border-teal-500/20 bg-white dark:bg-slate-800/50 p-5 shadow-sm hover:shadow-md hover:border-teal-500 transition-all duration-200"
            >
              <span className="absolute -top-2.5 right-4 inline-flex items-center gap-1 rounded-full bg-[#0F766E] px-2.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wide">
                <Star className="w-3 h-3" /> Plus
              </span>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">Personalized Relocation Plan</h3>
                  <p className="text-xs text-slate-500 dark:text-stone-400 mt-1">10-step wizard with top 3 country matches, cost estimates, and week-by-week timeline.</p>
                  <span className="inline-flex items-center gap-1 text-xs text-teal-600 dark:text-teal-400 font-semibold mt-2 group-hover:gap-2 transition-all">
                    Get Started <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>

            <Link
              to="/tools/checklist"
              className="group relative rounded-xl border-2 border-teal-500/30 dark:border-teal-500/20 bg-white dark:bg-slate-800/50 p-5 shadow-sm hover:shadow-md hover:border-teal-500 transition-all duration-200"
            >
              <span className="absolute -top-2.5 right-4 inline-flex items-center gap-1 rounded-full bg-[#0F766E] px-2.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wide">
                <Star className="w-3 h-3" /> Plus
              </span>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center shrink-0">
                  <FileCheck className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">Document Checklist</h3>
                  <p className="text-xs text-slate-500 dark:text-stone-400 mt-1">Interactive visa document checklist with costs, timelines, dependencies, and progress tracking.</p>
                  <span className="inline-flex items-center gap-1 text-xs text-teal-600 dark:text-teal-400 font-semibold mt-2 group-hover:gap-2 transition-all">
                    Get Started <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-slate-400 dark:text-slate-500 mb-4 uppercase tracking-wider font-medium">Free Tools</p>
          </div>

          {/* Tab Switcher */}
          <div className="inline-flex bg-stone-100 dark:bg-slate-800 rounded-xl p-1 gap-1">
            <button
              onClick={() => setActiveTab('quiz')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === 'quiz'
                  ? 'bg-white dark:bg-slate-700 text-teal-700 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-stone-400 hover:text-slate-900 dark:hover:text-white hover:bg-stone-50 dark:hover:bg-slate-700/50'
              }`}
            >
              <ClipboardList className="w-4 h-4" />
              Visa Eligibility Quiz
            </button>
            <button
              onClick={() => setActiveTab('calculator')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === 'calculator'
                  ? 'bg-white dark:bg-slate-700 text-teal-700 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-stone-400 hover:text-slate-900 dark:hover:text-white hover:bg-stone-50 dark:hover:bg-slate-700/50'
              }`}
            >
              <Calculator className="w-4 h-4" />
              Budget Calculator
            </button>
          </div>
        </div>
      </div>

      {/* Tool Panel */}
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="rounded-2xl border border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 shadow-sm overflow-hidden min-h-[400px]">
          {activeTab === 'quiz' ? <VisaQuiz /> : <BudgetCalculator />}
        </div>

        {/* Disclaimer */}
        <p className="mt-6 text-center text-xs text-gray-400 dark:text-slate-500 leading-relaxed max-w-xl mx-auto">
          These tools provide general estimates for planning purposes only. Immigration rules and cost of living change frequently. Always consult an immigration attorney and verify current requirements before making decisions.
        </p>
      </div>
    </div>
  )
}
