"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Box, Typography } from "@mui/material";


const projects = [
  { id: 1, title: "Balcony Glass Railing", category: "Residential", location: "RS Puram", image: "/projects/balcony-railing.webp" },
  { id: 2, title: "Corporate Partitions", category: "Commercial", location: "Avinashi Road", image: "/projects/office-partitions.webp" },
  { id: 3, title: "Frameless Shower", category: "Interiors", location: "Race Course", image: "/projects/shower-enclosure.webp" },
  { id: 4, title: "Showroom Facade", category: "Commercial", location: "Trichy Road", image: "/projects/showroom-facade.webp" },
  { id: 5, title: "Villa Staircase Glass", category: "Residential", location: "Vadavalli", image: "/projects/staircase-glass.webp" },
  { id: 6, title: "Hotel Lobby Skylight", category: "Hospitality", location: "Gandhipuram", image: "/projects/hotel-lobby-skylight.webp" },
  { id: 7, title: "Glass Block Feature Wall", category: "Interiors", location: "RS Puram", image: "/projects/glass-block-feature-wall.webp" },
];

const cats = ["All", "Residential", "Commercial", "Interiors", "Hospitality"];

export function ProductGallery() {
  const [active, setActive] = useState("All");
  const filtered = projects.filter((p) => active === "All" || p.category === active);

  return (
    <Box component="section" className="py-28 bg-[#FAF9F6] relative overflow-hidden">

      {/* Subtle background pattern - Masterpiece clean style */}
      <Box className="absolute inset-0 pointer-events-none opacity-[0.02]" />

      <Box className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Header */}
        <AnimatedContainer className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <Box>
            <Typography component="span" className="text-[11px] font-bold tracking-[0.2em] uppercase text-gold mb-4 block">Portfolio</Typography>
            <Typography variant="h2" component="h2" className="font-serif text-[2.5rem] md:text-[3.2rem] text-ink-950 font-normal leading-[1.15] tracking-tight">
              Featured Products
            </Typography>
          </Box>

          {/* Category filters */}
          <Box className="flex flex-wrap gap-3">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "px-5 py-2 text-[11px] font-medium tracking-[0.1em] uppercase border transition-all duration-300 cursor-pointer",
                  active === c
                    ? "bg-ink-950 text-white border-ink-950"
                    : "border-ink-200 text-ink-500 hover:text-ink-950 hover:border-ink-400 bg-transparent"
                )}
              >
                {c}
              </button>
            ))}
          </Box>
        </AnimatedContainer>

        {/* Asymmetrical Masonry Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => {
              // Masterpiece 3-column asymmetric layout logic
              let gridClass = "md:col-span-6 lg:col-span-4 min-h-[300px] lg:min-h-[380px]"; 
              if (i === 0) gridClass = "md:col-span-12 lg:col-span-5 lg:row-span-2 min-h-[400px] lg:min-h-0";
              if (i === 1) gridClass = "md:col-span-6 lg:col-span-4 min-h-[300px] lg:min-h-[380px]";
              if (i === 2) gridClass = "md:col-span-6 lg:col-span-3 min-h-[300px] lg:min-h-[380px]";
              if (i === 3) gridClass = "md:col-span-6 lg:col-span-4 min-h-[300px] lg:min-h-[380px]";

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  key={p.id}
                  className={cn(
                    "group relative overflow-hidden bg-ink-100 cursor-pointer",
                    gridClass
                  )}
                >
                  <Image
                    src={p.image}
                    alt={`${p.title} – Rajendra Glass House`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />

                  {/* Clean gradient overlay for text readability */}
                  <Box className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Content Box */}
                  <Box className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end">
                    <Box className="flex items-center justify-between mb-3">
                      <Typography component="span" className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/80 block">
                        {p.category}
                      </Typography>
                    </Box>
                    <Typography variant="h3" component="h3" className="font-serif text-xl md:text-2xl text-white font-normal mb-1">
                      {p.title}
                    </Typography>
                  </Box>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <AnimatedContainer className="mt-12 text-center">
          <Link
            href="/products"
            className="group inline-block text-[14px] font-medium transition-colors hover:text-ink-600"
            style={{ color: '#0F172A', borderBottom: '1px solid #0F172A', paddingBottom: '2px' }}
          >
            View All Products
          </Link>
        </AnimatedContainer>

      </Box>
    </Box>
  );
}
