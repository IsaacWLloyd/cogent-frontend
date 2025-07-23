import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react"

export default function QuickPitch() {
  const [currentPhase, setCurrentPhase] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhase(prev => prev === 0 ? 1 : 0)
    }, 4000) // Switch phases every 4 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20">
      <div className="mx-8 lg:mx-16">
        <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-white mb-8">
              Coding Agents lose context and drift from specifications. Your vision gets lost in translation.
            </p>
            
            <Card className="bg-card mb-8">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6 h-80">
                  <div className={`transition-opacity duration-1000 ${currentPhase === 0 ? 'opacity-100' : 'opacity-0'} ${currentPhase === 1 ? 'absolute' : ''}`}>
                    {/* Phase 1: Lambo -> Claude/Cursor -> Sedan */}
                    <div className="flex items-center space-x-16">
                      <div className="relative w-64 h-64 flex items-center justify-center">
                        {/* Thought bubble - larger and properly positioned */}
                        <div className="relative">
                          <div className="w-56 h-40 bg-white rounded-2xl flex items-center justify-center p-4">
                            <img src="/lambo-removebg-preview.png" alt="Lambo" className="w-full h-full object-contain" />
                          </div>
                          {/* Bubble tail */}
                          <div className="absolute -bottom-4 left-8 w-12 h-12 bg-white rounded-full"></div>
                          <div className="absolute -bottom-8 left-4 w-8 h-8 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-12 h-12 bg-red-500 rounded-full animate-pulse"></div>
                        <div className="w-12 h-12 bg-red-500 rounded-full animate-pulse delay-100"></div>
                        <div className="w-12 h-12 bg-red-500 rounded-full animate-pulse delay-200"></div>
                      </div>
                      <div className="flex space-x-8">
                        <div className="w-64 h-64 rounded-lg bg-white flex items-center justify-center p-8">
                          <img src="/claude.png" alt="Claude" className="w-full h-full object-contain" />
                        </div>
                        <div className="w-64 h-64 rounded-lg bg-white flex items-center justify-center p-8">
                          <img src="/cursor.png" alt="Cursor" className="w-full h-full object-contain" />
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-12 h-12 bg-red-500 rounded-full animate-pulse"></div>
                        <div className="w-12 h-12 bg-red-500 rounded-full animate-pulse delay-100"></div>
                        <div className="w-12 h-12 bg-red-500 rounded-full animate-pulse delay-200"></div>
                      </div>
                      <div className="w-64 h-64 flex items-center justify-center">
                        <img src="/sedan-removebg-preview.png" alt="Sedan" className="w-full h-full object-contain" />
                      </div>
                    </div>
                  </div>
                  
                  <div className={`transition-opacity duration-1000 ${currentPhase === 1 ? 'opacity-100' : 'opacity-0'} ${currentPhase === 0 ? 'absolute' : ''}`}>
                    {/* Phase 2: Lambo -> Cogent -> Lambo */}
                    <div className="flex items-center space-x-16">
                      <div className="relative w-64 h-64 flex items-center justify-center">
                        {/* Thought bubble - larger and properly positioned */}
                        <div className="relative">
                          <div className="w-56 h-40 bg-white rounded-2xl flex items-center justify-center p-4">
                            <img src="/lambo-removebg-preview.png" alt="Lambo" className="w-full h-full object-contain" />
                          </div>
                          {/* Bubble tail */}
                          <div className="absolute -bottom-4 left-8 w-12 h-12 bg-white rounded-full"></div>
                          <div className="absolute -bottom-8 left-4 w-8 h-8 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-12 h-12 bg-green-500 rounded-full animate-pulse"></div>
                        <div className="w-12 h-12 bg-green-500 rounded-full animate-pulse delay-100"></div>
                        <div className="w-12 h-12 bg-green-500 rounded-full animate-pulse delay-200"></div>
                      </div>
                      <div className="w-64 h-64 flex items-center justify-center">
                        <img src="/cogent-sun.png" alt="Cogent" className="w-full h-full object-contain" />
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-12 h-12 bg-green-500 rounded-full animate-pulse"></div>
                        <div className="w-12 h-12 bg-green-500 rounded-full animate-pulse delay-100"></div>
                        <div className="w-12 h-12 bg-green-500 rounded-full animate-pulse delay-200"></div>
                      </div>
                      <div className="w-64 h-64 flex items-center justify-center">
                        <img src="/lambo-removebg-preview.png" alt="Lambo" className="w-full h-full object-contain" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <p className="text-lg font-medium text-white">
              Cogent solves this by eliminating the gap between intention and implementation
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}