import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Lima | Emu Can Fly",
  description: "Find the best flight deals to Lima, Peru. Compare cheap airfares to Jorge Chávez Airport.",
}

export default function FlightsToLimaPage() {
  return (
    <FlightDealPage
      title="Flights to Lima"
      subtitle="Gastronomic capital of South America"
      heroImage="/lima-peru-plaza-mayor.jpg"
      destination="lima"
      description="Lima has emerged as South America's culinary capital, where ancient Incan heritage meets Spanish colonial architecture and world-renowned cuisine. Explore historic plazas, trendy Miraflores, incredible ceviche, and use Lima as your gateway to Machu Picchu and beyond."
      popularDestinations={[
        { airportCode: "Lima (LIM)", description: "Jorge Chávez International Airport" },
        { airportCode: "Miraflores", description: "Upscale district, ocean views, dining" },
        { airportCode: "Historic Center", description: "Colonial architecture, Plaza Mayor" },
        { airportCode: "Barranco", description: "Bohemian neighborhood, art scene" },
      ]}
      bestTimeToVisit="December to April is summer with sunny days. May to November is winter - cloudy but mild. Lima rarely rains. Cusco and Machu Picchu are best in dry season (May-October)."
      travelTips={[
        "Peruvian cuisine is world-class - try ceviche and causa",
        "Book Machu Picchu permits months in advance",
        "Uber and taxi apps are safest for transport",
        "Altitude in Cusco requires acclimatization",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "YVR → LIM",
          dates: "10Apr - 22Apr",
          price: "$799",
          currency: "CAD",
          link: "https://www.trip.com/flights/lima?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "YYZ → LIM",
          dates: "18Apr - 30Apr",
          price: "$749",
          currency: "CAD",
          link: "https://www.trip.com/flights/lima?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "YYC → LIM",
          dates: "05May - 18May",
          price: "$849",
          currency: "CAD",
          link: "https://www.trip.com/flights/lima?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
