import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Jakarta | Emu Can Fly",
  description:
    "Find the best flight deals from Canada to Jakarta, Indonesia. Compare cheap airfares to Soekarno-Hatta International Airport.",
}

export default function FlightsToJakartaPage() {
  return (
    <FlightDealPage
      title="Flights to Jakarta"
      subtitle="Indonesia's sprawling capital"
      heroImage="/jakarta-indonesia-skyline-monas.jpg"
      destination="jakarta"
      description="Jakarta is a megacity of contrasts - gleaming malls and ancient temples, extreme wealth and traditional markets. Explore Dutch colonial history, diverse cuisine from across Indonesia, vibrant nightlife, and use it as a gateway to explore Java and beyond."
      topAttractions={[
        { name: "Monas (National Monument)", description: "132m tower symbolizing Indonesia's independence" },
        { name: "Old Town (Kota Tua)", description: "Dutch colonial architecture and museums" },
        { name: "Thousand Islands (Kepulauan Seribu)", description: "Island getaways just offshore" },
        { name: "Istiqlal Mosque", description: "Southeast Asia's largest mosque" },
      ]}
      bestTimeToVisit="May to September is the dry season with less humidity. October to April is wet season with afternoon downpours. Jakarta is hot year-round - prepare for humidity and traffic."
      travelTips={[
        "Traffic is notorious - use MRT, TransJakarta, or Grab bike",
        "Indonesian food is incredible - try nasi goreng and satay",
        "Malls are social hubs with great food courts",
        "Learn basic Indonesian phrases - limited English outside hotels",
      ]}
    />
  )
}
