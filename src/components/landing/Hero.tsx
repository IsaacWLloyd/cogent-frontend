import { useState } from 'react'
import TypingAnimation from "@/components/ui/typing-animation"
import CTA from "./CTA"

const typingPhrases = [
  "English is the final\nprogramming language.",
  "Cogent implements\nits potential.",
  "Welcome to the world of forms."
]

export default function Hero() {
  const [showCTA, setShowCTA] = useState(false)
  
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mt-32">
          <div className="mb-8 h-20 flex items-center justify-center">
            <TypingAnimation 
              phrases={typingPhrases}
              className="text-3xl lg:text-5xl font-kode font-medium text-foreground"
              onComplete={() => setShowCTA(true)}
            />
          </div>
          
          <div className={`max-w-md mx-auto transition-all duration-1000 ${
            showCTA ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <CTA />
          </div>
        </div>
      </div>
    </section>
  )
}