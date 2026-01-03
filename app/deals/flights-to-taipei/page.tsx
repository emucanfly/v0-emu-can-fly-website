import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Taipei | Emu Can Fly",
  description:
    "Find the best flight deals to Taipei, Taiwan. Compare cheap airfares to Taiwan Taoyuan International Airport.",
}

export default function FlightsToTaipeiPage() {
  return (
    <FlightDealPage
      title="Flights to Taipei"
      subtitle="Taiwan's vibrant capital"
      heroImage="/taipei-taiwan-101-tower-cityscape.jpg"
      destination="taipei"
      description="Taipei charms visitors with its incredible night markets, stunning temples, modern architecture, and legendary food scene. From the heights of Taipei 101 to steaming bowls of beef noodle soup, this friendly city offers endless discoveries and some of Asia's best street food."
      popularDestinations={[
        { airportCode: "Taoyuan (TPE)", description: "Main international airport, 40km from city" },
        { airportCode: "Songshan (TSA)", description: "Domestic flights, city center location" },
        { airportCode: "Taipei 101", description: "Iconic skyscraper, observation deck" },
        { airportCode: "Shilin Night Market", description: "Taiwan's most famous night market" },
      ]}
      bestTimeToVisit="October to December offers pleasant weather with less rain. Spring (March-May) is mild but can be rainy. Summer is hot and humid with typhoon risk. Winter is cool with occasional cold snaps."
      travelTips={[
        "Get an EasyCard for seamless transport and payments",
        "Night markets are a must - try stinky tofu and bubble tea",
        "Hot springs in Beitou are easily accessible by MRT",
        "English signage is common, people are very helpful",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "SYD → TPE",
          dates: "15Mar - 25Mar",
          price: "$599",
          currency: "AUD",
          link: "https://www.trip.com/flights/taipei?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "MEL → TPE",
          dates: "22Mar - 01Apr",
          price: "$649",
          currency: "AUD",
          link: "https://www.trip.com/flights/taipei?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "BNE → TPE",
          dates: "10Apr - 20Apr",
          price: "$579",
          currency: "AUD",
          link: "https://www.trip.com/flights/taipei?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
