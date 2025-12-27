import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

interface Deal {
  from: string
  to: string
  departureDate: string
  returnDate: string
  link: string
}

interface DealTemplateProps {
  title: string
  description: string
  deals: Deal[]
}

export function DealTemplate({ title, description, deals }: DealTemplateProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50 border-b">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">From</th>
                <th className="px-4 py-3 text-left font-semibold">To</th>
                <th className="px-4 py-3 text-left font-semibold">Departure Date</th>
                <th className="px-4 py-3 text-left font-semibold">Return Date</th>
                <th className="px-4 py-3 text-left font-semibold">Link</th>
              </tr>
            </thead>
            <tbody>
              {deals.length > 0 ? (
                deals.map((deal, index) => (
                  <tr key={index} className="border-b last:border-0 hover:bg-muted/30">
                    <td className="px-4 py-3">{deal.from}</td>
                    <td className="px-4 py-3">{deal.to}</td>
                    <td className="px-4 py-3">{deal.departureDate}</td>
                    <td className="px-4 py-3">{deal.returnDate}</td>
                    <td className="px-4 py-3">
                      <Button asChild variant="link" size="sm" className="h-auto p-0">
                        <a href={deal.link} target="_blank" rel="noopener noreferrer">
                          View Deal <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">
                    No deals available at the moment. Check back soon!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
