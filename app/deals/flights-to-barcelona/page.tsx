import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Barcelona | Emu Can Fly",
  description: "Find the best flight deals to Barcelona, Spain. Compare cheap airfares to El Prat Airport.",
}

export default function FlightsToBarcelonaPage() {
  return (
    <FlightDealPage
      title="Flights to Barcelona"
      subtitle="Gaudi's masterpiece on the Mediterranean"
      heroImage="/barcelona-sagrada-familia-gaudi.jpg"
      destination="barcelona"
      description="Barcelona captivates with Gaudi's fantastical architecture, golden beaches, world-class cuisine, and vibrant nightlife. Explore La Rambla, marvel at the Sagrada Familia, relax on Barceloneta beach, and experience Catalan culture in this Mediterranean gem."
      popularDestinations={[
        { airportCode: "El Prat (BCN)", description: "Main international airport, 12km from center" },
        { airportCode: "Sagrada Familia", description: "Gaudi's unfinished masterpiece" },
        { airportCode: "Park Guell", description: "Whimsical Gaudi park, city views" },
        { airportCode: "Gothic Quarter", description: "Medieval streets, hidden plazas" },
      ]}
      bestTimeToVisit="May to June and September to October are ideal with warm weather and fewer crowds. Summer is hot and packed. Spring brings festivals. Winter is mild but some attractions have reduced hours."
      travelTips={[
        "Book Sagrada Familia tickets well in advance",
        "Metro is efficient - T-Casual card offers 10 trips",
        "Tapas are best at local bars, not tourist restaurants",
        "Watch for pickpockets on La Rambla and metro",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "SYD → BCN",
          dates: "12Apr - 24Apr",
          price: "$1,099",
          currency: "AUD",
          link: "https://www.trip.com/flights/barcelona?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "MEL → BCN",
          dates: "20Apr - 02May",
          price: "$1,149",
          currency: "AUD",
          link: "https://www.trip.com/flights/barcelona?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "BNE → BCN",
          dates: "08May - 20May",
          price: "$1,049",
          currency: "AUD",
          link: "https://www.trip.com/flights/barcelona?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
