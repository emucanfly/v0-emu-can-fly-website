import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Hong Kong | Emu Can Fly",
  description: "Find the best flight deals to Hong Kong. Compare cheap airfares to Hong Kong International Airport.",
}

export default function FlightsToHongKongPage() {
  return (
    <FlightDealPage
      title="Flights to Hong Kong"
      subtitle="Where East meets West"
      heroImage="/hong-kong-victoria-harbour-skyline.jpg"
      destination="hong-kong"
      description="Hong Kong dazzles with its dramatic skyline, bustling harbors, and unique blend of Chinese and British heritage. From dim sum to designer shopping, ancient temples to neon-lit streets, this dynamic city offers non-stop excitement and discovery."
      popularDestinations={[
        { airportCode: "Hong Kong (HKG)", description: "World-class international airport" },
        { airportCode: "Victoria Peak", description: "Iconic viewpoint overlooking the city" },
        { airportCode: "Kowloon", description: "Markets, street food, and local culture" },
        { airportCode: "Lantau Island", description: "Big Buddha, hiking, and Disneyland" },
      ]}
      bestTimeToVisit="October to December offers pleasant weather with clear skies. Spring (March-May) is mild but can be humid. Summer brings typhoon season and heat. Winter is cool and dry."
      travelTips={[
        "Get an Octopus card for seamless transport and payments",
        "Dim sum is a must - arrive early at popular restaurants",
        "The Star Ferry offers incredible harbor views for cheap",
        "English is widely spoken in tourist areas",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "SYD → HKG",
          dates: "10Mar - 18Mar",
          price: "$599",
          currency: "AUD",
          link: "https://www.trip.com/flights/hong-kong?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "MEL → HKG",
          dates: "15Mar - 23Mar",
          price: "$649",
          currency: "AUD",
          link: "https://www.trip.com/flights/hong-kong?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "BNE → HKG",
          dates: "01Apr - 10Apr",
          price: "$579",
          currency: "AUD",
          link: "https://www.trip.com/flights/hong-kong?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
