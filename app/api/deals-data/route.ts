import { NextResponse } from "next/server"

export interface DealData {
  destination: string
  slug: string
  image: string
  deals: {
    id: string
    route: string
    dates: string
    price: string
    currency: string
    link: string
  }[]
  lowestPrice: number | null
  currency: string
  hasDeals: boolean
  lastUpdated: string | null
}

// All destinations configuration
const ALL_DESTINATIONS: Omit<DealData, "deals" | "lowestPrice" | "hasDeals" | "lastUpdated">[] = [
  { destination: "Honolulu, Hawaii", slug: "hawaii", image: "/honolulu-hawaii-beach-waikiki.jpg", currency: "CAD" },
  { destination: "Tokyo, Japan", slug: "tokyo", image: "/tokyo-japan-skyline-mount-fuji.jpg", currency: "CAD" },
  { destination: "Bali, Indonesia", slug: "bali", image: "/bali-indonesia-temple-rice-terraces.jpg", currency: "CAD" },
  { destination: "Bangkok, Thailand", slug: "bangkok", image: "/bangkok-thailand-temples-golden.jpg", currency: "CAD" },
  { destination: "Fiji Islands", slug: "fiji", image: "/fiji-islands-tropical-beach-resort.jpg", currency: "CAD" },
  { destination: "Singapore", slug: "singapore", image: "/singapore-marina-bay-skyline-night.jpg", currency: "CAD" },
  { destination: "Beijing, China", slug: "beijing", image: "/beijing-china-forbidden-city.jpg", currency: "CAD" },
  { destination: "Shanghai, China", slug: "shanghai", image: "/shanghai-china-skyline.jpg", currency: "CAD" },
  { destination: "Seoul, Korea", slug: "seoul", image: "/seoul-korea-palace.jpg", currency: "CAD" },
  { destination: "Taipei, Taiwan", slug: "taipei", image: "/taipei-taiwan-101.jpg", currency: "CAD" },
  {
    destination: "Kuala Lumpur, Malaysia",
    slug: "kuala-lumpur",
    image: "/kuala-lumpur-petronas-towers.jpg",
    currency: "CAD",
  },
  {
    destination: "Ho Chi Minh City, Vietnam",
    slug: "ho-chi-minh",
    image: "/ho-chi-minh-city-vietnam.jpg",
    currency: "CAD",
  },
  { destination: "New Delhi, India", slug: "new-delhi", image: "/new-delhi-india-taj-mahal.jpg", currency: "CAD" },
  { destination: "Mumbai, India", slug: "mumbai", image: "/mumbai-india-gateway.jpg", currency: "CAD" },
  { destination: "Jakarta, Indonesia", slug: "jakarta", image: "/jakarta-indonesia-skyline.jpg", currency: "CAD" },
  { destination: "Hong Kong", slug: "hong-kong", image: "/hong-kong-skyline-harbor.jpg", currency: "CAD" },
  { destination: "Manila, Philippines", slug: "manila", image: "/manila-philippines-skyline.jpg", currency: "CAD" },
  { destination: "London, UK", slug: "london", image: "/london-big-ben-bridge.jpg", currency: "CAD" },
  { destination: "Paris, France", slug: "paris", image: "/paris-eiffel-tower.jpg", currency: "CAD" },
  { destination: "Amsterdam, Netherlands", slug: "amsterdam", image: "/amsterdam-canals.jpg", currency: "CAD" },
  { destination: "Oslo, Norway", slug: "oslo", image: "/oslo-norway-fjords.jpg", currency: "CAD" },
  { destination: "Madrid, Spain", slug: "madrid", image: "/madrid-spain-plaza-mayor.jpg", currency: "CAD" },
  {
    destination: "Barcelona, Spain",
    slug: "barcelona",
    image: "/barcelona-spain-sagrada-familia.jpg",
    currency: "CAD",
  },
  { destination: "Frankfurt, Germany", slug: "frankfurt", image: "/frankfurt-germany-skyline.jpg", currency: "CAD" },
  { destination: "Rome, Italy", slug: "rome", image: "/rome-italy-colosseum.jpg", currency: "CAD" },
  { destination: "Athens, Greece", slug: "athens", image: "/athens-greece-acropolis.jpg", currency: "CAD" },
  { destination: "Geneva, Switzerland", slug: "geneva", image: "/geneva-switzerland-lake.jpg", currency: "CAD" },
  { destination: "Lisbon, Portugal", slug: "lisbon", image: "/lisbon-portugal-tram.jpg", currency: "CAD" },
  { destination: "Dublin, Ireland", slug: "dublin", image: "/dublin-ireland-temple-bar.jpg", currency: "CAD" },
  { destination: "Stockholm, Sweden", slug: "stockholm", image: "/stockholm-sweden-old-town.jpg", currency: "CAD" },
  { destination: "Istanbul, Turkey", slug: "istanbul", image: "/istanbul-turkey-blue-mosque.jpg", currency: "CAD" },
  { destination: "Copenhagen, Denmark", slug: "copenhagen", image: "/copenhagen-denmark-nyhavn.jpg", currency: "CAD" },
  { destination: "Brisbane, Australia", slug: "brisbane", image: "/brisbane-australia-skyline.jpg", currency: "CAD" },
  { destination: "Sydney, Australia", slug: "sydney", image: "/sydney-australia-opera-house.jpg", currency: "CAD" },
  {
    destination: "Melbourne, Australia",
    slug: "melbourne",
    image: "/melbourne-australia-skyline.jpg",
    currency: "CAD",
  },
  {
    destination: "Auckland, New Zealand",
    slug: "auckland",
    image: "/auckland-new-zealand-skyline.jpg",
    currency: "CAD",
  },
  {
    destination: "Buenos Aires, Argentina",
    slug: "buenos-aires",
    image: "/buenos-aires-argentina-obelisk.jpg",
    currency: "CAD",
  },
  { destination: "Santiago, Chile", slug: "santiago", image: "/santiago-chile-skyline.jpg", currency: "CAD" },
  {
    destination: "Rio De Janeiro, Brazil",
    slug: "rio-de-janeiro",
    image: "/rio-de-janeiro-brazil-christ.jpg",
    currency: "CAD",
  },
  { destination: "Lima, Peru", slug: "lima", image: "/lima-peru-plaza-mayor.jpg", currency: "CAD" },
  { destination: "Bogota, Colombia", slug: "bogota", image: "/bogota-colombia-skyline.jpg", currency: "CAD" },
  { destination: "Mexico City, Mexico", slug: "mexico-city", image: "/mexico-city-angel.jpg", currency: "CAD" },
  { destination: "Cancun, Mexico", slug: "cancun", image: "/cancun-mexico-beach.jpg", currency: "CAD" },
  {
    destination: "Cape Town, South Africa",
    slug: "cape-town",
    image: "/cape-town-south-africa-table-mountain.jpg",
    currency: "CAD",
  },
]

async function fetchDealsForDestination(
  slug: string,
): Promise<{ deals: DealData["deals"]; lastUpdated: string | null }> {
  try {
    // Primary source: GitHub raw JSON file
    const githubUrl = `https://raw.githubusercontent.com/emucanfly/deals-data/main/deals/${slug}.json`

    const response = await fetch(githubUrl, {
      next: { revalidate: 3600 }, // Cache for 1 hour
      headers: { Accept: "application/json" },
    })

    if (response.ok) {
      const data = await response.json()
      if (data.deals && Array.isArray(data.deals)) {
        return { deals: data.deals, lastUpdated: data.lastUpdated || null }
      }
    }
  } catch {
    // Silent fail - will return empty deals
  }

  return { deals: [], lastUpdated: null }
}

function extractLowestPrice(deals: DealData["deals"]): number | null {
  if (deals.length === 0) return null

  const prices = deals
    .map((deal) => {
      // Extract numeric value from price string (e.g., "$599" -> 599)
      const match = deal.price.replace(/[^0-9.]/g, "")
      return Number.parseFloat(match) || Number.POSITIVE_INFINITY
    })
    .filter((p) => p !== Number.POSITIVE_INFINITY)

  return prices.length > 0 ? Math.min(...prices) : null
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get("slug")

  // If specific slug requested, return just that destination
  if (slug) {
    const destination = ALL_DESTINATIONS.find((d) => d.slug === slug)
    if (!destination) {
      return NextResponse.json({ error: "Destination not found" }, { status: 404 })
    }

    const { deals, lastUpdated } = await fetchDealsForDestination(slug)
    const lowestPrice = extractLowestPrice(deals)

    return NextResponse.json({
      ...destination,
      deals,
      lowestPrice,
      hasDeals: deals.length > 0,
      lastUpdated,
    })
  }

  // Return all destinations with their deal status
  const destinationsWithDeals = await Promise.all(
    ALL_DESTINATIONS.map(async (dest) => {
      const { deals, lastUpdated } = await fetchDealsForDestination(dest.slug)
      const lowestPrice = extractLowestPrice(deals)

      return {
        ...dest,
        deals,
        lowestPrice,
        hasDeals: deals.length > 0,
        lastUpdated,
      }
    }),
  )

  return NextResponse.json(destinationsWithDeals)
}
