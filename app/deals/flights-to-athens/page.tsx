import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Athens | Emu Can Fly",
  description: "Find the best flight deals to Athens, Greece. Compare cheap airfares to Athens International Airport.",
}

export default function FlightsToAthensPage() {
  return (
    <FlightDealPage
      title="Flights to Athens"
      subtitle="Birthplace of Western civilization"
      heroImage="/placeholder.svg?height=400&width=1200"
      destination="athens"
      description="Athens is where ancient history comes alive beneath the eternal gaze of the Acropolis. Explore archaeological wonders, wander through charming neighborhoods, savor Greek cuisine, and use this historic capital as your gateway to the stunning Greek islands."
      popularDestinations={[
        { airportCode: "Athens (ATH)", description: "International airport, metro to city" },
        { airportCode: "Acropolis", description: "Parthenon and ancient ruins" },
        { airportCode: "Plaka", description: "Historic neighborhood, tavernas" },
        { airportCode: "Piraeus", description: "Port for island ferries" },
      ]}
      bestTimeToVisit="April to June and September to October are ideal with warm weather. Summer is hot and crowded but perfect for islands. Winter is mild with fewer tourists. Greek Easter is a special experience."
      travelTips={[
        "Acropolis is best visited early morning to avoid heat and crowds",
        "Greek salad and souvlaki are affordable and delicious",
        "Ferries to islands depart from Piraeus port",
        "Rooftop bars offer stunning Acropolis views at sunset",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "SYD → ATH",
          dates: "15Apr - 28Apr",
          price: "$1,199",
          currency: "AUD",
          link: "https://www.trip.com/flights/athens?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "MEL → ATH",
          dates: "22Apr - 05May",
          price: "$1,249",
          currency: "AUD",
          link: "https://www.trip.com/flights/athens?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "BNE → ATH",
          dates: "10May - 23May",
          price: "$1,149",
          currency: "AUD",
          link: "https://www.trip.com/flights/athens?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
