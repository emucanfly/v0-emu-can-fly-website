import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DealTemplate } from "@/components/deal-template"

export default function SpainDealPage() {
  const deals = []

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <DealTemplate
              title="Flight Deals to Spain"
              description="Embrace the Spanish passion for life with these flight deals. From Barcelona's Gaudi masterpieces to Madrid's world-class museums, Seville's flamenco, and Costa del Sol's beaches, enjoy incredible food, vibrant culture, and endless sunshine."
              deals={deals}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
