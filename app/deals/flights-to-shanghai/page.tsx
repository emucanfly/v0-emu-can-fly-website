import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Shanghai | Emu Can Fly",
  description: "Find the best flight deals to Shanghai, China. Compare cheap airfares to Pudong International Airport.",
}

export default function FlightsToShanghaiPage() {
  return (
    <FlightDealPage
      title="Flights to Shanghai"
      subtitle="China's dazzling metropolis"
      heroImage="/shanghai-pudong-skyline-bund-night.jpg"
      destination="shanghai"
      description="Shanghai is China's most cosmopolitan city, where Art Deco meets futuristic skyscrapers along the famous Bund. Experience world-class dining, luxury shopping, vibrant nightlife, and a fascinating mix of Eastern and Western influences in this global financial hub."
      popularDestinations={[
        { airportCode: "Pudong (PVG)", description: "Main international airport, Maglev train to city" },
        { airportCode: "Hongqiao (SHA)", description: "Domestic flights, closer to city center" },
        { airportCode: "The Bund", description: "Iconic waterfront, colonial architecture" },
        { airportCode: "French Concession", description: "Tree-lined streets, cafes, boutiques" },
      ]}
      bestTimeToVisit="Spring (April-May) and autumn (September-November) offer mild weather. Summer is hot and humid. Winter is cold and damp. Avoid Chinese New Year and Golden Week for fewer crowds."
      travelTips={[
        "Maglev train from Pudong is a must-do experience",
        "Shanghai metro is extensive and easy to navigate",
        "Xiaolongbao (soup dumplings) are a local specialty",
        "VPN required for Western websites and apps",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "SYD → PVG",
          dates: "12Apr - 22Apr",
          price: "$649",
          currency: "AUD",
          link: "https://www.trip.com/flights/shanghai?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "MEL → PVG",
          dates: "20Apr - 30Apr",
          price: "$699",
          currency: "AUD",
          link: "https://www.trip.com/flights/shanghai?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "BNE → PVG",
          dates: "08May - 18May",
          price: "$629",
          currency: "AUD",
          link: "https://www.trip.com/flights/shanghai?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
