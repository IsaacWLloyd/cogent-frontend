import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import TypingAnimation from "@/components/ui/typing-animation"

export default function Hero() {
  const [showCTA, setShowCTA] = useState(false)
  
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
      <div className="container mx-auto text-center px-4 mt-32">
        <div className="mb-8 h-20 flex items-center justify-center">
          <TypingAnimation 
            phrases={typingPhrases}
            className="text-3xl lg:text-5xl font-kode font-medium text-foreground"
            onComplete={() => setShowCTA(true)}
          />
        </div>
        
        {/* CTA Section */}
        <div className={`max-w-md mx-auto space-y-4 transition-all duration-1000 ${
          showCTA ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Card className="bg-card border border-border">
            <CardContent className="p-6">
              <h3 className="font-lora font-semibold mb-4 text-foreground">Join the Waitlist</h3>
              <div className="space-y-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full"
                />
                <Button className="w-full bg-blue-950 hover:bg-blue-900 text-white">
                  Join Waitlist
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border border-border">
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground mb-3">Join our Discord community</p>
              <Button variant="outline" className="w-full">
                Discord (Coming Soon)
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}