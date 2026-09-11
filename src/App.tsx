import { Routes, Route, useLocation } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'
import Nav from './components/Nav'
import ScrollToTop from './components/ScrollToTop'
import Hero from './components/Hero'
import Work from './components/Work'
import Projects from './components/Projects'
import About from './components/About'
import Posts from './components/Posts'
import Contact from './components/Contact'
import ProjectDetail from './pages/ProjectDetail'
import Links from './pages/Links'
import CreativeWork from './pages/CreativeWork'
// import WorkWithMe from './pages/WorkWithMe'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Projects />
      <Posts />
      <Contact />
    </>
  )
}

// Served on designs.aylinmarie.co — same SPA bundle, a hostname check
// swaps in the creative-work showcase instead of the main site.
const isDesignsHost = typeof window !== 'undefined' && window.location.hostname.startsWith('designs.')

function AppShell() {
  const { pathname } = useLocation()
  const hideNav = pathname === '/links' || pathname === '/designs'

  if (isDesignsHost) {
    return (
      <>
        <main id="main-content">
          <Routes>
            <Route path="*" element={<CreativeWork />} />
          </Routes>
        </main>
        <Analytics />
      </>
    )
  }

  return (
    <>
      <ScrollToTop />
      {!hideNav && <Nav />}
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/links" element={<Links />} />
          <Route path="/designs" element={<CreativeWork />} />
          {/* <Route path="/work-with-me" element={<WorkWithMe />} /> */}
        </Routes>
      </main>
      <Analytics />
    </>
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <AppShell />
    </MotionConfig>
  )
}
