import { Box } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkExperience from './components/WorkExperience'
import About from './components/About'
import OtherThings from './components/OtherThings'
import Footer from './components/Footer'

function App() {
  return (
    <Box minH="100vh" bg="brand.cream">
      <Navbar />
      <Hero />
      <WorkExperience />
      <About />
      <OtherThings />
      <Footer />
    </Box>
  )
}

export default App
