import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Bangkok | Emu Can Fly",
  description:
    "Find the best flight deals to Bangkok, Thailand. Compare cheap airfares to Suvarnabhumi and Don Mueang airports.",
}

export default function FlightsToBangkokPage() {
  return (
    <FlightDealPage
      title="Flights to Bangkok"
      subtitle="Experience Thailand's vibrant capital"
      heroImage="/bangkok-thailand-temples-golden.jpg"
      destination="bangkok"
      description="Bangkok is a city of contrasts - ancient temples stand alongside modern skyscrapers, traditional markets thrive next to luxury malls. Experience incredible street food, ornate palaces, bustling night markets, and legendary Thai hospitality in this exciting metropolis."
      popularDestinations={[
        { airportCode: "Suvarnabhumi (BKK)", description: "Main international airport, modern facilities" },
        { airportCode: "Don Mueang (DMK)", description: "Budget airlines hub, closer to old city" },
        { airportCode: "Grand Palace", description: "Iconic royal complex and Wat Phra Kaew" },
        { airportCode: "Khao San Road", description: "Backpacker hub, nightlife and street food" },
      ]}
      bestTimeToVisit="November to February is the cool, dry season - perfect weather for sightseeing. March to May is hot season, while June to October brings monsoon rains (usually afternoon showers that don't disrupt travel much)."
      travelTips={[
        "BTS Skytrain and MRT are the best ways to beat traffic",
        "Street food is incredible - look for busy stalls with high turnover",
        "Dress modestly when visiting temples - cover knees and shoulders",
        "Negotiate prices at markets - it's expected and part of the fun",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "SYD → BKK",
          dates: "08Mar - 18Mar",
          price: "$599",
          currency: "AUD",
          link: "https://www.trip.com/flights/bangkok?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "MEL → BKK",
          dates: "15Mar - 25Mar",
          price: "$649",
          currency: "AUD",
          link: "https://www.trip.com/flights/bangkok?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "BNE → BKK",
          dates: "01Apr - 12Apr",
          price: "$579",
          currency: "AUD",
          link: "https://www.trip.com/flights/bangkok?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
