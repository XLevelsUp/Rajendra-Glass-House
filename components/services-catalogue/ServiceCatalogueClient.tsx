"use client";
import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { SERVICES } from "@/lib/services-data";
import { ServiceFilterTabs } from "./ServiceFilterTabs";
import { ServiceCard } from "./ServiceCard";
import { SearchX } from "lucide-react";

function CatalogueContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Initialize category from URL query parameter if present
  const [activeCategory, setActiveCategory] = useState<string>("all");

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam === "residential" || categoryParam === "commercial") {
      setActiveCategory(categoryParam);
    } else {
      setActiveCategory("all");
    }
  }, [searchParams]);

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    // Update URL query parameters seamlessly
    const params = new URLSearchParams(window.location.search);
    if (id === "all") {
      params.delete("category");
    } else {
      params.set("category", id);
    }
    router.push(`/services?${params.toString()}`, { scroll: false });
  };

  // Filtered services
  const filtered = useMemo(() => {
    if (activeCategory === "all") return SERVICES;
    return SERVICES.filter(
      (s) => s.categoryId === activeCategory || s.categoryId === "both"
    );
  }, [activeCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
      {/* ── Filter Bar ────────────────────────────────────────── */}
      <div className="sticky top-[68px] lg:top-[76px] z-30 -mx-4 sm:-mx-6 lg:-mx-10 px-4 sm:px-6 lg:px-10 bg-[#F4F5F7]/95 backdrop-blur-md border-b border-ink-200">
        <ServiceFilterTabs active={activeCategory} onChange={handleCategoryChange} />
      </div>

      {/* ── Count label ─────────────────────────────────────────── */}
      <motion.p
        key={activeCategory}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="text-[11px] font-bold tracking-[0.14em] uppercase text-ink-600 mt-8 mb-6"
      >
        {filtered.length} {filtered.length === 1 ? "service" : "services"} found
      </motion.p>

      {/* ── Services Grid ───────────────────────────────────────── */}
      {filtered.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center py-32 gap-4 text-center"
        >
          <SearchX className="w-10 h-10 text-ink-300" />
          <p className="text-ink-600 font-medium">No services found in this category.</p>
          <button
            onClick={() => handleCategoryChange("all")}
            className="text-[11px] font-bold tracking-[0.1em] uppercase text-gold hover:text-gold-dark underline underline-offset-4 transition-colors cursor-pointer"
          >
            View All Services
          </button>
        </motion.div>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}

export function ServiceCatalogueClient() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 py-32 text-center text-ink-600 font-medium">
        Loading services catalogue...
      </div>
    }>
      <CatalogueContent />
    </Suspense>
  );
}
