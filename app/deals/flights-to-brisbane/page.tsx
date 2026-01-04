import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Brisbane | Emu Can Fly",
  description:
    "Find the best flight deals from Canada to Brisbane, Australia. Compare cheap airfares to Brisbane Airport.",
}

export default function FlightsToBrisbanePage() {
  return (
    <FlightDealPage
      title="Flights to Brisbane"
      subtitle="Queensland's sunny river city"
      heroImage="/brisbane-australia-skyline.jpg"
      destination="brisbane"
      description="Brisbane basks in year-round sunshine along the Brisbane River. With its relaxed outdoor lifestyle, thriving food and bar scene, cultural precincts, and easy access to the Gold Coast and Great Barrier Reef, Queensland's capital is Australia's new world city."
      topAttractions={[
        { name: "South Bank Parklands", description: "Cultural precinct with free beach lagoon" },
        { name: "Lone Pine Koala Sanctuary", description: "World's first and largest koala sanctuary" },
        { name: "Story Bridge Adventure Climb", description: "Climb Brisbane's iconic cantilever bridge" },
        { name: "GOMA (Gallery of Modern Art)", description: "Australia's largest modern art gallery" },
      ]}
      bestTimeToVisit="Brisbane is pleasant year-round with over 280 sunny days. Winter (June-August) is ideal with dry, mild weather. Summer is hot and humid with afternoon storms. Spring brings jacaranda season."
      travelTips={[
        "Go Card works on all public transport",
        "South Bank has a free artificial beach",
        "Day trip to Gold Coast theme parks or beaches",
        "Lone Pine Koala Sanctuary for wildlife",
      ]}
    />
  )
}
