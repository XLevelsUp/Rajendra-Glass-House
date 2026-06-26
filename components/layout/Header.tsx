"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { NAV_LINKS, PHONE, PHONE_DISPLAY } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Box, Typography } from "@mui/material"

export function Header() {
  const [open, setOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const pathname = usePathname()
  const isHeaderSolid = scrolled || pathname !== "/"

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close mobile menu on route change
  React.useEffect(() => { setOpen(false) }, [pathname])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500",
        isHeaderSolid
          ? "bg-surface-body border-b border-[#E2E3EB] shadow-[0_4px_24px_rgba(0,0,0,0.08)] py-1.5"
          : "bg-transparent border-b border-white/10 py-3"
      )}
    >
      <Box className="max-w-7xl mx-auto px-6 lg:px-8">
        <Box className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0" title="glass house Coimbatore">
            <Typography component="span" className="sr-only">Rajendra glass house Coimbatore</Typography>
            <Image
              src="/Rajendra_Logo.svg"
              alt="Rajendra glass house Coimbatore"
              width={512}
              height={512}
              className="h-14 md:h-16 w-[200px] md:w-[240px] object-contain object-left"
              priority
              unoptimized
            />
          </Link>

          {/* Desktop nav */}
          <Box component="nav" className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[11px] font-semibold tracking-[0.15em] uppercase transition-colors duration-300 relative group",
                  pathname === link.href
                    ? "text-gold"
                    : isHeaderSolid ? "text-ink-700 hover:text-gold" : "text-white/85 hover:text-gold"
                )}
              >
                {link.label}
                <Typography component="span" className={cn(
                  "absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300",
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </Link>
            ))}
          </Box>

          {/* Desktop CTA */}
          <Box className="hidden lg:flex items-center gap-5">
            <Typography
              component="a"
              href={`tel:${PHONE}`}
              className={cn(
                "text-[12px] hover:text-gold transition-colors tracking-wide font-semibold duration-300",
                isHeaderSolid ? "text-ink-600" : "text-white/75"
              )}
            >
              {PHONE_DISPLAY}
            </Typography>
            <Link
              href="/contact"
              className="text-[11px] font-bold px-5 py-2.5 bg-gold text-ink-950 hover:bg-gold-dark rounded-xl transition-all duration-200 tracking-[0.1em] uppercase shadow-sm hover:shadow-md hover:-translate-y-px"
            >
              Get Quote
            </Link>
          </Box>

          {/* Mobile toggle */}
          <Box
            component="button"
            onClick={() => setOpen(!open)}
            className={cn(
              "lg:hidden transition-colors p-1.5 rounded-lg",
              isHeaderSolid ? "text-ink-800 hover:text-gold hover:bg-ink-100" : "text-white/85 hover:text-gold hover:bg-white/10"
            )}
            aria-label="Toggle navigation"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={open ? "close" : "open"}
                initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                transition={{ duration: 0.15 }}
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </AnimatePresence>
          </Box>
        </Box>
      </Box>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden"
          >
            <Box className="border-t border-ink-100 mt-3 mx-6 pt-4 pb-5 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center py-2.5 px-3 rounded-xl text-sm font-semibold tracking-widest uppercase transition-all duration-200",
                    pathname === link.href
                      ? "text-gold bg-gold/8"
                      : "text-ink-700 hover:text-gold hover:bg-ink-50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Box className="pt-4 space-y-2.5 border-t border-ink-100 mt-3">
                <Typography
                  component="a"
                  href={`tel:${PHONE}`}
                  className="flex items-center justify-center py-2.5 text-sm font-semibold text-ink-700 border border-ink-200 rounded-xl hover:border-gold hover:text-gold transition-all"
                >
                  {PHONE_DISPLAY}
                </Typography>
                <Link
                  href="/contact"
                  className="flex items-center justify-center py-2.5 text-sm font-bold bg-gold text-ink-950 rounded-xl tracking-wider uppercase hover:bg-gold-dark transition-colors"
                >
                  Get Quote
                </Link>
              </Box>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
