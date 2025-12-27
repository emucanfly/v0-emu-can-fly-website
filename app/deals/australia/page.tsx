import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DealTemplate } from "@/components/deal-template"
import { ExpediaBanner } from "@/components/expedia-banner"

export default function AustraliaDealPage() {
  const deals = [
    // AI agents can add deals here in this format:
    // { from: "SYD", to: "MEL", departureDate: "15-03-2025", returnDate: "22-03-2025", link: "https://shortened-url" }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-4">
          <ExpediaBanner />
        </div>

        <div className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <DealTemplate
              title="Flight Deals within Australia"
              description="Discover amazing flight deals for domestic travel across Australia. From Sydney to Melbourne, Brisbane to Perth, find incredible prices on flights connecting major Australian cities. These deals are updated regularly to bring you the best value for your money when traveling within Australia."
              deals={deals}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
