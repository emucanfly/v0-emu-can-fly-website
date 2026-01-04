import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Melbourne | Emu Can Fly",
  description: "Find the best flight deals to Melbourne, Australia. Compare cheap airfares from Canada.",
}

export default function FlightsToMelbournePage() {
  return (
    <FlightDealPage
      title="Flights to Melbourne"
      subtitle="Australia's cultural capital"
      heroImage="/melbourne-australia-skyline.jpg"
      destination="melbourne"
      description="Melbourne is Australia's cultural heart, famous for its street art laneways, world-class coffee, diverse food scene, and passionate sports culture. Explore hidden bars, trendy neighborhoods, beautiful gardens, and experience why locals love their liveable city."
      topAttractions={[
        { name: "Hosier Lane", description: "World-famous street art alley in the CBD" },
        { name: "Melbourne Cricket Ground", description: "Iconic stadium and sports mecca" },
        { name: "Queen Victoria Market", description: "Historic market with fresh produce and souvenirs" },
        { name: "Royal Botanic Gardens", description: "Beautiful parklands by the Yarra River" },
      ]}
      bestTimeToVisit="March to May (autumn) and September to November (spring) are ideal. Summer hosts Australian Open and cricket. Winter is cold but great for food and culture. Melbourne weather is famously unpredictable."
      travelTips={[
        "Melbourne coffee culture is legendary - skip the chains",
        "Free tram zone covers the CBD",
        "Laneways hold the best street art and hidden gems",
        "Great Ocean Road day trip is essential",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "YVR → MEL",
          dates: "10Mar - 24Mar",
          price: "CA$1,049",
          currency: "CAD",
          link: "https://www.trip.com/flights/melbourne?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
