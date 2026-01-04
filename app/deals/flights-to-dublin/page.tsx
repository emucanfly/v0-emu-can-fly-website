import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Dublin | Emu Can Fly",
  description: "Find the best flight deals from Canada to Dublin, Ireland. Compare cheap airfares to Dublin Airport.",
}

export default function FlightsToDublinPage() {
  return (
    <FlightDealPage
      title="Flights to Dublin"
      subtitle="Ireland's spirited capital"
      heroImage="/dublin-ireland-temple-bar.jpg"
      destination="dublin"
      description="Dublin is a city of literary legends, lively pubs, and warm Irish welcome. Explore Georgian architecture, trace the footsteps of Joyce and Yeats, enjoy traditional music sessions, and discover why the craic (fun) never stops in Ireland's spirited capital."
      topAttractions={[
        {
          name: "Trinity College & Book of Kells",
          description: "Historic university with illuminated medieval manuscript",
        },
        { name: "Temple Bar", description: "Cultural quarter famous for pubs and live music" },
        { name: "Guinness Storehouse", description: "Interactive brewery tour with rooftop bar views" },
        { name: "St. Patrick's Cathedral", description: "Ireland's largest cathedral, dating to 1220" },
      ]}
      bestTimeToVisit="May to September offers the driest weather and longest days. St. Patrick's Day (March 17) is festive chaos. Autumn is beautiful. Winter is dark but cozy in pubs."
      travelTips={[
        "Guinness tastes better in Dublin - try it at the source",
        "Traditional music sessions happen nightly in many pubs",
        "Leap Card is best for public transport",
        "Day trips to Cliffs of Moher and Wicklow Mountains",
      ]}
    />
  )
}
