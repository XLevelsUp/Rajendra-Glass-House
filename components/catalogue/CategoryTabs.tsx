"use client";
import { motion, AnimatePresence } from "framer-motion";
import { type Category } from "@/lib/products-data";
import { cn } from "@/lib/utils";

interface CategoryTabsProps {
  categories: Category[];
  active: string;
  onChange: (id: string) => void;
}

export function CategoryTabs({ categories, active, onChange }: CategoryTabsProps) {
  const all = [
    { id: "all", label: "All" },
    ...categories.map((c) => ({ id: c.id, label: c.label })),
  ];

  return (
    <div
      className="flex gap-0 overflow-x-auto"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      role="tablist"
      aria-label="Product categories"
    >
      {all.map((tab) => {
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            id={`tab-${tab.id}`}
            onClick={() => onChange(tab.id)}
            className={cn(
              "relative flex-shrink-0 px-5 py-3 text-[11px] font-bold tracking-[0.14em] uppercase transition-colors duration-200 cursor-pointer whitespace-nowrap min-h-[44px]",
              isActive
                ? "text-ink-950"
                : "text-ink-600 hover:text-ink-700"
            )}
          >
            {tab.label}
            {/* Animated underline */}
            {isActive && (
              <motion.div
                layoutId="tab-underline"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full"
                transition={{ type: "spring", stiffness: 500, damping: 40 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
