import { useState, useEffect, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  CheckCircle2,
  Circle,
  AlertTriangle,
  Clock,
  DollarSign,
  ExternalLink,
  Printer,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Info,
  MapPin,
} from 'lucide-react'
import PlusGate from '../components/PlusGate'
import {
  countryVisaOptions,
  getChecklistForCountryVisa,
  type ChecklistItem,
} from '../lib/data/checklists'

// ─── Helpers ──────────────────────────────────────────────────────────────────

const countryFlags: Record<string, string> = {
  Portugal: '\u{1F1F5}\u{1F1F9}',
  Mexico: '\u{1F1F2}\u{1F1FD}',
  Spain: '\u{1F1EA}\u{1F1F8}',
  Thailand: '\u{1F1F9}\u{1F1ED}',
  'Costa Rica': '\u{1F1E8}\u{1F1F7}',
}

function parseCostLowerBound(cost: string): number {
  const matches = cost.match(/\$[\d,]+/g)
  if (!matches || matches.length === 0) return 0
  const first = matches[0].replace(/[$,]/g, '')
  return parseInt(first, 10) || 0
}

function parseWeeks(time: string): number {
  // Try to find week values first
  const weekMatch = time.match(/(\d+)\s*[-–]\s*(\d+)\s*week/i)
  if (weekMatch) return parseInt(weekMatch[1], 10)

  const singleWeekMatch = time.match(/(\d+)\s*week/i)
  if (singleWeekMatch) return parseInt(singleWeekMatch[1], 10)

  // Try months
  const monthMatch = time.match(/(\d+)\s*[-–]\s*(\d+)\s*month/i)
  if (monthMatch) return parseInt(monthMatch[1], 10) * 4

  const singleMonthMatch = time.match(/(\d+)\s*month/i)
  if (singleMonthMatch) return parseInt(singleMonthMatch[1], 10) * 4

  // Try days
  const dayMatch = time.match(/(\d+)\s*[-–]\s*(\d+)\s*day/i)
  if (dayMatch) return Math.ceil(parseInt(dayMatch[1], 10) / 7)

  const singleDayMatch = time.match(/(\d+)\s*day/i)
  if (singleDayMatch) return Math.ceil(parseInt(singleDayMatch[1], 10) / 7)

  // "Same day" or similar
  if (/same\s*day/i.test(time)) return 0

  return 1
}

function storageKey(country: string, visa: string): string {
  return `checklist-${country}-${visa}`
}

type ItemStatus = 'not-started' | 'in-progress' | 'complete'

// ─── Component ────────────────────────────────────────────────────────────────

export default function ChecklistPage() {
  const [searchParams] = useSearchParams()
  const [selectedCountry, setSelectedCountry] = useState(
    searchParams.get('country') || ''
  )
  const [selectedVisa, setSelectedVisa] = useState(
    searchParams.get('visa') || ''
  )
  const [showChecklist, setShowChecklist] = useState(false)
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>(
    {}
  )
  const [itemStatuses, setItemStatuses] = useState<Record<string, ItemStatus>>(
    {}
  )
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {}
  )

  // ─── Derived data ───────────────────────────────────────────────────────────

  const visaOptions = selectedCountry
    ? countryVisaOptions[selectedCountry] || []
    : []

  const checklist = useMemo(
    () =>
      selectedCountry && selectedVisa
        ? getChecklistForCountryVisa(selectedCountry, selectedVisa)
        : undefined,
    [selectedCountry, selectedVisa]
  )

  const sortedItems = useMemo(
    () =>
      checklist
        ? [...checklist.items].sort((a, b) => a.sequence - b.sequence)
        : [],
    [checklist]
  )

  const completedCount = useMemo(
    () => sortedItems.filter((i) => itemStatuses[i.id] === 'complete').length,
    [sortedItems, itemStatuses]
  )

  const progressPercent = sortedItems.length
    ? Math.round((completedCount / sortedItems.length) * 100)
    : 0

  const totalCost = useMemo(
    () => sortedItems.reduce((sum, i) => sum + parseCostLowerBound(i.estimatedCost), 0),
    [sortedItems]
  )

  // Build a dependency-aware longest remaining chain (in weeks)
  const estimatedRemainingWeeks = useMemo(() => {
    if (!sortedItems.length) return 0

    const incompleteIds = new Set(
      sortedItems
        .filter((i) => itemStatuses[i.id] !== 'complete')
        .map((i) => i.id)
    )

    if (incompleteIds.size === 0) return 0

    const itemMap = new Map(sortedItems.map((i) => [i.id, i]))

    // Memoised DFS to find the longest chain from each node
    const memo = new Map<string, number>()

    function longestChain(id: string): number {
      if (memo.has(id)) return memo.get(id)!
      const item = itemMap.get(id)
      if (!item || !incompleteIds.has(id)) {
        memo.set(id, 0)
        return 0
      }

      const myWeeks = parseWeeks(item.estimatedTime)

      // Find items that depend on this item (downstream)
      const downstream = sortedItems.filter(
        (i) => i.dependsOn.includes(id) && incompleteIds.has(i.id)
      )

      let maxDownstream = 0
      for (const d of downstream) {
        maxDownstream = Math.max(maxDownstream, longestChain(d.id))
      }

      const total = myWeeks + maxDownstream
      memo.set(id, total)
      return total
    }

    // Find the root nodes (items with no incomplete dependencies)
    const roots = sortedItems.filter(
      (i) =>
        incompleteIds.has(i.id) &&
        i.dependsOn.every((dep) => !incompleteIds.has(dep))
    )

    let longest = 0
    for (const r of roots) {
      longest = Math.max(longest, longestChain(r.id))
    }

    return longest
  }, [sortedItems, itemStatuses])

  const estimatedCompletionDate = useMemo(() => {
    if (estimatedRemainingWeeks <= 0) return null
    const d = new Date()
    d.setDate(d.getDate() + estimatedRemainingWeeks * 7)
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }, [estimatedRemainingWeeks])

  // ─── Persistence ────────────────────────────────────────────────────────────

  // Load from localStorage when checklist is shown
  useEffect(() => {
    if (!showChecklist || !selectedCountry || !selectedVisa) return
    try {
      const raw = localStorage.getItem(
        storageKey(selectedCountry, selectedVisa)
      )
      if (raw) {
        const data = JSON.parse(raw)
        if (data.completedItems) setCompletedItems(data.completedItems)
        if (data.itemStatuses) setItemStatuses(data.itemStatuses)
      }
    } catch {
      // ignore parse errors
    }
  }, [showChecklist, selectedCountry, selectedVisa])

  // Save to localStorage on changes
  useEffect(() => {
    if (!showChecklist || !selectedCountry || !selectedVisa) return
    if (
      Object.keys(completedItems).length === 0 &&
      Object.keys(itemStatuses).length === 0
    )
      return
    try {
      localStorage.setItem(
        storageKey(selectedCountry, selectedVisa),
        JSON.stringify({ completedItems, itemStatuses })
      )
    } catch {
      // ignore quota errors
    }
  }, [completedItems, itemStatuses, showChecklist, selectedCountry, selectedVisa])

  // Set first 3 items expanded by default when checklist loads
  useEffect(() => {
    if (showChecklist && sortedItems.length > 0) {
      const initial: Record<string, boolean> = {}
      sortedItems.slice(0, 3).forEach((item) => {
        initial[item.id] = true
      })
      setExpandedItems(initial)
    }
  }, [showChecklist, sortedItems])

  // ─── Handlers ───────────────────────────────────────────────────────────────

  function cycleStatus(id: string) {
    setItemStatuses((prev) => {
      const current = prev[id] || 'not-started'
      let next: ItemStatus
      if (current === 'not-started') next = 'in-progress'
      else if (current === 'in-progress') next = 'complete'
      else next = 'not-started'

      const updated = { ...prev, [id]: next }

      // Also update completedItems for dependency checks
      setCompletedItems((cp) => ({
        ...cp,
        [id]: next === 'complete',
      }))

      return updated
    })
  }

  function toggleExpand(id: string) {
    setExpandedItems((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  function handleGenerate() {
    if (!selectedCountry || !selectedVisa) return
    // Try loading saved data
    try {
      const raw = localStorage.getItem(
        storageKey(selectedCountry, selectedVisa)
      )
      if (raw) {
        const data = JSON.parse(raw)
        if (data.completedItems) setCompletedItems(data.completedItems)
        if (data.itemStatuses) setItemStatuses(data.itemStatuses)
      }
    } catch {
      // ignore
    }
    setShowChecklist(true)
  }

  function getUnmetDependencies(item: ChecklistItem): ChecklistItem[] {
    if (!item.dependsOn.length) return []
    return item.dependsOn
      .map((depId) => sortedItems.find((i) => i.id === depId))
      .filter(
        (dep): dep is ChecklistItem =>
          !!dep && itemStatuses[dep.id] !== 'complete'
      )
  }

  // ─── Status indicator component ────────────────────────────────────────────

  function StatusIcon({ id }: { id: string }) {
    const status = itemStatuses[id] || 'not-started'
    if (status === 'complete') {
      return (
        <CheckCircle2 className="w-6 h-6 text-green-500 dark:text-green-400 shrink-0" />
      )
    }
    if (status === 'in-progress') {
      return (
        <Clock className="w-6 h-6 text-amber-500 dark:text-amber-400 shrink-0" />
      )
    }
    return (
      <Circle className="w-6 h-6 text-stone-300 dark:text-slate-600 shrink-0" />
    )
  }

  function StatusBadge({ id }: { id: string }) {
    const status = itemStatuses[id] || 'not-started'
    const config = {
      'not-started': {
        label: 'Not Started',
        classes:
          'bg-stone-100 text-stone-600 dark:bg-slate-700 dark:text-slate-300',
      },
      'in-progress': {
        label: 'In Progress',
        classes:
          'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
      },
      complete: {
        label: 'Complete',
        classes:
          'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
      },
    }
    const { label, classes } = config[status]
    return (
      <span
        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${classes}`}
      >
        {label}
      </span>
    )
  }

  // ─── Render ─────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-[#FFFBEB] dark:bg-[#0C1222] transition-colors print:bg-white">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* ─── Header ─────────────────────────────────────────────────────── */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-white sm:text-4xl">
            Document Checklist Builder
          </h1>
          <p className="mt-3 text-lg text-stone-600 dark:text-slate-400">
            Generate a step-by-step document checklist for your visa
            application. Track progress, see estimated costs and timelines, and
            never miss a requirement.
          </p>
        </div>

        {/* ─── Selection Form ─────────────────────────────────────────────── */}
        {!showChecklist && (
          <div className="mx-auto max-w-lg space-y-6 rounded-xl border border-stone-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800/50 sm:p-8">
            {/* Country */}
            <div>
              <label
                htmlFor="country-select"
                className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-slate-300"
              >
                <MapPin className="mb-0.5 mr-1 inline-block h-4 w-4" />
                Select Country
              </label>
              <select
                id="country-select"
                value={selectedCountry}
                onChange={(e) => {
                  setSelectedCountry(e.target.value)
                  setSelectedVisa('')
                }}
                className="w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-stone-900 shadow-sm focus:border-[#0F766E] focus:outline-none focus:ring-2 focus:ring-[#0F766E]/30 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
              >
                <option value="">-- Choose a country --</option>
                {Object.keys(countryVisaOptions).map((c) => (
                  <option key={c} value={c}>
                    {countryFlags[c] || ''} {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Visa type */}
            <div>
              <label
                htmlFor="visa-select"
                className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-slate-300"
              >
                Select Visa Type
              </label>
              <select
                id="visa-select"
                value={selectedVisa}
                onChange={(e) => setSelectedVisa(e.target.value)}
                disabled={!selectedCountry}
                className="w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-stone-900 shadow-sm focus:border-[#0F766E] focus:outline-none focus:ring-2 focus:ring-[#0F766E]/30 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
              >
                <option value="">
                  {selectedCountry
                    ? '-- Choose a visa type --'
                    : '-- Select a country first --'}
                </option>
                {visaOptions.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </div>

            {/* Generate button */}
            <button
              onClick={handleGenerate}
              disabled={!selectedCountry || !selectedVisa}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0F766E] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0d6d66] active:bg-[#0b5f59] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Generate My Checklist
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* ─── Checklist ──────────────────────────────────────────────────── */}
        {showChecklist && checklist && (
          <PlusGate feature="Interactive Document Checklist">
            <div className="space-y-8">
              {/* ── Progress header ──────────────────────────────────────── */}
              <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800/50">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-bold text-stone-900 dark:text-white">
                      {checklist.countryFlag} {checklist.country} &mdash;{' '}
                      {checklist.visaType}
                    </h2>
                    <p className="mt-1 text-sm text-stone-500 dark:text-slate-400">
                      {checklist.visaDescription}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setShowChecklist(false)
                      setCompletedItems({})
                      setItemStatuses({})
                    }}
                    className="text-sm font-medium text-[#0F766E] hover:underline dark:text-teal-400"
                  >
                    Change Selection
                  </button>
                </div>

                {/* Progress bar */}
                <div className="mb-2 flex items-center justify-between text-sm text-stone-600 dark:text-slate-400">
                  <span>
                    {completedCount} of {sortedItems.length} items complete (
                    {progressPercent}%)
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign className="h-3.5 w-3.5" />
                    Est. total: ${totalCost.toLocaleString()}+
                  </span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-stone-200 dark:bg-slate-700">
                  <div
                    className="h-full rounded-full bg-[#0F766E] transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>

                {/* Timeline estimate */}
                {estimatedCompletionDate && (
                  <p className="mt-3 flex items-center gap-1.5 text-sm text-stone-500 dark:text-slate-400">
                    <Clock className="h-3.5 w-3.5" />
                    Estimated completion: {estimatedCompletionDate} (
                    {estimatedRemainingWeeks} weeks remaining)
                  </p>
                )}
                {completedCount === sortedItems.length &&
                  sortedItems.length > 0 && (
                    <p className="mt-3 flex items-center gap-1.5 text-sm font-medium text-green-600 dark:text-green-400">
                      <CheckCircle2 className="h-4 w-4" />
                      All items complete! You are ready to submit your
                      application.
                    </p>
                  )}
              </div>

              {/* ── Checklist items ──────────────────────────────────────── */}
              <div className="space-y-4 print:space-y-2">
                {sortedItems.map((item) => {
                  const status: ItemStatus =
                    itemStatuses[item.id] || 'not-started'
                  const isExpanded = expandedItems[item.id] || false
                  const unmetDeps = getUnmetDependencies(item)

                  const borderColor =
                    status === 'complete'
                      ? 'border-l-green-500 dark:border-l-green-400'
                      : status === 'in-progress'
                        ? 'border-l-amber-500 dark:border-l-amber-400'
                        : 'border-l-transparent'

                  return (
                    <div
                      key={item.id}
                      className={`rounded-xl border border-stone-200 bg-white shadow-sm transition-all dark:border-slate-700 dark:bg-slate-800/50 border-l-4 ${borderColor} ${
                        status === 'complete'
                          ? 'bg-green-50/30 dark:bg-green-900/5'
                          : ''
                      }`}
                    >
                      {/* Collapsed header */}
                      <div className="flex items-center gap-3 p-4 sm:gap-4 sm:p-5">
                        {/* Status click target */}
                        <button
                          onClick={() => cycleStatus(item.id)}
                          className="shrink-0 rounded-full p-0.5 transition-colors hover:bg-stone-100 dark:hover:bg-slate-700 print:hidden"
                          aria-label={`Mark ${item.title} status`}
                        >
                          <StatusIcon id={item.id} />
                        </button>

                        {/* Sequence badge */}
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-100 text-xs font-semibold text-stone-600 dark:bg-slate-700 dark:text-slate-300">
                          {item.sequence}
                        </span>

                        {/* Title & summary */}
                        <div className="min-w-0 flex-1">
                          <h3
                            className={`font-semibold text-stone-900 dark:text-white ${
                              status === 'complete'
                                ? 'line-through opacity-60'
                                : ''
                            }`}
                          >
                            {item.title}
                          </h3>
                          {!isExpanded && (
                            <div className="mt-0.5 flex flex-wrap items-center gap-3 text-xs text-stone-500 dark:text-slate-400">
                              <span className="flex items-center gap-1">
                                <DollarSign className="h-3 w-3" />
                                {item.estimatedCost}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {item.estimatedTime}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Status badge + expand */}
                        <div className="flex shrink-0 items-center gap-2">
                          <StatusBadge id={item.id} />
                          <button
                            onClick={() => toggleExpand(item.id)}
                            className="rounded-lg p-1 text-stone-400 transition-colors hover:bg-stone-100 dark:text-slate-500 dark:hover:bg-slate-700 print:hidden"
                            aria-label={
                              isExpanded ? 'Collapse details' : 'Expand details'
                            }
                          >
                            {isExpanded ? (
                              <ChevronUp className="h-5 w-5" />
                            ) : (
                              <ChevronDown className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Expanded details */}
                      {isExpanded && (
                        <div className="border-t border-stone-100 px-4 pb-5 pt-4 dark:border-slate-700 sm:px-5">
                          {/* Dependency warning */}
                          {unmetDeps.length > 0 && (
                            <div className="mb-4 flex items-start gap-2 rounded-lg bg-amber-50 p-3 text-sm text-amber-800 dark:bg-amber-900/20 dark:text-amber-300">
                              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                              <span>
                                Complete{' '}
                                {unmetDeps
                                  .map((d) => `"${d.title}"`)
                                  .join(', ')}{' '}
                                first
                              </span>
                            </div>
                          )}

                          {/* Description */}
                          <p className="mb-4 text-sm leading-relaxed text-stone-600 dark:text-slate-300">
                            {item.description}
                          </p>

                          {/* Details grid */}
                          <div className="grid gap-4 sm:grid-cols-2">
                            {/* Where to get it */}
                            <div className="space-y-1">
                              <h4 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-slate-400">
                                <ExternalLink className="h-3.5 w-3.5" />
                                Where to Get It
                              </h4>
                              <p className="text-sm text-stone-600 dark:text-slate-300">
                                {item.whereToGet}
                              </p>
                            </div>

                            {/* Estimated cost */}
                            <div className="space-y-1">
                              <h4 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-slate-400">
                                <DollarSign className="h-3.5 w-3.5" />
                                Estimated Cost
                              </h4>
                              <p className="text-sm text-stone-600 dark:text-slate-300">
                                {item.estimatedCost}
                              </p>
                            </div>

                            {/* Estimated time */}
                            <div className="space-y-1">
                              <h4 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-slate-400">
                                <Clock className="h-3.5 w-3.5" />
                                Estimated Time
                              </h4>
                              <p className="text-sm text-stone-600 dark:text-slate-300">
                                {item.estimatedTime}
                              </p>
                            </div>

                            {/* Tips */}
                            <div className="space-y-1 sm:col-span-2">
                              <h4 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-slate-400">
                                <Info className="h-3.5 w-3.5" />
                                Tips
                              </h4>
                              <div className="rounded-lg bg-teal-50 p-3 text-sm text-teal-800 dark:bg-teal-900/20 dark:text-teal-300">
                                {item.tips}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* ── Timeline estimate ────────────────────────────────────── */}
              {estimatedCompletionDate && (
                <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800/50">
                  <p className="flex items-center gap-2 text-sm text-stone-600 dark:text-slate-300">
                    <Clock className="h-4 w-4 text-[#0F766E] dark:text-teal-400" />
                    Based on your progress, estimated completion:{' '}
                    <strong className="text-stone-900 dark:text-white">
                      {estimatedCompletionDate}
                    </strong>
                  </p>
                </div>
              )}

              {/* ── Bottom section ───────────────────────────────────────── */}
              <div className="flex flex-col gap-4 rounded-xl border border-stone-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800/50 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-stone-900 dark:text-white">
                    Total Estimated Cost:{' '}
                    <span className="text-[#0F766E] dark:text-teal-400">
                      ${totalCost.toLocaleString()}+
                    </span>
                  </p>
                  <p className="text-xs text-stone-500 dark:text-slate-400">
                    Based on lower-bound estimates for all checklist items
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    to="/tools/relocation-plan"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
                  >
                    Back to Relocation Plan
                  </Link>
                  <button
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-[#0F766E] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0d6d66] print:hidden"
                  >
                    <Printer className="h-4 w-4" />
                    Print Checklist
                  </button>
                </div>
              </div>
            </div>
          </PlusGate>
        )}
      </div>

      {/* ─── Print styles ──────────────────────────────────────────────────── */}
      <style>{`
        @media print {
          body {
            background: white !important;
            color: black !important;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:bg-white {
            background: white !important;
          }
          .print\\:space-y-2 > * + * {
            margin-top: 0.5rem !important;
          }
        }
      `}</style>
    </div>
  )
}
