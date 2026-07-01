import type { Metadata } from "next";
import Link from "next/link";
import { ServiceCatalogueClient } from "@/components/services-catalogue/ServiceCatalogueClient";
import { FinishingServicesGrid } from "@/components/services-catalogue/FinishingServicesGrid";
import { FAQ } from "@/components/sections/FAQ";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Glass Installation Services in Coimbatore | Toughened Glass, Shower Enclosures & Glass Railing",
  description:
    "Explore Rajendra Glass House's installation services in Coimbatore — custom glass cutting, shower enclosures, glass railings, staircase glass, structural glazing, office partitions & more. Free site visits included.",
  keywords: [
    "glass installation Coimbatore",
    "custom glass cutting in Coimbatore",
    "shower enclosure",
    "glass railing",
    "glass partition",
    "toughened glass",
    "glass suppliers Tamil Nadu",
    "glass shop in Coimbatore",
  ],
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F4F5F7]">
      {/* ── Hero — lean & image-forward ── */}
      <section className="relative overflow-hidden bg-white border-b border-ink-200">
        {/* Radial gold accent */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-14">
          {/* Kicker */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold" />
            <span className="text-[10px] font-black tracking-[0.35em] uppercase text-gold">
              Installation &amp; Custom Fitting
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
                  Services
                </span>
              </h1>
              <p className="text-ink-500 text-[0.9375rem] font-medium mt-4 max-w-lg leading-relaxed">
                Precision installation for every glass project — from custom glass cutting and shower enclosures to structural glazing and glass railings. Free site visits included with every service.
              </p>
            </div>

            {/* Stats — right aligned */}
            <div className="flex gap-10 md:pb-1 flex-shrink-0">
              {[
                { value: "Free", label: "Site Visits" },
                { value: "Included", label: "Fit & Finish" },
                { value: "Lifetime", label: "Support" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-serif text-xl md:text-2xl font-bold text-ink-950 leading-none">
                    {s.value}
                  </p>
                  <div className="w-full h-px bg-gold/50 my-1.5" />
                  <p className="text-[9px] font-black tracking-[0.2em] uppercase text-ink-400">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Catalogue Grid ── */}
      <ServiceCatalogueClient />

      {/* ── Glass Craft & Finishing Services ── */}
      <FinishingServicesGrid />

      {/* ── Call to Action (CTA) Section ── */}
      <section className="bg-white py-20 border-b border-ink-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink-950 mb-4">
            Need Custom Glass Work?
          </h2>
          <p className="text-ink-500 text-[0.9375rem] max-w-xl mx-auto font-medium mb-8">
            Get in touch with our experts to discuss your requirements, request free site visits, or get pricing for custom designs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-ink-950 text-[11px] font-black tracking-[0.2em] uppercase rounded-full transition-all duration-200 cursor-pointer shadow-md hover:shadow-gold/30 hover:-translate-y-0.5"
            >
              Get a Free Quote
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ />
    </div>
  );
}
