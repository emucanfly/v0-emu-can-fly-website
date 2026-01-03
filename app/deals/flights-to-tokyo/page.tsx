import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Tokyo | Emu Can Fly",
  description: "Find the best flight deals to Tokyo, Japan. Compare cheap airfares to Narita and Haneda airports.",
}

export default function FlightsToTokyoPage() {
  return (
    <FlightDealPage
      title="Flights to Tokyo"
      subtitle="Discover Japan's vibrant capital"
      heroImage="/tokyo-japan-skyline-mount-fuji.jpg"
      destination="tokyo"
      description="Tokyo is a fascinating blend of ultra-modern and traditional, from neon-lit skyscrapers and anime culture to ancient temples and serene gardens. Experience world-class cuisine, cutting-edge technology, and centuries-old traditions all in one incredible city."
      popularDestinations={[
        { airportCode: "Narita (NRT)", description: "Main international hub, 60km from central Tokyo" },
        { airportCode: "Haneda (HND)", description: "Closer to city center, domestic and international flights" },
        { airportCode: "Shibuya", description: "Famous crossing, youth culture, and shopping" },
        { airportCode: "Shinjuku", description: "Entertainment district, neon lights, and nightlife" },
      ]}
      bestTimeToVisit="Spring (March-May) for cherry blossoms and autumn (September-November) for fall foliage are the most popular times. Summer can be hot and humid, while winter is cold but offers fewer crowds and winter illuminations."
      travelTips={[
        "Get a Japan Rail Pass for unlimited train travel",
        "Download translation apps - English is limited outside tourist areas",
        "Cash is still king in many places - carry yen",
        "Visit during cherry blossom season for an unforgettable experience",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "SYD → NRT",
          dates: "10Apr - 20Apr",
          price: "$799",
          currency: "AUD",
          link: "https://www.trip.com/flights/tokyo?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "MEL → HND",
          dates: "15Apr - 25Apr",
          price: "$849",
          currency: "AUD",
          link: "https://www.trip.com/flights/tokyo?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "BNE → NRT",
          dates: "01May - 12May",
          price: "$779",
          currency: "AUD",
          link: "https://www.trip.com/flights/tokyo?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
