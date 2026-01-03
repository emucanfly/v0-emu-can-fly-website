"use client"

import { useEffect, useState } from "react"
import { DynamicDealCard } from "./dynamic-deal-card"
import { Loader2 } from "lucide-react"

interface DealData {
  destination: string
  slug: string
  image: string
  lowestPrice: number | null
  currency: string
  hasDeals: boolean
}

interface DealsGridProps {
  showOnlyWithDeals?: boolean
  maxItems?: number
}

export function DealsGrid({ showOnlyWithDeals = false, maxItems }: DealsGridProps) {
  const [destinations, setDestinations] = useState<DealData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchAllDeals() {
      try {
        const response = await fetch("/api/deals-data")
        if (response.ok) {
          const data = await response.json()
          setDestinations(data)
        }
      } catch (error) {
        console.log("[v0] Failed to fetch deals data")
      } finally {
        setLoading(false)
      }
    }

    fetchAllDeals()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
        <span className="ml-3 text-muted-foreground">Loading deals...</span>
      </div>
    )
  }

  // Filter and sort destinations
  let displayDestinations = [...destinations]

  if (showOnlyWithDeals) {
    // Only show destinations that have actual deals
    displayDestinations = displayDestinations.filter((d) => d.hasDeals)
  }

  // Sort: destinations with deals first (sorted by lowest price), then others
  displayDestinations.sort((a, b) => {
    if (a.hasDeals && !b.hasDeals) return -1
    if (!a.hasDeals && b.hasDeals) return 1
    if (a.hasDeals && b.hasDeals && a.lowestPrice && b.lowestPrice) {
      return a.lowestPrice - b.lowestPrice
    }
    return 0
  })

  // Limit items if maxItems is set
  if (maxItems) {
    displayDestinations = displayDestinations.slice(0, maxItems)
  }

  if (displayDestinations.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        <p>No current deals available. Check back soon!</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {displayDestinations.map((deal) => (
        <DynamicDealCard
          key={deal.slug}
          destination={deal.destination}
          slug={deal.slug}
          image={deal.image}
          lowestPrice={deal.lowestPrice}
          currency={deal.currency}
          hasDeals={deal.hasDeals}
        />
      ))}
    </div>
  )
}
