import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import Showcase from './components/Showcase'
import Performance from './components/Performance'
import Footer from './components/Footer'

// Register plugins with correct capitalization
gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Footer />
    </main> 
  )
}

export default App
