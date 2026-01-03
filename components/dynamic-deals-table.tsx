"use client"

import { useEffect, useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ExternalLink, Loader2 } from "lucide-react"

interface Deal {
  id: string
  route: string
  dates: string
  price: string
  currency: string
  link: string
}

interface DynamicDealsTableProps {
  destination: string
  fallbackDeals?: Deal[]
}

// This component fetches deals from an external source (GitHub JSON or n8n webhook)
// allowing daily/weekly updates without modifying v0 code
export function DynamicDealsTable({ destination, fallbackDeals = [] }: DynamicDealsTableProps) {
  const [deals, setDeals] = useState<Deal[]>(fallbackDeals)
  const [loading, setLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState<string | null>(null)

  useEffect(() => {
    async function fetchDeals() {
      try {
        // Primary source: GitHub raw JSON file
        // Update this URL to your GitHub repo where deals are stored
        const githubUrl = `https://raw.githubusercontent.com/emucanfly/v0-emu-can-fly-website/main/content/deals/${destination}.json`

        // Fallback source: n8n webhook endpoint
        const n8nUrl = `https://your-n8n-instance.com/webhook/deals/${destination}`

        let response = await fetch(githubUrl, {
          next: { revalidate: 3600 }, // Cache for 1 hour
          headers: { Accept: "application/json" },
        }).catch(() => null)

        if (!response?.ok) {
          // Try n8n webhook as fallback
          response = await fetch(n8nUrl, {
            next: { revalidate: 3600 },
          }).catch(() => null)
        }

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

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#001f3f]">
              <TableHead className="text-[#FFD700] font-semibold">Route</TableHead>
              <TableHead className="text-[#FFD700] font-semibold">Dates</TableHead>
              <TableHead className="text-[#FFD700] font-semibold">Price</TableHead>
              <TableHead className="text-[#FFD700] font-semibold">Currency</TableHead>
              <TableHead className="text-[#FFD700] font-semibold">Book Now</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {deals.map((deal) => (
              <TableRow key={deal.id} className="hover:bg-muted/50">
                <TableCell className="font-medium">{deal.route}</TableCell>
                <TableCell>{deal.dates}</TableCell>
                <TableCell className="font-semibold text-green-600">{deal.price}</TableCell>
                <TableCell>{deal.currency}</TableCell>
                <TableCell>
                  <a
                    href={deal.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    View Deal <ExternalLink className="w-3 h-3" />
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
