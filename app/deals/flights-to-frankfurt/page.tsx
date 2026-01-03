import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Frankfurt | Emu Can Fly",
  description: "Find the best flight deals to Frankfurt, Germany. Compare cheap airfares to Frankfurt Airport.",
}

export default function FlightsToFrankfurtPage() {
  return (
    <FlightDealPage
      title="Flights to Frankfurt"
      subtitle="Germany's financial heart with historic soul"
      heroImage="/placeholder.svg?height=400&width=1200"
      destination="frankfurt"
      description="Frankfurt surprises visitors with its mix of gleaming skyscrapers and half-timbered old town. As a major European hub, it offers easy access to all of Germany while providing world-class museums, traditional apple wine taverns, and a vibrant cultural scene."
      popularDestinations={[
        { airportCode: "Frankfurt (FRA)", description: "Major European hub, excellent connections" },
        { airportCode: "Romerberg", description: "Historic old town square" },
        { airportCode: "Museumsufer", description: "Museum embankment, world-class art" },
        { airportCode: "Sachsenhausen", description: "Apple wine district, cozy taverns" },
      ]}
      bestTimeToVisit="May to September offers warm weather and outdoor festivals. Spring and autumn are pleasant with fewer crowds. Christmas markets in December are magical. Winter can be grey and cold."
      travelTips={[
        "Frankfurt airport is a major hub - great for European connections",
        "Try Apfelwein (apple wine) in Sachsenhausen taverns",
        "Museum embankment has many world-class museums",
        "Easy day trips to Rhine Valley wineries",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "SYD → FRA",
          dates: "10Apr - 22Apr",
          price: "$1,049",
          currency: "AUD",
          link: "https://www.trip.com/flights/frankfurt?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "MEL → FRA",
          dates: "18Apr - 30Apr",
          price: "$1,099",
          currency: "AUD",
          link: "https://www.trip.com/flights/frankfurt?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "BNE → FRA",
          dates: "05May - 18May",
          price: "$999",
          currency: "AUD",
          link: "https://www.trip.com/flights/frankfurt?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
