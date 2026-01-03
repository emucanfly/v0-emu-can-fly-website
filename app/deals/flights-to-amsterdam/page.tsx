import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Amsterdam | Emu Can Fly",
  description: "Find the best flight deals to Amsterdam, Netherlands. Compare cheap airfares to Schiphol Airport.",
}

export default function FlightsToAmsterdamPage() {
  return (
    <FlightDealPage
      title="Flights to Amsterdam"
      subtitle="Canals, culture, and charm"
      heroImage="/amsterdam-netherlands-canals-bikes.jpg"
      destination="amsterdam"
      description="Amsterdam enchants with its iconic canals, historic houses, world-class museums, and liberal culture. Cycle along cobblestone streets, visit the Anne Frank House, admire Van Gogh masterpieces, and experience the gezellig (cozy) Dutch way of life."
      popularDestinations={[
        { airportCode: "Schiphol (AMS)", description: "Major European hub, train to city center" },
        { airportCode: "Canal Ring", description: "UNESCO World Heritage, boat tours" },
        { airportCode: "Museumplein", description: "Van Gogh, Rijksmuseum, Stedelijk" },
        { airportCode: "Jordaan", description: "Charming neighborhood, cafes, boutiques" },
      ]}
      bestTimeToVisit="April to May brings tulip season and pleasant weather. Summer (June-August) is peak season with long days. Autumn is beautiful with golden leaves. Winter is cold but cozy with holiday markets."
      travelTips={[
        "Rent a bike - it's the best way to explore like a local",
        "Book Anne Frank House tickets weeks in advance",
        "I amsterdam City Card covers museums and transport",
        "Coffee shops are for cannabis; cafes serve coffee",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "SYD → AMS",
          dates: "08Apr - 20Apr",
          price: "$1,099",
          currency: "AUD",
          link: "https://www.trip.com/flights/amsterdam?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "MEL → AMS",
          dates: "15Apr - 28Apr",
          price: "$1,149",
          currency: "AUD",
          link: "https://www.trip.com/flights/amsterdam?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "PER → AMS",
          dates: "01May - 14May",
          price: "$1,049",
          currency: "AUD",
          link: "https://www.trip.com/flights/amsterdam?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
