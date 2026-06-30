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
  { id: 1, title: "Frameless Balcony Railing", category: "Residential", location: "RS Puram", image: "/services/glass-railing.webp" },
  { id: 2, title: "Showroom Facade", category: "Commercial", location: "Avinashi Road", image: "/services/reflective-glass.webp" },
  { id: 3, title: "Luxury Shower Enclosure", category: "Residential", location: "Race Course", image: "/services/shower-enclosures.webp" },
  { id: 4, title: "Executive Office Partitions", category: "Commercial", location: "Trichy Road", image: "/services/glass-partition.webp" },
  { id: 5, title: "Villa Staircase Glass", category: "Residential", location: "Vadavalli", image: "/services/glass-railing.webp" },
  { id: 6, title: "Hotel Lobby Skylight", category: "Commercial", location: "Gandhipuram", image: "/services/floor-glass-sheet.webp" },
];

const cats = ["All", "Residential", "Commercial"];

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
            <Typography component="span" className="text-[10px] font-black tracking-[0.3em] uppercase text-gold mb-3 block">
              Portfolio
            </Typography>
            <Typography variant="h2" component="h2" className="font-serif text-[2.5rem] md:text-[3.2rem] text-ink-950 font-bold leading-tight tracking-tight">
              Featured Services
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

        {/* Clean Symmetrical Grid (Restored White Card Style) */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => {
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.05 }}
                  key={p.id}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-ink-100 transition-all duration-300 cursor-pointer"
                  onClick={() => window.location.href = `/services?category=${p.category.toLowerCase()}`}
                >
                  {/* Image wrapper */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-ink-50">
                    <Image
                      src={p.image}
                      alt={`${p.title} – Rajendra Glass House`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="bg-white text-ink-800 text-[9px] font-black tracking-[0.2em] uppercase px-3 py-1 rounded shadow-sm">
                        {p.category}
                      </span>
                    </div>
                  </div>

                  {/* Body content */}
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-[10px] font-bold tracking-widest text-ink-400 uppercase mb-1">
                      {p.location}
                    </span>
                    <h3 className="font-serif text-[1.125rem] font-bold text-ink-950 leading-snug tracking-tight mb-4 group-hover:text-gold transition-colors duration-250">
                      {p.title}
                    </h3>
                    <div className="mt-auto flex items-center gap-2 text-[10px] font-black tracking-widest uppercase text-gold group-hover:text-gold-dark transition-colors">
                      Learn More
                      <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <AnimatedContainer className="mt-12 text-center">
          <Link
            href="/services"
            className="group inline-block text-[14px] font-medium transition-colors hover:text-ink-600"
            style={{ color: '#0F172A', borderBottom: '1px solid #0F172A', paddingBottom: '2px' }}
          >
            View All Services
          </Link>
        </AnimatedContainer>

      </Box>
    </Box>
  );
}
