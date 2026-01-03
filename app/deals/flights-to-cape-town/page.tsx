import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Cape Town | Emu Can Fly",
  description:
    "Find the best flight deals to Cape Town, South Africa. Compare cheap airfares to Cape Town International Airport.",
}

export default function FlightsToCapeTownPage() {
  return (
    <FlightDealPage
      title="Flights to Cape Town"
      subtitle="Africa's Mother City"
      heroImage="/cape-town-south-africa-table-mountain.jpg"
      destination="cape-town"
      description="Cape Town is spectacularly beautiful, where Table Mountain overlooks two oceans, world-class wine regions, and diverse neighborhoods. Experience incredible wildlife, stunning coastal drives, vibrant culture, and some of the world's best value luxury experiences."
      popularDestinations={[
        { airportCode: "Cape Town (CPT)", description: "International airport, 20km from city" },
        { airportCode: "Table Mountain", description: "Iconic flat-topped mountain, cable car" },
        { airportCode: "V&A Waterfront", description: "Shopping, dining, harbor views" },
        { airportCode: "Stellenbosch", description: "Wine country, tastings, scenery" },
      ]}
      bestTimeToVisit="November to March is summer - warm, sunny, and whale season. April to October is winter - cooler, wetter, but fewer crowds and great wine touring weather. December-January is peak season."
      travelTips={[
        "Rent a car for flexibility - driving is on the left",
        "Wine regions are world-class and great value",
        "Table Mountain cable car gets busy - go early",
        "Safari day trips to nearby reserves are possible",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "YVR → CPT",
          dates: "01Nov - 14Nov",
          price: "$1,299",
          currency: "CAD",
          link: "https://www.trip.com/flights/cape-town?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "YYZ → CPT",
          dates: "10Nov - 23Nov",
          price: "$1,199",
          currency: "CAD",
          link: "https://www.trip.com/flights/cape-town?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "YYC → CPT",
          dates: "01Dec - 14Dec",
          price: "$1,349",
          currency: "CAD",
          link: "https://www.trip.com/flights/cape-town?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
