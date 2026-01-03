import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Bali | Emu Can Fly",
  description:
    "Find the best flight deals to Bali, Indonesia. Compare cheap airfares to Ngurah Rai International Airport.",
}

export default function FlightsToBaliPage() {
  return (
    <FlightDealPage
      title="Flights to Bali"
      subtitle="Escape to Indonesia's island paradise"
      heroImage="/bali-indonesia-temple-rice-terraces.jpg"
      destination="bali"
      description="Bali captivates with its dramatic dances, colorful ceremonies, arts and crafts, and stunning natural beauty. From world-class surfing and diving to ancient temples and lush rice terraces, this Indonesian island offers endless adventures and relaxation."
      popularDestinations={[
        { airportCode: "Denpasar (DPS)", description: "Ngurah Rai International Airport, main gateway to Bali" },
        { airportCode: "Ubud", description: "Cultural heart of Bali, art galleries and rice paddies" },
        { airportCode: "Seminyak", description: "Beach clubs, boutique shopping, and fine dining" },
        { airportCode: "Uluwatu", description: "Dramatic cliffs, surf breaks, and ancient temple" },
      ]}
      bestTimeToVisit="The dry season (April to October) is the best time to visit with sunny days and little rain. The wet season (November to March) brings afternoon showers but also lush green landscapes and fewer tourists."
      travelTips={[
        "Direct flights from Australian cities take around 6 hours",
        "Visa on arrival available for many nationalities",
        "Rent a scooter for easy transport (international license required)",
        "Respect local customs when visiting temples - cover shoulders and knees",
      ]}
      fallbackDeals={[
        {
          id: "1",
          route: "SYD → DPS",
          dates: "05Mar - 15Mar",
          price: "$499",
          currency: "AUD",
          link: "https://www.trip.com/flights/bali?Allianceid=7652184&SID=286550244",
        },
        {
          id: "2",
          route: "MEL → DPS",
          dates: "12Mar - 22Mar",
          price: "$529",
          currency: "AUD",
          link: "https://www.trip.com/flights/bali?Allianceid=7652184&SID=286550244",
        },
        {
          id: "3",
          route: "PER → DPS",
          dates: "01Apr - 10Apr",
          price: "$399",
          currency: "AUD",
          link: "https://www.trip.com/flights/bali?Allianceid=7652184&SID=286550244",
        },
      ]}
    />
  )
}
