"use client"

import { useEffect, useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ExternalLink, Loader2 } from "lucide-react"

interface N8nDeal {
  market: string
  route: string
  fromAirport: string
  toAirport: string
  origin: string
  destination: string
  departureDate: string
  returnDate: string
  cabin: string
  carrier: string
  price:
    | {
        amount: number
        currency: string
        deepLink: string
        lastseen: string
      }
    | string
    | number // Allow price to be string or number for flexibility
}

interface DynamicDealsTableProps {
  destination: string
  fallbackDeals?: N8nDeal[]
}

export function DynamicDealsTable({ destination, fallbackDeals = [] }: DynamicDealsTableProps) {
  const [deals, setDeals] = useState<N8nDeal[]>(fallbackDeals)
  const [loading, setLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState<string | null>(null)

  useEffect(() => {
    async function fetchDeals() {
      try {
        // Primary source: GitHub raw JSON file
        const githubUrl = `https://raw.githubusercontent.com/emucanfly/v0-emu-can-fly-website/main/content/deals/${destination}.json`

        const response = await fetch(githubUrl, {
          headers: { Accept: "application/json" },
        }).catch(() => null)

        if (response?.ok) {
          const data = await response.json()
          if (data.deals && Array.isArray(data.deals)) {
            setDeals(data.deals)
            setLastUpdated(data.lastUpdated || new Date().toISOString())
          }
        }
      } catch (error) {
        console.log("[v0] Using fallback deals - external source unavailable")
      } finally {
        setLoading(false)
      }
    }

    fetchDeals()
  }, [destination])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
        <span className="ml-2 text-muted-foreground">Loading latest deals...</span>
      </div>
    )
  }

  if (deals.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        <p>No current deals available. Check back soon for new offers!</p>
      </div>
    )
  }

  const formatPrice = (deal: N8nDeal) => {
    const symbols: Record<string, string> = {
      CAD: "CA$",
      USD: "$",
      AUD: "A$",
      EUR: "€",
      GBP: "£",
      JPY: "¥",
      NZD: "NZ$",
    }

    // Handle nested price object
    if (deal.price && typeof deal.price === "object" && "amount" in deal.price) {
      const amount = deal.price.amount
      const currency = deal.price.currency || "CAD"
      if (amount === undefined || amount === null) return "N/A"
      return `${symbols[currency] || currency}${amount.toLocaleString()}`
    }

    // Handle simple price string or number
    if (typeof deal.price === "number") {
      return `CA$${deal.price.toLocaleString()}`
    }

    if (typeof deal.price === "string") {
      return deal.price
    }

    return "N/A"
  }

  const getDeepLink = (deal: N8nDeal) => {
    if (deal.price && typeof deal.price === "object" && "deepLink" in deal.price) {
      return deal.price.deepLink
    }
    return "#"
  }

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#001f3f]">
              <TableHead className="text-[#FFD700] font-semibold">Route</TableHead>
              <TableHead className="text-[#FFD700] font-semibold">Origin</TableHead>
              <TableHead className="text-[#FFD700] font-semibold">Destination</TableHead>
              <TableHead className="text-[#FFD700] font-semibold">Dates</TableHead>
              <TableHead className="text-[#FFD700] font-semibold">Cabin</TableHead>
              <TableHead className="text-[#FFD700] font-semibold">Price</TableHead>
              <TableHead className="text-[#FFD700] font-semibold">Book Now</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {deals.map((deal, index) => (
              <TableRow key={`${deal.route}-${deal.departureDate}-${index}`} className="hover:bg-muted/50">
                <TableCell className="font-medium">{deal.route || "N/A"}</TableCell>
                <TableCell>{deal.origin || "N/A"}</TableCell>
                <TableCell>{deal.destination || "N/A"}</TableCell>
                <TableCell>
                  {deal.departureDate || "?"} - {deal.returnDate || "?"}
                </TableCell>
                <TableCell className="capitalize">{deal.cabin?.toLowerCase() || "Economy"}</TableCell>
                <TableCell className="font-semibold text-green-600">{formatPrice(deal)}</TableCell>
                <TableCell>
                  <a
                    href={getDeepLink(deal)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 hover:underline font-medium"
                  >
                    Book <ExternalLink className="w-3 h-3" />
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {lastUpdated && (
        <p className="text-xs text-muted-foreground text-right">
          Last updated:{" "}
          {new Date(lastUpdated).toLocaleDateString("en-AU", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      )}
    </div>
  )
}
