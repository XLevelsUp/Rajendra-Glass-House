"use client";
import Link from "next/link";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";
import { WHATSAPP_URL, PHONE, PHONE_DISPLAY } from "@/lib/constants";
import { Box, Typography } from "@mui/material";


export function CTASection() {
  return (
    <Box component="section" className="py-28 bg-white border-t border-ink-100 relative overflow-hidden">

      {/* Decorative gold blob */}
      <Box className="absolute top-0 right-0 w-[50vw] h-[50vw] rounded-full bg-gold/5 blur-[160px] pointer-events-none -z-0" />
      <Box className="absolute bottom-0 left-0 w-[30vw] h-[30vw] rounded-full bg-gold/4 blur-[120px] pointer-events-none -z-0" />

      {/* Gold accent line top */}
      <Box className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <Box className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <Box className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">

          {/* Left: Content */}
          <AnimatedContainer className="max-w-2xl">
            <Typography component="span" className="section-kicker mb-4 block">Get Started</Typography>
            <Typography variant="h2" component="h2" className="font-serif text-4xl md:text-5xl text-ink-950 font-bold mb-6 leading-tight tracking-tight">
              Ready to transform{" "}
              <Typography component="span" className="text-gold">your space?</Typography>
            </Typography>
            <Box className="gold-separator mb-8" />
            <Typography component="p" className="text-ink-600 text-[15px] leading-relaxed font-medium">
              Whether it&apos;s a home renovation, commercial build-out or hotel interior —
              our team in Coimbatore is ready with a custom quote.
              Serving RS Puram, Gandhipuram, Saibaba Colony &amp; all of Tamil Nadu.
            </Typography>
          </AnimatedContainer>

          {/* Right: Actions */}
          <AnimatedContainer delay={0.15} className="flex-shrink-0">
            <Box className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:min-w-[220px]">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gold text-ink-950 text-sm font-bold rounded-xl tracking-wide hover:bg-gold-dark transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/30 hover:-translate-y-0.5"
              >
                Request a Quote
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white border border-ink-200 text-ink-800 text-sm font-semibold rounded-xl hover:border-[#25D366]/60 hover:text-[#25D366] transition-all duration-300 shadow-sm"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>

              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 text-sm text-ink-500 font-semibold hover:text-gold transition-colors py-1"
              >
                <Phone size={14} />
                {PHONE_DISPLAY}
              </a>
            </Box>
          </AnimatedContainer>

        </Box>
      </Box>
    </Box>
  );
}
