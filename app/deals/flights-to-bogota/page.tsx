import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Bogota | Emu Can Fly",
  description:
    "Find the best flight deals from Canada to Bogota, Colombia. Compare cheap airfares to El Dorado Airport.",
}

export default function FlightsToBogotaPage() {
  return (
    <FlightDealPage
      title="Flights to Bogota"
      subtitle="Colombia's high-altitude capital"
      heroImage="/bogota-colombia-candelaria.jpg"
      destination="bogota"
      description="Bogotá has transformed into one of South America's most exciting cities, with world-class museums, incredible street art, emerging food scenes, and easy access to coffee country. Explore the colorful La Candelaria district and experience Colombia's cultural renaissance."
      topAttractions={[
        { name: "La Candelaria", description: "Historic colonial district with vibrant street art" },
        { name: "Monserrate", description: "Mountain sanctuary with panoramic city views" },
        { name: "Gold Museum (Museo del Oro)", description: "World's largest collection of pre-Hispanic gold" },
        { name: "Botero Museum", description: "Free museum featuring Fernando Botero's works" },
      ]}
      bestTimeToVisit="December to March and July to August are driest. Bogotá's high altitude (2,640m) means cool weather year-round - bring layers. Afternoons often bring rain showers."
      travelTips={[
        "Altitude can affect you - take it easy on day one",
        "Colombian coffee is excellent - visit a coffee farm",
        "Street food is delicious - try arepas and empanadas",
        "Uber works well for safe, affordable transport",
      ]}
    />
  )
}
