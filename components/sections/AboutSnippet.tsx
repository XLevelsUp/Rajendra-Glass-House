"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";
import { Box, Typography } from "@mui/material";


const stats = [
  { value: "45+", label: "Years of Experience", desc: "Est. 1977" },
  { value: "10k+", label: "Successful Projects", desc: "Across Tamil Nadu" },
  { value: "100%", label: "Quality Assured", desc: "Saint Gobain Certified" },
];

export function AboutSnippet() {
  return (
    <Box component="section" className="py-24 bg-white border-b border-ink-100">
      <Box className="max-w-7xl mx-auto px-6 lg:px-10">
        <Box className="max-w-3xl mx-auto text-center">

          <AnimatedContainer delay={0.05}>
            <Typography component="span" className="section-kicker mb-4 block">Our Story</Typography>
          </AnimatedContainer>

          <AnimatedContainer delay={0.1}>
            <Typography variant="h2" component="h2" className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-ink-950 mb-6 tracking-tight leading-tight">
              Crafting Excellence Since 1977
            </Typography>
          </AnimatedContainer>

          <AnimatedContainer delay={0.2}>
            <Box className="gold-separator mx-auto mb-8" />
            <Typography component="p" className="text-ink-600 text-lg md:text-xl leading-relaxed mb-12 font-medium">
              As the premier{" "}
              <strong className="text-gold font-semibold">Glass Suppliers in Tamil Nadu</strong>, we merge decades of
              architectural glass expertise with modern designs and the highest quality materials. Whether you are
              outfitting a luxury residence or a corporate high-rise, our premium glass and plywood solutions ensure
              durability, elegance, and unparalleled craftsmanship.
            </Typography>
          </AnimatedContainer>

          {/* Stats grid */}
          <AnimatedContainer delay={0.3}>
            <Box className="grid grid-cols-3 gap-0 border border-ink-100 rounded-2xl overflow-hidden mb-10">
              {stats.map((stat, i) => (
                <Box
                  key={stat.label}
                  className={`flex flex-col items-center py-8 px-4 bg-white hover:bg-[#FEFDF8] transition-colors duration-300 ${
                    i < stats.length - 1 ? "border-r border-ink-100" : ""
                  }`}
                >
                  <Typography component="span" className="font-serif text-3xl md:text-4xl font-bold text-gold mb-1.5">{stat.value}</Typography>
                  <Typography component="span" className="text-[11px] font-bold tracking-widest uppercase text-ink-800 mb-0.5">{stat.label}</Typography>
                  <Typography component="span" className="text-[10px] font-medium text-ink-500 tracking-wider uppercase">{stat.desc}</Typography>
                </Box>
              ))}
            </Box>
          </AnimatedContainer>

          <AnimatedContainer delay={0.4}>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-sm font-bold text-gold hover:text-gold-dark transition-colors tracking-wide uppercase"
            >
              Learn More About Us
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </AnimatedContainer>

        </Box>
      </Box>
    </Box>
  );
}
