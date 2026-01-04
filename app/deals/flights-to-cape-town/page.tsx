import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Cape Town | Emu Can Fly",
  description:
    "Find the best flight deals from Canada to Cape Town, South Africa. Compare cheap airfares to Cape Town International Airport.",
}

export default function FlightsToCapeTownPage() {
  return (
    <FlightDealPage
      title="Flights to Cape Town"
      subtitle="Africa's Mother City"
      heroImage="/cape-town-south-africa-table-mountain.jpg"
      destination="cape-town"
      description="Cape Town is spectacularly beautiful, where Table Mountain overlooks two oceans, world-class wine regions, and diverse neighborhoods. Experience incredible wildlife, stunning coastal drives, vibrant culture, and some of the world's best value luxury experiences."
      topAttractions={[
        { name: "Table Mountain", description: "Iconic flat-topped mountain with cable car" },
        { name: "Cape Peninsula & Cape Point", description: "Dramatic coastline where oceans meet" },
        { name: "Stellenbosch Wine Region", description: "World-class wineries with stunning scenery" },
        { name: "Robben Island", description: "Historic prison where Mandela was held" },
      ]}
      bestTimeToVisit="November to March is summer - warm, sunny, and whale season. April to October is winter - cooler, wetter, but fewer crowds and great wine touring weather. December-January is peak season."
      travelTips={[
        "Rent a car for flexibility - driving is on the left",
        "Wine regions are world-class and great value",
        "Table Mountain cable car gets busy - go early",
        "Safari day trips to nearby reserves are possible",
      ]}
    />
  )
}
