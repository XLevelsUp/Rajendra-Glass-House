"use client";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";
import Link from "next/link";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { ArrowRight } from "lucide-react";

const products = [
  { name: "Glass Doors", src: "glass-doors.webp" },
  { name: "Tempered Glass", src: "tempered-glass.webp" },
  { name: "Glass Partition", src: "glass-partition.webp" },
  { name: "Wall Mirror", src: "wall-mirror.webp" },
  { name: "Shower Enclosure", src: "shower-enclosure.webp" },
  { name: "Glass Railing", src: "glass-railing.webp" },
  { name: "Float Glass", src: "float-glass.webp" },
  { name: "LED Mirror", src: "led-mirror.webp" },
  { name: "Bathroom Mirror", src: "bathroom-mirror.webp" },
  { name: "Toughened Glass", src: "toughened-glass.webp" },
  { name: "Decorative Glass", src: "decorative-glass.webp" },
  { name: "Glass Sheets", src: "glass-sheets.webp" },
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
              Explore our extensive collection of premium glass solutions, engineered for both aesthetic
              brilliance and structural durability.
            </Typography>
          </AnimatedContainer>
        </Box>

        {/* Products grid - UI/UX Pro Image Cards (Smaller Size) */}
        <Box className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-5">
          {products.map((product, index) => (
            <AnimatedContainer
              key={product.name}
              delay={0.05 + index * 0.05}
            >
              <Link href={`/contact?service=${encodeURIComponent(product.name)}`} className="block w-full h-full">
                <Box className="group relative rounded-xl overflow-hidden aspect-[4/5] bg-ink-200 flex items-end p-4 md:p-5 cursor-pointer">
                  
                  {/* Placeholder fallback behind the image */}
                  <Box className="absolute inset-0 flex items-center justify-center bg-ink-100 border border-ink-200 p-2 text-center">
                    <Typography component="span" className="text-ink-400 text-[12px] md:text-sm font-medium capitalize">
                      {product.name}
                    </Typography>
                  </Box>

                  {/* Actual image */}
                  <Image 
                    src={`/home-products/${product.src}`} 
                    alt={product.name} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105 relative z-10" 
                  />
                  
                  {/* Gradient Overlay for text readability */}
                  <Box className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500 z-20" />
                  
                  {/* Content */}
                  <Box className="relative z-30 w-full flex items-center justify-between gap-2">
                    <Typography variant="h3" component="h3" className="font-semibold text-[13px] md:text-[14px] leading-snug text-white tracking-wide">
                      {product.name}
                    </Typography>
                    
                    <Box className="w-7 h-7 rounded-full flex-shrink-0 bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 border border-white/30">
                      <ArrowRight size={12} strokeWidth={2.5} />
                    </Box>
                  </Box>

                </Box>
              </Link>
            </AnimatedContainer>
          ))}
        </Box>

      </Box>
      <Box className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </Box>
  );
}
