import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Oslo | Emu Can Fly",
  description: "Find the best flight deals to Oslo, Norway. Compare cheap airfares to Oslo Gardermoen Airport.",
}

export default function FlightsToOsloPage() {
  return (
    <FlightDealPage
      title="Flights to Oslo"
      subtitle="Gateway to Norwegian fjords"
      heroImage="/placeholder.svg?height=400&width=1200"
      destination="oslo"
      description="Oslo combines urban sophistication with easy access to stunning nature. Explore world-class museums, innovative architecture like the Opera House, vibrant food scenes, and use the city as your launching point for Norway's spectacular fjords and Northern Lights."
      popularDestinations={[
        { airportCode: "Gardermoen (OSL)", description: "Main international airport, train to city" },
        { airportCode: "Opera House", description: "Architectural icon, walkable roof" },
        { airportCode: "Vigeland Park", description: "Sculpture park, over 200 works" },
        { airportCode: "Munch Museum", description: "Edvard Munch's famous works" },
      ]}
      bestTimeToVisit="May to September offers mild weather and endless daylight. June has midnight sun. Winter brings skiing and Northern Lights opportunities. December has festive Christmas markets."
      travelTips={[
        "Norway is expensive - budget generously",
        "Oslo Pass covers transport and museums",
        "Nature is easily accessible from the city",
        "Norway in a Nutshell tour to fjords is spectacular",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "SYD → OSL",
          dates: "18May - 31May",
          price: "$1,199",
          currency: "AUD",
          link: "https://www.trip.com/flights/oslo?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "MEL → OSL",
          dates: "25May - 07Jun",
          price: "$1,249",
          currency: "AUD",
          link: "https://www.trip.com/flights/oslo?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "BNE → OSL",
          dates: "12Jun - 25Jun",
          price: "$1,149",
          currency: "AUD",
          link: "https://www.trip.com/flights/oslo?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
