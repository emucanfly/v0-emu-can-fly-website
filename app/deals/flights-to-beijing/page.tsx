import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Beijing | Emu Can Fly",
  description: "Find the best flight deals to Beijing, China. Compare cheap airfares to Beijing Capital Airport.",
}

export default function FlightsToBeijingPage() {
  return (
    <FlightDealPage
      title="Flights to Beijing"
      subtitle="Discover China's ancient capital"
      heroImage="/beijing-great-wall-china.jpg"
      destination="beijing"
      description="Beijing is a city of imperial grandeur and modern ambition. Walk along the Great Wall, explore the Forbidden City, wander through ancient hutongs, and witness China's incredible transformation in this historic capital that has been the seat of power for centuries."
      popularDestinations={[
        { airportCode: "Beijing Capital (PEK)", description: "Main international airport" },
        { airportCode: "Beijing Daxing (PKX)", description: "New mega-airport, stunning architecture" },
        { airportCode: "Forbidden City", description: "Imperial palace complex, UNESCO site" },
        { airportCode: "Great Wall", description: "Badaling, Mutianyu sections nearby" },
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
          route: "SYD → PEK",
          dates: "10Apr - 20Apr",
          price: "$699",
          currency: "AUD",
          link: "https://www.trip.com/flights/beijing?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "MEL → PEK",
          dates: "18Apr - 28Apr",
          price: "$749",
          currency: "AUD",
          link: "https://www.trip.com/flights/beijing?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "BNE → PEK",
          dates: "05May - 15May",
          price: "$679",
          currency: "AUD",
          link: "https://www.trip.com/flights/beijing?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
