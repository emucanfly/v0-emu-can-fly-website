import Link from "next/link"
import { Plane } from "lucide-react"

export function Header() {
  return (
    <header className="border-b border-border bg-[#001f3f] sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center">
            <Plane className="w-5 h-5 text-[#001f3f] rotate-45" />
          </div>
          <span className="text-xl font-bold text-[#FFD700]">Emu Can Fly</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-[#FFD700] hover:text-[#FFC700] transition-colors">
            Flights
          </Link>
          <Link href="/" className="text-sm font-medium text-[#FFD700] hover:text-[#FFC700] transition-colors">
            Hotels
          </Link>
          <Link
            href="/deals/canada"
            className="text-sm font-medium text-[#FFD700] hover:text-[#FFC700] transition-colors"
          >
            Deals
          </Link>
          <Link href="/contact" className="text-sm font-medium text-[#FFD700] hover:text-[#FFC700] transition-colors">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  )
}
