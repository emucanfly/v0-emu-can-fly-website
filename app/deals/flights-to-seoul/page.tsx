import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Seoul | Emu Can Fly",
  description: "Find the best flight deals to Seoul, Korea. Compare cheap airfares from Canada.",
}

export default function FlightsToSeoulPage() {
  return (
    <FlightDealPage
      title="Flights to Seoul"
      subtitle="Experience K-culture and ancient traditions"
      heroImage="/seoul-korea-palace.jpg"
      destination="seoul"
      description="Seoul is a captivating fusion of ancient palaces and K-pop culture, traditional markets and cutting-edge technology. Explore historic Gyeongbokgung Palace, shop in trendy Gangnam, feast on Korean BBQ, and experience the energy of one of Asia's most dynamic cities."
      topAttractions={[
        { name: "Gyeongbokgung Palace", description: "Grand royal palace with changing of the guard" },
        { name: "Bukchon Hanok Village", description: "Traditional Korean houses on scenic hillside" },
        { name: "N Seoul Tower", description: "Iconic tower with panoramic city views" },
        { name: "Myeongdong Shopping District", description: "K-beauty and street food paradise" },
      ]}
      bestTimeToVisit="Spring (April-May) brings cherry blossoms and mild weather. Autumn (September-November) offers stunning fall foliage. Summer is hot and humid with monsoon rains. Winter is cold but magical with snow."
      travelTips={[
        "T-money card works on all public transport",
        "Korean BBQ is a must - let staff help with grilling",
        "Download Papago app for Korean translation",
        "Visit a jjimjilbang (Korean spa) for authentic experience",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "YVR → ICN",
          dates: "08Apr - 18Apr",
          price: "CA$899",
          currency: "CAD",
          link: "https://www.trip.com/flights/seoul?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
