import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Rome | Emu Can Fly",
  description: "Find the best flight deals to Rome, Italy. Compare cheap airfares from Canada.",
}

export default function FlightsToRomePage() {
  return (
    <FlightDealPage
      title="Flights to Rome"
      subtitle="Eternal City of history and passion"
      heroImage="/rome-colosseum-ancient-ruins.jpg"
      destination="rome"
      description="Rome is a living museum where ancient ruins, Renaissance art, and vibrant modern life intertwine. Explore the Colosseum, toss a coin in Trevi Fountain, marvel at the Vatican, and indulge in the finest pasta, gelato, and espresso in the Eternal City."
      topAttractions={[
        { name: "Colosseum", description: "Ancient amphitheater and icon of Imperial Rome" },
        { name: "Vatican Museums", description: "Priceless art collection and Sistine Chapel" },
        { name: "Trevi Fountain", description: "Baroque masterpiece - toss a coin and make a wish" },
        { name: "Roman Forum", description: "Ancient ruins of the heart of the Roman Empire" },
      ]}
      bestTimeToVisit="April to June and September to October offer pleasant weather. Summer is hot and crowded. Winter is mild with fewer tourists. Holy Week and Easter are special but extremely busy."
      travelTips={[
        "Book Vatican and Colosseum tickets online to skip lines",
        "Dress code for churches - cover shoulders and knees",
        "Avoid restaurants near major attractions - walk a few blocks",
        "Gelato - look for natural colors, not bright artificial hues",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "YYZ → FCO",
          dates: "10Apr - 22Apr",
          price: "CA$849",
          currency: "CAD",
          link: "https://www.trip.com/flights/rome?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
