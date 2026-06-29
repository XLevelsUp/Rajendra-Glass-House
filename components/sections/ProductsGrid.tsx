"use client";
import Link from "next/link";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";
import { ArrowRight } from "lucide-react";
import { Box, Typography } from "@mui/material";


const products = [
  {
    title: "Toughened Glass",
    desc: "6mm – 12mm safety glass for facades, railings & structural use.",
    href: "/products#toughened-glass",
  },
  {
    title: "Shower Enclosures",
    desc: "Frameless & semi-frameless glass for luxury bathrooms.",
    href: "/products#shower-enclosures",
  },
  {
    title: "Glass Railings",
    desc: "Balcony, terrace & staircase railings in toughened glass.",
    href: "/products#glass-railings",
  },
  {
    title: "Office Partitions",
    desc: "Clear, frosted & one-way glass partitions for modern offices.",
    href: "/products#office-partitions",
  },
  {
    title: "LED Smart Mirrors",
    desc: "Touch-control, anti-fog & Bluetooth bathroom mirrors.",
    href: "/products#led-mirrors",
  },
  {
    title: "Float & Laminated",
    desc: "Saint Gobain float, laminated & UV-protection glass.",
    href: "/products#float-laminated",
  },
  {
    title: "Glass Doors & Windows",
    desc: "Sliding, swing & frameless glass door systems.",
    href: "/products#glass-doors",
  },
  {
    title: "Decorative Glass",
    desc: "Frosted, etched, tinted & mural glass for interiors.",
    href: "/products#decorative-glass",
  },
  {
    title: "Glass Blocks",
    desc: "Architectural glass blocks for partitions, facades & decorative walls.",
    href: "/products#glass-blocks",
  },
];

export function ProductsGrid() {
  return (
    <Box component="section" className="py-28 bg-ink-50">
      <Box className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header row */}
        <AnimatedContainer className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <Box>
            <Typography component="p" className="text-[11px] tracking-[0.2em] uppercase text-gold mb-3">What We Do</Typography>
            <Typography variant="h2" component="h2" className="font-serif text-4xl md:text-5xl text-ink-900 font-bold max-w-xl">Our Products</Typography>
          </Box>
          <Link href="/products" className="inline-flex items-center gap-2 text-gold font-semibold tracking-wide hover:gap-4 transition-all">
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedContainer>

        {/* Grid */}
        <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((p, i) => (
            <AnimatedContainer key={p.title} delay={i * 0.05}>
              <Link
                href={p.href}
                className="group block bg-white border border-ink-100 rounded-2xl p-7 h-full hover:border-gold hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <Typography component="span" className="text-[11px] font-semibold tracking-[0.15em] uppercase text-ink-500 group-hover:text-gold transition-colors">
                  0{i + 1}
                </Typography>
                <Typography variant="h3" component="h3" className="font-serif text-2xl text-ink-900 mt-6 mb-3">
                  {p.title}
                </Typography>
                <Typography component="p" className="text-sm text-ink-600 leading-relaxed">{p.desc}</Typography>
              </Link>
            </AnimatedContainer>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
