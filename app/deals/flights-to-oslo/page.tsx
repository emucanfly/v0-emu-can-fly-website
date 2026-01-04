import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Oslo | Emu Can Fly",
  description:
    "Find the best flight deals from Canada to Oslo, Norway. Compare cheap airfares to Oslo Gardermoen Airport.",
}

export default function FlightsToOsloPage() {
  return (
    <FlightDealPage
      title="Flights to Oslo"
      subtitle="Gateway to Norwegian fjords"
      heroImage="/oslo-norway-opera-house.jpg"
      destination="oslo"
      description="Oslo combines urban sophistication with easy access to stunning nature. Explore world-class museums, innovative architecture like the Opera House, vibrant food scenes, and use the city as your launching point for Norway's spectacular fjords and Northern Lights."
      topAttractions={[
        { name: "Oslo Opera House", description: "Architectural icon with walkable roof" },
        { name: "Vigeland Sculpture Park", description: "200+ bronze and granite sculptures" },
        { name: "Viking Ship Museum", description: "Preserved Viking ships and artifacts" },
        { name: "Munch Museum", description: "World's largest collection of Edvard Munch's works" },
      ]}
      bestTimeToVisit="May to September offers mild weather and endless daylight. June has midnight sun. Winter brings skiing and Northern Lights opportunities. December has festive Christmas markets."
      travelTips={[
        "Norway is expensive - budget generously",
        "Oslo Pass covers transport and museums",
        "Nature is easily accessible from the city",
        "Norway in a Nutshell tour to fjords is spectacular",
      ]}
    />
  )
}
