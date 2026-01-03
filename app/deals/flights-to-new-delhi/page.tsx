import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to New Delhi | Emu Can Fly",
  description:
    "Find the best flight deals to New Delhi, India. Compare cheap airfares to Indira Gandhi International Airport.",
}

export default function FlightsToNewDelhiPage() {
  return (
    <FlightDealPage
      title="Flights to New Delhi"
      subtitle="Gateway to incredible India"
      heroImage="/new-delhi-india-gate-red-fort.jpg"
      destination="new-delhi"
      description="New Delhi is a city of magnificent monuments, bustling bazaars, and incredible diversity. From the Red Fort to modern shopping malls, ancient Mughal architecture to vibrant street food, India's capital offers an intense and rewarding travel experience unlike anywhere else."
      popularDestinations={[
        { airportCode: "Delhi (DEL)", description: "Indira Gandhi International Airport" },
        { airportCode: "Red Fort", description: "UNESCO World Heritage Site, Mughal architecture" },
        { airportCode: "India Gate", description: "War memorial, iconic landmark" },
        { airportCode: "Chandni Chowk", description: "Historic market, street food paradise" },
      ]}
      bestTimeToVisit="October to March offers pleasant weather with cool nights. April to June is extremely hot. July to September is monsoon season with heavy rains. Diwali (Oct/Nov) is magical but very crowded."
      travelTips={[
        "Delhi Metro is clean, efficient, and covers major attractions",
        "Negotiate auto-rickshaw fares before getting in",
        "Street food is amazing - look for busy stalls",
        "Golden Triangle (Delhi-Agra-Jaipur) is a popular route",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "SYD → DEL",
          dates: "15Mar - 28Mar",
          price: "$799",
          currency: "AUD",
          link: "https://www.trip.com/flights/new-delhi?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "MEL → DEL",
          dates: "22Mar - 05Apr",
          price: "$849",
          currency: "AUD",
          link: "https://www.trip.com/flights/new-delhi?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "BNE → DEL",
          dates: "10Apr - 23Apr",
          price: "$779",
          currency: "AUD",
          link: "https://www.trip.com/flights/new-delhi?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
