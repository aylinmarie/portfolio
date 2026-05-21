import { Routes, Route } from 'react-router-dom'
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

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollToTop />
      <Nav />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </main>
      <Analytics />
    </MotionConfig>
  )
}
