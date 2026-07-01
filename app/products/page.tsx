import type { Metadata } from "next";
import { CatalogueClient } from "@/components/catalogue/CatalogueClient";
import { FAQ } from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Glass Products Catalogue | Toughened Glass, Mirrors, Float Glass & More in Coimbatore",
  description:
    "Browse Rajendra Glass House's complete glass catalogue in Coimbatore — toughened glass, tempered glass, bathroom mirrors, wall mirrors, float glass, glass doors, LED mirrors, shower enclosures & more. Request a quote instantly.",
  keywords: [
    "toughened glass",
    "tempered glass",
    "bathroom mirror",
    "wall mirror",
    "glass partition",
    "shower enclosure",
    "glass railing",
    "LED mirror",
    "float glass",
    "glass doors Coimbatore",
    "glass suppliers Tamil Nadu",
    "custom glass cutting in Coimbatore",
    "glass shop in Coimbatore",
  ],
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#F4F5F7]">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white border-b border-ink-200">

        {/* Radial gold accent — top right */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 55% 70% at 100% 0%, rgba(201,168,76,0.10) 0%, transparent 65%)",
          }}
        />

        {/* Thin gold line accent — left side */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold/0 via-gold/60 to-gold/0" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-12">

          {/* Kicker */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold" />
            <span className="text-[10px] font-black tracking-[0.35em] uppercase text-gold">
              Glass Products in Coimbatore
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">

            {/* Heading */}
            <div>
              <h1 className="font-serif text-[2.5rem] md:text-[3.2rem] lg:text-[4rem] font-bold text-ink-950 leading-[1.05] tracking-tight">
                Our{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(120deg, #8B6914 0%, #C9A84C 40%, #DCC164 70%, #B8922A 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Collection
                </span>
              </h1>
              <p className="text-ink-500 text-[0.9375rem] font-medium mt-4 max-w-lg leading-relaxed">
                From toughened glass and tempered glass to bathroom mirrors, LED mirrors, float glass, glass doors, and custom glass cutting — everything you need, crafted and installed with care.
              </p>
            </div>

            {/* Stats — right aligned */}
            <div className="flex gap-10 md:pb-1 flex-shrink-0">
              {[
                { value: "45+", label: "Years" },
                { value: "500+", label: "Projects" },
                { value: "6", label: "Categories" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-serif text-[2rem] font-bold text-ink-950 leading-none">{s.value}</p>
                  <div className="w-full h-px bg-gold/50 my-1.5" />
                  <p className="text-[9px] font-black tracking-[0.2em] uppercase text-ink-400">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Catalogue ─────────────────────────────────────────────── */}
      <CatalogueClient />

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <FAQ />
    </div>
  );
}
