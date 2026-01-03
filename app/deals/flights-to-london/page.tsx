import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to London | Emu Can Fly",
  description:
    "Find the best flight deals to London, UK. Compare cheap airfares to Heathrow, Gatwick, and other London airports.",
}

export default function FlightsToLondonPage() {
  return (
    <FlightDealPage
      title="Flights to London"
      subtitle="Experience the heart of the UK"
      heroImage="/london-big-ben-tower-bridge.jpg"
      destination="london"
      description="London is a world unto itself - ancient history meets cutting-edge culture, royal pageantry coexists with street art, and world-class museums sit alongside legendary pubs. From Big Ben to Borough Market, this iconic city offers endless exploration."
      popularDestinations={[
        { airportCode: "Heathrow (LHR)", description: "Main international hub, Tube connected" },
        { airportCode: "Gatwick (LGW)", description: "Second largest, south of London" },
        { airportCode: "Stansted (STN)", description: "Budget airlines, northeast London" },
        { airportCode: "City (LCY)", description: "Business flights, Docklands location" },
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
          route: "SYD → LHR",
          dates: "01Apr - 15Apr",
          price: "$1,199",
          currency: "AUD",
          link: "https://www.trip.com/flights/london?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "MEL → LHR",
          dates: "10Apr - 24Apr",
          price: "$1,249",
          currency: "AUD",
          link: "https://www.trip.com/flights/london?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "BNE → LHR",
          dates: "01May - 15May",
          price: "$1,149",
          currency: "AUD",
          link: "https://www.trip.com/flights/london?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
