import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Rome | Emu Can Fly",
  description: "Find the best flight deals to Rome, Italy. Compare cheap airfares to Fiumicino Airport.",
}

export default function FlightsToRomePage() {
  return (
    <FlightDealPage
      title="Flights to Rome"
      subtitle="Eternal City of history and passion"
      heroImage="/rome-colosseum-ancient-ruins.jpg"
      destination="rome"
      description="Rome is a living museum where ancient ruins, Renaissance art, and vibrant modern life intertwine. Explore the Colosseum, toss a coin in Trevi Fountain, marvel at the Vatican, and indulge in the finest pasta, gelato, and espresso in the Eternal City."
      popularDestinations={[
        { airportCode: "Fiumicino (FCO)", description: "Main international airport, train to city" },
        { airportCode: "Ciampino (CIA)", description: "Budget airlines, smaller airport" },
        { airportCode: "Colosseum", description: "Ancient amphitheater, iconic landmark" },
        { airportCode: "Vatican City", description: "St. Peter's, Sistine Chapel" },
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
          route: "SYD → FCO",
          dates: "10Apr - 22Apr",
          price: "$1,149",
          currency: "AUD",
          link: "https://www.trip.com/flights/rome?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "MEL → FCO",
          dates: "18Apr - 30Apr",
          price: "$1,199",
          currency: "AUD",
          link: "https://www.trip.com/flights/rome?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "BNE → FCO",
          dates: "05May - 18May",
          price: "$1,099",
          currency: "AUD",
          link: "https://www.trip.com/flights/rome?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
