"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plane } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const AIRPORTS = [
  // Major International Hubs
  { code: "SYD", name: "Sydney Kingsford Smith", city: "Sydney", country: "Australia" },
  { code: "MEL", name: "Melbourne", city: "Melbourne", country: "Australia" },
  { code: "BNE", name: "Brisbane", city: "Brisbane", country: "Australia" },
  { code: "PER", name: "Perth", city: "Perth", country: "Australia" },
  { code: "ADL", name: "Adelaide", city: "Adelaide", country: "Australia" },
  { code: "AKL", name: "Auckland", city: "Auckland", country: "New Zealand" },
  { code: "CHC", name: "Christchurch", city: "Christchurch", country: "New Zealand" },
  { code: "WLG", name: "Wellington", city: "Wellington", country: "New Zealand" },

  // Australian Regional
  { code: "OOL", name: "Gold Coast", city: "Gold Coast", country: "Australia" },
  { code: "CNS", name: "Cairns", city: "Cairns", country: "Australia" },
  { code: "CBR", name: "Canberra", city: "Canberra", country: "Australia" },
  { code: "DRW", name: "Darwin", city: "Darwin", country: "Australia" },
  { code: "HBA", name: "Hobart", city: "Hobart", country: "Australia" },
  { code: "TSV", name: "Townsville", city: "Townsville", country: "Australia" },
  { code: "ISA", name: "Mount Isa", city: "Mount Isa", country: "Australia" },
  { code: "KTA", name: "Karratha", city: "Karratha", country: "Australia" },
  { code: "ROK", name: "Rockhampton", city: "Rockhampton", country: "Australia" },
  { code: "MCY", name: "Sunshine Coast", city: "Sunshine Coast", country: "Australia" },
  { code: "LST", name: "Launceston", city: "Launceston", country: "Australia" },
  { code: "ASP", name: "Alice Springs", city: "Alice Springs", country: "Australia" },
  { code: "MKY", name: "Mackay", city: "Mackay", country: "Australia" },
  { code: "BNK", name: "Ballina Byron Gateway", city: "Ballina", country: "Australia" },
  { code: "ABX", name: "Albury", city: "Albury", country: "Australia" },
  { code: "TMW", name: "Tamworth", city: "Tamworth", country: "Australia" },
  { code: "PQQ", name: "Port Macquarie", city: "Port Macquarie", country: "Australia" },
  { code: "WGA", name: "Wagga Wagga", city: "Wagga Wagga", country: "Australia" },
  { code: "ARM", name: "Armidale", city: "Armidale", country: "Australia" },
  { code: "BDB", name: "Bundaberg", city: "Bundaberg", country: "Australia" },
  { code: "HTI", name: "Hamilton Island", city: "Hamilton Island", country: "Australia" },
  { code: "PPP", name: "Proserpine", city: "Proserpine", country: "Australia" },
  { code: "BHQ", name: "Broken Hill", city: "Broken Hill", country: "Australia" },
  { code: "MOV", name: "Moranbah", city: "Moranbah", country: "Australia" },
  { code: "MQL", name: "Mildura", city: "Mildura", country: "Australia" },
  { code: "DBO", name: "Dubbo", city: "Dubbo", country: "Australia" },
  { code: "OOM", name: "Cooma", city: "Cooma", country: "Australia" },
  { code: "MIM", name: "Merimbula", city: "Merimbula", country: "Australia" },
  { code: "PBO", name: "Paraburdoo", city: "Paraburdoo", country: "Australia" },
  { code: "PHE", name: "Port Hedland", city: "Port Hedland", country: "Australia" },
  { code: "BME", name: "Broome", city: "Broome", country: "Australia" },
  { code: "KNX", name: "Kununurra", city: "Kununurra", country: "Australia" },
  { code: "GET", name: "Geraldton", city: "Geraldton", country: "Australia" },
  { code: "KGI", name: "Kalgoorlie", city: "Kalgoorlie", country: "Australia" },
  { code: "ALH", name: "Albany", city: "Albany", country: "Australia" },
  { code: "ZNE", name: "Newman", city: "Newman", country: "Australia" },
  { code: "NTL", name: "Newcastle", city: "Newcastle", country: "Australia" },
  { code: "CFS", name: "Coffs Harbour", city: "Coffs Harbour", country: "Australia" },
  { code: "OAG", name: "Orange", city: "Orange", country: "Australia" },
  { code: "BUY", name: "Bunbury", city: "Bunbury", country: "Australia" },
  { code: "WHY", name: "Whyalla", city: "Whyalla", country: "Australia" },
  { code: "GLT", name: "Gladstone", city: "Gladstone", country: "Australia" },
  { code: "HVB", name: "Hervey Bay", city: "Hervey Bay", country: "Australia" },
  { code: "LEA", name: "Learmonth", city: "Learmonth", country: "Australia" },
  { code: "DPO", name: "Devonport", city: "Devonport", country: "Australia" },
  { code: "BWT", name: "Burnie", city: "Burnie", country: "Australia" },

  // New Zealand Regional
  { code: "ZQN", name: "Queenstown", city: "Queenstown", country: "New Zealand" },
  { code: "DUD", name: "Dunedin", city: "Dunedin", country: "New Zealand" },
  { code: "NSN", name: "Nelson", city: "Nelson", country: "New Zealand" },
  { code: "HLZ", name: "Hamilton", city: "Hamilton", country: "New Zealand" },
  { code: "NPL", name: "New Plymouth", city: "New Plymouth", country: "New Zealand" },
  { code: "ROT", name: "Rotorua", city: "Rotorua", country: "New Zealand" },
  { code: "TRG", name: "Tauranga", city: "Tauranga", country: "New Zealand" },
  { code: "PMR", name: "Palmerston North", city: "Palmerston North", country: "New Zealand" },
  { code: "BHE", name: "Blenheim", city: "Blenheim", country: "New Zealand" },
  { code: "WHK", name: "Whakatane", city: "Whakatane", country: "New Zealand" },
  { code: "TIU", name: "Timaru", city: "Timaru", country: "New Zealand" },
  { code: "IVC", name: "Invercargill", city: "Invercargill", country: "New Zealand" },
  { code: "GIS", name: "Gisborne", city: "Gisborne", country: "New Zealand" },
  { code: "NPE", name: "Napier", city: "Napier", country: "New Zealand" },
  { code: "KKE", name: "Kerikeri", city: "Kerikeri", country: "New Zealand" },
  { code: "WAG", name: "Whanganui", city: "Whanganui", country: "New Zealand" },

  // Major Asia Pacific
  { code: "SIN", name: "Changi Airport", city: "Singapore", country: "Singapore" },
  { code: "HKG", name: "Hong Kong International", city: "Hong Kong", country: "Hong Kong" },
  { code: "BKK", name: "Suvarnabhumi", city: "Bangkok", country: "Thailand" },
  { code: "NRT", name: "Narita International", city: "Tokyo", country: "Japan" },
  { code: "HND", name: "Haneda Airport", city: "Tokyo", country: "Japan" },
  { code: "ICN", name: "Incheon International", city: "Seoul", country: "South Korea" },
  { code: "KUL", name: "Kuala Lumpur International", city: "Kuala Lumpur", country: "Malaysia" },
  { code: "CGK", name: "Soekarno-Hatta", city: "Jakarta", country: "Indonesia" },
  { code: "MNL", name: "Ninoy Aquino International", city: "Manila", country: "Philippines" },
  { code: "DPS", name: "Ngurah Rai", city: "Bali", country: "Indonesia" },
  { code: "HAN", name: "Noi Bai International", city: "Hanoi", country: "Vietnam" },
  { code: "SGN", name: "Tan Son Nhat", city: "Ho Chi Minh City", country: "Vietnam" },
  { code: "PNH", name: "Phnom Penh International", city: "Phnom Penh", country: "Cambodia" },
  { code: "RGN", name: "Yangon International", city: "Yangon", country: "Myanmar" },
  { code: "NAN", name: "Nadi International", city: "Nadi", country: "Fiji" },
  { code: "KIX", name: "Kansai International", city: "Osaka", country: "Japan" },
  { code: "FUK", name: "Fukuoka Airport", city: "Fukuoka", country: "Japan" },
  { code: "CTS", name: "New Chitose Airport", city: "Sapporo", country: "Japan" },
  { code: "OKA", name: "Naha Airport", city: "Okinawa", country: "Japan" },
  { code: "PVG", name: "Pudong International", city: "Shanghai", country: "China" },
  { code: "PEK", name: "Beijing Capital International", city: "Beijing", country: "China" },
  { code: "CAN", name: "Baiyun International", city: "Guangzhou", country: "China" },
  { code: "CTU", name: "Shuangliu International", city: "Chengdu", country: "China" },
  { code: "SZX", name: "Bao'an International", city: "Shenzhen", country: "China" },
  { code: "XIY", name: "Xianyang International", city: "Xi'an", country: "China" },
  { code: "TPE", name: "Taoyuan International", city: "Taipei", country: "Taiwan" },

  // Americas
  { code: "LAX", name: "Los Angeles International", city: "Los Angeles", country: "USA" },
  { code: "SFO", name: "San Francisco International", city: "San Francisco", country: "USA" },
  { code: "JFK", name: "John F Kennedy International", city: "New York", country: "USA" },
  { code: "EWR", name: "Newark Liberty International", city: "New York", country: "USA" },
  { code: "LGA", name: "LaGuardia Airport", city: "New York", country: "USA" },
  { code: "ORD", name: "O'Hare International", city: "Chicago", country: "USA" },
  { code: "DFW", name: "Dallas Fort Worth International", city: "Dallas", country: "USA" },
  { code: "SEA", name: "Seattle-Tacoma International", city: "Seattle", country: "USA" },
  { code: "MIA", name: "Miami International", city: "Miami", country: "USA" },
  { code: "LAS", name: "McCarran International", city: "Las Vegas", country: "USA" },
  { code: "PHX", name: "Phoenix Sky Harbor International", city: "Phoenix", country: "USA" },
  { code: "IAH", name: "George Bush Intercontinental", city: "Houston", country: "USA" },
  { code: "YVR", name: "Vancouver International", city: "Vancouver", country: "Canada" },
  { code: "YYZ", name: "Toronto Pearson International", city: "Toronto", country: "Canada" },
  { code: "YUL", name: "Montreal-Trudeau International", city: "Montreal", country: "Canada" },
  { code: "MEX", name: "Mexico City International", city: "Mexico City", country: "Mexico" },
  { code: "GRU", name: "Sao Paulo-Guarulhos International", city: "Sao Paulo", country: "Brazil" },
  { code: "GIG", name: "Rio de Janeiro-Galeao International", city: "Rio de Janeiro", country: "Brazil" },
  { code: "EZE", name: "Ministro Pistarini International", city: "Buenos Aires", country: "Argentina" },
  { code: "SCL", name: "Arturo Merino Benitez International", city: "Santiago", country: "Chile" },
  { code: "LIM", name: "Jorge Chavez International", city: "Lima", country: "Peru" },
  { code: "BOG", name: "El Dorado International", city: "Bogota", country: "Colombia" },

  // Europe
  { code: "LHR", name: "Heathrow Airport", city: "London", country: "UK" },
  { code: "LGW", name: "Gatwick Airport", city: "London", country: "UK" },
  { code: "LCY", name: "London City Airport", city: "London", country: "UK" },
  { code: "CDG", name: "Charles de Gaulle Airport", city: "Paris", country: "France" },
  { code: "FRA", name: "Frankfurt Airport", city: "Frankfurt", country: "Germany" },
  { code: "MUC", name: "Munich Airport", city: "Munich", country: "Germany" },
  { code: "AMS", name: "Schiphol Airport", city: "Amsterdam", country: "Netherlands" },
  { code: "MAD", name: "Adolfo Suarez Madrid-Barajas", city: "Madrid", country: "Spain" },
  { code: "BCN", name: "Barcelona-El Prat", city: "Barcelona", country: "Spain" },
  { code: "FCO", name: "Leonardo da Vinci-Fiumicino", city: "Rome", country: "Italy" },
  { code: "MXP", name: "Malpensa Airport", city: "Milan", country: "Italy" },
  { code: "ATH", name: "Eleftherios Venizelos International", city: "Athens", country: "Greece" },
  { code: "IST", name: "Istanbul Airport", city: "Istanbul", country: "Turkey" },
  { code: "SAW", name: "Sabiha Gokcen International", city: "Istanbul", country: "Turkey" },
  { code: "ZRH", name: "Zurich Airport", city: "Zurich", country: "Switzerland" },
  { code: "VIE", name: "Vienna International", city: "Vienna", country: "Austria" },
  { code: "CPH", name: "Copenhagen Airport", city: "Copenhagen", country: "Denmark" },
  { code: "OSL", name: "Oslo Gardermoen", city: "Oslo", country: "Norway" },
  { code: "ARN", name: "Stockholm-Arlanda", city: "Stockholm", country: "Sweden" },
  { code: "HEL", name: "Helsinki-Vantaa", city: "Helsinki", country: "Finland" },
  { code: "DUB", name: "Dublin Airport", city: "Dublin", country: "Ireland" },
  { code: "LIS", name: "Lisbon Portela", city: "Lisbon", country: "Portugal" },
  { code: "PRG", name: "Vaclav Havel Prague", city: "Prague", country: "Czech Republic" },
  { code: "WAW", name: "Warsaw Chopin", city: "Warsaw", country: "Poland" },
  { code: "BUD", name: "Budapest Ferenc Liszt", city: "Budapest", country: "Hungary" },

  // Middle East & Africa
  { code: "DXB", name: "Dubai International", city: "Dubai", country: "UAE" },
  { code: "AUH", name: "Abu Dhabi International", city: "Abu Dhabi", country: "UAE" },
  { code: "DOH", name: "Hamad International", city: "Doha", country: "Qatar" },
  { code: "JED", name: "King Abdulaziz International", city: "Jeddah", country: "Saudi Arabia" },
  { code: "CAI", name: "Cairo International", city: "Cairo", country: "Egypt" },
  { code: "JNB", name: "OR Tambo International", city: "Johannesburg", country: "South Africa" },
  { code: "CPT", name: "Cape Town International", city: "Cape Town", country: "South Africa" },
  { code: "NBO", name: "Jomo Kenyatta International", city: "Nairobi", country: "Kenya" },
  { code: "ADD", name: "Addis Ababa Bole International", city: "Addis Ababa", country: "Ethiopia" },
]

interface FlightSearchProps {
  defaultCurrency?: string
}

export function FlightSearch({ defaultCurrency = "AUD" }: FlightSearchProps) {
  const [tripType, setTripType] = useState("round-trip")
  const [fromCity, setFromCity] = useState("")
  const [toCity, setToCity] = useState("")
  const [showFromSuggestions, setShowFromSuggestions] = useState(false)
  const [showToSuggestions, setShowToSuggestions] = useState(false)
  const fromRef = useRef<HTMLDivElement>(null)
  const toRef = useRef<HTMLDivElement>(null)

  const [departDate, setDepartDate] = useState("")
  const [returnDate, setReturnDate] = useState("")
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [infants, setInfants] = useState(0)
  const [showPassengerSelector, setShowPassengerSelector] = useState(false)
  const [cabinClass, setCabinClass] = useState("economy")
  const [currency, setCurrency] = useState(defaultCurrency)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (fromRef.current && !fromRef.current.contains(event.target as Node)) {
        setShowFromSuggestions(false)
      }
      if (toRef.current && !toRef.current.contains(event.target as Node)) {
        setShowToSuggestions(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const filterAirports = (query: string) => {
    if (!query) return []
    const lowerQuery = query.toLowerCase()
    return AIRPORTS.filter(
      (airport) =>
        airport.code.toLowerCase().includes(lowerQuery) ||
        airport.name.toLowerCase().includes(lowerQuery) ||
        airport.city.toLowerCase().includes(lowerQuery) ||
        airport.country.toLowerCase().includes(lowerQuery),
    ).slice(0, 15)
  }

  const fromSuggestions = filterAirports(fromCity)
  const toSuggestions = filterAirports(toCity)

  const selectFromAirport = (airport: (typeof AIRPORTS)[0]) => {
    setFromCity(airport.code)
    setShowFromSuggestions(false)
  }

  const selectToAirport = (airport: (typeof AIRPORTS)[0]) => {
    setToCity(airport.code)
    setShowToSuggestions(false)
  }

  const formatDateForSkyscanner = (dateString: string) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    const year = String(date.getFullYear()).slice(-2)
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")
    return `${year}${month}${day}`
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
    const formattedDepartDate = formatDateForSkyscanner(departDate)
    const formattedReturnDate = tripType === "round-trip" ? formatDateForSkyscanner(returnDate) : ""

    let skyscannerUrl = ""

    if (tripType === "round-trip") {
      skyscannerUrl = `https://www.skyscanner.com.au/transport/flights/${fromCity}/${toCity}/${formattedDepartDate}/${formattedReturnDate}?adults=${adults}&children=${children}&infants=${infants}&cabinclass=${cabinClass}&rtn=1&currency=${currency}&adid=1027991&afsrc=1&associateid=AFF_TRA_19354_00001&campaign_id=1248473&utm_campaign=skyscanner&utm_content=Online+Tracking+Link&utm_medium=affiliate&utm_source=1248473`
    } else {
      skyscannerUrl = `https://www.skyscanner.com.au/transport/flights/${fromCity}/${toCity}/${formattedDepartDate}?adults=${adults}&children=${children}&infants=${infants}&cabinclass=${cabinClass}&rtn=0&currency=${currency}&adid=1027991&afsrc=1&associateid=AFF_TRA_19354_00001&campaign_id=1248473&utm_campaign=skyscanner&utm_content=Online+Tracking+Link&utm_medium=affiliate&utm_source=1248473`
    }

    console.log("[v0] Skyscanner Search URL:", skyscannerUrl)
    window.open(skyscannerUrl, "_blank")
  }

  const totalPassengers = adults + children + infants

  return (
    <div className="space-y-6">
      <div className="space-y-6">
        <Tabs value={tripType} onValueChange={setTripType} className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="round-trip">Round Trip</TabsTrigger>
            <TabsTrigger value="one-way">One Way</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2 relative" ref={fromRef}>
            <Label htmlFor="from">From</Label>
            <Input
              id="from"
              placeholder="City or airport code (e.g., BNE)"
              value={fromCity}
              onChange={(e) => {
                setFromCity(e.target.value)
                setShowFromSuggestions(true)
              }}
              onFocus={() => setShowFromSuggestions(true)}
            />
            {showFromSuggestions && fromSuggestions.length > 0 && (
              <div className="absolute z-50 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg max-h-60 overflow-y-auto">
                {fromSuggestions.map((airport, idx) => (
                  <button
                    key={`${airport.code}-${idx}`}
                    type="button"
                    onClick={() => selectFromAirport(airport)}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-700 focus:outline-none"
                  >
                    <div className="font-medium">
                      {airport.code} - {airport.city}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {airport.name}, {airport.country}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-2 relative" ref={toRef}>
            <Label htmlFor="to">To</Label>
            <Input
              id="to"
              placeholder="City or airport code (e.g., SYD)"
              value={toCity}
              onChange={(e) => {
                setToCity(e.target.value)
                setShowToSuggestions(true)
              }}
              onFocus={() => setShowToSuggestions(true)}
            />
            {showToSuggestions && toSuggestions.length > 0 && (
              <div className="absolute z-50 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg max-h-60 overflow-y-auto">
                {toSuggestions.map((airport, idx) => (
                  <button
                    key={`${airport.code}-${idx}`}
                    type="button"
                    onClick={() => selectToAirport(airport)}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-700 focus:outline-none"
                  >
                    <div className="font-medium">
                      {airport.code} - {airport.city}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {airport.name}, {airport.country}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="depart">Departure Date</Label>
            <Input id="depart" type="date" value={departDate} onChange={(e) => setDepartDate(e.target.value)} />
            {departDate && <p className="text-xs text-muted-foreground">{formatDateDisplay(departDate)}</p>}
          </div>

          {tripType === "round-trip" && (
            <div className="space-y-2">
              <Label htmlFor="return">Return Date</Label>
              <Input id="return" type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
              {returnDate && <p className="text-xs text-muted-foreground">{formatDateDisplay(returnDate)}</p>}
            </div>
          )}

          <div className="space-y-2">
            <Label>Passengers</Label>
            <Popover open={showPassengerSelector} onOpenChange={setShowPassengerSelector}>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-between bg-transparent">
                  <span>
                    {totalPassengers} Passenger{totalPassengers !== 1 ? "s" : ""}
                  </span>
                  <span className="ml-2">▼</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Adults</p>
                      <p className="text-sm text-muted-foreground">12+ years</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        disabled={adults <= 1}
                      >
                        -
                      </Button>
                      <span className="w-8 text-center">{adults}</span>
                      <Button variant="outline" size="sm" onClick={() => setAdults(Math.min(8, adults + 1))}>
                        +
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Children</p>
                      <p className="text-sm text-muted-foreground">2-11 years</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setChildren(Math.max(0, children - 1))}
                        disabled={children <= 0}
                      >
                        -
                      </Button>
                      <span className="w-8 text-center">{children}</span>
                      <Button variant="outline" size="sm" onClick={() => setChildren(Math.min(8, children + 1))}>
                        +
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Infants</p>
                      <p className="text-sm text-muted-foreground">Under 2 years</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setInfants(Math.max(0, infants - 1))}
                        disabled={infants <= 0}
                      >
                        -
                      </Button>
                      <span className="w-8 text-center">{infants}</span>
                      <Button variant="outline" size="sm" onClick={() => setInfants(Math.min(4, infants + 1))}>
                        +
                      </Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cabin">Cabin Class</Label>
            <Select value={cabinClass} onValueChange={setCabinClass}>
              <SelectTrigger id="cabin">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="economy">Economy</SelectItem>
                <SelectItem value="premium_economy">Premium Economy</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="first">First Class</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="currency">Currency</Label>
            <Select value={currency} onValueChange={setCurrency}>
              <SelectTrigger id="currency">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="AUD">AUD</SelectItem>
                <SelectItem value="USD">USD</SelectItem>
                <SelectItem value="EUR">EUR</SelectItem>
                <SelectItem value="GBP">GBP</SelectItem>
                <SelectItem value="JPY">JPY</SelectItem>
                <SelectItem value="CAD">CAD</SelectItem>
                <SelectItem value="NZD">NZD</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button onClick={handleSearch} className="w-full md:w-auto px-8" size="lg">
          <Plane className="mr-2 h-4 w-4" />
          Find Flights
        </Button>
      </div>
    </div>
  )
}
