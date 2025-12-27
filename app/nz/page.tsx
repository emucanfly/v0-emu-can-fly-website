import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FlightSearch } from "@/components/flight-search"
import { HotelSearch } from "@/components/hotel-search"
import { Plane, Hotel } from "lucide-react"
import { ExpediaBanner } from "@/components/expedia-banner"

export default function NZPage() {
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">New Zealand Travel Deals</h1>
              <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                Search and compare flights and hotels in NZD
              </p>
            </div>

            <Card className="max-w-5xl mx-auto p-6 md:p-8 shadow-xl">
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
                  <FlightSearch defaultCurrency="NZD" />
                </TabsContent>

                <TabsContent value="hotels" className="mt-0">
                  <HotelSearch />
                </TabsContent>
              </Tabs>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
