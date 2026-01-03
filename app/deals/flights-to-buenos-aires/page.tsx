import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Buenos Aires | Emu Can Fly",
  description: "Find the best flight deals to Buenos Aires, Argentina. Compare cheap airfares to Ezeiza Airport.",
}

export default function FlightsToBuenosAiresPage() {
  return (
    <FlightDealPage
      title="Flights to Buenos Aires"
      subtitle="South America's Paris"
      heroImage="/buenos-aires-argentina-obelisk.jpg"
      destination="buenos-aires"
      description="Buenos Aires seduces with its European elegance, passionate tango, world-class steakhouses, and vibrant neighborhoods. From colorful La Boca to elegant Recoleta, this city of contradictions offers incredible value and unforgettable experiences."
      popularDestinations={[
        { airportCode: "Ezeiza (EZE)", description: "International airport, 35km from city" },
        { airportCode: "Aeroparque (AEP)", description: "Domestic flights, city center" },
        { airportCode: "La Boca", description: "Colorful neighborhood, tango roots" },
        { airportCode: "Recoleta", description: "Elegant district, famous cemetery" },
      ]}
      bestTimeToVisit="March to May (autumn) and September to November (spring) are ideal. Summer (December-February) is hot. Winter is mild but some attractions close. Tango festival is in August."
      travelTips={[
        "Argentine steaks are legendary - try a parrilla",
        "Tango shows range from touristy to authentic milongas",
        "Blue dollar rate may offer better exchange - research current rules",
        "Neighborhoods are very different - explore several",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "YVR → EZE",
          dates: "01Apr - 15Apr",
          price: "$1,199",
          currency: "CAD",
          link: "https://www.trip.com/flights/buenos-aires?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "YYZ → EZE",
          dates: "10Apr - 24Apr",
          price: "$1,099",
          currency: "CAD",
          link: "https://www.trip.com/flights/buenos-aires?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "YYC → EZE",
          dates: "01May - 15May",
          price: "$1,249",
          currency: "CAD",
          link: "https://www.trip.com/flights/buenos-aires?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
