"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";
import { cn } from "@/lib/utils";
import { Box, Typography } from "@mui/material";


const faqs = [
  { q: "Do you provide installation services?", a: "Yes, we have a dedicated team of expert installers for all our products across Coimbatore and surrounding regions." },
  { q: "Is your glass authentic Saint Gobain?", a: "Absolutely. We are an authorized dealer and provide genuine Saint Gobain glass with brand marking and warranty." },
  { q: "How long does a custom shower enclosure take?", a: "From final measurement to installation, it typically takes 5 to 7 working days depending on the complexity." },
  { q: "Do you undertake commercial and wholesale orders?", a: "Yes, we cater to bulk requirements for builders, architects, and corporate projects with specialized wholesale pricing." }
];

export function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <Box component="section" className="py-24 border-t border-ink-200 bg-white">
      <Box className="max-w-3xl mx-auto px-6">
        <AnimatedContainer className="text-center mb-16">
          <Typography variant="h2" component="h2" className="font-serif text-3xl md:text-4xl text-ink-950 font-bold mb-4">Frequently Asked Questions</Typography>
        </AnimatedContainer>

        <Box className="space-y-4">
          {faqs.map((faq, i) => (
            <AnimatedContainer key={i} delay={i * 0.1}>
              <Box className="border border-ink-200 bg-[#F8FAFC] rounded-xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                >
                  <Typography component="span" className={cn("font-semibold text-sm md:text-base pr-4 transition-colors", openFaq === i ? "text-gold" : "text-ink-900")}>
                    {faq.q}
                  </Typography>
                  <ChevronDown className={cn("w-5 h-5 text-ink-500 transition-transform duration-300 flex-shrink-0", openFaq === i && "rotate-180 text-gold")} />
                </button>
                <Box className={cn("px-6 overflow-hidden transition-all duration-300", openFaq === i ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0")}>
                  <Typography component="p" className="text-ink-600 font-medium text-sm leading-relaxed">{faq.a}</Typography>
                </Box>
              </Box>
            </AnimatedContainer>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
