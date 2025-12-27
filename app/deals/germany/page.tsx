import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DealTemplate } from "@/components/deal-template"

export default function GermanyDealPage() {
  const deals = []

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <DealTemplate
              title="Flight Deals to Germany"
              description="Experience German efficiency and culture with these flight deals. Visit Berlin's historic landmarks, Munich's beer gardens, explore fairy-tale castles, enjoy world-famous Christmas markets, and discover a country rich in history and innovation."
              deals={deals}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
