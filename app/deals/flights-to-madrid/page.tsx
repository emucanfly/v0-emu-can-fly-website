import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Madrid | Emu Can Fly",
  description: "Find the best flight deals to Madrid, Spain. Compare cheap airfares to Barajas Airport.",
}

export default function FlightsToMadridPage() {
  return (
    <FlightDealPage
      title="Flights to Madrid"
      subtitle="Spain's passionate capital"
      heroImage="/madrid-spain-plaza-mayor-royal-palace.jpg"
      destination="madrid"
      description="Madrid pulses with energy - from world-class art museums to legendary tapas bars, elegant plazas to lively nightlife that continues until dawn. Experience the Prado and Reina Sofia, stroll through Retiro Park, and discover why Madrileños live life to the fullest."
      popularDestinations={[
        { airportCode: "Barajas (MAD)", description: "Major international hub, metro connected" },
        { airportCode: "Prado Museum", description: "World-class art collection" },
        { airportCode: "Plaza Mayor", description: "Historic central square" },
        { airportCode: "Retiro Park", description: "Beautiful royal gardens and lake" },
      ]}
      bestTimeToVisit="March to May and September to November offer pleasant weather. Summer is very hot. Winter is cold but sunny. San Isidro festival in May brings traditional celebrations."
      travelTips={[
        "Locals eat late - lunch at 2pm, dinner at 10pm",
        "Tapas hopping is an art - one drink, one tapa, move on",
        "Metro is excellent and cheap for getting around",
        "Day trips to Toledo and Segovia are easy by train",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "SYD → MAD",
          dates: "15Apr - 28Apr",
          price: "$1,129",
          currency: "AUD",
          link: "https://www.trip.com/flights/madrid?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "MEL → MAD",
          dates: "22Apr - 05May",
          price: "$1,179",
          currency: "AUD",
          link: "https://www.trip.com/flights/madrid?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "BNE → MAD",
          dates: "10May - 23May",
          price: "$1,079",
          currency: "AUD",
          link: "https://www.trip.com/flights/madrid?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
