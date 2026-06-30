"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServiceFilterTabsProps {
  active: string;
  onChange: (id: string) => void;
}

export function ServiceFilterTabs({ active, onChange }: ServiceFilterTabsProps) {
  const tabs = [
    { id: "all", label: "All Services" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
  ];

  return (
    <div
      className="flex gap-4 border-b border-ink-200/60 pb-px"
      role="tablist"
      aria-label="Service categories"
    >
      {tabs.map((tab) => {
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            id={`tab-${tab.id}`}
            onClick={() => onChange(tab.id)}
            className={cn(
              "relative flex-shrink-0 px-4 py-3 text-[11px] font-bold tracking-[0.14em] uppercase transition-colors duration-200 cursor-pointer whitespace-nowrap min-h-[44px]",
              isActive ? "text-ink-950" : "text-ink-400 hover:text-ink-700"
            )}
          >
            {tab.label}
            {isActive && (
              <motion.div
                layoutId="service-tab-underline"
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
