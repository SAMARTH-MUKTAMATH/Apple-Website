import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import Showcase from './components/Showcase'

// Register plugins with correct capitalization
gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
    </main> 
  )
}

export default App
