import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Mexico City | Emu Can Fly",
  description:
    "Find the best flight deals from Canada to Mexico City, Mexico. Compare cheap airfares to Benito Juárez Airport.",
}

export default function FlightsToMexicoCityPage() {
  return (
    <FlightDealPage
      title="Flights to Mexico City"
      subtitle="Ancient ruins meet vibrant culture"
      heroImage="/mexico-city-zocalo.jpg"
      destination="mexico-city"
      description="Mexico City is a megalopolis of incredible depth - ancient Aztec ruins beneath Spanish colonial architecture, world-class museums, legendary street food, and neighborhoods each with their own personality. Experience one of the world's great cities at incredible value."
      topAttractions={[
        { name: "Teotihuacan Pyramids", description: "Ancient city with Pyramid of the Sun and Moon" },
        { name: "Zócalo & Historic Center", description: "Aztec ruins and cathedral in main square" },
        { name: "Chapultepec Castle", description: "Hilltop castle with stunning city views" },
        { name: "Frida Kahlo Museum", description: "Blue house where the artist lived and worked" },
      ]}
      bestTimeToVisit="March to May is warm and dry. June to October brings afternoon rains. November to February is cooler and drier. Day of the Dead (late October/early November) is spectacular."
      travelTips={[
        "Street tacos are an art form - look for busy stands",
        "Metro is cheap and efficient for getting around",
        "Uber is widely used and safer than street taxis",
        "Altitude (2,240m) may affect some - stay hydrated",
      ]}
    />
  )
}
