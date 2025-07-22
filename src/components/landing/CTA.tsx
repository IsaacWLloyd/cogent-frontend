import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import TypingAnimation from "@/components/ui/typing-animation"

export default function CTA() {
  const typingPhrases = [
    "English is the final programming language.",
    "Cogent implements its potential.", 
    "Welcome to the world of forms."
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8 h-16 flex items-center justify-center">
            <TypingAnimation 
              phrases={typingPhrases}
              className="text-2xl lg:text-3xl font-kode font-medium text-foreground"
            />
          </div>
          
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="font-lora font-semibold mb-6 text-foreground text-xl">Join the Waitlist</h3>
                <div className="space-y-4">
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
            
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">Join our Discord community</p>
                <Button variant="outline" className="w-full">
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