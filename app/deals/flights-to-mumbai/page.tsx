import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Mumbai | Emu Can Fly",
  description:
    "Find the best flight deals to Mumbai, India. Compare cheap airfares to Chhatrapati Shivaji International Airport.",
}

export default function FlightsToMumbaiPage() {
  return (
    <FlightDealPage
      title="Flights to Mumbai"
      subtitle="India's city of dreams"
      heroImage="/mumbai-india-gateway-marine-drive.jpg"
      destination="mumbai"
      description="Mumbai is India's financial capital and home to Bollywood, where colonial-era architecture meets soaring skyscrapers. Experience the Gateway of India, Marine Drive's sunset, incredible street food, and the irrepressible energy of this maximum city that never sleeps."
      popularDestinations={[
        { airportCode: "Mumbai (BOM)", description: "Chhatrapati Shivaji International Airport" },
        { airportCode: "Gateway of India", description: "Iconic waterfront monument" },
        { airportCode: "Marine Drive", description: "Queen's Necklace, sunset views" },
        { airportCode: "Elephanta Caves", description: "UNESCO site, ancient rock temples" },
      ]}
      bestTimeToVisit="November to February offers pleasant weather with low humidity. October and March are also good. June to September is monsoon season - dramatic but very wet. April-May is hot and humid."
      travelTips={[
        "Local trains are the lifeblood of Mumbai - experience it once",
        "Vada pav and pav bhaji are essential street foods",
        "Uber and Ola work well for getting around",
        "Bandra and Colaba are great neighborhoods to explore",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "SYD → BOM",
          dates: "12Mar - 25Mar",
          price: "$749",
          currency: "AUD",
          link: "https://www.trip.com/flights/mumbai?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "MEL → BOM",
          dates: "20Mar - 02Apr",
          price: "$799",
          currency: "AUD",
          link: "https://www.trip.com/flights/mumbai?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "PER → BOM",
          dates: "08Apr - 20Apr",
          price: "$699",
          currency: "AUD",
          link: "https://www.trip.com/flights/mumbai?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
