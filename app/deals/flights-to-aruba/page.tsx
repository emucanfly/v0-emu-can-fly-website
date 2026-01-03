import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Aruba | Emu Can Fly",
  description: "Find the best flight deals to Aruba. Compare cheap airfares to Queen Beatrix International Airport.",
}

export default function FlightsToArubaPage() {
  return (
    <FlightDealPage
      title="Flights to Aruba"
      subtitle="One Happy Island"
      heroImage="/placeholder.svg?height=400&width=1200"
      destination="aruba"
      description="Aruba is the Caribbean's sunniest island, sitting outside the hurricane belt with year-round perfect weather. With stunning white sand beaches, turquoise waters, diverse dining, and a safe, welcoming atmosphere, Aruba lives up to its 'One Happy Island' motto."
      popularDestinations={[
        { airportCode: "Aruba (AUA)", description: "Queen Beatrix International Airport" },
        { airportCode: "Palm Beach", description: "High-rise resorts, water sports" },
        { airportCode: "Eagle Beach", description: "Low-rise resorts, iconic divi trees" },
        { airportCode: "Oranjestad", description: "Capital city, Dutch architecture, shopping" },
      ]}
      bestTimeToVisit="Aruba is perfect year-round - it's outside the hurricane belt. January to March is peak season with slightly higher prices. May to November offers great deals with the same sunny weather."
      travelTips={[
        "No hurricane worries - Aruba is safe year-round",
        "Rent a jeep to explore Arikok National Park",
        "US dollars widely accepted alongside Aruban florins",
        "Seafood and Dutch-Caribbean fusion cuisine are highlights",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "SYD → AUA",
          dates: "15Apr - 25Apr",
          price: "$1,599",
          currency: "AUD",
          link: "https://www.trip.com/flights/aruba?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "MEL → AUA",
          dates: "22Apr - 02May",
          price: "$1,649",
          currency: "AUD",
          link: "https://www.trip.com/flights/aruba?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "BNE → AUA",
          dates: "10May - 20May",
          price: "$1,549",
          currency: "AUD",
          link: "https://www.trip.com/flights/aruba?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
