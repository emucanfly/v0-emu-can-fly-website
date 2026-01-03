import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Hawaii | Emu Can Fly",
  description: "Find the best flight deals to Hawaii. Compare cheap airfares to Honolulu, Maui, and more.",
}

export default function FlightsToHawaiiPage() {
  return (
    <FlightDealPage
      title="Flights to Hawaii"
      subtitle="Find cheap flights to paradise"
      heroImage="/honolulu-hawaii-beach-waikiki.jpg"
      destination="hawaii"
      description="Hawaii offers an unforgettable tropical escape with stunning beaches, volcanic landscapes, and rich Polynesian culture. Whether you're looking to relax on the golden sands of Waikiki, explore the lush valleys of Maui, or witness the active volcanoes on the Big Island, Hawaii has something for every traveler."
      popularDestinations={[
        { airportCode: "Honolulu (HNL)", description: "Gateway to Oahu, home to Waikiki Beach and Diamond Head" },
        { airportCode: "Maui (OGG)", description: "Road to Hana, Haleakala sunrise, world-class resorts" },
        { airportCode: "Kona (KOA)", description: "Big Island adventures, volcanoes, and coffee tours" },
        { airportCode: "Lihue (LIH)", description: "Kauai's Na Pali Coast and tropical gardens" },
      ]}
      bestTimeToVisit="Hawaii enjoys warm weather year-round. The dry season (April to October) offers the best weather, while the wet season (November to March) brings lower prices and fewer crowds. Book early for peak travel periods like Christmas and spring break."
      travelTips={[
        "Direct flights from major cities typically take 8-10 hours",
        "US territory - check visa requirements for your country",
        "Consider inter-island flights to explore multiple islands",
        "Rent a car to explore beyond the resort areas",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "SYD → HNL",
          dates: "15Mar - 25Mar",
          price: "$899",
          currency: "AUD",
          link: "https://www.trip.com/flights/honolulu?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "MEL → HNL",
          dates: "20Mar - 30Mar",
          price: "$949",
          currency: "AUD",
          link: "https://www.trip.com/flights/honolulu?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "BNE → HNL",
          dates: "01Apr - 10Apr",
          price: "$879",
          currency: "AUD",
          link: "https://www.trip.com/flights/honolulu?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
