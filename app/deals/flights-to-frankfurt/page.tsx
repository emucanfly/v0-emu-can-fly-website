import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Frankfurt | Emu Can Fly",
  description:
    "Find the best flight deals from Canada to Frankfurt, Germany. Compare cheap airfares to Frankfurt Airport.",
}

export default function FlightsToFrankfurtPage() {
  return (
    <FlightDealPage
      title="Flights to Frankfurt"
      subtitle="Germany's financial heart with historic soul"
      heroImage="/frankfurt-germany-skyline.jpg"
      destination="frankfurt"
      description="Frankfurt surprises visitors with its mix of gleaming skyscrapers and half-timbered old town. As a major European hub, it offers easy access to all of Germany while providing world-class museums, traditional apple wine taverns, and a vibrant cultural scene."
      topAttractions={[
        { name: "Römerberg", description: "Picturesque medieval town square" },
        { name: "Museumsufer", description: "13 world-class museums along the riverbank" },
        { name: "St. Bartholomew's Cathedral", description: "Gothic cathedral where emperors were crowned" },
        { name: "Palmengarten", description: "Beautiful botanical garden with tropical greenhouses" },
      ]}
      bestTimeToVisit="May to September offers warm weather and outdoor festivals. Spring and autumn are pleasant with fewer crowds. Christmas markets in December are magical. Winter can be grey and cold."
      travelTips={[
        "Frankfurt airport is a major hub - great for European connections",
        "Try Apfelwein (apple wine) in Sachsenhausen taverns",
        "Museum embankment has many world-class museums",
        "Easy day trips to Rhine Valley wineries",
      ]}
    />
  )
}
