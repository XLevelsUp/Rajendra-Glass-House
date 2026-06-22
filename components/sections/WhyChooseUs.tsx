"use client";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";
import { Gem, Wand2, ShieldCheck, HardHat, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Box, Typography } from "@mui/material";


const reasons = [
  {
    Icon: Gem,
    title: "Premium Quality Materials",
    desc: "Sourcing only the finest architectural glass and luxury plywood for unparalleled excellence.",
  },
  {
    Icon: Wand2,
    title: "Modern Designs",
    desc: "Staying ahead of trends to provide sleek, contemporary solutions that elevate any space.",
  },
  {
    Icon: ShieldCheck,
    title: "Durable & Long-lasting",
    desc: "Engineered for resilience, ensuring your investment retains its beauty and structural integrity for decades.",
  },
  {
    Icon: HardHat,
    title: "Trusted by Architects",
    desc: "We provide the best custom glass cutting in Coimbatore for top builders and architects, delivering on complex specifications with precision.",
  },
];

export function WhyChooseUs() {
  return (
    <Box component="section" className="py-28 bg-white border-t border-ink-100 overflow-hidden relative">

      {/* Subtle decorative background */}
      <Box className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-gold/3 blur-[160px] pointer-events-none" />

      <Box className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Section header */}
        <AnimatedContainer className="mb-16 text-center">
          <Typography component="span" className="section-kicker mb-4 block">Our Advantage</Typography>
          <Typography variant="h2" component="h2" className="font-serif text-4xl md:text-5xl text-ink-950 font-bold mb-5 tracking-tight">
            Why Choose Us
          </Typography>
          <Box className="gold-separator mx-auto mb-6" />
          <Typography component="p" className="text-ink-600 text-[15px] leading-relaxed max-w-2xl mx-auto font-medium">
            We combine decades of technical expertise with premium materials to deliver architectural glass and plywood
            solutions that stand the test of time.
          </Typography>
        </AnimatedContainer>

        {/* Reasons grid */}
        <Box className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {reasons.map((item, i) => {
            const Icon = item.Icon;
            return (
              <AnimatedContainer key={item.title} delay={i * 0.1}>
                <Box className="group premium-card flex flex-col md:flex-row items-start gap-6 p-8 rounded-2xl h-full cursor-default">

                  {/* Icon circle */}
                  <Box className="w-16 h-16 shrink-0 rounded-2xl bg-gold/8 border border-gold/20 flex items-center justify-center transition-all duration-300 group-hover:bg-gold/15 group-hover:border-gold/40 group-hover:scale-110">
                    <Icon
                      size={26}
                      className="text-gold/70 group-hover:text-gold transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </Box>

                  {/* Text */}
                  <Box className="flex-1 min-w-0">
                    <Typography variant="h3" component="h3" className="font-serif text-lg text-ink-900 font-semibold mb-3 group-hover:text-gold transition-colors duration-300">
                      {item.title}
                    </Typography>
                    <Typography component="p" className="text-sm text-ink-600 leading-relaxed font-medium">{item.desc}</Typography>
                  </Box>

                </Box>
              </AnimatedContainer>
            );
          })}
        </Box>

      </Box>
    </Box>
  );
}
