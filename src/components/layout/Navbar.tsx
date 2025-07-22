import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="border-b border-border bg-cogent-dark backdrop-blur supports-[backdrop-filter]:bg-cogent-dark/95">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/cogent-full.png" 
            alt="COGENT" 
            className="h-8 w-auto"
          />
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="bg-white text-cogent-dark border-white hover:bg-gray-100">
            Discord
          </Button>
          <Button size="sm" className="bg-cogent-yellow hover:bg-cogent-yellow/90 text-cogent-dark font-medium">
            Waitlist
          </Button>
        </div>
      </div>
    </nav>
  )
}