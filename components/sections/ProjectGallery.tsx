"use client";
import { useState } from "react";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";
import Link from "next/link";
import { cn } from "@/lib/utils";

const projects = [
  { id: 1, title: "Balcony Glass Railing", category: "Residential", image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop" },
  { id: 2, title: "Corporate Partitions", category: "Commercial", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1000&auto=format&fit=crop" },
  { id: 3, title: "Frameless Shower", category: "Interiors", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop" },
  { id: 4, title: "Showroom Facade", category: "Commercial", image: "https://images.unsplash.com/photo-1541889816-3ce9427e0291?q=80&w=1000&auto=format&fit=crop" },
  { id: 5, title: "Luxury Villa Partition", category: "Residential", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop" },
  { id: 6, title: "Hotel Lobby Glass", category: "Hospitality", image: "https://images.unsplash.com/photo-1545464333-9cbd1f263054?q=80&w=1000&auto=format&fit=crop" },
];

const cats = ["All", "Residential", "Commercial", "Interiors", "Hospitality"];

export function ProjectGallery() {
  const [active, setActive] = useState("All");
  const filtered = projects.filter((p) => active === "All" || p.category === active);

  return (
    <section className="py-28 bg-ink-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <AnimatedContainer className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-gold mb-3">Portfolio</p>
            <h2 className="font-serif text-4xl md:text-5xl text-sand font-bold">Featured Projects</h2>
          </div>
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "px-4 py-1.5 text-[12px] font-semibold tracking-wider uppercase rounded border transition-all cursor-pointer",
                  active === c
                    ? "bg-gold text-ink-950 border-gold"
                    : "border-ink-700 text-ink-400 hover:text-sand hover:border-ink-500"
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </AnimatedContainer>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((p, i) => (
            <AnimatedContainer key={p.id} delay={i * 0.07} className="group relative overflow-hidden rounded-sm aspect-[4/3] bg-ink-900">
              <img
                src={p.image}
                alt={`${p.title} – Rajendra Glass House`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-gold block mb-1">{p.category}</span>
                <h3 className="font-serif text-lg text-sand">{p.title}</h3>
              </div>
            </AnimatedContainer>
          ))}
        </div>

        <AnimatedContainer className="mt-10 text-center">
          <Link href="/projects" className="text-sm text-ink-300 hover:text-gold transition-colors tracking-wide">
            View all projects →
          </Link>
        </AnimatedContainer>
      </div>
    </section>
  );
}
