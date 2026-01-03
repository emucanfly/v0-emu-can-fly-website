import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Copenhagen | Emu Can Fly",
  description: "Find the best flight deals to Copenhagen, Denmark. Compare cheap airfares to Copenhagen Airport.",
}

export default function FlightsToCopenhagen() {
  return (
    <FlightDealPage
      title="Flights to Copenhagen"
      subtitle="World's happiest city"
      heroImage="/copenhagen-denmark-nyhavn.jpg"
      destination="copenhagen"
      description="Copenhagen consistently ranks among the world's happiest and most liveable cities. Experience hygge (coziness), world-renowned restaurants, colorful Nyhavn harbor, cutting-edge design, and the friendliest cycling culture you'll ever encounter."
      popularDestinations={[
        { airportCode: "Copenhagen (CPH)", description: "Efficient airport, metro to city" },
        { airportCode: "Nyhavn", description: "Colorful harbor, cafes, boats" },
        { airportCode: "Tivoli Gardens", description: "Historic amusement park" },
        { airportCode: "Christiania", description: "Free town, alternative community" },
      ]}
      bestTimeToVisit="May to September offers pleasant weather and long days. Christmas season brings Tivoli's magical lights. Winter is cold and dark but cozy. Copenhagen Jazz Festival (July) is a highlight."
      travelTips={[
        "Rent a bike - Copenhagen is the world's best cycling city",
        "New Nordic cuisine is world-famous but expensive",
        "Copenhagen Card covers transport and attractions",
        "Day trip to Malmö, Sweden via the Øresund Bridge",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "YVR → CPH",
          dates: "12May - 25May",
          price: "$899",
          currency: "CAD",
          link: "https://www.trip.com/flights/copenhagen?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "YYZ → CPH",
          dates: "20May - 02Jun",
          price: "$849",
          currency: "CAD",
          link: "https://www.trip.com/flights/copenhagen?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "YYC → CPH",
          dates: "08Jun - 21Jun",
          price: "$929",
          currency: "CAD",
          link: "https://www.trip.com/flights/copenhagen?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
