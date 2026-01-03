import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ExpediaBanner } from "@/components/expedia-banner"
import { DynamicDealsTable } from "@/components/dynamic-deals-table"
import Image from "next/image"

interface Destination {
  airportCode: string
  description: string
}

interface FlightDealPageProps {
  title: string
  subtitle: string
  heroImage: string
  destination: string
  description: string
  popularDestinations: Destination[]
  bestTimeToVisit: string
  travelTips: string[]
  fallbackDeals?: Array<{
    id: string
    route: string
    dates: string
    price: string
    currency: string
    link: string
  }>
}

export function FlightDealPage({
  title,
  subtitle,
  heroImage,
  destination,
  description,
  popularDestinations,
  bestTimeToVisit,
  travelTips,
  fallbackDeals = [],
}: FlightDealPageProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-4">
          <ExpediaBanner />
        </div>

        {/* Hero Banner */}
        <div className="relative h-64 md:h-80">
          <Image src={heroImage || "/placeholder.svg"} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">{title}</h1>
              <p className="text-lg text-[#FFD700] mt-2">{subtitle}</p>
            </div>
          </div>
        </div>

        {/* Full-width Deals Section - GitHub/n8n integrated */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-card rounded-lg border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Latest Flight Deals</h2>
            <p className="text-muted-foreground mb-6">
              Hot deals found for {title.replace("Flights to ", "")}. Prices and availability updated regularly.
            </p>
            <DynamicDealsTable destination={destination} fallbackDeals={fallbackDeals} />
          </div>
        </div>

        {/* 2-column layout: 75% content, 25% iframe */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content Column - 75% */}
            <div className="lg:w-3/4">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-foreground mb-4">Discover {title.replace("Flights to ", "")}</h2>
                <p className="text-muted-foreground mb-6">{description}</p>

                <h3 className="text-xl font-semibold text-foreground mb-3">Popular Destinations</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {popularDestinations.map((dest) => (
                    <div key={dest.airportCode} className="bg-card rounded-lg p-4 border">
                      <h4 className="font-semibold">{dest.airportCode}</h4>
                      <p className="text-sm text-muted-foreground">{dest.description}</p>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">Best Time to Visit</h3>
                <p className="text-muted-foreground mb-6">{bestTimeToVisit}</p>

                <h3 className="text-xl font-semibold text-foreground mb-3">Travel Tips</h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                  {travelTips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar Column - 25% with Trip.com iframe */}
            <div className="lg:w-1/4">
              <div className="sticky top-24">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Search Flights</h3>
                <iframe
                  src="https://www.trip.com/partners/ad/S9561274?Allianceid=7652184&SID=286550244&trip_sub1="
                  style={{ width: "320px", height: "640px", border: "none" }}
                  frameBorder="0"
                  scrolling="no"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
