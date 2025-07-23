import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar when scrolled down more than 100px
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isVisible 
        ? 'translate-y-0 opacity-100 bg-black border-b border-white' 
        : '-translate-y-full opacity-0'
    }`}>
      <div className="w-full px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/cogent-full.png" 
            alt="COGENT" 
            className="h-16 w-auto"
          />
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="bg-white text-cogent-dark border-white hover:bg-gray-100">
            Discord
          </Button>
          <Button size="sm" className="bg-cogent-yellow hover:bg-cogent-yellow/90 text-cogent-dark font-medium">
            Waitlist
          </Button>
        </div>
      </div>
    </nav>
  )
}