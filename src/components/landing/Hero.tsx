import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import TypingAnimation from "@/components/ui/typing-animation"

export default function Hero() {
  const typingPhrases = [
    "English is the final programming language.",
    "Cogent implements its potential.",
    "Welcome to the world of forms."
  ]

  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto text-center px-4">
        <div className="mb-8 h-20 flex items-center justify-center">
          <TypingAnimation 
            phrases={typingPhrases}
            className="text-3xl lg:text-5xl font-kode font-medium text-foreground"
          />
        </div>
        <h1 className="text-4xl lg:text-6xl font-lora font-bold mb-6 text-foreground">
          COGENT
        </h1>
        <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto font-lora">
          Code Organization and Generation Enhancement Tool
        </p>
        
        {/* CTA Section */}
        <div className="max-w-md mx-auto space-y-4">
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