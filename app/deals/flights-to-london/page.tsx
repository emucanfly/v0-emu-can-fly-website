import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to London | Emu Can Fly",
  description: "Find the best flight deals to London, UK. Compare cheap airfares from Canada.",
}

export default function FlightsToLondonPage() {
  return (
    <FlightDealPage
      title="Flights to London"
      subtitle="Experience the heart of the UK"
      heroImage="/london-big-ben-tower-bridge.jpg"
      destination="london"
      description="London is a world unto itself - ancient history meets cutting-edge culture, royal pageantry coexists with street art, and world-class museums sit alongside legendary pubs. From Big Ben to Borough Market, this iconic city offers endless exploration."
      topAttractions={[
        { name: "Tower of London", description: "Historic castle with Crown Jewels" },
        { name: "British Museum", description: "World-class collection spanning human history" },
        { name: "Buckingham Palace", description: "Official residence of the Royal Family" },
        { name: "Tower Bridge", description: "Victorian masterpiece spanning the Thames" },
      ]}
      bestTimeToVisit="May to September offers warmer weather and longer days. Spring brings blooming parks. Autumn has beautiful foliage. Winter is cold but magical for Christmas markets. Pack layers year-round!"
      travelTips={[
        "Get an Oyster card or use contactless for transport",
        "Many world-class museums are free (British Museum, Tate)",
        "Book West End shows in advance for best prices",
        "Pubs close earlier than you might expect - last orders at 11pm",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "YYZ → LHR",
          dates: "01Apr - 15Apr",
          price: "CA$699",
          currency: "CAD",
          link: "https://www.trip.com/flights/london?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
