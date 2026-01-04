import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Barcelona | Emu Can Fly",
  description: "Find the best flight deals to Barcelona, Spain. Compare cheap airfares from Canada.",
}

export default function FlightsToBarcelonaPage() {
  return (
    <FlightDealPage
      title="Flights to Barcelona"
      subtitle="Gaudi's masterpiece on the Mediterranean"
      heroImage="/barcelona-sagrada-familia-gaudi.jpg"
      destination="barcelona"
      description="Barcelona captivates with Gaudi's fantastical architecture, golden beaches, world-class cuisine, and vibrant nightlife. Explore La Rambla, marvel at the Sagrada Familia, relax on Barceloneta beach, and experience Catalan culture in this Mediterranean gem."
      topAttractions={[
        { name: "Sagrada Familia", description: "Gaudi's unfinished Gothic-Art Nouveau masterpiece" },
        { name: "Park Guell", description: "Whimsical Gaudi park with mosaic terraces" },
        { name: "La Rambla", description: "Famous tree-lined pedestrian boulevard" },
        { name: "Gothic Quarter", description: "Medieval labyrinth of narrow streets and plazas" },
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
          route: "YYZ → BCN",
          dates: "12Apr - 24Apr",
          price: "CA$799",
          currency: "CAD",
          link: "https://www.trip.com/flights/barcelona?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
