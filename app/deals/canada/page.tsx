import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DealTemplate } from "@/components/deal-template"

export default function CanadaDealPage() {
  const deals = []

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <DealTemplate
              title="Deals from Canada"
              description="Discover amazing travel deals departing from Canada. From exploring Canadian cities to international destinations, find the best flight offers and start planning your next adventure today."
              deals={deals}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
