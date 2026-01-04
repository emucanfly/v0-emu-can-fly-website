import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Auckland | Emu Can Fly",
  description:
    "Find the best flight deals from Canada to Auckland, New Zealand. Compare cheap airfares to Auckland Airport.",
}

export default function FlightsToAucklandPage() {
  return (
    <FlightDealPage
      title="Flights to Auckland"
      subtitle="New Zealand's City of Sails"
      heroImage="/auckland-new-zealand-skyline.jpg"
      destination="auckland"
      description="Auckland is New Zealand's largest city, nestled between two harbours with volcanic cones dotting the landscape. Experience Maori culture, world-class wine regions, stunning beaches, and use Auckland as your gateway to explore both North and South Islands."
      topAttractions={[
        { name: "Sky Tower", description: "Iconic 328m tower with observation deck and SkyWalk" },
        { name: "Waiheke Island", description: "Wine region paradise just a ferry ride away" },
        { name: "Rangitoto Island", description: "Volcanic island with stunning harbor views" },
        { name: "Auckland War Memorial Museum", description: "World-class Maori and Pacific collections" },
      ]}
      bestTimeToVisit="December to March (summer) offers warm weather and outdoor activities. Autumn (March-May) has beautiful colors. Winter is mild with fewer tourists. Auckland's weather is changeable year-round."
      travelTips={[
        "AT HOP card for public transport",
        "Waiheke Island ferry is a must-do wine trip",
        "Rent a car to explore beyond Auckland",
        "Try a hangi (Maori feast) for authentic cuisine",
      ]}
    />
  )
}
