import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DealTemplate } from "@/components/deal-template"

export default function MalaysiaDealPage() {
  const deals = []

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <DealTemplate
              title="Flight Deals to Malaysia"
              description="Discover Malaysia's incredible diversity with these flight deals. From Kuala Lumpur's iconic Petronas Towers to Penang's street food paradise and Langkawi's pristine beaches, experience a perfect blend of cultures, cuisines, and natural beauty."
              deals={deals}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
