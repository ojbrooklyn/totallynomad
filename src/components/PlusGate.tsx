import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Lock } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

interface PlusGateProps {
  children: ReactNode
  fallbackHeight?: string
  feature?: string
}

export default function PlusGate({
  children,
  fallbackHeight = '300px',
  feature,
}: PlusGateProps) {
  const { isPlusUser } = useAuth()

  if (isPlusUser) {
    return <>{children}</>
  }

  return (
    <div className="relative overflow-hidden rounded-xl" style={{ minHeight: fallbackHeight }}>
      {/* Blurred children preview */}
      <div
        className="filter blur-sm pointer-events-none select-none"
        aria-hidden="true"
      >
        {children}
      </div>

      {/* Gradient + lock overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-white/60 via-white/80 to-white/95 dark:from-[#0C1222]/60 dark:via-[#0C1222]/80 dark:to-[#0C1222]/95 backdrop-blur-[2px]">
        <div className="flex flex-col items-center gap-4 px-6 py-8 text-center max-w-sm">
          {/* Lock icon */}
          <div className="w-14 h-14 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
            <Lock className="w-7 h-7 text-primary-600 dark:text-primary-400" aria-hidden="true" />
          </div>

          {/* Heading */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Upgrade to Plus
          </h3>

          {/* Feature description */}
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            {feature
              ? `${feature} is available exclusively for TotallyNomad Plus members.`
              : 'This feature is available exclusively for TotallyNomad Plus members.'}
            {' '}Unlock full access along with all premium tools and data.
          </p>

          {/* CTA */}
          <Link
            to="/pricing"
            className="mt-1 inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700 active:bg-primary-800 transition-colors duration-150 shadow-sm"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </div>
  )
}
