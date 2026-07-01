"use client";
import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CATEGORIES, PRODUCTS } from "@/lib/products-data";
import { CategoryTabs } from "./CategoryTabs";
import { SubCategoryChips } from "./SubCategoryChips";
import { ProductCard } from "./ProductCard";
import { SearchX } from "lucide-react";

export function CatalogueClient() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null);

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setActiveSubCategory(null);
  };

  const currentCategory = CATEGORIES.find((c) => c.id === activeCategory);
  const subCategories = currentCategory?.subCategories ?? [];

  const filtered = useMemo(() => {
    if (activeCategory === "all") return PRODUCTS;
    const byCat = PRODUCTS.filter((p) => p.categoryId === activeCategory);
    if (!activeSubCategory) return byCat;
    return byCat.filter((p) => p.subCategoryId === activeSubCategory);
  }, [activeCategory, activeSubCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10">

      {/* ── Filter Bar — sticky, underline tabs ─────────────────── */}
      <div className="sticky top-[68px] lg:top-[76px] z-30 -mx-4 sm:-mx-6 lg:-mx-10 px-4 sm:px-6 lg:px-10 bg-[#F4F5F7]/95 backdrop-blur-md border-b border-ink-200">
        <CategoryTabs
          categories={CATEGORIES}
          active={activeCategory}
          onChange={handleCategoryChange}
        />
        <SubCategoryChips
          subCategories={subCategories}
          active={activeSubCategory}
          onChange={setActiveSubCategory}
        />
      </div>

      {/* ── Count label ─────────────────────────────────────────── */}
      <motion.p
        key={`${activeCategory}-${activeSubCategory}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="text-[11px] font-bold tracking-[0.14em] uppercase text-ink-600 mt-8 mb-6"
      >
        {filtered.length} {filtered.length === 1 ? "product" : "products"}
      </motion.p>

      {/* ── Grid ────────────────────────────────────────────────── */}
      {filtered.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center py-32 gap-4 text-center"
        >
          <SearchX className="w-10 h-10 text-ink-300" />
          <p className="text-ink-600 font-medium">No products in this category yet.</p>
          <button
            onClick={() => handleCategoryChange("all")}
            className="text-[11px] font-bold tracking-[0.1em] uppercase text-gold hover:text-gold-dark underline underline-offset-4 transition-colors cursor-pointer"
          >
            View All Products
          </button>
        </motion.div>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
