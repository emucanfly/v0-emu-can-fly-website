import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Kuala Lumpur | Emu Can Fly",
  description: "Find the best flight deals to Kuala Lumpur, Malaysia. Compare cheap airfares from Canada.",
}

export default function FlightsToKualaLumpurPage() {
  return (
    <FlightDealPage
      title="Flights to Kuala Lumpur"
      subtitle="Malaysia's dynamic capital"
      heroImage="/kuala-lumpur-petronas-towers.jpg"
      destination="kuala-lumpur"
      description="Kuala Lumpur is a melting pot of Malay, Chinese, and Indian cultures, reflected in its diverse cuisine, architecture, and traditions. Marvel at the iconic Petronas Towers, explore vibrant markets, and indulge in some of Southeast Asia's best food at incredibly affordable prices."
      topAttractions={[
        { name: "Petronas Twin Towers", description: "Iconic 88-floor twin skyscrapers with skybridge" },
        { name: "Batu Caves", description: "Hindu temple complex in spectacular limestone caves" },
        { name: "Jalan Alor", description: "Famous street food alley with incredible hawker fare" },
        { name: "Islamic Arts Museum", description: "Stunning collection of Islamic art and architecture" },
      ]}
      bestTimeToVisit="KL is warm year-round. May to July and December to February tend to be drier. Afternoon thunderstorms are common but brief. Ramadan and Chinese New Year bring special events and some closures."
      travelTips={[
        "KL Sentral is the main transport hub - well connected",
        "Food is incredible and cheap - try Jalan Alor for street food",
        "Grab app is essential for rides and food delivery",
        "Dress modestly when visiting mosques and temples",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "YVR → KUL",
          dates: "08Mar - 18Mar",
          price: "CA$999",
          currency: "CAD",
          link: "https://www.trip.com/flights/kuala-lumpur?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
