import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Bogota | Emu Can Fly",
  description: "Find the best flight deals to Bogota, Colombia. Compare cheap airfares to El Dorado Airport.",
}

export default function FlightsToBogotaPage() {
  return (
    <FlightDealPage
      title="Flights to Bogota"
      subtitle="Colombia's high-altitude capital"
      heroImage="/bogota-colombia-candelaria.jpg"
      destination="bogota"
      description="Bogotá has transformed into one of South America's most exciting cities, with world-class museums, incredible street art, emerging food scenes, and easy access to coffee country. Explore the colorful La Candelaria district and experience Colombia's cultural renaissance."
      popularDestinations={[
        { airportCode: "El Dorado (BOG)", description: "International airport, TransMilenio to city" },
        { airportCode: "La Candelaria", description: "Historic center, street art, museums" },
        { airportCode: "Zona Rosa", description: "Upscale dining, nightlife" },
        { airportCode: "Monserrate", description: "Mountain pilgrimage, city views" },
      ]}
      bestTimeToVisit="December to March and July to August are driest. Bogotá's high altitude (2,640m) means cool weather year-round - bring layers. Afternoons often bring rain showers."
      travelTips={[
        "Altitude can affect you - take it easy on day one",
        "Colombian coffee is excellent - visit a coffee farm",
        "Street food is delicious - try arepas and empanadas",
        "Uber works well for safe, affordable transport",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "YVR → BOG",
          dates: "12Apr - 25Apr",
          price: "$699",
          currency: "CAD",
          link: "https://www.trip.com/flights/bogota?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "YYZ → BOG",
          dates: "20Apr - 03May",
          price: "$599",
          currency: "CAD",
          link: "https://www.trip.com/flights/bogota?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "YYC → BOG",
          dates: "08May - 21May",
          price: "$749",
          currency: "CAD",
          link: "https://www.trip.com/flights/bogota?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
