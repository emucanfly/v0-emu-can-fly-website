import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Geneva | Emu Can Fly",
  description:
    "Find the best flight deals from Canada to Geneva, Switzerland. Compare cheap airfares to Geneva Airport.",
}

export default function FlightsToGenevaPage() {
  return (
    <FlightDealPage
      title="Flights to Geneva"
      subtitle="Gateway to the Alps"
      heroImage="/geneva-switzerland-lake.jpg"
      destination="geneva"
      description="Geneva sits at the foot of the Alps on the shores of Europe's largest lake. This cosmopolitan city combines Swiss precision with French flair, offering world-class museums, luxury shopping, and easy access to stunning Alpine adventures."
      topAttractions={[
        { name: "Jet d'Eau", description: "Iconic 140-meter water fountain on the lake" },
        { name: "Old Town & St. Pierre Cathedral", description: "Medieval streets and panoramic views" },
        { name: "CERN", description: "World's largest particle physics laboratory" },
        { name: "Lake Geneva Cruises", description: "Scenic boat trips with Alpine backdrop" },
      ]}
      bestTimeToVisit="June to September for outdoor activities and warm weather. December to March for skiing in nearby resorts. Spring and autumn are pleasant with fewer crowds. Switzerland is beautiful year-round."
      travelTips={[
        "Hotels provide free public transport pass",
        "Switzerland is expensive - budget accordingly",
        "Day trips to Chamonix (France) and Alps easily accessible",
        "CERN tours available for science enthusiasts",
      ]}
    />
  )
}
