import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Melbourne | Emu Can Fly",
  description: "Find the best flight deals to Melbourne, Australia. Compare cheap airfares to Melbourne Airport.",
}

export default function FlightsToMelbournePage() {
  return (
    <FlightDealPage
      title="Flights to Melbourne"
      subtitle="Australia's cultural capital"
      heroImage="/melbourne-australia-skyline.jpg"
      destination="melbourne"
      description="Melbourne is Australia's cultural heart, famous for its street art laneways, world-class coffee, diverse food scene, and passionate sports culture. Explore hidden bars, trendy neighborhoods, beautiful gardens, and experience why locals love their liveable city."
      popularDestinations={[
        { airportCode: "Melbourne (MEL)", description: "Tullamarine Airport, SkyBus to city" },
        { airportCode: "Avalon (AVV)", description: "Budget airlines, southwest of city" },
        { airportCode: "Laneways", description: "Street art, hidden bars, cafes" },
        { airportCode: "Great Ocean Road", description: "Iconic coastal drive, day trip" },
      ]}
      bestTimeToVisit="March to May (autumn) and September to November (spring) are ideal. Summer hosts Australian Open and cricket. Winter is cold but great for food and culture. Melbourne weather is famously unpredictable."
      travelTips={[
        "Melbourne coffee culture is legendary - skip the chains",
        "Free tram zone covers the CBD",
        "Laneways hold the best street art and hidden gems",
        "Great Ocean Road day trip is essential",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "YVR → MEL",
          dates: "Any date",
          price: "$1,049",
          currency: "CAD",
          link: "https://www.trip.com/flights/melbourne?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "YYZ → MEL",
          dates: "Any date",
          price: "$1,149",
          currency: "CAD",
          link: "https://www.trip.com/flights/melbourne?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "YYC → MEL",
          dates: "18Mar - 25Mar",
          price: "$1,099",
          currency: "CAD",
          link: "https://www.trip.com/flights/melbourne?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
