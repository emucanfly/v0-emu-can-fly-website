import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Lisbon | Emu Can Fly",
  description: "Find the best flight deals to Lisbon, Portugal. Compare cheap airfares to Lisbon Airport.",
}

export default function FlightsToLisbonPage() {
  return (
    <FlightDealPage
      title="Flights to Lisbon"
      subtitle="Europe's sunniest capital"
      heroImage="/placeholder.svg?height=400&width=1200"
      destination="lisbon"
      description="Lisbon captivates with its pastel-colored buildings, nostalgic trams, and stunning viewpoints overlooking the Tagus River. Explore ancient Alfama, indulge in pastéis de nata, listen to soulful fado music, and discover why this coastal capital is Europe's rising star."
      popularDestinations={[
        { airportCode: "Lisbon (LIS)", description: "International airport, metro connected" },
        { airportCode: "Alfama", description: "Oldest district, narrow streets, fado bars" },
        { airportCode: "Belem", description: "UNESCO monasteries, egg tarts" },
        { airportCode: "Sintra", description: "Fairytale palaces, day trip" },
      ]}
      bestTimeToVisit="March to May and September to October offer pleasant weather. Summer is hot and busy. Winter is mild with occasional rain. Festivals like Santos Populares (June) add to the experience."
      travelTips={[
        "Wear comfortable shoes - Lisbon is hilly!",
        "Tram 28 is scenic but often crowded - watch for pickpockets",
        "Pastéis de Belém are the original egg tarts",
        "Day trips to Sintra and Cascais are easy by train",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "SYD → LIS",
          dates: "12Apr - 25Apr",
          price: "$1,099",
          currency: "AUD",
          link: "https://www.trip.com/flights/lisbon?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "MEL → LIS",
          dates: "20Apr - 03May",
          price: "$1,149",
          currency: "AUD",
          link: "https://www.trip.com/flights/lisbon?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "BNE → LIS",
          dates: "08May - 21May",
          price: "$1,049",
          currency: "AUD",
          link: "https://www.trip.com/flights/lisbon?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
