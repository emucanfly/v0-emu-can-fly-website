import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Ho Chi Minh City | Emu Can Fly",
  description:
    "Find the best flight deals from Canada to Ho Chi Minh City, Vietnam. Compare cheap airfares to Tan Son Nhat Airport.",
}

export default function FlightsToHoChiMinhCityPage() {
  return (
    <FlightDealPage
      title="Flights to Ho Chi Minh City"
      subtitle="Vietnam's bustling southern hub"
      heroImage="/ho-chi-minh-city-vietnam-saigon.jpg"
      destination="ho-chi-minh"
      description="Ho Chi Minh City, still called Saigon by locals, is Vietnam's largest and most energetic city. Experience the buzz of motorbike-filled streets, incredible pho and banh mi, French colonial architecture, and poignant war history museums in this rapidly modernizing metropolis."
      topAttractions={[
        { name: "War Remnants Museum", description: "Powerful exhibits on the Vietnam War" },
        { name: "Cu Chi Tunnels", description: "Historic underground wartime tunnel network" },
        { name: "Ben Thanh Market", description: "Iconic covered market for food and souvenirs" },
        { name: "Notre-Dame Cathedral Basilica", description: "French colonial landmark in District 1" },
      ]}
      bestTimeToVisit="December to April is dry season with pleasant weather. May to November is wet season with afternoon downpours. Tet (Vietnamese New Year, Jan/Feb) is festive but many businesses close."
      travelTips={[
        "Grab is the go-to app for transport and food",
        "Cross the street confidently - traffic will flow around you",
        "Pho and banh mi are essential food experiences",
        "Haggling is expected at markets - start at 50% of asking price",
      ]}
    />
  )
}
