// ================= Library
import {type LenisRef, ReactLenis, useLenis} from "lenis/react"
import {useRef} from "react"

// ================= Pages
import HomeSection from "./pages/HomeSection"
import ProjectSection from "./pages/ProjectSection"
import Navbar from "./components/Navbar"

function App() {
  useLenis()

  const lenisRef = useRef<LenisRef>(null)

  return (
    <>
      <Navbar />
      <HomeSection />
      <ProjectSection />
    </>
  )
}

export default App
