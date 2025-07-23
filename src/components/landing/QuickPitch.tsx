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
            <div className="bg-transparent mb-8">
              <div className="p-8">
                <div className="flex items-center justify-center mb-6 w-full" style={{ height: '50vh' }}>
                  <div className={`transition-opacity duration-1000 ${currentPhase === 0 ? 'opacity-100' : 'opacity-0'} ${currentPhase === 1 ? 'absolute' : ''}`}>
                    {/* Phase 1: Lambo -> Claude/Cursor -> Sedan */}
                    <div className="flex items-center justify-between w-full max-w-6xl">
                      <div className="relative flex items-center justify-center" style={{ width: '20%', aspectRatio: '1' }}>
                        {/* Thought bubble - larger and properly positioned */}
                        <div className="relative">
                          <div className="bg-white rounded-2xl flex items-center justify-center p-4" style={{ width: '14vw', height: '10vw' }}>
                            <img src="/lambo-removebg-preview.png" alt="Lambo" className="w-full h-full object-contain" />
                          </div>
                          {/* Bubble tail */}
                          <div className="absolute bg-white rounded-full" style={{ bottom: '-1vw', left: '2vw', width: '3vw', height: '3vw' }}></div>
                          <div className="absolute bg-white rounded-full" style={{ bottom: '-2vw', left: '1vw', width: '2vw', height: '2vw' }}></div>
                        </div>
                      </div>
                      <div className="flex space-x-1" style={{ width: '10%' }}>
                        <div className="bg-red-500 rounded-full animate-pulse" style={{ width: '2vw', height: '2vw' }}></div>
                        <div className="bg-red-500 rounded-full animate-pulse delay-100" style={{ width: '2vw', height: '2vw' }}></div>
                        <div className="bg-red-500 rounded-full animate-pulse delay-200" style={{ width: '2vw', height: '2vw' }}></div>
                      </div>
                      <div className="flex space-x-4" style={{ width: '30%' }}>
                        <div className="rounded-lg bg-white flex items-center justify-center p-4" style={{ width: '12vw', height: '12vw' }}>
                          <img src="/claude.png" alt="Claude" className="w-full h-full object-contain" />
                        </div>
                        <div className="rounded-lg bg-white flex items-center justify-center p-4" style={{ width: '12vw', height: '12vw' }}>
                          <img src="/cursor.png" alt="Cursor" className="w-full h-full object-contain" />
                        </div>
                      </div>
                      <div className="flex space-x-1" style={{ width: '10%' }}>
                        <div className="bg-red-500 rounded-full animate-pulse" style={{ width: '2vw', height: '2vw' }}></div>
                        <div className="bg-red-500 rounded-full animate-pulse delay-100" style={{ width: '2vw', height: '2vw' }}></div>
                        <div className="bg-red-500 rounded-full animate-pulse delay-200" style={{ width: '2vw', height: '2vw' }}></div>
                      </div>
                      <div className="flex items-center justify-center" style={{ width: '20%', aspectRatio: '1' }}>
                        <img src="/sedan-removebg-preview.png" alt="Sedan" className="w-full h-full object-contain" />
                      </div>
                    </div>
                  </div>
                  
                  <div className={`transition-opacity duration-1000 ${currentPhase === 1 ? 'opacity-100' : 'opacity-0'} ${currentPhase === 0 ? 'absolute' : ''}`}>
                    {/* Phase 2: Lambo -> Cogent -> Lambo */}
                    <div className="flex items-center justify-between w-full max-w-6xl">
                      <div className="relative flex items-center justify-center" style={{ width: '20%', aspectRatio: '1' }}>
                        {/* Thought bubble - larger and properly positioned */}
                        <div className="relative">
                          <div className="bg-white rounded-2xl flex items-center justify-center p-4" style={{ width: '14vw', height: '10vw' }}>
                            <img src="/lambo-removebg-preview.png" alt="Lambo" className="w-full h-full object-contain" />
                          </div>
                          {/* Bubble tail */}
                          <div className="absolute bg-white rounded-full" style={{ bottom: '-1vw', left: '2vw', width: '3vw', height: '3vw' }}></div>
                          <div className="absolute bg-white rounded-full" style={{ bottom: '-2vw', left: '1vw', width: '2vw', height: '2vw' }}></div>
                        </div>
                      </div>
                      <div className="flex space-x-1" style={{ width: '15%' }}>
                        <div className="bg-green-500 rounded-full animate-pulse" style={{ width: '2vw', height: '2vw' }}></div>
                        <div className="bg-green-500 rounded-full animate-pulse delay-100" style={{ width: '2vw', height: '2vw' }}></div>
                        <div className="bg-green-500 rounded-full animate-pulse delay-200" style={{ width: '2vw', height: '2vw' }}></div>
                      </div>
                      <div className="flex items-center justify-center" style={{ width: '20%', aspectRatio: '1' }}>
                        <img src="/cogent-sun.png" alt="Cogent" className="w-full h-full object-contain" />
                      </div>
                      <div className="flex space-x-1" style={{ width: '15%' }}>
                        <div className="bg-green-500 rounded-full animate-pulse" style={{ width: '2vw', height: '2vw' }}></div>
                        <div className="bg-green-500 rounded-full animate-pulse delay-100" style={{ width: '2vw', height: '2vw' }}></div>
                        <div className="bg-green-500 rounded-full animate-pulse delay-200" style={{ width: '2vw', height: '2vw' }}></div>
                      </div>
                      <div className="flex items-center justify-center" style={{ width: '20%', aspectRatio: '1' }}>
                        <img src="/lambo-removebg-preview.png" alt="Lambo" className="w-full h-full object-contain" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-lg font-medium text-white">
              Cogent solves this by eliminating the gap between intention and implementation
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
  )
}