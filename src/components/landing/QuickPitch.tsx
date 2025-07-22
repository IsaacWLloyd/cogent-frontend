import { Card, CardContent } from "@/components/ui/card"

export default function QuickPitch() {
  return (
    <section className="py-20">
      <div className="mx-8 lg:mx-16">
        <div className="bg-secondary/95 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-lora font-bold mb-8 text-foreground">
              THE PROBLEM
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Coding Agents lose context and drift from specifications. Your vision gets lost in translation.
            </p>
            
            <Card className="bg-card border-border mb-8">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  {/* Simple visual representation */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-2xl">👤</span>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse delay-100"></div>
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse delay-200"></div>
                    </div>
                    <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center">
                      <span className="text-2xl">🤖</span>
                    </div>
                  </div>
                </div>
                <p className="text-lg font-medium text-foreground">
                  Cogent solves this by eliminating the gap between intention and implementation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}