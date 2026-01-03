import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Cancun | Emu Can Fly",
  description: "Find the best flight deals to Cancun, Mexico. Compare cheap airfares to Cancun International Airport.",
}

export default function FlightsToCancunPage() {
  return (
    <FlightDealPage
      title="Flights to Cancun"
      subtitle="Mexico's Caribbean paradise"
      heroImage="/cancun-mexico-beach.jpg"
      destination="cancun"
      description="Cancun offers the perfect blend of stunning Caribbean beaches, all-inclusive resorts, ancient Mayan ruins, and vibrant nightlife. Whether you seek relaxation, adventure, or cultural exploration, Mexico's Riviera Maya delivers tropical paradise and incredible history."
      popularDestinations={[
        { airportCode: "Cancun (CUN)", description: "International airport, resort shuttle" },
        { airportCode: "Hotel Zone", description: "Beach resorts, nightlife, shopping" },
        { airportCode: "Chichen Itza", description: "Wonder of the World, Mayan ruins" },
        { airportCode: "Playa del Carmen", description: "Trendy beach town, 5th Avenue" },
      ]}
      bestTimeToVisit="December to April is dry season with perfect weather. May to June is shoulder season with good deals. July to October is hurricane season - prices drop but weather is risky."
      travelTips={[
        "All-inclusive resorts offer great value",
        "Rent a car to explore cenotes and ruins",
        "Chichen Itza is best visited early morning",
        "Swim in cenotes - natural underground pools",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "YVR → CUN",
          dates: "18Apr - 28Apr",
          price: "$499",
          currency: "CAD",
          link: "https://www.trip.com/flights/cancun?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "YYZ → CUN",
          dates: "25Apr - 05May",
          price: "$399",
          currency: "CAD",
          link: "https://www.trip.com/flights/cancun?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "YYC → CUN",
          dates: "12May - 22May",
          price: "$449",
          currency: "CAD",
          link: "https://www.trip.com/flights/cancun?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
