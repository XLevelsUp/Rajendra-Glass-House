"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-surface-body overflow-hidden pt-20">

      {/* ── Decorative ambient blobs ─────────────────────────── */}
      <div className="absolute top-[5%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-gold/6 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[5%] w-[30vw] h-[30vw] rounded-full bg-gold/4 blur-[120px] pointer-events-none" />

      {/* ── Subtle gold grid ────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Main grid ───────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-24">

          {/* ── Left: Text content ──────────────────────────── */}
          <div className="order-2 lg:order-1">

            {/* Kicker badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white border border-gold/30 shadow-sm rounded-full mb-8">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse flex-shrink-0" />
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-ink-600">
                  Est. 1977 · Expert Craftsmanship
                </span>
              </div>
            </motion.div>

            {/* Eyebrow / SEO Kicker */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            >
              <h2 className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-ink-500 mb-4">
                Rajendra Glass House Coimbatore
              </h2>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-ink-950 leading-[1.05] tracking-tight mb-6"
            >
              The Premier{" "}
              <span className="relative inline-block">
                <span className="text-gold">Glass Shop</span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-[3px] bg-gold rounded-full block w-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
                  style={{ transformOrigin: "left" }}
                />
              </span>
              <br className="hidden md:block" />
              {" "}in Coimbatore
            </motion.h1>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="text-ink-600 text-lg leading-relaxed mb-10 font-medium max-w-lg"
            >
              Elevating interiors as the best glass shop in Coimbatore. Trusted source for luxury architectural glass, mirrors, and premium plywood since 1977.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <Link
                href="/services"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-gold text-ink-950 text-sm font-bold rounded-xl tracking-wide hover:bg-gold-dark transition-all duration-300 shadow-lg shadow-gold/25 hover:-translate-y-0.5"
              >
                Explore Products
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-white border border-ink-200 text-ink-800 text-sm font-semibold rounded-xl hover:border-gold/50 hover:text-gold transition-all duration-300 shadow-sm"
              >
                <Phone size={15} />
                Get Quote
              </Link>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-10 mt-14 pt-10 border-t border-ink-200/60"
            >
              {[
                { val: "45+", label: "Years Experience" },
                { val: "10k+", label: "Projects Completed" },
                { val: "100%", label: "Quality Certified" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-serif text-3xl font-bold text-gold">{stat.val}</span>
                  <span className="text-[11px] font-semibold text-ink-500 uppercase tracking-wider mt-1">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Glass building image (Ken Burns zoom) ─── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            {/* Image frame */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl shadow-ink-900/10">
              <motion.div
                className="w-full h-full"
                animate={{ scale: [1, 1.06] }}
                transition={{ duration: 22, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80"
                  alt="Glass architecture facade — Rajendra Glass House"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
              {/* Subtle bottom vignette only */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/15 to-transparent pointer-events-none" />
            </div>

            {/* Floating: Saint Gobain badge */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-8 -left-5 bg-white rounded-2xl px-4 py-3 shadow-xl border border-ink-100 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-[#003087] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-[9px] tracking-tight">SG</span>
              </div>
              <div>
                <h2 className="text-[11px] font-bold text-ink-950 leading-tight">Saint Gobain glass dealer Coimbatore</h2>
                <p className="text-[9px] text-ink-700 font-medium">Authorized Dealer · Since 1977</p>
              </div>
            </motion.div>

            {/* Floating: Premium Quality badge */}
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-6 -right-4 bg-gold text-ink-950 rounded-xl px-4 py-2.5 shadow-lg shadow-gold/25"
            >
              <p className="text-[10px] font-bold tracking-wider uppercase">Premium</p>
              <p className="text-[9px] font-medium opacity-85">Quality Glass</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
