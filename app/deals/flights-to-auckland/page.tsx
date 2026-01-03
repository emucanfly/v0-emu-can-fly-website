import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Auckland | Emu Can Fly",
  description: "Find the best flight deals to Auckland, New Zealand. Compare cheap airfares to Auckland Airport.",
}

export default function FlightsToAucklandPage() {
  return (
    <FlightDealPage
      title="Flights to Auckland"
      subtitle="New Zealand's City of Sails"
      heroImage="/auckland-new-zealand-skyline.jpg"
      destination="auckland"
      description="Auckland is New Zealand's largest city, nestled between two harbours with volcanic cones dotting the landscape. Experience Maori culture, world-class wine regions, stunning beaches, and use Auckland as your gateway to explore both North and South Islands."
      popularDestinations={[
        { airportCode: "Auckland (AKL)", description: "International airport, SkyBus to city" },
        { airportCode: "Sky Tower", description: "Iconic landmark, observation deck" },
        { airportCode: "Waiheke Island", description: "Wine region, beaches, ferry ride" },
        { airportCode: "Rotorua", description: "Geothermal wonders, Maori culture" },
      ]}
      bestTimeToVisit="December to March (summer) offers warm weather and outdoor activities. Autumn (March-May) has beautiful colors. Winter is mild with fewer tourists. Auckland's weather is changeable year-round."
      travelTips={[
        "AT HOP card for public transport",
        "Waiheke Island ferry is a must-do wine trip",
        "Rent a car to explore beyond Auckland",
        "Try a hangi (Maori feast) for authentic cuisine",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "YVR → AKL",
          dates: "15Mar - 22Mar",
          price: "$999",
          currency: "CAD",
          link: "https://www.trip.com/flights/auckland?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "YYZ → AKL",
          dates: "22Mar - 29Mar",
          price: "$1,099",
          currency: "CAD",
          link: "https://www.trip.com/flights/auckland?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "YYC → AKL",
          dates: "01Apr - 08Apr",
          price: "$1,049",
          currency: "CAD",
          link: "https://www.trip.com/flights/auckland?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
