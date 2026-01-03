import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Geneva | Emu Can Fly",
  description: "Find the best flight deals to Geneva, Switzerland. Compare cheap airfares to Geneva Airport.",
}

export default function FlightsToGenevaPage() {
  return (
    <FlightDealPage
      title="Flights to Geneva"
      subtitle="Gateway to the Alps"
      heroImage="/placeholder.svg?height=400&width=1200"
      destination="geneva"
      description="Geneva sits at the foot of the Alps on the shores of Europe's largest lake. This cosmopolitan city combines Swiss precision with French flair, offering world-class museums, luxury shopping, and easy access to stunning Alpine adventures."
      popularDestinations={[
        { airportCode: "Geneva (GVA)", description: "International airport, easy city access" },
        { airportCode: "Jet d'Eau", description: "Iconic 140m water fountain" },
        { airportCode: "Old Town", description: "Medieval streets, St. Pierre Cathedral" },
        { airportCode: "Lake Geneva", description: "Cruises, lakeside promenades" },
      ]}
      bestTimeToVisit="June to September for outdoor activities and warm weather. December to March for skiing in nearby resorts. Spring and autumn are pleasant with fewer crowds. Switzerland is beautiful year-round."
      travelTips={[
        "Hotels provide free public transport pass",
        "Switzerland is expensive - budget accordingly",
        "Day trips to Chamonix (France) and Alps easily accessible",
        "CERN tours available for science enthusiasts",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "SYD → GVA",
          dates: "10Apr - 22Apr",
          price: "$1,199",
          currency: "AUD",
          link: "https://www.trip.com/flights/geneva?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "MEL → GVA",
          dates: "18Apr - 30Apr",
          price: "$1,249",
          currency: "AUD",
          link: "https://www.trip.com/flights/geneva?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "BNE → GVA",
          dates: "05May - 18May",
          price: "$1,149",
          currency: "AUD",
          link: "https://www.trip.com/flights/geneva?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
