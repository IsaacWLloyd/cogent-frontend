import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"

interface RoadmapItem {
  id: string
  title: string
  description: string
  completed: boolean
}

export default function Roadmap() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  
  const roadmapItems: RoadmapItem[] = [
    {
      id: '00',
      title: 'Strong Agent Compliance',
      description: 'Cogent forces agents to document each change they take and link it in a hierarchical tree to the top level project documents',
      completed: true
    },
    {
      id: '01',
      title: 'Dynamic Context Management',
      description: 'Cogent uses graph search and agentic context management to inject exactly what coding agents need to know and nothing more.',
      completed: false
    },
    {
      id: '02',
      title: 'Crystallized Intention',
      description: 'Cogent users chat with an assistant out loud or via text to build a Linguistic Object. This object encodes your entire idea starting from the big picture and includes precise technical details, design inspiration, outside documentation, wireframes, testing suites etc.',
      completed: false
    },
    {
      id: '03',
      title: 'Fully Automatic and Valid Code',
      description: 'In cogent projects any change to your linguistic object are implemented and validated automatically.',
      completed: false
    },
    {
      id: '100',
      title: 'The World of Forms',
      description: 'In a cogent world, thought forms of all types are seamlessly realized unlocking the next phase of civilization.',
      completed: false
    }
  ]

  return (
    <section className="py-20">
      <div className="mx-8 lg:mx-16">
        <div className="bg-zinc-50/95 dark:bg-zinc-900/95 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-card border border-border rounded-lg px-4 py-2 mb-8">
                <span className="font-kode font-medium text-foreground">INIT</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-lora font-bold text-foreground">
                Roadmap
              </h2>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border"></div>
              
              {/* Progress line (solid for completed items) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-amber-200" 
                   style={{ height: '20%' }}></div>

              <div className="space-y-16">
                {roadmapItems.map((item, index) => (
                  <div key={item.id} className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-background border-2 border-border rounded-full z-10"></div>
                    
                    {/* Content card */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                      <Card 
                        className="bg-card border-border cursor-pointer transition-all duration-200 hover:shadow-lg"
                        onMouseEnter={() => setHoveredItem(item.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center mb-3">
                            <span className="text-xl font-kode font-bold text-amber-200 mr-3">
                              {item.id}.
                            </span>
                            <h3 className="text-lg font-lora font-semibold text-foreground">
                              {item.title}
                            </h3>
                          </div>
                          
                          {hoveredItem === item.id && (
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {item.description}
                            </p>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}