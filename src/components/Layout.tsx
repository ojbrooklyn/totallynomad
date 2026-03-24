import { useState } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import {
  Sun,
  Moon,
  Menu,
  X,
  ChevronDown,
  MessageCircle,
  Mail,
  Camera,
} from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { useAuth } from '../contexts/AuthContext'
import logoDark from '../assets/logo-dark.svg'
import logoLight from '../assets/logo-light.svg'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Countries', to: '/countries' },
  { label: 'Cities', to: '/cities' },
]

const resourcesDropdown = [
  { label: 'Tools', to: '/tools' },
  { label: 'Country Comparison', to: '/tools/compare' },
  { label: 'Services', to: '/services' },
  { label: 'Blog', to: '/blog' },
]

const footerColumns = [
  {
    heading: 'Platform',
    links: [
      { label: 'Home', to: '/' },
      { label: 'Countries', to: '/countries' },
      { label: 'Cities', to: '/cities' },
      { label: 'Services', to: '/services' },
      { label: 'Pricing', to: '/pricing' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Visa Quiz', to: '/tools' },
      { label: 'Budget Calculator', to: '/tools' },
      { label: 'Country Comparison', to: '/tools/compare' },
      { label: 'Blog', to: '/blog' },
      { label: 'Community', to: 'https://discord.gg/totallynomad' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms of Service', to: '/terms' },
    ],
  },
]

export default function Layout() {
  const { isDark, toggleTheme } = useTheme()
  const { user, signOut } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)

  const isActive = (to: string) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)

  const handleLogout = () => {
    signOut()
    setUserMenuOpen(false)
    navigate('/')
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFBEB] dark:bg-[#0C1222] text-[#1C1917] dark:text-[#F5F5F4] transition-colors duration-200">
      {/* ── Navigation ── */}
      <header className="sticky top-0 z-50 w-full border-b border-stone-200 dark:border-[#2A3444] bg-white/80 dark:bg-[#0C1222]/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-[#0C1222]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">

            {/* Left – Logo */}
            <Link
              to="/"
              className="flex items-center shrink-0"
            >
              <img
                src={isDark ? logoLight : logoDark}
                alt="TotallyNomad"
                className="h-8 md:h-9 w-auto"
              />
            </Link>

            {/* Center – Desktop links */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 rounded-md text-sm transition-colors duration-150 ${
                    isActive(link.to)
                      ? 'text-primary-600 font-semibold'
                      : 'text-gray-600 dark:text-stone-300 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Resources dropdown */}
              <div className="relative">
                <button
                  onClick={() => setResourcesOpen((v) => !v)}
                  onBlur={() => setTimeout(() => setResourcesOpen(false), 150)}
                  className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm transition-colors duration-150 ${
                    ['/tools', '/services', '/blog'].some((p) => location.pathname.startsWith(p))
                      ? 'text-primary-600 font-semibold'
                      : 'text-gray-600 dark:text-stone-300 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                >
                  Resources
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {resourcesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 rounded-md shadow-lg bg-white dark:bg-[#1A2332] ring-1 ring-black/5 dark:ring-white/10 py-1 z-50">
                    {resourcesDropdown.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={() => setResourcesOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-[#2A3444]"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/pricing"
                className={`px-3 py-2 rounded-md text-sm transition-colors duration-150 ${
                  isActive('/pricing')
                    ? 'text-primary-600 font-semibold'
                    : 'text-gray-600 dark:text-stone-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                Pricing
              </Link>
            </nav>

            {/* Right – Theme toggle + Auth */}
            <div className="hidden md:flex items-center gap-2">
              {/* Dark mode toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                className="p-2 rounded-md text-gray-500 dark:text-stone-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-stone-100 dark:hover:bg-[#1A2332] transition-colors duration-150"
              >
                {isDark ? (
                  <Sun className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <Moon className="w-5 h-5" aria-hidden="true" />
                )}
              </button>

              {user ? (
                /* User menu */
                <div className="relative">
                  <button
                    onClick={() => setUserMenuOpen((v) => !v)}
                    className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-[#1A2332] transition-colors duration-150"
                  >
                    <span className="w-7 h-7 rounded-full bg-primary-600 text-white flex items-center justify-center text-xs font-bold uppercase select-none">
                      {user.email?.[0] ?? 'U'}
                    </span>
                    <ChevronDown className="w-4 h-4" aria-hidden="true" />
                  </button>
                  {userMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-[#1A2332] ring-1 ring-black/5 dark:ring-white/10 py-1 z-50">
                      <div className="px-4 py-2 text-xs text-gray-500 dark:text-stone-400 border-b border-stone-100 dark:border-[#2A3444] truncate">
                        {user.email}
                      </div>
                      <Link
                        to="/account"
                        onClick={() => setUserMenuOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-[#2A3444]"
                      >
                        Account
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-stone-100 dark:hover:bg-[#2A3444]"
                      >
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-[#1A2332] transition-colors duration-150"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="px-4 py-2 rounded-md text-sm font-semibold bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-150"
                  >
                    Sign up
                  </Link>
                </>
              )}
            </div>

            {/* Mobile – right side controls */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                className="p-2 rounded-md text-gray-500 dark:text-stone-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-150"
              >
                {isDark ? (
                  <Sun className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <Moon className="w-5 h-5" aria-hidden="true" />
                )}
              </button>
              <button
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Open menu"
                className="p-2 rounded-md text-gray-500 dark:text-stone-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-150"
              >
                {mobileOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile slide-in menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav
            className="border-t border-stone-200 dark:border-[#2A3444] bg-white dark:bg-[#0C1222] px-4 py-4 flex flex-col gap-1"
            aria-label="Mobile navigation"
          >
            {[...navLinks, ...resourcesDropdown, { label: 'Pricing', to: '/pricing' }].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2 rounded-md text-sm transition-colors duration-150 ${
                  isActive(link.to)
                    ? 'text-primary-600 font-semibold bg-primary-50 dark:bg-primary-900/20'
                    : 'text-gray-600 dark:text-stone-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-stone-100 dark:hover:bg-[#1A2332]'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="border-t border-stone-100 dark:border-[#2A3444] mt-2 pt-3 flex flex-col gap-2">
              {user ? (
                <>
                  <span className="px-3 py-1 text-xs text-gray-500 dark:text-stone-400 truncate">
                    {user.email}
                  </span>
                  <Link
                    to="/account"
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2 rounded-md text-sm text-gray-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-[#1A2332]"
                  >
                    Account
                  </Link>
                  <button
                    onClick={() => { handleLogout(); setMobileOpen(false) }}
                    className="px-3 py-2 rounded-md text-sm text-left text-red-600 dark:text-red-400 hover:bg-stone-100 dark:hover:bg-[#1A2332]"
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-[#1A2332]"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2 rounded-md text-sm font-semibold bg-primary-600 text-white text-center hover:bg-primary-700"
                  >
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      </header>

      {/* ── Main content ── */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* ── Footer ── */}
      <footer className="bg-[#134E4A] dark:bg-[#134E4A] border-t border-[#0F766E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Newsletter */}
          <div className="mb-10 pb-10 border-b border-teal-700">
            <div className="max-w-md">
              <h3 className="text-lg font-semibold text-white mb-2">
                Stay in the loop
              </h3>
              <p className="text-sm text-teal-200 mb-4">
                Weekly tips on visas, taxes, and expat life — straight to your inbox.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex gap-2"
              >
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="flex-1 px-3 py-2 rounded-lg bg-teal-900/50 border border-teal-600 text-white placeholder-teal-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded-lg transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Logo + columns */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
            {/* Brand */}
            <div className="col-span-2 sm:col-span-2 lg:col-span-1">
              <Link to="/" className="flex items-center">
                <img
                  src={logoLight}
                  alt="TotallyNomad"
                  className="h-7 w-auto"
                />
              </Link>
              <p className="mt-3 text-sm text-teal-100 leading-relaxed">
                Tools and data for Americans moving abroad.
              </p>
            </div>

            {/* Link columns */}
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  {col.heading}
                </h3>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.to.startsWith('http') ? (
                        <a
                          href={link.to}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-teal-200 hover:text-white transition-colors duration-150"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          to={link.to}
                          className="text-sm text-teal-200 hover:text-white transition-colors duration-150"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Connect */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Connect
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://discord.gg/totallynomad" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-teal-200 hover:text-white transition-colors">
                    <MessageCircle className="w-4 h-4" /> Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-flex items-center gap-2 text-sm text-teal-200 hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    Twitter / X
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-flex items-center gap-2 text-sm text-teal-200 hover:text-white transition-colors">
                    <Camera className="w-4 h-4" /> Instagram
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@totallynomad.com" className="inline-flex items-center gap-2 text-sm text-teal-200 hover:text-white transition-colors">
                    <Mail className="w-4 h-4" /> Email
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-teal-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-teal-300">
              &copy; {new Date().getFullYear()} TotallyNomad &middot; A Viselio Company &middot; Made for US Expats
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Twitter / X" className="text-teal-300 hover:text-white transition-colors duration-150">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-teal-300 hover:text-white transition-colors duration-150">
                <Camera className="w-4 h-4" />
              </a>
              <a href="https://discord.gg/totallynomad" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="text-teal-300 hover:text-white transition-colors duration-150">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
