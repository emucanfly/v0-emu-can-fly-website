"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ExpediaBanner } from "@/components/expedia-banner"
import { DealsGrid } from "@/components/deals-grid"

const BACKGROUND_IMAGES = [
  "/sunny-beach-shore-with-crystal-clear-water-and-pal.jpg",
  "/breathtaking-mountain-view-from-summit-looking-dow.jpg",
  "/airplane-window-view-of-wing-against-blue-sky-with.jpg",
]

export default function Home() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length)
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-4">
          <ExpediaBanner />
        </div>

        <section className="container mx-auto px-4 py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Hot Flight Deals</h2>
          <p className="text-muted-foreground mb-6">Discover amazing fares to popular destinations</p>
          <DealsGrid showOnlyWithDeals={false} maxItems={12} />
        </section>

        {/* Hero section with search */}
        <div className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-background py-16 md:py-24 overflow-hidden">
          {/* Background images with fade transition */}
          {BACKGROUND_IMAGES.map((image, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-1000"
              style={{
                opacity: currentBgIndex === index ? 1 : 0,
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}

          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12 space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance">
                Compare Cheap Flights
              </h1>
              <p className="text-lg md:text-xl text-[#FFD700] text-balance max-w-2xl mx-auto">
                Find the best airfare deals from top travel sites in one search
              </p>
            </div>

            <div className="flex justify-center">
              <iframe
                src="https://www.trip.com/partners/ad/S9436324?Allianceid=7652184&SID=286550244&trip_sub1="
                style={{ width: "967px", height: "215px", border: "none" }}
                frameBorder="0"
                scrolling="no"
                id="S9436324-main"
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-lg">Best Prices</h3>
              <p className="text-sm text-muted-foreground">
                Compare prices from hundreds of travel sites to find you the best deals
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto">
                <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-lg">Easy Booking</h3>
              <p className="text-sm text-muted-foreground">
                Simple search, instant results, and seamless booking with our partners
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-lg">Great Deals</h3>
              <p className="text-sm text-muted-foreground">
                Discover exclusive offers and special promotions on flights
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
