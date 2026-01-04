import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Manila | Emu Can Fly",
  description:
    "Find the best flight deals from Canada to Manila, Philippines. Compare cheap airfares to Ninoy Aquino International Airport.",
}

export default function FlightsToManilaPage() {
  return (
    <FlightDealPage
      title="Flights to Manila"
      subtitle="Gateway to the Philippines"
      heroImage="/manila-philippines-makati-skyline.jpg"
      destination="manila"
      description="Manila is a vibrant, chaotic, and endlessly fascinating city that serves as the gateway to the Philippines' 7,000+ islands. Experience Spanish colonial history, world-class shopping malls, legendary Filipino hospitality, and delicious cuisine in this dynamic capital."
      topAttractions={[
        { name: "Intramuros", description: "Historic walled city with Spanish colonial heritage" },
        { name: "Rizal Park", description: "60-hectare urban park honoring national hero" },
        { name: "San Agustin Church", description: "UNESCO World Heritage baroque church" },
        { name: "SM Mall of Asia", description: "One of Asia's largest shopping malls" },
      ]}
      bestTimeToVisit="November to May is dry season, with December to February being coolest. June to October is wet season with typhoon risk. Christmas season is hugely celebrated and festive."
      travelTips={[
        "Grab is essential for transport - traffic is extreme",
        "Filipino food is hearty - try adobo, sinigang, and lechon",
        "English is widely spoken - communication is easy",
        "Use Manila as a hub to explore Palawan, Boracay, Cebu",
      ]}
    />
  )
}
