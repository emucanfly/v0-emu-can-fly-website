import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Stockholm | Emu Can Fly",
  description: "Find the best flight deals to Stockholm, Sweden. Compare cheap airfares to Arlanda Airport.",
}

export default function FlightsToStockholmPage() {
  return (
    <FlightDealPage
      title="Flights to Stockholm"
      subtitle="Scandinavia's stunning capital"
      heroImage="/placeholder.svg?height=400&width=1200"
      destination="stockholm"
      description="Stockholm spreads across 14 islands where Lake Mälaren meets the Baltic Sea. Explore the cobblestone streets of Gamla Stan, visit world-class museums, experience Swedish design and cuisine, and enjoy the unique light of Scandinavian seasons."
      popularDestinations={[
        { airportCode: "Arlanda (ARN)", description: "Main international airport, 40km north" },
        { airportCode: "Skavsta (NYO)", description: "Budget airlines, 100km south" },
        { airportCode: "Gamla Stan", description: "Medieval old town, royal palace" },
        { airportCode: "Djurgarden", description: "Museum island, Vasa, ABBA museum" },
      ]}
      bestTimeToVisit="May to September offers long days and pleasant weather. Midsummer (late June) is a major celebration. Winter brings Christmas markets and possible Northern Lights. December is dark but cozy."
      travelTips={[
        "Almost everything can be paid by card - cash rarely needed",
        "Swedish fika (coffee break with pastries) is essential",
        "Vasa Museum is a must-see - 17th century warship",
        "Stockholm Pass offers good value for museum visits",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "SYD → ARN",
          dates: "15May - 28May",
          price: "$1,149",
          currency: "AUD",
          link: "https://www.trip.com/flights/stockholm?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "MEL → ARN",
          dates: "22May - 04Jun",
          price: "$1,199",
          currency: "AUD",
          link: "https://www.trip.com/flights/stockholm?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "BNE → ARN",
          dates: "10Jun - 23Jun",
          price: "$1,099",
          currency: "AUD",
          link: "https://www.trip.com/flights/stockholm?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
