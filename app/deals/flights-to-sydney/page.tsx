import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Sydney | Emu Can Fly",
  description: "Find the best flight deals to Sydney, Australia. Compare cheap airfares to Sydney Airport.",
}

export default function FlightsToSydneyPage() {
  return (
    <FlightDealPage
      title="Flights to Sydney"
      subtitle="Australia's harbour city"
      heroImage="/sydney-australia-opera-house.jpg"
      destination="sydney"
      description="Sydney dazzles with its iconic harbour, stunning beaches, and vibrant multicultural energy. From the Opera House to Bondi Beach, the historic Rocks to trendy Surry Hills, Australia's largest city offers world-class dining, culture, and outdoor adventures."
      popularDestinations={[
        { airportCode: "Sydney (SYD)", description: "Main international airport, train to city" },
        { airportCode: "Circular Quay", description: "Opera House, ferries, harbour views" },
        { airportCode: "Bondi Beach", description: "Iconic surf beach, coastal walks" },
        { airportCode: "The Rocks", description: "Historic precinct, markets, pubs" },
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
          dates: "Any date",
          price: "$1,099",
          currency: "CAD",
          link: "https://www.trip.com/flights/sydney?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "YYZ → SYD",
          dates: "Any date",
          price: "$1,199",
          currency: "CAD",
          link: "https://www.trip.com/flights/sydney?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "YYC → SYD",
          dates: "15Mar - 22Mar",
          price: "$1,149",
          currency: "CAD",
          link: "https://www.trip.com/flights/sydney?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
