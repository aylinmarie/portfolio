import { MotionConfig } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Posts from './components/Posts'
import Contact from './components/Contact'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main id="main-content">
        <Hero />
        <Work />
        {/* <Projects /> */}
        <About />
        <Posts />
        <Contact />
      </main>
      <Analytics />
    </MotionConfig>
  )
}
