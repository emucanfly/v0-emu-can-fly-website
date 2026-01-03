import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Manila | Emu Can Fly",
  description:
    "Find the best flight deals to Manila, Philippines. Compare cheap airfares to Ninoy Aquino International Airport.",
}

export default function FlightsToManilaPage() {
  return (
    <FlightDealPage
      title="Flights to Manila"
      subtitle="Gateway to the Philippines"
      heroImage="/manila-philippines-makati-skyline.jpg"
      destination="manila"
      description="Manila is a vibrant, chaotic, and endlessly fascinating city that serves as the gateway to the Philippines' 7,000+ islands. Experience Spanish colonial history, world-class shopping malls, legendary Filipino hospitality, and delicious cuisine in this dynamic capital."
      popularDestinations={[
        { airportCode: "Manila (MNL)", description: "Ninoy Aquino International Airport" },
        { airportCode: "Intramuros", description: "Historic walled city, Spanish era" },
        { airportCode: "Makati", description: "Business district, nightlife, shopping" },
        { airportCode: "Mall of Asia", description: "One of Asia's largest malls" },
      ]}
      bestTimeToVisit="November to May is dry season, with December to February being coolest. June to October is wet season with typhoon risk. Christmas season is hugely celebrated and festive."
      travelTips={[
        "Grab is essential for transport - traffic is extreme",
        "Filipino food is hearty - try adobo, sinigang, and lechon",
        "English is widely spoken - communication is easy",
        "Use Manila as a hub to explore Palawan, Boracay, Cebu",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "SYD → MNL",
          dates: "10Mar - 20Mar",
          price: "$499",
          currency: "AUD",
          link: "https://www.trip.com/flights/manila?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "MEL → MNL",
          dates: "18Mar - 28Mar",
          price: "$549",
          currency: "AUD",
          link: "https://www.trip.com/flights/manila?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "BNE → MNL",
          dates: "05Apr - 15Apr",
          price: "$479",
          currency: "AUD",
          link: "https://www.trip.com/flights/manila?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
