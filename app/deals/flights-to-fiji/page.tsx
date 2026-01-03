import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Fiji | Emu Can Fly",
  description: "Find the best flight deals to Fiji Islands. Compare cheap airfares to Nadi International Airport.",
}

export default function FlightsToFijiPage() {
  return (
    <FlightDealPage
      title="Flights to Fiji Islands"
      subtitle="Your South Pacific paradise awaits"
      heroImage="/fiji-islands-tropical-beach-resort.jpg"
      destination="fiji"
      description="Fiji is a tropical paradise of 333 islands offering pristine beaches, crystal-clear waters, and warm Fijian hospitality. Whether you seek luxury resorts, adventure activities, or simply relaxation under swaying palms, Fiji delivers the ultimate island escape."
      popularDestinations={[
        { airportCode: "Nadi (NAN)", description: "Main international gateway to Fiji" },
        { airportCode: "Suva (SUV)", description: "Capital city, cultural experiences" },
        { airportCode: "Mamanuca Islands", description: "Stunning resort islands, water sports" },
        { airportCode: "Yasawa Islands", description: "Remote beauty, traditional villages" },
      ]}
      bestTimeToVisit="May to October is the dry season with pleasant temperatures and minimal rainfall - ideal for beach activities. November to April is wetter but brings lush landscapes and fewer tourists."
      travelTips={[
        "Direct flights from Australian east coast take around 4 hours",
        "No visa required for Australian and NZ citizens (up to 4 months)",
        "Book island transfers in advance - seaplanes and ferries fill up",
        "Participate in a Kava ceremony for authentic cultural experience",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "SYD → NAN",
          dates: "10Mar - 17Mar",
          price: "$449",
          currency: "AUD",
          link: "https://www.trip.com/flights/fiji?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "MEL → NAN",
          dates: "15Mar - 22Mar",
          price: "$479",
          currency: "AUD",
          link: "https://www.trip.com/flights/fiji?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "BNE → NAN",
          dates: "01Apr - 08Apr",
          price: "$399",
          currency: "AUD",
          link: "https://www.trip.com/flights/fiji?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
