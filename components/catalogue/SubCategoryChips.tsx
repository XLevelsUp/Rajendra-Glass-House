"use client";
import { motion, AnimatePresence } from "framer-motion";
import { type SubCategory } from "@/lib/products-data";
import { cn } from "@/lib/utils";

interface SubCategoryChipsProps {
  subCategories: SubCategory[];
  active: string | null;
  onChange: (id: string | null) => void;
}

export function SubCategoryChips({ subCategories, active, onChange }: SubCategoryChipsProps) {
  return (
    <AnimatePresence>
      {subCategories.length > 0 && (
        <motion.div
          key="sub-chips"
          initial={{ opacity: 0, height: 0, y: -8 }}
          animate={{ opacity: 1, height: "auto", y: 0 }}
          exit={{ opacity: 0, height: 0, y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <div className="flex flex-wrap gap-2 pt-4" role="group" aria-label="Sub-category filters">
            {/* All sub-categories chip */}
            <button
              onClick={() => onChange(null)}
              className={cn(
                "flex-shrink-0 px-4 py-1.5 text-[10px] font-semibold tracking-[0.1em] uppercase transition-all duration-200 cursor-pointer rounded-full border",
                active === null
                  ? "bg-gold text-ink-950 border-gold shadow-sm shadow-gold/30"
                  : "bg-transparent text-ink-500 border-ink-200 hover:border-gold/60 hover:text-ink-800"
              )}
            >
              All
            </button>

            {subCategories.map((sub) => {
              const isActive = active === sub.id;
              return (
                <button
                  key={sub.id}
                  onClick={() => onChange(isActive ? null : sub.id)}
                  className={cn(
                    "flex-shrink-0 px-4 py-1.5 text-[10px] font-semibold tracking-[0.1em] uppercase transition-all duration-200 cursor-pointer rounded-full border",
                    isActive
                      ? "bg-gold text-ink-950 border-gold shadow-sm shadow-gold/30"
                      : "bg-transparent text-ink-500 border-ink-200 hover:border-gold/60 hover:text-ink-800"
                  )}
                >
                  {sub.label}
                </button>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
