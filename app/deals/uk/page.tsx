import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DealTemplate } from "@/components/deal-template"

export default function UKDealPage() {
  const deals = []

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <DealTemplate
              title="Flight Deals to UK"
              description="Discover the charm of the United Kingdom with these flight deals. Explore London's iconic landmarks, Edinburgh's medieval architecture, enjoy British culture, visit historic castles, and experience the rolling countryside at fantastic prices."
              deals={deals}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
