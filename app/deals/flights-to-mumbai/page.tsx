import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Mumbai | Emu Can Fly",
  description:
    "Find the best flight deals from Canada to Mumbai, India. Compare cheap airfares to Chhatrapati Shivaji International Airport.",
}

export default function FlightsToMumbaiPage() {
  return (
    <FlightDealPage
      title="Flights to Mumbai"
      subtitle="India's city of dreams"
      heroImage="/mumbai-india-gateway-marine-drive.jpg"
      destination="mumbai"
      description="Mumbai is India's financial capital and home to Bollywood, where colonial-era architecture meets soaring skyscrapers. Experience the Gateway of India, Marine Drive's sunset, incredible street food, and the irrepressible energy of this maximum city that never sleeps."
      topAttractions={[
        { name: "Gateway of India", description: "Iconic waterfront arch overlooking the harbor" },
        { name: "Marine Drive", description: "Queen's Necklace promenade with sunset views" },
        { name: "Elephanta Caves", description: "UNESCO rock-cut temples on an island" },
        { name: "Chhatrapati Shivaji Terminus", description: "Stunning Victorian Gothic railway station" },
      ]}
      bestTimeToVisit="November to February offers pleasant weather with low humidity. October and March are also good. June to September is monsoon season - dramatic but very wet. April-May is hot and humid."
      travelTips={[
        "Local trains are the lifeblood of Mumbai - experience it once",
        "Vada pav and pav bhaji are essential street foods",
        "Uber and Ola work well for getting around",
        "Bandra and Colaba are great neighborhoods to explore",
      ]}
    />
  )
}
