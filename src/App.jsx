import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import TeamsPage from "./pages/TeamsPage"
import EventsPage from "./pages/EventsPage"

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-black min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/events" element={<EventsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
