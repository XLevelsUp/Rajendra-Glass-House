"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Home, Building2, ChevronDown } from "lucide-react";

/* ─── Animation helpers ──────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

/* ─── Static heading words for stagger animation ─────────────────── */
const headingWords = ["Premium", "Glass", "&", "Mirror", "Solutions"];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  /* ── Scroll-based parallax (content + overlay only — image is static for LCP) ── */
  const { scrollY } = useScroll();
  const contentY        = useTransform(scrollY, [0, 400], ["0%", "12%"]);
  const overlayOpacity  = useTransform(scrollY, [0, 400], [0, 0.35]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden bg-ink-950 flex flex-col"
      aria-label="Hero — Rajendra Glass House"
    >
      {/* ══════════════════════════════════════════════════════
          BACKGROUND: CSS Ken Burns only — zero JS dependency, zero LCP penalty
          Image must NOT be inside any motion.div or will-change wrapper
      ══════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-[-6%] hero-kenburns">
          <Image
            src="/hero.webp"
            alt="Premium glass architecture — Rajendra Glass House Coimbatore"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          GRADIENT OVERLAYS
      ══════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/50 to-ink-950/20 pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/80 via-ink-950/30 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-ink-950/65 to-transparent pointer-events-none z-10" />
      <motion.div
        className="absolute inset-0 bg-ink-950 pointer-events-none z-10"
        style={{ opacity: overlayOpacity }}
      />

      {/* ══════════════════════════════════════════════════════
          MAIN CONTENT — static, left-aligned
      ══════════════════════════════════════════════════════ */}
      <motion.div
        className="relative z-20 flex-1 flex items-center"
        style={{ y: contentY }}
      >
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-16 py-40 text-left">

          {/* Kicker */}
          <motion.div {...fadeUp(0.05)}>
            <div className="inline-flex items-center gap-2.5 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 animate-pulse" />
              <span className="text-[11px] font-bold tracking-[0.24em] uppercase text-gold">
                Coimbatore&apos;s Glass Shop Since 1977 · RS Puram, Tamil Nadu
              </span>
            </div>
          </motion.div>

          {/* Heading — word-stagger reveal */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            }}
            className="font-serif font-bold text-white leading-[1.08] tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
          >
            {headingWords.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block"
                variants={{
                  hidden:  { opacity: 0, y: 28, filter: "blur(4px)" },
                  visible: { opacity: 1, y: 0,  filter: "blur(0px)", transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.h1>

          {/* Gold rule */}
          <motion.div
            {...fadeUp(0.45)}
            className="mt-7 mb-7 h-[2px] w-16 bg-gradient-to-r from-gold via-gold/60 to-transparent rounded-full"
          />

          {/* Description — static */}
          <motion.p
            {...fadeUp(0.3)}
            className="text-white/70 text-base md:text-[1.05rem] leading-relaxed max-w-xl font-medium"
          >
            Coimbatore&apos;s best glass shop for toughened glass, shower enclosures, glass railings,
            office partitions, and LED mirrors — serving residential and commercial spaces across South India.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...fadeUp(0.4)}
            className="mt-10 flex flex-col sm:flex-row items-start gap-4"
          >
            <Link
              href="/products"
              className="group inline-flex items-center gap-2.5 px-8 py-3.5 bg-gold text-ink-950 text-[13px] font-black tracking-[0.12em] uppercase hover:bg-gold-dark transition-colors duration-300 shadow-xl shadow-black/30 hover:-translate-y-0.5 transition-transform"
            >
              Explore Products
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/25 text-white/70 text-[13px] font-semibold tracking-wide uppercase hover:border-gold/60 hover:text-gold transition-all duration-300 backdrop-blur-sm bg-white/5"
            >
              Get a Quote
            </Link>
          </motion.div>

          {/* ── Category Links — Residential & Commercial → /services ── */}
          <motion.div {...fadeUp(0.55)} className="mt-14">
            <p className="text-white/35 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
              Explore by Category
            </p>
            <div className="flex gap-3">
              <Link
                href="/services?category=residential"
                className="flex items-center gap-2 px-6 py-2.5 text-[11px] font-bold tracking-[0.14em] uppercase transition-all duration-300 border backdrop-blur-sm bg-white/5 border-white/15 text-white/55 hover:bg-gold/15 hover:border-gold/60 hover:text-gold"
              >
                <Home size={12} />
                Residential
              </Link>
              <Link
                href="/services?category=commercial"
                className="flex items-center gap-2 px-6 py-2.5 text-[11px] font-bold tracking-[0.14em] uppercase transition-all duration-300 border backdrop-blur-sm bg-white/5 border-white/15 text-white/55 hover:bg-gold/15 hover:border-gold/60 hover:text-gold"
              >
                <Building2 size={12} />
                Commercial
              </Link>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* ── Stats row — bottom strip ──────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.7 }}
        className="relative z-20 border-t border-white/10 backdrop-blur-sm bg-ink-950/30"
      >
        <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-center gap-10 md:gap-20">
          {[
            { value: "Est. 1977", label: "Serving Since" },
            { value: "45+",      label: "Years of Craft" },
            { value: "10k+",     label: "Projects Done" },
            { value: "100%",     label: "Quality Assured" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <span className="font-serif font-bold text-gold text-xl leading-none">{s.value}</span>
              <span className="text-white/40 text-[10px] uppercase tracking-widest mt-1 font-semibold whitespace-nowrap">{s.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Scroll cue ───────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-1.5 text-white/25"
      >
        <ChevronDown size={15} className="animate-bounce" />
      </motion.div>

    </section>
  );
}
