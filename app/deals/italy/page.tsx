import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DealTemplate } from "@/components/deal-template"

export default function ItalyDealPage() {
  const deals = []

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <DealTemplate
              title="Flight Deals to Italy"
              description="Fall in love with Italy's timeless beauty with these flight deals. Explore Rome's ancient ruins, Venice's romantic canals, Florence's Renaissance art, and Tuscany's rolling vineyards. Indulge in authentic pasta, pizza, and gelato in their birthplace."
              deals={deals}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
