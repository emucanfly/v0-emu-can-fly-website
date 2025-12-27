import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DealTemplate } from "@/components/deal-template"

export default function ThailandDealPage() {
  const deals = []

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <DealTemplate
              title="Flight Deals to Thailand"
              description="Explore the Land of Smiles with these fantastic flight deals to Thailand. From Bangkok's vibrant street life to Phuket's stunning beaches, discover incredible culture, delicious cuisine, and warm hospitality at amazing prices."
              deals={deals}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
