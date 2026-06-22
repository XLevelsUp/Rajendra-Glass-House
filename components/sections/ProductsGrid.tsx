"use client";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";
import Link from "next/link";
import { Box, Typography } from "@mui/material";

import {
  Layers,
  DoorOpen,
  Shield,
  Building2,
  Columns2,
  Droplets,
  Fence,
  Square,
  Lightbulb,
  Bath,
  Hammer,
  Sparkles,
  LayoutGrid,
} from "lucide-react";

const products = [
  { name: "Premium Plywoods", Icon: Layers, href: "premium-plywoods" },
  { name: "Glass Doors", Icon: DoorOpen, href: "glass-doors" },
  { name: "Tempered Glass", Icon: Shield, href: "tempered-glass" },
  { name: "Glass Partition", Icon: Building2, href: "glass-partition" },
  { name: "Wall Mirror", Icon: Columns2, href: "wall-mirror" },
  { name: "Shower Enclosure", Icon: Droplets, href: "shower-enclosure" },
  { name: "Glass Railing", Icon: Fence, href: "glass-railing" },
  { name: "Float Glass", Icon: Square, href: "float-glass" },
  { name: "LED Mirror", Icon: Lightbulb, href: "led-mirror" },
  { name: "Bathroom Mirror", Icon: Bath, href: "bathroom-mirror" },
  { name: "Toughened Glass", Icon: Hammer, href: "toughened-glass" },
  { name: "Decorative Glass", Icon: Sparkles, href: "decorative-glass" },
  { name: "Glass Sheets", Icon: LayoutGrid, href: "glass-sheets" },
];

export function ProductsGrid() {
  return (
    <Box component="section" id="products" className="py-24 bg-surface-body relative overflow-hidden">

      {/* Subtle background decoration */}
      <Box className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <Box className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Section header */}
        <Box className="text-center max-w-2xl mx-auto mb-16">
          <AnimatedContainer delay={0.05}>
            <Typography component="span" className="section-kicker mb-4 block">What We Offer</Typography>
          </AnimatedContainer>
          <AnimatedContainer delay={0.1}>
            <Typography variant="h2" component="h2" className="font-serif text-4xl lg:text-5xl font-bold text-ink-950 mb-5 tracking-tight">
              Our Products
            </Typography>
          </AnimatedContainer>
          <AnimatedContainer delay={0.2}>
            <Box className="gold-separator mx-auto mb-6" />
            <Typography component="p" className="text-ink-600 text-lg leading-relaxed font-medium">
              Explore our extensive collection of premium glass and plywood solutions, engineered for both aesthetic
              brilliance and structural durability.
            </Typography>
          </AnimatedContainer>
        </Box>

        {/* Products grid */}
        <Box className="flex flex-wrap justify-center gap-4">
          {products.map((product, index) => {
            const Icon = product.Icon;
            return (
              <AnimatedContainer
                key={product.name}
                delay={0.05 + index * 0.04}
                className="w-[calc(50%-0.5rem)] sm:w-[185px] lg:w-[200px]"
              >
                <Link href={`/contact?service=${encodeURIComponent(product.name)}`} className="block h-full">
                  <Box className="group premium-card flex flex-col items-center justify-center text-center p-6 rounded-2xl h-full cursor-pointer min-h-[140px]">
                    {/* Icon circle */}
                    <Box className="w-14 h-14 rounded-full bg-gold/8 border border-gold/20 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-gold/15 group-hover:border-gold/40 group-hover:scale-110">
                      <Icon
                        size={22}
                        className="text-gold/70 group-hover:text-gold transition-colors duration-300"
                        strokeWidth={1.5}
                      />
                    </Box>
                    <Typography variant="h3" component="h3" className="font-semibold text-[13px] text-ink-800 group-hover:text-gold transition-colors duration-300 leading-tight tracking-wide">
                      {product.name}
                    </Typography>
                  </Box>
                </Link>
              </AnimatedContainer>
            );
          })}
        </Box>

      </Box>
      <Box className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </Box>
  );
}
