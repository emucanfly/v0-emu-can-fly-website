import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Mexico City | Emu Can Fly",
  description: "Find the best flight deals to Mexico City, Mexico. Compare cheap airfares to Benito Juárez Airport.",
}

export default function FlightsToMexicoCityPage() {
  return (
    <FlightDealPage
      title="Flights to Mexico City"
      subtitle="Ancient ruins meet vibrant culture"
      heroImage="/mexico-city-zocalo.jpg"
      destination="mexico-city"
      description="Mexico City is a megalopolis of incredible depth - ancient Aztec ruins beneath Spanish colonial architecture, world-class museums, legendary street food, and neighborhoods each with their own personality. Experience one of the world's great cities at incredible value."
      popularDestinations={[
        { airportCode: "Mexico City (MEX)", description: "Benito Juárez International Airport" },
        { airportCode: "Zócalo", description: "Historic center, Aztec ruins, cathedral" },
        { airportCode: "Roma/Condesa", description: "Trendy neighborhoods, dining, nightlife" },
        { airportCode: "Teotihuacan", description: "Ancient pyramids, day trip" },
      ]}
      bestTimeToVisit="March to May is warm and dry. June to October brings afternoon rains. November to February is cooler and drier. Day of the Dead (late October/early November) is spectacular."
      travelTips={[
        "Street tacos are an art form - look for busy stands",
        "Metro is cheap and efficient for getting around",
        "Uber is widely used and safer than street taxis",
        "Altitude (2,240m) may affect some - stay hydrated",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "YVR → MEX",
          dates: "15Apr - 28Apr",
          price: "$449",
          currency: "CAD",
          link: "https://www.trip.com/flights/mexico-city?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "YYZ → MEX",
          dates: "22Apr - 05May",
          price: "$399",
          currency: "CAD",
          link: "https://www.trip.com/flights/mexico-city?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "YYC → MEX",
          dates: "10May - 23May",
          price: "$479",
          currency: "CAD",
          link: "https://www.trip.com/flights/mexico-city?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
