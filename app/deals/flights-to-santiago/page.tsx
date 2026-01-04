import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Santiago | Emu Can Fly",
  description: "Find the best flight deals from Canada to Santiago, Chile. Compare cheap airfares to Santiago Airport.",
}

export default function FlightsToSantiagoPage() {
  return (
    <FlightDealPage
      title="Flights to Santiago"
      subtitle="Gateway to Chilean adventures"
      heroImage="/santiago-chile-skyline.jpg"
      destination="santiago"
      description="Santiago sits in a valley surrounded by the snow-capped Andes, offering a perfect blend of cosmopolitan culture and outdoor adventure. Explore vibrant neighborhoods, world-class wine regions, and use the city as your base for skiing, hiking, and exploring Patagonia."
      topAttractions={[
        { name: "Cerro San Cristóbal", description: "Hilltop park with city and Andes views" },
        { name: "La Chascona", description: "Pablo Neruda's quirky ship-shaped home" },
        { name: "Valparaíso", description: "UNESCO colorful port city, 90 minutes away" },
        { name: "Maipo Valley Wineries", description: "Chile's premier wine region" },
      ]}
      bestTimeToVisit="September to November (spring) and March to May (autumn) are ideal. Summer (December-February) is hot but perfect for Patagonia. Winter offers skiing in the Andes."
      travelTips={[
        "Wine tours in Maipo and Casablanca valleys are excellent",
        "Day trip to Valparaiso and Viña del Mar is essential",
        "Andes skiing is close - easy day trips in winter",
        "Chilean Spanish has unique slang - locals appreciate efforts",
      ]}
    />
  )
}
