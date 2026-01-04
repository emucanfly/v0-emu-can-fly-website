import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Stockholm | Emu Can Fly",
  description:
    "Find the best flight deals from Canada to Stockholm, Sweden. Compare cheap airfares to Arlanda Airport.",
}

export default function FlightsToStockholmPage() {
  return (
    <FlightDealPage
      title="Flights to Stockholm"
      subtitle="Scandinavia's stunning capital"
      heroImage="/stockholm-sweden-gamla-stan.jpg"
      destination="stockholm"
      description="Stockholm spreads across 14 islands where Lake Mälaren meets the Baltic Sea. Explore the cobblestone streets of Gamla Stan, visit world-class museums, experience Swedish design and cuisine, and enjoy the unique light of Scandinavian seasons."
      topAttractions={[
        { name: "Vasa Museum", description: "Preserved 17th-century warship" },
        { name: "Gamla Stan", description: "Medieval old town with royal palace" },
        { name: "ABBA The Museum", description: "Interactive tribute to Sweden's famous band" },
        { name: "Skansen Open-Air Museum", description: "Historic Swedish life and Nordic animals" },
      ]}
      bestTimeToVisit="May to September offers long days and pleasant weather. Midsummer (late June) is a major celebration. Winter brings Christmas markets and possible Northern Lights. December is dark but cozy."
      travelTips={[
        "Almost everything can be paid by card - cash rarely needed",
        "Swedish fika (coffee break with pastries) is essential",
        "Vasa Museum is a must-see - 17th century warship",
        "Stockholm Pass offers good value for museum visits",
      ]}
    />
  )
}
