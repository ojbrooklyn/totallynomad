import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { AuthProvider } from './contexts/AuthContext'
import Layout from './components/Layout'

// Lazy-loaded page components
const HomePage = React.lazy(() => import('./pages/HomePage'))
const ToolsPage = React.lazy(() => import('./pages/ToolsPage'))
const CountriesPage = React.lazy(() => import('./pages/CountriesPage'))
const CountryPage = React.lazy(() => import('./pages/CountryPage'))
const PricingPage = React.lazy(() => import('./pages/PricingPage'))
const LoginPage = React.lazy(() => import('./pages/LoginPage'))
const SignupPage = React.lazy(() => import('./pages/SignupPage'))
const BlogPage = React.lazy(() => import('./pages/BlogPage'))
const BlogPostPage = React.lazy(() => import('./pages/BlogPostPage'))
const RelocationPlanPage = React.lazy(() => import('./pages/RelocationPlanPage'))
const ChecklistPage = React.lazy(() => import('./pages/ChecklistPage'))

function PageSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-10 h-10 rounded-full border-4 border-primary-200 border-t-primary-600 animate-spin" aria-label="Loading" />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Suspense fallback={<PageSpinner />}>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="tools" element={<ToolsPage />} />
                <Route path="countries" element={<CountriesPage />} />
                <Route path="countries/:slug" element={<CountryPage />} />
                <Route path="pricing" element={<PricingPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="signup" element={<SignupPage />} />
                <Route path="blog" element={<BlogPage />} />
                <Route path="blog/:slug" element={<BlogPostPage />} />
                <Route path="tools/relocation-plan" element={<RelocationPlanPage />} />
                <Route path="tools/checklist" element={<ChecklistPage />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  )
}
