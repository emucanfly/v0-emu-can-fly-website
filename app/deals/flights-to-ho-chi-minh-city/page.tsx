import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Ho Chi Minh City | Emu Can Fly",
  description:
    "Find the best flight deals to Ho Chi Minh City, Vietnam. Compare cheap airfares to Tan Son Nhat Airport.",
}

export default function FlightsToHoChiMinhCityPage() {
  return (
    <FlightDealPage
      title="Flights to Ho Chi Minh City"
      subtitle="Vietnam's bustling southern hub"
      heroImage="/ho-chi-minh-city-vietnam-saigon.jpg"
      destination="ho-chi-minh-city"
      description="Ho Chi Minh City, still called Saigon by locals, is Vietnam's largest and most energetic city. Experience the buzz of motorbike-filled streets, incredible pho and banh mi, French colonial architecture, and poignant war history museums in this rapidly modernizing metropolis."
      popularDestinations={[
        { airportCode: "Tan Son Nhat (SGN)", description: "Main international airport, city center location" },
        { airportCode: "District 1", description: "Central tourist area, Notre-Dame Cathedral" },
        { airportCode: "Cu Chi Tunnels", description: "Historic wartime tunnel network" },
        { airportCode: "Mekong Delta", description: "Day trips to floating markets" },
      ]}
      bestTimeToVisit="December to April is dry season with pleasant weather. May to November is wet season with afternoon downpours. Tet (Vietnamese New Year, Jan/Feb) is festive but many businesses close."
      travelTips={[
        "Grab is the go-to app for transport and food",
        "Cross the street confidently - traffic will flow around you",
        "Pho and banh mi are essential food experiences",
        "Haggling is expected at markets - start at 50% of asking price",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "SYD → SGN",
          dates: "10Mar - 20Mar",
          price: "$549",
          currency: "AUD",
          link: "https://www.trip.com/flights/ho-chi-minh-city?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "MEL → SGN",
          dates: "18Mar - 28Mar",
          price: "$579",
          currency: "AUD",
          link: "https://www.trip.com/flights/ho-chi-minh-city?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "BNE → SGN",
          dates: "05Apr - 15Apr",
          price: "$529",
          currency: "AUD",
          link: "https://www.trip.com/flights/ho-chi-minh-city?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
