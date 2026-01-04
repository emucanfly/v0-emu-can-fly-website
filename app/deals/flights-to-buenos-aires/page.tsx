import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Buenos Aires | Emu Can Fly",
  description:
    "Find the best flight deals from Canada to Buenos Aires, Argentina. Compare cheap airfares to Ezeiza Airport.",
}

export default function FlightsToBuenosAiresPage() {
  return (
    <FlightDealPage
      title="Flights to Buenos Aires"
      subtitle="South America's Paris"
      heroImage="/buenos-aires-argentina-obelisk.jpg"
      destination="buenos-aires"
      description="Buenos Aires seduces with its European elegance, passionate tango, world-class steakhouses, and vibrant neighborhoods. From colorful La Boca to elegant Recoleta, this city of contradictions offers incredible value and unforgettable experiences."
      topAttractions={[
        { name: "La Boca & Caminito", description: "Colorful neighborhood and birthplace of tango" },
        { name: "Recoleta Cemetery", description: "Ornate resting place of Eva Perón" },
        { name: "Teatro Colón", description: "World-renowned opera house with stunning acoustics" },
        { name: "San Telmo Market", description: "Sunday antique market and bohemian quarter" },
      ]}
      bestTimeToVisit="March to May (autumn) and September to November (spring) are ideal. Summer (December-February) is hot. Winter is mild but some attractions close. Tango festival is in August."
      travelTips={[
        "Argentine steaks are legendary - try a parrilla",
        "Tango shows range from touristy to authentic milongas",
        "Blue dollar rate may offer better exchange - research current rules",
        "Neighborhoods are very different - explore several",
      ]}
    />
  )
}
