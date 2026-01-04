import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Taipei | Emu Can Fly",
  description: "Find the best flight deals to Taipei, Taiwan. Compare cheap airfares from Canada.",
}

export default function FlightsToTaipeiPage() {
  return (
    <FlightDealPage
      title="Flights to Taipei"
      subtitle="Taiwan's vibrant capital"
      heroImage="/taipei-taiwan-101.jpg"
      destination="taipei"
      description="Taipei charms visitors with its incredible night markets, stunning temples, modern architecture, and legendary food scene. From the heights of Taipei 101 to steaming bowls of beef noodle soup, this friendly city offers endless discoveries and some of Asia's best street food."
      topAttractions={[
        { name: "Taipei 101", description: "Iconic bamboo-shaped skyscraper with observation deck" },
        { name: "Shilin Night Market", description: "Taiwan's largest and most famous night market" },
        { name: "Longshan Temple", description: "Historic Buddhist temple with ornate carvings" },
        { name: "Jiufen Old Street", description: "Charming hillside village that inspired Spirited Away" },
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
          route: "YVR → TPE",
          dates: "15Mar - 25Mar",
          price: "CA$899",
          currency: "CAD",
          link: "https://www.trip.com/flights/taipei?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
