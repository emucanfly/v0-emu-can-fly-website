import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DealTemplate } from "@/components/deal-template"

export default function KoreaDealPage() {
  const deals = []

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <DealTemplate
              title="Flight Deals to Korea"
              description="Explore the dynamic energy of South Korea with these amazing flight deals. Discover Seoul's cutting-edge technology and vibrant K-pop culture, visit historic palaces, enjoy world-famous Korean cuisine, and experience warm hospitality."
              deals={deals}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
