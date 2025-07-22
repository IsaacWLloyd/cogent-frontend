import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-lora font-bold text-foreground">COGENT</h1>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">
            Discord
          </Button>
          <Button size="sm" className="bg-blue-950 hover:bg-blue-900 text-white">
            Waitlist
          </Button>
        </div>
      </div>
    </nav>
  )
}