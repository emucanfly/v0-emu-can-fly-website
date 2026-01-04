import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Paris | Emu Can Fly",
  description: "Find the best flight deals to Paris, France. Compare cheap airfares from Canada.",
}

export default function FlightsToParisPage() {
  return (
    <FlightDealPage
      title="Flights to Paris"
      subtitle="The City of Light awaits"
      heroImage="/paris-eiffel-tower-seine-river.jpg"
      destination="paris"
      description="Paris is the city of romance, art, and gastronomy. Stroll along the Seine, marvel at the Eiffel Tower, explore world-class museums like the Louvre, and indulge in croissants, wine, and haute cuisine in the world's most elegant capital."
      topAttractions={[
        { name: "Eiffel Tower", description: "Iconic iron landmark with breathtaking city views" },
        { name: "Louvre Museum", description: "World's largest museum, home to the Mona Lisa" },
        { name: "Notre-Dame Cathedral", description: "Gothic masterpiece on the Île de la Cité" },
        { name: "Champs-Élysées", description: "Famous avenue leading to the Arc de Triomphe" },
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
          route: "YYZ → CDG",
          dates: "05Apr - 18Apr",
          price: "CA$799",
          currency: "CAD",
          link: "https://www.trip.com/flights/paris?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
