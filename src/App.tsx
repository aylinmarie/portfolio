import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Writing from './components/Writing'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <About />
        <Writing />
        <Contact />
      </main>
    </>
  )
}
