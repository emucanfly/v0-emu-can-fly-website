import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Bangkok | Emu Can Fly",
  description: "Find the best flight deals to Bangkok, Thailand. Compare cheap airfares from Canada.",
}

export default function FlightsToBangkokPage() {
  return (
    <FlightDealPage
      title="Flights to Bangkok"
      subtitle="Experience Thailand's vibrant capital"
      heroImage="/bangkok-thailand-temples-golden.jpg"
      destination="bangkok"
      description="Bangkok is a city of contrasts - ancient temples stand alongside modern skyscrapers, traditional markets thrive next to luxury malls. Experience incredible street food, ornate palaces, bustling night markets, and legendary Thai hospitality in this exciting metropolis."
      topAttractions={[
        { name: "Grand Palace", description: "Spectacular royal complex with Emerald Buddha temple" },
        { name: "Wat Arun", description: "Iconic Temple of Dawn on the Chao Phraya River" },
        { name: "Chatuchak Market", description: "One of the world's largest weekend markets" },
        { name: "Floating Markets", description: "Traditional markets on the canals of Bangkok" },
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
          route: "YVR → BKK",
          dates: "08Mar - 18Mar",
          price: "CA$899",
          currency: "CAD",
          link: "https://www.trip.com/flights/bangkok?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
