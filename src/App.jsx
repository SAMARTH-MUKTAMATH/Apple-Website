import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import Showcase from './components/Showcase'
import Performance from './components/Performance'
import Footer from './components/Footer'
import Features from './components/Features'
import Highlights from './components/Highlights'
// Register plugins with correct capitalization
gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Footer />
      <Features />
      <Highlights />
    </main> 
  )
}

export default App
