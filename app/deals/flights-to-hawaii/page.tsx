import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Hawaii | Emu Can Fly",
  description: "Find the best flight deals to Hawaii. Compare cheap airfares from Canada.",
}

export default function FlightsToHawaiiPage() {
  return (
    <FlightDealPage
      title="Flights to Hawaii"
      subtitle="Find cheap flights to paradise"
      heroImage="/honolulu-hawaii-beach-waikiki.jpg"
      destination="hawaii"
      description="Hawaii offers an unforgettable tropical escape with stunning beaches, volcanic landscapes, and rich Polynesian culture. Whether you're looking to relax on the golden sands of Waikiki, explore the lush valleys of Maui, or witness the active volcanoes on the Big Island, Hawaii has something for every traveler."
      topAttractions={[
        { name: "Waikiki Beach", description: "World-famous beach with Diamond Head backdrop" },
        { name: "Pearl Harbor Memorial", description: "Historic WWII site and USS Arizona Memorial" },
        { name: "Haleakala National Park", description: "Maui's stunning volcanic crater at sunrise" },
        { name: "Na Pali Coast", description: "Kauai's dramatic 17-mile coastline of cliffs" },
      ]}
      bestTimeToVisit="Hawaii enjoys warm weather year-round. The dry season (April to October) offers the best weather, while the wet season (November to March) brings lower prices and fewer crowds. Book early for peak travel periods like Christmas and spring break."
      travelTips={[
        "Direct flights from Vancouver take about 6 hours",
        "US territory - Canadian citizens need valid passport, no visa required",
        "Consider inter-island flights to explore multiple islands",
        "Rent a car to explore beyond the resort areas",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "YVR → HNL",
          dates: "15Mar - 25Mar",
          price: "CA$599",
          currency: "CAD",
          link: "https://www.trip.com/flights/honolulu?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
