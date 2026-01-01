import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#001f3f] border-t border-[#FFD700]/20 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <Link href="/about" className="text-sm text-[#FFD700] hover:text-[#FFC700] transition-colors">
            About Us
          </Link>
          <Link href="/deals/canada" className="text-sm text-[#FFD700] hover:text-[#FFC700] transition-colors">
            Deals
          </Link>
          <Link href="/affiliates" className="text-sm text-[#FFD700] hover:text-[#FFC700] transition-colors">
            Affiliate Links
          </Link>
          <Link href="/privacy" className="text-sm text-[#FFD700] hover:text-[#FFC700] transition-colors">
            Privacy Policy
          </Link>
          <Link href="/contact" className="text-sm text-[#FFD700] hover:text-[#FFC700] transition-colors">
            Contact Us
          </Link>
        </div>

        <div className="text-center text-xs text-[#FFD700]/80 space-y-1">
          <p>© 2025 Emu Can Fly. Prices shown may vary.</p>
          <p>Powered by affiliate partners.</p>
        </div>
      </div>
    </footer>
  )
}
