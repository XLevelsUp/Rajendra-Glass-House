"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

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

export function ProjectGallery() {
  const [active, setActive] = useState("All");
  const filtered = projects.filter((p) => active === "All" || p.category === active);

  return (
    <section className="py-28 bg-surface-dark relative overflow-hidden">

      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #C9A84C 1px, transparent 1px)`,
          backgroundSize: "40px 40px"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Header */}
        <AnimatedContainer className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <span className="section-kicker mb-4 block">Portfolio</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white font-bold tracking-tight">
              Featured Projects
            </h2>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "px-4 py-1.5 text-[11px] font-bold tracking-[0.15em] uppercase rounded-lg border transition-all duration-200 cursor-pointer",
                  active === c
                    ? "bg-gold text-ink-950 border-gold shadow-lg shadow-gold/20"
                    : "border-ink-700 text-ink-400 hover:text-white hover:border-ink-500 bg-transparent"
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </AnimatedContainer>

        {/* Grid */}
        <motion.div layout className="flex flex-wrap gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                key={p.id}
                className="group relative overflow-hidden rounded-[2rem] bg-ink-900 cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex-grow basis-[calc(50%-1rem)] lg:basis-[calc(33.333%-1rem)] min-w-[280px] h-[360px] border border-ink-200/50"
              >
              <Image
                src={p.image}
                alt={`${p.title} – Rajendra Glass House`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-[1.5s] group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />

              {/* Deep luxury gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Inner glow on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/30 rounded-[2rem] transition-colors duration-700 pointer-events-none" />

              {/* Content Box */}
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold block">
                    {p.category}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {p.location}
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-white font-medium mb-2 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                  {p.title}
                </h3>
                
                {/* Reveal line */}
                <div className="h-[1px] w-0 bg-gold group-hover:w-12 transition-all duration-700 ease-out delay-150 mt-4" />
              </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <AnimatedContainer className="mt-12 text-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 border border-ink-700 text-ink-300 hover:border-gold hover:text-gold text-sm font-semibold rounded-xl transition-all duration-300 tracking-wide"
          >
            View All Projects
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </AnimatedContainer>

      </div>
    </section>
  );
}
