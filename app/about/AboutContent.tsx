"use client";
import { CheckCircle2 } from "lucide-react";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";
import { Box, Typography } from "@mui/material";

const timeline = [
  { year: "1977", title: "The Beginning & Saint Gobain Partnership", desc: "Established in Coimbatore and immediately partnered with Saint Gobain to provide premium glass." },
  { year: "1995", title: "Commercial Expansion", desc: "Began serving large-scale commercial and hospitality projects across Tamil Nadu." },
  { year: "2010", title: "Advanced Processing", desc: "Introduced in-house precise cutting, edging, and custom enclosure manufacturing." },
  { year: "2024", title: "Modern Showroom", desc: "Expanded to a state-of-the-art facility showcasing luxury architectural applications." },
];

export function AboutContent() {
  return (
    <Box className="bg-[#F8FAFC] min-h-screen pt-20">
      {/* Hero */}
      <Box component="section" className="py-24 border-b border-ink-200 bg-white">
        <Box className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedContainer className="max-w-3xl">
            <Typography component="p" className="text-[11px] tracking-[0.2em] uppercase text-gold mb-6 font-semibold">Our Story</Typography>
            <Typography variant="h1" component="h1" className="font-serif text-5xl md:text-7xl text-ink-950 font-bold mb-8 leading-[1.1]">
              Four Decades of <br />
              <Typography component="span" className="text-gold">Glass Excellence</Typography>
            </Typography>
            <Typography component="p" className="text-ink-600 font-medium text-lg leading-relaxed">
              Established in 1977, Rajendra Glass House has grown from a humble retail store into
              Coimbatore&apos;s most trusted glass shop, specialising in toughened glass, premium mirrors,
              shower enclosures, and bespoke architectural glass solutions.
            </Typography>
          </AnimatedContainer>
        </Box>
      </Box>

      {/* Content & Timeline */}
      <Box component="section" className="py-24">
        <Box className="max-w-7xl mx-auto px-6 lg:px-10">
          <Box className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left: Values & Legacy */}
            <AnimatedContainer>
              <Typography variant="h2" component="h2" className="font-serif text-3xl md:text-4xl text-ink-950 font-bold mb-8">The Legacy</Typography>
              <Box className="space-y-6 text-ink-600 font-medium leading-relaxed mb-10">
                <Typography component="p">
                  For over 45 years, we have built our reputation on precision, quality, and unwavering trust.
                  As one of Coimbatore&apos;s leading glass dealers, we offer comprehensive architectural glass solutions
                  that transform ordinary spaces into extraordinary landmarks.
                </Typography>
                <Typography component="p">
                  As the authorised Saint Gobain glass dealer in Coimbatore and a trusted supplier across Tamil Nadu,
                  we ensure that every pane of glass installed meets the highest global standards for safety,
                  clarity, and structural integrity.
                </Typography>
              </Box>
              
              <Box className="space-y-4">
                {[
                  "100% Authentic Saint Gobain Glass",
                  "In-house precise cutting & edging",
                  "Expert structural installation team",
                  "Transparent wholesale pricing"
                ].map((item) => (
                  <Box key={item} className="flex items-center gap-4">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                    <Typography component="span" className="text-ink-900 font-medium">{item}</Typography>
                  </Box>
                ))}
              </Box>
            </AnimatedContainer>

            {/* Right: Timeline */}
            <AnimatedContainer delay={0.2} className="relative">
              <Box className="absolute left-6 top-2 bottom-2 w-px bg-ink-200" />
              <Box className="space-y-12">
                {timeline.map((item) => (
                  <Box key={item.year} className="relative pl-16">
                    <Box className="absolute left-0 top-1 w-12 h-12 rounded-full bg-white border border-gold flex items-center justify-center z-10 shadow-sm">
                      <Typography component="span" className="font-serif font-bold text-gold text-[13px]">{item.year}</Typography>
                    </Box>
                    <Typography variant="h3" component="h3" className="text-xl text-ink-950 font-semibold mb-2 pt-2">{item.title}</Typography>
                    <Typography component="p" className="text-ink-600 font-medium text-sm leading-relaxed">{item.desc}</Typography>
                  </Box>
                ))}
              </Box>
            </AnimatedContainer>
            
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
