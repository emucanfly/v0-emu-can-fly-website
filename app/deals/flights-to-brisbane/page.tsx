import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Brisbane | Emu Can Fly",
  description: "Find the best flight deals to Brisbane, Australia. Compare cheap airfares to Brisbane Airport.",
}

export default function FlightsToBrisbanePage() {
  return (
    <FlightDealPage
      title="Flights to Brisbane"
      subtitle="Queensland's sunny river city"
      heroImage="/brisbane-australia-skyline.jpg"
      destination="brisbane"
      description="Brisbane basks in year-round sunshine along the Brisbane River. With its relaxed outdoor lifestyle, thriving food and bar scene, cultural precincts, and easy access to the Gold Coast and Great Barrier Reef, Queensland's capital is Australia's new world city."
      popularDestinations={[
        { airportCode: "Brisbane (BNE)", description: "International airport, Airtrain to city" },
        { airportCode: "South Bank", description: "Cultural precinct, beach lagoon" },
        { airportCode: "Fortitude Valley", description: "Entertainment district, nightlife" },
        { airportCode: "Gold Coast", description: "Theme parks, beaches, 1 hour south" },
      ]}
      bestTimeToVisit="Brisbane is pleasant year-round with over 280 sunny days. Winter (June-August) is ideal with dry, mild weather. Summer is hot and humid with afternoon storms. Spring brings jacaranda season."
      travelTips={[
        "Go Card works on all public transport",
        "South Bank has a free artificial beach",
        "Day trip to Gold Coast theme parks or beaches",
        "Lone Pine Koala Sanctuary for wildlife",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "YVR → BNE",
          dates: "Any date",
          price: "$1,099",
          currency: "CAD",
          link: "https://www.trip.com/flights/brisbane?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "YYZ → BNE",
          dates: "Any date",
          price: "$1,199",
          currency: "CAD",
          link: "https://www.trip.com/flights/brisbane?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "YYC → BNE",
          dates: "20Mar - 27Mar",
          price: "$1,149",
          currency: "CAD",
          link: "https://www.trip.com/flights/brisbane?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
