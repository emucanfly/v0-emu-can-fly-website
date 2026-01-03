import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Santiago | Emu Can Fly",
  description: "Find the best flight deals to Santiago, Chile. Compare cheap airfares to Santiago Airport.",
}

export default function FlightsToSantiagoPage() {
  return (
    <FlightDealPage
      title="Flights to Santiago"
      subtitle="Gateway to Chilean adventures"
      heroImage="/santiago-chile-skyline.jpg"
      destination="santiago"
      description="Santiago sits in a valley surrounded by the snow-capped Andes, offering a perfect blend of cosmopolitan culture and outdoor adventure. Explore vibrant neighborhoods, world-class wine regions, and use the city as your base for skiing, hiking, and exploring Patagonia."
      popularDestinations={[
        { airportCode: "Santiago (SCL)", description: "International airport, modern terminal" },
        { airportCode: "Bellavista", description: "Bohemian neighborhood, nightlife" },
        { airportCode: "Valparaiso", description: "Colorful port city, day trip" },
        { airportCode: "Maipo Valley", description: "Wine region, tastings" },
      ]}
      bestTimeToVisit="September to November (spring) and March to May (autumn) are ideal. Summer (December-February) is hot but perfect for Patagonia. Winter offers skiing in the Andes."
      travelTips={[
        "Wine tours in Maipo and Casablanca valleys are excellent",
        "Day trip to Valparaiso and Viña del Mar is essential",
        "Andes skiing is close - easy day trips in winter",
        "Chilean Spanish has unique slang - locals appreciate efforts",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "YVR → SCL",
          dates: "08Apr - 20Apr",
          price: "$1,099",
          currency: "CAD",
          link: "https://www.trip.com/flights/santiago?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "YYZ → SCL",
          dates: "15Apr - 28Apr",
          price: "$999",
          currency: "CAD",
          link: "https://www.trip.com/flights/santiago?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "YYC → SCL",
          dates: "01May - 14May",
          price: "$1,149",
          currency: "CAD",
          link: "https://www.trip.com/flights/santiago?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
