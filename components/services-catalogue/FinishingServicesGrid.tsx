"use client";
import * as Icons from "lucide-react";
import { FINISHING_SERVICES } from "@/lib/services-data";

export function FinishingServicesGrid() {
  return (
    <section className="bg-white border-t border-b border-ink-200 py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-gold" />
          <span className="text-[10px] font-black tracking-[0.35em] uppercase text-gold">
            Glass Craftsmanship
          </span>
        </div>

        <div className="mb-12">
          <h2 className="font-serif text-[2.2rem] md:text-[2.8rem] font-bold text-ink-950 leading-[1.1] tracking-tight">
            Craft &amp; Finishing Services
          </h2>
          <p className="text-ink-500 text-[0.9375rem] font-medium mt-3 max-w-xl leading-relaxed">
            Precision glass processing and custom finishing options tailored to your specific architectural needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {FINISHING_SERVICES.map((craft) => {
            // Dynamically resolve lucide icon
            const IconComponent = (Icons as any)[craft.icon] || Icons.Sparkles;

            return (
              <div
                key={craft.id}
                className="group flex flex-col p-6 bg-[#F4F5F7]/40 rounded-2xl border border-ink-100 hover:border-gold/30 hover:bg-white hover:shadow-lg hover:shadow-ink-950/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-gold group-hover:text-ink-950 transition-all duration-300">
                  <IconComponent size={20} />
                </div>
                <h3 className="font-sans text-[0.95rem] font-bold text-ink-950 mb-2 group-hover:text-gold transition-colors duration-250">
                  {craft.name}
                </h3>
                <p className="text-ink-500 text-[0.8125rem] leading-relaxed font-medium">
                  {craft.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
