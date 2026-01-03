import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Istanbul | Emu Can Fly",
  description: "Find the best flight deals to Istanbul, Turkey. Compare cheap airfares to Istanbul Airport.",
}

export default function FlightsToIstanbulPage() {
  return (
    <FlightDealPage
      title="Flights to Istanbul"
      subtitle="Where East meets West"
      heroImage="/istanbul-turkey-blue-mosque.jpg"
      destination="istanbul"
      description="Istanbul straddles two continents, blending Byzantine churches, Ottoman mosques, and modern energy into one extraordinary city. Explore the Blue Mosque and Hagia Sophia, cruise the Bosphorus, haggle in the Grand Bazaar, and feast on incredible Turkish cuisine."
      popularDestinations={[
        { airportCode: "Istanbul (IST)", description: "New mega-airport, modern facilities" },
        { airportCode: "Sabiha Gokcen (SAW)", description: "Asian side, budget airlines" },
        { airportCode: "Sultanahmet", description: "Historic peninsula, major sights" },
        { airportCode: "Grand Bazaar", description: "Historic covered market, 4,000 shops" },
      ]}
      bestTimeToVisit="April to May and September to November offer pleasant weather. Summer is hot and crowded. Winter is cold but atmospheric with fewer tourists. Ramadan changes the rhythm of the city."
      travelTips={[
        "Istanbulkart is essential for all public transport",
        "Bosphorus ferry ride is a must-do experience",
        "Turkish breakfast is legendary - try it at a local cafe",
        "Haggling is expected at the Grand Bazaar",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "YVR → IST",
          dates: "10Apr - 23Apr",
          price: "$899",
          currency: "CAD",
          link: "https://www.trip.com/flights/istanbul?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "YYZ → IST",
          dates: "18Apr - 01May",
          price: "$849",
          currency: "CAD",
          link: "https://www.trip.com/flights/istanbul?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "YYC → IST",
          dates: "05May - 18May",
          price: "$929",
          currency: "CAD",
          link: "https://www.trip.com/flights/istanbul?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
