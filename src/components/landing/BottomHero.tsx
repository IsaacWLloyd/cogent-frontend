import { useState } from 'react'
import TypingAnimation from "@/components/ui/typing-animation"
import CTA from "./CTA"

const typingPhrases = [
  "Don't get left behind."
]

export default function BottomHero() {
  const [showCTA, setShowCTA] = useState(false)
  
  return (
    <section className="py-20 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8 h-16 flex items-center justify-center">
            <TypingAnimation 
              phrases={typingPhrases}
              className="text-2xl lg:text-3xl font-kode font-medium text-foreground"
              onComplete={() => setShowCTA(true)}
              triggerOnScroll={true}
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