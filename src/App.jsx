import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import TeamsPage from "./pages/TeamsPage"
import EventsPage from "./pages/EventsPage"
import JoinUsPage from "./pages/JoinUsPage"
import DroneLoader from "./components/DroneLoader"

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isSplineLoaded, setIsSplineLoaded] = useState(false)

  useEffect(() => {
    // Simulate minimum loading time
    const minLoadTime = setTimeout(() => {
      if (isSplineLoaded) {
        setIsLoading(false)
      }
    }, 3000) // Minimum 3 seconds

    return () => clearTimeout(minLoadTime)
  }, [isSplineLoaded])

  // Check if Spline components are loaded
  useEffect(() => {
    const checkSplineLoad = () => {
      // Check if Spline is available globally
      if (window.Spline || document.querySelector('canvas')) {
        setIsSplineLoaded(true)
      }
    }

    // Check immediately
    checkSplineLoad()

    // Check periodically
    const interval = setInterval(checkSplineLoad, 500)

    // Also listen for window load
    window.addEventListener('load', () => {
      setTimeout(() => setIsSplineLoaded(true), 1000)
    })

    return () => {
      clearInterval(interval)
      window.removeEventListener('load', checkSplineLoad)
    }
  }, [])

  const handleLoadComplete = () => {
    setIsLoading(false)
  }

  if (isLoading) {
    return <DroneLoader onLoadComplete={handleLoadComplete} />
  }

  return (
    <BrowserRouter>
      <div className="bg-black min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/join" element={<JoinUsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
