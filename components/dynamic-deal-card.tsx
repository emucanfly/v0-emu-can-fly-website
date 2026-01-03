"use client"

import Image from "next/image"
import Link from "next/link"

interface DynamicDealCardProps {
  destination: string
  slug: string
  image: string
  lowestPrice: number | null
  currency: string
  hasDeals: boolean
}

export function DynamicDealCard({ destination, slug, image, lowestPrice, currency, hasDeals }: DynamicDealCardProps) {
  // Format price with currency symbol
  const formatPrice = (price: number, curr: string) => {
    const symbols: Record<string, string> = {
      USD: "$",
      AUD: "A$",
      NZD: "NZ$",
      GBP: "£",
      EUR: "€",
    }
    const symbol = symbols[curr] || "$"
    return `${symbol}${price.toLocaleString()}`
  }

  return (
    <Link href={`/deals/flights-to-${slug}`} className="group block">
      <div className="relative overflow-hidden rounded-xl aspect-[4/3] shadow-lg">
        <Image
          src={image || "/placeholder.svg"}
          alt={`Flights to ${destination}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-bold text-lg">{destination}</h3>
          {hasDeals && lowestPrice !== null ? (
            <p className="text-[#FFD700] font-semibold text-sm mt-1">From {formatPrice(lowestPrice, currency)}</p>
          ) : (
            <p className="text-white/70 text-sm mt-1">View Deals</p>
          )}
        </div>
        {/* "Hot Deal" badge when there are deals */}
        {hasDeals && (
          <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            HOT DEAL
          </div>
        )}
      </div>
    </Link>
  )
}
