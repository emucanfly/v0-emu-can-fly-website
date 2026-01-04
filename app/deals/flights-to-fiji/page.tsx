import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Fiji | Emu Can Fly",
  description: "Find the best flight deals to Fiji Islands. Compare cheap airfares from Canada.",
}

export default function FlightsToFijiPage() {
  return (
    <FlightDealPage
      title="Flights to Fiji Islands"
      subtitle="Your South Pacific paradise awaits"
      heroImage="/fiji-islands-tropical-beach-resort.jpg"
      destination="fiji"
      description="Fiji is a tropical paradise of 333 islands offering pristine beaches, crystal-clear waters, and warm Fijian hospitality. Whether you seek luxury resorts, adventure activities, or simply relaxation under swaying palms, Fiji delivers the ultimate island escape."
      topAttractions={[
        { name: "Mamanuca Islands", description: "Stunning island chain with world-class resorts" },
        { name: "Garden of the Sleeping Giant", description: "Beautiful orchid collection in lush gardens" },
        { name: "Cloud 9 Floating Bar", description: "Iconic floating platform bar in the ocean" },
        { name: "Sabeto Hot Springs", description: "Natural thermal mud pools and hot springs" },
      ]}
      bestTimeToVisit="May to October is the dry season with pleasant temperatures and minimal rainfall - ideal for beach activities. November to April is wetter but brings lush landscapes and fewer tourists."
      travelTips={[
        "Flights from Canada connect through LAX, SYD, or AKL",
        "Canadian citizens can visit visa-free for up to 4 months",
        "Book island transfers in advance - seaplanes and ferries fill up",
        "Participate in a Kava ceremony for authentic cultural experience",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "YVR → NAN",
          dates: "10Mar - 17Mar",
          price: "CA$1,299",
          currency: "CAD",
          link: "https://www.trip.com/flights/fiji?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
