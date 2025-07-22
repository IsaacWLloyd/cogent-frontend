import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import TypingAnimation from "@/components/ui/typing-animation"

const typingPhrases = [
  "English is the final programming language.",
  "Cogent implements its potential.",
  "don't get left behind"
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
          
          <div className={`max-w-md mx-auto space-y-4 transition-all duration-1000 ${
            showCTA ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Card className="bg-zinc-800 border border-zinc-600">
              <CardContent className="p-6">
                <h3 className="font-lora font-semibold mb-4 text-zinc-100">Join the Waitlist</h3>
                <div className="space-y-3">
                  <Input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full bg-zinc-300 text-zinc-900 border-zinc-400"
                  />
                  <Button className="w-full bg-cogent-yellow hover:bg-cogent-yellow/90 text-zinc-900 font-medium">
                    Join Waitlist
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-zinc-800 border border-zinc-600">
              <CardContent className="p-4">
                <p className="text-sm text-zinc-300 mb-3">Join our Discord community</p>
                <Button variant="outline" className="w-full bg-zinc-300 text-zinc-900 border-zinc-400 hover:bg-zinc-400">
                  Discord (Coming Soon)
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}