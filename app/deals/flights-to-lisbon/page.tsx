import { FlightDealPage } from "@/components/flight-deal-page"

export const metadata = {
  title: "Cheap Flights to Lisbon | Emu Can Fly",
  description: "Find the best flight deals from Canada to Lisbon, Portugal. Compare cheap airfares to Lisbon Airport.",
}

export default function FlightsToLisbonPage() {
  return (
    <FlightDealPage
      title="Flights to Lisbon"
      subtitle="Europe's sunniest capital"
      heroImage="/lisbon-portugal-tram.jpg"
      destination="lisbon"
      description="Lisbon captivates with its pastel-colored buildings, nostalgic trams, and stunning viewpoints overlooking the Tagus River. Explore ancient Alfama, indulge in pastéis de nata, listen to soulful fado music, and discover why this coastal capital is Europe's rising star."
      topAttractions={[
        { name: "Belém Tower", description: "16th-century fortified tower and UNESCO site" },
        { name: "Jerónimos Monastery", description: "Ornate Manueline architecture masterpiece" },
        { name: "Alfama District", description: "Oldest neighborhood with fado bars and narrow streets" },
        { name: "Time Out Market", description: "Gourmet food hall in historic Mercado da Ribeira" },
      ]}
      bestTimeToVisit="March to May and September to October offer pleasant weather. Summer is hot and busy. Winter is mild with occasional rain. Festivals like Santos Populares (June) add to the experience."
      travelTips={[
        "Wear comfortable shoes - Lisbon is hilly!",
        "Tram 28 is scenic but often crowded - watch for pickpockets",
        "Pastéis de Belém are the original egg tarts",
        "Day trips to Sintra and Cascais are easy by train",
      ]}
    />
  )
}
