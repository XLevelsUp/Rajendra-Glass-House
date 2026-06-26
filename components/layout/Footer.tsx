"use client";
import Link from "next/link"
import Image from "next/image"
import { NAV_LINKS, CONTACT_INFO, PHONE, PHONE_DISPLAY, WHATSAPP_URL, MAPS_URL, SOCIAL_LINKS, SITE_NAME } from "@/lib/constants"
import { MapPin, Phone, Mail, Heart } from "lucide-react"
import { Box, Typography } from "@mui/material"

export function Footer() {
  return (
    <Box component="footer" className="bg-surface-dark border-t border-white/10 pt-20 pb-10">
      <Box className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Top grid */}
        <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-ink-800/50">

          {/* Brand */}
          <Box className="space-y-5 lg:col-span-1">
            <Link href="/" className="inline-block" title="glass house Coimbatore">
              <Typography component="span" className="sr-only">Rajendra glass house Coimbatore</Typography>
              <Image
                src="/Rajendra_Logo.svg"
                alt="Rajendra glass house Coimbatore"
                width={160}
                height={72}
                className="h-16 md:h-20 w-[240px] md:w-[280px] object-contain object-left"
                unoptimized/>
            </Link>
            <Typography component="p" className="text-ink-300 text-sm leading-relaxed max-w-xs font-medium">
              Coimbatore&apos;s most trusted glass &amp; mirror specialists since 1977.
              Authorized Saint Gobain dealers delivering precision and luxury. Visit our premier glass shop RS Puram.
            </Typography>
            {/* Social icons */}
            <Box className="flex gap-2.5 pt-1">
              <Typography
                component="a"
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl border border-ink-700 flex items-center justify-center text-ink-300 hover:text-gold hover:border-gold/40 hover:bg-gold/10 transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.79V24C19.61 23.1 24 18.1 24 12.07z" />
                </svg>
              </Typography>
              <Typography
                component="a"
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl border border-ink-700 flex items-center justify-center text-ink-300 hover:text-gold hover:border-gold/40 hover:bg-gold/10 transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Typography>
              <Typography
                component="a"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl border border-ink-700 flex items-center justify-center text-ink-300 hover:text-[#25D366] hover:border-[#25D366]/30 hover:bg-[#25D366]/10 transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </Typography>
            </Box>
          </Box>

          {/* Navigation */}
          <Box>
            <Typography variant="h3" className="font-bold tracking-[0.15em] text-[10px] uppercase mb-6 text-gold">Quick Links</Typography>
            <Box component="ul" className="space-y-3.5">
              {NAV_LINKS.map(link => (
                <Box component="li" key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ink-300 hover:text-gold text-sm transition-colors duration-200 font-medium hover:translate-x-0.5 inline-block p-2 -m-2"
                  >
                    {link.label}
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Services */}
          <Box>
            <Typography variant="h3" className="font-bold tracking-[0.15em] text-[10px] uppercase mb-6 text-gold">Our Services</Typography>
            <Box component="ul" className="space-y-3.5">
              {[
                { label: "Toughened Glass", href: "/services#toughened-glass" },
                { label: "Shower Enclosures", href: "/services#shower-enclosures" },
                { label: "Glass Railings", href: "/services#glass-railing" },
                { label: "Office Partitions", href: "/services#glass-partition" },
                { label: "LED Smart Mirrors", href: "/services#led-smart-mirrors" },
              ].map(s => (
                <Box component="li" key={s.href}>
                  <Link href={s.href} className="text-ink-300 hover:text-gold text-sm transition-colors duration-200 font-medium p-2 -m-2 inline-block">
                    {s.label}
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Contact */}
          <Box>
            <Typography variant="h3" className="font-bold tracking-[0.15em] text-[10px] uppercase mb-6 text-gold">Contact</Typography>
            <Box component="ul" className="space-y-4">
              <Box component="li" className="flex items-start gap-2.5 group">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-gold/60 group-hover:text-gold transition-colors" />
                <Box className="flex flex-col gap-1.5">
                  <Typography
                    component="span"
                    className="text-sm text-ink-300 font-medium leading-relaxed"
                  >
                    {CONTACT_INFO.address}
                  </Typography>
                  <Typography
                    component="a"
                    href={MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] font-bold text-gold tracking-widest uppercase hover:underline"
                  >
                    Get Directions
                  </Typography>
                </Box>
              </Box>
              <Box component="li">
                <Typography
                  component="a"
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-2.5 text-sm text-ink-300 hover:text-gold transition-colors duration-200 font-medium"
                >
                  <Phone size={14} className="text-gold/60 flex-shrink-0" />
                  {PHONE_DISPLAY}
                </Typography>
              </Box>
              <Box component="li">
                <Typography
                  component="a"
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-2.5 text-sm text-ink-300 hover:text-gold transition-colors duration-200 font-medium break-all"
                >
                  <Mail size={14} className="text-gold/60 flex-shrink-0" />
                  {CONTACT_INFO.email}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Bottom bar */}
        <Box className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <Typography component="p" className="text-ink-300 text-xs text-center md:text-left font-medium">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </Typography>

          {/* Built with love attribution */}
          <Typography component="p" className="flex items-center gap-1.5 text-xs text-ink-300 font-medium">
            Built with
            <Heart size={11} className="text-red-400 fill-red-400 animate-pulse" />
            by{" "}
            <Typography
              component="a"
              href="https://xlevelsup.com"
              target="_blank"
              rel="noreferrer"
              className="text-gold hover:text-gold-light transition-colors font-semibold tracking-wide"
            >
              XlevelsUp
            </Typography>
          </Typography>

          <Box className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-xs text-ink-300">
            <Link href="/privacy" className="hover:text-gold transition-colors font-medium p-2 -m-2 block">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold transition-colors font-medium p-2 -m-2 block">Terms of Service</Link>
          </Box>
        </Box>

      </Box>
    </Box>
  )
}
