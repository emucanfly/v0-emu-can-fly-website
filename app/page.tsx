"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ExpediaBanner } from "@/components/expedia-banner"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FlightSearch } from "@/components/flight-search"
import { HotelSearch } from "@/components/hotel-search"
import { Plane, Hotel } from "lucide-react"

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

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-4">
          <ExpediaBanner />
        </div>

        <div className="relative py-16 md:py-24 overflow-hidden">
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-white drop-shadow-lg">
                Find Your Next Adventure
              </h1>
              <p className="text-lg md:text-xl text-white/90 text-balance max-w-2xl mx-auto drop-shadow-md">
                {"Search and compare flights and hotels from hundreds of travel sites"}
              </p>
            </div>

            {/* Search Card */}
            <Card className="max-w-5xl mx-auto p-6 md:p-8 shadow-2xl">
              <Tabs defaultValue="flights" className="w-full">
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                  <TabsTrigger value="flights" className="gap-2">
                    <Plane className="h-4 w-4" />
                    Flights
                  </TabsTrigger>
                  <TabsTrigger value="hotels" className="gap-2">
                    <Hotel className="h-4 w-4" />
                    Hotels
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="flights" className="mt-0">
                  <FlightSearch />
                </TabsContent>

                <TabsContent value="hotels" className="mt-0">
                  <HotelSearch />
                </TabsContent>
              </Tabs>
            </Card>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Plane className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Best Prices</h3>
              <p className="text-sm text-muted-foreground">
                Compare prices from hundreds of travel sites to find you the best deals
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto">
                <Hotel className="h-6 w-6 text-accent" />
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
                {"Discover exclusive offers and special promotions on flights & hotels"}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
