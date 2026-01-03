import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Paris | Emu Can Fly",
  description: "Find the best flight deals to Paris, France. Compare cheap airfares to Charles de Gaulle Airport.",
}

export default function FlightsToParisPage() {
  return (
    <FlightDealPage
      title="Flights to Paris"
      subtitle="The City of Light awaits"
      heroImage="/paris-eiffel-tower-seine-river.jpg"
      destination="paris"
      description="Paris is the city of romance, art, and gastronomy. Stroll along the Seine, marvel at the Eiffel Tower, explore world-class museums like the Louvre, and indulge in croissants, wine, and haute cuisine in the world's most elegant capital."
      popularDestinations={[
        { airportCode: "Charles de Gaulle (CDG)", description: "Main international airport" },
        { airportCode: "Orly (ORY)", description: "Domestic and European flights" },
        { airportCode: "Eiffel Tower", description: "Iconic iron landmark, city views" },
        { airportCode: "Louvre", description: "World's largest museum, Mona Lisa" },
      ]}
      bestTimeToVisit="April to June and September to October offer pleasant weather and fewer crowds. Summer is peak season - busy but festive. Winter is cold but romantic with holiday markets."
      travelTips={[
        "Metro is extensive and efficient - get a carnet of 10 tickets",
        "Book Eiffel Tower and Louvre tickets online in advance",
        "Learn basic French phrases - locals appreciate the effort",
        "Cafes charge more for terrace seating - worth it for people-watching",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "SYD → CDG",
          dates: "05Apr - 18Apr",
          price: "$1,149",
          currency: "AUD",
          link: "https://www.trip.com/flights/paris?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "MEL → CDG",
          dates: "12Apr - 25Apr",
          price: "$1,199",
          currency: "AUD",
          link: "https://www.trip.com/flights/paris?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "BNE → CDG",
          dates: "01May - 14May",
          price: "$1,099",
          currency: "AUD",
          link: "https://www.trip.com/flights/paris?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
