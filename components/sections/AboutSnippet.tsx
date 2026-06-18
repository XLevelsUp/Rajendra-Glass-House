"use client";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";

export function AboutSnippet() {
  return (
    <section className="py-24 bg-white border-b border-ink-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedContainer delay={0.1}>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink-950 mb-6 tracking-tight">
              Crafting Excellence Since 1977
            </h2>
          </AnimatedContainer>
          
          <AnimatedContainer delay={0.2}>
            <p className="text-ink-600 text-lg md:text-xl leading-relaxed mb-10 font-medium">
              As premier <strong className="text-gold font-semibold">glass suppliers Tamil Nadu</strong>, we merge decades of architectural glass expertise with modern designs and the highest quality materials. Whether you are outfitting a luxury residence or a corporate high-rise, our premium glass and plywood solutions ensure durability, elegance, and unparalleled craftsmanship.
            </p>
          </AnimatedContainer>

          <AnimatedContainer delay={0.3}>
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-ink-100/50">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-serif font-bold text-ink-950 mb-1">45+</span>
                <span className="text-xs tracking-widest uppercase text-ink-500 font-semibold">Years Exp</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-serif font-bold text-ink-950 mb-1">10k+</span>
                <span className="text-xs tracking-widest uppercase text-ink-500 font-semibold">Projects</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-serif font-bold text-ink-950 mb-1">100%</span>
                <span className="text-xs tracking-widest uppercase text-ink-500 font-semibold">Quality</span>
              </div>
            </div>
          </AnimatedContainer>
        </div>
      </div>
    </section>
  );
}
