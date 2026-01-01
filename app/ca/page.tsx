"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ExpediaBanner } from "@/components/expedia-banner"

export default function CAPage() {
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">Canada Travel Deals</h1>
              <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                Search and compare flights and hotels in CAD
              </p>
            </div>

            <div className="flex justify-center">
              <iframe
                src="https://www.trip.com/partners/ad/S9436324?Allianceid=7652184&SID=286550244&trip_sub1="
                style={{ width: "967px", height: "215px", border: "none" }}
                frameBorder="0"
                scrolling="no"
                id="S9436324-ca"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
