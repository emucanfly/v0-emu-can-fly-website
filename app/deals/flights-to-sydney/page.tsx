import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Sydney | Emu Can Fly",
  description: "Find the best flight deals to Sydney, Australia. Compare cheap airfares from Canada.",
}

export default function FlightsToSydneyPage() {
  return (
    <FlightDealPage
      title="Flights to Sydney"
      subtitle="Australia's harbour city"
      heroImage="/sydney-australia-opera-house.jpg"
      destination="sydney"
      description="Sydney dazzles with its iconic harbour, stunning beaches, and vibrant multicultural energy. From the Opera House to Bondi Beach, the historic Rocks to trendy Surry Hills, Australia's largest city offers world-class dining, culture, and outdoor adventures."
      topAttractions={[
        { name: "Sydney Opera House", description: "UNESCO-listed architectural masterpiece" },
        { name: "Sydney Harbour Bridge", description: "Iconic bridge with BridgeClimb experience" },
        { name: "Bondi Beach", description: "World-famous surf beach and coastal walks" },
        { name: "Taronga Zoo", description: "Wildlife sanctuary with harbour views" },
      ]}
      bestTimeToVisit="September to November (spring) and March to May (autumn) offer pleasant weather. Summer (December-February) is hot and busy with holidays. Winter is mild and less crowded."
      travelTips={[
        "Opal card works on all public transport including ferries",
        "Ferry to Manly is a scenic harbour cruise",
        "Bondi to Coogee coastal walk is spectacular and free",
        "Vivid Sydney light festival runs in May-June",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "YVR → SYD",
          dates: "10Mar - 24Mar",
          price: "CA$1,099",
          currency: "CAD",
          link: "https://www.trip.com/flights/sydney?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
