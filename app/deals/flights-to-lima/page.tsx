import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Lima | Emu Can Fly",
  description: "Find the best flight deals from Canada to Lima, Peru. Compare cheap airfares to Jorge Chávez Airport.",
}

export default function FlightsToLimaPage() {
  return (
    <FlightDealPage
      title="Flights to Lima"
      subtitle="Gastronomic capital of South America"
      heroImage="/lima-peru-plaza-mayor.jpg"
      destination="lima"
      description="Lima has emerged as South America's culinary capital, where ancient Incan heritage meets Spanish colonial architecture and world-renowned cuisine. Explore historic plazas, trendy Miraflores, incredible ceviche, and use Lima as your gateway to Machu Picchu and beyond."
      topAttractions={[
        { name: "Historic Centre & Plaza Mayor", description: "UNESCO World Heritage colonial architecture" },
        { name: "Miraflores Boardwalk", description: "Coastal promenade with ocean views and parks" },
        { name: "Larco Museum", description: "Pre-Columbian art in a stunning 18th-century mansion" },
        { name: "Barranco District", description: "Bohemian neighborhood with art galleries and nightlife" },
      ]}
      bestTimeToVisit="December to April is summer with sunny days. May to November is winter - cloudy but mild. Lima rarely rains. Cusco and Machu Picchu are best in dry season (May-October)."
      travelTips={[
        "Peruvian cuisine is world-class - try ceviche and causa",
        "Book Machu Picchu permits months in advance",
        "Uber and taxi apps are safest for transport",
        "Altitude in Cusco requires acclimatization",
      ]}
    />
  )
}
