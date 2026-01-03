import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Singapore | Emu Can Fly",
  description: "Find the best flight deals to Singapore. Compare cheap airfares to Changi Airport.",
}

export default function FlightsToSingaporePage() {
  return (
    <FlightDealPage
      title="Flights to Singapore"
      subtitle="Discover the Lion City"
      heroImage="/singapore-marina-bay-skyline-night.jpg"
      destination="singapore"
      description="Singapore is a dazzling city-state that seamlessly blends futuristic architecture with rich heritage, world-class cuisine with hawker centers, and urban jungle with actual jungle. Experience Marina Bay's stunning skyline, diverse neighborhoods, and legendary shopping."
      popularDestinations={[
        { airportCode: "Changi (SIN)", description: "World's best airport, attractions within terminal" },
        { airportCode: "Marina Bay", description: "Iconic skyline, Gardens by the Bay, casino" },
        { airportCode: "Orchard Road", description: "Premium shopping district" },
        { airportCode: "Sentosa Island", description: "Beach resorts, Universal Studios, attractions" },
      ]}
      bestTimeToVisit="Singapore is warm and humid year-round. February to April tends to be driest. Major events like F1 Grand Prix (September) and Chinese New Year draw crowds but offer unique experiences."
      travelTips={[
        "MRT is efficient and covers most attractions",
        "Hawker centers offer incredible affordable food",
        "Strict laws - no chewing gum, no littering, no jaywalking",
        "Changi Airport is worth arriving early to explore",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "SYD → SIN",
          dates: "12Mar - 19Mar",
          price: "$499",
          currency: "AUD",
          link: "https://www.trip.com/flights/singapore?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "MEL → SIN",
          dates: "18Mar - 25Mar",
          price: "$529",
          currency: "AUD",
          link: "https://www.trip.com/flights/singapore?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "PER → SIN",
          dates: "05Apr - 12Apr",
          price: "$399",
          currency: "AUD",
          link: "https://www.trip.com/flights/singapore?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
