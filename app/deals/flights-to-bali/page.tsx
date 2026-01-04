import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Bali | Emu Can Fly",
  description: "Find the best flight deals to Bali, Indonesia. Compare cheap airfares from Canada.",
}

export default function FlightsToBaliPage() {
  return (
    <FlightDealPage
      title="Flights to Bali"
      subtitle="Escape to Indonesia's island paradise"
      heroImage="/bali-indonesia-temple-rice-terraces.jpg"
      destination="bali"
      description="Bali captivates with its dramatic dances, colorful ceremonies, arts and crafts, and stunning natural beauty. From world-class surfing and diving to ancient temples and lush rice terraces, this Indonesian island offers endless adventures and relaxation."
      topAttractions={[
        { name: "Tanah Lot Temple", description: "Iconic sea temple perched on a rocky outcrop" },
        { name: "Tegallalang Rice Terraces", description: "Stunning UNESCO-listed terraced rice paddies" },
        { name: "Ubud Monkey Forest", description: "Sacred sanctuary with playful long-tailed macaques" },
        { name: "Uluwatu Temple", description: "Clifftop temple with breathtaking sunset views" },
      ]}
      bestTimeToVisit="The dry season (April to October) is the best time to visit with sunny days and little rain. The wet season (November to March) brings afternoon showers but also lush green landscapes and fewer tourists."
      travelTips={[
        "Flights from Canada typically connect through Asia-Pacific hubs",
        "Visa on arrival available for Canadian passport holders",
        "Rent a scooter for easy transport (international license required)",
        "Respect local customs when visiting temples - cover shoulders and knees",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "YVR → DPS",
          dates: "05Mar - 15Mar",
          price: "CA$1,099",
          currency: "CAD",
          link: "https://www.trip.com/flights/bali?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
