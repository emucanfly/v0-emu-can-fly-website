import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip middleware for static files, API routes, and currency-specific pages
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|css|js)$/) ||
    pathname.startsWith("/us") ||
    pathname.startsWith("/ca") ||
    pathname.startsWith("/eu") ||
    pathname.startsWith("/uk") ||
    pathname.startsWith("/jp") ||
    pathname.startsWith("/nz")
  ) {
    return NextResponse.next()
  }

  // Get country from Vercel's geolocation headers
  const country = request.headers.get("x-vercel-ip-country") || "AU"

  console.log("[v0] Detected country:", country, "for path:", pathname)

  // Redirect based on country
  const countryRedirects: Record<string, string> = {
    US: "/us",
    CA: "/ca",
    GB: "/uk",
    UK: "/uk",
    JP: "/jp",
    NZ: "/nz",
    // European countries
    DE: "/eu",
    FR: "/eu",
    IT: "/eu",
    ES: "/eu",
    NL: "/eu",
    BE: "/eu",
    AT: "/eu",
    CH: "/eu",
    SE: "/eu",
    NO: "/eu",
    DK: "/eu",
    FI: "/eu",
    PL: "/eu",
    PT: "/eu",
    GR: "/eu",
    IE: "/eu",
  }

  const redirectPath = countryRedirects[country]

  // If we have a redirect and user is on the main page or deals page, redirect them
  if (redirectPath && (pathname === "/" || pathname.startsWith("/deals"))) {
    const url = request.nextUrl.clone()
    url.pathname = pathname === "/" ? redirectPath : `${redirectPath}${pathname}`
    console.log("[v0] Redirecting to:", url.pathname)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
