import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import About from './components/About'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <About />
      </main>
      <Footer />
    </>
  )
}
