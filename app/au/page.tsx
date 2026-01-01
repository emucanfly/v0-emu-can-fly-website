"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ExpediaBanner } from "@/components/expedia-banner"

export default function AUPage() {
  useEffect(() => {
    const script = document.createElement("script")
    script.async = true
    script.type = "module"
    script.src = "https://tpwdg.com/wl_web/main.js?wl_id=2916"
    script.setAttribute("data-noptimize", "1")
    script.setAttribute("data-cfasync", "false")
    script.setAttribute("data-wpfc-render", "false")
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-4">
          <ExpediaBanner />
        </div>

        <div className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">Australia Travel Deals</h1>
              <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                Search and compare flights and hotels in AUD
              </p>
            </div>

            <div id="tpwl-search" className="max-w-5xl mx-auto"></div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
