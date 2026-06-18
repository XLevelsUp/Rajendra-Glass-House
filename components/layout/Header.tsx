"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { NAV_LINKS, PHONE, PHONE_DISPLAY } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export function Header() {
  const [open, setOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close mobile menu on route change
  React.useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header className={cn(
      "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b",
      scrolled
        ? "bg-white/90 backdrop-blur-md border-gold/20 shadow-sm py-4"
        : "bg-transparent border-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0" title="glass house Coimbatore">
            <span className="sr-only">Rajendra glass house Coimbatore</span>
            <Image
              src="/Rajendra_glass_house_logo.svg"
              alt="Rajendra glass house Coimbatore"
              width={160}
              height={48}
              priority
              className="h-11 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[11px] font-semibold tracking-[0.15em] uppercase transition-colors hover:text-gold",
                  pathname === link.href
                    ? "text-gold"
                    : "text-ink-950"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href={`tel:${PHONE}`}
              className="text-[13px] text-ink-950 hover:text-gold transition-colors tracking-wide font-medium"
            >
              {PHONE_DISPLAY}
            </a>
            <Link
              href="/contact"
              className="text-[11px] font-bold px-6 py-2.5 border border-gold text-gold hover:bg-gold hover:text-white rounded transition-all duration-200 tracking-[0.15em] uppercase"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-ink-950 hover:text-gold transition-colors p-1"
            aria-label="Toggle navigation"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-white border-b border-gold/20 shadow-xl">
          <div className="max-w-7xl mx-auto px-6 py-8 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block py-3 text-sm font-semibold tracking-widest uppercase border-b border-ink-100 transition-colors",
                  pathname === link.href ? "text-gold" : "text-ink-950 hover:text-gold"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-6 space-y-3">
              <a
                href={`tel:${PHONE}`}
                className="block text-center py-3 text-sm font-medium text-ink-950 border border-ink-200 rounded"
              >
                {PHONE_DISPLAY}
              </a>
              <Link
                href="/contact"
                className="block text-center py-3 text-sm font-bold bg-gold text-white rounded tracking-wider uppercase"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
