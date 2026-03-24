import { useState } from 'react';
import { Check, X, ChevronDown, ChevronUp } from 'lucide-react';

const FREE_FEATURES = [
  'Basic country guides (preview)',
  'Visa quiz (basic results)',
  'Budget calculator (summary)',
  'Community access',
  'Email newsletter',
];

const PLUS_FEATURES = [
  'Everything in Free',
  'Full country guides',
  'Detailed visa analysis',
  'Complete budget breakdowns',
  'Downloadable checklists',
  'Priority email support',
  'Agent matching',
  'Early access to new tools',
];

const COMPARISON_ROWS: { feature: string; free: boolean; plus: boolean }[] = [
  { feature: 'Country guides', free: false, plus: true },
  { feature: 'Visa quiz results', free: false, plus: true },
  { feature: 'Budget calculator', free: true, plus: true },
  { feature: 'Cost of living data', free: false, plus: true },
  { feature: 'Healthcare info', free: false, plus: true },
  { feature: 'Downloadable checklists', free: false, plus: true },
  { feature: 'Community access', free: true, plus: true },
  { feature: 'Email support', free: true, plus: true },
  { feature: 'Priority support', free: false, plus: true },
  { feature: 'Agent matching', free: false, plus: true },
  { feature: 'API access', free: false, plus: false },
  { feature: 'Early access', free: false, plus: true },
];

const FAQS: { question: string; answer: string }[] = [
  {
    question: 'Can I cancel anytime?',
    answer:
      'Yes, you can cancel your Plus subscription at any time with no questions asked. Your access continues until the end of the billing period.',
  },
  {
    question: 'Is there a free trial for Plus?',
    answer:
      'We don\'t offer a free trial, but our Free tier lets you explore the platform and get a feel for the tools before upgrading.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit and debit cards via Stripe. Your payment information is handled securely and never stored on our servers.',
  },
  {
    question: 'Can I switch plans?',
    answer:
      'Yes, you can upgrade or downgrade at any time. Upgrades take effect immediately and are prorated. Downgrades take effect at the next billing cycle.',
  },
  {
    question: 'Do you offer refunds?',
    answer:
      'Yes. If you\'re not satisfied within the first 30 days of your Plus subscription, contact us for a full refund — no hassle.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Absolutely. We run on SOC 2 compliant infrastructure. Your data is encrypted in transit and at rest, and we never sell your personal information.',
  },
  {
    question: 'Do you offer team or family plans?',
    answer:
      'Team and family plans are coming soon! Join the waitlist via your account settings to be notified when they launch.',
  },
  {
    question: 'What if I just need one country guide?',
    answer:
      'Individual guide purchases aren\'t available right now. Plus gives you unlimited access to all country guides, so it\'s the best value if you\'re researching even two or three destinations.',
  },
];

function CheckIcon() {
  return (
    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/40">
      <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
    </span>
  );
}

function XIcon() {
  return (
    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-700">
      <X className="w-3 h-3 text-slate-400 dark:text-slate-500" />
    </span>
  );
}

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(prev => (prev === index ? null : index));
  };

  const monthlyPrice = 8;
  const annualPrice = 89;

  return (
    <div className="min-h-screen bg-[#FFFBEB] dark:bg-[#0C1222] transition-colors duration-200">
      {/* Header Banner */}
      <div className="bg-white dark:bg-[#0C1222] py-20 md:py-24 px-4 text-center">
        <h1 className="text-4xl font-bold font-serif text-slate-900 dark:text-white mb-3">Simple, Honest Pricing</h1>
        <p className="text-slate-500 dark:text-stone-400 text-lg max-w-xl mx-auto">
          No fake urgency. No hidden fees. Just tools that work.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-20 space-y-24">
        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4">
          <span className={`text-sm font-medium ${!annual ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-stone-400'}`}>
            Monthly
          </span>
          <button
            onClick={() => setAnnual(v => !v)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${
              annual ? 'bg-[#0F766E]' : 'bg-slate-300 dark:bg-slate-600'
            }`}
            aria-pressed={annual}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
                annual ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${annual ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-stone-400'}`}>
            Annual
            <span className="ml-1.5 inline-block rounded-full bg-green-100 dark:bg-green-900/50 px-2 py-0.5 text-xs font-semibold text-green-700 dark:text-green-400">
              Save $7/yr
            </span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Free Card */}
          <div className="rounded-2xl border border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-8 shadow-sm transition-colors duration-200">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Free</h2>
            <div className="flex items-end gap-1 mb-1">
              <span className="text-5xl font-extrabold text-slate-900 dark:text-white">$0</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-stone-400 mb-6">Forever</p>

            <ul className="space-y-3 mb-8">
              {FREE_FEATURES.map(f => (
                <li key={f} className="flex items-center gap-3 text-sm text-slate-700 dark:text-stone-300">
                  <CheckIcon />
                  {f}
                </li>
              ))}
            </ul>

            <button className="w-full rounded-lg border-2 border-slate-300 dark:border-slate-600 py-3 text-sm font-semibold text-slate-700 dark:text-stone-300 hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-150">
              Get Started Free
            </button>
          </div>

          {/* Plus Card */}
          <div className="rounded-2xl border-2 border-teal-500 bg-white dark:bg-slate-800/50 p-8 shadow-lg relative transition-colors duration-200">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#0F766E] px-4 py-1 text-xs font-bold text-white shadow">
              Most Popular
            </span>

            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Plus</h2>
            <div className="flex items-end gap-1 mb-1">
              <span className="text-5xl font-extrabold text-slate-900 dark:text-white">
                ${annual ? Math.round(annualPrice / 12) : monthlyPrice}
              </span>
              <span className="text-slate-500 dark:text-stone-400 mb-2">/mo</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-stone-400 mb-6">
              {annual ? `$${annualPrice} billed annually` : 'Billed monthly'}
            </p>

            <ul className="space-y-3 mb-8">
              {PLUS_FEATURES.map(f => (
                <li key={f} className="flex items-center gap-3 text-sm text-slate-700 dark:text-stone-300">
                  <CheckIcon />
                  {f}
                </li>
              ))}
            </ul>

            <button className="w-full rounded-lg bg-[#0F766E] hover:bg-[#0D9488] active:bg-[#134E4A] py-3 text-sm font-semibold text-white shadow transition-colors duration-150">
              Start Plus Plan
            </button>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div>
          <h2 className="text-2xl font-bold font-serif text-slate-900 dark:text-white text-center mb-8">
            Full Feature Comparison
          </h2>
          <div className="overflow-x-auto rounded-xl border border-stone-200 dark:border-slate-700 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/80">
                  <th className="text-left py-4 px-6 font-semibold text-slate-600 dark:text-stone-300 w-1/2">
                    Feature
                  </th>
                  <th className="text-center py-4 px-6 font-semibold text-slate-600 dark:text-stone-300">
                    Free
                  </th>
                  <th className="text-center py-4 px-6 font-semibold text-teal-600 dark:text-teal-400">
                    Plus
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60">
                {COMPARISON_ROWS.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`bg-white dark:bg-slate-800 transition-colors ${
                      i % 2 === 1 ? 'bg-slate-50/50 dark:bg-slate-800/60' : ''
                    }`}
                  >
                    <td className="py-3.5 px-6 text-slate-700 dark:text-stone-300 font-medium">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-6 text-center">
                      {row.free ? <CheckIcon /> : <XIcon />}
                    </td>
                    <td className="py-3.5 px-6 text-center">
                      {row.plus ? <CheckIcon /> : <XIcon />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-2xl font-bold font-serif text-slate-900 dark:text-white text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl mx-auto space-y-2">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="rounded-xl border border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 overflow-hidden transition-colors duration-200"
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors duration-150"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-slate-800 dark:text-slate-100 text-sm pr-4">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-sm text-slate-600 dark:text-stone-400 leading-relaxed border-t border-slate-100 dark:border-slate-700 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
