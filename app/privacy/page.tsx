import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { ExpediaBanner } from "@/components/expedia-banner"

export default function PrivacyPage() {
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">Privacy Policy</h1>
              <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                How we handle your information
              </p>
            </div>

            <Card className="max-w-4xl mx-auto p-6 md:p-8 shadow-xl">
              <div className="prose prose-sm md:prose-base max-w-none space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  At Emu Can Fly, we are committed to protecting your privacy and ensuring the security of your personal
                  information. We collect and process data including your search preferences, travel dates, destination
                  choices, and contact information solely for the purpose of helping you plan and book your dream trip.
                  This information allows us to provide you with personalized travel recommendations, competitive
                  pricing options, and seamless booking experiences through our trusted affiliate partners.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  We may share your information with third-party travel service providers, booking platforms, airlines,
                  hotels, and other affiliated partners who assist in fulfilling your travel needs. These partners are
                  carefully selected and are contractually obligated to protect your data and use it only for the
                  specific purposes of processing your bookings and enhancing your travel experience. We ensure that all
                  data sharing complies with applicable privacy laws and regulations, and we never sell your personal
                  information to unaffiliated parties for marketing purposes.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Your data is stored securely using industry-standard encryption and security measures. You have the
                  right to access, modify, or delete your personal information at any time by contacting us through our
                  Contact Us page. We retain your information only for as long as necessary to provide our services and
                  comply with legal obligations. By using Emu Can Fly, you consent to the collection, use, and sharing
                  of your information as described in this privacy policy. We may update this policy from time to time,
                  and we encourage you to review it periodically to stay informed about how we protect your privacy.
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
