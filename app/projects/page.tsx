"use client";
import { useState } from "react";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Typography } from "@mui/material";


const allProjects = [
  { id: 1, title: "Frameless Balcony Railing", category: "Residential", location: "RS Puram", image: "/projects/balcony-railing.webp" },
  { id: 2, title: "Executive Office Partitions", category: "Commercial", location: "Avinashi Road", image: "/projects/office-partitions.webp" },
  { id: 3, title: "Luxury Shower Enclosure", category: "Interiors", location: "Race Course", image: "/projects/shower-enclosure.webp" },
  { id: 4, title: "Automotive Showroom Facade", category: "Commercial", location: "Trichy Road", image: "/projects/showroom-facade.webp" },
  { id: 5, title: "Villa Staircase Glass", category: "Residential", location: "Vadavalli", image: "/projects/staircase-glass.webp" },
  { id: 6, title: "Hotel Lobby Skylight", category: "Hospitality", location: "Gandhipuram", image: "/projects/hotel-lobby-skylight.webp" },
  { id: 7, title: "Smart LED Mirror Installation", category: "Interiors", location: "Saibaba Colony", image: "/projects/smart-led-mirror.webp" },
  { id: 8, title: "Restaurant Glass Partition", category: "Hospitality", location: "Peelamedu", image: "/projects/restaurant-glass-partition.webp" },
  { id: 9, title: "Gym Mirror Walls", category: "Commercial", location: "Saravanampatti", image: "/projects/gym-mirror-walls.webp" },
  { id: 10, title: "Glass Block Feature Wall", category: "Interiors", location: "RS Puram", image: "/projects/glass-block-feature-wall.webp" },
];

const categories = ["All", "Residential", "Commercial", "Interiors", "Hospitality"];

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("All");
  const filtered = allProjects.filter((p) => activeTab === "All" || p.category === activeTab);

  return (
    <Box className="bg-surface-body min-h-screen pt-20">
      {/* Hero */}
      <Box component="section" className="py-24 border-b border-ink-200 text-center bg-white">
        <Box className="max-w-4xl mx-auto px-6">
          <AnimatedContainer>
            <Typography component="p" className="text-[11px] tracking-[0.2em] uppercase text-gold mb-6 font-semibold">Our Portfolio</Typography>
            <Typography variant="h1" component="h1" className="font-serif text-5xl md:text-7xl text-ink-950 font-bold mb-8 leading-[1.1] tracking-tight">
              Featured Projects
            </Typography>
            <Typography component="p" className="text-ink-600 text-lg max-w-2xl mx-auto font-medium">
              Explore our recent installations across residential, commercial, and hospitality sectors.
            </Typography>
          </AnimatedContainer>
        </Box>
      </Box>

      <Box component="section" className="py-24">
        <Box className="max-w-7xl mx-auto px-6 lg:px-10">
          
          {/* Filters */}
          <AnimatedContainer className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={cn(
                  "px-6 py-2.5 text-[11px] font-bold tracking-[0.15em] uppercase rounded-full border transition-all cursor-pointer shadow-sm",
                  activeTab === cat
                    ? "bg-gold text-ink-950 border-gold shadow-gold/20"
                    : "bg-white border-ink-200 text-ink-600 hover:text-gold hover:border-gold"
                )}
              >
                {cat}
              </button>
            ))}
          </AnimatedContainer>

          {/* Grid */}
          <motion.div layout className="flex flex-wrap gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, idx) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  key={project.id} 
                  className="group relative overflow-hidden bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-ink-200/50 flex-grow basis-[calc(50%-1.5rem)] lg:basis-[calc(33.333%-1.5rem)] min-w-[300px] h-[400px] cursor-pointer"
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} - Rajendra Glass House`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={idx < 2}
                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                  
                  {/* Deep luxury gradient overlay */}
                  <Box className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  {/* Inner glow on hover */}
                  <Box className="absolute inset-0 border-2 border-transparent group-hover:border-gold/30 rounded-[2rem] transition-colors duration-700 pointer-events-none" />
                  
                  <Box className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <Box className="flex items-center justify-between mb-4">
                      <Typography component="span" className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold">
                        {project.category}
                      </Typography>
                      <Typography component="span" className="text-[10px] uppercase tracking-wider text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {project.location}
                      </Typography>
                    </Box>
                    <Typography variant="h3" component="h3" className="font-serif text-2xl text-white font-medium mb-2 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                      {project.title}
                    </Typography>
                    
                    {/* Reveal line */}
                    <Box className="h-[1px] w-0 bg-gold group-hover:w-12 transition-all duration-700 ease-out delay-150 mt-4" />
                  </Box>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <AnimatedContainer className="mt-20 text-center">
            <Typography component="p" className="text-ink-600 mb-6 font-medium">Have a similar project in mind?</Typography>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-ink-950 font-bold text-sm rounded-xl hover:bg-gold-dark hover:scale-105 transition-all shadow-lg shadow-gold/20 tracking-wide"
            >
              Start a Conversation
            </Link>
          </AnimatedContainer>

        </Box>
      </Box>
    </Box>
  );
}
