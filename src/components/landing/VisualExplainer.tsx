import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ArrowDown, RotateCcw } from "lucide-react"

export default function VisualExplainer() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-lora font-bold text-center mb-16 text-foreground">
            How Cogent Works
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Step 1 */}
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <span className="text-2xl font-kode font-bold text-amber-200 mr-4">01.</span>
                  <h3 className="text-xl font-lora font-semibold">Cogent picks your brain</h3>
                </div>
                
                {/* Chat visualization */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-start">
                    <div className="bg-blue-950 text-white px-4 py-2 rounded-lg max-w-xs">
                      Tell me about your project
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-muted px-4 py-2 rounded-lg max-w-xs">
                      I want to build a task manager...
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-blue-950 text-white px-4 py-2 rounded-lg max-w-xs">
                      What features are most important?
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground">
                  With branching voice or text chat, Cogent explores your ideaspace from every angle
                </p>
                
                {/* Iterate loop indicator */}
                <div className="flex items-center justify-center mt-6">
                  <div className="flex items-center space-x-2 text-amber-200">
                    <RotateCcw className="w-4 h-4" />
                    <span className="text-sm font-medium">Iterate and tunnel deeper</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <span className="text-2xl font-kode font-bold text-amber-200 mr-4">02.</span>
                  <h3 className="text-xl font-lora font-semibold">Cogent builds the blueprint</h3>
                </div>
                
                {/* Blueprint visualization */}
                <div className="space-y-4 mb-6">
                  <div className="border border-border rounded p-3">
                    <div className="text-sm font-medium mb-2">Design Document</div>
                    <div className="space-y-1">
                      <div className="h-2 bg-muted rounded w-full"></div>
                      <div className="h-2 bg-muted rounded w-3/4"></div>
                      <div className="h-2 bg-muted rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="border border-border rounded p-3">
                    <div className="text-sm font-medium mb-2">Technical Specs</div>
                    <div className="space-y-1">
                      <div className="h-2 bg-muted rounded w-full"></div>
                      <div className="h-2 bg-muted rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground">
                  Cogent synthesizes the chat into design documents and technical specifications
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Arrow down */}
          <div className="flex justify-center mb-16">
            <ArrowDown className="w-8 h-8 text-amber-200" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Step 3 */}
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <span className="text-2xl font-kode font-bold text-amber-200 mr-4">03.</span>
                  <h3 className="text-xl font-lora font-semibold">Cogent crystallizes your intention</h3>
                </div>
                
                {/* Linguistic object visualization */}
                <div className="relative mb-6">
                  <div className="w-full h-32 border-2 border-dashed border-amber-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-lg font-medium text-amber-200 mb-2">Linguistic Object</div>
                      <div className="text-sm text-muted-foreground">Perfect crystallization of intention</div>
                    </div>
                  </div>
                  
                  {/* Connected elements */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-950 rounded-full"></div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-950 rounded-full"></div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-950 rounded-full"></div>
                </div>
                
                <p className="text-muted-foreground">
                  The hierarchically linked specifications and branching chat history form a linguistic object
                </p>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <span className="text-2xl font-kode font-bold text-amber-200 mr-4">04.</span>
                  <h3 className="text-xl font-lora font-semibold">Cogent executes and validates</h3>
                </div>
                
                {/* Execution visualization */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div className="flex-1 h-2 bg-green-500 rounded"></div>
                    <span className="text-sm text-muted-foreground">Implementation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div className="flex-1 h-2 bg-green-500 rounded"></div>
                    <span className="text-sm text-muted-foreground">Testing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div className="flex-1 h-2 bg-green-500 rounded"></div>
                    <span className="text-sm text-muted-foreground">Validation</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground">
                  Using your linguistic object, Cogent strictly guides coding agents to implement your exact vision
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}