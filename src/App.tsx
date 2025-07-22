import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import LandingPage from './pages/LandingPage'

function App() {
  return (
    <div className="dark min-h-screen text-foreground">
      {/* Full-page background image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: 'url(/cogent-hero-no-watermark.png)' }}
      />
      
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Add more routes here later */}
      </Routes>
    </div>
  )
}

export default App