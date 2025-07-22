import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import TypingAnimation from "@/components/ui/typing-animation"

export default function CTA() {
  const [showCTA, setShowCTA] = useState(false)
  
  const typingPhrases = [
    "Don't get left behind."
  ]

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
          
          <div className={`space-y-6 transition-all duration-1000 ${
            showCTA ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Card className="bg-zinc-800 border border-zinc-600">
              <CardContent className="p-6">
                <h3 className="font-lora font-semibold mb-4 text-zinc-100">Join the Waitlist</h3>
                <div className="space-y-4">
                  <Input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full bg-zinc-600 text-zinc-100 border-zinc-500"
                  />
                  <Button className="w-full bg-cogent-yellow hover:bg-cogent-yellow/90 text-cogent-dark font-medium">
                    Join Waitlist
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-zinc-800 border border-zinc-600">
              <CardContent className="p-4">
                <p className="text-sm text-zinc-300 mb-3">Join our Discord community</p>
                <Button variant="outline" className="w-full bg-zinc-600 text-zinc-100 border-zinc-500 hover:bg-zinc-500">
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