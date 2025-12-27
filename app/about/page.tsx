import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ExpediaBanner } from "@/components/expedia-banner"
import { Card } from "@/components/ui/card"
import { Plane } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-4">
          <ExpediaBanner />
        </div>

        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">About Emu Can Fly</h1>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-16">
          <Card className="max-w-3xl mx-auto p-8 md:p-12 space-y-8">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                <Plane className="w-10 h-10 text-primary-foreground rotate-45" />
              </div>
            </div>

            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-balance">
                {
                  'Once upon a time, in the vast Australian outback, there lived an emu named Gerald who had an impossible dream: to fly. Every day, Gerald would watch planes soar overhead and think, "If only I had wings that worked!" After years of studying flight patterns, airport departure boards, and frequent flyer programs, Gerald realized something profound—while he might never sprout functional wings, he could help OTHER creatures find the best deals to take to the skies. And thus, Emu Can Fly was born: a travel deals website created by a flightless bird who refused to let his grounded status stop him from reaching new heights.'
                }
              </p>

              <p className="text-balance">
                {
                  "Today, Emu Can Fly scours the internet for the best flight and hotel deals so you don't have to. We believe that everyone deserves to travel, explore new destinations, and create unforgettable memories—even if you're an emu with stubby wings. Our mission is simple: aggregate the best travel deals from affiliate partners and present them in one convenient place. Because if Gerald taught us anything, it's that sometimes the journey matters more than having the right equipment. Maybe one day emus will evolve wings that actually work, but until then, we'll keep helping YOU fly high with incredible travel savings!"
                }
              </p>
            </div>

            <div className="pt-8 border-t border-border">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                {
                  "We're dedicated to making travel accessible and affordable for everyone. By partnering with leading travel providers, we bring you competitive prices and exclusive deals on flights and hotels around the world."
                }
              </p>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
