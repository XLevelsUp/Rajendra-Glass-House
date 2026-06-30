"use client";
import * as React from "react";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";
import Link from "next/link";
import Image from "next/image";
import { Box, Typography, IconButton } from "@mui/material";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const services = [
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

export function ServicesGrid() {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth, scrollLeft, children } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth / 2 : clientWidth / 2;
      
      const firstItem = children[0] as HTMLElement;
      const middleItem = children[services.length] as HTMLElement;
      const shiftAmount = middleItem && firstItem ? middleItem.offsetLeft - firstItem.offsetLeft : 0;

      if (direction === "right" && shiftAmount > 0 && scrollLeft >= shiftAmount) {
         scrollRef.current.scrollTo({ left: scrollLeft - shiftAmount, behavior: "auto" });
         setTimeout(() => {
           if (scrollRef.current) {
             scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
           }
         }, 50);
         return;
      }

      if (direction === "left" && shiftAmount > 0 && scrollLeft <= 10) {
         scrollRef.current.scrollTo({ left: scrollLeft + shiftAmount, behavior: "auto" });
         setTimeout(() => {
           if (scrollRef.current) {
             scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
           }
         }, 50);
         return;
      }

      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, children } = scrollRef.current;
        const firstItem = children[0] as HTMLElement;
        const middleItem = children[services.length] as HTMLElement;
        const shiftAmount = middleItem && firstItem ? middleItem.offsetLeft - firstItem.offsetLeft : 0;

        if (shiftAmount > 0 && scrollLeft >= shiftAmount) {
          scrollRef.current.scrollTo({ left: scrollLeft - shiftAmount, behavior: "auto" });
          setTimeout(() => {
            if (scrollRef.current) {
              scrollRef.current.scrollBy({ left: 340, behavior: "smooth" });
            }
          }, 50);
        } else {
          scrollRef.current.scrollBy({ left: 340, behavior: "smooth" });
        }
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box component="section" id="services" className="py-24 bg-surface-body relative overflow-hidden">

      {/* Subtle background decoration */}
      <Box className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <Box className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Section header */}
        <Box className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <Box className="max-w-2xl">
            <AnimatedContainer delay={0.05}>
              <Typography component="span" className="section-kicker mb-4 block">What We Offer</Typography>
            </AnimatedContainer>
            <AnimatedContainer delay={0.1}>
              <Typography variant="h2" component="h2" className="font-serif text-4xl lg:text-5xl font-bold text-ink-950 mb-5 tracking-tight">
                Our Collection
              </Typography>
            </AnimatedContainer>
            <AnimatedContainer delay={0.2}>
              <Box className="gold-separator mb-6" />
              <Typography component="p" className="text-ink-600 text-lg leading-relaxed font-medium">
                Discover our premium selection of structural and decorative glass products, crafted to elevate your residential and commercial spaces.
              </Typography>
            </AnimatedContainer>
          </Box>

          {/* Carousel Controls (Desktop) */}
          <AnimatedContainer delay={0.3} className="hidden md:flex items-center gap-3">
            <IconButton
              onClick={() => scroll("left")}
              className="bg-ink-100 hover:bg-gold hover:text-ink-950 transition-colors duration-300"
              size="large"
            >
              <ChevronLeft size={24} />
            </IconButton>
            <IconButton
              onClick={() => scroll("right")}
              className="bg-ink-100 hover:bg-gold hover:text-ink-950 transition-colors duration-300"
              size="large"
            >
              <ChevronRight size={24} />
            </IconButton>
          </AnimatedContainer>
        </Box>

        {/* Services Carousel */}
        <AnimatedContainer delay={0.3}>
          <Box
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 lg:gap-6 pb-8 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {[...services, ...services].map((service, index) => (
              <Box
                key={`${service.name}-${index}`}
                className="flex-shrink-0 w-[260px] md:w-[300px] lg:w-[340px] snap-start"
              >
                <Box className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-ink-200 flex items-end p-5 md:p-6 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-ink-100 hover:border-gold/30">

                  {/* Placeholder fallback behind the image */}
                  <Box className="absolute inset-0 flex items-center justify-center bg-ink-100 p-2 text-center">
                    <Typography component="span" className="text-ink-400 text-sm font-medium capitalize">
                      {service.name}
                    </Typography>
                  </Box>

                  {/* Actual image */}
                  <Image
                    src={`/home-products/${service.src}`}
                    alt={service.name}
                    fill
                    className={`${service.name === 'Bathroom Mirror' || service.name === 'Wall Mirror' ? 'object-contain' : 'object-cover'} transition-transform duration-700 group-hover:scale-110 relative z-10`}
                  />

                  {/* Gradient Overlay for text readability */}
                  <Box className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500 z-20" />

                  {/* Content */}
                  <Box className="relative z-30 w-full flex items-center justify-between gap-2">
                    <Typography variant="h3" component="h3" className="font-semibold text-lg md:text-xl text-white tracking-wide group-hover:text-gold transition-colors duration-300">
                      {service.name}
                    </Typography>
                  </Box>

                </Box>
              </Box>
            ))}
          </Box>
        </AnimatedContainer>

        {/* CTA */}
        <AnimatedContainer className="mt-8 text-center">
          <Typography component="p" className="text-ink-600 mb-6 font-medium">Explore our complete catalog or request a custom glass product.</Typography>
          <Box className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-ink-950 font-bold text-sm tracking-[0.1em] uppercase rounded-xl border border-ink-200 hover:border-gold hover:text-gold hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              View Our Products
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-ink-950 font-bold text-sm tracking-[0.1em] uppercase rounded-xl hover:bg-gold-dark hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-gold/20"
            >
              Get a Custom Quote
              <ArrowRight size={16} />
            </Link>
          </Box>
        </AnimatedContainer>

      </Box>
      <Box className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Hide scrollbar CSS injection */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </Box>
  );
}
