import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Singapore | Emu Can Fly",
  description: "Find the best flight deals to Singapore. Compare cheap airfares from Canada.",
}

export default function FlightsToSingaporePage() {
  return (
    <FlightDealPage
      title="Flights to Singapore"
      subtitle="Discover the Lion City"
      heroImage="/singapore-marina-bay-skyline-night.jpg"
      destination="singapore"
      description="Singapore is a dazzling city-state that seamlessly blends futuristic architecture with rich heritage, world-class cuisine with hawker centers, and urban jungle with actual jungle. Experience Marina Bay's stunning skyline, diverse neighborhoods, and legendary shopping."
      topAttractions={[
        { name: "Gardens by the Bay", description: "Futuristic nature park with iconic Supertrees" },
        { name: "Marina Bay Sands", description: "Iconic hotel with rooftop infinity pool" },
        { name: "Sentosa Island", description: "Resort island with Universal Studios and beaches" },
        { name: "Hawker Centres", description: "Michelin-starred street food at Maxwell and Lau Pa Sat" },
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
          route: "YVR → SIN",
          dates: "12Mar - 19Mar",
          price: "CA$999",
          currency: "CAD",
          link: "https://www.trip.com/flights/singapore?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
