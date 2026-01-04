import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to New Delhi | Emu Can Fly",
  description:
    "Find the best flight deals from Canada to New Delhi, India. Compare cheap airfares to Indira Gandhi International Airport.",
}

export default function FlightsToNewDelhiPage() {
  return (
    <FlightDealPage
      title="Flights to New Delhi"
      subtitle="Gateway to incredible India"
      heroImage="/new-delhi-india-gate-red-fort.jpg"
      destination="new-delhi"
      description="New Delhi is a city of magnificent monuments, bustling bazaars, and incredible diversity. From the Red Fort to modern shopping malls, ancient Mughal architecture to vibrant street food, India's capital offers an intense and rewarding travel experience unlike anywhere else."
      topAttractions={[
        { name: "Red Fort", description: "UNESCO World Heritage Mughal fortress" },
        { name: "Taj Mahal (Agra)", description: "World wonder, 3 hours from Delhi" },
        { name: "Qutub Minar", description: "UNESCO tower and ancient ruins complex" },
        { name: "Chandni Chowk", description: "Historic bazaar and street food paradise" },
      ]}
      bestTimeToVisit="October to March offers pleasant weather with cool nights. April to June is extremely hot. July to September is monsoon season with heavy rains. Diwali (Oct/Nov) is magical but very crowded."
      travelTips={[
        "Delhi Metro is clean, efficient, and covers major attractions",
        "Negotiate auto-rickshaw fares before getting in",
        "Street food is amazing - look for busy stalls",
        "Golden Triangle (Delhi-Agra-Jaipur) is a popular route",
      ]}
    />
  )
}
