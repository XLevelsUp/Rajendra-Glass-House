"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { type Product, CATEGORIES } from "@/lib/products-data";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [imgIndex, setImgIndex] = useState(0);
  const hasMultiple = product.images.length > 1;

  const category = CATEGORIES.find((c) => c.id === product.categoryId);
  const subCat = category?.subCategories.find((s) => s.id === product.subCategoryId);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIndex((i) => (i === 0 ? product.images.length - 1 : i - 1));
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIndex((i) => (i === product.images.length - 1 ? 0 : i + 1));
  };

  const contactUrl = `/contact?product=${encodeURIComponent(product.name)}`;

  return (
    <motion.div
      id={product.id}
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.05,
      }}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-ink-950/10 transition-shadow duration-300 border border-ink-100"
    >
      {/* ── Image — square for maximum visual impact ─────────── */}
      <div className={`relative aspect-square overflow-hidden ${product.imageFit === "contain" ? "bg-white p-4" : "bg-ink-100"}`}>

        <AnimatePresence mode="wait">
          <motion.div
            key={imgIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0"
          >
            <Image
              src={product.images[imgIndex]}
              alt={`${product.name} – Rajendra Glass House`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className={`transition-transform duration-700 ease-out group-hover:scale-[1.04] ${product.imageFit === "contain" ? "object-contain p-4" : "object-cover"}`}
              priority={index < 4}
            />
          </motion.div>
        </AnimatePresence>

        {/* Sub-category badge */}
        {subCat && (
          <div className="absolute top-3.5 left-3.5 z-10">
            <span className="bg-white text-ink-800 text-[9px] font-black tracking-[0.2em] uppercase px-3 py-1 rounded shadow-sm">
              {subCat.label}
            </span>
          </div>
        )}

        {/* Left / Right arrows — fade in on hover */}
        {hasMultiple && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/95 hover:bg-white text-ink-900 flex items-center justify-center shadow-md cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/95 hover:bg-white text-ink-900 flex items-center justify-center shadow-md cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}

        {/* Dot indicators */}
        {hasMultiple && (
          <div className="absolute bottom-3.5 left-0 right-0 flex justify-center gap-1.5 z-10">
            {product.images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setImgIndex(i); }}
                aria-label={`Go to image ${i + 1}`}
                className="p-3 cursor-pointer group flex items-center justify-center -mx-1.5"
              >
                <div
                  className={`rounded-full transition-all duration-200 ${
                    i === imgIndex
                      ? "bg-white w-5 h-1.5 shadow-sm"
                      : "bg-white/60 group-hover:bg-white/90 w-1.5 h-1.5"
                  }`}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── Text Content ─────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-6 md:p-7">

        {/* Product name */}
        <h3 className="font-sans text-[1.0625rem] md:text-[1.125rem] font-bold text-ink-950 leading-snug tracking-tight mb-2.5 group-hover:text-gold transition-colors duration-250">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-ink-500 text-[0.8125rem] leading-relaxed mb-5 line-clamp-2 font-medium">
          {product.description}
        </p>

        {/* ── Technical Specifications divider ── */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px flex-1 bg-gold/35" />
          <span className="text-[8.5px] font-black tracking-[0.22em] uppercase text-gold whitespace-nowrap">
            Technical Specifications
          </span>
          <div className="h-px flex-1 bg-gold/35" />
        </div>

        {/* Specs table */}
        <div className="flex-1 mb-6 space-y-0">
          {product.specs.map((spec, i) => (
            <div
              key={spec.label}
              className={`flex items-baseline justify-between py-2 text-[12px] ${
                i < product.specs.length - 1 ? "border-b border-ink-100" : ""
              }`}
            >
              <span className="text-ink-600 font-medium">{spec.label}</span>
              <span className="text-ink-800 font-bold text-right ml-6 leading-snug">{spec.value}</span>
            </div>
          ))}
        </div>

        {/* CTA — outlined → fills on hover */}
        <Link
          href={contactUrl}
          id={`enquire-${product.id}`}
          className="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-gold hover:bg-gold-dark text-ink-950 text-[10px] font-black tracking-[0.2em] uppercase rounded-full transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md hover:shadow-gold/30 hover:-translate-y-0.5 group/btn"
        >
          Enquire More
          <ArrowRight size={13} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
