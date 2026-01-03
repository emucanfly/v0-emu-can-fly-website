import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Dublin | Emu Can Fly",
  description: "Find the best flight deals to Dublin, Ireland. Compare cheap airfares to Dublin Airport.",
}

export default function FlightsToDublinPage() {
  return (
    <FlightDealPage
      title="Flights to Dublin"
      subtitle="Ireland's spirited capital"
      heroImage="/placeholder.svg?height=400&width=1200"
      destination="dublin"
      description="Dublin is a city of literary legends, lively pubs, and warm Irish welcome. Explore Georgian architecture, trace the footsteps of Joyce and Yeats, enjoy traditional music sessions, and discover why the craic (fun) never stops in Ireland's spirited capital."
      popularDestinations={[
        { airportCode: "Dublin (DUB)", description: "International airport, bus to city center" },
        { airportCode: "Temple Bar", description: "Cultural quarter, pubs, music" },
        { airportCode: "Trinity College", description: "Book of Kells, historic campus" },
        { airportCode: "Guinness Storehouse", description: "Brewery tour, rooftop bar" },
      ]}
      bestTimeToVisit="May to September offers the driest weather and longest days. St. Patrick's Day (March 17) is festive chaos. Autumn is beautiful. Winter is dark but cozy in pubs."
      travelTips={[
        "Guinness tastes better in Dublin - try it at the source",
        "Traditional music sessions happen nightly in many pubs",
        "Leap Card is best for public transport",
        "Day trips to Cliffs of Moher and Wicklow Mountains",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "SYD → DUB",
          dates: "08Apr - 20Apr",
          price: "$1,149",
          currency: "AUD",
          link: "https://www.trip.com/flights/dublin?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "MEL → DUB",
          dates: "15Apr - 28Apr",
          price: "$1,199",
          currency: "AUD",
          link: "https://www.trip.com/flights/dublin?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "BNE → DUB",
          dates: "01May - 14May",
          price: "$1,099",
          currency: "AUD",
          link: "https://www.trip.com/flights/dublin?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
