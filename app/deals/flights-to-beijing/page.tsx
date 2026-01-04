import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Beijing | Emu Can Fly",
  description: "Find the best flight deals to Beijing, China. Compare cheap airfares from Canada.",
}

export default function FlightsToBeijingPage() {
  return (
    <FlightDealPage
      title="Flights to Beijing"
      subtitle="Discover China's ancient capital"
      heroImage="/beijing-china-forbidden-city.jpg"
      destination="beijing"
      description="Beijing is a city of imperial grandeur and modern ambition. Walk along the Great Wall, explore the Forbidden City, wander through ancient hutongs, and witness China's incredible transformation in this historic capital that has been the seat of power for centuries."
      topAttractions={[
        { name: "Great Wall of China", description: "Iconic ancient fortification stretching across mountains" },
        { name: "Forbidden City", description: "Imperial palace complex with 980 buildings" },
        { name: "Temple of Heaven", description: "Ming Dynasty temple where emperors prayed" },
        { name: "Summer Palace", description: "Beautiful royal garden with Kunming Lake" },
      ]}
      bestTimeToVisit="September to October offers clear skies and pleasant temperatures. Spring (April-May) is also good but can be dusty. Avoid summer heat and winter cold if possible. Golden Week (Oct 1-7) is extremely crowded."
      travelTips={[
        "VPN is essential for accessing Western apps and sites",
        "Download WeChat and Alipay for payments",
        "Book Great Wall tours in advance - Mutianyu is less crowded",
        "Air quality varies - check pollution levels",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "YVR → PEK",
          dates: "10Apr - 20Apr",
          price: "CA$799",
          currency: "CAD",
          link: "https://www.trip.com/flights/beijing?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
