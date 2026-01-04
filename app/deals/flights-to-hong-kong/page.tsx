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
      topAttractions={[
        {
          name: "Victoria Peak",
          description: "Ride the iconic Peak Tram for breathtaking panoramic views of the harbour and skyline",
        },
        {
          name: "Tian Tan Buddha",
          description:
            "The majestic 34-metre bronze Buddha statue on Lantau Island, accessible by Ngong Ping 360 cable car",
        },
        {
          name: "Temple Street Night Market",
          description: "Bustling night bazaar with street food, fortune tellers, and bargain shopping",
        },
        {
          name: "Star Ferry",
          description: "Historic harbour crossing with stunning views of both Hong Kong Island and Kowloon",
        },
      ]}
      bestTimeToVisit="October to December offers pleasant weather with clear skies. Spring (March-May) is mild but can be humid. Summer brings typhoon season and heat. Winter is cool and dry."
      travelTips={[
        "Get an Octopus card for seamless transport and payments",
        "Dim sum is a must - arrive early at popular restaurants",
        "The Star Ferry offers incredible harbor views for cheap",
        "English is widely spoken in tourist areas",
      ]}
    />
  )
}
