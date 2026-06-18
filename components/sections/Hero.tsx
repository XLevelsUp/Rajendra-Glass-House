"use client";
import Link from "next/link";
import Image from "next/image";
import { WHATSAPP_URL, PHONE, PHONE_DISPLAY } from "@/lib/constants";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-ink-50 pt-20 overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-gold/5 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-ink-300/20 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-8 items-center py-16">
        
        {/* Left Side: Text Content */}
        <div className="flex flex-col items-start text-left max-w-2xl">
          <AnimatedContainer delay={0.1}>
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white border border-gold/40 shadow-sm rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-ink-600">
                Est. 1977 · Expert Craftsmanship
              </span>
            </div>
          </AnimatedContainer>

          <AnimatedContainer delay={0.2}>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-ink-950 leading-[1.1] tracking-tight mb-6">
              The Premier <span className="text-gold">Glass Shop in Coimbatore</span>
            </h1>
          </AnimatedContainer>

          <AnimatedContainer delay={0.3}>
            <p className="text-ink-600 text-lg sm:text-xl leading-relaxed mb-10 font-medium">
              Elevating interiors as the best glass shop in Coimbatore. If you are searching for a "glass shop near me" in Coimbatore, we are your trusted source for luxury architectural glass, mirrors, and premium plywood.
            </p>
          </AnimatedContainer>

          <AnimatedContainer delay={0.4}>
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="/services"
                className="px-8 py-4 bg-gold text-white text-sm font-bold rounded-xl tracking-wide hover:bg-gold-dark hover:scale-105 transition-all shadow-lg shadow-gold/20"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white border border-ink-300 text-ink-900 text-sm font-semibold rounded-xl hover:border-gold hover:text-gold transition-colors shadow-sm"
              >
                Get Quote
              </Link>
            </div>
          </AnimatedContainer>
        </div>

        {/* Right Side: Image Content */}
        <div className="relative w-full h-[60vh] lg:h-[80vh] flex justify-end">
          <AnimatedContainer delay={0.3} className="relative w-full h-full max-w-[600px] mx-auto lg:ml-auto">
            {/* Image Wrapper with Glassmorphism Border */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white shadow-2xl z-10 modern-glass p-2">
              <div className="relative w-full h-full rounded-[20px] overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
                  alt="Luxury Glass Interior"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 to-transparent" />
              </div>
            </div>

            {/* Decorative offset block */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gold/10 rounded-3xl -z-10 blur-xl" />
          </AnimatedContainer>
        </div>

      </div>
    </section>
  );
}
