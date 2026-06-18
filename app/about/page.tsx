"use client";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";

const timeline = [
  { year: "1977", title: "The Beginning", desc: "Started as a small retail glass shop in RS Puram, Coimbatore." },
  { year: "1995", title: "Commercial Expansion", desc: "Began serving large-scale commercial and hospitality projects." },
  { year: "2010", title: "Saint Gobain Partnership", desc: "Became an authorized dealer for premium architectural glass." },
  { year: "2024", title: "Modern Showroom", desc: "Relocated to a state-of-the-art facility showcasing modern applications." },
];

export default function AboutPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 border-b border-ink-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedContainer className="max-w-3xl">
            <p className="text-[11px] tracking-[0.2em] uppercase text-gold mb-6 font-semibold">Our Story</p>
            <h1 className="font-serif text-5xl md:text-7xl text-ink-950 font-bold mb-8 leading-[1.1]">
              Four Decades of <br />
              <span className="text-gold">Glass Excellence</span>
            </h1>
            <p className="text-ink-600 font-medium text-lg leading-relaxed">
              Established in 1977, Rajendra Glass House has grown from a humble retail shop into 
              Coimbatore's most trusted name in architectural glass, mirrors, and custom enclosures.
            </p>
          </AnimatedContainer>
        </div>
      </section>

      {/* Content & Timeline */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left: Values & Legacy */}
            <AnimatedContainer>
              <h2 className="font-serif text-3xl md:text-4xl text-ink-950 font-bold mb-8">The Legacy</h2>
              <div className="space-y-6 text-ink-600 font-medium leading-relaxed mb-10">
                <p>
                  For over 45 years, we have built our reputation on precision, quality, and trust. 
                  We don't just sell glass; we provide architectural solutions that transform spaces.
                </p>
                <p>
                  As an authorized dealer for Saint Gobain, we ensure that every pane of glass 
                  installed in your home or office meets the highest global standards for safety, 
                  clarity, and durability.
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  "100% Authentic Saint Gobain Glass",
                  "In-house precise cutting & edging",
                  "Expert structural installation team",
                  "Transparent wholesale pricing"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-ink-900 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedContainer>

            {/* Right: Timeline */}
            <AnimatedContainer delay={0.2} className="relative">
              <div className="absolute left-6 top-2 bottom-2 w-px bg-ink-200" />
              <div className="space-y-12">
                {timeline.map((item, i) => (
                  <div key={item.year} className="relative pl-16">
                    <div className="absolute left-0 top-1 w-12 h-12 rounded-full bg-white border border-gold flex items-center justify-center z-10 shadow-sm">
                      <span className="font-serif font-bold text-gold text-[13px]">{item.year}</span>
                    </div>
                    <h3 className="text-xl text-ink-950 font-semibold mb-2 pt-2">{item.title}</h3>
                    <p className="text-ink-600 font-medium text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedContainer>
            
          </div>
        </div>
      </section>
    </div>
  );
}
