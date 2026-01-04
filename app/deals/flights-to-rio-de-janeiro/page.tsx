import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Rio De Janeiro | Emu Can Fly",
  description:
    "Find the best flight deals from Canada to Rio de Janeiro, Brazil. Compare cheap airfares to Galeão Airport.",
}

export default function FlightsToRioDeJaneiroPage() {
  return (
    <FlightDealPage
      title="Flights to Rio De Janeiro"
      subtitle="Cidade Maravilhosa"
      heroImage="/rio-de-janeiro-brazil-christ.jpg"
      destination="rio-de-janeiro"
      description="Rio de Janeiro is a city of dramatic beauty - from Christ the Redeemer overlooking Sugarloaf Mountain to the golden curves of Copacabana Beach. Experience samba, Carnival, incredible nature, and the infectious joy of carioca culture in the Marvelous City."
      topAttractions={[
        { name: "Christ the Redeemer", description: "Iconic art deco statue atop Corcovado mountain" },
        { name: "Sugarloaf Mountain", description: "Cable car ride with panoramic views" },
        { name: "Copacabana & Ipanema", description: "World-famous beaches with vibrant atmosphere" },
        { name: "Selaron Steps", description: "Colorful mosaic stairway by artist Jorge Selarón" },
      ]}
      bestTimeToVisit="December to March is summer - hot, festive, and Carnival (Feb/Mar). April to June and August to October are pleasant. Winter (June-August) is mild with fewer tourists."
      travelTips={[
        "Uber is safe and affordable for getting around",
        "Be aware of your surroundings - leave valuables at hotel",
        "Take the cog train to Christ the Redeemer",
        "Carnival requires advance planning and accommodation booking",
      ]}
    />
  )
}
