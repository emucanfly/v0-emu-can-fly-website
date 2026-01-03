import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Kuala Lumpur | Emu Can Fly",
  description: "Find the best flight deals to Kuala Lumpur, Malaysia. Compare cheap airfares to KLIA.",
}

export default function FlightsToKualaLumpurPage() {
  return (
    <FlightDealPage
      title="Flights to Kuala Lumpur"
      subtitle="Malaysia's dynamic capital"
      heroImage="/kuala-lumpur-petronas-towers-night.jpg"
      destination="kuala-lumpur"
      description="Kuala Lumpur is a melting pot of Malay, Chinese, and Indian cultures, reflected in its diverse cuisine, architecture, and traditions. Marvel at the iconic Petronas Towers, explore vibrant markets, and indulge in some of Southeast Asia's best food at incredibly affordable prices."
      popularDestinations={[
        { airportCode: "KLIA (KUL)", description: "Main international airport, modern facilities" },
        { airportCode: "KLIA2", description: "Budget airline terminal" },
        { airportCode: "Petronas Towers", description: "Iconic twin towers, sky bridge views" },
        { airportCode: "Batu Caves", description: "Hindu temple complex, limestone caves" },
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
          route: "SYD → KUL",
          dates: "08Mar - 18Mar",
          price: "$449",
          currency: "AUD",
          link: "https://www.trip.com/flights/kuala-lumpur?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "MEL → KUL",
          dates: "15Mar - 25Mar",
          price: "$479",
          currency: "AUD",
          link: "https://www.trip.com/flights/kuala-lumpur?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "PER → KUL",
          dates: "01Apr - 10Apr",
          price: "$399",
          currency: "AUD",
          link: "https://www.trip.com/flights/kuala-lumpur?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
