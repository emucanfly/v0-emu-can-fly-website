import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Tokyo | Emu Can Fly",
  description: "Find the best flight deals to Tokyo, Japan. Compare cheap airfares from Canada.",
}

export default function FlightsToTokyoPage() {
  return (
    <FlightDealPage
      title="Flights to Tokyo"
      subtitle="Discover Japan's vibrant capital"
      heroImage="/tokyo-japan-skyline-mount-fuji.jpg"
      destination="tokyo"
      description="Tokyo is a fascinating blend of ultra-modern and traditional, from neon-lit skyscrapers and anime culture to ancient temples and serene gardens. Experience world-class cuisine, cutting-edge technology, and centuries-old traditions all in one incredible city."
      topAttractions={[
        { name: "Senso-ji Temple", description: "Tokyo's oldest temple with iconic red lantern gate" },
        { name: "Shibuya Crossing", description: "World's busiest pedestrian intersection" },
        { name: "Tokyo Skytree", description: "634m broadcasting tower with panoramic city views" },
        { name: "Meiji Shrine", description: "Serene Shinto shrine in a lush forest setting" },
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
          route: "YVR → NRT",
          dates: "10Apr - 20Apr",
          price: "CA$899",
          currency: "CAD",
          link: "https://www.trip.com/flights/tokyo?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
