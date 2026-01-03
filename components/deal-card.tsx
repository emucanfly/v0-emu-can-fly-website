import Image from "next/image"
import Link from "next/link"

interface DealCardProps {
  destination: string
  image: string
  href: string
  price?: string
}

export function DealCard({ destination, image, href, price }: DealCardProps) {
  return (
    <Link href={href} className="group block">
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
          {price && <p className="text-[#FFD700] font-semibold text-sm mt-1">From {price}</p>}
        </div>
      </div>
    </Link>
  )
}
