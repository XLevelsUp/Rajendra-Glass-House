"use client";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";
import { Box, Typography } from "@mui/material";


export function BrandPartners() {
  return (
    <Box component="section" className="py-5 bg-white border-y border-ink-100">
      <Box className="max-w-7xl mx-auto px-6 lg:px-10">
        <AnimatedContainer className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-6 sm:gap-10">

          {/* Label */}
          <Typography component="span" className="text-[10px] tracking-[0.25em] uppercase text-ink-500 font-semibold flex-shrink-0 whitespace-nowrap">
            Official Partner
          </Typography>

          <Box className="w-px h-6 bg-ink-200 hidden sm:block flex-shrink-0" />

          {/* Partner badge */}
          <Box className="flex items-center gap-4">
            <Box className="flex items-center gap-4 px-5 py-3 bg-[#F8FAFC] border border-ink-100 rounded-xl">
              {/* SG logo mark */}
              <Box className="w-9 h-9 rounded-lg bg-[#003087] flex items-center justify-center flex-shrink-0">
                <Typography component="span" className="text-white font-black text-sm tracking-tight leading-none">SG</Typography>
              </Box>
              <Box>
                <Typography variant="h2" component="h2" className="font-serif font-bold text-ink-900 text-sm leading-tight">Saint Gobain Glass</Typography>
                <Typography component="span" className="block text-[10px] text-ink-500 font-semibold tracking-widest uppercase mt-0.5">
                  Authorized Dealer · Since 1977
                </Typography>
              </Box>
            </Box>

            <Typography component="p" className="text-sm text-ink-500 font-medium leading-relaxed max-w-xs hidden md:block">
              We supply 100% authentic glass from Saint Gobain, the world&apos;s leading glass manufacturer.
            </Typography>
          </Box>

          {/* 5-star trust signal */}
          <Box className="ml-auto hidden lg:flex items-center gap-2.5 pl-10 border-l border-ink-100">
            <Box className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 text-gold fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </Box>
            <Typography component="span" className="text-[11px] font-semibold text-ink-600">4.9 · Google Reviews</Typography>
          </Box>

        </AnimatedContainer>
      </Box>
    </Box>
  );
}
