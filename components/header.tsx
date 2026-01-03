"use client"

import Link from "next/link"
import { Plane, ChevronDown, Menu, X } from "lucide-react"
import { useState, useRef, useEffect } from "react"

const DEAL_DESTINATIONS = {
  "Asia Pacific": [
    { name: "Tokyo", href: "/deals/flights-to-tokyo" },
    { name: "Bali", href: "/deals/flights-to-bali" },
    { name: "Bangkok", href: "/deals/flights-to-bangkok" },
    { name: "Singapore", href: "/deals/flights-to-singapore" },
    { name: "Hong Kong", href: "/deals/flights-to-hong-kong" },
    { name: "Seoul", href: "/deals/flights-to-seoul" },
    { name: "Taipei", href: "/deals/flights-to-taipei" },
    { name: "Beijing", href: "/deals/flights-to-beijing" },
    { name: "Shanghai", href: "/deals/flights-to-shanghai" },
    { name: "Kuala Lumpur", href: "/deals/flights-to-kuala-lumpur" },
    { name: "Ho Chi Minh City", href: "/deals/flights-to-ho-chi-minh-city" },
    { name: "Manila", href: "/deals/flights-to-manila" },
    { name: "Jakarta", href: "/deals/flights-to-jakarta" },
    { name: "New Delhi", href: "/deals/flights-to-new-delhi" },
    { name: "Mumbai", href: "/deals/flights-to-mumbai" },
  ],
  Americas: [
    { name: "Mexico City", href: "/deals/flights-to-mexico-city" },
    { name: "Cancun", href: "/deals/flights-to-cancun" },
    { name: "Buenos Aires", href: "/deals/flights-to-buenos-aires" },
    { name: "Rio De Janeiro", href: "/deals/flights-to-rio-de-janeiro" },
    { name: "Santiago", href: "/deals/flights-to-santiago" },
    { name: "Lima", href: "/deals/flights-to-lima" },
    { name: "Bogota", href: "/deals/flights-to-bogota" },
    { name: "Cape Town", href: "/deals/flights-to-cape-town" },
  ],
  Europe: [
    { name: "London", href: "/deals/flights-to-london" },
    { name: "Paris", href: "/deals/flights-to-paris" },
    { name: "Amsterdam", href: "/deals/flights-to-amsterdam" },
    { name: "Rome", href: "/deals/flights-to-rome" },
    { name: "Barcelona", href: "/deals/flights-to-barcelona" },
    { name: "Madrid", href: "/deals/flights-to-madrid" },
    { name: "Frankfurt", href: "/deals/flights-to-frankfurt" },
    { name: "Athens", href: "/deals/flights-to-athens" },
    { name: "Lisbon", href: "/deals/flights-to-lisbon" },
    { name: "Dublin", href: "/deals/flights-to-dublin" },
    { name: "Geneva", href: "/deals/flights-to-geneva" },
    { name: "Stockholm", href: "/deals/flights-to-stockholm" },
    { name: "Copenhagen", href: "/deals/flights-to-copenhagen" },
    { name: "Oslo", href: "/deals/flights-to-oslo" },
    { name: "Istanbul", href: "/deals/flights-to-istanbul" },
  ],
  "Australia, NZ & Pacific": [
    { name: "Hawaii", href: "/deals/flights-to-hawaii" },
    { name: "Fiji Islands", href: "/deals/flights-to-fiji" },
    { name: "Sydney", href: "/deals/flights-to-sydney" },
    { name: "Melbourne", href: "/deals/flights-to-melbourne" },
    { name: "Brisbane", href: "/deals/flights-to-brisbane" },
    { name: "Auckland", href: "/deals/flights-to-auckland" },
  ],
}

const HOTELS_URL = "https://www.trip.com/hotels/w/home?Allianceid=7652184&SID=286550244&trip_sub1=&trip_sub3=D9565481"

export function Header() {
  const [isDealsOpen, setIsDealsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileDealsOpen, setIsMobileDealsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsDealsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDealsOpen(false)
    }, 300)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
        setIsMobileDealsOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <header className="border-b border-border bg-[#001f3f] sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center">
            <Plane className="w-5 h-5 text-[#001f3f] rotate-45" />
          </div>
          <span className="text-xl font-bold text-[#FFD700]">Emu Can Fly</span>
        </Link>

        <button
          className="md:hidden text-[#FFD700] p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <nav className="hidden md:flex items-center gap-8">
          <div ref={dropdownRef} className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button
              onClick={() => setIsDealsOpen(!isDealsOpen)}
              className="text-sm font-medium text-[#FFD700] hover:text-[#FFC700] transition-colors flex items-center gap-1"
            >
              Deals
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDealsOpen ? "rotate-180" : ""}`} />
            </button>

            {isDealsOpen && (
              <div
                className="absolute top-full right-0 mt-2 bg-[#001f3f] border border-[#FFD700]/30 rounded-lg shadow-2xl p-6 w-[900px]"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* Row 1: Asia Pacific, Americas, Europe - using flex-wrap instead of scroll */}
                <div className="grid grid-cols-3 gap-8 mb-6">
                  {["Asia Pacific", "Americas", "Europe"].map((region) => (
                    <div key={region}>
                      <h4 className="text-xs font-bold text-[#FFD700] uppercase tracking-wider mb-3 border-b border-[#FFD700]/20 pb-2">
                        {region}
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {DEAL_DESTINATIONS[region as keyof typeof DEAL_DESTINATIONS].map((deal) => (
                          <Link
                            key={deal.href}
                            href={deal.href}
                            className="text-xs text-[#FFD700]/90 hover:text-white hover:bg-[#FFD700]/20 px-2 py-1 rounded transition-colors whitespace-nowrap"
                            onClick={() => setIsDealsOpen(false)}
                          >
                            {deal.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Row 2: Australia, NZ & Pacific */}
                <div className="border-t border-[#FFD700]/20 pt-4">
                  <h4 className="text-xs font-bold text-[#FFD700] uppercase tracking-wider mb-3">
                    Australia, NZ & Pacific
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {DEAL_DESTINATIONS["Australia, NZ & Pacific"].map((deal) => (
                      <Link
                        key={deal.href}
                        href={deal.href}
                        className="text-sm text-[#FFD700]/90 hover:text-white bg-[#FFD700]/10 hover:bg-[#FFD700]/20 px-3 py-1.5 rounded-full transition-colors"
                        onClick={() => setIsDealsOpen(false)}
                      >
                        {deal.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/" className="text-sm font-medium text-[#FFD700] hover:text-[#FFC700] transition-colors">
            Flights
          </Link>

          <a
            href={HOTELS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#FFD700] hover:text-[#FFC700] transition-colors"
          >
            Hotels
          </a>

          <Link href="/contact" className="text-sm font-medium text-[#FFD700] hover:text-[#FFC700] transition-colors">
            Contact Us
          </Link>
        </nav>

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#001f3f] border-b border-[#FFD700]/30 shadow-xl md:hidden">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {/* Mobile Deals Accordion */}
              <div>
                <button
                  onClick={() => setIsMobileDealsOpen(!isMobileDealsOpen)}
                  className="w-full text-left text-sm font-medium text-[#FFD700] hover:text-[#FFC700] transition-colors flex items-center justify-between py-3 border-b border-[#FFD700]/20"
                >
                  Deals
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${isMobileDealsOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isMobileDealsOpen && (
                  <div className="py-3 space-y-4">
                    {Object.entries(DEAL_DESTINATIONS).map(([region, destinations]) => (
                      <div key={region}>
                        <h4 className="text-xs font-bold text-[#FFD700]/70 uppercase tracking-wider mb-2">{region}</h4>
                        <div className="flex flex-wrap gap-1">
                          {destinations.map((deal) => (
                            <Link
                              key={deal.href}
                              href={deal.href}
                              className="text-xs text-[#FFD700]/90 hover:text-white bg-[#FFD700]/10 hover:bg-[#FFD700]/20 px-2 py-1 rounded transition-colors"
                              onClick={() => {
                                setIsMobileMenuOpen(false)
                                setIsMobileDealsOpen(false)
                              }}
                            >
                              {deal.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/"
                className="text-sm font-medium text-[#FFD700] hover:text-[#FFC700] transition-colors py-3 border-b border-[#FFD700]/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Flights
              </Link>

              <a
                href={HOTELS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[#FFD700] hover:text-[#FFC700] transition-colors py-3 border-b border-[#FFD700]/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hotels
              </a>

              <Link
                href="/contact"
                className="text-sm font-medium text-[#FFD700] hover:text-[#FFC700] transition-colors py-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
