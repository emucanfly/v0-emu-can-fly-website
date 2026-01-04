import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Madrid | Emu Can Fly",
  description: "Find the best flight deals from Canada to Madrid, Spain. Compare cheap airfares to Barajas Airport.",
}

export default function FlightsToMadridPage() {
  return (
    <FlightDealPage
      title="Flights to Madrid"
      subtitle="Spain's passionate capital"
      heroImage="/madrid-spain-plaza-mayor-royal-palace.jpg"
      destination="madrid"
      description="Madrid pulses with energy - from world-class art museums to legendary tapas bars, elegant plazas to lively nightlife that continues until dawn. Experience the Prado and Reina Sofia, stroll through Retiro Park, and discover why Madrileños live life to the fullest."
      topAttractions={[
        { name: "Prado Museum", description: "World-class collection of European art" },
        { name: "Royal Palace of Madrid", description: "Largest functioning royal palace in Europe" },
        { name: "Retiro Park", description: "Beautiful royal gardens with crystal palace" },
        { name: "Reina Sofía Museum", description: "Home to Picasso's Guernica masterpiece" },
      ]}
      bestTimeToVisit="March to May and September to November offer pleasant weather. Summer is very hot. Winter is cold but sunny. San Isidro festival in May brings traditional celebrations."
      travelTips={[
        "Locals eat late - lunch at 2pm, dinner at 10pm",
        "Tapas hopping is an art - one drink, one tapa, move on",
        "Metro is excellent and cheap for getting around",
        "Day trips to Toledo and Segovia are easy by train",
      ]}
    />
  )
}
