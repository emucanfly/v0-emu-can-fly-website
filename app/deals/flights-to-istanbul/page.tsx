import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Istanbul | Emu Can Fly",
  description:
    "Find the best flight deals from Canada to Istanbul, Turkiye. Compare cheap airfares to Istanbul Airport.",
}

export default function FlightsToIstanbulPage() {
  return (
    <FlightDealPage
      title="Flights to Istanbul"
      subtitle="Where East meets West"
      heroImage="/istanbul-turkey-blue-mosque.jpg"
      destination="istanbul"
      description="Istanbul straddles two continents, blending Byzantine churches, Ottoman mosques, and modern energy into one extraordinary city. Explore the Blue Mosque and Hagia Sophia, cruise the Bosphorus, haggle in the Grand Bazaar, and feast on incredible Turkish cuisine."
      topAttractions={[
        { name: "Hagia Sophia", description: "Iconic 6th-century basilica turned mosque" },
        { name: "Blue Mosque", description: "Stunning Ottoman mosque with six minarets" },
        { name: "Grand Bazaar", description: "Historic covered market with 4,000+ shops" },
        { name: "Bosphorus Cruise", description: "Scenic boat ride between Europe and Asia" },
      ]}
      bestTimeToVisit="April to May and September to November offer pleasant weather. Summer is hot and crowded. Winter is cold but atmospheric with fewer tourists. Ramadan changes the rhythm of the city."
      travelTips={[
        "Istanbulkart is essential for all public transport",
        "Bosphorus ferry ride is a must-do experience",
        "Turkish breakfast is legendary - try it at a local cafe",
        "Haggling is expected at the Grand Bazaar",
      ]}
    />
  )
}
