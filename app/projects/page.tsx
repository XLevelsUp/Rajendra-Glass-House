"use client";
import { useState } from "react";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";
import { cn } from "@/lib/utils";
import Link from "next/link";

const allProjects = [
  { id: 1, title: "Frameless Balcony Railing", category: "Residential", location: "RS Puram", image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop" },
  { id: 2, title: "Executive Office Partitions", category: "Commercial", location: "Avinashi Road", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1000&auto=format&fit=crop" },
  { id: 3, title: "Luxury Shower Enclosure", category: "Interiors", location: "Race Course", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop" },
  { id: 4, title: "Automotive Showroom Facade", category: "Commercial", location: "Trichy Road", image: "https://images.unsplash.com/photo-1541889816-3ce9427e0291?q=80&w=1000&auto=format&fit=crop" },
  { id: 5, title: "Villa Staircase Glass", category: "Residential", location: "Vadavalli", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop" },
  { id: 6, title: "Hotel Lobby Skylight", category: "Hospitality", location: "Gandhipuram", image: "https://images.unsplash.com/photo-1545464333-9cbd1f263054?q=80&w=1000&auto=format&fit=crop" },
  { id: 7, title: "Smart LED Mirror Installation", category: "Interiors", location: "Saibaba Colony", image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1000&auto=format&fit=crop" },
  { id: 8, title: "Restaurant Glass Partition", category: "Hospitality", location: "Peelamedu", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop" },
  { id: 9, title: "Gym Mirror Walls", category: "Commercial", location: "Saravanampatti", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop" },
];

const categories = ["All", "Residential", "Commercial", "Interiors", "Hospitality"];

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("All");
  const filtered = allProjects.filter((p) => activeTab === "All" || p.category === activeTab);

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 border-b border-ink-200 text-center bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedContainer>
            <p className="text-[11px] tracking-[0.2em] uppercase text-gold mb-6 font-semibold">Our Portfolio</p>
            <h1 className="font-serif text-5xl md:text-7xl text-ink-950 font-bold mb-8 leading-[1.1]">
              Featured Projects
            </h1>
            <p className="text-ink-600 text-lg max-w-2xl mx-auto font-medium">
              Explore our recent installations across residential, commercial, and hospitality sectors.
            </p>
          </AnimatedContainer>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          
          {/* Filters */}
          <AnimatedContainer className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={cn(
                  "px-6 py-2.5 text-[11px] font-bold tracking-[0.15em] uppercase rounded-full border transition-all cursor-pointer shadow-sm",
                  activeTab === cat
                    ? "bg-gold text-white border-gold shadow-gold/20"
                    : "bg-white border-ink-200 text-ink-600 hover:text-gold hover:border-gold"
                )}
              >
                {cat}
              </button>
            ))}
          </AnimatedContainer>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, idx) => (
              <AnimatedContainer key={project.id} delay={idx * 0.05} className="group relative overflow-hidden bg-white rounded-2xl aspect-[4/5] shadow-sm border border-ink-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold">
                      {project.category}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-white/80">
                      {project.location}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-white font-medium">{project.title}</h3>
                </div>
              </AnimatedContainer>
            ))}
          </div>

          <AnimatedContainer className="mt-20 text-center">
            <p className="text-ink-600 mb-6 font-medium">Have a similar project in mind?</p>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-white font-bold text-sm rounded-xl hover:bg-gold-dark hover:scale-105 transition-all shadow-lg shadow-gold/20 tracking-wide"
            >
              Start a Conversation
            </Link>
          </AnimatedContainer>

        </div>
      </section>
    </div>
  );
}
