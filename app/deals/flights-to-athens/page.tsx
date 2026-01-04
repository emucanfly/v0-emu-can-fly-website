import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Athens | Emu Can Fly",
  description:
    "Find the best flight deals from Canada to Athens, Greece. Compare cheap airfares to Athens International Airport.",
}

export default function FlightsToAthensPage() {
  return (
    <FlightDealPage
      title="Flights to Athens"
      subtitle="Birthplace of Western civilization"
      heroImage="/athens-greece-acropolis.jpg"
      destination="athens"
      description="Athens is where ancient history comes alive beneath the eternal gaze of the Acropolis. Explore archaeological wonders, wander through charming neighborhoods, savor Greek cuisine, and use this historic capital as your gateway to the stunning Greek islands."
      topAttractions={[
        { name: "Acropolis & Parthenon", description: "Ancient citadel with iconic temple ruins" },
        { name: "Plaka District", description: "Historic neighborhood with tavernas and shops" },
        { name: "Ancient Agora", description: "Ancient marketplace and Temple of Hephaestus" },
        { name: "National Archaeological Museum", description: "World's finest collection of Greek antiquities" },
      ]}
      bestTimeToVisit="April to June and September to October are ideal with warm weather. Summer is hot and crowded but perfect for islands. Winter is mild with fewer tourists. Greek Easter is a special experience."
      travelTips={[
        "Acropolis is best visited early morning to avoid heat and crowds",
        "Greek salad and souvlaki are affordable and delicious",
        "Ferries to islands depart from Piraeus port",
        "Rooftop bars offer stunning Acropolis views at sunset",
      ]}
    />
  )
}
