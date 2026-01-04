import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Cancun | Emu Can Fly",
  description:
    "Find the best flight deals from Canada to Cancun, Mexico. Compare cheap airfares to Cancun International Airport.",
}

export default function FlightsToCancunPage() {
  return (
    <FlightDealPage
      title="Flights to Cancun"
      subtitle="Mexico's Caribbean paradise"
      heroImage="/cancun-mexico-beach.jpg"
      destination="cancun"
      description="Cancun offers the perfect blend of stunning Caribbean beaches, all-inclusive resorts, ancient Mayan ruins, and vibrant nightlife. Whether you seek relaxation, adventure, or cultural exploration, Mexico's Riviera Maya delivers tropical paradise and incredible history."
      topAttractions={[
        { name: "Chichen Itza", description: "New Wonder of the World and Mayan masterpiece" },
        { name: "Cenotes", description: "Natural underground swimming pools and caves" },
        { name: "Isla Mujeres", description: "Peaceful island paradise, short ferry ride" },
        { name: "Xcaret Eco Park", description: "Nature, culture, and underground rivers" },
      ]}
      bestTimeToVisit="December to April is dry season with perfect weather. May to June is shoulder season with good deals. July to October is hurricane season - prices drop but weather is risky."
      travelTips={[
        "All-inclusive resorts offer great value",
        "Rent a car to explore cenotes and ruins",
        "Chichen Itza is best visited early morning",
        "Swim in cenotes - natural underground pools",
      ]}
    />
  )
}
