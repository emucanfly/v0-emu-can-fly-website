import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Rio De Janeiro | Emu Can Fly",
  description: "Find the best flight deals to Rio de Janeiro, Brazil. Compare cheap airfares to Galeão Airport.",
}

export default function FlightsToRioDeJaneiroPage() {
  return (
    <FlightDealPage
      title="Flights to Rio De Janeiro"
      subtitle="Cidade Maravilhosa"
      heroImage="/rio-de-janeiro-brazil-christ.jpg"
      destination="rio-de-janeiro"
      description="Rio de Janeiro is a city of dramatic beauty - from Christ the Redeemer overlooking Sugarloaf Mountain to the golden curves of Copacabana Beach. Experience samba, Carnival, incredible nature, and the infectious joy of carioca culture in the Marvelous City."
      popularDestinations={[
        { airportCode: "Galeão (GIG)", description: "International airport, 20km from center" },
        { airportCode: "Santos Dumont (SDU)", description: "Domestic flights, city center" },
        { airportCode: "Christ the Redeemer", description: "Iconic statue, panoramic views" },
        { airportCode: "Copacabana", description: "Famous beach, promenade, nightlife" },
      ]}
      bestTimeToVisit="December to March is summer - hot, festive, and Carnival (Feb/Mar). April to June and August to October are pleasant. Winter (June-August) is mild with fewer tourists."
      travelTips={[
        "Uber is safe and affordable for getting around",
        "Be aware of your surroundings - leave valuables at hotel",
        "Take the cog train to Christ the Redeemer",
        "Carnival requires advance planning and accommodation booking",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "YVR → GIG",
          dates: "05Apr - 18Apr",
          price: "$1,249",
          currency: "CAD",
          link: "https://www.trip.com/flights/rio-de-janeiro?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "YYZ → GIG",
          dates: "12Apr - 25Apr",
          price: "$1,149",
          currency: "CAD",
          link: "https://www.trip.com/flights/rio-de-janeiro?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "YYC → GIG",
          dates: "01May - 14May",
          price: "$1,299",
          currency: "CAD",
          link: "https://www.trip.com/flights/rio-de-janeiro?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
