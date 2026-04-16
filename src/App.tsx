// ================= Library


// ================= Pages
import HomeSection from "./pages/HomeSection"
import PresentSection from "./pages/PresentSection"
import Navbar from "./components/Navbar"
import CustomCursor from "./components/CustomCursor"

function App() {

  return (
    <>
      <CustomCursor />
      <Navbar />
      <HomeSection />
      <PresentSection />

      {/* <FrojectSection /> */}
    </>
  )
}

export default App
