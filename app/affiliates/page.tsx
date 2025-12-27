import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { ExpediaBanner } from "@/components/expedia-banner"

export default function AffiliatesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-4">
          <ExpediaBanner />
        </div>

        <div className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">Affiliate Partners</h1>
              <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                How we connect you with travel services
              </p>
            </div>

            <Card className="max-w-4xl mx-auto p-6 md:p-8 shadow-xl">
              <div className="prose prose-sm md:prose-base max-w-none space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Emu Can Fly operates as an affiliate travel search platform, connecting customers directly with
                  trusted booking agencies and travel service providers. We do not directly process bookings or handle
                  payments ourselves. Instead, when you search for flights or hotels on our website and click through to
                  complete your booking, you will be redirected to our carefully selected affiliate partners who
                  specialize in travel bookings. These partnerships allow us to offer you access to competitive prices,
                  comprehensive travel options, and secure booking processes while maintaining our service at no cost to
                  you.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  We want to be transparent about how our business operates: we may receive a commission from our
                  affiliate partners when you complete a booking through links on our website. This commission helps us
                  maintain and improve Emu Can Fly's services, develop new features, and continue providing you with a
                  free, user-friendly travel search experience. Please note that the affiliate partners we work with may
                  change at any time without prior notice, as we continuously evaluate and update our partnerships to
                  ensure we're offering you the best possible service, competitive rates, and reliable booking options
                  for your travel needs.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
