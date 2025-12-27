"use client"

import { useState, useEffect, useRef } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Building2 } from "lucide-react"

const DESTINATIONS = [
  // Major Cities - NSW
  { city: "Sydney", state: "NSW", country: "Australia" },
  { city: "Newcastle", state: "NSW", country: "Australia" },
  { city: "Wollongong", state: "NSW", country: "Australia" },
  { city: "Canberra", state: "ACT", country: "Australia" },
  { city: "Central Coast", state: "NSW", country: "Australia" },

  // Major Cities - VIC
  { city: "Melbourne", state: "VIC", country: "Australia" },
  { city: "Geelong", state: "VIC", country: "Australia" },
  { city: "Ballarat", state: "VIC", country: "Australia" },
  { city: "Bendigo", state: "VIC", country: "Australia" },

  // Major Cities - QLD
  { city: "Brisbane", state: "QLD", country: "Australia" },
  { city: "Gold Coast", state: "QLD", country: "Australia" },
  { city: "Sunshine Coast", state: "QLD", country: "Australia" },
  { city: "Townsville", state: "QLD", country: "Australia" },
  { city: "Cairns", state: "QLD", country: "Australia" },
  { city: "Toowoomba", state: "QLD", country: "Australia" },
  { city: "Mackay", state: "QLD", country: "Australia" },
  { city: "Rockhampton", state: "QLD", country: "Australia" },

  // Major Cities - WA
  { city: "Perth", state: "WA", country: "Australia" },
  { city: "Fremantle", state: "WA", country: "Australia" },
  { city: "Bunbury", state: "WA", country: "Australia" },
  { city: "Mandurah", state: "WA", country: "Australia" },
  { city: "Karratha", state: "WA", country: "Australia" },
  { city: "Broome", state: "WA", country: "Australia" },

  // Major Cities - SA
  { city: "Adelaide", state: "SA", country: "Australia" },
  { city: "Mount Gambier", state: "SA", country: "Australia" },

  // Major Cities - TAS
  { city: "Hobart", state: "TAS", country: "Australia" },
  { city: "Launceston", state: "TAS", country: "Australia" },

  // Major Cities - NT
  { city: "Darwin", state: "NT", country: "Australia" },
  { city: "Alice Springs", state: "NT", country: "Australia" },

  // Sydney Metro - NSW
  { city: "Parramatta", state: "NSW", country: "Australia" },
  { city: "Penrith", state: "NSW", country: "Australia" },
  { city: "Liverpool", state: "NSW", country: "Australia" },
  { city: "Bankstown", state: "NSW", country: "Australia" },
  { city: "Blacktown", state: "NSW", country: "Australia" },
  { city: "Ryde", state: "NSW", country: "Australia" },
  { city: "Campbelltown", state: "NSW", country: "Australia" },
  { city: "Sutherland", state: "NSW", country: "Australia" },
  { city: "Hornsby", state: "NSW", country: "Australia" },
  { city: "Bondi", state: "NSW", country: "Australia" },
  { city: "Manly", state: "NSW", country: "Australia" },
  { city: "Cronulla", state: "NSW", country: "Australia" },
  { city: "Chatswood", state: "NSW", country: "Australia" },
  { city: "Strathfield", state: "NSW", country: "Australia" },
  { city: "Eastwood", state: "NSW", country: "Australia" },
  { city: "Hurstville", state: "NSW", country: "Australia" },
  { city: "Miranda", state: "NSW", country: "Australia" },
  { city: "Castle Hill", state: "NSW", country: "Australia" },
  { city: "Carlingford", state: "NSW", country: "Australia" },
  { city: "Epping", state: "NSW", country: "Australia" },
  { city: "Macquarie Park", state: "NSW", country: "Australia" },
  { city: "North Sydney", state: "NSW", country: "Australia" },

  // Melbourne Metro - VIC
  { city: "Southbank", state: "VIC", country: "Australia" },
  { city: "St Kilda", state: "VIC", country: "Australia" },
  { city: "Docklands", state: "VIC", country: "Australia" },
  { city: "Richmond", state: "VIC", country: "Australia" },
  { city: "Carlton", state: "VIC", country: "Australia" },
  { city: "Fitzroy", state: "VIC", country: "Australia" },
  { city: "Brunswick", state: "VIC", country: "Australia" },
  { city: "Preston", state: "VIC", country: "Australia" },
  { city: "Footscray", state: "VIC", country: "Australia" },
  { city: "Box Hill", state: "VIC", country: "Australia" },
  { city: "Glen Waverley", state: "VIC", country: "Australia" },
  { city: "Dandenong", state: "VIC", country: "Australia" },
  { city: "Frankston", state: "VIC", country: "Australia" },
  { city: "Brighton", state: "VIC", country: "Australia" },
  { city: "Caulfield", state: "VIC", country: "Australia" },
  { city: "Camberwell", state: "VIC", country: "Australia" },
  { city: "Ringwood", state: "VIC", country: "Australia" },
  { city: "Werribee", state: "VIC", country: "Australia" },
  { city: "Sunshine", state: "VIC", country: "Australia" },

  // Brisbane Metro - QLD
  { city: "South Bank", state: "QLD", country: "Australia" },
  { city: "Fortitude Valley", state: "QLD", country: "Australia" },
  { city: "Southport", state: "QLD", country: "Australia" },
  { city: "Surfers Paradise", state: "QLD", country: "Australia" },
  { city: "Broadbeach", state: "QLD", country: "Australia" },
  { city: "Coolangatta", state: "QLD", country: "Australia" },
  { city: "Noosa", state: "QLD", country: "Australia" },
  { city: "Maroochydore", state: "QLD", country: "Australia" },
  { city: "Mooloolaba", state: "QLD", country: "Australia" },
  { city: "Caloundra", state: "QLD", country: "Australia" },
  { city: "Logan", state: "QLD", country: "Australia" },
  { city: "Ipswich", state: "QLD", country: "Australia" },
  { city: "Redcliffe", state: "QLD", country: "Australia" },
  { city: "Caboolture", state: "QLD", country: "Australia" },
  { city: "Chermside", state: "QLD", country: "Australia" },
  { city: "Indooroopilly", state: "QLD", country: "Australia" },
  { city: "Carindale", state: "QLD", country: "Australia" },

  // Perth Metro - WA
  { city: "Fremantle", state: "WA", country: "Australia" },
  { city: "Joondalup", state: "WA", country: "Australia" },
  { city: "Rockingham", state: "WA", country: "Australia" },
  { city: "Armadale", state: "WA", country: "Australia" },
  { city: "Subiaco", state: "WA", country: "Australia" },
  { city: "Scarborough", state: "WA", country: "Australia" },

  // Adelaide Metro - SA
  { city: "Glenelg", state: "SA", country: "Australia" },
  { city: "North Adelaide", state: "SA", country: "Australia" },
  { city: "Port Adelaide", state: "SA", country: "Australia" },

  // Regional NSW
  { city: "Blue Mountains", state: "NSW", country: "Australia" },
  { city: "Port Macquarie", state: "NSW", country: "Australia" },
  { city: "Coffs Harbour", state: "NSW", country: "Australia" },
  { city: "Tamworth", state: "NSW", country: "Australia" },
  { city: "Orange", state: "NSW", country: "Australia" },
  { city: "Dubbo", state: "NSW", country: "Australia" },
  { city: "Wagga Wagga", state: "NSW", country: "Australia" },
  { city: "Albury", state: "NSW", country: "Australia" },
  { city: "Bathurst", state: "NSW", country: "Australia" },
  { city: "Nowra", state: "NSW", country: "Australia" },
  { city: "Goulburn", state: "NSW", country: "Australia" },
  { city: "Lismore", state: "NSW", country: "Australia" },
  { city: "Byron Bay", state: "NSW", country: "Australia" },
  { city: "Tweed Heads", state: "NSW", country: "Australia" },
  { city: "Forster", state: "NSW", country: "Australia" },
  { city: "Gosford", state: "NSW", country: "Australia" },
  { city: "Woy Woy", state: "NSW", country: "Australia" },
  { city: "Terrigal", state: "NSW", country: "Australia" },
  { city: "Kiama", state: "NSW", country: "Australia" },
  { city: "Bowral", state: "NSW", country: "Australia" },
  { city: "Katoomba", state: "NSW", country: "Australia" },

  // Regional VIC
  { city: "Mildura", state: "VIC", country: "Australia" },
  { city: "Shepparton", state: "VIC", country: "Australia" },
  { city: "Wodonga", state: "VIC", country: "Australia" },
  { city: "Warrnambool", state: "VIC", country: "Australia" },
  { city: "Traralgon", state: "VIC", country: "Australia" },
  { city: "Moe", state: "VIC", country: "Australia" },
  { city: "Wangaratta", state: "VIC", country: "Australia" },
  { city: "Torquay", state: "VIC", country: "Australia" },
  { city: "Lorne", state: "VIC", country: "Australia" },
  { city: "Apollo Bay", state: "VIC", country: "Australia" },
  { city: "Phillip Island", state: "VIC", country: "Australia" },

  // Regional QLD
  { city: "Hervey Bay", state: "QLD", country: "Australia" },
  { city: "Bundaberg", state: "QLD", country: "Australia" },
  { city: "Gladstone", state: "QLD", country: "Australia" },
  { city: "Maryborough", state: "QLD", country: "Australia" },
  { city: "Airlie Beach", state: "QLD", country: "Australia" },
  { city: "Whitsundays", state: "QLD", country: "Australia" },
  { city: "Hamilton Island", state: "QLD", country: "Australia" },
  { city: "Port Douglas", state: "QLD", country: "Australia" },
  { city: "Mission Beach", state: "QLD", country: "Australia" },
  { city: "Mount Isa", state: "QLD", country: "Australia" },

  // Regional WA
  { city: "Geraldton", state: "WA", country: "Australia" },
  { city: "Kalgoorlie", state: "WA", country: "Australia" },
  { city: "Port Hedland", state: "WA", country: "Australia" },
  { city: "Albany", state: "WA", country: "Australia" },
  { city: "Busselton", state: "WA", country: "Australia" },
  { city: "Margaret River", state: "WA", country: "Australia" },
  { city: "Esperance", state: "WA", country: "Australia" },
  { city: "Exmouth", state: "WA", country: "Australia" },

  // Regional SA
  { city: "Whyalla", state: "SA", country: "Australia" },
  { city: "Port Lincoln", state: "SA", country: "Australia" },
  { city: "Victor Harbor", state: "SA", country: "Australia" },
  { city: "Murray Bridge", state: "SA", country: "Australia" },

  // Regional TAS
  { city: "Devonport", state: "TAS", country: "Australia" },
  { city: "Burnie", state: "TAS", country: "Australia" },

  // New Zealand - North Island
  { city: "Auckland", state: "North Island", country: "New Zealand" },
  { city: "Wellington", state: "North Island", country: "New Zealand" },
  { city: "Hamilton", state: "North Island", country: "New Zealand" },
  { city: "Tauranga", state: "North Island", country: "New Zealand" },
  { city: "Rotorua", state: "North Island", country: "New Zealand" },
  { city: "Napier", state: "North Island", country: "New Zealand" },
  { city: "Palmerston North", state: "North Island", country: "New Zealand" },
  { city: "New Plymouth", state: "North Island", country: "New Zealand" },
  { city: "Whangarei", state: "North Island", country: "New Zealand" },
  { city: "Gisborne", state: "North Island", country: "New Zealand" },

  // New Zealand - South Island
  { city: "Christchurch", state: "South Island", country: "New Zealand" },
  { city: "Queenstown", state: "South Island", country: "New Zealand" },
  { city: "Dunedin", state: "South Island", country: "New Zealand" },
  { city: "Nelson", state: "South Island", country: "New Zealand" },
  { city: "Invercargill", state: "South Island", country: "New Zealand" },
  { city: "Wanaka", state: "South Island", country: "New Zealand" },
  { city: "Blenheim", state: "South Island", country: "New Zealand" },

  // United States - Major Cities
  { city: "New York", state: "NY", country: "United States" },
  { city: "Los Angeles", state: "CA", country: "United States" },
  { city: "Chicago", state: "IL", country: "United States" },
  { city: "Houston", state: "TX", country: "United States" },
  { city: "Phoenix", state: "AZ", country: "United States" },
  { city: "Philadelphia", state: "PA", country: "United States" },
  { city: "San Antonio", state: "TX", country: "United States" },
  { city: "San Diego", state: "CA", country: "United States" },
  { city: "Dallas", state: "TX", country: "United States" },
  { city: "San Jose", state: "CA", country: "United States" },
  { city: "Austin", state: "TX", country: "United States" },
  { city: "Jacksonville", state: "FL", country: "United States" },
  { city: "Fort Worth", state: "TX", country: "United States" },
  { city: "Columbus", state: "OH", country: "United States" },
  { city: "San Francisco", state: "CA", country: "United States" },
  { city: "Charlotte", state: "NC", country: "United States" },
  { city: "Indianapolis", state: "IN", country: "United States" },
  { city: "Seattle", state: "WA", country: "United States" },
  { city: "Denver", state: "CO", country: "United States" },
  { city: "Washington", state: "DC", country: "United States" },
  { city: "Boston", state: "MA", country: "United States" },
  { city: "Nashville", state: "TN", country: "United States" },
  { city: "Las Vegas", state: "NV", country: "United States" },
  { city: "Portland", state: "OR", country: "United States" },
  { city: "Miami", state: "FL", country: "United States" },
  { city: "Orlando", state: "FL", country: "United States" },
  { city: "Atlanta", state: "GA", country: "United States" },

  // International - Asia Pacific
  { city: "Tokyo", state: "Kanto", country: "Japan" },
  { city: "Singapore", state: "", country: "Singapore" },
  { city: "Hong Kong", state: "", country: "Hong Kong" },
  { city: "Bangkok", state: "", country: "Thailand" },
  { city: "Bali", state: "", country: "Indonesia" },
  { city: "Seoul", state: "", country: "South Korea" },
  { city: "Shanghai", state: "", country: "China" },
  { city: "Beijing", state: "", country: "China" },
  { city: "Kuala Lumpur", state: "", country: "Malaysia" },
  { city: "Manila", state: "", country: "Philippines" },
  { city: "Hanoi", state: "", country: "Vietnam" },
  { city: "Ho Chi Minh City", state: "", country: "Vietnam" },
  { city: "Phuket", state: "", country: "Thailand" },
  { city: "Chiang Mai", state: "", country: "Thailand" },

  // International - Europe
  { city: "London", state: "", country: "United Kingdom" },
  { city: "Paris", state: "", country: "France" },
  { city: "Rome", state: "", country: "Italy" },
  { city: "Barcelona", state: "", country: "Spain" },
  { city: "Madrid", state: "", country: "Spain" },
  { city: "Amsterdam", state: "", country: "Netherlands" },
  { city: "Berlin", state: "", country: "Germany" },
  { city: "Munich", state: "", country: "Germany" },
  { city: "Vienna", state: "", country: "Austria" },
  { city: "Athens", state: "", country: "Greece" },
  { city: "Istanbul", state: "", country: "Turkey" },
  { city: "Dubai", state: "", country: "UAE" },
]

const formatDateToDDMMYYYY = (dateString: string) => {
  if (!dateString) return ""
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, "0")
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const year = date.getFullYear()
  return `${day}-${month}-${year}`
}

const formatDateToDDMMM = (dateString: string) => {
  if (!dateString) return ""
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, "0")
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const month = monthNames[date.getMonth()]
  return `${day}${month}`
}

const formatDateForExpedia = (dateString: string) => {
  if (!dateString) return ""
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

export function HotelSearch() {
  const [destination, setDestination] = useState("")
  const [showDestinationSuggestions, setShowDestinationSuggestions] = useState(false)
  const [filteredDestinations, setFilteredDestinations] = useState(DESTINATIONS)
  const destinationRef = useRef<HTMLDivElement>(null)

  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState("2")
  const [rooms, setRooms] = useState("1")

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (destinationRef.current && !destinationRef.current.contains(event.target as Node)) {
        setShowDestinationSuggestions(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleDestinationChange = (value: string) => {
    setDestination(value)
    if (value.length > 0) {
      const filtered = DESTINATIONS.filter(
        (dest) =>
          dest.city.toLowerCase().includes(value.toLowerCase()) ||
          dest.state.toLowerCase().includes(value.toLowerCase()) ||
          dest.country.toLowerCase().includes(value.toLowerCase()),
      ).slice(0, 20)
      setFilteredDestinations(filtered)
      setShowDestinationSuggestions(true)
    } else {
      setFilteredDestinations(DESTINATIONS.slice(0, 20))
      setShowDestinationSuggestions(false)
    }
  }

  const selectDestination = (dest: { city: string; state: string; country: string }) => {
    setDestination(dest.city)
    setShowDestinationSuggestions(false)
  }

  const formatDateDisplay = (dateString: string) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    const day = String(date.getDate()).padStart(2, "0")
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const month = monthNames[date.getMonth()]
    return `${day}${month}`
  }

  const handleSearch = () => {
    const formattedCheckIn = formatDateForExpedia(checkIn)
    const formattedCheckOut = formatDateForExpedia(checkOut)

    const expediaUrl = `https://www.expedia.com.au/Hotel-Search?destination=${encodeURIComponent(destination)}&startDate=${formattedCheckIn}&endDate=${formattedCheckOut}&rooms=${rooms}&adults=${guests}&clickref=1101lC44jWsP&affcid=AU.DIRECT.PHG.1011l268025.0&ref_id=1101lC44jWsP&my_ad=AFF.AU.DIRECT.PHG.1011l268025.0&afflid=1101lC44jWsP&affdtl=PHG.1101lC44jWsP.&button_referral_source=other`

    console.log("[v0] Expedia Search URL:", expediaUrl)
    window.open(expediaUrl, "_blank")
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-2 lg:col-span-3 relative" ref={destinationRef}>
          <Label htmlFor="destination">Destination</Label>
          <Input
            id="destination"
            placeholder="City name (e.g. Sydney, New York)"
            value={destination}
            onChange={(e) => handleDestinationChange(e.target.value)}
            onFocus={() => destination.length > 0 && setShowDestinationSuggestions(true)}
          />
          {showDestinationSuggestions && filteredDestinations.length > 0 && (
            <div className="absolute z-50 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg max-h-60 overflow-y-auto">
              {filteredDestinations.map((dest, idx) => (
                <button
                  key={`${dest.city}-${dest.state}-${idx}`}
                  type="button"
                  onClick={() => selectDestination(dest)}
                  className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-700 focus:outline-none"
                >
                  <div className="font-medium">
                    {dest.city}
                    {dest.state && `, ${dest.state}`}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{dest.country}</div>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="checkin">Check-in Date</Label>
          <Input id="checkin" type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
          {checkIn && <p className="text-xs text-muted-foreground">{formatDateToDDMMM(checkIn)}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="checkout">Check-out Date</Label>
          <Input id="checkout" type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
          {checkOut && <p className="text-xs text-muted-foreground">{formatDateToDDMMM(checkOut)}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="guests">Guests</Label>
          <Input id="guests" type="number" value={guests} onChange={(e) => setGuests(e.target.value)} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="rooms">Rooms</Label>
          <Input id="rooms" type="number" value={rooms} onChange={(e) => setRooms(e.target.value)} />
        </div>
      </div>

      <Button onClick={handleSearch} className="w-full md:w-auto px-8" size="lg">
        <Building2 className="mr-2 h-4 w-4" />
        Search Hotels
      </Button>
    </div>
  )
}
