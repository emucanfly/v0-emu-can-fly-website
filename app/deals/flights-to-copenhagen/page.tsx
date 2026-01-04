import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Copenhagen | Emu Can Fly",
  description:
    "Find the best flight deals from Canada to Copenhagen, Denmark. Compare cheap airfares to Copenhagen Airport.",
}

export default function FlightsToCopenhagen() {
  return (
    <FlightDealPage
      title="Flights to Copenhagen"
      subtitle="World's happiest city"
      heroImage="/copenhagen-denmark-nyhavn.jpg"
      destination="copenhagen"
      description="Copenhagen consistently ranks among the world's happiest and most liveable cities. Experience hygge (coziness), world-renowned restaurants, colorful Nyhavn harbor, cutting-edge design, and the friendliest cycling culture you'll ever encounter."
      topAttractions={[
        { name: "Nyhavn", description: "Colorful 17th-century waterfront with cafes" },
        { name: "Tivoli Gardens", description: "Historic amusement park since 1843" },
        { name: "The Little Mermaid", description: "Iconic bronze statue on the waterfront" },
        { name: "Christiania", description: "Self-proclaimed autonomous neighborhood" },
      ]}
      bestTimeToVisit="May to September offers pleasant weather and long days. Christmas season brings Tivoli's magical lights. Winter is cold and dark but cozy. Copenhagen Jazz Festival (July) is a highlight."
      travelTips={[
        "Rent a bike - Copenhagen is the world's best cycling city",
        "New Nordic cuisine is world-famous but expensive",
        "Copenhagen Card covers transport and attractions",
        "Day trip to Malmö, Sweden via the Øresund Bridge",
      ]}
    />
  )
}
