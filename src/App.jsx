import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"

// Register plugins with correct capitalization
gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
    </main> 
  )
}

export default App
