import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Seoul | Emu Can Fly",
  description: "Find the best flight deals to Seoul, Korea. Compare cheap airfares to Incheon International Airport.",
}

export default function FlightsToSeoulPage() {
  return (
    <FlightDealPage
      title="Flights to Seoul"
      subtitle="Experience K-culture and ancient traditions"
      heroImage="/seoul-korea-palace-traditional.jpg"
      destination="seoul"
      description="Seoul is a captivating fusion of ancient palaces and K-pop culture, traditional markets and cutting-edge technology. Explore historic Gyeongbokgung Palace, shop in trendy Gangnam, feast on Korean BBQ, and experience the energy of one of Asia's most dynamic cities."
      popularDestinations={[
        { airportCode: "Incheon (ICN)", description: "Modern international hub, 1 hour from Seoul" },
        { airportCode: "Gimpo (GMP)", description: "Domestic and regional flights, closer to city" },
        { airportCode: "Myeongdong", description: "Shopping mecca, K-beauty and street food" },
        { airportCode: "Hongdae", description: "Youth culture, nightlife, and indie music" },
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
          route: "SYD → ICN",
          dates: "08Apr - 18Apr",
          price: "$699",
          currency: "AUD",
          link: "https://www.trip.com/flights/seoul?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "MEL → ICN",
          dates: "15Apr - 25Apr",
          price: "$749",
          currency: "AUD",
          link: "https://www.trip.com/flights/seoul?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "BNE → ICN",
          dates: "01May - 12May",
          price: "$679",
          currency: "AUD",
          link: "https://www.trip.com/flights/seoul?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
