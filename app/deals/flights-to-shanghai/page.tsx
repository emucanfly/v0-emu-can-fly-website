import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Shanghai | Emu Can Fly",
  description: "Find the best flight deals to Shanghai, China. Compare cheap airfares from Canada.",
}

export default function FlightsToShanghaiPage() {
  return (
    <FlightDealPage
      title="Flights to Shanghai"
      subtitle="China's dazzling metropolis"
      heroImage="/shanghai-china-skyline.jpg"
      destination="shanghai"
      description="Shanghai is China's most cosmopolitan city, where Art Deco meets futuristic skyscrapers along the famous Bund. Experience world-class dining, luxury shopping, vibrant nightlife, and a fascinating mix of Eastern and Western influences in this global financial hub."
      topAttractions={[
        { name: "The Bund", description: "Iconic waterfront with colonial-era architecture" },
        { name: "Yu Garden", description: "Classical Chinese garden dating back 400 years" },
        { name: "Shanghai Tower", description: "World's second-tallest building with observation deck" },
        { name: "French Concession", description: "Tree-lined streets with cafes and boutiques" },
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
          route: "YVR → PVG",
          dates: "12Apr - 22Apr",
          price: "CA$749",
          currency: "CAD",
          link: "https://www.trip.com/flights/shanghai?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
